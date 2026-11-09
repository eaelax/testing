export interface CreatorData {
  username: string;
  displayName: string;
  category: string;
  categorySlug: string;
  followers: string;
  followerCount: number;
  likes: string;
  heartCount: number;
  bio: string;
  verified: boolean;
  avatar: string;
  country: string;
}

export interface CategoryData {
  slug: string;
  name: string;
  title: string;
  iconName: string;
  shortDescription: string;
  seoDescription: string;
  creatorUsernames: string[];
  trendingTags: string[];
  faqs: { question: string; answer: string }[];
}

export const CATEGORIES: CategoryData[] = [
  {
    slug: 'comedy',
    name: 'Comedy & Entertainment',
    title: 'Top TikTok Comedians & Viral Sketch Creators',
    iconName: 'Laugh',
    shortDescription: 'Discover the funniest TikTok creators, viral parodies, and life-hack debunkers.',
    seoDescription: 'Explore trending TikTok comedy creators, view engagement stats, and download funny clips in HD watermark-free MP4 and MP3 audio.',
    creatorUsernames: ['khaby.lame', 'zachking', 'mrbeast', 'spencerx', 'jasonderulo', 'charlidamelio'],
    trendingTags: ['#funny', '#comedy', '#humor', '#meme', '#sketch', '#lol'],
    faqs: [
      {
        question: 'Who is the most followed comedy creator on TikTok?',
        answer: 'Khaby Lame (@khaby.lame) is the most followed comedy creator on TikTok with over 160 million followers, famous for his signature silent reactions to overcomplicated life hacks.'
      },
      {
        question: 'Can I download TikTok comedy clips without watermarks?',
        answer: 'Yes! Using TikVault, you can download any public TikTok comedy video in original HD MP4 quality without the bouncing TikTok watermark logo.'
      },
      {
        question: 'How do TikTok comedians achieve high engagement rates?',
        answer: 'Comedy creators typically maintain 8-15% engagement rates because humorous short-form content drives high rewatch rates, comment arguments, and cross-platform shares.'
      }
    ]
  },
  {
    slug: 'food-cooking',
    name: 'Food & Cooking',
    title: 'Best TikTok Chefs, Foodies & Recipe Creators',
    iconName: 'Utensils',
    shortDescription: 'Watch mouthwatering culinary creations, quick 15-minute recipes, and restaurant reviews.',
    seoDescription: 'Browse the top culinary and recipe creators on TikTok. View follower counts, stream recipes without watermarks, and save audio tracks.',
    creatorUsernames: ['cznburak', 'gordonramsayofficial', 'the_pastaqueen', 'bayashi.tiktok', 'albert_cancook'],
    trendingTags: ['#foodtiktok', '#recipe', '#easyrecipe', '#cheflife', '#foodie', '#delicious'],
    faqs: [
      {
        question: 'How do I download TikTok recipe videos to cook later?',
        answer: 'Search any food creator on TikVault (like @gordonramsayofficial or @cznburak) and click Download HD Video to save the cooking tutorial directly to your device.'
      },
      {
        question: 'Who are the top chefs on TikTok?',
        answer: 'Notable chefs on TikTok include Gordon Ramsay (@gordonramsayofficial), Burak Özdemir (@cznburak), Bayashi (@bayashi.tiktok), and Albert Cancook (@albert_cancook).'
      }
    ]
  },
  {
    slug: 'tech-ai',
    name: 'Tech & AI',
    title: 'Top TikTok Tech Reviewers, AI Hacks & Gadget Creators',
    iconName: 'Cpu',
    shortDescription: 'Stay ahead of the curve with AI tools, smartphone reviews, PC setups, and software tricks.',
    seoDescription: 'Discover premier tech and AI creators on TikTok. View stats, download tutorial videos without watermarks, and analyze engagement metrics.',
    creatorUsernames: ['mkbhd', 'supersaf', 'urfavtechguy', 'andruhils', 'charlie_green'],
    trendingTags: ['#techtok', '#gadgets', '#apple', '#techreview', '#ai', '#productivity'],
    faqs: [
      {
        question: 'Can I download TikTok tech tutorials to watch offline?',
        answer: 'Yes, TikVault allows instant watermark-free MP4 downloads so you can reference software tutorials, coding tips, and hardware guides offline.'
      },
      {
        question: 'What is the best way to analyze a tech creator on TikTok?',
        answer: 'Use TikVault’s TikTok Analytics tool to calculate average view counts, engagement percentage, and total likes across their public posts.'
      }
    ]
  },
  {
    slug: 'gaming',
    name: 'Gaming & Esports',
    title: 'Best TikTok Gamers, Streamers & Esports Highlights',
    iconName: 'Gamepad2',
    shortDescription: 'Watch intense gaming clips, speedruns, funny glitches, and esports tournament highlights.',
    seoDescription: 'Explore top TikTok gaming personalities. Stream clips without watermarks, download sound effects in MP3, and view gamer profile statistics.',
    creatorUsernames: ['ninja', 'pokimane', 'timthetatman', 'tfue', 'sypherpk'],
    trendingTags: ['#gaming', '#gamer', '#gamertok', '#esports', '#fortnite', '#minecraft'],
    faqs: [
      {
        question: 'How do I extract TikTok gaming sound clips in MP3 format?',
        answer: 'Open the gamer profile on TikVault, select any video card, and click Download Audio Only (MP3) to save the background music or audio meme.'
      },
      {
        question: 'Can I view gamer TikTok profiles without having an account?',
        answer: 'Yes! TikVault is 100% anonymous and free—no TikTok login, app installation, or personal account is required.'
      }
    ]
  },
  {
    slug: 'fitness-sports',
    name: 'Fitness & Sports',
    title: 'Top TikTok Fitness Coaches, Athletes & Workout Routines',
    iconName: 'Dumbbell',
    shortDescription: 'Get inspired by gym workout routines, calisthenics, mobility drills, and athletic stunts.',
    seoDescription: 'Find leading fitness coaches and athletes on TikTok. Download workout tutorials in watermark-free HD to follow along at the gym.',
    creatorUsernames: ['demibagby', 'leanbeefpatty', 'chris_heria', 'joesthetics', 'hybridcalisthenics'],
    trendingTags: ['#gymtok', '#fitnesstips', '#workout', '#calisthenics', '#bodybuilding', '#health'],
    faqs: [
      {
        question: 'How can I save TikTok workout videos to my phone gallery?',
        answer: 'Enter the fitness creator username on TikVault, tap on the workout routine video, and click Download HD Video. The MP4 saves directly to your device storage.'
      },
      {
        question: 'Are fitness videos downloaded with watermarks?',
        answer: 'No. All videos downloaded through TikVault are 100% clean, high-definition streams with zero watermark or creator overlays.'
      }
    ]
  },
  {
    slug: 'dance-music',
    name: 'Dance & Music',
    title: 'Trending TikTok Dancers, Choreographers & Musical Artists',
    iconName: 'Music',
    shortDescription: 'Learn viral dance trends, watch choreography, and extract trending sound tracks.',
    seoDescription: 'Discover viral TikTok dance creators and musicians. Download HD choreography videos and extract original trending audio files in MP3 format.',
    creatorUsernames: ['charlidamelio', 'bellapoarch', 'addisonre', 'michael.le', 'dixiedamelio'],
    trendingTags: ['#dance', '#dancetrend', '#music', '#choreography', '#trendingdance', '#pop'],
    faqs: [
      {
        question: 'How do I download the original sound from a viral TikTok dance?',
        answer: 'Select the dance video in TikVault and click Download Audio Only (MP3) to download the high-fidelity 320kbps audio file directly.'
      },
      {
        question: 'Who are the biggest dance influencers on TikTok?',
        answer: 'Charli D’Amelio (@charlidamelio), Addison Rae (@addisonre), and Michael Le (@michael.le) are among the most famous dance influencers in TikTok history.'
      }
    ]
  }
];

