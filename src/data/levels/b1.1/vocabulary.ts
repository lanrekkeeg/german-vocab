import { Card, Translations } from '../../../types';

export const B1_1_ALL_SECTIONS = [1, 2, 3, 4, 5, 6];

const sanitizeFilename = (text: string): string => {
    let sanitized = text.replace(/\s+/g, '_');
    sanitized = sanitized.replace(/[^a-zA-Z0-9_äöüÄÖÜß]/g, '');
    return sanitized;
};

const addAudioPaths = (vocabBySection: Record<number, (Omit<Card, 'audioSrc' | 'translations'> & { translations: Omit<Translations, 'german'> })[]>) => {
  const result: Record<number, Card[]> = {};
  for (const section in vocabBySection) {
    result[section] = vocabBySection[section].map(card => ({
      ...card,
      translations: { ...card.translations, german: card.german },
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/b1.1/words/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const b1_1_Vocabulary: Record<string, Card[]> = addAudioPaths({

  // Module 1: Frauen – Männer – Familien
  // Extracted from AB Module 1 "Wichtige Wörter" (pages 12-13) and KB Module 1
  "1": [
    // === Section A: Familie heute ===
    {
      german: "das Verhältnis, die Verhältnisse",
      translations: {
        english: "relationship",
        ukrainian: "відносини",
        polish: "stosunek, relacja",
        albanian: "marrëdhënia",
        arabic: "العلاقة",
        italian: "rapporto",
        serbian: "однос, односи"
      }
    },
    {
      german: "das Paar, die Paare",
      translations: {
        english: "couple",
        ukrainian: "пара",
        polish: "para",
        albanian: "çifti",
        arabic: "الزوجان",
        italian: "coppia",
        serbian: "пар, парови"
      }
    },
    {
      german: "unverheiratet",
      translations: {
        english: "unmarried",
        ukrainian: "неодружений",
        polish: "niezamężna/nieżonaty",
        albanian: "i pamartuar",
        arabic: "غير متزوج",
        italian: "non sposato",
        serbian: "неожењен/неудата"
      }
    },
    {
      german: "sogenannt",
      translations: {
        english: "so-called",
        ukrainian: "так званий",
        polish: "tak zwany",
        albanian: "i ashtuquajtur",
        arabic: "ما يسمى",
        italian: "cosiddetto",
        serbian: "такозвани"
      }
    },
    {
      german: "die Patchworkfamilie, die Patchworkfamilien",
      translations: {
        english: "blended family",
        ukrainian: "змішана сім'я",
        polish: "rodzina patchworkowa",
        albanian: "familja e përzier",
        arabic: "عائلة مختلطة",
        italian: "famiglia allargata",
        serbian: "мешовита породица"
      }
    },
    {
      german: "alleinstehend",
      translations: {
        english: "single, living alone",
        ukrainian: "самотній",
        polish: "samotny",
        albanian: "beqar",
        arabic: "أعزب",
        italian: "single",
        serbian: "самац"
      }
    },
    {
      german: "das Familienmodell, die Familienmodelle",
      translations: {
        english: "family model",
        ukrainian: "модель сім'ї",
        polish: "model rodziny",
        albanian: "modeli familjar",
        arabic: "نموذج الأسرة",
        italian: "modello familiare",
        serbian: "модел породице"
      }
    },
    {
      german: "alleinerziehend",
      translations: {
        english: "single parent",
        ukrainian: "батько/мати-одинак",
        polish: "samotnie wychowujący",
        albanian: "prind i vetëm",
        arabic: "أب/أم عازب/ة",
        italian: "genitore single",
        serbian: "самохрани родитељ"
      }
    },
    {
      german: "die Generation, die Generationen",
      translations: {
        english: "generation",
        ukrainian: "покоління",
        polish: "pokolenie",
        albanian: "gjenerata",
        arabic: "الجيل",
        italian: "generazione",
        serbian: "генерација"
      }
    },
    {
      german: "das Dach, die Dächer",
      translations: {
        english: "roof",
        ukrainian: "дах",
        polish: "dach",
        albanian: "çatia",
        arabic: "السقف",
        italian: "tetto",
        serbian: "кров, кровови"
      }
    },
    {
      german: "zusammenleben",
      translations: {
        english: "to live together",
        ukrainian: "жити разом",
        polish: "mieszkać razem",
        albanian: "të jetosh bashkë",
        arabic: "يعيش معاً",
        italian: "convivere",
        serbian: "живети заједно"
      }
    },
    {
      german: "9-jährig",
      translations: {
        english: "9-year-old",
        ukrainian: "9-річний",
        polish: "9-letni",
        albanian: "9-vjeçar",
        arabic: "يبلغ من العمر 9 سنوات",
        italian: "di 9 anni",
        serbian: "деветогодишњи"
      }
    },
    {
      german: "das Zusammenleben (Sg.)",
      translations: {
        english: "living together, cohabitation",
        ukrainian: "спільне життя",
        polish: "wspólne życie",
        albanian: "bashkëjetesa",
        arabic: "التعايش",
        italian: "convivenza",
        serbian: "заједнички живот"
      }
    },
    {
      german: "obwohl",
      translations: {
        english: "although",
        ukrainian: "хоча",
        polish: "chociaż",
        albanian: "megjithëse",
        arabic: "على الرغم من",
        italian: "sebbene",
        serbian: "иако"
      }
    },
    {
      german: "die Unterstützung, die Unterstützungen",
      translations: {
        english: "support",
        ukrainian: "підтримка",
        polish: "wsparcie",
        albanian: "mbështetja",
        arabic: "الدعم",
        italian: "supporto",
        serbian: "подршка"
      }
    },
    {
      german: "der Hort, die Horte",
      translations: {
        english: "after-school care center",
        ukrainian: "продовжена група",
        polish: "świetlica",
        albanian: "çerdhe pas shkolle",
        arabic: "مركز رعاية ما بعد المدرسة",
        italian: "doposcuola",
        serbian: "продужени боравак"
      }
    },
    {
      german: "der Schwager, die Schwäger",
      translations: {
        english: "brother-in-law",
        ukrainian: "шурин, дівер",
        polish: "szwagier",
        albanian: "kunati",
        arabic: "صهر",
        italian: "cognato",
        serbian: "шурак, девер"
      }
    },
    {
      german: "die Schwägerin, die Schwägerinnen",
      translations: {
        english: "sister-in-law",
        ukrainian: "невістка, зовиця",
        polish: "szwagierka",
        albanian: "kunatja",
        arabic: "نسيبة",
        italian: "cognata",
        serbian: "снаха, заова"
      }
    },
    {
      german: "unternehmen",
      translations: {
        english: "to undertake, to do",
        ukrainian: "робити, здійснювати",
        polish: "przedsięwziąć",
        albanian: "të ndërmarrësh",
        arabic: "يقوم بشيء",
        italian: "intraprendere",
        serbian: "предузети"
      }
    },
    {
      german: "erledigen",
      translations: {
        english: "to complete, to take care of",
        ukrainian: "виконувати",
        polish: "załatwić",
        albanian: "të kryesh",
        arabic: "ينجز",
        italian: "sbrigare",
        serbian: "обавити"
      }
    },
    {
      german: "das Elternhaus, die Elternhäuser",
      translations: {
        english: "parental home",
        ukrainian: "батьківський дім",
        polish: "dom rodzinny",
        albanian: "shtëpia prindërore",
        arabic: "بيت الوالدين",
        italian: "casa dei genitori",
        serbian: "родитељска кућа"
      }
    },
    {
      german: "ziehen",
      translations: {
        english: "to move (residence)",
        ukrainian: "переїжджати",
        polish: "przeprowadzać się",
        albanian: "të shpërngulesh",
        arabic: "ينتقل",
        italian: "trasferirsi",
        serbian: "преселити се"
      }
    },
    {
      german: "das Einzelkind, die Einzelkinder",
      translations: {
        english: "only child",
        ukrainian: "єдина дитина",
        polish: "jedynak",
        albanian: "fëmijë i vetëm",
        arabic: "طفل وحيد",
        italian: "figlio unico",
        serbian: "јединац/јединица"
      }
    },
    {
      german: "hektisch",
      translations: {
        english: "hectic",
        ukrainian: "метушливий",
        polish: "gorączkowy",
        albanian: "i nxituar",
        arabic: "محموم",
        italian: "frenetico",
        serbian: "хектичан"
      }
    },
    {
      german: "der Streit, die Streitigkeiten",
      translations: {
        english: "argument, dispute",
        ukrainian: "суперечка",
        polish: "kłótnia",
        albanian: "grindja",
        arabic: "خلاف",
        italian: "litigio",
        serbian: "свађа"
      }
    },
    {
      german: "die Schwiegereltern (Pl.)",
      translations: {
        english: "parents-in-law",
        ukrainian: "батьки чоловіка/дружини",
        polish: "teściowie",
        albanian: "prindërit e bashkëshortit",
        arabic: "أصهار",
        italian: "suoceri",
        serbian: "таст и ташта / свекар и свекрва"
      }
    },
    {
      german: "die Erziehung (Sg.)",
      translations: {
        english: "upbringing, education",
        ukrainian: "виховання",
        polish: "wychowanie",
        albanian: "edukimi",
        arabic: "التربية",
        italian: "educazione",
        serbian: "васпитање"
      }
    },
    {
      german: "trotzdem",
      translations: {
        english: "nevertheless",
        ukrainian: "все одно",
        polish: "mimo to",
        albanian: "megjithatë",
        arabic: "رغم ذلك",
        italian: "tuttavia",
        serbian: "ипак"
      }
    },
    {
      german: "akzeptieren",
      translations: {
        english: "to accept",
        ukrainian: "приймати",
        polish: "akceptować",
        albanian: "të pranosh",
        arabic: "يقبل",
        italian: "accettare",
        serbian: "прихватити"
      }
    },
    {
      german: "die Erziehungsmethode, die Erziehungsmethoden",
      translations: {
        english: "parenting method",
        ukrainian: "метод виховання",
        polish: "metoda wychowawcza",
        albanian: "metoda e edukimit",
        arabic: "طريقة التربية",
        italian: "metodo educativo",
        serbian: "метод васпитања"
      }
    },
    {
      german: "ergänzen",
      translations: {
        english: "to complete, to add",
        ukrainian: "доповнювати",
        polish: "uzupełnić",
        albanian: "të plotësosh",
        arabic: "يكمل",
        italian: "completare",
        serbian: "допунити"
      }
    },
    {
      german: "das Großfamilienleben (Sg.)",
      translations: {
        english: "extended family life",
        ukrainian: "життя великої родини",
        polish: "życie w dużej rodzinie",
        albanian: "jeta në familje të madhe",
        arabic: "حياة العائلة الكبيرة",
        italian: "vita in famiglia allargata",
        serbian: "живот у великој породици"
      }
    },
    {
      german: "offen",
      translations: {
        english: "open",
        ukrainian: "відкритий",
        polish: "otwarty",
        albanian: "i hapur",
        arabic: "منفتح",
        italian: "aperto",
        serbian: "отворен"
      }
    },
    {
      german: "der Schwiegervater, die Schwiegerväter",
      translations: {
        english: "father-in-law",
        ukrainian: "тесть, свекор",
        polish: "teść",
        albanian: "vjehrri",
        arabic: "حمو",
        italian: "suocero",
        serbian: "таст, свекар"
      }
    },
    {
      german: "die Schwiegermutter, die Schwiegermütter",
      translations: {
        english: "mother-in-law",
        ukrainian: "теща, свекруха",
        polish: "teściowa",
        albanian: "vjehrra",
        arabic: "حماة",
        italian: "suocera",
        serbian: "ташта, свекрва"
      }
    },
    {
      german: "die Meinungsverschiedenheit, die Meinungsverschiedenheiten",
      translations: {
        english: "disagreement",
        ukrainian: "розбіжність думок",
        polish: "różnica zdań",
        albanian: "mosmarrëveshja",
        arabic: "اختلاف في الرأي",
        italian: "divergenza di opinioni",
        serbian: "неслагање у мишљењу"
      }
    },
    {
      german: "munter",
      translations: {
        english: "lively, cheerful",
        ukrainian: "бадьорий",
        polish: "żwawy",
        albanian: "i gjallë",
        arabic: "نشيط",
        italian: "vivace",
        serbian: "весео"
      }
    },
    // === Section B: Irina Bulgakova erzählt ===
    {
      german: "die Scheidung, die Scheidungen",
      translations: {
        english: "divorce",
        ukrainian: "розлучення",
        polish: "rozwód",
        albanian: "divorci",
        arabic: "الطلاق",
        italian: "divorzio",
        serbian: "развод"
      }
    },
    {
      german: "der Mutterschutz (Sg.)",
      translations: {
        english: "maternity protection",
        ukrainian: "захист материнства",
        polish: "ochrona macierzyństwa",
        albanian: "mbrojtja e amësisë",
        arabic: "حماية الأمومة",
        italian: "tutela della maternità",
        serbian: "заштита мајчинства"
      }
    },
    {
      german: "die Wohnsituation, die Wohnsituationen",
      translations: {
        english: "housing situation",
        ukrainian: "житлова ситуація",
        polish: "sytuacja mieszkaniowa",
        albanian: "situata e banimit",
        arabic: "وضع السكن",
        italian: "situazione abitativa",
        serbian: "стамбена ситуација"
      }
    },
    {
      german: "der Migrant, die Migranten",
      translations: {
        english: "migrant",
        ukrainian: "мігрант/мігрантка",
        polish: "migrant/migrantka",
        albanian: "emigranti/emigrantja",
        arabic: "مهاجر/مهاجرة",
        italian: "migrante",
        serbian: "мигрант"
      }
    },
    {
      german: "das Recht, die Rechte",
      translations: {
        english: "right, law",
        ukrainian: "право",
        polish: "prawo",
        albanian: "e drejta",
        arabic: "الحق",
        italian: "diritto",
        serbian: "право"
      }
    },
    {
      german: "sich unterscheiden",
      translations: {
        english: "to differ",
        ukrainian: "відрізнятися",
        polish: "różnić się",
        albanian: "të dallohesh",
        arabic: "يختلف",
        italian: "differenziarsi",
        serbian: "разликовати се"
      }
    },
    {
      german: "das Mutterschutzgesetz, die Mutterschutzgesetze",
      translations: {
        english: "maternity protection law",
        ukrainian: "закон про захист материнства",
        polish: "ustawa o ochronie macierzyństwa",
        albanian: "ligji për mbrojtjen e amësisë",
        arabic: "قانون حماية الأمومة",
        italian: "legge sulla tutela della maternità",
        serbian: "закон о заштити мајчинства"
      }
    },
    {
      german: "unterbrechen",
      translations: {
        english: "to interrupt",
        ukrainian: "переривати",
        polish: "przerwać",
        albanian: "të ndërpresësh",
        arabic: "يقاطع",
        italian: "interrompere",
        serbian: "прекинути"
      }
    },
    {
      german: "die Heirat, die Heiraten",
      translations: {
        english: "marriage, wedding",
        ukrainian: "одруження",
        polish: "ślub",
        albanian: "martesa",
        arabic: "الزواج",
        italian: "matrimonio",
        serbian: "брак, венчање"
      }
    },
    {
      german: "die Betreuungsmöglichkeit, die Betreuungsmöglichkeiten",
      translations: {
        english: "childcare option",
        ukrainian: "можливість догляду",
        polish: "możliwość opieki",
        albanian: "mundësia e kujdesit",
        arabic: "إمكانية الرعاية",
        italian: "possibilità di assistenza",
        serbian: "могућност бриге о деци"
      }
    },
    {
      german: "das Ehepaar, die Ehepaare",
      translations: {
        english: "married couple",
        ukrainian: "подружжя",
        polish: "małżeństwo",
        albanian: "çifti i martuar",
        arabic: "زوجان",
        italian: "coppia sposata",
        serbian: "брачни пар"
      }
    },
    {
      german: "reichen",
      translations: {
        english: "to be enough, to suffice",
        ukrainian: "вистачати",
        polish: "wystarczać",
        albanian: "të mjaftosh",
        arabic: "يكفي",
        italian: "bastare",
        serbian: "бити довољно"
      }
    },
    {
      german: "das Risiko, die Risiken",
      translations: {
        english: "risk",
        ukrainian: "ризик",
        polish: "ryzyko",
        albanian: "rreziku",
        arabic: "المخاطرة",
        italian: "rischio",
        serbian: "ризик"
      }
    },
    {
      german: "der Freundeskreis, die Freundeskreise",
      translations: {
        english: "circle of friends",
        ukrainian: "коло друзів",
        polish: "grono przyjaciół",
        albanian: "rrethi i miqve",
        arabic: "دائرة الأصدقاء",
        italian: "cerchia di amici",
        serbian: "круг пријатеља"
      }
    },
    {
      german: "sich beklagen",
      translations: {
        english: "to complain",
        ukrainian: "скаржитися",
        polish: "skarżyć się",
        albanian: "të ankohesh",
        arabic: "يشتكي",
        italian: "lamentarsi",
        serbian: "жалити се"
      }
    },
    {
      german: "regeln",
      translations: {
        english: "to regulate, to arrange",
        ukrainian: "регулювати",
        polish: "regulować",
        albanian: "të rregullosh",
        arabic: "ينظم",
        italian: "regolare",
        serbian: "регулисати"
      }
    },
    {
      german: "der Betrieb, die Betriebe",
      translations: {
        english: "company, business",
        ukrainian: "підприємство",
        polish: "zakład",
        albanian: "ndërmarrja",
        arabic: "المنشأة",
        italian: "azienda",
        serbian: "предузеће"
      }
    },
    {
      german: "die Ehescheidung, die Ehescheidungen",
      translations: {
        english: "divorce",
        ukrainian: "розірвання шлюбу",
        polish: "rozwód",
        albanian: "divorci",
        arabic: "الطلاق",
        italian: "divorzio",
        serbian: "развод брака"
      }
    },
    {
      german: "unabhängig",
      translations: {
        english: "independent",
        ukrainian: "незалежний",
        polish: "niezależny",
        albanian: "i pavarur",
        arabic: "مستقل",
        italian: "indipendente",
        serbian: "независан"
      }
    },
    {
      german: "andererseits",
      translations: {
        english: "on the other hand",
        ukrainian: "з іншого боку",
        polish: "z drugiej strony",
        albanian: "nga ana tjetër",
        arabic: "من ناحية أخرى",
        italian: "d'altra parte",
        serbian: "с друге стране"
      }
    },
    {
      german: "unkompliziert",
      translations: {
        english: "uncomplicated",
        ukrainian: "нескладний",
        polish: "nieskomplikowany",
        albanian: "i pakomplikuar",
        arabic: "غير معقد",
        italian: "semplice",
        serbian: "некомпликован"
      }
    },
    {
      german: "wegen",
      translations: {
        english: "because of",
        ukrainian: "через, з-за",
        polish: "z powodu",
        albanian: "për shkak të",
        arabic: "بسبب",
        italian: "a causa di",
        serbian: "због"
      }
    },
    {
      german: "während",
      translations: {
        english: "during, while",
        ukrainian: "під час",
        polish: "podczas",
        albanian: "gjatë",
        arabic: "أثناء",
        italian: "durante",
        serbian: "током"
      }
    },
    {
      german: "innerhalb",
      translations: {
        english: "within",
        ukrainian: "в межах",
        polish: "w ciągu",
        albanian: "brenda",
        arabic: "في غضون",
        italian: "entro",
        serbian: "унутар"
      }
    },
    {
      german: "insgesamt",
      translations: {
        english: "in total, altogether",
        ukrainian: "загалом",
        polish: "łącznie",
        albanian: "gjithsej",
        arabic: "إجمالاً",
        italian: "in totale",
        serbian: "укупно"
      }
    },
    {
      german: "die Mehrheit, die Mehrheiten",
      translations: {
        english: "majority",
        ukrainian: "більшість",
        polish: "większość",
        albanian: "shumica",
        arabic: "الأغلبية",
        italian: "maggioranza",
        serbian: "већина"
      }
    },
    {
      german: "die Vollerwerbstätigkeit (Sg.)",
      translations: {
        english: "full-time employment",
        ukrainian: "повна зайнятість",
        polish: "pełny etat",
        albanian: "punësimi me kohë të plotë",
        arabic: "العمل بدوام كامل",
        italian: "lavoro a tempo pieno",
        serbian: "пуно радно време"
      }
    },
    {
      german: "die Nebenerwerbstätigkeit (Sg.)",
      translations: {
        english: "part-time/secondary employment",
        ukrainian: "часткова зайнятість",
        polish: "praca dodatkowa",
        albanian: "punësimi me kohë të pjesshme",
        arabic: "العمل بدوام جزئي",
        italian: "lavoro secondario",
        serbian: "допунска делатност"
      }
    },
    {
      german: "minderjährig",
      translations: {
        english: "underage, minor",
        ukrainian: "неповнолітній",
        polish: "niepełnoletni",
        albanian: "i mitur",
        arabic: "قاصر",
        italian: "minorenne",
        serbian: "малолетан"
      }
    },
    {
      german: "das Jugendamt, die Jugendämter",
      translations: {
        english: "youth welfare office",
        ukrainian: "служба у справах дітей",
        polish: "urząd ds. młodzieży",
        albanian: "zyra e rinisë",
        arabic: "مكتب رعاية الشباب",
        italian: "ufficio per i giovani",
        serbian: "центар за социјални рад"
      }
    },
    {
      german: "das Hortgebäude, die Hortgebäude",
      translations: {
        english: "after-school care building",
        ukrainian: "будівля продовженої групи",
        polish: "budynek świetlicy",
        albanian: "ndërtesa e çerdhes",
        arabic: "مبنى مركز الرعاية",
        italian: "edificio del doposcuola",
        serbian: "зграда продуженог боравка"
      }
    },
    // === Section C: Konflikt in der Partnerschaft ===
    {
      german: "die Partnerschaft, die Partnerschaften",
      translations: {
        english: "partnership, relationship",
        ukrainian: "партнерство",
        polish: "partnerstwo",
        albanian: "partneriteti",
        arabic: "الشراكة",
        italian: "relazione",
        serbian: "партнерство"
      }
    },
    {
      german: "der Konflikt, die Konflikte",
      translations: {
        english: "conflict",
        ukrainian: "конфлікт",
        polish: "konflikt",
        albanian: "konflikti",
        arabic: "النزاع",
        italian: "conflitto",
        serbian: "конфликт"
      }
    },
    {
      german: "die Wäsche (Sg.)",
      translations: {
        english: "laundry",
        ukrainian: "білизна, прання",
        polish: "pranie",
        albanian: "rrobat",
        arabic: "الغسيل",
        italian: "bucato",
        serbian: "веш"
      }
    },
    {
      german: "ausräumen",
      translations: {
        english: "to empty, to clear out",
        ukrainian: "виймати, розвантажувати",
        polish: "opróżniać",
        albanian: "të zbrazësh",
        arabic: "يفرغ",
        italian: "svuotare",
        serbian: "испразнити"
      }
    },
    {
      german: "abnehmen (hier: die Wäsche)",
      translations: {
        english: "to take down (laundry)",
        ukrainian: "знімати (білизну)",
        polish: "zdejmować (pranie)",
        albanian: "të heqësh (rrobat)",
        arabic: "يزيل (الغسيل)",
        italian: "togliere (il bucato)",
        serbian: "скинути (веш)"
      }
    },
    {
      german: "staubsaugen",
      translations: {
        english: "to vacuum",
        ukrainian: "пилососити",
        polish: "odkurzać",
        albanian: "të fshish me fshesë elektrike",
        arabic: "يكنس بالمكنسة الكهربائية",
        italian: "passare l'aspirapolvere",
        serbian: "усисавати"
      }
    },
    {
      german: "sich ausruhen",
      translations: {
        english: "to rest",
        ukrainian: "відпочивати",
        polish: "odpoczywać",
        albanian: "të pushosh",
        arabic: "يستريح",
        italian: "riposarsi",
        serbian: "одморити се"
      }
    },
    // === Section D: Gleichberechtigung ===
    {
      german: "die Gleichberechtigung (Sg.)",
      translations: {
        english: "equal rights, equality",
        ukrainian: "рівноправність",
        polish: "równouprawnienie",
        albanian: "barazia",
        arabic: "المساواة في الحقوق",
        italian: "parità di diritti",
        serbian: "равноправност"
      }
    },
    {
      german: "die Realität (Sg.)",
      translations: {
        english: "reality",
        ukrainian: "реальність",
        polish: "rzeczywistość",
        albanian: "realiteti",
        arabic: "الواقع",
        italian: "realtà",
        serbian: "реалност"
      }
    },
    {
      german: "das Grundgesetz (Sg.)",
      translations: {
        english: "Basic Law (German constitution)",
        ukrainian: "Основний закон",
        polish: "Ustawa Zasadnicza",
        albanian: "Ligji Themelor",
        arabic: "القانون الأساسي",
        italian: "Legge fondamentale",
        serbian: "Основни закон"
      }
    },
    {
      german: "die Rolle, die Rollen",
      translations: {
        english: "role",
        ukrainian: "роль",
        polish: "rola",
        albanian: "roli",
        arabic: "الدور",
        italian: "ruolo",
        serbian: "улога"
      }
    },
    {
      german: "der Hausmann, die Hausmänner",
      translations: {
        english: "stay-at-home husband",
        ukrainian: "домогосподар",
        polish: "mąż prowadzący dom",
        albanian: "burri shtëpiak",
        arabic: "رب المنزل",
        italian: "casalingo",
        serbian: "домаћин"
      }
    },
    {
      german: "nämlich",
      translations: {
        english: "namely, that is",
        ukrainian: "а саме",
        polish: "mianowicie",
        albanian: "përkatësisht",
        arabic: "وهو",
        italian: "cioè",
        serbian: "наиме"
      }
    },
    {
      german: "die Beziehung, die Beziehungen",
      translations: {
        english: "relationship",
        ukrainian: "стосунки",
        polish: "związek",
        albanian: "marrëdhënia",
        arabic: "العلاقة",
        italian: "relazione",
        serbian: "веза"
      }
    },
    {
      german: "halbtags",
      translations: {
        english: "part-time (half-day)",
        ukrainian: "на півставки",
        polish: "na pół etatu",
        albanian: "me gjysmë orari",
        arabic: "بدوام جزئي",
        italian: "part-time",
        serbian: "пола радног времена"
      }
    },
    {
      german: "die Gesellschaft, die Gesellschaften",
      translations: {
        english: "society",
        ukrainian: "суспільство",
        polish: "społeczeństwo",
        albanian: "shoqëria",
        arabic: "المجتمع",
        italian: "società",
        serbian: "друштво"
      }
    },
    {
      german: "gleichberechtigt",
      translations: {
        english: "having equal rights",
        ukrainian: "рівноправний",
        polish: "równouprawniony",
        albanian: "i barabartë",
        arabic: "متساوٍ في الحقوق",
        italian: "con pari diritti",
        serbian: "равноправан"
      }
    },
    {
      german: "scheinen (hier: Mir scheint, ...)",
      translations: {
        english: "to seem (here: It seems to me...)",
        ukrainian: "здаватися",
        polish: "wydawać się",
        albanian: "të dukesh",
        arabic: "يبدو",
        italian: "sembrare",
        serbian: "чинити се"
      }
    },
    {
      german: "die Stadtbibliothek, die Stadtbibliotheken",
      translations: {
        english: "public library",
        ukrainian: "міська бібліотека",
        polish: "biblioteka miejska",
        albanian: "biblioteka e qytetit",
        arabic: "المكتبة العامة",
        italian: "biblioteca comunale",
        serbian: "градска библиотека"
      }
    },
    {
      german: "das Gefühl, die Gefühle",
      translations: {
        english: "feeling",
        ukrainian: "почуття",
        polish: "uczucie",
        albanian: "ndjenja",
        arabic: "الشعور",
        italian: "sentimento",
        serbian: "осећање"
      }
    },
    {
      german: "der Posten, die Posten",
      translations: {
        english: "position, post",
        ukrainian: "посада",
        polish: "stanowisko",
        albanian: "pozita",
        arabic: "المنصب",
        italian: "posizione",
        serbian: "положај"
      }
    },
    {
      german: "vorziehen",
      translations: {
        english: "to prefer",
        ukrainian: "надавати перевагу",
        polish: "preferować",
        albanian: "të preferosh",
        arabic: "يفضل",
        italian: "preferire",
        serbian: "претпоставити"
      }
    },
    {
      german: "beobachten",
      translations: {
        english: "to observe",
        ukrainian: "спостерігати",
        polish: "obserwować",
        albanian: "të vëzhgosh",
        arabic: "يلاحظ",
        italian: "osservare",
        serbian: "посматрати"
      }
    },
    {
      german: "der Eindruck, die Eindrücke",
      translations: {
        english: "impression",
        ukrainian: "враження",
        polish: "wrażenie",
        albanian: "përshtypja",
        arabic: "الانطباع",
        italian: "impressione",
        serbian: "утисак"
      }
    }
  ],

  // Module 2: Die digitale Welt
  // Extracted from AB Module 2 "Wichtige Wörter" (pages 24-25)
  "2": [
    // === General Digital Terms ===
    {
      german: "digital",
      translations: {
        english: "digital",
        ukrainian: "цифровий",
        polish: "cyfrowy",
        albanian: "dixhital",
        arabic: "رقمي",
        italian: "digitale",
        serbian: "дигиталан"
      }
    },
    {
      german: "das TV-Paket, die TV-Pakete",
      translations: {
        english: "TV package",
        ukrainian: "телевізійний пакет",
        polish: "pakiet telewizyjny",
        albanian: "paketa TV",
        arabic: "باقة التلفزيون",
        italian: "pacchetto TV",
        serbian: "ТВ пакет"
      }
    },
    {
      german: "posten",
      translations: {
        english: "to post",
        ukrainian: "публікувати",
        polish: "publikować",
        albanian: "të postosh",
        arabic: "ينشر",
        italian: "postare",
        serbian: "поставити"
      }
    },
    {
      german: "das Selfie, die Selfies",
      translations: {
        english: "selfie",
        ukrainian: "селфі",
        polish: "selfie",
        albanian: "selfie",
        arabic: "صورة سيلفي",
        italian: "selfie",
        serbian: "селфи"
      }
    },
    {
      german: "das WLAN (Sg.)",
      translations: {
        english: "WiFi",
        ukrainian: "WiFi",
        polish: "WiFi",
        albanian: "WiFi",
        arabic: "واي فاي",
        italian: "WiFi",
        serbian: "бежични интернет"
      }
    },
    {
      german: "herunterladen",
      translations: {
        english: "to download",
        ukrainian: "завантажувати",
        polish: "pobierać",
        albanian: "të shkarkosh",
        arabic: "يحمّل",
        italian: "scaricare",
        serbian: "преузети"
      }
    },
    {
      german: "das Klavier, die Klaviere",
      translations: {
        english: "piano",
        ukrainian: "піаніно",
        polish: "fortepian",
        albanian: "piano",
        arabic: "البيانو",
        italian: "pianoforte",
        serbian: "клавир"
      }
    },
    // === Section A: Die sozialen Netzwerke ===
    {
      german: "das Video, die Videos",
      translations: {
        english: "video",
        ukrainian: "відео",
        polish: "wideo",
        albanian: "video",
        arabic: "فيديو",
        italian: "video",
        serbian: "видео"
      }
    },
    {
      german: "anschauen",
      translations: {
        english: "to look at, to watch",
        ukrainian: "дивитися",
        polish: "oglądać",
        albanian: "të shikosh",
        arabic: "يشاهد",
        italian: "guardare",
        serbian: "гледати"
      }
    },
    {
      german: "süchtig",
      translations: {
        english: "addicted",
        ukrainian: "залежний",
        polish: "uzależniony",
        albanian: "i varur",
        arabic: "مدمن",
        italian: "dipendente",
        serbian: "зависан"
      }
    },
    {
      german: "die Medienwelt (Sg.)",
      translations: {
        english: "media world",
        ukrainian: "медіа-світ",
        polish: "świat mediów",
        albanian: "bota e mediave",
        arabic: "عالم الإعلام",
        italian: "mondo dei media",
        serbian: "свет медија"
      }
    },
    {
      german: "aufwachsen",
      translations: {
        english: "to grow up",
        ukrainian: "виростати",
        polish: "dorastać",
        albanian: "të rritesh",
        arabic: "يكبر",
        italian: "crescere",
        serbian: "одрастати"
      }
    },
    {
      german: "nutzen",
      translations: {
        english: "to use",
        ukrainian: "використовувати",
        polish: "używać",
        albanian: "të përdorësh",
        arabic: "يستخدم",
        italian: "usare",
        serbian: "користити"
      }
    },
    {
      german: "der Alltag (Sg.)",
      translations: {
        english: "everyday life",
        ukrainian: "повсякденне життя",
        polish: "codzienność",
        albanian: "jeta e përditshme",
        arabic: "الحياة اليومية",
        italian: "vita quotidiana",
        serbian: "свакодневица"
      }
    },
    {
      german: "ständig",
      translations: {
        english: "constant, constantly",
        ukrainian: "постійно",
        polish: "stale",
        albanian: "vazhdimisht",
        arabic: "باستمرار",
        italian: "costantemente",
        serbian: "стално"
      }
    },
    {
      german: "sich austauschen",
      translations: {
        english: "to exchange (ideas)",
        ukrainian: "обмінюватися",
        polish: "wymieniać się",
        albanian: "të shkëmbesh",
        arabic: "يتبادل",
        italian: "scambiarsi",
        serbian: "размењивати"
      }
    },
    {
      german: "verändern",
      translations: {
        english: "to change",
        ukrainian: "змінювати",
        polish: "zmieniać",
        albanian: "të ndryshosh",
        arabic: "يغيّر",
        italian: "cambiare",
        serbian: "променити"
      }
    },
    {
      german: "kommunizieren",
      translations: {
        english: "to communicate",
        ukrainian: "спілкуватися",
        polish: "komunikować się",
        albanian: "të komunikosh",
        arabic: "يتواصل",
        italian: "comunicare",
        serbian: "комуницирати"
      }
    },
    {
      german: "dabei",
      translations: {
        english: "included, present",
        ukrainian: "при цьому",
        polish: "przy tym",
        albanian: "në këtë",
        arabic: "في ذلك",
        italian: "presente",
        serbian: "при том"
      }
    },
    {
      german: "das Videoportal, die Videoportale",
      translations: {
        english: "video portal",
        ukrainian: "відеопортал",
        polish: "portal wideo",
        albanian: "portali i videove",
        arabic: "بوابة الفيديو",
        italian: "portale video",
        serbian: "видео портал"
      }
    },
    {
      german: "das Drittel, die Drittel",
      translations: {
        english: "third (fraction)",
        ukrainian: "третина",
        polish: "trzecia część",
        albanian: "e treta",
        arabic: "الثلث",
        italian: "terzo",
        serbian: "трећина"
      }
    },
    {
      german: "das Gesprächsforum, die Gesprächsforen",
      translations: {
        english: "discussion forum",
        ukrainian: "форум для обговорення",
        polish: "forum dyskusyjne",
        albanian: "forumi i diskutimit",
        arabic: "منتدى النقاش",
        italian: "forum di discussione",
        serbian: "форум за разговор"
      }
    },
    {
      german: "der Chat, die Chats",
      translations: {
        english: "chat",
        ukrainian: "чат",
        polish: "czat",
        albanian: "chat",
        arabic: "الدردشة",
        italian: "chat",
        serbian: "ћаскање"
      }
    },
    {
      german: "online sein",
      translations: {
        english: "to be online",
        ukrainian: "бути онлайн",
        polish: "być online",
        albanian: "të jesh online",
        arabic: "يكون متصلاً",
        italian: "essere online",
        serbian: "бити онлајн"
      }
    },
    {
      german: "umgehen (mit)",
      translations: {
        english: "to deal with",
        ukrainian: "поводитися (з)",
        polish: "obchodzić się (z)",
        albanian: "të sillesh (me)",
        arabic: "يتعامل (مع)",
        italian: "gestire",
        serbian: "опходити се (са)"
      }
    },
    {
      german: "knüpfen (Kontakte knüpfen)",
      translations: {
        english: "to make (contacts)",
        ukrainian: "встановлювати (контакти)",
        polish: "nawiązywać (kontakty)",
        albanian: "të krijosh (kontakte)",
        arabic: "يُنشئ (علاقات)",
        italian: "stringere (contatti)",
        serbian: "успостављати (контакте)"
      }
    },
    {
      german: "die Freude (Sg.)",
      translations: {
        english: "joy",
        ukrainian: "радість",
        polish: "radość",
        albanian: "gëzimi",
        arabic: "الفرح",
        italian: "gioia",
        serbian: "радост"
      }
    },
    {
      german: "die Spiele-App, die Spiele-Apps",
      translations: {
        english: "game app",
        ukrainian: "ігровий додаток",
        polish: "aplikacja do gier",
        albanian: "aplikacioni i lojërave",
        arabic: "تطبيق الألعاب",
        italian: "app di giochi",
        serbian: "апликација за игре"
      }
    },
    {
      german: "selbstverständlich",
      translations: {
        english: "of course, self-evident",
        ukrainian: "само собою зрозуміло",
        polish: "oczywiście",
        albanian: "natyrisht",
        arabic: "بالطبع",
        italian: "naturalmente",
        serbian: "разуме се"
      }
    },
    {
      german: "ausschalten",
      translations: {
        english: "to turn off",
        ukrainian: "вимикати",
        polish: "wyłączać",
        albanian: "të fikësh",
        arabic: "يُطفئ",
        italian: "spegnere",
        serbian: "искључити"
      }
    },
    // === Section B: Online einkaufen ===
    {
      german: "die Auswahl (Sg.)",
      translations: {
        english: "selection, choice",
        ukrainian: "вибір",
        polish: "wybór",
        albanian: "zgjedhja",
        arabic: "الاختيار",
        italian: "scelta",
        serbian: "избор"
      }
    },
    {
      german: "das Online-Shopping (Sg.)",
      translations: {
        english: "online shopping",
        ukrainian: "онлайн-покупки",
        polish: "zakupy online",
        albanian: "blerjet online",
        arabic: "التسوق عبر الإنترنت",
        italian: "shopping online",
        serbian: "онлајн куповина"
      }
    },
    {
      german: "der Online-Kauf, die Online-Käufe",
      translations: {
        english: "online purchase",
        ukrainian: "онлайн-покупка",
        polish: "zakup online",
        albanian: "blerja online",
        arabic: "الشراء عبر الإنترنت",
        italian: "acquisto online",
        serbian: "онлајн куповина"
      }
    },
    {
      german: "steigen",
      translations: {
        english: "to rise, to climb",
        ukrainian: "зростати",
        polish: "rosnąć",
        albanian: "të ngjitesh",
        arabic: "يرتفع",
        italian: "salire",
        serbian: "расти"
      }
    },
    {
      german: "der Internet-Nutzer, die Internet-Nutzer",
      translations: {
        english: "internet user",
        ukrainian: "користувач інтернету",
        polish: "użytkownik internetu",
        albanian: "përdoruesi i internetit",
        arabic: "مستخدم الإنترنت",
        italian: "utente internet",
        serbian: "корисник интернета"
      }
    },
    {
      german: "angeben",
      translations: {
        english: "to indicate, to state",
        ukrainian: "вказувати",
        polish: "podawać",
        albanian: "të tregosh",
        arabic: "يُشير",
        italian: "indicare",
        serbian: "навести"
      }
    },
    {
      german: "die Musik-CD, die Musik-CDs",
      translations: {
        english: "music CD",
        ukrainian: "музичний CD",
        polish: "płyta muzyczna",
        albanian: "CD e muzikës",
        arabic: "قرص موسيقى",
        italian: "CD musicale",
        serbian: "музички ЦД"
      }
    },
    {
      german: "elektronisch",
      translations: {
        english: "electronic",
        ukrainian: "електронний",
        polish: "elektroniczny",
        albanian: "elektronik",
        arabic: "إلكتروني",
        italian: "elettronico",
        serbian: "електронски"
      }
    },
    {
      german: "das Haushaltsgerät, die Haushaltsgeräte",
      translations: {
        english: "household appliance",
        ukrainian: "побутовий прилад",
        polish: "sprzęt AGD",
        albanian: "pajisja shtëpiake",
        arabic: "جهاز منزلي",
        italian: "elettrodomestico",
        serbian: "кућни апарат"
      }
    },
    {
      german: "das Netz (hier: Internet) (Sg.)",
      translations: {
        english: "net (here: Internet)",
        ukrainian: "мережа (тут: Інтернет)",
        polish: "sieć (tu: Internet)",
        albanian: "rrjeti (këtu: Internet)",
        arabic: "الشبكة (هنا: الإنترنت)",
        italian: "rete (qui: Internet)",
        serbian: "мрежа (овде: интернет)"
      }
    },
    {
      german: "das Online-Ticket, die Online-Tickets",
      translations: {
        english: "online ticket",
        ukrainian: "онлайн-квиток",
        polish: "bilet online",
        albanian: "bileta online",
        arabic: "تذكرة إلكترونية",
        italian: "biglietto online",
        serbian: "онлајн карта"
      }
    },
    {
      german: "das Hotelzimmer, die Hotelzimmer",
      translations: {
        english: "hotel room",
        ukrainian: "номер в готелі",
        polish: "pokój hotelowy",
        albanian: "dhoma e hotelit",
        arabic: "غرفة الفندق",
        italian: "camera d'albergo",
        serbian: "хотелска соба"
      }
    },
    {
      german: "die Pflanze, die Pflanzen",
      translations: {
        english: "plant",
        ukrainian: "рослина",
        polish: "roślina",
        albanian: "bima",
        arabic: "النبات",
        italian: "pianta",
        serbian: "биљка"
      }
    },
    {
      german: "die Wirtschaft (Sg.)",
      translations: {
        english: "economy",
        ukrainian: "економіка",
        polish: "gospodarka",
        albanian: "ekonomia",
        arabic: "الاقتصاد",
        italian: "economia",
        serbian: "привреда"
      }
    },
    {
      german: "die Bestellung, die Bestellungen",
      translations: {
        english: "order",
        ukrainian: "замовлення",
        polish: "zamówienie",
        albanian: "porosia",
        arabic: "الطلب",
        italian: "ordine",
        serbian: "поруџбина"
      }
    },
    {
      german: "bewerten",
      translations: {
        english: "to evaluate, to rate",
        ukrainian: "оцінювати",
        polish: "oceniać",
        albanian: "të vlerësosh",
        arabic: "يُقيّم",
        italian: "valutare",
        serbian: "оценити"
      }
    },
    {
      german: "die Öffnungszeiten (Pl.)",
      translations: {
        english: "opening hours",
        ukrainian: "години роботи",
        polish: "godziny otwarcia",
        albanian: "orari i hapjes",
        arabic: "ساعات العمل",
        italian: "orari di apertura",
        serbian: "радно време"
      }
    },
    {
      german: "das Produkt, die Produkte",
      translations: {
        english: "product",
        ukrainian: "продукт",
        polish: "produkt",
        albanian: "produkti",
        arabic: "المنتج",
        italian: "prodotto",
        serbian: "производ"
      }
    },
    {
      german: "die Ware, die Waren",
      translations: {
        english: "goods, merchandise",
        ukrainian: "товар",
        polish: "towar",
        albanian: "malli",
        arabic: "البضاعة",
        italian: "merce",
        serbian: "роба"
      }
    },
    {
      german: "zurückschicken",
      translations: {
        english: "to send back",
        ukrainian: "відправляти назад",
        polish: "odsyłać",
        albanian: "të kthesh",
        arabic: "يُعيد",
        italian: "rispedire",
        serbian: "вратити"
      }
    },
    {
      german: "positiv",
      translations: {
        english: "positive",
        ukrainian: "позитивний",
        polish: "pozytywny",
        albanian: "pozitiv",
        arabic: "إيجابي",
        italian: "positivo",
        serbian: "позитиван"
      }
    },
    {
      german: "negativ",
      translations: {
        english: "negative",
        ukrainian: "негативний",
        polish: "negatywny",
        albanian: "negativ",
        arabic: "سلبي",
        italian: "negativo",
        serbian: "негативан"
      }
    },
    {
      german: "anfassen",
      translations: {
        english: "to touch",
        ukrainian: "торкатися",
        polish: "dotykać",
        albanian: "të prekësh",
        arabic: "يلمس",
        italian: "toccare",
        serbian: "дотаћи"
      }
    },
    {
      german: "persönlich",
      translations: {
        english: "personal, in person",
        ukrainian: "особисто",
        polish: "osobiście",
        albanian: "personalisht",
        arabic: "شخصياً",
        italian: "personalmente",
        serbian: "лично"
      }
    },
    {
      german: "unzufrieden",
      translations: {
        english: "unsatisfied, unhappy",
        ukrainian: "незадоволений",
        polish: "niezadowolony",
        albanian: "i pakënaqur",
        arabic: "غير راضٍ",
        italian: "insoddisfatto",
        serbian: "незадовољан"
      }
    },
    {
      german: "das Online-Geschäft, die Online-Geschäfte",
      translations: {
        english: "online business/store",
        ukrainian: "онлайн-магазин",
        polish: "sklep internetowy",
        albanian: "dyqani online",
        arabic: "المتجر الإلكتروني",
        italian: "negozio online",
        serbian: "онлајн продавница"
      }
    },
    {
      german: "der Online-Anbieter, die Online-Anbieter",
      translations: {
        english: "online provider",
        ukrainian: "онлайн-провайдер",
        polish: "dostawca online",
        albanian: "ofruesi online",
        arabic: "مزود خدمة إنترنت",
        italian: "fornitore online",
        serbian: "онлајн провајдер"
      }
    },
    {
      german: "der Internet-Einkauf, die Internet-Einkäufe",
      translations: {
        english: "internet shopping",
        ukrainian: "інтернет-покупка",
        polish: "zakupy internetowe",
        albanian: "blerja në internet",
        arabic: "التسوق عبر الإنترنت",
        italian: "acquisto su internet",
        serbian: "интернет куповина"
      }
    },
    {
      german: "der Online-Shop, die Online-Shops",
      translations: {
        english: "online shop",
        ukrainian: "онлайн-магазин",
        polish: "sklep internetowy",
        albanian: "dyqani online",
        arabic: "المتجر الإلكتروني",
        italian: "negozio online",
        serbian: "онлајн продавница"
      }
    },
    {
      german: "korrekt",
      translations: {
        english: "correct",
        ukrainian: "правильний",
        polish: "poprawny",
        albanian: "i saktë",
        arabic: "صحيح",
        italian: "corretto",
        serbian: "коректан"
      }
    },
    {
      german: "anklicken",
      translations: {
        english: "to click on",
        ukrainian: "клікнути",
        polish: "kliknąć",
        albanian: "të klikosh",
        arabic: "ينقر",
        italian: "cliccare",
        serbian: "кликнути"
      }
    },
    {
      german: "die Allgemeinen Geschäftsbedingungen (AGB) (Pl.)",
      translations: {
        english: "general terms and conditions",
        ukrainian: "загальні умови",
        polish: "regulamin",
        albanian: "kushtet e përgjithshme",
        arabic: "الشروط والأحكام العامة",
        italian: "condizioni generali",
        serbian: "општи услови пословања"
      }
    },
    {
      german: "die Menge, die Mengen",
      translations: {
        english: "quantity, amount",
        ukrainian: "кількість",
        polish: "ilość",
        albanian: "sasia",
        arabic: "الكمية",
        italian: "quantità",
        serbian: "количина"
      }
    },
    {
      german: "bestätigen",
      translations: {
        english: "to confirm",
        ukrainian: "підтверджувати",
        polish: "potwierdzać",
        albanian: "të konfirmosh",
        arabic: "يؤكد",
        italian: "confermare",
        serbian: "потврдити"
      }
    },
    {
      german: "die Zahlungsmethode, die Zahlungsmethoden",
      translations: {
        english: "payment method",
        ukrainian: "спосіб оплати",
        polish: "metoda płatności",
        albanian: "metoda e pagesës",
        arabic: "طريقة الدفع",
        italian: "metodo di pagamento",
        serbian: "начин плаћања"
      }
    },
    {
      german: "der Warenkorb, die Warenkörbe",
      translations: {
        english: "shopping cart",
        ukrainian: "кошик для покупок",
        polish: "koszyk",
        albanian: "shporta e blerjeve",
        arabic: "سلة التسوق",
        italian: "carrello",
        serbian: "корпа за куповину"
      }
    },
    {
      german: "hinzufügen",
      translations: {
        english: "to add",
        ukrainian: "додавати",
        polish: "dodawać",
        albanian: "të shtosh",
        arabic: "يُضيف",
        italian: "aggiungere",
        serbian: "додати"
      }
    },
    {
      german: "das Rückgaberecht (Sg.)",
      translations: {
        english: "right of return",
        ukrainian: "право на повернення",
        polish: "prawo do zwrotu",
        albanian: "e drejta e kthimit",
        arabic: "حق الإرجاع",
        italian: "diritto di recesso",
        serbian: "право на поврат"
      }
    },
    // === Section C: Umschulungen und Fortbildungen ===
    {
      german: "die Umschulung, die Umschulungen",
      translations: {
        english: "retraining",
        ukrainian: "перекваліфікація",
        polish: "przekwalifikowanie",
        albanian: "rikualifikimi",
        arabic: "إعادة التأهيل",
        italian: "riqualificazione",
        serbian: "преквалификација"
      }
    },
    {
      german: "auswendig",
      translations: {
        english: "by heart",
        ukrainian: "напам'ять",
        polish: "na pamięć",
        albanian: "përmendsh",
        arabic: "عن ظهر قلب",
        italian: "a memoria",
        serbian: "напамет"
      }
    },
    {
      german: "die Arbeitstätigkeit, die Arbeitstätigkeiten",
      translations: {
        english: "work activity",
        ukrainian: "трудова діяльність",
        polish: "działalność zawodowa",
        albanian: "aktiviteti i punës",
        arabic: "النشاط الوظيفي",
        italian: "attività lavorativa",
        serbian: "радна делатност"
      }
    },
    {
      german: "qualifizieren",
      translations: {
        english: "to qualify",
        ukrainian: "кваліфікувати",
        polish: "kwalifikować",
        albanian: "të kualifikosh",
        arabic: "يؤهل",
        italian: "qualificare",
        serbian: "квалификовати"
      }
    },
    {
      german: "erweitern",
      translations: {
        english: "to expand, to extend",
        ukrainian: "розширювати",
        polish: "rozszerzać",
        albanian: "të zgjerosh",
        arabic: "يوسّع",
        italian: "ampliare",
        serbian: "проширити"
      }
    },
    {
      german: "erlernen",
      translations: {
        english: "to learn (a skill)",
        ukrainian: "вивчати",
        polish: "nauczyć się",
        albanian: "të mësosh",
        arabic: "يتعلم",
        italian: "imparare",
        serbian: "научити"
      }
    },
    {
      german: "die Form, die Formen",
      translations: {
        english: "form, shape",
        ukrainian: "форма",
        polish: "forma",
        albanian: "forma",
        arabic: "الشكل",
        italian: "forma",
        serbian: "форма"
      }
    },
    {
      german: "das E-Learning (Sg.)",
      translations: {
        english: "e-learning",
        ukrainian: "електронне навчання",
        polish: "e-learning",
        albanian: "mësimi elektronik",
        arabic: "التعلم الإلكتروني",
        italian: "e-learning",
        serbian: "електронско учење"
      }
    },
    {
      german: "die Pflege (Sg.)",
      translations: {
        english: "care, nursing",
        ukrainian: "догляд",
        polish: "opieka",
        albanian: "kujdesi",
        arabic: "الرعاية",
        italian: "cura",
        serbian: "нега"
      }
    },
    {
      german: "der E-Learning-Kurs, die E-Learning-Kurse",
      translations: {
        english: "e-learning course",
        ukrainian: "онлайн-курс",
        polish: "kurs e-learning",
        albanian: "kursi i e-learning",
        arabic: "دورة تعليم إلكتروني",
        italian: "corso e-learning",
        serbian: "курс електронског учења"
      }
    },
    {
      german: "der Online-Chat, die Online-Chats",
      translations: {
        english: "online chat",
        ukrainian: "онлайн-чат",
        polish: "czat online",
        albanian: "biseda online",
        arabic: "الدردشة عبر الإنترنت",
        italian: "chat online",
        serbian: "онлајн ћаскање"
      }
    },
    {
      german: "das Zertifikat, die Zertifikate",
      translations: {
        english: "certificate",
        ukrainian: "сертифікат",
        polish: "certyfikat",
        albanian: "çertifikata",
        arabic: "الشهادة",
        italian: "certificato",
        serbian: "сертификат"
      }
    },
    // === Section D: Eine moderne Liebesgeschichte ===
    {
      german: "die Liebesgeschichte, die Liebesgeschichten",
      translations: {
        english: "love story",
        ukrainian: "історія кохання",
        polish: "historia miłosna",
        albanian: "historia e dashurisë",
        arabic: "قصة حب",
        italian: "storia d'amore",
        serbian: "љубавна прича"
      }
    },
    {
      german: "skypen",
      translations: {
        english: "to Skype",
        ukrainian: "спілкуватися по Skype",
        polish: "rozmawiać przez Skype",
        albanian: "të bësh Skype",
        arabic: "يتصل عبر سكايب",
        italian: "fare una chiamata Skype",
        serbian: "скајповати"
      }
    },
    {
      german: "feststellen",
      translations: {
        english: "to notice, to determine",
        ukrainian: "виявляти, констатувати",
        polish: "stwierdzić",
        albanian: "të konstatosh",
        arabic: "يُلاحظ",
        italian: "constatare",
        serbian: "утврдити"
      }
    },
    {
      german: "die Natur (Sg.)",
      translations: {
        english: "nature",
        ukrainian: "природа",
        polish: "natura",
        albanian: "natyra",
        arabic: "الطبيعة",
        italian: "natura",
        serbian: "природа"
      }
    },
    {
      german: "sich verstehen",
      translations: {
        english: "to get along",
        ukrainian: "розуміти один одного",
        polish: "rozumieć się",
        albanian: "të kuptohesh",
        arabic: "يتفاهم",
        italian: "intendersi",
        serbian: "разумети се"
      }
    },
    {
      german: "folgende",
      translations: {
        english: "following",
        ukrainian: "наступний",
        polish: "następujący",
        albanian: "në vijim",
        arabic: "التالي",
        italian: "seguente",
        serbian: "следећи"
      }
    },
    {
      german: "bestimmt sein (füreinander)",
      translations: {
        english: "to be destined (for each other)",
        ukrainian: "бути призначеним (одне для одного)",
        polish: "być przeznaczonym (dla siebie)",
        albanian: "të jesh i caktuar (për njëri-tjetrin)",
        arabic: "مقدّر (لبعضهما)",
        italian: "essere destinati (l'uno all'altra)",
        serbian: "бити суђен (једно другом)"
      }
    },
    {
      german: "das Skifahren (Sg.)",
      translations: {
        english: "skiing",
        ukrainian: "катання на лижах",
        polish: "narciarstwo",
        albanian: "skijimi",
        arabic: "التزلج",
        italian: "sci",
        serbian: "скијање"
      }
    },
    // === Additional terms from pages 26 (Wichtige Wörter continued) ===
    {
      german: "die Nachricht, die Nachrichten",
      translations: {
        english: "message, news",
        ukrainian: "повідомлення, новини",
        polish: "wiadomość",
        albanian: "lajmi",
        arabic: "الرسالة، الأخبار",
        italian: "messaggio, notizie",
        serbian: "порука, вести"
      }
    },
    {
      german: "das Computerspiel, die Computerspiele",
      translations: {
        english: "computer game",
        ukrainian: "комп'ютерна гра",
        polish: "gra komputerowa",
        albanian: "loja kompjuterike",
        arabic: "لعبة الكمبيوتر",
        italian: "gioco per computer",
        serbian: "компјутерска игра"
      }
    },
    {
      german: "der Bestell-Button, die Bestell-Buttons",
      translations: {
        english: "order button",
        ukrainian: "кнопка замовлення",
        polish: "przycisk zamówienia",
        albanian: "butoni i porosisë",
        arabic: "زر الطلب",
        italian: "pulsante dell'ordine",
        serbian: "дугме за поруџбину"
      }
    },
    {
      german: "das Online-Banking (Sg.)",
      translations: {
        english: "online banking",
        ukrainian: "онлайн-банкінг",
        polish: "bankowość internetowa",
        albanian: "banka online",
        arabic: "الخدمات المصرفية عبر الإنترنت",
        italian: "banking online",
        serbian: "онлајн банкарство"
      }
    },
    {
      german: "die Spielkonsole, die Spielkonsolen",
      translations: {
        english: "game console",
        ukrainian: "ігрова приставка",
        polish: "konsola do gier",
        albanian: "konsola e lojërave",
        arabic: "وحدة الألعاب",
        italian: "console di gioco",
        serbian: "конзола за игре"
      }
    },
    {
      german: "die Mediathek, die Mediatheken",
      translations: {
        english: "media library",
        ukrainian: "медіатека",
        polish: "mediateka",
        albanian: "mediateka",
        arabic: "مكتبة الوسائط",
        italian: "mediateca",
        serbian: "медијатека"
      }
    },
    {
      german: "die E-Mail, die E-Mails",
      translations: {
        english: "email",
        ukrainian: "електронна пошта",
        polish: "e-mail",
        albanian: "emaili",
        arabic: "البريد الإلكتروني",
        italian: "email",
        serbian: "имејл"
      }
    },
    {
      german: "das Passwort, die Passwörter",
      translations: {
        english: "password",
        ukrainian: "пароль",
        polish: "hasło",
        albanian: "fjalëkalimi",
        arabic: "كلمة المرور",
        italian: "password",
        serbian: "лозинка"
      }
    },
    {
      german: "die App, die Apps",
      translations: {
        english: "app",
        ukrainian: "додаток",
        polish: "aplikacja",
        albanian: "aplikacioni",
        arabic: "التطبيق",
        italian: "app",
        serbian: "апликација"
      }
    }
  ],

  // Module 3: Der erste Eindruck
  // Extracted from AB Module 3 "Wichtige Wörter" (pages 36-37)
  "3": [
    // === General Adjectives (Describing People) ===
    {
      german: "wütend",
      translations: {
        english: "angry",
        ukrainian: "розлючений",
        polish: "wściekły",
        albanian: "i zemëruar",
        arabic: "غاضب",
        italian: "arrabbiato",
        serbian: "бесан"
      }
    },
    {
      german: "verärgert",
      translations: {
        english: "annoyed",
        ukrainian: "роздратований",
        polish: "zirytowany",
        albanian: "i mërzitur",
        arabic: "منزعج",
        italian: "infastidito",
        serbian: "узнемирен"
      }
    },
    {
      german: "gepflegt",
      translations: {
        english: "well-groomed, maintained",
        ukrainian: "доглянутий",
        polish: "zadbany",
        albanian: "i kujdesur",
        arabic: "مُعتنى به",
        italian: "curato",
        serbian: "уредан"
      }
    },
    {
      german: "desinteressiert",
      translations: {
        english: "uninterested",
        ukrainian: "незацікавлений",
        polish: "niezainteresowany",
        albanian: "i painteresuar",
        arabic: "غير مهتم",
        italian: "disinteressato",
        serbian: "незаинтересован"
      }
    },
    {
      german: "nervös",
      translations: {
        english: "nervous",
        ukrainian: "нервовий",
        polish: "nerwowy",
        albanian: "nervoz",
        arabic: "متوتر",
        italian: "nervoso",
        serbian: "нервозан"
      }
    },
    {
      german: "angemessen",
      translations: {
        english: "appropriate",
        ukrainian: "доречний",
        polish: "odpowiedni",
        albanian: "i përshtatshëm",
        arabic: "مناسب",
        italian: "appropriato",
        serbian: "примерен"
      }
    },
    {
      german: "unangemessen",
      translations: {
        english: "inappropriate",
        ukrainian: "недоречний",
        polish: "nieodpowiedni",
        albanian: "i papërshtatshëm",
        arabic: "غير مناسب",
        italian: "inappropriato",
        serbian: "непримерен"
      }
    },
    {
      german: "wirken",
      translations: {
        english: "to seem, to appear",
        ukrainian: "виглядати, справляти враження",
        polish: "wyglądać, sprawiać wrażenie",
        albanian: "të dukesh",
        arabic: "يبدو",
        italian: "sembrare",
        serbian: "деловати"
      }
    },
    // === Section A: Eine Firma stellt sich vor ===
    {
      german: "das Unternehmen, die Unternehmen",
      translations: {
        english: "company, enterprise",
        ukrainian: "підприємство",
        polish: "przedsiębiorstwo",
        albanian: "ndërmarrja",
        arabic: "الشركة",
        italian: "azienda",
        serbian: "предузеће"
      }
    },
    {
      german: "die Fabrik, die Fabriken",
      translations: {
        english: "factory",
        ukrainian: "фабрика",
        polish: "fabryka",
        albanian: "fabrika",
        arabic: "المصنع",
        italian: "fabbrica",
        serbian: "фабрика"
      }
    },
    {
      german: "der Hauptsitz, die Hauptsitze",
      translations: {
        english: "headquarters",
        ukrainian: "головний офіс",
        polish: "siedziba główna",
        albanian: "selia kryesore",
        arabic: "المقر الرئيسي",
        italian: "sede centrale",
        serbian: "седиште"
      }
    },
    {
      german: "bekannt",
      translations: {
        english: "known, famous",
        ukrainian: "відомий",
        polish: "znany",
        albanian: "i njohur",
        arabic: "معروف",
        italian: "conosciuto",
        serbian: "познат"
      }
    },
    {
      german: "herstellen",
      translations: {
        english: "to produce, to manufacture",
        ukrainian: "виробляти",
        polish: "produkować",
        albanian: "të prodhosh",
        arabic: "يُنتج",
        italian: "produrre",
        serbian: "производити"
      }
    },
    {
      german: "produzieren",
      translations: {
        english: "to produce",
        ukrainian: "виробляти",
        polish: "produkować",
        albanian: "të prodhosh",
        arabic: "يُنتج",
        italian: "produrre",
        serbian: "производити"
      }
    },
    {
      german: "exportieren",
      translations: {
        english: "to export",
        ukrainian: "експортувати",
        polish: "eksportować",
        albanian: "të eksportosh",
        arabic: "يُصدّر",
        italian: "esportare",
        serbian: "извозити"
      }
    },
    {
      german: "der Umsatz, die Umsätze",
      translations: {
        english: "sales volume, turnover",
        ukrainian: "товарообіг",
        polish: "obrót",
        albanian: "qarkullimi",
        arabic: "حجم المبيعات",
        italian: "fatturato",
        serbian: "промет"
      }
    },
    {
      german: "betragen",
      translations: {
        english: "to amount to",
        ukrainian: "становити",
        polish: "wynosić",
        albanian: "të arrijë",
        arabic: "يبلغ",
        italian: "ammontare a",
        serbian: "износити"
      }
    },
    {
      german: "der Markt, die Märkte",
      translations: {
        english: "market",
        ukrainian: "ринок",
        polish: "rynek",
        albanian: "tregu",
        arabic: "السوق",
        italian: "mercato",
        serbian: "тржиште"
      }
    },
    {
      german: "der Ruf (Sg.)",
      translations: {
        english: "reputation",
        ukrainian: "репутація",
        polish: "reputacja",
        albanian: "reputacioni",
        arabic: "السمعة",
        italian: "reputazione",
        serbian: "репутација"
      }
    },
    {
      german: "die Zukunft (Sg.)",
      translations: {
        english: "future",
        ukrainian: "майбутнє",
        polish: "przyszłość",
        albanian: "e ardhmja",
        arabic: "المستقبل",
        italian: "futuro",
        serbian: "будућност"
      }
    },
    {
      german: "optimistisch",
      translations: {
        english: "optimistic",
        ukrainian: "оптимістичний",
        polish: "optymistyczny",
        albanian: "optimist",
        arabic: "متفائل",
        italian: "ottimista",
        serbian: "оптимистичан"
      }
    },
    {
      german: "das Betriebsklima (Sg.)",
      translations: {
        english: "working atmosphere",
        ukrainian: "робоча атмосфера",
        polish: "atmosfera w pracy",
        albanian: "atmosfera e punës",
        arabic: "جو العمل",
        italian: "clima aziendale",
        serbian: "радна атмосфера"
      }
    },
    {
      german: "wirtschaftlich",
      translations: {
        english: "economic, economically",
        ukrainian: "економічний",
        polish: "ekonomiczny",
        albanian: "ekonomik",
        arabic: "اقتصادي",
        italian: "economico",
        serbian: "економски"
      }
    },
    {
      german: "kaufmännisch",
      translations: {
        english: "commercial, business",
        ukrainian: "комерційний",
        polish: "handlowy",
        albanian: "tregtar",
        arabic: "تجاري",
        italian: "commerciale",
        serbian: "комерцијалан"
      }
    },
    {
      german: "der Mechatroniker, die Mechatroniker",
      translations: {
        english: "mechatronics engineer",
        ukrainian: "мехатронік",
        polish: "mechatronik",
        albanian: "mekatroniku",
        arabic: "فني ميكاترونيكس",
        italian: "meccatronico",
        serbian: "мехатроничар"
      }
    },
    {
      german: "der Mechaniker, die Mechaniker",
      translations: {
        english: "mechanic",
        ukrainian: "механік",
        polish: "mechanik",
        albanian: "mekaniku",
        arabic: "ميكانيكي",
        italian: "meccanico",
        serbian: "механичар"
      }
    },
    {
      german: "der Geschäftsführer, die Geschäftsführer",
      translations: {
        english: "managing director",
        ukrainian: "директор",
        polish: "dyrektor zarządzający",
        albanian: "drejtori i përgjithshëm",
        arabic: "المدير التنفيذي",
        italian: "amministratore delegato",
        serbian: "директор"
      }
    },
    {
      german: "der Kundenbetreuer, die Kundenbetreuer",
      translations: {
        english: "customer service representative",
        ukrainian: "менеджер по роботі з клієнтами",
        polish: "opiekun klienta",
        albanian: "përfaqësuesi i shërbimit ndaj klientëve",
        arabic: "ممثل خدمة العملاء",
        italian: "addetto all'assistenza clienti",
        serbian: "службеник за рад са клијентима"
      }
    },
    {
      german: "der/die Auszubildende, die Auszubildenden",
      translations: {
        english: "trainee, apprentice",
        ukrainian: "стажер",
        polish: "praktykant",
        albanian: "praktikanti",
        arabic: "المتدرب",
        italian: "apprendista",
        serbian: "приправник"
      }
    },
    {
      german: "der Ausbildungsplatz, die Ausbildungsplätze",
      translations: {
        english: "training place, apprenticeship",
        ukrainian: "місце навчання",
        polish: "miejsce praktyki",
        albanian: "vendi i praktikës",
        arabic: "مكان التدريب",
        italian: "posto di apprendistato",
        serbian: "место за обуку"
      }
    },
    {
      german: "ausbilden",
      translations: {
        english: "to train, to educate",
        ukrainian: "навчати",
        polish: "kształcić",
        albanian: "të trajnosh",
        arabic: "يُدرّب",
        italian: "formare",
        serbian: "обучавати"
      }
    },
    // === Section B: Stellenanzeigen ===
    {
      german: "die Stellenanzeige, die Stellenanzeigen",
      translations: {
        english: "job advertisement",
        ukrainian: "оголошення про роботу",
        polish: "ogłoszenie o pracę",
        albanian: "shpallja për punë",
        arabic: "إعلان الوظيفة",
        italian: "annuncio di lavoro",
        serbian: "оглас за посао"
      }
    },
    {
      german: "die Festanstellung, die Festanstellungen",
      translations: {
        english: "permanent position",
        ukrainian: "постійна посада",
        polish: "stałe zatrudnienie",
        albanian: "punësimi i përhershëm",
        arabic: "وظيفة دائمة",
        italian: "assunzione a tempo indeterminato",
        serbian: "стално запослење"
      }
    },
    {
      german: "die Sozialleistung, die Sozialleistungen",
      translations: {
        english: "social benefit",
        ukrainian: "соціальна виплата",
        polish: "świadczenie socjalne",
        albanian: "përfitimi social",
        arabic: "الإعانة الاجتماعية",
        italian: "prestazione sociale",
        serbian: "социјална давања"
      }
    },
    {
      german: "überdurchschnittlich",
      translations: {
        english: "above average",
        ukrainian: "вище середнього",
        polish: "ponadprzeciętny",
        albanian: "mbi mesataren",
        arabic: "فوق المتوسط",
        italian: "sopra la media",
        serbian: "изнадпросечан"
      }
    },
    {
      german: "die Arbeitsatmosphäre (Sg.)",
      translations: {
        english: "working atmosphere",
        ukrainian: "робоча атмосфера",
        polish: "atmosfera pracy",
        albanian: "atmosfera e punës",
        arabic: "جو العمل",
        italian: "atmosfera lavorativa",
        serbian: "радна атмосфера"
      }
    },
    {
      german: "attraktiv",
      translations: {
        english: "attractive",
        ukrainian: "привабливий",
        polish: "atrakcyjny",
        albanian: "atraktiv",
        arabic: "جذاب",
        italian: "attraente",
        serbian: "атрактиван"
      }
    },
    // === Section C: Richtig bewerben ===
    {
      german: "die Online-Bewerbung, die Online-Bewerbungen",
      translations: {
        english: "online application",
        ukrainian: "онлайн-заявка",
        polish: "aplikacja online",
        albanian: "aplikimi online",
        arabic: "طلب التوظيف عبر الإنترنت",
        italian: "candidatura online",
        serbian: "онлајн пријава"
      }
    },
    {
      german: "scannen",
      translations: {
        english: "to scan",
        ukrainian: "сканувати",
        polish: "skanować",
        albanian: "të skanosh",
        arabic: "يمسح ضوئياً",
        italian: "scannerizzare",
        serbian: "скенирати"
      }
    },
    {
      german: "abschicken",
      translations: {
        english: "to send off",
        ukrainian: "відправляти",
        polish: "wysłać",
        albanian: "të dërgosh",
        arabic: "يُرسل",
        italian: "inviare",
        serbian: "послати"
      }
    },
    {
      german: "achten (auf)",
      translations: {
        english: "to pay attention (to)",
        ukrainian: "звертати увагу (на)",
        polish: "zwracać uwagę (na)",
        albanian: "të kesh kujdes (për)",
        arabic: "ينتبه (إلى)",
        italian: "fare attenzione (a)",
        serbian: "обратити пажњу (на)"
      }
    },
    {
      german: "die Bewerbungsmappe, die Bewerbungsmappen",
      translations: {
        english: "application folder",
        ukrainian: "папка з документами для подачі",
        polish: "teczka z dokumentami aplikacyjnymi",
        albanian: "dosja e aplikimit",
        arabic: "ملف طلب التوظيف",
        italian: "cartella di candidatura",
        serbian: "фасцикла за пријаву"
      }
    },
    {
      german: "lückenlos",
      translations: {
        english: "complete, without gaps",
        ukrainian: "без прогалин",
        polish: "bez luk",
        albanian: "pa boshllëqe",
        arabic: "كامل، بدون ثغرات",
        italian: "senza lacune",
        serbian: "без празнина"
      }
    },
    {
      german: "übersichtlich",
      translations: {
        english: "clear, well-organized",
        ukrainian: "зрозумілий, оглядовий",
        polish: "przejrzysty",
        albanian: "i qartë",
        arabic: "واضح",
        italian: "chiaro",
        serbian: "прегледан"
      }
    },
    {
      german: "versenden",
      translations: {
        english: "to send, to dispatch",
        ukrainian: "відправляти",
        polish: "wysyłać",
        albanian: "të dërgosh",
        arabic: "يُرسل",
        italian: "spedire",
        serbian: "слати"
      }
    },
    {
      german: "anhängen",
      translations: {
        english: "to attach",
        ukrainian: "прикріплювати",
        polish: "załączyć",
        albanian: "të bashkëngjitësh",
        arabic: "يُرفق",
        italian: "allegare",
        serbian: "приложити"
      }
    },
    {
      german: "die Datei, die Dateien",
      translations: {
        english: "file",
        ukrainian: "файл",
        polish: "plik",
        albanian: "skedari",
        arabic: "الملف",
        italian: "file",
        serbian: "датотека"
      }
    },
    {
      german: "Kosten sparen",
      translations: {
        english: "to save costs",
        ukrainian: "заощаджувати кошти",
        polish: "oszczędzać koszty",
        albanian: "të kursesh kostot",
        arabic: "يوفر التكاليف",
        italian: "risparmiare costi",
        serbian: "штедети трошкове"
      }
    },
    {
      german: "die Briefmarke, die Briefmarken",
      translations: {
        english: "stamp",
        ukrainian: "поштова марка",
        polish: "znaczek pocztowy",
        albanian: "pulla postare",
        arabic: "طابع بريدي",
        italian: "francobollo",
        serbian: "поштанска марка"
      }
    },
    {
      german: "die Absage, die Absagen",
      translations: {
        english: "rejection, refusal",
        ukrainian: "відмова",
        polish: "odmowa",
        albanian: "refuzimi",
        arabic: "الرفض",
        italian: "rifiuto",
        serbian: "одбијање"
      }
    },
    {
      german: "die Betreffzeile, die Betreffzeilen",
      translations: {
        english: "subject line",
        ukrainian: "тема листа",
        polish: "temat wiadomości",
        albanian: "rreshti i temës",
        arabic: "سطر الموضوع",
        italian: "oggetto",
        serbian: "наслов поруке"
      }
    },
    {
      german: "die Formulierung, die Formulierungen",
      translations: {
        english: "formulation, wording",
        ukrainian: "формулювання",
        polish: "sformułowanie",
        albanian: "formulimi",
        arabic: "الصياغة",
        italian: "formulazione",
        serbian: "формулација"
      }
    },
    {
      german: "der formelle Stil",
      translations: {
        english: "formal style",
        ukrainian: "формальний стиль",
        polish: "styl formalny",
        albanian: "stili formal",
        arabic: "الأسلوب الرسمي",
        italian: "stile formale",
        serbian: "формални стил"
      }
    },
    {
      german: "das Bewerbungstraining, die Bewerbungstrainings",
      translations: {
        english: "application training",
        ukrainian: "тренінг з подачі заявок",
        polish: "szkolenie z aplikowania",
        albanian: "trajnimi i aplikimit",
        arabic: "تدريب على التقديم للوظائف",
        italian: "formazione sulla candidatura",
        serbian: "обука за пријаву"
      }
    },
    {
      german: "die Stärken (Pl.)",
      translations: {
        english: "strengths",
        ukrainian: "сильні сторони",
        polish: "mocne strony",
        albanian: "pikat e forta",
        arabic: "نقاط القوة",
        italian: "punti di forza",
        serbian: "јаке стране"
      }
    },
    {
      german: "die Schwächen (Pl.)",
      translations: {
        english: "weaknesses",
        ukrainian: "слабкі сторони",
        polish: "słabe strony",
        albanian: "pikat e dobëta",
        arabic: "نقاط الضعف",
        italian: "punti deboli",
        serbian: "слабе стране"
      }
    },
    {
      german: "korrigieren",
      translations: {
        english: "to correct",
        ukrainian: "виправляти",
        polish: "poprawiać",
        albanian: "të korrigjosh",
        arabic: "يُصحّح",
        italian: "correggere",
        serbian: "исправити"
      }
    },
    {
      german: "ausdrucken",
      translations: {
        english: "to print out",
        ukrainian: "друкувати",
        polish: "wydrukować",
        albanian: "të printosh",
        arabic: "يطبع",
        italian: "stampare",
        serbian: "одштампати"
      }
    },
    {
      german: "verschicken",
      translations: {
        english: "to send",
        ukrainian: "відправляти",
        polish: "wysyłać",
        albanian: "të dërgosh",
        arabic: "يُرسل",
        italian: "spedire",
        serbian: "слати"
      }
    },
    {
      german: "kritisieren",
      translations: {
        english: "to criticize",
        ukrainian: "критикувати",
        polish: "krytykować",
        albanian: "të kritikosh",
        arabic: "ينتقد",
        italian: "criticare",
        serbian: "критиковати"
      }
    },
    {
      german: "unhöflich",
      translations: {
        english: "impolite, rude",
        ukrainian: "неввічливий",
        polish: "nieuprzejmy",
        albanian: "i pasjellshëm",
        arabic: "غير مهذب",
        italian: "maleducato",
        serbian: "нељубазан"
      }
    },
    {
      german: "unpassend",
      translations: {
        english: "unsuitable, inappropriate",
        ukrainian: "невідповідний",
        polish: "nieodpowiedni",
        albanian: "i papërshtatshëm",
        arabic: "غير ملائم",
        italian: "inadatto",
        serbian: "непримерен"
      }
    },
    {
      german: "sondern",
      translations: {
        english: "but rather",
        ukrainian: "а, але",
        polish: "lecz",
        albanian: "por",
        arabic: "بل",
        italian: "bensì",
        serbian: "него"
      }
    },
    {
      german: "um ... zu",
      translations: {
        english: "in order to",
        ukrainian: "щоб",
        polish: "żeby",
        albanian: "për të",
        arabic: "من أجل",
        italian: "per",
        serbian: "да би"
      }
    },
    {
      german: "anstatt ... zu",
      translations: {
        english: "instead of",
        ukrainian: "замість того, щоб",
        polish: "zamiast",
        albanian: "në vend që të",
        arabic: "بدلاً من",
        italian: "invece di",
        serbian: "уместо да"
      }
    },
    // === Additional clothing/appearance vocabulary from Module 3 ===
    {
      german: "das Kleid, die Kleider",
      translations: {
        english: "dress",
        ukrainian: "сукня",
        polish: "sukienka",
        albanian: "fustani",
        arabic: "الفستان",
        italian: "vestito",
        serbian: "хаљина"
      }
    },
    {
      german: "die Bluse, die Blusen",
      translations: {
        english: "blouse",
        ukrainian: "блузка",
        polish: "bluzka",
        albanian: "bluza",
        arabic: "البلوزة",
        italian: "camicetta",
        serbian: "блуза"
      }
    },
    {
      german: "die Jacke, die Jacken",
      translations: {
        english: "jacket",
        ukrainian: "куртка",
        polish: "kurtka",
        albanian: "xhaketa",
        arabic: "الجاكيت",
        italian: "giacca",
        serbian: "јакна"
      }
    },
    {
      german: "die Tasche, die Taschen",
      translations: {
        english: "bag, pocket",
        ukrainian: "сумка",
        polish: "torba",
        albanian: "çanta",
        arabic: "الحقيبة",
        italian: "borsa",
        serbian: "торба"
      }
    },
    {
      german: "der Anzug, die Anzüge",
      translations: {
        english: "suit",
        ukrainian: "костюм",
        polish: "garnitur",
        albanian: "kostumi",
        arabic: "البدلة",
        italian: "completo",
        serbian: "одело"
      }
    },
    {
      german: "das Hemd, die Hemden",
      translations: {
        english: "shirt",
        ukrainian: "сорочка",
        polish: "koszula",
        albanian: "këmisha",
        arabic: "القميص",
        italian: "camicia",
        serbian: "кошуља"
      }
    },
    {
      german: "die Krawatte, die Krawatten",
      translations: {
        english: "tie",
        ukrainian: "краватка",
        polish: "krawat",
        albanian: "kravata",
        arabic: "ربطة العنق",
        italian: "cravatta",
        serbian: "кравата"
      }
    },
    {
      german: "der Schuh, die Schuhe",
      translations: {
        english: "shoe",
        ukrainian: "черевик",
        polish: "but",
        albanian: "këpuca",
        arabic: "الحذاء",
        italian: "scarpa",
        serbian: "ципела"
      }
    },
    {
      german: "der Mantel, die Mäntel",
      translations: {
        english: "coat",
        ukrainian: "пальто",
        polish: "płaszcz",
        albanian: "pallto",
        arabic: "المعطف",
        italian: "cappotto",
        serbian: "капут"
      }
    }
  ],

  // Module 4: Damals, gestern, heute
  // Extracted from AB Module 4 "Wichtige Wörter" (pages 51-53)
  "4": [
    // === General ===
    {
      german: "wahrscheinlich",
      translations: {
        english: "probably",
        ukrainian: "ймовірно",
        polish: "prawdopodobnie",
        albanian: "ndoshta",
        arabic: "على الأرجح",
        italian: "probabilmente",
        serbian: "вероватно"
      }
    },
    {
      german: "bis (Konjunktion)",
      translations: {
        english: "until",
        ukrainian: "поки",
        polish: "dopóki",
        albanian: "derisa",
        arabic: "حتى",
        italian: "finché",
        serbian: "док"
      }
    },
    // === Section A: Lebensläufe ===
    {
      german: "das Promi-Lexikon, die Promi-Lexika",
      translations: {
        english: "celebrity encyclopedia",
        ukrainian: "енциклопедія знаменитостей",
        polish: "encyklopedia celebrytów",
        albanian: "enciklopedia e famshëm",
        arabic: "موسوعة المشاهير",
        italian: "enciclopedia delle celebrità",
        serbian: "енциклопедија познатих"
      }
    },
    {
      german: "die Ausgabe, die Ausgaben",
      translations: {
        english: "edition, issue",
        ukrainian: "видання",
        polish: "wydanie",
        albanian: "botimi",
        arabic: "الإصدار",
        italian: "edizione",
        serbian: "издање"
      }
    },
    {
      german: "die Preisverleihung, die Preisverleihungen",
      translations: {
        english: "award ceremony",
        ukrainian: "церемонія нагородження",
        polish: "ceremonia wręczenia nagród",
        albanian: "ceremonia e çmimeve",
        arabic: "حفل توزيع الجوائز",
        italian: "cerimonia di premiazione",
        serbian: "додела награда"
      }
    },
    {
      german: "gehören (zu)",
      translations: {
        english: "to belong (to)",
        ukrainian: "належати (до)",
        polish: "należeć (do)",
        albanian: "të përkatësish (në)",
        arabic: "ينتمي (إلى)",
        italian: "appartenere (a)",
        serbian: "припадати"
      }
    },
    {
      german: "der Sänger, die Sänger",
      translations: {
        english: "singer",
        ukrainian: "співак/співачка",
        polish: "piosenkarz/piosenkarka",
        albanian: "këngëtari/këngëtarja",
        arabic: "المغني/المغنية",
        italian: "cantante",
        serbian: "певач"
      }
    },
    {
      german: "als (Konjunktion)",
      translations: {
        english: "when (past), as",
        ukrainian: "коли (минуле)",
        polish: "gdy, kiedy",
        albanian: "kur",
        arabic: "عندما",
        italian: "quando",
        serbian: "када"
      }
    },
    {
      german: "auswandern",
      translations: {
        english: "to emigrate",
        ukrainian: "емігрувати",
        polish: "emigrować",
        albanian: "të emigrosh",
        arabic: "يهاجر",
        italian: "emigrare",
        serbian: "иселити се"
      }
    },
    {
      german: "der Musicaldarsteller, die Musicaldarsteller",
      translations: {
        english: "musical performer",
        ukrainian: "артист мюзиклу",
        polish: "aktor musicalowy",
        albanian: "aktori i mjuzikalit",
        arabic: "ممثل موسيقي",
        italian: "interprete di musical",
        serbian: "глумац у мјузиклу"
      }
    },
    {
      german: "der Auftritt, die Auftritte",
      translations: {
        english: "performance, appearance",
        ukrainian: "виступ",
        polish: "występ",
        albanian: "paraqitja",
        arabic: "الظهور",
        italian: "esibizione",
        serbian: "наступ"
      }
    },
    {
      german: "die Theaterproduktion, die Theaterproduktionen",
      translations: {
        english: "theater production",
        ukrainian: "театральна постановка",
        polish: "produkcja teatralna",
        albanian: "produksioni teatral",
        arabic: "الإنتاج المسرحي",
        italian: "produzione teatrale",
        serbian: "позоришна продукција"
      }
    },
    {
      german: "das Musical, die Musicals",
      translations: {
        english: "musical",
        ukrainian: "мюзикл",
        polish: "musical",
        albanian: "mjuzikali",
        arabic: "المسرحية الموسيقية",
        italian: "musical",
        serbian: "мјузикл"
      }
    },
    {
      german: "die Demo-CD, die Demo-CDs",
      translations: {
        english: "demo CD",
        ukrainian: "демо-диск",
        polish: "płyta demo",
        albanian: "CD demo",
        arabic: "قرص تجريبي",
        italian: "CD demo",
        serbian: "демо ЦД"
      }
    },
    {
      german: "der Künstlermanager, die Künstlermanager",
      translations: {
        english: "artist manager",
        ukrainian: "менеджер артиста",
        polish: "menedżer artysty",
        albanian: "menaxheri i artistit",
        arabic: "مدير الفنان",
        italian: "manager artistico",
        serbian: "менаџер уметника"
      }
    },
    {
      german: "veröffentlichen",
      translations: {
        english: "to publish, to release",
        ukrainian: "публікувати",
        polish: "publikować",
        albanian: "të publikosh",
        arabic: "ينشر",
        italian: "pubblicare",
        serbian: "објавити"
      }
    },
    {
      german: "das Album, die Alben",
      translations: {
        english: "album",
        ukrainian: "альбом",
        polish: "album",
        albanian: "albumi",
        arabic: "الألبوم",
        italian: "album",
        serbian: "албум"
      }
    },
    {
      german: "unendlich",
      translations: {
        english: "infinite, endless",
        ukrainian: "нескінченний",
        polish: "nieskończony",
        albanian: "i pafund",
        arabic: "لا نهائي",
        italian: "infinito",
        serbian: "бесконачан"
      }
    },
    {
      german: "erreichen",
      translations: {
        english: "to reach, to achieve",
        ukrainian: "досягати",
        polish: "osiągnąć",
        albanian: "të arrish",
        arabic: "يحقق",
        italian: "raggiungere",
        serbian: "достићи"
      }
    },
    {
      german: "die Fernsehserie, die Fernsehserien",
      translations: {
        english: "TV series",
        ukrainian: "телесеріал",
        polish: "serial telewizyjny",
        albanian: "seriali televiziv",
        arabic: "المسلسل التلفزيوني",
        italian: "serie televisiva",
        serbian: "ТВ серија"
      }
    },
    {
      german: "folgen",
      translations: {
        english: "to follow",
        ukrainian: "слідувати",
        polish: "śledzić",
        albanian: "të ndjekësh",
        arabic: "يتابع",
        italian: "seguire",
        serbian: "пратити"
      }
    },
    {
      german: "der Fernsehauftritt, die Fernsehauftritte",
      translations: {
        english: "TV appearance",
        ukrainian: "виступ на телебаченні",
        polish: "występ telewizyjny",
        albanian: "paraqitja televizive",
        arabic: "الظهور التلفزيوني",
        italian: "apparizione televisiva",
        serbian: "ТВ наступ"
      }
    },
    {
      german: "der Moderator, die Moderatoren",
      translations: {
        english: "host, presenter",
        ukrainian: "ведучий/ведуча",
        polish: "prezenter/prezenterka",
        albanian: "moderatori/moderatorja",
        arabic: "المقدم/المقدمة",
        italian: "conduttore/conduttrice",
        serbian: "водитељ"
      }
    },
    {
      german: "der Fan, die Fans",
      translations: {
        english: "fan",
        ukrainian: "фанат",
        polish: "fan",
        albanian: "tifozi",
        arabic: "المعجب",
        italian: "fan",
        serbian: "фан"
      }
    },
    {
      german: "die Konzerttour, die Konzerttouren",
      translations: {
        english: "concert tour",
        ukrainian: "концертний тур",
        polish: "trasa koncertowa",
        albanian: "turne koncertesh",
        arabic: "جولة الحفلات الموسيقية",
        italian: "tour di concerti",
        serbian: "концертна турнеја"
      }
    },
    {
      german: "der Musikpreis, die Musikpreise",
      translations: {
        english: "music award",
        ukrainian: "музична премія",
        polish: "nagroda muzyczna",
        albanian: "çmimi i muzikës",
        arabic: "جائزة موسيقية",
        italian: "premio musicale",
        serbian: "музичка награда"
      }
    },
    {
      german: "der Hit, die Hits",
      translations: {
        english: "hit (song)",
        ukrainian: "хіт",
        polish: "przebój",
        albanian: "hiti",
        arabic: "الأغنية الناجحة",
        italian: "hit",
        serbian: "хит"
      }
    },
    {
      german: "der Schauspieler, die Schauspieler",
      translations: {
        english: "actor/actress",
        ukrainian: "актор/акторка",
        polish: "aktor/aktorka",
        albanian: "aktori/aktorja",
        arabic: "الممثل/الممثلة",
        italian: "attore/attrice",
        serbian: "глумац"
      }
    },
    {
      german: "das Lebensjahr, die Lebensjahre",
      translations: {
        english: "year of life",
        ukrainian: "рік життя",
        polish: "rok życia",
        albanian: "viti i jetës",
        arabic: "سنة من العمر",
        italian: "anno di vita",
        serbian: "година живота"
      }
    },
    {
      german: "die Rockband, die Rockbands",
      translations: {
        english: "rock band",
        ukrainian: "рок-гурт",
        polish: "zespół rockowy",
        albanian: "grupi rok",
        arabic: "فرقة روك",
        italian: "rock band",
        serbian: "рок бенд"
      }
    },
    {
      german: "der Leadsänger, die Leadsänger",
      translations: {
        english: "lead singer",
        ukrainian: "соліст/солістка",
        polish: "główny wokalista",
        albanian: "këngëtari kryesor",
        arabic: "المغني الرئيسي",
        italian: "cantante principale",
        serbian: "главни певач"
      }
    },
    {
      german: "das Theater, die Theater",
      translations: {
        english: "theater",
        ukrainian: "театр",
        polish: "teatr",
        albanian: "teatri",
        arabic: "المسرح",
        italian: "teatro",
        serbian: "позориште"
      }
    },
    {
      german: "der Kommissar, die Kommissare",
      translations: {
        english: "commissioner, detective",
        ukrainian: "комісар",
        polish: "komisarz",
        albanian: "komisionari",
        arabic: "المحقق",
        italian: "commissario",
        serbian: "комесар"
      }
    },
    {
      german: "autobiografisch",
      translations: {
        english: "autobiographical",
        ukrainian: "автобіографічний",
        polish: "autobiograficzny",
        albanian: "autobiografik",
        arabic: "سيرة ذاتية",
        italian: "autobiografico",
        serbian: "аутобиографски"
      }
    },
    {
      german: "die Erzählung, die Erzählungen",
      translations: {
        english: "story, narrative",
        ukrainian: "оповідання",
        polish: "opowiadanie",
        albanian: "tregimi",
        arabic: "القصة",
        italian: "racconto",
        serbian: "приповетка"
      }
    },
    {
      german: "der Kriegswaise, die Kriegswaisen",
      translations: {
        english: "war orphan",
        ukrainian: "сирота війни",
        polish: "sierota wojenna",
        albanian: "jetimi i luftës",
        arabic: "يتيم الحرب",
        italian: "orfano di guerra",
        serbian: "ратно сироче"
      }
    },
    {
      german: "ehemalig",
      translations: {
        english: "former",
        ukrainian: "колишній",
        polish: "były",
        albanian: "i mëparshëm",
        arabic: "سابق",
        italian: "ex",
        serbian: "бивши"
      }
    },
    {
      german: "der Sportlehrer, die Sportlehrer",
      translations: {
        english: "sports teacher",
        ukrainian: "вчитель фізкультури",
        polish: "nauczyciel wychowania fizycznego",
        albanian: "mësuesi i edukimit fizik",
        arabic: "معلم الرياضة",
        italian: "insegnante di educazione fisica",
        serbian: "наставник физичког"
      }
    },
    {
      german: "das Talent, die Talente",
      translations: {
        english: "talent",
        ukrainian: "талант",
        polish: "talent",
        albanian: "talenti",
        arabic: "الموهبة",
        italian: "talento",
        serbian: "таленат"
      }
    },
    {
      german: "wenn",
      translations: {
        english: "when, if",
        ukrainian: "коли, якщо",
        polish: "gdy, jeśli",
        albanian: "kur, nëse",
        arabic: "عندما، إذا",
        italian: "quando, se",
        serbian: "када, ако"
      }
    },
    // === Section B: Zeitgeschichte ===
    {
      german: "die Zeitgeschichte (Sg.)",
      translations: {
        english: "contemporary history",
        ukrainian: "сучасна історія",
        polish: "historia współczesna",
        albanian: "historia bashkëkohore",
        arabic: "التاريخ المعاصر",
        italian: "storia contemporanea",
        serbian: "савремена историја"
      }
    },
    {
      german: "das Tempo (Sg.)",
      translations: {
        english: "tempo, speed",
        ukrainian: "темп",
        polish: "tempo",
        albanian: "ritmi",
        arabic: "الإيقاع",
        italian: "ritmo",
        serbian: "темпо"
      }
    },
    {
      german: "die Autoproduktion, die Autoproduktionen",
      translations: {
        english: "car production",
        ukrainian: "виробництво автомобілів",
        polish: "produkcja samochodów",
        albanian: "prodhimi i makinave",
        arabic: "إنتاج السيارات",
        italian: "produzione automobilistica",
        serbian: "производња аутомобила"
      }
    },
    {
      german: "wachsen",
      translations: {
        english: "to grow",
        ukrainian: "зростати",
        polish: "rosnąć",
        albanian: "të rritesh",
        arabic: "ينمو",
        italian: "crescere",
        serbian: "расти"
      }
    },
    {
      german: "vor allem",
      translations: {
        english: "above all, especially",
        ukrainian: "перш за все",
        polish: "przede wszystkim",
        albanian: "mbi të gjitha",
        arabic: "قبل كل شيء",
        italian: "soprattutto",
        serbian: "пре свега"
      }
    },
    {
      german: "ca. (circa)",
      translations: {
        english: "approximately",
        ukrainian: "приблизно",
        polish: "około",
        albanian: "përafërsisht",
        arabic: "تقريباً",
        italian: "circa",
        serbian: "приближно"
      }
    },
    {
      german: "der Straßenverkehr (Sg.)",
      translations: {
        english: "road traffic",
        ukrainian: "дорожній рух",
        polish: "ruch uliczny",
        albanian: "trafiku rrugor",
        arabic: "حركة المرور",
        italian: "traffico stradale",
        serbian: "друмски саобраћај"
      }
    },
    {
      german: "der Pkw, die Pkws",
      translations: {
        english: "car, passenger car",
        ukrainian: "легковий автомобіль",
        polish: "samochód osobowy",
        albanian: "makina e pasagjerëve",
        arabic: "سيارة ركاب",
        italian: "autovettura",
        serbian: "путнички аутомобил"
      }
    },
    {
      german: "das Volk, die Völker",
      translations: {
        english: "people, nation",
        ukrainian: "народ",
        polish: "naród",
        albanian: "populli",
        arabic: "الشعب",
        italian: "popolo",
        serbian: "народ"
      }
    },
    {
      german: "der Motorradfahrer, die Motorradfahrer",
      translations: {
        english: "motorcycle rider",
        ukrainian: "мотоцикліст",
        polish: "motocyklista",
        albanian: "motoristi",
        arabic: "سائق الدراجة النارية",
        italian: "motociclista",
        serbian: "мотоциклиста"
      }
    },
    {
      german: "der Autofahrer, die Autofahrer",
      translations: {
        english: "car driver",
        ukrainian: "водій автомобіля",
        polish: "kierowca samochodu",
        albanian: "shoferi i makinës",
        arabic: "سائق السيارة",
        italian: "automobilista",
        serbian: "возач аутомобила"
      }
    },
    {
      german: "staunen",
      translations: {
        english: "to be amazed",
        ukrainian: "дивуватися",
        polish: "zdumiewać się",
        albanian: "të habitesh",
        arabic: "يندهش",
        italian: "stupirsi",
        serbian: "чудити се"
      }
    },
    {
      german: "besonders",
      translations: {
        english: "especially",
        ukrainian: "особливо",
        polish: "szczególnie",
        albanian: "veçanërisht",
        arabic: "خاصة",
        italian: "specialmente",
        serbian: "посебно"
      }
    },
    {
      german: "aufstellen",
      translations: {
        english: "to set up, to establish",
        ukrainian: "встановлювати",
        polish: "ustawiać",
        albanian: "të vendosësh",
        arabic: "يُنشئ",
        italian: "installare",
        serbian: "поставити"
      }
    },
    {
      german: "der Autoverkehr (Sg.)",
      translations: {
        english: "car traffic",
        ukrainian: "автомобільний рух",
        polish: "ruch samochodowy",
        albanian: "trafiku i makinave",
        arabic: "حركة السيارات",
        italian: "traffico automobilistico",
        serbian: "аутомобилски саобраћај"
      }
    },
    {
      german: "zunehmen",
      translations: {
        english: "to increase",
        ukrainian: "збільшуватися",
        polish: "wzrastać",
        albanian: "të rritesh",
        arabic: "يزداد",
        italian: "aumentare",
        serbian: "повећати се"
      }
    },
    {
      german: "der Verkehrsunfall, die Verkehrsunfälle",
      translations: {
        english: "traffic accident",
        ukrainian: "дорожньо-транспортна пригода",
        polish: "wypadek drogowy",
        albanian: "aksidenti rrugor",
        arabic: "حادث مروري",
        italian: "incidente stradale",
        serbian: "саобраћајна несрећа"
      }
    },
    {
      german: "sterben",
      translations: {
        english: "to die",
        ukrainian: "помирати",
        polish: "umierać",
        albanian: "të vdesësh",
        arabic: "يموت",
        italian: "morire",
        serbian: "умрети"
      }
    },
    {
      german: "der Krieg, die Kriege",
      translations: {
        english: "war",
        ukrainian: "війна",
        polish: "wojna",
        albanian: "lufta",
        arabic: "الحرب",
        italian: "guerra",
        serbian: "рат"
      }
    },
    {
      german: "der Zeppelin, die Zeppeline",
      translations: {
        english: "zeppelin",
        ukrainian: "цепелін",
        polish: "zepelin",
        albanian: "cepelini",
        arabic: "المنطاد",
        italian: "zeppelin",
        serbian: "цепелин"
      }
    },
    {
      german: "das Luftschiff, die Luftschiffe",
      translations: {
        english: "airship",
        ukrainian: "дирижабль",
        polish: "sterowiec",
        albanian: "aeroplani me ajër",
        arabic: "المنطاد",
        italian: "dirigibile",
        serbian: "ваздушни брод"
      }
    },
    {
      german: "der Flugzeugverkehr (Sg.)",
      translations: {
        english: "air traffic",
        ukrainian: "повітряний рух",
        polish: "ruch lotniczy",
        albanian: "trafiku ajror",
        arabic: "حركة الطيران",
        italian: "traffico aereo",
        serbian: "ваздушни саобраћај"
      }
    },
    {
      german: "der Passagier, die Passagiere",
      translations: {
        english: "passenger",
        ukrainian: "пасажир",
        polish: "pasażer",
        albanian: "pasagjeri",
        arabic: "الراكب",
        italian: "passeggero",
        serbian: "путник"
      }
    },
    {
      german: "das Passagierflugzeug, die Passagierflugzeuge",
      translations: {
        english: "passenger plane",
        ukrainian: "пасажирський літак",
        polish: "samolot pasażerski",
        albanian: "aeroplani i pasagjerëve",
        arabic: "طائرة ركاب",
        italian: "aereo passeggeri",
        serbian: "путнички авион"
      }
    },
    {
      german: "der Stummfilm, die Stummfilme",
      translations: {
        english: "silent film",
        ukrainian: "німий фільм",
        polish: "film niemy",
        albanian: "filmi pa zë",
        arabic: "الفيلم الصامت",
        italian: "film muto",
        serbian: "неми филм"
      }
    },
    {
      german: "die Strecke, die Strecken",
      translations: {
        english: "route, distance",
        ukrainian: "маршрут, відстань",
        polish: "trasa, odcinek",
        albanian: "rruga, distanca",
        arabic: "المسار",
        italian: "percorso",
        serbian: "траса, растојање"
      }
    },
    {
      german: "beeindruckend",
      translations: {
        english: "impressive",
        ukrainian: "вражаючий",
        polish: "imponujący",
        albanian: "mbresëlënës",
        arabic: "مثير للإعجاب",
        italian: "impressionante",
        serbian: "импресивно"
      }
    },
    {
      german: "bereits",
      translations: {
        english: "already",
        ukrainian: "вже",
        polish: "już",
        albanian: "tashmë",
        arabic: "بالفعل",
        italian: "già",
        serbian: "већ"
      }
    },
    {
      german: "die Schnellverbindung, die Schnellverbindungen",
      translations: {
        english: "fast connection",
        ukrainian: "швидке сполучення",
        polish: "szybkie połączenie",
        albanian: "lidhja e shpejtë",
        serbian: "брза веза",
        arabic: "اتصال سريع",
        italian: "collegamento rapido"
      }
    },
    {
      german: "die Aussicht, die Aussichten",
      translations: {
        english: "view, prospect",
        ukrainian: "вид, перспектива",
        polish: "widok, perspektywa",
        albanian: "pamja",
        arabic: "المنظر",
        italian: "vista",
        serbian: "поглед, перспектива"
      }
    },
    {
      german: "der Champagner (Sg.)",
      translations: {
        english: "champagne",
        ukrainian: "шампанське",
        polish: "szampan",
        albanian: "shampanja",
        arabic: "الشمبانيا",
        italian: "champagne",
        serbian: "шампањац"
      }
    },
    // === Section C: Zeitzeugen ===
    {
      german: "der Zeitzeuge, die Zeitzeugen",
      translations: {
        english: "contemporary witness",
        ukrainian: "свідок епохи",
        polish: "świadek historii",
        albanian: "dëshmitari i kohës",
        arabic: "شاهد العصر",
        italian: "testimone dell'epoca",
        serbian: "сведок времена"
      }
    },
    {
      german: "zerstören",
      translations: {
        english: "to destroy",
        ukrainian: "руйнувати",
        polish: "zniszczyć",
        albanian: "të shkatërrosh",
        arabic: "يدمر",
        italian: "distruggere",
        serbian: "уништити"
      }
    },
    {
      german: "klettern",
      translations: {
        english: "to climb",
        ukrainian: "лазити",
        polish: "wspinać się",
        albanian: "të ngjitesh",
        arabic: "يتسلق",
        italian: "arrampicarsi",
        serbian: "пењати се"
      }
    },
    {
      german: "sich erinnern",
      translations: {
        english: "to remember",
        ukrainian: "пам'ятати",
        polish: "pamiętać",
        albanian: "të kujtosh",
        arabic: "يتذكر",
        italian: "ricordare",
        serbian: "сећати се"
      }
    },
    {
      german: "der Lehrling, die Lehrlinge",
      translations: {
        english: "apprentice",
        ukrainian: "учень",
        polish: "uczeń, praktykant",
        albanian: "nxënësi",
        arabic: "المتدرب",
        italian: "apprendista",
        serbian: "шегрт"
      }
    },
    {
      german: "frieren",
      translations: {
        english: "to freeze, to be cold",
        ukrainian: "мерзнути",
        polish: "marznąć",
        albanian: "të ngrihesh",
        arabic: "يتجمد",
        italian: "avere freddo",
        serbian: "зепсти"
      }
    },
    {
      german: "mehrmals",
      translations: {
        english: "several times",
        ukrainian: "кілька разів",
        polish: "kilka razy",
        albanian: "disa herë",
        arabic: "عدة مرات",
        italian: "più volte",
        serbian: "више пута"
      }
    },
    {
      german: "reif",
      translations: {
        english: "ripe, mature",
        ukrainian: "стиглий, зрілий",
        polish: "dojrzały",
        albanian: "i pjekur",
        arabic: "ناضج",
        italian: "maturo",
        serbian: "зрео"
      }
    },
    {
      german: "die Ernte, die Ernten",
      translations: {
        english: "harvest",
        ukrainian: "врожай",
        polish: "żniwa",
        albanian: "korrja",
        arabic: "الحصاد",
        italian: "raccolta",
        serbian: "жетва"
      }
    },
    {
      german: "der Fischer, die Fischer",
      translations: {
        english: "fisher",
        ukrainian: "рибалка",
        polish: "rybak",
        albanian: "peshkatari",
        arabic: "الصياد",
        italian: "pescatore",
        serbian: "рибар"
      }
    },
    // === Traffic vocabulary (page 53) ===
    {
      german: "die Ampel, die Ampeln",
      translations: {
        english: "traffic light",
        ukrainian: "світлофор",
        polish: "sygnalizacja świetlna",
        albanian: "semafori",
        arabic: "إشارة المرور",
        italian: "semaforo",
        serbian: "семафор"
      }
    },
    {
      german: "die Fußgängerampel, die Fußgängerampeln",
      translations: {
        english: "pedestrian traffic light",
        ukrainian: "світлофор для пішоходів",
        polish: "sygnalizacja dla pieszych",
        albanian: "semafori për këmbësorë",
        arabic: "إشارة مرور المشاة",
        italian: "semaforo pedonale",
        serbian: "пешачки семафор"
      }
    },
    {
      german: "der Fahrradweg, die Fahrradwege",
      translations: {
        english: "bicycle path",
        ukrainian: "велосипедна доріжка",
        polish: "ścieżka rowerowa",
        albanian: "shtegu i biçikletave",
        arabic: "مسار الدراجات",
        italian: "pista ciclabile",
        serbian: "бициклистичка стаза"
      }
    },
    {
      german: "der Bürgersteig, die Bürgersteige",
      translations: {
        english: "sidewalk",
        ukrainian: "тротуар",
        polish: "chodnik",
        albanian: "trotuari",
        arabic: "الرصيف",
        italian: "marciapiede",
        serbian: "тротоар"
      }
    },
    {
      german: "die Kreuzung, die Kreuzungen",
      translations: {
        english: "intersection",
        ukrainian: "перехрестя",
        polish: "skrzyżowanie",
        albanian: "kryqëzimi",
        arabic: "التقاطع",
        italian: "incrocio",
        serbian: "раскрсница"
      }
    },
    {
      german: "der Zebrastreifen, die Zebrastreifen",
      translations: {
        english: "zebra crossing",
        ukrainian: "зебра",
        polish: "przejście dla pieszych",
        albanian: "kalimi i zebras",
        arabic: "ممر المشاة",
        italian: "strisce pedonali",
        serbian: "пешачки прелаз"
      }
    },
    {
      german: "der Helm, die Helme",
      translations: {
        english: "helmet",
        ukrainian: "шолом",
        polish: "kask",
        albanian: "helmeta",
        arabic: "الخوذة",
        italian: "casco",
        serbian: "кацига"
      }
    },
    {
      german: "der Kreisel, die Kreisel",
      translations: {
        english: "roundabout",
        ukrainian: "кільцева розв'язка",
        polish: "rondo",
        albanian: "rrethrrotullimi",
        arabic: "الدوار",
        italian: "rotatoria",
        serbian: "кружни ток"
      }
    },
    {
      german: "die Autobahn, die Autobahnen",
      translations: {
        english: "highway",
        ukrainian: "автобан",
        polish: "autostrada",
        albanian: "autostrada",
        arabic: "الطريق السريع",
        italian: "autostrada",
        serbian: "аутопут"
      }
    },
    {
      german: "die Polizeikontrolle, die Polizeikontrollen",
      translations: {
        english: "police checkpoint",
        ukrainian: "поліцейський контроль",
        polish: "kontrola policyjna",
        albanian: "kontrolli policor",
        arabic: "نقطة تفتيش الشرطة",
        italian: "controllo di polizia",
        serbian: "полицијска контрола"
      }
    }
  ],

  // Module 5: Aus der Arbeitswelt
  // Extracted from AB Module 5 "Wichtige Wörter" (pages 63-64)
  "5": [
    // === General Work Terms ===
    {
      german: "das Lager, die Lager",
      translations: {
        english: "warehouse, storage",
        ukrainian: "склад",
        polish: "magazyn",
        albanian: "depo",
        arabic: "المستودع",
        italian: "magazzino",
        serbian: "магацин"
      }
    },
    {
      german: "die Produktion, die Produktionen",
      translations: {
        english: "production",
        ukrainian: "виробництво",
        polish: "produkcja",
        albanian: "prodhimi",
        arabic: "الإنتاج",
        italian: "produzione",
        serbian: "производња"
      }
    },
    {
      german: "der Konferenzraum, die Konferenzräume",
      translations: {
        english: "conference room",
        ukrainian: "конференц-зал",
        polish: "sala konferencyjna",
        albanian: "salla e konferencave",
        arabic: "غرفة الاجتماعات",
        italian: "sala conferenze",
        serbian: "конференцијска сала"
      }
    },
    {
      german: "die Abteilung, die Abteilungen",
      translations: {
        english: "department",
        ukrainian: "відділ",
        polish: "dział",
        albanian: "departamenti",
        arabic: "القسم",
        italian: "reparto",
        serbian: "одељење"
      }
    },
    {
      german: "die Personalabteilung, die Personalabteilungen",
      translations: {
        english: "human resources department",
        ukrainian: "відділ кадрів",
        polish: "dział kadr",
        albanian: "departamenti i burimeve njerëzore",
        arabic: "قسم الموارد البشرية",
        italian: "ufficio del personale",
        serbian: "одељење за људске ресурсе"
      }
    },
    {
      german: "die Direktion, die Direktionen",
      translations: {
        english: "management, directorate",
        ukrainian: "дирекція",
        polish: "dyrekcja",
        albanian: "drejtoria",
        arabic: "الإدارة",
        italian: "direzione",
        serbian: "дирекција"
      }
    },
    {
      german: "die Geschäftsführung, die Geschäftsführungen",
      translations: {
        english: "management, executive board",
        ukrainian: "керівництво",
        polish: "zarząd",
        albanian: "menaxhimi",
        arabic: "إدارة الشركة",
        italian: "direzione aziendale",
        serbian: "управа"
      }
    },
    {
      german: "verantwortlich",
      translations: {
        english: "responsible",
        ukrainian: "відповідальний",
        polish: "odpowiedzialny",
        albanian: "përgjegjës",
        arabic: "مسؤول",
        italian: "responsabile",
        serbian: "одговоран"
      }
    },

    // === A: Ein Arbeitskonflikt ===
    {
      german: "der Arbeitskonflikt, die Arbeitskonflikte",
      translations: {
        english: "labor dispute",
        ukrainian: "трудовий конфлікт",
        polish: "konflikt w pracy",
        albanian: "konflikti i punës",
        arabic: "نزاع عمالي",
        italian: "conflitto lavorativo",
        serbian: "радни конфликт"
      }
    },
    {
      german: "demonstrieren",
      translations: {
        english: "to demonstrate",
        ukrainian: "демонструвати",
        polish: "demonstrować",
        albanian: "të demonstrosh",
        arabic: "يتظاهر",
        italian: "dimostrare",
        serbian: "демонстрирати"
      }
    },
    {
      german: "die Schließung, die Schließungen",
      translations: {
        english: "closure, shutdown",
        ukrainian: "закриття",
        polish: "zamknięcie",
        albanian: "mbyllja",
        arabic: "الإغلاق",
        italian: "chiusura",
        serbian: "затварање"
      }
    },
    {
      german: "arbeitslos",
      translations: {
        english: "unemployed",
        ukrainian: "безробітний",
        polish: "bezrobotny",
        albanian: "i papunë",
        arabic: "عاطل عن العمل",
        italian: "disoccupato",
        serbian: "незапослен"
      }
    },
    {
      german: "kämpfen",
      translations: {
        english: "to fight, to struggle",
        ukrainian: "боротися",
        polish: "walczyć",
        albanian: "të luftosh",
        arabic: "يكافح",
        italian: "lottare",
        serbian: "борити се"
      }
    },
    {
      german: "unmöglich",
      translations: {
        english: "impossible",
        ukrainian: "неможливий",
        polish: "niemożliwy",
        albanian: "i pamundur",
        arabic: "مستحيل",
        italian: "impossibile",
        serbian: "немогуће"
      }
    },
    {
      german: "der/die Vorsitzende, die Vorsitzenden",
      translations: {
        english: "chairperson",
        ukrainian: "голова",
        polish: "przewodniczący",
        albanian: "kryetari",
        arabic: "الرئيس",
        italian: "presidente",
        serbian: "председник"
      }
    },
    {
      german: "der Vertreter, die Vertreter",
      translations: {
        english: "representative",
        ukrainian: "представник",
        polish: "przedstawiciel",
        albanian: "përfaqësuesi",
        arabic: "الممثل",
        italian: "rappresentante",
        serbian: "представник"
      }
    },
    {
      german: "die Verwaltung, die Verwaltungen",
      translations: {
        english: "administration",
        ukrainian: "адміністрація",
        polish: "administracja",
        albanian: "administrata",
        arabic: "الإدارة",
        italian: "amministrazione",
        serbian: "управа"
      }
    },
    {
      german: "fordern",
      translations: {
        english: "to demand",
        ukrainian: "вимагати",
        polish: "żądać",
        albanian: "të kërkosh",
        arabic: "يطالب",
        italian: "esigere",
        serbian: "захтевати"
      }
    },
    {
      german: "drohen",
      translations: {
        english: "to threaten",
        ukrainian: "погрожувати",
        serbian: "претити",
        polish: "grozić",
        albanian: "të kërcënosh",
        arabic: "يهدد",
        italian: "minacciare"
      }
    },
    {
      german: "der Streik, die Streiks",
      translations: {
        english: "strike",
        ukrainian: "страйк",
        polish: "strajk",
        albanian: "greva",
        arabic: "الإضراب",
        italian: "sciopero",
        serbian: "штрајк"
      }
    },
    {
      german: "die Verhandlung, die Verhandlungen",
      translations: {
        english: "negotiation",
        ukrainian: "переговори",
        polish: "negocjacje",
        albanian: "negociatat",
        arabic: "المفاوضات",
        italian: "trattativa",
        serbian: "преговори"
      }
    },
    {
      german: "erfolglos",
      translations: {
        english: "unsuccessful",
        ukrainian: "безуспішний",
        polish: "bezskuteczny",
        albanian: "i pasuksesshëm",
        arabic: "فاشل",
        italian: "senza successo",
        serbian: "безуспешан"
      }
    },
    {
      german: "rentabel",
      translations: {
        english: "profitable",
        ukrainian: "рентабельний",
        polish: "rentowny",
        albanian: "i përfituar",
        arabic: "مربح",
        italian: "redditizio",
        serbian: "рентабилан"
      }
    },
    {
      german: "unrentabel",
      translations: {
        english: "unprofitable",
        ukrainian: "нерентабельний",
        polish: "nierentowny",
        albanian: "i papërfituar",
        arabic: "غير مربح",
        italian: "non redditizio",
        serbian: "нерентабилан"
      }
    },
    {
      german: "chancenlos",
      translations: {
        english: "without a chance",
        ukrainian: "без шансів",
        polish: "bez szans",
        albanian: "pa shanse",
        arabic: "بلا فرصة",
        italian: "senza possibilità",
        serbian: "без шансе"
      }
    },
    {
      german: "die Konkurrenz (Sg.)",
      translations: {
        english: "competition",
        ukrainian: "конкуренція",
        polish: "konkurencja",
        albanian: "konkurrenca",
        arabic: "المنافسة",
        italian: "concorrenza",
        serbian: "конкуренција"
      }
    },
    {
      german: "der/die Angestellte, die Angestellten",
      translations: {
        english: "employee",
        ukrainian: "службовець",
        polish: "pracownik",
        albanian: "i punësuari",
        arabic: "الموظف",
        italian: "impiegato",
        serbian: "запослени"
      }
    },
    {
      german: "der/die Beschäftigte, die Beschäftigten",
      translations: {
        english: "employee, worker",
        ukrainian: "працівник",
        polish: "zatrudniony",
        albanian: "i punësuari",
        arabic: "العامل",
        italian: "occupato",
        serbian: "радник"
      }
    },
    {
      german: "das Unternehmen, die Unternehmen",
      translations: {
        english: "company, enterprise",
        ukrainian: "підприємство",
        polish: "przedsiębiorstwo",
        albanian: "ndërmarrja",
        arabic: "الشركة",
        italian: "azienda",
        serbian: "предузеће"
      }
    },
    {
      german: "der Kundenservice (Sg.)",
      translations: {
        english: "customer service",
        ukrainian: "обслуговування клієнтів",
        polish: "obsługa klienta",
        albanian: "shërbimi ndaj klientëve",
        arabic: "خدمة العملاء",
        italian: "servizio clienti",
        serbian: "корисничка служба"
      }
    },
    {
      german: "die Einigung, die Einigungen",
      translations: {
        english: "agreement",
        ukrainian: "угода",
        polish: "porozumienie",
        albanian: "marrëveshja",
        arabic: "الاتفاق",
        italian: "accordo",
        serbian: "споразум"
      }
    },
    {
      german: "der Kompromiss, die Kompromisse",
      translations: {
        english: "compromise",
        ukrainian: "компроміс",
        polish: "kompromis",
        albanian: "kompromisi",
        arabic: "الحل الوسط",
        italian: "compromesso",
        serbian: "компромис"
      }
    },
    {
      german: "der Sozialplan, die Sozialpläne",
      translations: {
        english: "social plan (redundancy package)",
        ukrainian: "соціальний план",
        polish: "plan socjalny",
        albanian: "plani social",
        arabic: "الخطة الاجتماعية",
        italian: "piano sociale",
        serbian: "социјални план"
      }
    },
    {
      german: "die Abfindung, die Abfindungen",
      translations: {
        english: "severance pay",
        ukrainian: "вихідна допомога",
        polish: "odprawa",
        albanian: "kompensimi",
        arabic: "تعويض نهاية الخدمة",
        italian: "liquidazione",
        serbian: "отпремнина"
      }
    },
    {
      german: "die Betriebsvereinbarung, die Betriebsvereinbarungen",
      translations: {
        english: "company agreement",
        ukrainian: "колективний договір",
        polish: "porozumienie zakładowe",
        albanian: "marrëveshja e ndërmarrjes",
        arabic: "اتفاقية العمل",
        italian: "accordo aziendale",
        serbian: "колективни уговор"
      }
    },
    {
      german: "der Kündigungsschutz (Sg.)",
      translations: {
        english: "protection against dismissal",
        ukrainian: "захист від звільнення",
        polish: "ochrona przed zwolnieniem",
        albanian: "mbrojtja nga largimi",
        arabic: "الحماية من الفصل",
        italian: "tutela contro il licenziamento",
        serbian: "заштита од отказа"
      }
    },
    {
      german: "garantieren",
      translations: {
        english: "to guarantee",
        ukrainian: "гарантувати",
        polish: "gwarantować",
        albanian: "të garantosh",
        arabic: "يضمن",
        italian: "garantire",
        serbian: "гарантовати"
      }
    },
    {
      german: "sichern",
      translations: {
        english: "to secure, to safeguard",
        ukrainian: "забезпечувати",
        polish: "zabezpieczyć",
        albanian: "të sigurosh",
        arabic: "يؤمّن",
        italian: "assicurare",
        serbian: "осигурати"
      }
    },
    {
      german: "kündigen",
      translations: {
        english: "to resign, to terminate",
        ukrainian: "звільнятися",
        polish: "wypowiedzieć",
        albanian: "të japësh dorëheqjen",
        arabic: "يستقيل",
        italian: "licenziare",
        serbian: "дати отказ"
      }
    },
    {
      german: "die Steuer, die Steuern",
      translations: {
        english: "tax",
        ukrainian: "податок",
        polish: "podatek",
        albanian: "taksa",
        arabic: "الضريبة",
        italian: "imposta",
        serbian: "порез"
      }
    },

    // === B: Die schriftliche Bewerbung ===
    {
      german: "berufserfahren",
      translations: {
        english: "professionally experienced",
        ukrainian: "з досвідом роботи",
        polish: "z doświadczeniem zawodowym",
        albanian: "me përvojë profesionale",
        arabic: "ذو خبرة مهنية",
        italian: "con esperienza professionale",
        serbian: "са радним искуством"
      }
    },
    {
      german: "tätig",
      translations: {
        english: "active, working",
        ukrainian: "зайнятий",
        polish: "czynny, zatrudniony",
        albanian: "aktiv",
        arabic: "نشط، عامل",
        italian: "attivo",
        serbian: "активан"
      }
    },
    {
      german: "selbstständig",
      translations: {
        english: "self-employed, independent",
        ukrainian: "самостійний",
        polish: "samodzielny",
        albanian: "i pavarur",
        arabic: "مستقل",
        italian: "autonomo",
        serbian: "самосталан"
      }
    },
    {
      german: "beherrschen",
      translations: {
        english: "to master, to be proficient in",
        ukrainian: "володіти",
        polish: "opanować",
        albanian: "të zotërosh",
        arabic: "يتقن",
        italian: "padroneggiare",
        serbian: "владати"
      }
    },
    {
      german: "die Aufstiegsmöglichkeit, die Aufstiegsmöglichkeiten",
      translations: {
        english: "career advancement opportunity",
        ukrainian: "можливість кар'єрного росту",
        polish: "możliwość awansu",
        albanian: "mundësia e ngritjes në karrierë",
        arabic: "فرصة الترقي",
        italian: "possibilità di carriera",
        serbian: "могућност напредовања"
      }
    },
    {
      german: "die Position, die Positionen",
      translations: {
        english: "position",
        ukrainian: "посада",
        polish: "stanowisko",
        albanian: "pozita",
        arabic: "المنصب",
        italian: "posizione",
        serbian: "позиција"
      }
    },
    {
      german: "der Betrieb, die Betriebe",
      translations: {
        english: "company, business",
        ukrainian: "підприємство",
        polish: "zakład",
        albanian: "ndërmarrja",
        arabic: "المنشأة",
        italian: "azienda",
        serbian: "предузеће"
      }
    },
    {
      german: "der Kundendienst (Sg.)",
      translations: {
        english: "customer service",
        ukrainian: "служба підтримки клієнтів",
        polish: "serwis klienta",
        albanian: "shërbimi ndaj klientëve",
        arabic: "خدمة العملاء",
        italian: "servizio clienti",
        serbian: "корисничка служба"
      }
    },
    {
      german: "der Kundenkontakt, die Kundenkontakte",
      translations: {
        english: "customer contact",
        ukrainian: "контакт з клієнтами",
        polish: "kontakt z klientem",
        albanian: "kontakti me klientët",
        arabic: "التواصل مع العملاء",
        italian: "contatto clienti",
        serbian: "контакт са клијентима"
      }
    },
    {
      german: "die Anlage, die Anlagen",
      translations: {
        english: "attachment, enclosure",
        ukrainian: "додаток",
        polish: "załącznik",
        albanian: "shtojca",
        arabic: "المرفق",
        italian: "allegato",
        serbian: "прилог"
      }
    },
    {
      german: "die Zeugniskopie, die Zeugniskopien",
      translations: {
        english: "copy of certificate",
        ukrainian: "копія диплома",
        polish: "kopia świadectwa",
        albanian: "kopja e dëshmisë",
        arabic: "نسخة الشهادة",
        italian: "copia del certificato",
        serbian: "копија сведочанства"
      }
    },
    {
      german: "das Detail, die Details",
      translations: {
        english: "detail",
        ukrainian: "деталь",
        polish: "szczegół",
        albanian: "detaji",
        arabic: "التفصيل",
        italian: "dettaglio",
        serbian: "детаљ"
      }
    },
    {
      german: "der berufliche Werdegang (Sg.)",
      translations: {
        english: "career path",
        ukrainian: "професійний шлях",
        polish: "przebieg kariery",
        albanian: "rruga profesionale",
        arabic: "المسار المهني",
        italian: "percorso professionale",
        serbian: "каријерни пут"
      }
    },
    {
      german: "sich weiterentwickeln",
      translations: {
        english: "to develop further",
        ukrainian: "розвиватися далі",
        polish: "rozwijać się",
        albanian: "të zhvillohesh më tej",
        arabic: "يتطور",
        italian: "svilupparsi",
        serbian: "даље се развијати"
      }
    },
    {
      german: "bevor",
      translations: {
        english: "before",
        ukrainian: "перш ніж",
        polish: "zanim",
        albanian: "para se",
        arabic: "قبل أن",
        italian: "prima che",
        serbian: "пре него што"
      }
    },
    {
      german: "während",
      translations: {
        english: "while, during",
        ukrainian: "поки, під час",
        polish: "podczas gdy",
        albanian: "ndërsa",
        arabic: "أثناء",
        italian: "mentre",
        serbian: "док, за време"
      }
    },
    {
      german: "nachdem",
      translations: {
        english: "after",
        ukrainian: "після того як",
        polish: "po tym jak",
        albanian: "pasi",
        arabic: "بعد أن",
        italian: "dopo che",
        serbian: "након што"
      }
    },

    // === C: Die Gehaltsabrechnung ===
    {
      german: "die Abrechnung, die Abrechnungen",
      translations: {
        english: "statement, bill",
        ukrainian: "розрахунок",
        polish: "rozliczenie",
        albanian: "fatura",
        arabic: "الفاتورة",
        italian: "fattura",
        serbian: "обрачун"
      }
    },
    {
      german: "die Gehaltsabrechnung, die Gehaltsabrechnungen",
      translations: {
        english: "payslip",
        ukrainian: "розрахунковий лист",
        polish: "odcinek wypłaty",
        albanian: "lista e pagës",
        arabic: "قسيمة الراتب",
        italian: "busta paga",
        serbian: "платна листа"
      }
    },
    {
      german: "die Steuerklasse, die Steuerklassen",
      translations: {
        english: "tax bracket",
        ukrainian: "податковий клас",
        polish: "klasa podatkowa",
        albanian: "klasa tatimore",
        arabic: "الشريحة الضريبية",
        serbian: "пореска класа",
        italian: "classe fiscale"
      }
    },
    {
      german: "das Bruttogehalt, die Bruttogehälter",
      translations: {
        english: "gross salary",
        ukrainian: "зарплата брутто",
        polish: "wynagrodzenie brutto",
        albanian: "paga bruto",
        arabic: "الراتب الإجمالي",
        italian: "stipendio lordo",
        serbian: "бруто плата"
      }
    },
    {
      german: "der Abzug, die Abzüge",
      translations: {
        english: "deduction",
        ukrainian: "відрахування",
        polish: "potrącenie",
        albanian: "zbritja",
        arabic: "الخصم",
        italian: "detrazione",
        serbian: "одбитак"
      }
    },
    {
      german: "die Lohnsteuer, die Lohnsteuern",
      translations: {
        english: "income tax (on wages)",
        ukrainian: "прибутковий податок",
        polish: "podatek od wynagrodzenia",
        albanian: "taksa e pagës",
        arabic: "ضريبة الدخل",
        italian: "imposta sul reddito",
        serbian: "порез на зараду"
      }
    },
    {
      german: "der Solidarzuschlag, die Solidarzuschläge",
      translations: {
        english: "solidarity surcharge",
        ukrainian: "внесок солідарності",
        polish: "dodatek solidarnościowy",
        albanian: "shtesa e solidaritetit",
        arabic: "رسوم التضامن",
        italian: "contributo di solidarietà",
        serbian: "допринос за солидарност"
      }
    },
    {
      german: "die Kirchensteuer, die Kirchensteuern",
      translations: {
        english: "church tax",
        ukrainian: "церковний податок",
        polish: "podatek kościelny",
        albanian: "taksa e kishës",
        arabic: "ضريبة الكنيسة",
        italian: "imposta ecclesiastica",
        serbian: "црквени порез"
      }
    },
    {
      german: "die Krankenversicherung, die Krankenversicherungen",
      translations: {
        english: "health insurance",
        ukrainian: "медичне страхування",
        polish: "ubezpieczenie zdrowotne",
        albanian: "sigurimi shëndetësor",
        arabic: "التأمين الصحي",
        italian: "assicurazione sanitaria",
        serbian: "здравствено осигурање"
      }
    },
    {
      german: "die Pflegeversicherung, die Pflegeversicherungen",
      translations: {
        english: "long-term care insurance",
        ukrainian: "страхування догляду",
        polish: "ubezpieczenie pielęgnacyjne",
        albanian: "sigurimi i kujdesit",
        arabic: "تأمين الرعاية",
        italian: "assicurazione per la cura",
        serbian: "осигурање за негу"
      }
    },
    {
      german: "die Rentenversicherung, die Rentenversicherungen",
      translations: {
        english: "pension insurance",
        ukrainian: "пенсійне страхування",
        polish: "ubezpieczenie emerytalne",
        albanian: "sigurimi i pensionit",
        arabic: "تأمين التقاعد",
        italian: "assicurazione pensionistica",
        serbian: "пензијско осигурање"
      }
    },
    {
      german: "die Arbeitslosenversicherung, die Arbeitslosenversicherungen",
      translations: {
        english: "unemployment insurance",
        ukrainian: "страхування від безробіття",
        polish: "ubezpieczenie od bezrobocia",
        albanian: "sigurimi i papunësisë",
        arabic: "تأمين البطالة",
        italian: "assicurazione contro la disoccupazione",
        serbian: "осигурање за случај незапослености"
      }
    },
    {
      german: "die Sozialversicherung, die Sozialversicherungen",
      translations: {
        english: "social insurance",
        ukrainian: "соціальне страхування",
        polish: "ubezpieczenie społeczne",
        albanian: "sigurimi social",
        arabic: "التأمين الاجتماعي",
        italian: "previdenza sociale",
        serbian: "социјално осигурање"
      }
    },
    {
      german: "das Nettogehalt, die Nettogehälter",
      translations: {
        english: "net salary",
        ukrainian: "зарплата нетто",
        polish: "wynagrodzenie netto",
        albanian: "paga neto",
        arabic: "الراتب الصافي",
        italian: "stipendio netto",
        serbian: "нето плата"
      }
    },
    {
      german: "das Einkommen, die Einkommen",
      translations: {
        english: "income",
        ukrainian: "дохід",
        polish: "dochód",
        albanian: "të ardhurat",
        arabic: "الدخل",
        italian: "reddito",
        serbian: "приход"
      }
    },
    {
      german: "der Verdienst, die Verdienste",
      translations: {
        english: "earnings",
        ukrainian: "заробіток",
        polish: "zarobek",
        albanian: "fitimi",
        arabic: "الأرباح",
        italian: "guadagno",
        serbian: "зарада"
      }
    },
    {
      german: "durchschnittlich",
      translations: {
        english: "average",
        ukrainian: "середній",
        polish: "przeciętny",
        albanian: "mesatar",
        arabic: "متوسط",
        italian: "medio",
        serbian: "просечан"
      }
    }
  ],

  // Module 6: Wünsche
  // Extracted from AB Module 6 "Wichtige Wörter" (pages 75-76)
  "6": [
    // === General Terms ===
    {
      german: "der Wohlstand (Sg.)",
      translations: {
        english: "prosperity, wealth",
        ukrainian: "добробут",
        polish: "dobrobyt",
        albanian: "mirëqenia",
        arabic: "الرفاهية",
        italian: "benessere",
        serbian: "благостање"
      }
    },
    {
      german: "die Freiheit (Sg.)",
      translations: {
        english: "freedom",
        ukrainian: "свобода",
        polish: "wolność",
        albanian: "liria",
        arabic: "الحرية",
        italian: "libertà",
        serbian: "слобода"
      }
    },
    {
      german: "der Geburtstagswunsch, die Geburtstagswünsche",
      translations: {
        english: "birthday wish",
        ukrainian: "побажання до дня народження",
        polish: "życzenie urodzinowe",
        albanian: "dëshira e ditëlindjes",
        arabic: "أمنية عيد الميلاد",
        italian: "desiderio di compleanno",
        serbian: "рођенданска жеља"
      }
    },
    {
      german: "der Vertrag, die Verträge",
      translations: {
        english: "contract",
        ukrainian: "договір",
        polish: "umowa",
        albanian: "kontrata",
        arabic: "العقد",
        italian: "contratto",
        serbian: "уговор"
      }
    },
    {
      german: "sich leisten",
      translations: {
        english: "to afford",
        ukrainian: "дозволити собі",
        polish: "pozwolić sobie",
        albanian: "të përballosh",
        arabic: "يتحمل تكلفة",
        italian: "permettersi",
        serbian: "приуштити"
      }
    },

    // === A: Wünsche und Wirklichkeit ===
    {
      german: "die Wirklichkeit (Sg.)",
      translations: {
        english: "reality",
        ukrainian: "реальність",
        polish: "rzeczywistość",
        albanian: "realiteti",
        arabic: "الواقع",
        italian: "realtà",
        serbian: "стварност"
      }
    },
    {
      german: "sich wünschen",
      translations: {
        english: "to wish for",
        ukrainian: "бажати",
        polish: "życzyć sobie",
        albanian: "të dëshirosh",
        arabic: "يتمنى",
        italian: "desiderare",
        serbian: "желети"
      }
    },
    {
      german: "die Befragung, die Befragungen",
      translations: {
        english: "survey, poll",
        ukrainian: "опитування",
        polish: "ankieta",
        albanian: "anketa",
        arabic: "الاستطلاع",
        italian: "sondaggio",
        serbian: "анкета"
      }
    },
    {
      german: "der/die Befragte, die Befragten",
      translations: {
        english: "respondent",
        ukrainian: "респондент",
        polish: "respondent",
        albanian: "i anketuari",
        arabic: "المستجوب",
        italian: "intervistato",
        serbian: "испитаник"
      }
    },
    {
      german: "körperlich fit",
      translations: {
        english: "physically fit",
        ukrainian: "фізично здоровий",
        polish: "sprawny fizycznie",
        albanian: "në formë fizike",
        arabic: "لائق بدنياً",
        italian: "in forma fisica",
        serbian: "физички спреман"
      }
    },
    {
      german: "unbefristet",
      translations: {
        english: "permanent, unlimited",
        ukrainian: "безстроковий",
        polish: "bezterminowy",
        albanian: "i pakufizuar",
        arabic: "غير محدد المدة",
        italian: "a tempo indeterminato",
        serbian: "неограничен"
      }
    },
    {
      german: "der Arbeitsvertrag, die Arbeitsverträge",
      translations: {
        english: "employment contract",
        ukrainian: "трудовий договір",
        polish: "umowa o pracę",
        albanian: "kontrata e punës",
        arabic: "عقد العمل",
        italian: "contratto di lavoro",
        serbian: "уговор о раду"
      }
    },
    {
      german: "materiell",
      translations: {
        english: "material",
        ukrainian: "матеріальний",
        polish: "materialny",
        albanian: "material",
        arabic: "مادي",
        italian: "materiale",
        serbian: "материјални"
      }
    },
    {
      german: "besitzen",
      translations: {
        english: "to own, to possess",
        ukrainian: "володіти",
        polish: "posiadać",
        albanian: "të zotërosh",
        arabic: "يمتلك",
        italian: "possedere",
        serbian: "поседовати"
      }
    },
    {
      german: "finanziell",
      translations: {
        english: "financial",
        ukrainian: "фінансовий",
        polish: "finansowy",
        albanian: "financiar",
        arabic: "مالي",
        italian: "finanziario",
        serbian: "финансијски"
      }
    },
    {
      german: "die Sicherheit, die Sicherheiten",
      translations: {
        english: "security, safety",
        ukrainian: "безпека",
        polish: "bezpieczeństwo",
        albanian: "siguria",
        arabic: "الأمان",
        italian: "sicurezza",
        serbian: "сигурност"
      }
    },
    {
      german: "die Rente, die Renten",
      translations: {
        english: "pension",
        ukrainian: "пенсія",
        polish: "emerytura",
        albanian: "pensioni",
        arabic: "المعاش",
        italian: "pensione",
        serbian: "пензија"
      }
    },
    {
      german: "die Ehe, die Ehen",
      translations: {
        english: "marriage",
        ukrainian: "шлюб",
        polish: "małżeństwo",
        albanian: "martesa",
        arabic: "الزواج",
        italian: "matrimonio",
        serbian: "брак"
      }
    },
    {
      german: "der Lottogewinn, die Lottogewinne",
      translations: {
        english: "lottery win",
        ukrainian: "виграш у лотерею",
        polish: "wygrana na loterii",
        albanian: "fitimi në lotari",
        arabic: "ربح اليانصيب",
        italian: "vincita alla lotteria",
        serbian: "добитак на лутрији"
      }
    },
    {
      german: "das Wohneigentum (Sg.)",
      translations: {
        english: "home ownership",
        ukrainian: "власне житло",
        polish: "własność mieszkaniowa",
        albanian: "pronësia e banesës",
        arabic: "ملكية المنزل",
        italian: "proprietà immobiliare",
        serbian: "власништво над станом"
      }
    },
    {
      german: "gewinnen",
      translations: {
        english: "to win",
        ukrainian: "виграти",
        polish: "wygrać",
        albanian: "të fitosh",
        arabic: "يفوز",
        italian: "vincere",
        serbian: "победити"
      }
    },
    {
      german: "der Basketball, die Basketbälle",
      translations: {
        english: "basketball",
        ukrainian: "баскетбол",
        polish: "koszykówka",
        albanian: "basketbolli",
        arabic: "كرة السلة",
        italian: "pallacanestro",
        serbian: "кошарка"
      }
    },
    {
      german: "aussuchen",
      translations: {
        english: "to choose, to select",
        ukrainian: "вибирати",
        polish: "wybierać",
        albanian: "të zgjedhësh",
        arabic: "يختار",
        italian: "scegliere",
        serbian: "изабрати"
      }
    },
    {
      german: "ab und zu",
      translations: {
        english: "now and then",
        ukrainian: "час від часу",
        polish: "od czasu do czasu",
        albanian: "herë pas here",
        arabic: "بين الحين والآخر",
        italian: "di tanto in tanto",
        serbian: "с времена на време"
      }
    },
    {
      german: "ungesund",
      translations: {
        english: "unhealthy",
        ukrainian: "нездоровий",
        polish: "niezdrowy",
        albanian: "jo i shëndetshëm",
        arabic: "غير صحي",
        italian: "malsano",
        serbian: "нездрав"
      }
    },
    {
      german: "aufbauen",
      translations: {
        english: "to build up",
        ukrainian: "будувати",
        polish: "budować",
        albanian: "të ndërtosh",
        arabic: "يبني",
        italian: "costruire",
        serbian: "изградити"
      }
    },
    {
      german: "die Vokabel, die Vokabeln",
      translations: {
        english: "vocabulary word",
        ukrainian: "слово",
        polish: "słówko",
        albanian: "fjala",
        arabic: "الكلمة",
        italian: "vocabolo",
        serbian: "вокабулар"
      }
    },

    // === B: Geburtstagswünsche ===
    {
      german: "das Geburtstagsgeschenk, die Geburtstagsgeschenke",
      translations: {
        english: "birthday present",
        ukrainian: "подарунок на день народження",
        polish: "prezent urodzinowy",
        albanian: "dhurata e ditëlindjes",
        arabic: "هدية عيد الميلاد",
        italian: "regalo di compleanno",
        serbian: "рођендански поклон"
      }
    },
    {
      german: "der Test, die Tests",
      translations: {
        english: "test",
        ukrainian: "тест",
        polish: "test",
        albanian: "testi",
        arabic: "الاختبار",
        italian: "test",
        serbian: "тест"
      }
    },
    {
      german: "der Ärger (Sg.)",
      translations: {
        english: "annoyance, trouble",
        ukrainian: "роздратування",
        polish: "złość",
        albanian: "mërzitja",
        arabic: "الانزعاج",
        italian: "fastidio",
        serbian: "љутња"
      }
    },

    // === C: Verbraucherschutz ===
    {
      german: "der Verbraucherschutz (Sg.)",
      translations: {
        english: "consumer protection",
        ukrainian: "захист прав споживачів",
        polish: "ochrona konsumenta",
        albanian: "mbrojtja e konsumatorit",
        arabic: "حماية المستهلك",
        italian: "tutela dei consumatori",
        serbian: "заштита потрошача"
      }
    },
    {
      german: "die Verbraucherzentrale, die Verbraucherzentralen",
      translations: {
        english: "consumer advice center",
        ukrainian: "центр захисту споживачів",
        polish: "centrum ochrony konsumenta",
        albanian: "qendra e konsumatorit",
        arabic: "مركز حماية المستهلك",
        italian: "centro di consulenza per i consumatori",
        serbian: "центар за заштиту потрошача"
      }
    },
    {
      german: "das Bundesland, die Bundesländer",
      translations: {
        english: "federal state",
        ukrainian: "федеральна земля",
        polish: "kraj związkowy",
        albanian: "shteti federal",
        arabic: "الولاية الفدرالية",
        italian: "stato federale",
        serbian: "савезна држава"
      }
    },
    {
      german: "das Rechtsproblem, die Rechtsprobleme",
      translations: {
        english: "legal problem",
        ukrainian: "правова проблема",
        polish: "problem prawny",
        albanian: "problemi ligjor",
        arabic: "مشكلة قانونية",
        italian: "problema legale",
        serbian: "правни проблем"
      }
    },
    {
      german: "die Beratungsstelle, die Beratungsstellen",
      translations: {
        english: "advice center",
        ukrainian: "консультаційний центр",
        polish: "punkt doradczy",
        albanian: "qendra këshilluese",
        arabic: "مركز الاستشارات",
        italian: "centro di consulenza",
        serbian: "саветодавни центар"
      }
    },
    {
      german: "der Verbraucher, die Verbraucher",
      translations: {
        english: "consumer",
        ukrainian: "споживач",
        polish: "konsument",
        albanian: "konsumatori",
        arabic: "المستهلك",
        italian: "consumatore",
        serbian: "потрошач"
      }
    },
    {
      german: "vertreten",
      translations: {
        english: "to represent",
        ukrainian: "представляти",
        polish: "reprezentować",
        albanian: "të përfaqësosh",
        arabic: "يمثل",
        italian: "rappresentare",
        serbian: "представљати"
      }
    },
    {
      german: "die Öffentlichkeit (Sg.)",
      translations: {
        english: "public",
        ukrainian: "громадськість",
        polish: "opinia publiczna",
        albanian: "publiku",
        arabic: "الجمهور",
        italian: "pubblico",
        serbian: "јавност"
      }
    },
    {
      german: "die Einrichtung, die Einrichtungen",
      translations: {
        english: "institution, facility",
        ukrainian: "установа",
        polish: "instytucja",
        albanian: "institucioni",
        arabic: "المؤسسة",
        italian: "istituzione",
        serbian: "установа"
      }
    },
    {
      german: "die Jugend- und Erwachsenenbildung (Sg.)",
      translations: {
        english: "youth and adult education",
        ukrainian: "освіта молоді та дорослих",
        polish: "edukacja młodzieży i dorosłych",
        albanian: "arsimi i të rinjve dhe të rriturve",
        arabic: "تعليم الشباب والكبار",
        italian: "educazione giovanile e degli adulti",
        serbian: "образовање младих и одраслих"
      }
    },
    {
      german: "das Verbraucherrecht (Sg.)",
      translations: {
        english: "consumer rights",
        ukrainian: "права споживачів",
        polish: "prawo konsumenckie",
        albanian: "e drejta e konsumatorit",
        arabic: "حقوق المستهلك",
        italian: "diritti dei consumatori",
        serbian: "права потрошача"
      }
    },
    {
      german: "die Entscheidung, die Entscheidungen",
      translations: {
        english: "decision",
        ukrainian: "рішення",
        polish: "decyzja",
        albanian: "vendimi",
        arabic: "القرار",
        italian: "decisione",
        serbian: "одлука"
      }
    },
    {
      german: "rund um",
      translations: {
        english: "all about, around",
        ukrainian: "навколо",
        polish: "wokół",
        albanian: "rreth",
        arabic: "حول",
        italian: "intorno a",
        serbian: "око"
      }
    },
    {
      german: "der Kaufvertrag, die Kaufverträge",
      translations: {
        english: "purchase contract",
        ukrainian: "договір купівлі-продажу",
        polish: "umowa kupna",
        albanian: "kontrata e blerjes",
        arabic: "عقد الشراء",
        italian: "contratto di acquisto",
        serbian: "куповни уговор"
      }
    },
    {
      german: "das Versprechen, die Versprechen",
      translations: {
        english: "promise",
        ukrainian: "обіцянка",
        polish: "obietnica",
        albanian: "premtimi",
        arabic: "الوعد",
        italian: "promessa",
        serbian: "обећање"
      }
    },
    {
      german: "das Gewinnspiel, die Gewinnspiele",
      translations: {
        english: "competition, sweepstakes",
        ukrainian: "розіграш",
        polish: "konkurs z nagrodami",
        albanian: "lojë me çmime",
        arabic: "مسابقة الجوائز",
        italian: "concorso a premi",
        serbian: "наградна игра"
      }
    },
    {
      german: "die Energieabrechnung, die Energieabrechnungen",
      translations: {
        english: "energy bill",
        ukrainian: "рахунок за енергію",
        polish: "rachunek za energię",
        albanian: "fatura e energjisë",
        arabic: "فاتورة الطاقة",
        italian: "bolletta energetica",
        serbian: "рачун за енергију"
      }
    },
    {
      german: "die Altersvorsorge (Sg.)",
      translations: {
        english: "retirement provision",
        ukrainian: "пенсійне забезпечення",
        polish: "zabezpieczenie emerytalne",
        albanian: "sigurimi për pleqëri",
        arabic: "التأمين للشيخوخة",
        italian: "previdenza per la vecchiaia",
        serbian: "старосна заштита"
      }
    },
    {
      german: "die Energie, die Energien",
      translations: {
        english: "energy",
        ukrainian: "енергія",
        polish: "energia",
        albanian: "energjia",
        arabic: "الطاقة",
        italian: "energia",
        serbian: "енергија"
      }
    },
    {
      german: "die Umwelt (Sg.)",
      translations: {
        english: "environment",
        ukrainian: "навколишнє середовище",
        polish: "środowisko",
        albanian: "mjedisi",
        arabic: "البيئة",
        italian: "ambiente",
        serbian: "околина"
      }
    },
    {
      german: "die Mobilität (Sg.)",
      translations: {
        english: "mobility",
        ukrainian: "мобільність",
        polish: "mobilność",
        albanian: "mobiliteti",
        arabic: "التنقل",
        italian: "mobilità",
        serbian: "мобилност"
      }
    },
    {
      german: "die Pauschalreise, die Pauschalreisen",
      translations: {
        english: "package tour",
        ukrainian: "тур-пакет",
        polish: "wycieczka zorganizowana",
        albanian: "udhëtimi i organizuar",
        arabic: "الرحلة الشاملة",
        italian: "viaggio tutto compreso",
        serbian: "паушално путовање"
      }
    },
    {
      german: "der Reiseveranstalter, die Reiseveranstalter",
      translations: {
        english: "tour operator",
        ukrainian: "туроператор",
        polish: "organizator wycieczek",
        albanian: "organizatori i udhëtimeve",
        arabic: "منظم الرحلات",
        italian: "tour operator",
        serbian: "туроператор"
      }
    },
    {
      german: "beschreiben",
      translations: {
        english: "to describe",
        ukrainian: "описувати",
        polish: "opisywać",
        albanian: "të përshkruash",
        arabic: "يصف",
        italian: "descrivere",
        serbian: "описати"
      }
    },
    {
      german: "die Buchhandlung, die Buchhandlungen",
      translations: {
        english: "bookshop",
        ukrainian: "книгарня",
        polish: "księgarnia",
        albanian: "libraria",
        arabic: "المكتبة",
        italian: "libreria",
        serbian: "књижара"
      }
    },
    {
      german: "kulant",
      translations: {
        english: "accommodating, obliging",
        ukrainian: "поступливий",
        polish: "ugodowy",
        albanian: "i sjellshëm",
        arabic: "متعاون",
        italian: "accomodante",
        serbian: "предусретљив"
      }
    },
    {
      german: "zurücknehmen",
      translations: {
        english: "to take back",
        ukrainian: "повертати",
        polish: "przyjąć z powrotem",
        albanian: "të marrësh mbrapsht",
        arabic: "يسترجع",
        italian: "riprendere",
        serbian: "узети назад"
      }
    },
    {
      german: "der Gutschein, die Gutscheine",
      translations: {
        english: "voucher, coupon",
        ukrainian: "ваучер",
        polish: "bon",
        albanian: "kuponi",
        arabic: "القسيمة",
        italian: "buono",
        serbian: "ваучер"
      }
    },
    {
      german: "reduzieren",
      translations: {
        english: "to reduce",
        ukrainian: "знижувати",
        polish: "obniżać",
        albanian: "të ulësh",
        arabic: "يخفض",
        italian: "ridurre",
        serbian: "смањити"
      }
    },
    {
      german: "das Haustürgeschäft, die Haustürgeschäfte",
      translations: {
        english: "door-to-door sale",
        ukrainian: "продаж на дому",
        polish: "sprzedaż domokrążna",
        albanian: "shitja derë më derë",
        arabic: "البيع من الباب إلى الباب",
        italian: "vendita porta a porta",
        serbian: "продаја од врата до врата"
      }
    },
    {
      german: "der Telefonanschluss, die Telefonanschlüsse",
      translations: {
        english: "telephone connection",
        ukrainian: "телефонне підключення",
        polish: "przyłącze telefoniczne",
        albanian: "lidhja telefonike",
        arabic: "توصيل الهاتف",
        italian: "allacciamento telefonico",
        serbian: "телефонска веза"
      }
    },
    {
      german: "der Umtausch (Sg.)",
      translations: {
        english: "exchange",
        ukrainian: "обмін",
        polish: "wymiana",
        albanian: "këmbimi",
        arabic: "الاستبدال",
        italian: "cambio",
        serbian: "замена"
      }
    },
    {
      german: "der Kassenzettel, die Kassenzettel",
      translations: {
        english: "receipt",
        ukrainian: "чек",
        polish: "paragon",
        albanian: "kuponi i arkës",
        arabic: "الإيصال",
        italian: "scontrino",
        serbian: "рачун"
      }
    },
    {
      german: "umtauschen",
      translations: {
        english: "to exchange",
        ukrainian: "обмінювати",
        polish: "wymieniać",
        albanian: "të këmbesh",
        arabic: "يستبدل",
        italian: "cambiare",
        serbian: "заменити"
      }
    },
    {
      german: "die Differenz, die Differenzen",
      translations: {
        english: "difference",
        ukrainian: "різниця",
        polish: "różnica",
        albanian: "diferenca",
        arabic: "الفرق",
        italian: "differenza",
        serbian: "разлика"
      }
    }
  ]
});

// Section 7 was moved to B1.2
