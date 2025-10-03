
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
  ],
  "10": [
    {
      "german": "das Hotel, die Hotels",
      "translations": {
        "english": "hotel",
        "ukrainian": "готель",
        "polish": "hotel",
        "albanian": "hoteli",
        "arabic": "فندق"
      }
    },
    {
      "german": "das Restaurant, die Restaurants",
      "translations": {
        "english": "restaurant",
        "ukrainian": "ресторан",
        "polish": "restauracja",
        "albanian": "restoranti",
        "arabic": "مطعم"
      }
    },
    {
      "german": "der Alexanderplatz",
      "translations": {
        "english": "Alexanderplatz (square in Berlin)",
        "ukrainian": "Александерплац",
        "polish": "Alexanderplatz",
        "albanian": "Alexanderplatz",
        "arabic": "ألكسندر بلاتز"
      }
    },
    {
      "german": "das Brandenburger Tor",
      "translations": {
        "english": "Brandenburg Gate",
        "ukrainian": "Бранденбурзькі ворота",
        "polish": "Brama Brandenburska",
        "albanian": "Porta e Brandenburgut",
        "arabic": "بوابة براندنبورغ"
      }
    },
    {
      "german": "der Reichstag",
      "translations": {
        "english": "Reichstag (parliament building)",
        "ukrainian": "Рейхстаг",
        "polish": "Reichstag",
        "albanian": "Reichstag",
        "arabic": "الرايخستاغ"
      }
    },
    {
      "german": "die Museumsinsel",
      "translations": {
        "english": "Museum Island",
        "ukrainian": "Музейний острів",
        "polish": "Wyspa Muzeów",
        "albanian": "Ishulli i Muzeve",
        "arabic": "جزيرة المتاحف"
      }
    },
    {
      "german": "der Balkon, die Balkone",
      "translations": {
        "english": "balcony",
        "ukrainian": "балкон",
        "polish": "balkon",
        "albanian": "ballkoni",
        "arabic": "شرفة"
      }
    },
    {
      "german": "die Wohnung, die Wohnungen",
      "translations": {
        "english": "apartment",
        "ukrainian": "квартира",
        "polish": "mieszkanie",
        "albanian": "banesa",
        "arabic": "شقة"
      }
    },
    {
      "german": "der Kaffee",
      "translations": {
        "english": "coffee",
        "ukrainian": "кава",
        "polish": "kawa",
        "albanian": "kafeja",
        "arabic": "قهوة"
      }
    },
    {
      "german": "der Tee",
      "translations": {
        "english": "tea",
        "ukrainian": "чай",
        "polish": "herbata",
        "albanian": "çaji",
        "arabic": "شاي"
      }
    },
    {
      "german": "das Konzert, die Konzerte",
      "translations": {
        "english": "concert",
        "ukrainian": "концерт",
        "polish": "koncert",
        "albanian": "koncerti",
        "arabic": "حفلة موسيقية"
      }
    },
    {
      "german": "die Stadtrundfahrt, die Stadtrundfahrten",
      "translations": {
        "english": "city tour",
        "ukrainian": "екскурсія містом",
        "polish": "wycieczka po mieście",
        "albanian": "turi i qytetit",
        "arabic": "جولة في المدينة"
      }
    },
    {
      "german": "der Ausflug, die Ausflüge",
      "translations": {
        "english": "excursion, trip",
        "ukrainian": "екскурсія",
        "polish": "wycieczka",
        "albanian": "ekskursioni",
        "arabic": "رحلة"
      }
    },
    {
      "german": "die Pizza, die Pizzas",
      "translations": {
        "english": "pizza",
        "ukrainian": "піца",
        "polish": "pizza",
        "albanian": "pica",
        "arabic": "بيتزا"
      }
    },
    {
      "german": "die Geburtstagsparty, die Geburtstagspartys",
      "translations": {
        "english": "birthday party",
        "ukrainian": "вечірка на день народження",
        "polish": "przyjęcie urodzinowe",
        "albanian": "festa e ditëlindjes",
        "arabic": "حفلة عيد ميلاد"
      }
    },
    {
      "german": "das Taxi, die Taxis",
      "translations": {
        "english": "taxi",
        "ukrainian": "таксі",
        "polish": "taksówka",
        "albanian": "taksi",
        "arabic": "تاكسي"
      }
    },
    {
      "german": "der Führer, die Führer",
      "translations": {
        "english": "guide, driver",
        "ukrainian": "гід, водій",
        "polish": "przewodnik, kierowca",
        "albanian": "udhërrëfyesi, shoferi",
        "arabic": "دليل، سائق"
      }
    },
    {
      "german": "die Post",
      "translations": {
        "english": "post office, mail",
        "ukrainian": "пошта",
        "polish": "poczta",
        "albanian": "posta",
        "arabic": "البريد"
      }
    },
    {
      "german": "das Auto, die Autos",
      "translations": {
        "english": "car",
        "ukrainian": "автомобіль",
        "polish": "samochód",
        "albanian": "makina",
        "arabic": "سيارة"
      }
    },
    {
      "german": "die Karte, die Karten",
      "translations": {
        "english": "card, map, ticket",
        "ukrainian": "картка, карта, квиток",
        "polish": "karta, mapa, bilet",
        "albanian": "karta, harta, bileta",
        "arabic": "بطاقة، خريطة، تذكرة"
      }
    },
    {
      "german": "der Schlüssel, die Schlüssel",
      "translations": {
        "english": "key",
        "ukrainian": "ключ",
        "polish": "klucz",
        "albanian": "çelësi",
        "arabic": "مفتاح"
      }
    },
    {
      "german": "früher",
      "translations": {
        "english": "earlier, formerly",
        "ukrainian": "раніше",
        "polish": "wcześniej",
        "albanian": "më parë",
        "arabic": "سابقاً"
      }
    },
    {
      "german": "heute",
      "translations": {
        "english": "today",
        "ukrainian": "сьогодні",
        "polish": "dzisiaj",
        "albanian": "sot",
        "arabic": "اليوم"
      }
    },
    {
      "german": "verheiratet",
      "translations": {
        "english": "married",
        "ukrainian": "одружений",
        "polish": "żonaty/zamężna",
        "albanian": "i/e martuar",
        "arabic": "متزوج"
      }
    },
    {
      "german": "ledig",
      "translations": {
        "english": "single",
        "ukrainian": "неодружений",
        "polish": "stanu wolnego",
        "albanian": "beqar/e",
        "arabic": "أعزب"
      }
    },
    {
      "german": "geschieden",
      "translations": {
        "english": "divorced",
        "ukrainian": "розлучений",
        "polish": "rozwiedziony",
        "albanian": "i/e divorcuar",
        "arabic": "مطلق"
      }
    },
    {
      "german": "die Großstadt, die Großstädte",
      "translations": {
        "english": "big city",
        "ukrainian": "велике місто",
        "polish": "duże miasto",
        "albanian": "qyteti i madh",
        "arabic": "مدينة كبيرة"
      }
    },
    {
      "german": "die Kleinstadt, die Kleinstädte",
      "translations": {
        "english": "small town",
        "ukrainian": "маленьке місто",
        "polish": "małe miasto",
        "albanian": "qyteti i vogël",
        "arabic": "بلدة صغيرة"
      }
    },
    {
      "german": "das Land",
      "translations": {
        "english": "countryside, country",
        "ukrainian": "сільська місцевість, країна",
        "polish": "wieś, kraj",
        "albanian": "fshati, vendi",
        "arabic": "الريف، البلد"
      }
    },
    {
      "german": "müde",
      "translations": {
        "english": "tired",
        "ukrainian": "втомлений",
        "polish": "zmęczony",
        "albanian": "i/e lodhur",
        "arabic": "متعب"
      }
    },
    {
      "german": "der Autoschlüssel, die Autoschlüssel",
      "translations": {
        "english": "car key",
        "ukrainian": "ключ від автомобіля",
        "polish": "kluczyk samochodowy",
        "albanian": "çelësi i makinës",
        "arabic": "مفتاح السيارة"
      }
    },
    {
      "german": "wichtig",
      "translations": {
        "english": "important",
        "ukrainian": "важливий",
        "polish": "ważny",
        "albanian": "i/e rëndësishëm",
        "arabic": "مهم"
      }
    },
    {
      "german": "unterwegs",
      "translations": {
        "english": "on the way",
        "ukrainian": "в дорозі",
        "polish": "w drodze",
        "albanian": "në rrugë",
        "arabic": "في الطريق"
      }
    },
    {
      "german": "die Postkarte, die Postkarten",
      "translations": {
        "english": "postcard",
        "ukrainian": "листівка",
        "polish": "pocztówka",
        "albanian": "kartolina",
        "arabic": "بطاقة بريدية"
      }
    },
    {
      "german": "die Grüße (plural)",
      "translations": {
        "english": "greetings",
        "ukrainian": "вітання",
        "polish": "pozdrowienia",
        "albanian": "përshëndetjet",
        "arabic": "تحيات"
      }
    },
    {
      "german": "der Führerschein, die Führerscheine",
      "translations": {
        "english": "driver's license",
        "ukrainian": "водійські права",
        "polish": "prawo jazdy",
        "albanian": "patenta e shoferit",
        "arabic": "رخصة القيادة"
      }
    },
    {
      "german": "die Kommunikation",
      "translations": {
        "english": "communication",
        "ukrainian": "комунікація",
        "polish": "komunikacja",
        "albanian": "komunikimi",
        "arabic": "التواصل"
      }
    },
    {
      "german": "die Reise, die Reisen",
      "translations": {
        "english": "journey, trip",
        "ukrainian": "подорож",
        "polish": "podróż",
        "albanian": "udhëtimi",
        "arabic": "رحلة"
      }
    },
    {
      "german": "der Brief, die Briefe",
      "translations": {
        "english": "letter",
        "ukrainian": "лист",
        "polish": "list",
        "albanian": "letra",
        "arabic": "رسالة"
      }
    },
    {
      "german": "die E-Mail, die E-Mails",
      "translations": {
        "english": "email",
        "ukrainian": "електронний лист",
        "polish": "e-mail",
        "albanian": "emaili",
        "arabic": "البريد الإلكتروني"
      }
    },
    {
      "german": "der Termin, die Termine",
      "translations": {
        "english": "appointment",
        "ukrainian": "зустріч, термін",
        "polish": "termin",
        "albanian": "takimi",
        "arabic": "موعد"
      }
    },
    {
      "german": "die Familie, die Familien",
      "translations": {
        "english": "family",
        "ukrainian": "сім'я",
        "polish": "rodzina",
        "albanian": "familja",
        "arabic": "العائلة"
      }
    },
    {
      "german": "das Kind, die Kinder",
      "translations": {
        "english": "child, children",
        "ukrainian": "дитина, діти",
        "polish": "dziecko, dzieci",
        "albanian": "fëmija, fëmijët",
        "arabic": "طفل، أطفال"
      }
    },
    {
      "german": "der Beruf, die Berufe",
      "translations": {
        "english": "profession, job",
        "ukrainian": "професія",
        "polish": "zawód",
        "albanian": "profesioni",
        "arabic": "المهنة"
      }
    },
    {
      "german": "das Hobby, die Hobbys",
      "translations": {
        "english": "hobby",
        "ukrainian": "хобі",
        "polish": "hobby",
        "albanian": "hobi",
        "arabic": "الهواية"
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
        "arabic": "المكتب، السلطة"
      }
    },
    {
      "german": "die Behörde, die Behörden",
      "translations": {
        "english": "authority, government office",
        "ukrainian": "орган влади, установа",
        "polish": "urząd, władza",
        "albanian": "autoriteti, zyra qeveritare",
        "arabic": "السلطة، الدائرة الحكومية"
      }
    },
    {
      "german": "die Bundesagentur für Arbeit",
      "translations": {
        "english": "Federal Employment Agency",
        "ukrainian": "Федеральне агентство зайнятості",
        "polish": "Federalna Agencja Pracy",
        "albanian": "Agjencia Federale e Punës",
        "arabic": "الوكالة الاتحادية للعمل"
      }
    },
    {
      "german": "die Familienkasse, die Familienkassen",
      "translations": {
        "english": "family benefits office",
        "ukrainian": "каса сімейних виплат",
        "polish": "kasa rodzinna",
        "albanian": "zyra e përfitimeve familjare",
        "arabic": "صندوق العائلة"
      }
    },
    {
      "german": "das Standesamt, die Standesämter",
      "translations": {
        "english": "registry office",
        "ukrainian": "РАЦС, відділ реєстрації актів цивільного стану",
        "polish": "urząd stanu cywilnego",
        "albanian": "zyra e gjendjes civile",
        "arabic": "مكتب الأحوال المدنية"
      }
    },
    {
      "german": "die Kfz-Zulassungsstelle, die Kfz-Zulassungsstellen",
      "translations": {
        "english": "vehicle registration office",
        "ukrainian": "відділ реєстрації транспортних засобів",
        "polish": "wydział komunikacji",
        "albanian": "zyra e regjistrimit të automjeteve",
        "arabic": "مكتب تسجيل المركبات"
      }
    },
    {
      "german": "der Warteraum, die Warteräume",
      "translations": {
        "english": "waiting room",
        "ukrainian": "зал очікування",
        "polish": "poczekalnia",
        "albanian": "dhoma e pritjes",
        "arabic": "غرفة الانتظار"
      }
    },
    {
      "german": "das Kindergeld",
      "translations": {
        "english": "child benefit",
        "ukrainian": "допомога на дитину",
        "polish": "zasiłek na dziecko",
        "albanian": "ndihma për fëmijë",
        "arabic": "إعانة الطفل"
      }
    },
    {
      "german": "die Berufsberatung, die Berufsberatungen",
      "translations": {
        "english": "career counseling",
        "ukrainian": "професійна консультація",
        "polish": "doradztwo zawodowe",
        "albanian": "këshillimi i karrierës",
        "arabic": "الاستشارة المهنية"
      }
    },
    {
      "german": "das Bürgeramt, die Bürgerämter",
      "translations": {
        "english": "citizen's office",
        "ukrainian": "громадська приймальня",
        "polish": "urząd obywatelski",
        "albanian": "zyra e qytetarëve",
        "arabic": "مكتب المواطنين"
      }
    },
    {
      "german": "das Ausländeramt, die Ausländerämter",
      "translations": {
        "english": "foreigners' office",
        "ukrainian": "відділ у справах іноземців",
        "polish": "urząd do spraw cudzoziemców",
        "albanian": "zyra e të huajve",
        "arabic": "مكتب شؤون الأجانب"
      }
    },
    {
      "german": "das Visum, die Visa",
      "translations": {
        "english": "visa",
        "ukrainian": "віза",
        "polish": "wiza",
        "albanian": "viza",
        "arabic": "التأشيرة"
      }
    },
    {
      "german": "die Meldestelle, die Meldestellen",
      "translations": {
        "english": "registration office",
        "ukrainian": "реєстраційний відділ",
        "polish": "biuro meldunkowe",
        "albanian": "zyra e regjistrimit",
        "arabic": "مكتب التسجيل"
      }
    },
    {
      "german": "die Gemeinde, die Gemeinden",
      "translations": {
        "english": "municipality, community",
        "ukrainian": "громада, муніципалітет",
        "polish": "gmina",
        "albanian": "komuna, bashkia",
        "arabic": "البلدية"
      }
    },
    {
      "german": "das Geburtsdatum, die Geburtsdaten",
      "translations": {
        "english": "date of birth",
        "ukrainian": "дата народження",
        "polish": "data urodzenia",
        "albanian": "data e lindjes",
        "arabic": "تاريخ الميلاد"
      }
    },
    {
      "german": "der Geburtsort, die Geburtsorte",
      "translations": {
        "english": "place of birth",
        "ukrainian": "місце народження",
        "polish": "miejsce urodzenia",
        "albanian": "vendi i lindjes",
        "arabic": "مكان الولادة"
      }
    },
    {
      "german": "der Familienstand",
      "translations": {
        "english": "marital status",
        "ukrainian": "сімейний стан",
        "polish": "stan cywilny",
        "albanian": "gjendja civile",
        "arabic": "الحالة الاجتماعية"
      }
    },
    {
      "german": "die Staatsangehörigkeit, die Staatsangehörigkeiten",
      "translations": {
        "english": "nationality, citizenship",
        "ukrainian": "громадянство",
        "polish": "obywatelstwo",
        "albanian": "shtetësia",
        "arabic": "الجنسية"
      }
    },
    {
      "german": "das Datum, die Daten",
      "translations": {
        "english": "date",
        "ukrainian": "дата",
        "polish": "data",
        "albanian": "data",
        "arabic": "التاريخ"
      }
    },
    {
      "german": "die Geburtsurkunde, die Geburtsurkunden",
      "translations": {
        "english": "birth certificate",
        "ukrainian": "свідоцтво про народження",
        "polish": "akt urodzenia",
        "albanian": "certifikata e lindjes",
        "arabic": "شهادة الميلاد"
      }
    },
    {
      "german": "der Pass, die Pässe",
      "translations": {
        "english": "passport",
        "ukrainian": "паспорт",
        "polish": "paszport",
        "albanian": "pasaporta",
        "arabic": "جواز السفر"
      }
    },
    {
      "german": "der Eingang, die Eingänge",
      "translations": {
        "english": "entrance",
        "ukrainian": "вхід",
        "polish": "wejście",
        "albanian": "hyrja",
        "arabic": "المدخل"
      }
    },
    {
      "german": "die Hauptwohnung, die Hauptwohnungen",
      "translations": {
        "english": "main residence",
        "ukrainian": "основне місце проживання",
        "polish": "główne miejsce zamieszkania",
        "albanian": "vendbanimi kryesor",
        "arabic": "السكن الرئيسي"
      }
    },
    {
      "german": "der/die Vermieter/in, die Vermieter",
      "translations": {
        "english": "landlord/landlady",
        "ukrainian": "орендодавець",
        "polish": "wynajmujący",
        "albanian": "qiradhënësi",
        "arabic": "المؤجر"
      }
    },
    {
      "german": "die Wartenummer, die Wartenummern",
      "translations": {
        "english": "waiting number",
        "ukrainian": "номер черги",
        "polish": "numer kolejki",
        "albanian": "numri i pritjes",
        "arabic": "رقم الانتظار"
      }
    },
    {
      "german": "die Kursgebühr, die Kursgebühren",
      "translations": {
        "english": "course fee",
        "ukrainian": "плата за курс",
        "polish": "opłata za kurs",
        "albanian": "tarifa e kursit",
        "arabic": "رسوم الدورة"
      }
    },
    {
      "german": "der Mietvertrag, die Mietverträge",
      "translations": {
        "english": "rental contract",
        "ukrainian": "договір оренди",
        "polish": "umowa najmu",
        "albanian": "kontrata e qirasë",
        "arabic": "عقد الإيجار"
      }
    },
    {
      "german": "die Gehaltsabrechnung, die Gehaltsabrechnungen",
      "translations": {
        "english": "salary statement",
        "ukrainian": "розрахунковий лист",
        "polish": "odcinek wypłaty",
        "albanian": "pasqyra e pagës",
        "arabic": "كشف الراتب"
      }
    },
    {
      "german": "der Tipp, die Tipps",
      "translations": {
        "english": "tip, advice",
        "ukrainian": "порада",
        "polish": "wskazówka",
        "albanian": "këshilla",
        "arabic": "نصيحة"
      }
    },
    {
      "german": "die Informationsbroschüre, die Informationsbroschüren",
      "translations": {
        "english": "information brochure",
        "ukrainian": "інформаційна брошура",
        "polish": "broszura informacyjna",
        "albanian": "broshura informative",
        "arabic": "كتيب المعلومات"
      }
    },
    {
      "german": "der/die Sachbearbeiter/in, die Sachbearbeiter",
      "translations": {
        "english": "clerk, case worker",
        "ukrainian": "службовець",
        "polish": "urzędnik",
        "albanian": "nëpunësi",
        "arabic": "الموظف المسؤول"
      }
    },
    {
      "german": "männlich",
      "translations": {
        "english": "male",
        "ukrainian": "чоловічий",
        "polish": "męski",
        "albanian": "mashkull",
        "arabic": "ذكر"
      }
    },
    {
      "german": "weiblich",
      "translations": {
        "english": "female",
        "ukrainian": "жіночий",
        "polish": "żeński",
        "albanian": "femër",
        "arabic": "أنثى"
      }
    },
    {
      "german": "berufstätig",
      "translations": {
        "english": "employed",
        "ukrainian": "працевлаштований",
        "polish": "zatrudniony",
        "albanian": "i punësuar",
        "arabic": "موظف"
      }
    },
    {
      "german": "verheiratet",
      "translations": {
        "english": "married",
        "ukrainian": "одружений",
        "polish": "żonaty/zamężna",
        "albanian": "i martuar",
        "arabic": "متزوج"
      }
    },
    {
      "german": "ledig",
      "translations": {
        "english": "single",
        "ukrainian": "неодружений",
        "polish": "wolny/wolna",
        "albanian": "beqar",
        "arabic": "أعزب"
      }
    },
    {
      "german": "die Wohnung, die Wohnungen",
      "translations": {
        "english": "apartment",
        "ukrainian": "квартира",
        "polish": "mieszkanie",
        "albanian": "banesa",
        "arabic": "الشقة"
      }
    },
    {
      "german": "die Eigentumswohnung, die Eigentumswohnungen",
      "translations": {
        "english": "condominium, owner-occupied apartment",
        "ukrainian": "власна квартира",
        "polish": "mieszkanie własnościowe",
        "albanian": "banesa në pronësi",
        "arabic": "شقة تمليك"
      }
    },
    {
      "german": "mieten",
      "translations": {
        "english": "to rent",
        "ukrainian": "орендувати",
        "polish": "wynajmować",
        "albanian": "të marrësh me qira",
        "arabic": "يستأجر"
      }
    },
    {
      "german": "umziehen",
      "translations": {
        "english": "to move (residence)",
        "ukrainian": "переїжджати",
        "polish": "przeprowadzać się",
        "albanian": "të shpërngulesh",
        "arabic": "ينتقل"
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
        "arabic": "معطف"
      }
    },
    {
      "german": "die Hose, die Hosen",
      "translations": {
        "english": "pants/trousers",
        "ukrainian": "штани",
        "polish": "spodnie",
        "albanian": "pantallona",
        "arabic": "بنطلون"
      }
    },
    {
      "german": "die Schuhe (Plural)",
      "translations": {
        "english": "shoes",
        "ukrainian": "взуття",
        "polish": "buty",
        "albanian": "këpucë",
        "arabic": "أحذية"
      }
    },
    {
      "german": "das Kleid, die Kleider",
      "translations": {
        "english": "dress",
        "ukrainian": "сукня",
        "polish": "sukienka",
        "albanian": "fustan",
        "arabic": "فستان"
      }
    },
    {
      "german": "das Hemd, die Hemden",
      "translations": {
        "english": "shirt",
        "ukrainian": "сорочка",
        "polish": "koszula",
        "albanian": "këmishë",
        "arabic": "قميص"
      }
    },
    {
      "german": "die Bluse, die Blusen",
      "translations": {
        "english": "blouse",
        "ukrainian": "блузка",
        "polish": "bluzka",
        "albanian": "bluzë",
        "arabic": "بلوزة"
      }
    },
    {
      "german": "der Pullover, die Pullover",
      "translations": {
        "english": "pullover/sweater",
        "ukrainian": "светр",
        "polish": "sweter",
        "albanian": "pulover",
        "arabic": "كنزة"
      }
    },
    {
      "german": "das T-Shirt, die T-Shirts",
      "translations": {
        "english": "T-shirt",
        "ukrainian": "футболка",
        "polish": "koszulka",
        "albanian": "bluzë sportive",
        "arabic": "تي شيرت"
      }
    },
    {
      "german": "die Jacke, die Jacken",
      "translations": {
        "english": "jacket",
        "ukrainian": "куртка",
        "polish": "kurtka",
        "albanian": "xhaketë",
        "arabic": "جاكيت"
      }
    },
    {
      "german": "der Rock, die Röcke",
      "translations": {
        "english": "skirt",
        "ukrainian": "спідниця",
        "polish": "spódnica",
        "albanian": "fund",
        "arabic": "تنورة"
      }
    },
    {
      "german": "die Jeans (Singular/Plural)",
      "translations": {
        "english": "jeans",
        "ukrainian": "джинси",
        "polish": "dżinsy",
        "albanian": "xhinse",
        "arabic": "جينز"
      }
    },
    {
      "german": "das Sweatshirt, die Sweatshirts",
      "translations": {
        "english": "sweatshirt",
        "ukrainian": "світшот",
        "polish": "bluza",
        "albanian": "bluze sportive",
        "arabic": "سويت شيرت"
      }
    },
    {
      "german": "die Socke, die Socken",
      "translations": {
        "english": "sock",
        "ukrainian": "шкарпетка",
        "polish": "skarpeta",
        "albanian": "çorape",
        "arabic": "جورب"
      }
    },
    {
      "german": "die Unterwäsche (Singular)",
      "translations": {
        "english": "underwear",
        "ukrainian": "нижня білизна",
        "polish": "bielizna",
        "albanian": "të brendshme",
        "arabic": "ملابس داخلية"
      }
    },
    {
      "german": "der Anzug, die Anzüge",
      "translations": {
        "english": "suit",
        "ukrainian": "костюм",
        "polish": "garnitur",
        "albanian": "kostum",
        "arabic": "بدلة"
      }
    },
    {
      "german": "die Krawatte, die Krawatten",
      "translations": {
        "english": "tie",
        "ukrainian": "краватка",
        "polish": "krawat",
        "albanian": "kravatë",
        "arabic": "ربطة عنق"
      }
    },
    {
      "german": "der Stiefel, die Stiefel",
      "translations": {
        "english": "boot",
        "ukrainian": "чобіт",
        "polish": "but",
        "albanian": "çizme",
        "arabic": "حذاء طويل"
      }
    },
    {
      "german": "die Sandale, die Sandalen",
      "translations": {
        "english": "sandal",
        "ukrainian": "сандалі",
        "polish": "sandał",
        "albanian": "sandale",
        "arabic": "صندل"
      }
    },
    {
      "german": "der Strumpf, die Strümpfe",
      "translations": {
        "english": "stocking",
        "ukrainian": "панчоха",
        "polish": "pończocha",
        "albanian": "çorape të gjata",
        "arabic": "جوارب طويلة"
      }
    },
    {
      "german": "die Strumpfhose, die Strumpfhosen",
      "translations": {
        "english": "tights/pantyhose",
        "ukrainian": "колготки",
        "polish": "rajstopy",
        "albanian": "kollotuke",
        "arabic": "جوارب طويلة"
      }
    },
    {
      "german": "der Schal, die Schals",
      "translations": {
        "english": "scarf",
        "ukrainian": "шарф",
        "polish": "szalik",
        "albanian": "shall",
        "arabic": "وشاح"
      }
    },
    {
      "german": "der Handschuh, die Handschuhe",
      "translations": {
        "english": "glove",
        "ukrainian": "рукавичка",
        "polish": "rękawica",
        "albanian": "dorashkë",
        "arabic": "قفاز"
      }
    },
    {
      "german": "der Regenschirm, die Regenschirme",
      "translations": {
        "english": "umbrella",
        "ukrainian": "парасолька",
        "polish": "parasol",
        "albanian": "ombrellë",
        "arabic": "مظلة"
      }
    },
    {
      "german": "die Regenjacke, die Regenjacken",
      "translations": {
        "english": "raincoat",
        "ukrainian": "дощовик",
        "polish": "kurtka przeciwdeszczowa",
        "albanian": "xhaketë shiu",
        "arabic": "معطف مطر"
      }
    },
    {
      "german": "die Jogginghose, die Jogginghosen",
      "translations": {
        "english": "sweatpants/jogging pants",
        "ukrainian": "спортивні штани",
        "polish": "spodnie dresowe",
        "albanian": "pantallona sportive",
        "arabic": "بنطلون رياضي"
      }
    },
    {
      "german": "der Sportschuh, die Sportschuhe",
      "translations": {
        "english": "sports shoe/sneaker",
        "ukrainian": "кросівки",
        "polish": "buty sportowe",
        "albanian": "këpucë sportive",
        "arabic": "حذاء رياضي"
      }
    },
    {
      "german": "der Anorak, die Anoraks",
      "translations": {
        "english": "anorak",
        "ukrainian": "анорак",
        "polish": "anorak",
        "albanian": "anorak",
        "arabic": "معطف شتوي"
      }
    },
    {
      "german": "der Hut, die Hüte",
      "translations": {
        "english": "hat",
        "ukrainian": "капелюх",
        "polish": "kapelusz",
        "albanian": "kapelë",
        "arabic": "قبعة"
      }
    },
    {
      "german": "die Kappe, die Kappen",
      "translations": {
        "english": "cap",
        "ukrainian": "кепка",
        "polish": "czapka",
        "albanian": "kapuç",
        "arabic": "قبعة"
      }
    },
    {
      "german": "die Mütze, die Mützen",
      "translations": {
        "english": "cap/beanie",
        "ukrainian": "шапка",
        "polish": "czapka",
        "albanian": "kapelë",
        "arabic": "قبعة صوفية"
      }
    },
    {
      "german": "das Kaufhaus, die Kaufhäuser",
      "translations": {
        "english": "department store",
        "ukrainian": "універмаг",
        "polish": "dom towarowy",
        "albanian": "qendër tregtare",
        "arabic": "متجر كبير"
      }
    },
    {
      "german": "die Boutique, die Boutiquen",
      "translations": {
        "english": "boutique",
        "ukrainian": "бутік",
        "polish": "butik",
        "albanian": "butik",
        "arabic": "متجر أزياء"
      }
    },
    {
      "german": "der Flohmarkt, die Flohmärkte",
      "translations": {
        "english": "flea market",
        "ukrainian": "блошиний ринок",
        "polish": "pchli targ",
        "albanian": "treg i vjetër",
        "arabic": "سوق البرغوث"
      }
    },
    {
      "german": "die Umkleidekabine, die Umkleidekabinen",
      "translations": {
        "english": "changing room/fitting room",
        "ukrainian": "примірочна",
        "polish": "przymierzalnia",
        "albanian": "dhomë provimi",
        "arabic": "غرفة القياس"
      }
    },
    {
      "german": "der Secondhandladen, die Secondhandläden",
      "translations": {
        "english": "second-hand shop",
        "ukrainian": "секонд-хенд",
        "polish": "sklep z używaną odzieżą",
        "albanian": "dyqan i dorës së dytë",
        "arabic": "متجر ملابس مستعملة"
      }
    },
    {
      "german": "die Größe, die Größen",
      "translations": {
        "english": "size",
        "ukrainian": "розмір",
        "polish": "rozmiar",
        "albanian": "madhësi",
        "arabic": "مقاس"
      }
    },
    {
      "german": "der Preis, die Preise",
      "translations": {
        "english": "price",
        "ukrainian": "ціна",
        "polish": "cena",
        "albanian": "çmim",
        "arabic": "سعر"
      }
    },
    {
      "german": "die Kasse, die Kassen",
      "translations": {
        "english": "cash register/checkout",
        "ukrainian": "каса",
        "polish": "kasa",
        "albanian": "arka",
        "arabic": "صندوق الدفع"
      }
    },
    {
      "german": "der Ausgang, die Ausgänge",
      "translations": {
        "english": "exit",
        "ukrainian": "вихід",
        "polish": "wyjście",
        "albanian": "dalje",
        "arabic": "مخرج"
      }
    },
    {
      "german": "die Rolltreppe, die Rolltreppen",
      "translations": {
        "english": "escalator",
        "ukrainian": "ескалатор",
        "polish": "schody ruchome",
        "albanian": "shkallë lëvizëse",
        "arabic": "سلم متحرك"
      }
    },
    {
      "german": "die Abteilung, die Abteilungen",
      "translations": {
        "english": "department",
        "ukrainian": "відділ",
        "polish": "dział",
        "albanian": "departament",
        "arabic": "قسم"
      }
    },
    {
      "german": "das Erdgeschoss",
      "translations": {
        "english": "ground floor",
        "ukrainian": "перший поверх",
        "polish": "parter",
        "albanian": "kati përdhes",
        "arabic": "الطابق الأرضي"
      }
    },
    {
      "german": "der Stock, die Stockwerke",
      "translations": {
        "english": "floor/story",
        "ukrainian": "поверх",
        "polish": "piętro",
        "albanian": "kat",
        "arabic": "طابق"
      }
    },
    {
      "german": "das Computerspiel, die Computerspiele",
      "translations": {
        "english": "computer game",
        "ukrainian": "комп'ютерна гра",
        "polish": "gra komputerowa",
        "albanian": "lojë kompjuteri",
        "arabic": "لعبة كمبيوتر"
      }
    },
    {
      "german": "der Schmuck",
      "translations": {
        "english": "jewelry",
        "ukrainian": "прикраси",
        "polish": "biżuteria",
        "albanian": "bizhuteri",
        "arabic": "مجوهرات"
      }
    },
    {
      "german": "die Toilette, die Toiletten",
      "translations": {
        "english": "toilet/bathroom",
        "ukrainian": "туалет",
        "polish": "toaleta",
        "albanian": "tualet",
        "arabic": "مرحاض"
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
        "arabic": "فصل السنة"
      }
    },
    {
      "german": "der Januar",
      "translations": {
        "english": "January",
        "ukrainian": "січень",
        "polish": "styczeń",
        "albanian": "janar",
        "arabic": "يناير"
      }
    },
    {
      "german": "der Februar",
      "translations": {
        "english": "February",
        "ukrainian": "лютий",
        "polish": "luty",
        "albanian": "shkurt",
        "arabic": "فبراير"
      }
    },
    {
      "german": "der März",
      "translations": {
        "english": "March",
        "ukrainian": "березень",
        "polish": "marzec",
        "albanian": "mars",
        "arabic": "مارس"
      }
    },
    {
      "german": "der April",
      "translations": {
        "english": "April",
        "ukrainian": "квітень",
        "polish": "kwiecień",
        "albanian": "prill",
        "arabic": "أبريل"
      }
    },
    {
      "german": "der Mai",
      "translations": {
        "english": "May",
        "ukrainian": "травень",
        "polish": "maj",
        "albanian": "maj",
        "arabic": "مايو"
      }
    },
    {
      "german": "der Juni",
      "translations": {
        "english": "June",
        "ukrainian": "червень",
        "polish": "czerwiec",
        "albanian": "qershor",
        "arabic": "يونيو"
      }
    },
    {
      "german": "der Juli",
      "translations": {
        "english": "July",
        "ukrainian": "липень",
        "polish": "lipiec",
        "albanian": "korrik",
        "arabic": "يوليو"
      }
    },
    {
      "german": "der August",
      "translations": {
        "english": "August",
        "ukrainian": "серпень",
        "polish": "sierpień",
        "albanian": "gusht",
        "arabic": "أغسطس"
      }
    },
    {
      "german": "der September",
      "translations": {
        "english": "September",
        "ukrainian": "вересень",
        "polish": "wrzesień",
        "albanian": "shtator",
        "arabic": "سبتمبر"
      }
    },
    {
      "german": "der Oktober",
      "translations": {
        "english": "October",
        "ukrainian": "жовтень",
        "polish": "październik",
        "albanian": "tetor",
        "arabic": "أكتوبر"
      }
    },
    {
      "german": "der November",
      "translations": {
        "english": "November",
        "ukrainian": "листопад",
        "polish": "listopad",
        "albanian": "nëntor",
        "arabic": "نوفمبر"
      }
    },
    {
      "german": "der Dezember",
      "translations": {
        "english": "December",
        "ukrainian": "грудень",
        "polish": "grudzień",
        "albanian": "dhjetor",
        "arabic": "ديسمبر"
      }
    },
    {
      "german": "der Frühling",
      "translations": {
        "english": "spring",
        "ukrainian": "весна",
        "polish": "wiosna",
        "albanian": "pranvera",
        "arabic": "الربيع"
      }
    },
    {
      "german": "der Sommer",
      "translations": {
        "english": "summer",
        "ukrainian": "літо",
        "polish": "lato",
        "albanian": "vera",
        "arabic": "الصيف"
      }
    },
    {
      "german": "der Herbst",
      "translations": {
        "english": "autumn/fall",
        "ukrainian": "осінь",
        "polish": "jesień",
        "albanian": "vjeshta",
        "arabic": "الخريف"
      }
    },
    {
      "german": "der Winter",
      "translations": {
        "english": "winter",
        "ukrainian": "зима",
        "polish": "zima",
        "albanian": "dimri",
        "arabic": "الشتاء"
      }
    },
    {
      "german": "das Wetter",
      "translations": {
        "english": "weather",
        "ukrainian": "погода",
        "polish": "pogoda",
        "albanian": "moti",
        "arabic": "الطقس"
      }
    },
    {
      "german": "die Sonne",
      "translations": {
        "english": "sun",
        "ukrainian": "сонце",
        "polish": "słońce",
        "albanian": "dielli",
        "arabic": "الشمس"
      }
    },
    {
      "german": "der Regen",
      "translations": {
        "english": "rain",
        "ukrainian": "дощ",
        "polish": "deszcz",
        "albanian": "shiu",
        "arabic": "المطر"
      }
    },
    {
      "german": "der Schnee",
      "translations": {
        "english": "snow",
        "ukrainian": "сніг",
        "polish": "śnieg",
        "albanian": "bora",
        "arabic": "الثلج"
      }
    },
    {
      "german": "der Wind",
      "translations": {
        "english": "wind",
        "ukrainian": "вітер",
        "polish": "wiatr",
        "albanian": "era",
        "arabic": "الرياح"
      }
    },
    {
      "german": "die Wolke, die Wolken",
      "translations": {
        "english": "cloud",
        "ukrainian": "хмара",
        "polish": "chmura",
        "albanian": "reja",
        "arabic": "السحابة"
      }
    },
    {
      "german": "der Nebel",
      "translations": {
        "english": "fog",
        "ukrainian": "туман",
        "polish": "mgła",
        "albanian": "mjegulla",
        "arabic": "الضباب"
      }
    },
    {
      "german": "die Hitze",
      "translations": {
        "english": "heat",
        "ukrainian": "спека",
        "polish": "upał",
        "albanian": "vapa",
        "arabic": "الحرارة"
      }
    },
    {
      "german": "die Kälte",
      "translations": {
        "english": "cold",
        "ukrainian": "холод",
        "polish": "zimno",
        "albanian": "të ftohtit",
        "arabic": "البرد"
      }
    },
    {
      "german": "der Urlaub",
      "translations": {
        "english": "vacation/holiday",
        "ukrainian": "відпустка",
        "polish": "urlop",
        "albanian": "pushimet",
        "arabic": "العطلة"
      }
    },
    {
      "german": "die Reise, die Reisen",
      "translations": {
        "english": "journey/trip",
        "ukrainian": "подорож",
        "polish": "podróż",
        "albanian": "udhëtimi",
        "arabic": "الرحلة"
      }
    },
    {
      "german": "der Berg, die Berge",
      "translations": {
        "english": "mountain",
        "ukrainian": "гора",
        "polish": "góra",
        "albanian": "mali",
        "arabic": "الجبل"
      }
    },
    {
      "german": "das Meer, die Meere",
      "translations": {
        "english": "sea",
        "ukrainian": "море",
        "polish": "morze",
        "albanian": "deti",
        "arabic": "البحر"
      }
    },
    {
      "german": "der See, die Seen",
      "translations": {
        "english": "lake",
        "ukrainian": "озеро",
        "polish": "jezioro",
        "albanian": "liqeni",
        "arabic": "البحيرة"
      }
    },
    {
      "german": "der Strand, die Strände",
      "translations": {
        "english": "beach",
        "ukrainian": "пляж",
        "polish": "plaża",
        "albanian": "plazhi",
        "arabic": "الشاطئ"
      }
    },
    {
      "german": "der Wald, die Wälder",
      "translations": {
        "english": "forest",
        "ukrainian": "ліс",
        "polish": "las",
        "albanian": "pylli",
        "arabic": "الغابة"
      }
    },
    {
      "german": "die Wiese, die Wiesen",
      "translations": {
        "english": "meadow",
        "ukrainian": "луг",
        "polish": "łąka",
        "albanian": "livadhi",
        "arabic": "المرج"
      }
    },
    {
      "german": "der Bauernhof, die Bauernhöfe",
      "translations": {
        "english": "farm",
        "ukrainian": "ферма",
        "polish": "gospodarstwo",
        "albanian": "ferma",
        "arabic": "المزرعة"
      }
    },
    {
      "german": "das Dorf, die Dörfer",
      "translations": {
        "english": "village",
        "ukrainian": "село",
        "polish": "wieś",
        "albanian": "fshati",
        "arabic": "القرية"
      }
    },
    {
      "german": "die Stadt, die Städte",
      "translations": {
        "english": "city",
        "ukrainian": "місто",
        "polish": "miasto",
        "albanian": "qyteti",
        "arabic": "المدينة"
      }
    },
    {
      "german": "der Park, die Parks",
      "translations": {
        "english": "park",
        "ukrainian": "парк",
        "polish": "park",
        "albanian": "parku",
        "arabic": "الحديقة"
      }
    },
    {
      "german": "die Fahrkarte, die Fahrkarten",
      "translations": {
        "english": "ticket",
        "ukrainian": "квиток",
        "polish": "bilet",
        "albanian": "bileta",
        "arabic": "التذكرة"
      }
    },
    {
      "german": "die Abfahrt",
      "translations": {
        "english": "departure",
        "ukrainian": "відправлення",
        "polish": "odjazd",
        "albanian": "nisja",
        "arabic": "المغادرة"
      }
    },
    {
      "german": "die Ankunft",
      "translations": {
        "english": "arrival",
        "ukrainian": "прибуття",
        "polish": "przyjazd",
        "albanian": "mbërritja",
        "arabic": "الوصول"
      }
    },
    {
      "german": "der Zug, die Züge",
      "translations": {
        "english": "train",
        "ukrainian": "поїзд",
        "polish": "pociąg",
        "albanian": "treni",
        "arabic": "القطار"
      }
    },
    {
      "german": "die Reservierung, die Reservierungen",
      "translations": {
        "english": "reservation",
        "ukrainian": "бронювання",
        "polish": "rezerwacja",
        "albanian": "rezervimi",
        "arabic": "الحجز"
      }
    },
    {
      "german": "die Erste/Zweite Klasse",
      "translations": {
        "english": "first/second class",
        "ukrainian": "перший/другий клас",
        "polish": "pierwsza/druga klasa",
        "albanian": "klasa e parë/e dytë",
        "arabic": "الدرجة الأولى/الثانية"
      }
    },
    {
      "german": "das Gleis, die Gleise",
      "translations": {
        "english": "platform/track",
        "ukrainian": "платформа",
        "polish": "peron",
        "albanian": "platforma",
        "arabic": "الرصيف"
      }
    },
    {
      "german": "die Verspätung, die Verspätungen",
      "translations": {
        "english": "delay",
        "ukrainian": "затримка",
        "polish": "opóźnienie",
        "albanian": "vonesa",
        "arabic": "التأخير"
      }
    },
    {
      "german": "die Landschaft, die Landschaften",
      "translations": {
        "english": "landscape",
        "ukrainian": "ландшафт",
        "polish": "krajobraz",
        "albanian": "peizazhi",
        "arabic": "المناظر الطبيعية"
      }
    },
    {
      "german": "die Brücke, die Brücken",
      "translations": {
        "english": "bridge",
        "ukrainian": "міст",
        "polish": "most",
        "albanian": "ura",
        "arabic": "الجسر"
      }
    },
    {
      "german": "der Kilometer",
      "translations": {
        "english": "kilometer",
        "ukrainian": "кілометр",
        "polish": "kilometr",
        "albanian": "kilometri",
        "arabic": "الكيلومتر"
      }
    },
    {
      "german": "der Norden",
      "translations": {
        "english": "north",
        "ukrainian": "північ",
        "polish": "północ",
        "albanian": "veriu",
        "arabic": "الشمال"
      }
    },
    {
      "german": "der Osten",
      "translations": {
        "english": "east",
        "ukrainian": "схід",
        "polish": "wschód",
        "albanian": "lindja",
        "arabic": "الشرق"
      }
    },
    {
      "german": "der Süden",
      "translations": {
        "english": "south",
        "ukrainian": "південь",
        "polish": "południe",
        "albanian": "jugu",
        "arabic": "الجنوب"
      }
    },
    {
      "german": "der Westen",
      "translations": {
        "english": "west",
        "ukrainian": "захід",
        "polish": "zachód",
        "albanian": "perëndimi",
        "arabic": "الغرب"
      }
    },
    {
      "german": "der Campingplatz, die Campingplätze",
      "translations": {
        "english": "campsite",
        "ukrainian": "кемпінг",
        "polish": "kemping",
        "albanian": "kampi",
        "arabic": "موقع التخييم"
      }
    },
    {
      "german": "das Hotel, die Hotels",
      "translations": {
        "english": "hotel",
        "ukrainian": "готель",
        "polish": "hotel",
        "albanian": "hoteli",
        "arabic": "الفندق"
      }
    },
    {
      "german": "der Monat, die Monate",
      "translations": {
        "english": "month",
        "ukrainian": "місяць",
        "polish": "miesiąc",
        "albanian": "muaji",
        "arabic": "الشهر"
      }
    },
    {
      "german": "der Regentropfen",
      "translations": {
        "english": "raindrop",
        "ukrainian": "крапля дощу",
        "polish": "kropla deszczu",
        "albanian": "pika e shiut",
        "arabic": "قطرة المطر"
      }
    },
    {
      "german": "das Gewitter",
      "translations": {
        "english": "thunderstorm",
        "ukrainian": "гроза",
        "polish": "burza",
        "albanian": "stuhia",
        "arabic": "العاصفة الرعدية"
      }
    },
    {
      "german": "der Blitz",
      "translations": {
        "english": "lightning",
        "ukrainian": "блискавка",
        "polish": "błyskawica",
        "albanian": "vetëtima",
        "arabic": "البرق"
      }
    },
    {
      "german": "der Donner",
      "translations": {
        "english": "thunder",
        "ukrainian": "грім",
        "polish": "grzmot",
        "albanian": "bubullima",
        "arabic": "الرعد"
      }
    },
    {
      "german": "das Tier, die Tiere",
      "translations": {
        "english": "animal",
        "ukrainian": "тварина",
        "polish": "zwierzę",
        "albanian": "kafsha",
        "arabic": "الحيوان"
      }
    },
    {
      "german": "die Stadtrundfahr, die Stadtrundfahrten",
      "translations": {
        "english": "city tour",
        "ukrainian": "екскурсія містом",
        "polish": "zwiedzanie miasta",
        "albanian": "turi i qytetit",
        "arabic": "جولة في المدينة"
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
        "arabic": "البيت"
      }
    },
    {
      "german": "die Wohnung, die Wohnungen",
      "translations": {
        "english": "apartment",
        "ukrainian": "квартира",
        "polish": "mieszkanie",
        "albanian": "banesa",
        "arabic": "الشقة"
      }
    },
    {
      "german": "der Hof, die Höfe",
      "translations": {
        "english": "courtyard",
        "ukrainian": "двір",
        "polish": "podwórze",
        "albanian": "oborri",
        "arabic": "الفناء"
      }
    },
    {
      "german": "der Garten, die Gärten",
      "translations": {
        "english": "garden",
        "ukrainian": "сад",
        "polish": "ogród",
        "albanian": "kopshti",
        "arabic": "الحديقة"
      }
    },
    {
      "german": "der Balkon, die Balkone",
      "translations": {
        "english": "balcony",
        "ukrainian": "балкон",
        "polish": "balkon",
        "albanian": "ballkoni",
        "arabic": "الشرفة"
      }
    },
    {
      "german": "die Garage, die Garagen",
      "translations": {
        "english": "garage",
        "ukrainian": "гараж",
        "polish": "garaż",
        "albanian": "garazhi",
        "arabic": "الجراج"
      }
    },
    {
      "german": "die Waschküche, die Waschküchen",
      "translations": {
        "english": "laundry room",
        "ukrainian": "пральня",
        "polish": "pralnia",
        "albanian": "dhoma e larjes",
        "arabic": "غرفة الغسيل"
      }
    },
    {
      "german": "das Treppenhaus, die Treppenhäuser",
      "translations": {
        "english": "stairwell",
        "ukrainian": "сходова клітка",
        "polish": "klatka schodowa",
        "albanian": "shkallët",
        "arabic": "السلم"
      }
    },
    {
      "german": "der Aufzug, die Aufzüge",
      "translations": {
        "english": "elevator",
        "ukrainian": "ліфт",
        "polish": "winda",
        "albanian": "ashensori",
        "arabic": "المصعد"
      }
    },
    {
      "german": "das Licht, die Lichter",
      "translations": {
        "english": "light",
        "ukrainian": "світло",
        "polish": "światło",
        "albanian": "drita",
        "arabic": "الضوء"
      }
    },
    {
      "german": "die Heizung, die Heizungen",
      "translations": {
        "english": "heating",
        "ukrainian": "опалення",
        "polish": "ogrzewanie",
        "albanian": "ngrohja",
        "arabic": "التدفئة"
      }
    },
    {
      "german": "die Klingel, die Klingeln",
      "translations": {
        "english": "doorbell",
        "ukrainian": "дзвінок",
        "polish": "dzwonek",
        "albanian": "zilja",
        "arabic": "جرس الباب"
      }
    },
    {
      "german": "die Treppe, die Treppen",
      "translations": {
        "english": "stairs",
        "ukrainian": "сходи",
        "polish": "schody",
        "albanian": "shkallët",
        "arabic": "السلالم"
      }
    },
    {
      "german": "der Müll",
      "translations": {
        "english": "garbage/trash",
        "ukrainian": "сміття",
        "polish": "śmieci",
        "albanian": "mbeturinat",
        "arabic": "القمامة"
      }
    },
    {
      "german": "die Mülltonne, die Mülltonnen",
      "translations": {
        "english": "garbage bin",
        "ukrainian": "смітник",
        "polish": "kosz na śmieci",
        "albanian": "kazani i mbeturinave",
        "arabic": "حاوية القمامة"
      }
    },
    {
      "german": "die Müllabfuhr",
      "translations": {
        "english": "garbage collection",
        "ukrainian": "вивезення сміття",
        "polish": "wywóz śmieci",
        "albanian": "mbledhja e mbeturinave",
        "arabic": "جمع القمامة"
      }
    },
    {
      "german": "der Nachbar, die Nachbarn",
      "translations": {
        "english": "neighbor (male)",
        "ukrainian": "сусід",
        "polish": "sąsiad",
        "albanian": "fqinji",
        "arabic": "الجار"
      }
    },
    {
      "german": "die Nachbarin, die Nachbarinnen",
      "translations": {
        "english": "neighbor (female)",
        "ukrainian": "сусідка",
        "polish": "sąsiadka",
        "albanian": "fqinjja",
        "arabic": "الجارة"
      }
    },
    {
      "german": "der Spielplatz, die Spielplätze",
      "translations": {
        "english": "playground",
        "ukrainian": "дитячий майданчик",
        "polish": "plac zabaw",
        "albanian": "lojërat për fëmijë",
        "arabic": "ملعب الأطفال"
      }
    },
    {
      "german": "der Sandkasten, die Sandkästen",
      "translations": {
        "english": "sandbox",
        "ukrainian": "пісочниця",
        "polish": "piaskownica",
        "albanian": "kuti rëre",
        "arabic": "صندوق الرمل"
      }
    },
    {
      "german": "der Junge, die Jungen",
      "translations": {
        "english": "boy",
        "ukrainian": "хлопчик",
        "polish": "chłopiec",
        "albanian": "djali",
        "arabic": "الولد"
      }
    },
    {
      "german": "das Mädchen, die Mädchen",
      "translations": {
        "english": "girl",
        "ukrainian": "дівчинка",
        "polish": "dziewczynka",
        "albanian": "vajza",
        "arabic": "البنت"
      }
    },
    {
      "german": "das Miethaus, die Miethäuser",
      "translations": {
        "english": "rental house",
        "ukrainian": "орендний будинок",
        "polish": "dom na wynajem",
        "albanian": "shtëpia me qira",
        "arabic": "بيت الإيجار"
      }
    },
    {
      "german": "der Briefkasten, die Briefkästen",
      "translations": {
        "english": "mailbox",
        "ukrainian": "поштова скринька",
        "polish": "skrzynka pocztowa",
        "albanian": "kuti postare",
        "arabic": "صندوق البريد"
      }
    },
    {
      "german": "das Fest, die Feste",
      "translations": {
        "english": "party/celebration",
        "ukrainian": "свято",
        "polish": "święto/impreza",
        "albanian": "festa",
        "arabic": "الحفلة"
      }
    },
    {
      "german": "der Kinderwagen, die Kinderwagen",
      "translations": {
        "english": "baby stroller",
        "ukrainian": "дитяча коляска",
        "polish": "wózek dziecięcy",
        "albanian": "karroca fëmije",
        "arabic": "عربة الأطفال"
      }
    },
    {
      "german": "das Fahrrad, die Fahrräder",
      "translations": {
        "english": "bicycle",
        "ukrainian": "велосипед",
        "polish": "rower",
        "albanian": "biçikleta",
        "arabic": "الدراجة"
      }
    },
    {
      "german": "die Tür, die Türen",
      "translations": {
        "english": "door",
        "ukrainian": "двері",
        "polish": "drzwi",
        "albanian": "dera",
        "arabic": "الباب"
      }
    },
    {
      "german": "die Hausnummer, die Hausnummern",
      "translations": {
        "english": "house number",
        "ukrainian": "номер будинку",
        "polish": "numer domu",
        "albanian": "numri i shtëpisë",
        "arabic": "رقم المنزل"
      }
    },
    {
      "german": "der Hund, die Hunde",
      "translations": {
        "english": "dog",
        "ukrainian": "собака",
        "polish": "pies",
        "albanian": "qeni",
        "arabic": "الكلب"
      }
    },
    {
      "german": "die Bitte, die Bitten",
      "translations": {
        "english": "request",
        "ukrainian": "прохання",
        "polish": "prośba",
        "albanian": "kërkesa",
        "arabic": "الطلب"
      }
    },
    {
      "german": "das Paket, die Pakete",
      "translations": {
        "english": "package",
        "ukrainian": "пакунок",
        "polish": "paczka",
        "albanian": "pakoja",
        "arabic": "الطرد"
      }
    },
    {
      "german": "das Päckchen, die Päckchen",
      "translations": {
        "english": "small package",
        "ukrainian": "посилка",
        "polish": "paczuszka",
        "albanian": "pakoja e vogël",
        "arabic": "الرزمة الصغيرة"
      }
    },
    {
      "german": "das Salz",
      "translations": {
        "english": "salt",
        "ukrainian": "сіль",
        "polish": "sól",
        "albanian": "kripa",
        "arabic": "الملح"
      }
    },
    {
      "german": "die Tasse, die Tassen",
      "translations": {
        "english": "cup",
        "ukrainian": "чашка",
        "polish": "filiżanka",
        "albanian": "filxhani",
        "arabic": "الكوب"
      }
    },
    {
      "german": "das Hoffest, die Hoffeste",
      "translations": {
        "english": "courtyard festival",
        "ukrainian": "свято у дворі",
        "polish": "święto na podwórzu",
        "albanian": "festa e oborrit",
        "arabic": "حفلة الفناء"
      }
    },
    {
      "german": "der Grill, die Grills",
      "translations": {
        "english": "grill",
        "ukrainian": "гриль",
        "polish": "grill",
        "albanian": "grilli",
        "arabic": "الشواية"
      }
    },
    {
      "german": "das Essen",
      "translations": {
        "english": "food/meal",
        "ukrainian": "їжа",
        "polish": "jedzenie",
        "albanian": "ushqimi",
        "arabic": "الطعام"
      }
    },
    {
      "german": "die Musik",
      "translations": {
        "english": "music",
        "ukrainian": "музика",
        "polish": "muzyka",
        "albanian": "muzika",
        "arabic": "الموسيقى"
      }
    },
    {
      "german": "der Elektriker, die Elektriker",
      "translations": {
        "english": "electrician",
        "ukrainian": "електрик",
        "polish": "elektryk",
        "albanian": "elektriku",
        "arabic": "الكهربائي"
      }
    },
    {
      "german": "die Hausverwaltung, die Hausverwaltungen",
      "translations": {
        "english": "property management",
        "ukrainian": "управління будинком",
        "polish": "zarząd domu",
        "albanian": "administrata e shtëpisë",
        "arabic": "إدارة المبنى"
      }
    },
    {
      "german": "der Absender, die Absender",
      "translations": {
        "english": "sender",
        "ukrainian": "відправник",
        "polish": "nadawca",
        "albanian": "dërguesi",
        "arabic": "المرسل"
      }
    },
    {
      "german": "der Empfänger, die Empfänger",
      "translations": {
        "english": "recipient",
        "ukrainian": "одержувач",
        "polish": "odbiorca",
        "albanian": "marrësi",
        "arabic": "المستلم"
      }
    },
    {
      "german": "der Gruß, die Grüße",
      "translations": {
        "english": "greeting",
        "ukrainian": "привітання",
        "polish": "pozdrowienia",
        "albanian": "përshëndetja",
        "arabic": "التحية"
      }
    },
    {
      "german": "die Unterschrift, die Unterschriften",
      "translations": {
        "english": "signature",
        "ukrainian": "підпис",
        "polish": "podpis",
        "albanian": "nënshkrimi",
        "arabic": "التوقيع"
      }
    },
    {
      "german": "die Anrede, die Anreden",
      "translations": {
        "english": "salutation",
        "ukrainian": "звернення",
        "polish": "zwrot grzecznościowy",
        "albanian": "përshëndetja",
        "arabic": "التحية"
      }
    }
  ]
});

export const A1_2_ALL_SECTIONS = Object.keys(a1_2_Vocabulary).map(Number);