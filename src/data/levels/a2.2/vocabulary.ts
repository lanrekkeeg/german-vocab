import { Card, Translations } from '../../../types';

// A2.2 covers modules 8-14
export const A2_2_ALL_SECTIONS = [8, 9, 10, 11, 12, 13, 14];

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
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/a2.2/words/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const a2_2_Vocabulary: Record<string, Card[]> = addAudioPaths({

  // MODULE 8: Neue Chancen (New Chances - Career/Further Education)
  "8": [
    {
      "german": "das Berufsinformationszentrum, die Berufsinformationszentren",
      "translations": {
        "english": "career information center",
        "ukrainian": "центр професійної інформації",
        "polish": "centrum informacji zawodowej",
        "albanian": "qendra e informacionit të karrierës",
        "arabic": "مركز معلومات المهنة",
        "italian": "centro informazioni professionale",
        "serbian": "центар за професионалне информације"
      }
    },
    {
      "german": "der Arbeitsberater, die Arbeitsberater",
      "translations": {
        "english": "employment counselor",
        "ukrainian": "консультант з працевлаштування",
        "polish": "doradca zawodowy",
        "albanian": "këshilltari i punësimit",
        "arabic": "مستشار التوظيف",
        "italian": "consulente del lavoro",
        "serbian": "саветник за запошљавање"
      }
    },
    {
      "german": "die Förderung, die Förderungen",
      "translations": {
        "english": "funding, support",
        "ukrainian": "фінансування, підтримка",
        "polish": "wsparcie, dofinansowanie",
        "albanian": "mbështetja, financimi",
        "arabic": "الدعم، التمويل",
        "italian": "sostegno, finanziamento",
        "serbian": "финансирање, подршка"
      }
    },
    {
      "german": "die Fortbildung, die Fortbildungen",
      "translations": {
        "english": "further training, continuing education",
        "ukrainian": "підвищення кваліфікації",
        "polish": "kształcenie ustawiczne",
        "albanian": "trajnimi i mëtejshëm",
        "arabic": "التدريب المتقدم",
        "italian": "formazione continua",
        "serbian": "даље усавршавање"
      }
    },
    {
      "german": "die Weiterbildung, die Weiterbildungen",
      "translations": {
        "english": "further education",
        "ukrainian": "подальше навчання",
        "polish": "dalsze kształcenie",
        "albanian": "edukimi i mëtejshëm",
        "arabic": "التعليم المستمر",
        "italian": "formazione continua",
        "serbian": "даље образовање"
      }
    },
    {
      "german": "die Bundesagentur für Arbeit",
      "translations": {
        "english": "Federal Employment Agency",
        "ukrainian": "Федеральне агентство з праці",
        "polish": "Federalna Agencja Pracy",
        "albanian": "Agjencia Federale e Punësimit",
        "arabic": "الوكالة الفيدرالية للعمل",
        "italian": "Agenzia Federale del Lavoro",
        "serbian": "Савезна агенција за рад"
      }
    },
    {
      "german": "der Kurs, die Kurse",
      "translations": {
        "english": "course",
        "ukrainian": "курс",
        "polish": "kurs",
        "albanian": "kursi",
        "arabic": "الدورة",
        "italian": "corso",
        "serbian": "курс"
      }
    },
    {
      "german": "das Kursprogramm, die Kursprogramme",
      "translations": {
        "english": "course program",
        "ukrainian": "програма курсу",
        "polish": "program kursu",
        "albanian": "programi i kursit",
        "arabic": "برنامج الدورة",
        "italian": "programma del corso",
        "serbian": "програм курса"
      }
    },
    {
      "german": "der Termin, die Termine",
      "translations": {
        "english": "appointment, deadline",
        "ukrainian": "зустріч, термін",
        "polish": "termin, spotkanie",
        "albanian": "takimi, afati",
        "arabic": "الموعد",
        "italian": "appuntamento, scadenza",
        "serbian": "термин, рок"
      }
    },
    {
      "german": "die Stelle, die Stellen",
      "translations": {
        "english": "position, job",
        "ukrainian": "посада, робоче місце",
        "polish": "stanowisko",
        "albanian": "pozicioni, vendi i punës",
        "arabic": "الوظيفة",
        "italian": "posto, posizione",
        "serbian": "позиција, радно место"
      }
    },
    {
      "german": "die Berufschance, die Berufschancen",
      "translations": {
        "english": "career opportunity",
        "ukrainian": "кар'єрна можливість",
        "polish": "szansa zawodowa",
        "albanian": "mundësia e karrierës",
        "arabic": "فرصة مهنية",
        "italian": "opportunità professionale",
        "serbian": "професионална прилика"
      }
    },
    {
      "german": "der Arbeitsmarkt, die Arbeitsmärkte",
      "translations": {
        "english": "job market",
        "ukrainian": "ринок праці",
        "polish": "rynek pracy",
        "albanian": "tregu i punës",
        "arabic": "سوق العمل",
        "italian": "mercato del lavoro",
        "serbian": "тржиште рада"
      }
    },
    {
      "german": "die Ausbildung, die Ausbildungen",
      "translations": {
        "english": "training, apprenticeship",
        "ukrainian": "навчання, професійна підготовка",
        "polish": "szkolenie, wykształcenie",
        "albanian": "trajnimi",
        "arabic": "التدريب",
        "italian": "formazione",
        "serbian": "обука, стручно образовање"
      }
    },
    {
      "german": "das Ausbildungsangebot, die Ausbildungsangebote",
      "translations": {
        "english": "training offer",
        "ukrainian": "пропозиція навчання",
        "polish": "oferta szkolenia",
        "albanian": "oferta e trajnimit",
        "arabic": "عرض التدريب",
        "italian": "offerta di formazione",
        "serbian": "понуда за обуку"
      }
    },
    {
      "german": "das Softwareprogramm, die Softwareprogramme",
      "translations": {
        "english": "software program",
        "ukrainian": "програмне забезпечення",
        "polish": "program komputerowy",
        "albanian": "programi software",
        "arabic": "برنامج الكمبيوتر",
        "italian": "programma software",
        "serbian": "софтверски програм"
      }
    },
    {
      "german": "die Computerkenntnisse",
      "translations": {
        "english": "computer skills",
        "ukrainian": "комп'ютерні навички",
        "polish": "umiejętności komputerowe",
        "albanian": "aftësitë kompjuterike",
        "arabic": "مهارات الكمبيوتر",
        "italian": "competenze informatiche",
        "serbian": "компјутерске вештине"
      }
    },
    {
      "german": "die Babypause, die Babypausen",
      "translations": {
        "english": "maternity break",
        "ukrainian": "декретна відпустка",
        "polish": "urlop macierzyński",
        "albanian": "pushimi i lehonisë",
        "arabic": "إجازة الأمومة",
        "italian": "congedo di maternità",
        "serbian": "породиљско одсуство"
      }
    },
    {
      "german": "die Buchhalterin, die Buchhalterinnen",
      "translations": {
        "english": "accountant (female)",
        "ukrainian": "бухгалтерка",
        "polish": "księgowa",
        "albanian": "kontabilistja",
        "arabic": "المحاسبة",
        "italian": "contabile",
        "serbian": "књиговоткиња"
      }
    },
    {
      "german": "der Heimwerkerkurs, die Heimwerkerkurse",
      "translations": {
        "english": "DIY course",
        "ukrainian": "курс майстра на всі руки",
        "polish": "kurs majsterkowania",
        "albanian": "kursi i punëve shtëpiake",
        "arabic": "دورة الأعمال اليدوية",
        "italian": "corso di fai da te",
        "serbian": "курс за мајсторисање"
      }
    },
    {
      "german": "die Präsentation, die Präsentationen",
      "translations": {
        "english": "presentation",
        "ukrainian": "презентація",
        "polish": "prezentacja",
        "albanian": "prezantimi",
        "arabic": "العرض التقديمي",
        "italian": "presentazione",
        "serbian": "презентација"
      }
    },
    {
      "german": "die Tabellenkalkulation, die Tabellenkalkulationen",
      "translations": {
        "english": "spreadsheet",
        "ukrainian": "електронна таблиця",
        "polish": "arkusz kalkulacyjny",
        "albanian": "tabela llogaritëse",
        "arabic": "جدول البيانات",
        "italian": "foglio di calcolo",
        "serbian": "табеларни прорачун"
      }
    },
    {
      "german": "die Existenz, die Existenzen",
      "translations": {
        "english": "existence, livelihood",
        "ukrainian": "існування",
        "polish": "egzystencja",
        "albanian": "ekzistenca",
        "arabic": "الوجود",
        "italian": "esistenza",
        "serbian": "егзистенција"
      }
    },
    {
      "german": "der Existenzgründerkurs, die Existenzgründerkurse",
      "translations": {
        "english": "business start-up course",
        "ukrainian": "курс для початківців підприємців",
        "polish": "kurs dla początkujących przedsiębiorców",
        "albanian": "kursi për fillimin e biznesit",
        "arabic": "دورة بدء العمل التجاري",
        "italian": "corso per avvio d'impresa",
        "serbian": "курс за покретање посла"
      }
    },
    {
      "german": "die Selbstständigkeit",
      "translations": {
        "english": "self-employment, independence",
        "ukrainian": "самозайнятість",
        "polish": "samodzielność zawodowa",
        "albanian": "vetëpunësimi",
        "arabic": "العمل الحر",
        "italian": "lavoro autonomo",
        "serbian": "самосталност, самозапошљавање"
      }
    },
    {
      "german": "das Geschäft, die Geschäfte",
      "translations": {
        "english": "business, shop",
        "ukrainian": "бізнес, магазин",
        "polish": "biznes, sklep",
        "albanian": "biznesi, dyqani",
        "arabic": "العمل التجاري",
        "italian": "negozio, affari",
        "serbian": "посао, продавница"
      }
    },
    {
      "german": "die Chance, die Chancen",
      "translations": {
        "english": "chance, opportunity",
        "ukrainian": "шанс, можливість",
        "polish": "szansa",
        "albanian": "mundësia, shansi",
        "arabic": "الفرصة",
        "italian": "opportunità",
        "serbian": "шанса, прилика"
      }
    },
    {
      "german": "die Finanzierung, die Finanzierungen",
      "translations": {
        "english": "financing",
        "ukrainian": "фінансування",
        "polish": "finansowanie",
        "albanian": "financimi",
        "arabic": "التمويل",
        "italian": "finanziamento",
        "serbian": "финансирање"
      }
    },
    {
      "german": "die Möglichkeit, die Möglichkeiten",
      "translations": {
        "english": "possibility, opportunity",
        "ukrainian": "можливість",
        "polish": "możliwość",
        "albanian": "mundësia",
        "arabic": "الإمكانية",
        "italian": "possibilità",
        "serbian": "могућност"
      }
    },
    {
      "german": "die Ausgabe, die Ausgaben",
      "translations": {
        "english": "expense, edition",
        "ukrainian": "витрата, видання",
        "polish": "wydatek, wydanie",
        "albanian": "shpenzimi, edicioni",
        "arabic": "النفقات",
        "italian": "spesa, edizione",
        "serbian": "трошак, издање"
      }
    },
    {
      "german": "der Nähkurs, die Nähkurse",
      "translations": {
        "english": "sewing course",
        "ukrainian": "курс шиття",
        "polish": "kurs szycia",
        "albanian": "kursi i qepjes",
        "arabic": "دورة الخياطة",
        "italian": "corso di cucito",
        "serbian": "курс шивења"
      }
    }
  ],

  // MODULE 9: Gesund leben (Healthy Living)
  "9": [
    {
      "german": "die Gesundheit",
      "translations": {"english": "health", "ukrainian": "здоров'я", "polish": "zdrowie", "albanian": "shëndeti", "arabic": "الصحة", "italian": "salute", "serbian": "здравље"}
    },
    {
      "german": "sich entspannen",
      "translations": {"english": "to relax", "ukrainian": "розслаблятися", "polish": "odpoczywać", "albanian": "të relaksohesh", "arabic": "يسترخي", "italian": "rilassarsi", "serbian": "опустити се"}
    },
    {
      "german": "sich bewegen",
      "translations": {"english": "to move, to exercise", "ukrainian": "рухатися", "polish": "poruszać się", "albanian": "të lëvizësh", "arabic": "يتحرك", "italian": "muoversi", "serbian": "кретати се, вежбати"}
    },
    {
      "german": "sich gesund ernähren",
      "translations": {"english": "to eat healthy", "ukrainian": "харчуватися здорово", "polish": "zdrowo się odżywiać", "albanian": "të ushqehesh shëndetshëm", "arabic": "يتغذى بشكل صحي", "italian": "nutrirsi in modo sano", "serbian": "здраво се хранити"}
    },
    {
      "german": "abnehmen",
      "translations": {"english": "to lose weight", "ukrainian": "худнути", "polish": "schudnąć", "albanian": "të dobësohesh", "arabic": "ينقص الوزن", "italian": "dimagrire", "serbian": "смршати"}
    },
    {
      "german": "zunehmen",
      "translations": {"english": "to gain weight", "ukrainian": "набирати вагу", "polish": "przytyć", "albanian": "të shtohesh në peshë", "arabic": "يزيد الوزن", "italian": "ingrassare", "serbian": "удебљати се"}
    },
    {
      "german": "der Gesundheits-Check, die Gesundheits-Checks",
      "translations": {"english": "health check-up", "ukrainian": "медичний огляд", "polish": "badanie kontrolne", "albanian": "kontrolli shëndetësor", "arabic": "الفحص الطبي", "italian": "controllo sanitario", "serbian": "здравствени преглед"}
    },
    {
      "german": "die Vorsorgeuntersuchung, die Vorsorgeuntersuchungen",
      "translations": {"english": "preventive medical examination", "ukrainian": "профілактичний огляд", "polish": "badanie profilaktyczne", "albanian": "ekzaminimi parandalues", "arabic": "الفحص الوقائي", "italian": "esame preventivo", "serbian": "превентивни преглед"}
    },
    {
      "german": "die Laboruntersuchung, die Laboruntersuchungen",
      "translations": {"english": "laboratory test", "ukrainian": "лабораторне дослідження", "polish": "badanie laboratoryjne", "albanian": "analiza laboratorike", "arabic": "الفحص المخبري", "italian": "esame di laboratorio", "serbian": "лабораторијска анализа"}
    },
    {
      "german": "der Blutdruck",
      "translations": {"english": "blood pressure", "ukrainian": "кров'яний тиск", "polish": "ciśnienie krwi", "albanian": "presioni i gjakut", "arabic": "ضغط الدم", "italian": "pressione sanguigna", "serbian": "крвни притисак"}
    },
    {
      "german": "die Blutwerte, die Blutwerte",
      "translations": {"english": "blood values", "ukrainian": "показники крові", "polish": "wyniki krwi", "albanian": "vlerat e gjakut", "arabic": "قيم الدم", "italian": "valori del sangue", "serbian": "вредности крви"}
    },
    {
      "german": "der Cholesterinwert, die Cholesterinwerte",
      "translations": {"english": "cholesterol level", "ukrainian": "рівень холестерину", "polish": "poziom cholesterolu", "albanian": "niveli i kolesterolit", "arabic": "مستوى الكوليسترول", "italian": "livello di colesterolo", "serbian": "ниво холестерола"}
    },
    {
      "german": "die Impfung, die Impfungen",
      "translations": {"english": "vaccination", "ukrainian": "щеплення", "polish": "szczepienie", "albanian": "vaksinimi", "arabic": "التطعيم", "italian": "vaccinazione", "serbian": "вакцинација"}
    },
    {
      "german": "gegen Tetanus impfen",
      "translations": {"english": "to vaccinate against tetanus", "ukrainian": "щепити від правця", "polish": "szczepić przeciwko tężcowi", "albanian": "të vaksinosh kundër tetanozit", "arabic": "يطعم ضد الكزاز", "italian": "vaccinare contro il tetano", "serbian": "вакцинисати против тетануса"}
    },
    {
      "german": "gegen Grippe impfen",
      "translations": {"english": "to vaccinate against flu", "ukrainian": "щепити від грипу", "polish": "szczepić przeciwko grypie", "albanian": "të vaksinosh kundër gripit", "arabic": "يطعم ضد الإنفلونزا", "italian": "vaccinare contro l'influenza", "serbian": "вакцинисати против грипа"}
    },
    {
      "german": "das Medikament, die Medikamente",
      "translations": {"english": "medication", "ukrainian": "ліки", "polish": "lek", "albanian": "ilaçi", "arabic": "الدواء", "italian": "medicinale", "serbian": "лек"}
    },
    {
      "german": "die Tablette, die Tabletten",
      "translations": {"english": "tablet, pill", "ukrainian": "таблетка", "polish": "tabletka", "albanian": "tableta", "arabic": "الحبة", "italian": "compressa", "serbian": "таблета"}
    },
    {
      "german": "die Spritze, die Spritzen",
      "translations": {"english": "injection, syringe", "ukrainian": "укол, шприц", "polish": "zastrzyk, strzykawka", "albanian": "injeksioni, shiringa", "arabic": "الحقنة", "italian": "iniezione, siringa", "serbian": "ињекција, шприц"}
    },
    {
      "german": "die Salbe, die Salben",
      "translations": {"english": "ointment, cream", "ukrainian": "мазь", "polish": "maść", "albanian": "pomada", "arabic": "المرهم", "italian": "pomata", "serbian": "маст"}
    },
    {
      "german": "das Pflaster, die Pflaster",
      "translations": {"english": "bandage, plaster", "ukrainian": "пластир", "polish": "plaster", "albanian": "fashë", "arabic": "اللاصقة الطبية", "italian": "cerotto", "serbian": "фластер"}
    },
    {
      "german": "die Nebenwirkungen, die Nebenwirkungen",
      "translations": {"english": "side effects", "ukrainian": "побічні ефекти", "polish": "działania niepożądane", "albanian": "efektet anësore", "arabic": "الآثار الجانبية", "italian": "effetti collaterali", "serbian": "нежељена дејства"}
    },
    {
      "german": "der Beipackzettel, die Beipackzettel",
      "translations": {"english": "package insert", "ukrainian": "інструкція до ліків", "polish": "ulotka", "albanian": "fletushka e ilaçit", "arabic": "نشرة الدواء", "italian": "foglietto illustrativo", "serbian": "упутство за лек"}
    },
    {
      "german": "das Rezept, die Rezepte",
      "translations": {"english": "prescription", "ukrainian": "рецепт", "polish": "recepta", "albanian": "receta", "arabic": "الوصفة الطبية", "italian": "ricetta", "serbian": "рецепт"}
    },
    {
      "german": "die Hausapotheke, die Hausapotheken",
      "translations": {"english": "home medicine cabinet", "ukrainian": "домашня аптечка", "polish": "apteczka domowa", "albanian": "kit i parë ndihmës", "arabic": "صيدلية المنزل", "italian": "armadietto dei medicinali", "serbian": "кућна апотека"}
    },
    {
      "german": "das Desinfektionsmittel, die Desinfektionsmittel",
      "translations": {"english": "disinfectant", "ukrainian": "дезінфікуючий засіб", "polish": "środek dezynfekujący", "albanian": "dezinfektanti", "arabic": "المطهر", "italian": "disinfettante", "serbian": "средство за дезинфекцију"}
    },
    {
      "german": "der Verband, die Verbände",
      "translations": {"english": "bandage", "ukrainian": "бинт", "polish": "bandaż", "albanian": "fashë", "arabic": "الضماد", "italian": "benda", "serbian": "завој"}
    },
    {
      "german": "das Fieberthermometer, die Fieberthermometer",
      "translations": {"english": "fever thermometer", "ukrainian": "термометр", "polish": "termometr", "albanian": "termometri", "arabic": "مقياس الحرارة", "italian": "termometro", "serbian": "топломер"}
    },
    {
      "german": "die Nasentropfen, die Nasentropfen",
      "translations": {"english": "nose drops", "ukrainian": "краплі в ніс", "polish": "krople do nosa", "albanian": "pika për hundë", "arabic": "قطرات الأنف", "italian": "gocce nasali", "serbian": "капи за нос"}
    },
    {
      "german": "die Pinzette, die Pinzetten",
      "translations": {"english": "tweezers", "ukrainian": "пінцет", "polish": "pęseta", "albanian": "pinca", "arabic": "الملقط", "italian": "pinzetta", "serbian": "пинцета"}
    },
    {
      "german": "das Schmerzmittel, die Schmerzmittel",
      "translations": {"english": "painkiller", "ukrainian": "знеболювальне", "polish": "środek przeciwbólowy", "albanian": "ilaç dhimbjesh", "arabic": "مسكن الألم", "italian": "analgesico", "serbian": "средство против болова"}
    },
    {
      "german": "die Brandsalbe, die Brandsalben",
      "translations": {"english": "burn ointment", "ukrainian": "мазь від опіків", "polish": "maść na oparzenia", "albanian": "pomadë për djegie", "arabic": "مرهم الحروق", "italian": "pomata per ustioni", "serbian": "маст за опекотине"}
    },
    {
      "german": "die Ernährung",
      "translations": {"english": "nutrition, diet", "ukrainian": "харчування", "polish": "odżywianie", "albanian": "ushqimi", "arabic": "التغذية", "italian": "alimentazione", "serbian": "исхрана"}
    },
    {
      "german": "das Nahrungsmittel, die Nahrungsmittel",
      "translations": {"english": "food", "ukrainian": "продукт харчування", "polish": "środek spożywczy", "albanian": "ushqimi", "arabic": "المواد الغذائية", "italian": "alimento", "serbian": "намирница"}
    },
    {
      "german": "der Vegetarier, die Vegetarier",
      "translations": {"english": "vegetarian", "ukrainian": "вегетаріанець", "polish": "wegetarianin", "albanian": "vegetariani", "arabic": "نباتي", "italian": "vegetariano", "serbian": "вегетаријанац"}
    },
    {
      "german": "der Veganer, die Veganer",
      "translations": {"english": "vegan", "ukrainian": "веган", "polish": "weganin", "albanian": "vegani", "arabic": "نباتي صارم", "italian": "vegano", "serbian": "веган"}
    },
    {
      "german": "die Milchprodukte, die Milchprodukte",
      "translations": {"english": "dairy products", "ukrainian": "молочні продукти", "polish": "produkty mleczne", "albanian": "produktet e qumështit", "arabic": "منتجات الألبان", "italian": "latticini", "serbian": "млечни производи"}
    },
    {
      "german": "die Getreideprodukte, die Getreideprodukte",
      "translations": {"english": "grain products", "ukrainian": "зернові продукти", "polish": "produkty zbożowe", "albanian": "produktet e drithërave", "arabic": "منتجات الحبوب", "italian": "prodotti cerealicoli", "serbian": "производи од житарица"}
    },
    {
      "german": "das Vitamin, die Vitamine",
      "translations": {"english": "vitamin", "ukrainian": "вітамін", "polish": "witamina", "albanian": "vitamina", "arabic": "الفيتامين", "italian": "vitamina", "serbian": "витамин"}
    },
    {
      "german": "fettarm",
      "translations": {"english": "low-fat", "ukrainian": "нежирний", "polish": "niskotłuszczowy", "albanian": "me pak yndyrë", "arabic": "قليل الدسم", "italian": "a basso contenuto di grassi", "serbian": "са мало масноће"}
    },
    {
      "german": "die Süßigkeiten, die Süßigkeiten",
      "translations": {"english": "sweets, candy", "ukrainian": "солодощі", "polish": "słodycze", "albanian": "ëmbëlsirat", "arabic": "الحلويات", "italian": "dolciumi", "serbian": "слаткиши"}
    },
    {
      "german": "der Husten",
      "translations": {"english": "cough", "ukrainian": "кашель", "polish": "kaszel", "albanian": "kollë", "arabic": "السعال", "italian": "tosse", "serbian": "кашаљ"}
    },
    {
      "german": "der Schnupfen",
      "translations": {"english": "cold, runny nose", "ukrainian": "нежить", "polish": "katar", "albanian": "rrufë", "arabic": "الزكام", "italian": "raffreddore", "serbian": "кијавица, прехлада"}
    },
    {
      "german": "das Fieber",
      "translations": {"english": "fever", "ukrainian": "температура", "polish": "gorączka", "albanian": "ethe", "arabic": "الحمى", "italian": "febbre", "serbian": "температура, грозница"}
    },
    {
      "german": "die Kopfschmerzen, die Kopfschmerzen",
      "translations": {"english": "headache", "ukrainian": "головний біль", "polish": "ból głowy", "albanian": "dhimbje koke", "arabic": "صداع", "italian": "mal di testa", "serbian": "главобоља"}
    },
    {
      "german": "die Magenschmerzen, die Magenschmerzen",
      "translations": {"english": "stomach ache", "ukrainian": "біль в животі", "polish": "ból żołądka", "albanian": "dhimbje stomaku", "arabic": "ألم المعدة", "italian": "mal di stomaco", "serbian": "бол у стомаку"}
    },
    {
      "german": "die Rückenschmerzen, die Rückenschmerzen",
      "translations": {"english": "back pain", "ukrainian": "біль у спині", "polish": "ból pleców", "albanian": "dhimbje shpine", "arabic": "ألم الظهر", "italian": "mal di schiena", "serbian": "бол у леђима"}
    },
    {
      "german": "die Krankenkasse, die Krankenkassen",
      "translations": {"english": "health insurance", "ukrainian": "медична страхова компанія", "polish": "kasa chorych", "albanian": "siguracioni shëndetësor", "arabic": "التأمين الصحي", "italian": "cassa malati", "serbian": "здравствено осигурање"}
    },
    {
      "german": "die Überweisung, die Überweisungen",
      "translations": {"english": "referral", "ukrainian": "направлення", "polish": "skierowanie", "albanian": "dërgesa", "arabic": "الإحالة", "italian": "impegnativa", "serbian": "упут"}
    },
    {
      "german": "der Facharzt, die Fachärzte",
      "translations": {"english": "specialist doctor", "ukrainian": "лікар-спеціаліст", "polish": "lekarz specjalista", "albanian": "mjeku specialist", "arabic": "طبيب متخصص", "italian": "medico specialista", "serbian": "лекар специјалиста"}
    }
  ],

  // MODULE 10: Arbeitssuche (Job Search)
  "10": [
    {
      "german": "die Arbeitssuche",
      "translations": {"english": "job search", "ukrainian": "пошук роботи", "polish": "poszukiwanie pracy", "albanian": "kërkimi i punës", "arabic": "البحث عن عمل", "italian": "ricerca di lavoro", "serbian": "тражење посла"}
    },
    {
      "german": "die Stellenanzeige, die Stellenanzeigen",
      "translations": {"english": "job advertisement", "ukrainian": "оголошення про роботу", "polish": "ogłoszenie o pracę", "albanian": "shpallja e punës", "arabic": "إعلان وظيفة", "italian": "annuncio di lavoro", "serbian": "оглас за посао"}
    },
    {
      "german": "das Stellenangebot, die Stellenangebote",
      "translations": {"english": "job offer", "ukrainian": "пропозиція роботи", "polish": "oferta pracy", "albanian": "oferta e punës", "arabic": "عرض عمل", "italian": "offerta di lavoro", "serbian": "понуда за посао"}
    },
    {
      "german": "die Bewerbung, die Bewerbungen",
      "translations": {"english": "job application", "ukrainian": "заява на роботу", "polish": "aplikacja o pracę", "albanian": "aplikimi për punë", "arabic": "طلب التوظيف", "italian": "candidatura", "serbian": "пријава за посао"}
    },
    {
      "german": "die Bewerbungsunterlagen",
      "translations": {"english": "application documents", "ukrainian": "документи для заяви", "polish": "dokumenty aplikacyjne", "albanian": "dokumentet e aplikimit", "arabic": "وثائق التقديم", "italian": "documenti di candidatura", "serbian": "документа за пријаву"}
    },
    {
      "german": "das Bewerbungsschreiben, die Bewerbungsschreiben",
      "translations": {"english": "application letter", "ukrainian": "супровідний лист", "polish": "list motywacyjny", "albanian": "letra e aplikimit", "arabic": "خطاب التقديم", "italian": "lettera di candidatura", "serbian": "пропратно писмо"}
    },
    {
      "german": "das Bewerbungsgespräch, die Bewerbungsgespräche",
      "translations": {"english": "job interview", "ukrainian": "співбесіда", "polish": "rozmowa kwalifikacyjna", "albanian": "intervista e punës", "arabic": "مقابلة العمل", "italian": "colloquio di lavoro", "serbian": "разговор за посао"}
    },
    {
      "german": "das Vorstellungsgespräch, die Vorstellungsgespräche",
      "translations": {"english": "job interview", "ukrainian": "співбесіда", "polish": "rozmowa kwalifikacyjna", "albanian": "intervista", "arabic": "مقابلة التعريف", "italian": "colloquio conoscitivo", "serbian": "интервју за посао"}
    },
    {
      "german": "das Bewerbungsfoto, die Bewerbungsfotos",
      "translations": {"english": "application photo", "ukrainian": "фото для заяви", "polish": "zdjęcie do CV", "albanian": "fotoja e aplikimit", "arabic": "صورة التقديم", "italian": "foto per candidatura", "serbian": "фотографија за пријаву"}
    },
    {
      "german": "der Lebenslauf, die Lebensläufe",
      "translations": {"english": "curriculum vitae, CV, resume", "ukrainian": "резюме", "polish": "życiorys", "albanian": "jeta shkrimore", "arabic": "السيرة الذاتية", "italian": "curriculum vitae", "serbian": "биографија, CV"}
    },
    {
      "german": "persönliche Daten",
      "translations": {"english": "personal information", "ukrainian": "особисті дані", "polish": "dane osobowe", "albanian": "të dhënat personale", "arabic": "البيانات الشخصية", "italian": "dati personali", "serbian": "лични подаци"}
    },
    {
      "german": "die Schulbildung",
      "translations": {"english": "school education", "ukrainian": "шкільна освіта", "polish": "wykształcenie szkolne", "albanian": "arsimi shkollor", "arabic": "التعليم المدرسي", "italian": "istruzione scolastica", "serbian": "школско образовање"}
    },
    {
      "german": "die Berufsausbildung, die Berufsausbildungen",
      "translations": {"english": "vocational training", "ukrainian": "професійне навчання", "polish": "kształcenie zawodowe", "albanian": "arsimi profesional", "arabic": "التدريب المهني", "italian": "formazione professionale", "serbian": "стручно образовање"}
    },
    {
      "german": "die Berufserfahrung, die Berufserfahrungen",
      "translations": {"english": "work experience", "ukrainian": "досвід роботи", "polish": "doświadczenie zawodowe", "albanian": "përvoja profesionale", "arabic": "الخبرة المهنية", "italian": "esperienza lavorativa", "serbian": "радно искуство"}
    },
    {
      "german": "die Weiterbildung, die Weiterbildungen",
      "translations": {"english": "further education, continuing education", "ukrainian": "підвищення кваліфікації", "polish": "kształcenie ustawiczne", "albanian": "arsimi i mëtejshëm", "arabic": "التعليم المستمر", "italian": "formazione continua", "serbian": "даље образовање"}
    },
    {
      "german": "die Kenntnisse",
      "translations": {"english": "skills, knowledge", "ukrainian": "знання", "polish": "umiejętności", "albanian": "njohuritë", "arabic": "المعارف", "italian": "conoscenze", "serbian": "знања, вештине"}
    },
    {
      "german": "die Fremdsprache, die Fremdsprachen",
      "translations": {"english": "foreign language", "ukrainian": "іноземна мова", "polish": "język obcy", "albanian": "gjuha e huaj", "arabic": "اللغة الأجنبية", "italian": "lingua straniera", "serbian": "страни језик"}
    },
    {
      "german": "die Eigenschaft, die Eigenschaften",
      "translations": {"english": "quality, characteristic", "ukrainian": "якість, характеристика", "polish": "cecha", "albanian": "cilësia", "arabic": "الخاصية", "italian": "caratteristica", "serbian": "особина, карактеристика"}
    },
    {
      "german": "zuverlässig",
      "translations": {"english": "reliable", "ukrainian": "надійний", "polish": "niezawodny", "albanian": "i besueshëm", "arabic": "موثوق", "italian": "affidabile", "serbian": "поуздан"}
    },
    {
      "german": "flexibel",
      "translations": {"english": "flexible", "ukrainian": "гнучкий", "polish": "elastyczny", "albanian": "fleksibël", "arabic": "مرن", "italian": "flessibile", "serbian": "флексибилан"}
    },
    {
      "german": "belastbar",
      "translations": {"english": "resilient, able to work under pressure", "ukrainian": "стресостійкий", "polish": "odporny na stres", "albanian": "i qëndrueshëm", "arabic": "قادر على تحمل الضغط", "italian": "resistente allo stress", "serbian": "отпоран на стрес"}
    },
    {
      "german": "teamfähig",
      "translations": {"english": "able to work in a team", "ukrainian": "здатний працювати в команді", "polish": "zdolny do pracy zespołowej", "albanian": "i aftë për punë në grup", "arabic": "قادر على العمل الجماعي", "italian": "capace di lavorare in squadra", "serbian": "способан за тимски рад"}
    },
    {
      "german": "engagiert",
      "translations": {"english": "committed, dedicated", "ukrainian": "відданий", "polish": "zaangażowany", "albanian": "i angazhuar", "arabic": "ملتزم", "italian": "impegnato", "serbian": "ангажован"}
    },
    {
      "german": "kreativ",
      "translations": {"english": "creative", "ukrainian": "креативний", "polish": "kreatywny", "albanian": "krijues", "arabic": "مبدع", "italian": "creativo", "serbian": "креативан"}
    },
    {
      "german": "pünktlich",
      "translations": {"english": "punctual", "ukrainian": "пунктуальний", "polish": "punktualny", "albanian": "i saktë", "arabic": "دقيق", "italian": "puntuale", "serbian": "тачан"}
    },
    {
      "german": "freundlich",
      "translations": {"english": "friendly", "ukrainian": "дружелюбний", "polish": "przyjazny", "albanian": "miqësor", "arabic": "ودود", "italian": "cordiale", "serbian": "пријатељски"}
    },
    {
      "german": "ehrlich",
      "translations": {"english": "honest", "ukrainian": "чесний", "polish": "uczciwy", "albanian": "i ndershëm", "arabic": "صادق", "italian": "onesto", "serbian": "поштен"}
    },
    {
      "german": "geduldig",
      "translations": {"english": "patient", "ukrainian": "терплячий", "polish": "cierpliwy", "albanian": "i durueshëm", "arabic": "صبور", "italian": "paziente", "serbian": "стрпљив"}
    },
    {
      "german": "der Stundenlohn, die Stundenlöhne",
      "translations": {"english": "hourly wage", "ukrainian": "погодинна оплата", "polish": "stawka godzinowa", "albanian": "paga për orë", "arabic": "الأجر بالساعة", "italian": "paga oraria", "serbian": "сатница"}
    },
    {
      "german": "der Arbeitsvertrag, die Arbeitsverträge",
      "translations": {"english": "employment contract", "ukrainian": "трудовий договір", "polish": "umowa o pracę", "albanian": "kontrata e punës", "arabic": "عقد العمل", "italian": "contratto di lavoro", "serbian": "уговор о раду"}
    },
    {
      "german": "die Arbeitszeit, die Arbeitszeiten",
      "translations": {"english": "working hours", "ukrainian": "робочий час", "polish": "czas pracy", "albanian": "orari i punës", "arabic": "وقت العمل", "italian": "orario di lavoro", "serbian": "радно време"}
    },
    {
      "german": "die Überstunde, die Überstunden",
      "translations": {"english": "overtime hour", "ukrainian": "надурочна година", "polish": "godzina nadliczbowa", "albanian": "ora shtesë", "arabic": "ساعة إضافية", "italian": "ora straordinaria", "serbian": "прековремени сат"}
    },
    {
      "german": "die Arbeitspause, die Arbeitspausen",
      "translations": {"english": "work break", "ukrainian": "перерва на роботі", "polish": "przerwa w pracy", "albanian": "pushimi në punë", "arabic": "استراحة العمل", "italian": "pausa di lavoro", "serbian": "пауза на послу"}
    },
    {
      "german": "das Praktikum, die Praktika",
      "translations": {"english": "internship, practical training", "ukrainian": "практика", "polish": "praktyka", "albanian": "praktika", "arabic": "التدريب العملي", "italian": "tirocinio", "serbian": "пракса"}
    },
    {
      "german": "die Zeitarbeitsfirma, die Zeitarbeitsfirmen",
      "translations": {"english": "temporary employment agency", "ukrainian": "агентство тимчасової зайнятості", "polish": "agencja pracy tymczasowej", "albanian": "agjencia e punës së përkohshme", "arabic": "وكالة العمل المؤقت", "italian": "agenzia di lavoro interinale", "serbian": "агенција за привремено запошљавање"}
    },
    {
      "german": "die Initiativbewerbung, die Initiativbewerbungen",
      "translations": {"english": "unsolicited application", "ukrainian": "ініціативна заява", "polish": "aplikacja inicjatywna", "albanian": "aplikimi iniciativ", "arabic": "طلب توظيف مبادر", "italian": "candidatura spontanea", "serbian": "спонтана пријава"}
    },
    {
      "german": "die Aushilfe, die Aushilfen",
      "translations": {"english": "temporary worker, assistant", "ukrainian": "тимчасовий працівник", "polish": "pomoc tymczasowa", "albanian": "ndihmësi i përkohshëm", "arabic": "عامل مؤقت", "italian": "lavoratore temporaneo", "serbian": "помоћни радник"}
    },
    {
      "german": "der Aushang, die Aushänge",
      "translations": {"english": "notice, poster", "ukrainian": "оголошення", "polish": "ogłoszenie", "albanian": "njoftimi", "arabic": "الإعلان", "italian": "avviso", "serbian": "оглас"}
    },
    {
      "german": "der Tourismus",
      "translations": {"english": "tourism", "ukrainian": "туризм", "polish": "turystyka", "albanian": "turizmi", "arabic": "السياحة", "italian": "turismo", "serbian": "туризам"}
    },
    {
      "german": "der Traum, die Träume",
      "translations": {"english": "dream", "ukrainian": "мрія", "polish": "marzenie", "albanian": "ëndërra", "arabic": "الحلم", "italian": "sogno", "serbian": "сан"}
    },
    {
      "german": "das Gehalt, die Gehälter",
      "translations": {"english": "salary", "ukrainian": "зарплата", "polish": "pensja", "albanian": "paga", "arabic": "الراتب", "italian": "stipendio", "serbian": "плата"}
    },
    {
      "german": "die Bezahlung",
      "translations": {"english": "payment", "ukrainian": "оплата", "polish": "wynagrodzenie", "albanian": "pagesa", "arabic": "الأجر", "italian": "retribuzione", "serbian": "плаћање"}
    },
    {
      "german": "die Schichtarbeit",
      "translations": {"english": "shift work", "ukrainian": "змінна робота", "polish": "praca zmianowa", "albanian": "puna me turne", "arabic": "العمل بنظام المناوبات", "italian": "lavoro a turni", "serbian": "рад у сменама"}
    },
    {
      "german": "in Vollzeit arbeiten",
      "translations": {"english": "to work full-time", "ukrainian": "працювати на повний робочий день", "polish": "pracować w pełnym wymiarze", "albanian": "të punosh me orar të plotë", "arabic": "يعمل بدوام كامل", "italian": "lavorare a tempo pieno", "serbian": "радити пуно радно време"}
    },
    {
      "german": "in Teilzeit arbeiten",
      "translations": {"english": "to work part-time", "ukrainian": "працювати на неповний робочий день", "polish": "pracować w niepełnym wymiarze", "albanian": "të punosh me orar të pjesshëm", "arabic": "يعمل بدوام جزئي", "italian": "lavorare a tempo parziale", "serbian": "радити скраћено радно време"}
    },
    {
      "german": "sich um eine Stelle bewerben",
      "translations": {"english": "to apply for a position", "ukrainian": "подавати заявку на посаду", "polish": "ubiegać się o stanowisko", "albanian": "të aplikosh për një pozitë", "arabic": "يتقدم لوظيفة", "italian": "candidarsi per una posizione", "serbian": "пријавити се за посао"}
    },
    {
      "german": "eine feste Stelle",
      "translations": {"english": "a permanent position", "ukrainian": "постійна посада", "polish": "stała posada", "albanian": "pozitë e përhershme", "arabic": "وظيفة دائمة", "italian": "una posizione fissa", "serbian": "стално радно место"}
    },
    {
      "german": "der Ausbildungsplatz, die Ausbildungsplätze",
      "translations": {"english": "training position, apprenticeship", "ukrainian": "навчальне місце", "polish": "miejsce szkoleniowe", "albanian": "vendi i trajnimit", "arabic": "مكان التدريب", "italian": "posto di formazione", "serbian": "место за обуку"}
    },
    {
      "german": "der/die Personalberater/in, die Personalberater/-innen",
      "translations": {"english": "recruitment consultant", "ukrainian": "консультант з персоналу", "polish": "konsultant ds. rekrutacji", "albanian": "këshilluesi i personelit", "arabic": "مستشار التوظيف", "italian": "consulente del personale", "serbian": "консултант за запошљавање"}
    },
    {
      "german": "die Tätigkeit, die Tätigkeiten",
      "translations": {"english": "activity, occupation", "ukrainian": "діяльність", "polish": "działalność", "albanian": "veprimtaria", "arabic": "النشاط", "italian": "attività", "serbian": "делатност, занимање"}
    },
    {
      "german": "die Bedingung, die Bedingungen",
      "translations": {"english": "condition", "ukrainian": "умова", "polish": "warunek", "albanian": "kushti", "arabic": "الشرط", "italian": "condizione", "serbian": "услов"}
    }
  ],

  // MODULE 11: Von Ort zu Ort (From Place to Place - Travel & Vacation)
  "11": [
    {
      "german": "die Geschäftsreise, die Geschäftsreisen",
      "translations": {"english": "business trip", "ukrainian": "ділова подорож", "polish": "podróż służbowa", "albanian": "udhëtimi i biznesit", "arabic": "رحلة عمل", "italian": "viaggio d'affari", "serbian": "пословно путовање"}
    },
    {
      "german": "die Urlaubsreise, die Urlaubsreisen",
      "translations": {"english": "vacation trip", "ukrainian": "відпускна подорож", "polish": "wyjazd wakacyjny", "albanian": "udhëtimi i pushimeve", "arabic": "رحلة عطلة", "italian": "viaggio di vacanza", "serbian": "одмор, путовање"}
    },
    {
      "german": "der Stau, die Staus",
      "translations": {"english": "traffic jam", "ukrainian": "затор", "polish": "korek", "albanian": "bllokimi i trafikut", "arabic": "الازدحام المروري", "italian": "ingorgo", "serbian": "гужва у саобраћају"}
    },
    {
      "german": "einchecken",
      "translations": {"english": "to check in", "ukrainian": "зареєструватися", "polish": "zameldować się", "albanian": "të regjistrohesh", "arabic": "يسجل الدخول", "italian": "fare il check-in", "serbian": "пријавити се"}
    },
    {
      "german": "der/die Reisende, die Reisenden",
      "translations": {"english": "traveler", "ukrainian": "мандрівник", "polish": "podróżny", "albanian": "udhëtari", "arabic": "المسافر", "italian": "viaggiatore", "serbian": "путник"}
    },
    {
      "german": "das Urlaubsfoto, die Urlaubsfotos",
      "translations": {"english": "vacation photo", "ukrainian": "фото з відпустки", "polish": "zdjęcie z wakacji", "albanian": "fotoja e pushimeve", "arabic": "صورة العطلة", "italian": "foto delle vacanze", "serbian": "фотографија са одмора"}
    },
    {
      "german": "das Museum, die Museen",
      "translations": {"english": "museum", "ukrainian": "музей", "polish": "muzeum", "albanian": "muzeu", "arabic": "المتحف", "italian": "museo", "serbian": "музеј"}
    },
    {
      "german": "der Strand, der Strände",
      "translations": {"english": "beach", "ukrainian": "пляж", "polish": "plaża", "albanian": "plazhi", "arabic": "الشاطئ", "italian": "spiaggia", "serbian": "плажа"}
    },
    {
      "german": "die Kellnerin, die Kellnerinnen",
      "translations": {"english": "waitress", "ukrainian": "офіціантка", "polish": "kelnerka", "albanian": "kamarerja", "arabic": "النادلة", "italian": "cameriera", "serbian": "конобарица"}
    },
    {
      "german": "die Nachbarn, die Nachbarn",
      "translations": {"english": "neighbors", "ukrainian": "сусіди", "polish": "sąsiedzi", "albanian": "fqinjët", "arabic": "الجيران", "italian": "vicini", "serbian": "комшије"}
    },
    {
      "german": "die Reisezeit, die Reisezeiten",
      "translations": {"english": "travel time", "ukrainian": "час подорожі", "polish": "czas podróży", "albanian": "koha e udhëtimit", "arabic": "وقت السفر", "italian": "tempo di viaggio", "serbian": "време путовања"}
    },
    {
      "german": "der Kiosk, die Kioske",
      "translations": {"english": "kiosk, newsstand", "ukrainian": "кіоск", "polish": "kiosk", "albanian": "kiosku", "arabic": "الكشك", "italian": "chiosco", "serbian": "киоск"}
    },
    {
      "german": "ein Lokal, die Lokale",
      "translations": {"english": "restaurant, pub", "ukrainian": "ресторан, паб", "polish": "lokal, restauracja", "albanian": "restoranti", "arabic": "المطعم", "italian": "locale", "serbian": "локал, ресторан"}
    },
    {
      "german": "ein Arzt, die Ärzte",
      "translations": {"english": "doctor", "ukrainian": "лікар", "polish": "lekarz", "albanian": "mjeku", "arabic": "الطبيب", "italian": "medico", "serbian": "лекар"}
    },
    {
      "german": "eine Apotheke, die Apotheken",
      "translations": {"english": "pharmacy", "ukrainian": "аптека", "polish": "apteka", "albanian": "farmacia", "arabic": "الصيدلية", "italian": "farmacia", "serbian": "апотека"}
    },
    {
      "german": "ein Strand, die Strände",
      "translations": {"english": "beach", "ukrainian": "пляж", "polish": "plaża", "albanian": "plazhi", "arabic": "الشاطئ", "italian": "spiaggia", "serbian": "плажа"}
    },
    {
      "german": "ein Restaurant, die Restaurants",
      "translations": {"english": "restaurant", "ukrainian": "ресторан", "polish": "restauracja", "albanian": "restoranti", "arabic": "المطعم", "italian": "ristorante", "serbian": "ресторан"}
    },
    {
      "german": "ein Campingplatz, die Campingplätze",
      "translations": {"english": "campsite", "ukrainian": "кемпінг", "polish": "kemping", "albanian": "kampi", "arabic": "مخيم", "italian": "campeggio", "serbian": "камп"}
    },
    {
      "german": "deutsche Zeitungen verkauft?",
      "translations": {"english": "German newspapers sold?", "ukrainian": "продаються німецькі газети?", "polish": "sprzedawane niemieckie gazety?", "albanian": "shitet gazetë gjermane?", "arabic": "تباع صحف ألمانية؟", "italian": "vendono giornali tedeschi?", "serbian": "продају се немачке новине?"}
    },
    {
      "german": "auch für Kinder interessant ist?",
      "translations": {"english": "also interesting for children?", "ukrainian": "також цікаво для дітей?", "polish": "również interesujące dla dzieci?", "albanian": "interesant edhe për fëmijët?", "arabic": "مثير للاهتمام للأطفال أيضاً؟", "italian": "anche interessante per bambini?", "serbian": "занимљиво и за децу?"}
    },
    {
      "german": "Deutsch spricht?",
      "translations": {"english": "speaks German?", "ukrainian": "говорить німецькою?", "polish": "mówi po niemiecku?", "albanian": "flet gjermanisht?", "arabic": "يتحدث الألمانية؟", "italian": "parla tedesco?", "serbian": "говори немачки?"}
    },
    {
      "german": "auch am Mittag geöffnet hat?",
      "translations": {"english": "also open at noon?", "ukrainian": "також відчинено опівдні?", "polish": "otwarte również w południe?", "albanian": "hapur edhe në mesditë?", "arabic": "مفتوح أيضاً في الظهر؟", "italian": "aperto anche a mezzogiorno?", "serbian": "отворено и у подне?"}
    },
    {
      "german": "einen Spielplatz für Kinder hat?",
      "translations": {"english": "has a playground for children?", "ukrainian": "має дитячий майданчик?", "polish": "ma plac zabaw dla dzieci?", "albanian": "ka vend lojërash për fëmijë?", "arabic": "يوجد ملعب للأطفال؟", "italian": "ha un parco giochi per bambini?", "serbian": "има игралиште за децу?"}
    },
    {
      "german": "gemütlich ist?",
      "translations": {"english": "is cozy?", "ukrainian": "затишний?", "polish": "przytulny?", "albanian": "është komod?", "arabic": "مريح؟", "italian": "è accogliente?", "serbian": "пријатно је?"}
    },
    {
      "german": "sauber ist?",
      "translations": {"english": "is clean?", "ukrainian": "чистий?", "polish": "jest czysty?", "albanian": "është i pastër?", "arabic": "نظيف؟", "italian": "è pulito?", "serbian": "чисто је?"}
    },
    {
      "german": "der Abflugort, die Abflugorte",
      "translations": {"english": "departure location", "ukrainian": "місце вильоту", "polish": "miejsce wylotu", "albanian": "vendi i nisjes", "arabic": "مكان المغادرة", "italian": "luogo di partenza", "serbian": "место полетања"}
    },
    {
      "german": "der Autounfall, der Autounfälle",
      "translations": {"english": "car accident", "ukrainian": "автомобільна аварія", "polish": "wypadek samochodowy", "albanian": "aksidenti i makinës", "arabic": "حادث سيارة", "italian": "incidente stradale", "serbian": "саобраћајна несрећа"}
    },
    {
      "german": "die Notrufsäule, die Notrufsäulen",
      "translations": {"english": "emergency call box", "ukrainian": "колонка екстреної допомоги", "polish": "słupek alarmowy", "albanian": "shtylla e urgjencës", "arabic": "عمود الطوارئ", "italian": "colonnina di emergenza", "serbian": "телефон за хитне позиве"}
    },
    {
      "german": "die Notrufzentrale, die Notrufzentralen",
      "translations": {"english": "emergency call center", "ukrainian": "центр екстреної допомоги", "polish": "centrala alarmowa", "albanian": "qendra e urgjencës", "arabic": "مركز الطوارئ", "italian": "centrale operativa di emergenza", "serbian": "центар за хитне позиве"}
    },
    {
      "german": "der Pannendienst, die Pannendienste",
      "translations": {"english": "breakdown service", "ukrainian": "служба допомоги на дорозі", "polish": "pomoc drogowa", "albanian": "shërbimi i prishjes", "arabic": "خدمة الأعطال", "italian": "servizio di soccorso stradale", "serbian": "помоћ на путу"}
    },
    {
      "german": "die Autopanne, die Autopannen",
      "translations": {"english": "car breakdown", "ukrainian": "поломка автомобіля", "polish": "awaria samochodu", "albanian": "prishja e makinës", "arabic": "عطل السيارة", "italian": "guasto dell'auto", "serbian": "квар на аутомобилу"}
    },
    {
      "german": "die Platzreservierung, die Platzreservierungen",
      "translations": {"english": "seat reservation", "ukrainian": "резервація місця", "polish": "rezerwacja miejsca", "albanian": "rezervimi i vendit", "arabic": "حجز المقعد", "italian": "prenotazione del posto", "serbian": "резервација места"}
    },
    {
      "german": "der Kilometer, die Kilometer",
      "translations": {"english": "kilometer", "ukrainian": "кілометр", "polish": "kilometr", "albanian": "kilometri", "arabic": "الكيلومتر", "italian": "chilometro", "serbian": "километар"}
    },
    {
      "german": "der Wagen, die Wagen",
      "translations": {"english": "car, carriage", "ukrainian": "автомобіль, вагон", "polish": "samochód, wagon", "albanian": "makina, vagoni", "arabic": "السيارة، العربة", "italian": "auto, vagone", "serbian": "аутомобил, вагон"}
    },
    {
      "german": "das Reiseziel, die Reiseziele",
      "translations": {"english": "travel destination", "ukrainian": "місце призначення", "polish": "cel podróży", "albanian": "destinacioni i udhëtimit", "arabic": "وجهة السفر", "italian": "destinazione di viaggio", "serbian": "одредиште путовања"}
    },
    {
      "german": "das Ausflugsziel, die Ausflugsziele",
      "translations": {"english": "excursion destination", "ukrainian": "місце для екскурсії", "polish": "cel wycieczki", "albanian": "destinacioni i ekskursionit", "arabic": "وجهة الرحلة", "italian": "destinazione dell'escursione", "serbian": "одредиште излета"}
    },
    {
      "german": "die Unterkunft, die Unterkünfte",
      "translations": {"english": "accommodation", "ukrainian": "житло", "polish": "zakwaterowanie", "albanian": "akomodimi", "arabic": "الإقامة", "italian": "alloggio", "serbian": "смештај"}
    },
    {
      "german": "die Altstadt, die Altstädte",
      "translations": {"english": "old town", "ukrainian": "старе місто", "polish": "stare miasto", "albanian": "qyteti i vjetër", "arabic": "المدينة القديمة", "italian": "città vecchia", "serbian": "стари град"}
    },
    {
      "german": "die Burg, die Burgen",
      "translations": {"english": "castle, fortress", "ukrainian": "замок, фортеця", "polish": "zamek", "albanian": "kështjella", "arabic": "القلعة", "italian": "castello", "serbian": "тврђава, замак"}
    },
    {
      "german": "ideal",
      "translations": {"english": "ideal", "ukrainian": "ідеальний", "polish": "idealny", "albanian": "ideal", "arabic": "مثالي", "italian": "ideale", "serbian": "идеалан"}
    },
    {
      "german": "autofrei",
      "translations": {"english": "car-free", "ukrainian": "без автомобілів", "polish": "wolny od samochodów", "albanian": "pa makina", "arabic": "خالي من السيارات", "italian": "senza auto", "serbian": "без аутомобила"}
    },
    {
      "german": "überall",
      "translations": {"english": "everywhere", "ukrainian": "всюди", "polish": "wszędzie", "albanian": "kudo", "arabic": "في كل مكان", "italian": "ovunque", "serbian": "свуда"}
    },
    {
      "german": "der Fahrradweg, die Fahrradwege",
      "translations": {"english": "bicycle path", "ukrainian": "велосипедна доріжка", "polish": "ścieżka rowerowa", "albanian": "rruga e biçikletave", "arabic": "مسار الدراجات", "italian": "pista ciclabile", "serbian": "бициклистичка стаза"}
    },
    {
      "german": "die Insel, die Inseln",
      "translations": {"english": "island", "ukrainian": "острів", "polish": "wyspa", "albanian": "ishulli", "arabic": "الجزيرة", "italian": "isola", "serbian": "острво"}
    },
    {
      "german": "die Küste, die Küsten",
      "translations": {"english": "coast", "ukrainian": "узбережжя", "polish": "wybrzeże", "albanian": "bregu", "arabic": "الساحل", "italian": "costa", "serbian": "обала"}
    },
    {
      "german": "der Rundgang, die Rundgänge",
      "translations": {"english": "tour, round trip", "ukrainian": "екскурсія", "polish": "wycieczka", "albanian": "tura", "arabic": "جولة", "italian": "giro turistico", "serbian": "обилазак"}
    },
    {
      "german": "der Sonnenhut, die Sonnenhüte",
      "translations": {"english": "sun hat", "ukrainian": "капелюх від сонця", "polish": "kapelusz od słońca", "albanian": "kapelë dielli", "arabic": "قبعة الشمس", "italian": "cappello da sole", "serbian": "шешир за сунце"}
    },
    {
      "german": "die Sonnencreme, die Sonnencremes",
      "translations": {"english": "sunscreen", "ukrainian": "сонцезахисний крем", "polish": "krem przeciwsłoneczny", "albanian": "kremi i diellit", "arabic": "كريم الحماية من الشمس", "italian": "crema solare", "serbian": "крема за сунчање"}
    },
    {
      "german": "der Rucksack, die Rucksäcke",
      "translations": {"english": "backpack", "ukrainian": "рюкзак", "polish": "plecak", "albanian": "çanta shpine", "arabic": "حقيبة الظهر", "italian": "zaino", "serbian": "ранац"}
    },
    {
      "german": "das Handtuch, die Handtücher",
      "translations": {"english": "towel", "ukrainian": "рушник", "polish": "ręcznik", "albanian": "peshqiri", "arabic": "المنشفة", "italian": "asciugamano", "serbian": "пешкир"}
    },
    {
      "german": "die Batterien, die Batterien",
      "translations": {"english": "batteries", "ukrainian": "батарейки", "polish": "baterie", "albanian": "bateritë", "arabic": "البطاريات", "italian": "batterie", "serbian": "батерије"}
    },
    {
      "german": "die Flugtickets, die Flugtickets",
      "translations": {"english": "flight tickets", "ukrainian": "квитки на літак", "polish": "bilety lotnicze", "albanian": "biletat e fluturimit", "arabic": "تذاكر الطيران", "italian": "biglietti aerei", "serbian": "авионске карте"}
    },
    {
      "german": "die Badesachen, die Badesachen",
      "translations": {"english": "swimwear", "ukrainian": "купальник", "polish": "strój kąpielowy", "albanian": "rroba banje", "arabic": "ملابس السباحة", "italian": "costume da bagno", "serbian": "купаћи костим"}
    },
    {
      "german": "die Sonnenbrille, die Sonnenbrillen",
      "translations": {"english": "sunglasses", "ukrainian": "сонцезахисні окуляри", "polish": "okulary przeciwsłoneczne", "albanian": "syze dielli", "arabic": "نظارات شمسية", "italian": "occhiali da sole", "serbian": "наочаре за сунце"}
    },
    {
      "german": "die Zahnbürste, die Zahnbürsten",
      "translations": {"english": "toothbrush", "ukrainian": "зубна щітка", "polish": "szczoteczka do zębów", "albanian": "furça dhëmbësh", "arabic": "فرشاة الأسنان", "italian": "spazzolino da denti", "serbian": "четкица за зубе"}
    }
  ],

  // MODULE 12: Treffpunkte (Meeting Points)
  "12": [
    {"german": "ehrenamtlich", "translations": {"english": "voluntary, volunteer", "ukrainian": "волонтерський", "polish": "wolontariacki", "albanian": "vullnetar", "arabic": "تطوعي", "italian": "volontario", "serbian": "волонтерски"}},
    {"german": "freiwillig", "translations": {"english": "voluntary", "ukrainian": "добровільний", "polish": "dobrowolny", "albanian": "vullnetar", "arabic": "طوعي", "italian": "volontario", "serbian": "добровољан"}},
    {"german": "sich engagieren", "translations": {"english": "to get involved", "ukrainian": "брати участь", "polish": "angażować się", "albanian": "angazhohem", "arabic": "ينخرط", "italian": "impegnarsi", "serbian": "ангажовати се"}},
    {"german": "das Nachbarschaftshaus", "translations": {"english": "community center", "ukrainian": "громадський центр", "polish": "dom sąsiedzki", "albanian": "shtëpia e lagjes", "arabic": "بيت الجيران", "italian": "casa del quartiere", "serbian": "комшијски центар"}},
    {"german": "der Verein", "translations": {"english": "club, association", "ukrainian": "клуб", "polish": "stowarzyszenie", "albanian": "shoqata", "arabic": "النادي", "italian": "associazione", "serbian": "удружење, клуб"}},
    {"german": "das Mitglied", "translations": {"english": "member", "ukrainian": "член", "polish": "członek", "albanian": "anëtar", "arabic": "عضو", "italian": "membro", "serbian": "члан"}},
    {"german": "der Mitgliedsbeitrag", "translations": {"english": "membership fee", "ukrainian": "членський внесок", "polish": "składka członkowska", "albanian": "kuota", "arabic": "رسوم العضوية", "italian": "quota", "serbian": "чланарина"}},
    {"german": "sich anmelden", "translations": {"english": "to register", "ukrainian": "зареєструватися", "polish": "zapisać się", "albanian": "regjistrohem", "arabic": "يسجل", "italian": "iscriversi", "serbian": "пријавити се"}},
    {"german": "der Turnverein", "translations": {"english": "gymnastics club", "ukrainian": "гімнастичний клуб", "polish": "klub gimnastyczny", "albanian": "klub gjimnastike", "arabic": "نادي الجمباز", "italian": "club ginnastica", "serbian": "гимнастички клуб"}},
    {"german": "der Fußballverein", "translations": {"english": "football club", "ukrainian": "футбольний клуб", "polish": "klub piłkarski", "albanian": "klub futbolli", "arabic": "نادي كرة القدم", "italian": "club calcio", "serbian": "фудбалски клуб"}},
    {"german": "der Kleingartenverein", "translations": {"english": "allotment garden", "ukrainian": "товариство садівників", "polish": "stowarzyszenie ogrodów", "albanian": "shoqata e kopshteve", "arabic": "جمعية الحدائق", "italian": "orto urbano", "serbian": "баштенско удружење"}},
    {"german": "der Karnevalsverein", "translations": {"english": "carnival club", "ukrainian": "карнавальний клуб", "polish": "klub karnawałowy", "albanian": "klubi i karnevalit", "arabic": "نادي الكرنفال", "italian": "club carnevalesco", "serbian": "карневалски клуб"}},
    {"german": "der Musikschulverein", "translations": {"english": "music school", "ukrainian": "музична школа", "polish": "szkoła muzyczna", "albanian": "shkolla e muzikës", "arabic": "مدرسة موسيقى", "italian": "scuola musica", "serbian": "музичка школа"}},
    {"german": "das Vereinsleben", "translations": {"english": "club life", "ukrainian": "клубне життя", "polish": "życie klubowe", "albanian": "jeta e klubit", "arabic": "حياة النادي", "italian": "vita associativa", "serbian": "живот у удружењу"}},
    {"german": "die Hausaufgabenhilfe", "translations": {"english": "homework help", "ukrainian": "допомога з домашнім завданням", "polish": "pomoc w lekcjach", "albanian": "ndihmë me detyrat", "arabic": "مساعدة الواجبات", "italian": "aiuto compiti", "serbian": "помоћ у домаћим задацима"}},
    {"german": "die Rechtsberatung", "translations": {"english": "legal advice", "ukrainian": "юридична консультація", "polish": "poradnictwo prawne", "albanian": "këshillim ligjor", "arabic": "استشارة قانونية", "italian": "consulenza legale", "serbian": "правни савет"}},
    {"german": "die Lohnsteuerhilfe", "translations": {"english": "tax assistance", "ukrainian": "податкова допомога", "polish": "pomoc podatkowa", "albanian": "ndihmë për taksat", "arabic": "مساعدة ضريبية", "italian": "assistenza fiscale", "serbian": "пореска помоћ"}},
    {"german": "der Seniorentreff", "translations": {"english": "senior meeting", "ukrainian": "зустріч для літніх", "polish": "spotkanie seniorów", "albanian": "takimi i të moshuarve", "arabic": "ملتقى المسنين", "italian": "incontro anziani", "serbian": "састанак пензионера"}},
    {"german": "die Beratung", "translations": {"english": "consultation", "ukrainian": "консультація", "polish": "doradztwo", "albanian": "këshillim", "arabic": "استشارة", "italian": "consulenza", "serbian": "саветовање"}},
    {"german": "die Solidarität", "translations": {"english": "solidarity", "ukrainian": "солідарність", "polish": "solidarność", "albanian": "solidaritet", "arabic": "التضامن", "italian": "solidarietà", "serbian": "солидарност"}},
    {"german": "die Gerechtigkeit", "translations": {"english": "justice", "ukrainian": "справедливість", "polish": "sprawiedliwość", "albanian": "drejtësia", "arabic": "العدالة", "italian": "giustizia", "serbian": "правда"}},
    {"german": "telefonieren", "translations": {"english": "to phone", "ukrainian": "телефонувати", "polish": "telefonować", "albanian": "telefonoj", "arabic": "يتصل", "italian": "telefonare", "serbian": "телефонирати"}},
    {"german": "verbinden", "translations": {"english": "to connect", "ukrainian": "з'єднати", "polish": "łączyć", "albanian": "lidh", "arabic": "يوصل", "italian": "collegare", "serbian": "повезати"}},
    {"german": "falsch verbunden", "translations": {"english": "wrong number", "ukrainian": "неправильно з'єднано", "polish": "pomyłka", "albanian": "gabim lidhje", "arabic": "رقم خاطئ", "italian": "numero sbagliato", "serbian": "погрешан број"}},
    {"german": "die Durchw ahl", "translations": {"english": "extension", "ukrainian": "внутрішній номер", "polish": "numer wewnętrzny", "albanian": "numri i brendshëm", "arabic": "رقم التحويلة", "italian": "interno", "serbian": "локал"}},
    {"german": "die Telefonzentrale", "translations": {"english": "phone exchange", "ukrainian": "телефонна станція", "polish": "centrala telefoniczna", "albanian": "centrali telefonik", "arabic": "مركز الهاتف", "italian": "centralino", "serbian": "телефонска централа"}},
    {"german": "der/die Anrufer/in", "translations": {"english": "caller", "ukrainian": "той, хто телефонує", "polish": "dzwoniący", "albanian": "telefonuesi", "arabic": "المتصل", "italian": "chiamante", "serbian": "позивалац"}},
    {"german": "zurückrufen", "translations": {"english": "to call back", "ukrainian": "передзвонити", "polish": "oddzwonić", "albanian": "kthej telefonatën", "arabic": "يعاود الاتصال", "italian": "richiamare", "serbian": "узвратити позив"}},
    {"german": "sich verwählen", "translations": {"english": "to misdial", "ukrainian": "набрати неправильний номер", "polish": "pomylić się", "albanian": "gaboj numrin", "arabic": "يخطئ", "italian": "sbagliare numero", "serbian": "погрешно бирати"}},
    {"german": "belegt", "translations": {"english": "busy", "ukrainian": "зайнято", "polish": "zajęty", "albanian": "zënë", "arabic": "مشغول", "italian": "occupato", "serbian": "заузето"}},
    {"german": "auflegen", "translations": {"english": "to hang up", "ukrainian": "покласти слухавку", "polish": "odkładać słuchawkę", "albanian": "mbyll", "arabic": "يغلق", "italian": "riattaccare", "serbian": "спустити слушалицу"}},
    {"german": "die Störung", "translations": {"english": "disruption", "ukrainian": "перешкода", "polish": "zakłócenie", "albanian": "ndërprerje", "arabic": "خلل", "italian": "disturbo", "serbian": "сметња"}},
    {"german": "Keine Ursache!", "translations": {"english": "No problem!", "ukrainian": "Нема за що!", "polish": "Nie ma za co!", "albanian": "S'ka problem!", "arabic": "لا مشكلة!", "italian": "Nessun problema!", "serbian": "Нема на чему!"}},
    {"german": "die Stimmung", "translations": {"english": "mood", "ukrainian": "настрій", "polish": "nastrój", "albanian": "humor", "arabic": "المزاج", "italian": "umore", "serbian": "расположење"}},
    {"german": "lachen", "translations": {"english": "to laugh", "ukrainian": "сміятися", "polish": "śmiać się", "albanian": "qesh", "arabic": "يضحك", "italian": "ridere", "serbian": "смејати се"}},
    {"german": "lächeln", "translations": {"english": "to smile", "ukrainian": "посміхатися", "polish": "uśmiechać się", "albanian": "buzëqesh", "arabic": "يبتسم", "italian": "sorridere", "serbian": "осмехивати се"}},
    {"german": "Sport treiben", "translations": {"english": "to do sports", "ukrainian": "займатися спортом", "polish": "uprawiać sport", "albanian": "bëj sport", "arabic": "يمارس الرياضة", "italian": "fare sport", "serbian": "бавити се спортом"}},
    {"german": "ernst", "translations": {"english": "serious", "ukrainian": "серйозний", "polish": "poważny", "albanian": "serioz", "arabic": "جاد", "italian": "serio", "serbian": "озбиљан"}},
    {"german": "wohl", "translations": {"english": "well", "ukrainian": "добре", "polish": "dobrze", "albanian": "mirë", "arabic": "بخير", "italian": "bene", "serbian": "добро"}},
    {"german": "gemeinsam", "translations": {"english": "together", "ukrainian": "разом", "polish": "wspólnie", "albanian": "së bashku", "arabic": "معًا", "italian": "insieme", "serbian": "заједно"}},
    {"german": "lebendig", "translations": {"english": "lively", "ukrainian": "живий", "polish": "żywy", "albanian": "i gjallë", "arabic": "حيوي", "italian": "vivace", "serbian": "живахан"}}
  ],
  // MODULE 13: Banken und Versicherungen (Banks & Insurance)
  "13": [
    {"german": "die Bank", "translations": {"english": "the bank", "ukrainian": "банк", "polish": "bank", "albanian": "banka", "arabic": "البنك", "italian": "la banca", "serbian": "банка"}},
    {"german": "das Konto", "translations": {"english": "the account", "ukrainian": "рахунок", "polish": "konto", "albanian": "llogaria", "arabic": "الحساب", "italian": "il conto", "serbian": "рачун"}},
    {"german": "ein Konto eröffnen", "translations": {"english": "to open an account", "ukrainian": "відкрити рахунок", "polish": "otworzyć konto", "albanian": "hapëm llogari", "arabic": "فتح حساب", "italian": "aprire un conto", "serbian": "отворити рачун"}},
    {"german": "Geld einzahlen", "translations": {"english": "to deposit money", "ukrainian": "внести гроші", "polish": "wpłacić pieniądze", "albanian": "depozitoj para", "arabic": "إيداع المال", "italian": "depositare denaro", "serbian": "уплатити новац"}},
    {"german": "Geld abheben", "translations": {"english": "to withdraw money", "ukrainian": "зняти гроші", "polish": "wypłacić pieniądze", "albanian": "tërheq para", "arabic": "سحب المال", "italian": "prelevare denaro", "serbian": "подићи новац"}},
    {"german": "Geld überweisen", "translations": {"english": "to transfer money", "ukrainian": "перевести гроші", "polish": "przelać pieniądze", "albanian": "transferoj para", "arabic": "تحويل المال", "italian": "trasferire denaro", "serbian": "пренети новац"}},
    {"german": "Geld wechseln", "translations": {"english": "to exchange money", "ukrainian": "обміняти гроші", "polish": "wymienić pieniądze", "albanian": "këmbej para", "arabic": "صرف المال", "italian": "cambiare denaro", "serbian": "разменити новац"}},
    {"german": "die Überweisung", "translations": {"english": "the transfer", "ukrainian": "переказ", "polish": "przelew", "albanian": "transferta", "arabic": "التحويل", "italian": "il bonifico", "serbian": "пренос"}},
    {"german": "eine Überweisung machen", "translations": {"english": "to make a transfer", "ukrainian": "зробити переказ", "polish": "wykonać przelew", "albanian": "bëj transfertë", "arabic": "إجراء تحويل", "italian": "fare un bonifico", "serbian": "извршити пренос"}},
    {"german": "der Schalter", "translations": {"english": "the counter, teller window", "ukrainian": "каса", "polish": "okienko", "albanian": "sporteli", "arabic": "الشباك", "italian": "lo sportello", "serbian": "шалтер"}},
    {"german": "am Schalter", "translations": {"english": "at the counter", "ukrainian": "біля каси", "polish": "przy okienku", "albanian": "në sportel", "arabic": "عند الشباك", "italian": "allo sportello", "serbian": "на шалтеру"}},
    {"german": "der Geldautomat", "translations": {"english": "the ATM", "ukrainian": "банкомат", "polish": "bankomat", "albanian": "bankomati", "arabic": "الصراف الآلي", "italian": "il bancomat", "serbian": "банкомат"}},
    {"german": "die Kreditkarte", "translations": {"english": "the credit card", "ukrainian": "кредитна картка", "polish": "karta kredytowa", "albanian": "karta e kreditit", "arabic": "بطاقة ائتمان", "italian": "la carta di credito", "serbian": "кредитна картица"}},
    {"german": "die EC-Karte", "translations": {"english": "the debit card", "ukrainian": "дебетова картка", "polish": "karta debetowa", "albanian": "karta debitore", "arabic": "بطاقة الخصم", "italian": "la carta di debito", "serbian": "дебитна картица"}},
    {"german": "die Kontogebühr", "translations": {"english": "the account fee", "ukrainian": "комісія за рахунок", "polish": "opłata za konto", "albanian": "tarifa e llogarisë", "arabic": "رسوم الحساب", "italian": "la commissione del conto", "serbian": "провизија за рачун"}},
    {"german": "die Geheimn ummer", "translations": {"english": "the PIN", "ukrainian": "ПІН-код", "polish": "numer PIN", "albanian": "numri sekret", "arabic": "الرقم السري", "italian": "il codice PIN", "serbian": "ПИН"}},
    {"german": "die PIN", "translations": {"english": "the PIN", "ukrainian": "ПІН", "polish": "PIN", "albanian": "PIN", "arabic": "الرقم السري", "italian": "il PIN", "serbian": "ПИН"}},
    {"german": "der Dauerauftrag", "translations": {"english": "the standing order", "ukrainian": "платіжне доручення", "polish": "zlecenie stałe", "albanian": "urdhri i përhershëm", "arabic": "الأمر الدائم", "italian": "l'ordine permanente", "serbian": "трајни налог"}},
    {"german": "das Girokonto", "translations": {"english": "the current account", "ukrainian": "поточний рахунок", "polish": "konto bieżące", "albanian": "llogaria rrjedhëse", "arabic": "الحساب الجاري", "italian": "il conto corrente", "serbian": "текући рачун"}},
    {"german": "das Privatkonto", "translations": {"english": "the personal account", "ukrainian": "особистий рахунок", "polish": "konto prywatne", "albanian": "llogaria private", "arabic": "الحساب الشخصي", "italian": "il conto privato", "serbian": "приватни рачун"}},
    {"german": "das Geschäftskonto", "translations": {"english": "the business account", "ukrainian": "бізнес-рахунок", "polish": "konto firmowe", "albanian": "llogaria biznesi", "arabic": "الحساب التجاري", "italian": "il conto aziendale", "serbian": "пословни рачун"}},
    {"german": "das Online-Banking", "translations": {"english": "online banking", "ukrainian": "онлайн-банкінг", "polish": "bankowość internetowa", "albanian": "bankingu online", "arabic": "الخدمات المصرفية عبر الإنترنت", "italian": "la banca online", "serbian": "онлајн банкарство"}},
    {"german": "Kontoauszüge holen", "translations": {"english": "to get account statements", "ukrainian": "отримати виписки з рахунку", "polish": "pobrać wyciągi z konta", "albanian": "marr ekstrakte llogarie", "arabic": "الحصول على كشوف الحساب", "italian": "prendere gli estratti conto", "serbian": "узети изводе из рачуна"}},
    {"german": "einen Kredit beantragen", "translations": {"english": "to apply for a loan", "ukrainian": "подати заявку на кредит", "polish": "ubiegać się o kredyt", "albanian": "aplikoj për kredi", "arabic": "التقدم بطلب للحصول على قرض", "italian": "richiedere un prestito", "serbian": "поднети захтев за кредит"}},
    {"german": "der Kredit", "translations": {"english": "the loan, credit", "ukrainian": "кредит", "polish": "kredyt", "albanian": "kredia", "arabic": "القرض", "italian": "il prestito", "serbian": "кредит"}},
    {"german": "Geld anlegen", "translations": {"english": "to invest money", "ukrainian": "інвестувати гроші", "polish": "inwestować pieniądze", "albanian": "investoj para", "arabic": "استثمار المال", "italian": "investire denaro", "serbian": "уложити новац"}},
    {"german": "die Zahlung", "translations": {"english": "the payment", "ukrainian": "оплата", "polish": "płatność", "albanian": "pagesa", "arabic": "الدفع", "italian": "il pagamento", "serbian": "плаћање"}},
    {"german": "bargeldlos bezahlen", "translations": {"english": "to pay cashless", "ukrainian": "безготівкова оплата", "polish": "płacić bezgotówkowo", "albanian": "paguaj pa para", "arabic": "الدفع غير النقدي", "italian": "pagare senza contanti", "serbian": "безготовинско плаћање"}},
    {"german": "die Versicherung", "translations": {"english": "the insurance", "ukrainian": "страхування", "polish": "ubezpieczenie", "albanian": "sigurimi", "arabic": "التأمين", "italian": "l'assicurazione", "serbian": "осигурање"}},
    {"german": "die Krankenversicherung", "translations": {"english": "the health insurance", "ukrainian": "медичне страхування", "polish": "ubezpieczenie zdrowotne", "albanian": "sigurimi shëndetësor", "arabic": "التأمين الصحي", "italian": "l'assicurazione sanitaria", "serbian": "здравствено осигурање"}},
    {"german": "die Rentenversicherung", "translations": {"english": "the pension insurance", "ukrainian": "пенсійне страхування", "polish": "ubezpieczenie emerytalne", "albanian": "sigurimi i pensionit", "arabic": "التأمين التقاعدي", "italian": "l'assicurazione pensionistica", "serbian": "пензијско осигурање"}},
    {"german": "die Kfz-Versicherung", "translations": {"english": "the car insurance", "ukrainian": "автострахування", "polish": "ubezpieczenie samochodu", "albanian": "sigurimi i automjetit", "arabic": "تأمين السيارة", "italian": "l'assicurazione auto", "serbian": "осигурање возила"}},
    {"german": "die Haftpflichtversicherung", "translations": {"english": "the liability insurance", "ukrainian": "страхування відповідальності", "polish": "ubezpieczenie odpowiedzialności cywilnej", "albanian": "sigurimi i përgjegjësisë", "arabic": "تأمين المسؤولية", "italian": "l'assicurazione di responsabilità civile", "serbian": "осигурање од одговорности"}},
    {"german": "die Hausratversicherung", "translations": {"english": "the household contents insurance", "ukrainian": "страхування майна", "polish": "ubezpieczenie mienia domowego", "albanian": "sigurimi i pasurisë shtëpiake", "arabic": "تأمين محتويات المنزل", "italian": "l'assicurazione dei beni domestici", "serbian": "осигурање кућних ствари"}},
    {"german": "die Rechtsschutzversicherung", "translations": {"english": "the legal protection insurance", "ukrainian": "страхування правового захисту", "polish": "ubezpieczenie ochrony prawnej", "albanian": "sigurimi i mbrojtjes ligjore", "arabic": "تأمين الحماية القانونية", "italian": "l'assicurazione di tutela legale", "serbian": "осигурање правне заштите"}},
    {"german": "der Schaden", "translations": {"english": "the damage", "ukrainian": "збиток", "polish": "szkoda", "albanian": "dëmi", "arabic": "الضرر", "italian": "il danno", "serbian": "штета"}},
    {"german": "einen Schaden melden", "translations": {"english": "to report damage", "ukrainian": "повідомити про збиток", "polish": "zgłosić szkodę", "albanian": "raportoj dëmin", "arabic": "الإبلاغ عن ضرر", "italian": "denunciare un danno", "serbian": "пријавити штету"}},
    {"german": "der Versicherungsvertreter", "translations": {"english": "the insurance representative", "ukrainian": "страховий агент", "polish": "przedstawiciel ubezpieczeniowy", "albanian": "përfaqësuesi i sigurimit", "arabic": "ممثل التأمين", "italian": "il rappresentante assicurativo", "serbian": "заступник осигурања"}},
    {"german": "die Garantie", "translations": {"english": "the warranty", "ukrainian": "гарантія", "polish": "gwarancja", "albanian": "garancia", "arabic": "الضمان", "italian": "la garanzia", "serbian": "гаранција"}},
    {"german": "der Garantieschein", "translations": {"english": "the warranty certificate", "ukrainian": "гарантійний талон", "polish": "karta gwarancyjna", "albanian": "certifikata e garancisë", "arabic": "شهادة الضمان", "italian": "il certificato di garanzia", "serbian": "гарантни лист"}},
    {"german": "reklamieren", "translations": {"english": "to complain, make a complaint", "ukrainian": "скаржитися", "polish": "reklamować", "albanian": "ankohem", "arabic": "يشتكي", "italian": "reclamare", "serbian": "рекламирати"}}
  ],
  // MODULE 14: Freunde und Bekannte (Friends & Acquaintances)
  "14": [
    {"german": "die Freundschaft", "translations": {"english": "the friendship", "ukrainian": "дружба", "polish": "przyjaźń", "albanian": "miqësia", "arabic": "الصداقة", "italian": "l'amicizia", "serbian": "пријатељство"}},
    {"german": "der Freund / die Freundin", "translations": {"english": "the friend (male/female)", "ukrainian": "друг / подруга", "polish": "przyjaciel / przyjaciółka", "albanian": "miku / mikja", "arabic": "الصديق / الصديقة", "italian": "l'amico / l'amica", "serbian": "пријатељ / пријатељица"}},
    {"german": "der Bekannte / die Bekannte", "translations": {"english": "the acquaintance", "ukrainian": "знайомий / знайома", "polish": "znajomy / znajoma", "albanian": "i njohuri / e njohura", "arabic": "المعرفة", "italian": "il conoscente / la conoscente", "serbian": "познаник / познаница"}},
    {"german": "sich verstehen", "translations": {"english": "to get along, understand each other", "ukrainian": "розумітися", "polish": "rozumieć się", "albanian": "kuptoj njëri-tjetrin", "arabic": "يتفاهم", "italian": "capirsi", "serbian": "разумети се"}},
    {"german": "sich gegenseitig helfen", "translations": {"english": "to help each other", "ukrainian": "допомагати один одному", "polish": "pomagać sobie wzajemnie", "albanian": "ndihmoj njëri-tjetrin", "arabic": "يساعد بعضهم بعضاً", "italian": "aiutarsi a vicenda", "serbian": "међусобно помагати"}},
    {"german": "vertrauen", "translations": {"english": "to trust", "ukrainian": "довіряти", "polish": "ufać", "albanian": "besoj", "arabic": "يثق", "italian": "fidarsi", "serbian": "веровати"}},
    {"german": "helfen", "translations": {"english": "to help", "ukrainian": "допомагати", "polish": "pomagać", "albanian": "ndihmoj", "arabic": "يساعد", "italian": "aiutare", "serbian": "помоћи"}},
    {"german": "trösten", "translations": {"english": "to comfort, console", "ukrainian": "втішати", "polish": "pocieszać", "albanian": "ngushëlloj", "arabic": "يواسي", "italian": "consolare", "serbian": "тешити"}},
    {"german": "befreundet sein", "translations": {"english": "to be friends with", "ukrainian": "бути друзями", "polish": "być przyjacielem", "albanian": "jam mik me", "arabic": "يكون صديقاً مع", "italian": "essere amici", "serbian": "бити пријатељ са"}},
    {"german": "duzen", "translations": {"english": "to use 'du' (informal you)", "ukrainian": "звертатися на ти", "polish": "mówić na ty", "albanian": "flas në trajtë të thjeshtë", "arabic": "يخاطب بصيغة المخاطب", "italian": "dare del tu", "serbian": "персирати"}},
    {"german": "siezen", "translations": {"english": "to use 'Sie' (formal you)", "ukrainian": "звертатися на ви", "polish": "mówić na pan/pani", "albanian": "flas në trajtë zyrtare", "arabic": "يخاطب بصيغة الاحترام", "italian": "dare del Lei", "serbian": "обраћати се са Ви"}},
    {"german": "sich verabreden", "translations": {"english": "to make an appointment/date", "ukrainian": "домовлятися", "polish": "umówić się", "albanian": "takoj", "arabic": "يحدد موعداً", "italian": "darsi appuntamento", "serbian": "договорити се"}},
    {"german": "sich verlassen auf", "translations": {"english": "to rely on", "ukrainian": "покладатися на", "polish": "polegać na", "albanian": "mbështetem në", "arabic": "يعتمد على", "italian": "fare affidamento su", "serbian": "ослонити се на"}},
    {"german": "sich engagieren für", "translations": {"english": "to get involved in, commit to", "ukrainian": "займатися", "polish": "angażować się w", "albanian": "angazhohem për", "arabic": "ينخرط في", "italian": "impegnarsi per", "serbian": "ангажовати се за"}},
    {"german": "sich freuen über", "translations": {"english": "to be happy about", "ukrainian": "радіти з", "polish": "cieszyć się z", "albanian": "gëzohem për", "arabic": "يفرح بـ", "italian": "rallegrarsi di", "serbian": "радовати се нечему"}},
    {"german": "sich freuen auf", "translations": {"english": "to look forward to", "ukrainian": "чекати з нетерпінням", "polish": "cieszyć się na", "albanian": "pres me padurim", "arabic": "يتطلع إلى", "italian": "non vedere l'ora di", "serbian": "радовати се нечему (у будућности)"}},
    {"german": "sich ärgern über", "translations": {"english": "to be annoyed about", "ukrainian": "дратуватися на", "polish": "złościć się na", "albanian": "mërzitem për", "arabic": "ينزعج من", "italian": "arrabbiarsi per", "serbian": "љутити се на"}},
    {"german": "sich erinnern an", "translations": {"english": "to remember", "ukrainian": "пам'ятати", "polish": "przypominać sobie", "albanian": "kujtoj", "arabic": "يتذكر", "italian": "ricordarsi di", "serbian": "сећати се"}},
    {"german": "sich kümmern um", "translations": {"english": "to take care of", "ukrainian": "піклуватися про", "polish": "troszczyć się o", "albanian": "kujdesem për", "arabic": "يهتم بـ", "italian": "occuparsi di", "serbian": "бринути се о"}},
    {"german": "träumen von", "translations": {"english": "to dream of", "ukrainian": "мріяти про", "polish": "marzyć o", "albanian": "ëndërroj për", "arabic": "يحلم بـ", "italian": "sognare di", "serbian": "сањати о"}},
    {"german": "denken an", "translations": {"english": "to think of", "ukrainian": "думати про", "polish": "myśleć o", "albanian": "mendoj për", "arabic": "يفكر في", "italian": "pensare a", "serbian": "мислити на"}},
    {"german": "sprechen über", "translations": {"english": "to talk about", "ukrainian": "говорити про", "polish": "rozmawiać o", "albanian": "flas për", "arabic": "يتحدث عن", "italian": "parlare di", "serbian": "говорити о"}},
    {"german": "warten auf", "translations": {"english": "to wait for", "ukrainian": "чекати на", "polish": "czekać na", "albanian": "pres për", "arabic": "ينتظر", "italian": "aspettare", "serbian": "чекати на"}},
    {"german": "gratulieren zu", "translations": {"english": "to congratulate on", "ukrainian": "вітати з", "polish": "gratulować z okazji", "albanian": "uron për", "arabic": "يهنئ على", "italian": "congratularsi per", "serbian": "честитати"}},
    {"german": "sich streiten über", "translations": {"english": "to argue about", "ukrainian": "сваритися через", "polish": "kłócić się o", "albanian": "grindëm për", "arabic": "يتجادل حول", "italian": "litigare per", "serbian": "свађати се око"}},
    {"german": "diskutieren über", "translations": {"english": "to discuss about", "ukrainian": "обговорювати", "polish": "dyskutować o", "albanian": "diskutoj për", "arabic": "يناقش", "italian": "discutere di", "serbian": "дискутовати о"}},
    {"german": "sich informieren über", "translations": {"english": "to inform oneself about", "ukrainian": "інформуватися про", "polish": "informować się o", "albanian": "informohem për", "arabic": "يستعلم عن", "italian": "informarsi su", "serbian": "информисати се о"}},
    {"german": "sich beschweren über", "translations": {"english": "to complain about", "ukrainian": "скаржитися на", "polish": "skarżyć się na", "albanian": "ankohem për", "arabic": "يشتكي من", "italian": "lamentarsi di", "serbian": "жалити се на"}},
    {"german": "sich vorbereiten auf", "translations": {"english": "to prepare for", "ukrainian": "готуватися до", "polish": "przygotowywać się do", "albanian": "përgatitem për", "arabic": "يستعد لـ", "italian": "prepararsi per", "serbian": "припремати се за"}},
    {"german": "sich verlieben in", "translations": {"english": "to fall in love with", "ukrainian": "закохуватися в", "polish": "zakochać się w", "albanian": "dashurohem me", "arabic": "يقع في حب", "italian": "innamorarsi di", "serbian": "заљубити се у"}},
    {"german": "das Erlebnis", "translations": {"english": "the experience", "ukrainian": "переживання", "polish": "przeżycie", "albanian": "përvoja", "arabic": "التجربة", "italian": "l'esperienza", "serbian": "доживљај"}},
    {"german": "die Erinnerung", "translations": {"english": "the memory", "ukrainian": "спогад", "polish": "wspomnienie", "albanian": "kujtimi", "arabic": "الذكرى", "italian": "il ricordo", "serbian": "сећање"}},
    {"german": "gemeinsam", "translations": {"english": "together, common", "ukrainian": "разом", "polish": "wspólnie", "albanian": "së bashku", "arabic": "معاً", "italian": "insieme", "serbian": "заједно"}},
    {"german": "glücklich", "translations": {"english": "happy", "ukrainian": "щасливий", "polish": "szczęśliwy", "albanian": "i lumtur", "arabic": "سعيد", "italian": "felice", "serbian": "срећан"}},
    {"german": "traurig", "translations": {"english": "sad", "ukrainian": "сумний", "polish": "smutny", "albanian": "i trishtuar", "arabic": "حزين", "italian": "triste", "serbian": "тужан"}},
    {"german": "eifersüchtig", "translations": {"english": "jealous", "ukrainian": "ревнивий", "polish": "zazdrosny", "albanian": "xheloz", "arabic": "غيور", "italian": "geloso", "serbian": "љубоморан"}},
    {"german": "zufrieden", "translations": {"english": "satisfied, content", "ukrainian": "задоволений", "polish": "zadowolony", "albanian": "i kënaqur", "arabic": "راضٍ", "italian": "soddisfatto", "serbian": "задовољан"}},
    {"german": "intelligent", "translations": {"english": "intelligent", "ukrainian": "розумний", "polish": "inteligentny", "albanian": "inteligjent", "arabic": "ذكي", "italian": "intelligente", "serbian": "интелигентан"}},
    {"german": "der Humor", "translations": {"english": "the humor", "ukrainian": "гумор", "polish": "poczucie humoru", "albanian": "humori", "arabic": "الفكاهة", "italian": "l'umorismo", "serbian": "хумор"}},
    {"german": "das Interesse", "translations": {"english": "the interest", "ukrainian": "інтерес", "polish": "zainteresowanie", "albanian": "interesi", "arabic": "الاهتمام", "italian": "l'interesse", "serbian": "интересовање"}},
    {"german": "der Gedanke", "translations": {"english": "the thought", "ukrainian": "думка", "polish": "myśl", "albanian": "mendimi", "arabic": "الفكرة", "italian": "il pensiero", "serbian": "мисао"}},
    {"german": "das Gedicht", "translations": {"english": "the poem", "ukrainian": "вірш", "polish": "wiersz", "albanian": "poema", "arabic": "القصيدة", "italian": "la poesia", "serbian": "песма"}},
    {"german": "das Lied", "translations": {"english": "the song", "ukrainian": "пісня", "polish": "piosenka", "albanian": "kënga", "arabic": "الأغنية", "italian": "la canzone", "serbian": "песма"}},
    {"german": "lachen", "translations": {"english": "to laugh", "ukrainian": "сміятися", "polish": "śmiać się", "albanian": "qesh", "arabic": "يضحك", "italian": "ridere", "serbian": "смејати се"}},
    {"german": "weinen", "translations": {"english": "to cry", "ukrainian": "плакати", "polish": "płakać", "albanian": "qaj", "arabic": "يبكي", "italian": "piangere", "serbian": "плакати"}},
    {"german": "teilen", "translations": {"english": "to share", "ukrainian": "ділитися", "polish": "dzielić się", "albanian": "ndaj", "arabic": "يشارك", "italian": "condividere", "serbian": "делити"}},
    {"german": "merken", "translations": {"english": "to notice", "ukrainian": "помічати", "polish": "zauważać", "albanian": "vërej", "arabic": "يلاحظ", "italian": "notare", "serbian": "приметити"}},
    {"german": "vermissen", "translations": {"english": "to miss (someone)", "ukrainian": "скучати", "polish": "tęsknić", "albanian": "më mungon", "arabic": "يشتاق إلى", "italian": "sentire la mancanza", "serbian": "недостајати"}},
    {"german": "das Gegenteil", "translations": {"english": "the opposite", "ukrainian": "протилежність", "polish": "przeciwieństwo", "albanian": "e kundërta", "arabic": "العكس", "italian": "il contrario", "serbian": "супротност"}},
    {"german": "die Überraschung", "translations": {"english": "the surprise", "ukrainian": "сюрприз", "polish": "niespodzianka", "albanian": "surpriza", "arabic": "المفاجأة", "italian": "la sorpresa", "serbian": "изненађење"}},
    {"german": "der Aufenthalt", "translations": {"english": "the stay", "ukrainian": "перебування", "polish": "pobyt", "albanian": "qëndrimi", "arabic": "الإقامة", "italian": "il soggiorno", "serbian": "боравак"}},
    {"german": "der Bahnsteig", "translations": {"english": "the platform", "ukrainian": "платформа", "polish": "peron", "albanian": "platforma", "arabic": "رصيف المحطة", "italian": "il binario", "serbian": "перон"}},
    {"german": "das Portemonnaie", "translations": {"english": "the wallet, purse", "ukrainian": "гаманець", "polish": "portfel", "albanian": "portofoli", "arabic": "المحفظة", "italian": "il portafoglio", "serbian": "новчаник"}},
    {"german": "die Tasche", "translations": {"english": "the bag, pocket", "ukrainian": "сумка", "polish": "torba", "albanian": "çanta", "arabic": "الحقيبة", "italian": "la borsa", "serbian": "торба, џеп"}},
    {"german": "unfreundlich", "translations": {"english": "unfriendly", "ukrainian": "недружелюбний", "polish": "nieuprzejmy", "albanian": "i pasjellshëm", "arabic": "غير ودود", "italian": "scortese", "serbian": "непријатељски"}},
    {"german": "mindestens", "translations": {"english": "at least", "ukrainian": "принаймні", "polish": "przynajmniej", "albanian": "së paku", "arabic": "على الأقل", "italian": "almeno", "serbian": "најмање"}},
    {"german": "glücklicherweise", "translations": {"english": "fortunately", "ukrainian": "на щастя", "polish": "na szczęście", "albanian": "fatmirësisht", "arabic": "لحسن الحظ", "italian": "fortunatamente", "serbian": "на срећу"}}
  ]
});
