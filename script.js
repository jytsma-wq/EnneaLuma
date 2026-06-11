const EMAIL = "info@ennealuma.com";
const CONSULTATION_SUBJECT = "Free%20Consultation%20Request";
const CONSULTATION_BODY = "Hello%20EnneaLuma%2C%0A%0AI%20would%20like%20to%20request%20my%20free%20first%20consultation.%0A%0AName%3A%0ALanguage%3A%0AMain%20question%3A%0A%0AThank%20you.";
const CONSULTATION_MAILTO = `mailto:${EMAIL}?subject=${CONSULTATION_SUBJECT}&body=${CONSULTATION_BODY}`;

const officialTexts = {
  en: `Welcome to the international project dedicated to the psychomatrix, spiritual development, self-discovery, and various esoteric fields.
This website was created as one of the first international social projects in the field of the psychomatrix and esotericism, with the aim of bringing together people who are interested in spiritual development, energy practices, inner harmony, and finding answers to important life questions.
On this website, you will be able to explore various areas, including:
* the psychomatrix and personality analysis;
* spiritual practices and self-discovery;
* cleansing of negative energy;
* exorcism prayers and spiritual protection;
* clairvoyance and intuitive consultations;
* energy practices;
* spiritual support and other related fields.
Our goal is to create a space where people can receive information, support, understanding, and the opportunity to look at their lives from a new perspective, better understand themselves, discover their strengths, inner resources, and life path.
For the convenience of an international audience, the website will be available in several languages: German, French, English, Spanish, Italian, Arabic, Chinese, and Luxembourgish.
The website design will feature light green and purple tones, symbolizing harmony, inner peace, spiritual growth, intuition, and balance.
The first full consultation will be completely free of charge so that everyone can become familiar with the project, ask questions, and experience an initial consultation. Starting from the second consultation, services will be provided on a paid basis.
Important:
This activity is not related to medicine, does not constitute a medical service, and does not replace medical assistance, diagnosis, psychotherapy, or treatment. All materials, consultations, and spiritual practices presented on this website are intended solely for informational, spiritual, and introductory purposes.
We believe that spiritual development, self-discovery, and understanding one’s inner energy can help people better understand themselves, make more conscious decisions, and find inner harmony.
This project is being created with great responsibility, care for people, and a sincere desire to build an international space for spiritual exploration, understanding, and development.`,
  de: `Willkommen beim internationalen Projekt, das der Psychomatrix, der spirituellen Entwicklung, der Selbsterkenntnis und verschiedenen esoterischen Bereichen gewidmet ist.
Diese Website wurde als eines der ersten internationalen sozialen Projekte im Bereich der Psychomatrix und Esoterik geschaffen, mit dem Ziel, Menschen zusammenzubringen, die sich für spirituelle Entwicklung, Energiepraktiken, innere Harmonie und das Finden von Antworten auf wichtige Lebensfragen interessieren.
Auf dieser Website können Sie verschiedene Bereiche erkunden, darunter:
* die Psychomatrix und Persönlichkeitsanalyse;
* spirituelle Praktiken und Selbsterkenntnis;
* Reinigung von negativer Energie;
* Exorzismusgebete und spiritueller Schutz;
* Hellsichtigkeit und intuitive Beratungen;
* Energiepraktiken;
* spirituelle Unterstützung und andere verwandte Bereiche.
Unser Ziel ist es, einen Raum zu schaffen, in dem Menschen Informationen, Unterstützung, Verständnis und die Möglichkeit erhalten können, ihr Leben aus einer neuen Perspektive zu betrachten, sich selbst besser zu verstehen, ihre Stärken, inneren Ressourcen und ihren Lebensweg zu entdecken.
Für die Bequemlichkeit eines internationalen Publikums wird die Website in mehreren Sprachen verfügbar sein: Deutsch, Französisch, Englisch, Spanisch, Italienisch, Arabisch, Chinesisch und Luxemburgisch.
Das Website-Design wird helle Grün- und Violetttöne enthalten, die Harmonie, inneren Frieden, spirituelles Wachstum, Intuition und Balance symbolisieren.
Die erste vollständige Beratung wird völlig kostenlos sein, damit jeder das Projekt kennenlernen, Fragen stellen und eine erste Beratung erleben kann. Ab der zweiten Beratung werden die Leistungen kostenpflichtig angeboten.
Wichtig:
Diese Tätigkeit steht nicht mit Medizin in Verbindung, stellt keine medizinische Dienstleistung dar und ersetzt keine medizinische Hilfe, Diagnose, Psychotherapie oder Behandlung. Alle auf dieser Website vorgestellten Materialien, Beratungen und spirituellen Praktiken dienen ausschließlich Informations-, spirituellen und Einführungszwecken.
Wir glauben, dass spirituelle Entwicklung, Selbsterkenntnis und das Verständnis der eigenen inneren Energie Menschen helfen können, sich selbst besser zu verstehen, bewusstere Entscheidungen zu treffen und innere Harmonie zu finden.
Dieses Projekt wird mit großer Verantwortung, Fürsorge für Menschen und dem aufrichtigen Wunsch geschaffen, einen internationalen Raum für spirituelle Erforschung, Verständnis und Entwicklung aufzubauen.`,
  fr: `Bienvenue dans le projet international dédié à la psychomatrix, au développement spirituel, à la découverte de soi et à divers domaines ésotériques.
Ce site web a été créé comme l’un des premiers projets sociaux internationaux dans le domaine de la psychomatrix et de l’ésotérisme, avec pour objectif de réunir des personnes intéressées par le développement spirituel, les pratiques énergétiques, l’harmonie intérieure et la recherche de réponses aux grandes questions de la vie.
Sur ce site web, vous pourrez explorer différents domaines, notamment :
* la psychomatrix et l’analyse de la personnalité ;
* les pratiques spirituelles et la découverte de soi ;
* la purification de l’énergie négative ;
* les prières d’exorcisme et la protection spirituelle ;
* la clairvoyance et les consultations intuitives ;
* les pratiques énergétiques ;
* le soutien spirituel et d’autres domaines connexes.
Notre objectif est de créer un espace où les personnes peuvent recevoir des informations, du soutien, de la compréhension et la possibilité de regarder leur vie sous un nouvel angle, de mieux se comprendre, de découvrir leurs forces, leurs ressources intérieures et leur chemin de vie.
Pour le confort d’un public international, le site web sera disponible en plusieurs langues : allemand, français, anglais, espagnol, italien, arabe, chinois et luxembourgeois.
Le design du site web utilisera des tons vert clair et violets, symbolisant l’harmonie, la paix intérieure, la croissance spirituelle, l’intuition et l’équilibre.
La première consultation complète sera entièrement gratuite afin que chacun puisse se familiariser avec le projet, poser des questions et vivre une première consultation. À partir de la deuxième consultation, les services seront fournis sur une base payante.
Important :
Cette activité n’est pas liée à la médecine, ne constitue pas un service médical et ne remplace pas l’assistance médicale, le diagnostic, la psychothérapie ou le traitement. Tous les supports, consultations et pratiques spirituelles présentés sur ce site web sont destinés uniquement à des fins informatives, spirituelles et introductives.
Nous croyons que le développement spirituel, la découverte de soi et la compréhension de son énergie intérieure peuvent aider les personnes à mieux se comprendre, à prendre des décisions plus conscientes et à trouver l’harmonie intérieure.
Ce projet est créé avec une grande responsabilité, de l’attention envers les personnes et le désir sincère de construire un espace international d’exploration, de compréhension et de développement spirituels.`,
  es: `Bienvenido al proyecto internacional dedicado a la psychomatrix, el desarrollo espiritual, el autodescubrimiento y diversos campos esotéricos.
Este sitio web fue creado como uno de los primeros proyectos sociales internacionales en el campo de la psychomatrix y el esoterismo, con el objetivo de reunir a personas interesadas en el desarrollo espiritual, las prácticas energéticas, la armonía interior y la búsqueda de respuestas a preguntas importantes de la vida.
En este sitio web podrás explorar diversas áreas, entre ellas:
* la psychomatrix y el análisis de la personalidad;
* prácticas espirituales y autodescubrimiento;
* limpieza de energía negativa;
* oraciones de exorcismo y protección espiritual;
* clarividencia y consultas intuitivas;
* prácticas energéticas;
* apoyo espiritual y otros campos relacionados.
Nuestro objetivo es crear un espacio donde las personas puedan recibir información, apoyo, comprensión y la oportunidad de mirar su vida desde una nueva perspectiva, comprenderse mejor, descubrir sus fortalezas, recursos internos y camino de vida.
Para la comodidad de una audiencia internacional, el sitio web estará disponible en varios idiomas: alemán, francés, inglés, español, italiano, árabe, chino y luxemburgués.
El diseño del sitio web presentará tonos verde claro y púrpura, que simbolizan armonía, paz interior, crecimiento espiritual, intuición y equilibrio.
La primera consulta completa será totalmente gratuita para que todos puedan familiarizarse con el proyecto, hacer preguntas y experimentar una consulta inicial. A partir de la segunda consulta, los servicios se prestarán de forma pagada.
Importante:
Esta actividad no está relacionada con la medicina, no constituye un servicio médico y no reemplaza la asistencia médica, el diagnóstico, la psicoterapia ni el tratamiento. Todos los materiales, consultas y prácticas espirituales presentados en este sitio web están destinados exclusivamente a fines informativos, espirituales e introductorios.
Creemos que el desarrollo espiritual, el autodescubrimiento y la comprensión de la propia energía interior pueden ayudar a las personas a comprenderse mejor, tomar decisiones más conscientes y encontrar armonía interior.
Este proyecto se está creando con gran responsabilidad, cuidado por las personas y un deseo sincero de construir un espacio internacional para la exploración, la comprensión y el desarrollo espiritual.`,
  it: `Benvenuti nel progetto internazionale dedicato alla psychomatrix, allo sviluppo spirituale, alla scoperta di sé e a vari ambiti esoterici.
Questo sito web è stato creato come uno dei primi progetti sociali internazionali nel campo della psychomatrix e dell’esoterismo, con l’obiettivo di riunire persone interessate allo sviluppo spirituale, alle pratiche energetiche, all’armonia interiore e alla ricerca di risposte a importanti domande della vita.
Su questo sito web potrai esplorare diverse aree, tra cui:
* la psychomatrix e l’analisi della personalità;
* pratiche spirituali e scoperta di sé;
* purificazione dall’energia negativa;
* preghiere di esorcismo e protezione spirituale;
* chiaroveggenza e consultazioni intuitive;
* pratiche energetiche;
* supporto spirituale e altri ambiti correlati.
Il nostro obiettivo è creare uno spazio in cui le persone possano ricevere informazioni, supporto, comprensione e l’opportunità di guardare la propria vita da una nuova prospettiva, comprendere meglio se stesse, scoprire i propri punti di forza, le risorse interiori e il percorso di vita.
Per la comodità di un pubblico internazionale, il sito web sarà disponibile in diverse lingue: tedesco, francese, inglese, spagnolo, italiano, arabo, cinese e lussemburghese.
Il design del sito web presenterà toni verde chiaro e viola, che simboleggiano armonia, pace interiore, crescita spirituale, intuizione ed equilibrio.
La prima consultazione completa sarà completamente gratuita affinché tutti possano familiarizzare con il progetto, fare domande e vivere una consultazione iniziale. A partire dalla seconda consultazione, i servizi saranno forniti a pagamento.
Importante:
Questa attività non è collegata alla medicina, non costituisce un servizio medico e non sostituisce assistenza medica, diagnosi, psicoterapia o trattamento. Tutti i materiali, le consultazioni e le pratiche spirituali presentati su questo sito web sono destinati esclusivamente a scopi informativi, spirituali e introduttivi.
Crediamo che lo sviluppo spirituale, la scoperta di sé e la comprensione della propria energia interiore possano aiutare le persone a comprendere meglio se stesse, prendere decisioni più consapevoli e trovare armonia interiore.
Questo progetto viene creato con grande responsabilità, cura per le persone e un sincero desiderio di costruire uno spazio internazionale per l’esplorazione, la comprensione e lo sviluppo spirituale.`,
  ar: `مرحبًا بكم في المشروع الدولي المخصص للمصفوفة النفسية، والتطور الروحي، واكتشاف الذات، ومختلف المجالات الباطنية.
تم إنشاء هذا الموقع بوصفه أحد أوائل المشاريع الاجتماعية الدولية في مجال المصفوفة النفسية والباطنية، بهدف جمع الأشخاص المهتمين بالتطور الروحي، وممارسات الطاقة، والانسجام الداخلي، والبحث عن إجابات لأسئلة الحياة المهمة.
على هذا الموقع، ستتمكنون من استكشاف مجالات مختلفة، بما في ذلك:
* المصفوفة النفسية وتحليل الشخصية؛
* الممارسات الروحية واكتشاف الذات؛
* تطهير الطاقة السلبية؛
* صلوات طرد الأرواح والحماية الروحية؛
* الاستبصار والاستشارات الحدسية؛
* ممارسات الطاقة؛
* الدعم الروحي ومجالات أخرى ذات صلة.
هدفنا هو إنشاء مساحة يستطيع فيها الناس تلقي المعلومات والدعم والتفهم، والحصول على فرصة للنظر إلى حياتهم من منظور جديد، وفهم أنفسهم بشكل أفضل، واكتشاف نقاط قوتهم ومواردهم الداخلية ومسار حياتهم.
من أجل راحة الجمهور الدولي، سيكون الموقع متاحًا بعدة لغات: الألمانية، والفرنسية، والإنجليزية، والإسبانية، والإيطالية، والعربية، والصينية، واللوكسمبورغية.
سيتميز تصميم الموقع بدرجات من الأخضر الفاتح والبنفسجي، ترمز إلى الانسجام، والسلام الداخلي، والنمو الروحي، والحدس، والتوازن.
ستكون الاستشارة الكاملة الأولى مجانية تمامًا حتى يتمكن الجميع من التعرف إلى المشروع، وطرح الأسئلة، وتجربة استشارة أولية. ابتداءً من الاستشارة الثانية، ستُقدَّم الخدمات على أساس مدفوع.
مهم:
هذا النشاط غير مرتبط بالطب، ولا يشكل خدمة طبية، ولا يحل محل المساعدة الطبية أو التشخيص أو العلاج النفسي أو العلاج. جميع المواد والاستشارات والممارسات الروحية المعروضة على هذا الموقع مخصصة فقط لأغراض معلوماتية وروحية وتمهيدية.
نؤمن بأن التطور الروحي، واكتشاف الذات، وفهم الطاقة الداخلية للفرد يمكن أن تساعد الناس على فهم أنفسهم بشكل أفضل، واتخاذ قرارات أكثر وعيًا، وإيجاد الانسجام الداخلي.
يتم إنشاء هذا المشروع بمسؤولية كبيرة، ورعاية للناس، ورغبة صادقة في بناء مساحة دولية للاستكشاف والفهم والتطور الروحي.`,
  zh: `欢迎来到这个致力于心理矩阵、灵性发展、自我发现以及各种神秘学领域的国际项目。
本网站创建为心理矩阵与神秘学领域最早的国际社会项目之一，旨在汇聚对灵性发展、能量实践、内在和谐以及寻找重要人生问题答案感兴趣的人们。
在本网站上，您将能够探索多个领域，包括：
* 心理矩阵和人格分析；
* 灵性实践和自我发现；
* 清理负面能量；
* 驱魔祈祷和灵性保护；
* 灵视能力和直觉咨询；
* 能量实践；
* 灵性支持及其他相关领域。
我们的目标是创建一个空间，让人们能够获得信息、支持、理解，并有机会从新的角度看待自己的生活，更好地了解自己，发现自己的优势、内在资源和人生道路。
为了方便国际受众，本网站将提供多种语言版本：德语、法语、英语、西班牙语、意大利语、阿拉伯语、中文和卢森堡语。
网站设计将采用浅绿色和紫色调，象征和谐、内在平静、灵性成长、直觉和平衡。
第一次完整咨询将完全免费，以便每个人都能熟悉该项目、提出问题并体验初始咨询。从第二次咨询开始，服务将以付费方式提供。
重要：
本活动与医学无关，不构成医疗服务，也不能替代医疗帮助、诊断、心理治疗或治疗。本网站展示的所有材料、咨询和灵性实践仅用于信息、灵性和介绍性目的。
我们相信，灵性发展、自我发现以及对自身内在能量的理解，可以帮助人们更好地了解自己，做出更有意识的决定，并找到内在和谐。
本项目正在以高度的责任感、对人的关怀以及真诚的愿望创建，旨在建立一个用于灵性探索、理解和发展的国际空间。`,
  lb: `Wëllkomm beim internationale Projet, deen der Psychomatrix, der spiritueller Entwécklung, der Selbstentdeckung an verschiddenen esoteresche Beräicher gewidmet ass.
Dës Websäit gouf als ee vun den éischten internationale soziale Projeten am Beräich vun der Psychomatrix an der Esoterik erstallt, mam Zil Leit zesummenzebréngen, déi sech fir spirituell Entwécklung, Energiepraktiken, bannescht Harmonie an d’Sich no Äntwerten op wichteg Liewensfroen interesséieren.
Op dëser Websäit kënnt Dir verschidde Beräicher entdecken, dorënner:
* d’Psychomatrix an d’Perséinlechkeetsanalys;
* spirituell Praktiken a Selbstentdeckung;
* Botzung vun negativer Energie;
* Exorzismus-Gebieder a spirituelle Schutz;
* Hellsiichtegkeet an intuitiv Consultatiounen;
* Energiepraktiken;
* spirituell Ënnerstëtzung an aner verbonnen Beräicher.
Eist Zil ass et, e Raum ze schafen, wou Leit Informatioun, Ënnerstëtzung, Verständnis an d’Méiglechkeet kréien, hiert Liewen aus enger neier Perspektiv ze kucken, sech selwer besser ze verstoen, hir Stäerkten, bannenzeg Ressourcen an hire Liewenswee ze entdecken.
Fir de Komfort vun engem internationale Publikum wäert d’Websäit a verschiddene Sprooche verfügbar sinn: Däitsch, Franséisch, Englesch, Spuenesch, Italienesch, Arabesch, Chinesesch a Lëtzebuergesch.
Den Design vun der Websäit wäert hellgréng a violett Téin enthalen, déi Harmonie, bannesche Fridden, spirituellt Wuesstem, Intuitioun a Gläichgewiicht symboliséieren.
Déi éischt voll Consultatioun wäert komplett gratis sinn, fir datt jidderee sech mam Projet vertraut maache kann, Froen stelle kann an eng éischt Consultatioun erliewe kann. Vun der zweeter Consultatioun un ginn d’Servicer op bezuelter Basis ugebueden.
Wichteg:
Dës Aktivitéit huet kee Bezuch zur Medezin, ass kee medezinesche Service a ersetzt keng medezinesch Hëllef, Diagnos, Psychotherapie oder Behandlung. All Materialien, Consultatiounen a spirituell Praktiken, déi op dëser Websäit presentéiert ginn, si just fir informativ, spirituell an aféierend Zwecker geduecht.
Mir gleewen, datt spirituell Entwécklung, Selbstentdeckung an d’Verständnis vun der eegener bannenzeger Energie de Leit hëllefe kënnen, sech selwer besser ze verstoen, méi bewosst Entscheedungen ze treffen an bannescht Harmonie ze fannen.
Dëse Projet gëtt mat grousser Verantwortung, Suerg ëm d’Leit an engem oprichtege Wonsch erstallt, en internationale Raum fir spirituell Exploratioun, Verständnis an Entwécklung opzebauen.`
};

