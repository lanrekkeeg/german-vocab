import { Card, Translations } from '../../../types';

// B1.2 Vocabulary organized by module (7-12)
// Module 7: Reisen und Verkehr (Travel and Transport)
// Module 8: Ein neuer Start (A New Start)
// Module 9: Natur und Umwelt (Nature and Environment)
// Module 10: Gesund werden und bleiben (Getting and Staying Healthy)
// Module 11: Politik und Gesellschaft (Politics and Society)
// Module 12: Wie wird es sein? (How Will It Be?)

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
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/b1.2/words/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const b1_2_Vocabulary: Record<number, Card[]> = addAudioPaths({

  // Module 7: Reisen und Verkehr (Travel and Transport)
  // Extracted from AB Module 7 "Wichtige Wörter" (pages 92-94) and KB Module 7
  7: [
    // === General Travel ===
    {
      german: "der Strandurlaub, die Strandurlaube",
      translations: {
        english: "beach vacation",
        ukrainian: "пляжний відпочинок",
        polish: "wakacje na plaży",
        albanian: "pushimet në plazh",
        arabic: "عطلة الشاطئ",
        italian: "vacanza al mare",
        serbian: "одмор на плажи"
      }
    },
    {
      german: "der Freizeitpark, die Freizeitparks",
      translations: {
        english: "amusement park",
        ukrainian: "парк розваг",
        polish: "park rozrywki",
        albanian: "parku i argëtimit",
        arabic: "مدينة الملاهي",
        italian: "parco divertimenti",
        serbian: "забавни парк"
      }
    },
    {
      german: "der Wellnessurlaub, die Wellnessurlaube",
      translations: {
        english: "wellness vacation",
        ukrainian: "оздоровчий відпочинок",
        polish: "wakacje wellness",
        albanian: "pushime wellness",
        arabic: "عطلة صحية",
        italian: "vacanza benessere",
        serbian: "велнес одмор"
      }
    },
    {
      german: "der Campingurlaub, die Campingurlaube",
      translations: {
        english: "camping vacation",
        ukrainian: "відпочинок у наметі",
        polish: "wakacje na campingu",
        albanian: "pushime kamping",
        arabic: "عطلة التخييم",
        italian: "vacanza in campeggio",
        serbian: "камповање"
      }
    },

    // === A Urlaubsplanung (Vacation Planning) ===
    {
      german: "die Urlaubsplanung, die Urlaubsplanungen",
      translations: {
        english: "vacation planning",
        ukrainian: "планування відпустки",
        polish: "planowanie urlopu",
        albanian: "planifikimi i pushimeve",
        arabic: "التخطيط للعطلة",
        italian: "pianificazione delle vacanze",
        serbian: "планирање одмора"
      }
    },
    {
      german: "die Gruppenreise, die Gruppenreisen",
      translations: {
        english: "group trip",
        ukrainian: "групова поїздка",
        polish: "wycieczka grupowa",
        albanian: "udhëtim në grup",
        arabic: "رحلة جماعية",
        italian: "viaggio di gruppo",
        serbian: "групно путовање"
      }
    },
    {
      german: "die Städtereise, die Städtereisen",
      translations: {
        english: "city trip",
        ukrainian: "поїздка містом",
        polish: "wycieczka do miasta",
        albanian: "udhëtim në qytet",
        arabic: "رحلة المدينة",
        italian: "viaggio in città",
        serbian: "путовање у град"
      }
    },
    {
      german: "die Kreuzfahrt, die Kreuzfahrten",
      translations: {
        english: "cruise",
        ukrainian: "круїз",
        polish: "rejs wycieczkowy",
        albanian: "lundrim",
        arabic: "رحلة بحرية",
        italian: "crociera",
        serbian: "крстарење"
      }
    },
    {
      german: "die Abwechslung, die Abwechslungen",
      translations: {
        english: "variety, change",
        ukrainian: "різноманітність",
        polish: "urozmaicenie",
        albanian: "ndryshimi",
        arabic: "التنوع",
        italian: "varietà",
        serbian: "промена"
      }
    },
    {
      german: "derselbe/dasselbe/dieselbe",
      translations: {
        english: "the same",
        ukrainian: "той самий",
        polish: "ten sam",
        albanian: "i njëjti",
        arabic: "نفس",
        italian: "lo stesso",
        serbian: "исти"
      }
    },

    // === B Meldungen und Durchsagen (Announcements) ===
    {
      german: "die Durchsage, die Durchsagen",
      translations: {
        english: "announcement",
        ukrainian: "оголошення",
        polish: "komunikat",
        albanian: "njoftimi",
        arabic: "إعلان",
        italian: "annuncio",
        serbian: "објава"
      }
    },
    {
      german: "die Bauarbeiten (Pl.)",
      translations: {
        english: "construction work",
        ukrainian: "будівельні роботи",
        polish: "roboty budowlane",
        albanian: "punimet ndërtimore",
        arabic: "أعمال البناء",
        italian: "lavori di costruzione",
        serbian: "грађевински радови"
      }
    },
    {
      german: "die Ausfahrt, die Ausfahrten",
      translations: {
        english: "exit (highway)",
        ukrainian: "з'їзд",
        polish: "zjazd",
        albanian: "dalja",
        arabic: "المخرج",
        italian: "uscita",
        serbian: "излаз"
      }
    },
    {
      german: "der Fahrstreifen, die Fahrstreifen",
      translations: {
        english: "lane",
        ukrainian: "смуга руху",
        polish: "pas ruchu",
        albanian: "korsia",
        arabic: "المسار",
        italian: "corsia",
        serbian: "трака"
      }
    },
    {
      german: "sperren",
      translations: {
        english: "to block, to close",
        ukrainian: "перекривати",
        polish: "zamykać",
        albanian: "të bllokosh",
        arabic: "يغلق",
        italian: "bloccare",
        serbian: "затворити"
      }
    },
    {
      german: "die Umleitung, die Umleitungen",
      translations: {
        english: "detour",
        ukrainian: "об'їзд",
        polish: "objazd",
        albanian: "devijimi",
        arabic: "الطريق البديل",
        italian: "deviazione",
        serbian: "обилазница"
      }
    },
    {
      german: "ausschildern",
      translations: {
        english: "to signpost",
        ukrainian: "позначати знаками",
        polish: "oznakować",
        albanian: "të sinjalizosh",
        arabic: "يضع لافتات",
        italian: "segnalare",
        serbian: "означити"
      }
    },
    {
      german: "der Schienenersatzverkehr (Sg.)",
      translations: {
        english: "rail replacement service",
        ukrainian: "автобусне сполучення замість поїзда",
        polish: "komunikacja zastępcza",
        albanian: "transporti zëvendësues",
        arabic: "خدمة النقل البديلة",
        italian: "servizio sostitutivo",
        serbian: "замена за воз"
      }
    },
    {
      german: "der Gegenstand, die Gegenstände",
      translations: {
        english: "object",
        ukrainian: "предмет",
        polish: "przedmiot",
        albanian: "objekti",
        arabic: "الغرض",
        italian: "oggetto",
        serbian: "предмет"
      }
    },
    {
      german: "die Fahrbahn, die Fahrbahnen",
      translations: {
        english: "roadway, carriageway",
        ukrainian: "проїжджа частина",
        polish: "jezdnia",
        albanian: "rruga",
        arabic: "الطريق",
        italian: "carreggiata",
        serbian: "коловоз"
      }
    },
    {
      german: "der Falschfahrer, die Falschfahrer",
      translations: {
        english: "wrong-way driver",
        ukrainian: "водій-порушник",
        polish: "kierowca jadący pod prąd",
        albanian: "shoferi i gabuar",
        arabic: "السائق الخاطئ",
        italian: "contromano",
        serbian: "возач у погрешном смеру"
      }
    },
    {
      german: "die Demonstration, die Demonstrationen",
      translations: {
        english: "demonstration",
        ukrainian: "демонстрація",
        polish: "demonstracja",
        albanian: "demonstrata",
        arabic: "المظاهرة",
        italian: "manifestazione",
        serbian: "демонстрација"
      }
    },
    {
      german: "der Bahnverkehr (Sg.)",
      translations: {
        english: "rail traffic",
        ukrainian: "залізничний рух",
        polish: "ruch kolejowy",
        albanian: "trafiku hekurudhor",
        arabic: "حركة القطارات",
        italian: "traffico ferroviario",
        serbian: "железнички саобраћај"
      }
    },
    {
      german: "streiken",
      translations: {
        english: "to strike",
        ukrainian: "страйкувати",
        polish: "strajkować",
        albanian: "të bësh grevë",
        arabic: "يضرب",
        italian: "scioperare",
        serbian: "штрајковати"
      }
    },
    {
      german: "vorsichtig",
      translations: {
        english: "careful",
        ukrainian: "обережний",
        polish: "ostrożny",
        albanian: "i kujdesshëm",
        arabic: "حذر",
        italian: "prudente",
        serbian: "опрезан"
      }
    },
    {
      german: "öffentliche Verkehrsmittel (Pl.)",
      translations: {
        english: "public transport",
        ukrainian: "громадський транспорт",
        polish: "komunikacja miejska",
        albanian: "transporti publik",
        arabic: "وسائل النقل العام",
        italian: "mezzi pubblici",
        serbian: "јавни превоз"
      }
    },
    {
      german: "der Stau, die Staus",
      translations: {
        english: "traffic jam",
        ukrainian: "затор",
        polish: "korek",
        albanian: "bllokimi i trafikut",
        arabic: "الازدحام المروري",
        italian: "ingorgo",
        serbian: "гужва"
      }
    },
    {
      german: "die Autobahn, die Autobahnen",
      translations: {
        english: "highway, motorway",
        ukrainian: "автобан",
        polish: "autostrada",
        albanian: "autostrada",
        arabic: "الطريق السريع",
        italian: "autostrada",
        serbian: "аутопут"
      }
    },
    {
      german: "der Flughafen, die Flughäfen",
      translations: {
        english: "airport",
        ukrainian: "аеропорт",
        polish: "lotnisko",
        albanian: "aeroporti",
        arabic: "المطار",
        italian: "aeroporto",
        serbian: "аеродром"
      }
    },

    // === C Rund ums Auto (About the Car) ===
    {
      german: "der Motor, die Motoren",
      translations: {
        english: "engine",
        ukrainian: "двигун",
        polish: "silnik",
        albanian: "motori",
        arabic: "المحرك",
        italian: "motore",
        serbian: "мотор"
      }
    },
    {
      german: "der Kofferraum, die Kofferräume",
      translations: {
        english: "trunk",
        ukrainian: "багажник",
        polish: "bagażnik",
        albanian: "bagazhi",
        arabic: "صندوق السيارة",
        italian: "bagagliaio",
        serbian: "пртљажник"
      }
    },
    {
      german: "der Scheibenwischer, die Scheibenwischer",
      translations: {
        english: "windshield wiper",
        ukrainian: "склоочисник",
        polish: "wycieraczka",
        albanian: "fshirësi i xhamit",
        arabic: "ماسحة الزجاج",
        italian: "tergicristallo",
        serbian: "брисач"
      }
    },
    {
      german: "das Lenkrad, die Lenkräder",
      translations: {
        english: "steering wheel",
        ukrainian: "кермо",
        polish: "kierownica",
        albanian: "timoni",
        arabic: "عجلة القيادة",
        italian: "volante",
        serbian: "волан"
      }
    },
    {
      german: "die Kupplung, die Kupplungen",
      translations: {
        english: "clutch",
        ukrainian: "зчеплення",
        polish: "sprzęgło",
        albanian: "friksioni",
        arabic: "القابض",
        italian: "frizione",
        serbian: "квачило"
      }
    },
    {
      german: "der Kindersitz, die Kindersitze",
      translations: {
        english: "child seat",
        ukrainian: "дитяче крісло",
        polish: "fotelik dziecięcy",
        albanian: "ulëse fëmijësh",
        arabic: "مقعد الأطفال",
        italian: "seggiolino per bambini",
        serbian: "дечије седиште"
      }
    },
    {
      german: "der Sicherheitsgurt, die Sicherheitsgurte",
      translations: {
        english: "seat belt",
        ukrainian: "ремінь безпеки",
        polish: "pas bezpieczeństwa",
        albanian: "rripi i sigurimit",
        arabic: "حزام الأمان",
        italian: "cintura di sicurezza",
        serbian: "сигурносни појас"
      }
    },
    {
      german: "der Scheinwerfer, die Scheinwerfer",
      translations: {
        english: "headlight",
        ukrainian: "фара",
        polish: "reflektor",
        albanian: "fari",
        arabic: "المصباح الأمامي",
        italian: "faro",
        serbian: "фар"
      }
    },
    {
      german: "der Seitenspiegel, die Seitenspiegel",
      translations: {
        english: "side mirror",
        ukrainian: "бічне дзеркало",
        polish: "lusterko boczne",
        albanian: "pasqyra anësore",
        arabic: "المرآة الجانبية",
        italian: "specchietto laterale",
        serbian: "бочни ретровизор"
      }
    },
    {
      german: "das Gaspedal, die Gaspedale",
      translations: {
        english: "gas pedal, accelerator",
        ukrainian: "педаль газу",
        polish: "pedał gazu",
        albanian: "pedali i gazit",
        arabic: "دواسة الوقود",
        italian: "acceleratore",
        serbian: "педала гаса"
      }
    },
    {
      german: "das Warndreieck, die Warndreiecke",
      translations: {
        english: "warning triangle",
        ukrainian: "аварійний трикутник",
        polish: "trójkąt ostrzegawczy",
        albanian: "trekëndëshi paralajmërues",
        arabic: "مثلث التحذير",
        italian: "triangolo di emergenza",
        serbian: "сигурносни троугао"
      }
    },
    {
      german: "der Erste-Hilfe-Kasten, die Erste-Hilfe-Kästen",
      translations: {
        english: "first aid kit",
        ukrainian: "аптечка",
        polish: "apteczka",
        albanian: "kutia e ndihmës së parë",
        arabic: "حقيبة الإسعافات الأولية",
        italian: "cassetta del pronto soccorso",
        serbian: "кутија за прву помоћ"
      }
    },
    {
      german: "die Windschutzscheibe, die Windschutzscheiben",
      translations: {
        english: "windshield",
        ukrainian: "лобове скло",
        polish: "przednia szyba",
        albanian: "xhami i përparmë",
        arabic: "الزجاج الأمامي",
        italian: "parabrezza",
        serbian: "ветробранско стакло"
      }
    },
    {
      german: "der Blinker, die Blinker",
      translations: {
        english: "turn signal, indicator",
        ukrainian: "поворотник",
        polish: "kierunkowskaz",
        albanian: "sinjalizuesi",
        arabic: "ضوء الانعطاف",
        italian: "freccia",
        serbian: "жмигавац"
      }
    },
    {
      german: "die Motorhaube, die Motorhauben",
      translations: {
        english: "hood (of car)",
        ukrainian: "капот",
        polish: "maska",
        albanian: "kapaku i motorit",
        arabic: "غطاء المحرك",
        italian: "cofano",
        serbian: "хауба"
      }
    },
    {
      german: "der Reifen, die Reifen",
      translations: {
        english: "tire",
        ukrainian: "шина",
        polish: "opona",
        albanian: "goma",
        arabic: "الإطار",
        italian: "pneumatico",
        serbian: "гума"
      }
    },
    {
      german: "der Tank, die Tanks",
      translations: {
        english: "tank",
        ukrainian: "бак",
        polish: "zbiornik",
        albanian: "rezervuari",
        arabic: "الخزان",
        italian: "serbatoio",
        serbian: "резервоар"
      }
    },
    {
      german: "tanken",
      translations: {
        english: "to fill up, to refuel",
        ukrainian: "заправляти",
        polish: "tankować",
        albanian: "të mbushësh",
        arabic: "يملأ الوقود",
        italian: "fare benzina",
        serbian: "сипати гориво"
      }
    },
    {
      german: "die Bremse, die Bremsen",
      translations: {
        english: "brake",
        ukrainian: "гальмо",
        polish: "hamulec",
        albanian: "freni",
        arabic: "الفرامل",
        italian: "freno",
        serbian: "кочница"
      }
    },
    {
      german: "der Wagenheber, die Wagenheber",
      translations: {
        english: "car jack",
        ukrainian: "домкрат",
        polish: "podnośnik",
        albanian: "kriku",
        arabic: "رافعة السيارة",
        italian: "cric",
        serbian: "дизалица"
      }
    },
    {
      german: "der Schalthebel, die Schalthebel",
      translations: {
        english: "gear shift",
        ukrainian: "важіль перемикання передач",
        polish: "dźwignia zmiany biegów",
        albanian: "levë e marsheve",
        arabic: "ذراع التروس",
        italian: "leva del cambio",
        serbian: "мењач"
      }
    },
    {
      german: "der Ölstand (Sg.)",
      translations: {
        english: "oil level",
        ukrainian: "рівень масла",
        polish: "poziom oleju",
        albanian: "niveli i vajit",
        arabic: "مستوى الزيت",
        italian: "livello dell'olio",
        serbian: "ниво уља"
      }
    },
    {
      german: "die Fahrzeugpapiere (Pl.)",
      translations: {
        english: "vehicle documents",
        ukrainian: "документи на автомобіль",
        polish: "dokumenty pojazdu",
        albanian: "dokumentet e automjetit",
        arabic: "وثائق السيارة",
        italian: "documenti del veicolo",
        serbian: "папири за возило"
      }
    },
    {
      german: "der Zeuge, die Zeugen",
      translations: {
        english: "witness",
        ukrainian: "свідок",
        polish: "świadek",
        albanian: "dëshmitari",
        arabic: "الشاهد",
        italian: "testimone",
        serbian: "сведок"
      }
    },
    {
      german: "befragen",
      translations: {
        english: "to question, to interview",
        ukrainian: "опитувати",
        polish: "przesłuchiwać",
        albanian: "të pyesësh",
        arabic: "يستجوب",
        italian: "interrogare",
        serbian: "испитивати"
      }
    },
    {
      german: "abschleppen",
      translations: {
        english: "to tow",
        ukrainian: "буксирувати",
        polish: "holować",
        albanian: "të tërheqësh",
        arabic: "يسحب",
        italian: "rimorchiare",
        serbian: "шлепати"
      }
    },
    {
      german: "umleiten",
      translations: {
        english: "to divert, to reroute",
        ukrainian: "перенаправляти",
        polish: "przekierowywać",
        albanian: "të devijosh",
        arabic: "يحول",
        italian: "deviare",
        serbian: "преусмерити"
      }
    },
    {
      german: "der Verletzte, die Verletzten",
      translations: {
        english: "injured person",
        ukrainian: "постраждалий",
        polish: "ranny",
        albanian: "i plagosuri",
        arabic: "المصاب",
        italian: "ferito",
        serbian: "повређени"
      }
    },
    {
      german: "die Warnweste, die Warnwesten",
      translations: {
        english: "safety vest",
        ukrainian: "світловідбиваючий жилет",
        polish: "kamizelka odblaskowa",
        albanian: "jeleku reflektues",
        arabic: "سترة السلامة",
        italian: "giubbotto catarifrangente",
        serbian: "сигурносни прслук"
      }
    },
    {
      german: "der Pannendienst, die Pannendienste",
      translations: {
        english: "breakdown service",
        ukrainian: "служба техдопомоги",
        polish: "pomoc drogowa",
        albanian: "shërbimi i ndihmës rrugore",
        arabic: "خدمة الأعطال",
        italian: "soccorso stradale",
        serbian: "шлеп служба"
      }
    },
    {
      german: "die Reifenpanne, die Reifenpannen",
      translations: {
        english: "flat tire",
        ukrainian: "прокол шини",
        polish: "przebita opona",
        albanian: "goma e shpuar",
        arabic: "ثقب الإطار",
        italian: "foratura",
        serbian: "пробушена гума"
      }
    },

    // === D Zeitungsmeldungen (News Reports) ===
    {
      german: "die Zeitungsmeldung, die Zeitungsmeldungen",
      translations: {
        english: "newspaper report",
        ukrainian: "газетне повідомлення",
        polish: "wiadomość prasowa",
        albanian: "lajmi i gazetës",
        arabic: "خبر صحفي",
        italian: "notizia di giornale",
        serbian: "новинска вест"
      }
    },
    {
      german: "das Verkehrschaos (Sg.)",
      translations: {
        english: "traffic chaos",
        ukrainian: "транспортний хаос",
        polish: "chaos komunikacyjny",
        albanian: "kaosi i trafikut",
        arabic: "فوضى المرور",
        italian: "caos del traffico",
        serbian: "саобраћајни хаос"
      }
    },
    {
      german: "der Ferienbeginn (Sg.)",
      translations: {
        english: "start of holidays",
        ukrainian: "початок канікул",
        polish: "początek wakacji",
        albanian: "fillimi i pushimeve",
        arabic: "بداية العطلة",
        italian: "inizio delle vacanze",
        serbian: "почетак распуста"
      }
    },
    {
      german: "die Raststätte, die Raststätten",
      translations: {
        english: "rest stop, service area",
        ukrainian: "придорожній сервіс",
        polish: "stacja obsługi",
        albanian: "pika e pushimit",
        arabic: "محطة استراحة",
        italian: "area di servizio",
        serbian: "одмориште"
      }
    },
    {
      german: "überfüllt",
      translations: {
        english: "overcrowded",
        ukrainian: "переповнений",
        polish: "przepełniony",
        albanian: "i mbingarkuar",
        arabic: "مكتظ",
        italian: "sovraffollato",
        serbian: "препун"
      }
    },
    {
      german: "die Warteschlange, die Warteschlangen",
      translations: {
        english: "queue, line",
        ukrainian: "черга",
        polish: "kolejka",
        albanian: "radha",
        arabic: "طابور الانتظار",
        italian: "coda",
        serbian: "ред чекања"
      }
    },
    {
      german: "das Unfallopfer, die Unfallopfer",
      translations: {
        english: "accident victim",
        ukrainian: "постраждалий у ДТП",
        polish: "ofiara wypadku",
        albanian: "viktima e aksidentit",
        arabic: "ضحية الحادث",
        italian: "vittima dell'incidente",
        serbian: "жртва несреће"
      }
    },
    {
      german: "verursachen",
      translations: {
        english: "to cause",
        ukrainian: "спричиняти",
        polish: "powodować",
        albanian: "të shkaktosh",
        arabic: "يتسبب",
        italian: "causare",
        serbian: "проузроковати"
      }
    },
    {
      german: "das Gesetz, die Gesetze",
      translations: {
        english: "law",
        ukrainian: "закон",
        polish: "prawo",
        albanian: "ligji",
        arabic: "القانون",
        italian: "legge",
        serbian: "закон"
      }
    },
    {
      german: "der Personenschaden, die Personenschäden",
      translations: {
        english: "personal injury",
        ukrainian: "тілесні ушкодження",
        polish: "obrażenia ciała",
        albanian: "dëmtimi personal",
        arabic: "الإصابة الشخصية",
        italian: "danni alle persone",
        serbian: "телесна повреда"
      }
    },
    {
      german: "gesetzlich vorgeschrieben",
      translations: {
        english: "legally required",
        ukrainian: "передбачено законом",
        polish: "prawnie wymagane",
        albanian: "i kërkuar ligjërisht",
        arabic: "مطلوب قانونياً",
        italian: "obbligatorio per legge",
        serbian: "законски прописано"
      }
    },
    {
      german: "das Fahrzeug, die Fahrzeuge",
      translations: {
        english: "vehicle",
        ukrainian: "транспортний засіб",
        polish: "pojazd",
        albanian: "automjeti",
        arabic: "المركبة",
        italian: "veicolo",
        serbian: "возило"
      }
    },
    {
      german: "der Diebstahl (Sg.)",
      translations: {
        english: "theft",
        ukrainian: "крадіжка",
        polish: "kradzież",
        albanian: "vjedhja",
        arabic: "السرقة",
        italian: "furto",
        serbian: "крађа"
      }
    },
    {
      german: "der Brand, die Brände",
      translations: {
        english: "fire",
        ukrainian: "пожежа",
        polish: "pożar",
        albanian: "zjarri",
        arabic: "الحريق",
        italian: "incendio",
        serbian: "пожар"
      }
    },
    {
      german: "das Unwetter, die Unwetter",
      translations: {
        english: "storm, severe weather",
        ukrainian: "негода",
        polish: "burza",
        albanian: "stuhia",
        arabic: "العاصفة",
        italian: "tempesta",
        serbian: "невреме"
      }
    },

    // === E Versicherung und Steuern für Autos (Insurance and Taxes) ===
    {
      german: "die Kfz-Steuer, die Kfz-Steuern",
      translations: {
        english: "vehicle tax",
        ukrainian: "транспортний податок",
        polish: "podatek od pojazdu",
        albanian: "taksa e automjetit",
        arabic: "ضريبة السيارة",
        italian: "tassa automobilistica",
        serbian: "порез на возило"
      }
    },
    {
      german: "die Kfz-Haftpflichtversicherung, die Kfz-Haftpflichtversicherungen",
      translations: {
        english: "vehicle liability insurance",
        ukrainian: "страхування цивільної відповідальності",
        polish: "ubezpieczenie OC",
        albanian: "sigurimi i automjetit",
        arabic: "التأمين على المسؤولية",
        italian: "assicurazione RC auto",
        serbian: "осигурање од одговорности"
      }
    },
    {
      german: "die Teilkaskoversicherung, die Teilkaskoversicherungen",
      translations: {
        english: "partial coverage insurance",
        ukrainian: "часткове каско",
        polish: "ubezpieczenie AC częściowe",
        albanian: "sigurimi i pjesshëm kasko",
        arabic: "التأمين الجزئي",
        italian: "assicurazione parziale",
        serbian: "делимично каско осигурање"
      }
    },
    {
      german: "die Vollkaskoversicherung, die Vollkaskoversicherungen",
      translations: {
        english: "comprehensive insurance",
        ukrainian: "повне каско",
        polish: "ubezpieczenie AC pełne",
        albanian: "sigurimi i plotë kasko",
        arabic: "التأمين الشامل",
        italian: "assicurazione casco totale",
        serbian: "потпуно каско осигурање"
      }
    },
    {
      german: "das Benzin (Sg.)",
      translations: {
        english: "gasoline, petrol",
        ukrainian: "бензин",
        polish: "benzyna",
        albanian: "benzina",
        arabic: "البنزين",
        italian: "benzina",
        serbian: "бензин"
      }
    },
    {
      german: "der Diesel (Sg.)",
      translations: {
        english: "diesel",
        ukrainian: "дизель",
        polish: "olej napędowy",
        albanian: "nafta",
        arabic: "الديزل",
        italian: "diesel",
        serbian: "дизел"
      }
    },
    {
      german: "außerdem",
      translations: {
        english: "besides, moreover",
        ukrainian: "крім того",
        polish: "poza tym",
        albanian: "përveç kësaj",
        arabic: "بالإضافة إلى ذلك",
        italian: "inoltre",
        serbian: "осим тога"
      }
    },

    // === Bicycle Parts ===
    {
      german: "das Fahrrad, die Fahrräder",
      translations: {
        english: "bicycle",
        ukrainian: "велосипед",
        polish: "rower",
        albanian: "biçikleta",
        arabic: "الدراجة",
        italian: "bicicletta",
        serbian: "бицикл"
      }
    },
    {
      german: "das Rücklicht, die Rücklichter",
      translations: {
        english: "rear light",
        ukrainian: "заднє світло",
        polish: "tylne światło",
        albanian: "drita e pasme",
        arabic: "الضوء الخلفي",
        italian: "luce posteriore",
        serbian: "задње светло"
      }
    },
    {
      german: "das Pedal, die Pedale",
      translations: {
        english: "pedal",
        ukrainian: "педаль",
        polish: "pedał",
        albanian: "pedali",
        arabic: "الدواسة",
        italian: "pedale",
        serbian: "педала"
      }
    },
    {
      german: "der Sattel, die Sättel",
      translations: {
        english: "saddle, seat",
        ukrainian: "сідло",
        polish: "siodełko",
        albanian: "shalë",
        arabic: "السرج",
        italian: "sella",
        serbian: "седло"
      }
    },
    {
      german: "der Gepäckträger, die Gepäckträger",
      translations: {
        english: "luggage rack",
        ukrainian: "багажник",
        polish: "bagażnik",
        albanian: "mbajtësi i bagazhit",
        arabic: "حامل الأمتعة",
        italian: "portapacchi",
        serbian: "носач пртљага"
      }
    },
    {
      german: "die Gangschaltung, die Gangschaltungen",
      translations: {
        english: "gear shift (bicycle)",
        ukrainian: "перемикач швидкостей",
        polish: "przerzutka",
        albanian: "ndërrimi i marsheve",
        arabic: "ناقل السرعات",
        italian: "cambio",
        serbian: "мењач брзина"
      }
    },
    {
      german: "der Fahrradhelm, die Fahrradhelme",
      translations: {
        english: "bicycle helmet",
        ukrainian: "велосипедний шолом",
        polish: "kask rowerowy",
        albanian: "helmeta e biçikletës",
        arabic: "خوذة الدراجة",
        italian: "casco da bici",
        serbian: "бициклистичка кацига"
      }
    },
    {
      german: "das Vorderlicht, die Vorderlichter",
      translations: {
        english: "front light",
        ukrainian: "переднє світло",
        polish: "przednie światło",
        albanian: "drita e përparme",
        arabic: "الضوء الأمامي",
        italian: "luce anteriore",
        serbian: "предње светло"
      }
    },
    {
      german: "die Speiche, die Speichen",
      translations: {
        english: "spoke",
        ukrainian: "спиця",
        polish: "szprycha",
        albanian: "rrezja",
        arabic: "السلك",
        italian: "raggio",
        serbian: "жбица"
      }
    },
    {
      german: "das Ventil, die Ventile",
      translations: {
        english: "valve",
        ukrainian: "вентиль",
        polish: "wentyl",
        albanian: "valvula",
        arabic: "الصمام",
        italian: "valvola",
        serbian: "вентил"
      }
    },
    {
      german: "der Dynamo, die Dynamos",
      translations: {
        english: "dynamo",
        ukrainian: "динамо",
        polish: "dynamo",
        albanian: "dinamo",
        arabic: "الدينامو",
        italian: "dinamo",
        serbian: "динамо"
      }
    },
    {
      german: "der Lenker, die Lenker",
      translations: {
        english: "handlebar",
        ukrainian: "кермо",
        polish: "kierownica",
        albanian: "timoni",
        arabic: "المقود",
        italian: "manubrio",
        serbian: "волан"
      }
    },
    {
      german: "die Klingel, die Klingeln",
      translations: {
        english: "bell",
        ukrainian: "дзвінок",
        polish: "dzwonek",
        albanian: "zilja",
        arabic: "الجرس",
        italian: "campanello",
        serbian: "звонце"
      }
    },
    {
      german: "die Kette, die Ketten",
      translations: {
        english: "chain",
        ukrainian: "ланцюг",
        polish: "łańcuch",
        albanian: "zinxhiri",
        arabic: "السلسلة",
        italian: "catena",
        serbian: "ланац"
      }
    },
    {
      german: "die Fahrradtasche, die Fahrradtaschen",
      translations: {
        english: "bicycle bag",
        ukrainian: "велосипедна сумка",
        polish: "torba rowerowa",
        albanian: "çanta e biçikletës",
        arabic: "حقيبة الدراجة",
        italian: "borsa da bici",
        serbian: "бициклистичка торба"
      }
    },
    {
      german: "die Luftpumpe, die Luftpumpen",
      translations: {
        english: "air pump",
        ukrainian: "насос",
        polish: "pompka",
        albanian: "pompa e ajrit",
        arabic: "مضخة الهواء",
        italian: "pompa",
        serbian: "пумпа за ваздух"
      }
    }
  ]
,

  // Module 8: Ein neuer Start (A New Start)
  // Extracted from AB Module 8 "Wichtige Wörter" (pages 104-106)
  8: [
    // === General/Intro ===
    {
      german: "der Start, die Starts",
      translations: {
        english: "start, beginning",
        ukrainian: "старт, початок",
        polish: "start, początek",
        albanian: "fillimi",
        arabic: "البداية",
        italian: "inizio",
        serbian: "почетак"
      }
    },
    {
      german: "der Inhaber, die Inhaber",
      translations: {
        english: "owner, proprietor",
        ukrainian: "власник",
        polish: "właściciel",
        albanian: "pronari",
        arabic: "المالك",
        italian: "proprietario",
        serbian: "власник"
      }
    },
    {
      german: "leiten",
      translations: {
        english: "to lead, to manage",
        ukrainian: "керувати",
        polish: "kierować",
        albanian: "të drejtosh",
        arabic: "يدير",
        italian: "dirigere",
        serbian: "водити"
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
      german: "hart",
      translations: {
        english: "hard, tough",
        ukrainian: "важкий",
        polish: "ciężki",
        albanian: "i vështirë",
        arabic: "صعب",
        italian: "duro",
        serbian: "тешко"
      }
    },
    {
      german: "weiterempfehlen",
      translations: {
        english: "to recommend",
        ukrainian: "рекомендувати",
        polish: "polecać dalej",
        albanian: "të rekomandosh",
        arabic: "يوصي",
        italian: "raccomandare",
        serbian: "препоручити"
      }
    },
    {
      german: "die Verantwortung (Sg.)",
      translations: {
        english: "responsibility",
        ukrainian: "відповідальність",
        polish: "odpowiedzialność",
        albanian: "përgjegjësia",
        arabic: "المسؤولية",
        italian: "responsabilità",
        serbian: "одговорност"
      }
    },
    {
      german: "Verantwortung tragen",
      translations: {
        english: "to bear responsibility",
        ukrainian: "нести відповідальність",
        polish: "ponosić odpowiedzialność",
        albanian: "të mbash përgjegjësi",
        arabic: "يتحمل المسؤولية",
        italian: "assumersi la responsabilità",
        serbian: "сносити одговорност"
      }
    },
    {
      german: "Entscheidungen treffen",
      translations: {
        english: "to make decisions",
        ukrainian: "приймати рішення",
        polish: "podejmować decyzje",
        albanian: "të marrësh vendime",
        arabic: "يتخذ قرارات",
        italian: "prendere decisioni",
        serbian: "доносити одлуке"
      }
    },
    {
      german: "sich selbstständig machen",
      translations: {
        english: "to become self-employed",
        ukrainian: "стати самозайнятим",
        polish: "założyć własną działalność",
        albanian: "të bëhesh i pavarur",
        arabic: "يصبح مستقلاً",
        italian: "mettersi in proprio",
        serbian: "постати самосталан"
      }
    },
    {
      german: "frisch",
      translations: {
        english: "fresh",
        ukrainian: "свіжий",
        polish: "świeży",
        albanian: "i freskët",
        arabic: "طازج",
        italian: "fresco",
        serbian: "свеж"
      }
    },
    {
      german: "kaum",
      translations: {
        english: "hardly, barely",
        ukrainian: "ледве",
        polish: "ledwo",
        albanian: "mezi",
        arabic: "بالكاد",
        italian: "appena",
        serbian: "једва"
      }
    },
    {
      german: "entwickeln",
      translations: {
        english: "to develop",
        ukrainian: "розвивати",
        polish: "rozwijać",
        albanian: "të zhvillosh",
        arabic: "يطور",
        italian: "sviluppare",
        serbian: "развијати"
      }
    },
    {
      german: "sich lohnen",
      translations: {
        english: "to be worth it",
        ukrainian: "варто",
        polish: "opłacać się",
        albanian: "ia vlen",
        arabic: "يستحق",
        italian: "valere la pena",
        serbian: "исплатити се"
      }
    },
    {
      german: "ziemlich",
      translations: {
        english: "quite, fairly",
        ukrainian: "досить",
        polish: "dość",
        albanian: "mjaft",
        arabic: "إلى حد ما",
        italian: "abbastanza",
        serbian: "прилично"
      }
    },
    {
      german: "inzwischen",
      translations: {
        english: "meanwhile, in the meantime",
        ukrainian: "тим часом",
        polish: "w międzyczasie",
        albanian: "ndërkohë",
        arabic: "في غضون ذلك",
        italian: "nel frattempo",
        serbian: "у међувремену"
      }
    },
    {
      german: "überraschen",
      translations: {
        english: "to surprise",
        ukrainian: "дивувати",
        polish: "zaskakiwać",
        albanian: "të befasosh",
        arabic: "يفاجئ",
        italian: "sorprendere",
        serbian: "изненадити"
      }
    },

    // === A Existenzgründer (Entrepreneurs) ===
    {
      german: "das Berufsleben (Sg.)",
      translations: {
        english: "professional life",
        ukrainian: "професійне життя",
        polish: "życie zawodowe",
        albanian: "jeta profesionale",
        arabic: "الحياة المهنية",
        italian: "vita professionale",
        serbian: "професионални живот"
      }
    },
    {
      german: "der Existenzgründer, die Existenzgründer",
      translations: {
        english: "entrepreneur, founder",
        ukrainian: "підприємець-початківець",
        polish: "założyciel firmy",
        albanian: "themeluesi i biznesit",
        arabic: "مؤسس الشركة",
        italian: "imprenditore",
        serbian: "предузетник"
      }
    },
    {
      german: "die Unternehmensführung (Sg.)",
      translations: {
        english: "business management",
        ukrainian: "управління підприємством",
        polish: "zarządzanie przedsiębiorstwem",
        albanian: "menaxhimi i biznesit",
        arabic: "إدارة الأعمال",
        italian: "gestione aziendale",
        serbian: "пословно управљање"
      }
    },
    {
      german: "Das Geschäft läuft gut.",
      translations: {
        english: "Business is going well.",
        ukrainian: "Справи йдуть добре.",
        polish: "Interes idzie dobrze.",
        albanian: "Biznesi shkon mirë.",
        arabic: "العمل يسير بشكل جيد",
        italian: "Gli affari vanno bene.",
        serbian: "Посао иде добро."
      }
    },
    {
      german: "die Geschäftsidee, die Geschäftsideen",
      translations: {
        english: "business idea",
        ukrainian: "бізнес-ідея",
        polish: "pomysł na biznes",
        albanian: "ideja e biznesit",
        arabic: "فكرة العمل",
        italian: "idea imprenditoriale",
        serbian: "пословна идеја"
      }
    },
    {
      german: "der Businessplan, die Businesspläne",
      translations: {
        english: "business plan",
        ukrainian: "бізнес-план",
        polish: "biznesplan",
        albanian: "plani i biznesit",
        arabic: "خطة العمل",
        italian: "piano aziendale",
        serbian: "пословни план"
      }
    },
    {
      german: "der Geschäftsraum, die Geschäftsräume",
      translations: {
        english: "business premises",
        ukrainian: "офісне приміщення",
        polish: "lokal użytkowy",
        albanian: "hapësira e biznesit",
        arabic: "مباني تجارية",
        italian: "locale commerciale",
        serbian: "пословни простор"
      }
    },
    {
      german: "die Niederlassung, die Niederlassungen",
      translations: {
        english: "branch, subsidiary",
        ukrainian: "філія",
        polish: "oddział",
        albanian: "dega",
        arabic: "الفرع",
        italian: "filiale",
        serbian: "филијала"
      }
    },
    {
      german: "die Arbeitsstelle, die Arbeitsstellen",
      translations: {
        english: "job, workplace",
        ukrainian: "робоче місце",
        polish: "miejsce pracy",
        albanian: "vendi i punës",
        arabic: "مكان العمل",
        italian: "posto di lavoro",
        serbian: "радно место"
      }
    },
    {
      german: "einen Kredit aufnehmen",
      translations: {
        english: "to take out a loan",
        ukrainian: "взяти кредит",
        polish: "wziąć kredyt",
        albanian: "të marrësh kredi",
        arabic: "يأخذ قرضاً",
        italian: "accendere un prestito",
        serbian: "узети кредит"
      }
    },
    {
      german: "das Arbeitsrecht (Sg.)",
      translations: {
        english: "labor law",
        ukrainian: "трудове право",
        polish: "prawo pracy",
        albanian: "e drejta e punës",
        arabic: "قانون العمل",
        italian: "diritto del lavoro",
        serbian: "радно право"
      }
    },
    {
      german: "schwerfallen",
      translations: {
        english: "to be difficult",
        ukrainian: "важко даватися",
        polish: "sprawiać trudność",
        albanian: "të jetë e vështirë",
        arabic: "يصعب",
        italian: "essere difficile",
        serbian: "тешко падати"
      }
    },
    {
      german: "schließlich",
      translations: {
        english: "finally, after all",
        ukrainian: "врешті-решт",
        polish: "w końcu",
        albanian: "përfundimisht",
        arabic: "أخيراً",
        italian: "infine",
        serbian: "коначно"
      }
    },
    {
      german: "beschließen",
      translations: {
        english: "to decide",
        ukrainian: "вирішувати",
        polish: "postanawiać",
        albanian: "të vendosësh",
        arabic: "يقرر",
        italian: "decidere",
        serbian: "одлучити"
      }
    },
    {
      german: "der Beginn (Sg.)",
      translations: {
        english: "beginning",
        ukrainian: "початок",
        polish: "początek",
        albanian: "fillimi",
        arabic: "البداية",
        italian: "inizio",
        serbian: "почетак"
      }
    },
    {
      german: "der Kongress, die Kongresse",
      translations: {
        english: "congress, conference",
        ukrainian: "конгрес",
        polish: "kongres",
        albanian: "kongresi",
        arabic: "المؤتمر",
        italian: "congresso",
        serbian: "конгрес"
      }
    },
    {
      german: "stolz",
      translations: {
        english: "proud",
        ukrainian: "гордий",
        polish: "dumny",
        albanian: "krenar",
        arabic: "فخور",
        italian: "orgoglioso",
        serbian: "поносан"
      }
    },
    {
      german: "einen Wunsch erfüllen",
      translations: {
        english: "to fulfill a wish",
        ukrainian: "здійснити бажання",
        polish: "spełnić życzenie",
        albanian: "të plotësosh një dëshirë",
        arabic: "يحقق أمنية",
        italian: "realizzare un desiderio",
        serbian: "испунити жељу"
      }
    },

    // === B Der Senfsalon (The Mustard Salon) ===
    {
      german: "der Senf (Sg.)",
      translations: {
        english: "mustard",
        ukrainian: "гірчиця",
        polish: "musztarda",
        albanian: "mustarda",
        arabic: "الخردل",
        italian: "senape",
        serbian: "сенф"
      }
    },
    {
      german: "das Finanzamt, die Finanzämter",
      translations: {
        english: "tax office",
        ukrainian: "податкова інспекція",
        polish: "urząd skarbowy",
        albanian: "zyra e taksave",
        arabic: "مصلحة الضرائب",
        italian: "ufficio delle imposte",
        serbian: "пореска управа"
      }
    },
    {
      german: "das Gewerbe, die Gewerbe",
      translations: {
        english: "trade, business",
        ukrainian: "ремесло, бізнес",
        polish: "działalność gospodarcza",
        albanian: "tregtia",
        arabic: "التجارة",
        italian: "attività commerciale",
        serbian: "занат, посао"
      }
    },
    {
      german: "der Existenzgründerkurs, die Existenzgründerkurse",
      translations: {
        english: "startup course",
        ukrainian: "курс для підприємців",
        polish: "kurs dla zakładających firmę",
        albanian: "kursi për sipërmarrës",
        arabic: "دورة ريادة الأعمال",
        italian: "corso per imprenditori",
        serbian: "курс за предузетнике"
      }
    },
    {
      german: "die IHK (Industrie- und Handelskammer)",
      translations: {
        english: "Chamber of Commerce and Industry",
        ukrainian: "Торгово-промислова палата",
        polish: "Izba Przemysłowo-Handlowa",
        albanian: "Dhoma e Tregtisë dhe Industrisë",
        arabic: "غرفة التجارة والصناعة",
        italian: "Camera di Commercio e Industria",
        serbian: "Привредна комора"
      }
    },
    {
      german: "investieren",
      translations: {
        english: "to invest",
        ukrainian: "інвестувати",
        polish: "inwestować",
        albanian: "të investosh",
        arabic: "يستثمر",
        italian: "investire",
        serbian: "инвестирати"
      }
    },
    {
      german: "der Laden, die Läden",
      translations: {
        english: "shop, store",
        ukrainian: "магазин",
        polish: "sklep",
        albanian: "dyqani",
        arabic: "المتجر",
        italian: "negozio",
        serbian: "продавница"
      }
    },
    {
      german: "einrichten",
      translations: {
        english: "to set up, to furnish",
        ukrainian: "облаштовувати",
        polish: "urządzać",
        albanian: "të rregullosh",
        arabic: "يجهز",
        italian: "arredare",
        serbian: "уредити"
      }
    },

    // === C Der Weg in die Selbstständigkeit (Path to Self-Employment) ===
    {
      german: "die Finanzierung, die Finanzierungen",
      translations: {
        english: "financing",
        ukrainian: "фінансування",
        polish: "finansowanie",
        albanian: "financimi",
        arabic: "التمويل",
        italian: "finanziamento",
        serbian: "финансирање"
      }
    },
    {
      german: "die Planung, die Planungen",
      translations: {
        english: "planning",
        ukrainian: "планування",
        polish: "planowanie",
        albanian: "planifikimi",
        arabic: "التخطيط",
        italian: "pianificazione",
        serbian: "планирање"
      }
    },
    {
      german: "fachlich",
      translations: {
        english: "professional, technical",
        ukrainian: "фаховий",
        polish: "fachowy",
        albanian: "profesional",
        arabic: "مهني",
        italian: "professionale",
        serbian: "стручан"
      }
    },
    {
      german: "die Branche, die Branchen",
      translations: {
        english: "industry, sector",
        ukrainian: "галузь",
        polish: "branża",
        albanian: "sektori",
        arabic: "القطاع",
        italian: "settore",
        serbian: "грана"
      }
    },
    {
      german: "das Ziel, die Ziele",
      translations: {
        english: "goal, target",
        ukrainian: "мета",
        polish: "cel",
        albanian: "qëllimi",
        arabic: "الهدف",
        italian: "obiettivo",
        serbian: "циљ"
      }
    },
    {
      german: "ein Ziel erreichen",
      translations: {
        english: "to achieve a goal",
        ukrainian: "досягти мети",
        polish: "osiągnąć cel",
        albanian: "të arrish qëllimin",
        arabic: "يحقق هدفاً",
        italian: "raggiungere un obiettivo",
        serbian: "постићи циљ"
      }
    },
    {
      german: "entscheiden",
      translations: {
        english: "to decide",
        ukrainian: "вирішувати",
        polish: "decydować",
        albanian: "të vendosësh",
        arabic: "يقرر",
        italian: "decidere",
        serbian: "одлучити"
      }
    },
    {
      german: "der Ratschlag, die Ratschläge",
      translations: {
        english: "advice",
        ukrainian: "порада",
        polish: "rada",
        albanian: "këshilla",
        arabic: "النصيحة",
        italian: "consiglio",
        serbian: "савет"
      }
    },
    {
      german: "sich auskennen",
      translations: {
        english: "to know one's way around",
        ukrainian: "розбиратися",
        polish: "znać się na",
        albanian: "të njohësh mirë",
        arabic: "يعرف جيداً",
        italian: "intendersi",
        serbian: "разумети се"
      }
    },
    {
      german: "versuchen",
      translations: {
        english: "to try",
        ukrainian: "намагатися",
        polish: "próbować",
        albanian: "të provosh",
        arabic: "يحاول",
        italian: "provare",
        serbian: "покушати"
      }
    },
    {
      german: "beantworten",
      translations: {
        english: "to answer",
        ukrainian: "відповідати",
        polish: "odpowiadać",
        albanian: "të përgjigjesh",
        arabic: "يجيب",
        italian: "rispondere",
        serbian: "одговорити"
      }
    },
    {
      german: "der Experte, die Experten",
      translations: {
        english: "expert",
        ukrainian: "експерт",
        polish: "ekspert",
        albanian: "eksperti",
        arabic: "الخبير",
        italian: "esperto",
        serbian: "стручњак"
      }
    },
    {
      german: "das Weiterbildungsangebot, die Weiterbildungsangebote",
      translations: {
        english: "continuing education offer",
        ukrainian: "пропозиція підвищення кваліфікації",
        polish: "oferta szkoleniowa",
        albanian: "oferta e trajnimit",
        arabic: "عرض التعليم المستمر",
        italian: "offerta di formazione",
        serbian: "понуда за додатно образовање"
      }
    },
    {
      german: "die Finanzen (Pl.)",
      translations: {
        english: "finances",
        ukrainian: "фінанси",
        polish: "finanse",
        albanian: "financat",
        arabic: "المالية",
        italian: "finanze",
        serbian: "финансије"
      }
    },
    {
      german: "die Anregung, die Anregungen",
      translations: {
        english: "suggestion, stimulus",
        ukrainian: "пропозиція",
        polish: "sugestia",
        albanian: "sugjerimi",
        arabic: "الاقتراح",
        italian: "suggerimento",
        serbian: "предлог"
      }
    },
    {
      german: "der Plan, die Pläne",
      translations: {
        english: "plan",
        ukrainian: "план",
        polish: "plan",
        albanian: "plani",
        arabic: "الخطة",
        italian: "piano",
        serbian: "план"
      }
    },
    {
      german: "die Dienstleistung, die Dienstleistungen",
      translations: {
        english: "service",
        ukrainian: "послуга",
        polish: "usługa",
        albanian: "shërbimi",
        arabic: "الخدمة",
        italian: "servizio",
        serbian: "услуга"
      }
    },
    {
      german: "der Geschäftsplan, die Geschäftspläne",
      translations: {
        english: "business plan",
        ukrainian: "бізнес-план",
        polish: "plan biznesowy",
        albanian: "plani i biznesit",
        arabic: "خطة العمل",
        italian: "piano aziendale",
        serbian: "пословни план"
      }
    },
    {
      german: "der Unternehmer, die Unternehmer",
      translations: {
        english: "entrepreneur",
        ukrainian: "підприємець",
        polish: "przedsiębiorca",
        albanian: "sipërmarrësi",
        arabic: "رجل أعمال",
        italian: "imprenditore",
        serbian: "предузетник"
      }
    },
    {
      german: "das Förderprogramm, die Förderprogramme",
      translations: {
        english: "funding program",
        ukrainian: "програма підтримки",
        polish: "program wsparcia",
        albanian: "programi i mbështetjes",
        arabic: "برنامج الدعم",
        italian: "programma di finanziamento",
        serbian: "програм подршке"
      }
    },
    {
      german: "der Finanzberater, die Finanzberater",
      translations: {
        english: "financial advisor",
        ukrainian: "фінансовий консультант",
        polish: "doradca finansowy",
        albanian: "këshilltar financiar",
        arabic: "مستشار مالي",
        italian: "consulente finanziario",
        serbian: "финансијски саветник"
      }
    },
    {
      german: "der Standort, die Standorte",
      translations: {
        english: "location",
        ukrainian: "місце розташування",
        polish: "lokalizacja",
        albanian: "vendndodhja",
        arabic: "الموقع",
        italian: "sede",
        serbian: "локација"
      }
    },
    {
      german: "der Lieferant, die Lieferanten",
      translations: {
        english: "supplier",
        ukrainian: "постачальник",
        polish: "dostawca",
        albanian: "furnizuesi",
        arabic: "المورد",
        italian: "fornitore",
        serbian: "добављач"
      }
    },
    {
      german: "das Eigenkapital (Sg.)",
      translations: {
        english: "equity capital",
        ukrainian: "власний капітал",
        polish: "kapitał własny",
        albanian: "kapitali vetanak",
        arabic: "رأس المال الخاص",
        italian: "capitale proprio",
        serbian: "сопствени капитал"
      }
    },
    {
      german: "die Schulden (Pl.)",
      translations: {
        english: "debts",
        ukrainian: "борги",
        polish: "długi",
        albanian: "borxhet",
        arabic: "الديون",
        italian: "debiti",
        serbian: "дугови"
      }
    },
    {
      german: "zurückzahlen",
      translations: {
        english: "to pay back",
        ukrainian: "повертати",
        polish: "spłacać",
        albanian: "të kthesh",
        arabic: "يسدد",
        italian: "rimborsare",
        serbian: "вратити"
      }
    },
    {
      german: "die Unterlagen (Pl.)",
      translations: {
        english: "documents",
        ukrainian: "документи",
        polish: "dokumenty",
        albanian: "dokumentet",
        arabic: "المستندات",
        italian: "documenti",
        serbian: "документација"
      }
    },

    // === Business Types ===
    {
      german: "das Einzelhandelsunternehmen, die Einzelhandelsunternehmen",
      translations: {
        english: "retail business",
        ukrainian: "роздрібне підприємство",
        polish: "przedsiębiorstwo handlu detalicznego",
        albanian: "biznesi i shitjes me pakicë",
        arabic: "شركة البيع بالتجزئة",
        italian: "impresa di vendita al dettaglio",
        serbian: "малопродајно предузеће"
      }
    },
    {
      german: "das Dienstleistungsunternehmen, die Dienstleistungsunternehmen",
      translations: {
        english: "service company",
        ukrainian: "підприємство з надання послуг",
        polish: "firma usługowa",
        albanian: "kompania e shërbimeve",
        arabic: "شركة خدمات",
        italian: "azienda di servizi",
        serbian: "услужно предузеће"
      }
    },
    {
      german: "der Handwerksbetrieb, die Handwerksbetriebe",
      translations: {
        english: "craft business",
        ukrainian: "ремісниче підприємство",
        polish: "zakład rzemieślniczy",
        albanian: "biznesi i zejtarisë",
        arabic: "ورشة حرفية",
        italian: "impresa artigianale",
        serbian: "занатска радња"
      }
    },
    {
      german: "das Industrieunternehmen, die Industrieunternehmen",
      translations: {
        english: "industrial company",
        ukrainian: "промислове підприємство",
        polish: "przedsiębiorstwo przemysłowe",
        albanian: "kompania industriale",
        arabic: "شركة صناعية",
        italian: "azienda industriale",
        serbian: "индустријско предузеће"
      }
    },
    {
      german: "der Freiberufler, die Freiberufler",
      translations: {
        english: "freelancer",
        ukrainian: "фрілансер",
        polish: "wolny zawód",
        albanian: "punëtor i pavarur",
        arabic: "العامل الحر",
        italian: "libero professionista",
        serbian: "слободњак"
      }
    },
    {
      german: "die Selbstständigkeit (Sg.)",
      translations: {
        english: "self-employment",
        ukrainian: "самозайнятість",
        polish: "samozatrudnienie",
        albanian: "punësimi i pavarur",
        arabic: "العمل الحر",
        italian: "lavoro autonomo",
        serbian: "самосталност"
      }
    },
    {
      german: "der Kredit, die Kredite",
      translations: {
        english: "loan, credit",
        ukrainian: "кредит",
        polish: "kredyt",
        albanian: "kredia",
        arabic: "القرض",
        italian: "credito",
        serbian: "кредит"
      }
    },
    {
      german: "die Zinsen (Pl.)",
      translations: {
        english: "interest",
        ukrainian: "відсотки",
        polish: "odsetki",
        albanian: "interesat",
        arabic: "الفائدة",
        italian: "interessi",
        serbian: "камате"
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
      german: "der Kunde, die Kunden",
      translations: {
        english: "customer",
        ukrainian: "клієнт",
        polish: "klient",
        albanian: "klienti",
        arabic: "الزبون",
        italian: "cliente",
        serbian: "муштерија"
      }
    },
    {
      german: "die Werbung (Sg.)",
      translations: {
        english: "advertising",
        ukrainian: "реклама",
        polish: "reklama",
        albanian: "reklamimi",
        arabic: "الإعلان",
        italian: "pubblicità",
        serbian: "реклама"
      }
    }
  ],

  // Module 9: Natur und Umwelt (Nature and Environment)
  // Extracted from AB Module 9 "Wichtige Wörter" (pages 116-119) and KB Module 9
  9: [
    // === General Landscape & Nature ===
    {
      german: "der Bach, die Bäche",
      translations: {
        english: "stream, brook",
        ukrainian: "струмок",
        polish: "strumień",
        albanian: "përroi",
        arabic: "جدول",
        italian: "ruscello",
        serbian: "поток"
      }
    },
    {
      german: "das Tal, die Täler",
      translations: {
        english: "valley",
        ukrainian: "долина",
        polish: "dolina",
        albanian: "lugina",
        arabic: "الوادي",
        italian: "valle",
        serbian: "долина"
      }
    },
    {
      german: "das Gebirge, die Gebirge",
      translations: {
        english: "mountain range",
        ukrainian: "гори",
        polish: "góry",
        albanian: "malet",
        arabic: "سلسلة جبال",
        italian: "catena montuosa",
        serbian: "планине"
      }
    },
    {
      german: "der Berg, die Berge",
      translations: {
        english: "mountain",
        ukrainian: "гора",
        polish: "góra",
        albanian: "mali",
        arabic: "الجبل",
        italian: "montagna",
        serbian: "планина"
      }
    },
    {
      german: "die Landschaft, die Landschaften",
      translations: {
        english: "landscape",
        ukrainian: "пейзаж, ландшафт",
        polish: "krajobraz",
        albanian: "peizazhi",
        arabic: "المناظر الطبيعية",
        italian: "paesaggio",
        serbian: "пејзаж"
      }
    },
    {
      german: "die Landwirtschaft (Sg.)",
      translations: {
        english: "agriculture",
        ukrainian: "сільське господарство",
        polish: "rolnictwo",
        albanian: "bujqësia",
        arabic: "الزراعة",
        italian: "agricoltura",
        serbian: "пољопривреда"
      }
    },
    {
      german: "der Bauernhof, die Bauernhöfe",
      translations: {
        english: "farm",
        ukrainian: "ферма",
        polish: "gospodarstwo rolne",
        albanian: "ferma",
        arabic: "المزرعة",
        italian: "fattoria",
        serbian: "фарма"
      }
    },
    {
      german: "der Stall, die Ställe",
      translations: {
        english: "stable, barn",
        ukrainian: "стайня",
        polish: "stajnia",
        albanian: "stalla",
        arabic: "الإسطبل",
        italian: "stalla",
        serbian: "штала"
      }
    },
    {
      german: "die Wiese, die Wiesen",
      translations: {
        english: "meadow",
        ukrainian: "луг",
        polish: "łąka",
        albanian: "livadhi",
        arabic: "المرج",
        italian: "prato",
        serbian: "ливада"
      }
    },
    {
      german: "das Feld, die Felder",
      translations: {
        english: "field",
        ukrainian: "поле",
        polish: "pole",
        albanian: "fusha",
        arabic: "الحقل",
        italian: "campo",
        serbian: "поље"
      }
    },
    {
      german: "der Wald, die Wälder",
      translations: {
        english: "forest",
        ukrainian: "ліс",
        polish: "las",
        albanian: "pylli",
        arabic: "الغابة",
        italian: "foresta",
        serbian: "шума"
      }
    },
    {
      german: "die Ferienwohnung, die Ferienwohnungen",
      translations: {
        english: "vacation apartment",
        ukrainian: "квартира для відпочинку",
        polish: "mieszkanie wakacyjne",
        albanian: "apartamenti i pushimeve",
        arabic: "شقة العطلات",
        italian: "appartamento vacanze",
        serbian: "апартман за одмор"
      }
    },

    // === A Umweltschutz (Environmental Protection) ===
    {
      german: "der Umweltschutz (Sg.)",
      translations: {
        english: "environmental protection",
        ukrainian: "охорона довкілля",
        polish: "ochrona środowiska",
        albanian: "mbrojtja e mjedisit",
        arabic: "حماية البيئة",
        italian: "protezione ambientale",
        serbian: "заштита животне средине"
      }
    },
    {
      german: "der Klimawandel (Sg.)",
      translations: {
        english: "climate change",
        ukrainian: "зміна клімату",
        polish: "zmiana klimatu",
        albanian: "ndryshimi i klimës",
        arabic: "تغير المناخ",
        italian: "cambiamento climatico",
        serbian: "климатске промене"
      }
    },
    {
      german: "das Klima (Sg.)",
      translations: {
        english: "climate",
        ukrainian: "клімат",
        polish: "klimat",
        albanian: "klima",
        arabic: "المناخ",
        italian: "clima",
        serbian: "клима"
      }
    },
    {
      german: "das Trinkwasser (Sg.)",
      translations: {
        english: "drinking water",
        ukrainian: "питна вода",
        polish: "woda pitna",
        albanian: "ujë i pijshëm",
        arabic: "مياه الشرب",
        italian: "acqua potabile",
        serbian: "вода за пиће"
      }
    },
    {
      german: "die Luft (Sg.)",
      translations: {
        english: "air",
        ukrainian: "повітря",
        polish: "powietrze",
        albanian: "ajri",
        arabic: "الهواء",
        italian: "aria",
        serbian: "ваздух"
      }
    },
    {
      german: "die Luftverschmutzung (Sg.)",
      translations: {
        english: "air pollution",
        ukrainian: "забруднення повітря",
        polish: "zanieczyszczenie powietrza",
        albanian: "ndotja e ajrit",
        arabic: "تلوث الهواء",
        italian: "inquinamento atmosferico",
        serbian: "загађење ваздуха"
      }
    },
    {
      german: "die Verschmutzung (Sg.)",
      translations: {
        english: "pollution",
        ukrainian: "забруднення",
        polish: "zanieczyszczenie",
        albanian: "ndotja",
        arabic: "التلوث",
        italian: "inquinamento",
        serbian: "загађење"
      }
    },
    {
      german: "verschmutzen",
      translations: {
        english: "to pollute",
        ukrainian: "забруднювати",
        polish: "zanieczyszczać",
        albanian: "të ndotësh",
        arabic: "يلوث",
        italian: "inquinare",
        serbian: "загађивати"
      }
    },
    {
      german: "das Umweltproblem, die Umweltprobleme",
      translations: {
        english: "environmental problem",
        ukrainian: "екологічна проблема",
        polish: "problem ekologiczny",
        albanian: "problemi mjedisor",
        arabic: "مشكلة بيئية",
        italian: "problema ambientale",
        serbian: "еколошки проблем"
      }
    },
    {
      german: "die Abgase (Pl.)",
      translations: {
        english: "exhaust fumes",
        ukrainian: "вихлопні гази",
        polish: "spaliny",
        albanian: "gazrat e shkarkimit",
        arabic: "غازات العادم",
        italian: "gas di scarico",
        serbian: "издувни гасови"
      }
    },
    {
      german: "das Hochwasser, die Hochwasser",
      translations: {
        english: "flood",
        ukrainian: "повінь",
        polish: "powódź",
        albanian: "përmbytja",
        arabic: "الفيضان",
        italian: "alluvione",
        serbian: "поплава"
      }
    },
    {
      german: "giftig",
      translations: {
        english: "toxic, poisonous",
        ukrainian: "отруйний",
        polish: "trujący",
        albanian: "helmues",
        arabic: "سام",
        italian: "velenoso",
        serbian: "отрован"
      }
    },
    {
      german: "die Chemikalie, die Chemikalien",
      translations: {
        english: "chemical",
        ukrainian: "хімікат",
        polish: "substancja chemiczna",
        albanian: "kimikati",
        arabic: "المادة الكيميائية",
        italian: "sostanza chimica",
        serbian: "хемикалија"
      }
    },
    {
      german: "der Lärm (Sg.)",
      translations: {
        english: "noise",
        ukrainian: "шум",
        polish: "hałas",
        albanian: "zhurma",
        arabic: "الضوضاء",
        italian: "rumore",
        serbian: "бука"
      }
    },
    {
      german: "der Rohstoff, die Rohstoffe",
      translations: {
        english: "raw material",
        ukrainian: "сировина",
        polish: "surowiec",
        albanian: "lënda e parë",
        arabic: "المواد الخام",
        italian: "materia prima",
        serbian: "сировина"
      }
    },
    {
      german: "verschwenden",
      translations: {
        english: "to waste",
        ukrainian: "марнувати",
        polish: "marnować",
        albanian: "të shpërdorosh",
        arabic: "يبذر",
        italian: "sprecare",
        serbian: "расипати"
      }
    },
    {
      german: "gering",
      translations: {
        english: "low, small",
        ukrainian: "незначний",
        polish: "niewielki",
        albanian: "i vogël",
        arabic: "قليل",
        italian: "basso",
        serbian: "мали"
      }
    },
    {
      german: "das Naturschutzgebiet, die Naturschutzgebiete",
      translations: {
        english: "nature reserve",
        ukrainian: "природний заповідник",
        polish: "rezerwat przyrody",
        albanian: "rezervati natyror",
        arabic: "محمية طبيعية",
        italian: "riserva naturale",
        serbian: "заштићено подручје"
      }
    },
    {
      german: "die Tier- und Pflanzenarten (Pl.)",
      translations: {
        english: "animal and plant species",
        ukrainian: "види тварин і рослин",
        polish: "gatunki zwierząt i roślin",
        albanian: "llojet e kafshëve dhe bimëve",
        arabic: "أنواع الحيوانات والنباتات",
        italian: "specie animali e vegetali",
        serbian: "врсте животиња и биљака"
      }
    },
    {
      german: "schädlich",
      translations: {
        english: "harmful",
        ukrainian: "шкідливий",
        polish: "szkodliwy",
        albanian: "i dëmshëm",
        arabic: "ضار",
        italian: "dannoso",
        serbian: "штетан"
      }
    },
    {
      german: "schaden",
      translations: {
        english: "to harm, to damage",
        ukrainian: "шкодити",
        polish: "szkodzić",
        albanian: "të dëmtosh",
        arabic: "يضر",
        italian: "danneggiare",
        serbian: "штетити"
      }
    },
    {
      german: "vermeiden",
      translations: {
        english: "to avoid",
        ukrainian: "уникати",
        polish: "unikać",
        albanian: "të shmangësh",
        arabic: "يتجنب",
        italian: "evitare",
        serbian: "избегавати"
      }
    },
    {
      german: "lösen",
      translations: {
        english: "to solve",
        ukrainian: "вирішувати",
        polish: "rozwiązywać",
        albanian: "të zgjidhësh",
        arabic: "يحل",
        italian: "risolvere",
        serbian: "решити"
      }
    },

    // === B Erneuerbare Energien (Renewable Energy) ===
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
      german: "erneuerbar",
      translations: {
        english: "renewable",
        ukrainian: "відновлюваний",
        polish: "odnawialny",
        albanian: "i rinovueshëm",
        arabic: "متجدد",
        italian: "rinnovabile",
        serbian: "обновљив"
      }
    },
    {
      german: "die Windenergie (Sg.)",
      translations: {
        english: "wind energy",
        ukrainian: "вітрова енергія",
        polish: "energia wiatrowa",
        albanian: "energjia e erës",
        arabic: "طاقة الرياح",
        italian: "energia eolica",
        serbian: "енергија ветра"
      }
    },
    {
      german: "die Wasserkraft (Sg.)",
      translations: {
        english: "hydropower",
        ukrainian: "гідроенергія",
        polish: "energia wodna",
        albanian: "energjia ujore",
        arabic: "الطاقة المائية",
        italian: "energia idrica",
        serbian: "хидроенергија"
      }
    },
    {
      german: "die Solarenergie (Sg.)",
      translations: {
        english: "solar energy",
        ukrainian: "сонячна енергія",
        polish: "energia słoneczna",
        albanian: "energjia diellore",
        arabic: "الطاقة الشمسية",
        italian: "energia solare",
        serbian: "соларна енергија"
      }
    },
    {
      german: "die Erdwärme (Sg.)",
      translations: {
        english: "geothermal energy",
        ukrainian: "геотермальна енергія",
        polish: "energia geotermalna",
        albanian: "energjia gjeotermale",
        arabic: "الطاقة الحرارية الأرضية",
        italian: "energia geotermica",
        serbian: "геотермална енергија"
      }
    },
    {
      german: "die Windkraft (Sg.)",
      translations: {
        english: "wind power",
        ukrainian: "енергія вітру",
        polish: "siła wiatru",
        albanian: "fuqia e erës",
        arabic: "قوة الرياح",
        italian: "forza del vento",
        serbian: "снага ветра"
      }
    },
    {
      german: "die Kernenergie (Sg.)",
      translations: {
        english: "nuclear energy",
        ukrainian: "ядерна енергія",
        polish: "energia jądrowa",
        albanian: "energjia bërthamore",
        arabic: "الطاقة النووية",
        italian: "energia nucleare",
        serbian: "нуклеарна енергија"
      }
    },
    {
      german: "das Kernkraftwerk, die Kernkraftwerke",
      translations: {
        english: "nuclear power plant",
        ukrainian: "атомна електростанція",
        polish: "elektrownia jądrowa",
        albanian: "centrali bërthamor",
        arabic: "محطة الطاقة النووية",
        italian: "centrale nucleare",
        serbian: "нуклеарна електрана"
      }
    },
    {
      german: "das Kohlekraftwerk, die Kohlekraftwerke",
      translations: {
        english: "coal power plant",
        ukrainian: "вугільна електростанція",
        polish: "elektrownia węglowa",
        albanian: "centrali me qymyr",
        arabic: "محطة طاقة الفحم",
        italian: "centrale a carbone",
        serbian: "електрана на угаљ"
      }
    },
    {
      german: "der Atommüll (Sg.)",
      translations: {
        english: "nuclear waste",
        ukrainian: "ядерні відходи",
        polish: "odpady nuklearne",
        albanian: "mbeturinat bërthamore",
        arabic: "النفايات النووية",
        italian: "scorie nucleari",
        serbian: "нуклеарни отпад"
      }
    },
    {
      german: "die Kohle (Sg.)",
      translations: {
        english: "coal",
        ukrainian: "вугілля",
        polish: "węgiel",
        albanian: "qymyri",
        arabic: "الفحم",
        italian: "carbone",
        serbian: "угаљ"
      }
    },
    {
      german: "das Erdöl (Sg.)",
      translations: {
        english: "petroleum, crude oil",
        ukrainian: "нафта",
        polish: "ropa naftowa",
        albanian: "nafta",
        arabic: "النفط",
        italian: "petrolio",
        serbian: "нафта"
      }
    },
    {
      german: "das Öl, die Öle",
      translations: {
        english: "oil",
        ukrainian: "олія, нафта",
        polish: "olej",
        albanian: "vaji",
        arabic: "الزيت",
        italian: "olio",
        serbian: "уље"
      }
    },
    {
      german: "der Strom (Sg.)",
      translations: {
        english: "electricity",
        ukrainian: "електрика",
        polish: "prąd",
        albanian: "rryma",
        arabic: "الكهرباء",
        italian: "corrente elettrica",
        serbian: "струја"
      }
    },
    {
      german: "die fossile Energie",
      translations: {
        english: "fossil energy",
        ukrainian: "викопна енергія",
        polish: "energia kopalna",
        albanian: "energjia fosile",
        arabic: "الطاقة الأحفورية",
        italian: "energia fossile",
        serbian: "фосилна енергија"
      }
    },
    {
      german: "der Energieträger, die Energieträger",
      translations: {
        english: "energy source",
        ukrainian: "енергоносій",
        polish: "nośnik energii",
        albanian: "bartësi i energjisë",
        arabic: "مصدر الطاقة",
        italian: "vettore energetico",
        serbian: "носилац енергије"
      }
    },
    {
      german: "die Energiequelle, die Energiequellen",
      translations: {
        english: "energy source",
        ukrainian: "джерело енергії",
        polish: "źródło energii",
        albanian: "burimi i energjisë",
        arabic: "مصدر الطاقة",
        italian: "fonte di energia",
        serbian: "извор енергије"
      }
    },
    {
      german: "lebenswichtig",
      translations: {
        english: "vital, essential",
        ukrainian: "життєво важливий",
        polish: "niezbędny do życia",
        albanian: "jetik",
        arabic: "حيوي",
        italian: "vitale",
        serbian: "животно важан"
      }
    },
    {
      german: "energiesparend",
      translations: {
        english: "energy-saving",
        ukrainian: "енергозберігаючий",
        polish: "energooszczędny",
        albanian: "kursyes i energjisë",
        arabic: "موفر للطاقة",
        italian: "a risparmio energetico",
        serbian: "енергетски ефикасан"
      }
    },
    {
      german: "sparsam",
      translations: {
        english: "economical, thrifty",
        ukrainian: "економний",
        polish: "oszczędny",
        albanian: "i kursyer",
        arabic: "مقتصد",
        italian: "parsimonioso",
        serbian: "штедљив"
      }
    },
    {
      german: "sparen",
      translations: {
        english: "to save",
        ukrainian: "економити",
        polish: "oszczędzać",
        albanian: "të kursesh",
        arabic: "يوفر",
        italian: "risparmiare",
        serbian: "штедети"
      }
    },
    {
      german: "die Speicherung (Sg.)",
      translations: {
        english: "storage",
        ukrainian: "зберігання",
        polish: "przechowywanie",
        albanian: "ruajtja",
        arabic: "التخزين",
        italian: "stoccaggio",
        serbian: "складиштење"
      }
    },
    {
      german: "die Biogasanlage, die Biogasanlagen",
      translations: {
        english: "biogas plant",
        ukrainian: "біогазова установка",
        polish: "biogazownia",
        albanian: "impianti i biogazit",
        arabic: "منشأة الغاز الحيوي",
        italian: "impianto di biogas",
        serbian: "биогасна електрана"
      }
    },
    {
      german: "die Solaranlage, die Solaranlagen",
      translations: {
        english: "solar installation",
        ukrainian: "сонячна установка",
        polish: "instalacja solarna",
        albanian: "impianti diellor",
        arabic: "منشأة طاقة شمسية",
        italian: "impianto solare",
        serbian: "соларни панели"
      }
    },
    {
      german: "die LED-Lampe, die LED-Lampen",
      translations: {
        english: "LED lamp",
        ukrainian: "LED-лампа",
        polish: "lampa LED",
        albanian: "llamba LED",
        arabic: "مصباح LED",
        italian: "lampada LED",
        serbian: "ЛЕД лампа"
      }
    },
    {
      german: "heizen",
      translations: {
        english: "to heat",
        ukrainian: "опалювати",
        polish: "ogrzewać",
        albanian: "të ngrohësh",
        arabic: "يسخن",
        italian: "riscaldare",
        serbian: "грејати"
      }
    },
    {
      german: "abschalten",
      translations: {
        english: "to turn off",
        ukrainian: "вимикати",
        polish: "wyłączać",
        albanian: "të fikësh",
        arabic: "يطفئ",
        italian: "spegnere",
        serbian: "искључити"
      }
    },

    // === C Mülltrennung (Waste Separation) ===
    {
      german: "die Mülltrennung (Sg.)",
      translations: {
        english: "waste separation",
        ukrainian: "сортування сміття",
        polish: "segregacja śmieci",
        albanian: "ndarja e mbeturinave",
        arabic: "فرز النفايات",
        italian: "raccolta differenziata",
        serbian: "сортирање отпада"
      }
    },
    {
      german: "der Abfall, die Abfälle",
      translations: {
        english: "waste, garbage",
        ukrainian: "відходи",
        polish: "odpady",
        albanian: "mbeturinat",
        arabic: "النفايات",
        italian: "rifiuti",
        serbian: "отпад"
      }
    },
    {
      german: "die Müllentsorgung (Sg.)",
      translations: {
        english: "waste disposal",
        ukrainian: "утилізація сміття",
        polish: "utylizacja śmieci",
        albanian: "asgjësimi i mbeturinave",
        arabic: "التخلص من النفايات",
        italian: "smaltimento rifiuti",
        serbian: "одлагање отпада"
      }
    },
    {
      german: "entsorgen",
      translations: {
        english: "to dispose of",
        ukrainian: "утилізувати",
        polish: "utylizować",
        albanian: "të hedhësh",
        arabic: "يتخلص من",
        italian: "smaltire",
        serbian: "одлагати"
      }
    },
    {
      german: "der Container, die Container",
      translations: {
        english: "container",
        ukrainian: "контейнер",
        polish: "kontener",
        albanian: "konteineri",
        arabic: "الحاوية",
        italian: "contenitore",
        serbian: "контејнер"
      }
    },
    {
      german: "die Mülltonne, die Mülltonnen",
      translations: {
        english: "trash can",
        ukrainian: "сміттєвий бак",
        polish: "kosz na śmieci",
        albanian: "koshat e plehrave",
        arabic: "حاوية القمامة",
        italian: "bidone della spazzatura",
        serbian: "канта за смеће"
      }
    },
    {
      german: "der Biomüll (Sg.)",
      translations: {
        english: "organic waste",
        ukrainian: "біовідходи",
        polish: "bioodpady",
        albanian: "mbeturinat organike",
        arabic: "النفايات العضوية",
        italian: "rifiuti organici",
        serbian: "биоотпад"
      }
    },
    {
      german: "der Restmüll (Sg.)",
      translations: {
        english: "residual waste",
        ukrainian: "залишкові відходи",
        polish: "odpady resztkowe",
        albanian: "mbeturinat e mbetura",
        arabic: "النفايات المتبقية",
        italian: "rifiuti residui",
        serbian: "мешани отпад"
      }
    },
    {
      german: "der Sperrmüll (Sg.)",
      translations: {
        english: "bulky waste",
        ukrainian: "крупногабаритне сміття",
        polish: "odpady wielkogabarytowe",
        albanian: "mbeturinat e mëdha",
        arabic: "النفايات الكبيرة",
        italian: "rifiuti ingombranti",
        serbian: "кабасти отпад"
      }
    },
    {
      german: "der Verpackungsmüll (Sg.)",
      translations: {
        english: "packaging waste",
        ukrainian: "пакувальні відходи",
        polish: "odpady opakowaniowe",
        albanian: "mbeturinat e ambalazhit",
        arabic: "نفايات التغليف",
        italian: "rifiuti da imballaggio",
        serbian: "амбалажни отпад"
      }
    },
    {
      german: "das Altglas (Sg.)",
      translations: {
        english: "waste glass",
        ukrainian: "склобій",
        polish: "stare szkło",
        albanian: "qelqi i vjetër",
        arabic: "الزجاج القديم",
        italian: "vetro usato",
        serbian: "стакло за рециклажу"
      }
    },
    {
      german: "das Altpapier (Sg.)",
      translations: {
        english: "waste paper",
        ukrainian: "макулатура",
        polish: "makulatura",
        albanian: "letra e vjetër",
        arabic: "الورق القديم",
        italian: "carta usata",
        serbian: "стари папир"
      }
    },
    {
      german: "der Schadstoff, die Schadstoffe",
      translations: {
        english: "pollutant, harmful substance",
        ukrainian: "шкідлива речовина",
        polish: "substancja szkodliwa",
        albanian: "lënda e dëmshme",
        arabic: "المادة الضارة",
        italian: "sostanza nociva",
        serbian: "штетна материја"
      }
    },
    {
      german: "die Batterie, die Batterien",
      translations: {
        english: "battery",
        ukrainian: "батарея",
        polish: "bateria",
        albanian: "bateria",
        arabic: "البطارية",
        italian: "batteria",
        serbian: "батерија"
      }
    },
    {
      german: "der Akku, die Akkus",
      translations: {
        english: "rechargeable battery",
        ukrainian: "акумулятор",
        polish: "akumulator",
        albanian: "akumulatori",
        arabic: "البطارية القابلة للشحن",
        italian: "accumulatore",
        serbian: "акумулатор"
      }
    },
    {
      german: "recyceln",
      translations: {
        english: "to recycle",
        ukrainian: "переробляти",
        polish: "recyklingować",
        albanian: "të riciklosh",
        arabic: "يعيد التدوير",
        italian: "riciclare",
        serbian: "рециклирати"
      }
    },
    {
      german: "der Recyclinghof, die Recyclinghöfe",
      translations: {
        english: "recycling center",
        ukrainian: "пункт переробки",
        polish: "punkt recyklingu",
        albanian: "qendra e riciklimit",
        arabic: "مركز إعادة التدوير",
        italian: "centro di riciclaggio",
        serbian: "рециклажни центар"
      }
    },
    {
      german: "der Abfallkalender, die Abfallkalender",
      translations: {
        english: "waste collection calendar",
        ukrainian: "календар вивезення сміття",
        polish: "kalendarz wywozu śmieci",
        albanian: "kalendari i mbeturinave",
        arabic: "تقويم جمع النفايات",
        italian: "calendario rifiuti",
        serbian: "календар одношења отпада"
      }
    },
    {
      german: "abholen",
      translations: {
        english: "to pick up, to collect",
        ukrainian: "забирати",
        polish: "odbierać",
        albanian: "të marrësh",
        arabic: "يجمع",
        italian: "ritirare",
        serbian: "покупити"
      }
    },
    {
      german: "die Babywindel, die Babywindeln",
      translations: {
        english: "baby diaper",
        ukrainian: "дитячий підгузок",
        polish: "pielucha dla niemowląt",
        albanian: "pelena e foshnjës",
        arabic: "حفاضة الطفل",
        italian: "pannolino",
        serbian: "пелена за бебе"
      }
    },
    {
      german: "die Matratze, die Matratzen",
      translations: {
        english: "mattress",
        ukrainian: "матрац",
        polish: "materac",
        albanian: "dysheku",
        arabic: "المرتبة",
        italian: "materasso",
        serbian: "душек"
      }
    },
    {
      german: "das Marmeladenglas, die Marmeladengläser",
      translations: {
        english: "jam jar",
        ukrainian: "банка з-під варення",
        polish: "słoik po dżemie",
        albanian: "kavanozi i reçelit",
        arabic: "مرطبان المربى",
        italian: "barattolo di marmellata",
        serbian: "тегла од џема"
      }
    },
    {
      german: "die Dose, die Dosen",
      translations: {
        english: "can, tin",
        ukrainian: "консервна банка",
        polish: "puszka",
        albanian: "kanaçe",
        arabic: "العلبة",
        italian: "lattina",
        serbian: "лименка"
      }
    },
    {
      german: "der Kaffeefilter, die Kaffeefilter",
      translations: {
        english: "coffee filter",
        ukrainian: "фільтр для кави",
        polish: "filtr do kawy",
        albanian: "filtri i kafesë",
        arabic: "فلتر القهوة",
        italian: "filtro del caffè",
        serbian: "филтер за кафу"
      }
    },
    {
      german: "die Bananenschale, die Bananenschalen",
      translations: {
        english: "banana peel",
        ukrainian: "бананова шкірка",
        polish: "skórka banana",
        albanian: "lëkura e bananes",
        arabic: "قشرة الموز",
        italian: "buccia di banana",
        serbian: "кора од банане"
      }
    },
    {
      german: "die Plastiktüte, die Plastiktüten",
      translations: {
        english: "plastic bag",
        ukrainian: "поліетиленовий пакет",
        polish: "torba plastikowa",
        albanian: "qesja plastike",
        arabic: "كيس بلاستيكي",
        italian: "sacchetto di plastica",
        serbian: "пластична кеса"
      }
    },
    {
      german: "die Espressokapsel, die Espressokapseln",
      translations: {
        english: "espresso capsule",
        ukrainian: "капсула для еспресо",
        polish: "kapsułka do espresso",
        albanian: "kapsula e espressos",
        arabic: "كبسولة الإسبريسو",
        italian: "capsula espresso",
        serbian: "еспресо капсула"
      }
    },
    {
      german: "das Tetrapack, die Tetrapacks",
      translations: {
        english: "Tetra Pak",
        ukrainian: "тетрапак",
        polish: "karton po napoju",
        albanian: "tetrapak",
        arabic: "علبة تترا باك",
        italian: "Tetra Pak",
        serbian: "тетрапак"
      }
    },

    // === D Tiere (Animals) ===
    {
      german: "das Schaf, die Schafe",
      translations: {
        english: "sheep",
        ukrainian: "вівця",
        polish: "owca",
        albanian: "delja",
        arabic: "الخروف",
        italian: "pecora",
        serbian: "овца"
      }
    },
    {
      german: "die Kuh, die Kühe",
      translations: {
        english: "cow",
        ukrainian: "корова",
        polish: "krowa",
        albanian: "lopa",
        arabic: "البقرة",
        italian: "mucca",
        serbian: "крава"
      }
    },
    {
      german: "das Pferd, die Pferde",
      translations: {
        english: "horse",
        ukrainian: "кінь",
        polish: "koń",
        albanian: "kali",
        arabic: "الحصان",
        italian: "cavallo",
        serbian: "коњ"
      }
    },
    {
      german: "das Huhn, die Hühner",
      translations: {
        english: "chicken",
        ukrainian: "курка",
        polish: "kurczak",
        albanian: "pula",
        arabic: "الدجاجة",
        italian: "gallina",
        serbian: "кокошка"
      }
    },
    {
      german: "der Hahn, die Hähne",
      translations: {
        english: "rooster",
        ukrainian: "півень",
        polish: "kogut",
        albanian: "gjeli",
        arabic: "الديك",
        italian: "gallo",
        serbian: "петао"
      }
    },
    {
      german: "der Vogel, die Vögel",
      translations: {
        english: "bird",
        ukrainian: "птах",
        polish: "ptak",
        albanian: "zogu",
        arabic: "الطائر",
        italian: "uccello",
        serbian: "птица"
      }
    },
    {
      german: "das Schwein, die Schweine",
      translations: {
        english: "pig",
        ukrainian: "свиня",
        polish: "świnia",
        albanian: "derri",
        arabic: "الخنزير",
        italian: "maiale",
        serbian: "свиња"
      }
    },
    {
      german: "die Ziege, die Ziegen",
      translations: {
        english: "goat",
        ukrainian: "коза",
        polish: "koza",
        albanian: "dhia",
        arabic: "الماعز",
        italian: "capra",
        serbian: "коза"
      }
    },
    {
      german: "der Hund, die Hunde",
      translations: {
        english: "dog",
        ukrainian: "собака",
        polish: "pies",
        albanian: "qeni",
        arabic: "الكلب",
        italian: "cane",
        serbian: "пас"
      }
    },
    {
      german: "die Katze, die Katzen",
      translations: {
        english: "cat",
        ukrainian: "кіт",
        polish: "kot",
        albanian: "macja",
        arabic: "القطة",
        italian: "gatto",
        serbian: "мачка"
      }
    },
    {
      german: "der Hase, die Hasen",
      translations: {
        english: "hare",
        ukrainian: "заєць",
        polish: "zając",
        albanian: "lepuri",
        arabic: "الأرنب البري",
        italian: "lepre",
        serbian: "зец"
      }
    },
    {
      german: "das Kaninchen, die Kaninchen",
      translations: {
        english: "rabbit",
        ukrainian: "кролик",
        polish: "królik",
        albanian: "lepuri i butë",
        arabic: "الأرنب",
        italian: "coniglio",
        serbian: "зечић"
      }
    },
    {
      german: "das Reh, die Rehe",
      translations: {
        english: "deer, roe",
        ukrainian: "козуля",
        polish: "sarna",
        albanian: "kapreolli",
        arabic: "الغزال",
        italian: "capriolo",
        serbian: "срна"
      }
    },
    {
      german: "der Hirsch, die Hirsche",
      translations: {
        english: "deer, stag",
        ukrainian: "олень",
        polish: "jeleń",
        albanian: "dreri",
        arabic: "الأيل",
        italian: "cervo",
        serbian: "јелен"
      }
    },
    {
      german: "der Affe, die Affen",
      translations: {
        english: "monkey",
        ukrainian: "мавпа",
        polish: "małpa",
        albanian: "majmuni",
        arabic: "القرد",
        italian: "scimmia",
        serbian: "мајмун"
      }
    },
    {
      german: "der Löwe, die Löwen",
      translations: {
        english: "lion",
        ukrainian: "лев",
        polish: "lew",
        albanian: "luani",
        arabic: "الأسد",
        italian: "leone",
        serbian: "лав"
      }
    },
    {
      german: "der Tiger, die Tiger",
      translations: {
        english: "tiger",
        ukrainian: "тигр",
        polish: "tygrys",
        albanian: "tigri",
        arabic: "النمر",
        italian: "tigre",
        serbian: "тигар"
      }
    },
    {
      german: "der Bär, die Bären",
      translations: {
        english: "bear",
        ukrainian: "ведмідь",
        polish: "niedźwiedź",
        albanian: "ariu",
        arabic: "الدب",
        italian: "orso",
        serbian: "медвед"
      }
    },
    {
      german: "der Wolf, die Wölfe",
      translations: {
        english: "wolf",
        ukrainian: "вовк",
        polish: "wilk",
        albanian: "ujku",
        arabic: "الذئب",
        italian: "lupo",
        serbian: "вук"
      }
    },
    {
      german: "der Fuchs, die Füchse",
      translations: {
        english: "fox",
        ukrainian: "лисиця",
        polish: "lis",
        albanian: "dhelpra",
        arabic: "الثعلب",
        italian: "volpe",
        serbian: "лисица"
      }
    },
    {
      german: "der Elefant, die Elefanten",
      translations: {
        english: "elephant",
        ukrainian: "слон",
        polish: "słoń",
        albanian: "elefanti",
        arabic: "الفيل",
        italian: "elefante",
        serbian: "слон"
      }
    },
    {
      german: "die Giraffe, die Giraffen",
      translations: {
        english: "giraffe",
        ukrainian: "жирафа",
        polish: "żyrafa",
        albanian: "gjirafa",
        arabic: "الزرافة",
        italian: "giraffa",
        serbian: "жирафа"
      }
    },
    {
      german: "das Nashorn, die Nashörner",
      translations: {
        english: "rhinoceros",
        ukrainian: "носоріг",
        polish: "nosorożec",
        albanian: "rinoceronti",
        arabic: "وحيد القرن",
        italian: "rinoceronte",
        serbian: "носорог"
      }
    },
    {
      german: "das Känguru, die Kängurus",
      translations: {
        english: "kangaroo",
        ukrainian: "кенгуру",
        polish: "kangur",
        albanian: "kanguri",
        arabic: "الكنغر",
        italian: "canguro",
        serbian: "кенгур"
      }
    },
    {
      german: "die Maus, die Mäuse",
      translations: {
        english: "mouse",
        ukrainian: "миша",
        polish: "mysz",
        albanian: "miu",
        arabic: "الفأر",
        italian: "topo",
        serbian: "миш"
      }
    },
    {
      german: "die Ente, die Enten",
      translations: {
        english: "duck",
        ukrainian: "качка",
        polish: "kaczka",
        albanian: "rosa",
        arabic: "البطة",
        italian: "anatra",
        serbian: "патка"
      }
    },
    {
      german: "die Biene, die Bienen",
      translations: {
        english: "bee",
        ukrainian: "бджола",
        polish: "pszczoła",
        albanian: "bleta",
        arabic: "النحلة",
        italian: "ape",
        serbian: "пчела"
      }
    },
    {
      german: "die Wespe, die Wespen",
      translations: {
        english: "wasp",
        ukrainian: "оса",
        polish: "osa",
        albanian: "grerëza",
        arabic: "الدبور",
        italian: "vespa",
        serbian: "оса"
      }
    },
    {
      german: "die Mücke, die Mücken",
      translations: {
        english: "mosquito",
        ukrainian: "комар",
        polish: "komar",
        albanian: "mushkonja",
        arabic: "البعوضة",
        italian: "zanzara",
        serbian: "комарац"
      }
    },
    {
      german: "die Spinne, die Spinnen",
      translations: {
        english: "spider",
        ukrainian: "павук",
        polish: "pająk",
        albanian: "merimanga",
        arabic: "العنكبوت",
        italian: "ragno",
        serbian: "паук"
      }
    },
    {
      german: "der Regenwurm, die Regenwürmer",
      translations: {
        english: "earthworm",
        ukrainian: "дощовий черв'як",
        polish: "dżdżownica",
        albanian: "krimbi i tokës",
        arabic: "دودة الأرض",
        italian: "lombrico",
        serbian: "глиста"
      }
    },
    {
      german: "der Krebs, die Krebse",
      translations: {
        english: "crab, crayfish",
        ukrainian: "рак",
        polish: "rak",
        albanian: "gaforrja",
        arabic: "السرطان",
        italian: "granchio",
        serbian: "рак"
      }
    },
    {
      german: "streicheln",
      translations: {
        english: "to pet, to stroke",
        ukrainian: "гладити",
        polish: "głaskać",
        albanian: "të përkëdhelësh",
        arabic: "يداعب",
        italian: "accarezzare",
        serbian: "мазити"
      }
    },
    {
      german: "reiten",
      translations: {
        english: "to ride (horse)",
        ukrainian: "їздити верхи",
        polish: "jeździć konno",
        albanian: "të kalërosh",
        arabic: "يركب",
        italian: "cavalcare",
        serbian: "јахати"
      }
    },

    // === Animal Characteristics (Adjectives) ===
    {
      german: "klug",
      translations: {
        english: "clever, smart",
        ukrainian: "розумний",
        polish: "mądry",
        albanian: "i zgjuar",
        arabic: "ذكي",
        italian: "intelligente",
        serbian: "паметан"
      }
    },
    {
      german: "feige",
      translations: {
        english: "cowardly",
        ukrainian: "боязкий",
        polish: "tchórzliwy",
        albanian: "frikacak",
        arabic: "جبان",
        italian: "vigliacco",
        serbian: "кукавичан"
      }
    },
    {
      german: "mutig",
      translations: {
        english: "brave, courageous",
        ukrainian: "сміливий",
        polish: "odważny",
        albanian: "trim",
        arabic: "شجاع",
        italian: "coraggioso",
        serbian: "храбар"
      }
    },
    {
      german: "faul",
      translations: {
        english: "lazy",
        ukrainian: "лінивий",
        polish: "leniwy",
        albanian: "dembel",
        arabic: "كسول",
        italian: "pigro",
        serbian: "лењ"
      }
    },
    {
      german: "wild",
      translations: {
        english: "wild",
        ukrainian: "дикий",
        polish: "dziki",
        albanian: "i egër",
        arabic: "بري",
        italian: "selvaggio",
        serbian: "дивљи"
      }
    },
    {
      german: "bescheiden",
      translations: {
        english: "modest",
        ukrainian: "скромний",
        polish: "skromny",
        albanian: "modest",
        arabic: "متواضع",
        italian: "modesto",
        serbian: "скроман"
      }
    },
    {
      german: "scheu",
      translations: {
        english: "shy, timid",
        ukrainian: "полохливий",
        polish: "płochliwy",
        albanian: "i druajtur",
        arabic: "خجول",
        italian: "timido",
        serbian: "плашљив"
      }
    },
    {
      german: "neugierig",
      translations: {
        english: "curious",
        ukrainian: "цікавий",
        polish: "ciekawy",
        albanian: "kureshtar",
        arabic: "فضولي",
        italian: "curioso",
        serbian: "радознао"
      }
    },
    {
      german: "lieb",
      translations: {
        english: "sweet, kind",
        ukrainian: "милий",
        polish: "miły",
        albanian: "i dashur",
        arabic: "لطيف",
        italian: "dolce",
        serbian: "мио"
      }
    },
    {
      german: "treu",
      translations: {
        english: "loyal, faithful",
        ukrainian: "вірний",
        polish: "wierny",
        albanian: "besnik",
        arabic: "مخلص",
        italian: "fedele",
        serbian: "веран"
      }
    },
    {
      german: "nützlich",
      translations: {
        english: "useful",
        ukrainian: "корисний",
        polish: "użyteczny",
        albanian: "i dobishëm",
        arabic: "مفيد",
        italian: "utile",
        serbian: "користан"
      }
    },
    {
      german: "gefährlich",
      translations: {
        english: "dangerous",
        ukrainian: "небезпечний",
        polish: "niebezpieczny",
        albanian: "i rrezikshëm",
        arabic: "خطير",
        italian: "pericoloso",
        serbian: "опасан"
      }
    },
    {
      german: "elegant",
      translations: {
        english: "elegant",
        ukrainian: "елегантний",
        polish: "elegancki",
        albanian: "elegant",
        arabic: "أنيق",
        italian: "elegante",
        serbian: "елегантан"
      }
    },
    {
      german: "ruhig",
      translations: {
        english: "calm, quiet",
        ukrainian: "спокійний",
        polish: "spokojny",
        albanian: "i qetë",
        arabic: "هادئ",
        italian: "calmo",
        serbian: "миран"
      }
    },
    {
      german: "schmutzig",
      translations: {
        english: "dirty",
        ukrainian: "брудний",
        polish: "brudny",
        albanian: "i ndyrë",
        arabic: "قذر",
        italian: "sporco",
        serbian: "прљав"
      }
    },

    // === Other Important Words ===
    {
      german: "seit, seitdem",
      translations: {
        english: "since",
        ukrainian: "з того часу як",
        polish: "od tego czasu",
        albanian: "që atëherë",
        arabic: "منذ",
        italian: "da allora",
        serbian: "од тада"
      }
    },
    {
      german: "unrealistisch",
      translations: {
        english: "unrealistic",
        ukrainian: "нереалістичний",
        polish: "nierealistyczny",
        albanian: "jorealist",
        arabic: "غير واقعي",
        italian: "irrealistico",
        serbian: "нереалистичан"
      }
    },
    {
      german: "der Quatsch (Sg.)",
      translations: {
        english: "nonsense",
        ukrainian: "дурниця",
        polish: "bzdury",
        albanian: "marrëzi",
        arabic: "هراء",
        italian: "sciocchezze",
        serbian: "глупост"
      }
    }
  ],

  // Module 10: Gesund werden und bleiben (Getting and Staying Healthy)
  // Extracted from AB Module 10 "Wichtige Wörter" (pages 132-135) and KB Module 10
  10: [
    // === General Healthcare ===
    {
      german: "das Gesundheitswesen (Sg.)",
      translations: {
        english: "healthcare system",
        ukrainian: "система охорони здоров'я",
        polish: "system opieki zdrowotnej",
        albanian: "sistemi shëndetësor",
        arabic: "نظام الرعاية الصحية",
        italian: "sistema sanitario",
        serbian: "здравствени систем"
      }
    },
    {
      german: "die Notaufnahme, die Notaufnahmen",
      translations: {
        english: "emergency room",
        ukrainian: "приймальне відділення",
        polish: "izba przyjęć",
        albanian: "dhoma e urgjencës",
        arabic: "غرفة الطوارئ",
        italian: "pronto soccorso",
        serbian: "хитна помоћ"
      }
    },
    {
      german: "das Krankenhaus, die Krankenhäuser",
      translations: {
        english: "hospital",
        ukrainian: "лікарня",
        polish: "szpital",
        albanian: "spitali",
        arabic: "المستشفى",
        italian: "ospedale",
        serbian: "болница"
      }
    },
    {
      german: "die Arztpraxis, die Arztpraxen",
      translations: {
        english: "doctor's office",
        ukrainian: "кабінет лікаря",
        polish: "gabinet lekarski",
        albanian: "ordinanca e mjekut",
        arabic: "عيادة الطبيب",
        italian: "studio medico",
        serbian: "лекарска ординација"
      }
    },
    {
      german: "der Arzt, die Ärzte",
      translations: {
        english: "doctor (male)",
        ukrainian: "лікар",
        polish: "lekarz",
        albanian: "mjeku",
        arabic: "الطبيب",
        italian: "medico",
        serbian: "лекар"
      }
    },
    {
      german: "die Ärztin, die Ärztinnen",
      translations: {
        english: "doctor (female)",
        ukrainian: "лікарка",
        polish: "lekarka",
        albanian: "mjekja",
        arabic: "الطبيبة",
        italian: "dottoressa",
        serbian: "лекарка"
      }
    },
    {
      german: "die Krankenschwester, die Krankenschwestern",
      translations: {
        english: "nurse (female)",
        ukrainian: "медсестра",
        polish: "pielęgniarka",
        albanian: "infermierja",
        arabic: "الممرضة",
        italian: "infermiera",
        serbian: "медицинска сестра"
      }
    },
    {
      german: "der Krankenpfleger, die Krankenpfleger",
      translations: {
        english: "nurse (male)",
        ukrainian: "медбрат",
        polish: "pielęgniarz",
        albanian: "infermieri",
        arabic: "الممرض",
        italian: "infermiere",
        serbian: "медицински брат"
      }
    },
    {
      german: "die Hebamme, die Hebammen",
      translations: {
        english: "midwife",
        ukrainian: "акушерка",
        polish: "położna",
        albanian: "mamia",
        arabic: "القابلة",
        italian: "ostetrica",
        serbian: "бабица"
      }
    },
    {
      german: "der Patient, die Patienten",
      translations: {
        english: "patient",
        ukrainian: "пацієнт",
        polish: "pacjent",
        albanian: "pacienti",
        arabic: "المريض",
        italian: "paziente",
        serbian: "пацијент"
      }
    },
    {
      german: "schwanger",
      translations: {
        english: "pregnant",
        ukrainian: "вагітна",
        polish: "w ciąży",
        albanian: "shtatzënë",
        arabic: "حامل",
        italian: "incinta",
        serbian: "трудна"
      }
    },
    {
      german: "die Schwangerschaftsgymnastik (Sg.)",
      translations: {
        english: "prenatal exercises",
        ukrainian: "гімнастика для вагітних",
        polish: "gimnastyka dla ciężarnych",
        albanian: "gjimnastika e shtatzënisë",
        arabic: "تمارين الحمل",
        italian: "ginnastica prenatale",
        serbian: "гимнастика за труднице"
      }
    },
    {
      german: "die Rückengymnastik (Sg.)",
      translations: {
        english: "back exercises",
        ukrainian: "гімнастика для спини",
        polish: "gimnastyka kręgosłupa",
        albanian: "gjimnastika e shpinës",
        arabic: "تمارين الظهر",
        italian: "ginnastica per la schiena",
        serbian: "гимнастика за леђа"
      }
    },
    {
      german: "das Symptom, die Symptome",
      translations: {
        english: "symptom",
        ukrainian: "симптом",
        polish: "objaw",
        albanian: "simptoma",
        arabic: "العرض",
        italian: "sintomo",
        serbian: "симптом"
      }
    },
    {
      german: "behandeln",
      translations: {
        english: "to treat",
        ukrainian: "лікувати",
        polish: "leczyć",
        albanian: "të trajtosh",
        arabic: "يعالج",
        italian: "trattare",
        serbian: "лечити"
      }
    },
    {
      german: "die Behandlung, die Behandlungen",
      translations: {
        english: "treatment",
        ukrainian: "лікування",
        polish: "leczenie",
        albanian: "trajtimi",
        arabic: "العلاج",
        italian: "trattamento",
        serbian: "лечење"
      }
    },
    {
      german: "anstecken",
      translations: {
        english: "to infect",
        ukrainian: "заражати",
        polish: "zarażać",
        albanian: "të infektosh",
        arabic: "يُعدي",
        italian: "contagiare",
        serbian: "заразити"
      }
    },

    // === A Unfälle und ihre Folgen (Accidents and Consequences) ===
    {
      german: "der Unfall, die Unfälle",
      translations: {
        english: "accident",
        ukrainian: "аварія, нещасний випадок",
        polish: "wypadek",
        albanian: "aksidenti",
        arabic: "الحادث",
        italian: "incidente",
        serbian: "несрећа"
      }
    },
    {
      german: "der Verkehrsunfall, die Verkehrsunfälle",
      translations: {
        english: "traffic accident",
        ukrainian: "дорожня аварія",
        polish: "wypadek drogowy",
        albanian: "aksidenti trafiku",
        arabic: "حادث مرور",
        italian: "incidente stradale",
        serbian: "саобраћајна несрећа"
      }
    },
    {
      german: "der Fahrgast, die Fahrgäste",
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
      german: "anfahren",
      translations: {
        english: "to hit (with a vehicle)",
        ukrainian: "збити (автомобілем)",
        polish: "potrącić",
        albanian: "të godasësh (me automjet)",
        arabic: "يصدم",
        italian: "investire",
        serbian: "ударити (возилом)"
      }
    },
    {
      german: "stürzen",
      translations: {
        english: "to fall",
        ukrainian: "падати",
        polish: "upadać",
        albanian: "të rrëzohesh",
        arabic: "يسقط",
        italian: "cadere",
        serbian: "пасти"
      }
    },
    {
      german: "die Verletzung, die Verletzungen",
      translations: {
        english: "injury",
        ukrainian: "травма",
        polish: "uraz",
        albanian: "lëndimi",
        arabic: "الإصابة",
        italian: "ferita",
        serbian: "повреда"
      }
    },
    {
      german: "lebensgefährlich",
      translations: {
        english: "life-threatening",
        ukrainian: "небезпечний для життя",
        polish: "zagrażający życiu",
        albanian: "që rrezikon jetën",
        arabic: "يهدد الحياة",
        italian: "pericoloso per la vita",
        serbian: "опасан по живот"
      }
    },
    {
      german: "beachten",
      translations: {
        english: "to observe, to notice",
        ukrainian: "звертати увагу",
        polish: "zwracać uwagę",
        albanian: "të vëresh",
        arabic: "يلاحظ",
        italian: "osservare",
        serbian: "обратити пажњу"
      }
    },
    {
      german: "übersehen",
      translations: {
        english: "to overlook",
        ukrainian: "не помічати",
        polish: "przeoczyć",
        albanian: "të lësh pa parë",
        arabic: "يغفل عن",
        italian: "trascurare",
        serbian: "превидети"
      }
    },
    {
      german: "Fahrerflucht begehen",
      translations: {
        english: "to commit hit and run",
        ukrainian: "втекти з місця аварії",
        polish: "uciec z miejsca wypadku",
        albanian: "të ikësh nga vendi i aksidentit",
        arabic: "يهرب من مكان الحادث",
        italian: "darsi alla fuga",
        serbian: "побећи са места несреће"
      }
    },
    {
      german: "die Polizei (Sg.)",
      translations: {
        english: "police",
        ukrainian: "поліція",
        polish: "policja",
        albanian: "policia",
        arabic: "الشرطة",
        italian: "polizia",
        serbian: "полиција"
      }
    },
    {
      german: "der Zeuge, die Zeugen",
      translations: {
        english: "witness",
        ukrainian: "свідок",
        polish: "świadek",
        albanian: "dëshmitari",
        arabic: "الشاهد",
        italian: "testimone",
        serbian: "сведок"
      }
    },
    {
      german: "die Schmerzen (Pl.)",
      translations: {
        english: "pain",
        ukrainian: "біль",
        polish: "ból",
        albanian: "dhimbjet",
        arabic: "الألم",
        italian: "dolore",
        serbian: "бол"
      }
    },
    {
      german: "das Röntgen (Sg.)",
      translations: {
        english: "X-ray",
        ukrainian: "рентген",
        polish: "prześwietlenie",
        albanian: "rrezja X",
        arabic: "الأشعة السينية",
        italian: "radiografia",
        serbian: "рендген"
      }
    },
    {
      german: "der Gips (Sg.)",
      translations: {
        english: "plaster cast",
        ukrainian: "гіпс",
        polish: "gips",
        albanian: "gjipsi",
        arabic: "الجبس",
        italian: "gesso",
        serbian: "гипс"
      }
    },
    {
      german: "der Operationssaal, die Operationssäle",
      translations: {
        english: "operating room",
        ukrainian: "операційна",
        polish: "sala operacyjna",
        albanian: "salla e operacionit",
        arabic: "غرفة العمليات",
        italian: "sala operatoria",
        serbian: "операциона сала"
      }
    },
    {
      german: "operieren",
      translations: {
        english: "to operate",
        ukrainian: "оперувати",
        polish: "operować",
        albanian: "të operosh",
        arabic: "يُجري عملية",
        italian: "operare",
        serbian: "оперисати"
      }
    },
    {
      german: "der Herzinfarkt, die Herzinfarkte",
      translations: {
        english: "heart attack",
        ukrainian: "інфаркт",
        polish: "zawał serca",
        albanian: "infarkti i zemrës",
        arabic: "النوبة القلبية",
        italian: "infarto",
        serbian: "инфаркт"
      }
    },
    {
      german: "die Entbindung, die Entbindungen",
      translations: {
        english: "delivery, childbirth",
        ukrainian: "пологи",
        polish: "poród",
        albanian: "lindja",
        arabic: "الولادة",
        italian: "parto",
        serbian: "порођај"
      }
    },
    {
      german: "entbinden",
      translations: {
        english: "to give birth",
        ukrainian: "народжувати",
        polish: "rodzić",
        albanian: "të lindësh",
        arabic: "تلد",
        italian: "partorire",
        serbian: "породити"
      }
    },
    {
      german: "die Physiotherapie, die Physiotherapien",
      translations: {
        english: "physiotherapy",
        ukrainian: "фізіотерапія",
        polish: "fizjoterapia",
        albanian: "fizioterapia",
        arabic: "العلاج الطبيعي",
        italian: "fisioterapia",
        serbian: "физиотерапија"
      }
    },
    {
      german: "die Beobachtung, die Beobachtungen",
      translations: {
        english: "observation",
        ukrainian: "спостереження",
        polish: "obserwacja",
        albanian: "vëzhgimi",
        arabic: "المراقبة",
        italian: "osservazione",
        serbian: "посматрање"
      }
    },
    {
      german: "die Untersuchung, die Untersuchungen",
      translations: {
        english: "examination",
        ukrainian: "обстеження",
        polish: "badanie",
        albanian: "ekzaminimi",
        arabic: "الفحص",
        italian: "esame",
        serbian: "преглед"
      }
    },
    {
      german: "die Gehhilfe, die Gehhilfen",
      translations: {
        english: "walking aid",
        ukrainian: "ходунки",
        polish: "balkonik",
        albanian: "ndihma për ecje",
        arabic: "مساعد المشي",
        italian: "deambulatore",
        serbian: "ходалица"
      }
    },

    // === B Die Krankenkasse informiert (Health Insurance) ===
    {
      german: "die Krankenkasse, die Krankenkassen",
      translations: {
        english: "health insurance",
        ukrainian: "медична страхова компанія",
        polish: "kasa chorych",
        albanian: "sigurimi shëndetësor",
        arabic: "التأمين الصحي",
        italian: "assicurazione sanitaria",
        serbian: "здравствено осигурање"
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
      german: "die Vorsorge (Sg.)",
      translations: {
        english: "preventive care",
        ukrainian: "профілактика",
        polish: "profilaktyka",
        albanian: "parandalimi",
        arabic: "الرعاية الوقائية",
        italian: "prevenzione",
        serbian: "превенција"
      }
    },
    {
      german: "der Check-up, die Check-ups",
      translations: {
        english: "check-up",
        ukrainian: "медичний огляд",
        polish: "badanie kontrolne",
        albanian: "kontrolli mjekësor",
        arabic: "الفحص الطبي",
        italian: "check-up",
        serbian: "контролни преглед"
      }
    },
    {
      german: "körperlich",
      translations: {
        english: "physical",
        ukrainian: "фізичний",
        polish: "fizyczny",
        albanian: "fizik",
        arabic: "جسدي",
        italian: "fisico",
        serbian: "физички"
      }
    },
    {
      german: "das Vorgespräch, die Vorgespräche",
      translations: {
        english: "preliminary conversation",
        ukrainian: "попередня бесіда",
        polish: "rozmowa wstępna",
        albanian: "biseda paraprake",
        arabic: "المحادثة التمهيدية",
        italian: "colloquio preliminare",
        serbian: "претходни разговор"
      }
    },
    {
      german: "das Beratungsgespräch, die Beratungsgespräche",
      translations: {
        english: "consultation",
        ukrainian: "консультація",
        polish: "rozmowa doradcza",
        albanian: "biseda këshilluese",
        arabic: "جلسة استشارية",
        italian: "colloquio di consulenza",
        serbian: "саветодавни разговор"
      }
    },
    {
      german: "die Erkrankung, die Erkrankungen",
      translations: {
        english: "illness, disease",
        ukrainian: "захворювання",
        polish: "choroba",
        albanian: "sëmundja",
        arabic: "المرض",
        italian: "malattia",
        serbian: "обољење"
      }
    },
    {
      german: "die Impfung, die Impfungen",
      translations: {
        english: "vaccination",
        ukrainian: "вакцинація",
        polish: "szczepienie",
        albanian: "vaksinimi",
        arabic: "التطعيم",
        italian: "vaccinazione",
        serbian: "вакцинација"
      }
    },
    {
      german: "impfen",
      translations: {
        english: "to vaccinate",
        ukrainian: "вакцинувати",
        polish: "szczepić",
        albanian: "të vaksinosh",
        arabic: "يُطعّم",
        italian: "vaccinare",
        serbian: "вакцинисати"
      }
    },
    {
      german: "die Grippeimpfung, die Grippeimpfungen",
      translations: {
        english: "flu vaccination",
        ukrainian: "вакцинація від грипу",
        polish: "szczepienie przeciw grypie",
        albanian: "vaksinimi kundër gripit",
        arabic: "لقاح الإنفلونزا",
        italian: "vaccinazione antinfluenzale",
        serbian: "вакцина против грипа"
      }
    },
    {
      german: "hilfreich",
      translations: {
        english: "helpful",
        ukrainian: "корисний",
        polish: "pomocny",
        albanian: "i dobishëm",
        arabic: "مفيد",
        italian: "utile",
        serbian: "користан"
      }
    },
    {
      german: "notwendig",
      translations: {
        english: "necessary",
        ukrainian: "необхідний",
        polish: "konieczny",
        albanian: "i nevojshëm",
        arabic: "ضروري",
        italian: "necessario",
        serbian: "неопходан"
      }
    },
    {
      german: "die Kosten übernehmen",
      translations: {
        english: "to cover the costs",
        ukrainian: "покривати витрати",
        polish: "pokryć koszty",
        albanian: "të mbulosh kostot",
        arabic: "يتحمل التكاليف",
        italian: "coprire i costi",
        serbian: "сносити трошкове"
      }
    },
    {
      german: "die Zigarette, die Zigaretten",
      translations: {
        english: "cigarette",
        ukrainian: "сигарета",
        polish: "papieros",
        albanian: "cigarja",
        arabic: "السيجارة",
        italian: "sigaretta",
        serbian: "цигарета"
      }
    },
    {
      german: "rauchen",
      translations: {
        english: "to smoke",
        ukrainian: "курити",
        polish: "palić",
        albanian: "të pish duhan",
        arabic: "يدخن",
        italian: "fumare",
        serbian: "пушити"
      }
    },
    {
      german: "der Puls (Sg.)",
      translations: {
        english: "pulse",
        ukrainian: "пульс",
        polish: "puls",
        albanian: "pulsi",
        arabic: "النبض",
        italian: "polso",
        serbian: "пулс"
      }
    },
    {
      german: "die Lunge abhören",
      translations: {
        english: "to listen to the lungs",
        ukrainian: "прослуховувати легені",
        polish: "osłuchiwać płuca",
        albanian: "të dëgjosh mushkëritë",
        arabic: "يفحص الرئتين بالسماعة",
        italian: "auscultare i polmoni",
        serbian: "ослушкивати плућа"
      }
    },
    {
      german: "die Lunge, die Lungen",
      translations: {
        english: "lung",
        ukrainian: "легеня",
        polish: "płuco",
        albanian: "mushkëria",
        arabic: "الرئة",
        italian: "polmone",
        serbian: "плућа"
      }
    },
    {
      german: "das Herz, die Herzen",
      translations: {
        english: "heart",
        ukrainian: "серце",
        polish: "serce",
        albanian: "zemra",
        arabic: "القلب",
        italian: "cuore",
        serbian: "срце"
      }
    },
    {
      german: "den Bauch abtasten",
      translations: {
        english: "to palpate the abdomen",
        ukrainian: "пальпувати живіт",
        polish: "badać palpacyjnie brzuch",
        albanian: "të prekësh barkun",
        arabic: "يفحص البطن بالجس",
        italian: "palpare l'addome",
        serbian: "палпирати стомак"
      }
    },
    {
      german: "das Virus, die Viren",
      translations: {
        english: "virus",
        ukrainian: "вірус",
        polish: "wirus",
        albanian: "virusi",
        arabic: "الفيروس",
        italian: "virus",
        serbian: "вирус"
      }
    },
    {
      german: "verhindern",
      translations: {
        english: "to prevent",
        ukrainian: "запобігати",
        polish: "zapobiegać",
        albanian: "të parandalosh",
        arabic: "يمنع",
        italian: "prevenire",
        serbian: "спречити"
      }
    },
    {
      german: "übrigens",
      translations: {
        english: "by the way",
        ukrainian: "до речі",
        polish: "przy okazji",
        albanian: "meqë ra fjala",
        arabic: "بالمناسبة",
        italian: "a proposito",
        serbian: "узгред"
      }
    },
    {
      german: "zum Schluss",
      translations: {
        english: "in conclusion, finally",
        ukrainian: "на завершення",
        polish: "na koniec",
        albanian: "në fund",
        arabic: "في النهاية",
        italian: "in conclusione",
        serbian: "на крају"
      }
    },
    {
      german: "erledigen",
      translations: {
        english: "to take care of, to complete",
        ukrainian: "виконувати",
        polish: "załatwiać",
        albanian: "të kryesh",
        arabic: "ينجز",
        italian: "sbrigare",
        serbian: "обавити"
      }
    },
    {
      german: "psychisch",
      translations: {
        english: "psychological, mental",
        ukrainian: "психічний",
        polish: "psychiczny",
        albanian: "psikik",
        arabic: "نفسي",
        italian: "psichico",
        serbian: "психички"
      }
    },
    {
      german: "die Psychotherapie, die Psychotherapien",
      translations: {
        english: "psychotherapy",
        ukrainian: "психотерапія",
        polish: "psychoterapia",
        albanian: "psikoterapia",
        arabic: "العلاج النفسي",
        italian: "psicoterapia",
        serbian: "психотерапија"
      }
    },
    {
      german: "der Psychotherapeut, die Psychotherapeuten",
      translations: {
        english: "psychotherapist (male)",
        ukrainian: "психотерапевт",
        polish: "psychoterapeuta",
        albanian: "psikoterapisti",
        arabic: "المعالج النفسي",
        italian: "psicoterapeuta",
        serbian: "психотерапеут"
      }
    },

    // === C Tipps für ein langes Leben (Tips for a Long Life) ===
    {
      german: "medizinisch",
      translations: {
        english: "medical",
        ukrainian: "медичний",
        polish: "medyczny",
        albanian: "mjekësor",
        arabic: "طبي",
        italian: "medico",
        serbian: "медицински"
      }
    },
    {
      german: "der Fortschritt, die Fortschritte",
      translations: {
        english: "progress",
        ukrainian: "прогрес",
        polish: "postęp",
        albanian: "progresi",
        arabic: "التقدم",
        italian: "progresso",
        serbian: "напредак"
      }
    },
    {
      german: "eine Frage stellen",
      translations: {
        english: "to ask a question",
        ukrainian: "ставити питання",
        polish: "zadawać pytanie",
        albanian: "të bësh një pyetje",
        arabic: "يطرح سؤالاً",
        italian: "fare una domanda",
        serbian: "поставити питање"
      }
    },
    {
      german: "das Altern (Sg.)",
      translations: {
        english: "aging",
        ukrainian: "старіння",
        polish: "starzenie się",
        albanian: "plakja",
        arabic: "الشيخوخة",
        italian: "invecchiamento",
        serbian: "старење"
      }
    },
    {
      german: "die Vorbeugung, die Vorbeugungen",
      translations: {
        english: "prevention",
        ukrainian: "профілактика",
        polish: "profilaktyka",
        albanian: "parandalimi",
        arabic: "الوقاية",
        italian: "prevenzione",
        serbian: "превенција"
      }
    },
    {
      german: "der Bluthochdruck (Sg.)",
      translations: {
        english: "high blood pressure",
        ukrainian: "високий тиск",
        polish: "nadciśnienie",
        albanian: "presioni i lartë i gjakut",
        arabic: "ارتفاع ضغط الدم",
        italian: "ipertensione",
        serbian: "високи крвни притисак"
      }
    },
    {
      german: "der Blutdruck (Sg.)",
      translations: {
        english: "blood pressure",
        ukrainian: "кров'яний тиск",
        polish: "ciśnienie krwi",
        albanian: "presioni i gjakut",
        arabic: "ضغط الدم",
        italian: "pressione sanguigna",
        serbian: "крвни притисак"
      }
    },
    {
      german: "die Diabetes (Sg.)",
      translations: {
        english: "diabetes",
        ukrainian: "діабет",
        polish: "cukrzyca",
        albanian: "diabeti",
        arabic: "السكري",
        italian: "diabete",
        serbian: "дијабетес"
      }
    },
    {
      german: "die Depression, die Depressionen",
      translations: {
        english: "depression",
        ukrainian: "депресія",
        polish: "depresja",
        albanian: "depresioni",
        arabic: "الاكتئاب",
        italian: "depressione",
        serbian: "депресија"
      }
    },
    {
      german: "geistig",
      translations: {
        english: "mental, intellectual",
        ukrainian: "розумовий",
        polish: "umysłowy",
        albanian: "mendor",
        arabic: "عقلي",
        italian: "mentale",
        serbian: "умни"
      }
    },
    {
      german: "künstlerisch",
      translations: {
        english: "artistic",
        ukrainian: "художній",
        polish: "artystyczny",
        albanian: "artistik",
        arabic: "فني",
        italian: "artistico",
        serbian: "уметнички"
      }
    },
    {
      german: "sich betätigen",
      translations: {
        english: "to be active, to engage in",
        ukrainian: "займатися",
        polish: "zajmować się",
        albanian: "të angazhohesh",
        arabic: "يمارس نشاطاً",
        italian: "dedicarsi",
        serbian: "бавити се"
      }
    },
    {
      german: "der Schlaf (Sg.)",
      translations: {
        english: "sleep",
        ukrainian: "сон",
        polish: "sen",
        albanian: "gjumi",
        arabic: "النوم",
        italian: "sonno",
        serbian: "сан"
      }
    },
    {
      german: "auf jeden Fall",
      translations: {
        english: "definitely, in any case",
        ukrainian: "у будь-якому випадку",
        polish: "w każdym razie",
        albanian: "në çdo rast",
        arabic: "بالتأكيد",
        italian: "in ogni caso",
        serbian: "у сваком случају"
      }
    },
    {
      german: "auf keinen Fall",
      translations: {
        english: "definitely not, under no circumstances",
        ukrainian: "ні в якому разі",
        polish: "w żadnym wypadku",
        albanian: "në asnjë rast",
        arabic: "بأي حال من الأحوال",
        italian: "in nessun caso",
        serbian: "ни у ком случају"
      }
    },
    {
      german: "sich vornehmen",
      translations: {
        english: "to intend, to plan",
        ukrainian: "планувати",
        polish: "postanowić",
        albanian: "të planifikosh",
        arabic: "يعتزم",
        italian: "proporsi",
        serbian: "планирати"
      }
    },
    {
      german: "weder ... noch",
      translations: {
        english: "neither ... nor",
        ukrainian: "ні ... ні",
        polish: "ani ... ani",
        albanian: "as ... as",
        arabic: "لا ... ولا",
        italian: "né ... né",
        serbian: "ни ... ни"
      }
    },
    {
      german: "sowohl ... als auch",
      translations: {
        english: "both ... and",
        ukrainian: "як ... так і",
        polish: "zarówno ... jak i",
        albanian: "si ... ashtu edhe",
        arabic: "كل من ... و",
        italian: "sia ... che",
        serbian: "и ... и"
      }
    },
    {
      german: "nicht nur ... sondern auch",
      translations: {
        english: "not only ... but also",
        ukrainian: "не тільки ... а й",
        polish: "nie tylko ... ale także",
        albanian: "jo vetëm ... por edhe",
        arabic: "ليس فقط ... ولكن أيضاً",
        italian: "non solo ... ma anche",
        serbian: "не само ... већ и"
      }
    },
    {
      german: "entweder ... oder",
      translations: {
        english: "either ... or",
        ukrainian: "або ... або",
        polish: "albo ... albo",
        albanian: "ose ... ose",
        arabic: "إما ... أو",
        italian: "o ... o",
        serbian: "или ... или"
      }
    },

    // === Body Parts ===
    {
      german: "die Niere, die Nieren",
      translations: {
        english: "kidney",
        ukrainian: "нирка",
        polish: "nerka",
        albanian: "veshka",
        arabic: "الكلية",
        italian: "rene",
        serbian: "бубрег"
      }
    },
    {
      german: "die Nervenzelle, die Nervenzellen",
      translations: {
        english: "nerve cell",
        ukrainian: "нервова клітина",
        polish: "komórka nerwowa",
        albanian: "qeliza nervore",
        arabic: "الخلية العصبية",
        italian: "cellula nervosa",
        serbian: "нервна ћелија"
      }
    },
    {
      german: "der Darm, die Därme",
      translations: {
        english: "intestine",
        ukrainian: "кишечник",
        polish: "jelito",
        albanian: "zorrët",
        arabic: "الأمعاء",
        italian: "intestino",
        serbian: "црева"
      }
    },
    {
      german: "das Gelenk, die Gelenke",
      translations: {
        english: "joint",
        ukrainian: "суглоб",
        polish: "staw",
        albanian: "nyja",
        arabic: "المفصل",
        italian: "articolazione",
        serbian: "зглоб"
      }
    },
    {
      german: "der Nacken, die Nacken",
      translations: {
        english: "neck, nape",
        ukrainian: "потилиця",
        polish: "kark",
        albanian: "qafa",
        arabic: "مؤخرة الرقبة",
        italian: "nuca",
        serbian: "потиљак"
      }
    },
    {
      german: "das Gehirn, die Gehirne",
      translations: {
        english: "brain",
        ukrainian: "мозок",
        polish: "mózg",
        albanian: "truri",
        arabic: "الدماغ",
        italian: "cervello",
        serbian: "мозак"
      }
    },
    {
      german: "das Blutgefäß, die Blutgefäße",
      translations: {
        english: "blood vessel",
        ukrainian: "кровоносна судина",
        polish: "naczynie krwionośne",
        albanian: "enë gjaku",
        arabic: "الأوعية الدموية",
        italian: "vaso sanguigno",
        serbian: "крвни суд"
      }
    },
    {
      german: "das Blutkörperchen, die Blutkörperchen",
      translations: {
        english: "blood cell",
        ukrainian: "кров'яне тільце",
        polish: "krwinka",
        albanian: "qeliza e gjakut",
        arabic: "خلية الدم",
        italian: "globulo",
        serbian: "крвно зрнце"
      }
    },
    {
      german: "die Haut (Sg.)",
      translations: {
        english: "skin",
        ukrainian: "шкіра",
        polish: "skóra",
        albanian: "lëkura",
        arabic: "الجلد",
        italian: "pelle",
        serbian: "кожа"
      }
    },
    {
      german: "das Skelett, die Skelette",
      translations: {
        english: "skeleton",
        ukrainian: "скелет",
        polish: "szkielet",
        albanian: "skeleti",
        arabic: "الهيكل العظمي",
        italian: "scheletro",
        serbian: "скелет"
      }
    },
    {
      german: "der Knochen, die Knochen",
      translations: {
        english: "bone",
        ukrainian: "кістка",
        polish: "kość",
        albanian: "kocka",
        arabic: "العظم",
        italian: "osso",
        serbian: "кост"
      }
    },
    {
      german: "der Muskel, die Muskeln",
      translations: {
        english: "muscle",
        ukrainian: "м'яз",
        polish: "mięsień",
        albanian: "muskuli",
        arabic: "العضلة",
        italian: "muscolo",
        serbian: "мишић"
      }
    },
    {
      german: "das Blut (Sg.)",
      translations: {
        english: "blood",
        ukrainian: "кров",
        polish: "krew",
        albanian: "gjaku",
        arabic: "الدم",
        italian: "sangue",
        serbian: "крв"
      }
    },
    {
      german: "der Urin (Sg.)",
      translations: {
        english: "urine",
        ukrainian: "сеча",
        polish: "mocz",
        albanian: "urina",
        arabic: "البول",
        italian: "urina",
        serbian: "урин"
      }
    },

    // === Common Illnesses ===
    {
      german: "die Grippe (Sg.)",
      translations: {
        english: "flu",
        ukrainian: "грип",
        polish: "grypa",
        albanian: "gripi",
        arabic: "الإنفلونزا",
        italian: "influenza",
        serbian: "грип"
      }
    },
    {
      german: "die Erkältung, die Erkältungen",
      translations: {
        english: "cold",
        ukrainian: "застуда",
        polish: "przeziębienie",
        albanian: "ftohja",
        arabic: "نزلة برد",
        italian: "raffreddore",
        serbian: "прехлада"
      }
    },
    {
      german: "das Fieber (Sg.)",
      translations: {
        english: "fever",
        ukrainian: "гарячка",
        polish: "gorączka",
        albanian: "ethe",
        arabic: "الحمى",
        italian: "febbre",
        serbian: "температура"
      }
    },
    {
      german: "der Husten (Sg.)",
      translations: {
        english: "cough",
        ukrainian: "кашель",
        polish: "kaszel",
        albanian: "kolla",
        arabic: "السعال",
        italian: "tosse",
        serbian: "кашаљ"
      }
    },
    {
      german: "der Schnupfen (Sg.)",
      translations: {
        english: "runny nose",
        ukrainian: "нежить",
        polish: "katar",
        albanian: "rrufja",
        arabic: "الزكام",
        italian: "raffreddore",
        serbian: "кијавица"
      }
    },
    {
      german: "die Kopfschmerzen (Pl.)",
      translations: {
        english: "headache",
        ukrainian: "головний біль",
        polish: "ból głowy",
        albanian: "dhimbja e kokës",
        arabic: "صداع",
        italian: "mal di testa",
        serbian: "главобоља"
      }
    },
    {
      german: "die Rückenschmerzen (Pl.)",
      translations: {
        english: "back pain",
        ukrainian: "біль у спині",
        polish: "ból pleców",
        albanian: "dhimbja e shpinës",
        arabic: "آلام الظهر",
        italian: "mal di schiena",
        serbian: "бол у леђима"
      }
    },
    {
      german: "die Entzündung, die Entzündungen",
      translations: {
        english: "inflammation",
        ukrainian: "запалення",
        polish: "zapalenie",
        albanian: "inflamacioni",
        arabic: "الالتهاب",
        italian: "infiammazione",
        serbian: "упала"
      }
    },
    {
      german: "der Krebs (Sg.)",
      translations: {
        english: "cancer",
        ukrainian: "рак",
        polish: "rak",
        albanian: "kanceri",
        arabic: "السرطان",
        italian: "cancro",
        serbian: "рак"
      }
    },

    // === Medical Actions ===
    {
      german: "eine Spritze geben",
      translations: {
        english: "to give an injection",
        ukrainian: "робити укол",
        polish: "robić zastrzyk",
        albanian: "të bësh një injeksion",
        arabic: "يعطي حقنة",
        italian: "fare un'iniezione",
        serbian: "дати инјекцију"
      }
    },
    {
      german: "Tabletten verschreiben",
      translations: {
        english: "to prescribe tablets",
        ukrainian: "призначати таблетки",
        polish: "przepisać tabletki",
        albanian: "të përshkruash tableta",
        arabic: "يصف أقراصاً",
        italian: "prescrivere compresse",
        serbian: "преписати таблете"
      }
    },
    {
      german: "Blut abnehmen",
      translations: {
        english: "to draw blood",
        ukrainian: "брати кров",
        polish: "pobierać krew",
        albanian: "të marrësh gjak",
        arabic: "يسحب دماً",
        italian: "prelevare il sangue",
        serbian: "вадити крв"
      }
    },
    {
      german: "einen Verband machen",
      translations: {
        english: "to bandage",
        ukrainian: "робити перев'язку",
        polish: "robić opatrunek",
        albanian: "të bësh fashë",
        arabic: "يضمد الجرح",
        italian: "fare una fasciatura",
        serbian: "ставити завој"
      }
    },
    {
      german: "messen",
      translations: {
        english: "to measure",
        ukrainian: "вимірювати",
        polish: "mierzyć",
        albanian: "të matësh",
        arabic: "يقيس",
        italian: "misurare",
        serbian: "мерити"
      }
    },
    {
      german: "stärken",
      translations: {
        english: "to strengthen",
        ukrainian: "зміцнювати",
        polish: "wzmacniać",
        albanian: "të forcosh",
        arabic: "يقوّي",
        italian: "rafforzare",
        serbian: "јачати"
      }
    },
    {
      german: "brechen",
      translations: {
        english: "to break",
        ukrainian: "ламати",
        polish: "łamać",
        albanian: "të thyesh",
        arabic: "يكسر",
        italian: "rompere",
        serbian: "сломити"
      }
    },

    // === Other Important Words ===
    {
      german: "anstrengend",
      translations: {
        english: "strenuous, exhausting",
        ukrainian: "виснажливий",
        polish: "męczący",
        albanian: "lodhës",
        arabic: "مرهق",
        italian: "faticoso",
        serbian: "напоран"
      }
    },
    {
      german: "erschöpft",
      translations: {
        english: "exhausted",
        ukrainian: "виснажений",
        polish: "wyczerpany",
        albanian: "i rraskapitur",
        arabic: "منهك",
        italian: "esausto",
        serbian: "исцрпљен"
      }
    },
    {
      german: "traurig",
      translations: {
        english: "sad",
        ukrainian: "сумний",
        polish: "smutny",
        albanian: "i trishtuar",
        arabic: "حزين",
        italian: "triste",
        serbian: "тужан"
      }
    },
    {
      german: "die Angst, die Ängste",
      translations: {
        english: "fear, anxiety",
        ukrainian: "страх",
        polish: "strach",
        albanian: "frika",
        arabic: "الخوف",
        italian: "paura",
        serbian: "страх"
      }
    },
    {
      german: "sich konzentrieren",
      translations: {
        english: "to concentrate",
        ukrainian: "концентруватися",
        polish: "koncentrować się",
        albanian: "të përqendrohesh",
        arabic: "يركز",
        italian: "concentrarsi",
        serbian: "концентрисати се"
      }
    },
    {
      german: "die Beschwerde, die Beschwerden",
      translations: {
        english: "complaint, ailment",
        ukrainian: "скарга",
        polish: "dolegliwość",
        albanian: "ankesa",
        arabic: "الشكوى",
        italian: "disturbo",
        serbian: "тегоба"
      }
    },
    {
      german: "die Ursache, die Ursachen",
      translations: {
        english: "cause",
        ukrainian: "причина",
        polish: "przyczyna",
        albanian: "shkaku",
        arabic: "السبب",
        italian: "causa",
        serbian: "узрок"
      }
    },
    {
      german: "das Fitnessstudio, die Fitnessstudios",
      translations: {
        english: "fitness studio, gym",
        ukrainian: "фітнес-студія",
        polish: "siłownia",
        albanian: "palestra",
        arabic: "صالة اللياقة",
        italian: "palestra",
        serbian: "теретана"
      }
    },
    {
      german: "das Krafttraining (Sg.)",
      translations: {
        english: "strength training",
        ukrainian: "силові тренування",
        polish: "trening siłowy",
        albanian: "stërvitja e forcës",
        arabic: "تمارين القوة",
        italian: "allenamento di forza",
        serbian: "тренинг снаге"
      }
    },
    {
      german: "der Kreislauf (Sg.)",
      translations: {
        english: "circulation",
        ukrainian: "кровообіг",
        polish: "krążenie",
        albanian: "qarkullimi",
        arabic: "الدورة الدموية",
        italian: "circolazione",
        serbian: "циркулација"
      }
    }
  ],

  // Module 11: Politik und Gesellschaft (Politics and Society)
  // Extracted from AB Module 11 "Wichtige Wörter"
  11: [
    // === Politik (Politics) ===
    {
      german: "die Politik (Sg.)",
      translations: {
        english: "politics",
        ukrainian: "політика",
        polish: "polityka",
        albanian: "politika",
        arabic: "السياسة",
        italian: "politica",
        serbian: "политика"
      }
    },
    {
      german: "der Politiker, die Politiker",
      translations: {
        english: "politician (male)",
        ukrainian: "політик",
        polish: "polityk",
        albanian: "politikani",
        arabic: "السياسي",
        italian: "politico",
        serbian: "политичар"
      }
    },
    {
      german: "die Politikerin, die Politikerinnen",
      translations: {
        english: "politician (female)",
        ukrainian: "політикиня",
        polish: "polityczka",
        albanian: "politikania",
        arabic: "السياسية",
        italian: "politica",
        serbian: "политичарка"
      }
    },
    {
      german: "politisch",
      translations: {
        english: "political",
        ukrainian: "політичний",
        polish: "polityczny",
        albanian: "politik",
        arabic: "سياسي",
        italian: "politico",
        serbian: "политички"
      }
    },
    {
      german: "die Partei, die Parteien",
      translations: {
        english: "party (political)",
        ukrainian: "партія",
        polish: "partia",
        albanian: "partia",
        arabic: "الحزب",
        italian: "partito",
        serbian: "партија"
      }
    },
    {
      german: "die Regierung, die Regierungen",
      translations: {
        english: "government",
        ukrainian: "уряд",
        polish: "rząd",
        albanian: "qeveria",
        arabic: "الحكومة",
        italian: "governo",
        serbian: "влада"
      }
    },
    {
      german: "regieren",
      translations: {
        english: "to govern, to rule",
        ukrainian: "правити, керувати",
        polish: "rządzić",
        albanian: "të qeverisësh",
        arabic: "يحكم",
        italian: "governare",
        serbian: "владати"
      }
    },
    {
      german: "der Staat, die Staaten",
      translations: {
        english: "state, country",
        ukrainian: "держава",
        polish: "państwo",
        albanian: "shteti",
        arabic: "الدولة",
        italian: "stato",
        serbian: "држава"
      }
    },
    {
      german: "staatlich",
      translations: {
        english: "state (adj.), governmental",
        ukrainian: "державний",
        polish: "państwowy",
        albanian: "shtetëror",
        arabic: "حكومي",
        italian: "statale",
        serbian: "државни"
      }
    },
    {
      german: "die Demokratie, die Demokratien",
      translations: {
        english: "democracy",
        ukrainian: "демократія",
        polish: "demokracja",
        albanian: "demokracia",
        arabic: "الديمقراطية",
        italian: "democrazia",
        serbian: "демократија"
      }
    },
    {
      german: "demokratisch",
      translations: {
        english: "democratic",
        ukrainian: "демократичний",
        polish: "demokratyczny",
        albanian: "demokratik",
        arabic: "ديمقراطي",
        italian: "democratico",
        serbian: "демократски"
      }
    },
    {
      german: "die Freiheit, die Freiheiten",
      translations: {
        english: "freedom, liberty",
        ukrainian: "свобода",
        polish: "wolność",
        albanian: "liria",
        arabic: "الحرية",
        italian: "libertà",
        serbian: "слобода"
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
      german: "das Grundrecht, die Grundrechte",
      translations: {
        english: "basic right, fundamental right",
        ukrainian: "основне право",
        polish: "prawo podstawowe",
        albanian: "e drejta themelore",
        arabic: "الحق الأساسي",
        italian: "diritto fondamentale",
        serbian: "основно право"
      }
    },
    {
      german: "das Gesetz, die Gesetze",
      translations: {
        english: "law, statute",
        ukrainian: "закон",
        polish: "ustawa, prawo",
        albanian: "ligji",
        arabic: "القانون",
        italian: "legge",
        serbian: "закон"
      }
    },
    {
      german: "gesetzlich",
      translations: {
        english: "legal, lawful",
        ukrainian: "законний",
        polish: "prawny, ustawowy",
        albanian: "ligjor",
        arabic: "قانوني",
        italian: "legale",
        serbian: "законски"
      }
    },
    {
      german: "die Verfassung, die Verfassungen",
      translations: {
        english: "constitution",
        ukrainian: "конституція",
        polish: "konstytucja",
        albanian: "kushtetuta",
        arabic: "الدستور",
        italian: "costituzione",
        serbian: "устав"
      }
    },
    {
      german: "das Grundgesetz (Sg.)",
      translations: {
        english: "Basic Law (German constitution)",
        ukrainian: "Основний закон",
        polish: "ustawa zasadnicza",
        albanian: "ligji themelor",
        arabic: "القانون الأساسي",
        italian: "Legge fondamentale",
        serbian: "основни закон"
      }
    },

    // === Wahlen (Elections) ===
    {
      german: "die Wahl, die Wahlen",
      translations: {
        english: "election, choice",
        ukrainian: "вибори",
        polish: "wybory",
        albanian: "zgjedhjet",
        arabic: "الانتخابات",
        italian: "elezione",
        serbian: "избори"
      }
    },
    {
      german: "wählen",
      translations: {
        english: "to vote, to choose",
        ukrainian: "голосувати, вибирати",
        polish: "wybierać, głosować",
        albanian: "të zgjedhësh",
        arabic: "ينتخب",
        italian: "votare, scegliere",
        serbian: "гласати, бирати"
      }
    },
    {
      german: "der Wähler, die Wähler",
      translations: {
        english: "voter (male)",
        ukrainian: "виборець",
        polish: "wyborca",
        albanian: "zgjedhësi",
        arabic: "الناخب",
        italian: "elettore",
        serbian: "гласач"
      }
    },
    {
      german: "die Wählerin, die Wählerinnen",
      translations: {
        english: "voter (female)",
        ukrainian: "виборчиня",
        polish: "wyborczyni",
        albanian: "zgjedhësja",
        arabic: "الناخبة",
        italian: "elettrice",
        serbian: "гласачица"
      }
    },
    {
      german: "das Wahlrecht (Sg.)",
      translations: {
        english: "right to vote, suffrage",
        ukrainian: "виборче право",
        polish: "prawo wyborcze",
        albanian: "e drejta e votës",
        arabic: "حق التصويت",
        italian: "diritto di voto",
        serbian: "бирачко право"
      }
    },
    {
      german: "die Stimme, die Stimmen",
      translations: {
        english: "vote, voice",
        ukrainian: "голос",
        polish: "głos",
        albanian: "vota, zëri",
        arabic: "صوت",
        italian: "voto, voce",
        serbian: "глас"
      }
    },
    {
      german: "abstimmen",
      translations: {
        english: "to vote (on something)",
        ukrainian: "голосувати",
        polish: "głosować",
        albanian: "të votosh",
        arabic: "يصوّت",
        italian: "votare",
        serbian: "гласати"
      }
    },
    {
      german: "die Abstimmung, die Abstimmungen",
      translations: {
        english: "vote, ballot",
        ukrainian: "голосування",
        polish: "głosowanie",
        albanian: "votimi",
        arabic: "التصويت",
        italian: "votazione",
        serbian: "гласање"
      }
    },
    {
      german: "der Bundestag (Sg.)",
      translations: {
        english: "German Federal Parliament",
        ukrainian: "Бундестаг",
        polish: "Bundestag",
        albanian: "Bundestag",
        arabic: "البرلمان الاتحادي",
        italian: "Bundestag",
        serbian: "Бундестаг"
      }
    },
    {
      german: "der Bundesrat (Sg.)",
      translations: {
        english: "Federal Council (Germany)",
        ukrainian: "Бундесрат",
        polish: "Bundesrat",
        albanian: "Bundesrat",
        arabic: "المجلس الاتحادي",
        italian: "Bundesrat",
        serbian: "Бундесрат"
      }
    },
    {
      german: "der Abgeordnete, die Abgeordneten",
      translations: {
        english: "member of parliament, deputy",
        ukrainian: "депутат",
        polish: "poseł, deputowany",
        albanian: "deputeti",
        arabic: "نائب",
        italian: "deputato",
        serbian: "посланик"
      }
    },
    {
      german: "das Parlament, die Parlamente",
      translations: {
        english: "parliament",
        ukrainian: "парламент",
        polish: "parlament",
        albanian: "parlamenti",
        arabic: "البرلمان",
        italian: "parlamento",
        serbian: "парламент"
      }
    },
    {
      german: "der Bundeskanzler, die Bundeskanzler",
      translations: {
        english: "Federal Chancellor",
        ukrainian: "федеральний канцлер",
        polish: "kanclerz federalny",
        albanian: "kancelari federal",
        arabic: "المستشار الاتحادي",
        italian: "cancelliere federale",
        serbian: "савезни канцелар"
      }
    },
    {
      german: "der Bundespräsident, die Bundespräsidenten",
      translations: {
        english: "Federal President",
        ukrainian: "федеральний президент",
        polish: "prezydent federalny",
        albanian: "presidenti federal",
        arabic: "الرئيس الاتحادي",
        italian: "presidente federale",
        serbian: "савезни председник"
      }
    },
    {
      german: "der Minister, die Minister",
      translations: {
        english: "minister",
        ukrainian: "міністр",
        polish: "minister",
        albanian: "ministri",
        arabic: "الوزير",
        italian: "ministro",
        serbian: "министар"
      }
    },
    {
      german: "das Ministerium, die Ministerien",
      translations: {
        english: "ministry",
        ukrainian: "міністерство",
        polish: "ministerstwo",
        albanian: "ministria",
        arabic: "الوزارة",
        italian: "ministero",
        serbian: "министарство"
      }
    },

    // === Gesellschaft (Society) ===
    {
      german: "die Gesellschaft, die Gesellschaften",
      translations: {
        english: "society, company",
        ukrainian: "суспільство",
        polish: "społeczeństwo",
        albanian: "shoqëria",
        arabic: "المجتمع",
        italian: "società",
        serbian: "друштво"
      }
    },
    {
      german: "gesellschaftlich",
      translations: {
        english: "social, societal",
        ukrainian: "суспільний",
        polish: "społeczny",
        albanian: "shoqëror",
        arabic: "اجتماعي",
        italian: "sociale",
        serbian: "друштвени"
      }
    },
    {
      german: "der Bürger, die Bürger",
      translations: {
        english: "citizen (male)",
        ukrainian: "громадянин",
        polish: "obywatel",
        albanian: "qytetari",
        arabic: "المواطن",
        italian: "cittadino",
        serbian: "грађанин"
      }
    },
    {
      german: "die Bürgerin, die Bürgerinnen",
      translations: {
        english: "citizen (female)",
        ukrainian: "громадянка",
        polish: "obywatelka",
        albanian: "qytetarja",
        arabic: "المواطنة",
        italian: "cittadina",
        serbian: "грађанка"
      }
    },
    {
      german: "bürgerlich",
      translations: {
        english: "civic, bourgeois, civil",
        ukrainian: "громадянський",
        polish: "obywatelski, mieszczański",
        albanian: "qytetar",
        arabic: "مدني",
        italian: "civile, borghese",
        serbian: "грађански"
      }
    },
    {
      german: "die Öffentlichkeit (Sg.)",
      translations: {
        english: "the public",
        ukrainian: "громадськість",
        polish: "opinia publiczna",
        albanian: "publiku",
        arabic: "الرأي العام",
        italian: "opinione pubblica",
        serbian: "јавност"
      }
    },
    {
      german: "öffentlich",
      translations: {
        english: "public",
        ukrainian: "публічний",
        polish: "publiczny",
        albanian: "publik",
        arabic: "عام",
        italian: "pubblico",
        serbian: "јавни"
      }
    },
    {
      german: "die Meinung, die Meinungen",
      translations: {
        english: "opinion",
        ukrainian: "думка",
        polish: "opinia, zdanie",
        albanian: "mendimi",
        arabic: "الرأي",
        italian: "opinione",
        serbian: "мишљење"
      }
    },
    {
      german: "die Meinungsfreiheit (Sg.)",
      translations: {
        english: "freedom of speech/opinion",
        ukrainian: "свобода слова",
        polish: "wolność słowa",
        albanian: "liria e fjalës",
        arabic: "حرية الرأي",
        italian: "libertà di espressione",
        serbian: "слобода говора"
      }
    },
    {
      german: "die Versammlung, die Versammlungen",
      translations: {
        english: "assembly, meeting",
        ukrainian: "зібрання",
        polish: "zgromadzenie",
        albanian: "tubimi",
        arabic: "التجمع",
        italian: "assemblea",
        serbian: "скуп"
      }
    },
    {
      german: "die Demonstration, die Demonstrationen",
      translations: {
        english: "demonstration, protest",
        ukrainian: "демонстрація",
        polish: "demonstracja",
        albanian: "demonstrata",
        arabic: "المظاهرة",
        italian: "manifestazione",
        serbian: "демонстрација"
      }
    },
    {
      german: "demonstrieren",
      translations: {
        english: "to demonstrate, to protest",
        ukrainian: "демонструвати",
        polish: "demonstrować",
        albanian: "të demonstrosh",
        arabic: "يتظاهر",
        italian: "manifestare",
        serbian: "демонстрирати"
      }
    },
    {
      german: "protestieren",
      translations: {
        english: "to protest",
        ukrainian: "протестувати",
        polish: "protestować",
        albanian: "të protestosh",
        arabic: "يحتج",
        italian: "protestare",
        serbian: "протестовати"
      }
    },
    {
      german: "der Protest, die Proteste",
      translations: {
        english: "protest",
        ukrainian: "протест",
        polish: "protest",
        albanian: "protesta",
        arabic: "الاحتجاج",
        italian: "protesta",
        serbian: "протест"
      }
    },
    {
      german: "engagieren (sich)",
      translations: {
        english: "to get involved, to engage",
        ukrainian: "залучатися",
        polish: "angażować się",
        albanian: "të angazhohesh",
        arabic: "يشارك",
        italian: "impegnarsi",
        serbian: "ангажовати се"
      }
    },
    {
      german: "das Engagement, die Engagements",
      translations: {
        english: "commitment, involvement",
        ukrainian: "залучення, участь",
        polish: "zaangażowanie",
        albanian: "angazhimi",
        arabic: "المشاركة",
        italian: "impegno",
        serbian: "ангажман"
      }
    },
    {
      german: "ehrenamtlich",
      translations: {
        english: "voluntary, honorary",
        ukrainian: "волонтерський",
        polish: "honorowy, wolontariacki",
        albanian: "vullnetar",
        arabic: "تطوعي",
        italian: "volontario",
        serbian: "добровољни"
      }
    },
    {
      german: "das Ehrenamt, die Ehrenämter",
      translations: {
        english: "voluntary work, honorary position",
        ukrainian: "волонтерська робота",
        polish: "praca społeczna",
        albanian: "puna vullnetare",
        arabic: "العمل التطوعي",
        italian: "lavoro volontario",
        serbian: "добровољни рад"
      }
    },

    // === Soziale Themen (Social Issues) ===
    {
      german: "sozial",
      translations: {
        english: "social",
        ukrainian: "соціальний",
        polish: "socjalny, społeczny",
        albanian: "social",
        arabic: "اجتماعي",
        italian: "sociale",
        serbian: "социјални"
      }
    },
    {
      german: "die Gerechtigkeit (Sg.)",
      translations: {
        english: "justice, fairness",
        ukrainian: "справедливість",
        polish: "sprawiedliwość",
        albanian: "drejtësia",
        arabic: "العدالة",
        italian: "giustizia",
        serbian: "правда"
      }
    },
    {
      german: "gerecht",
      translations: {
        english: "just, fair",
        ukrainian: "справедливий",
        polish: "sprawiedliwy",
        albanian: "i drejtë",
        arabic: "عادل",
        italian: "giusto",
        serbian: "праведан"
      }
    },
    {
      german: "ungerecht",
      translations: {
        english: "unjust, unfair",
        ukrainian: "несправедливий",
        polish: "niesprawiedliwy",
        albanian: "i padrejtë",
        arabic: "غير عادل",
        italian: "ingiusto",
        serbian: "неправедан"
      }
    },
    {
      german: "die Gleichberechtigung (Sg.)",
      translations: {
        english: "equal rights, equality",
        ukrainian: "рівноправність",
        polish: "równouprawnienie",
        albanian: "të drejtat e barabarta",
        arabic: "المساواة في الحقوق",
        italian: "parità di diritti",
        serbian: "равноправност"
      }
    },
    {
      german: "gleichberechtigt",
      translations: {
        english: "having equal rights",
        ukrainian: "рівноправний",
        polish: "równouprawniony",
        albanian: "me të drejta të barabarta",
        arabic: "متساوي الحقوق",
        italian: "con pari diritti",
        serbian: "равноправан"
      }
    },
    {
      german: "die Diskriminierung, die Diskriminierungen",
      translations: {
        english: "discrimination",
        ukrainian: "дискримінація",
        polish: "dyskryminacja",
        albanian: "diskriminimi",
        arabic: "التمييز",
        italian: "discriminazione",
        serbian: "дискриминација"
      }
    },
    {
      german: "diskriminieren",
      translations: {
        english: "to discriminate",
        ukrainian: "дискримінувати",
        polish: "dyskryminować",
        albanian: "të diskriminosh",
        arabic: "يميّز",
        italian: "discriminare",
        serbian: "дискриминисати"
      }
    },
    {
      german: "die Integration (Sg.)",
      translations: {
        english: "integration",
        ukrainian: "інтеграція",
        polish: "integracja",
        albanian: "integrimi",
        arabic: "الاندماج",
        italian: "integrazione",
        serbian: "интеграција"
      }
    },
    {
      german: "integrieren",
      translations: {
        english: "to integrate",
        ukrainian: "інтегрувати",
        polish: "integrować",
        albanian: "të integrosh",
        arabic: "يدمج",
        italian: "integrare",
        serbian: "интегрисати"
      }
    },
    {
      german: "die Migration (Sg.)",
      translations: {
        english: "migration",
        ukrainian: "міграція",
        polish: "migracja",
        albanian: "migrimi",
        arabic: "الهجرة",
        italian: "migrazione",
        serbian: "миграција"
      }
    },
    {
      german: "der Migrant, die Migranten",
      translations: {
        english: "migrant (male)",
        ukrainian: "мігрант",
        polish: "migrant",
        albanian: "migranti",
        arabic: "المهاجر",
        italian: "migrante",
        serbian: "мигрант"
      }
    },
    {
      german: "die Migrantin, die Migrantinnen",
      translations: {
        english: "migrant (female)",
        ukrainian: "мігрантка",
        polish: "migrantka",
        albanian: "migrantja",
        arabic: "المهاجرة",
        italian: "migrante",
        serbian: "мигранткиња"
      }
    },
    {
      german: "der Flüchtling, die Flüchtlinge",
      translations: {
        english: "refugee",
        ukrainian: "біженець",
        polish: "uchodźca",
        albanian: "refugjati",
        arabic: "اللاجئ",
        italian: "rifugiato",
        serbian: "избеглица"
      }
    },
    {
      german: "das Asyl (Sg.)",
      translations: {
        english: "asylum",
        ukrainian: "притулок",
        polish: "azyl",
        albanian: "azili",
        arabic: "اللجوء",
        italian: "asilo",
        serbian: "азил"
      }
    },
    {
      german: "die Armut (Sg.)",
      translations: {
        english: "poverty",
        ukrainian: "бідність",
        polish: "ubóstwo",
        albanian: "varfëria",
        arabic: "الفقر",
        italian: "povertà",
        serbian: "сиромаштво"
      }
    },
    {
      german: "arm",
      translations: {
        english: "poor",
        ukrainian: "бідний",
        polish: "biedny",
        albanian: "i varfër",
        arabic: "فقير",
        italian: "povero",
        serbian: "сиромашан"
      }
    },
    {
      german: "reich",
      translations: {
        english: "rich",
        ukrainian: "багатий",
        polish: "bogaty",
        albanian: "i pasur",
        arabic: "غني",
        italian: "ricco",
        serbian: "богат"
      }
    },
    {
      german: "die Arbeitslosigkeit (Sg.)",
      translations: {
        english: "unemployment",
        ukrainian: "безробіття",
        polish: "bezrobocie",
        albanian: "papunësia",
        arabic: "البطالة",
        italian: "disoccupazione",
        serbian: "незапосленост"
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
      german: "der Rentner, die Rentner",
      translations: {
        english: "pensioner (male)",
        ukrainian: "пенсіонер",
        polish: "emeryt",
        albanian: "pensionisti",
        arabic: "المتقاعد",
        italian: "pensionato",
        serbian: "пензионер"
      }
    },
    {
      german: "die Rentnerin, die Rentnerinnen",
      translations: {
        english: "pensioner (female)",
        ukrainian: "пенсіонерка",
        polish: "emerytka",
        albanian: "pensionistja",
        arabic: "المتقاعدة",
        italian: "pensionata",
        serbian: "пензионерка"
      }
    },

    // === Medien (Media) ===
    {
      german: "die Medien (Pl.)",
      translations: {
        english: "media",
        ukrainian: "медіа",
        polish: "media",
        albanian: "mediat",
        arabic: "وسائل الإعلام",
        italian: "media",
        serbian: "медији"
      }
    },
    {
      german: "die Presse (Sg.)",
      translations: {
        english: "press",
        ukrainian: "преса",
        polish: "prasa",
        albanian: "shtypi",
        arabic: "الصحافة",
        italian: "stampa",
        serbian: "штампа"
      }
    },
    {
      german: "die Pressefreiheit (Sg.)",
      translations: {
        english: "freedom of the press",
        ukrainian: "свобода преси",
        polish: "wolność prasy",
        albanian: "liria e shtypit",
        arabic: "حرية الصحافة",
        italian: "libertà di stampa",
        serbian: "слобода штампе"
      }
    },
    {
      german: "der Journalist, die Journalisten",
      translations: {
        english: "journalist (male)",
        ukrainian: "журналіст",
        polish: "dziennikarz",
        albanian: "gazetari",
        arabic: "الصحفي",
        italian: "giornalista",
        serbian: "новинар"
      }
    },
    {
      german: "die Journalistin, die Journalistinnen",
      translations: {
        english: "journalist (female)",
        ukrainian: "журналістка",
        polish: "dziennikarka",
        albanian: "gazetarja",
        arabic: "الصحفية",
        italian: "giornalista",
        serbian: "новинарка"
      }
    },
    {
      german: "die Nachricht, die Nachrichten",
      translations: {
        english: "news, message",
        ukrainian: "новина, повідомлення",
        polish: "wiadomość",
        albanian: "lajmi",
        arabic: "الخبر",
        italian: "notizia",
        serbian: "вест"
      }
    },
    {
      german: "berichten",
      translations: {
        english: "to report",
        ukrainian: "повідомляти",
        polish: "informować, relacjonować",
        albanian: "të raportosh",
        arabic: "يقدم تقريراً",
        italian: "riferire",
        serbian: "извештавати"
      }
    },
    {
      german: "der Bericht, die Berichte",
      translations: {
        english: "report",
        ukrainian: "звіт, репортаж",
        polish: "raport, sprawozdanie",
        albanian: "raporti",
        arabic: "التقرير",
        italian: "rapporto",
        serbian: "извештај"
      }
    },
    {
      german: "die Information, die Informationen",
      translations: {
        english: "information",
        ukrainian: "інформація",
        polish: "informacja",
        albanian: "informacioni",
        arabic: "المعلومات",
        italian: "informazione",
        serbian: "информација"
      }
    },
    {
      german: "informieren",
      translations: {
        english: "to inform",
        ukrainian: "інформувати",
        polish: "informować",
        albanian: "të informosh",
        arabic: "يُعلم",
        italian: "informare",
        serbian: "информисати"
      }
    },

    // === Verben für Diskussionen (Verbs for Discussions) ===
    {
      german: "diskutieren",
      translations: {
        english: "to discuss",
        ukrainian: "дискутувати",
        polish: "dyskutować",
        albanian: "të diskutosh",
        arabic: "يناقش",
        italian: "discutere",
        serbian: "дискутовати"
      }
    },
    {
      german: "die Diskussion, die Diskussionen",
      translations: {
        english: "discussion",
        ukrainian: "дискусія",
        polish: "dyskusja",
        albanian: "diskutimi",
        arabic: "النقاش",
        italian: "discussione",
        serbian: "дискусија"
      }
    },
    {
      german: "argumentieren",
      translations: {
        english: "to argue (present arguments)",
        ukrainian: "аргументувати",
        polish: "argumentować",
        albanian: "të argumentosh",
        arabic: "يجادل",
        italian: "argomentare",
        serbian: "аргументовати"
      }
    },
    {
      german: "das Argument, die Argumente",
      translations: {
        english: "argument",
        ukrainian: "аргумент",
        polish: "argument",
        albanian: "argumenti",
        arabic: "الحجة",
        italian: "argomento",
        serbian: "аргумент"
      }
    },
    {
      german: "überzeugen",
      translations: {
        english: "to convince",
        ukrainian: "переконувати",
        polish: "przekonywać",
        albanian: "të bindësh",
        arabic: "يقنع",
        italian: "convincere",
        serbian: "убедити"
      }
    },
    {
      german: "zustimmen",
      translations: {
        english: "to agree",
        ukrainian: "погоджуватися",
        polish: "zgadzać się",
        albanian: "të pajtohesh",
        arabic: "يوافق",
        italian: "essere d'accordo",
        serbian: "сложити се"
      }
    },
    {
      german: "die Zustimmung (Sg.)",
      translations: {
        english: "agreement, approval",
        ukrainian: "згода",
        polish: "zgoda",
        albanian: "miratimi",
        arabic: "الموافقة",
        italian: "consenso",
        serbian: "слагање"
      }
    },
    {
      german: "ablehnen",
      translations: {
        english: "to reject, to decline",
        ukrainian: "відхиляти",
        polish: "odrzucać",
        albanian: "të refuzosh",
        arabic: "يرفض",
        italian: "rifiutare",
        serbian: "одбити"
      }
    },
    {
      german: "die Ablehnung, die Ablehnungen",
      translations: {
        english: "rejection",
        ukrainian: "відмова",
        polish: "odrzucenie",
        albanian: "refuzimi",
        arabic: "الرفض",
        italian: "rifiuto",
        serbian: "одбијање"
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
      german: "die Kritik, die Kritiken",
      translations: {
        english: "criticism",
        ukrainian: "критика",
        polish: "krytyka",
        albanian: "kritika",
        arabic: "النقد",
        italian: "critica",
        serbian: "критика"
      }
    },
    {
      german: "kritisch",
      translations: {
        english: "critical",
        ukrainian: "критичний",
        polish: "krytyczny",
        albanian: "kritik",
        arabic: "نقدي",
        italian: "critico",
        serbian: "критичан"
      }
    },
    {
      german: "befürworten",
      translations: {
        english: "to advocate, to support",
        ukrainian: "підтримувати",
        polish: "popierać",
        albanian: "të mbështesësh",
        arabic: "يؤيد",
        italian: "sostenere",
        serbian: "заговарати"
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
        italian: "richiedere",
        serbian: "захтевати"
      }
    },
    {
      german: "die Forderung, die Forderungen",
      translations: {
        english: "demand",
        ukrainian: "вимога",
        polish: "żądanie",
        albanian: "kërkesa",
        arabic: "المطالبة",
        italian: "richiesta",
        serbian: "захтев"
      }
    },

    // === Wichtige Ausdrücke (Important Expressions) ===
    {
      german: "meiner Meinung nach",
      translations: {
        english: "in my opinion",
        ukrainian: "на мою думку",
        polish: "moim zdaniem",
        albanian: "sipas mendimit tim",
        arabic: "في رأيي",
        italian: "secondo me",
        serbian: "по мом мишљењу"
      }
    },
    {
      german: "einerseits ... andererseits",
      translations: {
        english: "on one hand ... on the other hand",
        ukrainian: "з одного боку ... з іншого боку",
        polish: "z jednej strony ... z drugiej strony",
        albanian: "nga njëra anë ... nga ana tjetër",
        arabic: "من ناحية ... من ناحية أخرى",
        italian: "da una parte ... dall'altra parte",
        serbian: "с једне стране ... с друге стране"
      }
    },
    {
      german: "im Gegensatz zu",
      translations: {
        english: "in contrast to",
        ukrainian: "на відміну від",
        polish: "w przeciwieństwie do",
        albanian: "në kontrast me",
        arabic: "على النقيض من",
        italian: "al contrario di",
        serbian: "за разлику од"
      }
    },
    {
      german: "im Vergleich zu",
      translations: {
        english: "in comparison to",
        ukrainian: "у порівнянні з",
        polish: "w porównaniu do",
        albanian: "në krahasim me",
        arabic: "بالمقارنة مع",
        italian: "in confronto a",
        serbian: "у поређењу са"
      }
    },
    {
      german: "sowohl ... als auch",
      translations: {
        english: "both ... and",
        ukrainian: "як ... так і",
        polish: "zarówno ... jak i",
        albanian: "si ... ashtu edhe",
        arabic: "كلاً من ... و",
        italian: "sia ... sia",
        serbian: "како ... тако и"
      }
    },
    {
      german: "weder ... noch",
      translations: {
        english: "neither ... nor",
        ukrainian: "ні ... ні",
        polish: "ani ... ani",
        albanian: "as ... as",
        arabic: "لا ... ولا",
        italian: "né ... né",
        serbian: "ни ... ни"
      }
    },
    {
      german: "trotzdem",
      translations: {
        english: "nevertheless, despite that",
        ukrainian: "тим не менш",
        polish: "mimo to",
        albanian: "megjithatë",
        arabic: "رغم ذلك",
        italian: "nonostante ciò",
        serbian: "ипак"
      }
    },
    {
      german: "deshalb",
      translations: {
        english: "therefore, that's why",
        ukrainian: "тому",
        polish: "dlatego",
        albanian: "prandaj",
        arabic: "لذلك",
        italian: "perciò",
        serbian: "зато"
      }
    },
    {
      german: "außerdem",
      translations: {
        english: "besides, moreover",
        ukrainian: "крім того",
        polish: "poza tym",
        albanian: "përveç kësaj",
        arabic: "بالإضافة إلى ذلك",
        italian: "inoltre",
        serbian: "осим тога"
      }
    },
    {
      german: "jedoch",
      translations: {
        english: "however",
        ukrainian: "однак",
        polish: "jednak",
        albanian: "megjithatë",
        arabic: "ومع ذلك",
        italian: "tuttavia",
        serbian: "међутим"
      }
    }
  ],

  // Module 12: Wie wird es sein? (How Will It Be?)
  // Extracted from AB Module 12 "Wichtige Wörter"
  12: [
    // === Zukunft (Future) ===
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
      german: "zukünftig",
      translations: {
        english: "future (adj.)",
        ukrainian: "майбутній",
        polish: "przyszły",
        albanian: "i ardhshëm",
        arabic: "مستقبلي",
        italian: "futuro",
        serbian: "будући"
      }
    },
    {
      german: "die Prognose, die Prognosen",
      translations: {
        english: "forecast, prognosis",
        ukrainian: "прогноз",
        polish: "prognoza",
        albanian: "prognoza",
        arabic: "التوقع",
        italian: "prognosi",
        serbian: "прогноза"
      }
    },
    {
      german: "vorhersagen",
      translations: {
        english: "to predict, to forecast",
        ukrainian: "передбачати",
        polish: "przewidywać",
        albanian: "të parashikosh",
        arabic: "يتنبأ",
        italian: "prevedere",
        serbian: "предвидети"
      }
    },
    {
      german: "die Vorhersage, die Vorhersagen",
      translations: {
        english: "prediction, forecast",
        ukrainian: "передбачення",
        polish: "przewidywanie",
        albanian: "parashikimi",
        arabic: "التنبؤ",
        italian: "previsione",
        serbian: "предвиђање"
      }
    },
    {
      german: "vermuten",
      translations: {
        english: "to assume, to suppose",
        ukrainian: "припускати",
        polish: "przypuszczać",
        albanian: "të supozosh",
        arabic: "يفترض",
        italian: "supporre",
        serbian: "претпостављати"
      }
    },
    {
      german: "die Vermutung, die Vermutungen",
      translations: {
        english: "assumption, supposition",
        ukrainian: "припущення",
        polish: "przypuszczenie",
        albanian: "supozimi",
        arabic: "الافتراض",
        italian: "supposizione",
        serbian: "претпоставка"
      }
    },
    {
      german: "wahrscheinlich",
      translations: {
        english: "probably, likely",
        ukrainian: "ймовірно",
        polish: "prawdopodobnie",
        albanian: "me gjasë",
        arabic: "على الأرجح",
        italian: "probabilmente",
        serbian: "вероватно"
      }
    },
    {
      german: "unwahrscheinlich",
      translations: {
        english: "unlikely, improbable",
        ukrainian: "малоймовірний",
        polish: "mało prawdopodobny",
        albanian: "e pamundshme",
        arabic: "غير محتمل",
        italian: "improbabile",
        serbian: "маловероватно"
      }
    },
    {
      german: "möglicherweise",
      translations: {
        english: "possibly",
        ukrainian: "можливо",
        polish: "być może",
        albanian: "ndoshta",
        arabic: "ربما",
        italian: "forse",
        serbian: "могуће"
      }
    },
    {
      german: "voraussichtlich",
      translations: {
        english: "expected, anticipated",
        ukrainian: "очікувано",
        polish: "przewidywany",
        albanian: "i pritshëm",
        arabic: "متوقع",
        italian: "previsto",
        serbian: "очекивано"
      }
    },

    // === Technologie (Technology) ===
    {
      german: "die Technologie, die Technologien",
      translations: {
        english: "technology",
        ukrainian: "технологія",
        polish: "technologia",
        albanian: "teknologjia",
        arabic: "التكنولوجيا",
        italian: "tecnologia",
        serbian: "технологија"
      }
    },
    {
      german: "technisch",
      translations: {
        english: "technical",
        ukrainian: "технічний",
        polish: "techniczny",
        albanian: "teknik",
        arabic: "تقني",
        italian: "tecnico",
        serbian: "технички"
      }
    },
    {
      german: "digital",
      translations: {
        english: "digital",
        ukrainian: "цифровий",
        polish: "cyfrowy",
        albanian: "dixhital",
        arabic: "رقمي",
        italian: "digitale",
        serbian: "дигитални"
      }
    },
    {
      german: "die Digitalisierung (Sg.)",
      translations: {
        english: "digitalization",
        ukrainian: "цифровізація",
        polish: "cyfryzacja",
        albanian: "dixhitalizimi",
        arabic: "الرقمنة",
        italian: "digitalizzazione",
        serbian: "дигитализација"
      }
    },
    {
      german: "künstlich",
      translations: {
        english: "artificial",
        ukrainian: "штучний",
        polish: "sztuczny",
        albanian: "artificial",
        arabic: "اصطناعي",
        italian: "artificiale",
        serbian: "вештачки"
      }
    },
    {
      german: "die künstliche Intelligenz (Sg.)",
      translations: {
        english: "artificial intelligence (AI)",
        ukrainian: "штучний інтелект",
        polish: "sztuczna inteligencja",
        albanian: "inteligjenca artificiale",
        arabic: "الذكاء الاصطناعي",
        italian: "intelligenza artificiale",
        serbian: "вештачка интелигенција"
      }
    },
    {
      german: "der Roboter, die Roboter",
      translations: {
        english: "robot",
        ukrainian: "робот",
        polish: "robot",
        albanian: "roboti",
        arabic: "الروبوت",
        italian: "robot",
        serbian: "робот"
      }
    },
    {
      german: "automatisch",
      translations: {
        english: "automatic",
        ukrainian: "автоматичний",
        polish: "automatyczny",
        albanian: "automatik",
        arabic: "تلقائي",
        italian: "automatico",
        serbian: "аутоматски"
      }
    },
    {
      german: "die Automatisierung (Sg.)",
      translations: {
        english: "automation",
        ukrainian: "автоматизація",
        polish: "automatyzacja",
        albanian: "automatizimi",
        arabic: "الأتمتة",
        italian: "automazione",
        serbian: "аутоматизација"
      }
    },
    {
      german: "das Elektroauto, die Elektroautos",
      translations: {
        english: "electric car",
        ukrainian: "електромобіль",
        polish: "samochód elektryczny",
        albanian: "makina elektrike",
        arabic: "السيارة الكهربائية",
        italian: "auto elettrica",
        serbian: "електрични аутомобил"
      }
    },
    {
      german: "die erneuerbare Energie (Sg.)",
      translations: {
        english: "renewable energy",
        ukrainian: "відновлювана енергія",
        polish: "energia odnawialna",
        albanian: "energjia e rinovueshme",
        arabic: "الطاقة المتجددة",
        italian: "energia rinnovabile",
        serbian: "обновљива енергија"
      }
    },
    {
      german: "die Solarenergie (Sg.)",
      translations: {
        english: "solar energy",
        ukrainian: "сонячна енергія",
        polish: "energia słoneczna",
        albanian: "energjia diellore",
        arabic: "الطاقة الشمسية",
        italian: "energia solare",
        serbian: "соларна енергија"
      }
    },
    {
      german: "die Windenergie (Sg.)",
      translations: {
        english: "wind energy",
        ukrainian: "вітрова енергія",
        polish: "energia wiatrowa",
        albanian: "energjia e erës",
        arabic: "طاقة الرياح",
        italian: "energia eolica",
        serbian: "енергија ветра"
      }
    },

    // === Veränderungen (Changes) ===
    {
      german: "die Veränderung, die Veränderungen",
      translations: {
        english: "change",
        ukrainian: "зміна",
        polish: "zmiana",
        albanian: "ndryshimi",
        arabic: "التغيير",
        italian: "cambiamento",
        serbian: "промена"
      }
    },
    {
      german: "verändern (sich)",
      translations: {
        english: "to change",
        ukrainian: "змінювати(ся)",
        polish: "zmieniać (się)",
        albanian: "të ndryshosh",
        arabic: "يتغير",
        italian: "cambiare",
        serbian: "мењати (се)"
      }
    },
    {
      german: "die Entwicklung, die Entwicklungen",
      translations: {
        english: "development",
        ukrainian: "розвиток",
        polish: "rozwój",
        albanian: "zhvillimi",
        arabic: "التطور",
        italian: "sviluppo",
        serbian: "развој"
      }
    },
    {
      german: "entwickeln (sich)",
      translations: {
        english: "to develop",
        ukrainian: "розвивати(ся)",
        polish: "rozwijać (się)",
        albanian: "të zhvillosh",
        arabic: "يتطور",
        italian: "sviluppare",
        serbian: "развијати (се)"
      }
    },
    {
      german: "der Fortschritt, die Fortschritte",
      translations: {
        english: "progress",
        ukrainian: "прогрес",
        polish: "postęp",
        albanian: "progresi",
        arabic: "التقدم",
        italian: "progresso",
        serbian: "напредак"
      }
    },
    {
      german: "fortschrittlich",
      translations: {
        english: "progressive, advanced",
        ukrainian: "прогресивний",
        polish: "postępowy",
        albanian: "i përparuar",
        arabic: "تقدمي",
        italian: "progressivo",
        serbian: "напредан"
      }
    },
    {
      german: "die Innovation, die Innovationen",
      translations: {
        english: "innovation",
        ukrainian: "інновація",
        polish: "innowacja",
        albanian: "inovacioni",
        arabic: "الابتكار",
        italian: "innovazione",
        serbian: "иновација"
      }
    },
    {
      german: "innovativ",
      translations: {
        english: "innovative",
        ukrainian: "інноваційний",
        polish: "innowacyjny",
        albanian: "inovativ",
        arabic: "مبتكر",
        italian: "innovativo",
        serbian: "иновативан"
      }
    },
    {
      german: "modern",
      translations: {
        english: "modern",
        ukrainian: "сучасний",
        polish: "nowoczesny",
        albanian: "modern",
        arabic: "حديث",
        italian: "moderno",
        serbian: "модеран"
      }
    },
    {
      german: "altmodisch",
      translations: {
        english: "old-fashioned",
        ukrainian: "старомодний",
        polish: "staromodny",
        albanian: "i vjetëruar",
        arabic: "قديم الطراز",
        italian: "antiquato",
        serbian: "старомодан"
      }
    },
    {
      german: "verbessern",
      translations: {
        english: "to improve",
        ukrainian: "покращувати",
        polish: "poprawiać",
        albanian: "të përmirësosh",
        arabic: "يحسّن",
        italian: "migliorare",
        serbian: "побољшати"
      }
    },
    {
      german: "die Verbesserung, die Verbesserungen",
      translations: {
        english: "improvement",
        ukrainian: "покращення",
        polish: "poprawa",
        albanian: "përmirësimi",
        arabic: "التحسين",
        italian: "miglioramento",
        serbian: "побољшање"
      }
    },

    // === Arbeit der Zukunft (Work of the Future) ===
    {
      german: "das Homeoffice (Sg.)",
      translations: {
        english: "home office, working from home",
        ukrainian: "віддалена робота",
        polish: "praca zdalna",
        albanian: "puna nga shtëpia",
        arabic: "العمل من المنزل",
        italian: "lavoro da casa",
        serbian: "рад од куће"
      }
    },
    {
      german: "die Videokonferenz, die Videokonferenzen",
      translations: {
        english: "video conference",
        ukrainian: "відеоконференція",
        polish: "wideokonferencja",
        albanian: "videokonferenca",
        arabic: "مؤتمر الفيديو",
        italian: "videoconferenza",
        serbian: "видео конференција"
      }
    },
    {
      german: "flexibel",
      translations: {
        english: "flexible",
        ukrainian: "гнучкий",
        polish: "elastyczny",
        albanian: "fleksibël",
        arabic: "مرن",
        italian: "flessibile",
        serbian: "флексибилан"
      }
    },
    {
      german: "die Flexibilität (Sg.)",
      translations: {
        english: "flexibility",
        ukrainian: "гнучкість",
        polish: "elastyczność",
        albanian: "fleksibiliteti",
        arabic: "المرونة",
        italian: "flessibilità",
        serbian: "флексибилност"
      }
    },
    {
      german: "die Arbeitszeit, die Arbeitszeiten",
      translations: {
        english: "working hours",
        ukrainian: "робочий час",
        polish: "czas pracy",
        albanian: "orari i punës",
        arabic: "ساعات العمل",
        italian: "orario di lavoro",
        serbian: "радно време"
      }
    },
    {
      german: "die Teilzeit (Sg.)",
      translations: {
        english: "part-time",
        ukrainian: "часткова зайнятість",
        polish: "praca w niepełnym wymiarze",
        albanian: "puna me kohë të pjesshme",
        arabic: "دوام جزئي",
        italian: "part-time",
        serbian: "скраћено радно време"
      }
    },
    {
      german: "die Vollzeit (Sg.)",
      translations: {
        english: "full-time",
        ukrainian: "повна зайнятість",
        polish: "praca na pełen etat",
        albanian: "puna me kohë të plotë",
        arabic: "دوام كامل",
        italian: "tempo pieno",
        serbian: "пуно радно време"
      }
    },
    {
      german: "selbstständig",
      translations: {
        english: "self-employed, independent",
        ukrainian: "самозайнятий",
        polish: "samodzielny",
        albanian: "i pavarur",
        arabic: "يعمل لحسابه الخاص",
        italian: "autonomo",
        serbian: "самозапослен"
      }
    },
    {
      german: "die Selbstständigkeit (Sg.)",
      translations: {
        english: "self-employment",
        ukrainian: "самозайнятість",
        polish: "samodzielność",
        albanian: "pavarësia",
        arabic: "العمل الحر",
        italian: "lavoro autonomo",
        serbian: "самозапосленост"
      }
    },

    // === Lebensstil (Lifestyle) ===
    {
      german: "der Lebensstil, die Lebensstile",
      translations: {
        english: "lifestyle",
        ukrainian: "спосіб життя",
        polish: "styl życia",
        albanian: "stili i jetës",
        arabic: "نمط الحياة",
        italian: "stile di vita",
        serbian: "начин живота"
      }
    },
    {
      german: "die Lebensqualität (Sg.)",
      translations: {
        english: "quality of life",
        ukrainian: "якість життя",
        polish: "jakość życia",
        albanian: "cilësia e jetës",
        arabic: "جودة الحياة",
        italian: "qualità della vita",
        serbian: "квалитет живота"
      }
    },
    {
      german: "nachhaltig",
      translations: {
        english: "sustainable",
        ukrainian: "сталий",
        polish: "zrównoważony",
        albanian: "i qëndrueshëm",
        arabic: "مستدام",
        italian: "sostenibile",
        serbian: "одржив"
      }
    },
    {
      german: "die Nachhaltigkeit (Sg.)",
      translations: {
        english: "sustainability",
        ukrainian: "сталість",
        polish: "zrównoważony rozwój",
        albanian: "qëndrueshmëria",
        arabic: "الاستدامة",
        italian: "sostenibilità",
        serbian: "одрживост"
      }
    },
    {
      german: "umweltfreundlich",
      translations: {
        english: "environmentally friendly",
        ukrainian: "екологічний",
        polish: "przyjazny dla środowiska",
        albanian: "miqësor me mjedisin",
        arabic: "صديق للبيئة",
        italian: "ecologico",
        serbian: "еколошки"
      }
    },
    {
      german: "der Konsum (Sg.)",
      translations: {
        english: "consumption",
        ukrainian: "споживання",
        polish: "konsumpcja",
        albanian: "konsumi",
        arabic: "الاستهلاك",
        italian: "consumo",
        serbian: "потрошња"
      }
    },
    {
      german: "konsumieren",
      translations: {
        english: "to consume",
        ukrainian: "споживати",
        polish: "konsumować",
        albanian: "të konsumosh",
        arabic: "يستهلك",
        italian: "consumare",
        serbian: "конзумирати"
      }
    },
    {
      german: "verzichten (auf)",
      translations: {
        english: "to do without, to give up",
        ukrainian: "відмовлятися (від)",
        polish: "rezygnować (z)",
        albanian: "të heqësh dorë",
        arabic: "يتخلى عن",
        italian: "rinunciare (a)",
        serbian: "одрећи се"
      }
    },
    {
      german: "der Verzicht (Sg.)",
      translations: {
        english: "renunciation, giving up",
        ukrainian: "відмова",
        polish: "rezygnacja",
        albanian: "heqja dorë",
        arabic: "التخلي",
        italian: "rinuncia",
        serbian: "одрицање"
      }
    },

    // === Wohnen der Zukunft (Living in the Future) ===
    {
      german: "das Smart Home, die Smart Homes",
      translations: {
        english: "smart home",
        ukrainian: "розумний дім",
        polish: "inteligentny dom",
        albanian: "shtëpia inteligjente",
        arabic: "المنزل الذكي",
        italian: "casa intelligente",
        serbian: "паметна кућа"
      }
    },
    {
      german: "energieeffizient",
      translations: {
        english: "energy efficient",
        ukrainian: "енергоефективний",
        polish: "energooszczędny",
        albanian: "efikas në energji",
        arabic: "موفر للطاقة",
        italian: "a basso consumo energetico",
        serbian: "енергетски ефикасан"
      }
    },
    {
      german: "die Wohngemeinschaft, die Wohngemeinschaften",
      translations: {
        english: "shared apartment, flat share",
        ukrainian: "спільне проживання",
        polish: "mieszkanie dzielone",
        albanian: "banesa e përbashkët",
        arabic: "السكن المشترك",
        italian: "convivenza",
        serbian: "заједничко становање"
      }
    },
    {
      german: "das Mehrfamilienhaus, die Mehrfamilienhäuser",
      translations: {
        english: "multi-family house",
        ukrainian: "багатоквартирний будинок",
        polish: "dom wielorodzinny",
        albanian: "shtëpia shumëfamiljare",
        arabic: "بناية سكنية متعددة",
        italian: "condominio",
        serbian: "вишепородична кућа"
      }
    },
    {
      german: "die Stadtplanung (Sg.)",
      translations: {
        english: "urban planning",
        ukrainian: "міське планування",
        polish: "planowanie miejskie",
        albanian: "planifikimi urban",
        arabic: "التخطيط العمراني",
        italian: "pianificazione urbana",
        serbian: "урбанистичко планирање"
      }
    },

    // === Hoffnungen und Sorgen (Hopes and Concerns) ===
    {
      german: "die Hoffnung, die Hoffnungen",
      translations: {
        english: "hope",
        ukrainian: "надія",
        polish: "nadzieja",
        albanian: "shpresa",
        arabic: "الأمل",
        italian: "speranza",
        serbian: "нада"
      }
    },
    {
      german: "hoffen",
      translations: {
        english: "to hope",
        ukrainian: "сподіватися",
        polish: "mieć nadzieję",
        albanian: "të shpresosh",
        arabic: "يأمل",
        italian: "sperare",
        serbian: "надати се"
      }
    },
    {
      german: "hoffentlich",
      translations: {
        english: "hopefully",
        ukrainian: "сподіваюся",
        polish: "mam nadzieję",
        albanian: "me shpresë",
        arabic: "نأمل",
        italian: "speriamo",
        serbian: "надамо се"
      }
    },
    {
      german: "die Sorge, die Sorgen",
      translations: {
        english: "worry, concern",
        ukrainian: "турбота, хвилювання",
        polish: "troska, zmartwienie",
        albanian: "shqetësimi",
        arabic: "القلق",
        italian: "preoccupazione",
        serbian: "брига"
      }
    },
    {
      german: "sorgen (sich)",
      translations: {
        english: "to worry",
        ukrainian: "турбуватися",
        polish: "martwić się",
        albanian: "të shqetësohesh",
        arabic: "يقلق",
        italian: "preoccuparsi",
        serbian: "бринути се"
      }
    },
    {
      german: "die Angst, die Ängste",
      translations: {
        english: "fear, anxiety",
        ukrainian: "страх",
        polish: "strach",
        albanian: "frika",
        arabic: "الخوف",
        italian: "paura",
        serbian: "страх"
      }
    },
    {
      german: "befürchten",
      translations: {
        english: "to fear, to be afraid of",
        ukrainian: "побоюватися",
        polish: "obawiać się",
        albanian: "të frikësohesh",
        arabic: "يخشى",
        italian: "temere",
        serbian: "страховати"
      }
    },
    {
      german: "die Befürchtung, die Befürchtungen",
      translations: {
        english: "fear, apprehension",
        ukrainian: "побоювання",
        polish: "obawa",
        albanian: "frika",
        arabic: "الخشية",
        italian: "timore",
        serbian: "страховање"
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
      german: "pessimistisch",
      translations: {
        english: "pessimistic",
        ukrainian: "песимістичний",
        polish: "pesymistyczny",
        albanian: "pesimist",
        arabic: "متشائم",
        italian: "pessimista",
        serbian: "песимистичан"
      }
    },
    {
      german: "realistisch",
      translations: {
        english: "realistic",
        ukrainian: "реалістичний",
        polish: "realistyczny",
        albanian: "realist",
        arabic: "واقعي",
        italian: "realistico",
        serbian: "реалистичан"
      }
    },

    // === Wichtige Verben (Important Verbs) ===
    {
      german: "planen",
      translations: {
        english: "to plan",
        ukrainian: "планувати",
        polish: "planować",
        albanian: "të planifikosh",
        arabic: "يخطط",
        italian: "pianificare",
        serbian: "планирати"
      }
    },
    {
      german: "der Plan, die Pläne",
      translations: {
        english: "plan",
        ukrainian: "план",
        polish: "plan",
        albanian: "plani",
        arabic: "الخطة",
        italian: "piano",
        serbian: "план"
      }
    },
    {
      german: "erwarten",
      translations: {
        english: "to expect",
        ukrainian: "очікувати",
        polish: "oczekiwać",
        albanian: "të presësh",
        arabic: "يتوقع",
        italian: "aspettarsi",
        serbian: "очекивати"
      }
    },
    {
      german: "die Erwartung, die Erwartungen",
      translations: {
        english: "expectation",
        ukrainian: "очікування",
        polish: "oczekiwanie",
        albanian: "pritja",
        arabic: "التوقع",
        italian: "aspettativa",
        serbian: "очекивање"
      }
    },
    {
      german: "träumen",
      translations: {
        english: "to dream",
        ukrainian: "мріяти",
        polish: "marzyć",
        albanian: "të ëndërrosh",
        arabic: "يحلم",
        italian: "sognare",
        serbian: "сањати"
      }
    },
    {
      german: "der Traum, die Träume",
      translations: {
        english: "dream",
        ukrainian: "мрія",
        polish: "marzenie",
        albanian: "ëndrra",
        arabic: "الحلم",
        italian: "sogno",
        serbian: "сан"
      }
    },
    {
      german: "wünschen (sich)",
      translations: {
        english: "to wish",
        ukrainian: "бажати",
        polish: "życzyć sobie",
        albanian: "të dëshirosh",
        arabic: "يتمنى",
        italian: "desiderare",
        serbian: "желети"
      }
    },
    {
      german: "der Wunsch, die Wünsche",
      translations: {
        english: "wish",
        ukrainian: "бажання",
        polish: "życzenie",
        albanian: "dëshira",
        arabic: "الأمنية",
        italian: "desiderio",
        serbian: "жеља"
      }
    },
    {
      german: "vorstellen (sich)",
      translations: {
        english: "to imagine",
        ukrainian: "уявляти",
        polish: "wyobrażać sobie",
        albanian: "të përfytyrosh",
        arabic: "يتخيل",
        italian: "immaginare",
        serbian: "замишљати"
      }
    },
    {
      german: "die Vorstellung, die Vorstellungen",
      translations: {
        english: "idea, imagination",
        ukrainian: "уявлення",
        polish: "wyobrażenie",
        albanian: "përfytyrimi",
        arabic: "التصور",
        italian: "immaginazione",
        serbian: "замисао"
      }
    },

    // === Zeitausdrücke (Time Expressions) ===
    {
      german: "in Zukunft",
      translations: {
        english: "in the future",
        ukrainian: "у майбутньому",
        polish: "w przyszłości",
        albanian: "në të ardhmen",
        arabic: "في المستقبل",
        italian: "in futuro",
        serbian: "у будућности"
      }
    },
    {
      german: "irgendwann",
      translations: {
        english: "someday, sometime",
        ukrainian: "колись",
        polish: "kiedyś",
        albanian: "dikur",
        arabic: "يوماً ما",
        italian: "un giorno",
        serbian: "једном"
      }
    },
    {
      german: "bald",
      translations: {
        english: "soon",
        ukrainian: "скоро",
        polish: "wkrótce",
        albanian: "së shpejti",
        arabic: "قريباً",
        italian: "presto",
        serbian: "ускоро"
      }
    },
    {
      german: "demnächst",
      translations: {
        english: "soon, shortly",
        ukrainian: "найближчим часом",
        polish: "wkrótce",
        albanian: "së shpejti",
        arabic: "قريباً",
        italian: "prossimamente",
        serbian: "ускоро"
      }
    },
    {
      german: "langfristig",
      translations: {
        english: "long-term",
        ukrainian: "довгостроковий",
        polish: "długoterminowy",
        albanian: "afatgjatë",
        arabic: "على المدى الطويل",
        italian: "a lungo termine",
        serbian: "дугорочан"
      }
    },
    {
      german: "kurzfristig",
      translations: {
        english: "short-term",
        ukrainian: "короткостроковий",
        polish: "krótkoterminowy",
        albanian: "afatshkurtër",
        arabic: "على المدى القصير",
        italian: "a breve termine",
        serbian: "краткорочан"
      }
    },
    {
      german: "mittelfristig",
      translations: {
        english: "medium-term",
        ukrainian: "середньостроковий",
        polish: "średnioterminowy",
        albanian: "afatmesëm",
        arabic: "على المدى المتوسط",
        italian: "a medio termine",
        serbian: "средњорочан"
      }
    }
  ],
});

export const B1_2_ALL_SECTIONS = [7, 8, 9, 10, 11, 12];
