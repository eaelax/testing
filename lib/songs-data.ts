import type { LanguageCode } from './i18n/types';

export type SongGenreKey =
  | 'pop'
  | 'dance'
  | 'hiphop'
  | 'chill'
  | 'cinematic'
  | 'comedy';

export type SongMomentumKey = 'breakout' | 'rising' | 'steady' | 'evergreen';

export type SongUsageTierKey =
  | 'viral_staple'
  | 'high_rotation'
  | 'creator_classic'
  | 'niche_favorite';

export interface SongFaq {
  question: string;
  answer: string;
}

export interface TikTokSongData {
  slug: string;
  title: string;
  artist: string;
  genre: SongGenreKey;
  momentum: SongMomentumKey;
  usageTier: SongUsageTierKey;
  soundType: 'artist' | 'original';
  durationSec: number;
  bpm: number;
  hashtags: string[];
  suggestedCreators: string[];
  relatedSlugs: string[];
  summary: string;
  useCaseGuide: string;
  editTip: string;
  seoTitle: string;
  seoDescription: string;
  lastReviewed: string;
  faqs: SongFaq[];
}

export const TRENDING_SONGS: TikTokSongData[] = [
  {
    slug: 'm-to-the-b-sophie-aspin-send',
    title: 'M to the B (Soph Aspin Send)',
    artist: 'Millie B',
    genre: 'hiphop',
    momentum: 'evergreen',
    usageTier: 'viral_staple',
    soundType: 'artist',
    durationSec: 15,
    bpm: 140,
    hashtags: ['#lipSync', '#throwback', '#tiktoksound', '#beatdrop'],
    suggestedCreators: ['bellapoarch', 'charlidamelio'],
    relatedSlugs: [
      'savage-love-jawsh-685',
      'original-sound-silent-reaction-beat',
    ],
    summary:
      'High-energy UK grime rhythm widely used for rhythmic facial expressions, close-up lip-sync timing, and fast transition cuts.',
    useCaseGuide:
      'Best suited for tight camera framing, clean beat-synced head nods, and before-and-after outfit or makeup reveals.',
    editTip:
      'Cut your first clip right on beat 4 before the vocal hook starts to hold viewer retention past the opening three seconds.',
    seoTitle: 'M to the B (Soph Aspin Send) - TikTok Song & MP3 Guide',
    seoDescription:
      'Explore how creators use M to the B by Millie B on TikTok, view sound details, timing tips, and extract clean MP3 audio from public clips.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'What video style fits M to the B best?',
        answer:
          'Close-up lip-sync videos, beat-matched camera zooms, and short throwback transformation clips work best with this 15-second rhythm.',
      },
      {
        question: 'Can I save the audio from a public video using this sound?',
        answer:
          'Yes. Search any public creator clip that uses this track on Tik Profiles Viewer and click Download Audio (MP3).',
      },
    ],
  },
  {
    slug: 'savage-love-jawsh-685',
    title: 'Savage Love (Laxed - Siren Beat)',
    artist: 'Jawsh 685 & Jason Derulo',
    genre: 'dance',
    momentum: 'evergreen',
    usageTier: 'viral_staple',
    soundType: 'artist',
    durationSec: 18,
    bpm: 150,
    hashtags: ['#dancechallenge', '#choreography', '#popdance', '#viralmusic'],
    suggestedCreators: ['jasonderulo', 'charlidamelio', 'addisonre'],
    relatedSlugs: [
      'm-to-the-b-sophie-aspin-send',
      'say-so-doja-cat-dance-cut',
    ],
    summary:
      'Upbeat island-inspired synth beat paired with synchronized group choreography, family dance clips, and summer travel reels.',
    useCaseGuide:
      'Works cleanly for two-person choreography, outdoor lifestyle recaps, and step-by-step dance tutorials.',
    editTip:
      'Record at 60fps in bright daylight so quick arm movements stay crisp after upload compression.',
    seoTitle: 'Savage Love (Laxed - Siren Beat) - TikTok Sound Trends',
    seoDescription:
      'Check Savage Love TikTok sound details, BPM, choreography ideas, related tracks, and MP3 extraction workflow.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Why does Savage Love remain popular on TikTok?',
        answer:
          'Its steady 150 BPM siren melody is easy to follow for beginner choreography and upbeat montage edits.',
      },
      {
        question: 'Which creators are associated with this sound?',
        answer:
          'Jason Derulo (@jasonderulo) and dance creators like Charli D’Amelio helped popularize variations of the routine.',
      },
    ],
  },
  {
    slug: 'say-so-doja-cat-dance-cut',
    title: 'Say So (TikTok Dance Cut)',
    artist: 'Doja Cat',
    genre: 'pop',
    momentum: 'steady',
    usageTier: 'creator_classic',
    soundType: 'artist',
    durationSec: 16,
    bpm: 111,
    hashtags: ['#discopop', '#ootd', '#grwm', '#danceclassic'],
    suggestedCreators: ['charlidamelio', 'addisonre'],
    relatedSlugs: [
      'savage-love-jawsh-685',
      'sunlit-morning-aesthetic-lofi',
    ],
    summary:
      'Groovy retro-disco pop loop commonly chosen for Get Ready With Me clips, outfit showcases, and relaxed smooth transitions.',
    useCaseGuide:
      'Ideal for fashion lookbooks, weekend vlog intros, and smooth mirror transitions synced to the snare.',
    editTip:
      'Use warm lighting and keep on-screen text minimal in the lower third so viewers focus on the transition.',
    seoTitle: 'Say So (TikTok Dance Cut) - Sound Info & Usage Guide',
    seoDescription:
      'Discover Say So TikTok sound specs, tempo, creator format ideas, and how to save clean audio from public posts.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'What niches use Say So most often?',
        answer:
          'Fashion, beauty GRWM routines, and retro lifestyle edits frequently pair with this track.',
      },
      {
        question: 'How long is the standard TikTok cut?',
        answer:
          'Most creator routines use the 16-second chorus loop at roughly 111 BPM.',
      },
    ],
  },
  {
    slug: 'sunlit-morning-aesthetic-lofi',
    title: 'Sunlit Morning Coffee Loop',
    artist: 'Lo-Fi Studio Collective',
    genre: 'chill',
    momentum: 'rising',
    usageTier: 'high_rotation',
    soundType: 'original',
    durationSec: 28,
    bpm: 86,
    hashtags: ['#morningroutine', '#aesthetic', '#studytok', '#cozyvibes'],
    suggestedCreators: ['mkbhd', 'bayashi.tiktok'],
    relatedSlugs: [
      'crispy-kitchen-asmr-prep',
      'clean-desk-minimal-synth',
    ],
    summary:
      'Warm Rhodes piano and soft vinyl texture favored by productivity, desk setup, coffee recipe, and slow-living creators.',
    useCaseGuide:
      'Great background layer for voiceovers, study-with-me timelapses, and calm kitchen routines.',
    editTip:
      'Lower the music track to around 18 percent volume behind spoken narration for clear voice intelligibility.',
    seoTitle: 'Sunlit Morning Coffee Loop - Chill TikTok Audio Trend',
    seoDescription:
      'Explore the Sunlit Morning Coffee Loop chill sound on TikTok with pacing tips, matching niches, and MP3 export options.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Does this chill loop work under spoken tutorials?',
        answer:
          'Yes. Its soft mid-range frequencies sit cleanly behind voiceovers without clashing with speech.',
      },
      {
        question: 'What clip length pairs best?',
        answer:
          'Clips between 20 and 30 seconds allow smooth 3-shot storytelling sequences.',
      },
    ],
  },
  {
    slug: 'crispy-kitchen-asmr-prep',
    title: 'Crispy Kitchen Prep & Sizzle',
    artist: 'Chef Audio Lab',
    genre: 'chill',
    momentum: 'breakout',
    usageTier: 'high_rotation',
    soundType: 'original',
    durationSec: 22,
    bpm: 94,
    hashtags: ['#foodtiktok', '#asmrcooking', '#easyrecipe', '#cheflife'],
    suggestedCreators: ['bayashi.tiktok', 'cznburak', 'gordonramsayofficial'],
    relatedSlugs: [
      'sunlit-morning-aesthetic-lofi',
      'original-sound-silent-reaction-beat',
    ],
    summary:
      'Rhythmic percussive chopping and pan-sizzle cadence built for fast-cut recipe reels and close-up plating shots.',
    useCaseGuide:
      'Built for 15-to-25-second cooking tutorials where every knife chop lands cleanly on the beat.',
    editTip:
      'Keep raw microphone sound enabled at 35 percent during crunch and pour shots to boost watch time.',
    seoTitle: 'Crispy Kitchen Prep & Sizzle - TikTok Food Sound Guide',
    seoDescription:
      'See how food creators sync recipe cuts to Crispy Kitchen Prep & Sizzle on TikTok, plus tips and creator examples.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Why do fast-cut cooking sounds gain traction quickly?',
        answer:
          'Crisp audio cues create strong sensory engagement and encourage viewers to replay ingredients lists.',
      },
      {
        question: 'Which food creators fit this pacing?',
        answer:
          'Fast visual chefs like @bayashi.tiktok and @cznburak frequently match visual transitions to crisp rhythm.',
      },
    ],
  },
  {
    slug: 'clean-desk-minimal-synth',
    title: 'Clean Desk Minimal Synth',
    artist: 'TechPulse Audio',
    genre: 'cinematic',
    momentum: 'rising',
    usageTier: 'high_rotation',
    soundType: 'original',
    durationSec: 24,
    bpm: 118,
    hashtags: ['#techtok', '#desksetup', '#gadgets', '#productivity'],
    suggestedCreators: ['mkbhd', 'zachking'],
    relatedSlugs: [
      'sunlit-morning-aesthetic-lofi',
      'epic-reveal-bass-riser',
    ],
    summary:
      'Crisp electronic arpeggio designed for smartphone unboxings, AI tool demos, keyboard sound tests, and minimalist desk tours.',
    useCaseGuide:
      'Pairs naturally with overhead B-roll, macro lens pans, and 3-step software walkthroughs.',
    editTip:
      'Match feature text callouts to every two-bar synth pulse to make technical reviews easy to scan.',
    seoTitle: 'Clean Desk Minimal Synth - TikTok Tech Sound Guide',
    seoDescription:
      'Use Clean Desk Minimal Synth for tech reviews and desk setup reels on TikTok. View tempo, editing tips, and related sounds.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Is this track suitable for AI and software demos?',
        answer:
          'Yes. Its steady 118 BPM pulse keeps screen recordings lively without distracting from UI captions.',
      },
      {
        question: 'Can I preview creators in the tech niche?',
        answer:
          'Yes, inspect tech reviewers like @mkbhd directly through Tik Profiles Viewer.',
      },
    ],
  },
  {
    slug: 'epic-reveal-bass-riser',
    title: 'Epic Reveal Bass Riser',
    artist: 'Motion FX Sound',
    genre: 'cinematic',
    momentum: 'breakout',
    usageTier: 'high_rotation',
    soundType: 'original',
    durationSec: 14,
    bpm: 128,
    hashtags: ['#transition', '#vfx', '#magic', '#gymmotivation'],
    suggestedCreators: ['zachking', 'mrbeast', 'demibagby'],
    relatedSlugs: [
      'clean-desk-minimal-synth',
      'high-tempo-sprint-phonk',
    ],
    summary:
      'Short tension-building riser ending in a clean sub-bass impact for magic illusions, PR gym lifts, and dramatic transformations.',
    useCaseGuide:
      'Ideal when building curiosity for 6 seconds before revealing an unexpected outcome or stunt.',
    editTip:
      'Hold a subtle slow-zoom during the riser and snap to full wide frame right on the impact drop.',
    seoTitle: 'Epic Reveal Bass Riser - TikTok Transition Sound Guide',
    seoDescription:
      'Learn how creators use Epic Reveal Bass Riser for magic edits, stunts, and dramatic reveals on TikTok.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'How long is the buildup before the drop?',
        answer:
          'The riser builds for roughly 6 seconds before hitting a sharp impact cue ideal for a visual reveal.',
      },
      {
        question: 'What content niches use this sound?',
        answer:
          'Visual illusion creators, fitness milestones, and challenge videos rely heavily on riser drops.',
      },
    ],
  },
  {
    slug: 'high-tempo-sprint-phonk',
    title: 'High Tempo Sprint Phonk',
    artist: 'GymBeat Collective',
    genre: 'hiphop',
    momentum: 'rising',
    usageTier: 'viral_staple',
    soundType: 'artist',
    durationSec: 20,
    bpm: 136,
    hashtags: ['#gymtok', '#workout', '#gamingclips', '#esports'],
    suggestedCreators: ['demibagby', 'ninja'],
    relatedSlugs: [
      'epic-reveal-bass-riser',
      'm-to-the-b-sophie-aspin-send',
    ],
    summary:
      'Driving cowbell and heavy 808 bass groove popular across calisthenics edits, esports clutch highlights, and car photography reels.',
    useCaseGuide:
      'Fits high-adrenaline training sets, gaming montage eliminations, and fast-paced sports highlights.',
    editTip:
      'Sync slow-motion impact frames right at the start of the bass drop for maximum visual punch.',
    seoTitle: 'High Tempo Sprint Phonk - TikTok Workout & Gaming Sound',
    seoDescription:
      'Explore High Tempo Sprint Phonk trends for gym, sports, and gaming TikTok clips with BPM and editing tips.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Why is Phonk so common in gaming and fitness edits?',
        answer:
          'Its punchy 136 BPM bassline matches fast highlight cuts and high-energy athletic pacing.',
      },
      {
        question: 'Can I download MP3 tracks from public workout reels?',
        answer:
          'Yes, open any public creator video on Tik Profiles Viewer and use Download Audio (MP3).',
      },
    ],
  },
  {
    slug: 'original-sound-silent-reaction-beat',
    title: 'Silent Reaction Comedy Cue',
    artist: 'Comedy Loop Audio',
    genre: 'comedy',
    momentum: 'steady',
    usageTier: 'creator_classic',
    soundType: 'original',
    durationSec: 12,
    bpm: 102,
    hashtags: ['#comedy', '#reaction', '#relatable', '#funny'],
    suggestedCreators: ['khaby.lame', 'spencerx'],
    relatedSlugs: [
      'm-to-the-b-sophie-aspin-send',
      'crispy-kitchen-asmr-prep',
    ],
    summary:
      'Playful plucked comedy cue timed for deadpan reactions, stitch responses, and everyday life-hack parodies.',
    useCaseGuide:
      'Works cleanly for duet and stitch videos where facial timing tells the joke without spoken dialogue.',
    editTip:
      'Leave half a second of silence right before your punchline reaction frame to sharpen comedic contrast.',
    seoTitle: 'Silent Reaction Comedy Cue - TikTok Comedy Audio Guide',
    seoDescription:
      'Discover how comedy creators use Silent Reaction Comedy Cue for duets, stitches, and visual humor on TikTok.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Does silent reaction humor translate across languages?',
        answer:
          'Yes. Visual comedy cues work globally without subtitles, which helps clips reach international viewers.',
      },
      {
        question: 'Who exemplifies silent reaction comedy on TikTok?',
        answer:
          'Khaby Lame (@khaby.lame) popularized deadpan reaction storytelling on a global scale.',
      },
    ],
  },
  {
    slug: 'neon-arcade-victory-loop',
    title: 'Neon Arcade Victory Loop',
    artist: 'PixelWave Sound',
    genre: 'dance',
    momentum: 'breakout',
    usageTier: 'niche_favorite',
    soundType: 'original',
    durationSec: 19,
    bpm: 124,
    hashtags: ['#gaming', '#indiegames', '#retro', '#setup'],
    suggestedCreators: ['ninja', 'pokimane'],
    relatedSlugs: [
      'high-tempo-sprint-phonk',
      'clean-desk-minimal-synth',
    ],
    summary:
      'Retro 8-bit chiptune synth blended with modern punchy drums for stream recaps, game reviews, and pixel-art showcases.',
    useCaseGuide:
      'Matches live stream funny fails, indie game recommendations, and colorful RGB room tours.',
    editTip:
      'Pair bright on-screen captions with quick jump cuts every 2.5 seconds to mirror arcade pacing.',
    seoTitle: 'Neon Arcade Victory Loop - TikTok Gaming Audio Guide',
    seoDescription:
      'Explore Neon Arcade Victory Loop for TikTok gaming clips, stream highlights, and RGB setup tours.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'What type of gaming clips fit Neon Arcade Victory Loop?',
        answer:
          'Stream recaps, speedrun highlights, and nostalgic console reviews fit this upbeat 124 BPM loop.',
      },
      {
        question: 'Can I browse gaming creators here?',
        answer:
          'Yes, explore our Gaming & Esports category or search any public gamer handle directly.',
      },
    ],
  },
];

