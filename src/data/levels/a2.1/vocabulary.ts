import { Card, Translations } from '../../../types';

export const A2_1_ALL_SECTIONS = [1, 2, 3, 4]; // Placeholder sections


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
        "italian": "immigrato"
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
        "italian": "immigrata"
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
        "italian": "mondo"
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
        "italian": "motivo"
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
        "italian": "diverso"
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
        "italian": "raccontare"
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
        "italian": "patria"
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
        "italian": "lasciare"
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
        "italian": "perdere"
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
        "italian": "vivere"
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
        "italian": "conoscere"
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
        "italian": "arrendersi"
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
        "italian": "motivare"
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
        "italian": "brutto"
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
        "italian": "deluso"
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
        "italian": "infastidito"
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
        "italian": "maturità"
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
        "italian": "architetto"
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
        "italian": "architetta"
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
        "italian": "capo reparto"
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
        "italian": "capo reparto (f)"
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
        "italian": "lavoro part-time"
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
        "italian": "centro per rifugiati"
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
        "italian": "associazione"
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
        "italian": "attivo"
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
        "italian": "depresso"
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
        "italian": "riuscire"
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
        "italian": "università"
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
        "italian": "studi"
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
        "italian": "giovane"
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
        "italian": "inizio"
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
        "italian": "difficile"
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
        "italian": "storia"
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
        "italian": "pulito"
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
        "italian": "sporco"
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
        "italian": "frenetico"
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
        "italian": "in realtà"
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
        "italian": "pronunciare"
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
        "italian": "ripetere"
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
        "italian": "ascoltare"
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
        "italian": "provare"
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
        "italian": "parola"
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
        "italian": "frase"
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
        "italian": "esercizio"
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
        "italian": "errore"
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
        "italian": "pronuncia"
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
        "italian": "assolutamente"
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
        "italian": "divertente"
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
        "italian": "avere coraggio"
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
        "italian": "avere paura"
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
        "italian": "per iscritto"
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
        "italian": "imparare a memoria"
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
        "italian": "esercitarsi"
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
        "italian": "media, mezzo di comunicazione"
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
        "italian": "giornale"
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
        "italian": "cuffie"
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
        "italian": "e-book"
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
        "italian": "laptop"
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
        "italian": "cellulare"
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
        "italian": "smartphone"
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
        "italian": "tablet"
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
        "italian": "internet"
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
        "italian": "email"
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
        "italian": "televisione"
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
        "italian": "televisore"
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
        "italian": "radio"
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
        "italian": "chattare"
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
        "italian": "telefonare"
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
        "italian": "navigare"
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
        "italian": "prezzo"
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
        "italian": "messaggio, notizie"
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
        "italian": "gioco online"
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
        "italian": "contatto"
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
        "italian": "pratico"
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
        "italian": "importante"
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
        "italian": "interessante"
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
        "italian": "emozionante"
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
        "italian": "rilassante"
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
        "italian": "raggiungibile"
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
        "italian": "quotidiano"
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
        "italian": "la mattina"
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
        "italian": "a mezzogiorno"
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
        "italian": "nel pomeriggio"
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
        "italian": "la sera"
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
        "italian": "di notte"
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
        "italian": "computer"
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
        "italian": "fare ricerche"
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
        "italian": "mandare"
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
        "italian": "file"
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
        "italian": "aprire"
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
        "italian": "chiudere"
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
        "italian": "stampare"
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
        "italian": "salvare"
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
        "italian": "testo"
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
        "italian": "programma"
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
        "italian": "oggetto"
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
        "italian": "allegare"
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
        "italian": "destinatario"
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
        "italian": "selezionare"
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
        "italian": "inviare"
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
        "italian": "app"
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
        "italian": "software"
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
        "italian": "utile"
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
        "italian": "problema"
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
        "italian": "film"
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
        "italian": "film d'animazione"
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
        "italian": "quiz"
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
        "italian": "giallo"
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
        "italian": "documentario"
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
        "italian": "programma sportivo"
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
        "italian": "serie"
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
        "italian": "talk show"
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
        "italian": "trasmissione"
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
        "italian": "offrire"
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
        "italian": "programma per bambini"
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
        "italian": "capire"
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
        "italian": "parola"
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
        "italian": "internazionale"
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
        "italian": "canone radiotelevisivo"
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
        "italian": "nucleo familiare"
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
        "italian": "pagare"
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
        "italian": "tassa"
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
        "italian": "pubblicità"
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
        "italian": "lento"
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
        "italian": "veloce"
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
        "italian": "forte"
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
        "italian": "piano"
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
        "italian": "stanco"
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
        "italian": "visitare"
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
        "italian": "sito web"
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
        "italian": "utilizzare"
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
        "italian": "minuto"
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
        "italian": "giorno"
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
        "italian": "controllare"
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
        "italian": "in media"
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
        "italian": "ora"
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
        "italian": "auto"
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
        "italian": "amico"
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
        "italian": "comprare"
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
        "italian": "chiamare"
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
        "italian": "inviare"
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
        "italian": "allegato"
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
        "italian": "scegliere"
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
        "italian": "accendere"
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
        "italian": "collegare"
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
        "italian": "cavo"
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
        "italian": "costare"
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
        "italian": "mese"
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
        "italian": "usare"
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
        "italian": "amica"
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
        "italian": "raggiungere"
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
        "italian": "titolo"
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
        "italian": "politica"
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
        "italian": "economia"
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
        "italian": "cultura"
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
        "italian": "istruzione"
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
        "italian": "sport"
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
        "italian": "articolo"
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
        "italian": "invitare"
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
        "italian": "aiutare"
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
        "italian": "esame"
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
        "italian": "traffico"
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
        "italian": "strada"
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
        "italian": "rispondere"
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
        "italian": "domanda"
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
        "italian": "perché"
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
        "italian": "perché"
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
        "italian": "che"
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
        "italian": "mostrare"
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
        "italian": "stampante"
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
        "italian": "scanner"
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
        "italian": "scaricare"
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
        "italian": "scansionare"
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
        "italian": "cancellare"
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
        "italian": "caricare"
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
        "italian": "dispositivo"
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
        "italian": "riparare"
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
        "italian": "appuntamento"
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
        "italian": "inserire"
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
        "italian": "elaborare"
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
        "italian": "immagine"
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
        "italian": "spesso"
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
        "italian": "raramente"
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
        "italian": "mai"
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
        "italian": "fine settimana"
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
        "italian": "via dello shopping"
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
        "italian": "caffettiera"
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
        "italian": "forchetta"
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
        "italian": "tazza"
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
        "italian": "cucchiaio"
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
        "italian": "piatto"
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
        "italian": "coltello"
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
        "italian": "tovagliolo"
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
        "italian": "gatto"
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
        "italian": "tavolo"
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
        "italian": "sedia"
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
        "italian": "farmacia"
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
        "italian": "caffè"
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
        "italian": "negozi"
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
        "italian": "ombrellone"
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
        "italian": "pavimento/suolo"
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
        "italian": "temporale"
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
        "italian": "tempesta"
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
        "italian": "caos"
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
        "italian": "raffreddore"
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
        "italian": "ristorante"
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
        "italian": "menù"
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
        "italian": "antipasto"
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
        "italian": "piatto principale"
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
        "italian": "dolce"
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
        "italian": "zuppa di patate"
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
        "italian": "zuppa di pomodoro e basilico"
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
        "italian": "insalata italiana"
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
        "italian": "filetto di aringa"
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
        "italian": "tiramisù"
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
        "italian": "acqua minerale"
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
        "italian": "succo di mela"
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
        "italian": "succo d'arancia"
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
        "italian": "Fanta/Cola/Sprite"
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
        "italian": "birra"
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
        "italian": "vino rosso"
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
        "italian": "vino bianco"
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
        "italian": "spumante"
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
        "italian": "caffè"
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
        "italian": "cappuccino"
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
        "italian": "espresso"
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
        "italian": "tè"
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
        "italian": "conto"
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
        "italian": "mancia"
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
        "italian": "prenotazione"
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
        "italian": "ordinazione"
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
        "italian": "piatto"
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
        "italian": "cameriere"
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
        "italian": "servizio"
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
        "italian": "tovaglia"
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
        "italian": "insalatiera"
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
        "italian": "posate per insalata"
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
        "italian": "aceto"
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
        "italian": "zuccheriera"
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
        "italian": "bacchette"
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
        "italian": "portauovo"
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
        "italian": "apribottiglie"
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
        "italian": "teiera"
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
        "italian": "scala"
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
        "italian": "scuola"
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
        "italian": "lezione"
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
        "italian": "cortile della scuola"
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
        "italian": "materia"
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
        "italian": "matematica"
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
        "italian": "musica"
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
        "italian": "fisica"
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
        "italian": "chimica"
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
        "italian": "biologia"
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
        "italian": "arte"
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
        "italian": "geografia"
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
        "italian": "storia"
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
        "italian": "tedesco"
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
        "italian": "inglese"
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
        "italian": "orario"
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
        "italian": "pausa"
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
        "italian": "lavoro di gruppo"
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
        "italian": "insegnante"
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
        "italian": "studente/studentessa"
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
        "italian": "materia preferita"
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
        "italian": "scuola elementare"
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
        "italian": "scuola secondaria"
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
        "italian": "scuola media superiore"
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
        "italian": "liceo"
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
        "italian": "scuola comprensiva"
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
        "italian": "scuola professionale"
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
        "italian": "scuola speciale"
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
        "italian": "università di scienze applicate"
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
        "italian": "università"
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
        "italian": "asilo"
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
        "italian": "classe"
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
        "italian": "diploma di maturità"
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
        "italian": "formazione professionale"
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
        "italian": "diploma scolastico"
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
        "italian": "diploma di scuola secondaria"
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
        "italian": "obbligo scolastico"
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
        "italian": "anno scolastico"
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
        "italian": "voto"
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
        "italian": "pagella"
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
        "italian": "esame"
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
        "italian": "esame finale"
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
        "italian": "ripetizioni"
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
        "italian": "riunione dei genitori"
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
        "italian": "cassa della classe"
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
        "italian": "gita scolastica"
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
        "italian": "compito in classe"
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
        "italian": "lezioni di nuoto"
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
        "italian": "educazione fisica"
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
        "italian": "paghetta"
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
        "italian": "cellulare"
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
        "italian": "libri scolastici"
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
        "italian": "meccatronico automobilistico"
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
        "italian": "posto universitario"
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
        "italian": "officina auto"
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
        "italian": "severo"
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
        "italian": "gentile"
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
        "italian": "diligente"
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
        "italian": "popolare"
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
        "italian": "sufficiente"
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
        "italian": "sufficiente"
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
        "italian": "insufficiente"
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
        "italian": "gravemente insufficiente"
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
        "italian": "facile"
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
        "italian": "puntuale"
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
        "italian": "giovane"
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
        "italian": "periodo scolastico"
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
        "italian": "strada per la scuola"
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
        "italian": "noia"
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
        "italian": "durare"
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
        "italian": "superare"
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
        "italian": "sperare"
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
        "italian": "funzionare"
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
        "italian": "restare dopo scuola"
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
        "italian": "essere finito"
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
        "italian": "stanza"
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
        "italian": "insieme"
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
        "italian": "discutere"
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
        "italian": "escursione"
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
        "italian": "compito a casa"
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
        "italian": "vacanze"
      }
    }
  ]

});
