
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
        "arabic": "طبيب"
      }
    },
    {
      "german": "der Termin, die Termine",
      "translations": {
        "english": "appointment",
        "ukrainian": "прийом",
        "polish": "termin",
        "albanian": "takimi",
        "arabic": "موعد"
      }
    },
    {
      "german": "die Praxis, die Praxen",
      "translations": {
        "english": "medical practice",
        "ukrainian": "практика",
        "polish": "gabinet",
        "albanian": "praktika",
        "arabic": "عيادة"
      }
    },
    {
      "german": "der Zahnarzt, die Zahnärzte",
      "translations": {
        "english": "dentist",
        "ukrainian": "стоматолог",
        "polish": "dentysta",
        "albanian": "dentisti",
        "arabic": "طبيب أسنان"
      }
    },
    {
      "german": "der Augenarzt, die Augenärzte",
      "translations": {
        "english": "eye doctor",
        "ukrainian": "окуліст",
        "polish": "okulista",
        "albanian": "oftalmologi",
        "arabic": "طبيب عيون"
      }
    },
    {
      "german": "der Kinderarzt, die Kinderärzte",
      "translations": {
        "english": "pediatrician",
        "ukrainian": "педіатр",
        "polish": "pediatra",
        "albanian": "pediatri",
        "arabic": "طبيب أطفال"
      }
    },
    {
      "german": "der Hausarzt, die Hausärzte",
      "translations": {
        "english": "family doctor",
        "ukrainian": "сімейний лікар",
        "polish": "lekarz rodzinny",
        "albanian": "mjeku i familjes",
        "arabic": "طبيب عائلة"
      }
    },
    {
      "german": "das Krankenhaus, die Krankenhäuser",
      "translations": {
        "english": "hospital",
        "ukrainian": "лікарня",
        "polish": "szpital",
        "albanian": "spitali",
        "arabic": "مستشفى"
      }
    },
    {
      "german": "die Krankenkasse, die Krankenkassen",
      "translations": {
        "english": "health insurance",
        "ukrainian": "медичне страхування",
        "polish": "kasa chorych",
        "albanian": "siguracioni shëndetësor",
        "arabic": "تأمين صحي"
      }
    },
    {
      "german": "die Gesundheitskarte, die Gesundheitskarten",
      "translations": {
        "english": "health insurance card",
        "ukrainian": "медична картка",
        "polish": "karta ubezpieczenia zdrowotnego",
        "albanian": "karta e sigurimeve shëndetësore",
        "arabic": "بطاقة التأمين الصحي"
      }
    },
    {
      "german": "das Bonusheft, die Bonushefte",
      "translations": {
        "english": "bonus booklet",
        "ukrainian": "бонусна книжечка",
        "polish": "książeczka bonusowa",
        "albanian": "librezë bonusi",
        "arabic": "كتيب المكافآت"
      }
    },
    {
      "german": "die Apotheke, die Apotheken",
      "translations": {
        "english": "pharmacy",
        "ukrainian": "аптека",
        "polish": "apteka",
        "albanian": "farmacia",
        "arabic": "صيدلية"
      }
    },
    {
      "german": "das Medikament, die Medikamente",
      "translations": {
        "english": "medication",
        "ukrainian": "ліки",
        "polish": "lek",
        "albanian": "ilaçi",
        "arabic": "دواء"
      }
    },
    {
      "german": "das Rezept, die Rezepte",
      "translations": {
        "english": "prescription",
        "ukrainian": "рецепт",
        "polish": "recepta",
        "albanian": "recepta",
        "arabic": "وصفة طبية"
      }
    },
    {
      "german": "die Tablette, die Tabletten",
      "translations": {
        "english": "tablet",
        "ukrainian": "таблетка",
        "polish": "tabletka",
        "albanian": "tableta",
        "arabic": "قرص"
      }
    },
    {
      "german": "die Sprechzeit, die Sprechzeiten",
      "translations": {
        "english": "consultation hours",
        "ukrainian": "години прийому",
        "polish": "godziny przyjęć",
        "albanian": "orët e konsultës",
        "arabic": "ساعات الاستشارة"
      }
    },
    {
      "german": "das Auge, die Augen",
      "translations": {
        "english": "eye",
        "ukrainian": "око",
        "polish": "oko",
        "albanian": "syri",
        "arabic": "عين"
      }
    },
    {
      "german": "der Kopf, die Köpfe",
      "translations": {
        "english": "head",
        "ukrainian": "голова",
        "polish": "głowa",
        "albanian": "koka",
        "arabic": "رأس"
      }
    },
    {
      "german": "das Ohr, die Ohren",
      "translations": {
        "english": "ear",
        "ukrainian": "вухо",
        "polish": "ucho",
        "albanian": "veshi",
        "arabic": "أذن"
      }
    },
    {
      "german": "der Mund, die Münder",
      "translations": {
        "english": "mouth",
        "ukrainian": "рот",
        "polish": "usta",
        "albanian": "goja",
        "arabic": "فم"
      }
    },
    {
      "german": "die Nase, die Nasen",
      "translations": {
        "english": "nose",
        "ukrainian": "ніс",
        "polish": "nos",
        "albanian": "hunda",
        "arabic": "أنف"
      }
    },
    {
      "german": "der Hals, die Hälse",
      "translations": {
        "english": "neck",
        "ukrainian": "шия",
        "polish": "szyja",
        "albanian": "qafa",
        "arabic": "رقبة"
      }
    },
    {
      "german": "der Arm, die Arme",
      "translations": {
        "english": "arm",
        "ukrainian": "рука",
        "polish": "ramię",
        "albanian": "krahu",
        "arabic": "ذراع"
      }
    },
    {
      "german": "die Hand, die Hände",
      "translations": {
        "english": "hand",
        "ukrainian": "кисть",
        "polish": "ręka",
        "albanian": "dora",
        "arabic": "يد"
      }
    },
    {
      "german": "der Rücken, die Rücken",
      "translations": {
        "english": "back",
        "ukrainian": "спина",
        "polish": "plecy",
        "albanian": "shpina",
        "arabic": "ظهر"
      }
    },
    {
      "german": "das Bein, die Beine",
      "translations": {
        "english": "leg",
        "ukrainian": "нога",
        "polish": "noga",
        "albanian": "këmba",
        "arabic": "ساق"
      }
    },
    {
      "german": "der Fuß, die Füße",
      "translations": {
        "english": "foot",
        "ukrainian": "ступня",
        "polish": "stopa",
        "albanian": "këmba",
        "arabic": "قدم"
      }
    },
    {
      "german": "der Bauch, die Bäuche",
      "translations": {
        "english": "belly",
        "ukrainian": "живіт",
        "polish": "brzuch",
        "albanian": "barku",
        "arabic": "بطن"
      }
    },
    {
      "german": "der Finger, die Finger",
      "translations": {
        "english": "finger",
        "ukrainian": "палець",
        "polish": "palec",
        "albanian": "gishti",
        "arabic": "إصبع"
      }
    },
    {
      "german": "das Kind, die Kinder",
      "translations": {
        "english": "child",
        "ukrainian": "дитина",
        "polish": "dziecko",
        "albanian": "fëmija",
        "arabic": "طفل"
      }
    },
    {
      "german": "die Tochter, die Töchter",
      "translations": {
        "english": "daughter",
        "ukrainian": "дочка",
        "polish": "córka",
        "albanian": "vajza",
        "arabic": "ابنة"
      }
    },
    {
      "german": "die Schule, die Schulen",
      "translations": {
        "english": "school",
        "ukrainian": "школа",
        "polish": "szkoła",
        "albanian": "shkolla",
        "arabic": "مدرسة"
      }
    },
    {
      "german": "die Entschuldigung, die Entschuldigungen",
      "translations": {
        "english": "excuse note",
        "ukrainian": "виправдувальна записка",
        "polish": "usprawiedliwienie",
        "albanian": "justifikimi",
        "arabic": "مذكرة اعتذار"
      }
    },
    {
      "german": "das Fieber",
      "translations": {
        "english": "fever",
        "ukrainian": "температура",
        "polish": "gorączka",
        "albanian": "ethe",
        "arabic": "حمى"
      }
    },
    {
      "german": "die Erkältung, die Erkältungen",
      "translations": {
        "english": "cold",
        "ukrainian": "застуда",
        "polish": "przeziębienie",
        "albanian": "ftohja",
        "arabic": "نزلة برد"
      }
    },
    {
      "german": "die Grippe",
      "translations": {
        "english": "flu",
        "ukrainian": "грип",
        "polish": "grypa",
        "albanian": "gripi",
        "arabic": "إنفلونزا"
      }
    },
    {
      "german": "die Kopfschmerzen",
      "translations": {
        "english": "headache",
        "ukrainian": "головний біль",
        "polish": "ból głowy",
        "albanian": "dhimbje koke",
        "arabic": "صداع"
      }
    },
    {
      "german": "die Zahnschmerzen",
      "translations": {
        "english": "toothache",
        "ukrainian": "зубний біль",
        "polish": "ból zęba",
        "albanian": "dhimbje dhëmbi",
        "arabic": "ألم الأسنان"
      }
    },
    {
      "german": "die Halsschmerzen",
      "translations": {
        "english": "sore throat",
        "ukrainian": "біль у горлі",
        "polish": "ból gardła",
        "albanian": "dhimbje fyti",
        "arabic": "التهاب الحلق"
      }
    },
    {
      "german": "die Bauchschmerzen",
      "translations": {
        "english": "stomachache",
        "ukrainian": "біль у животі",
        "polish": "ból brzucha",
        "albanian": "dhimbje barku",
        "arabic": "ألم المعدة"
      }
    },
    {
      "german": "die Rückenschmerzen",
      "translations": {
        "english": "back pain",
        "ukrainian": "біль у спині",
        "polish": "ból pleców",
        "albanian": "dhimbje shpine",
        "arabic": "ألم الظهر"
      }
    },
    {
      "german": "die Krankschreibung, die Krankschreibungen",
      "translations": {
        "english": "sick note",
        "ukrainian": "лікарняний",
        "polish": "zwolnienie lekarskie",
        "albanian": "dëshmi mjekësore",
        "arabic": "إجازة مرضية"
      }
    },
    {
      "german": "die Überweisung, die Überweisungen",
      "translations": {
        "english": "referral",
        "ukrainian": "направлення",
        "polish": "skierowanie",
        "albanian": "dërgimi",
        "arabic": "إحالة"
      }
    },
    {
      "german": "der Facharzt, die Fachärzte",
      "translations": {
        "english": "specialist",
        "ukrainian": "спеціаліст",
        "polish": "specjalista",
        "albanian": "specialisti",
        "arabic": "طبيب مختص"
      }
    },
    {
      "german": "der Notruf, die Notrufe",
      "translations": {
        "english": "emergency call",
        "ukrainian": "виклик швидкої",
        "polish": "wezwanie pomocy",
        "albanian": "thirrja e urgjencës",
        "arabic": "مكالمة طوارئ"
      }
    },
    {
      "german": "der Notarzt, die Notärzte",
      "translations": {
        "english": "emergency doctor",
        "ukrainian": "лікар швидкої",
        "polish": "lekarz pogotowia",
        "albanian": "mjeku i urgjencës",
        "arabic": "طبيب طوارئ"
      }
    },
    {
      "german": "der Krankenwagen, die Krankenwagen",
      "translations": {
        "english": "ambulance",
        "ukrainian": "швидка допомога",
        "polish": "karetka pogotowia",
        "albanian": "ambulanca",
        "arabic": "سيارة إسعاف"
      }
    },
    {
      "german": "die Feuerwehr",
      "translations": {
        "english": "fire department",
        "ukrainian": "пожежна служба",
        "polish": "straż pożarna",
        "albanian": "zjarrfikësit",
        "arabic": "مطافئ الحريق"
      }
    },
    {
      "german": "das Feuer, die Feuer",
      "translations": {
        "english": "fire",
        "ukrainian": "пожежа",
        "polish": "pożar",
        "albanian": "zjarri",
        "arabic": "حريق"
      }
    },
    {
      "german": "der Unfall, die Unfälle",
      "translations": {
        "english": "accident",
        "ukrainian": "нещасний випадок",
        "polish": "wypadek",
        "albanian": "aksidenti",
        "arabic": "حادث"
      }
    },
    {
      "german": "verletzt",
      "translations": {
        "english": "injured",
        "ukrainian": "поранений",
        "polish": "ranny",
        "albanian": "i lënduar",
        "arabic": "مصاب"
      }
    },
    {
      "german": "krank",
      "translations": {
        "english": "sick",
        "ukrainian": "хворий",
        "polish": "chory",
        "albanian": "i sëmurë",
        "arabic": "مريض"
      }
    },
    {
      "german": "gesund",
      "translations": {
        "english": "healthy",
        "ukrainian": "здоровий",
        "polish": "zdrowy",
        "albanian": "i shëndetshëm",
        "arabic": "صحي"
      }
    },
    {
      "german": "die Gesundheit",
      "translations": {
        "english": "health",
        "ukrainian": "здоров'я",
        "polish": "zdrowie",
        "albanian": "shëndeti",
        "arabic": "صحة"
      }
    },
    {
      "german": "das Buch, die Bücher",
      "translations": {
        "english": "book",
        "ukrainian": "книга",
        "polish": "książka",
        "albanian": "libri",
        "arabic": "كتاب"
      }
    },
    {
      "german": "die Uhr, die Uhren",
      "translations": {
        "english": "watch/clock",
        "ukrainian": "годинник",
        "polish": "zegarek",
        "albanian": "ora",
        "arabic": "ساعة"
      }
    },
    {
      "german": "der Laptop, die Laptops",
      "translations": {
        "english": "laptop",
        "ukrainian": "ноутбук",
        "polish": "laptop",
        "albanian": "laptopi",
        "arabic": "حاسوب محمول"
      }
    },
    {
      "german": "das Tablet, die Tablets",
      "translations": {
        "english": "tablet",
        "ukrainian": "планшет",
        "polish": "tablet",
        "albanian": "tableti",
        "arabic": "جهاز لوحي"
      }
    },
    {
      "german": "der Kalender, die Kalender",
      "translations": {
        "english": "calendar",
        "ukrainian": "календар",
        "polish": "kalendarz",
        "albanian": "kalendari",
        "arabic": "تقويم"
      }
    },
    {
      "german": "der Bademantel, die Bademäntel",
      "translations": {
        "english": "bathrobe",
        "ukrainian": "халат",
        "polish": "szlafrok",
        "albanian": "rrobën e banjës",
        "arabic": "روب الحمام"
      }
    },
    {
      "german": "die Zahnbürste, die Zahnbürsten",
      "translations": {
        "english": "toothbrush",
        "ukrainian": "зубна щітка",
        "polish": "szczoteczka do zębów",
        "albanian": "furça e dhëmbëve",
        "arabic": "فرشاة أسنان"
      }
    },
    {
      "german": "die Schulter, die Schultern",
      "translations": {
        "english": "shoulder",
        "ukrainian": "плече",
        "polish": "ramię",
        "albanian": "supja",
        "arabic": "كتف"
      }
    },
    {
      "german": "der Ellbogen, die Ellbogen",
      "translations": {
        "english": "elbow",
        "ukrainian": "лікоть",
        "polish": "łokieć",
        "albanian": "bërryli",
        "arabic": "مرفق"
      }
    },
    {
      "german": "das Knie, die Knie",
      "translations": {
        "english": "knee",
        "ukrainian": "коліно",
        "polish": "kolano",
        "albanian": "gjuri",
        "arabic": "ركبة"
      }
    },
    {
      "german": "der Zeh, die Zehen",
      "translations": {
        "english": "toe",
        "ukrainian": "палець ноги",
        "polish": "palec u nogi",
        "albanian": "gishti i këmbës",
        "arabic": "إصبع القدم"
      }
    },
    {
      "german": "die Lippe, die Lippen",
      "translations": {
        "english": "lip",
        "ukrainian": "губа",
        "polish": "warga",
        "albanian": "buza",
        "arabic": "شفة"
      }
    },
    {
      "german": "die Wimper, die Wimpern",
      "translations": {
        "english": "eyelash",
        "ukrainian": "вія",
        "polish": "rzęsa",
        "albanian": "qerpiku",
        "arabic": "رمش"
      }
    },
    {
      "german": "die Augenbraue, die Augenbrauen",
      "translations": {
        "english": "eyebrow",
        "ukrainian": "брова",
        "polish": "brew",
        "albanian": "vetulla",
        "arabic": "حاجب"
      }
    },
    {
      "german": "der Oberschenkel, die Oberschenkel",
      "translations": {
        "english": "thigh",
        "ukrainian": "стегно",
        "polish": "udo",
        "albanian": "kofsha",
        "arabic": "فخذ"
      }
    },
    {
      "german": "der Unterschenkel, die Unterschenkel",
      "translations": {
        "english": "lower leg",
        "ukrainian": "гомілка",
        "polish": "łydka",
        "albanian": "këmba e poshtme",
        "arabic": "ساق سفلى"
      }
    },
    {
      "german": "der Muskel, die Muskeln",
      "translations": {
        "english": "muscle",
        "ukrainian": "м'яз",
        "polish": "mięsień",
        "albanian": "muskuli",
        "arabic": "عضلة"
      }
    },
    {
      "german": "die Wirbelsäule, die Wirbelsäulen",
      "translations": {
        "english": "spine",
        "ukrainian": "хребет",
        "polish": "kręgosłup",
        "albanian": "shtylla kurrizore",
        "arabic": "عمود فقري"
      }
    },
    {
      "german": "das Herz, die Herzen",
      "translations": {
        "english": "heart",
        "ukrainian": "серце",
        "polish": "serce",
        "albanian": "zemra",
        "arabic": "قلب"
      }
    },
    {
      "german": "die Leber, die Lebern",
      "translations": {
        "english": "liver",
        "ukrainian": "печінка",
        "polish": "wątroba",
        "albanian": "mëlçia",
        "arabic": "كبد"
      }
    },
    {
      "german": "der Magen, die Mägen",
      "translations": {
        "english": "stomach",
        "ukrainian": "шлунок",
        "polish": "żołądek",
        "albanian": "stomaku",
        "arabic": "معدة"
      }
    },
    {
      "german": "die Stirn, die Stirnen",
      "translations": {
        "english": "forehead",
        "ukrainian": "лоб",
        "polish": "czoło",
        "albanian": "balli",
        "arabic": "جبهة"
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
        "arabic": "طريق، مسار"
      }
    },
    {
      "german": "die Stadt, die Städte",
      "translations": {
        "english": "city, town",
        "ukrainian": "місто",
        "polish": "miasto",
        "albanian": "qytet",
        "arabic": "مدينة"
      }
    },
    {
      "german": "der Bus, die Busse",
      "translations": {
        "english": "bus",
        "ukrainian": "автобус",
        "polish": "autobus",
        "albanian": "autobus",
        "arabic": "حافلة"
      }
    },
    {
      "german": "die Straßenbahn, die Straßenbahnen",
      "translations": {
        "english": "tram, streetcar",
        "ukrainian": "трамвай",
        "polish": "tramwaj",
        "albanian": "tramvaj",
        "arabic": "ترام"
      }
    },
    {
      "german": "die U-Bahn, die U-Bahnen",
      "translations": {
        "english": "subway, underground",
        "ukrainian": "метро",
        "polish": "metro",
        "albanian": "metro",
        "arabic": "مترو الأنفاق"
      }
    },
    {
      "german": "die S-Bahn, die S-Bahnen",
      "translations": {
        "english": "suburban train",
        "ukrainian": "приміська електричка",
        "polish": "kolej podmiejska",
        "albanian": "tren suburban",
        "arabic": "القطار الضاحي"
      }
    },
    {
      "german": "der Zug, die Züge",
      "translations": {
        "english": "train",
        "ukrainian": "поїзд",
        "polish": "pociąg",
        "albanian": "tren",
        "arabic": "قطار"
      }
    },
    {
      "german": "das Schiff, die Schiffe",
      "translations": {
        "english": "ship, boat",
        "ukrainian": "корабель",
        "polish": "statek",
        "albanian": "anije",
        "arabic": "سفينة"
      }
    },
    {
      "german": "das Motorrad, die Motorräder",
      "translations": {
        "english": "motorcycle",
        "ukrainian": "мотоцикл",
        "polish": "motocykl",
        "albanian": "motoçikletë",
        "arabic": "دراجة نارية"
      }
    },
    {
      "german": "das Flugzeug, die Flugzeuge",
      "translations": {
        "english": "airplane",
        "ukrainian": "літак",
        "polish": "samolot",
        "albanian": "aeroplan",
        "arabic": "طائرة"
      }
    },
    {
      "german": "das Fahrrad, die Fahrräder",
      "translations": {
        "english": "bicycle",
        "ukrainian": "велосипед",
        "polish": "rower",
        "albanian": "biçikletë",
        "arabic": "دراجة هوائية"
      }
    },
    {
      "german": "das Auto, die Autos",
      "translations": {
        "english": "car",
        "ukrainian": "автомобіль",
        "polish": "samochód",
        "albanian": "makinë",
        "arabic": "سيارة"
      }
    },
    {
      "german": "der Fußgänger, die Fußgänger / die Fußgängerin, die Fußgängerinnen",
      "translations": {
        "english": "pedestrian",
        "ukrainian": "пішохід",
        "polish": "pieszy",
        "albanian": "këmbësor",
        "arabic": "مشاة"
      }
    },
    {
      "german": "die Station, die Stationen",
      "translations": {
        "english": "station",
        "ukrainian": "станція",
        "polish": "stacja",
        "albanian": "stacion",
        "arabic": "محطة"
      }
    },
    {
      "german": "der Flughafen, die Flughäfen",
      "translations": {
        "english": "airport",
        "ukrainian": "аеропорт",
        "polish": "lotnisko",
        "albanian": "aeroport",
        "arabic": "مطار"
      }
    },
    {
      "german": "die Stadtmitte, die Stadtmitten",
      "translations": {
        "english": "city center",
        "ukrainian": "центр міста",
        "polish": "centrum miasta",
        "albanian": "qendër qyteti",
        "arabic": "وسط المدينة"
      }
    },
    {
      "german": "die Haltestelle, die Haltestellen",
      "translations": {
        "english": "bus stop",
        "ukrainian": "зупинка",
        "polish": "przystanek",
        "albanian": "stacion autobusi",
        "arabic": "محطة الحافلات"
      }
    },
    {
      "german": "die Monatskarte, die Monatskarten",
      "translations": {
        "english": "monthly ticket",
        "ukrainian": "місячний квиток",
        "polish": "karta miesięczna",
        "albanian": "biletë mujore",
        "arabic": "بطاقة شهرية"
      }
    },
    {
      "german": "das Café, die Cafés",
      "translations": {
        "english": "café",
        "ukrainian": "кафе",
        "polish": "kawiarnia",
        "albanian": "kafe",
        "arabic": "مقهى"
      }
    },
    {
      "german": "der Platz, die Plätze",
      "translations": {
        "english": "square, place",
        "ukrainian": "площа",
        "polish": "plac",
        "albanian": "shesh",
        "arabic": "ساحة"
      }
    },
    {
      "german": "der Baum, die Bäume",
      "translations": {
        "english": "tree",
        "ukrainian": "дерево",
        "polish": "drzewo",
        "albanian": "pemë",
        "arabic": "شجرة"
      }
    },
    {
      "german": "der Spielplatz, die Spielplätze",
      "translations": {
        "english": "playground",
        "ukrainian": "дитячий майданчик",
        "polish": "plac zabaw",
        "albanian": "shesh lojërash",
        "arabic": "ملعب أطفال"
      }
    },
    {
      "german": "die Bank, die Bänke",
      "translations": {
        "english": "bench",
        "ukrainian": "лавка",
        "polish": "ławka",
        "albanian": "stol",
        "arabic": "مقعد"
      }
    },
    {
      "german": "der Hund, die Hunde",
      "translations": {
        "english": "dog",
        "ukrainian": "собака",
        "polish": "pies",
        "albanian": "qen",
        "arabic": "كلب"
      }
    },
    {
      "german": "das Schwimmbad, die Schwimmbäder",
      "translations": {
        "english": "swimming pool",
        "ukrainian": "басейн",
        "polish": "basen",
        "albanian": "pishinë",
        "arabic": "حمام سباحة"
      }
    },
    {
      "german": "das Rathaus, die Rathäuser",
      "translations": {
        "english": "town hall",
        "ukrainian": "ратуша",
        "polish": "ratusz",
        "albanian": "bashki",
        "arabic": "دار البلدية"
      }
    },
    {
      "german": "die Bibliothek, die Bibliotheken",
      "translations": {
        "english": "library",
        "ukrainian": "бібліотека",
        "polish": "biblioteka",
        "albanian": "bibliotekë",
        "arabic": "مكتبة"
      }
    },
    {
      "german": "der Hauptbahnhof, die Hauptbahnhöfe",
      "translations": {
        "english": "main train station",
        "ukrainian": "головний вокзал",
        "polish": "dworzec główny",
        "albanian": "stacion kryesor",
        "arabic": "المحطة الرئيسية"
      }
    },
    {
      "german": "die U-Bahn-Station, die U-Bahn-Stationen",
      "translations": {
        "english": "subway station",
        "ukrainian": "станція метро",
        "polish": "stacja metra",
        "albanian": "stacion metro",
        "arabic": "محطة مترو"
      }
    },
    {
      "german": "die Linie, die Linien",
      "translations": {
        "english": "line",
        "ukrainian": "лінія",
        "polish": "linia",
        "albanian": "linjë",
        "arabic": "خط"
      }
    },
    {
      "german": "die Richtung, die Richtungen",
      "translations": {
        "english": "direction",
        "ukrainian": "напрямок",
        "polish": "kierunek",
        "albanian": "drejtim",
        "arabic": "اتجاه"
      }
    },
    {
      "german": "der Zoo, die Zoos",
      "translations": {
        "english": "zoo",
        "ukrainian": "зоопарк",
        "polish": "zoo",
        "albanian": "kopsht zoologjik",
        "arabic": "حديقة حيوانات"
      }
    },
    {
      "german": "die Kreuzung, die Kreuzungen",
      "translations": {
        "english": "intersection, crossroads",
        "ukrainian": "перехрестя",
        "polish": "skrzyżowanie",
        "albanian": "kryqëzim",
        "arabic": "تقاطع"
      }
    },
    {
      "german": "die Ampel, die Ampeln",
      "translations": {
        "english": "traffic light",
        "ukrainian": "світлофор",
        "polish": "światła",
        "albanian": "semafor",
        "arabic": "إشارة مرور"
      }
    },
    {
      "german": "der Parkplatz, die Parkplätze",
      "translations": {
        "english": "parking lot",
        "ukrainian": "автостоянка",
        "polish": "parking",
        "albanian": "parking",
        "arabic": "موقف سيارات"
      }
    },
    {
      "german": "der Park, die Parks",
      "translations": {
        "english": "park",
        "ukrainian": "парк",
        "polish": "park",
        "albanian": "park",
        "arabic": "حديقة"
      }
    },
    {
      "german": "der Fluss, die Flüsse",
      "translations": {
        "english": "river",
        "ukrainian": "річка",
        "polish": "rzeka",
        "albanian": "lumë",
        "arabic": "نهر"
      }
    },
    {
      "german": "der Führerschein, die Führerscheine",
      "translations": {
        "english": "driver's license",
        "ukrainian": "водійські права",
        "polish": "prawo jazdy",
        "albanian": "patentë shoferi",
        "arabic": "رخصة قيادة"
      }
    },
    {
      "german": "die Führerscheinprüfung, die Führerscheinprüfungen",
      "translations": {
        "english": "driving test",
        "ukrainian": "іспит на водійські права",
        "polish": "egzamin na prawo jazdy",
        "albanian": "provimi i patentës",
        "arabic": "امتحان رخصة القيادة"
      }
    },
    {
      "german": "das Vorfahrtsschild, die Vorfahrtsschilder",
      "translations": {
        "english": "right of way sign",
        "ukrainian": "знак переважного права проїзду",
        "polish": "znak pierwszeństwa",
        "albanian": "shenjë përparësie",
        "arabic": "علامة حق الأولوية"
      }
    },
    {
      "german": "der Lkw, die Lkws",
      "translations": {
        "english": "truck",
        "ukrainian": "вантажівка",
        "polish": "ciężarówka",
        "albanian": "kamion",
        "arabic": "شاحنة"
      }
    },
    {
      "german": "das Schild, die Schilder",
      "translations": {
        "english": "sign",
        "ukrainian": "знак",
        "polish": "znak",
        "albanian": "shenjë",
        "arabic": "علامة"
      }
    },
    {
      "german": "der Bürgersteig, die Bürgersteige",
      "translations": {
        "english": "sidewalk",
        "ukrainian": "тротуар",
        "polish": "chodnik",
        "albanian": "trotuar",
        "arabic": "رصيف"
      }
    },
    {
      "german": "das Kino, die Kinos",
      "translations": {
        "english": "cinema",
        "ukrainian": "кінотеатр",
        "polish": "kino",
        "albanian": "kinema",
        "arabic": "سينما"
      }
    },
    {
      "german": "die Apotheke, die Apotheken",
      "translations": {
        "english": "pharmacy",
        "ukrainian": "аптека",
        "polish": "apteka",
        "albanian": "farmaci",
        "arabic": "صيدلية"
      }
    },
    {
      "german": "die Bäckerei, die Bäckereien",
      "translations": {
        "english": "bakery",
        "ukrainian": "пекарня",
        "polish": "piekarnia",
        "albanian": "furre buke",
        "arabic": "مخبز"
      }
    },
    {
      "german": "der Supermarkt, die Supermärkte",
      "translations": {
        "english": "supermarket",
        "ukrainian": "супермаркет",
        "polish": "supermarket",
        "albanian": "supermarket",
        "arabic": "سوبر ماركت"
      }
    },
    {
      "german": "das Museum, die Museen",
      "translations": {
        "english": "museum",
        "ukrainian": "музей",
        "polish": "muzeum",
        "albanian": "muze",
        "arabic": "متحف"
      }
    },
    {
      "german": "die Schule, die Schulen",
      "translations": {
        "english": "school",
        "ukrainian": "школа",
        "polish": "szkoła",
        "albanian": "shkollë",
        "arabic": "مدرسة"
      }
    },
    {
      "german": "das Krankenhaus, die Krankenhäuser",
      "translations": {
        "english": "hospital",
        "ukrainian": "лікарня",
        "polish": "szpital",
        "albanian": "spital",
        "arabic": "مستشفى"
      }
    },
    {
      "german": "die Post, die Postämter",
      "translations": {
        "english": "post office",
        "ukrainian": "пошта",
        "polish": "poczta",
        "albanian": "postë",
        "arabic": "مكتب البريد"
      }
    },
    {
      "german": "der Kindergarten, die Kindergärten",
      "translations": {
        "english": "kindergarten",
        "ukrainian": "дитячий садок",
        "polish": "przedszkole",
        "albanian": "kopësht fëmijësh",
        "arabic": "روضة أطفال"
      }
    },
    {
      "german": "das Wohnmobil, die Wohnmobile",
      "translations": {
        "english": "motorhome, RV",
        "ukrainian": "будинок на колесах",
        "polish": "kamper",
        "albanian": "shtëpi me rrota",
        "arabic": "عربة سكن متنقلة"
      }
    },
    {
      "german": "der Motorroller, die Motorroller",
      "translations": {
        "english": "scooter",
        "ukrainian": "скутер",
        "polish": "skuter",
        "albanian": "skuter",
        "arabic": "دراجة بخارية"
      }
    },
    {
      "german": "das Boot, die Boote",
      "translations": {
        "english": "boat",
        "ukrainian": "човен",
        "polish": "łódka",
        "albanian": "varkë",
        "arabic": "قارب"
      }
    },
    {
      "german": "die Fähre, die Fähren",
      "translations": {
        "english": "ferry",
        "ukrainian": "пором",
        "polish": "prom",
        "albanian": "tragjekt",
        "arabic": "عبارة"
      }
    },
    {
      "german": "der Hubschrauber, die Hubschrauber",
      "translations": {
        "english": "helicopter",
        "ukrainian": "гелікоптер",
        "polish": "helikopter",
        "albanian": "helikopter",
        "arabic": "مروحية"
      }
    },
    {
      "german": "der Campingplatz, die Campingplätze",
      "translations": {
        "english": "campsite",
        "ukrainian": "кемпінг",
        "polish": "kemping",
        "albanian": "kamp",
        "arabic": "مخيم"
      }
    },
    {
      "german": "der Busbahnhof, die Busbahnhöfe",
      "translations": {
        "english": "bus station",
        "ukrainian": "автовокзал",
        "polish": "dworzec autobusowy",
        "albanian": "stacion autobusësh",
        "arabic": "محطة الحافلات"
      }
    },
    {
      "german": "die Straßenbahnhaltestelle, die Straßenbahnhaltestellen",
      "translations": {
        "english": "tram stop",
        "ukrainian": "зупинка трамваю",
        "polish": "przystanek tramwajowy",
        "albanian": "stacion tramvaji",
        "arabic": "محطة الترام"
      }
    },
    {
      "german": "der Hafen, die Häfen",
      "translations": {
        "english": "harbor, port",
        "ukrainian": "порт",
        "polish": "port",
        "albanian": "port",
        "arabic": "ميناء"
      }
    }
  ]
});

export const A1_2_ALL_SECTIONS = Object.keys(a1_2_Vocabulary).map(Number);