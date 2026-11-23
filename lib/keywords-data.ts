import type { LanguageCode } from './i18n/types';

export type KeywordCategoryKey =
  | 'trending'
  | 'search'
  | 'tiktok'
  | 'related'
  | 'rising'
  | 'niches';

export type KeywordIntentKey =
  | 'tool'
  | 'discovery'
  | 'informational'
  | 'creator_research';

export type KeywordTrendKey = 'breakout' | 'rising' | 'steady' | 'seasonal';

export type KeywordPopularityKey =
  | 'high_interest'
  | 'growing_interest'
  | 'steady_interest'
  | 'emerging';

export interface KeywordFaq {
  question: string;
  answer: string;
}

export interface KeywordEntry {
  slug: string;
  keyword: string;
  category: KeywordCategoryKey;
  searchIntent: KeywordIntentKey;
  trendDirection: KeywordTrendKey;
  popularityTier: KeywordPopularityKey;
  nicheTopic: string;
  summary: string;
  whyItMatters: string;
  contentAngles: string[];
  relatedSlugs: string[];
  recommendedCreators: string[];
  recommendedSongs: string[];
  recommendedToolHref: string;
  defaultSearchHandle: string;
  seoTitle: string;
  seoDescription: string;
  lastReviewed: string;
  faqs: KeywordFaq[];
}

export const KEYWORD_CATEGORIES: KeywordCategoryKey[] = [
  'trending',
  'search',
  'tiktok',
  'related',
  'rising',
  'niches',
];

