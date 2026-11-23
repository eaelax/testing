import type { LanguageCode } from './types';
import type { CategoryData, CreatorData } from '../creators-data';

interface LocalizedCategoryText {
  name: string;
  title: string;
  shortDescription: string;
  seoDescription: string;
  faqs: { question: string; answer: string }[];
}

const CATEGORY_TEXTS: Record<
  Exclude<LanguageCode, 'en'>,
  Record<string, LocalizedCategoryText>
> = {
  ar: {
    comedy: {
      name: 'الكوميديا والترفيه',
      title: 'أشهر كوميدي تيك توك وصناع المقاطع الساخرة',
      shortDescription: 'اكتشف أطرف مبدعي تيك توك والمحاكاة الساخرة ومقاطع ردود الفعل.',
      seoDescription:
        'استعرض أشهر صناع الكوميديا على تيك توك وإحصائيات التفاعل وحمّل المقاطع بجودة HD بدون علامة مائية.',
      faqs: [
        {
          question: 'من هو صانع الكوميديا الأكثر متابعة على تيك توك؟',
          answer: 'يعد Khaby Lame (@khaby.lame) الأكثر متابعة بأكثر من 160 مليون متابع بفضل ردود فعله الصامتة.',
        },
        {
          question: 'هل يمكنني تنزيل مقاطع الكوميديا بدون علامة مائية؟',
          answer: 'نعم. يتيح لك عارض ملفات تيك توك حفظ أي فيديو كوميدي عام بصيغة MP4 HD نظيفة.',
        },
        {
          question: 'كيف يحقق صناع الكوميديا معدلات تفاعل عالية؟',
          answer: 'تحقق المقاطع القصيرة المضحكة إعادة مشاهدة ومشاركات وتعليقات مرتفعة باستمرار.',
        },
      ],
    },
    'food-cooking': {
      name: 'الطعام والطبخ',
      title: 'أفضل طهاة تيك توك وصناع الوصفات',
      shortDescription: 'شاهد وصفات سريعة في 15 دقيقة وأطباق شهية ومراجعات المطاعم.',
      seoDescription:
        'تصفح أشهر صناع الطبخ والوصفات على تيك توك واحفظ فيديوهات الطهي بدون علامة مائية.',
      faqs: [
        {
          question: 'كيف أحفظ فيديوهات الوصفات للطبخ لاحقاً؟',
          answer: 'ابحث عن أي طاهٍ مثل @gordonramsayofficial أو @cznburak واضغط تنزيل فيديو HD.',
        },
        {
          question: 'من هم أبرز الطهاة على تيك توك؟',
          answer: 'من أبرزهم Gordon Ramsay وBurak Ozdemir وBayashi وAlbert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'التقنية والذكاء الاصطناعي',
      title: 'أفضل مراجعي التقنية والذكاء الاصطناعي على تيك توك',
      shortDescription: 'تابع أحدث أدوات الذكاء الاصطناعي ومراجعات الهواتف وإعدادات المكتب.',
      seoDescription:
        'اكتشف صناع التقنية والذكاء الاصطناعي على تيك توك وحمّل الشروحات بدون علامة مائية.',
      faqs: [
        {
          question: 'هل يمكنني تنزيل شروحات التقنية للمشاهدة بدون إنترنت؟',
          answer: 'نعم، يدعم الموقع تنزيل MP4 فوري بدون علامة مائية للمشاهدة لاحقاً.',
        },
        {
          question: 'ما أفضل طريقة لتحليل حساب تقني على تيك توك؟',
          answer: 'استخدم أداة تحليلات تيك توك لفحص متوسط المشاهدات ونسبة التفاعل.',
        },
      ],
    },
    gaming: {
      name: 'الألعاب والرياضات الإلكترونية',
      title: 'أفضل لاعبي تيك توك ومقاطع البث والبطولات',
      shortDescription: 'شاهد لقطات اللعب السريعة والسبيد رن وأبرز لحظات البطولات.',
      seoDescription:
        'استكشف شخصيات الألعاب على تيك توك واستخرج الصوتيات MP3 واعرض الإحصائيات.',
      faqs: [
        {
          question: 'كيف أستخرج مقاطع الصوت من فيديوهات الألعاب بصيغة MP3؟',
          answer: 'افتح ملف اللاعب واختر أي فيديو ثم اضغط تنزيل الصوت (MP3).',
        },
        {
          question: 'هل أحتاج إلى حساب لمشاهدة ملفات اللاعبين؟',
          answer: 'لا. الخدمة مجهولة ومجانية 100% ولا تتطلب تسجيل دخول.',
        },
      ],
    },
    'fitness-sports': {
      name: 'اللياقة والرياضة',
      title: 'أشهر مدربي اللياقة والرياضيين على تيك توك',
      shortDescription: 'استلهم من تمارين النادي والكاليسثنكس والمرونة والحركات الرياضية.',
      seoDescription:
        'اعثر على مدربي اللياقة في تيك توك وحمّل تمارينهم بجودة HD للمتابعة في النادي.',
      faqs: [
        {
          question: 'كيف أحفظ فيديوهات التمارين على هاتفي؟',
          answer: 'أدخل اسم المدرب وافتح الفيديو ثم اضغط تنزيل فيديو HD للحفظ مباشرة.',
        },
        {
          question: 'هل تحتوي فيديوهات التمارين على علامة مائية؟',
          answer: 'لا. جميع التنزيلات نظيفة وعالية الدقة بدون أي شعار.',
        },
      ],
    },
    'dance-music': {
      name: 'الرقص والموسيقى',
      title: 'أشهر الراقصين ومصممي الرقص والموسيقيين على تيك توك',
      shortDescription: 'تعلّم الرقصات الرائجة واستخرج المقاطع الموسيقية الشائعة.',
      seoDescription:
        'اكتشف مبدعي الرقص والموسيقى على تيك توك ونزّل المقاطع بصيغة MP4 وMP3.',
      faqs: [
        {
          question: 'كيف أحمّل الصوت الأصلي من فيديو رقص رائج؟',
          answer: 'اختر الفيديو داخل العارض واضغط تنزيل الصوت (MP3) للحفظ مباشرة.',
        },
        {
          question: 'من هم أبرز مبدعي الرقص على تيك توك؟',
          answer: 'من أشهرهم Charli D’Amelio وAddison Rae وMichael Le.',
        },
      ],
    },
  },
  fr: {
    comedy: {
      name: 'Comédie & Divertissement',
      title: 'Top Humoristes & Créateurs de Sketchs TikTok',
      shortDescription: 'Découvrez les créateurs les plus drôles, parodies virales et réactions.',
      seoDescription: 'Explorez les créateurs humour sur TikTok et téléchargez en HD sans filigrane.',
      faqs: [
        {
          question: 'Qui est le créateur comédie le plus suivi sur TikTok ?',
          answer: 'Khaby Lame (@khaby.lame) dépasse 160 millions d’abonnés avec ses réactions silencieuses.',
        },
        {
          question: 'Puis-je télécharger les sketchs sans filigrane ?',
          answer: 'Oui, en MP4 HD original sans logo TikTok.',
        },
        {
          question: 'Pourquoi les humoristes ont-ils un fort engagement ?',
          answer: 'Les vidéos courtes drôles génèrent beaucoup de partages, commentaires et rediffusions.',
        },
      ],
    },
    'food-cooking': {
      name: 'Cuisine & Gastronomie',
      title: 'Meilleurs Chefs & Créateurs Recettes sur TikTok',
      shortDescription: 'Recettes rapides en 15 minutes, plats savoureux et avis restaurants.',
      seoDescription: 'Parcourez les meilleurs chefs TikTok et sauvegardez leurs recettes sans filigrane.',
      faqs: [
        {
          question: 'Comment sauvegarder une recette TikTok pour cuisiner plus tard ?',
          answer: 'Recherchez un chef comme @gordonramsayofficial et cliquez sur Télécharger Vidéo HD.',
        },
        {
          question: 'Qui sont les grands chefs sur TikTok ?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi et Albert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'Tech & IA',
      title: 'Top Testeurs Tech, Astuces IA & Gadgets TikTok',
      shortDescription: 'Tests smartphones, outils IA, setups PC et astuces logicielles.',
      seoDescription: 'Découvrez les créateurs Tech & IA sur TikTok et téléchargez leurs tutoriels HD.',
      faqs: [
        {
          question: 'Puis-je regarder les tutoriels tech hors ligne ?',
          answer: 'Oui, téléchargez le MP4 sans filigrane directement sur votre appareil.',
        },
        {
          question: 'Comment analyser un compte tech ?',
          answer: 'Utilisez l’outil Analytique pour voir vues moyennes et taux d’engagement.',
        },
      ],
    },
    gaming: {
      name: 'Gaming & Esports',
      title: 'Meilleurs Gamers, Streamers & Moments Esports TikTok',
      shortDescription: 'Clips intenses, speedruns, bugs drôles et tournois esports.',
      seoDescription: 'Explorez les créateurs gaming TikTok et extrayez les audios en MP3.',
      faqs: [
        {
          question: 'Comment extraire les sons gaming en MP3 ?',
          answer: 'Ouvrez une vidéo du joueur puis cliquez sur Télécharger Audio (MP3).',
        },
        {
          question: 'Faut-il un compte pour voir ces profils ?',
          answer: 'Non, la consultation est anonyme et sans connexion.',
        },
      ],
    },
    'fitness-sports': {
      name: 'Fitness & Sport',
      title: 'Top Coachs Fitness, Athlètes & Entraînements TikTok',
      shortDescription: 'Routines de musculation, callisthénie, mobilité et défis sportifs.',
      seoDescription: 'Trouvez des coachs sportifs TikTok et téléchargez leurs exercices en HD.',
      faqs: [
        {
          question: 'Comment enregistrer les séances sur mon téléphone ?',
          answer: 'Saisissez le pseudo du coach, ouvrez la vidéo et cliquez sur Télécharger Vidéo HD.',
        },
        {
          question: 'Les vidéos ont-elles un filigrane ?',
          answer: 'Non, tous les téléchargements sont propres et sans logo.',
        },
      ],
    },
    'dance-music': {
      name: 'Danse & Musique',
      title: 'Danseurs, Chorégraphes & Artistes Populaires TikTok',
      shortDescription: 'Apprenez les chorégraphies virales et extrayez les sons populaires.',
      seoDescription: 'Découvrez les danseurs et musiciens TikTok et sauvegardez vidéo HD ou MP3.',
      faqs: [
        {
          question: 'Comment télécharger le son original d’une danse ?',
          answer: 'Sélectionnez la vidéo puis cliquez sur Télécharger Audio (MP3).',
        },
        {
          question: 'Qui sont les plus grands créateurs danse ?',
          answer: 'Charli D’Amelio, Addison Rae et Michael Le figurent parmi les plus célèbres.',
        },
      ],
    },
  },
  es: {
    comedy: {
      name: 'Comedia y Entretenimiento',
      title: 'Top Comediantes y Creadores de Humor en TikTok',
      shortDescription: 'Descubre los creadores más graciosos, parodias y reacciones virales.',
      seoDescription: 'Explora creadores de comedia en TikTok y descarga clips HD sin marca de agua.',
      faqs: [
        {
          question: '¿Quién es el creador de comedia más seguido en TikTok?',
          answer: 'Khaby Lame (@khaby.lame) supera los 160 millones de seguidores con sus reacciones mudas.',
        },
        {
          question: '¿Puedo descargar videos de humor sin marca de agua?',
          answer: 'Sí, en MP4 HD original sin logotipo.',
        },
        {
          question: '¿Por qué los comediantes logran tanta interacción?',
          answer: 'Los videos breves graciosos impulsan repeticiones, comentarios y envíos.',
        },
      ],
    },
    'food-cooking': {
      name: 'Comida y Cocina',
      title: 'Mejores Chefs y Creadores de Recetas en TikTok',
      shortDescription: 'Recetas rápidas de 15 minutos, platos deliciosos y reseñas.',
      seoDescription: 'Explora chefs en TikTok y guarda recetas en HD sin marca de agua.',
      faqs: [
        {
          question: '¿Cómo guardo recetas para cocinar luego?',
          answer: 'Busca cualquier chef como @gordonramsayofficial y pulsa Descargar Video HD.',
        },
        {
          question: '¿Quiénes son los chefs más famosos en TikTok?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi y Albert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'Tecnología e IA',
      title: 'Top Reseñadores Tech, Trucos de IA y Gadgets en TikTok',
      shortDescription: 'Novedades en IA, teléfonos, setups de escritorio y trucos de software.',
      seoDescription: 'Descubre creadores de tecnología e IA y guarda tutoriales HD.',
      faqs: [
        {
          question: '¿Puedo ver tutoriales tech sin conexión?',
          answer: 'Sí, descarga MP4 limpio sin marca de agua directo a tu dispositivo.',
        },
        {
          question: '¿Cómo analizar un creador tech?',
          answer: 'Usa nuestra herramienta de Analítica para ver promedio de vistas e interacción.',
        },
      ],
    },
    gaming: {
      name: 'Gaming y Esports',
      title: 'Mejores Gamers, Streamers y Torneos en TikTok',
      shortDescription: 'Jugadas destacadas, speedruns, fallos graciosos y esports.',
      seoDescription: 'Explora gamers en TikTok y extrae audios en MP3.',
      faqs: [
        {
          question: '¿Cómo extraigo audios gaming en MP3?',
          answer: 'Abre el perfil del gamer, elige un clip y pulsa Descargar Audio (MP3).',
        },
        {
          question: '¿Necesito cuenta para ver estos perfiles?',
          answer: 'No, todo funciona de forma anónima y gratuita.',
        },
      ],
    },
    'fitness-sports': {
      name: 'Fitness y Deportes',
      title: 'Top Entrenadores, Atletas y Rutinas en TikTok',
      shortDescription: 'Rutinas de gimnasio, calistenia, movilidad y acrobacias.',
      seoDescription: 'Encuentra entrenadores en TikTok y guarda rutinas en HD sin logo.',
      faqs: [
        {
          question: '¿Cómo guardo rutinas en mi teléfono?',
          answer: 'Busca el usuario del entrenador, abre el video y pulsa Descargar Video HD.',
        },
        {
          question: '¿Los videos descargados llevan marca de agua?',
          answer: 'No, salen completamente limpios en alta definición.',
        },
      ],
    },
    'dance-music': {
      name: 'Baile y Música',
      title: 'Bailarines, Coreógrafos y Artistas Musicales en TikTok',
      shortDescription: 'Aprende bailes virales y descarga las pistas de audio originales.',
      seoDescription: 'Descubre bailarines y músicos en TikTok y guarda MP4 HD o MP3.',
      faqs: [
        {
          question: '¿Cómo descargo el sonido de un baile viral?',
          answer: 'Abre el video y haz clic en Descargar Audio (MP3).',
        },
        {
          question: '¿Quiénes son los mayores creadores de baile?',
          answer: 'Charli D’Amelio, Addison Rae y Michael Le destacan entre los más populares.',
        },
      ],
    },
  },
  de: {
    comedy: {
      name: 'Comedy & Unterhaltung',
      title: 'Top TikTok-Comedians & Sketch-Creator',
      shortDescription: 'Entdecke die lustigsten TikTok-Creator, Parodien und Reaktionen.',
      seoDescription: 'Erkunde TikTok-Comedy-Creator und lade Clips in HD ohne Wasserzeichen.',
      faqs: [
        {
          question: 'Wer ist der meistgefolgte Comedy-Creator auf TikTok?',
          answer: 'Khaby Lame (@khaby.lame) hat über 160 Millionen Follower durch stumme Reaktionen.',
        },
        {
          question: 'Kann ich Comedy-Clips ohne Wasserzeichen laden?',
          answer: 'Ja, als sauberes HD-MP4 ohne TikTok-Logo.',
        },
        {
          question: 'Warum haben Comedians so hohe Engagement-Raten?',
          answer: 'Kurze lustige Videos erzeugen viele Rewatches, Kommentare und Shares.',
        },
      ],
    },
    'food-cooking': {
      name: 'Essen & Kochen',
      title: 'Beste TikTok-Köche, Foodies & Rezept-Creator',
      shortDescription: 'Schnelle 15-Minuten-Rezepte, Gerichte und Restaurant-Reviews.',
      seoDescription: 'Entdecke Top-Köche auf TikTok und speichere Rezepte ohne Wasserzeichen.',
      faqs: [
        {
          question: 'Wie speichere ich Rezeptvideos für später?',
          answer: 'Suche einen Koch wie @gordonramsayofficial und wähle HD-Video laden.',
        },
        {
          question: 'Wer sind bekannte Köche auf TikTok?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi und Albert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'Technik & KI',
      title: 'Top TikTok Tech-Tester, KI-Hacks & Gadgets',
      shortDescription: 'KI-Tools, Smartphone-Tests, PC-Setups und Software-Tipps.',
      seoDescription: 'Entdecke Technik- und KI-Creator und lade Tutorials in HD.',
      faqs: [
        {
          question: 'Kann ich Tech-Tutorials offline ansehen?',
          answer: 'Ja, lade MP4-Videos sauber ohne Wasserzeichen direkt auf dein Gerät.',
        },
        {
          question: 'Wie analysiere ich einen Tech-Account?',
          answer: 'Nutze unser Analytics-Tool für Durchschnittsaufrufe und Engagement.',
        },
      ],
    },
    gaming: {
      name: 'Gaming & Esports',
      title: 'Beste TikTok-Gamer, Streamer & Esports-Highlights',
      shortDescription: 'Intensive Gaming-Clips, Speedruns und Turnier-Highlights.',
      seoDescription: 'Entdecke Gaming-Creator und extrahiere Sounds als MP3.',
      faqs: [
        {
          question: 'Wie speichere ich Gaming-Sounds als MP3?',
          answer: 'Öffne ein Video des Gamers und klicke auf Audio laden (MP3).',
        },
        {
          question: 'Brauche ich ein Konto dafür?',
          answer: 'Nein, die Nutzung ist 100% anonym und kostenlos.',
        },
      ],
    },
    'fitness-sports': {
      name: 'Fitness & Sport',
      title: 'Top TikTok Fitness-Coaches, Athleten & Workouts',
      shortDescription: 'Gym-Routinen, Calisthenics, Mobilität und Stunts.',
      seoDescription: 'Finde Fitness-Coaches auf TikTok und lade Workouts in HD.',
      faqs: [
        {
          question: 'Wie speichere ich Workout-Videos auf dem Handy?',
          answer: 'Suche den Coach, öffne den Clip und wähle HD-Video laden.',
        },
        {
          question: 'Haben die Videos ein Wasserzeichen?',
          answer: 'Nein, alle Downloads sind sauber und hochauflösend.',
        },
      ],
    },
    'dance-music': {
      name: 'Tanz & Musik',
      title: 'Beliebte TikTok-Tänzer, Choreografen & Musiker',
      shortDescription: 'Lerne virale Tänze und extrahiere beliebte Musiktitel.',
      seoDescription: 'Entdecke Tanz- und Musik-Creator und lade HD-Videos oder MP3.',
      faqs: [
        {
          question: 'Wie lade ich den Originalton eines Tanzvideos?',
          answer: 'Wähle das Video aus und klicke auf Audio laden (MP3).',
        },
        {
          question: 'Wer sind die größten Tanz-Creator?',
          answer: 'Charli D’Amelio, Addison Rae und Michael Le gehören zu den bekanntesten.',
        },
      ],
    },
  },
  ru: {
    comedy: {
      name: 'Юмор и развлечения',
      title: 'Топ комики и авторы скетчей в TikTok',
      shortDescription: 'Самые смешные авторы TikTok, вирусные пародии и реакции.',
      seoDescription: 'Изучайте юмористов TikTok и скачивайте клипы в HD без водяного знака.',
      faqs: [
        {
          question: 'Кто самый популярный юморист в TikTok?',
          answer: 'Khaby Lame (@khaby.lame) с более чем 160 млн подписчиков.',
        },
        {
          question: 'Можно скачать смешные клипы без водяного знака?',
          answer: 'Да, в оригинальном качестве HD MP4 без логотипа.',
        },
        {
          question: 'Почему у юмористов высокий ER?',
          answer: 'Короткие смешные ролики часто пересматривают, комментируют и пересылают.',
        },
      ],
    },
    'food-cooking': {
      name: 'Еда и кулинария',
      title: 'Лучшие шеф-повара и авторы рецептов TikTok',
      shortDescription: 'Быстрые рецепты за 15 минут, блюда и обзоры ресторанов.',
      seoDescription: 'Открывайте кулинарных блогеров TikTok и сохраняйте рецепты без знака.',
      faqs: [
        {
          question: 'Как сохранить видео-рецепт на потом?',
          answer: 'Найдите шефа (например @gordonramsayofficial) и нажмите Скачать HD видео.',
        },
        {
          question: 'Кто самые известные повара в TikTok?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi и Albert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'Технологии и ИИ',
      title: 'Топ техноблогеры, гаджеты и ИИ-лайфхаки TikTok',
      shortDescription: 'Инструменты ИИ, обзоры смартфонов, ПК-сетапы и софт.',
      seoDescription: 'Находите техноблогеров TikTok и скачивайте обзоры в HD.',
      faqs: [
        {
          question: 'Можно скачать техно-гайды для просмотра офлайн?',
          answer: 'Да, сохраняйте чистый MP4 без водяного знака прямо на устройство.',
        },
        {
          question: 'Как проанализировать техно-аккаунт?',
          answer: 'Используйте раздел Аналитики для оценки просмотров и вовлеченности.',
        },
      ],
    },
    gaming: {
      name: 'Игры и киберспорт',
      title: 'Лучшие геймеры, стримеры и киберспорт в TikTok',
      shortDescription: 'Игровые моменты, спидраны, забавные баги и турниры.',
      seoDescription: 'Смотрите геймеров TikTok и сохраняйте звуки в MP3.',
      faqs: [
        {
          question: 'Как извлечь звук из игровых клипов в MP3?',
          answer: 'Откройте профиль игрока, выберите видео и нажмите Скачать аудио (MP3).',
        },
        {
          question: 'Нужен ли аккаунт для просмотра?',
          answer: 'Нет, сервис полностью анонимен и бесплатен.',
        },
      ],
    },
    'fitness-sports': {
      name: 'Фитнес и спорт',
      title: 'Топ фитнес-тренеры, атлеты и тренировки TikTok',
      shortDescription: 'Программы тренировок, калистеника, растяжка и трюки.',
      seoDescription: 'Находите тренеров в TikTok и сохраняйте упражнения в HD.',
      faqs: [
        {
          question: 'Как сохранить тренировки на телефон?',
          answer: 'Введите ник тренера, откройте видео и нажмите Скачать HD видео.',
        },
        {
          question: 'Есть ли водяной знак на видео?',
          answer: 'Нет, все загрузки чистые в высоком разрешении.',
        },
      ],
    },
    'dance-music': {
      name: 'Танцы и музыка',
      title: 'Популярные танцоры, хореографы и музыканты TikTok',
      shortDescription: 'Учите вирусные танцы и извлекайте популярные треки.',
      seoDescription: 'Открывайте танцоров и музыкантов TikTok и скачивайте HD MP4 и MP3.',
      faqs: [
        {
          question: 'Как скачать оригинальный звук из танца?',
          answer: 'Выберите видео в просмотрщике и нажмите Скачать аудио (MP3).',
        },
        {
          question: 'Кто главные танцевальные звезды TikTok?',
          answer: 'Charli D’Amelio, Addison Rae и Michael Le.',
        },
      ],
    },
  },
  zh: {
    comedy: {
      name: '喜剧与娱乐',
      title: '热门 TikTok 喜剧创作者与搞笑短剧达人',
      shortDescription: '发现最有趣的 TikTok 创作者、热门模仿与反应视频。',
      seoDescription: '浏览 TikTok 喜剧创作者，查看互动数据并无水印下载高清短剧。',
      faqs: [
        {
          question: 'TikTok 上粉丝最多的喜剧创作者是谁？',
          answer: 'Khaby Lame (@khaby.lame) 凭借无声吐槽生活小妙招拥有超过 1.6 亿粉丝。',
        },
        {
          question: '可以无水印下载搞笑片段吗？',
          answer: '可以，直接保存无标志的原画高清 MP4 视频。',
        },
        {
          question: '为什么喜剧创作者互动率这么高？',
          answer: '幽默短视频容易引发重复观看、评论与转发分享。',
        },
      ],
    },
    'food-cooking': {
      name: '美食与烹饪',
      title: '顶级 TikTok 厨师、美食家与食谱创作者',
      shortDescription: '观看诱人美食制作、15 分钟快手菜谱与探店评测。',
      seoDescription: '浏览热门 TikTok 美食创作者，无水印保存高清烹饪教程。',
      faqs: [
        {
          question: '如何保存 TikTok 食谱视频方便以后做菜？',
          answer: '搜索美食创作者（如 @gordonramsayofficial）并点击下载高清视频即可。',
        },
        {
          question: 'TikTok 上有哪些知名大厨？',
          answer: 'Gordon Ramsay、Burak Ozdemir (@cznburak)、Bayashi 和 Albert Cancook。',
        },
      ],
    },
    'tech-ai': {
      name: '科技与 AI',
      title: '热门 TikTok 科技评测、AI 技巧与数码创作者',
      shortDescription: '了解最新 AI 工具、手机评测、桌面搭配与软件技巧。',
      seoDescription: '发现 TikTok 科技与 AI 创作者，查看统计并下载无水印教程。',
      faqs: [
        {
          question: '可以下载科技教程离线观看吗？',
          answer: '可以，无水印高清 MP4 可直接保存到本地随时学习。',
        },
        {
          question: '如何分析科技创作者的数据？',
          answer: '使用分析工具查看近期平均播放量与互动率。',
        },
      ],
    },
    gaming: {
      name: '游戏与电竞',
      title: '热门 TikTok 游戏玩家、主播与电竞集锦',
      shortDescription: '观看高能游戏集锦、速通挑战、搞笑时刻与赛事片段。',
      seoDescription: '探索 TikTok 游戏达人，提取 MP3 音效并查看主页数据。',
      faqs: [
        {
          question: '如何提取游戏视频中的 MP3 音效？',
          answer: '打开玩家主页并选择任意视频，点击下载音频 (MP3) 即可。',
        },
        {
          question: '浏览游戏主页需要账号吗？',
          answer: '不需要，完全匿名免费，无需登录。',
        },
      ],
    },
    'fitness-sports': {
      name: '健身与运动',
      title: '热门 TikTok 健身教练、运动员与训练计划',
      shortDescription: '获取健身房训练、徒手健身、拉伸与体能挑战灵感。',
      seoDescription: '寻找 TikTok 健身教练，高清无水印保存训练教程。',
      faqs: [
        {
          question: '如何把健身教程保存到手机相册？',
          answer: '搜索教练用户名，打开视频后点击下载高清视频即可保存。',
        },
        {
          question: '保存的健身视频有水印吗？',
          answer: '没有，全部为高清纯净视频。',
        },
      ],
    },
    'dance-music': {
      name: '舞蹈与音乐',
      title: '热门 TikTok 舞者、编舞师与音乐人',
      shortDescription: '学习热门舞蹈动作并提取流行背景音乐。',
      seoDescription: '发现 TikTok 舞蹈与音乐创作者，下载高清视频与 MP3 原声。',
      faqs: [
        {
          question: '如何下载热门舞蹈的原始配乐？',
          answer: '打开对应舞蹈视频并点击下载音频 (MP3) 即可直接保存。',
        },
        {
          question: 'TikTok 上最具代表性的舞蹈达人是谁？',
          answer: 'Charli D’Amelio、Addison Rae 与 Michael Le 都是知名舞蹈创作者。',
        },
      ],
    },
  },
  pt: {
    comedy: {
      name: 'Comédia e Entretenimento',
      title: 'Top Comediantes e Criadores de Humor no TikTok',
      shortDescription: 'Descubra os criadores mais engraçados, paródias e reações virais.',
      seoDescription: 'Explore criadores de comédia no TikTok e baixe clipes HD sem marca d’água.',
      faqs: [
        {
          question: 'Quem é o criador de comédia mais seguido no TikTok?',
          answer: 'Khaby Lame (@khaby.lame) soma mais de 160 milhões de seguidores.',
        },
        {
          question: 'Posso baixar clipes de humor sem marca d’água?',
          answer: 'Sim, em MP4 HD original sem logotipo.',
        },
        {
          question: 'Por que comediantes têm engajamento alto?',
          answer: 'Vídeos curtos engraçados geram muitas repetições, comentários e envios.',
        },
      ],
    },
    'food-cooking': {
      name: 'Comida e Culinária',
      title: 'Melhores Chefs e Criadores de Receitas no TikTok',
      shortDescription: 'Receitas rápidas de 15 minutos, pratos incríveis e avaliações.',
      seoDescription: 'Navegue pelos chefs do TikTok e salve receitas em HD sem marca d’água.',
      faqs: [
        {
          question: 'Como salvar receitas para cozinhar depois?',
          answer: 'Busque qualquer chef como @gordonramsayofficial e clique em Baixar Vídeo HD.',
        },
        {
          question: 'Quem são os principais chefs no TikTok?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi e Albert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'Tecnologia e IA',
      title: 'Top Avaliadores Tech, Dicas de IA e Gadgets no TikTok',
      shortDescription: 'Ferramentas de IA, análises de celulares e setups de PC.',
      seoDescription: 'Descubra criadores de tecnologia e IA e salve tutoriais em HD.',
      faqs: [
        {
          question: 'Posso assistir tutoriais tech offline?',
          answer: 'Sim, baixe MP4 limpo sem marca d’água direto no aparelho.',
        },
        {
          question: 'Como analisar uma conta tech?',
          answer: 'Use a ferramenta de Análise para ver média de views e engajamento.',
        },
      ],
    },
    gaming: {
      name: 'Games e Esports',
      title: 'Melhores Gamers, Streamers e Torneios no TikTok',
      shortDescription: 'Jogadas intensas, speedruns, erros engraçados e campeonatos.',
      seoDescription: 'Explore personalidades gamers e extraia áudios em MP3.',
      faqs: [
        {
          question: 'Como extrair áudios de games em MP3?',
          answer: 'Abra o perfil do gamer, escolha um vídeo e clique em Baixar Áudio (MP3).',
        },
        {
          question: 'Preciso ter conta para ver os perfis?',
          answer: 'Não, tudo é anônimo e gratuito.',
        },
      ],
    },
    'fitness-sports': {
      name: 'Fitness e Esportes',
      title: 'Top Treinadores, Atletas e Treinos no TikTok',
      shortDescription: 'Treinos de academia, calistenia, mobilidade e desafios.',
      seoDescription: 'Encontre treinadores no TikTok e baixe treinos em HD sem logo.',
      faqs: [
        {
          question: 'Como salvar vídeos de treino no celular?',
          answer: 'Busque o treinador, abra o vídeo e clique em Baixar Vídeo HD.',
        },
        {
          question: 'Os vídeos ficam com marca d’água?',
          answer: 'Não, todos os downloads são limpos em alta definição.',
        },
      ],
    },
    'dance-music': {
      name: 'Dança e Música',
      title: 'Dançarinos, Coreógrafos e Artistas Musicais no TikTok',
      shortDescription: 'Aprenda coreografias virais e extraia músicas em alta.',
      seoDescription: 'Descubra dançarinos e músicos no TikTok e salve MP4 HD ou MP3.',
      faqs: [
        {
          question: 'Como baixar o som original de uma dança?',
          answer: 'Selecione o vídeo e clique em Baixar Áudio (MP3).',
        },
        {
          question: 'Quem são os maiores criadores de dança?',
          answer: 'Charli D’Amelio, Addison Rae e Michael Le estão entre os maiores.',
        },
      ],
    },
  },
  he: {
    comedy: {
      name: 'קומדיה ובידור',
      title: 'הקומיקאים ויוצרי המערכונים המובילים בטיקטוק',
      shortDescription: 'גלו את היוצרים המצחיקים ביותר, פרודיות ותגובות ויראליות.',
      seoDescription: 'צפו ביוצרי קומדיה בטיקטוק והורידו קליפים ב-HD ללא סימן מים.',
      faqs: [
        {
          question: 'מי יוצר הקומדיה הנעקב ביותר בטיקטוק?',
          answer: 'Khaby Lame (@khaby.lame) עם למעלה מ-160 מיליון עוקבים.',
        },
        {
          question: 'אפשר להוריד קליפים מצחיקים ללא סימן מים?',
          answer: 'כן, בפורמט MP4 HD נקי ללא לוגו.',
        },
        {
          question: 'מדוע לקומיקאים יש אחוז מעורבות גבוה?',
          answer: 'סרטונים מצחיקים קצרים מעודדים צפייה חוזרת, תגובות ושיתופים.',
        },
      ],
    },
    'food-cooking': {
      name: 'אוכל ובישול',
      title: 'השפים ויוצרי המתכונים הטובים ביותר בטיקטוק',
      shortDescription: 'מתכונים מהירים, מנות מיוחדות וביקורות מסעדות.',
      seoDescription: 'גלו שפים מובילים בטיקטוק ושמרו מתכונים ללא סימן מים.',
      faqs: [
        {
          question: 'איך לשמור סרטוני מתכונים להמשך?',
          answer: 'חפשו שף כמו @gordonramsayofficial ולחצו הורד וידאו HD.',
        },
        {
          question: 'מי השפים הבולטים בטיקטוק?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi ו-Albert Cancook.',
        },
      ],
    },
    'tech-ai': {
      name: 'טכנולוגיה ובינה מלאכותית',
      title: 'סוקרי טכנולוגיה, כלי AI וגאדג׳טים בטיקטוק',
      shortDescription: 'כלי בינה מלאכותית, סקירות סמארטפונים וטיפים לתוכנה.',
      seoDescription: 'גלו יוצרי טכנולוגיה ו-AI והורידו מדריכים ב-HD.',
      faqs: [
        {
          question: 'אפשר להוריד מדריכי טכנולוגיה לצפייה לא מקוונת?',
          answer: 'כן, הורידו MP4 נקי ישירות למכשיר.',
        },
        {
          question: 'איך מנתחים חשבון טכנולוגי?',
          answer: 'השתמשו בכלי הניתוח לבדיקת ממוצע צפיות ומעורבות.',
        },
      ],
    },
    gaming: {
      name: 'גיימינג וספורט אלקטרוני',
      title: 'הגיימרים והסטרימרים המובילים בטיקטוק',
      shortDescription: 'קטעי משחק, ספידראנים ורגעי טורנירים.',
      seoDescription: 'חקרו יוצרי גיימינג בטיקטוק וחלצו אודיו ב-MP3.',
      faqs: [
        {
          question: 'איך מחלצים צלילי גיימינג ל-MP3?',
          answer: 'פתחו פרופיל של גיימר, בחרו סרטון ולחצו הורד אודיו (MP3).',
        },
        {
          question: 'האם צריך חשבון כדי לצפות?',
          answer: 'לא, הצפייה אנונימית וחינמית לגמרי.',
        },
      ],
    },
    'fitness-sports': {
      name: 'כושר וספורט',
      title: 'מאמני כושר, ספורטאים ואימונים בטיקטוק',
      shortDescription: 'שגרות אימון, קליסטניקס, גמישות ואתגרים.',
      seoDescription: 'מצאו מאמני כושר בטיקטוק ושמרו אימונים ב-HD.',
      faqs: [
        {
          question: 'איך שומרים סרטוני אימון לטלפון?',
          answer: 'חפשו את המאמן, פתחו את הסרטון ולחצו הורד וידאו HD.',
        },
        {
          question: 'האם יש סימן מים על הסרטונים?',
          answer: 'לא, ההורדות נקיות באיכות גבוהה.',
        },
      ],
    },
    'dance-music': {
      name: 'ריקוד ומוזיקה',
      title: 'רקדנים, כוריאוגרפים ואמני מוזיקה בטיקטוק',
      shortDescription: 'למדו ריקודים ויראליים וחלצו רצועות שמע פופולריות.',
      seoDescription: 'גלו יוצרי ריקוד ומוזיקה והורידו וידאו HD או MP3.',
      faqs: [
        {
          question: 'איך מורידים את הצליל המקורי מסרטון ריקוד?',
          answer: 'בחרו בסרטון ולחצו הורד אודיו (MP3).',
        },
        {
          question: 'מי כוכבי הריקוד הגדולים בטיקטוק?',
          answer: 'Charli D’Amelio, Addison Rae ו-Michael Le.',
        },
      ],
    },
  },
  hi: {
    comedy: {
      name: 'कॉमेडी और मनोरंजन',
      title: 'टॉप TikTok कॉमेडियन और वायरल स्किट क्रिएटर्स',
      shortDescription: 'सबसे मजेदार TikTok क्रिएटर्स, पैरोडी और रिएक्शन वीडियो खोजें।',
      seoDescription: 'TikTok कॉमेडी क्रिएटर्स देखें और बिना वॉटरमार्क HD वीडियो डाउनलोड करें।',
      faqs: [
        {
          question: 'TikTok पर सबसे अधिक फॉलो किए जाने वाले कॉमेडी क्रिएटर कौन हैं?',
          answer: 'Khaby Lame (@khaby.lame) 160 मिलियन से अधिक फॉलोअर्स के साथ शीर्ष पर हैं।',
        },
        {
          question: 'क्या मैं बिना वॉटरमार्क कॉमेडी क्लिप डाउनलोड कर सकता हूँ?',
          answer: 'हाँ, साफ HD MP4 फॉर्मेट में बिना किसी लोगो के।',
        },
        {
          question: 'कॉमेडी क्रिएटर्स का एंगेजमेंट इतना ऊंचा क्यों होता है?',
          answer: 'मजेदार छोटे वीडियो बार-बार देखे, कमेंट और शेयर किए जाते हैं।',
        },
      ],
    },
    'food-cooking': {
      name: 'फूड और कुकिंग',
      title: 'बेहतरीन TikTok शेफ, फूडीज और रेसिपी क्रिएटर्स',
      shortDescription: 'झटपट 15-मिनट की रेसिपी, स्वादिष्ट व्यंजन और फूड रिव्यू देखें।',
      seoDescription: 'टॉप TikTok शेफ ब्राउज़ करें और बिना वॉटरमार्क कुकिंग वीडियो सेव करें।',
      faqs: [
        {
          question: 'बाद में पकाने के लिए रेसिपी वीडियो कैसे सेव करें?',
          answer: '@gordonramsayofficial जैसे किसी भी शेफ को खोजें और HD वीडियो डाउनलोड करें दबाएं।',
        },
        {
          question: 'TikTok के प्रमुख शेफ कौन हैं?',
          answer: 'Gordon Ramsay, Burak Ozdemir (@cznburak), Bayashi और Albert Cancook।',
        },
      ],
    },
    'tech-ai': {
      name: 'टेक और AI',
      title: 'टॉप TikTok टेक रिव्यूअर्स, AI हैक्स और गैजेट क्रिएटर्स',
      shortDescription: 'AI टूल्स, स्मार्टफोन रिव्यू, पीसी सेटअप और सॉफ्टवेयर टिप्स।',
      seoDescription: 'TikTok टेक और AI क्रिएटर्स खोजें और HD ट्यूटोरियल डाउनलोड करें।',
      faqs: [
        {
          question: 'क्या मैं टेक ट्यूटोरियल ऑफलाइन देखने के लिए सेव कर सकता हूँ?',
          answer: 'हाँ, सीधे अपने डिवाइस पर साफ MP4 डाउनलोड करें।',
        },
        {
          question: 'टेक क्रिएटर का विश्लेषण कैसे करें?',
          answer: 'औसत व्यूज और एंगेजमेंट देखने के लिए हमारे एनालिटिक्स टूल का उपयोग करें।',
        },
      ],
    },
    gaming: {
      name: 'गेमिंग और ईस्पोर्ट्स',
      title: 'बेस्ट TikTok गेमर्स, स्ट्रीमर्स और ईस्पोर्ट्स हाइलाइट्स',
      shortDescription: 'गेमिंग क्लिप्स, स्पीडरन और टूर्नामेंट के बेहतरीन पल।',
      seoDescription: 'TikTok गेमिंग क्रिएटर्स देखें और MP3 साउंड निकालें।',
      faqs: [
        {
          question: 'गेमिंग क्लिप्स से MP3 ऑडियो कैसे निकालें?',
          answer: 'गेमर प्रोफाइल खोलें, वीडियो चुनें और ऑडियो डाउनलोड करें (MP3) दबाएं।',
        },
        {
          question: 'क्या प्रोफाइल देखने के लिए अकाउंट चाहिए?',
          answer: 'नहीं, यह 100% गुमनाम और मुफ्त है।',
        },
      ],
    },
    'fitness-sports': {
      name: 'फिटनेस और स्पोर्ट्स',
      title: 'टॉप TikTok फिटनेस कोच, एथलीट और वर्कआउट रूटीन',
      shortDescription: 'जिम वर्कआउट, कैलिस्थेनिक्स, स्ट्रेचिंग और एथलेटिक स्टंट।',
      seoDescription: 'TikTok फिटनेस कोच खोजें और HD में वर्कआउट सेव करें।',
      faqs: [
        {
          question: 'फोन में वर्कआउट वीडियो कैसे सेव करें?',
          answer: 'कोच का नाम खोजें, वीडियो खोलें और HD वीडियो डाउनलोड करें दबाएं।',
        },
        {
          question: 'क्या वीडियो में वॉटरमार्क आता है?',
          answer: 'नहीं, सभी डाउनलोड साफ और उच्च गुणवत्ता के होते हैं।',
        },
      ],
    },
    'dance-music': {
      name: 'डांस और म्यूजिक',
      title: 'ट्रेंडिंग TikTok डांसर्स, कोरियोग्राफर्स और म्यूजिक आर्टिस्ट',
      shortDescription: 'वायरल डांस ट्रेंड सीखें और लोकप्रिय म्यूजिक ट्रैक निकालें।',
      seoDescription: 'TikTok डांस और म्यूजिक क्रिएटर्स देखें और HD MP4 व MP3 सेव करें।',
      faqs: [
        {
          question: 'वायरल डांस का ओरिजिनल साउंड कैसे डाउनलोड करें?',
          answer: 'वीडियो चुनें और ऑडियो डाउनलोड करें (MP3) पर क्लिक करें।',
        },
        {
          question: 'TikTok के सबसे बड़े डांस क्रिएटर्स कौन हैं?',
          answer: 'Charli D’Amelio, Addison Rae और Michael Le प्रमुख हैं।',
        },
      ],
    },
  },
};

const COUNTRY_NAMES: Record<Exclude<LanguageCode, 'en'>, Record<string, string>> = {
  ar: {
    Italy: 'إيطاليا',
    'United States': 'الولايات المتحدة',
    Turkey: 'تركيا',
    'United Kingdom': 'المملكة المتحدة',
    Canada: 'كندا',
    Japan: 'اليابان',
  },
  fr: {
    Italy: 'Italie',
    'United States': 'États-Unis',
    Turkey: 'Turquie',
    'United Kingdom': 'Royaume-Uni',
    Canada: 'Canada',
    Japan: 'Japon',
  },
  es: {
    Italy: 'Italia',
    'United States': 'Estados Unidos',
    Turkey: 'Turquía',
    'United Kingdom': 'Reino Unido',
    Canada: 'Canadá',
    Japan: 'Japón',
  },
  de: {
    Italy: 'Italien',
    'United States': 'Vereinigte Staaten',
    Turkey: 'Türkei',
    'United Kingdom': 'Vereinigtes Königreich',
    Canada: 'Kanada',
    Japan: 'Japan',
  },
  ru: {
    Italy: 'Италия',
    'United States': 'США',
    Turkey: 'Турция',
    'United Kingdom': 'Великобритания',
    Canada: 'Канада',
    Japan: 'Япония',
  },
  zh: {
    Italy: '意大利',
    'United States': '美国',
    Turkey: '土耳其',
    'United Kingdom': '英国',
    Canada: '加拿大',
    Japan: '日本',
  },
  pt: {
    Italy: 'Itália',
    'United States': 'Estados Unidos',
    Turkey: 'Turquia',
    'United Kingdom': 'Reino Unido',
    Canada: 'Canadá',
    Japan: 'Japão',
  },
  he: {
    Italy: 'איטליה',
    'United States': 'ארצות הברית',
    Turkey: 'טורקיה',
    'United Kingdom': 'בריטניה',
    Canada: 'קנדה',
    Japan: 'יפן',
  },
  hi: {
    Italy: 'इटली',
    'United States': 'संयुक्त राज्य अमेरिका',
    Turkey: 'तुर्की',
    'United Kingdom': 'यूनाइटेड किंगडम',
    Canada: 'कनाडा',
    Japan: 'जापान',
  },
};

const CREATOR_BIOS: Record<Exclude<LanguageCode, 'en'>, Record<string, string>> = {
  ar: {
    'khaby.lame': 'صانع محتوى إيطالي سنغالي اشتهر بردود فعله الصامتة الساخرة على الحيل المعقدة.',
    charlidamelio: 'راقصة شهيرة وصانعة محتوى ورائدة أعمال من ولاية كونيتيكت.',
    mrbeast: 'صانع تحديات ضخمة وأعمال خيرية تهدف لمساعدة الناس حول العالم.',
    bellapoarch: 'مغنية وصاحبة أحد أكثر الفيديوهات إعجاباً في تاريخ تيك توك.',
    addisonre: 'مغنية بوب وممثلة وأيقونة رقص من لويزيانا.',
    zachking: 'مبدع خدع بصرية ومونتاج إبداعي وسحر رقمي قصير.',
    cznburak: 'شيف معروف بتحضير أطباق ومشاوي تركية عملاقة بابتسامته الدائمة.',
    gordonramsayofficial: 'شيف عالمي حائز على نجوم ميشلان وشخصية تلفزيونية شهيرة.',
    spencerx: 'فنان بيت بوكس ينتج إيقاعات ومؤثرات صوتية مذهلة بصوته فقط.',
    jasonderulo: 'مغني وفنان ومبدع مقاطع كوميدية ورقصات ومقالب طبخ.',
    demibagby: 'رياضية كروس فيت وكاليسثنكس ومغامرات بدنية مليئة بالطاقة.',
    ninja: 'أحد أشهر لاعبي وبثوث الألعاب التنافسية في العالم.',
    pokimane: 'صانعة محتوى ألعاب وبثوث متنوعة ومؤسسة مشاركة لوكالة مواهب.',
    mkbhd: 'مراجعات تقنية عالية الدقة واختبارات كاميرات الهواتف ومستقبل التقنية.',
    'bayashi.tiktok': 'مقاطع طبخ سريعة بأسلوب ASMR تركز على الأجبان والأطباق المقرمشة.',
  },
  fr: {
    'khaby.lame': 'Créateur italo-sénégalais célèbre pour ses réactions silencieuses aux astuces compliquées.',
    charlidamelio: 'Danseuse virale, créatrice et entrepreneure originaire du Connecticut.',
    mrbeast: 'Philanthrope et créateur de défis spectaculaires à grande échelle.',
    bellapoarch: 'Chanteuse et créatrice de l’une des vidéos les plus aimées de TikTok.',
    addisonre: 'Chanteuse pop, actrice et figure emblématique de la danse.',
    zachking: 'Maître des illusions numériques et des montages magiques.',
    cznburak: 'Chef célèbre préparant des plats turcs géants avec le sourire.',
    gordonramsayofficial: 'Chef étoilé Michelin et personnalité télévisée internationale.',
    spencerx: 'Artiste beatbox produisant des rythmes impressionnants uniquement à la voix.',
    jasonderulo: 'Chanteur, artiste et créateur de sketchs culinaires et danses.',
    demibagby: 'Athlète de crossfit et callisthénie partageant des acrobaties positives.',
    ninja: 'Streamer gaming mondialement connu et pionnier du battle royale.',
    pokimane: 'Créatrice gaming, streameuse variété et cofondatrice d’agence.',
    mkbhd: 'Tests tech précis, comparatifs photo de smartphones et innovations.',
    'bayashi.tiktok': 'Tutoriels cuisine ASMR rythmés mettant à l’honneur fromages et fritures.',
  },
  es: {
    'khaby.lame': 'Creador ítalo-senegalés famoso por sus reacciones mudas ante trucos absurdos.',
    charlidamelio: 'Bailarina viral, creadora y emprendedora de Connecticut.',
    mrbeast: 'Filántropo y creador de grandes retos de alto impacto.',
    bellapoarch: 'Cantante y creadora de uno de los videos con más me gusta de TikTok.',
    addisonre: 'Cantante pop, actriz e ícono del baile desde Luisiana.',
    zachking: 'Maestro de los trucos digitales e ilusiones visuales.',
    cznburak: 'Chef famoso por preparar banquetes turcos gigantes siempre sonriendo.',
    gordonramsayofficial: 'Chef con múltiples estrellas Michelin y figura de televisión.',
    spencerx: 'Artista de beatbox capaz de crear pistas completas con su voz.',
    jasonderulo: 'Cantante y creador de clips de baile, humor y cocina.',
    demibagby: 'Atleta de crossfit, calistenia y acrobacias llenas de energía.',
    ninja: 'Famoso streamer gamer y pionero competitivo.',
    pokimane: 'Creadora de videojuegos, streamer variada y cofundadora de agencia.',
    mkbhd: 'Reseñas tech nítidas, pruebas de cámaras y análisis del futuro tecnológico.',
    'bayashi.tiktok': 'Recetas rápidas estilo ASMR con quesos fundidos y platos crujientes.',
  },
  de: {
    'khaby.lame': 'Italienisch-senegalesischer Creator, berühmt für stumme Reaktionen auf Lifehacks.',
    charlidamelio: 'Virale Tänzerin, Creatorin und Unternehmerin aus Connecticut.',
    mrbeast: 'Philanthrop und Schöpfer aufwendiger Challenge-Videos.',
    bellapoarch: 'Sängerin und Urheberin eines der meistgelikten TikTok-Videos.',
    addisonre: 'Popsängerin, Schauspielerin und Tanz-Ikone aus Louisiana.',
    zachking: 'Meister digitaler Illusionen und kreativer Magie-Schnitte.',
    cznburak: 'Bekannter Koch für riesige türkische Gerichte mit Dauerlächeln.',
    gordonramsayofficial: 'Mehrfacher Sternekoch und bekannte TV-Persönlichkeit.',
    spencerx: 'Beatbox-Künstler, der ganze Tracks nur mit dem Mund erzeugt.',
    jasonderulo: 'Sänger, Entertainer und Creator von Tanz- und Koch-Sketchen.',
    demibagby: 'Crossfit-Athletin und Stunt-Creatorin voller positiver Energie.',
    ninja: 'Weltbekannter Gaming-Streamer und Battle-Royale-Pionier.',
    pokimane: 'Gaming-Creatorin, Variety-Streamerin und Agentur-Mitgründerin.',
    mkbhd: 'Gestochen scharfe Tech-Reviews, Kamera-Tests und Technik-Analysen.',
    'bayashi.tiktok': 'Schnelle ASMR-Kochvideos mit knusprigen Gerichten und Käse.',
  },
  ru: {
    'khaby.lame': 'Итало-сенегальский автор, прославившийся молчаливыми реакциями на сложные лайфхаки.',
    charlidamelio: 'Популярная танцовщица, автор контента и предпринимательница.',
    mrbeast: 'Филантроп и автор масштабных испытаний и челленджей.',
    bellapoarch: 'Певица и автор одного из самых залайканных видео в истории TikTok.',
    addisonre: 'Поп-певица, актриса и популярная танцовщица.',
    zachking: 'Мастер цифровых иллюзий, визуальных эффектов и коротких фокусов.',
    cznburak: 'Шеф-повар, готовящий гигантские турецкие блюда с неизменной улыбкой.',
    gordonramsayofficial: 'Шеф-повар со звездами Мишлен и известный телеведущий.',
    spencerx: 'Битбоксер, создающий сложные музыкальные треки исключительно голосом.',
    jasonderulo: 'Певец, артист и автор музыкальных и кулинарных скетчей.',
    demibagby: 'Атлет кроссфита, калистеники и зрелищных спортивных трюков.',
    ninja: 'Всемирно известный игровой стример и пионер жанра.',
    pokimane: 'Популярный игровой стример и сооснователь агентства талантов.',
    mkbhd: 'Четкие обзоры гаджетов, тесты камер смартфонов и взгляд на будущее технологий.',
    'bayashi.tiktok': 'Динамичные ASMR-рецепты с хрустящими блюдами и сыром.',
  },
  zh: {
    'khaby.lame': '以无声吐槽繁琐生活小妙招而风靡全球的意大利塞内加尔裔创作者。',
    charlidamelio: '来自康涅狄格州的人气舞者、创作者与企业家。',
    mrbeast: '热衷公益慈善、制作高规格挑战视频的知名创作者。',
    bellapoarch: '歌手，也是 TikTok 史上点赞最高视频之一的创作者。',
    addisonre: '来自路易斯安那州的流行歌手、演员与舞蹈代表人物。',
    zachking: '擅长数字视觉错觉与创意魔法剪辑的视频大师。',
    cznburak: '始终面带微笑制作超大份土耳其美食的知名主厨。',
    gordonramsayofficial: '多位米其林星级主厨与知名美食节目主持人。',
    spencerx: '仅凭口腔即可演奏震撼节奏的实力派 Beatbox 艺人。',
    jasonderulo: '流行歌手与娱乐达人，常发布创意美食与舞蹈短剧。',
    demibagby: '充满正能量的综合体能运动员与徒手健身特技达人。',
    ninja: '全球知名的游戏主播与大逃杀竞技先驱。',
    pokimane: '知名游戏内容创作者、综合主播及经纪机构联合创始人。',
    mkbhd: '以高画质著称的数码评测人，专注手机影像盲测与科技趋势。',
    'bayashi.tiktok': '快节奏 ASMR 美食教程，主打酥脆芝士与炸物料理。',
  },
  pt: {
    'khaby.lame': 'Criador ítalo-senegalês famoso pelas reações silenciosas a truques complicados.',
    charlidamelio: 'Dançarina viral, criadora e empreendedora de Connecticut.',
    mrbeast: 'Filantropo e criador de grandes desafios de alto impacto.',
    bellapoarch: 'Cantora e criadora de um dos vídeos mais curtidos do TikTok.',
    addisonre: 'Cantora pop, atriz e ícone da dança da Louisiana.',
    zachking: 'Mestre dos truques digitais e ilusões visuais.',
    cznburak: 'Chef conhecido por preparar banquetes turcos gigantes sempre sorrindo.',
    gordonramsayofficial: 'Chef com estrelas Michelin e personalidade famosa da TV.',
    spencerx: 'Artista de beatbox capaz de criar músicas inteiras com a voz.',
    jasonderulo: 'Cantor e criador de esquetes de dança e culinária.',
    demibagby: 'Atleta de crossfit, calistenia e acrobacias cheias de energia.',
    ninja: 'Streamer de games mundialmente famoso e pioneiro competitivo.',
    pokimane: 'Criadora gamer, streamer de variedades e cofundadora de agência.',
    mkbhd: 'Análises tech nítidas, testes de câmeras e futuro da tecnologia.',
    'bayashi.tiktok': 'Receitas rápidas em ASMR com queijos e pratos crocantes.',
  },
  he: {
    'khaby.lame': 'יוצר איטלקי-סנגלי שהתפרסם בתגובות השקטות שלו לטריקים מסובכים.',
    charlidamelio: 'רקדנית ויראלית, יוצרת ויזמית מקונטיקט.',
    mrbeast: 'פילנתרופ ויוצר אתגרים גדולים בקנה מידה עולמי.',
    bellapoarch: 'זמרת ויוצרת אחד הסרטונים האהובים בהיסטוריה של טיקטוק.',
    addisonre: 'זמרת פופ, שחקנית ואייקון ריקוד מלואיזיאנה.',
    zachking: 'אמן אשליות דיגיטליות וקסמי עריכה קצרים.',
    cznburak: 'שף המכין מנות ענק טורקיות עם חיוך קבוע.',
    gordonramsayofficial: 'שף בעל כוכבי מישלן ואישיות טלוויזיה מוכרת.',
    spencerx: 'אמן ביטבוקס המפיק מקצבים שלמים בעזרת הקול בלבד.',
    jasonderulo: 'זמר, בדרן ויוצר מערכוני ריקוד ואוכל.',
    demibagby: 'אתלטית קרוספיט, קליסטניקס ופעלולים מלאי אנרגיה.',
    ninja: 'סטרימר גיימינג עולמי וחלוץ בתחום הבאטל רויאל.',
    pokimane: 'יוצרת גיימינג, סטרימרית ומייסדת שותפה של סוכנות.',
    mkbhd: 'סקירות טכנולוגיה חדות, מבחני מצלמות ועתיד הטכנולוגיה.',
    'bayashi.tiktok': 'מדריכי בישול מהירים בסגנון ASMR עם גבינות ומנות פריכות.',
  },
  hi: {
    'khaby.lame': 'जटिल लाइफ हैक्स पर अपने मूक रिएक्शन के लिए प्रसिद्ध इटालियन-सेनेगली क्रिएटर।',
    charlidamelio: 'कनेक्टिकट की वायरल डांसर, क्रिएटर और उद्यमी।',
    mrbeast: 'समाजसेवी और बड़े पैमाने के रोचक चैलेंज वीडियो के निर्माता।',
    bellapoarch: 'गायिका और TikTok इतिहास के सबसे अधिक पसंद किए गए वीडियो में से एक की क्रिएटर।',
    addisonre: 'लुइसियाना की पॉप सिंगर, अभिनेत्री और डांस आइकन।',
    zachking: 'डिजिटल जादू और क्रिएटिव विजुअल इल्यूजन वीडियो के माहिर।',
    cznburak: 'अपनी मुस्कान के साथ विशाल तुर्की व्यंजन बनाने के लिए मशहूर शेफ।',
    gordonramsayofficial: 'मल्टी-मिशेलिन स्टार शेफ और प्रसिद्ध टीवी व्यक्तित्व।',
    spencerx: 'केवल अपनी आवाज से शानदार बीट्स बनाने वाले बीटबॉक्स कलाकार।',
    jasonderulo: 'गायक, एंटरटेनर और वायरल डांस व कुकिंग स्किट क्रिएटर।',
    demibagby: 'सकारात्मक ऊर्जा फैलाने वाली क्रॉसफिट एथलीट और कैलिस्थेनिक्स स्टार।',
    ninja: 'विश्व प्रसिद्ध गेमिंग स्ट्रीमर और बैटल रॉयल अग्रणी।',
    pokimane: 'लोकप्रिय गेमिंग क्रिएटर, वैरायटी स्ट्रीमर और टैलेंट एजेंसी की सह-संस्थापक।',
    mkbhd: 'सटीक टेक रिव्यू, स्मार्टफोन कैमरा टेस्ट और भविष्य की तकनीक का विश्लेषण।',
    'bayashi.tiktok': 'चीज़ और कुरकुरे व्यंजनों वाले तेज़ ASMR कुकिंग ट्यूटोरियल।',
  },
};

export function getLocalizedCategory(
  category: CategoryData,
  lang: LanguageCode
): LocalizedCategoryText {
  if (lang === 'en') {
    return {
      name: category.name,
      title: category.title,
      shortDescription: category.shortDescription,
      seoDescription: category.seoDescription,
      faqs: category.faqs,
    };
  }
  const translated = CATEGORY_TEXTS[lang]?.[category.slug];
  if (!translated) {
    return {
      name: category.name,
      title: category.title,
      shortDescription: category.shortDescription,
      seoDescription: category.seoDescription,
      faqs: category.faqs,
    };
  }
  return translated;
}

export function getLocalizedCountry(country: string, lang: LanguageCode): string {
  if (lang === 'en') return country;
  return COUNTRY_NAMES[lang]?.[country] ?? country;
}

export function getLocalizedCreatorBio(
  creator: CreatorData,
  lang: LanguageCode
): string {
  if (lang === 'en') return creator.bio;
  return CREATOR_BIOS[lang]?.[creator.username] ?? creator.bio;
}