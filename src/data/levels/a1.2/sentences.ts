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
        "arabic": "حجز موعد"
      }
    },
    {
      "german": "einen Termin beim Arzt",
      "translations": {
        "english": "an appointment with the doctor",
        "ukrainian": "прийом у лікаря",
        "polish": "wizyta u lekarza",
        "albanian": "një takim te mjeku",
        "arabic": "موعد مع الطبيب"
      }
    },
    {
      "german": "zum Arzt gehen",
      "translations": {
        "english": "to go to the doctor",
        "ukrainian": "йти до лікаря",
        "polish": "iść do lekarza",
        "albanian": "të shkosh tek mjeku",
        "arabic": "الذهاب إلى الطبيب"
      }
    },
    {
      "german": "beim Arzt",
      "translations": {
        "english": "at the doctor's",
        "ukrainian": "у лікаря",
        "polish": "u lekarza",
        "albanian": "tek mjeku",
        "arabic": "عند الطبيب"
      }
    },
    {
      "german": "was fehlt Ihnen denn?",
      "translations": {
        "english": "what's wrong with you?",
        "ukrainian": "що з вами не так?",
        "polish": "co Panu/Pani dolega?",
        "albanian": "çfarë keni?",
        "arabic": "ما الذي يؤلمك؟"
      }
    },
    {
      "german": "mir geht es nicht gut",
      "translations": {
        "english": "I don't feel well",
        "ukrainian": "мені погано",
        "polish": "nie czuję się dobrze",
        "albanian": "nuk ndjehem mirë",
        "arabic": "لا أشعر بالراحة"
      }
    },
    {
      "german": "ich habe Fieber",
      "translations": {
        "english": "I have fever",
        "ukrainian": "у мене температура",
        "polish": "mam gorączkę",
        "albanian": "kam ethe",
        "arabic": "عندي حمى"
      }
    },
    {
      "german": "ich habe eine Erkältung",
      "translations": {
        "english": "I have a cold",
        "ukrainian": "у мене застуда",
        "polish": "mam przeziębienie",
        "albanian": "kam ftohje",
        "arabic": "عندي نزلة برد"
      }
    },
    {
      "german": "mein Rücken tut weh",
      "translations": {
        "english": "my back hurts",
        "ukrainian": "у мене болить спина",
        "polish": "boli mnie plecy",
        "albanian": "më dhemb shpina",
        "arabic": "ظهري يؤلمني"
      }
    },
    {
      "german": "ich habe Kopfschmerzen",
      "translations": {
        "english": "I have a headache",
        "ukrainian": "у мене болить голова",
        "polish": "boli mnie głowa",
        "albanian": "më dhemb koka",
        "arabic": "عندي صداع"
      }
    },
    {
      "german": "ich habe Zahnschmerzen",
      "translations": {
        "english": "I have toothache",
        "ukrainian": "у мене болять зуби",
        "polish": "bolą mnie zęby",
        "albanian": "më dhembin dhëmbët",
        "arabic": "عندي ألم في الأسنان"
      }
    },
    {
      "german": "ich habe Halsschmerzen",
      "translations": {
        "english": "I have a sore throat",
        "ukrainian": "у мене болить горло",
        "polish": "boli mnie gardło",
        "albanian": "më dhemb fyti",
        "arabic": "عندي التهاب في الحلق"
      }
    },
    {
      "german": "ich habe Bauchschmerzen",
      "translations": {
        "english": "I have stomachache",
        "ukrainian": "у мене болить живіт",
        "polish": "boli mnie brzuch",
        "albanian": "më dhemb barku",
        "arabic": "عندي ألم في المعدة"
      }
    },
    {
      "german": "machen Sie bitte den Mund auf",
      "translations": {
        "english": "please open your mouth",
        "ukrainian": "будь ласка, відкрийте рот",
        "polish": "proszę otworzyć usta",
        "albanian": "ju lutem hapni gojën",
        "arabic": "من فضلك افتح فمك"
      }
    },
    {
      "german": "kommen Sie bitte noch einmal zur Kontrolle",
      "translations": {
        "english": "please come again for a check-up",
        "ukrainian": "будь ласка, прийдіть ще раз на контроль",
        "polish": "proszę przyjść jeszcze raz na kontrolę",
        "albanian": "ju lutem ejani përsëri për kontroll",
        "arabic": "من فضلك تعال مرة أخرى للفحص"
      }
    },
    {
      "german": "Sie müssen noch einmal zur Kontrolle kommen",
      "translations": {
        "english": "you must come again for a check-up",
        "ukrainian": "ви повинні прийти ще раз на контроль",
        "polish": "musi Pan/Pani przyjść jeszcze raz na kontrolę",
        "albanian": "ju duhet të vini përsëri për kontroll",
        "arabic": "يجب أن تأتي مرة أخرى للفحص"
      }
    },
    {
      "german": "mein Kind ist krank",
      "translations": {
        "english": "my child is sick",
        "ukrainian": "моя дитина хвора",
        "polish": "moje dziecko jest chore",
        "albanian": "fëmija im është i sëmurë",
        "arabic": "طفلي مريض"
      }
    },
    {
      "german": "sie hat Kopfschmerzen",
      "translations": {
        "english": "she has a headache",
        "ukrainian": "у неї болить голова",
        "polish": "ona ma ból głowy",
        "albanian": "ajo ka dhimbje koke",
        "arabic": "عندها صداع"
      }
    },
    {
      "german": "der Hals tut weh",
      "translations": {
        "english": "the throat hurts",
        "ukrainian": "болить горло",
        "polish": "boli gardło",
        "albanian": "dhemb fyti",
        "arabic": "الحلق يؤلم"
      }
    },
    {
      "german": "der Bauch tut weh",
      "translations": {
        "english": "the stomach hurts",
        "ukrainian": "болить живіт",
        "polish": "boli brzuch",
        "albanian": "dhemb barku",
        "arabic": "المعدة تؤلم"
      }
    },
    {
      "german": "sie geht nicht zur Schule",
      "translations": {
        "english": "she doesn't go to school",
        "ukrainian": "вона не йде до школи",
        "polish": "ona nie idzie do szkoły",
        "albanian": "ajo nuk shkon në shkollë",
        "arabic": "هي لا تذهب إلى المدرسة"
      }
    },
    {
      "german": "sie geht später zur Schule",
      "translations": {
        "english": "she goes to school later",
        "ukrainian": "вона йде до школи пізніше",
        "polish": "ona idzie do szkoły później",
        "albanian": "ajo shkon në shkollë më vonë",
        "arabic": "هي تذهب إلى المدرسة لاحقاً"
      }
    },
    {
      "german": "eine Entschuldigung für die Schule",
      "translations": {
        "english": "an excuse note for school",
        "ukrainian": "виправдувальна записка для школи",
        "polish": "usprawiedliwienie dla szkoły",
        "albanian": "një justifikim për shkollën",
        "arabic": "مذكرة اعتذار للمدرسة"
      }
    },
    {
      "german": "kann heute leider nicht zum Unterricht kommen",
      "translations": {
        "english": "unfortunately cannot come to class today",
        "ukrainian": "на жаль, не може прийти на урок сьогодні",
        "polish": "niestety nie może dzisiaj przyjść na lekcje",
        "albanian": "fatkeqësisht nuk mund të vijë në mësim sot",
        "arabic": "للأسف لا يمكن الحضور للدرس اليوم"
      }
    },
    {
      "german": "mit freundlichen Grüßen",
      "translations": {
        "english": "with kind regards",
        "ukrainian": "з найкращими побажаннями",
        "polish": "z poważaniem",
        "albanian": "me respekt",
        "arabic": "مع أطيب التحيات"
      }
    },
    {
      "german": "sehr geehrter Herr",
      "translations": {
        "english": "dear sir",
        "ukrainian": "шановний пане",
        "polish": "szanowny panie",
        "albanian": "i nderuar zotëri",
        "arabic": "سيدي المحترم"
      }
    },
    {
      "german": "bitte entschuldigen Sie das Fehlen von",
      "translations": {
        "english": "please excuse the absence of",
        "ukrainian": "будь ласка, виправдайте відсутність",
        "polish": "proszę usprawiedliwić nieobecność",
        "albanian": "ju lutem justifikoni mungesën e",
        "arabic": "من فضلك اعذر غياب"
      }
    },
    {
      "german": "in die Apotheke gehen",
      "translations": {
        "english": "to go to the pharmacy",
        "ukrainian": "йти в аптеку",
        "polish": "iść do apteki",
        "albanian": "të shkosh në farmaci",
        "arabic": "الذهاب إلى الصيدلية"
      }
    },
    {
      "german": "mit dem Rezept",
      "translations": {
        "english": "with the prescription",
        "ukrainian": "з рецептом",
        "polish": "z receptą",
        "albanian": "me recetën",
        "arabic": "مع الوصفة الطبية"
      }
    },
    {
      "german": "für die Medikamente",
      "translations": {
        "english": "for the medications",
        "ukrainian": "за ліки",
        "polish": "za lekarstwa",
        "albanian": "për ilaçet",
        "arabic": "للأدوية"
      }
    },
    {
      "german": "die Gesundheitskarte brauchen",
      "translations": {
        "english": "to need the health insurance card",
        "ukrainian": "потребувати медичну картку",
        "polish": "potrzebować karty ubezpieczenia",
        "albanian": "të duash kartën e sigurimeve shëndetësore",
        "arabic": "أحتاج بطاقة التأمين الصحي"
      }
    },
    {
      "german": "für den Besuch beim Arzt",
      "translations": {
        "english": "for the visit to the doctor",
        "ukrainian": "для візиту до лікаря",
        "polish": "na wizytę u lekarza",
        "albanian": "për vizitën tek mjeku",
        "arabic": "لزيارة الطبيب"
      }
    },
    {
      "german": "von der Krankenkasse bekommen",
      "translations": {
        "english": "to get from the health insurance",
        "ukrainian": "отримати від страхової компанії",
        "polish": "otrzymać od kasy chorych",
        "albanian": "të marrësh nga sigurimi shëndetësor",
        "arabic": "الحصول على من التأمين الصحي"
      }
    },
    {
      "german": "eine Krankschreibung",
      "translations": {
        "english": "a sick note",
        "ukrainian": "лікарняний",
        "polish": "zwolnienie lekarskie",
        "albanian": "një dëshmi mjekësore",
        "arabic": "إجازة مرضية"
      }
    },
    {
      "german": "das Original schicken",
      "translations": {
        "english": "to send the original",
        "ukrainian": "відправити оригінал",
        "polish": "wysłać oryginał",
        "albanian": "të dërgosh origjinalin",
        "arabic": "إرسال الأصل"
      }
    },
    {
      "german": "an ihre Krankenkasse",
      "translations": {
        "english": "to their health insurance",
        "ukrainian": "до їхньої страхової компанії",
        "polish": "do swojej kasy chorych",
        "albanian": "në sigurimet e tyre shëndetësore",
        "arabic": "إلى شركة التأمين الصحي"
      }
    },
    {
      "german": "die Kopie ist für ihren Arbeitgeber",
      "translations": {
        "english": "the copy is for their employer",
        "ukrainian": "копія для їхнього роботодавця",
        "polish": "kopia jest dla ich pracodawcy",
        "albanian": "kopja është për punëdhënësin e tyre",
        "arabic": "النسخة لصاحب العمل"
      }
    },
    {
      "german": "einen Hausarzt suchen",
      "translations": {
        "english": "to look for a family doctor",
        "ukrainian": "шукати сімейного лікаря",
        "polish": "szukać lekarza rodzinnego",
        "albanian": "të kërkosh një mjek familjeje",
        "arabic": "البحث عن طبيب عائلة"
      }
    },
    {
      "german": "einen Zahnarzt suchen",
      "translations": {
        "english": "to look for a dentist",
        "ukrainian": "шукати стоматолога",
        "polish": "szukać dentysty",
        "albanian": "të kërkosh një dentist",
        "arabic": "البحث عن طبيب أسنان"
      }
    },
    {
      "german": "im Telefonbuch",
      "translations": {
        "english": "in the phone book",
        "ukrainian": "в телефонній книзі",
        "polish": "w książce telefonicznej",
        "albanian": "në librin e telefonit",
        "arabic": "في دليل الهاتف"
      }
    },
    {
      "german": "im Internet",
      "translations": {
        "english": "on the internet",
        "ukrainian": "в інтернеті",
        "polish": "w internecie",
        "albanian": "në internet",
        "arabic": "على الإنترنت"
      }
    },
    {
      "german": "in Ihrer Nähe",
      "translations": {
        "english": "near you",
        "ukrainian": "поблизу вас",
        "polish": "w pobliżu",
        "albanian": "afër jush",
        "arabic": "بالقرب منك"
      }
    },
    {
      "german": "was soll ich machen?",
      "translations": {
        "english": "what should I do?",
        "ukrainian": "що мені робити?",
        "polish": "co powinienem robić?",
        "albanian": "çfarë duhet të bëj?",
        "arabic": "ماذا يجب أن أفعل؟"
      }
    },
    {
      "german": "nimm doch Tabletten",
      "translations": {
        "english": "take some tablets",
        "ukrainian": "візьми таблетки",
        "polish": "weź tabletki",
        "albanian": "merr tableta",
        "arabic": "خذ بعض الأقراص"
      }
    },
    {
      "german": "du sollst Tabletten nehmen",
      "translations": {
        "english": "you should take tablets",
        "ukrainian": "ти повинен прийняти таблетки",
        "polish": "powinieneś wziąć tabletki",
        "albanian": "ti duhet të marrësh tableta",
        "arabic": "يجب أن تأخذ أقراص"
      }
    },
    {
      "german": "die Ärztin sagt, ich soll",
      "translations": {
        "english": "the doctor says I should",
        "ukrainian": "лікар каже, що я повинен",
        "polish": "lekarka mówi, że powinienem",
        "albanian": "mjekja thotë se duhet",
        "arabic": "الطبيبة تقول يجب أن"
      }
    },
    {
      "german": "viel Tee trinken",
      "translations": {
        "english": "drink a lot of tea",
        "ukrainian": "пити багато чаю",
        "polish": "pić dużo herbaty",
        "albanian": "të pish shumë çaj",
        "arabic": "شرب الكثير من الشاي"
      }
    },
    {
      "german": "Gymnastik machen",
      "translations": {
        "english": "to do gymnastics",
        "ukrainian": "робити гімнастику",
        "polish": "ćwiczyć gimnastykę",
        "albanian": "të bësh gjimnastikë",
        "arabic": "ممارسة الجمباز"
      }
    },
    {
      "german": "nicht schwer tragen",
      "translations": {
        "english": "not carry heavy things",
        "ukrainian": "не носити важкого",
        "polish": "nie nosić ciężkich rzeczy",
        "albanian": "të mos mbash gjëra të rënda",
        "arabic": "عدم حمل أشياء ثقيلة"
      }
    },
    {
      "german": "schwimmen gehen",
      "translations": {
        "english": "to go swimming",
        "ukrainian": "йти плавати",
        "polish": "iść pływać",
        "albanian": "të shkosh të notosh",
        "arabic": "الذهاب للسباحة"
      }
    },
    {
      "german": "im Bett bleiben",
      "translations": {
        "english": "to stay in bed",
        "ukrainian": "залишатися в ліжку",
        "polish": "zostać w łóżku",
        "albanian": "të rrish në shtrat",
        "arabic": "البقاء في السرير"
      }
    },
    {
      "german": "ins Krankenhaus müssen",
      "translations": {
        "english": "to have to go to the hospital",
        "ukrainian": "мусити йти в лікарню",
        "polish": "musieć iść do szpitala",
        "albanian": "të duhet të shkosh në spital",
        "arabic": "يجب الذهاب إلى المستشفى"
      }
    },
    {
      "german": "sofort operieren",
      "translations": {
        "english": "to operate immediately",
        "ukrainian": "негайно оперувати",
        "polish": "natychmiast operować",
        "albanian": "të operoj menjëherë",
        "arabic": "إجراء عملية فوراً"
      }
    },
    {
      "german": "es geht schon besser",
      "translations": {
        "english": "it's already getting better",
        "ukrainian": "вже краще",
        "polish": "już lepiej",
        "albanian": "tashmë më mirë",
        "arabic": "الحالة تتحسن"
      }
    },
    {
      "german": "nach Hause gehen",
      "translations": {
        "english": "to go home",
        "ukrainian": "йти додому",
        "polish": "iść do domu",
        "albanian": "të shkosh në shtëpi",
        "arabic": "الذهاب إلى المنزل"
      }
    },
    {
      "german": "wann soll ich Sie abholen?",
      "translations": {
        "english": "when should I pick you up?",
        "ukrainian": "коли мені вас забрати?",
        "polish": "kiedy mam Cię odebrać?",
        "albanian": "kur duhet t'ju marr?",
        "arabic": "متى يجب أن آتي لاصطحابك؟"
      }
    },
    {
      "german": "am besten um elf Uhr",
      "translations": {
        "english": "best at eleven o'clock",
        "ukrainian": "найкраще об одинадцятій",
        "polish": "najlepiej o jedenastej",
        "albanian": "më mirë në orën njëmbëdhjetë",
        "arabic": "الأفضل في الساعة الحادية عشرة"
      }
    },
    {
      "german": "brauchst du dein Tablet?",
      "translations": {
        "english": "do you need your tablet?",
        "ukrainian": "чи потребуєш ти свій планшет?",
        "polish": "czy potrzebujesz swojego tabletu?",
        "albanian": "a të duhet tableti yt?",
        "arabic": "هل تحتاج جهازك اللوحي؟"
      }
    },
    {
      "german": "nein, ich brauche es nicht",
      "translations": {
        "english": "no, I don't need it",
        "ukrainian": "ні, мені це не потрібно",
        "polish": "nie, nie potrzebuję tego",
        "albanian": "jo, nuk më duhet",
        "arabic": "لا، لست بحاجة إليه"
      }
    },
    {
      "german": "soll ich mitbringen?",
      "translations": {
        "english": "should I bring along?",
        "ukrainian": "чи повинен я принести з собою?",
        "polish": "czy powinienem przynieść ze sobą?",
        "albanian": "a duhet të sjell?",
        "arabic": "هل يجب أن أحضر معي؟"
      }
    },
    {
      "german": "ja, bitte bring ihn mit",
      "translations": {
        "english": "yes, please bring it",
        "ukrainian": "так, будь ласка, принеси його",
        "polish": "tak, proszę go przynieś",
        "albanian": "po, të lutem sille",
        "arabic": "نعم، من فضلك أحضره"
      }
    },
    {
      "german": "einen Notruf machen",
      "translations": {
        "english": "to make an emergency call",
        "ukrainian": "зробити виклик швидкої",
        "polish": "wykonać wezwanie pomocy",
        "albanian": "të bësh një thirrje urgjence",
        "arabic": "إجراء مكالمة طوارئ"
      }
    },
    {
      "german": "es gibt hier einen Unfall",
      "translations": {
        "english": "there is an accident here",
        "ukrainian": "тут сталася аварія",
        "polish": "jest tu wypadek",
        "albanian": "ka një aksident këtu",
        "arabic": "هناك حادث هنا"
      }
    },
    {
      "german": "wo sind Sie?",
      "translations": {
        "english": "where are you?",
        "ukrainian": "де ви?",
        "polish": "gdzie jesteś?",
        "albanian": "ku jeni?",
        "arabic": "أين أنت؟"
      }
    },
    {
      "german": "ich bin in der Bahnhofstraße",
      "translations": {
        "english": "I am on Bahnhof Street",
        "ukrainian": "я на вулиці Банхофштрасе",
        "polish": "jestem na ulicy Dworcowej",
        "albanian": "unë jam në rrugën e stacionit",
        "arabic": "أنا في شارع المحطة"
      }
    },
    {
      "german": "wie viele Personen sind verletzt?",
      "translations": {
        "english": "how many people are injured?",
        "ukrainian": "скільки людей поранено?",
        "polish": "ile osób jest rannych?",
        "albanian": "sa persona janë të lënduar?",
        "arabic": "كم شخص مصاب؟"
      }
    },
    {
      "german": "ich glaube zwei Personen",
      "translations": {
        "english": "I think two people",
        "ukrainian": "я думаю, дві людини",
        "polish": "myślę, że dwie osoby",
        "albanian": "mendoj dy persona",
        "arabic": "أعتقد شخصين"
      }
    },
    {
      "german": "ein Mann und ein Kind",
      "translations": {
        "english": "a man and a child",
        "ukrainian": "чоловік і дитина",
        "polish": "mężczyzna i dziecko",
        "albanian": "një burrë dhe një fëmijë",
        "arabic": "رجل وطفل"
      }
    },
    {
      "german": "bitte kommen Sie schnell",
      "translations": {
        "english": "please come quickly",
        "ukrainian": "будь ласка, приїжджайте швидко",
        "polish": "proszę przyjechać szybko",
        "albanian": "ju lutem ejani shpejt",
        "arabic": "من فضلك تعال بسرعة"
      }
    },
    {
      "german": "es ist dringend",
      "translations": {
        "english": "it's urgent",
        "ukrainian": "це терміново",
        "polish": "to pilne",
        "albanian": "është urgjente",
        "arabic": "إنه عاجل"
      }
    },
    {
      "german": "ich schicke einen Notarzt",
      "translations": {
        "english": "I'm sending an emergency doctor",
        "ukrainian": "я відправляю лікаря швидкої",
        "polish": "wysyłam lekarza pogotowia",
        "albanian": "po dërgoj një mjek urgjence",
        "arabic": "أرسل طبيب طوارئ"
      }
    },
    {
      "german": "er kommt in wenigen Minuten",
      "translations": {
        "english": "he comes in a few minutes",
        "ukrainian": "він приїде за кілька хвилин",
        "polish": "on przyjeżdża za kilka minut",
        "albanian": "ai vjen në pak minuta",
        "arabic": "سيأتي خلال دقائق قليلة"
      }
    },
    {
      "german": "bitte legen Sie nicht auf",
      "translations": {
        "english": "please don't hang up",
        "ukrainian": "будь ласка, не кладіть слухавку",
        "polish": "proszę nie odkładać słuchawki",
        "albanian": "ju lutem mos e mbyllni",
        "arabic": "من فضلك لا تغلق الخط"
      }
    },
    {
      "german": "in einem Haus gibt es Feuer",
      "translations": {
        "english": "there is fire in a house",
        "ukrainian": "в будинку пожежа",
        "polish": "w domu jest pożar",
        "albanian": "ka zjarr në një shtëpi",
        "arabic": "هناك حريق في منزل"
      }
    },
    {
      "german": "keine Personen mehr im Haus",
      "translations": {
        "english": "no more people in the house",
        "ukrainian": "більше немає людей у будинку",
        "polish": "nie ma już ludzi w domu",
        "albanian": "nuk ka më persona në shtëpi",
        "arabic": "لا يوجد أشخاص في المنزل"
      }
    },
    {
      "german": "die Hausbewohner stehen auf der Straße",
      "translations": {
        "english": "the residents stand on the street",
        "ukrainian": "мешканці будинку стоять на вулиці",
        "polish": "mieszkańcy domu stoją na ulicy",
        "albanian": "banorët e shtëpisë qëndrojnë në rrugë",
        "arabic": "سكان المنزل يقفون في الشارع"
      }
    },
    {
      "german": "die Feuerwehr soll schnell kommen",
      "translations": {
        "english": "the fire department should come quickly",
        "ukrainian": "пожежна служба повинна швидко приїхати",
        "polish": "straż pożarna powinna szybko przyjechać",
        "albanian": "zjarrfikësit duhet të vijnë shpejt",
        "arabic": "يجب أن تأتي مطافئ الحريق بسرعة"
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
        "arabic": "أنا أركب الدراجة الهوائية كثيرا"
      }
    },
    {
      "german": "Ich fliege manchmal",
      "translations": {
        "english": "I sometimes fly",
        "ukrainian": "Я іноді літаю",
        "polish": "Czasami lecę",
        "albanian": "Ndonjëherë fluturoj",
        "arabic": "أنا أطير أحيانا"
      }
    },
    {
      "german": "Ich gehe selten zu Fuß",
      "translations": {
        "english": "I rarely walk",
        "ukrainian": "Я рідко ходжу пішки",
        "polish": "Rzadko chodzę pieszo",
        "albanian": "Rrallë ec",
        "arabic": "أنا أمشي نادرا"
      }
    },
    {
      "german": "Wie komme ich zum Bahnhof?",
      "translations": {
        "english": "How do I get to the train station?",
        "ukrainian": "Як мені дістатися до вокзалу?",
        "polish": "Jak dojdę na dworzec?",
        "albanian": "Si të shkoj në stacion?",
        "arabic": "كيف أصل إلى محطة القطار؟"
      }
    },
    {
      "german": "Entschuldigung, ich suche den Bahnhof",
      "translations": {
        "english": "Excuse me, I'm looking for the train station",
        "ukrainian": "Вибачте, я шукаю вокзал",
        "polish": "Przepraszam, szukam dworca",
        "albanian": "Më falni, po kërkoj stacionin",
        "arabic": "عذرا، أنا أبحث عن محطة القطار"
      }
    },
    {
      "german": "Gehen Sie geradeaus",
      "translations": {
        "english": "Go straight ahead",
        "ukrainian": "Йдіть прямо",
        "polish": "Idź prosto",
        "albanian": "Shkoni drejt",
        "arabic": "اذهب مباشرة"
      }
    },
    {
      "german": "Fahren Sie zuerst diese Straße geradeaus",
      "translations": {
        "english": "First drive straight down this street",
        "ukrainian": "Спочатку їдьте прямо цією вулицею",
        "polish": "Najpierw jedź prosto tą ulicą",
        "albanian": "Fillimisht udhëtoni drejt në këtë rrugë",
        "arabic": "أولا اقد مباشرة في هذا الشارع"
      }
    },
    {
      "german": "An der zweiten Kreuzung links",
      "translations": {
        "english": "At the second intersection turn left",
        "ukrainian": "На другому перехресті наліво",
        "polish": "Na drugim skrzyżowaniu w lewo",
        "albanian": "Në kryqëzimin e dytë majtas",
        "arabic": "في التقاطع الثاني إلى اليسار"
      }
    },
    {
      "german": "Dann kommen Sie zum Bahnhof",
      "translations": {
        "english": "Then you'll reach the train station",
        "ukrainian": "Тоді ви дійдете до вокзалу",
        "polish": "Wtedy dojdziesz na dworzec",
        "albanian": "Pastaj do të arrini në stacion",
        "arabic": "ثم ستصل إلى محطة القطار"
      }
    },
    {
      "german": "Fahren Sie gern mit dem Fahrrad?",
      "translations": {
        "english": "Do you like to ride a bicycle?",
        "ukrainian": "Вам подобається їздити на велосипеді?",
        "polish": "Lubisz jeździć rowerem?",
        "albanian": "A të pëlqen të udhëtosh me biçikletë?",
        "arabic": "هل تحب ركوب الدراجة الهوائية؟"
      }
    },
    {
      "german": "Das Fahrrad ist unbequem",
      "translations": {
        "english": "The bicycle is uncomfortable",
        "ukrainian": "Велосипед незручний",
        "polish": "Rower jest niewygodny",
        "albanian": "Biçikleta është e pakëndshme",
        "arabic": "الدراجة الهوائية غير مريحة"
      }
    },
    {
      "german": "Fahrradfahren ist gesund",
      "translations": {
        "english": "Cycling is healthy",
        "ukrainian": "Їзда на велосипеді корисна для здоров'я",
        "polish": "Jazda na rowerze jest zdrowa",
        "albanian": "Të ecësh me biçikletë është i shëndetshëm",
        "arabic": "ركوب الدراجة الهوائية صحي"
      }
    },
    {
      "german": "Wer darf zuerst fahren?",
      "translations": {
        "english": "Who may go first?",
        "ukrainian": "Хто має право проїхати першим?",
        "polish": "Kto może jechać pierwszy?",
        "albanian": "Kush mund të shkojë i pari?",
        "arabic": "من يحق له أن يذهب أولا؟"
      }
    },
    {
      "german": "Was darf man hier (nicht)?",
      "translations": {
        "english": "What is (not) allowed here?",
        "ukrainian": "Що тут (не) дозволено?",
        "polish": "Co (nie) wolno tutaj?",
        "albanian": "Çfarë (nuk) lejohet këtu?",
        "arabic": "ما الذي (لا) يُسمح به هنا؟"
      }
    },
    {
      "german": "Was muss man tun?",
      "translations": {
        "english": "What must one do?",
        "ukrainian": "Що треба робити?",
        "polish": "Co trzeba robić?",
        "albanian": "Çfarë duhet të bëjë?",
        "arabic": "ما الذي يجب فعله؟"
      }
    },
    {
      "german": "Wie lange brauchen Sie zur Arbeit?",
      "translations": {
        "english": "How long does it take you to get to work?",
        "ukrainian": "Скільки часу вам треба на дорогу до роботи?",
        "polish": "Ile czasu potrzebujesz do pracy?",
        "albanian": "Sa kohë të duhet për në punë?",
        "arabic": "كم من الوقت تحتاج للوصول إلى العمل؟"
      }
    },
    {
      "german": "Ich brauche eine halbe Stunde",
      "translations": {
        "english": "I need half an hour",
        "ukrainian": "Мені треба півгодини",
        "polish": "Potrzebuję pół godziny",
        "albanian": "Më duhet gjysmë ore",
        "arabic": "أحتاج نصف ساعة"
      }
    },
    {
      "german": "Wo arbeiten Sie?",
      "translations": {
        "english": "Where do you work?",
        "ukrainian": "Де ви працюєте?",
        "polish": "Gdzie pracujesz?",
        "albanian": "Ku punoni?",
        "arabic": "أين تعمل؟"
      }
    },
    {
      "german": "Wie kommen Sie zur Arbeit?",
      "translations": {
        "english": "How do you get to work?",
        "ukrainian": "Як ви дістаєтеся на роботу?",
        "polish": "Jak dojeżdżasz do pracy?",
        "albanian": "Si shkoni në punë?",
        "arabic": "كيف تذهب إلى العمل؟"
      }
    },
    {
      "german": "Entschuldigung, wie komme ich zum Theaterplatz?",
      "translations": {
        "english": "Excuse me, how do I get to Theater Square?",
        "ukrainian": "Вибачте, як мені дістатися до Театральної площі?",
        "polish": "Przepraszam, jak dojdę do Placu Teatralnego?",
        "albanian": "Më falni, si të shkoj në Sheshin e Teatrit?",
        "arabic": "عذرا، كيف أصل إلى ساحة المسرح؟"
      }
    },
    {
      "german": "Das ist weit",
      "translations": {
        "english": "That's far",
        "ukrainian": "Це далеко",
        "polish": "To jest daleko",
        "albanian": "Është larg",
        "arabic": "هذا بعيد"
      }
    },
    {
      "german": "Sie müssen die U-Bahn nehmen",
      "translations": {
        "english": "You have to take the subway",
        "ukrainian": "Вам треба їхати метро",
        "polish": "Musisz jechać metrem",
        "albanian": "Duhet të merrni metron",
        "arabic": "يجب أن تأخذ المترو"
      }
    },
    {
      "german": "Nehmen Sie die Linie 2 Richtung Zoo",
      "translations": {
        "english": "Take line 2 towards the zoo",
        "ukrainian": "Їдьте лінією 2 у напрямку зоопарку",
        "polish": "Weź linię 2 w kierunku zoo",
        "albanian": "Merrni linjën 2 drejt kopshtit zoologjik",
        "arabic": "خذ الخط 2 باتجاه حديقة الحيوانات"
      }
    },
    {
      "german": "Fahren Sie fünf Stationen",
      "translations": {
        "english": "Go five stations",
        "ukrainian": "Їдьте п'ять станцій",
        "polish": "Jedź pięć stacji",
        "albanian": "Shkoni pesë stacione",
        "arabic": "اذهب خمس محطات"
      }
    },
    {
      "german": "Dann kommen Sie zum Südbahnhof",
      "translations": {
        "english": "Then you'll reach the South Station",
        "ukrainian": "Тоді ви дійдете до Południowego вокзалу",
        "polish": "Wtedy dojdziesz na Dworzec Południowy",
        "albanian": "Pastaj do të arrini në Stacionin Jugor",
        "arabic": "ثم ستصل إلى المحطة الجنوبية"
      }
    },
    {
      "german": "Bei Schild vier darf man nicht geradeaus fahren",
      "translations": {
        "english": "At sign four, one is not allowed to go straight",
        "ukrainian": "При знаку номер чотири не можна їхати прямо",
        "polish": "Przy znaku cztery nie wolno jechać prosto",
        "albanian": "Te shenja katër nuk lejohet të shkosh drejt",
        "arabic": "عند الإشارة الرابعة لا يُسمح بالذهاب مباشرة"
      }
    },
    {
      "german": "Man muss rechts abbiegen",
      "translations": {
        "english": "One must turn right",
        "ukrainian": "Треба повернути направо",
        "polish": "Trzeba skręcić w prawo",
        "albanian": "Duhet të kthehesh djathtas",
        "arabic": "يجب الانعطاف يمينا"
      }
    },
    {
      "german": "Das Auto muss an der Ampel warten",
      "translations": {
        "english": "The car must wait at the traffic light",
        "ukrainian": "Автомобіль має чекати на світлофорі",
        "polish": "Samochód musi czekać na światłach",
        "albanian": "Makina duhet të presë te semafor",
        "arabic": "السيارة يجب أن تنتظر عند إشارة المرور"
      }
    },
    {
      "german": "Wo wohnen Sie?",
      "translations": {
        "english": "Where do you live?",
        "ukrainian": "Де ви живете?",
        "polish": "Gdzie mieszkasz?",
        "albanian": "Ku jetoni?",
        "arabic": "أين تسكن؟"
      }
    },
    {
      "german": "Gleich hier in der Nähe",
      "translations": {
        "english": "Right here nearby",
        "ukrainian": "Тут поруч",
        "polish": "Tutaj w pobliżu",
        "albanian": "Këtu pranë",
        "arabic": "هنا بالقرب"
      }
    },
    {
      "german": "Vielen Dank",
      "translations": {
        "english": "Thank you very much",
        "ukrainian": "Дуже дякую",
        "polish": "Dziękuję bardzo",
        "albanian": "Faleminderit shumë",
        "arabic": "شكرا جزيلا"
      }
    },
    {
      "german": "Ja, genau",
      "translations": {
        "english": "Yes, exactly",
        "ukrainian": "Так, точно",
        "polish": "Tak, dokładnie",
        "albanian": "Po, saktësisht",
        "arabic": "نعم، بالضبط"
      }
    },
    {
      "german": "Wie oft benutzen Sie die Verkehrsmittel?",
      "translations": {
        "english": "How often do you use public transportation?",
        "ukrainian": "Як часто ви користуєтеся громадським транспортом?",
        "polish": "Jak często korzystasz z transportu publicznego?",
        "albanian": "Sa shpesh përdorni transportin publik?",
        "arabic": "كم مرة تستخدم وسائل النقل العامة؟"
      }
    },
    {
      "german": "Ich fahre manchmal mit dem Fahrrad, manchmal mit dem Auto",
      "translations": {
        "english": "Sometimes I ride a bike, sometimes I drive a car",
        "ukrainian": "Іноді я їжджу на велосипеді, іноді на машині",
        "polish": "Czasami jeżdżę rowerem, czasami samochodem",
        "albanian": "Ndonjëherë udhëtoj me biçikletë, ndonjëherë me makinë",
        "arabic": "أحيانا أركب الدراجة، أحيانا أقود السيارة"
      }
    },
    {
      "german": "Darf ich hier parken?",
      "translations": {
        "english": "May I park here?",
        "ukrainian": "Чи можна тут паркуватися?",
        "polish": "Czy mogę tutaj zaparkować?",
        "albanian": "A mund të parkoj këtu?",
        "arabic": "هل يمكنني أن أركن هنا؟"
      }
    },
    {
      "german": "Ja, Sie dürfen hier parken",
      "translations": {
        "english": "Yes, you may park here",
        "ukrainian": "Так, ви можете тут паркуватися",
        "polish": "Tak, możesz tutaj zaparkować",
        "albanian": "Po, mund të parkoni këtu",
        "arabic": "نعم، يمكنك أن تركن هنا"
      }
    },
    {
      "german": "Wir müssen umsteigen",
      "translations": {
        "english": "We have to change (trains/buses)",
        "ukrainian": "Нам треба пересідати",
        "polish": "Musimy się przesiąść",
        "albanian": "Duhet të ndërrojmë",
        "arabic": "يجب أن نغير"
      }
    },
    {
      "german": "Kinder bis sechs Jahre müssen auf dem Bürgersteig fahren",
      "translations": {
        "english": "Children up to six years must ride on the sidewalk",
        "ukrainian": "Діти до шести років повинні їхати тротуаром",
        "polish": "Dzieci do sześciu lat muszą jeździć po chodniku",
        "albanian": "Fëmijët deri në gjashtë vjeç duhet të ecin në trotuar",
        "arabic": "الأطفال حتى ست سنوات يجب أن يركبوا على الرصيف"
      }
    },
    {
      "german": "Im Bus sind viele Fahrgäste",
      "translations": {
        "english": "There are many passengers in the bus",
        "ukrainian": "В автобусі багато пасажирів",
        "polish": "W autobusie jest wielu pasażerów",
        "albanian": "Në autobus ka shumë pasagjerë",
        "arabic": "في الحافلة ركاب كثيرون"
      }
    },
    {
      "german": "Die Sprachschule ist über der Post",
      "translations": {
        "english": "The language school is above the post office",
        "ukrainian": "Мовна школа знаходиться над поштою",
        "polish": "Szkoła językowa jest nad pocztą",
        "albanian": "Shkolla e gjuhëve është mbi postë",
        "arabic": "مدرسة اللغة فوق مكتب البريد"
      }
    },
    {
      "german": "Auf dem Platz sind Bäume",
      "translations": {
        "english": "There are trees on the square",
        "ukrainian": "На площі є дерева",
        "polish": "Na placu są drzewa",
        "albanian": "Në shesh ka pemë",
        "arabic": "في الساحة أشجار"
      }
    },
    {
      "german": "Im Kino kann man Filme sehen",
      "translations": {
        "english": "You can watch movies in the cinema",
        "ukrainian": "У кінотеатрі можна дивитися фільми",
        "polish": "W kinie można oglądać filmy",
        "albanian": "Në kinema mund të shikosh filma",
        "arabic": "في السينما يمكن مشاهدة الأفلام"
      }
    },
    {
      "german": "An der Haltestelle warten viele Menschen",
      "translations": {
        "english": "Many people are waiting at the bus stop",
        "ukrainian": "На зупинці чекає багато людей",
        "polish": "Na przystanku czeka wielu ludzi",
        "albanian": "Në stacion presin shumë njerëz",
        "arabic": "كثير من الناس ينتظرون في محطة الحافلات"
      }
    },
    {
      "german": "Der Bus kommt nicht",
      "translations": {
        "english": "The bus is not coming",
        "ukrainian": "Автобус не йде",
        "polish": "Autobus nie przyjeżdża",
        "albanian": "Autobusi nuk po vjen",
        "arabic": "الحافلة لا تأتي"
      }
    },
    {
      "german": "Ich gehe zu Fuß zum Bahnhof und fahre mit dem Zug nach...",
      "translations": {
        "english": "I walk to the station and take the train to...",
        "ukrainian": "Я йду пішки до вокзалу і їжджу поїздом до...",
        "polish": "Idę pieszo na dworzec i jadę pociągiem do...",
        "albanian": "Shkoj në këmbë në stacion dhe udhëtoj me tren në...",
        "arabic": "أمشي إلى المحطة وأسافر بالقطار إلى..."
      }
    }
  ]
});
  // ... add more sentences for A1.2 here
export const A1_2_SENTENCE_SECTIONS = Object.keys(a1_2_Sentences).map(Number);