export function getSongBySlug(slug: string): TikTokSongData | undefined {
  return TRENDING_SONGS.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getRelatedSongs(song: TikTokSongData): TikTokSongData[] {
  const mapped = song.relatedSlugs
    .map((slug) => getSongBySlug(slug))
    .filter((s): s is TikTokSongData => Boolean(s));
  if (mapped.length >= 2) return mapped;
  return TRENDING_SONGS.filter((s) => s.slug !== song.slug).slice(0, 3);
}

const GENRE_LABELS: Record<LanguageCode, Record<SongGenreKey, string>> = {
  en: {
    pop: 'Pop',
    dance: 'Dance',
    hiphop: 'Hip-Hop & Phonk',
    chill: 'Chill & Lo-Fi',
    cinematic: 'Cinematic & Tech',
    comedy: 'Comedy & Reaction',
  },
  ar: {
    pop: 'بوب',
    dance: 'رقص',
    hiphop: 'هيب هوب وفونك',
    chill: 'هادئ ولو-فاي',
    cinematic: 'سينمائي وتقني',
    comedy: 'كوميديا وردود فعل',
  },
  fr: {
    pop: 'Pop',
    dance: 'Danse',
    hiphop: 'Hip-Hop & Phonk',
    chill: 'Chill & Lo-Fi',
    cinematic: 'Cinématique & Tech',
    comedy: 'Comédie & Réaction',
  },
  es: {
    pop: 'Pop',
    dance: 'Baile',
    hiphop: 'Hip-Hop y Phonk',
    chill: 'Chill y Lo-Fi',
    cinematic: 'Cinemático y Tech',
    comedy: 'Comedia y Reacción',
  },
  de: {
    pop: 'Pop',
    dance: 'Tanz',
    hiphop: 'Hip-Hop & Phonk',
    chill: 'Chill & Lo-Fi',
    cinematic: 'Cinematic & Tech',
    comedy: 'Comedy & Reaktion',
  },
  ru: {
    pop: 'Поп',
    dance: 'Танцы',
    hiphop: 'Хип-хоп и фонк',
    chill: 'Спокойная и Lo-Fi',
    cinematic: 'Кинематограф и техно',
    comedy: 'Юмор и реакции',
  },
  zh: {
    pop: '流行',
    dance: '舞蹈',
    hiphop: '嘻哈与 Phonk',
    chill: '舒缓与 Lo-Fi',
    cinematic: '电影感与科技',
    comedy: '喜剧与反应',
  },
  pt: {
    pop: 'Pop',
    dance: 'Dança',
    hiphop: 'Hip-Hop e Phonk',
    chill: 'Chill e Lo-Fi',
    cinematic: 'Cinematográfico e Tech',
    comedy: 'Comédia e Reação',
  },
  he: {
    pop: 'פופ',
    dance: 'ריקוד',
    hiphop: 'היפ-הופ ופונק',
    chill: 'צ׳יל ולו-פיי',
    cinematic: 'קולנועי וטכנולוגי',
    comedy: 'קומדיה ותגובות',
  },
  hi: {
    pop: 'पॉप',
    dance: 'डांस',
    hiphop: 'हिप-हॉप और फ़ॉन्क',
    chill: 'चिल और लो-फ़ाई',
    cinematic: 'सिनेमैटिक और टेक',
    comedy: 'कॉमेडी और रिएक्शन',
  },
};

const MOMENTUM_LABELS: Record<LanguageCode, Record<SongMomentumKey, string>> = {
  en: {
    breakout: 'Breakout',
    rising: 'Rising',
    steady: 'Steady',
    evergreen: 'Evergreen',
  },
  ar: {
    breakout: 'انطلاقة سريعة',
    rising: 'صاعد',
    steady: 'مستقر',
    evergreen: 'دائم الشعبية',
  },
  fr: {
    breakout: 'Percée',
    rising: 'En hausse',
    steady: 'Stable',
    evergreen: 'Intemporel',
  },
  es: {
    breakout: 'Despegue',
    rising: 'En alza',
    steady: 'Estable',
    evergreen: 'Clásico',
  },
  de: {
    breakout: 'Durchbruch',
    rising: 'Steigend',
    steady: 'Stabil',
    evergreen: 'Dauerbrenner',
  },
  ru: {
    breakout: 'Прорыв',
    rising: 'Растет',
    steady: 'Стабильно',
    evergreen: 'Вечная классика',
  },
  zh: {
    breakout: '爆发中',
    rising: '上升中',
    steady: '稳定',
    evergreen: '常青热门',
  },
  pt: {
    breakout: 'Destaque',
    rising: 'Em alta',
    steady: 'Estável',
    evergreen: 'Clássico',
  },
  he: {
    breakout: 'פריצה',
    rising: 'בעלייה',
    steady: 'יציב',
    evergreen: 'קלאסיקה קבועה',
  },
  hi: {
    breakout: 'तेजी से उभरता',
    rising: 'बढ़ता हुआ',
    steady: 'स्थिर',
    evergreen: 'सदाबहार',
  },
};

const USAGE_TIER_LABELS: Record<
  LanguageCode,
  Record<SongUsageTierKey, string>
> = {
  en: {
    viral_staple: 'Viral Staple',
    high_rotation: 'High Rotation',
    creator_classic: 'Creator Classic',
    niche_favorite: 'Niche Favorite',
  },
  ar: {
    viral_staple: 'أساسي رائج',
    high_rotation: 'تداول مرتفع',
    creator_classic: 'كلاسيكي للمبدعين',
    niche_favorite: 'مفضل في مجاله',
  },
  fr: {
    viral_staple: 'Incontournable viral',
    high_rotation: 'Forte rotation',
    creator_classic: 'Classique créateur',
    niche_favorite: 'Favori de niche',
  },
  es: {
    viral_staple: 'Básico viral',
    high_rotation: 'Alta rotación',
    creator_classic: 'Clásico creador',
    niche_favorite: 'Favorito de nicho',
  },
  de: {
    viral_staple: 'Viraler Dauerhit',
    high_rotation: 'Hohe Rotation',
    creator_classic: 'Creator-Klassiker',
    niche_favorite: 'Nischen-Favorit',
  },
  ru: {
    viral_staple: 'Вирусная основа',
    high_rotation: 'Частая ротация',
    creator_classic: 'Классика авторов',
    niche_favorite: 'Фаворит ниши',
  },
  zh: {
    viral_staple: '爆款常驻',
    high_rotation: '高频使用',
    creator_classic: '创作者经典',
    niche_favorite: '垂类热门',
  },
  pt: {
    viral_staple: 'Base viral',
    high_rotation: 'Alta rotação',
    creator_classic: 'Clássico criador',
    evergreen: 'Clássico',
    niche_favorite: 'Favorito de nicho',
  } as Record<SongUsageTierKey, string>,
  he: {
    viral_staple: 'להיט ויראלי מרכזי',
    high_rotation: 'שימוש תכוף',
    creator_classic: 'קלאסיקת יוצרים',
    niche_favorite: 'מועדף בנישה',
  },
  hi: {
    viral_staple: 'प्रमुख वायरल',
    high_rotation: 'उच्च उपयोग',
    creator_classic: 'क्रिएटर क्लासिक',
    niche_favorite: 'निश पसंदीदा',
  },
};

export interface SongDetailUiLabels {
  soundTypeArtist: string;
  soundTypeOriginal: string;
  keyFactsHeading: string;
  useCaseHeading: string;
  editTipHeading: string;
  hashtagsHeading: string;
  creatorsHeading: string;
  relatedHeading: string;
  faqHeading: string;
  tryViewerTitle: string;
  tryViewerSubtitle: string;
  openMp3Tool: string;
  bpmLabel: string;
  soundTypeLabel: string;
}

const SONG_DETAIL_UI: Record<LanguageCode, SongDetailUiLabels> = {
  en: {
    soundTypeArtist: 'Artist Track',
    soundTypeOriginal: 'Original Sound',
    keyFactsHeading: 'Sound Overview & Specs',
    useCaseHeading: 'Best Video Formats',
    editTipHeading: 'Editing & Pacing Tip',
    hashtagsHeading: 'Matching Hashtags',
    creatorsHeading: 'Creators in Matching Niches',
    relatedHeading: 'Related Trending Sounds',
    faqHeading: 'Frequently Asked Questions',
    tryViewerTitle: 'Inspect Creators & Extract Clean MP3 Audio',
    tryViewerSubtitle:
      'Enter any public TikTok username below to watch clips and save MP3 audio.',
    openMp3Tool: 'Open MP3 Downloader',
    bpmLabel: 'Tempo',
    soundTypeLabel: 'Sound Type',
  },
  ar: {
    soundTypeArtist: 'مقطع فنان',
    soundTypeOriginal: 'صوت أصلي',
    keyFactsHeading: 'نظرة عامة ومواصفات الصوت',
    useCaseHeading: 'أفضل قوالب الفيديو المناسبة',
    editTipHeading: 'نصيحة المونتاج والتوقيت',
    hashtagsHeading: 'الوسوم المقترحة',
    creatorsHeading: 'مبدعون في مجالات مشابهة',
    relatedHeading: 'أصوات رائجة ذات صلة',
    faqHeading: 'الأسئلة الشائعة',
    tryViewerTitle: 'افحص الحسابات واستخرج الصوت بصيغة MP3',
    tryViewerSubtitle:
      'أدخل اسم مستخدم تيك توك عام أدناه لمشاهدة المقاطع وحفظ ملف الصوت MP3.',
    openMp3Tool: 'فتح أداة تنزيل MP3',
    bpmLabel: 'الإيقاع',
    soundTypeLabel: 'نوع الصوت',
  },
  fr: {
    soundTypeArtist: 'Titre d’artiste',
    soundTypeOriginal: 'Son original',
    keyFactsHeading: 'Aperçu et spécifications',
    useCaseHeading: 'Meilleurs formats vidéo',
    editTipHeading: 'Conseil de montage et rythme',
    hashtagsHeading: 'Hashtags associés',
    creatorsHeading: 'Créateurs dans des niches proches',
    relatedHeading: 'Sons populaires associés',
    faqHeading: 'Questions fréquentes',
    tryViewerTitle: 'Inspectez un profil et extrayez l’audio MP3',
    tryViewerSubtitle:
      'Entrez un pseudo TikTok public ci-dessous pour lire les vidéos et sauvegarder le MP3.',
    openMp3Tool: 'Ouvrir l’extracteur MP3',
    bpmLabel: 'Tempo',
    soundTypeLabel: 'Type de son',
  },
  es: {
    soundTypeArtist: 'Pista de artista',
    soundTypeOriginal: 'Sonido original',
    keyFactsHeading: 'Resumen y especificaciones',
    useCaseHeading: 'Mejores formatos de video',
    editTipHeading: 'Consejo de edición y ritmo',
    hashtagsHeading: 'Hashtags relacionados',
    creatorsHeading: 'Creadores en nichos afines',
    relatedHeading: 'Sonidos populares relacionados',
    faqHeading: 'Preguntas frecuentes',
    tryViewerTitle: 'Consulta perfiles y extrae audio MP3',
    tryViewerSubtitle:
      'Ingresa cualquier usuario público abajo para ver videos y guardar audio MP3.',
    openMp3Tool: 'Abrir descargador MP3',
    bpmLabel: 'Tempo',
    soundTypeLabel: 'Tipo de sonido',
  },
  de: {
    soundTypeArtist: 'Künstler-Track',
    soundTypeOriginal: 'Original-Sound',
    keyFactsHeading: 'Sound-Überblick & Daten',
    useCaseHeading: 'Passende Videoformate',
    editTipHeading: 'Schnitt- & Timing-Tipp',
    hashtagsHeading: 'Passende Hashtags',
    creatorsHeading: 'Creator passender Nischen',
    relatedHeading: 'Verwandte Trend-Sounds',
    faqHeading: 'Häufige Fragen',
    tryViewerTitle: 'Profile prüfen & sauberes MP3 laden',
    tryViewerSubtitle:
      'Gib unten einen öffentlichen TikTok-Namen ein, um Clips anzusehen und MP3 zu speichern.',
    openMp3Tool: 'MP3-Downloader öffnen',
    bpmLabel: 'Tempo',
    soundTypeLabel: 'Sound-Typ',
  },
  ru: {
    soundTypeArtist: 'Трек артиста',
    soundTypeOriginal: 'Оригинальный звук',
    keyFactsHeading: 'Обзор и параметры звука',
    useCaseHeading: 'Лучшие форматы видео',
    editTipHeading: 'Совет по монтажу и ритму',
    hashtagsHeading: 'Подходящие хештеги',
    creatorsHeading: 'Авторы в смежных нишах',
    relatedHeading: 'Похожие трендовые звуки',
    faqHeading: 'Частые вопросы',
    tryViewerTitle: 'Открывайте профили и сохраняйте MP3',
    tryViewerSubtitle:
      'Введите открытый никнейм TikTok ниже, чтобы смотреть ролики и скачать MP3.',
    openMp3Tool: 'Открыть загрузчик MP3',
    bpmLabel: 'Темп',
    soundTypeLabel: 'Тип звука',
  },
  zh: {
    soundTypeArtist: '艺人曲目',
    soundTypeOriginal: '原创音效',
    keyFactsHeading: '音频概览与参数',
    useCaseHeading: '适用视频形式',
    editTipHeading: '剪辑与卡点建议',
    hashtagsHeading: '匹配标签',
    creatorsHeading: '相关领域创作者',
    relatedHeading: '相关热门音乐',
    faqHeading: '常见问题',
    tryViewerTitle: '查看公开主页并提取纯净 MP3',
    tryViewerSubtitle:
      '在下方输入任意公开 TikTok 用户名即可观看视频并保存 MP3 音频。',
    openMp3Tool: '打开 MP3 下载器',
    bpmLabel: '节奏',
    soundTypeLabel: '音频类型',
  },
  pt: {
    soundTypeArtist: 'Faixa de artista',
    soundTypeOriginal: 'Som original',
    keyFactsHeading: 'Resumo e especificações',
    useCaseHeading: 'Melhores formatos de vídeo',
    editTipHeading: 'Dica de edição e ritmo',
    hashtagsHeading: 'Hashtags combinando',
    creatorsHeading: 'Criadores em nichos similares',
    relatedHeading: 'Sons em alta relacionados',
    faqHeading: 'Perguntas frequentes',
    tryViewerTitle: 'Veja perfis e extraia áudio MP3',
    tryViewerSubtitle:
      'Digite um usuário público abaixo para assistir aos vídeos e salvar o MP3.',
    openMp3Tool: 'Abrir baixador MP3',
    bpmLabel: 'Tempo',
    soundTypeLabel: 'Tipo de som',
  },
  he: {
    soundTypeArtist: 'רצועת אמן',
    soundTypeOriginal: 'צליל מקורי',
    keyFactsHeading: 'סקירה ומפרט הצליל',
    useCaseHeading: 'פורמטי וידאו מתאימים',
    editTipHeading: 'טיפ עריכה וקצב',
    hashtagsHeading: 'תגיות מתאימות',
    creatorsHeading: 'יוצרים בתחומים דומים',
    relatedHeading: 'צלילים טרנדיים קשורים',
    faqHeading: 'שאלות נפוצות',
    tryViewerTitle: 'בדוק פרופילים וחלץ אודיו MP3',
    tryViewerSubtitle:
      'הזן שם משתמש ציבורי למטה כדי לצפות בסרטונים ולשמור קובץ MP3.',
    openMp3Tool: 'פתח מוריד MP3',
    bpmLabel: 'קצב',
    soundTypeLabel: 'סוג צליל',
  },
  hi: {
    soundTypeArtist: 'आर्टिस्ट ट्रैक',
    soundTypeOriginal: 'ओरिजिनल साउंड',
    keyFactsHeading: 'साउंड विवरण और स्पेक्स',
    useCaseHeading: 'सर्वोत्तम वीडियो फ़ॉर्मेट',
    editTipHeading: 'एडिटिंग और टाइमिंग सुझाव',
    hashtagsHeading: 'मेल खाते हैशटैग',
    creatorsHeading: 'समान श्रेणी के क्रिएटर्स',
    relatedHeading: 'संबंधित ट्रेंडिंग साउंड्स',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    tryViewerTitle: 'प्रोफाइल देखें और साफ MP3 ऑडियो सेव करें',
    tryViewerSubtitle:
      'क्लिप देखने और MP3 ऑडियो सेव करने के लिए नीचे कोई पब्लिक TikTok यूजरनेम दर्ज करें।',
    openMp3Tool: 'MP3 डाउनलोडर खोलें',
    bpmLabel: 'टेम्पो',
    soundTypeLabel: 'साउंड प्रकार',
  },
};

export function getLocalizedSongGenre(
  genre: SongGenreKey,
  lang: LanguageCode
): string {
  return GENRE_LABELS[lang]?.[genre] ?? GENRE_LABELS.en[genre];
}

export function getLocalizedSongMomentum(
  momentum: SongMomentumKey,
  lang: LanguageCode
): string {
  return MOMENTUM_LABELS[lang]?.[momentum] ?? MOMENTUM_LABELS.en[momentum];
}

export function getLocalizedSongUsageTier(
  tier: SongUsageTierKey,
  lang: LanguageCode
): string {
  return USAGE_TIER_LABELS[lang]?.[tier] ?? USAGE_TIER_LABELS.en[tier];
}

export function getSongDetailUiLabels(lang: LanguageCode): SongDetailUiLabels {
  return SONG_DETAIL_UI[lang] ?? SONG_DETAIL_UI.en;
}

export function getLocalizedSongSummary(
  song: TikTokSongData,
  lang: LanguageCode
): { summary: string; useCaseGuide: string; editTip: string; faqs: SongFaq[] } {
  if (lang === 'en') {
    return {
      summary: song.summary,
      useCaseGuide: song.useCaseGuide,
      editTip: song.editTip,
      faqs: song.faqs,
    };
  }

  const genreLabel = getLocalizedSongGenre(song.genre, lang);
  const momentumLabel = getLocalizedSongMomentum(song.momentum, lang);

  const templates: Record<
    Exclude<LanguageCode, 'en'>,
    {
      summary: string;
      useCaseGuide: string;
      editTip: string;
      q1: string;
      a1: string;
      q2: string;
      a2: string;
    }
  > = {
    ar: {
      summary: `مقطع صوتي من فئة ${genreLabel} (${momentumLabel}) يقدمه ${song.artist}، شائع في مقاطع الإيقاع والانتقالات السريعة لمدة ${song.durationSec} ثانية.`,
      useCaseGuide: `مناسب جداً لمقاطع ${genreLabel}، واستعراض الأفكار البصرية السريعة، والتحديات المتزامنة مع إيقاع ${song.bpm} BPM.`,
      editTip: `ابدأ المشهد الأول قبل ضربة الإيقاع مباشرة وحافظ على انتقالات قصيرة متناغمة مع سرعة ${song.bpm} BPM لرفع نسبة المشاهدة الكاملة.`,
      q1: `ما نوع الفيديوهات الأنسب لصوت ${song.title}؟`,
      a1: `يناسب هذا الصوت فئة ${genreLabel} بمدة ${song.durationSec} ثانية، خاصة الانتقالات السريعة والمقاطع القصيرة المتزامنة مع الإيقاع.`,
      q2: `كيف أحفظ صوت ${song.title} بصيغة MP3؟`,
      a2: `ابحث عن أي حساب عام يستخدم هذا المقطع في عارض الملفات ثم افتح الفيديو واضغط تنزيل الصوت (MP3).`,
    },
    fr: {
      summary: `Son de style ${genreLabel} (${momentumLabel}) par ${song.artist}, apprécié pour les montages rythmés et transitions courtes de ${song.durationSec} secondes.`,
      useCaseGuide: `Idéal pour les créateurs ${genreLabel}, les transitions nettes et les séquences calées sur un tempo de ${song.bpm} BPM.`,
      editTip: `Placez votre premier changement de plan juste sur le temps fort à ${song.bpm} BPM pour capter l’attention dès les 3 premières secondes.`,
      q1: `Quels formats conviennent le mieux à ${song.title} ?`,
      a1: `Les vidéos ${genreLabel} dynamiques de ${song.durationSec} secondes avec coupes sur le rythme obtiennent les meilleurs résultats.`,
      q2: `Puis-je extraire l’audio MP3 de ${song.title} depuis un post public ?`,
      a2: `Oui. Recherchez un créateur public ci-dessous, ouvrez la vidéo et cliquez sur Télécharger Audio (MP3).`,
    },
    es: {
      summary: `Audio de estilo ${genreLabel} (${momentumLabel}) por ${song.artist}, ideal para transiciones rápidas y clips rítmicos de ${song.durationSec} segundos.`,
      useCaseGuide: `Funciona muy bien en videos de ${genreLabel}, cambios de escena limpios y ediciones sincronizadas a ${song.bpm} BPM.`,
      editTip: `Sincroniza el primer corte justo en el golpe principal de ${song.bpm} BPM para mantener la retención en los primeros segundos.`,
      q1: `¿Qué videos combinan mejor con ${song.title}?`,
      a1: `Los clips de ${genreLabel} de unos ${song.durationSec} segundos con cortes al ritmo aprovechan mejor este sonido.`,
      q2: `¿Cómo descargo el audio MP3 de ${song.title}?`,
      a2: `Busca cualquier perfil público abajo, abre el video correspondiente y pulsa Descargar Audio (MP3).`,
    },
    de: {
      summary: `${genreLabel}-Track (${momentumLabel}) von ${song.artist}, beliebt für präzise Schnitte und kurze ${song.durationSec}-Sekunden-Clips.`,
      useCaseGuide: `Optimal für ${genreLabel}-Formate, nahtlose Übergänge und Videos im Takt von ${song.bpm} BPM.`,
      editTip: `Setze deinen ersten Bildwechsel direkt auf den Takt bei ${song.bpm} BPM, um Zuschauer in den ersten Sekunden zu halten.`,
      q1: `Welche Videos passen am besten zu ${song.title}?`,
      a1: `Kurze ${genreLabel}-Clips mit ${song.durationSec} Sekunden Länge und klaren Takt-Schnitten passen ideal.`,
      q2: `Wie speichere ich ${song.title} als MP3?`,
      a2: `Suche unten ein öffentliches Profil, öffne den Clip und wähle Audio laden (MP3).`,
    },
    ru: {
      summary: `Звук в стиле ${genreLabel} (${momentumLabel}) от ${song.artist}, популярный для динамичных переходов и роликов длиной ${song.durationSec} сек.`,
      useCaseGuide: `Отлично подходит для рубрики ${genreLabel}, быстрых визуальных склеек и монтажа в темпе ${song.bpm} BPM.`,
      editTip: `Совмещайте первую смену кадра с сильной долей ${song.bpm} BPM, чтобы удержать внимание с первых секунд.`,
      q1: `Какие видео лучше подходят под ${song.title}?`,
      a1: `Короткие ролики категории ${genreLabel} около ${song.durationSec} секунд с монтажом в такт.`,
      q2: `Как сохранить аудио ${song.title} в MP3?`,
      a2: `Найдите открытый профиль ниже, откройте видео и нажмите Скачать аудио (MP3).`,
    },
    zh: {
      summary: `由 ${song.artist} 创作的${genreLabel}风格音频（${momentumLabel}），常用于 ${song.durationSec} 秒卡点转场与节奏短视频。`,
      useCaseGuide: `适合${genreLabel}内容创作、干净利落的画面切换以及配合 ${song.bpm} BPM 节奏的创意剪辑。`,
      editTip: `建议在 ${song.bpm} BPM 的重拍位置切入首个画面转场，有助于提升前 3 秒完播率。`,
      q1: `什么类型的视频最适合使用 ${song.title}？`,
      a1: `时长约 ${song.durationSec} 秒、注重节奏卡点的${genreLabel}类视频表现最佳。`,
      q2: `如何保存使用 ${song.title} 的公开视频 MP3 音频？`,
      a2: `在下方搜索任意公开创作者主页，打开对应视频后点击“下载音频 (MP3)”即可。`,
    },
    pt: {
      summary: `Faixa de estilo ${genreLabel} (${momentumLabel}) por ${song.artist}, muito usada em transições rápidas de ${song.durationSec} segundos.`,
      useCaseGuide: `Excelente para conteúdos de ${genreLabel}, cortes sincronizados e edições no ritmo de ${song.bpm} BPM.`,
      editTip: `Alinhe o primeiro corte na batida principal de ${song.bpm} BPM para segurar a atenção nos primeiros segundos.`,
      q1: `Quais vídeos combinam melhor com ${song.title}?`,
      a1: `Clipes de ${genreLabel} com cerca de ${song.durationSec} segundos e transições no ritmo funcionam muito bem.`,
      q2: `Como baixar o áudio MP3 de ${song.title}?`,
      a2: `Pesquise um perfil público abaixo, abra o vídeo e clique em Baixar Áudio (MP3).`,
    },
    he: {
      summary: `סאונד בסגנון ${genreLabel} (${momentumLabel}) מאת ${song.artist}, פופולרי לעריכות קצב ומעברים קצרים של ${song.durationSec} שניות.`,
      useCaseGuide: `מתאים במיוחד לתוכן ${genreLabel}, מעברים חדים וסרטונים המסונכרנים לקצב ${song.bpm} BPM.`,
      editTip: `חתוך את השוט הראשון בדיוק על הקצב של ${song.bpm} BPM כדי לשמור על צפייה מלאה בשניות הראשונות.`,
      q1: `אילו סרטונים מתאימים ביותר לצליל ${song.title}?`,
      a1: `קליפים בסגנון ${genreLabel} באורך ${song.durationSec} שניות עם עריכה בקצב אחיד.`,
      q2: `איך שומרים את השמע של ${song.title} כקובץ MP3?`,
      a2: `חפש פרופיל ציבורי למטה, פתח את הסרטון ולחץ על הורד אודיו (MP3).`,
    },
    hi: {
      summary: `${song.artist} का ${genreLabel} स्टाइल साउंड (${momentumLabel}), जो ${song.durationSec} सेकंड के तेज़ कट और ट्रांज़िशन रील्स के लिए लोकप्रिय है।`,
      useCaseGuide: `${genreLabel} वीडियो, क्लीन ट्रांज़िशन और ${song.bpm} BPM की ताल पर सिंक किए गए एडिट्स के लिए उपयुक्त।`,
      editTip: `शुरुआती 3 सेकंड में दर्शकों को रोके रखने के लिए पहला कट ठीक ${song.bpm} BPM बीट पर लगाएं।`,
      q1: `${song.title} के साथ किस तरह के वीडियो सबसे अच्छे लगते हैं?`,
      a1: `${song.durationSec} सेकंड के आसपास के बीट-सिंक ${genreLabel} क्लिप्स इस साउंड के साथ शानदार काम करते हैं।`,
      q2: `मैं पब्लिक वीडियो से ${song.title} का MP3 ऑडियो कैसे सेव करूं?`,
      a2: `नीचे कोई भी पब्लिक क्रिएटर प्रोफाइल खोजें, वीडियो खोलें और ऑडियो डाउनलोड करें (MP3) पर क्लिक करें।`,
    },
  };

  const tData = templates[lang];
  return {
    summary: tData.summary,
    useCaseGuide: tData.useCaseGuide,
    editTip: tData.editTip,
    faqs: [
      { question: tData.q1, answer: tData.a1 },
      { question: tData.q2, answer: tData.a2 },
    ],
  };
}