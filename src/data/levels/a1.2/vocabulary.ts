
import { Card, Translations } from '../../../types';

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
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/a1.2/words/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const a1_2_Vocabulary: Record<number, Card[]> = addAudioPaths({
  "8": [
    {
      "german": "der Arzt, die Ärzte",
      "translations": {
        "english": "male doctor",
        "ukrainian": "лікар",
        "polish": "lekarz",
        "albanian": "mjeku",
        "arabic": "طبيب",
        "serbian": "лекар"
      }
    },
    {
      "german": "der Termin, die Termine",
      "translations": {
        "english": "appointment",
        "ukrainian": "прийом",
        "polish": "termin",
        "albanian": "takimi",
        "arabic": "موعد",
        "serbian": "термин"
      }
    },
    {
      "german": "die Praxis, die Praxen",
      "translations": {
        "english": "medical practice",
        "ukrainian": "практика",
        "polish": "gabinet",
        "albanian": "praktika",
        "arabic": "عيادة",
        "serbian": "ординација"
      }
    },
    {
      "german": "der Zahnarzt, die Zahnärzte",
      "translations": {
        "english": "dentist",
        "ukrainian": "стоматолог",
        "polish": "dentysta",
        "albanian": "dentisti",
        "arabic": "طبيب أسنان",
        "serbian": "зубар"
      }
    },
    {
      "german": "der Augenarzt, die Augenärzte",
      "translations": {
        "english": "eye doctor",
        "ukrainian": "окуліст",
        "polish": "okulista",
        "albanian": "oftalmologi",
        "arabic": "طبيب عيون",
        "serbian": "очни лекар"
      }
    },
    {
      "german": "der Kinderarzt, die Kinderärzte",
      "translations": {
        "english": "pediatrician",
        "ukrainian": "педіатр",
        "polish": "pediatra",
        "albanian": "pediatri",
        "arabic": "طبيب أطفال",
        "serbian": "педијатар"
      }
    },
    {
      "german": "der Hausarzt, die Hausärzte",
      "translations": {
        "english": "family doctor",
        "ukrainian": "сімейний лікар",
        "polish": "lekarz rodzinny",
        "albanian": "mjeku i familjes",
        "arabic": "طبيب عائلة",
        "serbian": "породични лекар"
      }
    },
    {
      "german": "das Krankenhaus, die Krankenhäuser",
      "translations": {
        "english": "hospital",
        "ukrainian": "лікарня",
        "polish": "szpital",
        "albanian": "spitali",
        "arabic": "مستشفى",
        "serbian": "болница"
      }
    },
    {
      "german": "die Krankenkasse, die Krankenkassen",
      "translations": {
        "english": "health insurance",
        "ukrainian": "медичне страхування",
        "polish": "kasa chorych",
        "albanian": "siguracioni shëndetësor",
        "arabic": "تأمين صحي",
        "serbian": "здравствено осигурање"
      }
    },
    {
      "german": "die Gesundheitskarte, die Gesundheitskarten",
      "translations": {
        "english": "health insurance card",
        "ukrainian": "медична картка",
        "polish": "karta ubezpieczenia zdrowotnego",
        "albanian": "karta e sigurimeve shëndetësore",
        "arabic": "بطاقة التأمين الصحي",
        "serbian": "здравствена картица"
      }
    },
    {
      "german": "das Bonusheft, die Bonushefte",
      "translations": {
        "english": "bonus booklet",
        "ukrainian": "бонусна книжечка",
        "polish": "książeczka bonusowa",
        "albanian": "librezë bonusi",
        "arabic": "كتيب المكافآت",
        "serbian": "бонус књижица"
      }
    },
    {
      "german": "die Apotheke, die Apotheken",
      "translations": {
        "english": "pharmacy",
        "ukrainian": "аптека",
        "polish": "apteka",
        "albanian": "farmacia",
        "arabic": "صيدلية",
        "serbian": "апотека"
      }
    },
    {
      "german": "das Medikament, die Medikamente",
      "translations": {
        "english": "medication",
        "ukrainian": "ліки",
        "polish": "lek",
        "albanian": "ilaçi",
        "arabic": "دواء",
        "serbian": "лек"
      }
    },
    {
      "german": "das Rezept, die Rezepte",
      "translations": {
        "english": "prescription",
        "ukrainian": "рецепт",
        "polish": "recepta",
        "albanian": "recepta",
        "arabic": "وصفة طبية",
        "serbian": "рецепт"
      }
    },
    {
      "german": "die Tablette, die Tabletten",
      "translations": {
        "english": "tablet",
        "ukrainian": "таблетка",
        "polish": "tabletka",
        "albanian": "tableta",
        "arabic": "قرص",
        "serbian": "таблета"
      }
    },
    {
      "german": "die Sprechzeit, die Sprechzeiten",
      "translations": {
        "english": "consultation hours",
        "ukrainian": "години прийому",
        "polish": "godziny przyjęć",
        "albanian": "orët e konsultës",
        "arabic": "ساعات الاستشارة",
        "serbian": "ордонација"
      }
    },
    {
      "german": "das Auge, die Augen",
      "translations": {
        "english": "eye",
        "ukrainian": "око",
        "polish": "oko",
        "albanian": "syri",
        "arabic": "عين",
        "serbian": "око"
      }
    },
    {
      "german": "der Kopf, die Köpfe",
      "translations": {
        "english": "head",
        "ukrainian": "голова",
        "polish": "głowa",
        "albanian": "koka",
        "arabic": "رأس",
        "serbian": "глава"
      }
    },
    {
      "german": "das Ohr, die Ohren",
      "translations": {
        "english": "ear",
        "ukrainian": "вухо",
        "polish": "ucho",
        "albanian": "veshi",
        "arabic": "أذن",
        "serbian": "уво"
      }
    },
    {
      "german": "der Mund, die Münder",
      "translations": {
        "english": "mouth",
        "ukrainian": "рот",
        "polish": "usta",
        "albanian": "goja",
        "arabic": "فم",
        "serbian": "уста"
      }
    },
    {
      "german": "die Nase, die Nasen",
      "translations": {
        "english": "nose",
        "ukrainian": "ніс",
        "polish": "nos",
        "albanian": "hunda",
        "arabic": "أنف",
        "serbian": "нос"
      }
    },
    {
      "german": "der Hals, die Hälse",
      "translations": {
        "english": "neck",
        "ukrainian": "шия",
        "polish": "szyja",
        "albanian": "qafa",
        "arabic": "رقبة",
        "serbian": "врат"
      }
    },
    {
      "german": "der Arm, die Arme",
      "translations": {
        "english": "arm",
        "ukrainian": "рука",
        "polish": "ramię",
        "albanian": "krahu",
        "arabic": "ذراع",
        "serbian": "рука"
      }
    },
    {
      "german": "die Hand, die Hände",
      "translations": {
        "english": "hand",
        "ukrainian": "кисть",
        "polish": "ręka",
        "albanian": "dora",
        "arabic": "يد",
        "serbian": "шака"
      }
    },
    {
      "german": "der Rücken, die Rücken",
      "translations": {
        "english": "back",
        "ukrainian": "спина",
        "polish": "plecy",
        "albanian": "shpina",
        "arabic": "ظهر",
        "serbian": "леђа"
      }
    },
    {
      "german": "das Bein, die Beine",
      "translations": {
        "english": "leg",
        "ukrainian": "нога",
        "polish": "noga",
        "albanian": "këmba",
        "arabic": "ساق",
        "serbian": "нога"
      }
    },
    {
      "german": "der Fuß, die Füße",
      "translations": {
        "english": "foot",
        "ukrainian": "ступня",
        "polish": "stopa",
        "albanian": "këmba",
        "arabic": "قدم",
        "serbian": "стопало"
      }
    },
    {
      "german": "der Bauch, die Bäuche",
      "translations": {
        "english": "belly",
        "ukrainian": "живіт",
        "polish": "brzuch",
        "albanian": "barku",
        "arabic": "بطن",
        "serbian": "стомак"
      }
    },
    {
      "german": "der Finger, die Finger",
      "translations": {
        "english": "finger",
        "ukrainian": "палець",
        "polish": "palec",
        "albanian": "gishti",
        "arabic": "إصبع",
        "serbian": "прст"
      }
    },
    {
      "german": "das Kind, die Kinder",
      "translations": {
        "english": "child",
        "ukrainian": "дитина",
        "polish": "dziecko",
        "albanian": "fëmija",
        "arabic": "طفل",
        "serbian": "дете"
      }
    },
    {
      "german": "die Tochter, die Töchter",
      "translations": {
        "english": "daughter",
        "ukrainian": "дочка",
        "polish": "córka",
        "albanian": "vajza",
        "arabic": "ابنة",
        "serbian": "ћерка"
      }
    },
    {
      "german": "die Schule, die Schulen",
      "translations": {
        "english": "school",
        "ukrainian": "школа",
        "polish": "szkoła",
        "albanian": "shkolla",
        "arabic": "مدرسة",
        "serbian": "школа"
      }
    },
    {
      "german": "die Entschuldigung, die Entschuldigungen",
      "translations": {
        "english": "excuse note",
        "ukrainian": "виправдувальна записка",
        "polish": "usprawiedliwienie",
        "albanian": "justifikimi",
        "arabic": "مذكرة اعتذار",
        "serbian": "оправдање"
      }
    },
    {
      "german": "das Fieber",
      "translations": {
        "english": "fever",
        "ukrainian": "температура",
        "polish": "gorączka",
        "albanian": "ethe",
        "arabic": "حمى",
        "serbian": "грозница"
      }
    },
    {
      "german": "die Erkältung, die Erkältungen",
      "translations": {
        "english": "cold",
        "ukrainian": "застуда",
        "polish": "przeziębienie",
        "albanian": "ftohja",
        "arabic": "نزلة برد",
        "serbian": "хладноћа"
      }
    },
    {
      "german": "die Grippe",
      "translations": {
        "english": "flu",
        "ukrainian": "грип",
        "polish": "grypa",
        "albanian": "gripi",
        "arabic": "إنفلونزا",
        "serbian": "грип"
      }
    },
    {
      "german": "die Kopfschmerzen",
      "translations": {
        "english": "headache",
        "ukrainian": "головний біль",
        "polish": "ból głowy",
        "albanian": "dhimbje koke",
        "arabic": "صداع",
        "serbian": "главобоља"
      }
    },
    {
      "german": "die Zahnschmerzen",
      "translations": {
        "english": "toothache",
        "ukrainian": "зубний біль",
        "polish": "ból zęba",
        "albanian": "dhimbje dhëmbi",
        "arabic": "ألم الأسنان",
        "serbian": "зубобоља"
      }
    },
    {
      "german": "die Halsschmerzen",
      "translations": {
        "english": "sore throat",
        "ukrainian": "біль у горлі",
        "polish": "ból gardła",
        "albanian": "dhimbje fyti",
        "arabic": "التهاب الحلق",
        "serbian": "грлобоља"
      }
    },
    {
      "german": "die Bauchschmerzen",
      "translations": {
        "english": "stomachache",
        "ukrainian": "біль у животі",
        "polish": "ból brzucha",
        "albanian": "dhimbje barku",
        "arabic": "ألم المعدة",
        "serbian": "бол у стомаку"
      }
    },
    {
      "german": "die Rückenschmerzen",
      "translations": {
        "english": "back pain",
        "ukrainian": "біль у спині",
        "polish": "ból pleców",
        "albanian": "dhimbje shpine",
        "arabic": "ألم الظهر",
        "serbian": "бол у леђима"
      }
    },
    {
      "german": "die Krankschreibung, die Krankschreibungen",
      "translations": {
        "english": "sick note",
        "ukrainian": "лікарняний",
        "polish": "zwolnienie lekarskie",
        "albanian": "dëshmi mjekësore",
        "arabic": "إجازة مرضية",
        "serbian": "лекарско уверење"
      }
    },
    {
      "german": "die Überweisung, die Überweisungen",
      "translations": {
        "english": "referral",
        "ukrainian": "направлення",
        "polish": "skierowanie",
        "albanian": "dërgimi",
        "arabic": "إحالة",
        "serbian": "упутница"
      }
    },
    {
      "german": "der Facharzt, die Fachärzte",
      "translations": {
        "english": "specialist",
        "ukrainian": "спеціаліст",
        "polish": "specjalista",
        "albanian": "specialisti",
        "arabic": "طبيب مختص",
        "serbian": "специјалиста"
      }
    },
    {
      "german": "der Notruf, die Notrufe",
      "translations": {
        "english": "emergency call",
        "ukrainian": "виклик швидкої",
        "polish": "wezwanie pomocy",
        "albanian": "thirrja e urgjencës",
        "arabic": "مكالمة طوارئ",
        "serbian": "хитни позив"
      }
    },
    {
      "german": "der Notarzt, die Notärzte",
      "translations": {
        "english": "emergency doctor",
        "ukrainian": "лікар швидкої",
        "polish": "lekarz pogotowia",
        "albanian": "mjeku i urgjencës",
        "arabic": "طبيب طوارئ",
        "serbian": "хитна лекарска помоћ"
      }
    },
    {
      "german": "der Krankenwagen, die Krankenwagen",
      "translations": {
        "english": "ambulance",
        "ukrainian": "швидка допомога",
        "polish": "karetka pogotowia",
        "albanian": "ambulanca",
        "arabic": "سيارة إسعاف",
        "serbian": "хитна помоћ"
      }
    },
    {
      "german": "die Feuerwehr",
      "translations": {
        "english": "fire department",
        "ukrainian": "пожежна служба",
        "polish": "straż pożarna",
        "albanian": "zjarrfikësit",
        "arabic": "مطافئ الحريق",
        "serbian": "ватрогасци"
      }
    },
    {
      "german": "das Feuer, die Feuer",
      "translations": {
        "english": "fire",
        "ukrainian": "пожежа",
        "polish": "pożar",
        "albanian": "zjarri",
        "arabic": "حريق",
        "serbian": "ватра"
      }
    },
    {
      "german": "der Unfall, die Unfälle",
      "translations": {
        "english": "accident",
        "ukrainian": "нещасний випадок",
        "polish": "wypadek",
        "albanian": "aksidenti",
        "arabic": "حادث",
        "serbian": "несрећа"
      }
    },
    {
      "german": "verletzt",
      "translations": {
        "english": "injured",
        "ukrainian": "поранений",
        "polish": "ranny",
        "albanian": "i lënduar",
        "arabic": "مصاب",
        "serbian": "повређен"
      }
    },
    {
      "german": "krank",
      "translations": {
        "english": "sick",
        "ukrainian": "хворий",
        "polish": "chory",
        "albanian": "i sëmurë",
        "arabic": "مريض",
        "serbian": "болестан"
      }
    },
    {
      "german": "gesund",
      "translations": {
        "english": "healthy",
        "ukrainian": "здоровий",
        "polish": "zdrowy",
        "albanian": "i shëndetshëm",
        "arabic": "صحي",
        "serbian": "здрав"
      }
    },
    {
      "german": "die Gesundheit",
      "translations": {
        "english": "health",
        "ukrainian": "здоров'я",
        "polish": "zdrowie",
        "albanian": "shëndeti",
        "arabic": "صحة",
        "serbian": "здравље"
      }
    },
    {
      "german": "das Buch, die Bücher",
      "translations": {
        "english": "book",
        "ukrainian": "книга",
        "polish": "książka",
        "albanian": "libri",
        "arabic": "كتاب",
        "serbian": "књига"
      }
    },
    {
      "german": "die Uhr, die Uhren",
      "translations": {
        "english": "watch/clock",
        "ukrainian": "годинник",
        "polish": "zegarek",
        "albanian": "ora",
        "arabic": "ساعة",
        "serbian": "сат"
      }
    },
    {
      "german": "der Laptop, die Laptops",
      "translations": {
        "english": "laptop",
        "ukrainian": "ноутбук",
        "polish": "laptop",
        "albanian": "laptopi",
        "arabic": "حاسوب محمول",
        "serbian": "лаптоп"
      }
    },
    {
      "german": "das Tablet, die Tablets",
      "translations": {
        "english": "tablet",
        "ukrainian": "планшет",
        "polish": "tablet",
        "albanian": "tableti",
        "arabic": "جهاز لوحي",
        "serbian": "таблета"
      }
    },
    {
      "german": "der Kalender, die Kalender",
      "translations": {
        "english": "calendar",
        "ukrainian": "календар",
        "polish": "kalendarz",
        "albanian": "kalendari",
        "arabic": "تقويم",
        "serbian": "календар"
      }
    },
    {
      "german": "der Bademantel, die Bademäntel",
      "translations": {
        "english": "bathrobe",
        "ukrainian": "халат",
        "polish": "szlafrok",
        "albanian": "rrobën e banjës",
        "arabic": "روب الحمام",
        "serbian": "бадемантил"
      }
    },
    {
      "german": "die Zahnbürste, die Zahnbürsten",
      "translations": {
        "english": "toothbrush",
        "ukrainian": "зубна щітка",
        "polish": "szczoteczka do zębów",
        "albanian": "furça e dhëmbëve",
        "arabic": "فرشاة أسنان",
        "serbian": "четкица за зубе"
      }
    },
    {
      "german": "die Schulter, die Schultern",
      "translations": {
        "english": "shoulder",
        "ukrainian": "плече",
        "polish": "ramię",
        "albanian": "supja",
        "arabic": "كتف",
        "serbian": "раме"
      }
    },
    {
      "german": "der Ellbogen, die Ellbogen",
      "translations": {
        "english": "elbow",
        "ukrainian": "лікоть",
        "polish": "łokieć",
        "albanian": "bërryli",
        "arabic": "مرفق",
        "serbian": "лакат"
      }
    },
    {
      "german": "das Knie, die Knie",
      "translations": {
        "english": "knee",
        "ukrainian": "коліно",
        "polish": "kolano",
        "albanian": "gjuri",
        "arabic": "ركبة",
        "serbian": "колено"
      }
    },
    {
      "german": "der Zeh, die Zehen",
      "translations": {
        "english": "toe",
        "ukrainian": "палець ноги",
        "polish": "palec u nogi",
        "albanian": "gishti i këmbës",
        "arabic": "إصبع القدم",
        "serbian": "прст на нози"
      }
    },
    {
      "german": "die Lippe, die Lippen",
      "translations": {
        "english": "lip",
        "ukrainian": "губа",
        "polish": "warga",
        "albanian": "buza",
        "arabic": "شفة",
        "serbian": "усна"
      }
    },
    {
      "german": "die Wimper, die Wimpern",
      "translations": {
        "english": "eyelash",
        "ukrainian": "вія",
        "polish": "rzęsa",
        "albanian": "qerpiku",
        "arabic": "رمش",
        "serbian": "трепавица"
      }
    },
    {
      "german": "die Augenbraue, die Augenbrauen",
      "translations": {
        "english": "eyebrow",
        "ukrainian": "брова",
        "polish": "brew",
        "albanian": "vetulla",
        "arabic": "حاجب",
        "serbian": "обрва"
      }
    },
    {
      "german": "der Oberschenkel, die Oberschenkel",
      "translations": {
        "english": "thigh",
        "ukrainian": "стегно",
        "polish": "udo",
        "albanian": "kofsha",
        "arabic": "فخذ",
        "serbian": "бутина"
      }
    },
    {
      "german": "der Unterschenkel, die Unterschenkel",
      "translations": {
        "english": "lower leg",
        "ukrainian": "гомілка",
        "polish": "łydka",
        "albanian": "këmba e poshtme",
        "arabic": "ساق سفلى",
        "serbian": "подколеница"
      }
    },
    {
      "german": "der Muskel, die Muskeln",
      "translations": {
        "english": "muscle",
        "ukrainian": "м'яз",
        "polish": "mięsień",
        "albanian": "muskuli",
        "arabic": "عضلة",
        "serbian": "мишић"
      }
    },
    {
      "german": "die Wirbelsäule, die Wirbelsäulen",
      "translations": {
        "english": "spine",
        "ukrainian": "хребет",
        "polish": "kręgosłup",
        "albanian": "shtylla kurrizore",
        "arabic": "عمود فقري",
        "serbian": "кичма"
      }
    },
    {
      "german": "das Herz, die Herzen",
      "translations": {
        "english": "heart",
        "ukrainian": "серце",
        "polish": "serce",
        "albanian": "zemra",
        "arabic": "قلب",
        "serbian": "срце"
      }
    },
    {
      "german": "die Leber, die Lebern",
      "translations": {
        "english": "liver",
        "ukrainian": "печінка",
        "polish": "wątroba",
        "albanian": "mëlçia",
        "arabic": "كبد",
        "serbian": "јетра"
      }
    },
    {
      "german": "der Magen, die Mägen",
      "translations": {
        "english": "stomach",
        "ukrainian": "шлунок",
        "polish": "żołądek",
        "albanian": "stomaku",
        "arabic": "معدة",
        "serbian": "стомак"
      }
    },
    {
      "german": "die Stirn, die Stirnen",
      "translations": {
        "english": "forehead",
        "ukrainian": "лоб",
        "polish": "czoło",
        "albanian": "balli",
        "arabic": "جبهة",
        "serbian": "чело"
      }
    }
  ],
  "9": [
    {
      "german": "der Weg, die Wege",
      "translations": {
        "english": "way, path",
        "ukrainian": "шлях, дорога",
        "polish": "droga, ścieżka",
        "albanian": "rrugë, shteg",
        "arabic": "طريق، مسار",
        "serbian": "пут, стаза"
      }
    },
    {
      "german": "die Stadt, die Städte",
      "translations": {
        "english": "city, town",
        "ukrainian": "місто",
        "polish": "miasto",
        "albanian": "qytet",
        "arabic": "مدينة",
        "serbian": "град"
      }
    },
    {
      "german": "der Bus, die Busse",
      "translations": {
        "english": "bus",
        "ukrainian": "автобус",
        "polish": "autobus",
        "albanian": "autobus",
        "arabic": "حافلة",
        "serbian": "аутобус"
      }
    },
    {
      "german": "die Straßenbahn, die Straßenbahnen",
      "translations": {
        "english": "tram, streetcar",
        "ukrainian": "трамвай",
        "polish": "tramwaj",
        "albanian": "tramvaj",
        "arabic": "ترام",
        "serbian": "трамвај"
      }
    },
    {
      "german": "die U-Bahn, die U-Bahnen",
      "translations": {
        "english": "subway, underground",
        "ukrainian": "метро",
        "polish": "metro",
        "albanian": "metro",
        "arabic": "مترو الأنفاق",
        "serbian": "метро"
      }
    },
    {
      "german": "die S-Bahn, die S-Bahnen",
      "translations": {
        "english": "suburban train",
        "ukrainian": "приміська електричка",
        "polish": "kolej podmiejska",
        "albanian": "tren suburban",
        "arabic": "القطار الضاحي",
        "serbian": "приградски воз"
      }
    },
    {
      "german": "der Zug, die Züge",
      "translations": {
        "english": "train",
        "ukrainian": "поїзд",
        "polish": "pociąg",
        "albanian": "tren",
        "arabic": "قطار",
        "serbian": "воз"
      }
    },
    {
      "german": "das Schiff, die Schiffe",
      "translations": {
        "english": "ship, boat",
        "ukrainian": "корабель",
        "polish": "statek",
        "albanian": "anije",
        "arabic": "سفينة",
        "serbian": "брод, чамац"
      }
    },
    {
      "german": "das Motorrad, die Motorräder",
      "translations": {
        "english": "motorcycle",
        "ukrainian": "мотоцикл",
        "polish": "motocykl",
        "albanian": "motoçikletë",
        "arabic": "دراجة نارية",
        "serbian": "мотоцикл"
      }
    },
    {
      "german": "das Flugzeug, die Flugzeuge",
      "translations": {
        "english": "airplane",
        "ukrainian": "літак",
        "polish": "samolot",
        "albanian": "aeroplan",
        "arabic": "طائرة",
        "serbian": "авион"
      }
    },
    {
      "german": "das Fahrrad, die Fahrräder",
      "translations": {
        "english": "bicycle",
        "ukrainian": "велосипед",
        "polish": "rower",
        "albanian": "biçikletë",
        "arabic": "دراجة هوائية",
        "serbian": "бицикл"
      }
    },
    {
      "german": "das Auto, die Autos",
      "translations": {
        "english": "car",
        "ukrainian": "автомобіль",
        "polish": "samochód",
        "albanian": "makinë",
        "arabic": "سيارة",
        "serbian": "аутомобил"
      }
    },
    {
      "german": "der Fußgänger, die Fußgänger / die Fußgängerin, die Fußgängerinnen",
      "translations": {
        "english": "pedestrian",
        "ukrainian": "пішохід",
        "polish": "pieszy",
        "albanian": "këmbësor",
        "arabic": "مشاة",
        "serbian": "пешак"
      }
    },
    {
      "german": "die Station, die Stationen",
      "translations": {
        "english": "station",
        "ukrainian": "станція",
        "polish": "stacja",
        "albanian": "stacion",
        "arabic": "محطة",
        "serbian": "станица"
      }
    },
    {
      "german": "der Flughafen, die Flughäfen",
      "translations": {
        "english": "airport",
        "ukrainian": "аеропорт",
        "polish": "lotnisko",
        "albanian": "aeroport",
        "arabic": "مطار",
        "serbian": "аеродром"
      }
    },
    {
      "german": "die Stadtmitte, die Stadtmitten",
      "translations": {
        "english": "city center",
        "ukrainian": "центр міста",
        "polish": "centrum miasta",
        "albanian": "qendër qyteti",
        "arabic": "وسط المدينة",
        "serbian": "центар града"
      }
    },
    {
      "german": "die Haltestelle, die Haltestellen",
      "translations": {
        "english": "bus stop",
        "ukrainian": "зупинка",
        "polish": "przystanek",
        "albanian": "stacion autobusi",
        "arabic": "محطة الحافلات",
        "serbian": "аутобуска станица"
      }
    },
    {
      "german": "die Monatskarte, die Monatskarten",
      "translations": {
        "english": "monthly ticket",
        "ukrainian": "місячний квиток",
        "polish": "karta miesięczna",
        "albanian": "biletë mujore",
        "arabic": "بطاقة شهرية",
        "serbian": "месечна карта"
      }
    },
    {
      "german": "das Café, die Cafés",
      "translations": {
        "english": "café",
        "ukrainian": "кафе",
        "polish": "kawiarnia",
        "albanian": "kafe",
        "arabic": "مقهى",
        "serbian": "кафић"
      }
    },
    {
      "german": "der Platz, die Plätze",
      "translations": {
        "english": "square, place",
        "ukrainian": "площа",
        "polish": "plac",
        "albanian": "shesh",
        "arabic": "ساحة",
        "serbian": "трг"
      }
    },
    {
      "german": "der Baum, die Bäume",
      "translations": {
        "english": "tree",
        "ukrainian": "дерево",
        "polish": "drzewo",
        "albanian": "pemë",
        "arabic": "شجرة",
        "serbian": "дрво"
      }
    },
    {
      "german": "der Spielplatz, die Spielplätze",
      "translations": {
        "english": "playground",
        "ukrainian": "дитячий майданчик",
        "polish": "plac zabaw",
        "albanian": "shesh lojërash",
        "arabic": "ملعب أطفال",
        "serbian": "игралиште"
      }
    },
    {
      "german": "die Bank, die Bänke",
      "translations": {
        "english": "bench",
        "ukrainian": "лавка",
        "polish": "ławka",
        "albanian": "stol",
        "arabic": "مقعد",
        "serbian": "клупа"
      }
    },
    {
      "german": "der Hund, die Hunde",
      "translations": {
        "english": "dog",
        "ukrainian": "собака",
        "polish": "pies",
        "albanian": "qen",
        "arabic": "كلب",
        "serbian": "пас"
      }
    },
    {
      "german": "das Schwimmbad, die Schwimmbäder",
      "translations": {
        "english": "swimming pool",
        "ukrainian": "басейн",
        "polish": "basen",
        "albanian": "pishinë",
        "arabic": "حمام سباحة",
        "serbian": "базен"
      }
    },
    {
      "german": "das Rathaus, die Rathäuser",
      "translations": {
        "english": "town hall",
        "ukrainian": "ратуша",
        "polish": "ratusz",
        "albanian": "bashki",
        "arabic": "دار البلدية",
        "serbian": "градска кућа"
      }
    },
    {
      "german": "die Bibliothek, die Bibliotheken",
      "translations": {
        "english": "library",
        "ukrainian": "бібліотека",
        "polish": "biblioteka",
        "albanian": "bibliotekë",
        "arabic": "مكتبة",
        "serbian": "библиотека"
      }
    },
    {
      "german": "der Hauptbahnhof, die Hauptbahnhöfe",
      "translations": {
        "english": "main train station",
        "ukrainian": "головний вокзал",
        "polish": "dworzec główny",
        "albanian": "stacion kryesor",
        "arabic": "المحطة الرئيسية",
        "serbian": "главна железничка станица"
      }
    },
    {
      "german": "die U-Bahn-Station, die U-Bahn-Stationen",
      "translations": {
        "english": "subway station",
        "ukrainian": "станція метро",
        "polish": "stacja metra",
        "albanian": "stacion metro",
        "arabic": "محطة مترو",
        "serbian": "станица метроа"
      }
    },
    {
      "german": "die Linie, die Linien",
      "translations": {
        "english": "line",
        "ukrainian": "лінія",
        "polish": "linia",
        "albanian": "linjë",
        "arabic": "خط",
        "serbian": "линија"
      }
    },
    {
      "german": "die Richtung, die Richtungen",
      "translations": {
        "english": "direction",
        "ukrainian": "напрямок",
        "polish": "kierunek",
        "albanian": "drejtim",
        "arabic": "اتجاه",
        "serbian": "смер"
      }
    },
    {
      "german": "der Zoo, die Zoos",
      "translations": {
        "english": "zoo",
        "ukrainian": "зоопарк",
        "polish": "zoo",
        "albanian": "kopsht zoologjik",
        "arabic": "حديقة حيوانات",
        "serbian": "зоолошки врт"
      }
    },
    {
      "german": "die Kreuzung, die Kreuzungen",
      "translations": {
        "english": "intersection, crossroads",
        "ukrainian": "перехрестя",
        "polish": "skrzyżowanie",
        "albanian": "kryqëzim",
        "arabic": "تقاطع",
        "serbian": "раскрсница"
      }
    },
    {
      "german": "die Ampel, die Ampeln",
      "translations": {
        "english": "traffic light",
        "ukrainian": "світлофор",
        "polish": "światła",
        "albanian": "semafor",
        "arabic": "إشارة مرور",
        "serbian": "семафор"
      }
    },
    {
      "german": "der Parkplatz, die Parkplätze",
      "translations": {
        "english": "parking lot",
        "ukrainian": "автостоянка",
        "polish": "parking",
        "albanian": "parking",
        "arabic": "موقف سيارات",
        "serbian": "паркиралиште"
      }
    },
    {
      "german": "der Park, die Parks",
      "translations": {
        "english": "park",
        "ukrainian": "парк",
        "polish": "park",
        "albanian": "park",
        "arabic": "حديقة",
        "serbian": "парк"
      }
    },
    {
      "german": "der Fluss, die Flüsse",
      "translations": {
        "english": "river",
        "ukrainian": "річка",
        "polish": "rzeka",
        "albanian": "lumë",
        "arabic": "نهر",
        "serbian": "река"
      }
    },
    {
      "german": "der Führerschein, die Führerscheine",
      "translations": {
        "english": "driver's license",
        "ukrainian": "водійські права",
        "polish": "prawo jazdy",
        "albanian": "patentë shoferi",
        "arabic": "رخصة قيادة",
        "serbian": "driver's license"
      }
    },
    {
      "german": "die Führerscheinprüfung, die Führerscheinprüfungen",
      "translations": {
        "english": "driving test",
        "ukrainian": "іспит на водійські права",
        "polish": "egzamin na prawo jazdy",
        "albanian": "provimi i patentës",
        "arabic": "امتحان رخصة القيادة",
        "serbian": "возачки испит"
      }
    },
    {
      "german": "das Vorfahrtsschild, die Vorfahrtsschilder",
      "translations": {
        "english": "right of way sign",
        "ukrainian": "знак переважного права проїзду",
        "polish": "znak pierwszeństwa",
        "albanian": "shenjë përparësie",
        "arabic": "علامة حق الأولوية",
        "serbian": "знак приоритета"
      }
    },
    {
      "german": "der Lkw, die Lkws",
      "translations": {
        "english": "truck",
        "ukrainian": "вантажівка",
        "polish": "ciężarówka",
        "albanian": "kamion",
        "arabic": "شاحنة",
        "serbian": "камион"
      }
    },
    {
      "german": "das Schild, die Schilder",
      "translations": {
        "english": "sign",
        "ukrainian": "знак",
        "polish": "znak",
        "albanian": "shenjë",
        "arabic": "علامة",
        "serbian": "знак"
      }
    },
    {
      "german": "der Bürgersteig, die Bürgersteige",
      "translations": {
        "english": "sidewalk",
        "ukrainian": "тротуар",
        "polish": "chodnik",
        "albanian": "trotuar",
        "arabic": "رصيف",
        "serbian": "тротоар"
      }
    },
    {
      "german": "das Kino, die Kinos",
      "translations": {
        "english": "cinema",
        "ukrainian": "кінотеатр",
        "polish": "kino",
        "albanian": "kinema",
        "arabic": "سينما",
        "serbian": "биоскоп"
      }
    },
    {
      "german": "die Apotheke, die Apotheken",
      "translations": {
        "english": "pharmacy",
        "ukrainian": "аптека",
        "polish": "apteka",
        "albanian": "farmaci",
        "arabic": "صيدلية",
        "serbian": "апотека"
      }
    },
    {
      "german": "die Bäckerei, die Bäckereien",
      "translations": {
        "english": "bakery",
        "ukrainian": "пекарня",
        "polish": "piekarnia",
        "albanian": "furre buke",
        "arabic": "مخبز",
        "serbian": "пекара"
      }
    },
    {
      "german": "der Supermarkt, die Supermärkte",
      "translations": {
        "english": "supermarket",
        "ukrainian": "супермаркет",
        "polish": "supermarket",
        "albanian": "supermarket",
        "arabic": "سوبر ماركت",
        "serbian": "супермаркет"
      }
    },
    {
      "german": "das Museum, die Museen",
      "translations": {
        "english": "museum",
        "ukrainian": "музей",
        "polish": "muzeum",
        "albanian": "muze",
        "arabic": "متحف",
        "serbian": "музеј"
      }
    },
    {
      "german": "die Schule, die Schulen",
      "translations": {
        "english": "school",
        "ukrainian": "школа",
        "polish": "szkoła",
        "albanian": "shkollë",
        "arabic": "مدرسة",
        "serbian": "школа"
      }
    },
    {
      "german": "das Krankenhaus, die Krankenhäuser",
      "translations": {
        "english": "hospital",
        "ukrainian": "лікарня",
        "polish": "szpital",
        "albanian": "spital",
        "arabic": "مستشفى",
        "serbian": "болница"
      }
    },
    {
      "german": "die Post, die Postämter",
      "translations": {
        "english": "post office",
        "ukrainian": "пошта",
        "polish": "poczta",
        "albanian": "postë",
        "arabic": "مكتب البريد",
        "serbian": "пошта"
      }
    },
    {
      "german": "der Kindergarten, die Kindergärten",
      "translations": {
        "english": "kindergarten",
        "ukrainian": "дитячий садок",
        "polish": "przedszkole",
        "albanian": "kopësht fëmijësh",
        "arabic": "روضة أطفال",
        "serbian": "обданиште"
      }
    },
    {
      "german": "das Wohnmobil, die Wohnmobile",
      "translations": {
        "english": "motorhome, RV",
        "ukrainian": "будинок на колесах",
        "polish": "kamper",
        "albanian": "shtëpi me rrota",
        "arabic": "عربة سكن متنقلة",
        "serbian": "камп приколица"
      }
    },
    {
      "german": "der Motorroller, die Motorroller",
      "translations": {
        "english": "scooter",
        "ukrainian": "скутер",
        "polish": "skuter",
        "albanian": "skuter",
        "arabic": "دراجة بخارية",
        "serbian": "скутер"
      }
    },
    {
      "german": "das Boot, die Boote",
      "translations": {
        "english": "boat",
        "ukrainian": "човен",
        "polish": "łódka",
        "albanian": "varkë",
        "arabic": "قارب",
        "serbian": "чамац"
      }
    },
    {
      "german": "die Fähre, die Fähren",
      "translations": {
        "english": "ferry",
        "ukrainian": "пором",
        "polish": "prom",
        "albanian": "tragjekt",
        "arabic": "عبارة",
        "serbian": "трајект"
      }
    },
    {
      "german": "der Hubschrauber, die Hubschrauber",
      "translations": {
        "english": "helicopter",
        "ukrainian": "гелікоптер",
        "polish": "helikopter",
        "albanian": "helikopter",
        "arabic": "مروحية",
        "serbian": "хеликоптер"
      }
    },
    {
      "german": "der Campingplatz, die Campingplätze",
      "translations": {
        "english": "campsite",
        "ukrainian": "кемпінг",
        "polish": "kemping",
        "albanian": "kamp",
        "arabic": "مخيم",
        "serbian": "камп"
      }
    },
    {
      "german": "der Busbahnhof, die Busbahnhöfe",
      "translations": {
        "english": "bus station",
        "ukrainian": "автовокзал",
        "polish": "dworzec autobusowy",
        "albanian": "stacion autobusësh",
        "arabic": "محطة الحافلات",
        "serbian": "аутобуска станица"
      }
    },
    {
      "german": "die Straßenbahnhaltestelle, die Straßenbahnhaltestellen",
      "translations": {
        "english": "tram stop",
        "ukrainian": "зупинка трамваю",
        "polish": "przystanek tramwajowy",
        "albanian": "stacion tramvaji",
        "arabic": "محطة الترام",
        "serbian": "трамвајска станица"
      }
    },
    {
      "german": "der Hafen, die Häfen",
      "translations": {
        "english": "harbor, port",
        "ukrainian": "порт",
        "polish": "port",
        "albanian": "port",
        "arabic": "ميناء",
        "serbian": "лука"
      }
    }
  ],
  "10": [
    {
      "german": "das Hotel, die Hotels",
      "translations": {
        "english": "hotel",
        "ukrainian": "готель",
        "polish": "hotel",
        "albanian": "hoteli",
        "arabic": "فندق",
        "serbian": "хотел"
      }
    },
    {
      "german": "das Restaurant, die Restaurants",
      "translations": {
        "english": "restaurant",
        "ukrainian": "ресторан",
        "polish": "restauracja",
        "albanian": "restoranti",
        "arabic": "مطعم",
        "serbian": "ресторан"
      }
    },
    {
      "german": "der Alexanderplatz",
      "translations": {
        "english": "Alexanderplatz (square in Berlin)",
        "ukrainian": "Александерплац",
        "polish": "Alexanderplatz",
        "albanian": "Alexanderplatz",
        "arabic": "ألكسندر بلاتز",
        "serbian": "Александерплац (трг у Берлину)"
      }
    },
    {
      "german": "das Brandenburger Tor",
      "translations": {
        "english": "Brandenburg Gate",
        "ukrainian": "Бранденбурзькі ворота",
        "polish": "Brama Brandenburska",
        "albanian": "Porta e Brandenburgut",
        "arabic": "بوابة براندنبورغ",
        "serbian": "Бранденбуршка капија"
      }
    },
    {
      "german": "der Reichstag",
      "translations": {
        "english": "Reichstag (parliament building)",
        "ukrainian": "Рейхстаг",
        "polish": "Reichstag",
        "albanian": "Reichstag",
        "arabic": "الرايخستاغ",
        "serbian": "Рајхстаг (зграда парламента)"
      }
    },
    {
      "german": "die Museumsinsel",
      "translations": {
        "english": "Museum Island",
        "ukrainian": "Музейний острів",
        "polish": "Wyspa Muzeów",
        "albanian": "Ishulli i Muzeve",
        "arabic": "جزيرة المتاحف",
        "serbian": "Музејско острво"
      }
    },
    {
      "german": "der Balkon, die Balkone",
      "translations": {
        "english": "balcony",
        "ukrainian": "балкон",
        "polish": "balkon",
        "albanian": "ballkoni",
        "arabic": "شرفة",
        "serbian": "балкон"
      }
    },
    {
      "german": "die Wohnung, die Wohnungen",
      "translations": {
        "english": "apartment",
        "ukrainian": "квартира",
        "polish": "mieszkanie",
        "albanian": "banesa",
        "arabic": "شقة",
        "serbian": "стан"
      }
    },
    {
      "german": "der Kaffee",
      "translations": {
        "english": "coffee",
        "ukrainian": "кава",
        "polish": "kawa",
        "albanian": "kafeja",
        "arabic": "قهوة",
        "serbian": "кафа"
      }
    },
    {
      "german": "der Tee",
      "translations": {
        "english": "tea",
        "ukrainian": "чай",
        "polish": "herbata",
        "albanian": "çaji",
        "arabic": "شاي",
        "serbian": "чај"
      }
    },
    {
      "german": "das Konzert, die Konzerte",
      "translations": {
        "english": "concert",
        "ukrainian": "концерт",
        "polish": "koncert",
        "albanian": "koncerti",
        "arabic": "حفلة موسيقية",
        "serbian": "концерт"
      }
    },
    {
      "german": "die Stadtrundfahrt, die Stadtrundfahrten",
      "translations": {
        "english": "city tour",
        "ukrainian": "екскурсія містом",
        "polish": "wycieczka po mieście",
        "albanian": "turi i qytetit",
        "arabic": "جولة في المدينة",
        "serbian": "разгледање града"
      }
    },
    {
      "german": "der Ausflug, die Ausflüge",
      "translations": {
        "english": "excursion, trip",
        "ukrainian": "екскурсія",
        "polish": "wycieczka",
        "albanian": "ekskursioni",
        "arabic": "رحلة",
        "serbian": "излет"
      }
    },
    {
      "german": "die Pizza, die Pizzas",
      "translations": {
        "english": "pizza",
        "ukrainian": "піца",
        "polish": "pizza",
        "albanian": "pica",
        "arabic": "بيتزا",
        "serbian": "пица"
      }
    },
    {
      "german": "die Geburtstagsparty, die Geburtstagspartys",
      "translations": {
        "english": "birthday party",
        "ukrainian": "вечірка на день народження",
        "polish": "przyjęcie urodzinowe",
        "albanian": "festa e ditëlindjes",
        "arabic": "حفلة عيد ميلاد",
        "serbian": "рођенданска журка"
      }
    },
    {
      "german": "das Taxi, die Taxis",
      "translations": {
        "english": "taxi",
        "ukrainian": "таксі",
        "polish": "taksówka",
        "albanian": "taksi",
        "arabic": "تاكسي",
        "serbian": "такси"
      }
    },
    {
      "german": "der Führer, die Führer",
      "translations": {
        "english": "guide, driver",
        "ukrainian": "гід, водій",
        "polish": "przewodnik, kierowca",
        "albanian": "udhërrëfyesi, shoferi",
        "arabic": "دليل، سائق",
        "serbian": "водич, возач"
      }
    },
    {
      "german": "die Post",
      "translations": {
        "english": "post office, mail",
        "ukrainian": "пошта",
        "polish": "poczta",
        "albanian": "posta",
        "arabic": "البريد",
        "serbian": "пошта"
      }
    },
    {
      "german": "das Auto, die Autos",
      "translations": {
        "english": "car",
        "ukrainian": "автомобіль",
        "polish": "samochód",
        "albanian": "makina",
        "arabic": "سيارة",
        "serbian": "аутомобил"
      }
    },
    {
      "german": "die Karte, die Karten",
      "translations": {
        "english": "card, map, ticket",
        "ukrainian": "картка, карта, квиток",
        "polish": "karta, mapa, bilet",
        "albanian": "karta, harta, bileta",
        "arabic": "بطاقة، خريطة، تذكرة",
        "serbian": "карта"
      }
    },
    {
      "german": "der Schlüssel, die Schlüssel",
      "translations": {
        "english": "key",
        "ukrainian": "ключ",
        "polish": "klucz",
        "albanian": "çelësi",
        "arabic": "مفتاح",
        "serbian": "кључ"
      }
    },
    {
      "german": "früher",
      "translations": {
        "english": "earlier, formerly",
        "ukrainian": "раніше",
        "polish": "wcześniej",
        "albanian": "më parë",
        "arabic": "سابقاً",
        "serbian": "раније"
      }
    },
    {
      "german": "heute",
      "translations": {
        "english": "today",
        "ukrainian": "сьогодні",
        "polish": "dzisiaj",
        "albanian": "sot",
        "arabic": "اليوم",
        "serbian": "данас"
      }
    },
    {
      "german": "verheiratet",
      "translations": {
        "english": "married",
        "ukrainian": "одружений",
        "polish": "żonaty/zamężna",
        "albanian": "i/e martuar",
        "arabic": "متزوج",
        "serbian": "ожењен/удата"
      }
    },
    {
      "german": "ledig",
      "translations": {
        "english": "single",
        "ukrainian": "неодружений",
        "polish": "stanu wolnego",
        "albanian": "beqar/e",
        "arabic": "أعزب",
        "serbian": "неожењен/неудата"
      }
    },
    {
      "german": "geschieden",
      "translations": {
        "english": "divorced",
        "ukrainian": "розлучений",
        "polish": "rozwiedziony",
        "albanian": "i/e divorcuar",
        "arabic": "مطلق",
        "serbian": "разведен"
      }
    },
    {
      "german": "die Großstadt, die Großstädte",
      "translations": {
        "english": "big city",
        "ukrainian": "велике місто",
        "polish": "duże miasto",
        "albanian": "qyteti i madh",
        "arabic": "مدينة كبيرة",
        "serbian": "велики град"
      }
    },
    {
      "german": "die Kleinstadt, die Kleinstädte",
      "translations": {
        "english": "small town",
        "ukrainian": "маленьке місто",
        "polish": "małe miasto",
        "albanian": "qyteti i vogël",
        "arabic": "بلدة صغيرة",
        "serbian": "small town"
      }
    },
    {
      "german": "das Land",
      "translations": {
        "english": "countryside, country",
        "ukrainian": "сільська місцевість, країна",
        "polish": "wieś, kraj",
        "albanian": "fshati, vendi",
        "arabic": "الريف، البلد",
        "serbian": "countryside, country"
      }
    },
    {
      "german": "müde",
      "translations": {
        "english": "tired",
        "ukrainian": "втомлений",
        "polish": "zmęczony",
        "albanian": "i/e lodhur",
        "arabic": "متعب",
        "serbian": "уморан"
      }
    },
    {
      "german": "der Autoschlüssel, die Autoschlüssel",
      "translations": {
        "english": "car key",
        "ukrainian": "ключ від автомобіля",
        "polish": "kluczyk samochodowy",
        "albanian": "çelësi i makinës",
        "arabic": "مفتاح السيارة",
        "serbian": "car key"
      }
    },
    {
      "german": "wichtig",
      "translations": {
        "english": "important",
        "ukrainian": "важливий",
        "polish": "ważny",
        "albanian": "i/e rëndësishëm",
        "arabic": "مهم",
        "serbian": "important"
      }
    },
    {
      "german": "unterwegs",
      "translations": {
        "english": "on the way",
        "ukrainian": "в дорозі",
        "polish": "w drodze",
        "albanian": "në rrugë",
        "arabic": "في الطريق",
        "serbian": "on the way"
      }
    },
    {
      "german": "die Postkarte, die Postkarten",
      "translations": {
        "english": "postcard",
        "ukrainian": "листівка",
        "polish": "pocztówka",
        "albanian": "kartolina",
        "arabic": "بطاقة بريدية",
        "serbian": "разгледница"
      }
    },
    {
      "german": "die Grüße (plural)",
      "translations": {
        "english": "greetings",
        "ukrainian": "вітання",
        "polish": "pozdrowienia",
        "albanian": "përshëndetjet",
        "arabic": "تحيات",
        "serbian": "greetings"
      }
    },
    {
      "german": "der Führerschein, die Führerscheine",
      "translations": {
        "english": "driver's license",
        "ukrainian": "водійські права",
        "polish": "prawo jazdy",
        "albanian": "patenta e shoferit",
        "arabic": "رخصة القيادة",
        "serbian": "driver's license"
      }
    },
    {
      "german": "die Kommunikation",
      "translations": {
        "english": "communication",
        "ukrainian": "комунікація",
        "polish": "komunikacja",
        "albanian": "komunikimi",
        "arabic": "التواصل",
        "serbian": "communication"
      }
    },
    {
      "german": "die Reise, die Reisen",
      "translations": {
        "english": "journey, trip",
        "ukrainian": "подорож",
        "polish": "podróż",
        "albanian": "udhëtimi",
        "arabic": "رحلة",
        "serbian": "journey, trip"
      }
    },
    {
      "german": "der Brief, die Briefe",
      "translations": {
        "english": "letter",
        "ukrainian": "лист",
        "polish": "list",
        "albanian": "letra",
        "arabic": "رسالة",
        "serbian": "letter"
      }
    },
    {
      "german": "die E-Mail, die E-Mails",
      "translations": {
        "english": "email",
        "ukrainian": "електронний лист",
        "polish": "e-mail",
        "albanian": "emaili",
        "arabic": "البريد الإلكتروني",
        "serbian": "имејл"
      }
    },
    {
      "german": "der Termin, die Termine",
      "translations": {
        "english": "appointment",
        "ukrainian": "зустріч, термін",
        "polish": "termin",
        "albanian": "takimi",
        "arabic": "موعد",
        "serbian": "термин"
      }
    },
    {
      "german": "die Familie, die Familien",
      "translations": {
        "english": "family",
        "ukrainian": "сім'я",
        "polish": "rodzina",
        "albanian": "familja",
        "arabic": "العائلة",
        "serbian": "family"
      }
    },
    {
      "german": "das Kind, die Kinder",
      "translations": {
        "english": "child, children",
        "ukrainian": "дитина, діти",
        "polish": "dziecko, dzieci",
        "albanian": "fëmija, fëmijët",
        "arabic": "طفل، أطفال",
        "serbian": "child, children"
      }
    },
    {
      "german": "der Beruf, die Berufe",
      "translations": {
        "english": "profession, job",
        "ukrainian": "професія",
        "polish": "zawód",
        "albanian": "profesioni",
        "arabic": "المهنة",
        "serbian": "profession, job"
      }
    },
    {
      "german": "das Hobby, die Hobbys",
      "translations": {
        "english": "hobby",
        "ukrainian": "хобі",
        "polish": "hobby",
        "albanian": "hobi",
        "arabic": "الهواية",
        "serbian": "хоби"
      }
    }
  ],
  11: [
    {
      "german": "das Amt, die Ämter",
      "translations": {
        "english": "office, authority",
        "ukrainian": "установа, відомство",
        "polish": "urząd",
        "albanian": "zyra, autoriteti",
        "arabic": "المكتب، السلطة",
        "serbian": "office, authority"
      }
    },
    {
      "german": "die Behörde, die Behörden",
      "translations": {
        "english": "authority, government office",
        "ukrainian": "орган влади, установа",
        "polish": "urząd, władza",
        "albanian": "autoriteti, zyra qeveritare",
        "arabic": "السلطة، الدائرة الحكومية",
        "serbian": "authority, government office"
      }
    },
    {
      "german": "die Bundesagentur für Arbeit",
      "translations": {
        "english": "Federal Employment Agency",
        "ukrainian": "Федеральне агентство зайнятості",
        "polish": "Federalna Agencja Pracy",
        "albanian": "Agjencia Federale e Punës",
        "arabic": "الوكالة الاتحادية للعمل",
        "serbian": "Federal Employment Agency"
      }
    },
    {
      "german": "die Familienkasse, die Familienkassen",
      "translations": {
        "english": "family benefits office",
        "ukrainian": "каса сімейних виплат",
        "polish": "kasa rodzinna",
        "albanian": "zyra e përfitimeve familjare",
        "arabic": "صندوق العائلة",
        "serbian": "family benefits office"
      }
    },
    {
      "german": "das Standesamt, die Standesämter",
      "translations": {
        "english": "registry office",
        "ukrainian": "РАЦС, відділ реєстрації актів цивільного стану",
        "polish": "urząd stanu cywilnego",
        "albanian": "zyra e gjendjes civile",
        "arabic": "مكتب الأحوال المدنية",
        "serbian": "registry office"
      }
    },
    {
      "german": "die Kfz-Zulassungsstelle, die Kfz-Zulassungsstellen",
      "translations": {
        "english": "vehicle registration office",
        "ukrainian": "відділ реєстрації транспортних засобів",
        "polish": "wydział komunikacji",
        "albanian": "zyra e regjistrimit të automjeteve",
        "arabic": "مكتب تسجيل المركبات",
        "serbian": "vehicle registration office"
      }
    },
    {
      "german": "der Warteraum, die Warteräume",
      "translations": {
        "english": "waiting room",
        "ukrainian": "зал очікування",
        "polish": "poczekalnia",
        "albanian": "dhoma e pritjes",
        "arabic": "غرفة الانتظار",
        "serbian": "чекаоница"
      }
    },
    {
      "german": "das Kindergeld",
      "translations": {
        "english": "child benefit",
        "ukrainian": "допомога на дитину",
        "polish": "zasiłek na dziecko",
        "albanian": "ndihma për fëmijë",
        "arabic": "إعانة الطفل",
        "serbian": "child benefit"
      }
    },
    {
      "german": "die Berufsberatung, die Berufsberatungen",
      "translations": {
        "english": "career counseling",
        "ukrainian": "професійна консультація",
        "polish": "doradztwo zawodowe",
        "albanian": "këshillimi i karrierës",
        "arabic": "الاستشارة المهنية",
        "serbian": "career counseling"
      }
    },
    {
      "german": "das Bürgeramt, die Bürgerämter",
      "translations": {
        "english": "citizen's office",
        "ukrainian": "громадська приймальня",
        "polish": "urząd obywatelski",
        "albanian": "zyra e qytetarëve",
        "arabic": "مكتب المواطنين",
        "serbian": "citizen's office"
      }
    },
    {
      "german": "das Ausländeramt, die Ausländerämter",
      "translations": {
        "english": "foreigners' office",
        "ukrainian": "відділ у справах іноземців",
        "polish": "urząd do spraw cudzoziemców",
        "albanian": "zyra e të huajve",
        "arabic": "مكتب شؤون الأجانب",
        "serbian": "foreigners' office"
      }
    },
    {
      "german": "das Visum, die Visa",
      "translations": {
        "english": "visa",
        "ukrainian": "віза",
        "polish": "wiza",
        "albanian": "viza",
        "arabic": "التأشيرة",
        "serbian": "виза"
      }
    },
    {
      "german": "die Meldestelle, die Meldestellen",
      "translations": {
        "english": "registration office",
        "ukrainian": "реєстраційний відділ",
        "polish": "biuro meldunkowe",
        "albanian": "zyra e regjistrimit",
        "arabic": "مكتب التسجيل",
        "serbian": "матична служба"
      }
    },
    {
      "german": "die Gemeinde, die Gemeinden",
      "translations": {
        "english": "municipality, community",
        "ukrainian": "громада, муніципалітет",
        "polish": "gmina",
        "albanian": "komuna, bashkia",
        "arabic": "البلدية",
        "serbian": "municipality, community"
      }
    },
    {
      "german": "das Geburtsdatum, die Geburtsdaten",
      "translations": {
        "english": "date of birth",
        "ukrainian": "дата народження",
        "polish": "data urodzenia",
        "albanian": "data e lindjes",
        "arabic": "تاريخ الميلاد",
        "serbian": "датум рођења"
      }
    },
    {
      "german": "der Geburtsort, die Geburtsorte",
      "translations": {
        "english": "place of birth",
        "ukrainian": "місце народження",
        "polish": "miejsce urodzenia",
        "albanian": "vendi i lindjes",
        "arabic": "مكان الولادة",
        "serbian": "место рођења"
      }
    },
    {
      "german": "der Familienstand",
      "translations": {
        "english": "marital status",
        "ukrainian": "сімейний стан",
        "polish": "stan cywilny",
        "albanian": "gjendja civile",
        "arabic": "الحالة الاجتماعية",
        "serbian": "брачно стање"
      }
    },
    {
      "german": "die Staatsangehörigkeit, die Staatsangehörigkeiten",
      "translations": {
        "english": "nationality, citizenship",
        "ukrainian": "громадянство",
        "polish": "obywatelstwo",
        "albanian": "shtetësia",
        "arabic": "الجنسية",
        "serbian": "nationality, citizenship"
      }
    },
    {
      "german": "das Datum, die Daten",
      "translations": {
        "english": "date",
        "ukrainian": "дата",
        "polish": "data",
        "albanian": "data",
        "arabic": "التاريخ",
        "serbian": "date"
      }
    },
    {
      "german": "die Geburtsurkunde, die Geburtsurkunden",
      "translations": {
        "english": "birth certificate",
        "ukrainian": "свідоцтво про народження",
        "polish": "akt urodzenia",
        "albanian": "certifikata e lindjes",
        "arabic": "شهادة الميلاد",
        "serbian": "извод из матичне књиге рођених"
      }
    },
    {
      "german": "der Pass, die Pässe",
      "translations": {
        "english": "passport",
        "ukrainian": "паспорт",
        "polish": "paszport",
        "albanian": "pasaporta",
        "arabic": "جواز السفر",
        "serbian": "пасош"
      }
    },
    {
      "german": "der Eingang, die Eingänge",
      "translations": {
        "english": "entrance",
        "ukrainian": "вхід",
        "polish": "wejście",
        "albanian": "hyrja",
        "arabic": "المدخل",
        "serbian": "улаз"
      }
    },
    {
      "german": "die Hauptwohnung, die Hauptwohnungen",
      "translations": {
        "english": "main residence",
        "ukrainian": "основне місце проживання",
        "polish": "główne miejsce zamieszkania",
        "albanian": "vendbanimi kryesor",
        "arabic": "السكن الرئيسي",
        "serbian": "main residence"
      }
    },
    {
      "german": "der/die Vermieter/in, die Vermieter",
      "translations": {
        "english": "landlord/landlady",
        "ukrainian": "орендодавець",
        "polish": "wynajmujący",
        "albanian": "qiradhënësi",
        "arabic": "المؤجر",
        "serbian": "станодавац"
      }
    },
    {
      "german": "die Wartenummer, die Wartenummern",
      "translations": {
        "english": "waiting number",
        "ukrainian": "номер черги",
        "polish": "numer kolejki",
        "albanian": "numri i pritjes",
        "arabic": "رقم الانتظار",
        "serbian": "број за чекање"
      }
    },
    {
      "german": "die Kursgebühr, die Kursgebühren",
      "translations": {
        "english": "course fee",
        "ukrainian": "плата за курс",
        "polish": "opłata za kurs",
        "albanian": "tarifa e kursit",
        "arabic": "رسوم الدورة",
        "serbian": "course fee"
      }
    },
    {
      "german": "der Mietvertrag, die Mietverträge",
      "translations": {
        "english": "rental contract",
        "ukrainian": "договір оренди",
        "polish": "umowa najmu",
        "albanian": "kontrata e qirasë",
        "arabic": "عقد الإيجار",
        "serbian": "rental contract"
      }
    },
    {
      "german": "die Gehaltsabrechnung, die Gehaltsabrechnungen",
      "translations": {
        "english": "salary statement",
        "ukrainian": "розрахунковий лист",
        "polish": "odcinek wypłaty",
        "albanian": "pasqyra e pagës",
        "arabic": "كشف الراتب",
        "serbian": "salary statement"
      }
    },
    {
      "german": "der Tipp, die Tipps",
      "translations": {
        "english": "tip, advice",
        "ukrainian": "порада",
        "polish": "wskazówka",
        "albanian": "këshilla",
        "arabic": "نصيحة",
        "serbian": "tip, advice"
      }
    },
    {
      "german": "die Informationsbroschüre, die Informationsbroschüren",
      "translations": {
        "english": "information brochure",
        "ukrainian": "інформаційна брошура",
        "polish": "broszura informacyjna",
        "albanian": "broshura informative",
        "arabic": "كتيب المعلومات",
        "serbian": "information brochure"
      }
    },
    {
      "german": "der/die Sachbearbeiter/in, die Sachbearbeiter",
      "translations": {
        "english": "clerk, case worker",
        "ukrainian": "службовець",
        "polish": "urzędnik",
        "albanian": "nëpunësi",
        "arabic": "الموظف المسؤول",
        "serbian": "clerk, case worker"
      }
    },
    {
      "german": "männlich",
      "translations": {
        "english": "male",
        "ukrainian": "чоловічий",
        "polish": "męski",
        "albanian": "mashkull",
        "arabic": "ذكر",
        "serbian": "male"
      }
    },
    {
      "german": "weiblich",
      "translations": {
        "english": "female",
        "ukrainian": "жіночий",
        "polish": "żeński",
        "albanian": "femër",
        "arabic": "أنثى",
        "serbian": "female"
      }
    },
    {
      "german": "berufstätig",
      "translations": {
        "english": "employed",
        "ukrainian": "працевлаштований",
        "polish": "zatrudniony",
        "albanian": "i punësuar",
        "arabic": "موظف",
        "serbian": "employed"
      }
    },
    {
      "german": "verheiratet",
      "translations": {
        "english": "married",
        "ukrainian": "одружений",
        "polish": "żonaty/zamężna",
        "albanian": "i martuar",
        "arabic": "متزوج",
        "serbian": "ожењен/удата"
      }
    },
    {
      "german": "ledig",
      "translations": {
        "english": "single",
        "ukrainian": "неодружений",
        "polish": "wolny/wolna",
        "albanian": "beqar",
        "arabic": "أعزب",
        "serbian": "неожењен/неудата"
      }
    },
    {
      "german": "die Wohnung, die Wohnungen",
      "translations": {
        "english": "apartment",
        "ukrainian": "квартира",
        "polish": "mieszkanie",
        "albanian": "banesa",
        "arabic": "الشقة",
        "serbian": "стан"
      }
    },
    {
      "german": "die Eigentumswohnung, die Eigentumswohnungen",
      "translations": {
        "english": "condominium, owner-occupied apartment",
        "ukrainian": "власна квартира",
        "polish": "mieszkanie własnościowe",
        "albanian": "banesa në pronësi",
        "arabic": "شقة تمليك",
        "serbian": "condominium, owner-occupied apartment"
      }
    },
    {
      "german": "mieten",
      "translations": {
        "english": "to rent",
        "ukrainian": "орендувати",
        "polish": "wynajmować",
        "albanian": "të marrësh me qira",
        "arabic": "يستأجر",
        "serbian": "to rent"
      }
    },
    {
      "german": "umziehen",
      "translations": {
        "english": "to move (residence)",
        "ukrainian": "переїжджати",
        "polish": "przeprowadzać się",
        "albanian": "të shpërngulesh",
        "arabic": "ينتقل",
        "serbian": "to move (residence)"
      }
    }
  ],
  "12": [
    {
      "german": "der Mantel, die Mäntel",
      "translations": {
        "english": "coat",
        "ukrainian": "пальто",
        "polish": "płaszcz",
        "albanian": "pallto",
        "arabic": "معطف",
        "serbian": "капут"
      }
    },
    {
      "german": "die Hose, die Hosen",
      "translations": {
        "english": "pants/trousers",
        "ukrainian": "штани",
        "polish": "spodnie",
        "albanian": "pantallona",
        "arabic": "بنطلون",
        "serbian": "панталоне"
      }
    },
    {
      "german": "die Schuhe (Plural)",
      "translations": {
        "english": "shoes",
        "ukrainian": "взуття",
        "polish": "buty",
        "albanian": "këpucë",
        "arabic": "أحذية",
        "serbian": "ципеле"
      }
    },
    {
      "german": "das Kleid, die Kleider",
      "translations": {
        "english": "dress",
        "ukrainian": "сукня",
        "polish": "sukienka",
        "albanian": "fustan",
        "arabic": "فستان",
        "serbian": "хаљина"
      }
    },
    {
      "german": "das Hemd, die Hemden",
      "translations": {
        "english": "shirt",
        "ukrainian": "сорочка",
        "polish": "koszula",
        "albanian": "këmishë",
        "arabic": "قميص",
        "serbian": "кошуља"
      }
    },
    {
      "german": "die Bluse, die Blusen",
      "translations": {
        "english": "blouse",
        "ukrainian": "блузка",
        "polish": "bluzka",
        "albanian": "bluzë",
        "arabic": "بلوزة",
        "serbian": "блуза"
      }
    },
    {
      "german": "der Pullover, die Pullover",
      "translations": {
        "english": "pullover/sweater",
        "ukrainian": "светр",
        "polish": "sweter",
        "albanian": "pulover",
        "arabic": "كنزة",
        "serbian": "pullover/sweater"
      }
    },
    {
      "german": "das T-Shirt, die T-Shirts",
      "translations": {
        "english": "T-shirt",
        "ukrainian": "футболка",
        "polish": "koszulka",
        "albanian": "bluzë sportive",
        "arabic": "تي شيرت",
        "serbian": "мајица"
      }
    },
    {
      "german": "die Jacke, die Jacken",
      "translations": {
        "english": "jacket",
        "ukrainian": "куртка",
        "polish": "kurtka",
        "albanian": "xhaketë",
        "arabic": "جاكيت",
        "serbian": "јакна"
      }
    },
    {
      "german": "der Rock, die Röcke",
      "translations": {
        "english": "skirt",
        "ukrainian": "спідниця",
        "polish": "spódnica",
        "albanian": "fund",
        "arabic": "تنورة",
        "serbian": "сукња"
      }
    },
    {
      "german": "die Jeans (Singular/Plural)",
      "translations": {
        "english": "jeans",
        "ukrainian": "джинси",
        "polish": "dżinsy",
        "albanian": "xhinse",
        "arabic": "جينز",
        "serbian": "фармерке"
      }
    },
    {
      "german": "das Sweatshirt, die Sweatshirts",
      "translations": {
        "english": "sweatshirt",
        "ukrainian": "світшот",
        "polish": "bluza",
        "albanian": "bluze sportive",
        "arabic": "سويت شيرت",
        "serbian": "sweatshirt"
      }
    },
    {
      "german": "die Socke, die Socken",
      "translations": {
        "english": "sock",
        "ukrainian": "шкарпетка",
        "polish": "skarpeta",
        "albanian": "çorape",
        "arabic": "جورب",
        "serbian": "sock"
      }
    },
    {
      "german": "die Unterwäsche (Singular)",
      "translations": {
        "english": "underwear",
        "ukrainian": "нижня білизна",
        "polish": "bielizna",
        "albanian": "të brendshme",
        "arabic": "ملابس داخلية",
        "serbian": "доњи веш"
      }
    },
    {
      "german": "der Anzug, die Anzüge",
      "translations": {
        "english": "suit",
        "ukrainian": "костюм",
        "polish": "garnitur",
        "albanian": "kostum",
        "arabic": "بدلة",
        "serbian": "одело"
      }
    },
    {
      "german": "die Krawatte, die Krawatten",
      "translations": {
        "english": "tie",
        "ukrainian": "краватка",
        "polish": "krawat",
        "albanian": "kravatë",
        "arabic": "ربطة عنق",
        "serbian": "кравата"
      }
    },
    {
      "german": "der Stiefel, die Stiefel",
      "translations": {
        "english": "boot",
        "ukrainian": "чобіт",
        "polish": "but",
        "albanian": "çizme",
        "arabic": "حذاء طويل",
        "serbian": "boot"
      }
    },
    {
      "german": "die Sandale, die Sandalen",
      "translations": {
        "english": "sandal",
        "ukrainian": "сандалі",
        "polish": "sandał",
        "albanian": "sandale",
        "arabic": "صندل",
        "serbian": "sandal"
      }
    },
    {
      "german": "der Strumpf, die Strümpfe",
      "translations": {
        "english": "stocking",
        "ukrainian": "панчоха",
        "polish": "pończocha",
        "albanian": "çorape të gjata",
        "arabic": "جوارب طويلة",
        "serbian": "stocking"
      }
    },
    {
      "german": "die Strumpfhose, die Strumpfhosen",
      "translations": {
        "english": "tights/pantyhose",
        "ukrainian": "колготки",
        "polish": "rajstopy",
        "albanian": "kollotuke",
        "arabic": "جوارب طويلة",
        "serbian": "tights/pantyhose"
      }
    },
    {
      "german": "der Schal, die Schals",
      "translations": {
        "english": "scarf",
        "ukrainian": "шарф",
        "polish": "szalik",
        "albanian": "shall",
        "arabic": "وشاح",
        "serbian": "шал"
      }
    },
    {
      "german": "der Handschuh, die Handschuhe",
      "translations": {
        "english": "glove",
        "ukrainian": "рукавичка",
        "polish": "rękawica",
        "albanian": "dorashkë",
        "arabic": "قفاز",
        "serbian": "glove"
      }
    },
    {
      "german": "der Regenschirm, die Regenschirme",
      "translations": {
        "english": "umbrella",
        "ukrainian": "парасолька",
        "polish": "parasol",
        "albanian": "ombrellë",
        "arabic": "مظلة",
        "serbian": "кишобран"
      }
    },
    {
      "german": "die Regenjacke, die Regenjacken",
      "translations": {
        "english": "raincoat",
        "ukrainian": "дощовик",
        "polish": "kurtka przeciwdeszczowa",
        "albanian": "xhaketë shiu",
        "arabic": "معطف مطر",
        "serbian": "кишни мантил"
      }
    },
    {
      "german": "die Jogginghose, die Jogginghosen",
      "translations": {
        "english": "sweatpants/jogging pants",
        "ukrainian": "спортивні штани",
        "polish": "spodnie dresowe",
        "albanian": "pantallona sportive",
        "arabic": "بنطلون رياضي",
        "serbian": "sweatpants/jogging pants"
      }
    },
    {
      "german": "der Sportschuh, die Sportschuhe",
      "translations": {
        "english": "sports shoe/sneaker",
        "ukrainian": "кросівки",
        "polish": "buty sportowe",
        "albanian": "këpucë sportive",
        "arabic": "حذاء رياضي",
        "serbian": "патике"
      }
    },
    {
      "german": "der Anorak, die Anoraks",
      "translations": {
        "english": "anorak",
        "ukrainian": "анорак",
        "polish": "anorak",
        "albanian": "anorak",
        "arabic": "معطف شتوي",
        "serbian": "анорак"
      }
    },
    {
      "german": "der Hut, die Hüte",
      "translations": {
        "english": "hat",
        "ukrainian": "капелюх",
        "polish": "kapelusz",
        "albanian": "kapelë",
        "arabic": "قبعة",
        "serbian": "шешир"
      }
    },
    {
      "german": "die Kappe, die Kappen",
      "translations": {
        "english": "cap",
        "ukrainian": "кепка",
        "polish": "czapka",
        "albanian": "kapuç",
        "arabic": "قبعة",
        "serbian": "капа"
      }
    },
    {
      "german": "die Mütze, die Mützen",
      "translations": {
        "english": "cap/beanie",
        "ukrainian": "шапка",
        "polish": "czapka",
        "albanian": "kapelë",
        "arabic": "قبعة صوفية",
        "serbian": "капа"
      }
    },
    {
      "german": "das Kaufhaus, die Kaufhäuser",
      "translations": {
        "english": "department store",
        "ukrainian": "універмаг",
        "polish": "dom towarowy",
        "albanian": "qendër tregtare",
        "arabic": "متجر كبير",
        "serbian": "робна кућа"
      }
    },
    {
      "german": "die Boutique, die Boutiquen",
      "translations": {
        "english": "boutique",
        "ukrainian": "бутік",
        "polish": "butik",
        "albanian": "butik",
        "arabic": "متجر أزياء",
        "serbian": "бутик"
      }
    },
    {
      "german": "der Flohmarkt, die Flohmärkte",
      "translations": {
        "english": "flea market",
        "ukrainian": "блошиний ринок",
        "polish": "pchli targ",
        "albanian": "treg i vjetër",
        "arabic": "سوق البرغوث",
        "serbian": "бувља пијаца"
      }
    },
    {
      "german": "die Umkleidekabine, die Umkleidekabinen",
      "translations": {
        "english": "changing room/fitting room",
        "ukrainian": "примірочна",
        "polish": "przymierzalnia",
        "albanian": "dhomë provimi",
        "arabic": "غرفة القياس",
        "serbian": "кабина за пресвлачење"
      }
    },
    {
      "german": "der Secondhandladen, die Secondhandläden",
      "translations": {
        "english": "second-hand shop",
        "ukrainian": "секонд-хенд",
        "polish": "sklep z używaną odzieżą",
        "albanian": "dyqan i dorës së dytë",
        "arabic": "متجر ملابس مستعملة",
        "serbian": "секонд хенд"
      }
    },
    {
      "german": "die Größe, die Größen",
      "translations": {
        "english": "size",
        "ukrainian": "розмір",
        "polish": "rozmiar",
        "albanian": "madhësi",
        "arabic": "مقاس",
        "serbian": "величина"
      }
    },
    {
      "german": "der Preis, die Preise",
      "translations": {
        "english": "price",
        "ukrainian": "ціна",
        "polish": "cena",
        "albanian": "çmim",
        "arabic": "سعر",
        "serbian": "цена"
      }
    },
    {
      "german": "die Kasse, die Kassen",
      "translations": {
        "english": "cash register/checkout",
        "ukrainian": "каса",
        "polish": "kasa",
        "albanian": "arka",
        "arabic": "صندوق الدفع",
        "serbian": "каса"
      }
    },
    {
      "german": "der Ausgang, die Ausgänge",
      "translations": {
        "english": "exit",
        "ukrainian": "вихід",
        "polish": "wyjście",
        "albanian": "dalje",
        "arabic": "مخرج",
        "serbian": "излаз"
      }
    },
    {
      "german": "die Rolltreppe, die Rolltreppen",
      "translations": {
        "english": "escalator",
        "ukrainian": "ескалатор",
        "polish": "schody ruchome",
        "albanian": "shkallë lëvizëse",
        "arabic": "سلم متحرك",
        "serbian": "покретне степенице"
      }
    },
    {
      "german": "die Abteilung, die Abteilungen",
      "translations": {
        "english": "department",
        "ukrainian": "відділ",
        "polish": "dział",
        "albanian": "departament",
        "arabic": "قسم",
        "serbian": "одељење"
      }
    },
    {
      "german": "das Erdgeschoss",
      "translations": {
        "english": "ground floor",
        "ukrainian": "перший поверх",
        "polish": "parter",
        "albanian": "kati përdhes",
        "arabic": "الطابق الأرضي",
        "serbian": "приземље"
      }
    },
    {
      "german": "der Stock, die Stockwerke",
      "translations": {
        "english": "floor/story",
        "ukrainian": "поверх",
        "polish": "piętro",
        "albanian": "kat",
        "arabic": "طابق",
        "serbian": "спрат"
      }
    },
    {
      "german": "das Computerspiel, die Computerspiele",
      "translations": {
        "english": "computer game",
        "ukrainian": "комп'ютерна гра",
        "polish": "gra komputerowa",
        "albanian": "lojë kompjuteri",
        "arabic": "لعبة كمبيوتر",
        "serbian": "компјутерска игра"
      }
    },
    {
      "german": "der Schmuck",
      "translations": {
        "english": "jewelry",
        "ukrainian": "прикраси",
        "polish": "biżuteria",
        "albanian": "bizhuteri",
        "arabic": "مجوهرات",
        "serbian": "накит"
      }
    },
    {
      "german": "die Toilette, die Toiletten",
      "translations": {
        "english": "toilet/bathroom",
        "ukrainian": "туалет",
        "polish": "toaleta",
        "albanian": "tualet",
        "arabic": "مرحاض",
        "serbian": "тоалет"
      }
    }
  ],
  "13": [
    {
      "german": "die Jahreszeit, die Jahreszeiten",
      "translations": {
        "english": "season",
        "ukrainian": "пора року",
        "polish": "pora roku",
        "albanian": "stina",
        "arabic": "فصل السنة",
        "serbian": "годишње доба"
      }
    },
    {
      "german": "der Januar",
      "translations": {
        "english": "January",
        "ukrainian": "січень",
        "polish": "styczeń",
        "albanian": "janar",
        "arabic": "يناير",
        "serbian": "јануар"
      }
    },
    {
      "german": "der Februar",
      "translations": {
        "english": "February",
        "ukrainian": "лютий",
        "polish": "luty",
        "albanian": "shkurt",
        "arabic": "فبراير",
        "serbian": "фебруар"
      }
    },
    {
      "german": "der März",
      "translations": {
        "english": "March",
        "ukrainian": "березень",
        "polish": "marzec",
        "albanian": "mars",
        "arabic": "مارس",
        "serbian": "март"
      }
    },
    {
      "german": "der April",
      "translations": {
        "english": "April",
        "ukrainian": "квітень",
        "polish": "kwiecień",
        "albanian": "prill",
        "arabic": "أبريل",
        "serbian": "април"
      }
    },
    {
      "german": "der Mai",
      "translations": {
        "english": "May",
        "ukrainian": "травень",
        "polish": "maj",
        "albanian": "maj",
        "arabic": "مايو",
        "serbian": "мај"
      }
    },
    {
      "german": "der Juni",
      "translations": {
        "english": "June",
        "ukrainian": "червень",
        "polish": "czerwiec",
        "albanian": "qershor",
        "arabic": "يونيو",
        "serbian": "јун"
      }
    },
    {
      "german": "der Juli",
      "translations": {
        "english": "July",
        "ukrainian": "липень",
        "polish": "lipiec",
        "albanian": "korrik",
        "arabic": "يوليو",
        "serbian": "јул"
      }
    },
    {
      "german": "der August",
      "translations": {
        "english": "August",
        "ukrainian": "серпень",
        "polish": "sierpień",
        "albanian": "gusht",
        "arabic": "أغسطس",
        "serbian": "август"
      }
    },
    {
      "german": "der September",
      "translations": {
        "english": "September",
        "ukrainian": "вересень",
        "polish": "wrzesień",
        "albanian": "shtator",
        "arabic": "سبتمبر",
        "serbian": "септембар"
      }
    },
    {
      "german": "der Oktober",
      "translations": {
        "english": "October",
        "ukrainian": "жовтень",
        "polish": "październik",
        "albanian": "tetor",
        "arabic": "أكتوبر",
        "serbian": "октобар"
      }
    },
    {
      "german": "der November",
      "translations": {
        "english": "November",
        "ukrainian": "листопад",
        "polish": "listopad",
        "albanian": "nëntor",
        "arabic": "نوفمبر",
        "serbian": "новембар"
      }
    },
    {
      "german": "der Dezember",
      "translations": {
        "english": "December",
        "ukrainian": "грудень",
        "polish": "grudzień",
        "albanian": "dhjetor",
        "arabic": "ديسمبر",
        "serbian": "децембар"
      }
    },
    {
      "german": "der Frühling",
      "translations": {
        "english": "spring",
        "ukrainian": "весна",
        "polish": "wiosna",
        "albanian": "pranvera",
        "arabic": "الربيع",
        "serbian": "пролеће"
      }
    },
    {
      "german": "der Sommer",
      "translations": {
        "english": "summer",
        "ukrainian": "літо",
        "polish": "lato",
        "albanian": "vera",
        "arabic": "الصيف",
        "serbian": "лето"
      }
    },
    {
      "german": "der Herbst",
      "translations": {
        "english": "autumn/fall",
        "ukrainian": "осінь",
        "polish": "jesień",
        "albanian": "vjeshta",
        "arabic": "الخريف",
        "serbian": "јесен"
      }
    },
    {
      "german": "der Winter",
      "translations": {
        "english": "winter",
        "ukrainian": "зима",
        "polish": "zima",
        "albanian": "dimri",
        "arabic": "الشتاء",
        "serbian": "зима"
      }
    },
    {
      "german": "das Wetter",
      "translations": {
        "english": "weather",
        "ukrainian": "погода",
        "polish": "pogoda",
        "albanian": "moti",
        "arabic": "الطقس",
        "serbian": "време"
      }
    },
    {
      "german": "die Sonne",
      "translations": {
        "english": "sun",
        "ukrainian": "сонце",
        "polish": "słońce",
        "albanian": "dielli",
        "arabic": "الشمس",
        "serbian": "сунце"
      }
    },
    {
      "german": "der Regen",
      "translations": {
        "english": "rain",
        "ukrainian": "дощ",
        "polish": "deszcz",
        "albanian": "shiu",
        "arabic": "المطر",
        "serbian": "киша"
      }
    },
    {
      "german": "der Schnee",
      "translations": {
        "english": "snow",
        "ukrainian": "сніг",
        "polish": "śnieg",
        "albanian": "bora",
        "arabic": "الثلج",
        "serbian": "снег"
      }
    },
    {
      "german": "der Wind",
      "translations": {
        "english": "wind",
        "ukrainian": "вітер",
        "polish": "wiatr",
        "albanian": "era",
        "arabic": "الرياح",
        "serbian": "ветар"
      }
    },
    {
      "german": "die Wolke, die Wolken",
      "translations": {
        "english": "cloud",
        "ukrainian": "хмара",
        "polish": "chmura",
        "albanian": "reja",
        "arabic": "السحابة",
        "serbian": "облак"
      }
    },
    {
      "german": "der Nebel",
      "translations": {
        "english": "fog",
        "ukrainian": "туман",
        "polish": "mgła",
        "albanian": "mjegulla",
        "arabic": "الضباب",
        "serbian": "магла"
      }
    },
    {
      "german": "die Hitze",
      "translations": {
        "english": "heat",
        "ukrainian": "спека",
        "polish": "upał",
        "albanian": "vapa",
        "arabic": "الحرارة",
        "serbian": "врућина"
      }
    },
    {
      "german": "die Kälte",
      "translations": {
        "english": "cold",
        "ukrainian": "холод",
        "polish": "zimno",
        "albanian": "të ftohtit",
        "arabic": "البرد",
        "serbian": "хладноћа"
      }
    },
    {
      "german": "der Urlaub",
      "translations": {
        "english": "vacation/holiday",
        "ukrainian": "відпустка",
        "polish": "urlop",
        "albanian": "pushimet",
        "arabic": "العطلة",
        "serbian": "одмор"
      }
    },
    {
      "german": "die Reise, die Reisen",
      "translations": {
        "english": "journey/trip",
        "ukrainian": "подорож",
        "polish": "podróż",
        "albanian": "udhëtimi",
        "arabic": "الرحلة",
        "serbian": "путовање"
      }
    },
    {
      "german": "der Berg, die Berge",
      "translations": {
        "english": "mountain",
        "ukrainian": "гора",
        "polish": "góra",
        "albanian": "mali",
        "arabic": "الجبل",
        "serbian": "планина"
      }
    },
    {
      "german": "das Meer, die Meere",
      "translations": {
        "english": "sea",
        "ukrainian": "море",
        "polish": "morze",
        "albanian": "deti",
        "arabic": "البحر",
        "serbian": "море"
      }
    },
    {
      "german": "der See, die Seen",
      "translations": {
        "english": "lake",
        "ukrainian": "озеро",
        "polish": "jezioro",
        "albanian": "liqeni",
        "arabic": "البحيرة",
        "serbian": "језеро"
      }
    },
    {
      "german": "der Strand, die Strände",
      "translations": {
        "english": "beach",
        "ukrainian": "пляж",
        "polish": "plaża",
        "albanian": "plazhi",
        "arabic": "الشاطئ",
        "serbian": "плажа"
      }
    },
    {
      "german": "der Wald, die Wälder",
      "translations": {
        "english": "forest",
        "ukrainian": "ліс",
        "polish": "las",
        "albanian": "pylli",
        "arabic": "الغابة",
        "serbian": "шума"
      }
    },
    {
      "german": "die Wiese, die Wiesen",
      "translations": {
        "english": "meadow",
        "ukrainian": "луг",
        "polish": "łąka",
        "albanian": "livadhi",
        "arabic": "المرج",
        "serbian": "ливада"
      }
    },
    {
      "german": "der Bauernhof, die Bauernhöfe",
      "translations": {
        "english": "farm",
        "ukrainian": "ферма",
        "polish": "gospodarstwo",
        "albanian": "ferma",
        "arabic": "المزرعة",
        "serbian": "фарма"
      }
    },
    {
      "german": "das Dorf, die Dörfer",
      "translations": {
        "english": "village",
        "ukrainian": "село",
        "polish": "wieś",
        "albanian": "fshati",
        "arabic": "القرية",
        "serbian": "село"
      }
    },
    {
      "german": "die Stadt, die Städte",
      "translations": {
        "english": "city",
        "ukrainian": "місто",
        "polish": "miasto",
        "albanian": "qyteti",
        "arabic": "المدينة",
        "serbian": "град"
      }
    },
    {
      "german": "der Park, die Parks",
      "translations": {
        "english": "park",
        "ukrainian": "парк",
        "polish": "park",
        "albanian": "parku",
        "arabic": "الحديقة",
        "serbian": "парк"
      }
    },
    {
      "german": "die Fahrkarte, die Fahrkarten",
      "translations": {
        "english": "ticket",
        "ukrainian": "квиток",
        "polish": "bilet",
        "albanian": "bileta",
        "arabic": "التذكرة",
        "serbian": "карта"
      }
    },
    {
      "german": "die Abfahrt",
      "translations": {
        "english": "departure",
        "ukrainian": "відправлення",
        "polish": "odjazd",
        "albanian": "nisja",
        "arabic": "المغادرة",
        "serbian": "полазак"
      }
    },
    {
      "german": "die Ankunft",
      "translations": {
        "english": "arrival",
        "ukrainian": "прибуття",
        "polish": "przyjazd",
        "albanian": "mbërritja",
        "arabic": "الوصول",
        "serbian": "долазак"
      }
    },
    {
      "german": "der Zug, die Züge",
      "translations": {
        "english": "train",
        "ukrainian": "поїзд",
        "polish": "pociąg",
        "albanian": "treni",
        "arabic": "القطار",
        "serbian": "воз"
      }
    },
    {
      "german": "die Reservierung, die Reservierungen",
      "translations": {
        "english": "reservation",
        "ukrainian": "бронювання",
        "polish": "rezerwacja",
        "albanian": "rezervimi",
        "arabic": "الحجز",
        "serbian": "резервација"
      }
    },
    {
      "german": "die Erste/Zweite Klasse",
      "translations": {
        "english": "first/second class",
        "ukrainian": "перший/другий клас",
        "polish": "pierwsza/druga klasa",
        "albanian": "klasa e parë/e dytë",
        "arabic": "الدرجة الأولى/الثانية",
        "serbian": "прва/друга класа"
      }
    },
    {
      "german": "das Gleis, die Gleise",
      "translations": {
        "english": "platform/track",
        "ukrainian": "платформа",
        "polish": "peron",
        "albanian": "platforma",
        "arabic": "الرصيف",
        "serbian": "перон"
      }
    },
    {
      "german": "die Verspätung, die Verspätungen",
      "translations": {
        "english": "delay",
        "ukrainian": "затримка",
        "polish": "opóźnienie",
        "albanian": "vonesa",
        "arabic": "التأخير",
        "serbian": "кашњење"
      }
    },
    {
      "german": "die Landschaft, die Landschaften",
      "translations": {
        "english": "landscape",
        "ukrainian": "ландшафт",
        "polish": "krajobraz",
        "albanian": "peizazhi",
        "arabic": "المناظر الطبيعية",
        "serbian": "пејзаж"
      }
    },
    {
      "german": "die Brücke, die Brücken",
      "translations": {
        "english": "bridge",
        "ukrainian": "міст",
        "polish": "most",
        "albanian": "ura",
        "arabic": "الجسر",
        "serbian": "мост"
      }
    },
    {
      "german": "der Kilometer",
      "translations": {
        "english": "kilometer",
        "ukrainian": "кілометр",
        "polish": "kilometr",
        "albanian": "kilometri",
        "arabic": "الكيلومتر",
        "serbian": "километар"
      }
    },
    {
      "german": "der Norden",
      "translations": {
        "english": "north",
        "ukrainian": "північ",
        "polish": "północ",
        "albanian": "veriu",
        "arabic": "الشمال",
        "serbian": "север"
      }
    },
    {
      "german": "der Osten",
      "translations": {
        "english": "east",
        "ukrainian": "схід",
        "polish": "wschód",
        "albanian": "lindja",
        "arabic": "الشرق",
        "serbian": "исток"
      }
    },
    {
      "german": "der Süden",
      "translations": {
        "english": "south",
        "ukrainian": "південь",
        "polish": "południe",
        "albanian": "jugu",
        "arabic": "الجنوب",
        "serbian": "југ"
      }
    },
    {
      "german": "der Westen",
      "translations": {
        "english": "west",
        "ukrainian": "захід",
        "polish": "zachód",
        "albanian": "perëndimi",
        "arabic": "الغرب",
        "serbian": "запад"
      }
    },
    {
      "german": "der Campingplatz, die Campingplätze",
      "translations": {
        "english": "campsite",
        "ukrainian": "кемпінг",
        "polish": "kemping",
        "albanian": "kampi",
        "arabic": "موقع التخييم",
        "serbian": "камп"
      }
    },
    {
      "german": "das Hotel, die Hotels",
      "translations": {
        "english": "hotel",
        "ukrainian": "готель",
        "polish": "hotel",
        "albanian": "hoteli",
        "arabic": "الفندق",
        "serbian": "хотел"
      }
    },
    {
      "german": "der Monat, die Monate",
      "translations": {
        "english": "month",
        "ukrainian": "місяць",
        "polish": "miesiąc",
        "albanian": "muaji",
        "arabic": "الشهر",
        "serbian": "месец"
      }
    },
    {
      "german": "der Regentropfen",
      "translations": {
        "english": "raindrop",
        "ukrainian": "крапля дощу",
        "polish": "kropla deszczu",
        "albanian": "pika e shiut",
        "arabic": "قطرة المطر",
        "serbian": "кишна кап"
      }
    },
    {
      "german": "das Gewitter",
      "translations": {
        "english": "thunderstorm",
        "ukrainian": "гроза",
        "polish": "burza",
        "albanian": "stuhia",
        "arabic": "العاصفة الرعدية",
        "serbian": "олуја са грмљавином"
      }
    },
    {
      "german": "der Blitz",
      "translations": {
        "english": "lightning",
        "ukrainian": "блискавка",
        "polish": "błyskawica",
        "albanian": "vetëtima",
        "arabic": "البرق",
        "serbian": "муња"
      }
    },
    {
      "german": "der Donner",
      "translations": {
        "english": "thunder",
        "ukrainian": "грім",
        "polish": "grzmot",
        "albanian": "bubullima",
        "arabic": "الرعد",
        "serbian": "гром"
      }
    },
    {
      "german": "das Tier, die Tiere",
      "translations": {
        "english": "animal",
        "ukrainian": "тварина",
        "polish": "zwierzę",
        "albanian": "kafsha",
        "arabic": "الحيوان",
        "serbian": "животиња"
      }
    },
    {
      "german": "die Stadtrundfahr, die Stadtrundfahrten",
      "translations": {
        "english": "city tour",
        "ukrainian": "екскурсія містом",
        "polish": "zwiedzanie miasta",
        "albanian": "turi i qytetit",
        "arabic": "جولة في المدينة",
        "serbian": "разгледање града"
      }
    }
  ],
  "14":[
    {
      "german": "das Haus, die Häuser",
      "translations": {
        "english": "house",
        "ukrainian": "будинок",
        "polish": "dom",
        "albanian": "shtëpia",
        "arabic": "البيت",
        "serbian": "кућа"
      }
    },
    {
      "german": "die Wohnung, die Wohnungen",
      "translations": {
        "english": "apartment",
        "ukrainian": "квартира",
        "polish": "mieszkanie",
        "albanian": "banesa",
        "arabic": "الشقة",
        "serbian": "стан"
      }
    },
    {
      "german": "der Hof, die Höfe",
      "translations": {
        "english": "courtyard",
        "ukrainian": "двір",
        "polish": "podwórze",
        "albanian": "oborri",
        "arabic": "الفناء",
        "serbian": "двориште"
      }
    },
    {
      "german": "der Garten, die Gärten",
      "translations": {
        "english": "garden",
        "ukrainian": "сад",
        "polish": "ogród",
        "albanian": "kopshti",
        "arabic": "الحديقة",
        "serbian": "башта"
      }
    },
    {
      "german": "der Balkon, die Balkone",
      "translations": {
        "english": "balcony",
        "ukrainian": "балкон",
        "polish": "balkon",
        "albanian": "ballkoni",
        "arabic": "الشرفة",
        "serbian": "балкон"
      }
    },
    {
      "german": "die Garage, die Garagen",
      "translations": {
        "english": "garage",
        "ukrainian": "гараж",
        "polish": "garaż",
        "albanian": "garazhi",
        "arabic": "الجراج",
        "serbian": "гаража"
      }
    },
    {
      "german": "die Waschküche, die Waschküchen",
      "translations": {
        "english": "laundry room",
        "ukrainian": "пральня",
        "polish": "pralnia",
        "albanian": "dhoma e larjes",
        "arabic": "غرفة الغسيل",
        "serbian": "перионица"
      }
    },
    {
      "german": "das Treppenhaus, die Treppenhäuser",
      "translations": {
        "english": "stairwell",
        "ukrainian": "сходова клітка",
        "polish": "klatka schodowa",
        "albanian": "shkallët",
        "arabic": "السلم",
        "serbian": "степениште"
      }
    },
    {
      "german": "der Aufzug, die Aufzüge",
      "translations": {
        "english": "elevator",
        "ukrainian": "ліфт",
        "polish": "winda",
        "albanian": "ashensori",
        "arabic": "المصعد",
        "serbian": "лифт"
      }
    },
    {
      "german": "das Licht, die Lichter",
      "translations": {
        "english": "light",
        "ukrainian": "світло",
        "polish": "światło",
        "albanian": "drita",
        "arabic": "الضوء",
        "serbian": "светло"
      }
    },
    {
      "german": "die Heizung, die Heizungen",
      "translations": {
        "english": "heating",
        "ukrainian": "опалення",
        "polish": "ogrzewanie",
        "albanian": "ngrohja",
        "arabic": "التدفئة",
        "serbian": "грејање"
      }
    },
    {
      "german": "die Klingel, die Klingeln",
      "translations": {
        "english": "doorbell",
        "ukrainian": "дзвінок",
        "polish": "dzwonek",
        "albanian": "zilja",
        "arabic": "جرس الباب",
        "serbian": "звоно"
      }
    },
    {
      "german": "die Treppe, die Treppen",
      "translations": {
        "english": "stairs",
        "ukrainian": "сходи",
        "polish": "schody",
        "albanian": "shkallët",
        "arabic": "السلالم",
        "serbian": "степенице"
      }
    },
    {
      "german": "der Müll",
      "translations": {
        "english": "garbage/trash",
        "ukrainian": "сміття",
        "polish": "śmieci",
        "albanian": "mbeturinat",
        "arabic": "القمامة",
        "serbian": "смеће"
      }
    },
    {
      "german": "die Mülltonne, die Mülltonnen",
      "translations": {
        "english": "garbage bin",
        "ukrainian": "смітник",
        "polish": "kosz na śmieci",
        "albanian": "kazani i mbeturinave",
        "arabic": "حاوية القمامة",
        "serbian": "канта за смеће"
      }
    },
    {
      "german": "die Müllabfuhr",
      "translations": {
        "english": "garbage collection",
        "ukrainian": "вивезення сміття",
        "polish": "wywóz śmieci",
        "albanian": "mbledhja e mbeturinave",
        "arabic": "جمع القمامة",
        "serbian": "одвоз смећа"
      }
    },
    {
      "german": "der Nachbar, die Nachbarn",
      "translations": {
        "english": "neighbor (male)",
        "ukrainian": "сусід",
        "polish": "sąsiad",
        "albanian": "fqinji",
        "arabic": "الجار",
        "serbian": "комшија"
      }
    },
    {
      "german": "die Nachbarin, die Nachbarinnen",
      "translations": {
        "english": "neighbor (female)",
        "ukrainian": "сусідка",
        "polish": "sąsiadka",
        "albanian": "fqinjja",
        "arabic": "الجارة",
        "serbian": "комшиница"
      }
    },
    {
      "german": "der Spielplatz, die Spielplätze",
      "translations": {
        "english": "playground",
        "ukrainian": "дитячий майданчик",
        "polish": "plac zabaw",
        "albanian": "lojërat për fëmijë",
        "arabic": "ملعب الأطفال",
        "serbian": "игралиште"
      }
    },
    {
      "german": "der Sandkasten, die Sandkästen",
      "translations": {
        "english": "sandbox",
        "ukrainian": "пісочниця",
        "polish": "piaskownica",
        "albanian": "kuti rëre",
        "arabic": "صندوق الرمل",
        "serbian": "песак"
      }
    },
    {
      "german": "der Junge, die Jungen",
      "translations": {
        "english": "boy",
        "ukrainian": "хлопчик",
        "polish": "chłopiec",
        "albanian": "djali",
        "arabic": "الولد",
        "serbian": "дечак"
      }
    },
    {
      "german": "das Mädchen, die Mädchen",
      "translations": {
        "english": "girl",
        "ukrainian": "дівчинка",
        "polish": "dziewczynka",
        "albanian": "vajza",
        "arabic": "البنت",
        "serbian": "девојчица"
      }
    },
    {
      "german": "das Miethaus, die Miethäuser",
      "translations": {
        "english": "rental house",
        "ukrainian": "орендний будинок",
        "polish": "dom na wynajem",
        "albanian": "shtëpia me qira",
        "arabic": "بيت الإيجار",
        "serbian": "изнајмљена кућа"
      }
    },
    {
      "german": "der Briefkasten, die Briefkästen",
      "translations": {
        "english": "mailbox",
        "ukrainian": "поштова скринька",
        "polish": "skrzynka pocztowa",
        "albanian": "kuti postare",
        "arabic": "صندوق البريد",
        "serbian": "поштанско сандуче"
      }
    },
    {
      "german": "das Fest, die Feste",
      "translations": {
        "english": "party/celebration",
        "ukrainian": "свято",
        "polish": "święto/impreza",
        "albanian": "festa",
        "arabic": "الحفلة",
        "serbian": "прослава"
      }
    },
    {
      "german": "der Kinderwagen, die Kinderwagen",
      "translations": {
        "english": "baby stroller",
        "ukrainian": "дитяча коляска",
        "polish": "wózek dziecięcy",
        "albanian": "karroca fëmije",
        "arabic": "عربة الأطفال",
        "serbian": "дечија колица"
      }
    },
    {
      "german": "das Fahrrad, die Fahrräder",
      "translations": {
        "english": "bicycle",
        "ukrainian": "велосипед",
        "polish": "rower",
        "albanian": "biçikleta",
        "arabic": "الدراجة",
        "serbian": "бицикл"
      }
    },
    {
      "german": "die Tür, die Türen",
      "translations": {
        "english": "door",
        "ukrainian": "двері",
        "polish": "drzwi",
        "albanian": "dera",
        "arabic": "الباب",
        "serbian": "врата"
      }
    },
    {
      "german": "die Hausnummer, die Hausnummern",
      "translations": {
        "english": "house number",
        "ukrainian": "номер будинку",
        "polish": "numer domu",
        "albanian": "numri i shtëpisë",
        "arabic": "رقم المنزل",
        "serbian": "кућни број"
      }
    },
    {
      "german": "der Hund, die Hunde",
      "translations": {
        "english": "dog",
        "ukrainian": "собака",
        "polish": "pies",
        "albanian": "qeni",
        "arabic": "الكلب",
        "serbian": "пас"
      }
    },
    {
      "german": "die Bitte, die Bitten",
      "translations": {
        "english": "request",
        "ukrainian": "прохання",
        "polish": "prośba",
        "albanian": "kërkesa",
        "arabic": "الطلب",
        "serbian": "молба"
      }
    },
    {
      "german": "das Paket, die Pakete",
      "translations": {
        "english": "package",
        "ukrainian": "пакунок",
        "polish": "paczka",
        "albanian": "pakoja",
        "arabic": "الطرد",
        "serbian": "пакет"
      }
    },
    {
      "german": "das Päckchen, die Päckchen",
      "translations": {
        "english": "small package",
        "ukrainian": "посилка",
        "polish": "paczuszka",
        "albanian": "pakoja e vogël",
        "arabic": "الرزمة الصغيرة",
        "serbian": "пакетић"
      }
    },
    {
      "german": "das Salz",
      "translations": {
        "english": "salt",
        "ukrainian": "сіль",
        "polish": "sól",
        "albanian": "kripa",
        "arabic": "الملح",
        "serbian": "со"
      }
    },
    {
      "german": "die Tasse, die Tassen",
      "translations": {
        "english": "cup",
        "ukrainian": "чашка",
        "polish": "filiżanka",
        "albanian": "filxhani",
        "arabic": "الكوب",
        "serbian": "шоља"
      }
    },
    {
      "german": "das Hoffest, die Hoffeste",
      "translations": {
        "english": "courtyard festival",
        "ukrainian": "свято у дворі",
        "polish": "święto na podwórzu",
        "albanian": "festa e oborrit",
        "arabic": "حفلة الفناء",
        "serbian": "прослава у дворишту"
      }
    },
    {
      "german": "der Grill, die Grills",
      "translations": {
        "english": "grill",
        "ukrainian": "гриль",
        "polish": "grill",
        "albanian": "grilli",
        "arabic": "الشواية",
        "serbian": "роштиљ"
      }
    },
    {
      "german": "das Essen",
      "translations": {
        "english": "food/meal",
        "ukrainian": "їжа",
        "polish": "jedzenie",
        "albanian": "ushqimi",
        "arabic": "الطعام",
        "serbian": "храна"
      }
    },
    {
      "german": "die Musik",
      "translations": {
        "english": "music",
        "ukrainian": "музика",
        "polish": "muzyka",
        "albanian": "muzika",
        "arabic": "الموسيقى",
        "serbian": "музика"
      }
    },
    {
      "german": "der Elektriker, die Elektriker",
      "translations": {
        "english": "electrician",
        "ukrainian": "електрик",
        "polish": "elektryk",
        "albanian": "elektriku",
        "arabic": "الكهربائي",
        "serbian": "електричар"
      }
    },
    {
      "german": "die Hausverwaltung, die Hausverwaltungen",
      "translations": {
        "english": "property management",
        "ukrainian": "управління будинком",
        "polish": "zarząd domu",
        "albanian": "administrata e shtëpisë",
        "arabic": "إدارة المبنى",
        "serbian": "управа зграде"
      }
    },
    {
      "german": "der Absender, die Absender",
      "translations": {
        "english": "sender",
        "ukrainian": "відправник",
        "polish": "nadawca",
        "albanian": "dërguesi",
        "arabic": "المرسل",
        "serbian": "пошиљалац"
      }
    },
    {
      "german": "der Empfänger, die Empfänger",
      "translations": {
        "english": "recipient",
        "ukrainian": "одержувач",
        "polish": "odbiorca",
        "albanian": "marrësi",
        "arabic": "المستلم",
        "serbian": "прималац"
      }
    },
    {
      "german": "der Gruß, die Grüße",
      "translations": {
        "english": "greeting",
        "ukrainian": "привітання",
        "polish": "pozdrowienia",
        "albanian": "përshëndetja",
        "arabic": "التحية",
        "serbian": "поздрав"
      }
    },
    {
      "german": "die Unterschrift, die Unterschriften",
      "translations": {
        "english": "signature",
        "ukrainian": "підпис",
        "polish": "podpis",
        "albanian": "nënshkrimi",
        "arabic": "التوقيع",
        "serbian": "потпис"
      }
    },
    {
      "german": "die Anrede, die Anreden",
      "translations": {
        "english": "salutation",
        "ukrainian": "звернення",
        "polish": "zwrot grzecznościowy",
        "albanian": "përshëndetja",
        "arabic": "التحية",
        "serbian": "обраћање"
      }
    }
  ]
});

export const A1_2_ALL_SECTIONS = Object.keys(a1_2_Vocabulary).map(Number);