export const TRENDING_KEYWORDS: KeywordEntry[] = [
  {
    slug: 'tiktok-profile-viewer-without-account',
    keyword: 'TikTok profile viewer without account',
    category: 'trending',
    searchIntent: 'tool',
    trendDirection: 'rising',
    popularityTier: 'high_interest',
    nicheTopic: 'Anonymous Browsing',
    summary:
      'People search for ways to inspect public TikTok bios, follower totals, and recent uploads directly in a browser without installing the mobile app or signing in.',
    whyItMatters:
      'Desktop researchers, journalists, and casual viewers often want fast access to public creator feeds without triggering login prompts or view notifications.',
    contentAngles: [
      'Explain how public profile lookup reads publicly visible metadata without account credentials.',
      'Compare browser viewing across mobile Safari, Chrome, and desktop screens.',
      'Highlight privacy boundaries: private accounts remain protected and inaccessible.',
    ],
    relatedSlugs: [
      'anonymous-tiktok-story-viewer',
      'view-tiktok-followers-and-likes',
      'tiktok-video-downloader-no-watermark',
    ],
    recommendedCreators: ['khaby.lame', 'mrbeast'],
    recommendedSongs: ['original-sound-silent-reaction-beat'],
    recommendedToolHref: '/tiktok-profile-viewer',
    defaultSearchHandle: 'khaby.lame',
    seoTitle: 'TikTok Profile Viewer Without Account - Public Lookup Guide',
    seoDescription:
      'Learn how to view public TikTok profiles without logging in, check follower stats, and watch clips directly in any browser.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Can you view public TikTok profiles without logging in?',
        answer:
          'Yes. Any public creator profile can be looked up by username in our browser viewer without creating or signing into a TikTok account.',
      },
      {
        question: 'Can private accounts be viewed without an account?',
        answer:
          'No. Private accounts restrict their posts and are never displayed on Tik Profiles Viewer.',
      },
    ],
  },
  {
    slug: 'tiktok-video-downloader-no-watermark',
    keyword: 'TikTok video downloader no watermark',
    category: 'search',
    searchIntent: 'tool',
    trendDirection: 'steady',
    popularityTier: 'high_interest',
    nicheTopic: 'Video Saving & Editing',
    summary:
      'One of the highest-intent search queries from editors and viewers who want clean MP4 clips without the bouncing username overlay.',
    whyItMatters:
      'Clean source video keeps framing sharp when archiving tutorials, recipes, or personal clips for offline playback.',
    contentAngles: [
      'Show how direct HD stream retrieval preserves full 1080p aspect ratio without cropping corners.',
      'Compare watermark-free MP4 downloads against screen recordings that reduce frame rate.',
      'Remind users to credit original creators and use saved media responsibly.',
    ],
    relatedSlugs: [
      'download-tiktok-mp3-sound',
      'remove-tiktok-logo-for-reels',
      'tiktok-profile-viewer-without-account',
    ],
    recommendedCreators: ['zachking', 'charlidamelio'],
    recommendedSongs: ['epic-reveal-bass-riser', 'savage-love-jawsh-685'],
    recommendedToolHref: '/tiktok-video-downloader',
    defaultSearchHandle: 'zachking',
    seoTitle: 'TikTok Video Downloader No Watermark - HD MP4 Guide',
    seoDescription:
      'See how to save clean TikTok MP4 videos without corner watermarks or cropping, directly in your mobile or desktop browser.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Does removing the watermark reduce video resolution?',
        answer:
          'No. Fetching the clean original stream keeps full HD resolution and clear audio intact.',
      },
      {
        question: 'Does this work on iPhone and Android?',
        answer:
          'Yes. Clean MP4 files save directly to your browser Downloads or Files app.',
      },
    ],
  },
  {
    slug: 'download-tiktok-mp3-sound',
    keyword: 'Download TikTok MP3 sound',
    category: 'search',
    searchIntent: 'tool',
    trendDirection: 'rising',
    popularityTier: 'high_interest',
    nicheTopic: 'Audio & Music',
    summary:
      'Users actively search for fast ways to extract original music tracks, voiceovers, and trending sound effects from public TikTok clips as portable MP3 files.',
    whyItMatters:
      'Musicians, podcasters, and video editors frequently archive standalone audio tracks without storing large video files.',
    contentAngles: [
      'Walk through extracting clean MP3 tracks straight from any public video modal.',
      'Pair audio extraction with trending TikTok song discovery for faster trend research.',
      'Explain file compatibility across mobile music players and editing timelines.',
    ],
    relatedSlugs: [
      'tiktok-video-downloader-no-watermark',
      'trending-tiktok-songs-this-week',
      'tiktok-photo-slideshow-saver',
    ],
    recommendedCreators: ['bellapoarch', 'spencerx'],
    recommendedSongs: ['m-to-the-b-sophie-aspin-send', 'say-so-doja-cat-dance-cut'],
    recommendedToolHref: '/tiktok-mp3-downloader',
    defaultSearchHandle: 'bellapoarch',
    seoTitle: 'Download TikTok MP3 Sound - Clean Audio Extraction Guide',
    seoDescription:
      'Extract clean MP3 audio tracks and viral sounds from public TikTok videos directly in your browser for free.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'What audio format is saved?',
        answer:
          'Audio streams are saved as standard MP3 files compatible with phones, computers, and audio editors.',
      },
      {
        question: 'Do I need to download the full video first?',
        answer:
          'No. Click Download Audio (MP3) inside any video player modal to save only the audio track.',
      },
    ],
  },
  {
    slug: 'trending-tiktok-songs-this-week',
    keyword: 'Trending TikTok songs',
    category: 'tiktok',
    searchIntent: 'discovery',
    trendDirection: 'breakout',
    popularityTier: 'high_interest',
    nicheTopic: 'Music & Audio Trends',
    summary:
      'Creators monitor trending songs and original audio loops to match their visual edits with rhythms that audiences already recognize.',
    whyItMatters:
      'Selecting an aligned audio track with matching BPM improves edit pacing and helps viewers recognize the video format immediately.',
    contentAngles: [
      'Group sounds by genre and pacing (chill lo-fi, dance pop, cinematic risers, comedy cues).',
      'Match BPM speed to video cut frequency for stronger retention.',
      'Link creators directly to public profiles using similar sound styles.',
    ],
    relatedSlugs: [
      'download-tiktok-mp3-sound',
      'clean-asmr-cooking-sounds',
      'short-form-hook-captions',
    ],
    recommendedCreators: ['charlidamelio', 'jasonderulo'],
    recommendedSongs: ['savage-love-jawsh-685', 'crispy-kitchen-asmr-prep'],
    recommendedToolHref: '/trending-songs',
    defaultSearchHandle: 'charlidamelio',
    seoTitle: 'Trending TikTok Songs - Sound Directory & Pacing Guide',
    seoDescription:
      'Browse popular TikTok songs and sounds by genre, tempo, and creator niche, with editing tips and MP3 lookup tools.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'How do creators pick the right trending song?',
        answer:
          'Match the song BPM and mood to your niche, such as chill lo-fi for study vlogs or risers for reveal clips.',
      },
      {
        question: 'Where can I browse songs by genre?',
        answer:
          'Use the Trending Songs directory to filter tracks by Pop, Dance, Hip-Hop, Chill, Cinematic, or Comedy.',
      },
    ],
  },
  {
    slug: 'anonymous-tiktok-story-viewer',
    keyword: 'Anonymous TikTok story viewer',
    category: 'rising',
    searchIntent: 'tool',
    trendDirection: 'breakout',
    popularityTier: 'growing_interest',
    nicheTopic: '24h Stories & Archives',
    summary:
      'Growing search interest around inspecting and saving 24-hour public TikTok stories before they expire from a creator feed.',
    whyItMatters:
      'Unlike permanent feed uploads, stories disappear after 24 hours, so researchers and fans look for clean ways to watch or save them early.',
    contentAngles: [
      'Clarify the 24-hour expiration window for temporary TikTok story clips.',
      'Explain anonymous browser playback with zero login footprint.',
      'Offer direct MP4 preservation for public story updates.',
    ],
    relatedSlugs: [
      'tiktok-profile-viewer-without-account',
      'tiktok-photo-slideshow-saver',
      'view-tiktok-followers-and-likes',
    ],
    recommendedCreators: ['addisonre', 'mrbeast'],
    recommendedSongs: ['say-so-doja-cat-dance-cut'],
    recommendedToolHref: '/tiktok-story-downloader',
    defaultSearchHandle: 'addisonre',
    seoTitle: 'Anonymous TikTok Story Viewer - Watch & Save 24h Stories',
    seoDescription:
      'Learn how to view and save public 24-hour TikTok stories anonymously in HD MP4 without logging into an account.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Do creators get notified when I view public clips here?',
        answer:
          'No. Browser lookups do not use your personal TikTok account, so no viewer notification is sent.',
      },
      {
        question: 'How long do stories stay live on TikTok?',
        answer:
          'Stories typically remain public on the creator account for 24 hours unless saved or deleted earlier.',
      },
    ],
  },
  {
    slug: 'tiktok-engagement-rate-benchmark',
    keyword: 'TikTok engagement rate calculator',
    category: 'related',
    searchIntent: 'creator_research',
    trendDirection: 'rising',
    popularityTier: 'growing_interest',
    nicheTopic: 'Analytics & Monetization',
    summary:
      'Marketers and creators search for reliable formulas to evaluate likes, comments, and shares relative to average video views or follower count.',
    whyItMatters:
      'Raw follower counts alone can mislead brand partnerships; engagement rate shows how actively real viewers react to recent videos.',
    contentAngles: [
      'Compare engagement calculated by views versus engagement calculated by followers.',
      'Provide clear benchmark ranges for healthy versus breakout creator campaigns.',
      'Combine live profile lookups with calculator inputs for accurate audits.',
    ],
    relatedSlugs: [
      'tiktok-creator-earnings-estimator',
      'view-tiktok-followers-and-likes',
      'short-form-hook-captions',
    ],
    recommendedCreators: ['mkbhd', 'mrbeast'],
    recommendedSongs: ['clean-desk-minimal-synth'],
    recommendedToolHref: '/tiktok-engagement-calculator',
    defaultSearchHandle: 'mkbhd',
    seoTitle: 'TikTok Engagement Rate Calculator & Benchmark Guide',
    seoDescription:
      'Understand TikTok engagement formulas by views and followers, check industry benchmarks, and audit public creator profiles.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'What is considered a strong TikTok engagement rate?',
        answer:
          'Rates between 3 and 6 percent are generally healthy, while videos above 8 percent often indicate strong viral sharing.',
      },
      {
        question: 'Should brands measure by views or followers?',
        answer:
          'Measuring by views often gives a clearer picture of content appeal because TikTok distributes clips beyond existing followers.',
      },
    ],
  },
  {
    slug: 'tiktok-creator-earnings-estimator',
    keyword: 'TikTok money calculator',
    category: 'related',
    searchIntent: 'creator_research',
    trendDirection: 'steady',
    popularityTier: 'growing_interest',
    nicheTopic: 'Analytics & Monetization',
    summary:
      'Creators and talent managers compare estimated sponsorship rates, Creator Rewards payouts, and affiliate potential across follower tiers.',
    whyItMatters:
      'Knowing realistic monetization ranges helps creators price brand integrations fairly based on niche and average view delivery.',
    contentAngles: [
      'Break down income streams: brand sponsorships, Creator Rewards, and TikTok Shop affiliate.',
      'Explain why finance and tech niches command higher RPM than general comedy.',
      'Encourage pairing view consistency checks with sponsorship estimates.',
    ],
    relatedSlugs: [
      'tiktok-engagement-rate-benchmark',
      'ai-tech-review-niche-tiktok',
      'view-tiktok-followers-and-likes',
    ],
    recommendedCreators: ['mrbeast', 'mkbhd'],
    recommendedSongs: ['clean-desk-minimal-synth'],
    recommendedToolHref: '/tiktok-money-calculator',
    defaultSearchHandle: 'mrbeast',
    seoTitle: 'TikTok Money Calculator - Creator Earnings & Rate Guide',
    seoDescription:
      'Estimate monthly TikTok creator revenue across sponsorships, Creator Rewards, and live gifts with transparent benchmarks.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'What affects TikTok Creator Rewards RPM most?',
        answer:
          'Watch duration past 5 seconds, video length over 1 minute, viewer geography, and content niche heavily shape RPM.',
      },
      {
        question: 'Are calculator numbers guaranteed payouts?',
        answer:
          'No. They are educational benchmark estimates to help creators plan sponsorship rates and content goals.',
      },
    ],
  },
  {
    slug: 'tiktok-photo-slideshow-saver',
    keyword: 'TikTok photo slideshow downloader',
    category: 'tiktok',
    searchIntent: 'tool',
    trendDirection: 'rising',
    popularityTier: 'growing_interest',
    nicheTopic: 'Photo Carousels',
    summary:
      'Photo carousels on TikTok continue gaining traction for step-by-step recipes, travel dumps, and minimalist typography checklists.',
    whyItMatters:
      'Viewers want to save individual clean JPG slides (wallpapers, checklists, outfit cards) rather than recording a screen video.',
    contentAngles: [
      'Show how photo mode posts work differently from standard MP4 videos.',
      'Highlight clean JPG image quality without corner username stamps.',
      'Connect photo carousels with caption hooks that encourage saves.',
    ],
    relatedSlugs: [
      'tiktok-video-downloader-no-watermark',
      'short-form-hook-captions',
      'download-tiktok-mp3-sound',
    ],
    recommendedCreators: ['charlidamelio', 'bayashi.tiktok'],
    recommendedSongs: ['sunlit-morning-aesthetic-lofi'],
    recommendedToolHref: '/tiktok-photo-downloader',
    defaultSearchHandle: 'bayashi.tiktok',
    seoTitle: 'TikTok Photo Slideshow Downloader - Save Clean Carousel Images',
    seoDescription:
      'Explore how to view and save high-resolution TikTok photo slideshows without corner watermarks.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Why are TikTok photo carousels popular?',
        answer:
          'Viewers can swipe at their own pace, which makes carousels effective for checklists, recipes, and storytelling.',
      },
      {
        question: 'Can I preview creator avatars in full resolution too?',
        answer:
          'Yes. Any public creator card includes a Save Avatar button for full-resolution profile photos.',
      },
    ],
  },
  {
    slug: 'remove-tiktok-logo-for-reels',
    keyword: 'Remove TikTok watermark for Reels',
    category: 'rising',
    searchIntent: 'tool',
    trendDirection: 'breakout',
    popularityTier: 'high_interest',
    nicheTopic: 'Cross-Platform Reposting',
    summary:
      'Multi-platform creators search for lossless ways to repurpose their original vertical clips for YouTube Shorts and Instagram Reels without duplicate logos.',
    whyItMatters:
      'Cross-posting clean unwatermarked MP4 files preserves visual quality and avoids algorithmic penalties on competing short-form feeds.',
    contentAngles: [
      'Explain why cropping or blurring corners damages vertical framing.',
      'Demonstrate direct source-stream saving before watermark stamping.',
      'Share best practices for exporting 9:16 vertical video across platforms.',
    ],
    relatedSlugs: [
      'tiktok-video-downloader-no-watermark',
      'short-form-hook-captions',
      'trending-tiktok-songs-this-week',
    ],
    recommendedCreators: ['zachking', 'demibagby'],
    recommendedSongs: ['epic-reveal-bass-riser'],
    recommendedToolHref: '/tiktok-watermark-remover',
    defaultSearchHandle: 'demibagby',
    seoTitle: 'Remove TikTok Watermark for Reels & Shorts - Clean MP4 Guide',
    seoDescription:
      'Keep full 9:16 video quality without cropping or blurring when preparing your clips for Instagram Reels and YouTube Shorts.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Does watermark removal crop the edges of the video?',
        answer:
          'No. Retrieving the clean source stream keeps 100 percent of your original 9:16 frame intact.',
      },
      {
        question: 'Who benefits most from clean MP4 downloads?',
        answer:
          'Creators repurposing their own vertical videos across TikTok, Reels, and YouTube Shorts.',
      },
    ],
  },
  {
    slug: 'view-tiktok-followers-and-likes',
    keyword: 'Check TikTok followers and likes live',
    category: 'related',
    searchIntent: 'informational',
    trendDirection: 'steady',
    popularityTier: 'steady_interest',
    nicheTopic: 'Profile Stats & Audits',
    summary:
      'Analysts and fans look up public TikTok accounts to inspect follower counts, heart totals, video counts, and verified status in one place.',
    whyItMatters:
      'Having profile totals side-by-side with recent video views makes it easy to spot real momentum versus inactive follower counts.',
    contentAngles: [
      'Explain what follower count, total likes, and following count reveal together.',
      'Compare verified creator badges and public account bios.',
      'Pair profile inspection with recent video breakdown analytics.',
    ],
    relatedSlugs: [
      'tiktok-profile-viewer-without-account',
      'tiktok-engagement-rate-benchmark',
      'tiktok-creator-earnings-estimator',
    ],
    recommendedCreators: ['khaby.lame', 'cznburak'],
    recommendedSongs: ['original-sound-silent-reaction-beat'],
    recommendedToolHref: '/tiktok-analytics',
    defaultSearchHandle: 'cznburak',
    seoTitle: 'Check TikTok Followers and Likes - Public Profile Stats Guide',
    seoDescription:
      'Inspect live public TikTok follower totals, likes, video counts, and recent clip performance without signing in.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Are follower and like counts fetched live?',
        answer:
          'Yes. Profile lookups query public TikTok profile metadata directly when you search a username.',
      },
      {
        question: 'Why might two tools show slightly rounded numbers?',
        answer:
          'TikTok displays abbreviated counts on large profiles, while individual video metrics show exact public snapshots.',
      },
    ],
  },
  {
    slug: 'clean-asmr-cooking-sounds',
    keyword: 'FoodTikTok and ASMR cooking recipes',
    category: 'niches',
    searchIntent: 'discovery',
    trendDirection: 'rising',
    popularityTier: 'high_interest',
    nicheTopic: 'Food & Cooking',
    summary:
      'Fast-cut culinary creators combine crisp kitchen audio with 20-second visual recipes that viewers save and replay repeatedly.',
    whyItMatters:
      'Recipe clips generate strong save-to-view ratios, making Food & Cooking one of the most resilient evergreen niches on TikTok.',
    contentAngles: [
      'Highlight top culinary creators like @bayashi.tiktok, @cznburak, and @gordonramsayofficial.',
      'Pair visual chopping sequences with crisp ambient kitchen audio.',
      'Keep ingredient overlays concise and high-contrast.',
    ],
    relatedSlugs: [
      'trending-tiktok-songs-this-week',
      'short-form-hook-captions',
      'ai-tech-review-niche-tiktok',
    ],
    recommendedCreators: ['bayashi.tiktok', 'cznburak', 'gordonramsayofficial'],
    recommendedSongs: ['crispy-kitchen-asmr-prep', 'sunlit-morning-aesthetic-lofi'],
    recommendedToolHref: '/category/food-cooking',
    defaultSearchHandle: 'bayashi.tiktok',
    seoTitle: 'FoodTikTok & ASMR Cooking Niche - Creators & Trend Guide',
    seoDescription:
      'Explore FoodTikTok and ASMR cooking trends, leading culinary creators, matching sounds, and format insights.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Why do ASMR cooking videos perform well globally?',
        answer:
          'Visual cooking steps and crisp sound effects need little translation, reaching audiences across languages.',
      },
      {
        question: 'Which cooking creators can I inspect right now?',
        answer:
          'Search @bayashi.tiktok, @cznburak, or @gordonramsayofficial in the viewer below.',
      },
    ],
  },
  {
    slug: 'ai-tech-review-niche-tiktok',
    keyword: 'TechTok AI tools and gadget reviews',
    category: 'niches',
    searchIntent: 'discovery',
    trendDirection: 'breakout',
    popularityTier: 'growing_interest',
    nicheTopic: 'Tech & AI',
    summary:
      'Short-form tech educators break down smartphone cameras, desk setups, and everyday AI workflows in under 45 seconds.',
    whyItMatters:
      'Tech & AI viewers actively search for practical tutorials, driving strong search-based discovery and high sponsorship RPM.',
    contentAngles: [
      'Start with a clear problem statement in the first 2 seconds before showing the tool.',
      'Use clean desk B-roll and subtle minimal synth backing tracks.',
      'End with a single actionable summary viewers can save.',
    ],
    relatedSlugs: [
      'tiktok-creator-earnings-estimator',
      'short-form-hook-captions',
      'clean-asmr-cooking-sounds',
    ],
    recommendedCreators: ['mkbhd', 'mrbeast'],
    recommendedSongs: ['clean-desk-minimal-synth', 'sunlit-morning-aesthetic-lofi'],
    recommendedToolHref: '/category/tech-ai',
    defaultSearchHandle: 'mkbhd',
    seoTitle: 'TechTok AI Tools & Gadget Reviews - Niche & Creator Guide',
    seoDescription:
      'Discover how TechTok creators structure AI tutorials and gadget reviews, plus recommended tracks and analytics insights.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Why does the Tech & AI niche attract higher brand budgets?',
        answer:
          'Viewers watching software and gadget reviews typically have strong purchase and productivity intent.',
      },
      {
        question: 'What pacing works best for tech explainers?',
        answer:
          'Clear 115 to 120 BPM electronic backgrounds paired with concise screen callouts keep tutorials easy to follow.',
      },
    ],
  },
  {
    slug: 'short-form-hook-captions',
    keyword: 'Viral TikTok hooks and captions',
    category: 'trending',
    searchIntent: 'informational',
    trendDirection: 'rising',
    popularityTier: 'growing_interest',
    nicheTopic: 'Creator Growth',
    summary:
      'Creators look for short opening hooks and focused hashtag sets that clarify video context in the first glance.',
    whyItMatters:
      'Clear hooks under 150 characters avoid mobile truncation and help search algorithms categorize your video accurately.',
    contentAngles: [
      'Use 3 to 5 specific niche hashtags instead of generic tag stuffing.',
      'Open captions with a direct outcome or question.',
      'Test different hook angles using the free Caption Generator.',
    ],
    relatedSlugs: [
      'trending-tiktok-songs-this-week',
      'tiktok-engagement-rate-benchmark',
      'remove-tiktok-logo-for-reels',
    ],
    recommendedCreators: ['zachking', 'khaby.lame'],
    recommendedSongs: ['epic-reveal-bass-riser', 'clean-desk-minimal-synth'],
    recommendedToolHref: '/tiktok-caption-generator',
    defaultSearchHandle: 'zachking',
    seoTitle: 'Viral TikTok Hooks & Captions - Search & Retention Guide',
    seoDescription:
      'Write concise TikTok hooks and focused hashtags that stay readable on mobile and clarify your video topic.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'How long should a TikTok caption be?',
        answer:
          'Keeping the core hook under 150 characters ensures viewers can read it cleanly without tapping to expand.',
      },
      {
        question: 'How many hashtags should I include?',
        answer:
          'Most creators get clear categorization with 3 to 6 relevant topic hashtags.',
      },
    ],
  },
  {
    slug: 'calisthenics-gymtok-workouts',
    keyword: 'GymTok workout routines and fitness clips',
    category: 'niches',
    searchIntent: 'discovery',
    trendDirection: 'steady',
    popularityTier: 'steady_interest',
    nicheTopic: 'Fitness & Sports',
    summary:
      'Fitness creators share bodyweight mobility drills, strength splits, and high-tempo gym edits designed for quick saving.',
    whyItMatters:
      'Workout routines earn consistent repeat views as users return to saved clips during training sessions.',
    contentAngles: [
      'Show clear form cues with on-screen rep counts.',
      'Use energetic phonk or sprint beats for lift highlights.',
      'Save reference routines offline for gym spaces with weak signal.',
    ],
    relatedSlugs: [
      'trending-tiktok-songs-this-week',
      'tiktok-video-downloader-no-watermark',
      'tiktok-engagement-rate-benchmark',
    ],
    recommendedCreators: ['demibagby'],
    recommendedSongs: ['high-tempo-sprint-phonk', 'epic-reveal-bass-riser'],
    recommendedToolHref: '/category/fitness-sports',
    defaultSearchHandle: 'demibagby',
    seoTitle: 'GymTok Workout Routines & Fitness Niche Guide',
    seoDescription:
      'Explore GymTok fitness trends, leading athletic creators, energetic audio picks, and video saving workflows.',
    lastReviewed: 'November 2026',
    faqs: [
      {
        question: 'Can I save workout videos to watch offline at the gym?',
        answer:
          'Yes. Open any public fitness creator profile and save clean HD MP4 clips for offline playback.',
      },
      {
        question: 'Which fitness creators can I explore?',
        answer:
          'Start with @demibagby or browse our Fitness & Sports category directory.',
      },
    ],
  },
];

