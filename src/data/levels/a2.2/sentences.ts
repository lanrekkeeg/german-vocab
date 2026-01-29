import { Card, Translations } from '../../../types';

export const A2_2_SENTENCE_SECTIONS = [8, 9, 10, 11, 12, 13, 14];

const sanitizeFilename = (text: string): string => {
    let sanitized = text.replace(/\s+/g, '_');
    sanitized = sanitized.replace(/[^a-zA-Z0-9_äöüÄÖÜß]/g, '');
    return sanitized;
};

const addAudioPaths = (sentencesBySection: Record<number, (Omit<Card, 'audioSrc' | 'translations'> & { translations: Omit<Translations, 'german'> })[]>) => {
  const result: Record<number, Card[]> = {};
  for (const section in sentencesBySection) {
    result[section] = sentencesBySection[section].map(card => ({
      ...card,
      translations: { ...card.translations, german: card.german },
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/a2.2/sentences/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const a2_2_Sentences: Record<string, Card[]> = addAudioPaths({

  // MODULE 8: Neue Chancen (New Chances - Career/Further Education)
  "8": [
    {
      "german": "sich für einen Kurs anmelden",
      "translations": {
        "english": "to register for a course",
        "ukrainian": "записатися на курс",
        "polish": "zapisać się na kurs",
        "albanian": "të regjistrohesh për një kurs",
        "arabic": "التسجيل في دورة",
        "italian": "iscriversi a un corso",
        "serbian": "пријавити се на курс"
      }
    },
    {
      "german": "sich über Weiterbildungsmaßnahmen informieren",
      "translations": {
        "english": "to inform oneself about further training measures",
        "ukrainian": "інформуватися про заходи підвищення кваліфікації",
        "polish": "informować się o możliwościach kształcenia",
        "albanian": "të informohesh për masat e trajnimit",
        "arabic": "الاستفسار عن تدابير التدريب المستمر",
        "italian": "informarsi sulle misure di formazione continua",
        "serbian": "информисати се о мерама даљег образовања"
      }
    },
    {
      "german": "einen Termin vereinbaren",
      "translations": {
        "english": "to make an appointment",
        "ukrainian": "домовитися про зустріч",
        "polish": "umówić się na spotkanie",
        "albanian": "të caktosh një takim",
        "arabic": "تحديد موعد",
        "italian": "fissare un appuntamento",
        "serbian": "заказати термин"
      }
    },
    {
      "german": "sich um eine Stelle bewerben",
      "translations": {
        "english": "to apply for a position",
        "ukrainian": "подавати заявку на посаду",
        "polish": "ubiegać się o stanowisko",
        "albanian": "të aplikosh për një pozicion",
        "arabic": "التقدم لوظيفة",
        "italian": "candidarsi per una posizione",
        "serbian": "пријавити се за радно место"
      }
    },
    {
      "german": "bessere Chancen auf dem Arbeitsmarkt haben",
      "translations": {
        "english": "to have better chances in the job market",
        "ukrainian": "мати кращі шанси на ринку праці",
        "polish": "mieć lepsze szanse na rynku pracy",
        "albanian": "të kesh mundësi më të mira në tregun e punës",
        "arabic": "الحصول على فرص أفضل في سوق العمل",
        "italian": "avere migliori opportunità nel mercato del lavoro",
        "serbian": "имати боље шансе на тржишту рада"
      }
    },
    {
      "german": "eine Förderung bekommen",
      "translations": {
        "english": "to receive funding",
        "ukrainian": "отримати фінансування",
        "polish": "otrzymać dofinansowanie",
        "albanian": "të marrësh financim",
        "arabic": "الحصول على دعم",
        "italian": "ricevere un finanziamento",
        "serbian": "добити финансирање"
      }
    },
    {
      "german": "an einer Fortbildung teilnehmen",
      "translations": {
        "english": "to participate in further training",
        "ukrainian": "брати участь у підвищенні кваліфікації",
        "polish": "uczestniczyć w szkoleniu",
        "albanian": "të marrësh pjesë në trajnim",
        "arabic": "المشاركة في دورة تدريبية",
        "italian": "partecipare a una formazione continua",
        "serbian": "учествовати у додатном образовању"
      }
    },
    {
      "german": "nach Fortbildungsmöglichkeiten fragen",
      "translations": {
        "english": "to ask about further training opportunities",
        "ukrainian": "запитувати про можливості підвищення кваліфікації",
        "polish": "pytać o możliwości szkolenia",
        "albanian": "të pyesësh për mundësitë e trajnimit",
        "arabic": "السؤال عن فرص التدريب",
        "italian": "chiedere delle opportunità di formazione",
        "serbian": "питати о могућностима додатног образовања"
      }
    },
    {
      "german": "Stellen suchen",
      "translations": {
        "english": "to search for positions",
        "ukrainian": "шукати робочі місця",
        "polish": "szukać stanowisk",
        "albanian": "të kërkosh pozicione pune",
        "arabic": "البحث عن وظائف",
        "italian": "cercare posizioni",
        "serbian": "тражити радна места"
      }
    },
    {
      "german": "am Computer recherchieren",
      "translations": {
        "english": "to research on the computer",
        "ukrainian": "досліджувати на комп'ютері",
        "polish": "szukać informacji na komputerze",
        "albanian": "të kërkosh në kompjuter",
        "arabic": "البحث على الكمبيوتر",
        "italian": "fare ricerche al computer",
        "serbian": "истраживати на рачунару"
      }
    },
    {
      "german": "Broschüren lesen",
      "translations": {
        "english": "to read brochures",
        "ukrainian": "читати брошури",
        "polish": "czytać broszury",
        "albanian": "të lexosh broshura",
        "arabic": "قراءة الكتيبات",
        "italian": "leggere opuscoli",
        "serbian": "читати брошуре"
      }
    },
    {
      "german": "damit er bessere Chancen auf dem Arbeitsmarkt hat",
      "translations": {
        "english": "so that he has better chances in the job market",
        "ukrainian": "щоб він мав кращі шанси на ринку праці",
        "polish": "aby miał lepsze szanse na rynku pracy",
        "albanian": "në mënyrë që ai të ketë mundësi më të mira në tregun e punës",
        "arabic": "حتى يحصل على فرص أفضل في سوق العمل",
        "italian": "affinché abbia migliori opportunità nel mercato del lavoro",
        "serbian": "да би имао боље шансе на тржишту рада"
      }
    },
    {
      "german": "damit sie eine gute Stelle bekommt",
      "translations": {
        "english": "so that she gets a good position",
        "ukrainian": "щоб вона отримала хорошу посаду",
        "polish": "aby dostała dobre stanowisko",
        "albanian": "në mënyrë që ajo të marrë një pozicion të mirë",
        "arabic": "حتى تحصل على وظيفة جيدة",
        "italian": "affinché ottenga una buona posizione",
        "serbian": "да би добила добро радно место"
      }
    },
    {
      "german": "damit er keine Probleme mit Briefen hat",
      "translations": {
        "english": "so that he has no problems with letters",
        "ukrainian": "щоб у нього не було проблем з листами",
        "polish": "aby nie miał problemów z listami",
        "albanian": "në mënyrë që ai të mos ketë probleme me letrat",
        "arabic": "حتى لا يواجه مشاكل مع الرسائل",
        "italian": "affinché non abbia problemi con le lettere",
        "serbian": "да не би имао проблема са писмима"
      }
    },
    {
      "german": "sich bewerben um",
      "translations": {
        "english": "to apply for",
        "ukrainian": "подавати заявку на",
        "polish": "ubiegać się o",
        "albanian": "të aplikosh për",
        "arabic": "التقدم بطلب لـ",
        "italian": "candidarsi per",
        "serbian": "пријавити се за"
      }
    },
    {
      "german": "warten auf",
      "translations": {
        "english": "to wait for",
        "ukrainian": "чекати на",
        "polish": "czekać na",
        "albanian": "të presësh për",
        "arabic": "ينتظر",
        "italian": "aspettare",
        "serbian": "чекати на"
      }
    },
    {
      "german": "telefonieren mit",
      "translations": {
        "english": "to call with, to phone with",
        "ukrainian": "телефонувати з",
        "polish": "dzwonić do",
        "albanian": "të telefonosh me",
        "arabic": "يتصل بـ",
        "italian": "telefonare con",
        "serbian": "телефонирати са"
      }
    },
    {
      "german": "sich freuen über",
      "translations": {
        "english": "to be happy about",
        "ukrainian": "радіти з",
        "polish": "cieszyć się z",
        "albanian": "të gëzohesh për",
        "arabic": "يفرح بـ",
        "italian": "essere felice di",
        "serbian": "радовати се због"
      }
    },
    {
      "german": "sich freuen auf",
      "translations": {
        "english": "to look forward to",
        "ukrainian": "чекати з нетерпінням",
        "polish": "cieszyć się na",
        "albanian": "të presësh me padurim",
        "arabic": "يتطلع إلى",
        "italian": "non vedere l'ora di",
        "serbian": "радовати се нечему"
      }
    }
  ],

  // MODULE 9: Gesund leben (Healthy Living)
  "9": [
    {"german": "den Blutdruck messen", "translations": {"english": "to measure blood pressure", "ukrainian": "вимірювати тиск", "polish": "mierzyć ciśnienie", "albanian": "të matësh presionin", "arabic": "قياس ضغط الدم", "italian": "misurare la pressione", "serbian": "мерити крвни притисак"}},
    {"german": "Blut abnehmen", "translations": {"english": "to take blood", "ukrainian": "брати кров", "polish": "pobierać krew", "albanian": "të marrësh gjak", "arabic": "أخذ عينة دم", "italian": "prelevare il sangue", "serbian": "вадити крв"}},
    {"german": "die Augen kontrollieren", "translations": {"english": "to check the eyes", "ukrainian": "перевіряти очі", "polish": "kontrolować oczy", "albanian": "të kontrollosh sytë", "arabic": "فحص العيون", "italian": "controllare gli occhi", "serbian": "контролисати очи"}},
    {"german": "die Zähne kontrollieren", "translations": {"english": "to check the teeth", "ukrainian": "перевіряти зуби", "polish": "kontrolować zęby", "albanian": "të kontrollosh dhëmbët", "arabic": "فحص الأسنان", "italian": "controllare i denti", "serbian": "контролисати зубе"}},
    {"german": "einen Termin vereinbaren", "translations": {"english": "to make an appointment", "ukrainian": "призначити зустріч", "polish": "umówić się na wizytę", "albanian": "të caktosh një takim", "arabic": "تحديد موعد", "italian": "fissare un appuntamento", "serbian": "заказати термин"}},
    {"german": "ein Gespräch über die Beschwerden führen", "translations": {"english": "to have a conversation about complaints", "ukrainian": "провести розмову про скарги", "polish": "przeprowadzić rozmowę o dolegliwościach", "albanian": "të bësh një bisedë për ankesat", "arabic": "إجراء محادثة حول الشكاوى", "italian": "avere una conversazione sui disturbi", "serbian": "водити разговор о тегобама"}},
    {"german": "ein Medikament verschreiben", "translations": {"english": "to prescribe medication", "ukrainian": "призначати ліки", "polish": "przepisać lek", "albanian": "të përshkruash ilaç", "arabic": "وصف دواء", "italian": "prescrivere un medicinale", "serbian": "преписати лек"}},
    {"german": "das Medikament einnehmen", "translations": {"english": "to take medication", "ukrainian": "приймати ліки", "polish": "przyjmować lek", "albanian": "të marrësh ilaç", "arabic": "تناول الدواء", "italian": "prendere il medicinale", "serbian": "узимати лек"}},
    {"german": "dreimal täglich vor dem Essen", "translations": {"english": "three times daily before meals", "ukrainian": "тричі на день перед їжею", "polish": "trzy razy dziennie przed jedzeniem", "albanian": "tre herë në ditë para ngrënies", "arabic": "ثلاث مرات يوميا قبل الأكل", "italian": "tre volte al giorno prima dei pasti", "serbian": "три пута дневно пре јела"}},
    {"german": "nach dem Essen nehmen", "translations": {"english": "to take after meals", "ukrainian": "приймати після їжі", "polish": "brać po jedzeniu", "albanian": "të marrësh pas ngrënies", "arabic": "تناول بعد الأكل", "italian": "prendere dopo i pasti", "serbian": "узимати после јела"}},
    {"german": "zur Apotheke zurückbringen", "translations": {"english": "to bring back to the pharmacy", "ukrainian": "повернути в аптеку", "polish": "zwrócić do apteki", "albanian": "të kthesh në farmaci", "arabic": "إعادة إلى الصيدلية", "italian": "riportare in farmacia", "serbian": "вратити у апотеку"}},
    {"german": "im Hausmüll entsorgen", "translations": {"english": "to dispose of in household waste", "ukrainian": "викидати в побутове сміття", "polish": "wyrzucić do śmieci", "albanian": "të hidhësh në mbeturinat e shtëpisë", "arabic": "التخلص في نفايات المنزل", "italian": "smaltire nei rifiuti domestici", "serbian": "одложити у кућни отпад"}},
    {"german": "regelmäßig Sport machen", "translations": {"english": "to exercise regularly", "ukrainian": "регулярно займатися спортом", "polish": "regularnie uprawiać sport", "albanian": "të bësh sport rregullisht", "arabic": "ممارسة الرياضة بانتظام", "italian": "fare sport regolarmente", "serbian": "редовно се бавити спортом"}},
    {"german": "für einen Marathon trainieren", "translations": {"english": "to train for a marathon", "ukrainian": "тренуватися для марафону", "polish": "trenować do maratonu", "albanian": "të stërvitesh për maraton", "arabic": "التدريب لماراثون", "italian": "allenarsi per una maratona", "serbian": "тренирати за маратон"}},
    {"german": "viel Obst und Gemüse essen", "translations": {"english": "to eat lots of fruit and vegetables", "ukrainian": "їсти багато фруктів і овочів", "polish": "jeść dużo owoców i warzyw", "albanian": "të hash shumë fruta dhe perime", "arabic": "تناول الكثير من الفواكه والخضروات", "italian": "mangiare molta frutta e verdura", "serbian": "јести много воћа и поврћа"}},
    {"german": "auf Milchprodukte verzichten", "translations": {"english": "to give up dairy products", "ukrainian": "відмовитися від молочних продуктів", "polish": "zrezygnować z produktów mlecznych", "albanian": "të heqësh dorë nga produktet e qumështit", "arabic": "التخلي عن منتجات الألبان", "italian": "rinunciare ai latticini", "serbian": "одрећи се млечних производа"}},
    {"german": "Stress vermeiden", "translations": {"english": "to avoid stress", "ukrainian": "уникати стресу", "polish": "unikać stresu", "albanian": "të shmangësh stresin", "arabic": "تجنب التوتر", "italian": "evitare lo stress", "serbian": "избегавати стрес"}},
    {"german": "genug Vitamine bekommen", "translations": {"english": "to get enough vitamins", "ukrainian": "отримувати достатньо вітамінів", "polish": "dostawać wystarczająco dużo witamin", "albanian": "të marrësh mjaftueshëm vitamina", "arabic": "الحصول على ما يكفي من الفيتامينات", "italian": "assumere abbastanza vitamine", "serbian": "добити довољно витамина"}},
    {"german": "im Bett bleiben", "translations": {"english": "to stay in bed", "ukrainian": "залишатися в ліжку", "polish": "zostać w łóżku", "albanian": "të qëndrosh në shtrat", "arabic": "البقاء في السرير", "italian": "restare a letto", "serbian": "остати у кревету"}},
    {"german": "schnell zur Ärztin kommen können", "translations": {"english": "to be able to get to the doctor quickly", "ukrainian": "швидко потрапити до лікаря", "polish": "móc szybko dostać się do lekarza", "albanian": "të mund të shkosh shpejt tek doktorja", "arabic": "القدرة على الوصول إلى الطبيبة بسرعة", "italian": "poter arrivare rapidamente dalla dottoressa", "serbian": "моћи брзо доћи до лекарке"}}
  ],

  // MODULE 10: Arbeitssuche (Job Search)
  "10": [
    {"german": "Arbeit finden durch eine Anzeige in der Zeitung", "translations": {"english": "to find work through an ad in the newspaper", "ukrainian": "знайти роботу через оголошення в газеті", "polish": "znaleźć pracę przez ogłoszenie w gazecie", "albanian": "të gjesh punë përmes shpalljes në gazetë", "arabic": "إيجاد عمل من خلال إعلان في الجريدة", "italian": "trovare lavoro tramite un annuncio sul giornale", "serbian": "наћи посао преко огласа у новинама"}},
    {"german": "Arbeit finden durch die Arbeitsagentur", "translations": {"english": "to find work through the employment agency", "ukrainian": "знайти роботу через центр зайнятості", "polish": "znaleźć pracę przez urząd pracy", "albanian": "të gjesh punë përmes agjencisë së punës", "arabic": "إيجاد عمل من خلال وكالة التوظيف", "italian": "trovare lavoro tramite l'agenzia per l'impiego", "serbian": "наћи посао преко агенције за запошљавање"}},
    {"german": "Arbeit finden durch das Internet", "translations": {"english": "to find work through the internet", "ukrainian": "знайти роботу через інтернет", "polish": "znaleźć pracę przez internet", "albanian": "të gjesh punë përmes internetit", "arabic": "إيجاد عمل من خلال الإنترنت", "italian": "trovare lavoro tramite internet", "serbian": "наћи посао преко интернета"}},
    {"german": "Arbeit finden durch Freunde und Bekannte", "translations": {"english": "to find work through friends and acquaintances", "ukrainian": "знайти роботу через друзів та знайомих", "polish": "znaleźć pracę przez przyjaciół i znajomych", "albanian": "të gjesh punë përmes miqve dhe të njohurve", "arabic": "إيجاد عمل من خلال الأصدقاء والمعارف", "italian": "trovare lavoro tramite amici e conoscenti", "serbian": "наћи посао преко пријатеља и познаника"}},
    {"german": "Arbeit finden durch einen Aushang", "translations": {"english": "to find work through a notice/poster", "ukrainian": "знайти роботу через оголошення", "polish": "znaleźć pracę przez ogłoszenie", "albanian": "të gjesh punë përmes njoftimit", "arabic": "إيجاد عمل من خلال إعلان", "italian": "trovare lavoro tramite un avviso", "serbian": "наћи посао преко огласа"}},
    {"german": "sich am Telefon über eine Stelle informieren", "translations": {"english": "to inquire about a position by phone", "ukrainian": "дізнаватися про посаду по телефону", "polish": "zapytać o stanowisko przez telefon", "albanian": "të pyesësh për një pozitë në telefon", "arabic": "الاستفسار عن وظيفة عبر الهاتف", "italian": "informarsi su una posizione per telefono", "serbian": "информисати се о радном месту телефоном"}},
    {"german": "ein Bewerbungsgespräch führen", "translations": {"english": "to conduct a job interview", "ukrainian": "проводити співбесіду", "polish": "przeprowadzić rozmowę kwalifikacyjną", "albanian": "të kryesh intervistë pune", "arabic": "إجراء مقابلة عمل", "italian": "condurre un colloquio di lavoro", "serbian": "водити разговор за посао"}},
    {"german": "einen Lebenslauf schreiben", "translations": {"english": "to write a CV/resume", "ukrainian": "писати резюме", "polish": "napisać życiorys", "albanian": "të shkruash jetën shkrimore", "arabic": "كتابة السيرة الذاتية", "italian": "scrivere un curriculum", "serbian": "написати биографију"}},
    {"german": "Was gehört zu einer Bewerbung?", "translations": {"english": "What belongs in a job application?", "ukrainian": "Що входить до заяви на роботу?", "polish": "Co należy do aplikacji o pracę?", "albanian": "Çfarë përfshihet në një aplikim për punë?", "arabic": "ما الذي ينتمي إلى طلب التوظيف؟", "italian": "Cosa comprende una candidatura?", "serbian": "Шта спада у пријаву за посао?"}},
    {"german": "Bewerbungsschreiben, Lebenslauf, Bewerbungsfoto, Kopien von den Zeugnissen", "translations": {"english": "application letter, CV, application photo, copies of certificates", "ukrainian": "супровідний лист, резюме, фото, копії сертифікатів", "polish": "list motywacyjny, CV, zdjęcie, kopie świadectw", "albanian": "letra e aplikimit, jeta shkrimore, fotoja, kopjet e certifikatave", "arabic": "خطاب التقديم، السيرة الذاتية، الصورة، نسخ من الشهادات", "italian": "lettera di candidatura, CV, foto, copie dei certificati", "serbian": "мотивационо писмо, биографија, фотографија, копије сведочанстава"}},
    {"german": "Ist die Stelle noch frei?", "translations": {"english": "Is the position still available?", "ukrainian": "Ця посада ще вільна?", "polish": "Czy stanowisko jest jeszcze wolne?", "albanian": "A është pozita ende e lirë?", "arabic": "هل الوظيفة لا تزال شاغرة؟", "italian": "Il posto è ancora disponibile?", "serbian": "Да ли је радно место још слободно?"}},
    {"german": "Wie sind denn die Arbeitszeiten?", "translations": {"english": "What are the working hours?", "ukrainian": "Який робочий час?", "polish": "Jakie są godziny pracy?", "albanian": "Cilat janë orët e punës?", "arabic": "ما هي ساعات العمل؟", "italian": "Quali sono gli orari di lavoro?", "serbian": "Које је радно време?"}},
    {"german": "Sie beginnen um 18 Uhr und arbeiten bis ungefähr 23 Uhr.", "translations": {"english": "You start at 6 PM and work until about 11 PM.", "ukrainian": "Ви починаєте о 18:00 і працюєте до приблизно 23:00.", "polish": "Zaczynasz o 18:00 i pracujesz do około 23:00.", "albanian": "Fillon në orën 18:00 dhe punon deri rreth orës 23:00.", "arabic": "تبدأ في الساعة 6 مساءً وتعمل حتى الساعة 11 مساءً تقريبًا.", "italian": "Inizi alle 18:00 e lavori fino alle 23:00 circa.", "serbian": "Почињете у 18 сати и радите до отприлике 23 сата."}},
    {"german": "Ich würde gerne wissen, wie die Bezahlung ist.", "translations": {"english": "I would like to know what the payment is.", "ukrainian": "Я хотів би дізнатися, яка оплата.", "polish": "Chciałbym wiedzieć, jakie jest wynagrodzenie.", "albanian": "Do të doja të di se sa është pagesa.", "arabic": "أود أن أعرف كم الأجر.", "italian": "Vorrei sapere qual è la retribuzione.", "serbian": "Волео бих да знам каква је плата."}},
    {"german": "Ich möchte gern auch hier in Deutschland arbeiten.", "translations": {"english": "I would also like to work here in Germany.", "ukrainian": "Я також хотів би працювати тут, у Німеччині.", "polish": "Chciałbym też pracować tutaj w Niemczech.", "albanian": "Do të doja gjithashtu të punoj këtu në Gjermani.", "arabic": "أود أيضًا أن أعمل هنا في ألمانيا.", "italian": "Vorrei anche lavorare qui in Germania.", "serbian": "Волео бих да радим и овде у Немачкој."}},
    {"german": "Ich würde gerne einen Ausbildungsplatz in einem Reisebüro finden.", "translations": {"english": "I would like to find a training position in a travel agency.", "ukrainian": "Я хотів би знайти навчальне місце в туристичному агентстві.", "polish": "Chciałbym znaleźć miejsce szkoleniowe w biurze podróży.", "albanian": "Do të doja të gjej një vend trajnimi në një agjenci udhëtimi.", "arabic": "أود أن أجد مكان تدريب في وكالة سفر.", "italian": "Vorrei trovare un posto di formazione in un'agenzia di viaggi.", "serbian": "Волео бих да нађем место за обуку у туристичкој агенцији."}},
    {"german": "Später würde ich gerne ein eigenes Reisebüro haben.", "translations": {"english": "Later I would like to have my own travel agency.", "ukrainian": "Пізніше я хотів би мати власне туристичне агентство.", "polish": "Później chciałbym mieć własne biuro podróży.", "albanian": "Më vonë do të doja të kem agjencinë time të udhëtimit.", "arabic": "لاحقًا أود أن يكون لدي وكالة سفر خاصة بي.", "italian": "Più tardi vorrei avere la mia agenzia di viaggi.", "serbian": "Касније бих волео да имам сопствену туристичку агенцију."}},
    {"german": "Ich weiß nicht, was ich am ersten Tag machen soll.", "translations": {"english": "I don't know what I should do on the first day.", "ukrainian": "Я не знаю, що мені робити в перший день.", "polish": "Nie wiem, co powinienem zrobić pierwszego dnia.", "albanian": "Nuk e di çfarë duhet të bëj ditën e parë.", "arabic": "لا أعرف ماذا يجب أن أفعل في اليوم الأول.", "italian": "Non so cosa dovrei fare il primo giorno.", "serbian": "Не знам шта треба да радим првог дана."}},
    {"german": "Ich bin nicht sicher, was ich nach der Schule machen soll.", "translations": {"english": "I'm not sure what I should do after school.", "ukrainian": "Я не впевнений, що мені робити після школи.", "polish": "Nie jestem pewien, co powinienem zrobić po szkole.", "albanian": "Nuk jam i sigurt se çfarë duhet të bëj pas shkollës.", "arabic": "لست متأكدًا مما يجب أن أفعله بعد المدرسة.", "italian": "Non sono sicuro di cosa dovrei fare dopo la scuola.", "serbian": "Нисам сигуран шта треба да радим после школе."}},
    {"german": "Er weiß noch nicht, ob er die Stelle annehmen will.", "translations": {"english": "He still doesn't know if he wants to accept the position.", "ukrainian": "Він ще не знає, чи хоче прийняти цю посаду.", "polish": "On jeszcze nie wie, czy chce przyjąć stanowisko.", "albanian": "Ai ende nuk e di nëse do të pranojë pozitën.", "arabic": "لا يزال لا يعرف إذا كان يريد قبول الوظيفة.", "italian": "Non sa ancora se vuole accettare la posizione.", "serbian": "Још не зна да ли жели да прихвати радно место."}},
    {"german": "Man sollte sich vorher über die Firma informieren.", "translations": {"english": "One should inform oneself about the company beforehand.", "ukrainian": "Треба заздалегідь дізнатися про компанію.", "polish": "Należy wcześniej dowiedzieć się o firmie.", "albanian": "Duhet të informohesh për kompaninë më parë.", "arabic": "يجب أن تتعرف على الشركة مسبقًا.", "italian": "Bisognerebbe informarsi sull'azienda in anticipo.", "serbian": "Треба се унапред информисати о фирми."}},
    {"german": "Man sollte passend gekleidet sein.", "translations": {"english": "One should be appropriately dressed.", "ukrainian": "Треба бути відповідно одягненим.", "polish": "Należy być odpowiednio ubranym.", "albanian": "Duhet të jesh veshur siç duhet.", "arabic": "يجب أن تكون مرتديًا ملابس مناسبة.", "italian": "Bisognerebbe vestirsi in modo appropriato.", "serbian": "Треба бити прикладно обучен."}},
    {"german": "Ich denke, man sollte pünktlich sein.", "translations": {"english": "I think one should be punctual.", "ukrainian": "Я думаю, треба бути пунктуальним.", "polish": "Myślę, że należy być punktualnym.", "albanian": "Mendoj se duhet të jesh i saktë.", "arabic": "أعتقد أنه يجب أن تكون دقيقًا.", "italian": "Penso che bisognerebbe essere puntuali.", "serbian": "Мислим да треба бити тачан."}}
  ],

  // MODULE 11: Von Ort zu Ort (From Place to Place - Travel)
  "11": [
    // Travel verbs and purposes
    {
      "german": "Verwandte besuchen",
      "translations": {
        "english": "visit relatives",
        "ukrainian": "відвідати родичів",
        "polish": "odwiedzić krewnych",
        "albanian": "vizitoni të afërmit",
        "arabic": "زيارة الأقارب",
        "italian": "visitare parenti"
      }
    },
    {
      "german": "in die Heimat fliegen/fahren",
      "translations": {
        "english": "fly/travel to one's homeland",
        "ukrainian": "летіти/їхати на батьківщину",
        "polish": "lecieć/jechać do ojczyzny",
        "albanian": "fluturon/udhëton në atdhe",
        "arabic": "السفر/الطيران إلى الوطن",
        "italian": "volare/andare in patria"
      }
    },
    {
      "german": "zur Arbeit fahren",
      "translations": {
        "english": "drive to work",
        "ukrainian": "їхати на роботу",
        "polish": "jechać do pracy",
        "albanian": "shko në punë",
        "arabic": "الذهاب إلى العمل",
        "italian": "andare al lavoro"
      }
    },
    {
      "german": "eine Geschäftsreise machen",
      "translations": {
        "english": "go on a business trip",
        "ukrainian": "здійснити ділову подорож",
        "polish": "odbyć podróż służbową",
        "albanian": "bëj një udhëtim biznesi",
        "arabic": "القيام برحلة عمل",
        "italian": "fare un viaggio d'affari"
      }
    },
    {
      "german": "eine Urlaubsreise machen",
      "translations": {
        "english": "go on a vacation",
        "ukrainian": "поїхати у відпустку",
        "polish": "pojechać na wakacje",
        "albanian": "shko në pushime",
        "arabic": "الذهاب في إجازة",
        "italian": "fare una vacanza"
      }
    },
    {
      "german": "im Stau stehen",
      "translations": {
        "english": "be stuck in a traffic jam",
        "ukrainian": "стояти в заторі",
        "polish": "stać w korku",
        "albanian": "rrij në bllok",
        "arabic": "عالق في الازدحام",
        "italian": "essere bloccati nel traffico"
      }
    },
    {
      "german": "einchecken",
      "translations": {
        "english": "check in",
        "ukrainian": "зареєструватися",
        "polish": "zameldować się",
        "albanian": "regjistrohesh",
        "arabic": "تسجيل الدخول",
        "italian": "fare il check-in"
      }
    },
    {
      "german": "in den Urlaub fahren/fliegen",
      "translations": {
        "english": "go on vacation (by car/plane)",
        "ukrainian": "їхати/летіти у відпустку",
        "polish": "jechać/lecieć na wakacje",
        "albanian": "shko në pushime (me makinë/avion)",
        "arabic": "الذهاب في إجازة (بالسيارة/الطائرة)",
        "italian": "andare in vacanza (in auto/aereo)"
      }
    },
    {
      "german": "Freunde abholen",
      "translations": {
        "english": "pick up friends",
        "ukrainian": "забрати друзів",
        "polish": "odebrać przyjaciół",
        "albanian": "merr miqtë",
        "arabic": "استقبال الأصدقاء",
        "italian": "andare a prendere gli amici"
      }
    },
    // Relative clauses - Nominative
    {
      "german": "Das ist der Strand, der so ruhig war.",
      "translations": {
        "english": "That's the beach that was so quiet.",
        "ukrainian": "Це той пляж, який був таким тихим.",
        "polish": "To jest plaża, która była taka spokojna.",
        "albanian": "Kjo është plazhi që ishte aq e qetë.",
        "arabic": "هذا هو الشاطئ الذي كان هادئاً جداً.",
        "italian": "Questa è la spiaggia che era così tranquilla."
      }
    },
    {
      "german": "Das ist das Museum, das fast immer geschlossen war.",
      "translations": {
        "english": "That's the museum that was almost always closed.",
        "ukrainian": "Це той музей, який майже завжди був зачиненим.",
        "polish": "To jest muzeum, które było prawie zawsze zamknięte.",
        "albanian": "Ky është muzeu që ishte pothuajse gjithmonë i mbyllur.",
        "arabic": "هذا هو المتحف الذي كان مغلقاً دائماً تقريباً.",
        "italian": "Questo è il museo che era quasi sempre chiuso."
      }
    },
    {
      "german": "Das sind die Nachbarn, die uns zum Essen eingeladen haben.",
      "translations": {
        "english": "Those are the neighbors who invited us to dinner.",
        "ukrainian": "Це ті сусіди, які запросили нас на вечерю.",
        "polish": "To są sąsiedzi, którzy zaprosili nas na kolację.",
        "albanian": "Këta janë fqinjët që na ftuan për darkë.",
        "arabic": "هؤلاء هم الجيران الذين دعونا لتناول العشاء.",
        "italian": "Questi sono i vicini che ci hanno invitato a cena."
      }
    },
    // Relative clauses - Accusative
    {
      "german": "Das ist der Sonnenhut, den ich immer am Strand trage.",
      "translations": {
        "english": "That's the sun hat that I always wear at the beach.",
        "ukrainian": "Це той капелюх від сонця, який я завжди ношу на пляжі.",
        "polish": "To jest kapelusz od słońca, który zawsze noszę na plaży.",
        "albanian": "Ky është kapela nga dielli që e mbaj gjithmonë në plazh.",
        "arabic": "هذه هي القبعة الشمسية التي أرتديها دائماً على الشاطئ.",
        "italian": "Questo è il cappello da sole che indosso sempre in spiaggia."
      }
    },
    {
      "german": "Wo ist das Handy, das ich gestern aufgeladen habe?",
      "translations": {
        "english": "Where is the phone that I charged yesterday?",
        "ukrainian": "Де той телефон, який я вчора заряджав?",
        "polish": "Gdzie jest telefon, który wczoraj naładowałem?",
        "albanian": "Ku është telefoni që e ngarkova dje?",
        "arabic": "أين الهاتف الذي شحنته أمس؟",
        "italian": "Dov'è il telefono che ho caricato ieri?"
      }
    },
    {
      "german": "Wo ist die Zahnbürste, die ich gestern gekauft habe?",
      "translations": {
        "english": "Where is the toothbrush that I bought yesterday?",
        "ukrainian": "Де та зубна щітка, яку я вчора купив?",
        "polish": "Gdzie jest szczoteczka do zębów, którą kupiłem wczoraj?",
        "albanian": "Ku është furça e dhëmbëve që e bleva dje?",
        "arabic": "أين فرشاة الأسنان التي اشتريتها أمس؟",
        "italian": "Dov'è lo spazzolino che ho comprato ieri?"
      }
    },
    {
      "german": "Wo sind die Handtücher, die wir für den Strand brauchen?",
      "translations": {
        "english": "Where are the towels that we need for the beach?",
        "ukrainian": "Де ті рушники, які нам потрібні для пляжу?",
        "polish": "Gdzie są ręczniki, które potrzebujemy na plażę?",
        "albanian": "Ku janë peshqirët që na duhen për plazh?",
        "arabic": "أين المناشف التي نحتاجها للشاطئ؟",
        "italian": "Dove sono gli asciugamani di cui abbiamo bisogno per la spiaggia?"
      }
    },
    // Emergency/Travel situations
    {
      "german": "Ich habe eine Autopanne.",
      "translations": {
        "english": "I have a car breakdown.",
        "ukrainian": "У мене зламалася машина.",
        "polish": "Mam awarię samochodu.",
        "albanian": "Makina ime është prishur.",
        "arabic": "لدي عطل في السيارة.",
        "italian": "Ho un guasto all'auto."
      }
    },
    {
      "german": "Die Notrufsäule schickt den Pannendienst.",
      "translations": {
        "english": "The emergency phone sends the breakdown service.",
        "ukrainian": "Телефон екстреної допомоги викликає аварійну службу.",
        "polish": "Telefon alarmowy wysyła pomoc drogową.",
        "albanian": "Telefoni emergjent dërgon shërbimin e ndihmës.",
        "arabic": "هاتف الطوارئ يرسل خدمة الإصلاح.",
        "italian": "Il telefono di emergenza invia il soccorso stradale."
      }
    },
    {
      "german": "Ich möchte einen Flug von Frankfurt nach Tunis buchen.",
      "translations": {
        "english": "I would like to book a flight from Frankfurt to Tunis.",
        "ukrainian": "Я хотів би забронювати рейс з Франкфурта в Туніс.",
        "polish": "Chciałbym zarezerwować lot z Frankfurtu do Tunisu.",
        "albanian": "Do të doja të rezervoj një fluturim nga Frankfurti në Tunis.",
        "arabic": "أود حجز رحلة من فرانكفورت إلى تونس.",
        "italian": "Vorrei prenotare un volo da Francoforte a Tunisi."
      }
    },
    {
      "german": "Ich möchte einen Urlaub auf Mallorca buchen.",
      "translations": {
        "english": "I would like to book a vacation to Mallorca.",
        "ukrainian": "Я хотів би забронювати відпустку на Мальорці.",
        "polish": "Chciałbym zarezerwować wakacje na Majorce.",
        "albanian": "Do të doja të rezervoj një pushim në Malorka.",
        "arabic": "أود حجز عطلة في مايوركا.",
        "italian": "Vorrei prenotare una vacanza a Maiorca."
      }
    },
    // Planning phrases
    {
      "german": "Ich schlage vor, dass wir Tage in Berlin bleiben.",
      "translations": {
        "english": "I suggest that we stay days in Berlin.",
        "ukrainian": "Я пропоную, щоб ми залишилися днів у Берліні.",
        "polish": "Proponuję, żebyśmy zostali dni w Berlinie.",
        "albanian": "Propozoj që të qëndrojmë ditë në Berlin.",
        "arabic": "أقترح أن نبقى أيام في برلين.",
        "italian": "Propongo che restiamo giorni a Berlino."
      }
    },
    {
      "german": "Das finde ich gut.",
      "translations": {
        "english": "I think that's good.",
        "ukrainian": "Це мені подобається.",
        "polish": "Uważam, że to dobre.",
        "albanian": "Mendoj se është mirë.",
        "arabic": "أعتقد أن ذلك جيد.",
        "italian": "Penso che sia buono."
      }
    },
    {
      "german": "Einverstanden.",
      "translations": {
        "english": "Agreed.",
        "ukrainian": "Згоден.",
        "polish": "Zgoda.",
        "albanian": "Dakord.",
        "arabic": "موافق.",
        "italian": "D'accordo."
      }
    },
    {
      "german": "Das ist eine gute Idee.",
      "translations": {
        "english": "That's a good idea.",
        "ukrainian": "Це гарна ідея.",
        "polish": "To dobry pomysł.",
        "albanian": "Ky është një ide e mirë.",
        "arabic": "هذه فكرة جيدة.",
        "italian": "È una buona idea."
      }
    },
    // Modal verb 'sollen' for suggestions
    {
      "german": "Der Hinflug soll am 31.3. sein.",
      "translations": {
        "english": "The outward flight should be on March 31.",
        "ukrainian": "Політ туди має бути 31 березня.",
        "polish": "Lot tam powinien być 31 marca.",
        "albanian": "Fluturimi shkuarazi duhet të jetë më 31 mars.",
        "arabic": "يجب أن تكون رحلة الذهاب في 31 مارس.",
        "italian": "Il volo di andata dovrebbe essere il 31 marzo."
      }
    },
    {
      "german": "Der Abflugort soll Hamburg sein.",
      "translations": {
        "english": "The departure location should be Hamburg.",
        "ukrainian": "Місце вильоту має бути Гамбург.",
        "polish": "Miejsce wylotu powinno być Hamburg.",
        "albanian": "Vendi i nisjes duhet të jetë Hamburgu.",
        "arabic": "يجب أن يكون مكان المغادرة هامبورغ.",
        "italian": "Il luogo di partenza dovrebbe essere Amburgo."
      }
    },
    {
      "german": "Die Unterkunft soll nicht so viel kosten.",
      "translations": {
        "english": "The accommodation shouldn't cost so much.",
        "ukrainian": "Житло не повинно коштувати так багато.",
        "polish": "Zakwaterowanie nie powinno kosztować tak dużo.",
        "albanian": "Akomodimi nuk duhet të kushtojë aq shumë.",
        "arabic": "يجب ألا يكلف السكن الكثير.",
        "italian": "L'alloggio non dovrebbe costare così tanto."
      }
    }
  ],

  // MODULE 12: Treffpunkte (Meeting Points - Clubs/Volunteer Work/Phone Conversations)
  "12": [
    {
      "german": "gemeinsam feiern",
      "translations": {
        "english": "celebrate together",
        "ukrainian": "святкувати разом",
        "polish": "świętować razem",
        "albanian": "festoj së bashku",
        "arabic": "الاحتفال معاً"
      }
    },
    {
      "german": "sich unterhalten",
      "translations": {
        "english": "converse, chat",
        "ukrainian": "розмовляти",
        "polish": "rozmawiać",
        "albanian": "bisedoj",
        "arabic": "يتحدث"
      }
    },
    {
      "german": "Sport treiben",
      "translations": {
        "english": "do sports",
        "ukrainian": "займатися спортом",
        "polish": "uprawiać sport",
        "albanian": "bëj sport",
        "arabic": "ممارسة الرياضة"
      }
    },
    {
      "german": "kochen lernen",
      "translations": {
        "english": "learn to cook",
        "ukrainian": "вчитися готувати",
        "polish": "uczyć się gotować",
        "albanian": "mësoj të gatuaj",
        "arabic": "تعلم الطبخ"
      }
    },
    {
      "german": "mit dem Hund spazieren gehen",
      "translations": {
        "english": "walk the dog",
        "ukrainian": "гуляти з собакою",
        "polish": "spacerować z psem",
        "albanian": "shëtis me qenin",
        "arabic": "المشي مع الكلب"
      }
    },
    {
      "german": "ernst aussehen",
      "translations": {
        "english": "look serious",
        "ukrainian": "виглядати серйозним",
        "polish": "wyglądać poważnie",
        "albanian": "dukem serioz",
        "arabic": "يبدو جاداً"
      }
    },
    {
      "german": "sich wohl fühlen",
      "translations": {
        "english": "feel comfortable, feel well",
        "ukrainian": "почуватися комфортно",
        "polish": "czuć się dobrze",
        "albanian": "ndjehem mirë",
        "arabic": "يشعر بالراحة"
      }
    },
    {
      "german": "Die Stimmung ist gut/toll/schlecht.",
      "translations": {
        "english": "The mood is good/great/bad.",
        "ukrainian": "Настрій хороший/чудовий/поганий.",
        "polish": "Nastrój jest dobry/świetny/zły.",
        "albanian": "Gjendja është e mirë/e shkëlqyer/e keqe.",
        "arabic": "المزاج جيد/رائع/سيئ."
      }
    },
    {
      "german": "sich sozial engagieren",
      "translations": {
        "english": "get involved socially, volunteer",
        "ukrainian": "займатися соціальною діяльністю",
        "polish": "angażować się społecznie",
        "albanian": "përfshihem sociale",
        "arabic": "المشاركة الاجتماعية"
      }
    },
    {
      "german": "im Nachbarschaftshaus Kurse besuchen",
      "translations": {
        "english": "attend courses at the neighborhood house",
        "ukrainian": "відвідувати курси в будинку сусідів",
        "polish": "uczęszczać na kursy w domu sąsiedzkim",
        "albanian": "ndiqni kurse në shtëpinë e lagjes",
        "arabic": "حضور الدورات في بيت الجيران"
      }
    },
    {
      "german": "in einem Verein Mitglied werden",
      "translations": {
        "english": "become a member of a club",
        "ukrainian": "стати членом клубу",
        "polish": "zostać członkiem stowarzyszenia",
        "albanian": "bëhesh anëtar i një shoqate",
        "arabic": "أن تصبح عضواً في نادي"
      }
    },
    {
      "german": "einen Mitgliedsbeitrag zahlen",
      "translations": {
        "english": "pay a membership fee",
        "ukrainian": "сплатити членський внесок",
        "polish": "płacić składkę członkowską",
        "albanian": "paguaj një pagesë anëtarësie",
        "arabic": "دفع رسوم العضوية"
      }
    },
    {
      "german": "sich für soziale Gerechtigkeit einsetzen",
      "translations": {
        "english": "advocate for social justice",
        "ukrainian": "виступати за соціальну справедливість",
        "polish": "angażować się w sprawiedliwość społeczną",
        "albanian": "angazhohem për drejtësi sociale",
        "arabic": "الدفاع عن العدالة الاجتماعية"
      }
    },
    {
      "german": "in schwierigen Situationen helfen",
      "translations": {
        "english": "help in difficult situations",
        "ukrainian": "допомагати у складних ситуаціях",
        "polish": "pomagać w trudnych sytuacjach",
        "albanian": "ndihmoj në situata të vështira",
        "arabic": "المساعدة في المواقف الصعبة"
      }
    },
    {
      "german": "sich für Beratungen engagieren",
      "translations": {
        "english": "get involved in counseling",
        "ukrainian": "займатися консультуванням",
        "polish": "angażować się w doradztwo",
        "albanian": "përfshihem në këshillim",
        "arabic": "المشاركة في الاستشارات"
      }
    },
    {
      "german": "mit Herrn Schlüter verbinden",
      "translations": {
        "english": "connect with Mr. Schlüter",
        "ukrainian": "з'єднати з паном Шлютером",
        "polish": "połączyć z panem Schlüterem",
        "albanian": "lidh me zotërin Schlüter",
        "arabic": "التوصيل مع السيد شلوتر"
      }
    },
    {
      "german": "die Durchw ahl geben",
      "translations": {
        "english": "give the extension number",
        "ukrainian": "дати внутрішній номер",
        "polish": "podać numer wewnętrzny",
        "albanian": "jep numrin e brendshëm",
        "arabic": "إعطاء رقم التحويلة"
      }
    },
    {
      "german": "falsch verbunden sein",
      "translations": {
        "english": "have the wrong number, be wrongly connected",
        "ukrainian": "помилитися номером",
        "polish": "być źle połączonym",
        "albanian": "të jesh lidhur gabimisht",
        "arabic": "يتصل بخطأ"
      }
    },
    {
      "german": "eine Nachricht hinterlassen",
      "translations": {
        "english": "leave a message",
        "ukrainian": "залишити повідомлення",
        "polish": "zostawić wiadomość",
        "albanian": "lë një mesazh",
        "arabic": "ترك رسالة"
      }
    },
    {
      "german": "zurückrufen",
      "translations": {
        "english": "call back",
        "ukrainian": "передзвонити",
        "polish": "oddzwonić",
        "albanian": "thirr prapa",
        "arabic": "معاودة الاتصال"
      }
    },
    {
      "german": "Können Sie mir bitte die Durchw ahl geben?",
      "translations": {
        "english": "Can you please give me the extension number?",
        "ukrainian": "Не могли б ви дати мені внутрішній номер?",
        "polish": "Czy może mi pan/pani podać numer wewnętrzny?",
        "albanian": "A mund të më jepni numrin e brendshëm?",
        "arabic": "هل يمكنك إعطائي رقم التحويلة من فضلك؟"
      }
    },
    {
      "german": "Kann ich eine Nachricht hinterlassen?",
      "translations": {
        "english": "Can I leave a message?",
        "ukrainian": "Чи можу я залишити повідомлення?",
        "polish": "Czy mogę zostawić wiadomość?",
        "albanian": "A mund të lë një mesazh?",
        "arabic": "هل يمكنني ترك رسالة؟"
      }
    },
    {
      "german": "Auf Wiederhören.",
      "translations": {
        "english": "Goodbye (on the phone).",
        "ukrainian": "До побачення (по телефону).",
        "polish": "Do widzenia (przez telefon).",
        "albanian": "Mirupafshim (në telefon).",
        "arabic": "وداعاً (على الهاتف)."
      }
    },
    {
      "german": "In Deutschland gibt es viele Vereine, in denen viele Menschen aktiv sind.",
      "translations": {
        "english": "In Germany there are many clubs in which many people are active.",
        "ukrainian": "У Німеччині багато клубів, в яких багато людей активні.",
        "polish": "W Niemczech jest wiele stowarzyszeń, w których wiele osób jest aktywnych.",
        "albanian": "Në Gjermani ka shumë shoqata në të cilat shumë njerëz janë aktivë.",
        "arabic": "في ألمانيا يوجد العديد من النوادي التي يكون فيها الكثير من الناس نشطين."
      }
    },
    {
      "german": "Die sozialen Vereine, für die sich viele Menschen engagieren, helfen Menschen.",
      "translations": {
        "english": "The social clubs for which many people volunteer help people.",
        "ukrainian": "Соціальні клуби, для яких багато людей працюють волонтерами, допомагають людям.",
        "polish": "Stowarzyszenia społeczne, dla których wiele osób się angażuje, pomagają ludziom.",
        "albanian": "Shoqatat sociale për të cilat shumë njerëz angazhohen ndihmojnë njerëzit.",
        "arabic": "النوادي الاجتماعية التي يتطوع فيها الكثير من الناس تساعد الناس."
      }
    }
  ],

  // MODULE 13: Banken und Versicherungen (Banks & Insurance)
  "13": [
    {
      "german": "Ich möchte ein Konto eröffnen.",
      "translations": {
        "english": "I would like to open an account.",
        "ukrainian": "Я хотів би відкрити рахунок.",
        "polish": "Chciałbym otworzyć konto.",
        "albanian": "Do të doja të hap një llogari.",
        "arabic": "أود فتح حساب."
      }
    },
    {
      "german": "Ich möchte Geld von meinem Konto abheben.",
      "translations": {
        "english": "I would like to withdraw money from my account.",
        "ukrainian": "Я хотів би зняти гроші з мого рахунку.",
        "polish": "Chciałbym wypłacić pieniądze z mojego konta.",
        "albanian": "Do të doja të tërheq para nga llogaria ime.",
        "arabic": "أود سحب المال من حسابي."
      }
    },
    {
      "german": "Ich überweise manchmal Geld in mein Heimatland.",
      "translations": {
        "english": "I sometimes transfer money to my homeland.",
        "ukrainian": "Я іноді переказую гроші на батьківщину.",
        "polish": "Czasami przelewam pieniądze do mojej ojczyzny.",
        "albanian": "Nganjëherë transferoj para në atdheun tim.",
        "arabic": "أحياناً أحول المال إلى وطني."
      }
    },
    {
      "german": "Mit der EC-Karte kann man bargeldlos bezahlen.",
      "translations": {
        "english": "With the debit card you can pay cashless.",
        "ukrainian": "З дебетовою карткою можна платити безготівково.",
        "polish": "Kartą debetową można płacić bezgotówkowo.",
        "albanian": "Me kartën debitore mund të paguash pa para.",
        "arabic": "ببطاقة الخصم يمكنك الدفع بدون نقود."
      }
    },
    {
      "german": "Die Gebühren sind für eine Kreditkarte oder eine zweite EC-Karte.",
      "translations": {
        "english": "The fees are for a credit card or a second debit card.",
        "ukrainian": "Комісії призначені для кредитної картки або другої дебетової картки.",
        "polish": "Opłaty są za kartę kredytową lub drugą kartę debetową.",
        "albanian": "Tarifat janë për një kartë krediti ose një kartë të dytë debitore.",
        "arabic": "الرسوم هي لبطاقة ائتمان أو بطاقة خصم ثانية."
      }
    },
    {
      "german": "Ich brauche ein Privatkonto für mein Gehalt.",
      "translations": {
        "english": "I need a personal account for my salary.",
        "ukrainian": "Мені потрібен особистий рахунок для моєї зарплати.",
        "polish": "Potrzebuję konta prywatnego na moją pensję.",
        "albanian": "Më duhet një llogari private për rrogën time.",
        "arabic": "أحتاج إلى حساب شخصي لراتبي."
      }
    },
    {
      "german": "Brauchen Sie ein Privatk onto oder ein Geschäftskonto?",
      "translations": {
        "english": "Do you need a personal account or a business account?",
        "ukrainian": "Вам потрібен особистий рахунок чи бізнес-рахунок?",
        "polish": "Potrzebuje pan konta prywatnego czy firmowego?",
        "albanian": "A keni nevojë për një llogari private apo një llogari biznesi?",
        "arabic": "هل تحتاج إلى حساب شخصي أو حساب تجاري؟"
      }
    },
    {
      "german": "Das Konto Giro+ kostet 4 Euro im Monat plus Gebühren.",
      "translations": {
        "english": "The Giro+ account costs 4 euros per month plus fees.",
        "ukrainian": "Рахунок Giro+ коштує 4 євро на місяць плюс комісії.",
        "polish": "Konto Giro+ kosztuje 4 euro miesięcznie plus opłaty.",
        "albanian": "Llogaria Giro+ kushton 4 euro në muaj plus tarifat.",
        "arabic": "حساب Giro+ يكلف 4 يورو شهرياً بالإضافة إلى الرسوم."
      }
    },
    {
      "german": "Wofür muss ich Gebühren bezahlen?",
      "translations": {
        "english": "What do I have to pay fees for?",
        "ukrainian": "За що мені потрібно платити комісії?",
        "polish": "Za co muszę płacić opłaty?",
        "albanian": "Për çfarë duhet të paguaj tarifa?",
        "arabic": "لماذا يجب أن أدفع رسوماً؟"
      }
    },
    {
      "german": "Ich möchte auch Online-Banking machen.",
      "translations": {
        "english": "I would also like to do online banking.",
        "ukrainian": "Я також хотів би користуватися онлайн-банкінгом.",
        "polish": "Chciałbym również korzystać z bankowości internetowej.",
        "albanian": "Do të doja të bëj edhe bankim online.",
        "arabic": "أود أيضاً القيام بالخدمات المصرفية عبر الإنترنت."
      }
    },
    {
      "german": "In Deutschland muss man eine Krankenversicherung haben.",
      "translations": {
        "english": "In Germany you must have health insurance.",
        "ukrainian": "У Німеччині потрібно мати медичне страхування.",
        "polish": "W Niemczech trzeba mieć ubezpieczenie zdrowotne.",
        "albanian": "Në Gjermani duhet të kesh sigur im shëndetësor.",
        "arabic": "في ألمانيا يجب أن يكون لديك تأمين صحي."
      }
    },
    {
      "german": "Alle Autobesitzer müssen eine Kfz-Versicherung haben.",
      "translations": {
        "english": "All car owners must have car insurance.",
        "ukrainian": "Всі власники автомобілів повинні мати автострахування.",
        "polish": "Wszyscy właściciele samochodów muszą mieć ubezpieczenie samochodu.",
        "albanian": "Të gjithë pronarët e makinave duhet të kenë sigurim automjeti.",
        "arabic": "يجب على جميع أصحاب السيارات أن يكون لديهم تأمين سيارة."
      }
    },
    {
      "german": "Ich finde eine Hausratversicherung wichtig.",
      "translations": {
        "english": "I think household contents insurance is important.",
        "ukrainian": "Я вважаю, що страхування майна важливе.",
        "polish": "Uważam, że ubezpieczenie mienia domowego jest ważne.",
        "albanian": "Mendoj se sigurimi i pasurisë shtëpiake është i rëndësishëm.",
        "arabic": "أعتقد أن تأمين محتويات المنزل مهم."
      }
    },
    {
      "german": "Eine Haftpflichtversicherung macht Sinn.",
      "translations": {
        "english": "Liability insurance makes sense.",
        "ukrainian": "Страхування відповідальності має сенс.",
        "polish": "Ubezpieczenie odpowiedzialności cywilnej ma sens.",
        "albanian": "Sigurimi i përgjegjësisë ka kuptim.",
        "arabic": "تأمين المسؤولية منطقي."
      }
    },
    {
      "german": "Ich möchte einen Schaden melden.",
      "translations": {
        "english": "I would like to report damage.",
        "ukrainian": "Я хотів би повідомити про збиток.",
        "polish": "Chciałbym zgłosić szkodę.",
        "albanian": "Do të doja të raportoj dëmin.",
        "arabic": "أود الإبلاغ عن ضرر."
      }
    },
    {
      "german": "Ich möchte einen Staubsauger reklamieren.",
      "translations": {
        "english": "I would like to make a complaint about a vacuum cleaner.",
        "ukrainian": "Я хотів би поскаржитися на пилосос.",
        "polish": "Chciałbym złożyć reklamację odkurzacza.",
        "albanian": "Do të doja të bëj një ankesë për një fshesë me korrent.",
        "arabic": "أود تقديم شكوى بشأن مكنسة كهربائية."
      }
    },
    {
      "german": "Die Kamera hat noch acht Monate Garantie.",
      "translations": {
        "english": "The camera still has eight months of warranty.",
        "ukrainian": "На камеру ще вісім місяців гарантії.",
        "polish": "Aparat ma jeszcze osiem miesięcy gwarancji.",
        "albanian": "Kamera ka ende tetë muaj garanci.",
        "arabic": "الكاميرا لا تزال لديها ثمانية أشهر من الضمان."
      }
    },
    {
      "german": "Haben Sie die Quittung und den Garantieschein?",
      "translations": {
        "english": "Do you have the receipt and the warranty certificate?",
        "ukrainian": "У вас є квитанція та гарантійний талон?",
        "polish": "Czy ma pan rachunek i kartę gwarancyjną?",
        "albanian": "A keni faturën dhe certifikatën e garancisë?",
        "arabic": "هل لديك الإيصال وشهادة الضمان؟"
      }
    },
    {
      "german": "Wir prüfen das Gerät und reparieren es.",
      "translations": {
        "english": "We'll check the device and repair it.",
        "ukrainian": "Ми перевіримо пристрій і відремонтуємо його.",
        "polish": "Sprawdzimy urządzenie i naprawimy je.",
        "albanian": "Do ta kontrollojmë pajisjen dhe do ta riparojmë.",
        "arabic": "سنفحص الجهاز ونصلحه."
      }
    },
    {
      "german": "Das dauert ungefähr zwei Wochen.",
      "translations": {
        "english": "That takes about two weeks.",
        "ukrainian": "Це займе приблизно два тижні.",
        "polish": "To trwa około dwóch tygodni.",
        "albanian": "Kjo zgjat rreth dy javë.",
        "arabic": "يستغرق ذلك حوالي أسبوعين."
      }
    },
    {
      "german": "Ich spreche mit dem Bankberater.",
      "translations": {
        "english": "I'm speaking with the bank advisor.",
        "ukrainian": "Я розмовляю з банківським консультантом.",
        "polish": "Rozmawiam z doradcą bankowym.",
        "albanian": "Po flas me këshilltarin e bankës.",
        "arabic": "أتحدث مع مستشار البنك."
      }
    },
    {
      "german": "Sie sprechen über ein Girokonto.",
      "translations": {
        "english": "You're talking about a current account.",
        "ukrainian": "Ви говорите про поточний рахунок.",
        "polish": "Rozmawiacie o koncie bieżącym.",
        "albanian": "Po flisni për një llogari rrjedhëse.",
        "arabic": "تتحدثون عن حساب جاري."
      }
    },
    {
      "german": "Sie braucht ein Konto für ihr Gehalt.",
      "translations": {
        "english": "She needs an account for her salary.",
        "ukrainian": "Їй потрібен рахунок для зарплати.",
        "polish": "Ona potrzebuje konta na pensję.",
        "albanian": "Ajo ka nevojë për një llogari për rrogën e saj.",
        "arabic": "إنها بحاجة إلى حساب لراتبها."
      }
    },
    {
      "german": "Sie muss zwei Wochen auf ihre EC-Karte warten.",
      "translations": {
        "english": "She has to wait two weeks for her debit card.",
        "ukrainian": "Їй доведеться чекати два тижні на дебетову картку.",
        "polish": "Musi czekać dwa tygodnie na kartę debetową.",
        "albanian": "Ajo duhet të presë dy javë për kartën e saj debitore.",
        "arabic": "يجب عليها الانتظار أسبوعين للحصول على بطاقة الخصم."
      }
    },
    {
      "german": "Sie braucht die zweite EC-Karte für ihren Mann.",
      "translations": {
        "english": "She needs the second debit card for her husband.",
        "ukrainian": "Їй потрібна друга дебетова картка для чоловіка.",
        "polish": "Potrzebuje drugiej karty debetowej dla męża.",
        "albanian": "Ajo ka nevojë për kartën e dytë debitore për burrin e saj.",
        "arabic": "إنها بحاجة إلى بطاقة الخصم الثانية لزوجها."
      }
    }
  ],

  // MODULE 14: Freunde und Bekannte (Friends & Acquaintances)
  "14": [
    {
      "german": "Gute Freunde sind wichtig in unserem Leben.",
      "translations": {
        "english": "Good friends are important in our lives.",
        "ukrainian": "Хороші друзі важливі в нашому житті.",
        "polish": "Dobrzy przyjaciele są ważni w naszym życiu.",
        "albanian": "Miqtë e mirë janë të rëndësishëm në jetën tonë.",
        "arabic": "الأصدقاء الجيدون مهمون في حياتنا."
      }
    },
    {
      "german": "Ich vertraue meinem besten Freund.",
      "translations": {
        "english": "I trust my best friend.",
        "ukrainian": "Я довіряю своєму найкращому другові.",
        "polish": "Ufam mojemu najlepszemu przyjacielowi.",
        "albanian": "I besoj mikut tim më të mirë.",
        "arabic": "أثق في أفضل صديق لي."
      }
    },
    {
      "german": "Wir helfen uns gegenseitig.",
      "translations": {
        "english": "We help each other.",
        "ukrainian": "Ми допомагаємо один одному.",
        "polish": "Pomagamy sobie wzajemnie.",
        "albanian": "Ne ndihmojmë njëri-tjetrin.",
        "arabic": "نساعد بعضنا البعض."
      }
    },
    {
      "german": "Worüber sprechen Sie mit Ihren Freunden?",
      "translations": {
        "english": "What do you talk about with your friends?",
        "ukrainian": "Про що ви розмовляєте зі своїми друзями?",
        "polish": "O czym rozmawiasz ze swoimi przyjaciółmi?",
        "albanian": "Për çfarë flisni me miqtë tuaj?",
        "arabic": "عن ماذا تتحدث مع أصدقائك؟"
      }
    },
    {
      "german": "Ich freue mich auf das Wochenende.",
      "translations": {
        "english": "I'm looking forward to the weekend.",
        "ukrainian": "Я чекаю на вихідні з нетерпінням.",
        "polish": "Cieszę się na weekend.",
        "albanian": "Pres me padurim fundjavën.",
        "arabic": "أتطلع إلى عطلة نهاية الأسبوع."
      }
    },
    {
      "german": "Worauf wartest du?",
      "translations": {
        "english": "What are you waiting for?",
        "ukrainian": "На що ти чекаєш?",
        "polish": "Na co czekasz?",
        "albanian": "Çfarë po pret?",
        "arabic": "ماذا تنتظر؟"
      }
    },
    {
      "german": "Wovon träumst du?",
      "translations": {
        "english": "What do you dream of?",
        "ukrainian": "Про що ти мрієш?",
        "polish": "O czym marzysz?",
        "albanian": "Për çfarë ëndërron?",
        "arabic": "عن ماذا تحلم؟"
      }
    },
    {
      "german": "Ich denke oft an meine Kindheit.",
      "translations": {
        "english": "I often think of my childhood.",
        "ukrainian": "Я часто думаю про своє дитинство.",
        "polish": "Często myślę o mojym dzieciństwie.",
        "albanian": "Shpesh mendoj për fëmijërinë time.",
        "arabic": "أفكر كثيراً في طفولتي."
      }
    },
    {
      "german": "Daran erinnere ich mich gern.",
      "translations": {
        "english": "I remember that fondly.",
        "ukrainian": "Я з задоволенням згадую про це.",
        "polish": "Chętnie to wspominam.",
        "albanian": "E kujtoj atë me kënaqësi.",
        "arabic": "أتذكر ذلك بسرور."
      }
    },
    {
      "german": "Darüber möchte ich nicht sprechen.",
      "translations": {
        "english": "I don't want to talk about that.",
        "ukrainian": "Я не хочу про це говорити.",
        "polish": "Nie chcę o tym rozmawiać.",
        "albanian": "Nuk dua të flas për këtë.",
        "arabic": "لا أريد التحدث عن ذلك."
      }
    },
    {
      "german": "Mit einem guten Freund kann man nicht nur gemeinsam lachen, er hilft auch, wenn man Probleme hat.",
      "translations": {
        "english": "With a good friend you can not only laugh together, he also helps when you have problems.",
        "ukrainian": "З хорошим другом можна не тільки сміятися разом, він також допомагає, коли у вас є проблеми.",
        "polish": "Z dobrym przyjacielem można nie tylko razem się śmiać, on też pomaga, gdy ma się problemy.",
        "albanian": "Me një mik të mirë mund të qeshësh së bashku, ai gjithashtu ndihmon kur ke probleme.",
        "arabic": "مع صديق جيد يمكنك ليس فقط الضحك معاً، بل يساعد أيضاً عندما تواجه مشاكل."
      }
    },
    {
      "german": "Freundschaft heißt sich gegenseitig verstehen.",
      "translations": {
        "english": "Friendship means understanding each other.",
        "ukrainian": "Дружба означає розуміти один одного.",
        "polish": "Przyjaźń oznacza wzajemne zrozumienie.",
        "albanian": "Miqësia do të thotë të kuptojmë njëri-tjetrin.",
        "arabic": "الصداقة تعني التفاهم المتبادل."
      }
    },
    {
      "german": "Wenn's Probleme gibt, dann hilft man sich.",
      "translations": {
        "english": "When there are problems, then one helps each other.",
        "ukrainian": "Коли є проблеми, то допомагають один одному.",
        "polish": "Gdy są problemy, wtedy sobie pomagamy.",
        "albanian": "Kur ka probleme, atëherë ndihmojmë njëri-tjetrin.",
        "arabic": "عندما تكون هناك مشاكل، يساعد المرء بعضه بعضاً."
      }
    },
    {
      "german": "Freunde halten fest zusammen.",
      "translations": {
        "english": "Friends stick together.",
        "ukrainian": "Друзі тримаються разом.",
        "polish": "Przyjaciele trzymają się razem.",
        "albanian": "Miqtë mbeten bashkë.",
        "arabic": "الأصدقاء يبقون معاً."
      }
    },
    {
      "german": "Ich kann mich auf meinen Freund verlassen.",
      "translations": {
        "english": "I can rely on my friend.",
        "ukrainian": "Я можу покластися на свого друга.",
        "polish": "Mogę polegać na moim przyjacielu.",
        "albanian": "Mund të mbështetem te miku im.",
        "arabic": "يمكنني الاعتماد على صديقي."
      }
    },
    {
      "german": "Mein Freund ist nicht so glücklich. Er kann nicht verstehen, dass ich jeden Tag mit meiner Cousine sprechen muss.",
      "translations": {
        "english": "My friend is not so happy. He can't understand that I have to talk to my cousin every day.",
        "ukrainian": "Мій друг не такий щасливий. Він не може зрозуміти, що я повинен розмовляти зі своєю двоюрідною сестрою щодня.",
        "polish": "Mój przyjaciel nie jest taki szczęśliwy. Nie może zrozumieć, że muszę codziennie rozmawiać z moją kuzynką.",
        "albanian": "Miku im nuk është aq i lumtur. Ai nuk mund të kuptojë se duhet të flas çdo ditë me kushërirën time.",
        "arabic": "صديقي ليس سعيداً جداً. لا يستطيع أن يفهم أنه يجب علي التحدث مع ابنة عمي كل يوم."
      }
    },
    {
      "german": "Ich habe keine beste Freundin. Meine beste Freundin ist ein Freund.",
      "translations": {
        "english": "I don't have a best friend (female). My best friend is a friend (male).",
        "ukrainian": "У мене немає найкращої подруги. Мій найкращий друг - це друг (чоловік).",
        "polish": "Nie mam najlepszej przyjaciółki. Moim najlepszym przyjacielem jest przyjaciel.",
        "albanian": "Nuk kam një shoqe më të mirë. Mikja ime më e mirë është një mik.",
        "arabic": "ليس لدي أفضل صديقة. أفضل صديق لي هو صديق (ذكر)."
      }
    },
    {
      "german": "Manchmal denke ich, ich kenne ihn besser als seine Freundin.",
      "translations": {
        "english": "Sometimes I think I know him better than his girlfriend.",
        "ukrainian": "Іноді я думаю, що знаю його краще, ніж його дівчина.",
        "polish": "Czasami myślę, że znam go lepiej niż jego dziewczyna.",
        "albanian": "Nganjëherë mendoj se e njoh më mirë se e dashura e tij.",
        "arabic": "أحياناً أعتقد أنني أعرفه أفضل من صديقته."
      }
    },
    {
      "german": "Wir haben einmal eine gemeinsame Radtour geplant.",
      "translations": {
        "english": "We once planned a joint bike tour.",
        "ukrainian": "Ми одного разу планували спільну велосипедну подорож.",
        "polish": "Raz zaplanowaliśmy wspólną wycieczkę rowerową.",
        "albanian": "Një herë planifikuam një turne biçiklete së bashku.",
        "arabic": "خططنا ذات مرة لجولة مشتركة بالدراجة."
      }
    },
    {
      "german": "Ich freue mich schon auf dich!",
      "translations": {
        "english": "I'm already looking forward to seeing you!",
        "ukrainian": "Я вже чекаю на тебе з нетерпінням!",
        "polish": "Już się na ciebie cieszę!",
        "albanian": "Tashmë po pres me padurim të të shoh!",
        "arabic": "أتطلع بالفعل إلى رؤيتك!"
      }
    },
    {
      "german": "Darauf freue ich mich auch.",
      "translations": {
        "english": "I'm looking forward to that too.",
        "ukrainian": "Я також чекаю на це з нетерпінням.",
        "polish": "Ja się na to też cieszę.",
        "albanian": "Po pres me padurim edhe unë për këtë.",
        "arabic": "أتطلع إلى ذلك أيضاً."
      }
    },
    {
      "german": "In zwei Wochen fahre ich in den Urlaub. Daran denke ich oft.",
      "translations": {
        "english": "In two weeks I'm going on vacation. I often think about that.",
        "ukrainian": "Через два тижні я їду у відпустку. Я часто про це думаю.",
        "polish": "Za dwa tygodnie jadę na wakacje. Często o tym myślę.",
        "albanian": "Në dy javë do të shkoj në pushime. Shpesh mendoj për këtë.",
        "arabic": "في غضون أسبوعين سأذهب في إجازة. أفكر في ذلك كثيراً."
      }
    },
    {
      "german": "Ich möchte sehr gut Klavier spielen können. Schon lange träume ich davon.",
      "translations": {
        "english": "I would like to be able to play the piano very well. I've been dreaming of that for a long time.",
        "ukrainian": "Я хотів би вміти дуже добре грати на піаніно. Я про це мрію вже давно.",
        "polish": "Chciałbym umieć bardzo dobrze grać na pianinie. Od dawna o tym marzę.",
        "albanian": "Do të doja të mund të luaj shumë mirë piano. Prej kohësh ëndërroj për këtë.",
        "arabic": "أود أن أكون قادراً على العزف على البيانو جيداً. أحلم بذلك منذ فترة طويلة."
      }
    },
    {
      "german": "Gute Freunde kann nichts trennen.",
      "translations": {
        "english": "Nothing can separate good friends.",
        "ukrainian": "Нічого не може розділити хороших друзів.",
        "polish": "Nic nie może rozdzielić dobrych przyjaciół.",
        "albanian": "Asgjë nuk mund t'i ndajë miqtë e mirë.",
        "arabic": "لا شيء يمكن أن يفرق الأصدقاء الجيدين."
      }
    },
    {
      "german": "Freundschaft ist wie eine Tür, die zwischen Menschen steht.",
      "translations": {
        "english": "Friendship is like a door that stands between people.",
        "ukrainian": "Дружба - як двері, які стоять між людьми.",
        "polish": "Przyjaźń jest jak drzwi, które stoją między ludźmi.",
        "albanian": "Miqësia është si një derë që qëndron midis njerëzve.",
        "arabic": "الصداقة مثل باب يقف بين الناس."
      }
    }
  ]
});
