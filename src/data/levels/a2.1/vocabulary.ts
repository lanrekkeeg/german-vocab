import { Card, Translations } from '../../../types';

export const A2_1_ALL_SECTIONS = [1, 2, 3, 4, 5, 6, 7];


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
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/a2.1/words/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const a2_1_Vocabulary: Record<string, Card[]> = addAudioPaths({
  
  "1": [
    {
      "german": "der Zuwanderer / die Zuwanderer",
      "translations": {
        "english": "immigrant (male)",
        "ukrainian": "іммігрант",
        "polish": "imigrant",
        "albanian": "emigrant",
        "arabic": "مهاجر",
        "italian": "immigrato",
        "serbian": "имигрант"
      }
    },
    {
      "german": "die Zuwanderin / die Zuwanderinnen",
      "translations": {
        "english": "immigrant (female)",
        "ukrainian": "іммігрантка",
        "polish": "imigrantka",
        "albanian": "emigrante",
        "arabic": "مهاجرة",
        "italian": "immigrata",
        "serbian": "имигранткиња"
      }
    },
    {
      "german": "die Welt / die Welten",
      "translations": {
        "english": "world",
        "ukrainian": "світ",
        "polish": "świat",
        "albanian": "bota",
        "arabic": "العالم",
        "italian": "mondo",
        "serbian": "свет"
      }
    },
    {
      "german": "der Grund / die Gründe",
      "translations": {
        "english": "reason",
        "ukrainian": "причина",
        "polish": "powód",
        "albanian": "arsyeja",
        "arabic": "السبب",
        "italian": "motivo",
        "serbian": "разлог"
      }
    },
    {
      "german": "unterschiedlich",
      "translations": {
        "english": "different, various",
        "ukrainian": "різний",
        "polish": "różny",
        "albanian": "i ndryshëm",
        "arabic": "مختلف",
        "italian": "diverso",
        "serbian": "различит"
      }
    },
    {
      "german": "erzählen",
      "translations": {
        "english": "to tell, to narrate",
        "ukrainian": "розповідати",
        "polish": "opowiadać",
        "albanian": "të tregosh",
        "arabic": "يروي",
        "italian": "raccontare",
        "serbian": "причати"
      }
    },
    {
      "german": "die Heimat / die Heimaten",
      "translations": {
        "english": "homeland, home country",
        "ukrainian": "батьківщина",
        "polish": "ojczyzna",
        "albanian": "atdheu",
        "arabic": "الوطن",
        "italian": "patria",
        "serbian": "домовина"
      }
    },
    {
      "german": "verlassen",
      "translations": {
        "english": "to leave",
        "ukrainian": "покидати",
        "polish": "opuszczać",
        "albanian": "të lësh",
        "arabic": "يغادر",
        "italian": "lasciare",
        "serbian": "напустити"
      }
    },
    {
      "german": "verlieren",
      "translations": {
        "english": "to lose",
        "ukrainian": "втрачати",
        "polish": "tracić",
        "albanian": "të humbash",
        "arabic": "يخسر",
        "italian": "perdere",
        "serbian": "изгубити"
      }
    },
    {
      "german": "erleben",
      "translations": {
        "english": "to experience",
        "ukrainian": "переживати",
        "polish": "przeżywać",
        "albanian": "të përjetosh",
        "arabic": "يعيش تجربة",
        "italian": "vivere",
        "serbian": "доживети"
      }
    },
    {
      "german": "kennenlernen",
      "translations": {
        "english": "to get to know",
        "ukrainian": "познайомитися",
        "polish": "poznawać",
        "albanian": "të njohësh",
        "arabic": "يتعرف على",
        "italian": "conoscere",
        "serbian": "упознати"
      }
    },
    {
      "german": "aufgeben",
      "translations": {
        "english": "to give up",
        "ukrainian": "здаватися",
        "polish": "rezygnować",
        "albanian": "të heqësh dorë",
        "arabic": "يستسلم",
        "italian": "arrendersi",
        "serbian": "одустати"
      }
    },
    {
      "german": "motivieren",
      "translations": {
        "english": "to motivate",
        "ukrainian": "мотивувати",
        "polish": "motywować",
        "albanian": "të motivosh",
        "arabic": "يحفز",
        "italian": "motivare",
        "serbian": "мотивисати"
      }
    },
    {
      "german": "schlimm",
      "translations": {
        "english": "bad, terrible",
        "ukrainian": "поганий",
        "polish": "zły",
        "albanian": "i keq",
        "arabic": "سيء",
        "italian": "brutto",
        "serbian": "лош, ужасан"
      }
    },
    {
      "german": "enttäuscht",
      "translations": {
        "english": "disappointed",
        "ukrainian": "розчарований",
        "polish": "rozczarowany",
        "albanian": "i zhgënjyer",
        "arabic": "محبط",
        "italian": "deluso",
        "serbian": "разочаран"
      }
    },
    {
      "german": "genervt",
      "translations": {
        "english": "annoyed",
        "ukrainian": "роздратований",
        "polish": "zdenerwowany",
        "albanian": "i nervozuar",
        "arabic": "منزعج",
        "italian": "infastidito",
        "serbian": "изнервиран"
      }
    },
    {
      "german": "das Abitur / die Abiture",
      "translations": {
        "english": "high school diploma (Germany)",
        "ukrainian": "атестат зрілості",
        "polish": "matura",
        "albanian": "diploma e shkollës së mesme",
        "arabic": "شهادة الثانوية العامة",
        "italian": "maturità",
        "serbian": "матура"
      }
    },
    {
      "german": "der Architekt / die Architekten",
      "translations": {
        "english": "architect (male)",
        "ukrainian": "архітектор",
        "polish": "architekt",
        "albanian": "arkitekt",
        "arabic": "مهندس معماري",
        "italian": "architetto",
        "serbian": "архитекта"
      }
    },
    {
      "german": "die Architektin / die Architektinnen",
      "translations": {
        "english": "architect (female)",
        "ukrainian": "архітекторка",
        "polish": "architektka",
        "albanian": "arkitekte",
        "arabic": "مهندسة معمارية",
        "italian": "architetta",
        "serbian": "архитекткиња"
      }
    },
    {
      "german": "der Abteilungsleiter / die Abteilungsleiter",
      "translations": {
        "english": "department head (male)",
        "ukrainian": "керівник відділу",
        "polish": "kierownik działu",
        "albanian": "drejtues i departamentit",
        "arabic": "رئيس القسم",
        "italian": "capo reparto",
        "serbian": "шеф одељења"
      }
    },
    {
      "german": "die Abteilungsleiterin / die Abteilungsleiterinnen",
      "translations": {
        "english": "department head (female)",
        "ukrainian": "керівниця відділу",
        "polish": "kierowniczka działu",
        "albanian": "drejtuese e departamentit",
        "arabic": "رئيسة القسم",
        "italian": "capo reparto (f)",
        "serbian": "шефица одељења"
      }
    },
    {
      "german": "die Teilzeitarbeit / die Teilzeitarbeiten",
      "translations": {
        "english": "part-time work",
        "ukrainian": "робота з неповним робочим днем",
        "polish": "praca w niepełnym wymiarze",
        "albanian": "punë me kohë të pjesshme",
        "arabic": "عمل بدوام جزئي",
        "italian": "lavoro part-time",
        "serbian": "рад са скраћеним радним временом"
      }
    },
    {
      "german": "das Flüchtlingsheim / die Flüchtlingsheime",
      "translations": {
        "english": "refugee shelter",
        "ukrainian": "притулок для біженців",
        "polish": "schronisko dla uchodźców",
        "albanian": "strehë për refugjatë",
        "arabic": "مأوى للاجئين",
        "italian": "centro per rifugiati",
        "serbian": "прихватилиште за избеглице"
      }
    },
    {
      "german": "der Verein / die Vereine",
      "translations": {
        "english": "club, association",
        "ukrainian": "клуб, асоціація",
        "polish": "klub, stowarzyszenie",
        "albanian": "klub, shoqatë",
        "arabic": "نادي، جمعية",
        "italian": "associazione",
        "serbian": "клуб, удружење"
      }
    },
    {
      "german": "aktiv",
      "translations": {
        "english": "active",
        "ukrainian": "активний",
        "polish": "aktywny",
        "albanian": "aktiv",
        "arabic": "نشط",
        "italian": "attivo",
        "serbian": "активан"
      }
    },
    {
      "german": "depressiv",
      "translations": {
        "english": "depressed",
        "ukrainian": "депресивний",
        "polish": "depresyjny",
        "albanian": "depresiv",
        "arabic": "مكتئب",
        "italian": "depresso",
        "serbian": "депресиван"
      }
    },
    {
      "german": "schaffen",
      "translations": {
        "english": "to manage, to accomplish",
        "ukrainian": "впоратися",
        "polish": "udać się",
        "albanian": "të arrish",
        "arabic": "ينجز",
        "italian": "riuscire",
        "serbian": "успети"
      }
    },
    {
      "german": "die Universität / die Universitäten",
      "translations": {
        "english": "university",
        "ukrainian": "університет",
        "polish": "uniwersytet",
        "albanian": "universiteti",
        "arabic": "الجامعة",
        "italian": "università",
        "serbian": "универзитет"
      }
    },
    {
      "german": "das Studium (Singular)",
      "translations": {
        "english": "studies",
        "ukrainian": "навчання",
        "polish": "studia",
        "albanian": "studimet",
        "arabic": "الدراسة",
        "italian": "studi",
        "serbian": "студије"
      }
    },
    {
      "german": "jung",
      "translations": {
        "english": "young",
        "ukrainian": "молодий",
        "polish": "młody",
        "albanian": "i ri",
        "arabic": "شاب",
        "italian": "giovane",
        "serbian": "млад"
      }
    },
    {
      "german": "der Anfang / die Anfänge",
      "translations": {
        "english": "beginning",
        "ukrainian": "початок",
        "polish": "początek",
        "albanian": "fillimi",
        "arabic": "البداية",
        "italian": "inizio",
        "serbian": "почетак"
      }
    },
    {
      "german": "schwierig",
      "translations": {
        "english": "difficult",
        "ukrainian": "важкий",
        "polish": "trudny",
        "albanian": "i vështirë",
        "arabic": "صعب",
        "italian": "difficile",
        "serbian": "тежак"
      }
    },
    {
      "german": "die Geschichte (Singular)",
      "translations": {
        "english": "story, history",
        "ukrainian": "історія",
        "polish": "historia",
        "albanian": "historia",
        "arabic": "القصة، التاريخ",
        "italian": "storia",
        "serbian": "прича, историја"
      }
    },
    {
      "german": "sauber",
      "translations": {
        "english": "clean",
        "ukrainian": "чистий",
        "polish": "czysty",
        "albanian": "i pastër",
        "arabic": "نظيف",
        "italian": "pulito",
        "serbian": "чист"
      }
    },
    {
      "german": "schmutzig",
      "translations": {
        "english": "dirty",
        "ukrainian": "брудний",
        "polish": "brudny",
        "albanian": "i pisët",
        "arabic": "قذر",
        "italian": "sporco",
        "serbian": "прљав"
      }
    },
    {
      "german": "hektisch",
      "translations": {
        "english": "hectic",
        "ukrainian": "неспокійний",
        "polish": "gorączkowy",
        "albanian": "i shpejtë",
        "arabic": "محموم",
        "italian": "frenetico",
        "serbian": "ужурбан"
      }
    },
    {
      "german": "eigentlich",
      "translations": {
        "english": "actually",
        "ukrainian": "власне",
        "polish": "właściwie",
        "albanian": "në të vërtetë",
        "arabic": "في الواقع",
        "italian": "in realtà",
        "serbian": "заправо"
      }
    },
    {
      "german": "vorsprechen",
      "translations": {
        "english": "to rehearse, to practice speaking",
        "ukrainian": "промовляти",
        "polish": "wymawiać",
        "albanian": "të shqiptosh",
        "arabic": "ينطق",
        "italian": "pronunciare",
        "serbian": "изговарати"
      }
    },
    {
      "german": "nachsprechen",
      "translations": {
        "english": "to repeat after",
        "ukrainian": "повторювати",
        "polish": "powtarzać",
        "albanian": "të përsërisësh",
        "arabic": "يكرر",
        "italian": "ripetere",
        "serbian": "понављати"
      }
    },
    {
      "german": "zuhören",
      "translations": {
        "english": "to listen",
        "ukrainian": "слухати",
        "polish": "słuchać",
        "albanian": "të dëgjosh",
        "arabic": "يستمع",
        "italian": "ascoltare",
        "serbian": "слушати"
      }
    },
    {
      "german": "ausprobieren",
      "translations": {
        "english": "to try out",
        "ukrainian": "випробовувати",
        "polish": "wypróbować",
        "albanian": "të provosh",
        "arabic": "يجرب",
        "italian": "provare",
        "serbian": "испробати"
      }
    },
    {
      "german": "das Wort / die Wörter",
      "translations": {
        "english": "word",
        "ukrainian": "слово",
        "polish": "słowo",
        "albanian": "fjala",
        "arabic": "الكلمة",
        "italian": "parola",
        "serbian": "реч"
      }
    },
    {
      "german": "der Satz / die Sätze",
      "translations": {
        "english": "sentence",
        "ukrainian": "речення",
        "polish": "zdanie",
        "albanian": "fjalia",
        "arabic": "الجملة",
        "italian": "frase",
        "serbian": "реченица"
      }
    },
    {
      "german": "die Übung / die Übungen",
      "translations": {
        "english": "exercise",
        "ukrainian": "вправа",
        "polish": "ćwiczenie",
        "albanian": "ushtrim",
        "arabic": "التمرين",
        "italian": "esercizio",
        "serbian": "вежба"
      }
    },
    {
      "german": "der Fehler / die Fehler",
      "translations": {
        "english": "mistake",
        "ukrainian": "помилка",
        "polish": "błąd",
        "albanian": "gabimi",
        "arabic": "الخطأ",
        "italian": "errore",
        "serbian": "грешка"
      }
    },
    {
      "german": "die Aussprache / die Aussprachen",
      "translations": {
        "english": "pronunciation",
        "ukrainian": "вимова",
        "polish": "wymowa",
        "albanian": "shqiptimi",
        "arabic": "النطق",
        "italian": "pronuncia",
        "serbian": "изговор"
      }
    },
    {
      "german": "unbedingt",
      "translations": {
        "english": "absolutely, necessarily",
        "ukrainian": "обов'язково",
        "polish": "koniecznie",
        "albanian": "patjetër",
        "arabic": "بالتأكيد",
        "italian": "assolutamente",
        "serbian": "обавезно"
      }
    },
    {
      "german": "lustig",
      "translations": {
        "english": "funny",
        "ukrainian": "веселий",
        "polish": "zabawny",
        "albanian": "qesharak",
        "arabic": "مضحك",
        "italian": "divertente",
        "serbian": "смешан"
      }
    },
    {
      "german": "Mut haben",
      "translations": {
        "english": "to have courage",
        "ukrainian": "мати мужність",
        "polish": "mieć odwagę",
        "albanian": "të kesh guxim",
        "arabic": "أن يكون لديه شجاعة",
        "italian": "avere coraggio",
        "serbian": "имати храбрости"
      }
    },
    {
      "german": "Angst haben",
      "translations": {
        "english": "to be afraid",
        "ukrainian": "боятися",
        "polish": "bać się",
        "albanian": "të kesh frikë",
        "arabic": "يخاف",
        "italian": "avere paura",
        "serbian": "плашити се"
      }
    },
    {
      "german": "schriftlich",
      "translations": {
        "english": "in writing",
        "ukrainian": "письмово",
        "polish": "pisemnie",
        "albanian": "me shkrim",
        "arabic": "كتابيًا",
        "italian": "per iscritto",
        "serbian": "писмено"
      }
    },
    {
      "german": "auswendig lernen",
      "translations": {
        "english": "to learn by heart",
        "ukrainian": "вчити напам'ять",
        "polish": "uczyć się na pamięć",
        "albanian": "të mësosh përmendësh",
        "arabic": "يحفظ عن ظهر قلب",
        "italian": "imparare a memoria",
        "serbian": "учити напамет"
      }
    },
    {
      "german": "üben",
      "translations": {
        "english": "to practice",
        "ukrainian": "практикувати",
        "polish": "ćwiczyć",
        "albanian": "të stërvitesh",
        "arabic": "يتدرب",
        "italian": "esercitarsi",
        "serbian": "вежбати"
      }
    }
  ],
  "2": [
    {
      "german": "das Medium / die Medien",
      "translations": {
        "english": "medium, media",
        "ukrainian": "медіа, засіб масової інформації",
        "polish": "medium, media",
        "albanian": "media",
        "arabic": "وسائل الإعلام",
        "italian": "media, mezzo di comunicazione",
        "serbian": "медиј, медији"
      }
    },
    {
      "german": "die Zeitung / die Zeitungen",
      "translations": {
        "english": "newspaper",
        "ukrainian": "газета",
        "polish": "gazeta",
        "albanian": "gazeta",
        "arabic": "جريدة",
        "italian": "giornale",
        "serbian": "новине"
      }
    },
    {
      "german": "der Kopfhörer / die Kopfhörer",
      "translations": {
        "english": "headphones",
        "ukrainian": "навушники",
        "polish": "słuchawki",
        "albanian": "kufje",
        "arabic": "سماعات الرأس",
        "italian": "cuffie",
        "serbian": "слушалице"
      }
    },
    {
      "german": "das E-Book / die E-Books",
      "translations": {
        "english": "e-book",
        "ukrainian": "електронна книга",
        "polish": "e-book",
        "albanian": "libër elektronik",
        "arabic": "كتاب إلكتروني",
        "italian": "e-book",
        "serbian": "е-књига"
      }
    },
    {
      "german": "der Laptop / die Laptops",
      "translations": {
        "english": "laptop",
        "ukrainian": "ноутбук",
        "polish": "laptop",
        "albanian": "laptop",
        "arabic": "حاسوب محمول",
        "italian": "laptop",
        "serbian": "лаптоп"
      }
    },
    {
      "german": "das Handy / die Handys",
      "translations": {
        "english": "mobile phone, cell phone",
        "ukrainian": "мобільний телефон",
        "polish": "telefon komórkowy",
        "albanian": "telefon celular",
        "arabic": "هاتف محمول",
        "italian": "cellulare",
        "serbian": "мобилни телефон"
      }
    },
    {
      "german": "das Smartphone / die Smartphones",
      "translations": {
        "english": "smartphone",
        "ukrainian": "смартфон",
        "polish": "smartphone",
        "albanian": "smartphone",
        "arabic": "هاتف ذكي",
        "italian": "smartphone",
        "serbian": "паметни телефон"
      }
    },
    {
      "german": "das Tablet / die Tablets",
      "translations": {
        "english": "tablet",
        "ukrainian": "планшет",
        "polish": "tablet",
        "albanian": "tablet",
        "arabic": "جهاز لوحي",
        "italian": "tablet",
        "serbian": "таблет"
      }
    },
    {
      "german": "das Internet",
      "translations": {
        "english": "internet",
        "ukrainian": "інтернет",
        "polish": "internet",
        "albanian": "internet",
        "arabic": "إنترنت",
        "italian": "internet",
        "serbian": "интернет"
      }
    },
    {
      "german": "die E-Mail / die E-Mails",
      "translations": {
        "english": "email",
        "ukrainian": "електронна пошта",
        "polish": "e-mail",
        "albanian": "email",
        "arabic": "بريد إلكتروني",
        "italian": "email",
        "serbian": "имејл"
      }
    },
    {
      "german": "das Fernsehen",
      "translations": {
        "english": "television",
        "ukrainian": "телебачення",
        "polish": "telewizja",
        "albanian": "televizioni",
        "arabic": "تلفزيون",
        "italian": "televisione",
        "serbian": "телевизија"
      }
    },
    {
      "german": "der Fernseher / die Fernseher",
      "translations": {
        "english": "television set, TV",
        "ukrainian": "телевізор",
        "polish": "telewizor",
        "albanian": "televizor",
        "arabic": "جهاز تلفزيون",
        "italian": "televisore",
        "serbian": "телевизор"
      }
    },
    {
      "german": "das Radio / die Radios",
      "translations": {
        "english": "radio",
        "ukrainian": "радіо",
        "polish": "radio",
        "albanian": "radio",
        "arabic": "راديو",
        "italian": "radio",
        "serbian": "радио"
      }
    },
    {
      "german": "chatten",
      "translations": {
        "english": "to chat",
        "ukrainian": "спілкуватися в чаті",
        "polish": "czatować",
        "albanian": "të bisedosh",
        "arabic": "يتحادث",
        "italian": "chattare",
        "serbian": "ћаскати"
      }
    },
    {
      "german": "telefonieren",
      "translations": {
        "english": "to make a phone call, to call",
        "ukrainian": "телефонувати",
        "polish": "telefonować",
        "albanian": "të telefonosh",
        "arabic": "يتصل هاتفياً",
        "italian": "telefonare",
        "serbian": "телефонирати"
      }
    },
    {
      "german": "surfen",
      "translations": {
        "english": "to surf",
        "ukrainian": "серфити",
        "polish": "surfować",
        "albanian": "të surfosh",
        "arabic": "يتصفح",
        "italian": "navigare",
        "serbian": "сурфовати"
      }
    },
    {
      "german": "der Preis / die Preise",
      "translations": {
        "english": "price",
        "ukrainian": "ціна",
        "polish": "cena",
        "albanian": "çmimi",
        "arabic": "سعر",
        "italian": "prezzo",
        "serbian": "цена"
      }
    },
    {
      "german": "die Nachricht / die Nachrichten",
      "translations": {
        "english": "message, news",
        "ukrainian": "повідомлення, новини",
        "polish": "wiadomość",
        "albanian": "lajm, mesazh",
        "arabic": "رسالة، أخبار",
        "italian": "messaggio, notizie",
        "serbian": "порука, вести"
      }
    },
    {
      "german": "das Online-Spiel / die Online-Spiele",
      "translations": {
        "english": "online game",
        "ukrainian": "онлайн-гра",
        "polish": "gra online",
        "albanian": "lojë online",
        "arabic": "لعبة عبر الإنترنت",
        "italian": "gioco online",
        "serbian": "онлајн игра"
      }
    },
    {
      "german": "der Kontakt / die Kontakte",
      "translations": {
        "english": "contact",
        "ukrainian": "контакт",
        "polish": "kontakt",
        "albanian": "kontakt",
        "arabic": "اتصال",
        "italian": "contatto",
        "serbian": "контакт"
      }
    },
    {
      "german": "praktisch",
      "translations": {
        "english": "practical",
        "ukrainian": "практичний",
        "polish": "praktyczny",
        "albanian": "praktik",
        "arabic": "عملي",
        "italian": "pratico",
        "serbian": "практичан"
      }
    },
    {
      "german": "wichtig",
      "translations": {
        "english": "important",
        "ukrainian": "важливий",
        "polish": "ważny",
        "albanian": "i rëndësishëm",
        "arabic": "مهم",
        "italian": "importante",
        "serbian": "важан"
      }
    },
    {
      "german": "interessant",
      "translations": {
        "english": "interesting",
        "ukrainian": "цікавий",
        "polish": "interesujący",
        "albanian": "interesant",
        "arabic": "مثير للاهتمام",
        "italian": "interessante",
        "serbian": "занимљив"
      }
    },
    {
      "german": "spannend",
      "translations": {
        "english": "exciting, thrilling",
        "ukrainian": "захоплюючий",
        "polish": "ekscytujący",
        "albanian": "emocionues",
        "arabic": "مثير",
        "italian": "emozionante",
        "serbian": "узбудљив"
      }
    },
    {
      "german": "entspannend",
      "translations": {
        "english": "relaxing",
        "ukrainian": "розслаблюючий",
        "polish": "relaksujący",
        "albanian": "relaksues",
        "arabic": "مريح",
        "italian": "rilassante",
        "serbian": "опуштајући"
      }
    },
    {
      "german": "erreichbar",
      "translations": {
        "english": "reachable, available",
        "ukrainian": "доступний",
        "polish": "osiągalny, dostępny",
        "albanian": "i arritshëm",
        "arabic": "يمكن الوصول إليه",
        "italian": "raggiungibile",
        "serbian": "доступан"
      }
    },
    {
      "german": "täglich",
      "translations": {
        "english": "daily",
        "ukrainian": "щоденно",
        "polish": "codziennie",
        "albanian": "çdo ditë",
        "arabic": "يومياً",
        "italian": "quotidiano",
        "serbian": "дневно"
      }
    },
    {
      "german": "morgens",
      "translations": {
        "english": "in the morning",
        "ukrainian": "вранці",
        "polish": "rano",
        "albanian": "në mëngjes",
        "arabic": "في الصباح",
        "italian": "la mattina",
        "serbian": "ујутру"
      }
    },
    {
      "german": "mittags",
      "translations": {
        "english": "at noon, at lunchtime",
        "ukrainian": "опівдні",
        "polish": "w południe",
        "albanian": "në mesditë",
        "arabic": "في الظهيرة",
        "italian": "a mezzogiorno",
        "serbian": "у подне"
      }
    },
    {
      "german": "nachmittags",
      "translations": {
        "english": "in the afternoon",
        "ukrainian": "після обіду",
        "polish": "po południu",
        "albanian": "pasdite",
        "arabic": "بعد الظهر",
        "italian": "nel pomeriggio",
        "serbian": "поподне"
      }
    },
    {
      "german": "abends",
      "translations": {
        "english": "in the evening",
        "ukrainian": "ввечері",
        "polish": "wieczorem",
        "albanian": "në mbrëmje",
        "arabic": "في المساء",
        "italian": "la sera",
        "serbian": "увече"
      }
    },
    {
      "german": "nachts",
      "translations": {
        "english": "at night",
        "ukrainian": "вночі",
        "polish": "w nocy",
        "albanian": "natën",
        "arabic": "في الليل",
        "italian": "di notte",
        "serbian": "ноћу"
      }
    },
    {
      "german": "der Computer / die Computer",
      "translations": {
        "english": "computer",
        "ukrainian": "комп'ютер",
        "polish": "komputer",
        "albanian": "kompjuter",
        "arabic": "حاسوب",
        "italian": "computer",
        "serbian": "рачунар"
      }
    },
    {
      "german": "recherchieren",
      "translations": {
        "english": "to research",
        "ukrainian": "досліджувати",
        "polish": "badać",
        "albanian": "të kërkosh",
        "arabic": "يبحث",
        "italian": "fare ricerche",
        "serbian": "истраживати"
      }
    },
    {
      "german": "schicken",
      "translations": {
        "english": "to send",
        "ukrainian": "відправляти",
        "polish": "wysyłać",
        "albanian": "të dërgosh",
        "arabic": "يرسل",
        "italian": "mandare",
        "serbian": "послати"
      }
    },
    {
      "german": "die Datei / die Dateien",
      "translations": {
        "english": "file",
        "ukrainian": "файл",
        "polish": "plik",
        "albanian": "skedar",
        "arabic": "ملف",
        "italian": "file",
        "serbian": "датотека"
      }
    },
    {
      "german": "öffnen",
      "translations": {
        "english": "to open",
        "ukrainian": "відкривати",
        "polish": "otwierać",
        "albanian": "të hapësh",
        "arabic": "يفتح",
        "italian": "aprire",
        "serbian": "отворити"
      }
    },
    {
      "german": "schließen",
      "translations": {
        "english": "to close",
        "ukrainian": "закривати",
        "polish": "zamykać",
        "albanian": "të mbyllësh",
        "arabic": "يغلق",
        "italian": "chiudere",
        "serbian": "затворити"
      }
    },
    {
      "german": "drucken",
      "translations": {
        "english": "to print",
        "ukrainian": "друкувати",
        "polish": "drukować",
        "albanian": "të printosh",
        "arabic": "يطبع",
        "italian": "stampare",
        "serbian": "штампати"
      }
    },
    {
      "german": "speichern",
      "translations": {
        "english": "to save, to store",
        "ukrainian": "зберігати",
        "polish": "zapisywać",
        "albanian": "të ruash",
        "arabic": "يحفظ",
        "italian": "salvare",
        "serbian": "сачувати"
      }
    },
    {
      "german": "der Text / die Texte",
      "translations": {
        "english": "text",
        "ukrainian": "текст",
        "polish": "tekst",
        "albanian": "tekst",
        "arabic": "نص",
        "italian": "testo",
        "serbian": "текст"
      }
    },
    {
      "german": "das Programm / die Programme",
      "translations": {
        "english": "program",
        "ukrainian": "програма",
        "polish": "program",
        "albanian": "program",
        "arabic": "برنامج",
        "italian": "programma",
        "serbian": "програм"
      }
    },
    {
      "german": "der Betreff / die Betreffe",
      "translations": {
        "english": "subject (of email)",
        "ukrainian": "тема (листа)",
        "polish": "temat",
        "albanian": "subjekt",
        "arabic": "موضوع",
        "italian": "oggetto",
        "serbian": "предмет"
      }
    },
    {
      "german": "anhängen",
      "translations": {
        "english": "to attach",
        "ukrainian": "прикріплювати",
        "polish": "załączać",
        "albanian": "të bashkëngjitësh",
        "arabic": "يرفق",
        "italian": "allegare",
        "serbian": "приложити"
      }
    },
    {
      "german": "der Empfänger / die Empfänger",
      "translations": {
        "english": "recipient",
        "ukrainian": "отримувач",
        "polish": "odbiorca",
        "albanian": "marrës",
        "arabic": "متلقي",
        "italian": "destinatario",
        "serbian": "прималац"
      }
    },
    {
      "german": "auswählen",
      "translations": {
        "english": "to select, to choose",
        "ukrainian": "вибирати",
        "polish": "wybierać",
        "albanian": "të zgjedhësh",
        "arabic": "يختار",
        "italian": "selezionare",
        "serbian": "изабрати"
      }
    },
    {
      "german": "abschicken",
      "translations": {
        "english": "to send off",
        "ukrainian": "відправити",
        "polish": "wysłać",
        "albanian": "të dërgosh",
        "arabic": "يرسل",
        "italian": "inviare",
        "serbian": "послати"
      }
    },
    {
      "german": "die App / die Apps",
      "translations": {
        "english": "app",
        "ukrainian": "додаток",
        "polish": "aplikacja",
        "albanian": "aplikacion",
        "arabic": "تطبيق",
        "italian": "app",
        "serbian": "апликација"
      }
    },
    {
      "german": "die Software",
      "translations": {
        "english": "software",
        "ukrainian": "програмне забезпечення",
        "polish": "oprogramowanie",
        "albanian": "softuer",
        "arabic": "برمجيات",
        "italian": "software",
        "serbian": "софтвер"
      }
    },
    {
      "german": "nützlich",
      "translations": {
        "english": "useful",
        "ukrainian": "корисний",
        "polish": "użyteczny",
        "albanian": "i dobishëm",
        "arabic": "مفيد",
        "italian": "utile",
        "serbian": "користан"
      }
    },
    {
      "german": "das Problem / die Probleme",
      "translations": {
        "english": "problem",
        "ukrainian": "проблема",
        "polish": "problem",
        "albanian": "problem",
        "arabic": "مشكلة",
        "italian": "problema",
        "serbian": "проблем"
      }
    },
    {
      "german": "der Spielfilm / die Spielfilme",
      "translations": {
        "english": "feature film, movie",
        "ukrainian": "художній фільм",
        "polish": "film fabularny",
        "albanian": "film artistik",
        "arabic": "فيلم روائي",
        "italian": "film",
        "serbian": "играни филм"
      }
    },
    {
      "german": "der Animationsfilm / die Animationsfilme",
      "translations": {
        "english": "animated film",
        "ukrainian": "мультфільм",
        "polish": "film animowany",
        "albanian": "film i animuar",
        "arabic": "فيلم رسوم متحركة",
        "italian": "film d'animazione",
        "serbian": "анимирани филм"
      }
    },
    {
      "german": "das Quiz / die Quiz",
      "translations": {
        "english": "quiz",
        "ukrainian": "вікторина",
        "polish": "quiz",
        "albanian": "kuiz",
        "arabic": "مسابقة",
        "italian": "quiz",
        "serbian": "квиз"
      }
    },
    {
      "german": "der Krimi / die Krimis",
      "translations": {
        "english": "crime story, detective story",
        "ukrainian": "детектив",
        "polish": "kryminał",
        "albanian": "krim",
        "arabic": "فيلم بوليسي",
        "italian": "giallo",
        "serbian": "криминалистичка прича"
      }
    },
    {
      "german": "der Dokumentarfilm / die Dokumentarfilme",
      "translations": {
        "english": "documentary",
        "ukrainian": "документальний фільм",
        "polish": "film dokumentalny",
        "albanian": "dokumentar",
        "arabic": "فيلم وثائقي",
        "italian": "documentario",
        "serbian": "документарац"
      }
    },
    {
      "german": "die Sportsendung / die Sportsendungen",
      "translations": {
        "english": "sports program",
        "ukrainian": "спортивна програма",
        "polish": "program sportowy",
        "albanian": "program sportiv",
        "arabic": "برنامج رياضي",
        "italian": "programma sportivo",
        "serbian": "спортски програм"
      }
    },
    {
      "german": "die Serie / die Serien",
      "translations": {
        "english": "series",
        "ukrainian": "серіал",
        "polish": "serial",
        "albanian": "serial",
        "arabic": "مسلسل",
        "italian": "serie",
        "serbian": "серија"
      }
    },
    {
      "german": "die Talkshow / die Talkshows",
      "translations": {
        "english": "talk show",
        "ukrainian": "ток-шоу",
        "polish": "talk-show",
        "albanian": "tok-shou",
        "arabic": "برنامج حواري",
        "italian": "talk show",
        "serbian": "ток шоу"
      }
    },
    {
      "german": "die Sendung / die Sendungen",
      "translations": {
        "english": "program, broadcast",
        "ukrainian": "передача",
        "polish": "audycja",
        "albanian": "emisjon",
        "arabic": "برنامج",
        "italian": "trasmissione",
        "serbian": "програм, емисија"
      }
    },
    {
      "german": "bieten",
      "translations": {
        "english": "to offer",
        "ukrainian": "пропонувати",
        "polish": "oferować",
        "albanian": "të ofrojësh",
        "arabic": "يقدم",
        "italian": "offrire",
        "serbian": "понудити"
      }
    },
    {
      "german": "die Kindersendung / die Kindersendungen",
      "translations": {
        "english": "children's program",
        "ukrainian": "дитяча програма",
        "polish": "program dla dzieci",
        "albanian": "program për fëmijë",
        "arabic": "برنامج أطفال",
        "italian": "programma per bambini",
        "serbian": "дечији програм"
      }
    },
    {
      "german": "verstehen",
      "translations": {
        "english": "to understand",
        "ukrainian": "розуміти",
        "polish": "rozumieć",
        "albanian": "të kuptosh",
        "arabic": "يفهم",
        "italian": "capire",
        "serbian": "разумети"
      }
    },
    {
      "german": "das Wort / die Wörter",
      "translations": {
        "english": "word",
        "ukrainian": "слово",
        "polish": "słowo",
        "albanian": "fjalë",
        "arabic": "كلمة",
        "italian": "parola",
        "serbian": "реч"
      }
    },
    {
      "german": "international",
      "translations": {
        "english": "international",
        "ukrainian": "міжнародний",
        "polish": "międzynarodowy",
        "albanian": "ndërkombëtar",
        "arabic": "دولي",
        "italian": "internazionale",
        "serbian": "међународни"
      }
    },
    {
      "german": "der Rundfunkbeitrag / die Rundfunkbeiträge",
      "translations": {
        "english": "broadcasting fee",
        "ukrainian": "радіомовний внесок",
        "polish": "opłata za media publiczne",
        "albanian": "tarifa e transmetimit",
        "arabic": "رسوم البث",
        "italian": "canone radiotelevisivo",
        "serbian": "радио-дифузна претплата"
      }
    },
    {
      "german": "der Haushalt / die Haushalte",
      "translations": {
        "english": "household",
        "ukrainian": "домогосподарство",
        "polish": "gospodarstwo domowe",
        "albanian": "familje",
        "arabic": "أسرة",
        "italian": "nucleo familiare",
        "serbian": "домаћинство"
      }
    },
    {
      "german": "bezahlen",
      "translations": {
        "english": "to pay",
        "ukrainian": "платити",
        "polish": "płacić",
        "albanian": "të paguash",
        "arabic": "يدفع",
        "italian": "pagare",
        "serbian": "платити"
      }
    },
    {
      "german": "die Gebühr / die Gebühren",
      "translations": {
        "english": "fee, charge",
        "ukrainian": "збір, плата",
        "polish": "opłata",
        "albanian": "tarifë",
        "arabic": "رسوم",
        "italian": "tassa",
        "serbian": "накнада"
      }
    },
    {
      "german": "die Werbung / die Werbungen",
      "translations": {
        "english": "advertising, advertisement",
        "ukrainian": "реклама",
        "polish": "reklama",
        "albanian": "reklamë",
        "arabic": "إعلان",
        "italian": "pubblicità",
        "serbian": "реклама"
      }
    },
    {
      "german": "langsam",
      "translations": {
        "english": "slow, slowly",
        "ukrainian": "повільно",
        "polish": "wolno",
        "albanian": "ngadalë",
        "arabic": "ببطء",
        "italian": "lento",
        "serbian": "споро"
      }
    },
    {
      "german": "schnell",
      "translations": {
        "english": "fast, quickly",
        "ukrainian": "швидко",
        "polish": "szybko",
        "albanian": "shpejt",
        "arabic": "بسرعة",
        "italian": "veloce",
        "serbian": "брзо"
      }
    },
    {
      "german": "laut",
      "translations": {
        "english": "loud, loudly",
        "ukrainian": "голосно",
        "polish": "głośno",
        "albanian": "me zë të lartë",
        "arabic": "بصوت عالٍ",
        "italian": "forte",
        "serbian": "гласно"
      }
    },
    {
      "german": "leise",
      "translations": {
        "english": "quiet, quietly",
        "ukrainian": "тихо",
        "polish": "cicho",
        "albanian": "me zë të ulët",
        "arabic": "بهدوء",
        "italian": "piano",
        "serbian": "тихо"
      }
    },
    {
      "german": "müde",
      "translations": {
        "english": "tired",
        "ukrainian": "втомлений",
        "polish": "zmęczony",
        "albanian": "i lodhur",
        "arabic": "متعب",
        "italian": "stanco",
        "serbian": "уморан"
      }
    },
    {
      "german": "besuchen",
      "translations": {
        "english": "to visit",
        "ukrainian": "відвідувати",
        "polish": "odwiedzać",
        "albanian": "të vizitosh",
        "arabic": "يزور",
        "italian": "visitare",
        "serbian": "посетити"
      }
    },
    {
      "german": "die Internetseite / die Internetseiten",
      "translations": {
        "english": "website",
        "ukrainian": "веб-сайт",
        "polish": "strona internetowa",
        "albanian": "faqe interneti",
        "arabic": "صفحة إنترنت",
        "italian": "sito web",
        "serbian": "веб страница"
      }
    },
    {
      "german": "nutzen",
      "translations": {
        "english": "to use",
        "ukrainian": "використовувати",
        "polish": "używać",
        "albanian": "të përdorësh",
        "arabic": "يستخدم",
        "italian": "utilizzare",
        "serbian": "користити"
      }
    },
    {
      "german": "die Minute / die Minuten",
      "translations": {
        "english": "minute",
        "ukrainian": "хвилина",
        "polish": "minuta",
        "albanian": "minutë",
        "arabic": "دقيقة",
        "italian": "minuto",
        "serbian": "минут"
      }
    },
    {
      "german": "der Tag / die Tage",
      "translations": {
        "english": "day",
        "ukrainian": "день",
        "polish": "dzień",
        "albanian": "ditë",
        "arabic": "يوم",
        "italian": "giorno",
        "serbian": "дан"
      }
    },
    {
      "german": "kontrollieren",
      "translations": {
        "english": "to check, to control",
        "ukrainian": "контролювати",
        "polish": "kontrolować",
        "albanian": "të kontrollosh",
        "arabic": "يراقب",
        "italian": "controllare",
        "serbian": "проверити"
      }
    },
    {
      "german": "durchschnittlich",
      "translations": {
        "english": "average, on average",
        "ukrainian": "в середньому",
        "polish": "średnio",
        "albanian": "mesatarisht",
        "arabic": "في المتوسط",
        "italian": "in media",
        "serbian": "просечно"
      }
    },
    {
      "german": "die Stunde / die Stunden",
      "translations": {
        "english": "hour",
        "ukrainian": "година",
        "polish": "godzina",
        "albanian": "orë",
        "arabic": "ساعة",
        "italian": "ora",
        "serbian": "сат"
      }
    },
    {
      "german": "das Auto / die Autos",
      "translations": {
        "english": "car",
        "ukrainian": "автомобіль",
        "polish": "samochód",
        "albanian": "makinë",
        "arabic": "سيارة",
        "italian": "auto",
        "serbian": "ауто"
      }
    },
    {
      "german": "der Freund / die Freunde",
      "translations": {
        "english": "friend, boyfriend",
        "ukrainian": "друг",
        "polish": "przyjaciel",
        "albanian": "shok",
        "arabic": "صديق",
        "italian": "amico",
        "serbian": "пријатељ"
      }
    },
    {
      "german": "kaufen",
      "translations": {
        "english": "to buy",
        "ukrainian": "купувати",
        "polish": "kupować",
        "albanian": "të blesh",
        "arabic": "يشتري",
        "italian": "comprare",
        "serbian": "купити"
      }
    },
    {
      "german": "anrufen",
      "translations": {
        "english": "to call",
        "ukrainian": "телефонувати",
        "polish": "dzwonić",
        "albanian": "të telefonosh",
        "arabic": "يتصل",
        "italian": "chiamare",
        "serbian": "позвати"
      }
    },
    {
      "german": "senden",
      "translations": {
        "english": "to send",
        "ukrainian": "відправляти",
        "polish": "wysyłać",
        "albanian": "të dërgosh",
        "arabic": "يرسل",
        "italian": "inviare",
        "serbian": "послати"
      }
    },
    {
      "german": "der Anhang / die Anhänge",
      "translations": {
        "english": "attachment",
        "ukrainian": "вкладення",
        "polish": "załącznik",
        "albanian": "bashkëngjitje",
        "arabic": "مرفق",
        "italian": "allegato",
        "serbian": "прилог"
      }
    },
    {
      "german": "wählen",
      "translations": {
        "english": "to choose, to select",
        "ukrainian": "обирати",
        "polish": "wybierać",
        "albanian": "të zgjedhësh",
        "arabic": "يختار",
        "italian": "scegliere",
        "serbian": "изабрати"
      }
    },
    {
      "german": "einschalten",
      "translations": {
        "english": "to turn on",
        "ukrainian": "вмикати",
        "polish": "włączać",
        "albanian": "të ndezësh",
        "arabic": "يشغّل",
        "italian": "accendere",
        "serbian": "укључити"
      }
    },
    {
      "german": "anschließen",
      "translations": {
        "english": "to connect",
        "ukrainian": "підключати",
        "polish": "podłączać",
        "albanian": "të lidhësh",
        "arabic": "يوصل",
        "italian": "collegare",
        "serbian": "повезати"
      }
    },
    {
      "german": "das Kabel / die Kabel",
      "translations": {
        "english": "cable",
        "ukrainian": "кабель",
        "polish": "kabel",
        "albanian": "kabllo",
        "arabic": "كابل",
        "italian": "cavo",
        "serbian": "кабл"
      }
    },
    {
      "german": "kosten",
      "translations": {
        "english": "to cost",
        "ukrainian": "коштувати",
        "polish": "kosztować",
        "albanian": "të kushtojë",
        "arabic": "يكلف",
        "italian": "costare",
        "serbian": "коштати"
      }
    },
    {
      "german": "der Monat / die Monate",
      "translations": {
        "english": "month",
        "ukrainian": "місяць",
        "polish": "miesiąc",
        "albanian": "muaj",
        "arabic": "شهر",
        "italian": "mese",
        "serbian": "месец"
      }
    },
    {
      "german": "benutzen",
      "translations": {
        "english": "to use",
        "ukrainian": "використовувати",
        "polish": "używać",
        "albanian": "të përdorësh",
        "arabic": "يستخدم",
        "italian": "usare",
        "serbian": "користити"
      }
    },
    {
      "german": "die Freundin / die Freundinnen",
      "translations": {
        "english": "female friend, girlfriend",
        "ukrainian": "подруга",
        "polish": "przyjaciółka",
        "albanian": "shoqe",
        "arabic": "صديقة",
        "italian": "amica",
        "serbian": "пријатељица"
      }
    },
    {
      "german": "erreichen",
      "translations": {
        "english": "to reach",
        "ukrainian": "досягати",
        "polish": "osiągać",
        "albanian": "të arrish",
        "arabic": "يصل",
        "italian": "raggiungere",
        "serbian": "достићи"
      }
    },
    {
      "german": "die Überschrift / die Überschriften",
      "translations": {
        "english": "heading, title",
        "ukrainian": "заголовок",
        "polish": "nagłówek",
        "albanian": "titull",
        "arabic": "عنوان",
        "italian": "titolo",
        "serbian": "наслов"
      }
    },
    {
      "german": "die Politik",
      "translations": {
        "english": "politics",
        "ukrainian": "політика",
        "polish": "polityka",
        "albanian": "politikë",
        "arabic": "سياسة",
        "italian": "politica",
        "serbian": "политика"
      }
    },
    {
      "german": "die Wirtschaft",
      "translations": {
        "english": "economy",
        "ukrainian": "економіка",
        "polish": "gospodarka",
        "albanian": "ekonomi",
        "arabic": "اقتصاد",
        "italian": "economia",
        "serbian": "економија"
      }
    },
    {
      "german": "die Kultur",
      "translations": {
        "english": "culture",
        "ukrainian": "культура",
        "polish": "kultura",
        "albanian": "kulturë",
        "arabic": "ثقافة",
        "italian": "cultura",
        "serbian": "култура"
      }
    },
    {
      "german": "die Bildung",
      "translations": {
        "english": "education",
        "ukrainian": "освіта",
        "polish": "edukacja",
        "albanian": "arsim",
        "arabic": "تعليم",
        "italian": "istruzione",
        "serbian": "образовање"
      }
    },
    {
      "german": "der Sport",
      "translations": {
        "english": "sport",
        "ukrainian": "спорт",
        "polish": "sport",
        "albanian": "sport",
        "arabic": "رياضة",
        "italian": "sport",
        "serbian": "спорт"
      }
    },
    {
      "german": "der Artikel / die Artikel",
      "translations": {
        "english": "article",
        "ukrainian": "стаття",
        "polish": "artykuł",
        "albanian": "artikull",
        "arabic": "مقال",
        "italian": "articolo",
        "serbian": "чланак"
      }
    },
    {
      "german": "einladen",
      "translations": {
        "english": "to invite",
        "ukrainian": "запрошувати",
        "polish": "zapraszać",
        "albanian": "të ftosh",
        "arabic": "يدعو",
        "italian": "invitare",
        "serbian": "позвати"
      }
    },
    {
      "german": "helfen",
      "translations": {
        "english": "to help",
        "ukrainian": "допомагати",
        "polish": "pomagać",
        "albanian": "të ndihmosh",
        "arabic": "يساعد",
        "italian": "aiutare",
        "serbian": "помоћи"
      }
    },
    {
      "german": "die Prüfung / die Prüfungen",
      "translations": {
        "english": "exam, test",
        "ukrainian": "іспит",
        "polish": "egzamin",
        "albanian": "provim",
        "arabic": "امتحان",
        "italian": "esame",
        "serbian": "испит"
      }
    },
    {
      "german": "der Verkehr",
      "translations": {
        "english": "traffic",
        "ukrainian": "рух",
        "polish": "ruch",
        "albanian": "trafik",
        "arabic": "حركة المرور",
        "italian": "traffico",
        "serbian": "саобраћај"
      }
    },
    {
      "german": "die Straße / die Straßen",
      "translations": {
        "english": "street",
        "ukrainian": "вулиця",
        "polish": "ulica",
        "albanian": "rrugë",
        "arabic": "شارع",
        "italian": "strada",
        "serbian": "улица"
      }
    },
    {
      "german": "beantworten",
      "translations": {
        "english": "to answer",
        "ukrainian": "відповідати",
        "polish": "odpowiadać",
        "albanian": "të përgjigjesh",
        "arabic": "يجيب",
        "italian": "rispondere",
        "serbian": "одговорити"
      }
    },
    {
      "german": "die Frage / die Fragen",
      "translations": {
        "english": "question",
        "ukrainian": "питання",
        "polish": "pytanie",
        "albanian": "pyetje",
        "arabic": "сؤال",
        "italian": "domanda",
        "serbian": "питање"
      }
    },
    {
      "german": "warum",
      "translations": {
        "english": "why",
        "ukrainian": "чому",
        "polish": "dlaczego",
        "albanian": "pse",
        "arabic": "لماذا",
        "italian": "perché",
        "serbian": "зашто"
      }
    },
    {
      "german": "weil",
      "translations": {
        "english": "because",
        "ukrainian": "тому що",
        "polish": "ponieważ",
        "albanian": "sepse",
        "arabic": "لأن",
        "italian": "perché",
        "serbian": "јер"
      }
    },
    {
      "german": "dass",
      "translations": {
        "english": "that",
        "ukrainian": "що",
        "polish": "że",
        "albanian": "që",
        "arabic": "أن",
        "italian": "che",
        "serbian": "да"
      }
    },
    {
      "german": "zeigen",
      "translations": {
        "english": "to show",
        "ukrainian": "показувати",
        "polish": "pokazywać",
        "albanian": "të tregosh",
        "arabic": "يظهر",
        "italian": "mostrare",
        "serbian": "показати"
      }
    },
    {
      "german": "der Drucker / die Drucker",
      "translations": {
        "english": "printer",
        "ukrainian": "принтер",
        "polish": "drukarka",
        "albanian": "printer",
        "arabic": "طابعة",
        "italian": "stampante",
        "serbian": "штампач"
      }
    },
    {
      "german": "der Scanner / die Scanner",
      "translations": {
        "english": "scanner",
        "ukrainian": "сканер",
        "polish": "skaner",
        "albanian": "skaner",
        "arabic": "ماسح ضوئي",
        "italian": "scanner",
        "serbian": "скенер"
      }
    },
    {
      "german": "herunterladen",
      "translations": {
        "english": "to download",
        "ukrainian": "завантажувати",
        "polish": "pobierać",
        "albanian": "të shkarkosh",
        "arabic": "ينزّل",
        "italian": "scaricare",
        "serbian": "преузети"
      }
    },
    {
      "german": "scannen",
      "translations": {
        "english": "to scan",
        "ukrainian": "сканувати",
        "polish": "skanować",
        "albanian": "të skanosh",
        "arabic": "يمسح ضوئياً",
        "italian": "scansionare",
        "serbian": "скенирати"
      }
    },
    {
      "german": "löschen",
      "translations": {
        "english": "to delete",
        "ukrainian": "видаляти",
        "polish": "usuwać",
        "albanian": "të fshish",
        "arabic": "يحذف",
        "italian": "cancellare",
        "serbian": "обрисати"
      }
    },
    {
      "german": "aufladen",
      "translations": {
        "english": "to charge, to recharge",
        "ukrainian": "заряджати",
        "polish": "ładować",
        "albanian": "të ngarkosh",
        "arabic": "يشحن",
        "italian": "caricare",
        "serbian": "напунити"
      }
    },
    {
      "german": "das Gerät / die Geräte",
      "translations": {
        "english": "device",
        "ukrainian": "пристрій",
        "polish": "urządzenie",
        "albanian": "pajisje",
        "arabic": "جهاز",
        "italian": "dispositivo",
        "serbian": "уређај"
      }
    },
    {
      "german": "reparieren",
      "translations": {
        "english": "to repair",
        "ukrainian": "ремонтувати",
        "polish": "naprawiać",
        "albanian": "të riparosh",
        "arabic": "يصلح",
        "italian": "riparare",
        "serbian": "поправити"
      }
    },
    {
      "german": "der Termin / die Termine",
      "translations": {
        "english": "appointment",
        "ukrainian": "зустріч",
        "polish": "termin",
        "albanian": "takim",
        "arabic": "موعد",
        "italian": "appuntamento",
        "serbian": "термин"
      }
    },
    {
      "german": "eintragen",
      "translations": {
        "english": "to enter, to register",
        "ukrainian": "вносити",
        "polish": "wpisywać",
        "albanian": "të regjistrosh",
        "arabic": "يسجل",
        "italian": "inserire",
        "serbian": "унети"
      }
    },
    {
      "german": "bearbeiten",
      "translations": {
        "english": "to edit, to process",
        "ukrainian": "обробляти",
        "polish": "edytować",
        "albanian": "të përpunosh",
        "arabic": "يعدّل",
        "italian": "elaborare",
        "serbian": "уредити"
      }
    },
    {
      "german": "das Bild / die Bilder",
      "translations": {
        "english": "picture, image",
        "ukrainian": "зображення",
        "polish": "obraz",
        "albanian": "imazh",
        "arabic": "صورة",
        "italian": "immagine",
        "serbian": "слика"
      }
    },
    {
      "german": "häufig",
      "translations": {
        "english": "often, frequently",
        "ukrainian": "часто",
        "polish": "często",
        "albanian": "shpesh",
        "arabic": "غالباً",
        "italian": "spesso",
        "serbian": "често"
      }
    },
    {
      "german": "selten",
      "translations": {
        "english": "rarely, seldom",
        "ukrainian": "рідко",
        "polish": "rzadko",
        "albanian": "rrallë",
        "arabic": "نادراً",
        "italian": "raramente",
        "serbian": "ретко"
      }
    },
    {
      "german": "nie",
      "translations": {
        "english": "never",
        "ukrainian": "ніколи",
        "polish": "nigdy",
        "albanian": "kurrë",
        "arabic": "أبداً",
        "italian": "mai",
        "serbian": "никад"
      }
    }
  ],
  "3": [
    {
      "german": "das Wochenende / die Wochenenden",
      "translations": {
        "english": "weekend",
        "ukrainian": "вихідні",
        "polish": "weekend",
        "albanian": "fundjavë",
        "arabic": "عطلة نهاية الأسبوع",
        "italian": "fine settimana",
        "serbian": "викенд"
      }
    },
    {
      "german": "die Einkaufsstraße / die Einkaufsstraßen",
      "translations": {
        "english": "shopping street",
        "ukrainian": "торгова вулиця",
        "polish": "ulica handlowa",
        "albanian": "rruga e blerjeve",
        "arabic": "شارع التسوق",
        "italian": "via dello shopping",
        "serbian": "улица за куповину"
      }
    },
    {
      "german": "die Kaffeekanne / die Kaffeekannen",
      "translations": {
        "english": "coffee pot",
        "ukrainian": "кавник",
        "polish": "dzbanek do kawy",
        "albanian": "ibrik kafeje",
        "arabic": "إبريق القهوة",
        "italian": "caffettiera",
        "serbian": "посуда за кафу"
      }
    },
    {
      "german": "die Gabel / die Gabeln",
      "translations": {
        "english": "fork",
        "ukrainian": "виделка",
        "polish": "widelec",
        "albanian": "pirun",
        "arabic": "شوكة",
        "italian": "forchetta",
        "serbian": "виљушка"
      }
    },
    {
      "german": "die Tasse / die Tassen",
      "translations": {
        "english": "cup",
        "ukrainian": "чашка",
        "polish": "filiżanka",
        "albanian": "filxhan",
        "arabic": "فنجان",
        "italian": "tazza",
        "serbian": "шоља"
      }
    },
    {
      "german": "der Löffel / die Löffel",
      "translations": {
        "english": "spoon",
        "ukrainian": "ложка",
        "polish": "łyżka",
        "albanian": "lugë",
        "arabic": "ملعقة",
        "italian": "cucchiaio",
        "serbian": "кашика"
      }
    },
    {
      "german": "der Teller / die Teller",
      "translations": {
        "english": "plate",
        "ukrainian": "тарілка",
        "polish": "talerz",
        "albanian": "pjatë",
        "arabic": "طبق",
        "italian": "piatto",
        "serbian": "тањир"
      }
    },
    {
      "german": "das Messer / die Messer",
      "translations": {
        "english": "knife",
        "ukrainian": "ніж",
        "polish": "nóż",
        "albanian": "thikë",
        "arabic": "سكين",
        "italian": "coltello",
        "serbian": "нож"
      }
    },
    {
      "german": "die Serviette / die Servietten",
      "translations": {
        "english": "napkin",
        "ukrainian": "серветка",
        "polish": "serwetka",
        "albanian": "pecetë",
        "arabic": "منديل",
        "italian": "tovagliolo",
        "serbian": "салвета"
      }
    },
    {
      "german": "die Katze / die Katzen",
      "translations": {
        "english": "cat",
        "ukrainian": "кіт/кішка",
        "polish": "kot",
        "albanian": "mace",
        "arabic": "قطة",
        "italian": "gatto",
        "serbian": "мачка"
      }
    },
    {
      "german": "der Tisch / die Tische",
      "translations": {
        "english": "table",
        "ukrainian": "стіл",
        "polish": "stół",
        "albanian": "tryezë",
        "arabic": "طاولة",
        "italian": "tavolo",
        "serbian": "сто"
      }
    },
    {
      "german": "der Stuhl / die Stühle",
      "translations": {
        "english": "chair",
        "ukrainian": "стілець",
        "polish": "krzesło",
        "albanian": "karrige",
        "arabic": "كرسي",
        "italian": "sedia",
        "serbian": "столица"
      }
    },
    {
      "german": "die Apotheke / die Apotheken",
      "translations": {
        "english": "pharmacy",
        "ukrainian": "аптека",
        "polish": "apteka",
        "albanian": "farmaci",
        "arabic": "صيدلية",
        "italian": "farmacia",
        "serbian": "апотека"
      }
    },
    {
      "german": "das Café / die Cafés",
      "translations": {
        "english": "café",
        "ukrainian": "кафе",
        "polish": "kawiarnia",
        "albanian": "kafe",
        "arabic": "مقهى",
        "italian": "caffè",
        "serbian": "кафић"
      }
    },
    {
      "german": "die Geschäfte / die Geschäfte",
      "translations": {
        "english": "shops/stores",
        "ukrainian": "магазини",
        "polish": "sklepy",
        "albanian": "dyqane",
        "arabic": "متاجر",
        "italian": "negozi",
        "serbian": "продавнице"
      }
    },
    {
      "german": "der Sonnenschirm / die Sonnenschirme",
      "translations": {
        "english": "parasol/sunshade",
        "ukrainian": "парасолька від сонця",
        "polish": "parasol słoneczny",
        "albanian": "ombrellë dielli",
        "arabic": "مظلة شمسية",
        "italian": "ombrellone",
        "serbian": "сунцобран"
      }
    },
    {
      "german": "der Boden / die Böden",
      "translations": {
        "english": "floor/ground",
        "ukrainian": "підлога/земля",
        "polish": "podłoga/ziemia",
        "albanian": "dysheme/tokë",
        "arabic": "أرضية",
        "italian": "pavimento/suolo",
        "serbian": "под/земља"
      }
    },
    {
      "german": "das Gewitter / die Gewitter",
      "translations": {
        "english": "thunderstorm",
        "ukrainian": "гроза",
        "polish": "burza",
        "albanian": "stuhi me bubullima",
        "arabic": "عاصفة رعدية",
        "italian": "temporale",
        "serbian": "олуја са грмљавином"
      }
    },
    {
      "german": "der Sturm / die Stürme",
      "translations": {
        "english": "storm",
        "ukrainian": "шторм/буря",
        "polish": "burza/sztorm",
        "albanian": "stuhi",
        "arabic": "عاصفة",
        "italian": "tempesta",
        "serbian": "олуја"
      }
    },
    {
      "german": "das Chaos",
      "translations": {
        "english": "chaos",
        "ukrainian": "хаос",
        "polish": "chaos",
        "albanian": "kaos",
        "arabic": "فوضى",
        "italian": "caos",
        "serbian": "хаос"
      }
    },
    {
      "german": "die Erkältung / die Erkältungen",
      "translations": {
        "english": "cold (illness)",
        "ukrainian": "застуда",
        "polish": "przeziębienie",
        "albanian": "ftohje",
        "arabic": "نزلة برد",
        "italian": "raffreddore",
        "serbian": "прехлада"
      }
    },
    {
      "german": "das Restaurant / die Restaurants",
      "translations": {
        "english": "restaurant",
        "ukrainian": "ресторан",
        "polish": "restauracja",
        "albanian": "restorant",
        "arabic": "مطعم",
        "italian": "ristorante",
        "serbian": "ресторан"
      }
    },
    {
      "german": "die Speisekarte / die Speisekarten",
      "translations": {
        "english": "menu",
        "ukrainian": "меню",
        "polish": "menu/karta dań",
        "albanian": "meny",
        "arabic": "قائمة الطعام",
        "italian": "menù",
        "serbian": "јеловник"
      }
    },
    {
      "german": "die Vorspeise / die Vorspeisen",
      "translations": {
        "english": "appetizer/starter",
        "ukrainian": "закуска",
        "polish": "przystawka",
        "albanian": "antipastë",
        "arabic": "مقبلات",
        "italian": "antipasto",
        "serbian": "предјело"
      }
    },
    {
      "german": "die Hauptspeise / die Hauptspeisen",
      "translations": {
        "english": "main course",
        "ukrainian": "основна страва",
        "polish": "danie główne",
        "albanian": "pjata kryesore",
        "arabic": "الطبق الرئيسي",
        "italian": "piatto principale",
        "serbian": "главно јело"
      }
    },
    {
      "german": "die Nachspeise / die Nachspeisen",
      "translations": {
        "english": "dessert",
        "ukrainian": "десерт",
        "polish": "deser",
        "albanian": "embëlsirë",
        "arabic": "حلوى",
        "italian": "dolce",
        "serbian": "десерт"
      }
    },
    {
      "german": "die Kartoffelsuppe / die Kartoffelsuppen",
      "translations": {
        "english": "potato soup",
        "ukrainian": "картопляний суп",
        "polish": "zupa ziemniaczana",
        "albanian": "supë patate",
        "arabic": "شوربة البطاطس",
        "italian": "zuppa di patate",
        "serbian": "супа од кромпира"
      }
    },
    {
      "german": "die Tomaten-Basilikum-Suppe / die Tomaten-Basilikum-Suppen",
      "translations": {
        "english": "tomato basil soup",
        "ukrainian": "томатний суп з базиліком",
        "polish": "zupa pomidorowa z bazylią",
        "albanian": "supë domatesh me bozllok",
        "arabic": "شوربة الطماطم بالريحان",
        "italian": "zuppa di pomodoro e basilico",
        "serbian": "супа од парадајза са босиљком"
      }
    },
    {
      "german": "der italienische Salat / die italienischen Salate",
      "translations": {
        "english": "Italian salad",
        "ukrainian": "італійський салат",
        "polish": "sałatka włoska",
        "albanian": "sallatë italiane",
        "arabic": "سلطة إيطالية",
        "italian": "insalata italiana",
        "serbian": "италијанска салата"
      }
    },
    {
      "german": "das Matjesfilet / die Matjesfilets",
      "translations": {
        "english": "matjes herring fillet",
        "ukrainian": "філе оселедця",
        "polish": "filet z śledzia matjesa",
        "albanian": "file harenge",
        "arabic": "شرائح الرنجة",
        "italian": "filetto di aringa",
        "serbian": "филе харинге"
      }
    },
    {
      "german": "der Tiramisu / die Tiramisu",
      "translations": {
        "english": "tiramisu",
        "ukrainian": "тірамісу",
        "polish": "tiramisu",
        "albanian": "tiramisu",
        "arabic": "تيراميسو",
        "italian": "tiramisù",
        "serbian": "тирамису"
      }
    },
    {
      "german": "das Mineralwasser / die Mineralwässer",
      "translations": {
        "english": "mineral water",
        "ukrainian": "мінеральна вода",
        "polish": "woda mineralna",
        "albanian": "ujë mineral",
        "arabic": "ماء معدني",
        "italian": "acqua minerale",
        "serbian": "минерална вода"
      }
    },
    {
      "german": "der Apfelsaft / die Apfelsäfte",
      "translations": {
        "english": "apple juice",
        "ukrainian": "яблучний сік",
        "polish": "sok jabłkowy",
        "albanian": "lëng molle",
        "arabic": "عصير التفاح",
        "italian": "succo di mela",
        "serbian": "сок од јабуке"
      }
    },
    {
      "german": "der Orangensaft / die Orangensäfte",
      "translations": {
        "english": "orange juice",
        "ukrainian": "апельсиновий сік",
        "polish": "sok pomarańczowy",
        "albanian": "lëng portokalli",
        "arabic": "عصير البرتقال",
        "italian": "succo d'arancia",
        "serbian": "сок од поморанџе"
      }
    },
    {
      "german": "die Fanta/Cola/Sprite",
      "translations": {
        "english": "Fanta/Coke/Sprite",
        "ukrainian": "Фанта/Кола/Спрайт",
        "polish": "Fanta/Cola/Sprite",
        "albanian": "Fanta/Cola/Sprite",
        "arabic": "فانتا/كولا/سبرايت",
        "italian": "Fanta/Cola/Sprite",
        "serbian": "Фанта/Кола/Спрајт"
      }
    },
    {
      "german": "das Bier / die Biere",
      "translations": {
        "english": "beer",
        "ukrainian": "пиво",
        "polish": "piwo",
        "albanian": "birrë",
        "arabic": "بيرة",
        "italian": "birra",
        "serbian": "пиво"
      }
    },
    {
      "german": "der Rotwein / die Rotweine",
      "translations": {
        "english": "red wine",
        "ukrainian": "червоне вино",
        "polish": "czerwone wino",
        "albanian": "verë e kuqe",
        "arabic": "نبيذ أحمر",
        "italian": "vino rosso",
        "serbian": "црвено вино"
      }
    },
    {
      "german": "der Weißwein / die Weißweine",
      "translations": {
        "english": "white wine",
        "ukrainian": "біле вино",
        "polish": "białe wino",
        "albanian": "verë e bardhë",
        "arabic": "نبيذ أبيض",
        "italian": "vino bianco",
        "serbian": "бело вино"
      }
    },
    {
      "german": "der Sekt / die Sekte",
      "translations": {
        "english": "sparkling wine",
        "ukrainian": "ігристе вино",
        "polish": "wino musujące",
        "albanian": "verë shkumuese",
        "arabic": "نبيذ فوار",
        "italian": "spumante",
        "serbian": "пенушаво вино"
      }
    },
    {
      "german": "der Kaffee / die Kaffees",
      "translations": {
        "english": "coffee",
        "ukrainian": "кава",
        "polish": "kawa",
        "albanian": "kafe",
        "arabic": "قهوة",
        "italian": "caffè",
        "serbian": "кафа"
      }
    },
    {
      "german": "der Cappuccino / die Cappuccinos",
      "translations": {
        "english": "cappuccino",
        "ukrainian": "капучіно",
        "polish": "cappuccino",
        "albanian": "kapuçino",
        "arabic": "كابتشينو",
        "italian": "cappuccino",
        "serbian": "капућино"
      }
    },
    {
      "german": "der Espresso / die Espressi",
      "translations": {
        "english": "espresso",
        "ukrainian": "еспресо",
        "polish": "espresso",
        "albanian": "espreso",
        "arabic": "إسبريسو",
        "italian": "espresso",
        "serbian": "еспрессо"
      }
    },
    {
      "german": "der Tee / die Tees",
      "translations": {
        "english": "tea",
        "ukrainian": "чай",
        "polish": "herbata",
        "albanian": "çaj",
        "arabic": "شاي",
        "italian": "tè",
        "serbian": "чај"
      }
    },
    {
      "german": "die Rechnung / die Rechnungen",
      "translations": {
        "english": "bill/check",
        "ukrainian": "рахунок",
        "polish": "rachunek",
        "albanian": "faturë",
        "arabic": "فاتورة",
        "italian": "conto",
        "serbian": "билл/чецк"
      }
    },
    {
      "german": "das Trinkgeld / die Trinkgelder",
      "translations": {
        "english": "tip/gratuity",
        "ukrainian": "чайові",
        "polish": "napiwek",
        "albanian": "bakshish",
        "arabic": "بقشيش",
        "italian": "mancia",
        "serbian": "тип/гратуити"
      }
    },
    {
      "german": "die Reservierung / die Reservierungen",
      "translations": {
        "english": "reservation",
        "ukrainian": "бронювання",
        "polish": "rezerwacja",
        "albanian": "rezervim",
        "arabic": "حجز",
        "italian": "prenotazione",
        "serbian": "ресерватион"
      }
    },
    {
      "german": "die Bestellung / die Bestellungen",
      "translations": {
        "english": "order",
        "ukrainian": "замовлення",
        "polish": "zamówienie",
        "albanian": "porosi",
        "arabic": "طلب",
        "italian": "ordinazione",
        "serbian": "ордер"
      }
    },
    {
      "german": "das Gericht / die Gerichte",
      "translations": {
        "english": "dish/meal",
        "ukrainian": "страва",
        "polish": "danie/potrawa",
        "albanian": "pjatë",
        "arabic": "طبق",
        "italian": "piatto",
        "serbian": "диш/меал"
      }
    },
    {
      "german": "der Kellner / die Kellner",
      "translations": {
        "english": "waiter",
        "ukrainian": "офіціант",
        "polish": "kelner",
        "albanian": "kamarier",
        "arabic": "نادل",
        "italian": "cameriere",
        "serbian": "конобар"
      }
    },
    {
      "german": "die Bedienung / die Bedienungen",
      "translations": {
        "english": "service/waiter",
        "ukrainian": "обслуговування",
        "polish": "obsługa",
        "albanian": "shërbim",
        "arabic": "خدمة",
        "italian": "servizio",
        "serbian": "сервице/ваитер"
      }
    },
    {
      "german": "die Tischdecke / die Tischdecken",
      "translations": {
        "english": "tablecloth",
        "ukrainian": "скатертина",
        "polish": "obrus",
        "albanian": "mbulojë tavoline",
        "arabic": "مفرش طاولة",
        "italian": "tovaglia",
        "serbian": "таблецлотх"
      }
    },
    {
      "german": "die Salatschüssel / die Salatschüsseln",
      "translations": {
        "english": "salad bowl",
        "ukrainian": "салатниця",
        "polish": "miska do sałatek",
        "albanian": "tas sallate",
        "arabic": "وعاء السلطة",
        "italian": "insalatiera",
        "serbian": "салад бовл"
      }
    },
    {
      "german": "das Salatbesteck / die Salatbestecke",
      "translations": {
        "english": "salad servers",
        "ukrainian": "прибори для салату",
        "polish": "sztućce do sałaty",
        "albanian": "takëm sallate",
        "arabic": "أدوات تقديم السلطة",
        "italian": "posate per insalata",
        "serbian": "салад сервер"
      }
    },
    {
      "german": "der Essig / die Essige",
      "translations": {
        "english": "vinegar",
        "ukrainian": "оцет",
        "polish": "ocet",
        "albanian": "uthull",
        "arabic": "خل",
        "italian": "aceto",
        "serbian": "винегар"
      }
    },
    {
      "german": "der Zuckerstreuer / die Zuckerstreuer",
      "translations": {
        "english": "sugar shaker",
        "ukrainian": "цукорниця",
        "polish": "cukierniczka",
        "albanian": "shpërndarës sheqeri",
        "arabic": "رشاشة السكر",
        "italian": "zuccheriera",
        "serbian": "сугар шакер"
      }
    },
    {
      "german": "die Stäbchen / die Stäbchen",
      "translations": {
        "english": "chopsticks",
        "ukrainian": "палички для їжі",
        "polish": "pałeczki",
        "albanian": "shkopinj",
        "arabic": "عيدان الأكل",
        "italian": "bacchette",
        "serbian": "чопстицк"
      }
    },
    {
      "german": "der Eierbecher / die Eierbecher",
      "translations": {
        "english": "egg cup",
        "ukrainian": "підставка для яєць",
        "polish": "kieliszek do jajek",
        "albanian": "filxhan veze",
        "arabic": "كأس البيض",
        "italian": "portauovo",
        "serbian": "егг цуп"
      }
    },
    {
      "german": "der Flaschenöffner / die Flaschenöffner",
      "translations": {
        "english": "bottle opener",
        "ukrainian": "відкривачка для пляшок",
        "polish": "otwieracz do butelek",
        "albanian": "hapës shishesh",
        "arabic": "فتاحة زجاجات",
        "italian": "apribottiglie",
        "serbian": "боттле опенер"
      }
    },
    {
      "german": "die Teekanne / die Teekannen",
      "translations": {
        "english": "teapot",
        "ukrainian": "чайник",
        "polish": "dzbanek do herbaty",
        "albanian": "ibrik çaji",
        "arabic": "إبريق الشاي",
        "italian": "teiera",
        "serbian": "теапот"
      }
    },
    {
      "german": "die Treppe / die Treppen",
      "translations": {
        "english": "staircase",
        "ukrainian": "сходи",
        "polish": "schody",
        "albanian": "shkallë",
        "arabic": "السلالم",
        "italian": "scala",
        "serbian": "стаирцасе"
      }
    }
  ],
  "4": [
    {
      "german": "die Schule / die Schulen",
      "translations": {
        "english": "school",
        "ukrainian": "школа",
        "polish": "szkoła",
        "albanian": "shkolla",
        "arabic": "المدرسة",
        "italian": "scuola",
        "serbian": "школа"
      }
    },
    {
      "german": "der Unterricht",
      "translations": {
        "english": "lesson, class",
        "ukrainian": "урок",
        "polish": "lekcja",
        "albanian": "mësimi",
        "arabic": "الدرس",
        "italian": "lezione",
        "serbian": "лессон, цла"
      }
    },
    {
      "german": "der Schulhof / die Schulhöfe",
      "translations": {
        "english": "schoolyard",
        "ukrainian": "шкільний двір",
        "polish": "boisko szkolne",
        "albanian": "oborri i shkollës",
        "arabic": "ساحة المدرسة",
        "italian": "cortile della scuola",
        "serbian": "счоолиард"
      }
    },
    {
      "german": "das Fach / die Fächer",
      "translations": {
        "english": "subject",
        "ukrainian": "предмет",
        "polish": "przedmiot",
        "albanian": "lënda",
        "arabic": "المادة الدراسية",
        "italian": "materia",
        "serbian": "предмет"
      }
    },
    {
      "german": "die Mathematik (Mathe) (Singular)",
      "translations": {
        "english": "mathematics (math)",
        "ukrainian": "математика",
        "polish": "matematyka",
        "albanian": "matematika",
        "arabic": "الرياضيات",
        "italian": "matematica",
        "serbian": "матхематицс (матх)"
      }
    },
    {
      "german": "die Musik (Singular)",
      "translations": {
        "english": "music",
        "ukrainian": "музика",
        "polish": "muzyka",
        "albanian": "muzika",
        "arabic": "الموسيقى",
        "italian": "musica",
        "serbian": "музика"
      }
    },
    {
      "german": "die Physik (Singular)",
      "translations": {
        "english": "physics",
        "ukrainian": "фізика",
        "polish": "fizyka",
        "albanian": "fizika",
        "arabic": "الفيزياء",
        "italian": "fisica",
        "serbian": "физика"
      }
    },
    {
      "german": "die Chemie (Singular)",
      "translations": {
        "english": "chemistry",
        "ukrainian": "хімія",
        "polish": "chemia",
        "albanian": "kimia",
        "arabic": "الكيمياء",
        "italian": "chimica",
        "serbian": "хемија"
      }
    },
    {
      "german": "die Biologie (Singular)",
      "translations": {
        "english": "biology",
        "ukrainian": "біологія",
        "polish": "biologia",
        "albanian": "biologjia",
        "arabic": "الأحياء",
        "italian": "biologia",
        "serbian": "биологија"
      }
    },
    {
      "german": "die Kunst (Singular)",
      "translations": {
        "english": "art",
        "ukrainian": "мистецтво",
        "polish": "sztuka",
        "albanian": "arti",
        "arabic": "الفن",
        "italian": "arte",
        "serbian": "уметност"
      }
    },
    {
      "german": "die Erdkunde (Singular)",
      "translations": {
        "english": "geography",
        "ukrainian": "географія",
        "polish": "geografia",
        "albanian": "gjeografia",
        "arabic": "الجغرافيا",
        "italian": "geografia",
        "serbian": "географија"
      }
    },
    {
      "german": "die Geschichte (Singular)",
      "translations": {
        "english": "history",
        "ukrainian": "історія",
        "polish": "historia",
        "albanian": "historia",
        "arabic": "التاريخ",
        "italian": "storia",
        "serbian": "историја"
      }
    },
    {
      "german": "Deutsch",
      "translations": {
        "english": "German",
        "ukrainian": "німецька мова",
        "polish": "język niemiecki",
        "albanian": "gjermanishtja",
        "arabic": "الألمانية",
        "italian": "tedesco",
        "serbian": "немачки"
      }
    },
    {
      "german": "Englisch",
      "translations": {
        "english": "English",
        "ukrainian": "англійська мова",
        "polish": "język angielski",
        "albanian": "anglishtja",
        "arabic": "الإنجليزية",
        "italian": "inglese",
        "serbian": "енглески"
      }
    },
    {
      "german": "der Stundenplan / die Stundenpläne",
      "translations": {
        "english": "timetable, schedule",
        "ukrainian": "розклад уроків",
        "polish": "plan lekcji",
        "albanian": "orari",
        "arabic": "الجدول الزمني",
        "italian": "orario",
        "serbian": "тиметабле, счедуле"
      }
    },
    {
      "german": "die Pause / die Pausen",
      "translations": {
        "english": "break, recess",
        "ukrainian": "перерва",
        "polish": "przerwa",
        "albanian": "pushimi",
        "arabic": "الاستراحة",
        "italian": "pausa",
        "serbian": "бреак, реце"
      }
    },
    {
      "german": "die Gruppenarbeit / die Gruppenarbeiten",
      "translations": {
        "english": "group work",
        "ukrainian": "групова робота",
        "polish": "praca grupowa",
        "albanian": "puna në grup",
        "arabic": "العمل الجماعي",
        "italian": "lavoro di gruppo",
        "serbian": "гроуп ворк"
      }
    },
    {
      "german": "der Lehrer / die Lehrerin",
      "translations": {
        "english": "teacher",
        "ukrainian": "вчитель/вчителька",
        "polish": "nauczyciel/nauczycielka",
        "albanian": "mësuesi/mësuesja",
        "arabic": "المعلم/المعلمة",
        "italian": "insegnante",
        "serbian": "наставник"
      }
    },
    {
      "german": "der Schüler / die Schülerin",
      "translations": {
        "english": "student, pupil",
        "ukrainian": "учень/учениця",
        "polish": "uczeń/uczennica",
        "albanian": "nxënësi/nxënësja",
        "arabic": "التلميذ/التلميذة",
        "italian": "studente/studentessa",
        "serbian": "студент, пупил"
      }
    },
    {
      "german": "das Lieblingsfach / die Lieblingsfächer",
      "translations": {
        "english": "favorite subject",
        "ukrainian": "улюблений предмет",
        "polish": "ulubiony przedmiot",
        "albanian": "lënda e preferuar",
        "arabic": "المادة المفضلة",
        "italian": "materia preferita",
        "serbian": "фаворите субјецт"
      }
    },
    {
      "german": "die Grundschule / die Grundschulen",
      "translations": {
        "english": "primary school, elementary school",
        "ukrainian": "початкова школа",
        "polish": "szkoła podstawowa",
        "albanian": "shkolla fillore",
        "arabic": "المدرسة الابتدائية",
        "italian": "scuola elementare",
        "serbian": "примари счоол, елементари счоол"
      }
    },
    {
      "german": "die Hauptschule / die Hauptschulen",
      "translations": {
        "english": "secondary modern school",
        "ukrainian": "основна школа",
        "polish": "szkoła główna",
        "albanian": "shkolla kryesore",
        "arabic": "المدرسة الرئيسية",
        "italian": "scuola secondaria",
        "serbian": "сецондари модерн счоол"
      }
    },
    {
      "german": "die Realschule / die Realschulen",
      "translations": {
        "english": "intermediate school",
        "ukrainian": "реальна школа",
        "polish": "szkoła realna",
        "albanian": "shkolla e mesme",
        "arabic": "المدرسة الإعدادية",
        "italian": "scuola media superiore",
        "serbian": "интермедиате счоол"
      }
    },
    {
      "german": "das Gymnasium / die Gymnasien",
      "translations": {
        "english": "grammar school, high school",
        "ukrainian": "гімназія",
        "polish": "gimnazjum",
        "albanian": "gjimnazi",
        "arabic": "الثانوية",
        "italian": "liceo",
        "serbian": "граммар счоол, хигх счоол"
      }
    },
    {
      "german": "die Gesamtschule / die Gesamtschulen",
      "translations": {
        "english": "comprehensive school",
        "ukrainian": "загальноосвітня школа",
        "polish": "szkoła kompleksowa",
        "albanian": "shkolla e përgjithshme",
        "arabic": "المدرسة الشاملة",
        "italian": "scuola comprensiva",
        "serbian": "гимназија"
      }
    },
    {
      "german": "die Berufsschule / die Berufsschulen",
      "translations": {
        "english": "vocational school",
        "ukrainian": "професійна школа",
        "polish": "szkoła zawodowa",
        "albanian": "shkolla profesionale",
        "arabic": "المدرسة المهنية",
        "italian": "scuola professionale",
        "serbian": "стручна школа"
      }
    },
    {
      "german": "die Förderschule / die Förderschulen",
      "translations": {
        "english": "special needs school",
        "ukrainian": "спеціальна школа",
        "polish": "szkoła specjalna",
        "albanian": "shkolla speciale",
        "arabic": "مدرسة التربية الخاصة",
        "italian": "scuola speciale",
        "serbian": "специал неедс счоол"
      }
    },
    {
      "german": "die Fachhochschule / die Fachhochschulen",
      "translations": {
        "english": "university of applied sciences",
        "ukrainian": "вищий навчальний заклад",
        "polish": "wyższa szkoła zawodowa",
        "albanian": "shkolla e lartë profesionale",
        "arabic": "الكلية التقنية",
        "italian": "università di scienze applicate",
        "serbian": "университи оф апплиед сциенце"
      }
    },
    {
      "german": "die Universität / die Universitäten",
      "translations": {
        "english": "university",
        "ukrainian": "університет",
        "polish": "uniwersytet",
        "albanian": "universiteti",
        "arabic": "الجامعة",
        "italian": "università",
        "serbian": "универзитет"
      }
    },
    {
      "german": "die Kita / der Kindergarten",
      "translations": {
        "english": "kindergarten, daycare",
        "ukrainian": "дитячий садок",
        "polish": "przedszkole",
        "albanian": "kopshti",
        "arabic": "روضة الأطفال",
        "italian": "asilo",
        "serbian": "киндергартен, даицаре"
      }
    },
    {
      "german": "die Klasse / die Klassen",
      "translations": {
        "english": "class, grade",
        "ukrainian": "клас",
        "polish": "klasa",
        "albanian": "klasa",
        "arabic": "الصف",
        "italian": "classe",
        "serbian": "цласс, граде"
      }
    },
    {
      "german": "das Abitur / die Abiture",
      "translations": {
        "english": "high school diploma",
        "ukrainian": "атестат зрілості",
        "polish": "matura",
        "albanian": "matura",
        "arabic": "شهادة الثانوية العامة",
        "italian": "diploma di maturità",
        "serbian": "хигх счоол диплома"
      }
    },
    {
      "german": "die Ausbildung / die Ausbildungen",
      "translations": {
        "english": "vocational training, apprenticeship",
        "ukrainian": "професійне навчання",
        "polish": "szkolenie zawodowe",
        "albanian": "arsimimi profesional",
        "arabic": "التدريب المهني",
        "italian": "formazione professionale",
        "serbian": "воцатионал траининг, аппрентицешип"
      }
    },
    {
      "german": "der Schulabschluss / die Schulabschlüsse",
      "translations": {
        "english": "school leaving certificate",
        "ukrainian": "атестат про освіту",
        "polish": "świadectwo ukończenia szkoły",
        "albanian": "dëftesa e shkollës",
        "arabic": "شهادة التخرج المدرسي",
        "italian": "diploma scolastico",
        "serbian": "счоол леавинг цертифицате"
      }
    },
    {
      "german": "der Hauptschulabschluss / die Hauptschulabschlüsse",
      "translations": {
        "english": "secondary school certificate",
        "ukrainian": "атестат основної школи",
        "polish": "świadectwo szkoły głównej",
        "albanian": "dëftesa e shkollës kryesore",
        "arabic": "شهادة المدرسة الرئيسية",
        "italian": "diploma di scuola secondaria",
        "serbian": "сецондари счоол цертифицате"
      }
    },
    {
      "german": "die Schulpflicht (Singular)",
      "translations": {
        "english": "compulsory education",
        "ukrainian": "обов'язкова освіта",
        "polish": "obowiązek szkolny",
        "albanian": "arsimi i detyruar",
        "arabic": "التعليم الإلزامي",
        "italian": "obbligo scolastico",
        "serbian": "обавезно школовање"
      }
    },
    {
      "german": "das Schuljahr / die Schuljahre",
      "translations": {
        "english": "school year",
        "ukrainian": "навчальний рік",
        "polish": "rok szkolny",
        "albanian": "viti shkollor",
        "arabic": "العام الدراسي",
        "italian": "anno scolastico",
        "serbian": "школска година"
      }
    },
    {
      "german": "die Note / die Noten",
      "translations": {
        "english": "grade, mark",
        "ukrainian": "оцінка",
        "polish": "ocena",
        "albanian": "nota",
        "arabic": "الدرجة",
        "italian": "voto",
        "serbian": "граде, марк"
      }
    },
    {
      "german": "das Zeugnis / die Zeugnisse",
      "translations": {
        "english": "report card, certificate",
        "ukrainian": "табель, свідоцтво",
        "polish": "świadectwo",
        "albanian": "dëftesa",
        "arabic": "شهادة",
        "italian": "pagella",
        "serbian": "репорт цард, цертифицате"
      }
    },
    {
      "german": "die Prüfung / die Prüfungen",
      "translations": {
        "english": "exam, test",
        "ukrainian": "іспит",
        "polish": "egzamin",
        "albanian": "provimi",
        "arabic": "الامتحان",
        "italian": "esame",
        "serbian": "испит"
      }
    },
    {
      "german": "die Abschlussprüfung / die Abschlussprüfungen",
      "translations": {
        "english": "final exam",
        "ukrainian": "випускний іспит",
        "polish": "egzamin końcowy",
        "albanian": "provimi përfundimtar",
        "arabic": "امتحان التخرج",
        "italian": "esame finale",
        "serbian": "финал ексам"
      }
    },
    {
      "german": "die Nachhilfe (Singular)",
      "translations": {
        "english": "tutoring, extra help",
        "ukrainian": "репетиторство",
        "polish": "korepetycje",
        "albanian": "mësim shtesë",
        "arabic": "الدروس الخصوصية",
        "italian": "ripetizioni",
        "serbian": "туторинг, екстра хелп"
      }
    },
    {
      "german": "der Elternabend / die Elternabende",
      "translations": {
        "english": "parent-teacher meeting",
        "ukrainian": "батьківські збори",
        "polish": "wywiadówka",
        "albanian": "mbledhja me prindër",
        "arabic": "اجتماع أولياء الأمور",
        "italian": "riunione dei genitori",
        "serbian": "парент-теачер меетинг"
      }
    },
    {
      "german": "die Klassenkasse / die Klassenkassen",
      "translations": {
        "english": "class fund",
        "ukrainian": "класна каса",
        "polish": "kasa klasowa",
        "albanian": "kasa e klasës",
        "arabic": "صندوق الصف",
        "italian": "cassa della classe",
        "serbian": "цласс фунд"
      }
    },
    {
      "german": "die Klassenfahrt / die Klassenfahrten",
      "translations": {
        "english": "class trip",
        "ukrainian": "шкільна екскурсія",
        "polish": "wycieczka klasowa",
        "albanian": "udhëtimi i klasës",
        "arabic": "رحلة الصف",
        "italian": "gita scolastica",
        "serbian": "цласс трип"
      }
    },
    {
      "german": "die Klassenarbeit / die Klassenarbeiten",
      "translations": {
        "english": "class test, written exam",
        "ukrainian": "контрольна робота",
        "polish": "klasówka",
        "albanian": "testi i klasës",
        "arabic": "الاختبار الصفي",
        "italian": "compito in classe",
        "serbian": "контролни рад, писмени испит"
      }
    },
    {
      "german": "der Schwimmunterricht (Singular)",
      "translations": {
        "english": "swimming lessons",
        "ukrainian": "уроки плавання",
        "polish": "lekcje pływania",
        "albanian": "mësimi i notit",
        "arabic": "دروس السباحة",
        "italian": "lezioni di nuoto",
        "serbian": "часови пливања"
      }
    },
    {
      "german": "der Sportunterricht (Singular)",
      "translations": {
        "english": "physical education, PE",
        "ukrainian": "фізкультура",
        "polish": "wychowanie fizyczne",
        "albanian": "edukimi fizik",
        "arabic": "التربية البدنية",
        "italian": "educazione fisica",
        "serbian": "физичко васпитање"
      }
    },
    {
      "german": "das Taschengeld (Singular)",
      "translations": {
        "english": "pocket money, allowance",
        "ukrainian": "кишенькові гроші",
        "polish": "kieszonkowe",
        "albanian": "para xhepi",
        "arabic": "مصروف الجيب",
        "italian": "paghetta",
        "serbian": "џепарац"
      }
    },
    {
      "german": "das Handy / die Handys",
      "translations": {
        "english": "mobile phone, cell phone",
        "ukrainian": "мобільний телефон",
        "polish": "telefon komórkowy",
        "albanian": "celulari",
        "arabic": "الهاتف المحمول",
        "italian": "cellulare",
        "serbian": "мобилни телефон"
      }
    },
    {
      "german": "die Schulbücher (Plural)",
      "translations": {
        "english": "textbooks",
        "ukrainian": "підручники",
        "polish": "podręczniki",
        "albanian": "librat shkollor",
        "arabic": "الكتب المدرسية",
        "italian": "libri scolastici",
        "serbian": "уџбеници"
      }
    },
    {
      "german": "der Kfz-Mechatroniker / die Kfz-Mechatronikerin",
      "translations": {
        "english": "automotive mechatronics technician",
        "ukrainian": "автомеханік",
        "polish": "mechatronik samochodowy",
        "albanian": "mekatroni i automjeteve",
        "arabic": "ميكانيكي سيارات",
        "italian": "meccatronico automobilistico",
        "serbian": "аутомеханичар"
      }
    },
    {
      "german": "der Studienplatz / die Studienplätze",
      "translations": {
        "english": "university place",
        "ukrainian": "місце в університеті",
        "polish": "miejsce na studiach",
        "albanian": "vendi universitar",
        "arabic": "مكان في الجامعة",
        "italian": "posto universitario",
        "serbian": "место на факултету"
      }
    },
    {
      "german": "die Autowerkstatt / die Autowerkstätten",
      "translations": {
        "english": "car repair shop, garage",
        "ukrainian": "автомайстерня",
        "polish": "warsztat samochodowy",
        "albanian": "punëtoria e makinave",
        "arabic": "ورشة السيارات",
        "italian": "officina auto",
        "serbian": "цар репаир шоп, гараге"
      }
    },
    {
      "german": "streng",
      "translations": {
        "english": "strict",
        "ukrainian": "суворий",
        "polish": "surowy",
        "albanian": "i rreptë",
        "arabic": "صارم",
        "italian": "severo",
        "serbian": "строг"
      }
    },
    {
      "german": "freundlich",
      "translations": {
        "english": "friendly",
        "ukrainian": "привітний",
        "polish": "przyjazny",
        "albanian": "miqësor",
        "arabic": "ودود",
        "italian": "gentile",
        "serbian": "фриендли"
      }
    },
    {
      "german": "fleißig",
      "translations": {
        "english": "diligent, hardworking",
        "ukrainian": "старанний",
        "polish": "pilny",
        "albanian": "i zellshëm",
        "arabic": "مجتهد",
        "italian": "diligente",
        "serbian": "дилигент, хардворкинг"
      }
    },
    {
      "german": "beliebt",
      "translations": {
        "english": "popular",
        "ukrainian": "популярний",
        "polish": "lubiany",
        "albanian": "i dashur",
        "arabic": "محبوب",
        "italian": "popolare",
        "serbian": "популаран"
      }
    },
    {
      "german": "befriedigend",
      "translations": {
        "english": "satisfactory",
        "ukrainian": "задовільно",
        "polish": "dostateczny",
        "albanian": "i kënaqshëm",
        "arabic": "مرضٍ",
        "italian": "sufficiente",
        "serbian": "сатисфацтори"
      }
    },
    {
      "german": "ausreichend",
      "translations": {
        "english": "adequate, sufficient",
        "ukrainian": "достатньо",
        "polish": "wystarczający",
        "albanian": "i mjaftueshëm",
        "arabic": "كافٍ",
        "italian": "sufficiente",
        "serbian": "адекуате, суффициент"
      }
    },
    {
      "german": "mangelhaft",
      "translations": {
        "english": "insufficient, poor",
        "ukrainian": "незадовільно",
        "polish": "niedostateczny",
        "albanian": "i pamjaftueshëm",
        "arabic": "غير كافٍ",
        "italian": "insufficiente",
        "serbian": "инсуффициент, поор"
      }
    },
    {
      "german": "ungenügend",
      "translations": {
        "english": "unsatisfactory, failing",
        "ukrainian": "незадовільно",
        "polish": "niedostateczny",
        "albanian": "i pamjaftueshëm",
        "arabic": "راسب",
        "italian": "gravemente insufficiente",
        "serbian": "унсатисфацтори, фаилинг"
      }
    },
    {
      "german": "leicht",
      "translations": {
        "english": "easy",
        "ukrainian": "легкий",
        "polish": "łatwy",
        "albanian": "i lehtë",
        "arabic": "سهل",
        "italian": "facile",
        "serbian": "лак"
      }
    },
    {
      "german": "pünktlich",
      "translations": {
        "english": "punctual",
        "ukrainian": "пунктуальний",
        "polish": "punktualny",
        "albanian": "i saktë",
        "arabic": "دقيق",
        "italian": "puntuale",
        "serbian": "пунцтуал"
      }
    },
    {
      "german": "der Jugendliche / die Jugendliche",
      "translations": {
        "english": "young person, teenager",
        "ukrainian": "підліток",
        "polish": "młodzież",
        "albanian": "i riu",
        "arabic": "الشاب",
        "italian": "giovane",
        "serbian": "иоунг персон, теенагер"
      }
    },
    {
      "german": "die Schulzeit (Singular)",
      "translations": {
        "english": "school days, school time",
        "ukrainian": "шкільні роки",
        "polish": "okres szkolny",
        "albanian": "koha e shkollës",
        "arabic": "أيام المدرسة",
        "italian": "periodo scolastico",
        "serbian": "счоол даис, счоол тиме"
      }
    },
    {
      "german": "der Schulweg / die Schulwege",
      "translations": {
        "english": "way to school",
        "ukrainian": "шлях до школи",
        "polish": "droga do szkoły",
        "albanian": "rruga e shkollës",
        "arabic": "طريق المدرسة",
        "italian": "strada per la scuola",
        "serbian": "ваи то счоол"
      }
    },
    {
      "german": "die Langeweile (Singular)",
      "translations": {
        "english": "boredom",
        "ukrainian": "нудьга",
        "polish": "nuda",
        "albanian": "mërzia",
        "arabic": "الملل",
        "italian": "noia",
        "serbian": "боредом"
      }
    },
    {
      "german": "dauern",
      "translations": {
        "english": "to last, to take (time)",
        "ukrainian": "тривати",
        "polish": "trwać",
        "albanian": "të zgjasë",
        "arabic": "يستمر",
        "italian": "durare",
        "serbian": "то ласт, то таке (тиме)"
      }
    },
    {
      "german": "bestehen",
      "translations": {
        "english": "to pass (an exam)",
        "ukrainian": "здати (іспит)",
        "polish": "zdać",
        "albanian": "të kalojë",
        "arabic": "ينجح",
        "italian": "superare",
        "serbian": "то пасс (ан ексам)"
      }
    },
    {
      "german": "hoffen",
      "translations": {
        "english": "to hope",
        "ukrainian": "сподіватися",
        "polish": "mieć nadzieję",
        "albanian": "të shpresojë",
        "arabic": "يأمل",
        "italian": "sperare",
        "serbian": "надати се"
      }
    },
    {
      "german": "klappen",
      "translations": {
        "english": "to work out, to succeed",
        "ukrainian": "вдаватися",
        "polish": "udać się",
        "albanian": "të dalë",
        "arabic": "ينجح",
        "italian": "funzionare",
        "serbian": "то ворк оут, то суццеед"
      }
    },
    {
      "german": "nachsitzen",
      "translations": {
        "english": "to stay after school (detention)",
        "ukrainian": "залишатися після уроків",
        "polish": "zostawać po lekcjach",
        "albanian": "të qëndrosh pas shkollës",
        "arabic": "البقاء بعد المدرسة",
        "italian": "restare dopo scuola",
        "serbian": "то стаи афтер счоол (детентион)"
      }
    },
    {
      "german": "zu Ende sein",
      "translations": {
        "english": "to be finished, to be over",
        "ukrainian": "закінчитися",
        "polish": "być skończonym",
        "albanian": "të mbarojë",
        "arabic": "ينتهي",
        "italian": "essere finito",
        "serbian": "то бе финишед, то бе овер"
      }
    },
    {
      "german": "der Raum / die Räume",
      "translations": {
        "english": "room",
        "ukrainian": "кімната",
        "polish": "pokój",
        "albanian": "dhoma",
        "arabic": "الغرفة",
        "italian": "stanza",
        "serbian": "соба"
      }
    },
    {
      "german": "gemeinsam",
      "translations": {
        "english": "together, jointly",
        "ukrainian": "разом",
        "polish": "wspólnie",
        "albanian": "së bashku",
        "arabic": "معاً",
        "italian": "insieme",
        "serbian": "тогетхер, јоинтли"
      }
    },
    {
      "german": "besprechen",
      "translations": {
        "english": "to discuss",
        "ukrainian": "обговорювати",
        "polish": "omawiać",
        "albanian": "të diskutojë",
        "arabic": "يناقش",
        "italian": "discutere",
        "serbian": "то дисцу"
      }
    },
    {
      "german": "der Ausflug / die Ausflüge",
      "translations": {
        "english": "excursion, outing",
        "ukrainian": "екскурсія",
        "polish": "wycieczka",
        "albanian": "shëtitja",
        "arabic": "الرحلة",
        "italian": "escursione",
        "serbian": "ексцурсион, оутинг"
      }
    },
    {
      "german": "die Hausaufgabe / die Hausaufgaben",
      "translations": {
        "english": "homework",
        "ukrainian": "домашнє завдання",
        "polish": "zadanie domowe",
        "albanian": "detyra e shtëpisë",
        "arabic": "الواجب المنزلي",
        "italian": "compito a casa",
        "serbian": "домаћи задатак"
      }
    },
    {
      "german": "die Ferien (Plural)",
      "translations": {
        "english": "holidays, vacation",
        "ukrainian": "канікули",
        "polish": "wakacje",
        "albanian": "pushimet",
        "arabic": "العطلة",
        "italian": "vacanze",
        "serbian": "холидаис, вацатион"
      }
    }
  ],

  "5": [
    {
      "german": "der Arbeitsplatz / die Arbeitsplätze",
      "translations": {
        "english": "workplace",
        "ukrainian": "робоче місце",
        "polish": "miejsce pracy",
        "albanian": "vendi i punës",
        "arabic": "مكان العمل",
        "italian": "posto di lavoro",
        "serbian": "радно место"
      }
    },
    {
      "german": "der Polizist / die Polizisten",
      "translations": {
        "english": "police officer (male)",
        "ukrainian": "поліцейський",
        "polish": "policjant",
        "albanian": "polici",
        "arabic": "شرطي",
        "italian": "poliziotto",
        "serbian": "полице оффицер (мале)"
      }
    },
    {
      "german": "die Polizistin / die Polizistinnen",
      "translations": {
        "english": "police officer (female)",
        "ukrainian": "поліцейська",
        "polish": "policjantka",
        "albanian": "policja",
        "arabic": "شرطية",
        "italian": "poliziotta",
        "serbian": "полице оффицер (фемале)"
      }
    },
    {
      "german": "der Pilot / die Piloten",
      "translations": {
        "english": "pilot (male)",
        "ukrainian": "пілот",
        "polish": "pilot",
        "albanian": "piloti",
        "arabic": "طيار",
        "italian": "pilota",
        "serbian": "пилот (мале)"
      }
    },
    {
      "german": "die Pilotin / die Pilotinnen",
      "translations": {
        "english": "pilot (female)",
        "ukrainian": "пілотка",
        "polish": "pilotka",
        "albanian": "pilote",
        "arabic": "طيارة",
        "italian": "pilota",
        "serbian": "пилот (фемале)"
      }
    },
    {
      "german": "der Erzieher / die Erzieher",
      "translations": {
        "english": "educator, childcare worker (male)",
        "ukrainian": "вихователь",
        "polish": "wychowawca",
        "albanian": "edukatori",
        "arabic": "مربي",
        "italian": "educatore",
        "serbian": "едуцатор, чилдцаре воркер (мале)"
      }
    },
    {
      "german": "die Erzieherin / die Erzieherinnen",
      "translations": {
        "english": "educator, childcare worker (female)",
        "ukrainian": "вихователька",
        "polish": "wychowawczyni",
        "albanian": "edukatorja",
        "arabic": "مربية",
        "italian": "educatrice",
        "serbian": "едуцатор, чилдцаре воркер (фемале)"
      }
    },
    {
      "german": "der Krankengymnast / die Krankengymnaste",
      "translations": {
        "english": "physiotherapist (male)",
        "ukrainian": "фізіотерапевт",
        "polish": "fizjoterapeuta",
        "albanian": "fizioterapisti",
        "arabic": "معالج فيزيائي",
        "italian": "fisioterapista",
        "serbian": "пхисиотхерапист (мале)"
      }
    },
    {
      "german": "die Krankengymnastin / die Krankengymnastinnen",
      "translations": {
        "english": "physiotherapist (female)",
        "ukrainian": "фізіотерапевтка",
        "polish": "fizjoterapeutka",
        "albanian": "fizioterapistja",
        "arabic": "معالجة فيزيائية",
        "italian": "fisioterapista",
        "serbian": "пхисиотхерапист (фемале)"
      }
    },
    {
      "german": "der Ingenieur / die Ingenieure",
      "translations": {
        "english": "engineer (male)",
        "ukrainian": "інженер",
        "polish": "inżynier",
        "albanian": "inxhinieri",
        "arabic": "مهندس",
        "italian": "ingegnere",
        "serbian": "енгинеер (мале)"
      }
    },
    {
      "german": "die Ingenieurin / die Ingenieurinnen",
      "translations": {
        "english": "engineer (female)",
        "ukrainian": "інженерка",
        "polish": "inżynierka",
        "albanian": "inxhinierja",
        "arabic": "مهندسة",
        "italian": "ingegnere",
        "serbian": "енгинеер (фемале)"
      }
    },
    {
      "german": "die Fahrerin / die Fahrerinnen",
      "translations": {
        "english": "driver (female)",
        "ukrainian": "водійка",
        "polish": "kierowczyni",
        "albanian": "shoferja",
        "arabic": "سائقة",
        "italian": "autista",
        "serbian": "дривер (фемале)"
      }
    },
    {
      "german": "planen",
      "translations": {
        "english": "to plan",
        "ukrainian": "планувати",
        "polish": "planować",
        "albanian": "të planifikosh",
        "arabic": "يخطط",
        "italian": "pianificare",
        "serbian": "планирати"
      }
    },
    {
      "german": "die meisten",
      "translations": {
        "english": "most (people/things)",
        "ukrainian": "більшість",
        "polish": "większość",
        "albanian": "shumica",
        "arabic": "معظم",
        "italian": "la maggior parte",
        "serbian": "мост (пеопле/тхингс)"
      }
    },
    {
      "german": "wissen",
      "translations": {
        "english": "to know",
        "ukrainian": "знати",
        "polish": "wiedzieć",
        "albanian": "të dish",
        "arabic": "يعرف",
        "italian": "sapere",
        "serbian": "знати"
      }
    },
    {
      "german": "der Ordner / die Ordner",
      "translations": {
        "english": "folder, binder",
        "ukrainian": "папка",
        "polish": "segregator",
        "albanian": "dosja",
        "arabic": "مجلد",
        "italian": "cartella",
        "serbian": "фолдер, биндер"
      }
    },
    {
      "german": "das Passwort / die Passwörter",
      "translations": {
        "english": "password",
        "ukrainian": "пароль",
        "polish": "hasło",
        "albanian": "fjalëkalimi",
        "arabic": "كلمة المرور",
        "italian": "password",
        "serbian": "пассворд"
      }
    },
    {
      "german": "der Drucker / die Drucker",
      "translations": {
        "english": "printer",
        "ukrainian": "принтер",
        "polish": "drukarka",
        "albanian": "printeri",
        "arabic": "طابعة",
        "italian": "stampante",
        "serbian": "штампач"
      }
    },
    {
      "german": "Keine Ahnung!",
      "translations": {
        "english": "No idea!",
        "ukrainian": "Поняття не маю!",
        "polish": "Nie mam pojęcia!",
        "albanian": "Nuk kam ide!",
        "arabic": "لا فكرة لدي!",
        "italian": "Non ne ho idea!",
        "serbian": "Но идеа!"
      }
    },
    {
      "german": "Hier drüben.",
      "translations": {
        "english": "Over here.",
        "ukrainian": "Ось тут.",
        "polish": "Tu.",
        "albanian": "Këtu.",
        "arabic": "هنا.",
        "italian": "Qui.",
        "serbian": "Овер хере."
      }
    },
    {
      "german": "höflich",
      "translations": {
        "english": "polite",
        "ukrainian": "ввічливий",
        "polish": "uprzejmy",
        "albanian": "i sjellshëm",
        "arabic": "مهذب",
        "italian": "cortese",
        "serbian": "полите"
      }
    },
    {
      "german": "die Mitteilung / die Mitteilungen",
      "translations": {
        "english": "message, notice",
        "ukrainian": "повідомлення",
        "polish": "zawiadomienie",
        "albanian": "njoftimi",
        "arabic": "الإخطار",
        "italian": "comunicazione",
        "serbian": "мессаге, нотице"
      }
    },
    {
      "german": "die Nachricht / die Nachrichten",
      "translations": {
        "english": "message, news",
        "ukrainian": "повідомлення, новини",
        "polish": "wiadomość",
        "albanian": "lajmi",
        "arabic": "الرسالة",
        "italian": "messaggio",
        "serbian": "порука, вести"
      }
    },
    {
      "german": "der Bericht / die Berichte",
      "translations": {
        "english": "report",
        "ukrainian": "звіт",
        "polish": "raport",
        "albanian": "raporti",
        "arabic": "التقرير",
        "italian": "rapporto",
        "serbian": "извештај"
      }
    },
    {
      "german": "der Arbeitskollege / die Arbeitskollegen",
      "translations": {
        "english": "work colleague (male)",
        "ukrainian": "колега по роботі",
        "polish": "kolega z pracy",
        "albanian": "kolegu i punës",
        "arabic": "زميل العمل",
        "italian": "collega di lavoro",
        "serbian": "ворк цоллеагуе (мале)"
      }
    },
    {
      "german": "der Mitarbeiter / die Mitarbeiter",
      "translations": {
        "english": "employee, coworker (male)",
        "ukrainian": "співробітник",
        "polish": "współpracownik",
        "albanian": "bashkëpunëtori",
        "arabic": "موظف",
        "italian": "collaboratore",
        "serbian": "емплоиее, цоворкер (мале)"
      }
    },
    {
      "german": "die Mitarbeiterin / die Mitarbeiterinnen",
      "translations": {
        "english": "employee, coworker (female)",
        "ukrainian": "співробітниця",
        "polish": "współpracowniczka",
        "albanian": "bashkëpunëtorja",
        "arabic": "موظفة",
        "italian": "collaboratrice",
        "serbian": "емплоиее, цоворкер (фемале)"
      }
    },
    {
      "german": "das Computerprogramm / die Computerprogramme",
      "translations": {
        "english": "computer program",
        "ukrainian": "комп'ютерна програма",
        "polish": "program komputerowy",
        "albanian": "programi kompjuterik",
        "arabic": "برنامج الكمبيوتر",
        "italian": "programma per computer",
        "serbian": "цомпутер програм"
      }
    },
    {
      "german": "installieren",
      "translations": {
        "english": "to install",
        "ukrainian": "встановлювати",
        "polish": "instalować",
        "albanian": "të instalosh",
        "arabic": "يثبّت",
        "italian": "installare",
        "serbian": "то инсталл"
      }
    },
    {
      "german": "einen Termin verschieben",
      "translations": {
        "english": "to postpone an appointment",
        "ukrainian": "перенести зустріч",
        "polish": "przesunąć termin",
        "albanian": "të shtyjë një takim",
        "arabic": "تأجيل موعد",
        "italian": "rimandare un appuntamento",
        "serbian": "то постпоне ан аппоинтмент"
      }
    },
    {
      "german": "der Anruf / die Anrufe",
      "translations": {
        "english": "phone call",
        "ukrainian": "дзвінок",
        "polish": "telefon",
        "albanian": "telefonata",
        "arabic": "المكالمة",
        "italian": "chiamata",
        "serbian": "телефонски позив"
      }
    },
    {
      "german": "zurückrufen",
      "translations": {
        "english": "to call back",
        "ukrainian": "передзвонити",
        "polish": "oddzwonić",
        "albanian": "të kthejë telefonatën",
        "arabic": "يعاود الاتصال",
        "italian": "richiamare",
        "serbian": "то цалл бацк"
      }
    },
    {
      "german": "Bescheid sagen",
      "translations": {
        "english": "to let know, to inform",
        "ukrainian": "повідомити",
        "polish": "dać znać",
        "albanian": "të njoftoj",
        "arabic": "يُعلِم",
        "italian": "far sapere",
        "serbian": "то лет кнов, то информ"
      }
    },
    {
      "german": "der Prospekt / die Prospekte",
      "translations": {
        "english": "brochure, prospectus",
        "ukrainian": "проспект, брошура",
        "polish": "prospekt",
        "albanian": "broshura",
        "arabic": "النشرة",
        "italian": "prospetto",
        "serbian": "брочуре, проспецту"
      }
    },
    {
      "german": "zeigen",
      "translations": {
        "english": "to show",
        "ukrainian": "показувати",
        "polish": "pokazywać",
        "albanian": "të tregoj",
        "arabic": "يُظهِر",
        "italian": "mostrare",
        "serbian": "показати"
      }
    },
    {
      "german": "vorstellen",
      "translations": {
        "english": "to introduce, to present",
        "ukrainian": "представляти",
        "polish": "przedstawiać",
        "albanian": "të prezantoj",
        "arabic": "يُقدِّم",
        "italian": "presentare",
        "serbian": "то интродуце, то пресент"
      }
    },
    {
      "german": "der Kaffeeautomat / die Kaffeeautomaten",
      "translations": {
        "english": "coffee machine",
        "ukrainian": "кавовий автомат",
        "polish": "automat do kawy",
        "albanian": "automati i kafesë",
        "arabic": "آلة القهوة",
        "italian": "distributore di caffè",
        "serbian": "апарат за кафу"
      }
    },
    {
      "german": "die Betriebsversammlung / die Betriebsversammlungen",
      "translations": {
        "english": "company meeting",
        "ukrainian": "збори колективу",
        "polish": "zebranie zakładowe",
        "albanian": "mbledhja e kompanisë",
        "arabic": "اجتماع الشركة",
        "italian": "riunione aziendale",
        "serbian": "цомпани меетинг"
      }
    },
    {
      "german": "der Betriebsrat / die Betriebsräte",
      "translations": {
        "english": "works council",
        "ukrainian": "рада трудового колективу",
        "polish": "rada zakładowa",
        "albanian": "këshilli i punës",
        "arabic": "مجلس العمال",
        "italian": "consiglio aziendale",
        "serbian": "воркс цоунцил"
      }
    },
    {
      "german": "die Pausenregel / die Pausenregeln",
      "translations": {
        "english": "break rule",
        "ukrainian": "правило перерви",
        "polish": "zasada przerw",
        "albanian": "rregulli i pushimit",
        "arabic": "قاعدة الاستراحة",
        "italian": "regola della pausa",
        "serbian": "бреак руле"
      }
    },
    {
      "german": "der Arzttermin / die Arzttermine",
      "translations": {
        "english": "doctor's appointment",
        "ukrainian": "запис до лікаря",
        "polish": "wizyta u lekarza",
        "albanian": "takimi me mjekun",
        "arabic": "موعد الطبيب",
        "italian": "appuntamento dal dottore",
        "serbian": "доцтор'с аппоинтмент"
      }
    },
    {
      "german": "das Gerät / die Geräte",
      "translations": {
        "english": "device, appliance",
        "ukrainian": "пристрій",
        "polish": "urządzenie",
        "albanian": "pajisja",
        "arabic": "الجهاز",
        "italian": "dispositivo",
        "serbian": "девице, апплианце"
      }
    },
    {
      "german": "der Getränkeautomat / die Getränkeautomaten",
      "translations": {
        "english": "drink vending machine",
        "ukrainian": "автомат з напоями",
        "polish": "automat z napojami",
        "albanian": "automati i pijeve",
        "arabic": "آلة المشروبات",
        "italian": "distributore automatico di bevande",
        "serbian": "дринк вендинг мачине"
      }
    },
    {
      "german": "der Kopierer / die Kopierer",
      "translations": {
        "english": "copier, copy machine",
        "ukrainian": "копіювальний апарат",
        "polish": "kopiarka",
        "albanian": "fotokopjuesi",
        "arabic": "آلة النسخ",
        "italian": "fotocopiatrice",
        "serbian": "цопиер, цопи мачине"
      }
    },
    {
      "german": "die Taste / die Tasten",
      "translations": {
        "english": "button, key",
        "ukrainian": "кнопка, клавіша",
        "polish": "klawisz",
        "albanian": "butoni",
        "arabic": "الزر",
        "italian": "tasto",
        "serbian": "буттон, кеи"
      }
    },
    {
      "german": "drücken",
      "translations": {
        "english": "to press, to push",
        "ukrainian": "натискати",
        "polish": "naciskać",
        "albanian": "të shtypësh",
        "arabic": "يضغط",
        "italian": "premere",
        "serbian": "то пресс, то пуш"
      }
    },
    {
      "german": "dieser / diese / dieses",
      "translations": {
        "english": "this",
        "ukrainian": "цей/ця/це",
        "polish": "ten/ta/to",
        "albanian": "ky/kjo",
        "arabic": "هذا/هذه",
        "italian": "questo/questa",
        "serbian": "тхи"
      }
    },
    {
      "german": "das Fach / die Fächer",
      "translations": {
        "english": "compartment, subject",
        "ukrainian": "відділення, предмет",
        "polish": "przegródka, przedmiot",
        "albanian": "sirtari, lënda",
        "arabic": "الحجرة، الموضوع",
        "italian": "scomparto, materia",
        "serbian": "цомпартмент, субјецт"
      }
    },
    {
      "german": "das A4-Papier (Singular)",
      "translations": {
        "english": "A4 paper",
        "ukrainian": "папір формату A4",
        "polish": "papier A4",
        "albanian": "letra A4",
        "arabic": "ورق A4",
        "italian": "carta A4",
        "serbian": "А4 папер"
      }
    },
    {
      "german": "ausschalten",
      "translations": {
        "english": "to switch off, to turn off",
        "ukrainian": "вимикати",
        "polish": "wyłączać",
        "albanian": "të fikësh",
        "arabic": "يُطفئ",
        "italian": "spegnere",
        "serbian": "то свитч офф, то турн офф"
      }
    },
    {
      "german": "einschalten",
      "translations": {
        "english": "to switch on, to turn on",
        "ukrainian": "вмикати",
        "polish": "włączać",
        "albanian": "të ndezësh",
        "arabic": "يُشغِّل",
        "italian": "accendere",
        "serbian": "то свитч он, то турн он"
      }
    },
    {
      "german": "einwerfen",
      "translations": {
        "english": "to insert, to throw in",
        "ukrainian": "вставляти, кидати всередину",
        "polish": "wrzucać",
        "albanian": "të hedhësh",
        "arabic": "يُدخِل",
        "italian": "inserire",
        "serbian": "то инсерт, то тхров ин"
      }
    },
    {
      "german": "der Marktleiter / die Marktleiter",
      "translations": {
        "english": "market manager, store manager (male)",
        "ukrainian": "керівник магазину",
        "polish": "kierownik sklepu",
        "albanian": "menaxheri i dyqanit",
        "arabic": "مدير السوق",
        "italian": "direttore del negozio",
        "serbian": "маркет манагер, сторе манагер (мале)"
      }
    },
    {
      "german": "die Marktleiterin / die Marktleiterinnen",
      "translations": {
        "english": "market manager, store manager (female)",
        "ukrainian": "керівниця магазину",
        "polish": "kierowniczka sklepu",
        "albanian": "menaxherja e dyqanit",
        "arabic": "مديرة السوق",
        "italian": "direttrice del negozio",
        "serbian": "маркет манагер, сторе манагер (фемале)"
      }
    },
    {
      "german": "die Buchhaltung / die Buchhaltungen",
      "translations": {
        "english": "accounting, accounts department",
        "ukrainian": "бухгалтерія",
        "polish": "księgowość",
        "albanian": "kontabiliteti",
        "arabic": "المحاسبة",
        "italian": "contabilità",
        "serbian": "аццоунтинг, аццоунтс департмент"
      }
    },
    {
      "german": "die Technik (Singular)",
      "translations": {
        "english": "technology, technical department",
        "ukrainian": "техніка, технічний відділ",
        "polish": "technika, dział techniczny",
        "albanian": "teknika, departamenti teknik",
        "arabic": "التقنية، القسم التقني",
        "italian": "tecnica, reparto tecnico",
        "serbian": "течнологи, течницал департмент"
      }
    },
    {
      "german": "der technische Service (Singular)",
      "translations": {
        "english": "technical service",
        "ukrainian": "технічне обслуговування",
        "polish": "serwis techniczny",
        "albanian": "shërbimi teknik",
        "arabic": "الخدمة الفنية",
        "italian": "servizio tecnico",
        "serbian": "течницал сервице"
      }
    },
    {
      "german": "Platz nehmen",
      "translations": {
        "english": "to take a seat",
        "ukrainian": "сідати",
        "polish": "usiąść",
        "albanian": "të ulesh",
        "arabic": "يجلس",
        "italian": "accomodarsi",
        "serbian": "то таке а сеат"
      }
    },
    {
      "german": "die Spedition / die Speditionen",
      "translations": {
        "english": "forwarding agency, shipping company",
        "ukrainian": "експедиційна компанія",
        "polish": "spedycja",
        "albanian": "kompania e transportit",
        "arabic": "شركة الشحن",
        "italian": "azienda di spedizioni",
        "serbian": "форвардинг агенци, шиппинг цомпани"
      }
    },
    {
      "german": "einräumen",
      "translations": {
        "english": "to put away, to stock",
        "ukrainian": "розставляти, заповнювати",
        "polish": "odkładać, układać",
        "albanian": "të vendosësh",
        "arabic": "يرتب",
        "italian": "sistemare",
        "serbian": "то пут аваи, то стоцк"
      }
    },
    {
      "german": "der Maurer / die Maurer",
      "translations": {
        "english": "mason, bricklayer",
        "ukrainian": "муляр",
        "polish": "murarz",
        "albanian": "murator",
        "arabic": "بنّاء",
        "italian": "muratore",
        "serbian": "масон, брицклаиер"
      }
    },
    {
      "german": "der Verputzer / die Verputzer",
      "translations": {
        "english": "plasterer",
        "ukrainian": "штукатур",
        "polish": "tynkarz",
        "albanian": "suvatues",
        "arabic": "مُلَيِّس",
        "italian": "intonacatore",
        "serbian": "пластерер"
      }
    },
    {
      "german": "der Fliesenleger / die Fliesenleger",
      "translations": {
        "english": "tile layer, tiler",
        "ukrainian": "плиточник",
        "polish": "glazurnik",
        "albanian": "pllakaxhi",
        "arabic": "عامل البلاط",
        "italian": "piastrellista",
        "serbian": "тиле лаиер, тилер"
      }
    },
    {
      "german": "der Gabelstapler / die Gabelstapler",
      "translations": {
        "english": "forklift",
        "ukrainian": "навантажувач",
        "polish": "wózek widłowy",
        "albanian": "ngritësi me pirun",
        "arabic": "رافعة شوكية",
        "italian": "muletto",
        "serbian": "форклифт"
      }
    },
    {
      "german": "der Installateur / die Installateure",
      "translations": {
        "english": "plumber, installer",
        "ukrainian": "сантехнік, монтажник",
        "polish": "instalator",
        "albanian": "instaluesi",
        "arabic": "سباك",
        "italian": "installatore",
        "serbian": "плумбер, инсталлер"
      }
    },
    {
      "german": "der Baggerfahrer / die Baggerfahrer",
      "translations": {
        "english": "excavator operator",
        "ukrainian": "екскаваторник",
        "polish": "operator koparki",
        "albanian": "operatori i gërmuesit",
        "arabic": "سائق حفارة",
        "italian": "operatore di escavatore",
        "serbian": "ексцаватор оператор"
      }
    },
    {
      "german": "der Dachdecker / die Dachdecker",
      "translations": {
        "english": "roofer",
        "ukrainian": "покрівельник",
        "polish": "dekarz",
        "albanian": "çatist",
        "arabic": "عامل الأسطح",
        "italian": "copritetti",
        "serbian": "роофер"
      }
    },
    {
      "german": "der Bauingenieur / die Bauingenieure",
      "translations": {
        "english": "civil engineer (male)",
        "ukrainian": "інженер-будівельник",
        "polish": "inżynier budownictwa",
        "albanian": "inxhinieri i ndërtimit",
        "arabic": "مهندس مدني",
        "italian": "ingegnere civile",
        "serbian": "цивил енгинеер (мале)"
      }
    },
    {
      "german": "die Bauingenieurin / die Bauingenieurinnen",
      "translations": {
        "english": "civil engineer (female)",
        "ukrainian": "інженерка-будівельниця",
        "polish": "inżynierka budownictwa",
        "albanian": "inxhinierja e ndërtimit",
        "arabic": "مهندسة مدنية",
        "italian": "ingegnere civile",
        "serbian": "цивил енгинеер (фемале)"
      }
    },
    {
      "german": "der Schreiner / die Schreiner",
      "translations": {
        "english": "carpenter, joiner",
        "ukrainian": "столяр",
        "polish": "stolarz",
        "albanian": "marangozi",
        "arabic": "نجار",
        "italian": "falegname",
        "serbian": "царпентер, јоинер"
      }
    },
    {
      "german": "der Elektriker / die Elektriker",
      "translations": {
        "english": "electrician",
        "ukrainian": "електрик",
        "polish": "elektryk",
        "albanian": "elektriku",
        "arabic": "كهربائي",
        "italian": "elettricista",
        "serbian": "елецтрициан"
      }
    },
    {
      "german": "der Lkw-Fahrer / die Lkw-Fahrer",
      "translations": {
        "english": "truck driver",
        "ukrainian": "водій вантажівки",
        "polish": "kierowca ciężarówki",
        "albanian": "shoferi i kamionit",
        "arabic": "سائق شاحنة",
        "italian": "autista di camion",
        "serbian": "труцк дривер"
      }
    },
    {
      "german": "der Maler / die Maler",
      "translations": {
        "english": "painter",
        "ukrainian": "маляр",
        "polish": "malarz",
        "albanian": "piktori",
        "arabic": "رسام",
        "italian": "pittore",
        "serbian": "паинтер"
      }
    },
    {
      "german": "der Fluglotse / die Fluglotsen",
      "translations": {
        "english": "air traffic controller",
        "ukrainian": "авіадиспетчер",
        "polish": "kontroler lotów",
        "albanian": "kontrollori i fluturimit",
        "arabic": "مراقب حركة الطائرات",
        "italian": "controllore del traffico aereo",
        "serbian": "аир траффиц цонтроллер"
      }
    },
    {
      "german": "der Flugbegleiter / die Flugbegleiter",
      "translations": {
        "english": "flight attendant (male)",
        "ukrainian": "бортпровідник",
        "polish": "steward",
        "albanian": "stjuardi",
        "arabic": "مضيف طيران",
        "italian": "assistente di volo",
        "serbian": "флигхт аттендант (мале)"
      }
    },
    {
      "german": "die Flugbegleiterin / die Flugbegleiterinnen",
      "translations": {
        "english": "flight attendant (female)",
        "ukrainian": "бортпровідниця",
        "polish": "stewardessa",
        "albanian": "stjuardesa",
        "arabic": "مضيفة طيران",
        "italian": "assistente di volo",
        "serbian": "флигхт аттендант (фемале)"
      }
    },
    {
      "german": "der Flughafen / die Flughäfen",
      "translations": {
        "english": "airport",
        "ukrainian": "аеропорт",
        "polish": "lotnisko",
        "albanian": "aeroporti",
        "arabic": "المطار",
        "italian": "aeroporto",
        "serbian": "аирпорт"
      }
    },
    {
      "german": "das Bodenpersonal (Singular)",
      "translations": {
        "english": "ground staff",
        "ukrainian": "наземний персонал",
        "polish": "personel naziemny",
        "albanian": "personeli tokësor",
        "arabic": "طاقم الأرض",
        "italian": "personale di terra",
        "serbian": "гроунд стафф"
      }
    },
    {
      "german": "der Gepäckfahrer / die Gepäckfahrer",
      "translations": {
        "english": "luggage handler",
        "ukrainian": "вантажник багажу",
        "polish": "bagażowy",
        "albanian": "transportuesi i bagazheve",
        "arabic": "عامل الأمتعة",
        "italian": "addetto ai bagagli",
        "serbian": "луггаге хандлер"
      }
    },
    {
      "german": "der Busfahrer / die Busfahrer",
      "translations": {
        "english": "bus driver",
        "ukrainian": "водій автобуса",
        "polish": "kierowca autobusu",
        "albanian": "shoferi i autobusit",
        "arabic": "سائق الحافلة",
        "italian": "autista di autobus",
        "serbian": "бус дривер"
      }
    },
    {
      "german": "der Kellner / die Kellner",
      "translations": {
        "english": "waiter",
        "ukrainian": "офіціант",
        "polish": "kelner",
        "albanian": "kamarieri",
        "arabic": "نادل",
        "italian": "cameriere",
        "serbian": "конобар"
      }
    },
    {
      "german": "die Kellnerin / die Kellnerinnen",
      "translations": {
        "english": "waitress",
        "ukrainian": "офіціантка",
        "polish": "kelnerka",
        "albanian": "kamarierja",
        "arabic": "نادلة",
        "italian": "cameriera",
        "serbian": "конобарица"
      }
    },
    {
      "german": "der Taxifahrer / die Taxifahrer",
      "translations": {
        "english": "taxi driver",
        "ukrainian": "таксист",
        "polish": "taksówkarz",
        "albanian": "shoferi i taksisë",
        "arabic": "سائق تاكسي",
        "italian": "tassista",
        "serbian": "такси дривер"
      }
    },
    {
      "german": "die Reinigungskraft / die Reinigungskräfte",
      "translations": {
        "english": "cleaning staff, cleaner",
        "ukrainian": "прибиральник/прибиральниця",
        "polish": "pracownik sprzątający",
        "albanian": "pastruesi",
        "arabic": "عامل نظافة",
        "italian": "addetto alle pulizie",
        "serbian": "цлеанинг стафф, цлеанер"
      }
    },
    {
      "german": "die Sicherheitskontrolle / die Sicherheitskontrollen",
      "translations": {
        "english": "security control, security check",
        "ukrainian": "контроль безпеки",
        "polish": "kontrola bezpieczeństwa",
        "albanian": "kontrolli i sigurisë",
        "arabic": "الرقابة الأمنية",
        "italian": "controllo di sicurezza",
        "serbian": "сецурити цонтрол, сецурити чецк"
      }
    }
  ],

  "6": [
    {
      "german": "die Innenstadt / die Innenstädte",
      "translations": {
        "english": "city center, downtown",
        "ukrainian": "центр міста",
        "polish": "centrum miasta",
        "albanian": "qendra e qytetit",
        "arabic": "وسط المدينة",
        "italian": "centro città",
        "serbian": "цити центер, довнтовн"
      }
    },
    {
      "german": "der Vorort / die Vororte",
      "translations": {
        "english": "suburb",
        "ukrainian": "передмістя",
        "polish": "przedmieście",
        "albanian": "periferitë",
        "arabic": "الضواحي",
        "italian": "sobborgo",
        "serbian": "предграђе"
      }
    },
    {
      "german": "zentral",
      "translations": {
        "english": "central",
        "ukrainian": "центральний",
        "polish": "centralny",
        "albanian": "qendror",
        "arabic": "مركزي",
        "italian": "centrale",
        "serbian": "централ"
      }
    },
    {
      "german": "außerhalb",
      "translations": {
        "english": "outside, out of town",
        "ukrainian": "поза межами",
        "polish": "poza",
        "albanian": "jashtë",
        "arabic": "خارج",
        "italian": "fuori",
        "serbian": "оутсиде, оут оф товн"
      }
    },
    {
      "german": "verkehrsgünstig",
      "translations": {
        "english": "convenient for transport",
        "ukrainian": "зручний транспортний доступ",
        "polish": "dogodna komunikacja",
        "albanian": "me transport të përshtatshëm",
        "arabic": "موقع مناسب للمواصلات",
        "italian": "comodo per i trasporti",
        "serbian": "цонвениент фор транспорт"
      }
    },
    {
      "german": "öffentliche Verkehrsmittel (Plural)",
      "translations": {
        "english": "public transport",
        "ukrainian": "громадський транспорт",
        "polish": "środki transportu publicznego",
        "albanian": "mjetet e transportit publik",
        "arabic": "وسائل النقل العام",
        "italian": "mezzi pubblici",
        "serbian": "публиц транспорт"
      }
    },
    {
      "german": "Ruhe haben",
      "translations": {
        "english": "to have peace and quiet",
        "ukrainian": "мати спокій",
        "polish": "mieć spokój",
        "albanian": "të kesh qetësi",
        "arabic": "أن يكون لديك هدوء",
        "italian": "avere pace",
        "serbian": "то хаве пеаце анд куиет"
      }
    },
    {
      "german": "stellen",
      "translations": {
        "english": "to place, to put (upright)",
        "ukrainian": "ставити",
        "polish": "stawiać",
        "albanian": "të vendosësh",
        "arabic": "يضع",
        "italian": "mettere",
        "serbian": "то плаце, то пут (упригхт)"
      }
    },
    {
      "german": "hängen",
      "translations": {
        "english": "to hang",
        "ukrainian": "вішати",
        "polish": "wieszać",
        "albanian": "të varësh",
        "arabic": "يعلق",
        "italian": "appendere",
        "serbian": "окачити"
      }
    },
    {
      "german": "stehen",
      "translations": {
        "english": "to stand",
        "ukrainian": "стояти",
        "polish": "stać",
        "albanian": "të qëndrosh",
        "arabic": "يقف",
        "italian": "stare in piedi",
        "serbian": "стајати"
      }
    },
    {
      "german": "legen",
      "translations": {
        "english": "to lay, to put (flat)",
        "ukrainian": "класти",
        "polish": "kłaść",
        "albanian": "të vendosësh",
        "arabic": "يضع (مستلقياً)",
        "italian": "posare",
        "serbian": "то лаи, то пут (флат)"
      }
    },
    {
      "german": "liegen",
      "translations": {
        "english": "to lie, to be lying",
        "ukrainian": "лежати",
        "polish": "leżeć",
        "albanian": "të shtrihet",
        "arabic": "يرقد",
        "italian": "giacere",
        "serbian": "то лие, то бе лиинг"
      }
    },
    {
      "german": "der Hammer / die Hämmer",
      "translations": {
        "english": "hammer",
        "ukrainian": "молоток",
        "polish": "młotek",
        "albanian": "çekani",
        "arabic": "المطرقة",
        "italian": "martello",
        "serbian": "чекић"
      }
    },
    {
      "german": "der Nagel / die Nägel",
      "translations": {
        "english": "nail",
        "ukrainian": "цвях",
        "polish": "gwóźdź",
        "albanian": "gozhdë",
        "arabic": "المسمار",
        "italian": "chiodo",
        "serbian": "ексер"
      }
    },
    {
      "german": "die Tapete / die Tapeten",
      "translations": {
        "english": "wallpaper",
        "ukrainian": "шпалери",
        "polish": "tapeta",
        "albanian": "letra muri",
        "arabic": "ورق الحائط",
        "italian": "carta da parati",
        "serbian": "валлпапер"
      }
    },
    {
      "german": "die Leiter / die Leitern",
      "translations": {
        "english": "ladder",
        "ukrainian": "драбина",
        "polish": "drabina",
        "albanian": "shkallë",
        "arabic": "السلم",
        "italian": "scala",
        "serbian": "ладдер"
      }
    },
    {
      "german": "streichen",
      "translations": {
        "english": "to paint",
        "ukrainian": "фарбувати",
        "polish": "malować",
        "albanian": "të lyesh",
        "arabic": "يطلي",
        "italian": "dipingere",
        "serbian": "фарбати"
      }
    },
    {
      "german": "tapezieren",
      "translations": {
        "english": "to wallpaper",
        "ukrainian": "клеїти шпалери",
        "polish": "tapetować",
        "albanian": "të vendosësh letra muri",
        "arabic": "يضع ورق الحائط",
        "italian": "tappezzare",
        "serbian": "тапецирати"
      }
    },
    {
      "german": "einverstanden",
      "translations": {
        "english": "agreed, in agreement",
        "ukrainian": "згодний",
        "polish": "zgoda",
        "albanian": "dakord",
        "arabic": "موافق",
        "italian": "d'accordo",
        "serbian": "агреед, ин агреемент"
      }
    },
    {
      "german": "die Meinung / die Meinungen",
      "translations": {
        "english": "opinion",
        "ukrainian": "думка",
        "polish": "opinia",
        "albanian": "mendimi",
        "arabic": "الرأي",
        "italian": "opinione",
        "serbian": "опинион"
      }
    },
    {
      "german": "die Monatsmiete / die Monatsmieten",
      "translations": {
        "english": "monthly rent",
        "ukrainian": "місячна орендна плата",
        "polish": "czynsz miesięczny",
        "albanian": "qiraja mujore",
        "arabic": "الإيجار الشهري",
        "italian": "affitto mensile",
        "serbian": "монтхли рент"
      }
    },
    {
      "german": "die Nebenkosten (Plural)",
      "translations": {
        "english": "additional costs, utilities",
        "ukrainian": "додаткові витрати",
        "polish": "opłaty dodatkowe",
        "albanian": "shpenzimet shtesë",
        "arabic": "التكاليف الإضافية",
        "italian": "spese accessorie",
        "serbian": "аддитионал цостс, утилитие"
      }
    },
    {
      "german": "die Kaltmiete (Singular)",
      "translations": {
        "english": "cold rent (without utilities)",
        "ukrainian": "холодна оренда",
        "polish": "czynsz podstawowy",
        "albanian": "qiraja bazë",
        "arabic": "الإيجار الأساسي",
        "italian": "affitto base",
        "serbian": "цолд рент (витхоут утилитиес)"
      }
    },
    {
      "german": "der Nachmieter / die Nachmieter",
      "translations": {
        "english": "next tenant (male)",
        "ukrainian": "наступний орендар",
        "polish": "kolejny najemca",
        "albanian": "qiramarrësi tjetër",
        "arabic": "المستأجر التالي",
        "italian": "prossimo inquilino",
        "serbian": "некст тенант (мале)"
      }
    },
    {
      "german": "die Nachmieterin / die Nachmieterinnen",
      "translations": {
        "english": "next tenant (female)",
        "ukrainian": "наступна орендарка",
        "polish": "kolejna najemczyni",
        "albanian": "qiramarrësja tjetër",
        "arabic": "المستأجرة التالية",
        "italian": "prossima inquilina",
        "serbian": "некст тенант (фемале)"
      }
    },
    {
      "german": "das Haustier / die Haustiere",
      "translations": {
        "english": "pet",
        "ukrainian": "домашня тварина",
        "polish": "zwierzę domowe",
        "albanian": "kafshe shtëpiake",
        "arabic": "حيوان أليف",
        "italian": "animale domestico",
        "serbian": "пет"
      }
    },
    {
      "german": "die Kaution / die Kautionen",
      "translations": {
        "english": "deposit, security deposit",
        "ukrainian": "застава",
        "polish": "kaucja",
        "albanian": "depozita",
        "arabic": "التأمين",
        "italian": "deposito cauzionale",
        "serbian": "депосит, сецурити депосит"
      }
    },
    {
      "german": "die Lage / die Lagen",
      "translations": {
        "english": "location, situation",
        "ukrainian": "розташування",
        "polish": "położenie",
        "albanian": "vendndodhja",
        "arabic": "الموقع",
        "italian": "posizione",
        "serbian": "лоцатион, ситуатион"
      }
    },
    {
      "german": "vermieten",
      "translations": {
        "english": "to rent out",
        "ukrainian": "здавати в оренду",
        "polish": "wynajmować",
        "albanian": "të jap me qira",
        "arabic": "يؤجر",
        "italian": "affittare",
        "serbian": "то рент оут"
      }
    },
    {
      "german": "die Einbauküche / die Einbauküchen",
      "translations": {
        "english": "fitted kitchen",
        "ukrainian": "вбудована кухня",
        "polish": "kuchnia zabudowana",
        "albanian": "kuzhina e integruar",
        "arabic": "المطبخ المدمج",
        "italian": "cucina componibile",
        "serbian": "фиттед китчен"
      }
    },
    {
      "german": "das WC / die WCs",
      "translations": {
        "english": "toilet, WC",
        "ukrainian": "туалет",
        "polish": "toaleta",
        "albanian": "tualet",
        "arabic": "المرحاض",
        "italian": "WC",
        "serbian": "тоилет, ВЦ"
      }
    },
    {
      "german": "renovieren",
      "translations": {
        "english": "to renovate",
        "ukrainian": "ремонтувати",
        "polish": "remontować",
        "albanian": "të rinovoj",
        "arabic": "يجدد",
        "italian": "rinnovare",
        "serbian": "реновирати"
      }
    },
    {
      "german": "die Renovierung / die Renovierungen",
      "translations": {
        "english": "renovation",
        "ukrainian": "ремонт",
        "polish": "remont",
        "albanian": "rinovimi",
        "arabic": "التجديد",
        "italian": "ristrutturazione",
        "serbian": "реноватион"
      }
    },
    {
      "german": "lassen",
      "translations": {
        "english": "to let, to have something done",
        "ukrainian": "дозволяти, давати зробити",
        "polish": "pozwalać, kazać",
        "albanian": "të lejoj, të bëj të bëhet",
        "arabic": "يترك، يجعل",
        "italian": "lasciare, far fare",
        "serbian": "то лет, то хаве сометхинг доне"
      }
    },
    {
      "german": "der Auftrag / die Aufträge",
      "translations": {
        "english": "order, commission",
        "ukrainian": "замовлення",
        "polish": "zlecenie",
        "albanian": "porosia",
        "arabic": "الطلب",
        "italian": "ordine",
        "serbian": "ордер, цоммиссион"
      }
    },
    {
      "german": "transportieren",
      "translations": {
        "english": "to transport",
        "ukrainian": "транспортувати",
        "polish": "transportować",
        "albanian": "të transportoj",
        "arabic": "ينقل",
        "italian": "trasportare",
        "serbian": "то транспорт"
      }
    },
    {
      "german": "aufhängen",
      "translations": {
        "english": "to hang up",
        "ukrainian": "вішати",
        "polish": "zawieszać",
        "albanian": "të varësh",
        "arabic": "يعلق",
        "italian": "appendere",
        "serbian": "то ханг уп"
      }
    },
    {
      "german": "sympathisch",
      "translations": {
        "english": "likeable, friendly",
        "ukrainian": "симпатичний",
        "polish": "sympatyczny",
        "albanian": "simpatik",
        "arabic": "ودود",
        "italian": "simpatico",
        "serbian": "ликеабле, фриендли"
      }
    },
    {
      "german": "unsympathisch",
      "translations": {
        "english": "unlikeable, unfriendly",
        "ukrainian": "несимпатичний",
        "polish": "niesympatyczny",
        "albanian": "josimpatik",
        "arabic": "غير ودود",
        "italian": "antipatico",
        "serbian": "унликеабле, унфриендли"
      }
    },
    {
      "german": "unfreundlich",
      "translations": {
        "english": "unfriendly",
        "ukrainian": "недружній",
        "polish": "nieprzyjazny",
        "albanian": "i pasjellshëm",
        "arabic": "غير ودي",
        "italian": "scortese",
        "serbian": "унфриендли"
      }
    },
    {
      "german": "sich kennenlernen",
      "translations": {
        "english": "to get to know each other",
        "ukrainian": "знайомитися",
        "polish": "poznawać się",
        "albanian": "të njohesh",
        "arabic": "يتعارفون",
        "italian": "conoscersi",
        "serbian": "то гет то кнов еач отхер"
      }
    },
    {
      "german": "sich freuen",
      "translations": {
        "english": "to be happy, to look forward to",
        "ukrainian": "радіти",
        "polish": "cieszyć się",
        "albanian": "të gëzohesh",
        "arabic": "يفرح",
        "italian": "rallegrarsi",
        "serbian": "то бе хаппи, то лоок форвард то"
      }
    },
    {
      "german": "sich fühlen",
      "translations": {
        "english": "to feel",
        "ukrainian": "почуватися",
        "polish": "czuć się",
        "albanian": "të ndihesh",
        "arabic": "يشعر",
        "italian": "sentirsi",
        "serbian": "осећати"
      }
    },
    {
      "german": "sich wohlfühlen",
      "translations": {
        "english": "to feel comfortable, to feel well",
        "ukrainian": "почуватися комфортно",
        "polish": "czuć się dobrze",
        "albanian": "të ndihesh mirë",
        "arabic": "يشعر بالراحة",
        "italian": "sentirsi bene",
        "serbian": "то феел цомфортабле, то феел велл"
      }
    },
    {
      "german": "sich verlieben",
      "translations": {
        "english": "to fall in love",
        "ukrainian": "закохатися",
        "polish": "zakochać się",
        "albanian": "të dashurohesh",
        "arabic": "يقع في الحب",
        "italian": "innamorarsi",
        "serbian": "то фалл ин лове"
      }
    },
    {
      "german": "sich küssen",
      "translations": {
        "english": "to kiss each other",
        "ukrainian": "цілуватися",
        "polish": "całować się",
        "albanian": "të puthen",
        "arabic": "يتبادلون القبل",
        "italian": "baciarsi",
        "serbian": "то кисс еач отхер"
      }
    },
    {
      "german": "sich trennen",
      "translations": {
        "english": "to separate, to break up",
        "ukrainian": "розлучатися",
        "polish": "rozstawać się",
        "albanian": "të ndahesh",
        "arabic": "ينفصلون",
        "italian": "separarsi",
        "serbian": "то сепарате, то бреак уп"
      }
    },
    {
      "german": "sich streiten",
      "translations": {
        "english": "to argue, to quarrel",
        "ukrainian": "сваритися",
        "polish": "kłócić się",
        "albanian": "të grindesh",
        "arabic": "يتشاجرون",
        "italian": "litigare",
        "serbian": "то аргуе, то куаррел"
      }
    },
    {
      "german": "sich entschuldigen",
      "translations": {
        "english": "to apologize",
        "ukrainian": "вибачатися",
        "polish": "przepraszać",
        "albanian": "të kërkosh ndjesë",
        "arabic": "يعتذر",
        "italian": "scusarsi",
        "serbian": "то апологизе"
      }
    },
    {
      "german": "stark",
      "translations": {
        "english": "strong",
        "ukrainian": "сильний",
        "polish": "silny",
        "albanian": "i fortë",
        "arabic": "قوي",
        "italian": "forte",
        "serbian": "стронг"
      }
    },
    {
      "german": "schwach",
      "translations": {
        "english": "weak",
        "ukrainian": "слабкий",
        "polish": "słaby",
        "albanian": "i dobët",
        "arabic": "ضعيف",
        "italian": "debole",
        "serbian": "веак"
      }
    },
    {
      "german": "einsam",
      "translations": {
        "english": "lonely",
        "ukrainian": "самотній",
        "polish": "samotny",
        "albanian": "i vetmuar",
        "arabic": "وحيد",
        "italian": "solo",
        "serbian": "лонели"
      }
    },
    {
      "german": "fremd",
      "translations": {
        "english": "strange, foreign",
        "ukrainian": "чужий",
        "polish": "obcy",
        "albanian": "i huaj",
        "arabic": "غريب",
        "italian": "estraneo",
        "serbian": "странге, фореигн"
      }
    },
    {
      "german": "erschöpft",
      "translations": {
        "english": "exhausted",
        "ukrainian": "виснажений",
        "polish": "wyczerpany",
        "albanian": "i lodhur",
        "arabic": "مرهق",
        "italian": "esausto",
        "serbian": "ексхаустед"
      }
    },
    {
      "german": "hoffentlich",
      "translations": {
        "english": "hopefully",
        "ukrainian": "сподіваюся",
        "polish": "mam nadzieję",
        "albanian": "shpresoj",
        "arabic": "نأمل",
        "italian": "speriamo",
        "serbian": "хопефулли"
      }
    },
    {
      "german": "der Altbau / die Altbauten",
      "translations": {
        "english": "old building",
        "ukrainian": "стара будівля",
        "polish": "stary budynek",
        "albanian": "ndërtesa e vjetër",
        "arabic": "مبنى قديم",
        "italian": "edificio vecchio",
        "serbian": "стара зграда"
      }
    },
    {
      "german": "das Reihenhaus / die Reihenhäuser",
      "translations": {
        "english": "terraced house, townhouse",
        "ukrainian": "будинок у ряді",
        "polish": "dom szeregowy",
        "albanian": "shtëpi e lidhur",
        "arabic": "منزل متصل",
        "italian": "casa a schiera",
        "serbian": "террацед хоусе, товнхоусе"
      }
    },
    {
      "german": "der Bauernhof / die Bauernhöfe",
      "translations": {
        "english": "farm",
        "ukrainian": "ферма",
        "polish": "gospodarstwo rolne",
        "albanian": "ferma",
        "arabic": "المزرعة",
        "italian": "fattoria",
        "serbian": "фарма"
      }
    },
    {
      "german": "die Großstadt / die Großstädte",
      "translations": {
        "english": "big city",
        "ukrainian": "велике місто",
        "polish": "duże miasto",
        "albanian": "qyteti i madh",
        "arabic": "المدينة الكبيرة",
        "italian": "grande città",
        "serbian": "биг цити"
      }
    },
    {
      "german": "die Kleinstadt / die Kleinstädte",
      "translations": {
        "english": "small town",
        "ukrainian": "маленьке місто",
        "polish": "małe miasto",
        "albanian": "qyteti i vogël",
        "arabic": "المدينة الصغيرة",
        "italian": "piccola città",
        "serbian": "смалл товн"
      }
    },
    {
      "german": "das Dorf / die Dörfer",
      "translations": {
        "english": "village",
        "ukrainian": "село",
        "polish": "wieś",
        "albanian": "fshati",
        "arabic": "القرية",
        "italian": "villaggio",
        "serbian": "село"
      }
    },
    {
      "german": "das Hochhaus / die Hochhäuser",
      "translations": {
        "english": "high-rise building",
        "ukrainian": "висотний будинок",
        "polish": "wieżowiec",
        "albanian": "ndërtesa e lartë",
        "arabic": "ناطحة سحاب",
        "italian": "grattacielo",
        "serbian": "хигх-рисе буилдинг"
      }
    },
    {
      "german": "das Einfamilienhaus / die Einfamilienhäuser",
      "translations": {
        "english": "single-family house",
        "ukrainian": "односімейний будинок",
        "polish": "dom jednorodzinny",
        "albanian": "shtëpi unifamiljare",
        "arabic": "منزل لعائلة واحدة",
        "italian": "casa unifamiliare",
        "serbian": "породична кућа"
      }
    },
    {
      "german": "der Neubau / die Neubauten",
      "translations": {
        "english": "new building",
        "ukrainian": "нова будівля",
        "polish": "nowy budynek",
        "albanian": "ndërtesa e re",
        "arabic": "مبنى جديد",
        "italian": "edificio nuovo",
        "serbian": "нова зграда"
      }
    },
    {
      "german": "der Herd / die Herde",
      "translations": {
        "english": "stove, cooker",
        "ukrainian": "плита",
        "polish": "kuchenka",
        "albanian": "sobë",
        "arabic": "الموقد",
        "italian": "fornello",
        "serbian": "стове, цоокер"
      }
    },
    {
      "german": "der Kühlschrank / die Kühlschränke",
      "translations": {
        "english": "refrigerator",
        "ukrainian": "холодильник",
        "polish": "lodówka",
        "albanian": "frigoriferi",
        "arabic": "الثلاجة",
        "italian": "frigorifero",
        "serbian": "рефригератор"
      }
    },
    {
      "german": "die Spülmaschine / die Spülmaschinen",
      "translations": {
        "english": "dishwasher",
        "ukrainian": "посудомийна машина",
        "polish": "zmywarka",
        "albanian": "larëse enësh",
        "arabic": "غسالة الصحون",
        "italian": "lavastoviglie",
        "serbian": "дишвашер"
      }
    },
    {
      "german": "der Löffel / die Löffel",
      "translations": {
        "english": "spoon",
        "ukrainian": "ложка",
        "polish": "łyżka",
        "albanian": "lugë",
        "arabic": "ملعقة",
        "italian": "cucchiaio",
        "serbian": "кашика"
      }
    },
    {
      "german": "die Lampe / die Lampen",
      "translations": {
        "english": "lamp",
        "ukrainian": "лампа",
        "polish": "lampa",
        "albanian": "llamba",
        "arabic": "المصباح",
        "italian": "lampada",
        "serbian": "лампа"
      }
    },
    {
      "german": "die Blume / die Blumen",
      "translations": {
        "english": "flower",
        "ukrainian": "квітка",
        "polish": "kwiat",
        "albanian": "lulja",
        "arabic": "الزهرة",
        "italian": "fiore",
        "serbian": "фловер"
      }
    },
    {
      "german": "der Schrank / die Schränke",
      "translations": {
        "english": "cupboard, wardrobe",
        "ukrainian": "шафа",
        "polish": "szafa",
        "albanian": "dollapi",
        "arabic": "الخزانة",
        "italian": "armadio",
        "serbian": "цупбоард, вардробе"
      }
    },
    {
      "german": "das Regal / die Regale",
      "translations": {
        "english": "shelf, shelving unit",
        "ukrainian": "полиця",
        "polish": "regał",
        "albanian": "raft",
        "arabic": "الرف",
        "italian": "scaffale",
        "serbian": "шелф, шелвинг унит"
      }
    },
    {
      "german": "der Teppich / die Teppiche",
      "translations": {
        "english": "carpet, rug",
        "ukrainian": "килим",
        "polish": "dywan",
        "albanian": "qilim",
        "arabic": "السجادة",
        "italian": "tappeto",
        "serbian": "царпет, руг"
      }
    },
    {
      "german": "der Boden / die Böden",
      "translations": {
        "english": "floor",
        "ukrainian": "підлога",
        "polish": "podłoga",
        "albanian": "dyshemeja",
        "arabic": "الأرضية",
        "italian": "pavimento",
        "serbian": "флоор"
      }
    },
    {
      "german": "die Decke / die Decken",
      "translations": {
        "english": "ceiling, blanket",
        "ukrainian": "стеля, ковдра",
        "polish": "sufit, koc",
        "albanian": "tavani, batanije",
        "arabic": "السقف، البطانية",
        "italian": "soffitto, coperta",
        "serbian": "цеилинг, бланкет"
      }
    },
    {
      "german": "die Wand / die Wände",
      "translations": {
        "english": "wall",
        "ukrainian": "стіна",
        "polish": "ściana",
        "albanian": "muri",
        "arabic": "الجدار",
        "italian": "parete",
        "serbian": "зид"
      }
    },
    {
      "german": "das Sofa / die Sofas",
      "translations": {
        "english": "sofa",
        "ukrainian": "диван",
        "polish": "sofa",
        "albanian": "divan",
        "arabic": "الأريكة",
        "italian": "divano",
        "serbian": "софа"
      }
    },
    {
      "german": "die Brille / die Brillen",
      "translations": {
        "english": "glasses",
        "ukrainian": "окуляри",
        "polish": "okulary",
        "albanian": "syze",
        "arabic": "النظارات",
        "italian": "occhiali",
        "serbian": "глассе"
      }
    },
    {
      "german": "die Tasche / die Taschen",
      "translations": {
        "english": "bag",
        "ukrainian": "сумка",
        "polish": "torba",
        "albanian": "çantë",
        "arabic": "الحقيبة",
        "italian": "borsa",
        "serbian": "баг"
      }
    },
    {
      "german": "die Ecke / die Ecken",
      "translations": {
        "english": "corner",
        "ukrainian": "кут",
        "polish": "róg",
        "albanian": "qoshja",
        "arabic": "الزاوية",
        "italian": "angolo",
        "serbian": "цорнер"
      }
    },
    {
      "german": "der Umzug / die Umzüge",
      "translations": {
        "english": "move, relocation",
        "ukrainian": "переїзд",
        "polish": "przeprowadzka",
        "albanian": "shpërngulja",
        "arabic": "الانتقال",
        "italian": "trasloco",
        "serbian": "мове, релоцатион"
      }
    },
    {
      "german": "der Umzugskarton / die Umzugskartons",
      "translations": {
        "english": "moving box",
        "ukrainian": "коробка для переїзду",
        "polish": "karton do przeprowadzki",
        "albanian": "kuti shpërnguljeje",
        "arabic": "صندوق النقل",
        "italian": "scatola da trasloco",
        "serbian": "кутија за сеобу"
      }
    },
    {
      "german": "einpacken",
      "translations": {
        "english": "to pack",
        "ukrainian": "пакувати",
        "polish": "pakować",
        "albanian": "të paketoj",
        "arabic": "يعبئ",
        "italian": "imballare",
        "serbian": "паковати"
      }
    },
    {
      "german": "Löcher bohren",
      "translations": {
        "english": "to drill holes",
        "ukrainian": "свердлити отвори",
        "polish": "wiercić dziury",
        "albanian": "të shposh vrima",
        "arabic": "يثقب الحفر",
        "italian": "forare",
        "serbian": "бушити рупе"
      }
    },
    {
      "german": "die Waschmaschine / die Waschmaschinen",
      "translations": {
        "english": "washing machine",
        "ukrainian": "пральна машина",
        "polish": "pralka",
        "albanian": "makina larëse",
        "arabic": "الغسالة",
        "italian": "lavatrice",
        "serbian": "вашинг мачине"
      }
    },
    {
      "german": "anschließen",
      "translations": {
        "english": "to connect",
        "ukrainian": "підключати",
        "polish": "podłączać",
        "albanian": "të lidh",
        "arabic": "يوصل",
        "italian": "collegare",
        "serbian": "повезати"
      }
    },
    {
      "german": "übergeben",
      "translations": {
        "english": "to hand over",
        "ukrainian": "передавати",
        "polish": "przekazywać",
        "albanian": "të dorëzoj",
        "arabic": "يسلّم",
        "italian": "consegnare",
        "serbian": "то ханд овер"
      }
    },
    {
      "german": "anmelden",
      "translations": {
        "english": "to register",
        "ukrainian": "реєструвати",
        "polish": "zgłaszać",
        "albanian": "të regjistroj",
        "arabic": "يسجل",
        "italian": "iscriversi",
        "serbian": "то регистер"
      }
    },
    {
      "german": "die Wandfarbe / die Wandfarben",
      "translations": {
        "english": "wall paint",
        "ukrainian": "фарба для стін",
        "polish": "farba do ścian",
        "albanian": "bojë muri",
        "arabic": "طلاء الجدران",
        "italian": "vernice per pareti",
        "serbian": "валл паинт"
      }
    },
    {
      "german": "die Farbroller / die Farbroller",
      "translations": {
        "english": "paint roller",
        "ukrainian": "валик для фарби",
        "polish": "wałek malarski",
        "albanian": "rulo bojësh",
        "arabic": "أسطوانة الدهان",
        "italian": "rullo per pittura",
        "serbian": "паинт роллер"
      }
    },
    {
      "german": "der Pinsel / die Pinsel",
      "translations": {
        "english": "brush",
        "ukrainian": "пензель",
        "polish": "pędzel",
        "albanian": "furçë",
        "arabic": "الفرشاة",
        "italian": "pennello",
        "serbian": "бруш"
      }
    },
    {
      "german": "abbauen",
      "translations": {
        "english": "to dismantle, to take apart",
        "ukrainian": "розбирати",
        "polish": "rozmontowywać",
        "albanian": "të çmontoj",
        "arabic": "يفكك",
        "italian": "smontare",
        "serbian": "то дисмантле, то таке апарт"
      }
    },
    {
      "german": "einbauen",
      "translations": {
        "english": "to install, to build in",
        "ukrainian": "вбудовувати",
        "polish": "montować",
        "albanian": "të instaloj",
        "arabic": "يركب",
        "italian": "installare",
        "serbian": "то инсталл, то буилд ин"
      }
    },
    {
      "german": "einräumen",
      "translations": {
        "english": "to put away, to arrange",
        "ukrainian": "розставляти",
        "polish": "układać",
        "albanian": "të sistemoj",
        "arabic": "يرتب",
        "italian": "sistemare",
        "serbian": "то пут аваи, то арранге"
      }
    }
  ],

  "7": [
    {
      "german": "der Feiertag / die Feiertage",
      "translations": {
        "english": "public holiday",
        "ukrainian": "свято",
        "polish": "święto",
        "albanian": "festa",
        "arabic": "العطلة",
        "italian": "festività",
        "serbian": "публиц холидаи"
      }
    },
    {
      "german": "Weihnachten",
      "translations": {
        "english": "Christmas",
        "ukrainian": "Різдво",
        "polish": "Boże Narodzenie",
        "albanian": "Krishtlindjet",
        "arabic": "عيد الميلاد",
        "italian": "Natale",
        "serbian": "Божић"
      }
    },
    {
      "german": "das Feuerwerk / die Feuerwerke",
      "translations": {
        "english": "fireworks",
        "ukrainian": "феєрверк",
        "polish": "fajerwerki",
        "albanian": "fishekzjarrë",
        "arabic": "الألعاب النارية",
        "italian": "fuochi d'artificio",
        "serbian": "ватромет"
      }
    },
    {
      "german": "schenken",
      "translations": {
        "english": "to give (as a gift)",
        "ukrainian": "дарувати",
        "polish": "podarować",
        "albanian": "të dhuroj",
        "arabic": "يهدي",
        "italian": "regalare",
        "serbian": "то гиве (ас а гифт)"
      }
    },
    {
      "german": "sich verkleiden",
      "translations": {
        "english": "to dress up, to disguise oneself",
        "ukrainian": "переодягатися",
        "polish": "przebierać się",
        "albanian": "të maskohesh",
        "arabic": "يتنكر",
        "italian": "travestirsi",
        "serbian": "то дресс уп, то дисгуисе онеселф"
      }
    },
    {
      "german": "der Geburtstag / die Geburtstage",
      "translations": {
        "english": "birthday",
        "ukrainian": "день народження",
        "polish": "urodziny",
        "albanian": "ditëlindja",
        "arabic": "عيد الميلاد",
        "italian": "compleanno",
        "serbian": "рођендан"
      }
    },
    {
      "german": "der Hochzeitstag / die Hochzeitstage",
      "translations": {
        "english": "wedding day, wedding anniversary",
        "ukrainian": "день весілля",
        "polish": "rocznica ślubu",
        "albanian": "dita e dasmës",
        "arabic": "ذكرى الزواج",
        "italian": "anniversario di matrimonio",
        "serbian": "веддинг даи, веддинг анниверсари"
      }
    },
    {
      "german": "die Hochzeitsfeier / die Hochzeitsfeiern",
      "translations": {
        "english": "wedding celebration",
        "ukrainian": "весільне свято",
        "polish": "uroczystość weselna",
        "albanian": "festa e dasmës",
        "arabic": "حفل الزفاف",
        "italian": "festa di matrimonio",
        "serbian": "веддинг целебратион"
      }
    },
    {
      "german": "das Jubiläum / die Jubiläen",
      "translations": {
        "english": "anniversary, jubilee",
        "ukrainian": "ювілей",
        "polish": "jubileusz",
        "albanian": "jubileu",
        "arabic": "اليوبيل",
        "italian": "giubileo",
        "serbian": "анниверсари, јубилее"
      }
    },
    {
      "german": "das Geschenk / die Geschenke",
      "translations": {
        "english": "gift, present",
        "ukrainian": "подарунок",
        "polish": "prezent",
        "albanian": "dhuratë",
        "arabic": "هدية",
        "italian": "regalo",
        "serbian": "поклон"
      }
    },
    {
      "german": "der Gutschein / die Gutscheine",
      "translations": {
        "english": "voucher, gift certificate",
        "ukrainian": "ваучер",
        "polish": "bon",
        "albanian": "kupon",
        "arabic": "قسيمة",
        "italian": "buono regalo",
        "serbian": "воучер, гифт цертифицате"
      }
    },
    {
      "german": "die Kerze / die Kerzen",
      "translations": {
        "english": "candle",
        "ukrainian": "свічка",
        "polish": "świeca",
        "albanian": "qiri",
        "arabic": "شمعة",
        "italian": "candela",
        "serbian": "свећа"
      }
    },
    {
      "german": "die Kette / die Ketten",
      "translations": {
        "english": "chain, necklace",
        "ukrainian": "ланцюжок",
        "polish": "łańcuszek",
        "albanian": "zinxhir",
        "arabic": "سلسلة",
        "italian": "collana",
        "serbian": "чаин, нецклаце"
      }
    },
    {
      "german": "das Geschirr",
      "translations": {
        "english": "dishes, tableware",
        "ukrainian": "посуд",
        "polish": "naczynia",
        "albanian": "enët",
        "arabic": "الأواني",
        "italian": "stoviglie",
        "serbian": "дишес, таблеваре"
      }
    },
    {
      "german": "die Schachtel Pralinen / die Schachteln Pralinen",
      "translations": {
        "english": "box of chocolates",
        "ukrainian": "коробка цукерок",
        "polish": "pudełko czekoladek",
        "albanian": "kuti çokollatash",
        "arabic": "علبة شوكولاتة",
        "italian": "scatola di cioccolatini",
        "serbian": "бокс оф чоцолате"
      }
    },
    {
      "german": "das Parfüm / die Parfüms",
      "translations": {
        "english": "perfume",
        "ukrainian": "парфуми",
        "polish": "perfumy",
        "albanian": "parfum",
        "arabic": "العطر",
        "italian": "profumo",
        "serbian": "перфуме"
      }
    },
    {
      "german": "der Schmuck",
      "translations": {
        "english": "jewelry",
        "ukrainian": "прикраси",
        "polish": "biżuteria",
        "albanian": "stoli",
        "arabic": "المجوهرات",
        "italian": "gioielli",
        "serbian": "јевелри"
      }
    },
    {
      "german": "der Blumenstrauß / die Blumensträuße",
      "translations": {
        "english": "bouquet of flowers",
        "ukrainian": "букет квітів",
        "polish": "bukiet kwiatów",
        "albanian": "buqetë lulesh",
        "arabic": "باقة زهور",
        "italian": "mazzo di fiori",
        "serbian": "боукует оф фловер"
      }
    },
    {
      "german": "die Rose / die Rosen",
      "translations": {
        "english": "rose",
        "ukrainian": "троянда",
        "polish": "róża",
        "albanian": "trëndafil",
        "arabic": "وردة",
        "italian": "rosa",
        "serbian": "росе"
      }
    },
    {
      "german": "das Handtuch / die Handtücher",
      "translations": {
        "english": "towel",
        "ukrainian": "рушник",
        "polish": "ręcznik",
        "albanian": "peshqir",
        "arabic": "منشفة",
        "italian": "asciugamano",
        "serbian": "товел"
      }
    },
    {
      "german": "der Koffer / die Koffer",
      "translations": {
        "english": "suitcase",
        "ukrainian": "валіза",
        "polish": "walizka",
        "albanian": "valixhe",
        "arabic": "حقيبة سفر",
        "italian": "valigia",
        "serbian": "суитцасе"
      }
    },
    {
      "german": "die Decke / die Decken",
      "translations": {
        "english": "blanket, cover",
        "ukrainian": "ковдра",
        "polish": "koc",
        "albanian": "mbulojë",
        "arabic": "بطانية",
        "italian": "coperta",
        "serbian": "бланкет, цовер"
      }
    },
    {
      "german": "der Ehemann / die Ehemänner",
      "translations": {
        "english": "husband",
        "ukrainian": "чоловік",
        "polish": "mąż",
        "albanian": "bashkëshorti",
        "arabic": "الزوج",
        "italian": "marito",
        "serbian": "муж"
      }
    },
    {
      "german": "die Ehefrau / die Ehefrauen",
      "translations": {
        "english": "wife",
        "ukrainian": "дружина",
        "polish": "żona",
        "albanian": "bashkëshortja",
        "arabic": "الزوجة",
        "italian": "moglie",
        "serbian": "жена, супруга"
      }
    },
    {
      "german": "normalerweise",
      "translations": {
        "english": "normally, usually",
        "ukrainian": "зазвичай",
        "polish": "normalnie",
        "albanian": "normalisht",
        "arabic": "عادة",
        "italian": "normalmente",
        "serbian": "нормалли, усуалли"
      }
    },
    {
      "german": "die Braut / die Bräute",
      "translations": {
        "english": "bride",
        "ukrainian": "наречена",
        "polish": "panna młoda",
        "albanian": "nusja",
        "arabic": "العروس",
        "italian": "sposa",
        "serbian": "млада"
      }
    },
    {
      "german": "der Bräutigam / die Bräutigame",
      "translations": {
        "english": "groom",
        "ukrainian": "наречений",
        "polish": "pan młody",
        "albanian": "dhëndri",
        "arabic": "العريس",
        "italian": "sposo",
        "serbian": "младожења"
      }
    },
    {
      "german": "das Brautpaar / die Brautpaare",
      "translations": {
        "english": "bride and groom",
        "ukrainian": "наречені",
        "polish": "para młoda",
        "albanian": "çifti i ri i martuar",
        "arabic": "العروسان",
        "italian": "sposi",
        "serbian": "бриде анд гроом"
      }
    },
    {
      "german": "das Brautkleid / die Brautkleider",
      "translations": {
        "english": "wedding dress",
        "ukrainian": "весільна сукня",
        "polish": "suknia ślubna",
        "albanian": "fustan nuse",
        "arabic": "فستان الزفاف",
        "italian": "abito da sposa",
        "serbian": "венчаница"
      }
    },
    {
      "german": "tragen",
      "translations": {
        "english": "to wear, to carry",
        "ukrainian": "носити",
        "polish": "nosić",
        "albanian": "të mbash",
        "arabic": "يحمل، يرتدي",
        "italian": "portare",
        "serbian": "то веар, то царри"
      }
    },
    {
      "german": "der Schleier / die Schleier",
      "translations": {
        "english": "veil",
        "ukrainian": "вуаль",
        "polish": "welon",
        "albanian": "vel",
        "arabic": "الحجاب",
        "italian": "velo",
        "serbian": "веил"
      }
    },
    {
      "german": "der Ohrring / die Ohrringe",
      "translations": {
        "english": "earring",
        "ukrainian": "сережка",
        "polish": "kolczyk",
        "albanian": "vath",
        "arabic": "قرط",
        "italian": "orecchino",
        "serbian": "еарринг"
      }
    },
    {
      "german": "eng",
      "translations": {
        "english": "tight, narrow",
        "ukrainian": "вузький",
        "polish": "ciasny",
        "albanian": "i ngushtë",
        "arabic": "ضيق",
        "italian": "stretto",
        "serbian": "тигхт, нарров"
      }
    },
    {
      "german": "wunderschön",
      "translations": {
        "english": "beautiful, gorgeous",
        "ukrainian": "чудовий",
        "polish": "wspaniały",
        "albanian": "i mrekullueshëm",
        "arabic": "جميل جداً",
        "italian": "bellissimo",
        "serbian": "беаутифул, горгеоу"
      }
    },
    {
      "german": "romantisch",
      "translations": {
        "english": "romantic",
        "ukrainian": "романтичний",
        "polish": "romantyczny",
        "albanian": "romantik",
        "arabic": "رومانسي",
        "italian": "romantico",
        "serbian": "романтиц"
      }
    },
    {
      "german": "die Hochzeitstorte / die Hochzeitstorten",
      "translations": {
        "english": "wedding cake",
        "ukrainian": "весільний торт",
        "polish": "tort weselny",
        "albanian": "torta e dasmës",
        "arabic": "كعكة الزفاف",
        "italian": "torta nuziale",
        "serbian": "веддинг цаке"
      }
    },
    {
      "german": "Reis werfen",
      "translations": {
        "english": "to throw rice",
        "ukrainian": "кидати рис",
        "polish": "rzucać ryż",
        "albanian": "të hedhësh oriz",
        "arabic": "يرمي الأرز",
        "italian": "lanciare riso",
        "serbian": "то тхров рице"
      }
    },
    {
      "german": "Ringe tauschen",
      "translations": {
        "english": "to exchange rings",
        "ukrainian": "обмінюватися кільцями",
        "polish": "wymieniać się obrączkami",
        "albanian": "të shkëmbesh unaza",
        "arabic": "يتبادل الخواتم",
        "italian": "scambiarsi gli anelli",
        "serbian": "то ексчанге ринг"
      }
    },
    {
      "german": "pünktlich",
      "translations": {
        "english": "punctual, on time",
        "ukrainian": "пунктуальний",
        "polish": "punktualny",
        "albanian": "i saktë",
        "arabic": "دقيق",
        "italian": "puntuale",
        "serbian": "пунцтуал, он тиме"
      }
    },
    {
      "german": "der Gastgeber / die Gastgeber",
      "translations": {
        "english": "host (male)",
        "ukrainian": "господар",
        "polish": "gospodarz",
        "albanian": "pritësi",
        "arabic": "المضيف",
        "italian": "ospite",
        "serbian": "хост (мале)"
      }
    },
    {
      "german": "die Gastgeberin / die Gastgeberinnen",
      "translations": {
        "english": "host (female)",
        "ukrainian": "господиня",
        "polish": "gospodyni",
        "albanian": "pritësja",
        "arabic": "المضيفة",
        "italian": "ospite",
        "serbian": "хост (фемале)"
      }
    },
    {
      "german": "sich unterhalten",
      "translations": {
        "english": "to converse, to chat",
        "ukrainian": "розмовляти",
        "polish": "rozmawiać",
        "albanian": "të bisedosh",
        "arabic": "يتحدث",
        "italian": "conversare",
        "serbian": "то цонверсе, то чат"
      }
    },
    {
      "german": "auffallen",
      "translations": {
        "english": "to stand out, to attract attention",
        "ukrainian": "привертати увагу",
        "polish": "rzucać się w oczy",
        "albanian": "të dalësh në sy",
        "arabic": "يلفت الانتباه",
        "italian": "saltare all'occhio",
        "serbian": "то станд оут, то аттрацт аттентион"
      }
    },
    {
      "german": "dabei sein",
      "translations": {
        "english": "to be present, to attend",
        "ukrainian": "бути присутнім",
        "polish": "być obecnym",
        "albanian": "të jesh prezent",
        "arabic": "يكون حاضراً",
        "italian": "essere presente",
        "serbian": "то бе пресент, то аттенд"
      }
    },
    {
      "german": "höflich",
      "translations": {
        "english": "polite",
        "ukrainian": "ввічливий",
        "polish": "grzeczny",
        "albanian": "i sjellshëm",
        "arabic": "مؤدب",
        "italian": "educato",
        "serbian": "полите"
      }
    },
    {
      "german": "vorgestern",
      "translations": {
        "english": "the day before yesterday",
        "ukrainian": "позавчора",
        "polish": "przedwczoraj",
        "albanian": "pardje",
        "arabic": "أول أمس",
        "italian": "l'altro ieri",
        "serbian": "даи бефоре иестердаи"
      }
    },
    {
      "german": "die Stimmung",
      "translations": {
        "english": "mood, atmosphere",
        "ukrainian": "настрій",
        "polish": "nastrój",
        "albanian": "atmosfera",
        "arabic": "المزاج",
        "italian": "umore",
        "serbian": "моод, атмоспхере"
      }
    },
    {
      "german": "normal",
      "translations": {
        "english": "normal",
        "ukrainian": "нормальний",
        "polish": "normalny",
        "albanian": "normal",
        "arabic": "عادي",
        "italian": "normale",
        "serbian": "нормалан"
      }
    },
    {
      "german": "anziehen",
      "translations": {
        "english": "to put on, to dress",
        "ukrainian": "одягати",
        "polish": "zakładać",
        "albanian": "të veshësh",
        "arabic": "يرتدي",
        "italian": "indossare",
        "serbian": "то пут он, то дре"
      }
    },
    {
      "german": "Herzlichen Glückwunsch!",
      "translations": {
        "english": "Congratulations!",
        "ukrainian": "Вітаю!",
        "polish": "Gratulacje!",
        "albanian": "Urime!",
        "arabic": "تهانينا!",
        "italian": "Congratulazioni!",
        "serbian": "Цонгратулатионс!"
      }
    },
    {
      "german": "Alles Gute!",
      "translations": {
        "english": "All the best!",
        "ukrainian": "Всього найкращого!",
        "polish": "Wszystkiego najlepszego!",
        "albanian": "Të gjitha më të mirat!",
        "arabic": "كل التوفيق!",
        "italian": "Auguri!",
        "serbian": "Алл тхе бест!"
      }
    },
    {
      "german": "Frohe Ostern!",
      "translations": {
        "english": "Happy Easter!",
        "ukrainian": "Христос Воскрес!",
        "polish": "Wesołych Świąt Wielkanocnych!",
        "albanian": "Gëzuar Pashkët!",
        "arabic": "عيد فصح سعيد!",
        "italian": "Buona Pasqua!",
        "serbian": "Хаппи Еастер!"
      }
    },
    {
      "german": "Prosit Neujahr!",
      "translations": {
        "english": "Happy New Year!",
        "ukrainian": "З Новим Роком!",
        "polish": "Szczęśliwego Nowego Roku!",
        "albanian": "Gëzuar Vitin e Ri!",
        "arabic": "سنة جديدة سعيدة!",
        "italian": "Felice Anno Nuovo!",
        "serbian": "Хаппи Нев Иеар!"
      }
    },
    {
      "german": "das Kostüm / die Kostüme",
      "translations": {
        "english": "costume",
        "ukrainian": "костюм",
        "polish": "kostium",
        "albanian": "kostum",
        "arabic": "زي",
        "italian": "costume",
        "serbian": "костим"
      }
    },
    {
      "german": "das Konfetti",
      "translations": {
        "english": "confetti",
        "ukrainian": "конфетті",
        "polish": "konfetti",
        "albanian": "konfeti",
        "arabic": "قصاصات ورق ملونة",
        "italian": "coriandoli",
        "serbian": "конфете"
      }
    },
    {
      "german": "die Luftschlangen",
      "translations": {
        "english": "streamers",
        "ukrainian": "серпантин",
        "polish": "serpentyny",
        "albanian": "banderola",
        "arabic": "الأشرطة الملونة",
        "italian": "stelle filanti",
        "serbian": "стреамер"
      }
    },
    {
      "german": "der Umzug / die Umzüge",
      "translations": {
        "english": "parade, procession",
        "ukrainian": "парад",
        "polish": "pochód",
        "albanian": "paradë",
        "arabic": "موكب",
        "italian": "sfilata",
        "serbian": "параде, процессион"
      }
    },
    {
      "german": "das Osterei / die Ostereier",
      "translations": {
        "english": "Easter egg",
        "ukrainian": "великоднє яйце",
        "polish": "jajko wielkanocne",
        "albanian": "vezë paské",
        "arabic": "بيضة عيد الفصح",
        "italian": "uovo di Pasqua",
        "serbian": "ускршње јаје"
      }
    },
    {
      "german": "der Osterhase / die Osterhasen",
      "translations": {
        "english": "Easter bunny",
        "ukrainian": "великодній заєць",
        "polish": "zajączek wielkanocny",
        "albanian": "lepuri i Pashkëve",
        "arabic": "أرنب عيد الفصح",
        "italian": "coniglio di Pasqua",
        "serbian": "ускршњи зека"
      }
    },
    {
      "german": "der Osterzopf / die Osterzöpfe",
      "translations": {
        "english": "Easter bread (braided)",
        "ukrainian": "великодній плетений хліб",
        "polish": "wielkanocny warkocz",
        "albanian": "bukë e thurur e Pashkëve",
        "arabic": "خبز عيد الفصح المضفر",
        "italian": "treccia pasquale",
        "serbian": "Еастер бреад (браидед)"
      }
    },
    {
      "german": "der Osterstrauß / die Ostersträuße",
      "translations": {
        "english": "Easter bouquet",
        "ukrainian": "великодній букет",
        "polish": "wielkanocny bukiet",
        "albanian": "buqetë e Pashkëve",
        "arabic": "باقة عيد الفصح",
        "italian": "bouquet pasquale",
        "serbian": "Еастер боукует"
      }
    },
    {
      "german": "der Sankt Martin",
      "translations": {
        "english": "Saint Martin",
        "ukrainian": "Святий Мартин",
        "polish": "Święty Marcin",
        "albanian": "Shën Martini",
        "arabic": "القديس مارتن",
        "italian": "San Martino",
        "serbian": "Саинт Мартин"
      }
    },
    {
      "german": "die Laterne / die Laternen",
      "translations": {
        "english": "lantern",
        "ukrainian": "ліхтар",
        "polish": "latarnia",
        "albanian": "fener",
        "arabic": "فانوس",
        "italian": "lanterna",
        "serbian": "лантерн"
      }
    },
    {
      "german": "der Laternenumzug / die Laternenumzüge",
      "translations": {
        "english": "lantern procession",
        "ukrainian": "процесія з ліхтарями",
        "polish": "pochód z latarniami",
        "albanian": "procesion me fenerë",
        "arabic": "موكب الفوانيس",
        "italian": "processione delle lanterne",
        "serbian": "лантерн процессион"
      }
    },
    {
      "german": "der Nikolaus / die Nikoläuse",
      "translations": {
        "english": "Saint Nicholas",
        "ukrainian": "Святий Миколай",
        "polish": "Święty Mikołaj",
        "albanian": "Shën Kolla",
        "arabic": "القديس نيكولاس",
        "italian": "San Nicola",
        "serbian": "Свети Никола"
      }
    },
    {
      "german": "der Stiefel / die Stiefel",
      "translations": {
        "english": "boot",
        "ukrainian": "чобіт",
        "polish": "but",
        "albanian": "çizme",
        "arabic": "حذاء طويل",
        "italian": "stivale",
        "serbian": "боот"
      }
    },
    {
      "german": "die Süßigkeiten",
      "translations": {
        "english": "sweets, candy",
        "ukrainian": "солодощі",
        "polish": "słodycze",
        "albanian": "ëmbëlsira",
        "arabic": "الحلويات",
        "italian": "dolciumi",
        "serbian": "свеетс, цанди"
      }
    },
    {
      "german": "der Weihnachtsbaum / die Weihnachtsbäume",
      "translations": {
        "english": "Christmas tree",
        "ukrainian": "різдвяна ялинка",
        "polish": "choinka",
        "albanian": "pema e Krishtlindjeve",
        "arabic": "شجرة الميلاد",
        "italian": "albero di Natale",
        "serbian": "божићна јелка"
      }
    },
    {
      "german": "die Weihnachtsgans / die Weihnachtsgänse",
      "translations": {
        "english": "Christmas goose",
        "ukrainian": "різдвяна гуска",
        "polish": "gęś na Boże Narodzenie",
        "albanian": "pata e Krishtlindjeve",
        "arabic": "إوزة عيد الميلاد",
        "italian": "oca di Natale",
        "serbian": "Чристмас гоосе"
      }
    },
    {
      "german": "der Adventskalender / die Adventskalender",
      "translations": {
        "english": "advent calendar",
        "ukrainian": "адвент-календар",
        "polish": "kalendarz adwentowy",
        "albanian": "kalendar i Adventit",
        "arabic": "تقويم المجيء",
        "italian": "calendario dell'Avvento",
        "serbian": "адвентни календар"
      }
    },
    {
      "german": "die Rakete / die Raketen",
      "translations": {
        "english": "rocket, firework rocket",
        "ukrainian": "ракета",
        "polish": "rakieta",
        "albanian": "raketë",
        "arabic": "صاروخ",
        "italian": "razzo",
        "serbian": "роцкет, фиреворк роцкет"
      }
    },
    {
      "german": "das Bleigießen",
      "translations": {
        "english": "lead pouring (New Year's fortune-telling)",
        "ukrainian": "виливання свинцю",
        "polish": "wróżenie z ołowiu",
        "albanian": "hedhja e plumbit",
        "arabic": "صب الرصاص",
        "italian": "fusione del piombo",
        "serbian": "леад поуринг (Нев Иеар'с фортуне-теллинг)"
      }
    },
    {
      "german": "der Böller / die Böller",
      "translations": {
        "english": "firecracker",
        "ukrainian": "петарда",
        "polish": "petarda",
        "albanian": "fishek",
        "arabic": "مفرقعة نارية",
        "italian": "petardo",
        "serbian": "петарда"
      }
    }
  ]

});
