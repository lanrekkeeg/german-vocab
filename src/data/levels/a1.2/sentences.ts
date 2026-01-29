// src/data/levels/a1.2/sentences.ts
import { Card, Translations } from '../../../types';

// We can reuse the same helper functions from vocabulary.ts
const sanitizeFilename = (text: string): string => {
    let sanitized = text.replace(/\s+/g, '_');
    sanitized = sanitized.replace(/[^a-zA-Z0-9_äöüÄÖÜß]/g, '');
    return sanitized;
};

const addAudioPaths = (sentencesBySection: Record<number, Omit<Card, 'audioSrc'>[]>) => {
  const result: Record<number, Card[]> = {};
  for (const section in sentencesBySection) {
    result[section] = sentencesBySection[section].map(card => ({
        ...card,
        audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/a1.2/sentences/section${section}/section${section}_${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};


// Here you define your sentences for the A1.2 level.
// Notice we are using the 'Card' type, which fits perfectly.
export const a1_2_Sentences: Record<number, Card[]> = addAudioPaths({
  "8": [
    {
      "german": "einen Termin machen",
      "translations": {
        "english": "to make an appointment",
        "ukrainian": "записатися на прийом",
        "polish": "umówić się na wizytę",
        "albanian": "të marr një takim",
        "arabic": "حجز موعد",
        "serbian": "заказати термин"
      }
    },
    {
      "german": "einen Termin beim Arzt",
      "translations": {
        "english": "an appointment with the doctor",
        "ukrainian": "прийом у лікаря",
        "polish": "wizyta u lekarza",
        "albanian": "një takim te mjeku",
        "arabic": "موعد مع الطبيب",
        "serbian": "термин код лекара"
      }
    },
    {
      "german": "zum Arzt gehen",
      "translations": {
        "english": "to go to the doctor",
        "ukrainian": "йти до лікаря",
        "polish": "iść do lekarza",
        "albanian": "të shkosh tek mjeku",
        "arabic": "الذهاب إلى الطبيب",
        "serbian": "ићи код лекара"
      }
    },
    {
      "german": "beim Arzt",
      "translations": {
        "english": "at the doctor's",
        "ukrainian": "у лікаря",
        "polish": "u lekarza",
        "albanian": "tek mjeku",
        "arabic": "عند الطبيب",
        "serbian": "код лекара"
      }
    },
    {
      "german": "was fehlt Ihnen denn?",
      "translations": {
        "english": "what's wrong with you?",
        "ukrainian": "що з вами не так?",
        "polish": "co Panu/Pani dolega?",
        "albanian": "çfarë keni?",
        "arabic": "ما الذي يؤلمك؟",
        "serbian": "шта вам је?"
      }
    },
    {
      "german": "mir geht es nicht gut",
      "translations": {
        "english": "I don't feel well",
        "ukrainian": "мені погано",
        "polish": "nie czuję się dobrze",
        "albanian": "nuk ndjehem mirë",
        "arabic": "لا أشعر بالراحة",
        "serbian": "не осећам се добро"
      }
    },
    {
      "german": "ich habe Fieber",
      "translations": {
        "english": "I have fever",
        "ukrainian": "у мене температура",
        "polish": "mam gorączkę",
        "albanian": "kam ethe",
        "arabic": "عندي حمى",
        "serbian": "имам температуру"
      }
    },
    {
      "german": "ich habe eine Erkältung",
      "translations": {
        "english": "I have a cold",
        "ukrainian": "у мене застуда",
        "polish": "mam przeziębienie",
        "albanian": "kam ftohje",
        "arabic": "عندي نزلة برد",
        "serbian": "Прехлађен/а сам"
      }
    },
    {
      "german": "mein Rücken tut weh",
      "translations": {
        "english": "my back hurts",
        "ukrainian": "у мене болить спина",
        "polish": "boli mnie plecy",
        "albanian": "më dhemb shpina",
        "arabic": "ظهري يؤلمني",
        "serbian": "my back hurts"
      }
    },
    {
      "german": "ich habe Kopfschmerzen",
      "translations": {
        "english": "I have a headache",
        "ukrainian": "у мене болить голова",
        "polish": "boli mnie głowa",
        "albanian": "më dhemb koka",
        "arabic": "عندي صداع",
        "serbian": "имам главобољу"
      }
    },
    {
      "german": "ich habe Zahnschmerzen",
      "translations": {
        "english": "I have toothache",
        "ukrainian": "у мене болять зуби",
        "polish": "bolą mnie zęby",
        "albanian": "më dhembin dhëmbët",
        "arabic": "عندي ألم في الأسنان",
        "serbian": "I have toothache"
      }
    },
    {
      "german": "ich habe Halsschmerzen",
      "translations": {
        "english": "I have a sore throat",
        "ukrainian": "у мене болить горло",
        "polish": "boli mnie gardło",
        "albanian": "më dhemb fyti",
        "arabic": "عندي التهاب في الحلق",
        "serbian": "I have a sore throat"
      }
    },
    {
      "german": "ich habe Bauchschmerzen",
      "translations": {
        "english": "I have stomachache",
        "ukrainian": "у мене болить живіт",
        "polish": "boli mnie brzuch",
        "albanian": "më dhemb barku",
        "arabic": "عندي ألم في المعدة",
        "serbian": "I have stomachache"
      }
    },
    {
      "german": "machen Sie bitte den Mund auf",
      "translations": {
        "english": "please open your mouth",
        "ukrainian": "будь ласка, відкрийте рот",
        "polish": "proszę otworzyć usta",
        "albanian": "ju lutem hapni gojën",
        "arabic": "من فضلك افتح فمك",
        "serbian": "please open your mouth"
      }
    },
    {
      "german": "kommen Sie bitte noch einmal zur Kontrolle",
      "translations": {
        "english": "please come again for a check-up",
        "ukrainian": "будь ласка, прийдіть ще раз на контроль",
        "polish": "proszę przyjść jeszcze raz na kontrolę",
        "albanian": "ju lutem ejani përsëri për kontroll",
        "arabic": "من فضلك تعال مرة أخرى للفحص",
        "serbian": "please come again for a check-up"
      }
    },
    {
      "german": "Sie müssen noch einmal zur Kontrolle kommen",
      "translations": {
        "english": "you must come again for a check-up",
        "ukrainian": "ви повинні прийти ще раз на контроль",
        "polish": "musi Pan/Pani przyjść jeszcze raz na kontrolę",
        "albanian": "ju duhet të vini përsëri për kontroll",
        "arabic": "يجب أن تأتي مرة أخرى للفحص",
        "serbian": "you must come again for a check-up"
      }
    },
    {
      "german": "mein Kind ist krank",
      "translations": {
        "english": "my child is sick",
        "ukrainian": "моя дитина хвора",
        "polish": "moje dziecko jest chore",
        "albanian": "fëmija im është i sëmurë",
        "arabic": "طفلي مريض",
        "serbian": "my child is sick"
      }
    },
    {
      "german": "sie hat Kopfschmerzen",
      "translations": {
        "english": "she has a headache",
        "ukrainian": "у неї болить голова",
        "polish": "ona ma ból głowy",
        "albanian": "ajo ka dhimbje koke",
        "arabic": "عندها صداع",
        "serbian": "she has a headache"
      }
    },
    {
      "german": "der Hals tut weh",
      "translations": {
        "english": "the throat hurts",
        "ukrainian": "болить горло",
        "polish": "boli gardło",
        "albanian": "dhemb fyti",
        "arabic": "الحلق يؤلم",
        "serbian": "the throat hurts"
      }
    },
    {
      "german": "der Bauch tut weh",
      "translations": {
        "english": "the stomach hurts",
        "ukrainian": "болить живіт",
        "polish": "boli brzuch",
        "albanian": "dhemb barku",
        "arabic": "المعدة تؤلم",
        "serbian": "the stomach hurts"
      }
    },
    {
      "german": "sie geht nicht zur Schule",
      "translations": {
        "english": "she doesn't go to school",
        "ukrainian": "вона не йде до школи",
        "polish": "ona nie idzie do szkoły",
        "albanian": "ajo nuk shkon në shkollë",
        "arabic": "هي لا تذهب إلى المدرسة",
        "serbian": "she doesn't go to school"
      }
    },
    {
      "german": "sie geht später zur Schule",
      "translations": {
        "english": "she goes to school later",
        "ukrainian": "вона йде до школи пізніше",
        "polish": "ona idzie do szkoły później",
        "albanian": "ajo shkon në shkollë më vonë",
        "arabic": "هي تذهب إلى المدرسة لاحقاً",
        "serbian": "she goes to school later"
      }
    },
    {
      "german": "eine Entschuldigung für die Schule",
      "translations": {
        "english": "an excuse note for school",
        "ukrainian": "виправдувальна записка для школи",
        "polish": "usprawiedliwienie dla szkoły",
        "albanian": "një justifikim për shkollën",
        "arabic": "مذكرة اعتذار للمدرسة",
        "serbian": "an excuse note for school"
      }
    },
    {
      "german": "kann heute leider nicht zum Unterricht kommen",
      "translations": {
        "english": "unfortunately cannot come to class today",
        "ukrainian": "на жаль, не може прийти на урок сьогодні",
        "polish": "niestety nie może dzisiaj przyjść na lekcje",
        "albanian": "fatkeqësisht nuk mund të vijë në mësim sot",
        "arabic": "للأسف لا يمكن الحضور للدرس اليوم",
        "serbian": "unfortunately cannot come to class today"
      }
    },
    {
      "german": "mit freundlichen Grüßen",
      "translations": {
        "english": "with kind regards",
        "ukrainian": "з найкращими побажаннями",
        "polish": "z poważaniem",
        "albanian": "me respekt",
        "arabic": "مع أطيب التحيات",
        "serbian": "with kind regards"
      }
    },
    {
      "german": "sehr geehrter Herr",
      "translations": {
        "english": "dear sir",
        "ukrainian": "шановний пане",
        "polish": "szanowny panie",
        "albanian": "i nderuar zotëri",
        "arabic": "سيدي المحترم",
        "serbian": "dear sir"
      }
    },
    {
      "german": "bitte entschuldigen Sie das Fehlen von",
      "translations": {
        "english": "please excuse the absence of",
        "ukrainian": "будь ласка, виправдайте відсутність",
        "polish": "proszę usprawiedliwić nieobecność",
        "albanian": "ju lutem justifikoni mungesën e",
        "arabic": "من فضلك اعذر غياب",
        "serbian": "please excuse the absence of"
      }
    },
    {
      "german": "in die Apotheke gehen",
      "translations": {
        "english": "to go to the pharmacy",
        "ukrainian": "йти в аптеку",
        "polish": "iść do apteki",
        "albanian": "të shkosh në farmaci",
        "arabic": "الذهاب إلى الصيدلية",
        "serbian": "ићи у апотеку"
      }
    },
    {
      "german": "mit dem Rezept",
      "translations": {
        "english": "with the prescription",
        "ukrainian": "з рецептом",
        "polish": "z receptą",
        "albanian": "me recetën",
        "arabic": "مع الوصفة الطبية",
        "serbian": "with the prescription"
      }
    },
    {
      "german": "für die Medikamente",
      "translations": {
        "english": "for the medications",
        "ukrainian": "за ліки",
        "polish": "za lekarstwa",
        "albanian": "për ilaçet",
        "arabic": "للأدوية",
        "serbian": "for the medications"
      }
    },
    {
      "german": "die Gesundheitskarte brauchen",
      "translations": {
        "english": "to need the health insurance card",
        "ukrainian": "потребувати медичну картку",
        "polish": "potrzebować karty ubezpieczenia",
        "albanian": "të duash kartën e sigurimeve shëndetësore",
        "arabic": "أحتاج بطاقة التأمين الصحي",
        "serbian": "to need the health insurance card"
      }
    },
    {
      "german": "für den Besuch beim Arzt",
      "translations": {
        "english": "for the visit to the doctor",
        "ukrainian": "для візиту до лікаря",
        "polish": "na wizytę u lekarza",
        "albanian": "për vizitën tek mjeku",
        "arabic": "لزيارة الطبيب",
        "serbian": "for the visit to the doctor"
      }
    },
    {
      "german": "von der Krankenkasse bekommen",
      "translations": {
        "english": "to get from the health insurance",
        "ukrainian": "отримати від страхової компанії",
        "polish": "otrzymać od kasy chorych",
        "albanian": "të marrësh nga sigurimi shëndetësor",
        "arabic": "الحصول على من التأمين الصحي",
        "serbian": "to get from the health insurance"
      }
    },
    {
      "german": "eine Krankschreibung",
      "translations": {
        "english": "a sick note",
        "ukrainian": "лікарняний",
        "polish": "zwolnienie lekarskie",
        "albanian": "një dëshmi mjekësore",
        "arabic": "إجازة مرضية",
        "serbian": "a sick note"
      }
    },
    {
      "german": "das Original schicken",
      "translations": {
        "english": "to send the original",
        "ukrainian": "відправити оригінал",
        "polish": "wysłać oryginał",
        "albanian": "të dërgosh origjinalin",
        "arabic": "إرسال الأصل",
        "serbian": "to send the original"
      }
    },
    {
      "german": "an ihre Krankenkasse",
      "translations": {
        "english": "to their health insurance",
        "ukrainian": "до їхньої страхової компанії",
        "polish": "do swojej kasy chorych",
        "albanian": "në sigurimet e tyre shëndetësore",
        "arabic": "إلى شركة التأمين الصحي",
        "serbian": "to their health insurance"
      }
    },
    {
      "german": "die Kopie ist für ihren Arbeitgeber",
      "translations": {
        "english": "the copy is for their employer",
        "ukrainian": "копія для їхнього роботодавця",
        "polish": "kopia jest dla ich pracodawcy",
        "albanian": "kopja është për punëdhënësin e tyre",
        "arabic": "النسخة لصاحب العمل",
        "serbian": "the copy is for their employer"
      }
    },
    {
      "german": "einen Hausarzt suchen",
      "translations": {
        "english": "to look for a family doctor",
        "ukrainian": "шукати сімейного лікаря",
        "polish": "szukać lekarza rodzinnego",
        "albanian": "të kërkosh një mjek familjeje",
        "arabic": "البحث عن طبيب عائلة",
        "serbian": "to look for a family doctor"
      }
    },
    {
      "german": "einen Zahnarzt suchen",
      "translations": {
        "english": "to look for a dentist",
        "ukrainian": "шукати стоматолога",
        "polish": "szukać dentysty",
        "albanian": "të kërkosh një dentist",
        "arabic": "البحث عن طبيب أسنان",
        "serbian": "to look for a dentist"
      }
    },
    {
      "german": "im Telefonbuch",
      "translations": {
        "english": "in the phone book",
        "ukrainian": "в телефонній книзі",
        "polish": "w książce telefonicznej",
        "albanian": "në librin e telefonit",
        "arabic": "في دليل الهاتف",
        "serbian": "in the phone book"
      }
    },
    {
      "german": "im Internet",
      "translations": {
        "english": "on the internet",
        "ukrainian": "в інтернеті",
        "polish": "w internecie",
        "albanian": "në internet",
        "arabic": "على الإنترنت",
        "serbian": "on the internet"
      }
    },
    {
      "german": "in Ihrer Nähe",
      "translations": {
        "english": "near you",
        "ukrainian": "поблизу вас",
        "polish": "w pobliżu",
        "albanian": "afër jush",
        "arabic": "بالقرب منك",
        "serbian": "near you"
      }
    },
    {
      "german": "was soll ich machen?",
      "translations": {
        "english": "what should I do?",
        "ukrainian": "що мені робити?",
        "polish": "co powinienem robić?",
        "albanian": "çfarë duhet të bëj?",
        "arabic": "ماذا يجب أن أفعل؟",
        "serbian": "what should I do?"
      }
    },
    {
      "german": "nimm doch Tabletten",
      "translations": {
        "english": "take some tablets",
        "ukrainian": "візьми таблетки",
        "polish": "weź tabletki",
        "albanian": "merr tableta",
        "arabic": "خذ بعض الأقراص",
        "serbian": "take some tablets"
      }
    },
    {
      "german": "du sollst Tabletten nehmen",
      "translations": {
        "english": "you should take tablets",
        "ukrainian": "ти повинен прийняти таблетки",
        "polish": "powinieneś wziąć tabletki",
        "albanian": "ti duhet të marrësh tableta",
        "arabic": "يجب أن تأخذ أقراص",
        "serbian": "you should take tablets"
      }
    },
    {
      "german": "die Ärztin sagt, ich soll",
      "translations": {
        "english": "the doctor says I should",
        "ukrainian": "лікар каже, що я повинен",
        "polish": "lekarka mówi, że powinienem",
        "albanian": "mjekja thotë se duhet",
        "arabic": "الطبيبة تقول يجب أن",
        "serbian": "the doctor says I should"
      }
    },
    {
      "german": "viel Tee trinken",
      "translations": {
        "english": "drink a lot of tea",
        "ukrainian": "пити багато чаю",
        "polish": "pić dużo herbaty",
        "albanian": "të pish shumë çaj",
        "arabic": "شرب الكثير من الشاي",
        "serbian": "drink a lot of tea"
      }
    },
    {
      "german": "Gymnastik machen",
      "translations": {
        "english": "to do gymnastics",
        "ukrainian": "робити гімнастику",
        "polish": "ćwiczyć gimnastykę",
        "albanian": "të bësh gjimnastikë",
        "arabic": "ممارسة الجمباز",
        "serbian": "вежбати гимнастику"
      }
    },
    {
      "german": "nicht schwer tragen",
      "translations": {
        "english": "not carry heavy things",
        "ukrainian": "не носити важкого",
        "polish": "nie nosić ciężkich rzeczy",
        "albanian": "të mos mbash gjëra të rënda",
        "arabic": "عدم حمل أشياء ثقيلة",
        "serbian": "не носити тешке ствари"
      }
    },
    {
      "german": "schwimmen gehen",
      "translations": {
        "english": "to go swimming",
        "ukrainian": "йти плавати",
        "polish": "iść pływać",
        "albanian": "të shkosh të notosh",
        "arabic": "الذهاب للسباحة",
        "serbian": "ићи на пливање"
      }
    },
    {
      "german": "im Bett bleiben",
      "translations": {
        "english": "to stay in bed",
        "ukrainian": "залишатися в ліжку",
        "polish": "zostać w łóżku",
        "albanian": "të rrish në shtrat",
        "arabic": "البقاء في السرير",
        "serbian": "остати у кревету"
      }
    },
    {
      "german": "ins Krankenhaus müssen",
      "translations": {
        "english": "to have to go to the hospital",
        "ukrainian": "мусити йти в лікарню",
        "polish": "musieć iść do szpitala",
        "albanian": "të duhet të shkosh në spital",
        "arabic": "يجب الذهاب إلى المستشفى",
        "serbian": "морати ићи у болницу"
      }
    },
    {
      "german": "sofort operieren",
      "translations": {
        "english": "to operate immediately",
        "ukrainian": "негайно оперувати",
        "polish": "natychmiast operować",
        "albanian": "të operoj menjëherë",
        "arabic": "إجراء عملية فوراً",
        "serbian": "одмах оперисати"
      }
    },
    {
      "german": "es geht schon besser",
      "translations": {
        "english": "it's already getting better",
        "ukrainian": "вже краще",
        "polish": "już lepiej",
        "albanian": "tashmë më mirë",
        "arabic": "الحالة تتحسن",
        "serbian": "већ је боље"
      }
    },
    {
      "german": "nach Hause gehen",
      "translations": {
        "english": "to go home",
        "ukrainian": "йти додому",
        "polish": "iść do domu",
        "albanian": "të shkosh në shtëpi",
        "arabic": "الذهاب إلى المنزل",
        "serbian": "ићи кући"
      }
    },
    {
      "german": "wann soll ich Sie abholen?",
      "translations": {
        "english": "when should I pick you up?",
        "ukrainian": "коли мені вас забрати?",
        "polish": "kiedy mam Cię odebrać?",
        "albanian": "kur duhet t'ju marr?",
        "arabic": "متى يجب أن آتي لاصطحابك؟",
        "serbian": "када да дођем по вас?"
      }
    },
    {
      "german": "am besten um elf Uhr",
      "translations": {
        "english": "best at eleven o'clock",
        "ukrainian": "найкраще об одинадцятій",
        "polish": "najlepiej o jedenastej",
        "albanian": "më mirë në orën njëmbëdhjetë",
        "arabic": "الأفضل في الساعة الحادية عشرة",
        "serbian": "најбоље у једанаест сати"
      }
    },
    {
      "german": "brauchst du dein Tablet?",
      "translations": {
        "english": "do you need your tablet?",
        "ukrainian": "чи потребуєш ти свій планшет?",
        "polish": "czy potrzebujesz swojego tabletu?",
        "albanian": "a të duhet tableti yt?",
        "arabic": "هل تحتاج جهازك اللوحي؟",
        "serbian": "да ли ти треба таблет?"
      }
    },
    {
      "german": "nein, ich brauche es nicht",
      "translations": {
        "english": "no, I don't need it",
        "ukrainian": "ні, мені це не потрібно",
        "polish": "nie, nie potrzebuję tego",
        "albanian": "jo, nuk më duhet",
        "arabic": "لا، لست بحاجة إليه",
        "serbian": "не, не треба ми"
      }
    },
    {
      "german": "soll ich mitbringen?",
      "translations": {
        "english": "should I bring along?",
        "ukrainian": "чи повинен я принести з собою?",
        "polish": "czy powinienem przynieść ze sobą?",
        "albanian": "a duhet të sjell?",
        "arabic": "هل يجب أن أحضر معي؟",
        "serbian": "да ли да понесем?"
      }
    },
    {
      "german": "ja, bitte bring ihn mit",
      "translations": {
        "english": "yes, please bring it",
        "ukrainian": "так, будь ласка, принеси його",
        "polish": "tak, proszę go przynieś",
        "albanian": "po, të lutem sille",
        "arabic": "نعم، من فضلك أحضره",
        "serbian": "да, молим те понеси"
      }
    },
    {
      "german": "einen Notruf machen",
      "translations": {
        "english": "to make an emergency call",
        "ukrainian": "зробити виклик швидкої",
        "polish": "wykonać wezwanie pomocy",
        "albanian": "të bësh një thirrje urgjence",
        "arabic": "إجراء مكالمة طوارئ",
        "serbian": "позвати хитну помоћ"
      }
    },
    {
      "german": "es gibt hier einen Unfall",
      "translations": {
        "english": "there is an accident here",
        "ukrainian": "тут сталася аварія",
        "polish": "jest tu wypadek",
        "albanian": "ka një aksident këtu",
        "arabic": "هناك حادث هنا",
        "serbian": "овде се догодила несрећа"
      }
    },
    {
      "german": "wo sind Sie?",
      "translations": {
        "english": "where are you?",
        "ukrainian": "де ви?",
        "polish": "gdzie jesteś?",
        "albanian": "ku jeni?",
        "arabic": "أين أنت؟",
        "serbian": "где сте?"
      }
    },
    {
      "german": "ich bin in der Bahnhofstraße",
      "translations": {
        "english": "I am on Bahnhof Street",
        "ukrainian": "я на вулиці Банхофштрасе",
        "polish": "jestem na ulicy Dworcowej",
        "albanian": "unë jam në rrugën e stacionit",
        "arabic": "أنا في شارع المحطة",
        "serbian": "ја сам у улици Банхоф"
      }
    },
    {
      "german": "wie viele Personen sind verletzt?",
      "translations": {
        "english": "how many people are injured?",
        "ukrainian": "скільки людей поранено?",
        "polish": "ile osób jest rannych?",
        "albanian": "sa persona janë të lënduar?",
        "arabic": "كم شخص مصاب؟",
        "serbian": "колико људи је повређено?"
      }
    },
    {
      "german": "ich glaube zwei Personen",
      "translations": {
        "english": "I think two people",
        "ukrainian": "я думаю, дві людини",
        "polish": "myślę, że dwie osoby",
        "albanian": "mendoj dy persona",
        "arabic": "أعتقد شخصين",
        "serbian": "мислим два човека"
      }
    },
    {
      "german": "ein Mann und ein Kind",
      "translations": {
        "english": "a man and a child",
        "ukrainian": "чоловік і дитина",
        "polish": "mężczyzna i dziecko",
        "albanian": "një burrë dhe një fëmijë",
        "arabic": "رجل وطفل",
        "serbian": "мушкарац и дете"
      }
    },
    {
      "german": "bitte kommen Sie schnell",
      "translations": {
        "english": "please come quickly",
        "ukrainian": "будь ласка, приїжджайте швидко",
        "polish": "proszę przyjechać szybko",
        "albanian": "ju lutem ejani shpejt",
        "arabic": "من فضلك تعال بسرعة",
        "serbian": "молим вас дођите брзо"
      }
    },
    {
      "german": "es ist dringend",
      "translations": {
        "english": "it's urgent",
        "ukrainian": "це терміново",
        "polish": "to pilne",
        "albanian": "është urgjente",
        "arabic": "إنه عاجل",
        "serbian": "хитно је"
      }
    },
    {
      "german": "ich schicke einen Notarzt",
      "translations": {
        "english": "I'm sending an emergency doctor",
        "ukrainian": "я відправляю лікаря швидкої",
        "polish": "wysyłam lekarza pogotowia",
        "albanian": "po dërgoj një mjek urgjence",
        "arabic": "أرسل طبيب طوارئ",
        "serbian": "шаљем хитну помоћ"
      }
    },
    {
      "german": "er kommt in wenigen Minuten",
      "translations": {
        "english": "he comes in a few minutes",
        "ukrainian": "він приїде за кілька хвилин",
        "polish": "on przyjeżdża za kilka minut",
        "albanian": "ai vjen në pak minuta",
        "arabic": "سيأتي خلال دقائق قليلة",
        "serbian": "долази за неколико минута"
      }
    },
    {
      "german": "bitte legen Sie nicht auf",
      "translations": {
        "english": "please don't hang up",
        "ukrainian": "будь ласка, не кладіть слухавку",
        "polish": "proszę nie odkładać słuchawki",
        "albanian": "ju lutem mos e mbyllni",
        "arabic": "من فضلك لا تغلق الخط",
        "serbian": "молим вас не прекидајте везу"
      }
    },
    {
      "german": "in einem Haus gibt es Feuer",
      "translations": {
        "english": "there is fire in a house",
        "ukrainian": "в будинку пожежа",
        "polish": "w domu jest pożar",
        "albanian": "ka zjarr në një shtëpi",
        "arabic": "هناك حريق في منزل",
        "serbian": "има пожар у кући"
      }
    },
    {
      "german": "keine Personen mehr im Haus",
      "translations": {
        "english": "no more people in the house",
        "ukrainian": "більше немає людей у будинку",
        "polish": "nie ma już ludzi w domu",
        "albanian": "nuk ka më persona në shtëpi",
        "arabic": "لا يوجد أشخاص في المنزل",
        "serbian": "нема више људи у кући"
      }
    },
    {
      "german": "die Hausbewohner stehen auf der Straße",
      "translations": {
        "english": "the residents stand on the street",
        "ukrainian": "мешканці будинку стоять на вулиці",
        "polish": "mieszkańcy domu stoją na ulicy",
        "albanian": "banorët e shtëpisë qëndrojnë në rrugë",
        "arabic": "سكان المنزل يقفون في الشارع",
        "serbian": "станари стоје на улици"
      }
    },
    {
      "german": "die Feuerwehr soll schnell kommen",
      "translations": {
        "english": "the fire department should come quickly",
        "ukrainian": "пожежна служба повинна швидко приїхати",
        "polish": "straż pożarna powinna szybko przyjechać",
        "albanian": "zjarrfikësit duhet të vijnë shpejt",
        "arabic": "يجب أن تأتي مطافئ الحريق بسرعة",
        "serbian": "ватрогасци треба брзо да дођу"
      }
    }
  ],

  "9": [
    {
      "german": "Ich fahre oft mit dem Fahrrad",
      "translations": {
        "english": "I often ride a bicycle",
        "ukrainian": "Я часто їжджу на велосипеді",
        "polish": "Często jeżdżę rowerem",
        "albanian": "Unë shpesh udhëtoj me biçikletë",
        "arabic": "أنا أركب الدراجة الهوائية كثيرا",
        "serbian": "често возим бицикл"
      }
    },
    {
      "german": "Ich fliege manchmal",
      "translations": {
        "english": "I sometimes fly",
        "ukrainian": "Я іноді літаю",
        "polish": "Czasami lecę",
        "albanian": "Ndonjëherë fluturoj",
        "arabic": "أنا أطير أحيانا",
        "serbian": "понекад летим"
      }
    },
    {
      "german": "Ich gehe selten zu Fuß",
      "translations": {
        "english": "I rarely walk",
        "ukrainian": "Я рідко ходжу пішки",
        "polish": "Rzadko chodzę pieszo",
        "albanian": "Rrallë ec",
        "arabic": "أنا أمشي نادرا",
        "serbian": "ретко ходам пешке"
      }
    },
    {
      "german": "Wie komme ich zum Bahnhof?",
      "translations": {
        "english": "How do I get to the train station?",
        "ukrainian": "Як мені дістатися до вокзалу?",
        "polish": "Jak dojdę na dworzec?",
        "albanian": "Si të shkoj në stacion?",
        "arabic": "كيف أصل إلى محطة القطار؟",
        "serbian": "Како да стигнем до железничке станице?"
      }
    },
    {
      "german": "Entschuldigung, ich suche den Bahnhof",
      "translations": {
        "english": "Excuse me, I'm looking for the train station",
        "ukrainian": "Вибачте, я шукаю вокзал",
        "polish": "Przepraszam, szukam dworca",
        "albanian": "Më falni, po kërkoj stacionin",
        "arabic": "عذرا، أنا أبحث عن محطة القطار",
        "serbian": "Извините, тражим железничку станицу"
      }
    },
    {
      "german": "Gehen Sie geradeaus",
      "translations": {
        "english": "Go straight ahead",
        "ukrainian": "Йдіть прямо",
        "polish": "Idź prosto",
        "albanian": "Shkoni drejt",
        "arabic": "اذهب مباشرة",
        "serbian": "Идите право"
      }
    },
    {
      "german": "Fahren Sie zuerst diese Straße geradeaus",
      "translations": {
        "english": "First drive straight down this street",
        "ukrainian": "Спочатку їдьте прямо цією вулицею",
        "polish": "Najpierw jedź prosto tą ulicą",
        "albanian": "Fillimisht udhëtoni drejt në këtë rrugë",
        "arabic": "أولا اقد مباشرة في هذا الشارع",
        "serbian": "Прво возите право овом улицом"
      }
    },
    {
      "german": "An der zweiten Kreuzung links",
      "translations": {
        "english": "At the second intersection turn left",
        "ukrainian": "На другому перехресті наліво",
        "polish": "Na drugim skrzyżowaniu w lewo",
        "albanian": "Në kryqëzimin e dytë majtas",
        "arabic": "في التقاطع الثاني إلى اليسار",
        "serbian": "На другој раскрсници скрените лево"
      }
    },
    {
      "german": "Dann kommen Sie zum Bahnhof",
      "translations": {
        "english": "Then you'll reach the train station",
        "ukrainian": "Тоді ви дійдете до вокзалу",
        "polish": "Wtedy dojdziesz na dworzec",
        "albanian": "Pastaj do të arrini në stacion",
        "arabic": "ثم ستصل إلى محطة القطار",
        "serbian": "Затим ћете стићи до железничке станице"
      }
    },
    {
      "german": "Fahren Sie gern mit dem Fahrrad?",
      "translations": {
        "english": "Do you like to ride a bicycle?",
        "ukrainian": "Вам подобається їздити на велосипеді?",
        "polish": "Lubisz jeździć rowerem?",
        "albanian": "A të pëlqen të udhëtosh me biçikletë?",
        "arabic": "هل تحب ركوب الدراجة الهوائية؟",
        "serbian": "Да ли волите да возите бицикл?"
      }
    },
    {
      "german": "Das Fahrrad ist unbequem",
      "translations": {
        "english": "The bicycle is uncomfortable",
        "ukrainian": "Велосипед незручний",
        "polish": "Rower jest niewygodny",
        "albanian": "Biçikleta është e pakëndshme",
        "arabic": "الدراجة الهوائية غير مريحة",
        "serbian": "Бицикл је незгодан"
      }
    },
    {
      "german": "Fahrradfahren ist gesund",
      "translations": {
        "english": "Cycling is healthy",
        "ukrainian": "Їзда на велосипеді корисна для здоров'я",
        "polish": "Jazda na rowerze jest zdrowa",
        "albanian": "Të ecësh me biçikletë është i shëndetshëm",
        "arabic": "ركوب الدراجة الهوائية صحي",
        "serbian": "Вожња бицикла је здрава"
      }
    },
    {
      "german": "Wer darf zuerst fahren?",
      "translations": {
        "english": "Who may go first?",
        "ukrainian": "Хто має право проїхати першим?",
        "polish": "Kto może jechać pierwszy?",
        "albanian": "Kush mund të shkojë i pari?",
        "arabic": "من يحق له أن يذهب أولا؟",
        "serbian": "Ко може први?"
      }
    },
    {
      "german": "Was darf man hier (nicht)?",
      "translations": {
        "english": "What is (not) allowed here?",
        "ukrainian": "Що тут (не) дозволено?",
        "polish": "Co (nie) wolno tutaj?",
        "albanian": "Çfarë (nuk) lejohet këtu?",
        "arabic": "ما الذي (لا) يُسمح به هنا؟",
        "serbian": "Шта (није) дозвољено овде?"
      }
    },
    {
      "german": "Was muss man tun?",
      "translations": {
        "english": "What must one do?",
        "ukrainian": "Що треба робити?",
        "polish": "Co trzeba robić?",
        "albanian": "Çfarë duhet të bëjë?",
        "arabic": "ما الذي يجب فعله؟",
        "serbian": "Шта човек мора да уради?"
      }
    },
    {
      "german": "Wie lange brauchen Sie zur Arbeit?",
      "translations": {
        "english": "How long does it take you to get to work?",
        "ukrainian": "Скільки часу вам треба на дорогу до роботи?",
        "polish": "Ile czasu potrzebujesz do pracy?",
        "albanian": "Sa kohë të duhet për në punë?",
        "arabic": "كم من الوقت تحتاج للوصول إلى العمل؟",
        "serbian": "Колико вам треба до посла?"
      }
    },
    {
      "german": "Ich brauche eine halbe Stunde",
      "translations": {
        "english": "I need half an hour",
        "ukrainian": "Мені треба півгодини",
        "polish": "Potrzebuję pół godziny",
        "albanian": "Më duhet gjysmë ore",
        "arabic": "أحتاج نصف ساعة",
        "serbian": "Треба ми пола сата"
      }
    },
    {
      "german": "Wo arbeiten Sie?",
      "translations": {
        "english": "Where do you work?",
        "ukrainian": "Де ви працюєте?",
        "polish": "Gdzie pracujesz?",
        "albanian": "Ku punoni?",
        "arabic": "أين تعمل؟",
        "serbian": "Где радите?"
      }
    },
    {
      "german": "Wie kommen Sie zur Arbeit?",
      "translations": {
        "english": "How do you get to work?",
        "ukrainian": "Як ви дістаєтеся на роботу?",
        "polish": "Jak dojeżdżasz do pracy?",
        "albanian": "Si shkoni në punë?",
        "arabic": "كيف تذهب إلى العمل؟",
        "serbian": "Како идете на посао?"
      }
    },
    {
      "german": "Entschuldigung, wie komme ich zum Theaterplatz?",
      "translations": {
        "english": "Excuse me, how do I get to Theater Square?",
        "ukrainian": "Вибачте, як мені дістатися до Театральної площі?",
        "polish": "Przepraszam, jak dojdę do Placu Teatralnego?",
        "albanian": "Më falni, si të shkoj në Sheshin e Teatrit?",
        "arabic": "عذرا، كيف أصل إلى ساحة المسرح؟",
        "serbian": "Извините, како да стигнем до Позоришног трга?"
      }
    },
    {
      "german": "Das ist weit",
      "translations": {
        "english": "That's far",
        "ukrainian": "Це далеко",
        "polish": "To jest daleko",
        "albanian": "Është larg",
        "arabic": "هذا بعيد",
        "serbian": "То је далеко"
      }
    },
    {
      "german": "Sie müssen die U-Bahn nehmen",
      "translations": {
        "english": "You have to take the subway",
        "ukrainian": "Вам треба їхати метро",
        "polish": "Musisz jechać metrem",
        "albanian": "Duhet të merrni metron",
        "arabic": "يجب أن تأخذ المترو",
        "serbian": "Морате узети метро"
      }
    },
    {
      "german": "Nehmen Sie die Linie 2 Richtung Zoo",
      "translations": {
        "english": "Take line 2 towards the zoo",
        "ukrainian": "Їдьте лінією 2 у напрямку зоопарку",
        "polish": "Weź linię 2 w kierunku zoo",
        "albanian": "Merrni linjën 2 drejt kopshtit zoologjik",
        "arabic": "خذ الخط 2 باتجاه حديقة الحيوانات",
        "serbian": "Узмите линију 2 према зоолошком врту"
      }
    },
    {
      "german": "Fahren Sie fünf Stationen",
      "translations": {
        "english": "Go five stations",
        "ukrainian": "Їдьте п'ять станцій",
        "polish": "Jedź pięć stacji",
        "albanian": "Shkoni pesë stacione",
        "arabic": "اذهب خمس محطات",
        "serbian": "Возите се пет станица"
      }
    },
    {
      "german": "Dann kommen Sie zum Südbahnhof",
      "translations": {
        "english": "Then you'll reach the South Station",
        "ukrainian": "Тоді ви дійдете до Południowego вокзалу",
        "polish": "Wtedy dojdziesz na Dworzec Południowy",
        "albanian": "Pastaj do të arrini në Stacionin Jugor",
        "arabic": "ثم ستصل إلى المحطة الجنوبية",
        "serbian": "Затим ћете стићи до Јужне станице"
      }
    },
    {
      "german": "Bei Schild vier darf man nicht geradeaus fahren",
      "translations": {
        "english": "At sign four, one is not allowed to go straight",
        "ukrainian": "При знаку номер чотири не можна їхати прямо",
        "polish": "Przy znaku cztery nie wolno jechać prosto",
        "albanian": "Te shenja katër nuk lejohet të shkosh drejt",
        "arabic": "عند الإشارة الرابعة لا يُسمح بالذهاب مباشرة",
        "serbian": "Код знака четири није дозвољено ићи право"
      }
    },
    {
      "german": "Man muss rechts abbiegen",
      "translations": {
        "english": "One must turn right",
        "ukrainian": "Треба повернути направо",
        "polish": "Trzeba skręcić w prawo",
        "albanian": "Duhet të kthehesh djathtas",
        "arabic": "يجب الانعطاف يمينا",
        "serbian": "Мора се скренути десно"
      }
    },
    {
      "german": "Das Auto muss an der Ampel warten",
      "translations": {
        "english": "The car must wait at the traffic light",
        "ukrainian": "Автомобіль має чекати на світлофорі",
        "polish": "Samochód musi czekać na światłach",
        "albanian": "Makina duhet të presë te semafor",
        "arabic": "السيارة يجب أن تنتظر عند إشارة المرور",
        "serbian": "Ауто мора да чека на семафору"
      }
    },
    {
      "german": "Wo wohnen Sie?",
      "translations": {
        "english": "Where do you live?",
        "ukrainian": "Де ви живете?",
        "polish": "Gdzie mieszkasz?",
        "albanian": "Ku jetoni?",
        "arabic": "أين تسكن؟",
        "serbian": "Где живите?"
      }
    },
    {
      "german": "Gleich hier in der Nähe",
      "translations": {
        "english": "Right here nearby",
        "ukrainian": "Тут поруч",
        "polish": "Tutaj w pobliżu",
        "albanian": "Këtu pranë",
        "arabic": "هنا بالقرب",
        "serbian": "Овде у близини"
      }
    },
    {
      "german": "Vielen Dank",
      "translations": {
        "english": "Thank you very much",
        "ukrainian": "Дуже дякую",
        "polish": "Dziękuję bardzo",
        "albanian": "Faleminderit shumë",
        "arabic": "شكرا جزيلا",
        "serbian": "Хвала вам пуно"
      }
    },
    {
      "german": "Ja, genau",
      "translations": {
        "english": "Yes, exactly",
        "ukrainian": "Так, точно",
        "polish": "Tak, dokładnie",
        "albanian": "Po, saktësisht",
        "arabic": "نعم، بالضبط",
        "serbian": "Да, тачно"
      }
    },
    {
      "german": "Wie oft benutzen Sie die Verkehrsmittel?",
      "translations": {
        "english": "How often do you use public transportation?",
        "ukrainian": "Як часто ви користуєтеся громадським транспортом?",
        "polish": "Jak często korzystasz z transportu publicznego?",
        "albanian": "Sa shpesh përdorni transportin publik?",
        "arabic": "كم مرة تستخدم وسائل النقل العامة؟",
        "serbian": "Колико често користите јавни превоз?"
      }
    },
    {
      "german": "Ich fahre manchmal mit dem Fahrrad, manchmal mit dem Auto",
      "translations": {
        "english": "Sometimes I ride a bike, sometimes I drive a car",
        "ukrainian": "Іноді я їжджу на велосипеді, іноді на машині",
        "polish": "Czasami jeżdżę rowerem, czasami samochodem",
        "albanian": "Ndonjëherë udhëtoj me biçikletë, ndonjëherë me makinë",
        "arabic": "أحيانا أركب الدراجة، أحيانا أقود السيارة",
        "serbian": "Понекад возим бицикл, понекад возим аутомобил"
      }
    },
    {
      "german": "Darf ich hier parken?",
      "translations": {
        "english": "May I park here?",
        "ukrainian": "Чи можна тут паркуватися?",
        "polish": "Czy mogę tutaj zaparkować?",
        "albanian": "A mund të parkoj këtu?",
        "arabic": "هل يمكنني أن أركن هنا؟",
        "serbian": "Да ли могу да паркирам овде?"
      }
    },
    {
      "german": "Ja, Sie dürfen hier parken",
      "translations": {
        "english": "Yes, you may park here",
        "ukrainian": "Так, ви можете тут паркуватися",
        "polish": "Tak, możesz tutaj zaparkować",
        "albanian": "Po, mund të parkoni këtu",
        "arabic": "نعم، يمكنك أن تركن هنا",
        "serbian": "Да, можете да паркирате овде"
      }
    },
    {
      "german": "Wir müssen umsteigen",
      "translations": {
        "english": "We have to change (trains/buses)",
        "ukrainian": "Нам треба пересідати",
        "polish": "Musimy się przesiąść",
        "albanian": "Duhet të ndërrojmë",
        "arabic": "يجب أن نغير",
        "serbian": "Морамо да пресеђамо"
      }
    },
    {
      "german": "Kinder bis sechs Jahre müssen auf dem Bürgersteig fahren",
      "translations": {
        "english": "Children up to six years must ride on the sidewalk",
        "ukrainian": "Діти до шести років повинні їхати тротуаром",
        "polish": "Dzieci do sześciu lat muszą jeździć po chodniku",
        "albanian": "Fëmijët deri në gjashtë vjeç duhet të ecin në trotuar",
        "arabic": "الأطفال حتى ست سنوات يجب أن يركبوا على الرصيف",
        "serbian": "Деца до шест година морају да возе на тротоару"
      }
    },
    {
      "german": "Im Bus sind viele Fahrgäste",
      "translations": {
        "english": "There are many passengers in the bus",
        "ukrainian": "В автобусі багато пасажирів",
        "polish": "W autobusie jest wielu pasażerów",
        "albanian": "Në autobus ka shumë pasagjerë",
        "arabic": "في الحافلة ركاب كثيرون",
        "serbian": "У аутобусу има много путника"
      }
    },
    {
      "german": "Die Sprachschule ist über der Post",
      "translations": {
        "english": "The language school is above the post office",
        "ukrainian": "Мовна школа знаходиться над поштою",
        "polish": "Szkoła językowa jest nad pocztą",
        "albanian": "Shkolla e gjuhëve është mbi postë",
        "arabic": "مدرسة اللغة فوق مكتب البريد",
        "serbian": "Школа језика је изнад поште"
      }
    },
    {
      "german": "Auf dem Platz sind Bäume",
      "translations": {
        "english": "There are trees on the square",
        "ukrainian": "На площі є дерева",
        "polish": "Na placu są drzewa",
        "albanian": "Në shesh ka pemë",
        "arabic": "في الساحة أشجار",
        "serbian": "На тргу има дрвећа"
      }
    },
    {
      "german": "Im Kino kann man Filme sehen",
      "translations": {
        "english": "You can watch movies in the cinema",
        "ukrainian": "У кінотеатрі можна дивитися фільми",
        "polish": "W kinie można oglądać filmy",
        "albanian": "Në kinema mund të shikosh filma",
        "arabic": "في السينما يمكن مشاهدة الأفلام",
        "serbian": "У биоскопу можете да гледате филмове"
      }
    },
    {
      "german": "An der Haltestelle warten viele Menschen",
      "translations": {
        "english": "Many people are waiting at the bus stop",
        "ukrainian": "На зупинці чекає багато людей",
        "polish": "Na przystanku czeka wielu ludzi",
        "albanian": "Në stacion presin shumë njerëz",
        "arabic": "كثير من الناس ينتظرون في محطة الحافلات",
        "serbian": "Много људи чека на аутобуској станици"
      }
    },
    {
      "german": "Der Bus kommt nicht",
      "translations": {
        "english": "The bus is not coming",
        "ukrainian": "Автобус не йде",
        "polish": "Autobus nie przyjeżdża",
        "albanian": "Autobusi nuk po vjen",
        "arabic": "الحافلة لا تأتي",
        "serbian": "Аутобус не долази"
      }
    },
    {
      "german": "Ich gehe zu Fuß zum Bahnhof und fahre mit dem Zug nach...",
      "translations": {
        "english": "I walk to the station and take the train to...",
        "ukrainian": "Я йду пішки до вокзалу і їжджу поїздом до...",
        "polish": "Idę pieszo na dworzec i jadę pociągiem do...",
        "albanian": "Shkoj në këmbë në stacion dhe udhëtoj me tren në...",
        "arabic": "أمشي إلى المحطة وأسافر بالقطار إلى...",
        "serbian": "Идем пешке до станице и возим се возом до..."
      }
    }
  ],
  "10": [
    {
      "german": "in einem Hotel wohnen",
      "translations": {
        "english": "to stay in a hotel",
        "ukrainian": "жити в готелі",
        "polish": "mieszkać w hotelu",
        "albanian": "të qëndroj në hotel",
        "arabic": "الإقامة في فندق",
        "serbian": "одсести у хотелу"
      }
    },
    {
      "german": "in einem Restaurant essen",
      "translations": {
        "english": "to eat in a restaurant",
        "ukrainian": "їсти в ресторані",
        "polish": "jeść w restauracji",
        "albanian": "të ha në restorant",
        "arabic": "تناول الطعام في مطعم",
        "serbian": "јести у ресторану"
      }
    },
    {
      "german": "einen Kaffee trinken",
      "translations": {
        "english": "to drink a coffee",
        "ukrainian": "пити каву",
        "polish": "pić kawę",
        "albanian": "të pi një kafe",
        "arabic": "شرب القهوة",
        "serbian": "попити кафу"
      }
    },
    {
      "german": "in ein Konzert gehen",
      "translations": {
        "english": "to go to a concert",
        "ukrainian": "йти на концерт",
        "polish": "iść na koncert",
        "albanian": "të shkoj në koncert",
        "arabic": "الذهاب إلى حفلة موسيقية",
        "serbian": "ићи на концерт"
      }
    },
    {
      "german": "eine Stadtrundfahrt machen",
      "translations": {
        "english": "to take a city tour",
        "ukrainian": "здійснити екскурсію містом",
        "polish": "robić wycieczkę po mieście",
        "albanian": "të bëj një tur të qytetit",
        "arabic": "القيام بجولة في المدينة",
        "serbian": "обићи град"
      }
    },
    {
      "german": "einen Ausflug machen",
      "translations": {
        "english": "to go on a trip",
        "ukrainian": "здійснити екскурсію",
        "polish": "robić wycieczkę",
        "albanian": "të bëj një ekskursion",
        "arabic": "القيام برحلة",
        "serbian": "ићи на излет"
      }
    },
    {
      "german": "in Berlin ankommen",
      "translations": {
        "english": "to arrive in Berlin",
        "ukrainian": "прибути до Берліна",
        "polish": "przybyć do Berlina",
        "albanian": "të mbërrij në Berlin",
        "arabic": "الوصول إلى برلين",
        "serbian": "стићи у Берлин"
      }
    },
    {
      "german": "den Bus nehmen",
      "translations": {
        "english": "to take the bus",
        "ukrainian": "їхати автобусом",
        "polish": "jechać autobusem",
        "albanian": "të marr autobusin",
        "arabic": "ركوب الحافلة",
        "serbian": "узети аутобус"
      }
    },
    {
      "german": "das Auto nehmen",
      "translations": {
        "english": "to take the car",
        "ukrainian": "їхати автомобілем",
        "polish": "jechać samochodem",
        "albanian": "të marr makinën",
        "arabic": "ركوب السيارة",
        "serbian": "узети аутомобил"
      }
    },
    {
      "german": "mit dem Fahrrad fahren",
      "translations": {
        "english": "to ride a bicycle",
        "ukrainian": "їздити на велосипеді",
        "polish": "jeździć na rowerze",
        "albanian": "të ngas biçikletën",
        "arabic": "ركوب الدراجة",
        "serbian": "возити бицикл"
      }
    },
    {
      "german": "zu Fuß gehen",
      "translations": {
        "english": "to go on foot",
        "ukrainian": "йти пішки",
        "polish": "iść pieszo",
        "albanian": "të shkoj në këmbë",
        "arabic": "المشي على الأقدام",
        "serbian": "ићи пешке"
      }
    },
    {
      "german": "Karten spielen",
      "translations": {
        "english": "to play cards",
        "ukrainian": "грати в карти",
        "polish": "grać w karty",
        "albanian": "të luaj me letra",
        "arabic": "لعب الورق",
        "serbian": "играти карте"
      }
    },
    {
      "german": "Sport machen",
      "translations": {
        "english": "to do sports",
        "ukrainian": "займатися спортом",
        "polish": "uprawiać sport",
        "albanian": "të bëj sport",
        "arabic": "ممارسة الرياضة",
        "serbian": "бавити се спортом"
      }
    },
    {
      "german": "Radio hören",
      "translations": {
        "english": "to listen to the radio",
        "ukrainian": "слухати радіо",
        "polish": "słuchać radia",
        "albanian": "të dëgjoj radion",
        "arabic": "الاستماع إلى الراديو",
        "serbian": "слушати радио"
      }
    },
    {
      "german": "mit Freunden reden",
      "translations": {
        "english": "to talk with friends",
        "ukrainian": "розмовляти з друзями",
        "polish": "rozmawiać z przyjaciółmi",
        "albanian": "të flas me miqtë",
        "arabic": "التحدث مع الأصدقاء",
        "serbian": "разговарати са пријатељима"
      }
    },
    {
      "german": "auf dem Land leben",
      "translations": {
        "english": "to live in the countryside",
        "ukrainian": "жити в сільській місцевості",
        "polish": "mieszkać na wsi",
        "albanian": "të jetoj në fshat",
        "arabic": "العيش في الريف",
        "serbian": "живети на селу"
      }
    },
    {
      "german": "in der Stadt leben",
      "translations": {
        "english": "to live in the city",
        "ukrainian": "жити в місті",
        "polish": "mieszkać w mieście",
        "albanian": "të jetoj në qytet",
        "arabic": "العيش في المدينة",
        "serbian": "живети у граду"
      }
    },
    {
      "german": "am Anfang",
      "translations": {
        "english": "at the beginning",
        "ukrainian": "на початку",
        "polish": "na początku",
        "albanian": "në fillim",
        "arabic": "في البداية",
        "serbian": "на почетку"
      }
    },
    {
      "german": "Liebe Grüße",
      "translations": {
        "english": "Kind regards",
        "ukrainian": "З найкращими побажаннями",
        "polish": "Serdeczne pozdrowienia",
        "albanian": "Përshëndetje të përzemërta",
        "arabic": "تحياتي الحارة",
        "serbian": "Срдачан поздрав"
      }
    },
    {
      "german": "Viele Grüße",
      "translations": {
        "english": "Many greetings",
        "ukrainian": "Багато вітань",
        "polish": "Wiele pozdrowień",
        "albanian": "Shumë përshëndetje",
        "arabic": "تحيات كثيرة",
        "serbian": "Много поздрава"
      }
    },
    {
      "german": "einen Film sehen",
      "translations": {
        "english": "to watch a movie",
        "ukrainian": "дивитися фільм",
        "polish": "oglądać film",
        "albanian": "të shoh një film",
        "arabic": "مشاهدة فيلم",
        "serbian": "гледати филм"
      }
    },
    {
      "german": "ins Kino gehen",
      "translations": {
        "english": "to go to the cinema",
        "ukrainian": "йти в кіно",
        "polish": "iść do kina",
        "albanian": "të shkoj në kinema",
        "arabic": "الذهاب إلى السينما",
        "serbian": "ићи у биоскоп"
      }
    },
    {
      "german": "Fußball spielen",
      "translations": {
        "english": "to play football",
        "ukrainian": "грати у футбол",
        "polish": "grać w piłkę nożną",
        "albanian": "të luaj futboll",
        "arabic": "لعب كرة القدم",
        "serbian": "играти фудбал"
      }
    },
    {
      "german": "Deutsch lernen",
      "translations": {
        "english": "to learn German",
        "ukrainian": "вивчати німецьку",
        "polish": "uczyć się niemieckiego",
        "albanian": "të mësoj gjermanisht",
        "arabic": "تعلم الألمانية",
        "serbian": "учити немачки"
      }
    },
    {
      "german": "die Wohnung aufräumen",
      "translations": {
        "english": "to clean up the apartment",
        "ukrainian": "прибирати квартиру",
        "polish": "sprzątać mieszkanie",
        "albanian": "të rregulloj banesën",
        "arabic": "ترتيب الشقة",
        "serbian": "средити стан"
      }
    },
    {
      "german": "auf dem Markt einkaufen",
      "translations": {
        "english": "to shop at the market",
        "ukrainian": "купувати на ринку",
        "polish": "robić zakupy na targu",
        "albanian": "të blej në treg",
        "arabic": "التسوق في السوق",
        "serbian": "куповати на пијаци"
      }
    },
    {
      "german": "im Supermarkt einkaufen",
      "translations": {
        "english": "to shop at the supermarket",
        "ukrainian": "купувати в супермаркеті",
        "polish": "robić zakupy w supermarkecie",
        "albanian": "të blej në supermarket",
        "arabic": "التسوق في السوبر ماركت",
        "serbian": "куповати у супермаркету"
      }
    },
    {
      "german": "mit den Kindern spielen",
      "translations": {
        "english": "to play with the children",
        "ukrainian": "грати з дітьми",
        "polish": "bawić się z dziećmi",
        "albanian": "të luaj me fëmijët",
        "arabic": "اللعب مع الأطفال",
        "serbian": "играти се са децом"
      }
    },
    {
      "german": "ein Bild malen",
      "translations": {
        "english": "to paint a picture",
        "ukrainian": "малювати картину",
        "polish": "malować obraz",
        "albanian": "të pikturoj një fotografi",
        "arabic": "رسم صورة",
        "serbian": "сликати слику"
      }
    },
    {
      "german": "Musik hören",
      "translations": {
        "english": "to listen to music",
        "ukrainian": "слухати музику",
        "polish": "słuchać muzyki",
        "albanian": "të dëgjoj muzikë",
        "arabic": "الاستماع إلى الموسيقى",
        "serbian": "слушати музику"
      }
    },
    {
      "german": "zusammen kochen",
      "translations": {
        "english": "to cook together",
        "ukrainian": "готувати разом",
        "polish": "gotować razem",
        "albanian": "të gatuaj së bashku",
        "arabic": "الطبخ معاً",
        "serbian": "кувати заједно"
      }
    },
    {
      "german": "im Internet Reiseangebote suchen",
      "translations": {
        "english": "to search for travel offers on the internet",
        "ukrainian": "шукати туристичні пропозиції в інтернеті",
        "polish": "szukać ofert podróży w internecie",
        "albanian": "të kërkoj oferta udhëtimi në internet",
        "arabic": "البحث عن عروض السفر على الإنترنت",
        "serbian": "тражити понуде за путовање на интернету"
      }
    },
    {
      "german": "Mittagessen machen",
      "translations": {
        "english": "to make lunch",
        "ukrainian": "готувати обід",
        "polish": "robić obiad",
        "albanian": "të bëj drekën",
        "arabic": "إعداد الغداء",
        "serbian": "направити ручак"
      }
    },
    {
      "german": "früh aufstehen",
      "translations": {
        "english": "to get up early",
        "ukrainian": "рано вставати",
        "polish": "wcześnie wstawać",
        "albanian": "të zgjohem herët",
        "arabic": "الاستيقاظ مبكراً",
        "serbian": "рано устати"
      }
    },
    {
      "german": "spät einschlafen",
      "translations": {
        "english": "to fall asleep late",
        "ukrainian": "пізно засинати",
        "polish": "późno zasypiać",
        "albanian": "të fle vonë",
        "arabic": "النوم متأخراً",
        "serbian": "касно заспати"
      }
    },
    {
      "german": "gut schlafen",
      "translations": {
        "english": "to sleep well",
        "ukrainian": "добре спати",
        "polish": "dobrze spać",
        "albanian": "të fle mirë",
        "arabic": "النوم جيداً",
        "serbian": "добро спавати"
      }
    },
    {
      "german": "nach Wien mitkommen",
      "translations": {
        "english": "to come along to Vienna",
        "ukrainian": "поїхати разом до Відня",
        "polish": "pojechać razem do Wiednia",
        "albanian": "të vij bashkë në Vjenë",
        "arabic": "المجيء معاً إلى فيينا",
        "serbian": "доћи у Беч"
      }
    },
    {
      "german": "nach Potsdam fahren",
      "translations": {
        "english": "to go to Potsdam",
        "ukrainian": "їхати до Потсдама",
        "polish": "jechać do Poczdamu",
        "albanian": "të shkoj në Potsdam",
        "arabic": "الذهاب إلى بوتسدام",
        "serbian": "ићи у Потсдам"
      }
    },
    {
      "german": "nach Heidelberg gefahren",
      "translations": {
        "english": "went to Heidelberg",
        "ukrainian": "поїхав до Гейдельберга",
        "polish": "pojechał do Heidelbergu",
        "albanian": "shkova në Heidelberg",
        "arabic": "ذهب إلى هايدلبرغ",
        "serbian": "отишао у Хајделберг"
      }
    },
    {
      "german": "zu Hause bleiben",
      "translations": {
        "english": "to stay at home",
        "ukrainian": "залишатися вдома",
        "polish": "zostać w domu",
        "albanian": "të qëndroj në shtëpi",
        "arabic": "البقاء في المنزل",
        "serbian": "остати код куће"
      }
    },
    {
      "german": "Geld von der Bank holen",
      "translations": {
        "english": "to get money from the bank",
        "ukrainian": "брати гроші з банку",
        "polish": "wypłacać pieniądze z banku",
        "albanian": "të marr para nga banka",
        "arabic": "سحب المال من البنك",
        "serbian": "подићи новац из банке"
      }
    },
    {
      "german": "gestern bis 23 Uhr gearbeitet",
      "translations": {
        "english": "worked until 11 PM yesterday",
        "ukrainian": "вчора працював до 23 години",
        "polish": "wczoraj pracował do 23",
        "albanian": "dje punova deri në orën 23",
        "arabic": "عمل أمس حتى الساعة 11 مساءً",
        "serbian": "јуче радио до 23 сата"
      }
    },
    {
      "german": "am Wochenende",
      "translations": {
        "english": "on the weekend",
        "ukrainian": "на вихідних",
        "polish": "w weekend",
        "albanian": "në fundjavë",
        "arabic": "في نهاية الأسبوع",
        "serbian": "викендом"
      }
    },
    {
      "german": "am Vormittag",
      "translations": {
        "english": "in the morning",
        "ukrainian": "вранці",
        "polish": "przed południem",
        "albanian": "në mëngjes",
        "arabic": "في الصباح",
        "serbian": "ујутру"
      }
    },
    {
      "german": "am Nachmittag",
      "translations": {
        "english": "in the afternoon",
        "ukrainian": "після обіду",
        "polish": "po południu",
        "albanian": "pasdite",
        "arabic": "بعد الظهر",
        "serbian": "поподне"
      }
    },
    {
      "german": "am Abend",
      "translations": {
        "english": "in the evening",
        "ukrainian": "ввечері",
        "polish": "wieczorem",
        "albanian": "në mbrëmje",
        "arabic": "في المساء",
        "serbian": "увече"
      }
    },
    {
      "german": "seit wann",
      "translations": {
        "english": "since when",
        "ukrainian": "з якого часу",
        "polish": "od kiedy",
        "albanian": "që kur",
        "arabic": "منذ متى",
        "serbian": "од када"
      }
    },
    {
      "german": "wie lange",
      "translations": {
        "english": "how long",
        "ukrainian": "як довго",
        "polish": "jak długo",
        "albanian": "sa kohë",
        "arabic": "كم من الوقت",
        "serbian": "колико дуго"
      }
    },
    {
      "german": "Musik gehört",
      "translations": {
        "english": "listened to music",
        "ukrainian": "слухав музику",
        "polish": "słuchał muzyki",
        "albanian": "dëgjova muzikë",
        "arabic": "استمع إلى الموسيقى",
        "serbian": "слушао музику"
      }
    },
    {
      "german": "mit Freunden geredet",
      "translations": {
        "english": "talked with friends",
        "ukrainian": "розмовляв з друзями",
        "polish": "rozmawiał z przyjaciółmi",
        "albanian": "folën me miqtë",
        "arabic": "تحدث مع الأصدقاء",
        "serbian": "разговарао са пријатељима"
      }
    },
    {
      "german": "die Wohnung aufgeräumt",
      "translations": {
        "english": "cleaned up the apartment",
        "ukrainian": "прибрав квартиру",
        "polish": "posprzątał mieszkanie",
        "albanian": "rregullova banesën",
        "arabic": "رتب الشقة",
        "serbian": "средио стан"
      }
    },
    {
      "german": "einen Termin machen",
      "translations": {
        "english": "to make an appointment",
        "ukrainian": "записатися на прийом",
        "polish": "umówić się na wizytę",
        "albanian": "të marr një takim",
        "arabic": "حجز موعد",
        "serbian": "заказати термин"
      }
    }
  ],
  11: [
    {
      "german": "einen Antrag stellen",
      "translations": {
        "english": "to submit an application",
        "ukrainian": "подати заяву",
        "polish": "złożyć wniosek",
        "albanian": "të bësh një kërkesë",
        "arabic": "تقديم طلب",
        "serbian": "поднети захтев"
      }
    },
    {
      "german": "ein Formular ausfüllen",
      "translations": {
        "english": "to fill out a form",
        "ukrainian": "заповнити формуляр",
        "polish": "wypełnić formularz",
        "albanian": "të plotësosh një formular",
        "arabic": "ملء استمارة",
        "serbian": "попунити формулар"
      }
    },
    {
      "german": "Wem gehört...?",
      "translations": {
        "english": "Who owns...?",
        "ukrainian": "Кому належить...?",
        "polish": "Do kogo należy...?",
        "albanian": "Kujt i përket...?",
        "arabic": "لمن يملك...؟",
        "serbian": "Ко поседује...?"
      }
    },
    {
      "german": "Das gehört mir",
      "translations": {
        "english": "That belongs to me",
        "ukrainian": "Це належить мені",
        "polish": "To należy do mnie",
        "albanian": "Kjo më përket mua",
        "arabic": "هذا ملكي",
        "serbian": "То припада мени"
      }
    },
    {
      "german": "geboren sein",
      "translations": {
        "english": "to be born",
        "ukrainian": "бути народженим",
        "polish": "być urodzonym",
        "albanian": "të jesh i lindur",
        "arabic": "أن يكون مولودًا",
        "serbian": "бити рођен"
      }
    },
    {
      "german": "heiraten",
      "translations": {
        "english": "to marry",
        "ukrainian": "одружуватися",
        "polish": "żenić się/wychodzić za mąż",
        "albanian": "të martohesh",
        "arabic": "يتزوج",
        "serbian": "венчати се"
      }
    },
    {
      "german": "anmelden",
      "translations": {
        "english": "to register",
        "ukrainian": "реєструвати",
        "polish": "zameldować",
        "albanian": "të regjistrosh",
        "arabic": "يسجل",
        "serbian": "пријавити се"
      }
    },
    {
      "german": "abmelden",
      "translations": {
        "english": "to deregister",
        "ukrainian": "знятися з реєстрації",
        "polish": "wymeldować",
        "albanian": "të çregjistrosh",
        "arabic": "إلغاء التسجيل",
        "serbian": "одјавити се"
      }
    },
    {
      "german": "beantragen",
      "translations": {
        "english": "to apply for",
        "ukrainian": "клопотати про",
        "polish": "wnioskować o",
        "albanian": "të aplikosh për",
        "arabic": "يتقدم بطلب",
        "serbian": "поднети захтев за"
      }
    },
    {
      "german": "verlängern",
      "translations": {
        "english": "to extend, renew",
        "ukrainian": "продовжити",
        "polish": "przedłużyć",
        "albanian": "të zgjatësh",
        "arabic": "يمدد، يجدد",
        "serbian": "продужити, обновити"
      }
    },
    {
      "german": "Können Sie mir helfen?",
      "translations": {
        "english": "Can you help me?",
        "ukrainian": "Чи можете ви мені допомогти?",
        "polish": "Czy może mi Pan/Pani pomóc?",
        "albanian": "A mund të më ndihmoni?",
        "arabic": "هل يمكنك مساعدتي؟",
        "serbian": "Можете ли ми помоћи?"
      }
    },
    {
      "german": "Entschuldigen Sie bitte",
      "translations": {
        "english": "Excuse me, please",
        "ukrainian": "Вибачте, будь ласка",
        "polish": "Przepraszam",
        "albanian": "Më falni, ju lutem",
        "arabic": "عذرًا من فضلك",
        "serbian": "Извините, молим"
      }
    },
    {
      "german": "Verzeihung",
      "translations": {
        "english": "Pardon",
        "ukrainian": "Вибачте",
        "polish": "Przepraszam",
        "albanian": "Më falni",
        "arabic": "عفوًا",
        "serbian": "Опростите"
      }
    },
    {
      "german": "Herzlichen Dank!",
      "translations": {
        "english": "Thank you very much!",
        "ukrainian": "Щиро дякую!",
        "polish": "Serdecznie dziękuję!",
        "albanian": "Faleminderit shumë!",
        "arabic": "شكرًا جزيلاً!",
        "serbian": "Хвала вам пуно!"
      }
    },
    {
      "german": "Vielen Dank",
      "translations": {
        "english": "Thank you very much",
        "ukrainian": "Дуже дякую",
        "polish": "Dziękuję bardzo",
        "albanian": "Faleminderit shumë",
        "arabic": "شكرًا جزيلاً",
        "serbian": "Хвала вам пуно"
      }
    },
    {
      "german": "Gerne",
      "translations": {
        "english": "You're welcome / With pleasure",
        "ukrainian": "Будь ласка / Із задоволенням",
        "polish": "Proszę bardzo / Chętnie",
        "albanian": "Me kënaqësi",
        "arabic": "بكل سرور",
        "serbian": "Нема на чему / Са задовољством"
      }
    },
    {
      "german": "Ja, bitte",
      "translations": {
        "english": "Yes, please",
        "ukrainian": "Так, будь ласка",
        "polish": "Tak, proszę",
        "albanian": "Po, ju lutem",
        "arabic": "نعم، من فضلك",
        "serbian": "Да, молим"
      }
    },
    {
      "german": "Ich danke Ihnen",
      "translations": {
        "english": "I thank you",
        "ukrainian": "Я дякую вам",
        "polish": "Dziękuję Panu/Pani",
        "albanian": "Ju falënderoj",
        "arabic": "أشكرك",
        "serbian": "Захваљујем вам"
      }
    },
    {
      "german": "Was braucht man für...?",
      "translations": {
        "english": "What do you need for...?",
        "ukrainian": "Що потрібно для...?",
        "polish": "Co jest potrzebne do...?",
        "albanian": "Çfarë duhet për...?",
        "arabic": "ماذا يحتاج المرء لـ...؟",
        "serbian": "Шта вам треба за...?"
      }
    },
    {
      "german": "Wo ist...?",
      "translations": {
        "english": "Where is...?",
        "ukrainian": "Де знаходиться...?",
        "polish": "Gdzie jest...?",
        "albanian": "Ku është...?",
        "arabic": "أين...؟",
        "serbian": "Где је...?"
      }
    },
    {
      "german": "Wie kann ich Ihnen helfen?",
      "translations": {
        "english": "How can I help you?",
        "ukrainian": "Як я можу вам допомогти?",
        "polish": "Jak mogę Panu/Pani pomóc?",
        "albanian": "Si mund t'ju ndihmoj?",
        "arabic": "كيف يمكنني مساعدتك؟",
        "serbian": "Како могу да вам помогнем?"
      }
    },
    {
      "german": "Ich möchte...",
      "translations": {
        "english": "I would like...",
        "ukrainian": "Я хотів би...",
        "polish": "Chciałbym/Chciałabym...",
        "albanian": "Dëshiroj...",
        "arabic": "أود...",
        "serbian": "Желео/ла бих..."
      }
    },
    {
      "german": "Ich brauche...",
      "translations": {
        "english": "I need...",
        "ukrainian": "Мені потрібно...",
        "polish": "Potrzebuję...",
        "albanian": "Kam nevojë për...",
        "arabic": "أحتاج...",
        "serbian": "Треба ми..."
      }
    },
    {
      "german": "Ich verstehe das Wort nicht",
      "translations": {
        "english": "I don't understand the word",
        "ukrainian": "Я не розумію це слово",
        "polish": "Nie rozumiem tego słowa",
        "albanian": "Nuk e kuptoj fjalën",
        "arabic": "لا أفهم الكلمة",
        "serbian": "Не разумем ту реч"
      }
    },
    {
      "german": "Das ist nett",
      "translations": {
        "english": "That's nice",
        "ukrainian": "Це мило",
        "polish": "To miłe",
        "albanian": "Kjo është e këndshme",
        "arabic": "هذا لطيف",
        "serbian": "То је лепо"
      }
    },
    {
      "german": "erklären",
      "translations": {
        "english": "to explain",
        "ukrainian": "пояснювати",
        "polish": "wyjaśniać",
        "albanian": "të shpjegosh",
        "arabic": "يشرح",
        "serbian": "објаснити"
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
        "serbian": "разумети"
      }
    },
    {
      "german": "danken",
      "translations": {
        "english": "to thank",
        "ukrainian": "дякувати",
        "polish": "dziękować",
        "albanian": "të falënderosh",
        "arabic": "يشكر",
        "serbian": "захвалити"
      }
    },
    {
      "german": "gehören",
      "translations": {
        "english": "to belong to",
        "ukrainian": "належати",
        "polish": "należeć",
        "albanian": "të përkasësh",
        "arabic": "ينتمي إلى",
        "serbian": "припадати"
      }
    },
    {
      "german": "bekommen",
      "translations": {
        "english": "to receive, get",
        "ukrainian": "отримувати",
        "polish": "otrzymać",
        "albanian": "të marrësh",
        "arabic": "يحصل على",
        "serbian": "примити, добити"
      }
    },
    {
      "german": "Das Auto anmelden und abmelden",
      "translations": {
        "english": "To register and deregister the car",
        "ukrainian": "Зареєструвати та зняти з реєстрації автомобіль",
        "polish": "Zarejestrować i wyrejestrować samochód",
        "albanian": "Të regjistrosh dhe çregjistrosh makinën",
        "arabic": "تسجيل وإلغاء تسجيل السيارة",
        "serbian": "Регистровати и одјавити аутомобил"
      }
    },
    {
      "german": "eine Berufsberatung bekommen",
      "translations": {
        "english": "to get career counseling",
        "ukrainian": "отримати професійну консультацію",
        "polish": "otrzymać doradztwo zawodowe",
        "albanian": "të marrësh këshillim karriere",
        "arabic": "الحصول على استشارة مهنية",
        "serbian": "добити професионално саветовање"
      }
    },
    {
      "german": "Kindergeld beantragen",
      "translations": {
        "english": "to apply for child benefit",
        "ukrainian": "подати заяву на допомогу на дитину",
        "polish": "wnioskować o zasiłek na dziecko",
        "albanian": "të aplikosh për ndihmë për fëmijë",
        "arabic": "التقدم بطلب إعانة الطفل",
        "serbian": "поднети захтев за дечији додатак"
      }
    },
    {
      "german": "ein Visum verlängern",
      "translations": {
        "english": "to extend a visa",
        "ukrainian": "продовжити візу",
        "polish": "przedłużyć wizę",
        "albanian": "të zgjatësh vizën",
        "arabic": "تمديد التأشيرة",
        "serbian": "продужити визу"
      }
    },
    {
      "german": "einen Termin bekommen",
      "translations": {
        "english": "to get an appointment",
        "ukrainian": "отримати термін прийому",
        "polish": "dostać termin",
        "albanian": "të marrësh një takim",
        "arabic": "الحصول على موعد",
        "serbian": "добити термин"
      }
    },
    {
      "german": "Personalausweis verlängern",
      "translations": {
        "english": "to renew ID card",
        "ukrainian": "продовжити посвідчення особи",
        "polish": "przedłużyć dowód osobisty",
        "albanian": "të rinovosh kartën e identitetit",
        "arabic": "تجديد بطاقة الهوية",
        "serbian": "обновити личну карту"
      }
    },
    {
      "german": "Formular schon ausgefüllt",
      "translations": {
        "english": "form already filled out",
        "ukrainian": "формуляр вже заповнено",
        "polish": "formularz już wypełniony",
        "albanian": "formulari tashmë i plotësuar",
        "arabic": "الاستمارة مملوءة بالفعل",
        "serbian": "формулар је већ попуњен"
      }
    },
    {
      "german": "Haben Sie das Formular schon?",
      "translations": {
        "english": "Do you already have the form?",
        "ukrainian": "У вас вже є формуляр?",
        "polish": "Czy ma Pan/Pani już formularz?",
        "albanian": "A e keni tashmë formularin?",
        "arabic": "هل لديك الاستمارة بالفعل؟",
        "serbian": "Да ли већ имате формулар?"
      }
    },
    {
      "german": "Welches Formular?",
      "translations": {
        "english": "Which form?",
        "ukrainian": "Який формуляр?",
        "polish": "Który formularz?",
        "albanian": "Cili formular?",
        "arabic": "أي استمارة؟",
        "serbian": "Који формулар?"
      }
    },
    {
      "german": "Nein, ich habe noch kein Formular",
      "translations": {
        "english": "No, I don't have a form yet",
        "ukrainian": "Ні, у мене ще немає формуляра",
        "polish": "Nie, nie mam jeszcze formularza",
        "albanian": "Jo, nuk kam ende formular",
        "arabic": "لا، ليس لدي استمارة بعد",
        "serbian": "Не, још немам формулар"
      }
    }
  ],
  "12": [
    {
      "german": "Kleidung kaufen",
      "translations": {
        "english": "to buy clothes",
        "ukrainian": "купувати одяг",
        "polish": "kupować ubrania",
        "albanian": "të blesh rroba",
        "arabic": "شراء الملابس",
        "serbian": "купити одећу"
      }
    },
    {
      "german": "im Kaufhaus einkaufen",
      "translations": {
        "english": "to shop in a department store",
        "ukrainian": "робити покупки в універмазі",
        "polish": "robić zakupy w domu towarowym",
        "albanian": "të blesh në qendër tregtare",
        "arabic": "التسوق في متجر كبير",
        "serbian": "куповати у робној кући"
      }
    },
    {
      "german": "Kann ich Ihnen helfen?",
      "translations": {
        "english": "Can I help you?",
        "ukrainian": "Чи можу я вам допомогти?",
        "polish": "Czy mogę pomóc?",
        "albanian": "A mund t'ju ndihmoj?",
        "arabic": "هل يمكنني مساعدتك؟",
        "serbian": "Могу ли да вам помогнем?"
      }
    },
    {
      "german": "Wie gefällt Ihnen die Schuhe?",
      "translations": {
        "english": "How do you like the shoes?",
        "ukrainian": "Як вам подобається взуття?",
        "polish": "Jak podobają się panu/pani buty?",
        "albanian": "Si ju duken këpucët?",
        "arabic": "كيف تجد الحذاء؟",
        "serbian": "Како вам се свиђају ципеле?"
      }
    },
    {
      "german": "Wie finden Sie das Kleid?",
      "translations": {
        "english": "What do you think of the dress?",
        "ukrainian": "Як вам сукня?",
        "polish": "Jak się pani podoba sukienka?",
        "albanian": "Si ju duket fustani?",
        "arabic": "ما رأيك في الفستان؟",
        "serbian": "Шта мислите о хаљини?"
      }
    },
    {
      "german": "Die Hose gefällt mir gut",
      "translations": {
        "english": "I like the pants",
        "ukrainian": "Мені подобаються штани",
        "polish": "Spodnie mi się podobają",
        "albanian": "Pantallonat më pëlqejnë",
        "arabic": "البنطلون يعجبني",
        "serbian": "Свиђају ми се панталоне"
      }
    },
    {
      "german": "Die Schuhe gefallen mir nicht",
      "translations": {
        "english": "I don't like the shoes",
        "ukrainian": "Мені не подобається взуття",
        "polish": "Buty mi się nie podobają",
        "albanian": "Këpucët nuk më pëlqejnë",
        "arabic": "الأحذية لا تعجبني",
        "serbian": "Не свиђају ми се ципеле"
      }
    },
    {
      "german": "Ich finde das Kleid nicht so gut",
      "translations": {
        "english": "I don't think the dress is that good",
        "ukrainian": "Я думаю, сукня не така вже й гарна",
        "polish": "Uważam, że sukienka nie jest taka dobra",
        "albanian": "Mendoj që fustani nuk është aq i mirë",
        "arabic": "لا أجد الفستان جيداً",
        "serbian": "Мислим да хаљина није тако добра"
      }
    },
    {
      "german": "Kann ich das Kleid anprobieren?",
      "translations": {
        "english": "Can I try on the dress?",
        "ukrainian": "Чи можу я приміряти сукню?",
        "polish": "Czy mogę przymierzyć sukienkę?",
        "albanian": "A mund ta provoj fustanin?",
        "arabic": "هل يمكنني تجربة الفستان؟",
        "serbian": "Могу ли да пробам хаљину?"
      }
    },
    {
      "german": "Wo finde ich Babyhosen?",
      "translations": {
        "english": "Where can I find baby pants?",
        "ukrainian": "Де я можу знайти дитячі штани?",
        "polish": "Gdzie znajdę spodnie dla dzieci?",
        "albanian": "Ku mund të gjej pantallona për bebe?",
        "arabic": "أين أجد بنطلونات الأطفال؟",
        "serbian": "Где могу да нађем дечије панталоне?"
      }
    },
    {
      "german": "Haben Sie die Hose auch in Größe 42?",
      "translations": {
        "english": "Do you have the pants in size 42?",
        "ukrainian": "У вас є штани 42 розміру?",
        "polish": "Czy mają państwo spodnie w rozmiarze 42?",
        "albanian": "A i keni pantallonat në madhësinë 42?",
        "arabic": "هل لديكم البنطلون بمقاس 42؟",
        "serbian": "Да ли имате панталоне у величини 42?"
      }
    },
    {
      "german": "Haben Sie auch Hemden?",
      "translations": {
        "english": "Do you also have shirts?",
        "ukrainian": "У вас також є сорочки?",
        "polish": "Czy mają państwo również koszule?",
        "albanian": "A keni edhe këmisha?",
        "arabic": "هل لديكم قمصان أيضاً؟",
        "serbian": "Да ли имате и кошуље?"
      }
    },
    {
      "german": "Die Umkleidekabinen sind da vorne rechts",
      "translations": {
        "english": "The changing rooms are up front on the right",
        "ukrainian": "Примірочні попереду праворуч",
        "polish": "Przymierzalnie są z przodu po prawej",
        "albanian": "Dhomat e provimit janë përpara djathtas",
        "arabic": "غرف القياس في الأمام على اليمين",
        "serbian": "Кабине за пресвлачење су напред десно"
      }
    },
    {
      "german": "Ich kaufe gern im Internet ein",
      "translations": {
        "english": "I like to shop online",
        "ukrainian": "Я люблю робити покупки в інтернеті",
        "polish": "Lubię robić zakupy w internecie",
        "albanian": "Më pëlqen të blej në internet",
        "arabic": "أحب التسوق عبر الإنترنت",
        "serbian": "Волим да купујем онлајн"
      }
    },
    {
      "german": "Ich kaufe lieber im Kaufhaus ein",
      "translations": {
        "english": "I prefer to shop in department stores",
        "ukrainian": "Я віддаю перевагу покупкам в універмазі",
        "polish": "Wolę robić zakupy w domu towarowym",
        "albanian": "Preferoj të blej në qendër tregtare",
        "arabic": "أفضل التسوق في المتاجر الكبرى",
        "serbian": "Више волим да купујем у робним кућама"
      }
    },
    {
      "german": "Das ist praktisch und geht schnell",
      "translations": {
        "english": "That's practical and quick",
        "ukrainian": "Це практично і швидко",
        "polish": "To jest praktyczne i szybkie",
        "albanian": "Është praktike dhe shpejt",
        "arabic": "هذا عملي وسريع",
        "serbian": "То је практично и брзо"
      }
    },
    {
      "german": "Kann ich alles anprobieren",
      "translations": {
        "english": "I can try everything on",
        "ukrainian": "Я можу все приміряти",
        "polish": "Mogę wszystko przymierzyć",
        "albanian": "Mund t'i provoj të gjitha",
        "arabic": "يمكنني تجربة كل شيء",
        "serbian": "Могу све да пробам"
      }
    },
    {
      "german": "Das sieht gut aus",
      "translations": {
        "english": "That looks good",
        "ukrainian": "Це виглядає добре",
        "polish": "To dobrze wygląda",
        "albanian": "Duket mirë",
        "arabic": "هذا يبدو جيداً",
        "serbian": "То изгледа добро"
      }
    },
    {
      "german": "Das steht dir gut",
      "translations": {
        "english": "That suits you well",
        "ukrainian": "Це тобі пасує",
        "polish": "To ci pasuje",
        "albanian": "Të shkon mirë",
        "arabic": "هذا يناسبك",
        "serbian": "То ти добро стоји"
      }
    },
    {
      "german": "Welche Größe haben Sie?",
      "translations": {
        "english": "What size are you?",
        "ukrainian": "Який у вас розмір?",
        "polish": "Jaki ma pan/pani rozmiar?",
        "albanian": "Çfarë madhësie keni?",
        "arabic": "ما هو مقاسك؟",
        "serbian": "Која је ваша величина?"
      }
    },
    {
      "german": "Ich suche einen Mantel",
      "translations": {
        "english": "I'm looking for a coat",
        "ukrainian": "Я шукаю пальто",
        "polish": "Szukam płaszcza",
        "albanian": "Po kërkoj një pallto",
        "arabic": "أبحث عن معطف",
        "serbian": "Тражим капут"
      }
    },
    {
      "german": "Wo kann ich das bezahlen?",
      "translations": {
        "english": "Where can I pay for this?",
        "ukrainian": "Де я можу заплатити?",
        "polish": "Gdzie mogę zapłacić?",
        "albanian": "Ku mund të paguaj?",
        "arabic": "أين يمكنني الدفع؟",
        "serbian": "Где могу да платим ово?"
      }
    },
    {
      "german": "Die Kasse ist dort hinten rechts",
      "translations": {
        "english": "The checkout is back there on the right",
        "ukrainian": "Каса там ззаду праворуч",
        "polish": "Kasa jest tam z tyłu po prawej",
        "albanian": "Arka është atje prapa djathtas",
        "arabic": "صندوق الدفع هناك في الخلف على اليمين",
        "serbian": "Каса је тамо позади десно"
      }
    },
    {
      "german": "Ich nehme den blauen Pullover",
      "translations": {
        "english": "I'll take the blue pullover",
        "ukrainian": "Я візьму синій светр",
        "polish": "Wezmę niebieski sweter",
        "albanian": "Do të marr puloverin blu",
        "arabic": "سآخذ الكنزة الزرقاء",
        "serbian": "Узећу плави џемпер"
      }
    },
    {
      "german": "Das passt gut",
      "translations": {
        "english": "That fits well",
        "ukrainian": "Це добре підходить",
        "polish": "To dobrze pasuje",
        "albanian": "Shkon mirë",
        "arabic": "هذا مناسب تماماً",
        "serbian": "То добро пристаје"
      }
    },
    {
      "german": "Die Schuhe passen nicht",
      "translations": {
        "english": "The shoes don't fit",
        "ukrainian": "Взуття не підходить",
        "polish": "Buty nie pasują",
        "albanian": "Këpucët nuk shkojnë",
        "arabic": "الحذاء غير مناسب",
        "serbian": "Ципеле не одговарају"
      }
    },
    {
      "german": "Tut mir leid",
      "translations": {
        "english": "I'm sorry",
        "ukrainian": "Вибачте",
        "polish": "Przykro mi",
        "albanian": "Më vjen keq",
        "arabic": "آسف",
        "serbian": "Жао ми је"
      }
    },
    {
      "german": "Danke, ich schaue nur",
      "translations": {
        "english": "Thanks, I'm just looking",
        "ukrainian": "Дякую, я просто дивлюся",
        "polish": "Dziękuję, tylko oglądam",
        "albanian": "Faleminderit, vetëm po shikoj",
        "arabic": "شكراً، أنا فقط أتفرج",
        "serbian": "Хвала, само гледам"
      }
    },
    {
      "german": "Einen Moment, bitte",
      "translations": {
        "english": "One moment, please",
        "ukrainian": "Хвилинку, будь ласка",
        "polish": "Chwileczkę, proszę",
        "albanian": "Një moment, ju lutem",
        "arabic": "لحظة من فضلك",
        "serbian": "Један тренутак, молим"
      }
    },
    {
      "german": "Wo ist die Umkleidekabine?",
      "translations": {
        "english": "Where is the changing room?",
        "ukrainian": "Де примірочна?",
        "polish": "Gdzie jest przymierzalnia?",
        "albanian": "Ku është dhoma e provimit?",
        "arabic": "أين غرفة القياس؟",
        "serbian": "Где је кабина за пресвлачење?"
      }
    },
    {
      "german": "Welche Farbe möchten Sie?",
      "translations": {
        "english": "What color would you like?",
        "ukrainian": "Який колір ви хочете?",
        "polish": "Jaki kolor pan/pani chce?",
        "albanian": "Çfarë ngjyre dëshironi?",
        "arabic": "أي لون تريد؟",
        "serbian": "Коју боју желите?"
      }
    },
    {
      "german": "Entschuldigung, wo finde ich Damenschuhe?",
      "translations": {
        "english": "Excuse me, where can I find women's shoes?",
        "ukrainian": "Вибачте, де я можу знайти жіноче взуття?",
        "polish": "Przepraszam, gdzie znajdę damskie buty?",
        "albanian": "Më falni, ku mund të gjej këpucë për femra?",
        "arabic": "عذراً، أين أجد أحذية نسائية؟",
        "serbian": "Извините, где могу да нађем женске ципеле?"
      }
    },
    {
      "german": "Im zweiten Stock",
      "translations": {
        "english": "On the second floor",
        "ukrainian": "На другому поверсі",
        "polish": "Na drugim piętrze",
        "albanian": "Në katin e dytë",
        "arabic": "في الطابق الثاني",
        "serbian": "На другом спрату"
      }
    },
    {
      "german": "direkt neben der Rolltreppe",
      "translations": {
        "english": "right next to the escalator",
        "ukrainian": "прямо біля ескалатора",
        "polish": "bezpośrednio obok schodów ruchomych",
        "albanian": "direkt pranë shkallëve lëvizëse",
        "arabic": "بجانب السلم المتحرك مباشرة",
        "serbian": "одмах поред покретних степеница"
      }
    }
  ],
  "13": [
    {
      "german": "Es ist neblig",
      "translations": {
        "english": "It is foggy",
        "ukrainian": "Туманно",
        "polish": "Jest mgliście",
        "albanian": "Është mjegull",
        "arabic": "الجو ضبابي",
        "serbian": "Магловито је"
      }
    },
    {
      "german": "Es hagelt",
      "translations": {
        "english": "It is hailing",
        "ukrainian": "Йде град",
        "polish": "Pada grad",
        "albanian": "Bie breshër",
        "arabic": "إنها تبرد",
        "serbian": "Пада град"
      }
    },
    {
      "german": "Es blitzt und donnert",
      "translations": {
        "english": "There is lightning and thunder",
        "ukrainian": "Блискавка та грім",
        "polish": "Błyska się i grzmi",
        "albanian": "Vetëtin dhe bubullon",
        "arabic": "هناك برق ورعد",
        "serbian": "Сева и грми"
      }
    },
    {
      "german": "Die Sonne scheint",
      "translations": {
        "english": "The sun is shining",
        "ukrainian": "Сонце світить",
        "polish": "Słońce świeci",
        "albanian": "Dielli shkëlqen",
        "arabic": "الشمس مشرقة",
        "serbian": "Сунце сија"
      }
    },
    {
      "german": "Es regnet",
      "translations": {
        "english": "It is raining",
        "ukrainian": "Йде дощ",
        "polish": "Pada deszcz",
        "albanian": "Po bie shi",
        "arabic": "إنها تمطر",
        "serbian": "Пада киша"
      }
    },
    {
      "german": "Es schneit",
      "translations": {
        "english": "It is snowing",
        "ukrainian": "Йде сніг",
        "polish": "Pada śnieg",
        "albanian": "Po bie borë",
        "arabic": "إنها تثلج",
        "serbian": "Пада снег"
      }
    },
    {
      "german": "Es ist heiß",
      "translations": {
        "english": "It is hot",
        "ukrainian": "Спекотно",
        "polish": "Jest gorąco",
        "albanian": "Është nxehtë",
        "arabic": "الجو حار",
        "serbian": "Вруће је"
      }
    },
    {
      "german": "Es ist kalt",
      "translations": {
        "english": "It is cold",
        "ukrainian": "Холодно",
        "polish": "Jest zimno",
        "albanian": "Është ftohtë",
        "arabic": "الجو بارد",
        "serbian": "Хладно је"
      }
    },
    {
      "german": "Es ist warm",
      "translations": {
        "english": "It is warm",
        "ukrainian": "Тепло",
        "polish": "Jest ciepło",
        "albanian": "Është ngrohtë",
        "arabic": "الجو دافئ",
        "serbian": "Топло је"
      }
    },
    {
      "german": "Es ist windig",
      "translations": {
        "english": "It is windy",
        "ukrainian": "Вітряно",
        "polish": "Jest wietrznie",
        "albanian": "Është me erë",
        "arabic": "الجو عاصف",
        "serbian": "Ветровито је"
      }
    },
    {
      "german": "Es ist bewölkt",
      "translations": {
        "english": "It is cloudy",
        "ukrainian": "Хмарно",
        "polish": "Jest pochmurnie",
        "albanian": "Është me re",
        "arabic": "الجو غائم",
        "serbian": "Облачно је"
      }
    },
    {
      "german": "Es ist sonnig",
      "translations": {
        "english": "It is sunny",
        "ukrainian": "Сонячно",
        "polish": "Jest słonecznie",
        "albanian": "Është me diell",
        "arabic": "الجو مشمس",
        "serbian": "Сунчано је"
      }
    },
    {
      "german": "Es ist nass",
      "translations": {
        "english": "It is wet",
        "ukrainian": "Волого",
        "polish": "Jest mokro",
        "albanian": "Është e lagur",
        "arabic": "الجو رطب",
        "serbian": "Влажно је"
      }
    },
    {
      "german": "Es ist trocken",
      "translations": {
        "english": "It is dry",
        "ukrainian": "Сухо",
        "polish": "Jest sucho",
        "albanian": "Është e thatë",
        "arabic": "الجو جاف",
        "serbian": "Суво је"
      }
    },
    {
      "german": "Wie ist das Wetter?",
      "translations": {
        "english": "How is the weather?",
        "ukrainian": "Яка погода?",
        "polish": "Jaka jest pogoda?",
        "albanian": "Si është moti?",
        "arabic": "كيف حال الطقس؟",
        "serbian": "Какво је време?"
      }
    },
    {
      "german": "Wie ist das Wetter heute?",
      "translations": {
        "english": "How is the weather today?",
        "ukrainian": "Яка погода сьогодні?",
        "polish": "Jaka jest pogoda dzisiaj?",
        "albanian": "Si është moti sot?",
        "arabic": "كيف حال الطقس اليوم؟",
        "serbian": "Какво је време данас?"
      }
    },
    {
      "german": "Wie war das Wetter gestern?",
      "translations": {
        "english": "How was the weather yesterday?",
        "ukrainian": "Яка була погода вчора?",
        "polish": "Jaka była pogoda wczoraj?",
        "albanian": "Si ishte moti dje?",
        "arabic": "كيف كان الطقس أمس؟",
        "serbian": "Какво је било време јуче?"
      }
    },
    {
      "german": "eine Fahrkarte kaufen",
      "translations": {
        "english": "to buy a ticket",
        "ukrainian": "купити квиток",
        "polish": "kupić bilet",
        "albanian": "të blej biletë",
        "arabic": "شراء تذكرة",
        "serbian": "купити карту"
      }
    },
    {
      "german": "Urlaub machen",
      "translations": {
        "english": "to go on vacation",
        "ukrainian": "йти у відпустку",
        "polish": "jechać na urlop",
        "albanian": "të bëj pushime",
        "arabic": "الذهاب في عطلة",
        "serbian": "ићи на одмор"
      }
    },
    {
      "german": "eine Reise machen",
      "translations": {
        "english": "to take a trip",
        "ukrainian": "здійснити подорож",
        "polish": "podróżować",
        "albanian": "të bëj një udhëtim",
        "arabic": "القيام برحلة",
        "serbian": "отићи на путовање"
      }
    },
    {
      "german": "auf dem Land",
      "translations": {
        "english": "in the countryside",
        "ukrainian": "на селі",
        "polish": "na wsi",
        "albanian": "në fshat",
        "arabic": "في الريف",
        "serbian": "на селу"
      }
    },
    {
      "german": "am Meer",
      "translations": {
        "english": "at the sea",
        "ukrainian": "на морі",
        "polish": "nad morzem",
        "albanian": "në det",
        "arabic": "عند البحر",
        "serbian": "на мору"
      }
    },
    {
      "german": "in den Bergen",
      "translations": {
        "english": "in the mountains",
        "ukrainian": "в горах",
        "polish": "w górach",
        "albanian": "në male",
        "arabic": "في الجبال",
        "serbian": "у планинама"
      }
    },
    {
      "german": "am Strand",
      "translations": {
        "english": "at the beach",
        "ukrainian": "на пляжі",
        "polish": "na plaży",
        "albanian": "në plazh",
        "arabic": "على الشاطئ",
        "serbian": "на плажи"
      }
    },
    {
      "german": "in der Stadt",
      "translations": {
        "english": "in the city",
        "ukrainian": "в місті",
        "polish": "w mieście",
        "albanian": "në qytet",
        "arabic": "في المدينة",
        "serbian": "у граду"
      }
    },
    {
      "german": "mit Reservierung",
      "translations": {
        "english": "with reservation",
        "ukrainian": "з бронюванням",
        "polish": "z rezerwacją",
        "albanian": "me rezervim",
        "arabic": "مع الحجز",
        "serbian": "са резервацијом"
      }
    },
    {
      "german": "Erste oder zweite Klasse?",
      "translations": {
        "english": "First or second class?",
        "ukrainian": "Перший чи другий клас?",
        "polish": "Pierwsza czy druga klasa?",
        "albanian": "Klasa e parë apo e dytë?",
        "arabic": "الدرجة الأولى أم الثانية؟",
        "serbian": "Прва или друга класа?"
      }
    },
    {
      "german": "um den See wandern",
      "translations": {
        "english": "to hike around the lake",
        "ukrainian": "ходити навколо озера",
        "polish": "wędrować wokół jeziora",
        "albanian": "të ecësh rreth liqenit",
        "arabic": "التنزه حول البحيرة",
        "serbian": "пешачити око језера"
      }
    },
    {
      "german": "durch den Tunnel fahren",
      "translations": {
        "english": "to drive through the tunnel",
        "ukrainian": "їхати через тунель",
        "polish": "jechać przez tunel",
        "albanian": "të kalosh nëpër tunel",
        "arabic": "القيادة عبر النفق",
        "serbian": "возити кроз тунел"
      }
    },
    {
      "german": "abfahren",
      "translations": {
        "english": "to depart",
        "ukrainian": "відправлятися",
        "polish": "odjeżdżać",
        "albanian": "të nisem",
        "arabic": "المغادرة",
        "serbian": "кренути"
      }
    },
    {
      "german": "ankommen",
      "translations": {
        "english": "to arrive",
        "ukrainian": "прибувати",
        "polish": "przyjeżdżać",
        "albanian": "të mbërrij",
        "arabic": "الوصول",
        "serbian": "стићи"
      }
    },
    {
      "german": "übernachten",
      "translations": {
        "english": "to stay overnight",
        "ukrainian": "ночувати",
        "polish": "nocować",
        "albanian": "të fle",
        "arabic": "المبيت",
        "serbian": "преноћити"
      }
    },
    {
      "german": "spazieren gehen",
      "translations": {
        "english": "to go for a walk",
        "ukrainian": "гуляти",
        "polish": "spacerować",
        "albanian": "të dal për shëtitje",
        "arabic": "الذهاب في نزهة",
        "serbian": "ићи у шетњу"
      }
    },
    {
      "german": "Ski fahren",
      "translations": {
        "english": "to ski",
        "ukrainian": "кататися на лижах",
        "polish": "jeździć na nartach",
        "albanian": "të bëj ski",
        "arabic": "التزلج",
        "serbian": "скијати"
      }
    },
    {
      "german": "schwimmen gehen",
      "translations": {
        "english": "to go swimming",
        "ukrainian": "плавати",
        "polish": "iść pływać",
        "albanian": "të shkoj për të notuar",
        "arabic": "الذهاب للسباحة",
        "serbian": "ићи на пливање"
      }
    },
    {
      "german": "wandern",
      "translations": {
        "english": "to hike",
        "ukrainian": "ходити в похід",
        "polish": "wędrować",
        "albanian": "të ecësh",
        "arabic": "المشي لمسافات طويلة",
        "serbian": "пешачити"
      }
    },
    {
      "german": "umsteigen",
      "translations": {
        "english": "to change/transfer",
        "ukrainian": "пересідати",
        "polish": "przesiadać się",
        "albanian": "të ndërroj",
        "arabic": "التغيير/النقل",
        "serbian": "пресести"
      }
    },
    {
      "german": "zurückkommen",
      "translations": {
        "english": "to come back",
        "ukrainian": "повертатися",
        "polish": "wracać",
        "albanian": "të kthehem",
        "arabic": "العودة",
        "serbian": "вратити се"
      }
    },
    {
      "german": "genauso ... wie",
      "translations": {
        "english": "just as ... as",
        "ukrainian": "так само ... як",
        "polish": "tak samo ... jak",
        "albanian": "po aq ... sa",
        "arabic": "تماماً مثل",
        "serbian": "исто као ... као"
      }
    },
    {
      "german": "20 Grad Celsius",
      "translations": {
        "english": "20 degrees Celsius",
        "ukrainian": "20 градусів за Цельсієм",
        "polish": "20 stopni Celsjusza",
        "albanian": "20 gradë Celsius",
        "arabic": "20 درجة مئوية",
        "serbian": "20 степени Целзијуса"
      }
    },
    {
      "german": "fantastisch",
      "translations": {
        "english": "fantastic",
        "ukrainian": "фантастичний",
        "polish": "fantastyczny",
        "albanian": "fantastik",
        "arabic": "رائع",
        "serbian": "фантастично"
      }
    },
    {
      "german": "ungefähr",
      "translations": {
        "english": "approximately",
        "ukrainian": "приблизно",
        "polish": "około",
        "albanian": "përafërsisht",
        "arabic": "تقريباً",
        "serbian": "отприлике"
      }
    }
  ],
  "14":  [
    {
      "german": "Wo wohnen Sie?",
      "translations": {
        "english": "Where do you live?",
        "ukrainian": "Де ви живете?",
        "polish": "Gdzie pan/pani mieszka?",
        "albanian": "Ku jetoni?",
        "arabic": "أين تسكن؟",
        "serbian": "Где живите?"
      }
    },
    {
      "german": "Ich wohne in einem Miethaus",
      "translations": {
        "english": "I live in a rental house",
        "ukrainian": "Я живу в орендному будинку",
        "polish": "Mieszkam w domu na wynajem",
        "albanian": "Jetoj në një shtëpi me qira",
        "arabic": "أسكن في بيت إيجار",
        "serbian": "Живим у изнајмљеној кући"
      }
    },
    {
      "german": "Es gibt keinen Aufzug",
      "translations": {
        "english": "There is no elevator",
        "ukrainian": "Ліфта немає",
        "polish": "Nie ma windy",
        "albanian": "Nuk ka ashensor",
        "arabic": "لا يوجد مصعد",
        "serbian": "Нема лифта"
      }
    },
    {
      "german": "Die Klingel funktioniert nicht",
      "translations": {
        "english": "The doorbell doesn't work",
        "ukrainian": "Дзвінок не працює",
        "polish": "Dzwonek nie działa",
        "albanian": "Zilja nuk punon",
        "arabic": "جرس الباب لا يعمل",
        "serbian": "Звоно не ради"
      }
    },
    {
      "german": "Das Licht geht nicht",
      "translations": {
        "english": "The light doesn't work",
        "ukrainian": "Світло не працює",
        "polish": "Światło nie działa",
        "albanian": "Drita nuk ndizet",
        "arabic": "الضوء لا يعمل",
        "serbian": "Светло не ради"
      }
    },
    {
      "german": "Der Aufzug ist kaputt",
      "translations": {
        "english": "The elevator is broken",
        "ukrainian": "Ліфт зламаний",
        "polish": "Winda jest zepsuta",
        "albanian": "Ashensori është prishur",
        "arabic": "المصعد معطل",
        "serbian": "Лифт је поквaрен"
      }
    },
    {
      "german": "Die Heizung funktioniert oft nicht",
      "translations": {
        "english": "The heating often doesn't work",
        "ukrainian": "Опалення часто не працює",
        "polish": "Ogrzewanie często nie działa",
        "albanian": "Ngrohja shpesh nuk punon",
        "arabic": "التدفئة غالباً لا تعمل",
        "serbian": "Грејање често не ради"
      }
    },
    {
      "german": "Im Treppenhaus war zu viel Müll",
      "translations": {
        "english": "There was too much garbage in the stairwell",
        "ukrainian": "На сходовій клітці було занадто багато сміття",
        "polish": "Na klatce schodowej było za dużo śmieci",
        "albanian": "Në shkallë kishte shumë mbeturina",
        "arabic": "كان هناك قمامة كثيرة في السلم",
        "serbian": "Било је превише смећа на степеништу"
      }
    },
    {
      "german": "einen formellen Brief schreiben",
      "translations": {
        "english": "to write a formal letter",
        "ukrainian": "написати офіційного листа",
        "polish": "napisać formalny list",
        "albanian": "të shkruaj një letër formale",
        "arabic": "كتابة رسالة رسمية",
        "serbian": "написати званичан писмо"
      }
    },
    {
      "german": "Sehr geehrte Frau / Sehr geehrter Herr",
      "translations": {
        "english": "Dear Madam / Dear Sir",
        "ukrainian": "Шановна пані / Шановний пане",
        "polish": "Szanowna Pani / Szanowny Panie",
        "albanian": "I nderuar Zonjë / I nderuar Zotëri",
        "arabic": "سيدتي المحترمة / سيدي المحترم",
        "serbian": "Поштована госпођо / Поштовани господине"
      }
    },
    {
      "german": "Mit freundlichen Grüßen",
      "translations": {
        "english": "With kind regards",
        "ukrainian": "З найкращими побажаннями",
        "polish": "Z poważaniem",
        "albanian": "Me respekt",
        "arabic": "مع أطيب التحيات",
        "serbian": "Са поштовањем"
      }
    },
    {
      "german": "um Hilfe bitten",
      "translations": {
        "english": "to ask for help",
        "ukrainian": "просити допомоги",
        "polish": "prosić o pomoc",
        "albanian": "të kërkosh ndihmë",
        "arabic": "طلب المساعدة",
        "serbian": "замолити за помоћ"
      }
    },
    {
      "german": "Entschuldigung, ich möchte nicht stören",
      "translations": {
        "english": "Excuse me, I don't want to disturb",
        "ukrainian": "Вибачте, я не хочу турбувати",
        "polish": "Przepraszam, nie chcę przeszkadzać",
        "albanian": "Më falni, nuk dua të shqetësoj",
        "arabic": "عذراً، لا أريد أن أزعج",
        "serbian": "Извините, не желим да узнемиравам"
      }
    },
    {
      "german": "Können Sie mir vielleicht ein bisschen Milch geben?",
      "translations": {
        "english": "Could you perhaps give me a little milk?",
        "ukrainian": "Чи можете ви дати мені трохи молока?",
        "polish": "Czy może pan/pani dać mi trochę mleka?",
        "albanian": "A mund të më jepni pak qumësht?",
        "arabic": "هل يمكنكم إعطائي قليلاً من الحليب؟",
        "serbian": "Да ли бисте ми могли дати мало млека?"
      }
    },
    {
      "german": "Gern geschehen",
      "translations": {
        "english": "You're welcome",
        "ukrainian": "Будь ласка",
        "polish": "Proszę bardzo",
        "albanian": "S'ka përse",
        "arabic": "العفو",
        "serbian": "Нема на чему"
      }
    },
    {
      "german": "Vielen Dank",
      "translations": {
        "english": "Thank you very much",
        "ukrainian": "Дуже дякую",
        "polish": "Dziękuję bardzo",
        "albanian": "Faleminderit shumë",
        "arabic": "شكراً جزيلاً",
        "serbian": "Хвала вам пуно"
      }
    },
    {
      "german": "Ich backe gerade einen Kuchen und habe keine Eier mehr",
      "translations": {
        "english": "I'm baking a cake and I don't have any more eggs",
        "ukrainian": "Я печу торт і в мене більше немає яєць",
        "polish": "Piekę ciasto i nie mam już jajek",
        "albanian": "Po pjek një tortë dhe nuk kam më vezë",
        "arabic": "أخبز كعكة وليس لدي بيض",
        "serbian": "Правим торту и немам више јаја"
      }
    },
    {
      "german": "ein Paket abgeben",
      "translations": {
        "english": "to drop off a package",
        "ukrainian": "здати пакунок",
        "polish": "oddać paczkę",
        "albanian": "të dorëzoj një pako",
        "arabic": "تسليم طرد",
        "serbian": "предати пакет"
      }
    },
    {
      "german": "Musik leiser machen",
      "translations": {
        "english": "to turn down the music",
        "ukrainian": "зробити музику тихіше",
        "polish": "ściszyć muzykę",
        "albanian": "të ulësh muzikën",
        "arabic": "خفض الموسيقى",
        "serbian": "утишати музику"
      }
    },
    {
      "german": "Salz geben",
      "translations": {
        "english": "to give salt",
        "ukrainian": "дати солі",
        "polish": "podać sól",
        "albanian": "të japësh kripë",
        "arabic": "إعطاء الملح",
        "serbian": "дати со"
      }
    },
    {
      "german": "Können Sie bitte einen Elektriker bestellen?",
      "translations": {
        "english": "Could you please order an electrician?",
        "ukrainian": "Чи можете ви, будь ласка, викликати електрика?",
        "polish": "Czy może pan/pani zamówić elektryka?",
        "albanian": "A mund të porositni një elektrik, ju lutem?",
        "arabic": "هل يمكنكم طلب كهربائي من فضلكم؟",
        "serbian": "Да ли бисте могли да позовете електричара?"
      }
    },
    {
      "german": "Wann kommt die Müllabfuhr das nächste Mal?",
      "translations": {
        "english": "When does the garbage collection come next time?",
        "ukrainian": "Коли приїде наступного разу вивезення сміття?",
        "polish": "Kiedy następnym razem przyjedzie wywóz śmieci?",
        "albanian": "Kur vjen herës tjetër mbledhja e mbeturinave?",
        "arabic": "متى ستأتي جمع القمامة المرة القادمة؟",
        "serbian": "Када следећи пут долази одвоз смећа?"
      }
    },
    {
      "german": "Wann hat das Licht im Treppenhaus nicht funktioniert?",
      "translations": {
        "english": "When did the light in the stairwell not work?",
        "ukrainian": "Коли не працювало світло на сходовій клітці?",
        "polish": "Kiedy nie działało światło na klatce schodowej?",
        "albanian": "Kur nuk punonte drita në shkallë?",
        "arabic": "متى لم يعمل الضوء في السلم؟",
        "serbian": "Када светло на степеништу није радило?"
      }
    },
    {
      "german": "Wo wohnt Herr Wagner?",
      "translations": {
        "english": "Where does Mr. Wagner live?",
        "ukrainian": "Де живе пан Вагнер?",
        "polish": "Gdzie mieszka pan Wagner?",
        "albanian": "Ku jeton zoti Wagner?",
        "arabic": "أين يسكن السيد فاجنر؟",
        "serbian": "Где живи господин Вагнер?"
      }
    },
    {
      "german": "Wo wohnt Herr Lischka?",
      "translations": {
        "english": "Where does Mr. Lischka live?",
        "ukrainian": "Де живе пан Лішка?",
        "polish": "Gdzie mieszka pan Lischka?",
        "albanian": "Ku jeton zoti Lischka?",
        "arabic": "أين يسكن السيد ليشكا؟",
        "serbian": "Где живи господин Лишка?"
      }
    },
    {
      "german": "Was wollen Herr Wagner und Herr Lischka machen?",
      "translations": {
        "english": "What do Mr. Wagner and Mr. Lischka want to do?",
        "ukrainian": "Що хочуть робити пан Вагнер і пан Лішка?",
        "polish": "Co chcą robić pan Wagner i pan Lischka?",
        "albanian": "Çfarë duan të bëjnë zoti Wagner dhe zoti Lischka?",
        "arabic": "ماذا يريد أن يفعل السيد فاجنر والسيد ليشكا؟",
        "serbian": "Шта желе да ураде господин Вагнер и господин Лишка?"
      }
    },
    {
      "german": "Das Fest ist im Winter",
      "translations": {
        "english": "The festival is in winter",
        "ukrainian": "Свято взимку",
        "polish": "Święto jest zimą",
        "albanian": "Festa është në dimër",
        "arabic": "الحفلة في الشتاء",
        "serbian": "Фестивал је зими"
      }
    },
    {
      "german": "Das Fest findet zum ersten Mal statt",
      "translations": {
        "english": "The festival takes place for the first time",
        "ukrainian": "Свято відбувається вперше",
        "polish": "Święto odbywa się po raz pierwszy",
        "albanian": "Festa zhvillohet për herë të parë",
        "arabic": "الحفلة تقام لأول مرة",
        "serbian": "Фестивал се одржава по први пут"
      }
    },
    {
      "german": "Alle Nachbarn sind eingeladen",
      "translations": {
        "english": "All neighbors are invited",
        "ukrainian": "Всі сусіди запрошені",
        "polish": "Wszyscy sąsiedzi są zaproszeni",
        "albanian": "Të gjithë fqinjët janë të ftuar",
        "arabic": "جميع الجيران مدعوون",
        "serbian": "Сви комшије су позвани"
      }
    },
    {
      "german": "Man soll einen Grill mitbringen",
      "translations": {
        "english": "One should bring a grill",
        "ukrainian": "Треба принести гриль",
        "polish": "Należy przynieść grill",
        "albanian": "Duhet të sillni një grill",
        "arabic": "يجب إحضار شواية",
        "serbian": "Треба донети роштиљ"
      }
    },
    {
      "german": "Man muss Essen selbst mitbringen",
      "translations": {
        "english": "One must bring food themselves",
        "ukrainian": "Треба принести їжу самому",
        "polish": "Trzeba przynieść jedzenie samemu",
        "albanian": "Duhet të sillni ushqimin vetë",
        "arabic": "يجب إحضار الطعام بنفسك",
        "serbian": "Треба донети храну сами"
      }
    },
    {
      "german": "Schönes Wetter heute",
      "translations": {
        "english": "Nice weather today",
        "ukrainian": "Гарна погода сьогодні",
        "polish": "Ładna pogoda dzisiaj",
        "albanian": "Mot i bukur sot",
        "arabic": "طقس جميل اليوم",
        "serbian": "Лепо време данас"
      }
    },
    {
      "german": "Ja, wir haben wirklich Glück mit dem Wetter",
      "translations": {
        "english": "Yes, we're really lucky with the weather",
        "ukrainian": "Так, нам дуже пощастило з погодою",
        "polish": "Tak, mamy naprawdę szczęście z pogodą",
        "albanian": "Po, na ka rënë me fat me motin",
        "arabic": "نعم، نحن محظوظون حقاً بالطقس",
        "serbian": "Да, заиста имамо среће са временом"
      }
    }
  ]
});
  // ... add more sentences for A1.2 here
export const A1_2_SENTENCE_SECTIONS = Object.keys(a1_2_Sentences).map(Number);