export const CREATORS: CreatorData[] = [
  {
    username: 'khaby.lame',
    displayName: 'Khaby Lame',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '162.8M',
    followerCount: 162800000,
    likes: '2.5B',
    heartCount: 2500000000,
    bio: 'If you want to laugh, you are in the right place! Italian-Senegalese creator known for silent life-hack debunking.',
    verified: true,
    avatar: '/api/avatar?username=khaby.lame',
    country: 'Italy'
  },
  {
    username: 'charlidamelio',
    displayName: 'Charli D’Amelio',
    category: 'Dance & Music',
    categorySlug: 'dance-music',
    followers: '155.4M',
    followerCount: 155400000,
    likes: '11.6B',
    heartCount: 11600000000,
    bio: 'All smiles here :) Viral dancer, creator, and entrepreneur from Connecticut.',
    verified: true,
    avatar: '/api/avatar?username=charlidamelio',
    country: 'United States'
  },
  {
    username: 'mrbeast',
    displayName: 'MrBeast',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '104.2M',
    followerCount: 104200000,
    likes: '1.1B',
    heartCount: 1100000000,
    bio: 'I want to make the world a better place before I die. Philanthropist and creator of high-stakes challenges.',
    verified: true,
    avatar: '/api/avatar?username=mrbeast',
    country: 'United States'
  },
  {
    username: 'bellapoarch',
    displayName: 'Bella Poarch',
    category: 'Dance & Music',
    categorySlug: 'dance-music',
    followers: '94.1M',
    followerCount: 94100000,
    likes: '2.3B',
    heartCount: 2300000000,
    bio: 'Navy veteran, singer, and creator of the most liked video in TikTok history (M to the B).',
    verified: true,
    avatar: '/api/avatar?username=bellapoarch',
    country: 'United States'
  },
  {
    username: 'addisonre',
    displayName: 'Addison Rae',
    category: 'Dance & Music',
    categorySlug: 'dance-music',
    followers: '88.5M',
    followerCount: 88500000,
    likes: '5.9B',
    heartCount: 5900000000,
    bio: 'Pop singer, actress, and dance icon from Louisiana.',
    verified: true,
    avatar: '/api/avatar?username=addisonre',
    country: 'United States'
  },
  {
    username: 'zachking',
    displayName: 'Zach King',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '82.3M',
    followerCount: 82300000,
    likes: '1.2B',
    heartCount: 1200000000,
    bio: 'Bringing a little more wonder into the world. Master of digital sleight of hand and illusion videos.',
    verified: true,
    avatar: '/api/avatar?username=zachking',
    country: 'United States'
  },
  {
    username: 'cznburak',
    displayName: 'Burak Özdemir (CznBurak)',
    category: 'Food & Cooking',
    categorySlug: 'food-cooking',
    followers: '75.2M',
    followerCount: 75200000,
    likes: '1.5B',
    heartCount: 1500000000,
    bio: 'Smiley chef preparing giant kebabs, burgers, and Turkish feasts with a constant smile.',
    verified: true,
    avatar: '/api/avatar?username=cznburak',
    country: 'Turkey'
  },
  {
    username: 'gordonramsayofficial',
    displayName: 'Gordon Ramsay',
    category: 'Food & Cooking',
    categorySlug: 'food-cooking',
    followers: '40.6M',
    followerCount: 40600000,
    likes: '620M',
    heartCount: 620000000,
    bio: 'Always judging your cooking. Multi-Michelin starred chef and TV personality.',
    verified: true,
    avatar: '/api/avatar?username=gordonramsayofficial',
    country: 'United Kingdom'
  },
  {
    username: 'spencerx',
    displayName: 'Spencer X',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '55.3M',
    followerCount: 55300000,
    likes: '1.3B',
    heartCount: 1300000000,
    bio: 'One-man beatbox powerhouse producing mind-blowing tracks entirely with his mouth.',
    verified: true,
    avatar: '/api/avatar?username=spencerx',
    country: 'United States'
  },
  {
    username: 'jasonderulo',
    displayName: 'Jason Derulo',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '60.4M',
    followerCount: 60400000,
    likes: '1.4B',
    heartCount: 1400000000,
    bio: 'Savage Love! Singer, entertainer, and creator of viral culinary and dance skits.',
    verified: true,
    avatar: '/api/avatar?username=jasonderulo',
    country: 'United States'
  },
  {
    username: 'demibagby',
    displayName: 'Demi Bagby',
    category: 'Fitness & Sports',
    categorySlug: 'fitness-sports',
    followers: '14.5M',
    followerCount: 14500000,
    likes: '340M',
    heartCount: 340000000,
    bio: 'Crossfit athlete, stunt enthusiast, and calisthenics adventurer spreading positive energy.',
    verified: true,
    avatar: '/api/avatar?username=demibagby',
    country: 'United States'
  },
  {
    username: 'ninja',
    displayName: 'Tyler Blevins (Ninja)',
    category: 'Gaming & Esports',
    categorySlug: 'gaming',
    followers: '19.2M',
    followerCount: 19200000,
    likes: '180M',
    heartCount: 180000000,
    bio: 'World famous gaming streamer, competitive battle royale pioneer, and content creator.',
    verified: true,
    avatar: '/api/avatar?username=ninja',
    country: 'United States'
  },
  {
    username: 'pokimane',
    displayName: 'Imane Anys (Pokimane)',
    category: 'Gaming & Esports',
    categorySlug: 'gaming',
    followers: '6.7M',
    followerCount: 6700000,
    likes: '85M',
    heartCount: 85000000,
    bio: 'Gaming enthusiast, variety streamer, and co-founder of RTS talent agency.',
    verified: true,
    avatar: '/api/avatar?username=pokimane',
    country: 'Canada'
  },
  {
    username: 'mkbhd',
    displayName: 'Marques Brownlee (MKBHD)',
    category: 'Tech & AI',
    categorySlug: 'tech-ai',
    followers: '3.8M',
    followerCount: 3800000,
    likes: '68M',
    heartCount: 68000000,
    bio: 'Crisp tech reviews, smartphone blind camera tests, and deep dives into the future of technology.',
    verified: true,
    avatar: '/api/avatar?username=mkbhd',
    country: 'United States'
  },
  {
    username: 'bayashi.tiktok',
    displayName: 'Bayashi',
    category: 'Food & Cooking',
    categorySlug: 'food-cooking',
    followers: '54.8M',
    followerCount: 54800000,
    likes: '1.6B',
    heartCount: 1600000000,
    bio: 'ASMR fast-paced cooking tutorials featuring deep-fried cheeses, meats, and delicious comfort food.',
    verified: true,
    avatar: '/api/avatar?username=bayashi.tiktok',
    country: 'Japan'
  }
];

export function getCreatorByUsername(username: string): CreatorData | undefined {
  const clean = username.toLowerCase().replace(/^@/, '').trim();
  return CREATORS.find((c) => c.username.toLowerCase() === clean);
}

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return CATEGORIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getCreatorsByCategory(categorySlug: string): CreatorData[] {
  return CREATORS.filter((c) => c.categorySlug === categorySlug);
}