export function getKeywordBySlug(slug: string): KeywordEntry | undefined {
  return TRENDING_KEYWORDS.find(
    (k) => k.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getKeywordsByCategory(
  category: KeywordCategoryKey
): KeywordEntry[] {
  return TRENDING_KEYWORDS.filter((k) => k.category === category);
}

export function getRelatedKeywords(entry: KeywordEntry): KeywordEntry[] {
  const mapped = entry.relatedSlugs
    .map((slug) => getKeywordBySlug(slug))
    .filter((k): k is KeywordEntry => Boolean(k));
  if (mapped.length >= 2) return mapped;
  return TRENDING_KEYWORDS.filter((k) => k.slug !== entry.slug).slice(0, 3);
}

const CATEGORY_LABELS: Record<LanguageCode, Record<KeywordCategoryKey, string>> =
  {
    en: {
      trending: 'Trending Keywords',
      search: 'Trending Search Keywords',
      tiktok: 'TikTok Trending Keywords',
      related: 'Related Keywords',
      rising: 'Rising Keywords',
      niches: 'Popular Niches and Topics',
    },
    ar: {
      trending: 'كلمات رائجة',
      search: 'كلمات البحث الشائعة',
      tiktok: 'كلمات تيك توك الرائجة',
      related: 'كلمات ذات صلة',
      rising: 'كلمات صاعدة',
      niches: 'مجالات وموضوعات شائعة',
    },
    fr: {
      trending: 'Mots-clés Tendances',
      search: 'Recherches Populaires',
      tiktok: 'Tendances sur TikTok',
      related: 'Mots-clés Associés',
      rising: 'Mots-clés en Hausse',
      niches: 'Niches et Sujets Populaires',
    },
    es: {
      trending: 'Palabras en Tendencia',
      search: 'Búsquedas Populares',
      tiktok: 'Tendencias en TikTok',
      related: 'Palabras Relacionadas',
      rising: 'Palabras en Ascenso',
      niches: 'Nichos y Temas Populares',
    },
    de: {
      trending: 'Trend-Keywords',
      search: 'Häufige Suchbegriffe',
      tiktok: 'TikTok Trend-Keywords',
      related: 'Verwandte Keywords',
      rising: 'Steigende Keywords',
      niches: 'Beliebte Nischen & Themen',
    },
    ru: {
      trending: 'Трендовые слова',
      search: 'Популярные запросы',
      tiktok: 'Тренды в TikTok',
      related: 'Связанные запросы',
      rising: 'Растущие слова',
      niches: 'Популярные ниши и темы',
    },
    zh: {
      trending: '热门关键词',
      search: '热门搜索词',
      tiktok: 'TikTok 流行词',
      related: '相关关键词',
      rising: '上升关键词',
      niches: '热门领域与话题',
    },
    pt: {
      trending: 'Palavras em Alta',
      search: 'Buscas Populares',
      tiktok: 'Tendências no TikTok',
      related: 'Palavras Relacionadas',
      rising: 'Palavras em Crescimento',
      niches: 'Nichos e Tópicos Populares',
    },
    he: {
      trending: 'מילות מפתח טרנדיות',
      search: 'חיפושים פופולריים',
      tiktok: 'מילים חמות בטיקטוק',
      related: 'מילים קשורות',
      rising: 'מילים בצמיחה',
      niches: 'תחומים ונושאים פופולריים',
    },
    hi: {
      trending: 'ट्रेंडिंग कीवर्ड',
      search: 'लोकप्रिय सर्च कीवर्ड',
      tiktok: 'TikTok ट्रेंडिंग कीवर्ड',
      related: 'संबंधित कीवर्ड',
      rising: 'बढ़ते कीवर्ड',
      niches: 'लोकप्रिय श्रेणियां और विषय',
    },
  };

const INTENT_LABELS: Record<LanguageCode, Record<KeywordIntentKey, string>> = {
  en: {
    tool: 'Tool & Action',
    discovery: 'Topic Discovery',
    informational: 'Guide & Answers',
    creator_research: 'Creator Research',
  },
  ar: {
    tool: 'أداة وتنفيذ',
    discovery: 'استكشاف الموضوعات',
    informational: 'دليل وإجابات',
    creator_research: 'أبحاث المبدعين',
  },
  fr: {
    tool: 'Outil & Action',
    discovery: 'Découverte',
    informational: 'Guide & Réponses',
    creator_research: 'Analyse Créateur',
  },
  es: {
    tool: 'Herramienta',
    discovery: 'Descubrimiento',
    informational: 'Guía y Respuestas',
    creator_research: 'Análisis Creador',
  },
  de: {
    tool: 'Tool & Aktion',
    discovery: 'Themen-Entdeckung',
    informational: 'Ratgeber',
    creator_research: 'Creator-Analyse',
  },
  ru: {
    tool: 'Инструмент',
    discovery: 'Обзор тем',
    informational: 'Руководство',
    creator_research: 'Анализ авторов',
  },
  zh: {
    tool: '工具操作',
    discovery: '主题发现',
    informational: '指南解答',
    creator_research: '创作者研究',
  },
  pt: {
    tool: 'Ferramenta',
    discovery: 'Descoberta',
    informational: 'Guia e Respostas',
    creator_research: 'Pesquisa Criador',
  },
  he: {
    tool: 'כלי ופעולה',
    discovery: 'גילוי נושאים',
    informational: 'מדריך ותשובות',
    creator_research: 'מחקר יוצרים',
  },
  hi: {
    tool: 'टूल और एक्शन',
    discovery: 'विषय खोज',
    informational: 'गाइड और उत्तर',
    creator_research: 'क्रिएटर रिसर्च',
  },
};

const TREND_LABELS: Record<LanguageCode, Record<KeywordTrendKey, string>> = {
  en: {
    breakout: 'Breakout Growth',
    rising: 'Rising',
    steady: 'Steady',
    seasonal: 'Seasonal',
  },
  ar: {
    breakout: 'نمو متسارع',
    rising: 'صاعد',
    steady: 'مستقر',
    seasonal: 'موسمي',
  },
  fr: {
    breakout: 'Forte hausse',
    rising: 'En hausse',
    steady: 'Stable',
    seasonal: 'Saisonnier',
  },
  es: {
    breakout: 'Crecimiento rápido',
    rising: 'En alza',
    steady: 'Estable',
    seasonal: 'Estacional',
  },
  de: {
    breakout: 'Starkes Wachstum',
    rising: 'Steigend',
    steady: 'Stabil',
    seasonal: 'Saisonal',
  },
  ru: {
    breakout: 'Быстрый рост',
    rising: 'Растет',
    steady: 'Стабильно',
    seasonal: 'Сезонный',
  },
  zh: {
    breakout: '快速增长',
    rising: '上升中',
    steady: '稳定',
    seasonal: '季节性',
  },
  pt: {
    breakout: 'Crescimento rápido',
    rising: 'Em alta',
    steady: 'Estável',
    seasonal: 'Sazonal',
  },
  he: {
    breakout: 'צמיחה חדה',
    rising: 'בעלייה',
    steady: 'יציב',
    seasonal: 'עונתי',
  },
  hi: {
    breakout: 'तेज़ बढ़त',
    rising: 'बढ़ता हुआ',
    steady: 'स्थिर',
    seasonal: 'मौसमी',
  },
};

const POPULARITY_LABELS: Record<
  LanguageCode,
  Record<KeywordPopularityKey, string>
> = {
  en: {
    high_interest: 'High Interest',
    growing_interest: 'Growing Interest',
    steady_interest: 'Consistent Interest',
    emerging: 'Emerging',
  },
  ar: {
    high_interest: 'اهتمام مرتفع',
    growing_interest: 'اهتمام متزايد',
    steady_interest: 'اهتمام ثابت',
    emerging: 'ناشئ',
  },
  fr: {
    high_interest: 'Fort intérêt',
    growing_interest: 'Intérêt croissant',
    steady_interest: 'Intérêt stable',
    emerging: 'Émergent',
  },
  es: {
    high_interest: 'Alto interés',
    growing_interest: 'Interés creciente',
    steady_interest: 'Interés constante',
    emerging: 'Emergente',
  },
  de: {
    high_interest: 'Hohes Interesse',
    growing_interest: 'Wachsendes Interesse',
    steady_interest: 'Stabiles Interesse',
    emerging: 'Aufkommend',
  },
  ru: {
    high_interest: 'Высокий спрос',
    growing_interest: 'Растущий спрос',
    steady_interest: 'Стабильный спрос',
    emerging: 'Новый тренд',
  },
  zh: {
    high_interest: '高关注度',
    growing_interest: '关注度上升',
    steady_interest: '稳定关注',
    emerging: '新兴趋势',
  },
  pt: {
    high_interest: 'Alto interesse',
    growing_interest: 'Interesse crescente',
    steady_interest: 'Interesse constante',
    emerging: 'Emergente',
  },
  he: {
    high_interest: 'עניין גבוה',
    growing_interest: 'עניין גובר',
    steady_interest: 'עניין יציב',
    emerging: 'מגמה מתפתחת',
  },
  hi: {
    high_interest: 'उच्च रुचि',
    growing_interest: 'बढ़ती रुचि',
    steady_interest: 'निरंतर रुचि',
    emerging: 'उभरता हुआ',
  },
};

export interface KeywordDetailUiLabels {
  overviewHeading: string;
  whyHeading: string;
  anglesHeading: string;
  relatedHeading: string;
  creatorsHeading: string;
  songsHeading: string;
  faqHeading: string;
  openMatchingTool: string;
  viewerHeading: string;
  viewerSubtitle: string;
  popularityLabel: string;
  nicheLabel: string;
  lastReviewedLabel: string;
}

const KEYWORD_DETAIL_UI: Record<LanguageCode, KeywordDetailUiLabels> = {
  en: {
    overviewHeading: 'Search Topic Overview',
    whyHeading: 'Why This Topic Matters',
    anglesHeading: 'Practical Content & Research Angles',
    relatedHeading: 'Related Keywords & Guides',
    creatorsHeading: 'Relevant Public Creators',
    songsHeading: 'Matching TikTok Sounds',
    faqHeading: 'Frequently Asked Questions',
    openMatchingTool: 'Open Matching Tool',
    viewerHeading: 'Test Live Public Profiles for This Topic',
    viewerSubtitle:
      'Search any public TikTok username or explore the pre-filled example directly below.',
    popularityLabel: 'Interest Tier',
    nicheLabel: 'Topic Group',
    lastReviewedLabel: 'Last Reviewed',
  },
  ar: {
    overviewHeading: 'نظرة عامة على موضوع البحث',
    whyHeading: 'أهمية هذا الاتجاه',
    anglesHeading: 'أفكار وزوايا عملية للمحتوى والبحث',
    relatedHeading: 'كلمات مفتاحية وأدلة ذات صلة',
    creatorsHeading: 'مبدعون عامون مرتبطون بالموضوع',
    songsHeading: 'أصوات تيك توك مناسبة',
    faqHeading: 'الأسئلة الشائعة',
    openMatchingTool: 'فتح الأداة المرتبطة',
    viewerHeading: 'جرّب فحص حسابات عامة لهذا الموضوع',
    viewerSubtitle:
      'ابحث عن أي اسم مستخدم تيك توك عام أو استعرض المثال الجاهز أدناه.',
    popularityLabel: 'مستوى الاهتمام',
    nicheLabel: 'المجال',
    lastReviewedLabel: 'آخر مراجعة',
  },
  fr: {
    overviewHeading: 'Aperçu du sujet de recherche',
    whyHeading: 'Pourquoi ce sujet compte',
    anglesHeading: 'Angles pratiques de contenu et de recherche',
    relatedHeading: 'Mots-clés et guides associés',
    creatorsHeading: 'Créateurs publics pertinents',
    songsHeading: 'Sons TikTok associés',
    faqHeading: 'Questions fréquentes',
    openMatchingTool: 'Ouvrir l’outil associé',
    viewerHeading: 'Tester des profils publics en direct',
    viewerSubtitle:
      'Recherchez n’importe quel pseudo public ou explorez l’exemple ci-dessous.',
    popularityLabel: 'Niveau d’intérêt',
    nicheLabel: 'Thématique',
    lastReviewedLabel: 'Dernière révision',
  },
  es: {
    overviewHeading: 'Resumen del tema de búsqueda',
    whyHeading: 'Por qué importa esta tendencia',
    anglesHeading: 'Enfoques prácticos de contenido e investigación',
    relatedHeading: 'Palabras clave y guías relacionadas',
    creatorsHeading: 'Creadores públicos relevantes',
    songsHeading: 'Sonidos de TikTok compatibles',
    faqHeading: 'Preguntas frecuentes',
    openMatchingTool: 'Abrir herramienta relacionada',
    viewerHeading: 'Prueba perfiles públicos en vivo para este tema',
    viewerSubtitle:
      'Busca cualquier usuario público de TikTok o explora el ejemplo precargado abajo.',
    popularityLabel: 'Nivel de interés',
    nicheLabel: 'Temática',
    lastReviewedLabel: 'Última revisión',
  },
  de: {
    overviewHeading: 'Überblick zum Suchthema',
    whyHeading: 'Warum dieses Thema wichtig ist',
    anglesHeading: 'Praktische Content- & Recherche-Ansätze',
    relatedHeading: 'Verwandte Keywords & Guides',
    creatorsHeading: 'Passende öffentliche Creator',
    songsHeading: 'Passende TikTok-Sounds',
    faqHeading: 'Häufige Fragen',
    openMatchingTool: 'Passendes Tool öffnen',
    viewerHeading: 'Öffentliche Profile direkt testen',
    viewerSubtitle:
      'Suche unten nach einem öffentlichen TikTok-Namen oder prüfe das Beispielprofil.',
    popularityLabel: 'Interessensstufe',
    nicheLabel: 'Themenbereich',
    lastReviewedLabel: 'Zuletzt geprüft',
  },
  ru: {
    overviewHeading: 'Обзор поисковой темы',
    whyHeading: 'Почему этот запрос важен',
    anglesHeading: 'Практические идеи для контента и анализа',
    relatedHeading: 'Связанные ключевые слова и страницы',
    creatorsHeading: 'Подходящие открытые авторы',
    songsHeading: 'Подходящие звуки TikTok',
    faqHeading: 'Частые вопросы',
    openMatchingTool: 'Открыть инструмент',
    viewerHeading: 'Проверьте открытые профили по этой теме',
    viewerSubtitle:
      'Введите любой открытый никнейм TikTok ниже или посмотрите готовый пример.',
    popularityLabel: 'Уровень спроса',
    nicheLabel: 'Тематика',
    lastReviewedLabel: 'Обновлено',
  },
  zh: {
    overviewHeading: '搜索主题概览',
    whyHeading: '为什么该话题值得关注',
    anglesHeading: '实用内容与调研切入点',
    relatedHeading: '相关关键词与指南页面',
    creatorsHeading: '相关公开创作者',
    songsHeading: '匹配的 TikTok 热门声音',
    faqHeading: '常见问题',
    openMatchingTool: '打开对应工具',
    viewerHeading: '针对此主题实时查看公开主页',
    viewerSubtitle:
      '在下方搜索任意公开 TikTok 用户名或直接查看预设示例创作者。',
    popularityLabel: '关注度层级',
    nicheLabel: '话题分类',
    lastReviewedLabel: '最近审核',
  },
  pt: {
    overviewHeading: 'Visão geral do tópico de busca',
    whyHeading: 'Por que este tema importa',
    anglesHeading: 'Ângulos práticos de conteúdo e pesquisa',
    relatedHeading: 'Palavras-chave e guias relacionados',
    creatorsHeading: 'Criadores públicos relevantes',
    songsHeading: 'Sons do TikTok compatíveis',
    faqHeading: 'Perguntas frequentes',
    openMatchingTool: 'Abrir ferramenta correspondente',
    viewerHeading: 'Teste perfis públicos ao vivo para este tema',
    viewerSubtitle:
      'Pesquise qualquer usuário público abaixo ou explore o exemplo pronto.',
    popularityLabel: 'Nível de interesse',
    nicheLabel: 'Categoria',
    lastReviewedLabel: 'Última revisão',
  },
  he: {
    overviewHeading: 'סקירת נושא החיפוש',
    whyHeading: 'מדוע מגמה זו חשובה',
    anglesHeading: 'זוויות מעשיות לתוכן ומחקר',
    relatedHeading: 'מילות מפתח ומדריכים קשורים',
    creatorsHeading: 'יוצרים ציבוריים רלוונטיים',
    songsHeading: 'צלילי טיקטוק מתאימים',
    faqHeading: 'שאלות נפוצות',
    openMatchingTool: 'פתח כלי מתאים',
    viewerHeading: 'בדוק פרופילים ציבוריים בנושא זה',
    viewerSubtitle:
      'חפש כל שם משתמש ציבורי למטה או צפה בדוגמה המוכנה.',
    popularityLabel: 'רמת עניין',
    nicheLabel: 'תחום',
    lastReviewedLabel: 'עודכן לאחרונה',
  },
  hi: {
    overviewHeading: 'सर्च विषय का अवलोकन',
    whyHeading: 'यह विषय क्यों महत्वपूर्ण है',
    anglesHeading: 'व्यावहारिक कंटेंट और रिसर्च सुझाव',
    relatedHeading: 'संबंधित कीवर्ड और गाइड पेज',
    creatorsHeading: 'संबंधित पब्लिक क्रिएटर्स',
    songsHeading: 'मेल खाते TikTok साउंड्स',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
    openMatchingTool: 'संबंधित टूल खोलें',
    viewerHeading: 'इस विषय के लिए लाइव पब्लिक प्रोफाइल जांचें',
    viewerSubtitle:
      'नीचे कोई भी पब्लिक TikTok यूजरनेम खोजें या पहले से भरे उदाहरण को देखें।',
    popularityLabel: 'रुचि स्तर',
    nicheLabel: 'विषय समूह',
    lastReviewedLabel: 'अंतिम समीक्षा',
  },
};

export function getKeywordCategoryLabel(
  cat: KeywordCategoryKey,
  lang: LanguageCode
): string {
  return CATEGORY_LABELS[lang]?.[cat] ?? CATEGORY_LABELS.en[cat];
}

export function getKeywordIntentLabel(
  intent: KeywordIntentKey,
  lang: LanguageCode
): string {
  return INTENT_LABELS[lang]?.[intent] ?? INTENT_LABELS.en[intent];
}

export function getKeywordTrendLabel(
  trend: KeywordTrendKey,
  lang: LanguageCode
): string {
  return TREND_LABELS[lang]?.[trend] ?? TREND_LABELS.en[trend];
}

export function getKeywordPopularityLabel(
  pop: KeywordPopularityKey,
  lang: LanguageCode
): string {
  return POPULARITY_LABELS[lang]?.[pop] ?? POPULARITY_LABELS.en[pop];
}

export function getKeywordDetailUiLabels(
  lang: LanguageCode
): KeywordDetailUiLabels {
  return KEYWORD_DETAIL_UI[lang] ?? KEYWORD_DETAIL_UI.en;
}

export function getLocalizedKeywordContent(
  entry: KeywordEntry,
  lang: LanguageCode
): {
  summary: string;
  whyItMatters: string;
  contentAngles: string[];
  faqs: KeywordFaq[];
} {
  if (lang === 'en') {
    return {
      summary: entry.summary,
      whyItMatters: entry.whyItMatters,
      contentAngles: entry.contentAngles,
      faqs: entry.faqs,
    };
  }

  const catLabel = getKeywordCategoryLabel(entry.category, lang);
  const trendLabel = getKeywordTrendLabel(entry.trendDirection, lang);
  const intentLabel = getKeywordIntentLabel(entry.searchIntent, lang);

  const templates: Record<
    Exclude<LanguageCode, 'en'>,
    {
      summary: string;
      whyItMatters: string;
      a1: string;
      a2: string;
      a3: string;
      q1: string;
      ans1: string;
      q2: string;
      ans2: string;
    }
  > = {
    ar: {
      summary: `دليل متخصص لموضوع "${entry.keyword}" ضمن فئة ${catLabel} (${trendLabel})، مخصص للمستخدمين الباحثين عن ${intentLabel} في مجال ${entry.nicheTopic}.`,
      whyItMatters: `يساعد فهم استعلام "${entry.keyword}" المبدعين والباحثين على الوصول إلى الحسابات العامة ذات الصلة بسرعة وتحسين وضوح المحتوى والبحث.`,
      a1: `استخدم أداة الفحص المباشرة أدناه للتحقق من حسابات ${entry.nicheTopic} العامة ومعرفة معدل التفاعل الفعلي.`,
      a2: `اربط الموضوع مع الكلمات ذات الصلة والأصوات الرائجة الموصى بها لتحسين الوصول والاحتفاظ بالمشاهدين.`,
      a3: `احترم خصوصية المبدعين دائماً؛ البيانات المعروضة تخص الحسابات العامة فقط دون الحاجة لتسجيل الدخول.`,
      q1: `كيف أستفيد من موضوع "${entry.keyword}" على TikProfilesViewer.com؟`,
      ans1: `يمكنك استخدام عارض الملفات والأدوات المرتبطة في هذه الصفحة لفحص الحسابات العامة، واستخراج الصوت أو الفيديو، ومراجعة الاتجاهات ذات الصلة.`,
      q2: `هل يتطلب فحص الحسابات العامة المرتبطة بهذا الموضوع تسجيل دخول؟`,
      ans2: `لا، جميع الأدوات وصفحات الاستكشاف تعمل مباشرة في المتصفح بشكل مجهول ومجاني دون حساب.`,
    },
    fr: {
      summary: `Guide structuré sur "${entry.keyword}" dans la catégorie ${catLabel} (${trendLabel}), conçu pour les besoins de ${intentLabel} autour de ${entry.nicheTopic}.`,
      whyItMatters: `Suivre l’intention derrière "${entry.keyword}" aide les créateurs et analystes à repérer les profils publics pertinents et les formats efficaces.`,
      a1: `Testez des comptes publics liés à ${entry.nicheTopic} directement avec le module de recherche intégré ci-dessous.`,
      a2: `Associez ce mot-clé aux sons populaires et requêtes associées pour structurer des contenus plus clairs.`,
      a3: `Consultez uniquement des données publiques sans connexion ni collecte d’historique personnel.`,
      q1: `Comment utiliser les outils liés à "${entry.keyword}" ?`,
      ans1: `Ouvrez l’outil recommandé sur cette page ou inspectez un créateur public directement dans le lecteur ci-dessous.`,
      q2: `Les statistiques et profils affichés nécessitent-ils un compte TikTok ?`,
      ans2: `Non, la consultation de profils publics est entièrement anonyme et accessible sans inscription.`,
    },
    es: {
      summary: `Guía estructurada sobre "${entry.keyword}" dentro de ${catLabel} (${trendLabel}), pensada para búsquedas de ${intentLabel} en ${entry.nicheTopic}.`,
      whyItMatters: `Analizar "${entry.keyword}" permite encontrar creadores públicos relevantes, herramientas compatibles y tendencias reales de formato.`,
      a1: `Explora perfiles públicos relacionados con ${entry.nicheTopic} usando el visor interactivo de abajo.`,
      a2: `Combina esta búsqueda con palabras clave relacionadas y sonidos recomendados para descubrir nuevas ideas.`,
      a3: `El acceso se limita siempre a perfiles públicos y se ejecuta de forma anónima en tu navegador.`,
      q1: `¿Cómo aprovechar la guía de "${entry.keyword}"?`,
      ans1: `Puedes abrir la herramienta recomendada arriba o buscar cualquier creador público directamente en el visor integrado.`,
      q2: `¿Necesito iniciar sesión para consultar estos perfiles?`,
      ans2: `No. Todo funciona de forma anónima y gratuita directamente desde el navegador.`,
    },
    de: {
      summary: `Strukturierter Leitfaden zu "${entry.keyword}" in der Kategorie ${catLabel} (${trendLabel}) für ${intentLabel} im Bereich ${entry.nicheTopic}.`,
      whyItMatters: `Das Verständnis von "${entry.keyword}" hilft Creatorn und Analysten, passende öffentliche Profile, Sounds und Content-Formate schneller zu finden.`,
      a1: `Prüfe öffentliche Konten rund um ${entry.nicheTopic} direkt im eingebetteten Profil-Viewer unten.`,
      a2: `Verknüpfe dieses Keyword mit verwandten Suchbegriffen und passenden TikTok-Sounds.`,
      a3: `Alle Abfragen greifen ausschließlich auf öffentliche Profile ohne Anmeldung zu.`,
      q1: `Wie nutze ich die Werkzeuge für "${entry.keyword}"?`,
      ans1: `Öffne das passende Tool über die Schaltfläche oben oder suche direkt unten nach einem öffentlichen Profil.`,
      q2: `Ist für den Zugriff ein TikTok-Konto erforderlich?`,
      ans2: `Nein, die Nutzung erfolgt vollständig anonym und kostenlos im Browser.`,
    },
    ru: {
      summary: `Структурированное руководство по запросу "${entry.keyword}" в категории "${catLabel}" (${trendLabel}) для задач типа "${intentLabel}" в теме ${entry.nicheTopic}.`,
      whyItMatters: `Понимание спроса по запросу "${entry.keyword}" помогает находить открытые аккаунты авторов, актуальные звуки и подходящие инструменты.`,
      a1: `Проверяйте открытые профили по теме ${entry.nicheTopic} прямо во встроенном окне поиска ниже.`,
      a2: `Используйте связанные ключевые слова и рекомендованные треки для более точного подбора форматов.`,
      a3: `Просмотр работает анонимно и только для публичных профилей без авторизации.`,
      q1: `Как применить инструменты по теме "${entry.keyword}"?`,
      ans1: `Откройте рекомендованный инструмент выше или введите публичный никнейм в просмотрщик профилей ниже.`,
      q2: `Нужен ли аккаунт TikTok для просмотра профилей?`,
      ans2: `Нет, все функции работают анонимно и бесплатно прямо в браузере.`,
    },
    zh: {
      summary: `关于“${entry.keyword}”的结构化指南，属于${catLabel}（${trendLabel}），面向${entry.nicheTopic}领域的${intentLabel}需求。`,
      whyItMatters: `了解“${entry.keyword}”背后的搜索意图，有助于创作者和研究者快速定位相关公开主页、适用工具与热门音频。`,
      a1: `使用下方内置的公开主页查看器，实时搜索${entry.nicheTopic}领域的公开创作者数据。`,
      a2: `结合相关关键词与推荐音效，整理更清晰的内容选题和标签结构。`,
      a3: `所有查看功能仅面向公开账号，无需登录，全程匿名安全。`,
      q1: `如何使用与“${entry.keyword}”相关的工具？`,
      ans1: `点击页面上的推荐工具按钮，或直接在下方搜索框输入任意公开 TikTok 用户名即可。`,
      q2: `查看公开主页需要登录 TikTok 账号吗？`,
      ans2: `不需要，所有公开主页查看和下载工具均可在浏览器中匿名免费使用。`,
    },
    pt: {
      summary: `Guia estruturado para "${entry.keyword}" na categoria ${catLabel} (${trendLabel}), focado em ${intentLabel} no tema ${entry.nicheTopic}.`,
      whyItMatters: `Entender a busca por "${entry.keyword}" ajuda criadores e pesquisadores a encontrar perfis públicos relevantes, áudios e formatos úteis.`,
      a1: `Teste perfis públicos de ${entry.nicheTopic} diretamente no visualizador integrado abaixo.`,
      a2: `Combine este termo com palavras relacionadas e sons em alta para planejar novos vídeos.`,
      a3: `Toda consulta acessa apenas contas públicas de maneira anônima e gratuita.`,
      q1: `Como usar as ferramentas ligadas a "${entry.keyword}"?`,
      ans1: `Abra a ferramenta recomendada nesta página ou busque qualquer criador público no visualizador abaixo.`,
      q2: `Preciso de conta no TikTok para consultar perfis?`,
      ans2: `Não. O acesso público funciona diretamente no navegador sem login.`,
    },
    he: {
      summary: `מדריך מובנה עבור "${entry.keyword}" בקטגוריית ${catLabel} (${trendLabel}), המותאם לצורכי ${intentLabel} בתחום ${entry.nicheTopic}.`,
      whyItMatters: `הבנת הביקוש סביב "${entry.keyword}" מסייעת ליוצרים ולחוקרים לאתר פרופילים ציבוריים, צלילים מתאימים וכלים שימושיים.`,
      a1: `בדוק חשבונות ציבוריים בתחום ${entry.nicheTopic} ישירות בחלון החיפוש המוטמע למטה.`,
      a2: `שלב מילות מפתח קשורות עם צלילים טרנדיים לתכנון תוכן מדויק יותר.`,
      a3: `כל הבדיקות מתבצעות באופן אנונימי ועבור חשבונות ציבוריים בלבד.`,
      q1: `איך משתמשים בכלים הקשורים ל-"${entry.keyword}"?`,
      ans1: `פתח את הכלי המומלץ בעמוד זה או חפש כל פרופיל ציבורי ישירות במציג הפרופילים למטה.`,
      q2: `האם נדרש חשבון טיקטוק לצפייה בפרופילים?`,
      ans2: `לא, הכול עובד בחינם ובאופן אנונימי ישירות בדפדפן.`,
    },
    hi: {
      summary: `${catLabel} (${trendLabel}) के अंतर्गत "${entry.keyword}" पर केंद्रित गाइड, जो ${entry.nicheTopic} में ${intentLabel} के लिए तैयार किया गया है।`,
      whyItMatters: `"${entry.keyword}" के पीछे की सर्च मांग को समझने से क्रिएटर्स और शोधकर्ता सही पब्लिक अकाउंट, ट्रेंडिंग साउंड्स और टूल्स आसानी से खोज सकते हैं।`,
      a1: `नीचे दिए गए लाइव व्यूअर में ${entry.nicheTopic} से जुड़े पब्लिक क्रिएटर प्रोफाइल तुरंत जांचें।`,
      a2: `बेहतर कंटेंट प्लानिंग के लिए इस विषय को संबंधित कीवर्ड और मेल खाते साउंड्स के साथ जोड़ें।`,
      a3: `सभी जांच केवल पब्लिक अकाउंट्स तक सीमित हैं और बिना लॉगिन के गुमनाम रूप से काम करती हैं।`,
      q1: `"${entry.keyword}" से जुड़े टूल्स का उपयोग कैसे करें?`,
      ans1: `इस पेज पर दिए गए संबंधित टूल बटन को खोलें या नीचे सीधे किसी पब्लिक यूजरनेम को खोजें।`,
      q2: `क्या इन पब्लिक प्रोफाइल्स को देखने के लिए TikTok लॉगिन जरूरी है?`,
      ans2: `नहीं, यह पूरी तरह से मुफ्त और बिना लॉगिन के ब्राउज़र में काम करता है।`,
    },
  };

  const tData = templates[lang];
  return {
    summary: tData.summary,
    whyItMatters: tData.whyItMatters,
    contentAngles: [tData.a1, tData.a2, tData.a3],
    faqs: [
      { question: tData.q1, answer: tData.ans1 },
      { question: tData.q2, answer: tData.ans2 },
    ],
  };
}