const translations = {
  en: {
    documentTitle: "EnneaLuma | Psychomatrix, clarity and inner balance",
    metaDescription: "EnneaLuma is an international psychomatrix and spiritual exploration project focused on clarity, self-discovery, and inner balance.",
    tagline: "Psychomatrix, clarity and inner balance",
    navHome: "Home",
    navLanguages: "Languages",
    navOfficial: "Official text",
    navConsultation: "Free consultation",
    navPayment: "Payment",
    navContact: "Contact",
    languageLabel: "Language",
    heroEyebrow: "International spiritual project",
    heroLead: "An international space for psychomatrix, spiritual development, self-discovery and inner harmony.",
    primaryCta: "Request a Free First Consultation",
    primaryCtaShort: "Free consultation",
    secondaryCta: "Contact EnneaLuma",
    heroNote: "The first full consultation is free.",
    trustFree: "First consultation free",
    trustLanguages: "8 languages",
    trustSupport: "Spiritual support",
    trustNotice: "Not a medical service",
    officialTitle: "Official Project Introduction",
    officialIntro: "Use the language selector to read this project text in each supported language.",
    officialText: officialTexts.en,
    storyTitle: "A calm space for spiritual exploration",
    storyBody: "Gentle visual moments for inner clarity, spiritual development and energy balance.",
    storyClarity: "Inner clarity",
    storyDevelopment: "Spiritual development",
    storyBalance: "Energy balance",
    consultationTitle: "Free consultation",
    consultationBody: "The first full consultation is free of charge. Ask questions, get to know the project, and experience an initial consultation.",
    consultationCardTitle: "First full consultation free of charge",
    consultationCardBody: "The first full consultation is completely free. You can become familiar with the project, ask questions, and experience an initial consultation.",
    emailFallback: "If the button does not open your email app, please send your message directly to info@ennealuma.com.",
    requestByEmail: "Request by email",
    secondConsultationTitle: "From the second consultation",
    secondConsultationBody: "Starting from the second consultation, services are paid.",
    paymentTitle: "Payment through PayPal",
    paymentBody: "The first full consultation is free. Starting from the second consultation, services are provided on a paid basis. Payments can be made through PayPal after confirmation by e-mail.",
    paymentCardTitle: "Payment for follow-up consultations",
    paymentCardBody: "Starting from the second consultation, services are provided on a paid basis. Payments can be made through PayPal after confirmation by e-mail.",
    paymentNote: "Use this PayPal.Me link after confirming the paid consultation by e-mail.",
    paypalCta: "Pay with PayPal",
    languagesTitle: "Language selector",
    languagesBody: "Choose your preferred interface language. The project text changes with the selected language.",
    contactTitle: "Contact",
    contactBody: "For communication and consultation requests, write to info@ennealuma.com.",
    emailLabel: "Email",
    medicalTitle: "Medical disclaimer",
    importantNoticeTitle: "Important Notice",
    medicalDisclaimer: "EnneaLuma is not related to medicine, does not constitute a medical service, and does not replace medical assistance, diagnosis, psychotherapy, or treatment.",
    footerText: "International psychomatrix and spiritual exploration project.",
    footerDisclaimer: "Not a medical service.",
    requestSubject: "Request a Free First Consultation",
    contactSubject: "Contact EnneaLuma"
  },
  de: {
    documentTitle: "EnneaLuma | Psychomatrix, Klarheit und innere Balance",
    metaDescription: "EnneaLuma ist ein internationales Projekt für Psychomatrix und spirituelle Entdeckung mit Fokus auf Klarheit, Selbsterkenntnis und innere Balance.",
    tagline: "Psychomatrix, Klarheit und innere Balance",
    navHome: "Start",
    navLanguages: "Sprachen",
    navOfficial: "Offizieller Text",
    navConsultation: "Kostenlose Beratung",
    navPayment: "Zahlung",
    navContact: "Kontakt",
    languageLabel: "Sprache",
    heroEyebrow: "Internationales spirituelles Projekt",
    heroLead: "Ein ruhiger internationaler Raum für Psychomatrix, spirituelle Entwicklung, Selbsterkenntnis und innere Balance.",
    primaryCta: "Kostenlose Erstberatung anfragen",
    primaryCtaShort: "Kostenlose Beratung",
    secondaryCta: "EnneaLuma kontaktieren",
    heroNote: "Die erste vollständige Beratung ist kostenlos.",
    trustFree: "Erste Beratung kostenlos",
    trustLanguages: "8 Sprachen",
    trustSupport: "Spirituelle Unterstützung",
    trustNotice: "Kein medizinischer Service",
    officialTitle: "Offizielle Projektvorstellung",
    officialIntro: "Nutzen Sie die Sprachauswahl, um diesen Projekttext in jeder unterstützten Sprache zu lesen.",
    officialText: officialTexts.de,
    storyTitle: "Ein ruhiger Raum für spirituelle Erforschung",
    storyBody: "Sanfte visuelle Momente für innere Klarheit, spirituelle Entwicklung und Energie-Balance.",
    storyClarity: "Innere Klarheit",
    storyDevelopment: "Spirituelle Entwicklung",
    storyBalance: "Energie-Balance",
    consultationTitle: "Kostenlose Beratung",
    consultationBody: "Die erste vollständige Beratung ist kostenlos. Stellen Sie Fragen, lernen Sie das Projekt kennen und erleben Sie eine erste Beratung.",
    consultationCardTitle: "Erste vollständige Beratung kostenlos",
    consultationCardBody: "Die erste vollständige Beratung ist komplett kostenlos. Sie können das Projekt kennenlernen, Fragen stellen und eine erste Beratung erleben.",
    emailFallback: "Wenn der Button Ihre E-Mail-App nicht öffnet, senden Sie Ihre Nachricht bitte direkt an info@ennealuma.com.",
    requestByEmail: "Per E-Mail anfragen",
    secondConsultationTitle: "Ab der zweiten Beratung",
    secondConsultationBody: "Ab der zweiten Beratung sind die Leistungen kostenpflichtig.",
    paymentTitle: "Zahlung über PayPal",
    paymentBody: "Die erste vollständige Beratung ist kostenlos. Ab der zweiten Beratung werden die Leistungen kostenpflichtig angeboten. Zahlungen können nach Bestätigung per E-Mail über PayPal erfolgen.",
    paymentCardTitle: "Zahlung für Folgeberatungen",
    paymentCardBody: "Ab der zweiten Beratung werden Leistungen kostenpflichtig angeboten. Zahlungen können nach Bestätigung per E-Mail über PayPal erfolgen.",
    paymentNote: "Verwenden Sie diesen PayPal.Me-Link nach Bestätigung der kostenpflichtigen Beratung per E-Mail.",
    paypalCta: "Mit PayPal bezahlen",
    languagesTitle: "Sprachauswahl",
    languagesBody: "Wählen Sie Ihre bevorzugte Sprache für die Oberfläche. Der Projekttext wechselt mit der ausgewählten Sprache.",
    contactTitle: "Kontakt",
    contactBody: "Für Kommunikation und Beratungsanfragen schreiben Sie an info@ennealuma.com.",
    emailLabel: "E-Mail",
    medicalTitle: "Medizinischer Hinweis",
    importantNoticeTitle: "Wichtiger Hinweis",
    medicalDisclaimer: "EnneaLuma steht nicht mit Medizin in Verbindung, stellt keine medizinische Dienstleistung dar und ersetzt keine medizinische Hilfe, Diagnose, Psychotherapie oder Behandlung.",
    footerText: "Internationales Projekt für Psychomatrix und spirituelle Entdeckung.",
    footerDisclaimer: "Kein medizinischer Service.",
    requestSubject: "Kostenlose Erstberatung anfragen",
    contactSubject: "Kontakt mit EnneaLuma"
  },
  fr: {
    documentTitle: "EnneaLuma | Psychomatrix, clarté et équilibre intérieur",
    metaDescription: "EnneaLuma est un projet international de psychomatrix et d'exploration spirituelle axé sur la clarté, la découverte de soi et l'équilibre intérieur.",
    tagline: "Psychomatrix, clarté et équilibre intérieur",
    navHome: "Accueil",
    navLanguages: "Langues",
    navOfficial: "Texte officiel",
    navConsultation: "Consultation gratuite",
    navPayment: "Paiement",
    navContact: "Contact",
    languageLabel: "Langue",
    heroEyebrow: "Projet spirituel international",
    heroLead: "Un espace international calme pour la psychomatrix, le développement spirituel, la découverte de soi et l'équilibre intérieur.",
    primaryCta: "Demander une premiere consultation gratuite",
    primaryCtaShort: "Consultation gratuite",
    secondaryCta: "Contacter EnneaLuma",
    heroNote: "La première consultation complète est gratuite.",
    trustFree: "Première consultation gratuite",
    trustLanguages: "8 langues",
    trustSupport: "Soutien spirituel",
    trustNotice: "Pas un service médical",
    officialTitle: "Présentation officielle du projet",
    officialIntro: "Utilisez le sélecteur de langue pour lire ce texte du projet dans chaque langue prise en charge.",
    officialText: officialTexts.fr,
    storyTitle: "Un espace calme pour l'exploration spirituelle",
    storyBody: "Des moments visuels doux pour la clarté intérieure, le développement spirituel et l'équilibre énergétique.",
    storyClarity: "Clarté intérieure",
    storyDevelopment: "Développement spirituel",
    storyBalance: "Équilibre énergétique",
    consultationTitle: "Consultation gratuite",
    consultationBody: "La première consultation complète est gratuite. Posez vos questions, découvrez le projet et vivez une première consultation.",
    consultationCardTitle: "Première consultation complète gratuite",
    consultationCardBody: "La première consultation complète est entièrement gratuite. Vous pouvez découvrir le projet, poser des questions et vivre une consultation initiale.",
    emailFallback: "Si le bouton n'ouvre pas votre application e-mail, veuillez envoyer votre message directement à info@ennealuma.com.",
    requestByEmail: "Demander par e-mail",
    secondConsultationTitle: "À partir de la deuxième consultation",
    secondConsultationBody: "À partir de la deuxième consultation, les services sont payants.",
    paymentTitle: "Paiement par PayPal",
    paymentBody: "La première consultation complète est gratuite. À partir de la deuxième consultation, les services sont fournis sur une base payante. Les paiements peuvent être effectués via PayPal après confirmation par e-mail.",
    paymentCardTitle: "Paiement des consultations de suivi",
    paymentCardBody: "À partir de la deuxième consultation, les services sont fournis sur une base payante. Les paiements peuvent être effectués via PayPal après confirmation par e-mail.",
    paymentNote: "Utilisez ce lien PayPal.Me après confirmation de la consultation payante par e-mail.",
    paypalCta: "Payer avec PayPal",
    languagesTitle: "Sélecteur de langue",
    languagesBody: "Choisissez votre langue d'interface préférée. Le texte du projet change avec la langue sélectionnée.",
    contactTitle: "Contact",
    contactBody: "Pour toute communication et demande de consultation, écrivez à info@ennealuma.com.",
    emailLabel: "E-mail",
    medicalTitle: "Avertissement médical",
    importantNoticeTitle: "Avis important",
    medicalDisclaimer: "EnneaLuma n'est pas lié à la médecine, ne constitue pas un service médical et ne remplace pas l'aide médicale, le diagnostic, la psychothérapie ou le traitement.",
    footerText: "Projet international de psychomatrix et d'exploration spirituelle.",
    footerDisclaimer: "Pas un service médical.",
    requestSubject: "Demande de premiere consultation gratuite",
    contactSubject: "Contact EnneaLuma"
  },
  es: {
    documentTitle: "EnneaLuma | Psychomatrix, claridad y equilibrio interior",
    metaDescription: "EnneaLuma es un proyecto internacional de psychomatrix y exploración espiritual centrado en la claridad, el autodescubrimiento y el equilibrio interior.",
    tagline: "Psychomatrix, claridad y equilibrio interior",
    navHome: "Inicio",
    navLanguages: "Idiomas",
    navOfficial: "Texto oficial",
    navConsultation: "Consulta gratuita",
    navPayment: "Pago",
    navContact: "Contacto",
    languageLabel: "Idioma",
    heroEyebrow: "Proyecto espiritual internacional",
    heroLead: "Un espacio internacional sereno para la psychomatrix, el desarrollo espiritual, el autodescubrimiento y el equilibrio interior.",
    primaryCta: "Solicitar una primera consulta gratuita",
    primaryCtaShort: "Consulta gratuita",
    secondaryCta: "Contactar con EnneaLuma",
    heroNote: "La primera consulta completa es gratuita.",
    trustFree: "Primera consulta gratis",
    trustLanguages: "8 idiomas",
    trustSupport: "Apoyo espiritual",
    trustNotice: "No es un servicio médico",
    officialTitle: "Presentación oficial del proyecto",
    officialIntro: "Usa el selector de idioma para leer este texto del proyecto en cada idioma disponible.",
    officialText: officialTexts.es,
    storyTitle: "Un espacio sereno para la exploración espiritual",
    storyBody: "Momentos visuales suaves para claridad interior, desarrollo espiritual y equilibrio energético.",
    storyClarity: "Claridad interior",
    storyDevelopment: "Desarrollo espiritual",
    storyBalance: "Equilibrio energético",
    consultationTitle: "Consulta gratuita",
    consultationBody: "La primera consulta completa es gratuita. Haz preguntas, conoce el proyecto y vive una consulta inicial.",
    consultationCardTitle: "Primera consulta completa gratuita",
    consultationCardBody: "La primera consulta completa es totalmente gratuita. Puedes conocer el proyecto, hacer preguntas y vivir una consulta inicial.",
    emailFallback: "Si el botón no abre tu aplicación de email, envía tu mensaje directamente a info@ennealuma.com.",
    requestByEmail: "Solicitar por email",
    secondConsultationTitle: "Desde la segunda consulta",
    secondConsultationBody: "A partir de la segunda consulta, los servicios son de pago.",
    paymentTitle: "Pago a través de PayPal",
    paymentBody: "La primera consulta completa es gratuita. A partir de la segunda consulta, los servicios se ofrecen de forma pagada. Los pagos pueden realizarse a través de PayPal después de la confirmación por email.",
    paymentCardTitle: "Pago de consultas posteriores",
    paymentCardBody: "A partir de la segunda consulta, los servicios se ofrecen de forma pagada. Los pagos pueden realizarse a través de PayPal después de la confirmación por email.",
    paymentNote: "Usa este enlace de PayPal.Me después de confirmar la consulta pagada por email.",
    paypalCta: "Pagar con PayPal",
    languagesTitle: "Selector de idioma",
    languagesBody: "Elige tu idioma de interfaz preferido. El texto del proyecto cambia con el idioma seleccionado.",
    contactTitle: "Contacto",
    contactBody: "Para comunicación y solicitudes de consulta, escribe a info@ennealuma.com.",
    emailLabel: "Email",
    medicalTitle: "Aviso médico",
    importantNoticeTitle: "Aviso importante",
    medicalDisclaimer: "EnneaLuma no está relacionado con la medicina, no constituye un servicio médico y no reemplaza la asistencia médica, el diagnóstico, la psicoterapia ni el tratamiento.",
    footerText: "Proyecto internacional de psychomatrix y exploración espiritual.",
    footerDisclaimer: "No es un servicio médico.",
    requestSubject: "Solicitud de primera consulta gratuita",
    contactSubject: "Contacto EnneaLuma"
  },
  it: {
    documentTitle: "EnneaLuma | Psychomatrix, chiarezza ed equilibrio interiore",
    metaDescription: "EnneaLuma è un progetto internazionale di psychomatrix ed esplorazione spirituale focalizzato su chiarezza, scoperta di sé ed equilibrio interiore.",
    tagline: "Psychomatrix, chiarezza ed equilibrio interiore",
    navHome: "Home",
    navLanguages: "Lingue",
    navOfficial: "Testo ufficiale",
    navConsultation: "Consultazione gratuita",
    navPayment: "Pagamento",
    navContact: "Contatto",
    languageLabel: "Lingua",
    heroEyebrow: "Progetto spirituale internazionale",
    heroLead: "Uno spazio internazionale sereno per psychomatrix, sviluppo spirituale, scoperta di sé ed equilibrio interiore.",
    primaryCta: "Richiedi una prima consultazione gratuita",
    primaryCtaShort: "Consultazione gratuita",
    secondaryCta: "Contatta EnneaLuma",
    heroNote: "La prima consultazione completa è gratuita.",
    trustFree: "Prima consultazione gratuita",
    trustLanguages: "8 lingue",
    trustSupport: "Supporto spirituale",
    trustNotice: "Non è un servizio medico",
    officialTitle: "Presentazione ufficiale del progetto",
    officialIntro: "Usa il selettore della lingua per leggere questo testo del progetto in ogni lingua supportata.",
    officialText: officialTexts.it,
    storyTitle: "Uno spazio calmo per l'esplorazione spirituale",
    storyBody: "Momenti visivi delicati per chiarezza interiore, sviluppo spirituale ed equilibrio energetico.",
    storyClarity: "Chiarezza interiore",
    storyDevelopment: "Sviluppo spirituale",
    storyBalance: "Equilibrio energetico",
    consultationTitle: "Consultazione gratuita",
    consultationBody: "La prima consultazione completa è gratuita. Fai domande, conosci il progetto e vivi una consultazione iniziale.",
    consultationCardTitle: "Prima consultazione completa gratuita",
    consultationCardBody: "La prima consultazione completa è completamente gratuita. Puoi conoscere il progetto, fare domande e vivere una consultazione iniziale.",
    emailFallback: "Se il pulsante non apre la tua app email, invia il messaggio direttamente a info@ennealuma.com.",
    requestByEmail: "Richiedi via email",
    secondConsultationTitle: "Dalla seconda consultazione",
    secondConsultationBody: "A partire dalla seconda consultazione, i servizi sono a pagamento.",
    paymentTitle: "Pagamento tramite PayPal",
    paymentBody: "La prima consultazione completa è gratuita. A partire dalla seconda consultazione, i servizi sono forniti a pagamento. I pagamenti possono essere effettuati tramite PayPal dopo conferma via email.",
    paymentCardTitle: "Pagamento per consultazioni successive",
    paymentCardBody: "A partire dalla seconda consultazione, i servizi sono forniti a pagamento. I pagamenti possono essere effettuati tramite PayPal dopo conferma via email.",
    paymentNote: "Usa questo link PayPal.Me dopo la conferma via email della consultazione a pagamento.",
    paypalCta: "Paga con PayPal",
    languagesTitle: "Selettore lingua",
    languagesBody: "Scegli la lingua dell'interfaccia che preferisci. Il testo del progetto cambia con la lingua selezionata.",
    contactTitle: "Contatto",
    contactBody: "Per comunicazioni e richieste di consultazione, scrivi a info@ennealuma.com.",
    emailLabel: "Email",
    medicalTitle: "Avvertenza medica",
    importantNoticeTitle: "Avviso importante",
    medicalDisclaimer: "EnneaLuma non è collegata alla medicina, non costituisce un servizio medico e non sostituisce assistenza medica, diagnosi, psicoterapia o trattamento.",
    footerText: "Progetto internazionale di psychomatrix ed esplorazione spirituale.",
    footerDisclaimer: "Non è un servizio medico.",
    requestSubject: "Richiesta di prima consultazione gratuita",
    contactSubject: "Contatto EnneaLuma"
  },
  ar: {
    documentTitle: "EnneaLuma | المصفوفة النفسية، الوضوح والتوازن الداخلي",
    metaDescription: "EnneaLuma مشروع دولي للمصفوفة النفسية والاستكشاف الروحي يركز على الوضوح واكتشاف الذات والتوازن الداخلي.",
    tagline: "المصفوفة النفسية، الوضوح والتوازن الداخلي",
    navHome: "الرئيسية",
    navLanguages: "اللغات",
    navOfficial: "النص الرسمي",
    navConsultation: "استشارة مجانية",
    navPayment: "الدفع",
    navContact: "تواصل",
    languageLabel: "اللغة",
    heroEyebrow: "مشروع روحي دولي",
    heroLead: "مساحة دولية هادئة للمصفوفة النفسية، التطور الروحي، اكتشاف الذات، والتوازن الداخلي.",
    primaryCta: "اطلب الاستشارة الأولى المجانية",
    primaryCtaShort: "استشارة مجانية",
    secondaryCta: "تواصل مع EnneaLuma",
    heroNote: "الاستشارة الكاملة الأولى مجانية.",
    trustFree: "الاستشارة الأولى مجانية",
    trustLanguages: "8 لغات",
    trustSupport: "دعم روحي",
    trustNotice: "ليس خدمة طبية",
    officialTitle: "النص الرسمي للمشروع",
    officialIntro: "استخدم محدد اللغة لقراءة نص المشروع هذا بكل لغة مدعومة.",
    officialText: officialTexts.ar,
    storyTitle: "مساحة هادئة للاستكشاف الروحي",
    storyBody: "لحظات بصرية لطيفة للوضوح الداخلي والتطور الروحي وتوازن الطاقة.",
    storyClarity: "وضوح داخلي",
    storyDevelopment: "تطور روحي",
    storyBalance: "توازن الطاقة",
    consultationTitle: "استشارة مجانية",
    consultationBody: "الاستشارة الكاملة الأولى مجانية. يمكنك طرح الأسئلة والتعرف إلى المشروع وتجربة استشارة أولية.",
    consultationCardTitle: "الاستشارة الكاملة الأولى مجانية",
    consultationCardBody: "الاستشارة الكاملة الأولى مجانية تمامًا. يمكنك التعرف إلى المشروع وطرح الأسئلة وتجربة استشارة أولية.",
    emailFallback: "إذا لم يفتح الزر تطبيق البريد الإلكتروني، يرجى إرسال رسالتك مباشرة إلى info@ennealuma.com.",
    requestByEmail: "اطلب عبر البريد الإلكتروني",
    secondConsultationTitle: "ابتداءً من الاستشارة الثانية",
    secondConsultationBody: "ابتداءً من الاستشارة الثانية، تكون الخدمات مدفوعة.",
    paymentTitle: "الدفع عبر PayPal",
    paymentBody: "الاستشارة الكاملة الأولى مجانية. ابتداءً من الاستشارة الثانية، تُقدّم الخدمات على أساس مدفوع. يمكن إجراء المدفوعات عبر PayPal بعد التأكيد بالبريد الإلكتروني.",
    paymentCardTitle: "الدفع للاستشارات اللاحقة",
    paymentCardBody: "ابتداءً من الاستشارة الثانية، تُقدّم الخدمات على أساس مدفوع. يمكن إجراء المدفوعات عبر PayPal بعد التأكيد بالبريد الإلكتروني.",
    paymentNote: "استخدم رابط PayPal.Me هذا بعد تأكيد الاستشارة المدفوعة عبر البريد الإلكتروني.",
    paypalCta: "ادفع عبر PayPal",
    languagesTitle: "اختيار اللغة",
    languagesBody: "اختر لغة الواجهة المفضلة لديك. يتغير نص المشروع حسب اللغة المحددة.",
    contactTitle: "تواصل",
    contactBody: "للتواصل وطلبات الاستشارة، اكتب إلى info@ennealuma.com.",
    emailLabel: "البريد الإلكتروني",
    medicalTitle: "إخلاء مسؤولية طبية",
    importantNoticeTitle: "تنبيه مهم",
    medicalDisclaimer: "EnneaLuma ليست مرتبطة بالطب، ولا تشكل خدمة طبية، ولا تحل محل المساعدة الطبية أو التشخيص أو العلاج النفسي أو العلاج.",
    footerText: "مشروع دولي للمصفوفة النفسية والاستكشاف الروحي.",
    footerDisclaimer: "ليست خدمة طبية.",
    requestSubject: "طلب الاستشارة الأولى المجانية",
    contactSubject: "تواصل مع EnneaLuma"
  },
  zh: {
    documentTitle: "EnneaLuma | 心理矩阵、清晰与内在平衡",
    metaDescription: "EnneaLuma 是一个国际心理矩阵与灵性探索项目，关注清晰、自我发现和内在平衡。",
    tagline: "心理矩阵、清晰与内在平衡",
    navHome: "首页",
    navLanguages: "语言",
    navOfficial: "官方文本",
    navConsultation: "免费咨询",
    navPayment: "付款",
    navContact: "联系",
    languageLabel: "语言",
    heroEyebrow: "国际灵性项目",
    heroLead: "一个宁静的国际空间，面向心理矩阵、灵性发展、自我发现和内在平衡。",
    primaryCta: "申请首次免费咨询",
    primaryCtaShort: "免费咨询",
    secondaryCta: "联系 EnneaLuma",
    heroNote: "首次完整咨询免费。",
    trustFree: "首次咨询免费",
    trustLanguages: "8 种语言",
    trustSupport: "灵性支持",
    trustNotice: "非医疗服务",
    officialTitle: "项目官方文本",
    officialIntro: "使用语言选择器以每种支持的语言阅读此项目文本。",
    officialText: officialTexts.zh,
    storyTitle: "用于灵性探索的宁静空间",
    storyBody: "柔和的视觉时刻，面向内在清晰、灵性发展与能量平衡。",
    storyClarity: "内在清晰",
    storyDevelopment: "灵性发展",
    storyBalance: "能量平衡",
    consultationTitle: "免费咨询",
    consultationBody: "首次完整咨询免费。你可以提问、了解项目，并体验一次初始咨询。",
    consultationCardTitle: "首次完整咨询免费",
    consultationCardBody: "首次完整咨询完全免费。你可以了解项目、提出问题，并体验一次初始咨询。",
    emailFallback: "如果按钮没有打开你的电子邮件应用，请直接发送邮件至 info@ennealuma.com。",
    requestByEmail: "通过邮件申请",
    secondConsultationTitle: "从第二次咨询开始",
    secondConsultationBody: "从第二次咨询开始，服务为付费服务。",
    paymentTitle: "通过 PayPal 付款",
    paymentBody: "首次完整咨询免费。从第二次咨询开始，服务将以付费方式提供。经电子邮件确认后，可通过 PayPal 付款。",
    paymentCardTitle: "后续咨询付款",
    paymentCardBody: "从第二次咨询开始，服务将以付费方式提供。经电子邮件确认后，可通过 PayPal 付款。",
    paymentNote: "请在通过电子邮件确认付费咨询后使用此 PayPal.Me 链接。",
    paypalCta: "使用 PayPal 付款",
    languagesTitle: "语言选择器",
    languagesBody: "请选择你偏好的界面语言。项目文本会随所选语言切换。",
    contactTitle: "联系",
    contactBody: "如需沟通或申请咨询，请写信至 info@ennealuma.com。",
    emailLabel: "电子邮件",
    medicalTitle: "医疗免责声明",
    importantNoticeTitle: "重要提示",
    medicalDisclaimer: "EnneaLuma 与医学无关，不构成医疗服务，也不能替代医疗帮助、诊断、心理治疗或治疗。",
    footerText: "国际心理矩阵与灵性探索项目。",
    footerDisclaimer: "非医疗服务。",
    requestSubject: "申请首次免费咨询",
    contactSubject: "联系 EnneaLuma"
  },
  lb: {
    documentTitle: "EnneaLuma | Psychomatrix, Kloerheet an bannescht Gläichgewiicht",
    metaDescription: "EnneaLuma ass en internationale Projet fir Psychomatrix a spirituell Exploratioun mat Fokus op Kloerheet, Selbsterkenntnis a bannescht Gläichgewiicht.",
    tagline: "Psychomatrix, Kloerheet an bannescht Gläichgewiicht",
    navHome: "Start",
    navLanguages: "Sproochen",
    navOfficial: "Offizielle Text",
    navConsultation: "Gratis Consultatioun",
    navPayment: "Bezuelung",
    navContact: "Kontakt",
    languageLabel: "Sprooch",
    heroEyebrow: "Internationalen spirituelle Projet",
    heroLead: "E rouegen internationale Raum fir Psychomatrix, spirituell Entwécklung, Selbstentdeckung a bannescht Gläichgewiicht.",
    primaryCta: "Gratis éischt Consultatioun ufroen",
    primaryCtaShort: "Gratis Consultatioun",
    secondaryCta: "EnneaLuma kontaktéieren",
    heroNote: "Déi éischt voll Consultatioun ass gratis.",
    trustFree: "Éischt Consultatioun gratis",
    trustLanguages: "8 Sproochen",
    trustSupport: "Spirituell Ënnerstëtzung",
    trustNotice: "Kee medezinesche Service",
    officialTitle: "Offizielle Projetstext",
    officialIntro: "Benotzt d'Sproochauswiel, fir dëse Projetstext an all ënnerstëtzte Sprooch ze liesen.",
    officialText: officialTexts.lb,
    storyTitle: "E rouege Raum fir spirituell Exploratioun",
    storyBody: "Sanft visuell Momenter fir bannenzeg Kloerheet, spirituell Entwécklung an Energiegläichgewiicht.",
    storyClarity: "Bannenzeg Kloerheet",
    storyDevelopment: "Spirituell Entwécklung",
    storyBalance: "Energiegläichgewiicht",
    consultationTitle: "Gratis Consultatioun",
    consultationBody: "Déi éischt voll Consultatioun ass gratis. Stellt Froen, léiert de Projet kennen a maacht eng éischt Consultatioun.",
    consultationCardTitle: "Éischt voll Consultatioun gratis",
    consultationCardBody: "Déi éischt voll Consultatioun ass komplett gratis. Dir kënnt de Projet kenneléieren, Froen stellen an eng éischt Consultatioun erliewen.",
    emailFallback: "Wann de Knäppchen Är E-Mail-App net opmécht, schéckt Äre Message w.e.g. direkt un info@ennealuma.com.",
    requestByEmail: "Per E-Mail ufroen",
    secondConsultationTitle: "Vun der zweeter Consultatioun un",
    secondConsultationBody: "Vun der zweeter Consultatioun un si Servicer bezuelt.",
    paymentTitle: "Bezuelung iwwer PayPal",
    paymentBody: "Déi éischt voll Consultatioun ass gratis. Vun der zweeter Consultatioun un ginn d'Servicer bezuelt ugebueden. Bezuelunge kënnen no Confirmatioun per E-Mail iwwer PayPal gemaach ginn.",
    paymentCardTitle: "Bezuelung fir Folgeberodungen",
    paymentCardBody: "Vun der zweeter Consultatioun un ginn d'Servicer bezuelt ugebueden. Bezuelunge kënnen no Confirmatioun per E-Mail iwwer PayPal gemaach ginn.",
    paymentNote: "Benotzt dëse PayPal.Me-Link nodeems déi bezuelt Consultatioun per E-Mail confirméiert gouf.",
    paypalCta: "Mat PayPal bezuelen",
    languagesTitle: "Sprooch auswielen",
    languagesBody: "Wielt Är léifst Interface-Sprooch. De Projetstext wiesselt mat der ausgewielter Sprooch.",
    contactTitle: "Kontakt",
    contactBody: "Fir Kommunikatioun a Consultatiounsufroen, schreift un info@ennealuma.com.",
    emailLabel: "E-Mail",
    medicalTitle: "Medezineschen Disclaimer",
    importantNoticeTitle: "Wichtegen Hinweis",
    medicalDisclaimer: "EnneaLuma huet kee Bezuch zur Medezin, ass kee medezinesche Service a ersetzt keng medezinesch Hëllef, Diagnos, Psychotherapie oder Behandlung.",
    footerText: "Internationalen Projet fir Psychomatrix a spirituell Exploratioun.",
    footerDisclaimer: "Kee medezinesche Service.",
    requestSubject: "Gratis éischt Consultatioun ufroen",
    contactSubject: "Kontakt mat EnneaLuma"
  }
};

