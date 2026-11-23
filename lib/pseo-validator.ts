import { TRENDING_KEYWORDS, type KeywordEntry } from './keywords-data';
import { TRENDING_SONGS, type TikTokSongData } from './songs-data';

export interface PseoValidationIssue {
  type: 'keyword' | 'song';
  slug: string;
  severity: 'error' | 'warning';
  message: string;
}

export interface PseoValidationReport {
  valid: boolean;
  totalKeywords: number;
  totalSongs: number;
  issues: PseoValidationIssue[];
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const EM_DASH_REGEX = /\u2014/;
const EMOJI_REGEX =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

function hasForbiddenCharacters(text: string): boolean {
  return EM_DASH_REGEX.test(text) || EMOJI_REGEX.test(text);
}

function validateKeywordRecord(
  entry: KeywordEntry,
  allSlugs: Set<string>,
  seenTitles: Set<string>,
  seenDescriptions: Set<string>,
  issues: PseoValidationIssue[]
): void {
  if (!SLUG_PATTERN.test(entry.slug)) {
    issues.push({
      type: 'keyword',
      slug: entry.slug,
      severity: 'error',
      message: 'Slug must be lowercase hyphen-separated ASCII.',
    });
  }

  if (seenTitles.has(entry.seoTitle.toLowerCase())) {
    issues.push({
      type: 'keyword',
      slug: entry.slug,
      severity: 'error',
      message: 'Duplicate seoTitle detected.',
    });
  }
  seenTitles.add(entry.seoTitle.toLowerCase());

  if (seenDescriptions.has(entry.seoDescription.toLowerCase())) {
    issues.push({
      type: 'keyword',
      slug: entry.slug,
      severity: 'error',
      message: 'Duplicate seoDescription detected.',
    });
  }
  seenDescriptions.add(entry.seoDescription.toLowerCase());

  if (entry.summary.trim().length < 60 || entry.contentAngles.length < 2) {
    issues.push({
      type: 'keyword',
      slug: entry.slug,
      severity: 'warning',
      message: 'Content depth is below recommended minimum.',
    });
  }

  if (!entry.lastReviewed.trim()) {
    issues.push({
      type: 'keyword',
      slug: entry.slug,
      severity: 'error',
      message: 'Missing lastReviewed date.',
    });
  }

  for (const related of entry.relatedSlugs) {
    if (!allSlugs.has(related)) {
      issues.push({
        type: 'keyword',
        slug: entry.slug,
        severity: 'error',
        message: `Broken related keyword slug: ${related}`,
      });
    }
  }

  const combinedText = [
    entry.keyword,
    entry.seoTitle,
    entry.seoDescription,
    entry.summary,
    entry.whyItMatters,
    ...entry.contentAngles,
    ...entry.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(' ');

  if (hasForbiddenCharacters(combinedText)) {
    issues.push({
      type: 'keyword',
      slug: entry.slug,
      severity: 'error',
      message: 'Forbidden em dash or emoji character found in copy.',
    });
  }
}

function validateSongRecord(
  song: TikTokSongData,
  allSlugs: Set<string>,
  seenTitles: Set<string>,
  seenDescriptions: Set<string>,
  issues: PseoValidationIssue[]
): void {
  if (!SLUG_PATTERN.test(song.slug)) {
    issues.push({
      type: 'song',
      slug: song.slug,
      severity: 'error',
      message: 'Slug must be lowercase hyphen-separated ASCII.',
    });
  }

  if (seenTitles.has(song.seoTitle.toLowerCase())) {
    issues.push({
      type: 'song',
      slug: song.slug,
      severity: 'error',
      message: 'Duplicate seoTitle detected.',
    });
  }
  seenTitles.add(song.seoTitle.toLowerCase());

  if (seenDescriptions.has(song.seoDescription.toLowerCase())) {
    issues.push({
      type: 'song',
      slug: song.slug,
      severity: 'error',
      message: 'Duplicate seoDescription detected.',
    });
  }
  seenDescriptions.add(song.seoDescription.toLowerCase());

  if (!song.lastReviewed.trim()) {
    issues.push({
      type: 'song',
      slug: song.slug,
      severity: 'error',
      message: 'Missing lastReviewed date.',
    });
  }

  for (const related of song.relatedSlugs) {
    if (!allSlugs.has(related)) {
      issues.push({
        type: 'song',
        slug: song.slug,
        severity: 'error',
        message: `Broken related song slug: ${related}`,
      });
    }
  }

  const combinedText = [
    song.title,
    song.artist,
    song.seoTitle,
    song.seoDescription,
    song.summary,
    song.useCaseGuide,
    song.editTip,
    ...song.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(' ');

  if (hasForbiddenCharacters(combinedText)) {
    issues.push({
      type: 'song',
      slug: song.slug,
      severity: 'error',
      message: 'Forbidden em dash or emoji character found in copy.',
    });
  }
}

export function validatePseoCatalog(): PseoValidationReport {
  const issues: PseoValidationIssue[] = [];

  const keywordSlugs = new Set<string>();
  for (const k of TRENDING_KEYWORDS) {
    if (keywordSlugs.has(k.slug)) {
      issues.push({
        type: 'keyword',
        slug: k.slug,
        severity: 'error',
        message: 'Duplicate keyword slug.',
      });
    }
    keywordSlugs.add(k.slug);
  }

  const songSlugs = new Set<string>();
  for (const s of TRENDING_SONGS) {
    if (songSlugs.has(s.slug)) {
      issues.push({
        type: 'song',
        slug: s.slug,
        severity: 'error',
        message: 'Duplicate song slug.',
      });
    }
    songSlugs.add(s.slug);
  }

  const seenKeywordTitles = new Set<string>();
  const seenKeywordDescriptions = new Set<string>();
  for (const k of TRENDING_KEYWORDS) {
    validateKeywordRecord(
      k,
      keywordSlugs,
      seenKeywordTitles,
      seenKeywordDescriptions,
      issues
    );
  }

  const seenSongTitles = new Set<string>();
  const seenSongDescriptions = new Set<string>();
  for (const s of TRENDING_SONGS) {
    validateSongRecord(
      s,
      songSlugs,
      seenSongTitles,
      seenSongDescriptions,
      issues
    );
  }

  const hasErrors = issues.some((issue) => issue.severity === 'error');

  return {
    valid: !hasErrors,
    totalKeywords: TRENDING_KEYWORDS.length,
    totalSongs: TRENDING_SONGS.length,
    issues,
  };
}