const languageSelect = document.querySelector("#languageSelect");
const languageSelectCode = document.querySelector("#languageSelectCode");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const metaDescription = document.querySelector('meta[name="description"]');
const year = document.querySelector("#year");

const languageCodes = {
  en: "EN",
  de: "DE",
  fr: "FR",
  es: "ES",
  it: "IT",
  ar: "AR",
  zh: "中文",
  lb: "LB"
};

function normalizeLanguage(language) {
  if (!language) return "en";
  const shortCode = language.toLowerCase().split("-")[0];
  return translations[shortCode] ? shortCode : "en";
}

function languageFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return lang && translations[lang] ? lang : "";
}

function mailtoHref() {
  return CONSULTATION_MAILTO;
}

function contactMailtoHref() {
  return CONSULTATION_MAILTO;
}

function renderOfficialText(node, text) {
  const lines = text.split("\n");
  node.replaceChildren();

  lines.forEach((line, index) => {
    if (line.startsWith("* ")) {
      const lineNode = document.createElement("span");
      lineNode.className = "official-bullet-line";

      const marker = document.createElement("span");
      marker.className = "official-bullet-marker";
      marker.textContent = "*";

      lineNode.append(marker, document.createTextNode(line.slice(1)));
      node.append(lineNode);
    } else {
      node.append(document.createTextNode(line));
    }

    if (index < lines.length - 1) {
      node.append(document.createTextNode("\n"));
    }
  });
}

function setLanguage(language) {
  const lang = normalizeLanguage(language);
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dictionary.documentTitle;
  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll(".official-copy").forEach((node) => {
    node.setAttribute("lang", lang);
    node.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    renderOfficialText(node, dictionary.officialText);
  });

  document.querySelectorAll(".official-panel").forEach((node) => {
    node.setAttribute("aria-label", dictionary.officialTitle);
  });

  document.querySelectorAll("[data-mailto]").forEach((node) => {
    node.setAttribute("href", mailtoHref(dictionary.requestSubject));
  });

  document.querySelectorAll("[data-contact-mailto]").forEach((node) => {
    node.setAttribute("href", contactMailtoHref(dictionary.contactSubject));
  });

  document.querySelectorAll(".language-grid").forEach((node) => {
    node.setAttribute("aria-label", dictionary.languagesTitle);
  });

  languageSelect.value = lang;
  languageSelect.setAttribute("aria-label", dictionary.languageLabel);
  if (languageSelectCode) {
    languageSelectCode.textContent = languageCodes[lang];
    languageSelectCode.setAttribute("lang", lang);
    languageSelectCode.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  languageButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-option") === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem("ennealuma-language", lang);
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.getAttribute("data-lang-option"));
  });
});

const savedLanguage = window.localStorage.getItem("ennealuma-language");
setLanguage(languageFromUrl() || savedLanguage || normalizeLanguage(window.navigator.language));
