export type ExerciseType = 'fill-in-the-blank' | 'multiple-choice' | 'sentence-scramble' | 'matching';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: {
    en: string;
    pl: string;
    uk: string;
    sq: string;
  };
  context?: string | string[];
  options?: string[];
  correctAnswer: string | string[];
  hint?: string;
}

export interface GrammarTopic {
  id: string;
  moduleId: number;
  title: string;
  description: string;
  exercises: Exercise[];
}

export const module7Grammar: GrammarTopic[] = [
  // ===== VERBEN (VERBS) =====
  {
    id: 'present-tense-regular',
    moduleId: 1,
    title: 'Present Tense - Regular Verbs',
    description: "Regular verbs follow the pattern: stem + endings (-e, -st, -t, -en, -t, -en). Examples: lernen, wohnen, kommen, machen, heißen.",
    exercises: [
      {
        id: 'm1-reg-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct form of 'lernen' (ich).",
          pl: "Uzupełnij poprawną formą 'lernen' (ich).",
          uk: "Доповніть правильною формою 'lernen' (ich).",
          sq: "Plotësoni me formën e saktë të 'lernen' (ich)."
        },
        context: "Ich ______ Deutsch.",
        correctAnswer: "lerne",
      },
      {
        id: 'm1-reg-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct form of 'wohnen' (du).",
          pl: "Uzupełnij poprawną formą 'wohnen' (du).",
          uk: "Доповніть правильною формою 'wohnen' (du).",
          sq: "Plotësoni me formën e saktë të 'wohnen' (du)."
        },
        context: "Wo ______ du?",
        correctAnswer: "wohnst",
      },
      {
        id: 'm1-reg-3',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'kommen' (er).",
          pl: "Wybierz poprawną formę 'kommen' (er).",
          uk: "Виберіть правильну форму 'kommen' (er).",
          sq: "Zgjidhni formën e saktë të 'kommen' (er)."
        },
        context: "Er ______ aus Deutschland.",
        options: ["komme", "kommst", "kommt", "kommen"],
        correctAnswer: "kommt",
      },
      {
        id: 'm1-reg-4',
        type: 'sentence-scramble',
        question: {
          en: "Build correct sentence.",
          pl: "Zbuduj poprawne zdanie.",
          uk: "Побудуйте правильне речення.",
          sq: "Ndërtoni fjalinë e saktë."
        },
        context: ["Wir", "machen", "heute", "Hausaufgaben"],
        correctAnswer: "Wir machen heute Hausaufgaben",
      },
      {
        id: 'm1-reg-5',
        type: 'matching',
        question: {
          en: "Match pronouns to verb endings for 'heißen'.",
          pl: "Dopasuj zaimki do końcówek czasownika 'heißen'.",
          uk: "Зіставте займенники із закінченнями дієслова 'heißen'.",
          sq: "Përputhni përemrat me mbaresat e foljes 'heißen'."
        },
        context: ["ich", "du", "er/sie/es", "wir"],
        options: ["heißen", "heißt", "heiße", "heißt"],
        correctAnswer: ["heiße", "heißt", "heißt", "heißen"],
      },
      {
        id: 'm1-reg-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'arbeiten' (ihr).",
          pl: "Uzupełnij formą 'arbeiten' (ihr).",
          uk: "Доповніть формою 'arbeiten' (ihr).",
          sq: "Plotësoni me 'arbeiten' (ihr)."
        },
        context: "______ ihr heute?",
        correctAnswer: "Arbeitet",
      },
      {
        id: 'm1-reg-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'spielen' (sie - plural).",
          pl: "Wybierz poprawną formę 'spielen' (sie - l.mn.).",
          uk: "Виберіть правильну форму 'spielen' (sie - множина).",
          sq: "Zgjidhni formën e saktë të 'spielen' (sie - shumës)."
        },
        context: "Sie ______ gern Fußball.",
        options: ["spiele", "spielst", "spielt", "spielen"],
        correctAnswer: "spielen",
      },
      {
        id: 'm1-reg-8',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'wohnen'.",
          pl: "Zbuduj zdanie z 'wohnen'.",
          uk: "Побудуйте речення з 'wohnen'.",
          sq: "Ndërtoni një fjali me 'wohnen'."
        },
        context: ["Sie", "wohnt", "in", "München"],
        correctAnswer: "Sie wohnt in München",
      },
      {
        id: 'm1-reg-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'kaufen' (wir).",
          pl: "Uzupełnij formą 'kaufen' (wir).",
          uk: "Доповніть формою 'kaufen' (wir).",
          sq: "Plotësoni me 'kaufen' (wir)."
        },
        context: "Wir ______ Brot im Supermarkt.",
        correctAnswer: "kaufen",
      },
      {
        id: 'm1-reg-10',
        type: 'matching',
        question: {
          en: "Match verbs to their correct 'du' forms.",
          pl: "Dopasuj czasowniki do ich poprawnych form 'du'.",
          uk: "Зіставте дієслова з їхніми правильними формами 'du'.",
          sq: "Përputhni foljet me format e tyre të sakta 'du'."
        },
        context: ["tanzen", "fragen", "antworten", "hören"],
        options: ["antwortest", "tanzt", "fragst", "hörst"],
        correctAnswer: ["tanzt", "fragst", "antwortest", "hörst"],
      }
    ]
  },
  {
    id: 'present-tense-irregular',
    moduleId: 1,
    title: 'Present Tense - Irregular Verbs (Stem-changing)',
    description: "Some verbs change their stem vowel in du and er/sie/es forms: sprechen (du sprichst), fahren (du fährst), lesen (du liest), sehen (du siehst), nehmen (du nimmst).",
    exercises: [
      {
        id: 'm1-irreg-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'sprechen' (du).",
          pl: "Uzupełnij formą 'sprechen' (du).",
          uk: "Доповніть формою 'sprechen' (du).",
          sq: "Plotësoni me 'sprechen' (du)."
        },
        context: "______ du Englisch?",
        correctAnswer: "Sprichst",
      },
      {
        id: 'm1-irreg-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'fahren' (er).",
          pl: "Wybierz poprawną formę 'fahren' (er).",
          uk: "Виберіть правильну форму 'fahren' (er).",
          sq: "Zgjidhni formën e saktë të 'fahren' (er)."
        },
        context: "Er ______ mit dem Auto.",
        options: ["fahre", "fahrst", "fährt", "fahren"],
        correctAnswer: "fährt",
      },
      {
        id: 'm1-irreg-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'lesen' (sie).",
          pl: "Uzupełnij formą 'lesen' (sie).",
          uk: "Доповніть формою 'lesen' (sie).",
          sq: "Plotësoni me 'lesen' (sie)."
        },
        context: "Sie ______ gern Bücher.",
        correctAnswer: "liest",
      },
      {
        id: 'm1-irreg-4',
        type: 'matching',
        question: {
          en: "Match verbs to their correct du-forms.",
          pl: "Dopasuj czasowniki do ich poprawnych form 'du'.",
          uk: "Зіставте дієслова з їхніми правильними формами 'du'.",
          sq: "Përputhni foljet me format e tyre të sakta 'du'."
        },
        context: ["sehen", "nehmen", "sprechen", "fahren"],
        options: ["fährst", "siehst", "sprichst", "nimmst"],
        correctAnswer: ["siehst", "nimmst", "sprichst", "fährst"],
      },
      {
        id: 'm1-irreg-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with irregular verb.",
          pl: "Zbuduj zdanie z czasownikiem nieregularnym.",
          uk: "Побудуйте речення з неправильним дієсловом.",
          sq: "Ndërtoni një fjali me folje të parregullt."
        },
        context: ["Du", "nimmst", "den Bus", "zur Arbeit"],
        correctAnswer: "Du nimmst den Bus zur Arbeit",
      },
      {
        id: 'm1-irreg-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'essen' (ich).",
          pl: "Uzupełnij formą 'essen' (ich).",
          uk: "Доповніть формою 'essen' (ich).",
          sq: "Plotësoni me 'essen' (ich)."
        },
        context: "Ich ______ gern Pizza.",
        correctAnswer: "esse",
      },
      {
        id: 'm1-irreg-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'schlafen' (du).",
          pl: "Wybierz poprawną formę 'schlafen' (du).",
          uk: "Виберіть правильну форму 'schlafen' (du).",
          sq: "Zgjidhni formën e saktë të 'schlafen' (du)."
        },
        context: "Wie lange ______ du?",
        options: ["schlafe", "schläfst", "schläft", "schlafen"],
        correctAnswer: "schläfst",
      },
      {
        id: 'm1-irreg-8',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'geben' (er).",
          pl: "Uzupełnij formą 'geben' (er).",
          uk: "Доповніть формою 'geben' (er).",
          sq: "Plotësoni me 'geben' (er)."
        },
        context: "Er ______ mir das Buch.",
        correctAnswer: "gibt",
      },
      {
        id: 'm1-irreg-9',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'laufen'.",
          pl: "Zbuduj zdanie z 'laufen'.",
          uk: "Побудуйте речення з 'laufen'.",
          sq: "Ndërtoni një fjali me 'laufen'."
        },
        context: ["Sie", "läuft", "jeden Morgen"],
        correctAnswer: "Sie läuft jeden Morgen",
      },
      {
        id: 'm1-irreg-10',
        type: 'matching',
        question: {
          en: "Match infinitive to er/sie/es forms.",
          pl: "Dopasuj bezokolicznik do form er/sie/es.",
          uk: "Зіставте інфінітив з формами er/sie/es.",
          sq: "Përputhni paskajoren me format er/sie/es."
        },
        context: ["helfen", "waschen", "tragen", "fallen"],
        options: ["fällt", "hilft", "trägt", "wäscht"],
        correctAnswer: ["hilft", "wäscht", "trägt", "fällt"],
      }
    ]
  },
  {
    id: 'auxiliary-verbs-sein-haben',
    moduleId: 1,
    title: 'Auxiliary Verbs: sein and haben',
    description: "'sein' (to be) and 'haben' (to have) are the most important auxiliary verbs. They are highly irregular and must be memorized.",
    exercises: [
      {
        id: 'm1-aux-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct form of 'sein' (ich).",
          pl: "Uzupełnij poprawną formą 'sein' (ich).",
          uk: "Доповніть правильною формою 'sein' (ich).",
          sq: "Plotësoni me formën e saktë të 'sein' (ich)."
        },
        context: "Ich ______ Student.",
        correctAnswer: "bin",
      },
      {
        id: 'm1-aux-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'haben' (wir).",
          pl: "Wybierz poprawną formę 'haben' (wir).",
          uk: "Виберіть правильну форму 'haben' (wir).",
          sq: "Zgjidhni formën e saktë të 'haben' (wir)."
        },
        context: "Wir ______ Zeit.",
        options: ["habe", "hast", "hat", "haben"],
        correctAnswer: "haben",
      },
      {
        id: 'm1-aux-3',
        type: 'matching',
        question: {
          en: "Match pronouns to correct forms of 'sein'.",
          pl: "Dopasuj zaimki do poprawnych form 'sein'.",
          uk: "Зіставте займенники з правильними формами 'sein'.",
          sq: "Përputhni përemrat me format e sakta të 'sein'."
        },
        context: ["ich", "du", "er/sie/es", "ihr"],
        options: ["seid", "bist", "bin", "ist"],
        correctAnswer: ["bin", "bist", "ist", "seid"],
      },
      {
        id: 'm1-aux-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'haben' (sie - plural).",
          pl: "Uzupełnij formą 'haben' (sie - l.mn.).",
          uk: "Доповніть формою 'haben' (sie - множина).",
          sq: "Plotësoni me 'haben' (sie - shumës)."
        },
        context: "Sie ______ ein Auto.",
        correctAnswer: "haben",
      },
      {
        id: 'm1-aux-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'sein'.",
          pl: "Zbuduj zdanie z 'sein'.",
          uk: "Побудуйте речення з 'sein'.",
          sq: "Ndërtoni një fjali me 'sein'."
        },
        context: ["Das", "ist", "mein", "Bruder"],
        correctAnswer: "Das ist mein Bruder",
      },
      {
        id: 'm1-aux-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'sein' (du).",
          pl: "Uzupełnij formą 'sein' (du).",
          uk: "Доповніть формою 'sein' (du).",
          sq: "Plotësoni me 'sein' (du)."
        },
        context: "______ du müde?",
        correctAnswer: "Bist",
      },
      {
        id: 'm1-aux-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'haben' (er).",
          pl: "Wybierz poprawną formę 'haben' (er).",
          uk: "Виберіть правильну форму 'haben' (er).",
          sq: "Zgjidhni formën e saktë të 'haben' (er)."
        },
        context: "Er ______ Hunger.",
        options: ["habe", "hast", "hat", "haben"],
        correctAnswer: "hat",
      },
      {
        id: 'm1-aux-8',
        type: 'sentence-scramble',
        question: {
          en: "Build question with 'haben'.",
          pl: "Zbuduj pytanie z 'haben'.",
          uk: "Побудуйте питання з 'haben'.",
          sq: "Ndërtoni pyetje me 'haben'."
        },
        context: ["Haben", "Sie", "Kinder", "?"],
        correctAnswer: "Haben Sie Kinder ?",
      },
      {
        id: 'm1-aux-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'sein' (wir).",
          pl: "Uzupełnij formą 'sein' (wir).",
          uk: "Доповніть формою 'sein' (wir).",
          sq: "Plotësoni me 'sein' (wir)."
        },
        context: "Wir ______ zu Hause.",
        correctAnswer: "sind",
      },
      {
        id: 'm1-aux-10',
        type: 'matching',
        question: {
          en: "Match pronouns to correct forms of 'haben'.",
          pl: "Dopasuj zaimki do poprawnych form 'haben'.",
          uk: "Зіставте займенники з правильними формами 'haben'.",
          sq: "Përputhni përemrat me format e sakta të 'haben'."
        },
        context: ["ich", "du", "ihr", "sie (plural)"],
        options: ["habt", "haben", "habe", "hast"],
        correctAnswer: ["habe", "hast", "habt", "haben"],
      }
    ]
  },
  {
    id: 'modal-verbs-basic',
    moduleId: 2,
    title: 'Modal Verbs: können, wollen, müssen',
    description: "Modal verbs express ability (können), desire (wollen), or necessity (müssen). Pattern: Subject + modal verb (pos. 2) + ... + infinitive (end). Note: ich/er/sie/es forms are identical.",
    exercises: [
      {
        id: 'm2-modal-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'können' (ich).",
          pl: "Uzupełnij formą 'können' (ich).",
          uk: "Доповніть формою 'können' (ich).",
          sq: "Plotësoni me 'können' (ich)."
        },
        context: "Ich ______ gut Deutsch sprechen.",
        correctAnswer: "kann",
      },
      {
        id: 'm2-modal-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'wollen' (du).",
          pl: "Wybierz poprawną formę 'wollen' (du).",
          uk: "Виберіть правильну форму 'wollen' (du).",
          sq: "Zgjidhni formën e saktë të 'wollen' (du)."
        },
        context: "______ du ins Kino gehen?",
        options: ["Will", "Willst", "Wollt", "Wollen"],
        correctAnswer: "Willst",
      },
      {
        id: 'm2-modal-3',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with modal verb (Satzklammer).",
          pl: "Zbuduj zdanie z czasownikiem modalnym (Satzklammer).",
          uk: "Побудуйте речення з модальним дієсловом (Satzklammer).",
          sq: "Ndërtoni një fjali me folje modale (Satzklammer)."
        },
        context: ["Wir", "müssen", "heute", "arbeiten"],
        correctAnswer: "Wir müssen heute arbeiten",
      },
      {
        id: 'm2-modal-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete sentence structure with modal.",
          pl: "Uzupełnij strukturę zdania czasownikiem modalnym.",
          uk: "Доповніть структуру речення модальним дієсловом.",
          sq: "Plotësoni strukturën e fjalisë me folje modale."
        },
        context: "Er ______ am Wochenende nicht ______. (arbeiten/müssen)",
        correctAnswer: ["muss", "arbeiten"],
        hint: "Modal verb at position 2, infinitive at the end.",
      },
      {
        id: 'm2-modal-5',
        type: 'matching',
        question: {
          en: "Match modal verbs to their meanings.",
          pl: "Dopasuj czasowniki modalne do ich znaczeń.",
          uk: "Зіставте модальні дієслова з їхніми значеннями.",
          sq: "Përputhni foljet modale me kuptimet e tyre."
        },
        context: ["können", "wollen", "müssen"],
        options: ["want to/desire", "can/be able to", "must/have to"],
        correctAnswer: ["can/be able to", "want to/desire", "must/have to"],
      },
      {
        id: 'm2-modal-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'dürfen' (Sie).",
          pl: "Uzupełnij formą 'dürfen' (Sie).",
          uk: "Доповніть формою 'dürfen' (Sie).",
          sq: "Plotësoni me 'dürfen' (Sie)."
        },
        context: "______ ich Sie etwas fragen?",
        correctAnswer: "Darf",
      },
      {
        id: 'm2-modal-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct form of 'sollen' (wir).",
          pl: "Wybierz poprawną formę 'sollen' (wir).",
          uk: "Виберіть правильну форму 'sollen' (wir).",
          sq: "Zgjidhni formën e saktë të 'sollen' (wir)."
        },
        context: "Wann ______ wir kommen?",
        options: ["soll", "sollst", "sollen", "sollt"],
        correctAnswer: "sollen",
      },
      {
        id: 'm2-modal-8',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'mögen'.",
          pl: "Zbuduj zdanie z 'mögen'.",
          uk: "Побудуйте речення з 'mögen'.",
          sq: "Ndërtoni një fjali me 'mögen'."
        },
        context: ["Ich", "mag", "Schokolade"],
        correctAnswer: "Ich mag Schokolade",
      },
      {
        id: 'm2-modal-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'können' (ihr).",
          pl: "Uzupełnij formą 'können' (ihr).",
          uk: "Доповніть формою 'können' (ihr).",
          sq: "Plotësoni me 'können' (ihr)."
        },
        context: "______ ihr mir helfen?",
        correctAnswer: "Könnt",
      },
      {
        id: 'm2-modal-10',
        type: 'matching',
        question: {
          en: "Match modal verbs to situations.",
          pl: "Dopasuj czasowniki modalne do sytuacji.",
          uk: "Зіставте модальні дієслова із ситуаціями.",
          sq: "Përputhni foljet modale me situatat."
        },
        context: ["können", "müssen", "dürfen", "sollen"],
        options: ["permission", "recommendation", "ability", "necessity"],
        correctAnswer: ["ability", "necessity", "permission", "recommendation"],
      }
    ]
  },
  {
    id: 'separable-verbs',
    moduleId: 3,
    title: 'Separable Verbs (Trennbare Verben)',
    description: "Separable verbs like einkaufen, aufstehen, anrufen split: prefix goes to sentence end. Example: 'Ich kaufe im Supermarkt ein.' / 'Wann stehst du auf?'",
    exercises: [
      {
        id: 'm3-sep-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with separable verb 'einkaufen' (ich).",
          pl: "Uzupełnij czasownikiem rozdzielnie złożonym 'einkaufen' (ich).",
          uk: "Доповніть роздільним дієсловом 'einkaufen' (ich).",
          sq: "Plotësoni me foljen e ndashme 'einkaufen' (ich)."
        },
        context: "Ich ______ im Supermarkt ______.",
        correctAnswer: ["kaufe", "ein"],
      },
      {
        id: 'm3-sep-2',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with separable verb.",
          pl: "Zbuduj zdanie z czasownikiem rozdzielnie złożonym.",
          uk: "Побудуйте речення з роздільним дієсловом.",
          sq: "Ndërtoni një fjali me folje të ndashme."
        },
        context: ["Du", "stehst", "um 7 Uhr", "auf"],
        correctAnswer: "Du stehst um 7 Uhr auf",
      },
      {
        id: 'm3-sep-3',
        type: 'multiple-choice',
        question: {
          en: "Where does the prefix go in main clauses?",
          pl: "Gdzie w zdaniach głównych umieszcza się przedrostek?",
          uk: "Куди йде префікс у головних реченнях?",
          sq: "Ku shkon parashtesa në fjalitë kryesore?"
        },
        context: "Wir ______ unsere Freunde ______. (anrufen)",
        options: ["anrufen ... ∅", "rufen ... an", "an ... rufen"],
        correctAnswer: "rufen ... an",
      },
      {
        id: 'm3-sep-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'fernsehen' (er).",
          pl: "Uzupełnij formą 'fernsehen' (er).",
          uk: "Доповніть формою 'fernsehen' (er).",
          sq: "Plotësoni me 'fernsehen' (er)."
        },
        context: "Er ______ jeden Abend ______.",
        correctAnswer: ["sieht", "fern"],
      },
      {
        id: 'm3-sep-5',
        type: 'matching',
        question: {
          en: "Match separable verbs to their split forms.",
          pl: "Dopasuj czasowniki rozdzielnie złożone do ich rozdzielonych form.",
          uk: "Зіставте роздільні дієслова з їхніми розділеними формами.",
          sq: "Përputhni foljet e ndashme me format e tyre të ndara."
        },
        context: ["mitkommen", "aufstehen", "einkaufen", "anrufen"],
        options: ["rufe ... an", "stehe ... auf", "kaufe ... ein", "komme ... mit"],
        correctAnswer: ["komme ... mit", "stehe ... auf", "kaufe ... ein", "rufe ... an"],
      },
      {
        id: 'm3-sep-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'abfahren' (der Zug).",
          pl: "Uzupełnij formą 'abfahren' (der Zug).",
          uk: "Доповніть формою 'abfahren' (der Zug).",
          sq: "Plotësoni me 'abfahren' (der Zug)."
        },
        context: "Der Zug ______ um 15:30 ______.",
        correctAnswer: ["fährt", "ab"],
      },
      {
        id: 'm3-sep-7',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'zumachen'.",
          pl: "Zbuduj zdanie z 'zumachen'.",
          uk: "Побудуйте речення з 'zumachen'.",
          sq: "Ndërtoni një fjali me 'zumachen'."
        },
        context: ["Ich", "mache", "das Fenster", "zu"],
        correctAnswer: "Ich mache das Fenster zu",
      },
      {
        id: 'm3-sep-8',
        type: 'multiple-choice',
        question: {
          en: "Choose correct separation of 'vorstellen'.",
          pl: "Wybierz poprawne rozdzielenie 'vorstellen'.",
          uk: "Виберіть правильне розділення 'vorstellen'.",
          sq: "Zgjidhni ndarjen e saktë të 'vorstellen'."
        },
        context: "Er ______ sich ______.",
        options: ["vorstellt", "stellt ... vor", "vor ... stellt"],
        correctAnswer: "stellt ... vor",
      },
      {
        id: 'm3-sep-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'zurückkommen' (wir).",
          pl: "Uzupełnij formą 'zurückkommen' (wir).",
          uk: "Доповніть формою 'zurückkommen' (wir).",
          sq: "Plotësoni me 'zurückkommen' (wir)."
        },
        context: "Wir ______ morgen ______.",
        correctAnswer: ["kommen", "zurück"],
      },
      {
        id: 'm3-sep-10',
        type: 'matching',
        question: {
          en: "Match prefixes to their base verbs.",
          pl: "Dopasuj przedrostki do ich czasowników podstawowych.",
          uk: "Зіставте префікси з їхніми основними дієсловами.",
          sq: "Përputhni parashtesat me foljet e tyre bazë."
        },
        context: ["aufmachen", "weggehen", "herkommen", "ausgehen"],
        options: ["gehen", "kommen", "gehen", "machen"],
        correctAnswer: ["machen", "gehen", "kommen", "gehen"],
      }
    ]
  },
  {
    id: 'imperative-forms',
    moduleId: 3,
    title: 'Imperative (Command Forms)',
    description: "Du-form: verb stem (often no -st): Kauf!, Geh! Ihr-form: normal conjugation: Kauft!, Geht! Sie-form: conjugation + Sie: Kaufen Sie!",
    exercises: [
      {
        id: 'm3-imp-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Give command using du-form of 'kaufen'.",
          pl: "Podaj polecenie używając formy 'du' czasownika 'kaufen'.",
          uk: "Дайте команду, використовуючи форму 'du' дієслова 'kaufen'.",
          sq: "Jepni urdhrin duke përdorur formën 'du' të foljes 'kaufen'."
        },
        context: "______ Brot im Supermarkt!",
        correctAnswer: "Kauf",
      },
      {
        id: 'm3-imp-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct ihr-form imperative of 'gehen'.",
          pl: "Wybierz poprawną formę rozkazującą 'ihr' dla 'gehen'.",
          uk: "Виберіть правильну наказову форму 'ihr' для 'gehen'.",
          sq: "Zgjidhni formën e saktë urdhërore 'ihr' të 'gehen'."
        },
        context: "______ nach Hause!",
        options: ["Geh", "Geht", "Gehen Sie"],
        correctAnswer: "Geht",
      },
      {
        id: 'm3-imp-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Give formal command with 'sprechen'.",
          pl: "Podaj formalne polecenie z 'sprechen'.",
          uk: "Дайте формальну команду з 'sprechen'.",
          sq: "Jepni urdhrin formal me 'sprechen'."
        },
        context: "______ ______ bitte langsamer!",
        correctAnswer: ["Sprechen", "Sie"],
      },
      {
        id: 'm3-imp-4',
        type: 'matching',
        question: {
          en: "Match imperative forms to their addressees.",
          pl: "Dopasuj formy rozkazujące do ich adresatów.",
          uk: "Зіставте наказові форми з їхніми адресатами.",
          sq: "Përputhni format urdhërore me adresuesit e tyre."
        },
        context: ["Komm!", "Kommt!", "Kommen Sie!"],
        options: ["formal (Sie)", "one person (du)", "multiple people (ihr)"],
        correctAnswer: ["one person (du)", "multiple people (ihr)", "formal (Sie)"],
      },
      {
        id: 'm3-imp-5',
        type: 'sentence-scramble',
        question: {
          en: "Build imperative sentence.",
          pl: "Zbuduj zdanie rozkazujące.",
          uk: "Побудуйте наказове речення.",
          sq: "Ndërtoni një fjali urdhërore."
        },
        context: ["Hilf", "mir", "bitte", "!"],
        correctAnswer: "Hilf mir bitte!",
      },
      {
        id: 'm3-imp-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Give du-form imperative of 'nehmen'.",
          pl: "Podaj formę rozkazującą 'du' dla 'nehmen'.",
          uk: "Дайте наказову форму 'du' для 'nehmen'.",
          sq: "Jepni formën urdhërore 'du' të 'nehmen'."
        },
        context: "______ den Bus!",
        correctAnswer: "Nimm",
      },
      {
        id: 'm3-imp-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct formal imperative of 'warten'.",
          pl: "Wybierz poprawną formalną formę rozkazującą 'warten'.",
          uk: "Виберіть правильну формальну наказову форму 'warten'.",
          sq: "Zgjidhni formën e saktë formale urdhërore të 'warten'."
        },
        context: "______ ______ bitte einen Moment!",
        options: ["Warte", "Wartet", "Warten Sie"],
        correctAnswer: "Warten Sie",
      },
      {
        id: 'm3-imp-8',
        type: 'sentence-scramble',
        question: {
          en: "Build polite command.",
          pl: "Zbuduj uprzejme polecenie.",
          uk: "Побудуйте ввічливу команду.",
          sq: "Ndërtoni një urdhër të sjellshëm."
        },
        context: ["Bitte", "seid", "leise", "!"],
        correctAnswer: "Bitte seid leise!",
      },
      {
        id: 'm3-imp-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete imperative with separable verb.",
          pl: "Uzupełnij tryb rozkazujący czasownikiem rozdzielnie złożonym.",
          uk: "Доповніть наказовий спосіб роздільним дієсловом.",
          sq: "Plotësoni urdhëroren me folje të ndashme."
        },
        context: "______ die Tür ______! (aufmachen - du)",
        correctAnswer: ["Mach", "auf"],
      },
      {
        id: 'm3-imp-10',
        type: 'matching',
        question: {
          en: "Match verbs to their du-imperative forms.",
          pl: "Dopasuj czasowniki do ich form rozkazujących 'du'.",
          uk: "Зіставте дієслова з їхніми наказовими формами 'du'.",
          sq: "Përputhni foljet me format e tyre urdhërore 'du'."
        },
        context: ["essen", "lesen", "geben", "fahren"],
        options: ["fahr", "iss", "gib", "lies"],
        correctAnswer: ["iss", "lies", "gib", "fahr"],
      }
    ]
  },
  {
    id: 'past-tense-sein-haben',
    moduleId: 4,
    title: 'Simple Past: sein and haben (Präteritum)',
    description: "Past forms: sein → war, warst, war, waren, wart, waren; haben → hatte, hattest, hatte, hatten, hattet, hatten. Used for past events: 'Früher war mein Großvater Arzt.'",
    exercises: [
      {
        id: 'm4-past-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with past form of 'sein' (ich).",
          pl: "Uzupełnij formą przeszłą 'sein' (ich).",
          uk: "Доповніть минулою формою 'sein' (ich).",
          sq: "Plotësoni me formën e shkuar të 'sein' (ich)."
        },
        context: "Ich ______ gestern krank.",
        correctAnswer: "war",
      },
      {
        id: 'm4-past-2',
        type: 'multiple-choice',
        question: {
          en: "Choose past form of 'haben' (wir).",
          pl: "Wybierz formę przeszłą 'haben' (wir).",
          uk: "Виберіть минулу форму 'haben' (wir).",
          sq: "Zgjidhni formën e shkuar të 'haben' (wir)."
        },
        context: "Wir ______ früher einen Hund.",
        options: ["hatte", "hattest", "hatten", "hattet"],
        correctAnswer: "hatten",
      },
      {
        id: 'm4-past-3',
        type: 'matching',
        question: {
          en: "Match pronouns to past forms of 'sein'.",
          pl: "Dopasuj zaimki do form przeszłych 'sein'.",
          uk: "Зіставте займенники з минулими формами 'sein'.",
          sq: "Përputhni përemrat me format e shkuara të 'sein'."
        },
        context: ["du", "ihr", "sie (sie)", "er"],
        options: ["wart", "war", "warst", "waren"],
        correctAnswer: ["warst", "wart", "waren", "war"],
      },
      {
        id: 'm4-past-4',
        type: 'sentence-scramble',
        question: {
          en: "Build past tense sentence.",
          pl: "Zbuduj zdanie w czasie przeszłym.",
          uk: "Побудуйте речення в минулому часі.",
          sq: "Ndërtoni një fjali në kohën e shkuar."
        },
        context: ["Früher", "hatte", "ich", "keine Zeit"],
        correctAnswer: "Früher hatte ich keine Zeit",
      },
      {
        id: 'm4-past-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete biography sentence.",
          pl: "Uzupełnij zdanie biograficzne.",
          uk: "Доповніть біографічне речення.",
          sq: "Plotësoni fjalinë biografike."
        },
        context: "Mein Großvater ______ Arzt und ______ ein großes Haus.",
        correctAnswer: ["war", "hatte"],
      },
      {
        id: 'm4-past-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with past form of 'haben' (du).",
          pl: "Uzupełnij formą przeszłą 'haben' (du).",
          uk: "Доповніть минулою формою 'haben' (du).",
          sq: "Plotësoni me formën e shkuar të 'haben' (du)."
        },
        context: "______ du Spaß auf der Party?",
        correctAnswer: "Hattest",
      },
      {
        id: 'm4-past-7',
        type: 'multiple-choice',
        question: {
          en: "Choose past form of 'sein' (sie - plural).",
          pl: "Wybierz formę przeszłą 'sein' (sie - l.mn.).",
          uk: "Виберіть минулу форму 'sein' (sie - множина).",
          sq: "Zgjidhni formën e shkuar të 'sein' (sie - shumës)."
        },
        context: "Sie ______ sehr müde.",
        options: ["war", "warst", "waren", "wart"],
        correctAnswer: "waren",
      },
      {
        id: 'm4-past-8',
        type: 'sentence-scramble',
        question: {
          en: "Build past tense question.",
          pl: "Zbuduj pytanie w czasie przeszłym.",
          uk: "Побудуйте питання в минулому часі.",
          sq: "Ndërtoni një pyetje në kohën e shkuar."
        },
        context: ["Waren", "Sie", "schon", "in Berlin", "?"],
        correctAnswer: "Waren Sie schon in Berlin?",
      },
      {
        id: 'm4-past-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete past tense story.",
          pl: "Uzupełnij historię w czasie przeszłym.",
          uk: "Доповніть розповідь у минулому часі.",
          sq: "Plotësoni tregimin në kohën e shkuar."
        },
        context: "Als Kind ______ ich sehr klein und ______ viele Spielsachen.",
        correctAnswer: ["war", "hatte"],
      },
      {
        id: 'm4-past-10',
        type: 'matching',
        question: {
          en: "Match present to past forms.",
          pl: "Dopasuj formy teraźniejsze do przeszłych.",
          uk: "Зіставте теперішні форми з минулими.",
          sq: "Përputhni format e tashme me ato të shkuara."
        },
        context: ["ich bin", "du hast", "wir sind", "ihr habt"],
        options: ["wir waren", "ich war", "ihr hattet", "du hattest"],
        correctAnswer: ["ich war", "du hattest", "wir waren", "ihr hattet"],
      }
    ]
  },

  // ===== NOMEN & ARTIKEL (NOUNS & ARTICLES) =====
  {
    id: 'gender-articles',
    moduleId: 1,
    title: 'Gender and Articles (der, die, das)',
    description: "All German nouns have gender: masculine (der), feminine (die), neuter (das). Indefinite articles: ein, eine, ein. Gender must be memorized with each noun.",
    exercises: [
      {
        id: 'm1-art-1',
        type: 'matching',
        question: {
          en: "Match nouns to their correct definite articles.",
          pl: "Dopasuj rzeczowniki do ich poprawnych rodzajników określonych.",
          uk: "Зіставте іменники з їхніми правильними означеними артиклями.",
          sq: "Përputhni emrat me nyjet e tyre të sakta shquese."
        },
        context: ["Mann", "Frau", "Kind", "Haus"],
        options: ["das", "der", "die", "das"],
        correctAnswer: ["der", "die", "das", "das"],
      },
      {
        id: 'm1-art-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct indefinite article.",
          pl: "Uzupełnij poprawnym rodzajnikiem nieokreślonym.",
          uk: "Доповніть правильним неозначеним артиклем.",
          sq: "Plotësoni me nyjen e saktë të pashquar."
        },
        context: "Das ist ______ Buch. (das Buch)",
        correctAnswer: "ein",
      },
      {
        id: 'm1-art-3',
        type: 'multiple-choice',
        question: {
          en: "Choose correct article for 'Schule'.",
          pl: "Wybierz poprawny rodzajnik dla 'Schule'.",
          uk: "Виберіть правильний артикль для 'Schule'.",
          sq: "Zgjidhni nyjen e saktë për 'Schule'."
        },
        context: "______ Schule ist groß.",
        options: ["Der", "Die", "Das"],
        correctAnswer: "Die",
      },
      {
        id: 'm1-art-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with definite article.",
          pl: "Uzupełnij rodzajnikiem określonym.",
          uk: "Доповніть означеним артиклем.",
          sq: "Plotësoni me nyjen shquese."
        },
        context: "______ Auto ist rot. (das Auto)",
        correctAnswer: "Das",
      },
      {
        id: 'm1-art-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with correct articles.",
          pl: "Zbuduj zdanie z poprawnymi rodzajnikami.",
          uk: "Побудуйте речення з правильними артиклями.",
          sq: "Ndërtoni fjali me nyjet e sakta."
        },
        context: ["Das", "ist", "eine", "Lehrerin"],
        correctAnswer: "Das ist eine Lehrerin",
      },
      {
        id: 'm1-art-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with indefinite article for 'Tisch'.",
          pl: "Uzupełnij rodzajnikiem nieokreślonym dla 'Tisch'.",
          uk: "Доповніть неозначеним артиклем для 'Tisch'.",
          sq: "Plotësoni me nyjen e pashquar për 'Tisch'."
        },
        context: "Ich brauche ______ Tisch.",
        correctAnswer: "einen",
      },
      {
        id: 'm1-art-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct article for 'Universität'.",
          pl: "Wybierz poprawny rodzajnik dla 'Universität'.",
          uk: "Виберіть правильний артикль для 'Universität'.",
          sq: "Zgjidhni nyjen e saktë për 'Universität'."
        },
        context: "______ Universität ist sehr modern.",
        options: ["Der", "Die", "Das"],
        correctAnswer: "Die",
      },
      {
        id: 'm1-art-8',
        type: 'matching',
        question: {
          en: "Match nouns to indefinite articles.",
          pl: "Dopasuj rzeczowniki do rodzajników nieokreślonych.",
          uk: "Зіставте іменники з неозначеними артиклями.",
          sq: "Përputhni emrat me nyjet e pashquara."
        },
        context: ["Lampe", "Computer", "Mädchen", "Stuhl"],
        options: ["ein", "eine", "ein", "einen"],
        correctAnswer: ["eine", "ein", "ein", "einen"],
      },
      {
        id: 'm1-art-9',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with articles.",
          pl: "Zbuduj zdanie z rodzajnikami.",
          uk: "Побудуйте речення з артиклями.",
          sq: "Ndërtoni fjali me nyje."
        },
        context: ["Der", "Mann", "kauft", "ein", "Auto"],
        correctAnswer: "Der Mann kauft ein Auto",
      },
      {
        id: 'm1-art-10',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct article for 'Telefon'.",
          pl: "Uzupełnij poprawnym rodzajnikiem dla 'Telefon'.",
          uk: "Доповніть правильним артиклем для 'Telefon'.",
          sq: "Plotësoni me nyjen e saktë për 'Telefon'."
        },
        context: "______ Telefon klingelt. (das Telefon)",
        correctAnswer: "Das",
      }
    ]
  },
  {
    id: 'nominative-case',
    moduleId: 2,
    title: 'Nominative Case (Subject)',
    description: "Nominative answers 'Wer?' (who) or 'Was?' (what). It's the subject of the sentence. Articles: der/ein, die/eine, das/ein.",
    exercises: [
      {
        id: 'm2-nom-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete subject in nominative.",
          pl: "Uzupełnij podmiot w mianowniku.",
          uk: "Доповніть підмет у називному відмінку.",
          sq: "Plotësoni kryefjalën në rasën emërore."
        },
        context: "______ Mann arbeitet hier. (der Mann)",
        correctAnswer: "Der",
      },
      {
        id: 'm2-nom-2',
        type: 'multiple-choice',
        question: {
          en: "Identify the nominative in the sentence.",
          pl: "Zidentyfikuj mianownik w zdaniu.",
          uk: "Визначте називний відмінок у реченні.",
          sq: "Identifikoni rasën emërore në fjali."
        },
        context: "Die Lehrerin erklärt die Grammatik.",
        options: ["Die Lehrerin", "die Grammatik", "erklärt"],
        correctAnswer: "Die Lehrerin",
      },
      {
        id: 'm2-nom-3',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with nominative subject.",
          pl: "Zbuduj zdanie z podmiotem w mianowniku.",
          uk: "Побудуйте речення з підметом у називному відмінку.",
          sq: "Ndërtoni fjali me kryefjalë në rasën emërore."
        },
        context: ["Ein", "Student", "lernt", "Deutsch"],
        correctAnswer: "Ein Student lernt Deutsch",
      },
      {
        id: 'm2-nom-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Answer 'Wer?' question.",
          pl: "Odpowiedz na pytanie 'Wer?'.",
          uk: "Дайте відповідь на запитання 'Wer?'.",
          sq: "Përgjigjjuni pyetjes 'Wer?'."
        },
        context: "Wer ist das? - Das ist ______ Arzt.",
        correctAnswer: "ein",
      },
      {
        id: 'm2-nom-5',
        type: 'matching',
        question: {
          en: "Match questions to nominative answers.",
          pl: "Dopasuj pytania do odpowiedzi w mianowniku.",
          uk: "Зіставте питання з відповідями в називному відмінку.",
          sq: "Përputhni pyetjet me përgjigjet në rasën emërore."
        },
        context: ["Wer kommt?", "Was ist das?", "Wer arbeitet hier?"],
        options: ["Ein Ingenieur.", "Das ist ein Buch.", "Der Chef."],
        correctAnswer: ["Der Chef.", "Das ist ein Buch.", "Ein Ingenieur."],
      },
      {
        id: 'm2-nom-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete nominative subject.",
          pl: "Uzupełnij podmiot w mianowniku.",
          uk: "Доповніть підмет у називному відмінку.",
          sq: "Plotësoni kryefjalën në rasën emërore."
        },
        context: "______ Katze schläft auf dem Sofa.",
        correctAnswer: "Die",
      },
      {
        id: 'm2-nom-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct nominative form.",
          pl: "Wybierz poprawną formę mianownika.",
          uk: "Виберіть правильну форму називного відмінка.",
          sq: "Zgjidhni formën e saktë emërore."
        },
        context: "______ Kind spielt im Garten.",
        options: ["Der", "Die", "Das"],
        correctAnswer: "Das",
      },
      {
        id: 'm2-nom-8',
        type: 'sentence-scramble',
        question: {
          en: "Build nominative sentence.",
          pl: "Zbuduj zdanie w mianowniku.",
          uk: "Побудуйте речення в називному відмінку.",
          sq: "Ndërtoni fjali në rasën emërore."
        },
        context: ["Eine", "Ärztin", "hilft", "den Patienten"],
        correctAnswer: "Eine Ärztin hilft den Patienten",
      },
      {
        id: 'm2-nom-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with nominative article.",
          pl: "Uzupełnij rodzajnikiem w mianowniku.",
          uk: "Доповніть артиклем у називному відмінку.",
          sq: "Plotësoni me nyjen në rasën emërore."
        },
        context: "______ Bus kommt um 8 Uhr.",
        correctAnswer: "Der",
      },
      {
        id: 'm2-nom-10',
        type: 'matching',
        question: {
          en: "Match Wer/Was questions to answers.",
          pl: "Dopasuj pytania Wer/Was do odpowiedzi.",
          uk: "Зіставте питання Wer/Was з відповідями.",
          sq: "Përputhni pyetjet Wer/Was me përgjigjet."
        },
        context: ["Wer singt?", "Was passiert?", "Wer kocht?"],
        options: ["Ein Unfall.", "Die Mutter.", "Der Sänger."],
        correctAnswer: ["Der Sänger.", "Ein Unfall.", "Die Mutter."],
      }
    ]
  },
  {
    id: 'accusative-case',
    moduleId: 3,
    title: 'Accusative Case (Direct Object)',
    description: "Accusative answers 'Wen?' (whom) or 'Was?' (what). It's the direct object. Articles change: der→den, ein→einen. die/das remain unchanged.",
    exercises: [
      {
        id: 'm3-acc-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete direct object in accusative.",
          pl: "Uzupełnij dopełnienie bliższe w bierniku.",
          uk: "Доповніть прямий додаток у знахідному відмінку.",
          sq: "Plotësoni kundrinorin e drejtë në rasën kallëzore."
        },
        context: "Ich kaufe ______ Stuhl. (der Stuhl)",
        correctAnswer: "einen",
      },
      {
        id: 'm3-acc-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct accusative form.",
          pl: "Wybierz poprawną formę biernika.",
          uk: "Виберіть правильну форму знахідного відмінка.",
          sq: "Zgjidhni formën e saktë kallëzore."
        },
        context: "Sie liest ______ Buch. (das Buch)",
        options: ["den", "das", "dem"],
        correctAnswer: "das",
      },
      {
        id: 'm3-acc-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with accusative article.",
          pl: "Uzupełnij rodzajnikiem w bierniku.",
          uk: "Доповніть артиклем у знахідному відмінку.",
          sq: "Plotësoni me nyjen në rasën kallëzore."
        },
        context: "Wir haben ______ Hund. (der Hund)",
        correctAnswer: "einen",
      },
      {
        id: 'm3-acc-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with accusative object.",
          pl: "Zbuduj zdanie z dopełnieniem w bierniku.",
          uk: "Побудуйте речення з додатком у знахідному відмінку.",
          sq: "Ndërtoni fjali me kundrinor në rasën kallëzore."
        },
        context: ["Er", "trinkt", "einen", "Kaffee"],
        correctAnswer: "Er trinkt einen Kaffee",
      },
      {
        id: 'm3-acc-5',
        type: 'matching',
        question: {
          en: "Match nominative to accusative forms.",
          pl: "Dopasuj formy mianownika do form biernika.",
          uk: "Зіставте форми називного відмінка з формами знахідного.",
          sq: "Përputhni format emërore me format kallëzore."
        },
        context: ["der Mann", "die Frau", "das Kind", "ein Auto"],
        options: ["ein Auto", "den Mann", "das Kind", "die Frau"],
        correctAnswer: ["den Mann", "die Frau", "das Kind", "ein Auto"],
      },
      {
        id: 'm3-acc-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete accusative with 'sehen'.",
          pl: "Uzupełnij biernik z 'sehen'.",
          uk: "Доповніть знахідний відмінок з 'sehen'.",
          sq: "Plotësoni kallëzoren me 'sehen'."
        },
        context: "Ich sehe ______ Lehrer. (der Lehrer)",
        correctAnswer: "den",
      },
      {
        id: 'm3-acc-7',
        type: 'multiple-choice',
        question: {
          en: "Choose accusative form for feminine noun.",
          pl: "Wybierz formę biernika dla rzeczownika rodzaju żeńskiego.",
          uk: "Виберіть форму знахідного відмінка для іменника жіночого роду.",
          sq: "Zgjidhni formën kallëzore për emrin femëror."
        },
        context: "Er besucht ______ Großmutter.",
        options: ["der", "die", "den"],
        correctAnswer: "die",
      },
      {
        id: 'm3-acc-8',
        type: 'sentence-scramble',
        question: {
          en: "Build accusative sentence.",
          pl: "Zbuduj zdanie w bierniku.",
          uk: "Побудуйте речення в знахідному відмінку.",
          sq: "Ndërtoni fjali në rasën kallëzore."
        },
        context: ["Wir", "brauchen", "eine", "neue Wohnung"],
        correctAnswer: "Wir brauchen eine neue Wohnung",
      },
      {
        id: 'm3-acc-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with accusative pronoun.",
          pl: "Uzupełnij zaimkiem w bierniku.",
          uk: "Доповніть займенником у знахідному відмінку.",
          sq: "Plotësoni me përemër në rasën kallëzore."
        },
        context: "Kennst du ______? (der Professor)",
        correctAnswer: "ihn",
      },
      {
        id: 'm3-acc-10',
        type: 'matching',
        question: {
          en: "Match Wen/Was questions to accusative answers.",
          pl: "Dopasuj pytania Wen/Was do odpowiedzi w bierniku.",
          uk: "Зіставте питання Wen/Was з відповідями в знахідному відмінку.",
          sq: "Përputhni pyetjet Wen/Was me përgjigjet në kallëzore."
        },
        context: ["Wen ruft sie an?", "Was isst er?", "Wen besuchen Sie?"],
        options: ["Einen Apfel.", "Meine Eltern.", "Ihren Freund."],
        correctAnswer: ["Ihren Freund.", "Einen Apfel.", "Meine Eltern."],
      }
    ]
  },
  {
    id: 'dative-case',
    moduleId: 4,
    title: 'Dative Case (Indirect Object)',
    description: "Dative answers 'Wem?' (to whom). Articles: der→dem, die→der, das→dem, die(pl)→den. Used for indirect objects and after dative prepositions.",
    exercises: [
      {
        id: 'm4-dat-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete indirect object in dative.",
          pl: "Uzupełnij dopełnienie dalsze w celowniku.",
          uk: "Доповніть непрямий додаток у давальному відмінку.",
          sq: "Plotësoni kundrinorin e zhdrejtë në rasën dhanore."
        },
        context: "Ich gebe ______ Mann das Buch. (der Mann)",
        correctAnswer: "dem",
      },
      {
        id: 'm4-dat-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct dative form.",
          pl: "Wybierz poprawną formę celownika.",
          uk: "Виберіть правильну форму давального відмінка.",
          sq: "Zgjidhni formën e saktë dhanore."
        },
        context: "Sie hilft ______ Frau. (die Frau)",
        options: ["die", "der", "den"],
        correctAnswer: "der",
      },
      {
        id: 'm4-dat-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with dative preposition.",
          pl: "Uzupełnij przyimkiem celownika.",
          uk: "Доповніть прийменником давального відмінка.",
          sq: "Plotësoni me parafjalë dhanore."
        },
        context: "Ich fahre mit ______ Bus. (der Bus)",
        correctAnswer: "dem",
      },
      {
        id: 'm4-dat-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with dative.",
          pl: "Zbuduj zdanie z celownikiem.",
          uk: "Побудуйте речення з давальним відмінком.",
          sq: "Ndërtoni fjali me rasën dhanore."
        },
        context: ["Das", "Auto", "gehört", "meinem Vater"],
        correctAnswer: "Das Auto gehört meinem Vater",
      },
      {
        id: 'm4-dat-5',
        type: 'matching',
        question: {
          en: "Match prepositions to dative phrases.",
          pl: "Dopasuj przyimki do zwrotów w celowniku.",
          uk: "Зіставте прийменники з фразами в давальному відмінку.",
          sq: "Përputhni parafjalët me frazat në rasën dhanore."
        },
        context: ["aus", "bei", "mit", "zu"],
        options: ["zu der Schule", "aus dem Haus", "bei dem Arzt", "mit der Familie"],
        correctAnswer: ["aus dem Haus", "bei dem Arzt", "mit der Familie", "zu der Schule"],
      },
      {
        id: 'm4-dat-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete dative with 'schreiben'.",
          pl: "Uzupełnij celownik z 'schreiben'.",
          uk: "Доповніть давальний відмінок з 'schreiben'.",
          sq: "Plotësoni dhanoren me 'schreiben'."
        },
        context: "Er schreibt ______ Schwester einen Brief. (die Schwester)",
        correctAnswer: "seiner",
      },
      {
        id: 'm4-dat-7',
        type: 'multiple-choice',
        question: {
          en: "Choose dative form after 'von'.",
          pl: "Wybierz formę celownika po 'von'.",
          uk: "Виберіть форму давального відмінка після 'von'.",
          sq: "Zgjidhni formën dhanore pas 'von'."
        },
        context: "Das Geschenk ist von ______ Großeltern.",
        options: ["die", "den", "der"],
        correctAnswer: "den",
      },
      {
        id: 'm4-dat-8',
        type: 'sentence-scramble',
        question: {
          en: "Build dative sentence with 'schenken'.",
          pl: "Zbuduj zdanie w celowniku z 'schenken'.",
          uk: "Побудуйте речення в давальному відмінку з 'schenken'.",
          sq: "Ndërtoni fjali në dhanore me 'schenken'."
        },
        context: ["Ich", "schenke", "meiner Mutter", "Blumen"],
        correctAnswer: "Ich schenke meiner Mutter Blumen",
      },
      {
        id: 'm4-dat-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with dative after 'nach'.",
          pl: "Uzupełnij celownikiem po 'nach'.",
          uk: "Доповніть давальним відмінком після 'nach'.",
          sq: "Plotësoni me dhanore pas 'nach'."
        },
        context: "Nach ______ Arbeit gehe ich nach Hause. (die Arbeit)",
        correctAnswer: "der",
      },
      {
        id: 'm4-dat-10',
        type: 'matching',
        question: {
          en: "Match dative verbs to their meanings.",
          pl: "Dopasuj czasowniki celownikowe do ich znaczeń.",
          uk: "Зіставте дієслова давального відмінка з їхніми значеннями.",
          sq: "Përputhni foljet dhanore me kuptimet e tyre."
        },
        context: ["helfen", "gehören", "gefallen", "danken"],
        options: ["to thank", "to help", "to like/please", "to belong"],
        correctAnswer: ["to help", "to belong", "to like/please", "to thank"],
      }
    ]
  },
  {
    id: 'plural-forms',
    moduleId: 4,
    title: 'Plural Forms (Pluralformen)',
    description: "German has different plural endings: -e, -er, -n, -en, -s. Plural forms must be learned with each noun. In dative plural, add -n if not already present.",
    exercises: [
      {
        id: 'm4-plur-1',
        type: 'matching',
        question: {
          en: "Match singular nouns to their plurals.",
          pl: "Dopasuj rzeczowniki w liczbie pojedynczej do ich liczby mnogiej.",
          uk: "Зіставте іменники в однині з їхніми формами множини.",
          sq: "Përputhni emrat në njëjës me shumësit e tyre."
        },
        context: ["das Kind", "der Tisch", "die Frau", "das Auto"],
        options: ["die Frauen", "die Autos", "die Kinder", "die Tische"],
        correctAnswer: ["die Kinder", "die Tische", "die Frauen", "die Autos"],
      },
      {
        id: 'm4-plur-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with plural form.",
          pl: "Uzupełnij formą liczby mnogiej.",
          uk: "Доповніть формою множини.",
          sq: "Plotësoni me formën e shumësit."
        },
        context: "Ich sehe zwei ______. (das Buch)",
        correctAnswer: "Bücher",
      },
      {
        id: 'm4-plur-3',
        type: 'multiple-choice',
        question: {
          en: "Choose correct plural of 'der Student'.",
          pl: "Wybierz poprawną liczbę mnogą od 'der Student'.",
          uk: "Виберіть правильну форму множини 'der Student'.",
          sq: "Zgjidhni shumësine e saktë të 'der Student'."
        },
        context: "Die ______ lernen Deutsch.",
        options: ["Studenten", "Students", "Studente"],
        correctAnswer: "Studenten",
      },
      {
        id: 'm4-plur-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete dative plural.",
          pl: "Uzupełnij celownik liczby mnogiej.",
          uk: "Доповніть давальний відмінок множини.",
          sq: "Plotësoni dhanoren në shumës."
        },
        context: "Ich spreche mit den ______. (die Kinder)",
        correctAnswer: "Kindern",
        hint: "Add -n in dative plural if not already present.",
      },
      {
        id: 'm4-plur-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with plural.",
          pl: "Zbuduj zdanie z liczbą mnogą.",
          uk: "Побудуйте речення з формою множини.",
          sq: "Ndërtoni fjali me shumës."
        },
        context: ["Viele", "Menschen", "arbeiten", "hier"],
        correctAnswer: "Viele Menschen arbeiten hier",
      },
      {
        id: 'm4-plur-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with plural of 'der Apfel'.",
          pl: "Uzupełnij liczbą mnogą od 'der Apfel'.",
          uk: "Доповніть формою множини 'der Apfel'.",
          sq: "Plotësoni me shumesin e 'der Apfel'."
        },
        context: "Wir kaufen drei ______.",
        correctAnswer: "Äpfel",
      },
      {
        id: 'm4-plur-7',
        type: 'multiple-choice',
        question: {
          en: "Choose plural of 'die Universität'.",
          pl: "Wybierz liczbę mnogą od 'die Universität'.",
          uk: "Виберіть форму множини 'die Universität'.",
          sq: "Zgjidhni shumësine e 'die Universität'."
        },
        context: "In Deutschland gibt es viele ______.",
        options: ["Universitäte", "Universitäten", "Universitäts"],
        correctAnswer: "Universitäten",
      },
      {
        id: 'm4-plur-8',
        type: 'matching',
        question: {
          en: "Match plurals to their singular forms.",
          pl: "Dopasuj liczby mnogie do ich form liczby pojedynczej.",
          uk: "Зіставте форми множини з їхніми формами однини.",
          sq: "Përputhni shumësit me format e tyre njëjës."
        },
        context: ["die Häuser", "die Männer", "die Schulen", "die Handys"],
        options: ["das Handy", "die Schule", "das Haus", "der Mann"],
        correctAnswer: ["das Haus", "der Mann", "die Schule", "das Handy"],
      },
      {
        id: 'm4-plur-9',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with dative plural.",
          pl: "Zbuduj zdanie z celownikiem liczby mnogiej.",
          uk: "Побудуйте речення з давальним відмінком множини.",
          sq: "Ndërtoni fjali me dhanoren në shumës."
        },
        context: ["Er", "hilft", "den", "Studenten"],
        correctAnswer: "Er hilft den Studenten",
      },
      {
        id: 'm4-plur-10',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with plural ending.",
          pl: "Uzupełnij końcówką liczby mnogiej.",
          uk: "Доповніть закінченням множини.",
          sq: "Plotësoni me mbaresën e shumësit."
        },
        context: "Die Kinder spielen mit ihren ______. (das Spielzeug)",
        correctAnswer: "Spielzeugen",
      }
    ]
  },
  {
    id: 'possessive-articles',
    moduleId: 3,
    title: 'Possessive Articles (mein, dein, sein, ihr...)',
    description: "Possessive articles: mein, dein, sein, ihr, unser, euer, Ihr. They decline like 'kein' and agree with the possessed noun's gender and case.",
    exercises: [
      {
        id: 'm3-poss-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct possessive (my mother).",
          pl: "Uzupełnij poprawnym zaimkiem dzierżawczym (moja matka).",
          uk: "Доповніть правильним присвійним займенником (моя мати).",
          sq: "Plotësoni me përemrin e saktë pronor (nëna ime)."
        },
        context: "Das ist ______ Mutter.",
        correctAnswer: "meine",
      },
      {
        id: 'm3-poss-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct possessive (his father).",
          pl: "Wybierz poprawny zaimek dzierżawczy (jego ojciec).",
          uk: "Виберіть правильний присвійний займенник (його батько).",
          sq: "Zgjidhni përemrin e saktë pronor (babai i tij)."
        },
        context: "______ Vater arbeitet hier.",
        options: ["Sein", "Seine", "Seinen"],
        correctAnswer: "Sein",
      },
      {
        id: 'm3-poss-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with possessive in accusative.",
          pl: "Uzupełnij zaimkiem dzierżawczym w bierniku.",
          uk: "Доповніть присвійним займенником у знахідному відмінку.",
          sq: "Plotësoni me përemër pronor në rasën kallëzore."
        },
        context: "Ich sehe ______ Auto. (your car - informal)",
        correctAnswer: "dein",
      },
      {
        id: 'm3-poss-4',
        type: 'matching',
        question: {
          en: "Match possessives to persons.",
          pl: "Dopasuj zaimki dzierżawcze do osób.",
          uk: "Зіставте присвійні займенники з особами.",
          sq: "Përputhni pronorët me vetat."
        },
        context: ["ich", "du", "er", "sie"],
        options: ["ihr", "mein", "sein", "dein"],
        correctAnswer: ["mein", "dein", "sein", "ihr"],
      },
      {
        id: 'm3-poss-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with possessive.",
          pl: "Zbuduj zdanie z zaimkiem dzierżawczym.",
          uk: "Побудуйте речення з присвійним займенником.",
          sq: "Ndërtoni fjali me përemër pronor."
        },
        context: ["Unsere", "Lehrerin", "ist", "sehr nett"],
        correctAnswer: "Unsere Lehrerin ist sehr nett",
      },
      {
        id: 'm3-poss-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with possessive in dative.",
          pl: "Uzupełnij zaimkiem dzierżawczym w celowniku.",
          uk: "Доповніть присвійним займенником у давальному відмінку.",
          sq: "Plotësoni me përemër pronor në rasën dhanore."
        },
        context: "Ich helfe ______ Bruder. (my brother)",
        correctAnswer: "meinem",
      },
      {
        id: 'm3-poss-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct possessive for plural.",
          pl: "Wybierz poprawny zaimek dzierżawczy dla liczby mnogiej.",
          uk: "Виберіть правильний присвійний займенник для множини.",
          sq: "Zgjidhni përemrin e saktë pronor për shumës."
        },
        context: "______ Kinder sind sehr klug. (her children)",
        options: ["Ihr", "Ihre", "Ihren"],
        correctAnswer: "Ihre",
      },
      {
        id: 'm3-poss-8',
        type: 'sentence-scramble',
        question: {
          en: "Build possessive sentence.",
          pl: "Zbuduj zdanie dzierżawcze.",
          uk: "Побудуйте присвійне речення.",
          sq: "Ndërtoni fjali pronore."
        },
        context: ["Wo", "ist", "euer", "Haus", "?"],
        correctAnswer: "Wo ist euer Haus?",
      },
      {
        id: 'm3-poss-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete formal possessive.",
          pl: "Uzupełnij formalnym zaimkiem dzierżawczym.",
          uk: "Доповніть формальним присвійним займенником.",
          sq: "Plotësoni me përemër pronor formal."
        },
        context: "Ist das ______ Koffer? (your suitcase - formal)",
        correctAnswer: "Ihr",
      },
      {
        id: 'm3-poss-10',
        type: 'matching',
        question: {
          en: "Match possessive articles to their declined forms.",
          pl: "Dopasuj rodzajniki dzierżawcze do ich odmienionych form.",
          uk: "Зіставте присвійні артиклі з їхніми відмінюваними формами.",
          sq: "Përputhni nyjet pronore me format e tyre të lakuara."
        },
        context: ["mein Vater", "meine Mutter", "mein Kind", "meine Eltern"],
        options: ["meine Eltern", "mein Vater", "mein Kind", "meine Mutter"],
        correctAnswer: ["mein Vater", "meine Mutter", "mein Kind", "meine Eltern"],
      }
    ]
  },

  // ===== PRÄPOSITIONEN (PREPOSITIONS) =====
  {
    id: 'dative-prepositions',
    moduleId: 4,
    title: 'Dative Prepositions: aus, bei, mit, nach, von, zu',
    description: "These prepositions always take dative case. Common contractions: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom.",
    exercises: [
      {
        id: 'm4-prep-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct dative form.",
          pl: "Uzupełnij poprawną formą celownika.",
          uk: "Доповніть правильною формою давального відмінка.",
          sq: "Plotësoni me formën e saktë dhanore."
        },
        context: "Ich komme aus ______ Schule. (die Schule)",
        correctAnswer: "der",
      },
      {
        id: 'm4-prep-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct preposition for 'with'.",
          pl: "Wybierz poprawny przyimek oznaczający 'z'.",
          uk: "Виберіть правильний прийменник для 'with'.",
          sq: "Zgjidhni parafjalën e saktë për 'me'."
        },
        context: "Ich fahre ______ dem Bus.",
        options: ["mit", "bei", "von"],
        correctAnswer: "mit",
      },
      {
        id: 'm4-prep-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with contraction.",
          pl: "Uzupełnij skrótem.",
          uk: "Доповніть скороченням.",
          sq: "Plotësoni me shkurtim."
        },
        context: "Wir gehen ______ Arzt. (zu + der Arzt)",
        correctAnswer: "zum",
      },
      {
        id: 'm4-prep-4',
        type: 'matching',
        question: {
          en: "Match prepositions to their meanings.",
          pl: "Dopasuj przyimki do ich znaczeń.",
          uk: "Зіставте прийменники з їхніми значеннями.",
          sq: "Përputhni parafjalët me kuptimet e tyre."
        },
        context: ["aus", "bei", "nach", "von"],
        options: ["from/by", "out of/from", "at/near", "to/after"],
        correctAnswer: ["out of/from", "at/near", "to/after", "from/by"],
      },
      {
        id: 'm4-prep-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with dative preposition.",
          pl: "Zbuduj zdanie z przyimkiem celownika.",
          uk: "Побудуйте речення з прийменником давального відмінка.",
          sq: "Ndërtoni fjali me parafjalë dhanore."
        },
        context: ["Sie", "wohnt", "bei", "ihrer Familie"],
        correctAnswer: "Sie wohnt bei ihrer Familie",
      },
      {
        id: 'm4-prep-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'von' + dative.",
          pl: "Uzupełnij 'von' + celownik.",
          uk: "Доповніть 'von' + давальний відмінок.",
          sq: "Plotësoni me 'von' + dhanore."
        },
        context: "Das ist ein Geschenk von ______ Großmutter. (die Großmutter)",
        correctAnswer: "der",
      },
      {
        id: 'm4-prep-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct contraction.",
          pl: "Wybierz poprawny skrót.",
          uk: "Виберіть правильне скорочення.",
          sq: "Zgjidhni shkurtimin e saktë."
        },
        context: "Er geht ______ Post. (zu der Post)",
        options: ["zum", "zur", "bei"],
        correctAnswer: "zur",
      },
      {
        id: 'm4-prep-8',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'nach'.",
          pl: "Zbuduj zdanie z 'nach'.",
          uk: "Побудуйте речення з 'nach'.",
          sq: "Ndërtoni fjali me 'nach'."
        },
        context: ["Nach", "dem Essen", "trinke", "ich Kaffee"],
        correctAnswer: "Nach dem Essen trinke ich Kaffee",
      },
      {
        id: 'm4-prep-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'bei' + dative.",
          pl: "Uzupełnij 'bei' + celownik.",
          uk: "Доповніть 'bei' + давальний відмінок.",
          sq: "Plotësoni me 'bei' + dhanore."
        },
        context: "Wir kaufen Brot ______ Bäcker. (der Bäcker)",
        correctAnswer: "beim",
      },
      {
        id: 'm4-prep-10',
        type: 'matching',
        question: {
          en: "Match prepositions to example phrases.",
          pl: "Dopasuj przyimki do przykładowych zwrotów.",
          uk: "Зіставте прийменники з прикладами фраз.",
          sq: "Përputhni parafjalët me frazat shembull."
        },
        context: ["aus Deutschland", "mit dem Auto", "bei der Arbeit", "zu Hause"],
        options: ["zu", "aus", "bei", "mit"],
        correctAnswer: ["aus", "mit", "bei", "zu"],
      }
    ]
  },
  {
    id: 'location-prepositions',
    moduleId: 5,
    title: 'Location Prepositions (Wo? Wohin? Woher?)',
    description: "Wo? (location-dative): in der Schule, beim Arzt. Wohin? (direction-accusative): in die Schule, zum Arzt, nach Hause. Woher? (origin-dative): aus der Schule, vom Arzt.",
    exercises: [
      {
        id: 'm5-loc-1',
        type: 'multiple-choice',
        question: {
          en: "Choose correct preposition for 'Wo?'",
          pl: "Wybierz poprawny przyimek dla 'Wo?'",
          uk: "Виберіть правильний прийменник для 'Wo?'",
          sq: "Zgjidhni parafjalën e saktë për 'Ku?'"
        },
        context: "Wo arbeitet er? - ______ der Bank.",
        options: ["In", "Nach", "Zu"],
        correctAnswer: "In",
      },
      {
        id: 'm5-loc-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete direction (Wohin?).",
          pl: "Uzupełnij kierunek (Wohin?).",
          uk: "Доповніть напрямок (Wohin?).",
          sq: "Plotësoni drejtimin (Për ku?)."
        },
        context: "Ich gehe ______ ______ Supermarkt. (to the supermarket)",
        correctAnswer: ["in", "den"],
      },
      {
        id: 'm5-loc-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete origin (Woher?).",
          pl: "Uzupełnij pochodzenie (Woher?).",
          uk: "Доповніть походження (Woher?).",
          sq: "Plotësoni origjinën (Nga ku?)."
        },
        context: "Sie kommt ______ ______ Arbeit. (from work)",
        correctAnswer: ["von", "der"],
      },
      {
        id: 'm5-loc-4',
        type: 'matching',
        question: {
          en: "Match questions to appropriate answers.",
          pl: "Dopasuj pytania do odpowiednich odpowiedzi.",
          uk: "Зіставте питання з відповідними відповідями.",
          sq: "Përputhni pyetjet me përgjigjet e duhura."
        },
        context: ["Wo wohnst du?", "Wohin gehst du?", "Woher kommst du?"],
        options: ["Aus Deutschland.", "In die Stadt.", "In Berlin."],
        correctAnswer: ["In Berlin.", "In die Stadt.", "Aus Deutschland."],
      },
      {
        id: 'm5-loc-5',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with location preposition.",
          pl: "Zbuduj zdanie z przyimkiem miejsca.",
          uk: "Побудуйте речення з прийменником місця.",
          sq: "Ndërtoni fjali me parafjalë vendi."
        },
        context: ["Ich", "arbeite", "in", "einem Büro"],
        correctAnswer: "Ich arbeite in einem Büro",
      },
      {
        id: 'm5-loc-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete 'Wohin?' with 'auf'.",
          pl: "Uzupełnij 'Wohin?' z 'auf'.",
          uk: "Доповніть 'Wohin?' з 'auf'.",
          sq: "Plotësoni 'Për ku?' me 'auf'."
        },
        context: "Wir gehen ______ ______ Markt. (to the market)",
        correctAnswer: ["auf", "den"],
      },
      {
        id: 'm5-loc-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct case for 'Wo?'",
          pl: "Wybierz poprawny przypadek dla 'Wo?'",
          uk: "Виберіть правильний відмінок для 'Wo?'",
          sq: "Zgjidhni rasën e saktë për 'Ku?'"
        },
        context: "Wo ist das Buch? - Auf ______ Tisch.",
        options: ["der", "den", "dem"],
        correctAnswer: "dem",
      },
      {
        id: 'm5-loc-8',
        type: 'sentence-scramble',
        question: {
          en: "Build 'Woher?' sentence.",
          pl: "Zbuduj zdanie z 'Woher?'.",
          uk: "Побудуйте речення з 'Woher?'.",
          sq: "Ndërtoni fjali me 'Nga ku?'."
        },
        context: ["Ich", "komme", "gerade", "vom Arzt"],
        correctAnswer: "Ich komme gerade vom Arzt",
      },
      {
        id: 'm5-loc-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete direction to a country.",
          pl: "Uzupełnij kierunek do kraju.",
          uk: "Доповніть напрямок до країни.",
          sq: "Plotësoni drejtimin për në një vend."
        },
        context: "Wir fahren ______ Italien. (to Italy)",
        correctAnswer: "nach",
      },
      {
        id: 'm5-loc-10',
        type: 'matching',
        question: {
          en: "Match location types to prepositions.",
          pl: "Dopasuj typy lokalizacji do przyimków.",
          uk: "Зіставте типи локацій з прийменниками.",
          sq: "Përputhni llojet e vendndodhjeve me parafjalët."
        },
        context: ["countries", "buildings", "people's homes", "activities"],
        options: ["zu", "nach", "in", "bei"],
        correctAnswer: ["nach", "in", "zu", "bei"],
      }
    ]
  },

  // ===== PRONOMEN (PRONOUNS) =====
  {
    id: 'personal-pronouns',
    moduleId: 1,
    title: 'Personal Pronouns (ich, du, er, sie, es...)',
    description: "Personal pronouns replace nouns. Nominative: ich, du, er, sie, es, wir, ihr, sie, Sie. They must agree with the verb conjugation.",
    exercises: [
      {
        id: 'm1-pron-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Replace noun with pronoun.",
          pl: "Zastąp rzeczownik zaimkiem.",
          uk: "Замініть іменник займенником.",
          sq: "Zëvendësoni emrin me përemër."
        },
        context: "Der Mann arbeitet. → ______ arbeitet.",
        correctAnswer: "Er",
      },
      {
        id: 'm1-pron-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct pronoun for 'die Frau'.",
          pl: "Wybierz poprawny zaimek dla 'die Frau'.",
          uk: "Виберіть правильний займенник для 'die Frau'.",
          sq: "Zgjidhni përemrin e saktë për 'die Frau'."
        },
        context: "Die Frau ist nett. → ______ ist nett.",
        options: ["Er", "Sie", "Es"],
        correctAnswer: "Sie",
      },
      {
        id: 'm1-pron-3',
        type: 'matching',
        question: {
          en: "Match nouns to their pronouns.",
          pl: "Dopasuj rzeczowniki do ich zaimków.",
          uk: "Зіставте іменники з їхніми займенниками.",
          sq: "Përputhni emrat me përemrat e tyre."
        },
        context: ["das Kind", "die Männer", "der Lehrer", "die Bücher"],
        options: ["sie (plural)", "er", "es", "sie (plural)"],
        correctAnswer: ["es", "sie (plural)", "er", "sie (plural)"],
      },
      {
        id: 'm1-pron-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with pronouns.",
          pl: "Zbuduj zdanie z zaimkami.",
          uk: "Побудуйте речення з займенниками.",
          sq: "Ndërtoni fjali me përemra."
        },
        context: ["Wir", "sind", "Studenten"],
        correctAnswer: "Wir sind Studenten",
      },
      {
        id: 'm1-pron-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete formal address.",
          pl: "Uzupełnij zwrot formalny.",
          uk: "Доповніть формальне звертання.",
          sq: "Plotësoni adresimin formal."
        },
        context: "Wie heißen ______? (formal 'you')",
        correctAnswer: "Sie",
      },
      {
        id: 'm1-pron-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Replace with accusative pronoun.",
          pl: "Zastąp zaimkiem w bierniku.",
          uk: "Замініть займенником у знахідному відмінку.",
          sq: "Zëvendësoni me përemër në rasën kallëzore."
        },
        context: "Ich sehe den Mann. → Ich sehe ______.",
        correctAnswer: "ihn",
      },
      {
        id: 'm1-pron-7',
        type: 'multiple-choice',
        question: {
          en: "Choose pronoun for 'das Auto'.",
          pl: "Wybierz zaimek dla 'das Auto'.",
          uk: "Виберіть займенник для 'das Auto'.",
          sq: "Zgjidhni përemrin për 'das Auto'."
        },
        context: "Das Auto ist neu. → ______ ist neu.",
        options: ["Er", "Sie", "Es"],
        correctAnswer: "Es",
      },
      {
        id: 'm1-pron-8',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with pronoun replacement.",
          pl: "Zbuduj zdanie z zastąpieniem zaimka.",
          uk: "Побудуйте речення із заміною займенника.",
          sq: "Ndërtoni fjali me zëvendësim përemri."
        },
        context: ["Sie", "kauft", "es", "heute"],
        correctAnswer: "Sie kauft es heute",
      },
      {
        id: 'm1-pron-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with dative pronoun.",
          pl: "Uzupełnij zaimkiem w celowniku.",
          uk: "Доповніть займенником у давальному відмінку.",
          sq: "Plotësoni me përemër në rasën dhanore."
        },
        context: "Ich helfe der Frau. → Ich helfe ______.",
        correctAnswer: "ihr",
      },
      {
        id: 'm1-pron-10',
        type: 'matching',
        question: {
          en: "Match pronouns to their cases.",
          pl: "Dopasuj zaimki do ich przypadków.",
          uk: "Зіставте займенники з їхніми відмінками.",
          sq: "Përputhni përemrat me rasat e tyre."
        },
        context: ["er (nom.)", "ihn (acc.)", "ihm (dat.)", "sie (nom.)"],
        options: ["accusative", "nominative", "dative", "nominative"],
        correctAnswer: ["nominative", "accusative", "dative", "nominative"],
      }
    ]
  },
  {
    id: 'impersonal-pronoun-man',
    moduleId: 4,
    title: 'Impersonal Pronoun "man"',
    description: "'man' corresponds to English 'one' or 'you' (general). The verb is always conjugated in 3rd person singular. Example: 'In Deutschland isst man oft Brot.'",
    exercises: [
      {
        id: 'm4-man-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'man' construction.",
          pl: "Uzupełnij konstrukcją z 'man'.",
          uk: "Доповніть конструкцією з 'man'.",
          sq: "Plotësoni me konstruksionin 'man'."
        },
        context: "In Deutschland ______ man viel Bier. (trinken)",
        correctAnswer: "trinkt",
      },
      {
        id: 'm4-man-2',
        type: 'multiple-choice',
        question: {
          en: "Choose correct verb form with 'man'.",
          pl: "Wybierz poprawną formę czasownika z 'man'.",
          uk: "Виберіть правильну форму дієслова з 'man'.",
          sq: "Zgjidhni formën e saktë të foljes me 'man'."
        },
        context: "Hier ______ man Deutsch.",
        options: ["spreche", "sprichst", "spricht", "sprechen"],
        correctAnswer: "spricht",
      },
      {
        id: 'm4-man-3',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with 'man'.",
          pl: "Zbuduj zdanie z 'man'.",
          uk: "Побудуйте речення з 'man'.",
          sq: "Ndërtoni fjali me 'man'."
        },
        context: ["In der Bibliothek", "ist", "man", "leise"],
        correctAnswer: "In der Bibliothek ist man leise",
      },
      {
        id: 'm4-man-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete general statement.",
          pl: "Uzupełnij ogólne stwierdzenie.",
          uk: "Доповніть загальне твердження.",
          sq: "Plotësoni pohimin e përgjithshëm."
        },
        context: "Wie ______ man das? (sagen)",
        correctAnswer: "sagt",
      },
      {
        id: 'm4-man-5',
        type: 'multiple-choice',
        question: {
          en: "Translate: 'One can learn German here.'",
          pl: "Przetłumacz: 'Można się tu uczyć niemieckiego.'",
          uk: "Перекладіть: 'Тут можна вивчати німецьку.'",
          sq: "Përkthejeni: 'Këtu mund të mësosh gjermanisht.'"
        },
        context: "",
        options: ["Man kann hier Deutsch lernen.", "Ich kann hier Deutsch lernen.", "Du kannst hier Deutsch lernen."],
        correctAnswer: "Man kann hier Deutsch lernen.",
      },
      {
        id: 'm4-man-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'man' + modal verb.",
          pl: "Uzupełnij 'man' + czasownik modalny.",
          uk: "Доповніть 'man' + модальне дієслово.",
          sq: "Plotësoni me 'man' + folje modale."
        },
        context: "In der Schule ______ man nicht rauchen. (dürfen)",
        correctAnswer: "darf",
      },
      {
        id: 'm4-man-7',
        type: 'sentence-scramble',
        question: {
          en: "Build general rule with 'man'.",
          pl: "Zbuduj ogólną zasadę z 'man'.",
          uk: "Сформулюйте загальне правило з 'man'.",
          sq: "Ndërtoni një rregull të përgjithshëm me 'man'."
        },
        context: ["Man", "soll", "höflich", "sein"],
        correctAnswer: "Man soll höflich sein",
      },
      {
        id: 'm4-man-8',
        type: 'multiple-choice',
        question: {
          en: "Choose correct translation of 'man'.",
          pl: "Wybierz poprawne tłumaczenie 'man'.",
          uk: "Виберіть правильний переклад 'man'.",
          sq: "Zgjidhni përkthimin e saktë të 'man'."
        },
        context: "Man arbeitet hier viel.",
        options: ["He works a lot here.", "One works a lot here.", "They work a lot here."],
        correctAnswer: "One works a lot here.",
      },
      {
        id: 'm4-man-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete cultural statement.",
          pl: "Uzupełnij stwierdzenie kulturowe.",
          uk: "Доповніть культурне твердження.",
          sq: "Plotësoni pohimin kulturor."
        },
        context: "In Österreich ______ man gern Kaffee. (trinken)",
        correctAnswer: "trinkt",
      },
      {
        id: 'm4-man-10',
        type: 'matching',
        question: {
          en: "Match 'man' sentences to their meanings.",
          pl: "Dopasuj zdania z 'man' do ich znaczeń.",
          uk: "Зіставте речення з 'man' з їхніми значеннями.",
          sq: "Përputhni fjalitë me 'man' me kuptimet e tyre."
        },
        context: ["Man lernt nie aus.", "Man weiß nie.", "Man kann nicht alles haben.", "Man muss arbeiten."],
        options: ["You can't have everything.", "One must work.", "You never know.", "You never stop learning."],
        correctAnswer: ["You never stop learning.", "You never know.", "You can't have everything.", "One must work."],
      }
    ]
  },

  // ===== SATZSTRUKTUREN (SENTENCE STRUCTURES) =====
  {
    id: 'declarative-sentences',
    moduleId: 1,
    title: 'Declarative Sentences (Aussagesätze)',
    description: "Basic structure: Subject + Verb (position 2) + Rest. Example: 'Ich lerne Deutsch.' The verb always stays in position 2.",
    exercises: [
      {
        id: 'm1-decl-1',
        type: 'sentence-scramble',
        question: {
          en: "Build basic declarative sentence.",
          pl: "Zbuduj podstawowe zdanie oznajmujące.",
          uk: "Побудуйте базове розповідне речення.",
          sq: "Ndërtoni një fjali bazë dëftore."
        },
        context: ["Ich", "lerne", "Deutsch"],
        correctAnswer: "Ich lerne Deutsch",
      },
      {
        id: 'm1-decl-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete sentence structure.",
          pl: "Uzupełnij strukturę zdania.",
          uk: "Доповніть структуру речення.",
          sq: "Plotësoni strukturën e fjalisë."
        },
        context: "Maria ______ in Berlin. (wohnen)",
        correctAnswer: "wohnt",
      },
      {
        id: 'm1-decl-3',
        type: 'multiple-choice',
        question: {
          en: "Where is the verb in German main clauses?",
          pl: "Gdzie znajduje się czasownik w niemieckich zdaniach głównych?",
          uk: "Де стоїть дієслово в німецьких головних реченнях?",
          sq: "Ku ndodhet folja në fjalitë kryesore gjermane?"
        },
        context: "",
        options: ["Position 1", "Position 2", "At the end"],
        correctAnswer: "Position 2",
      },
      {
        id: 'm1-decl-4',
        type: 'sentence-scramble',
        question: {
          en: "Build declarative with object.",
          pl: "Zbuduj zdanie oznajmujące z dopełnieniem.",
          uk: "Побудуйте розповідне речення з додатком.",
          sq: "Ndërtoni fjali dëftore me kundrinor."
        },
        context: ["Sie", "liest", "ein Buch"],
        correctAnswer: "Sie liest ein Buch",
      },
      {
        id: 'm1-decl-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct word order.",
          pl: "Uzupełnij poprawnym szykiem wyrazów.",
          uk: "Доповніть правильним порядком слів.",
          sq: "Plotësoni me rendin e saktë të fjalëve."
        },
        context: "Wir ______ heute Hausaufgaben. (machen)",
        correctAnswer: "machen",
      },
      {
        id: 'm1-decl-6',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with time expression.",
          pl: "Zbuduj zdanie z wyrażeniem czasowym.",
          uk: "Побудуйте речення з виразом часу.",
          sq: "Ndërtoni fjali me shprehje kohe."
        },
        context: ["Peter", "arbeitet", "jeden Tag"],
        correctAnswer: "Peter arbeitet jeden Tag",
      },
      {
        id: 'm1-decl-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct word order.",
          pl: "Wybierz poprawny szyk wyrazów.",
          uk: "Виберіть правильний порядок слів.",
          sq: "Zgjidhni rendin e saktë të fjalëve."
        },
        context: "Die Kinder ______ im Garten.",
        options: ["spielen", "spielt", "spielst"],
        correctAnswer: "spielen",
      },
      {
        id: 'm1-decl-8',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete declarative sentence.",
          pl: "Uzupełnij zdanie oznajmujące.",
          uk: "Доповніть розповідне речення.",
          sq: "Plotësoni fjalinë dëftore."
        },
        context: "Mein Vater ______ Arzt. (sein)",
        correctAnswer: "ist",
      },
      {
        id: 'm1-decl-9',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with location.",
          pl: "Zbuduj zdanie z lokalizacją.",
          uk: "Побудуйте речення з місцем.",
          sq: "Ndërtoni fjali me vendndodhje."
        },
        context: ["Die Studenten", "lernen", "in der Universität"],
        correctAnswer: "Die Studenten lernen in der Universität",
      },
      {
        id: 'm1-decl-10',
        type: 'matching',
        question: {
          en: "Match sentence parts to build declarative sentences.",
          pl: "Połącz części zdań, aby zbudować zdania oznajmujące.",
          uk: "З'єднайте частини речень, щоб утворити розповідні речення.",
          sq: "Përputhni pjesët e fjalive për të ndërtuar fjali dëftore."
        },
        context: ["Der Hund", "Die Lehrerin", "Wir", "Es"],
        options: ["regnet heute.", "essen Pizza.", "bellt laut.", "erklärt die Grammatik."],
        correctAnswer: ["bellt laut.", "erklärt die Grammatik.", "essen Pizza.", "regnet heute."],
      }
    ]
  },
  {
    id: 'inverted-sentences',
    moduleId: 2,
    title: 'Inverted Sentences (with Time/Adverb first)',
    description: "Structure: Time/Adverb + Verb (pos. 2) + Subject + Rest. Example: 'Heute lerne ich Deutsch.' Verb still in position 2.",
    exercises: [
      {
        id: 'm2-inv-1',
        type: 'sentence-scramble',
        question: {
          en: "Build inverted sentence starting with time.",
          pl: "Zbuduj zdanie z inwersją, zaczynając od czasu.",
          uk: "Побудуйте інвертоване речення, починаючи з часу.",
          sq: "Ndërtoni fjali të përmbysur duke filluar me kohën."
        },
        context: ["Heute", "lerne", "ich", "Deutsch"],
        correctAnswer: "Heute lerne ich Deutsch",
      },
      {
        id: 'm2-inv-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete inverted sentence.",
          pl: "Uzupełnij zdanie z inwersją.",
          uk: "Доповніть інвертоване речення.",
          sq: "Plotësoni fjalinë e përmbysur."
        },
        context: "Morgen ______ wir ins Kino. (gehen)",
        correctAnswer: "gehen",
      },
      {
        id: 'm2-inv-3',
        type: 'multiple-choice',
        question: {
          en: "Choose correct word order after time expression.",
          pl: "Wybierz poprawny szyk wyrazów po wyrażeniu czasowym.",
          uk: "Виберіть правильний порядок слів після виразу часу.",
          sq: "Zgjidhni rendin e saktë të fjalëve pas shprehjes kohore."
        },
        context: "Am Wochenende ______.",
        options: ["ich arbeite nicht", "arbeite ich nicht", "nicht arbeite ich"],
        correctAnswer: "arbeite ich nicht",
      },
      {
        id: 'm2-inv-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence starting with location.",
          pl: "Zbuduj zdanie zaczynające się od lokalizacji.",
          uk: "Побудуйте речення, починаючи з місця.",
          sq: "Ndërtoni fjali duke filluar me vendndodhjen."
        },
        context: ["In Berlin", "wohnt", "meine Schwester"],
        correctAnswer: "In Berlin wohnt meine Schwester",
      },
      {
        id: 'm2-inv-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with inverted structure.",
          pl: "Uzupełnij strukturą z inwersją.",
          uk: "Доповніть інвертованою структурою.",
          sq: "Plotësoni me strukturë të përmbysur."
        },
        context: "Abends ______ ich gern. (fernsehen)",
        correctAnswer: "sehe fern",
      },
      {
        id: 'm2-inv-6',
        type: 'sentence-scramble',
        question: {
          en: "Build inverted sentence with adverb.",
          pl: "Zbuduj zdanie z inwersją i przysłówkiem.",
          uk: "Побудуйте інвертоване речення з прислівником.",
          sq: "Ndërtoni fjali të përmbysur me ndajfolje."
        },
        context: ["Manchmal", "trinke", "ich", "Kaffee"],
        correctAnswer: "Manchmal trinke ich Kaffee",
      },
      {
        id: 'm2-inv-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct inversion after 'Dort'.",
          pl: "Wybierz poprawną inwersję po 'Dort'.",
          uk: "Виберіть правильну інверсію після 'Dort'.",
          sq: "Zgjidhni përmbysjen e saktë pas 'Dort'."
        },
        context: "Dort ______ meine Eltern.",
        options: ["wohnen", "wohnt", "wohnst"],
        correctAnswer: "wohnen",
      },
      {
        id: 'm2-inv-8',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete inverted sentence with modal.",
          pl: "Uzupełnij zdanie z inwersją i czasownikiem modalnym.",
          uk: "Доповніть інвертоване речення з модальним дієсловом.",
          sq: "Plotësoni fjalinë e përmbysur me folje modale."
        },
        context: "Nächste Woche ______ ich nach München ______. (fahren/müssen)",
        correctAnswer: ["muss", "fahren"],
      },
      {
        id: 'm2-inv-9',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence starting with 'Hier'.",
          pl: "Zbuduj zdanie zaczynające się od 'Hier'.",
          uk: "Побудуйте речення, що починається з 'Hier'.",
          sq: "Ndërtoni fjali duke filluar me 'Hier'."
        },
        context: ["Hier", "kann", "man", "gut essen"],
        correctAnswer: "Hier kann man gut essen",
      },
      {
        id: 'm2-inv-10',
        type: 'matching',
        question: {
          en: "Match time expressions to inverted sentences.",
          pl: "Dopasuj wyrażenia czasowe do zdań z inwersją.",
          uk: "Зіставте вирази часу з інвертованими реченнями.",
          sq: "Përputhni shprehjet kohore me fjalitë e përmbysura."
        },
        context: ["Gestern", "Jeden Morgen", "Im Winter", "Nach der Arbeit"],
        options: ["gehe ich nach Hause.", "war ich im Kino.", "ist es kalt.", "trinke ich Kaffee."],
        correctAnswer: ["war ich im Kino.", "trinke ich Kaffee.", "ist es kalt.", "gehe ich nach Hause."],
      }
    ]
  },
  {
    id: 'w-questions',
    moduleId: 2,
    title: 'W-Questions (W-Fragen)',
    description: "Structure: W-word + Verb (pos. 2) + Subject + Rest? Question words: wer, was, wo, wann, wie, warum, woher, wohin.",
    exercises: [
      {
        id: 'm2-w-1',
        type: 'matching',
        question: {
          en: "Match W-words to their English meanings.",
          pl: "Dopasuj słowa pytające (W-Wörter) do ich angielskich znaczeń.",
          uk: "Зіставте питальні слова (W-Wörter) з їхніми англійськими значеннями.",
          sq: "Përputhni fjalët pyetëse (W-Wörter) me kuptimet e tyre në anglisht."
        },
        context: ["wer", "was", "wo", "wann", "wie", "warum"],
        options: ["why", "how", "when", "what", "who", "where"],
        correctAnswer: ["who", "what", "where", "when", "how", "why"],
      },
      {
        id: 'm2-w-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete W-question asking for person.",
          pl: "Uzupełnij W-pytanie pytające o osobę.",
          uk: "Доповніть W-питання, що запитує про особу.",
          sq: "Plotësoni pyetjen me W- që pyet për personin."
        },
        context: "______ ist das? - Das ist mein Lehrer.",
        correctAnswer: "Wer",
      },
      {
        id: 'm2-w-3',
        type: 'sentence-scramble',
        question: {
          en: "Build W-question asking for location.",
          pl: "Zbuduj W-pytanie pytające o lokalizację.",
          uk: "Побудуйте W-питання, що запитує про місцезнаходження.",
          sq: "Ndërtoni pyetje me W- që pyet për vendndodhjen."
        },
        context: ["Wo", "arbeiten", "Sie", "?"],
        correctAnswer: "Wo arbeiten Sie?",
      },
      {
        id: 'm2-w-4',
        type: 'multiple-choice',
        question: {
          en: "Choose correct W-word for time.",
          pl: "Wybierz poprawne słowo pytające (W-Wort) dla czasu.",
          uk: "Виберіть правильне питальне слово (W-Wort) для часу.",
          sq: "Zgjidhni fjalën e saktë pyetëse (W-Wort) për kohën."
        },
        context: "______ kommst du? - Um 8 Uhr.",
        options: ["Wo", "Wann", "Wie"],
        correctAnswer: "Wann",
      },
      {
        id: 'm2-w-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete question about origin.",
          pl: "Uzupełnij pytanie o pochodzenie.",
          uk: "Доповніть питання про походження.",
          sq: "Plotësoni pyetjen për origjinën."
        },
        context: "______ kommen Sie? - Aus Spanien.",
        correctAnswer: "Woher",
      },
      {
        id: 'm2-w-6',
        type: 'sentence-scramble',
        question: {
          en: "Build question about destination.",
          pl: "Zbuduj pytanie o cel podróży.",
          uk: "Побудуйте питання про місце призначення.",
          sq: "Ndërtoni pyetje për destinacionin."
        },
        context: ["Wohin", "fährt", "der Bus", "?"],
        correctAnswer: "Wohin fährt der Bus?",
      },
      {
        id: 'm2-w-7',
        type: 'multiple-choice',
        question: {
          en: "Choose W-word for reason.",
          pl: "Wybierz słowo pytające (W-Wort) dla powodu.",
          uk: "Виберіть питальне слово (W-Wort) для причини.",
          sq: "Zgjidhni fjalën pyetëse (W-Wort) për arsyen."
        },
        context: "______ lernst du Deutsch? - Für meinen Job.",
        options: ["Wie", "Warum", "Was"],
        correctAnswer: "Warum",
      },
      {
        id: 'm2-w-8',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete question about manner.",
          pl: "Uzupełnij pytanie o sposób.",
          uk: "Доповніть питання про спосіб.",
          sq: "Plotësoni pyetjen për mënyrën."
        },
        context: "______ geht es dir? - Gut, danke.",
        correctAnswer: "Wie",
      },
      {
        id: 'm2-w-9',
        type: 'sentence-scramble',
        question: {
          en: "Build question about object.",
          pl: "Zbuduj pytanie o obiekt.",
          uk: "Побудуйте питання про об'єкт.",
          sq: "Ndërtoni pyetje për objektin."
        },
        context: ["Was", "kaufst", "du", "?"],
        correctAnswer: "Was kaufst du?",
      },
      {
        id: 'm2-w-10',
        type: 'matching',
        question: {
          en: "Match W-questions to appropriate answers.",
          pl: "Dopasuj W-pytania do odpowiednich odpowiedzi.",
          uk: "Зіставте W-питання з відповідними відповідями.",
          sq: "Përputhni pyetjet me W- me përgjigjet e duhura."
        },
        context: ["Wer kommt?", "Was machst du?", "Wo wohnst du?", "Wann beginnt der Film?"],
        options: ["Um 20 Uhr.", "In Hamburg.", "Mein Bruder.", "Ich lese."],
        correctAnswer: ["Mein Bruder.", "Ich lese.", "In Hamburg.", "Um 20 Uhr."],
      }
    ]
  },
  {
    id: 'yes-no-questions',
    moduleId: 2,
    title: 'Yes/No Questions (Ja/Nein-Fragen)',
    description: "Structure: Verb (pos. 1) + Subject + Rest? Example: 'Kommen Sie aus Spanien?' Answer: 'Ja/Nein, ich komme aus...'",
    exercises: [
      {
        id: 'm2-yn-1',
        type: 'sentence-scramble',
        question: {
          en: "Build yes/no question.",
          pl: "Zbuduj pytanie typu tak/nie.",
          uk: "Побудуйте питання типу так/ні.",
          sq: "Ndërtoni pyetje po/jo."
        },
        context: ["Sprechen", "Sie", "Deutsch", "?"],
        correctAnswer: "Sprechen Sie Deutsch?",
      },
      {
        id: 'm2-yn-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete yes/no question.",
          pl: "Uzupełnij pytanie typu tak/nie.",
          uk: "Доповніть питання типу так/ні.",
          sq: "Plotësoni pyetjen po/jo."
        },
        context: "______ du Zeit? (haben)",
        correctAnswer: "Hast",
      },
      {
        id: 'm2-yn-3',
        type: 'multiple-choice',
        question: {
          en: "Choose correct question formation.",
          pl: "Wybierz poprawną formację pytania.",
          uk: "Виберіть правильну форму питання.",
          sq: "Zgjidhni formimin e saktë të pyetjes."
        },
        context: "Ask if they work here.",
        options: ["Arbeiten Sie hier?", "Wo arbeiten Sie?", "Sie arbeiten hier?"],
        correctAnswer: "Arbeiten Sie hier?",
      },
      {
        id: 'm2-yn-4',
        type: 'fill-in-the-blank',
        question: {
          en: "Form question from statement.",
          pl: "Utwórz pytanie ze zdania oznajmującego.",
          uk: "Утворіть питання з твердження.",
          sq: "Formoni pyetje nga pohimi."
        },
        context: "Er kommt aus Italien. → ______ er aus Italien?",
        correctAnswer: "Kommt",
      },
      {
        id: 'm2-yn-5',
        type: 'sentence-scramble',
        question: {
          en: "Build yes/no question with modal verb.",
          pl: "Zbuduj pytanie typu tak/nie z czasownikiem modalnym.",
          uk: "Побудуйте питання типу так/ні з модальним дієсловом.",
          sq: "Ndërtoni pyetje po/jo me folje modale."
        },
        context: ["Können", "Sie", "mir", "helfen", "?"],
        correctAnswer: "Können Sie mir helfen?",
      },
      {
        id: 'm2-yn-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Build question with 'sein'.",
          pl: "Zbuduj pytanie z 'sein'.",
          uk: "Побудуйте питання з 'sein'.",
          sq: "Ndërtoni pyetje me 'sein'."
        },
        context: "______ du müde? (sein)",
        correctAnswer: "Bist",
      },
      {
        id: 'm2-yn-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct yes/no question.",
          pl: "Wybierz poprawne pytanie typu tak/nie.",
          uk: "Виберіть правильне питання типу так/ні.",
          sq: "Zgjidhni pyetjen e saktë po/jo."
        },
        context: "Ask if she likes coffee.",
        options: ["Mag sie Kaffee?", "Was mag sie?", "Wie mag sie Kaffee?"],
        correctAnswer: "Mag sie Kaffee?",
      },
      {
        id: 'm2-yn-8',
        type: 'sentence-scramble',
        question: {
          en: "Build question about possession.",
          pl: "Zbuduj pytanie o posiadanie.",
          uk: "Побудуйте питання про володіння.",
          sq: "Ndërtoni pyetje për pronësinë."
        },
        context: ["Haben", "Sie", "Kinder", "?"],
        correctAnswer: "Haben Sie Kinder?",
      },
      {
        id: 'm2-yn-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete question with separable verb.",
          pl: "Uzupełnij pytanie z czasownikiem rozdzielnie złożonym.",
          uk: "Доповніть питання з роздільним дієсловом.",
          sq: "Plotësoni pyetjen me folje të ndashme."
        },
        context: "______ du heute ______? (einkaufen)",
        correctAnswer: ["Kaufst", "ein"],
      },
      {
        id: 'm2-yn-10',
        type: 'matching',
        question: {
          en: "Match yes/no questions to appropriate answers.",
          pl: "Dopasuj pytania typu tak/nie do odpowiednich odpowiedzi.",
          uk: "Зіставте питання типу так/ні з відповідними відповідями.",
          sq: "Përputhni pyetjet po/jo me përgjigjet e duhura."
        },
        context: ["Wohnst du hier?", "Kannst du schwimmen?", "Hast du Hunger?", "Bist du Student?"],
        options: ["Nein, ich bin Lehrer.", "Ja, sehr.", "Ja, seit zwei Jahren.", "Nein, aber ich lerne es."],
        correctAnswer: ["Ja, seit zwei Jahren.", "Nein, aber ich lerne es.", "Ja, sehr.", "Nein, ich bin Lehrer."],
      }
    ]
  },
  {
    id: 'sentence-bracket',
    moduleId: 3,
    title: 'Sentence Bracket (Satzklammer)',
    description: "With modal verbs: conjugated modal at pos. 2, infinitive at end. With separable verbs: stem at pos. 2, prefix at end. Examples: 'Wir wollen nach Berlin fahren.' / 'Der Zug fährt ab.'",
    exercises: [
      {
        id: 'm3-bracket-1',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with modal verb bracket.",
          pl: "Zbuduj zdanie z ramą czasownikową (czasownik modalny).",
          uk: "Побудуйте речення з рамковою конструкцією (модальне дієслово).",
          sq: "Ndërtoni fjali me kllapë fjalie (folje modale)."
        },
        context: ["Ich", "kann", "gut", "schwimmen"],
        correctAnswer: "Ich kann gut schwimmen",
      },
      {
        id: 'm3-bracket-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete sentence bracket with separable verb.",
          pl: "Uzupełnij ramę zdania czasownikiem rozdzielnie złożonym.",
          uk: "Доповніть рамкову конструкцію роздільним дієсловом.",
          sq: "Plotësoni kllapën e fjalisë me folje të ndashme."
        },
        context: "Wann ______ der Zug ______? (abfahren)",
        correctAnswer: ["fährt", "ab"],
      },
      {
        id: 'm3-bracket-3',
        type: 'multiple-choice',
        question: {
          en: "Where does the infinitive go with modal verbs?",
          pl: "Gdzie umieszcza się bezokolicznik z czasownikami modalnymi?",
          uk: "Де ставиться інфінітив з модальними дієсловами?",
          sq: "Ku shkon paskajorja me foljet modale?"
        },
        context: "Wir müssen heute ______.",
        options: ["arbeiten", "arbeite", "arbeitest"],
        correctAnswer: "arbeiten",
      },
      {
        id: 'm3-bracket-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with separable verb bracket.",
          pl: "Zbuduj zdanie z ramą czasownikową (czasownik rozdzielny).",
          uk: "Побудуйте речення з рамковою конструкцією (роздільне дієслово).",
          sq: "Ndërtoni fjali me kllapë fjalie (folje e ndashme)."
        },
        context: ["Sie", "steht", "um 7 Uhr", "auf"],
        correctAnswer: "Sie steht um 7 Uhr auf",
      },
      {
        id: 'm3-bracket-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete modal verb sentence.",
          pl: "Uzupełnij zdanie z czasownikiem modalnym.",
          uk: "Доповніть речення з модальним дієсловом.",
          sq: "Plotësoni fjalinë me folje modale."
        },
        context: "Wir ______ am Wochenende ins Theater ______. (wollen/gehen)",
        correctAnswer: ["wollen", "gehen"],
      },
      {
        id: 'm3-bracket-6',
        type: 'sentence-scramble',
        question: {
          en: "Build bracket with modal and time.",
          pl: "Zbuduj ramę zdania z czasownikiem modalnym i czasem.",
          uk: "Побудуйте рамкову конструкцію з модальним дієсловом і часом.",
          sq: "Ndërtoni kllapë me folje modale dhe kohë."
        },
        context: ["Du", "musst", "morgen", "früh aufstehen"],
        correctAnswer: "Du musst morgen früh aufstehen",
      },
      {
        id: 'm3-bracket-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct bracket structure.",
          pl: "Wybierz poprawną strukturę ramową.",
          uk: "Виберіть правильну рамкову структуру.",
          sq: "Zgjidhni strukturën e saktë të kllapës."
        },
        context: "Er ______ heute nicht ______. (arbeiten/können)",
        options: ["kann ... arbeiten", "arbeiten ... kann", "kann arbeiten"],
        correctAnswer: "kann ... arbeiten",
      },
      {
        id: 'm3-bracket-8',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with separable verb bracket.",
          pl: "Uzupełnij ramą z czasownikiem rozdzielnym.",
          uk: "Доповніть рамковою конструкцією з роздільним дієсловом.",
          sq: "Plotësoni me kllapë fjalie (folje e ndashme)."
        },
        context: "Ich ______ meine Freunde ______. (anrufen)",
        correctAnswer: ["rufe", "an"],
      },
      {
        id: 'm3-bracket-9',
        type: 'sentence-scramble',
        question: {
          en: "Build inverted sentence with bracket.",
          pl: "Zbuduj zdanie z inwersją i ramą.",
          uk: "Побудуйте інвертоване речення з рамковою конструкцією.",
          sq: "Ndërtoni fjali të përmbysur me kllapë."
        },
        context: ["Morgen", "will", "ich", "einkaufen gehen"],
        correctAnswer: "Morgen will ich einkaufen gehen",
      },
      {
        id: 'm3-bracket-10',
        type: 'matching',
        question: {
          en: "Match bracket types to examples.",
          pl: "Dopasuj typy ram do przykładów.",
          uk: "Зіставте типи рамкових конструкцій з прикладами.",
          sq: "Përputhni llojet e kllapave me shembuj."
        },
        context: ["Modal + Infinitive", "Separable Verb", "Perfect Tense", "Infinitive + zu"],
        options: ["Er versucht zu lernen.", "Ich habe geschlafen.", "Sie macht auf.", "Wir können kommen."],
        correctAnswer: ["Wir können kommen.", "Sie macht auf.", "Ich habe geschlafen.", "Er versucht zu lernen."],
      }
    ]
  },

  // ===== WORTSCHATZ (VOCABULARY) THEMES =====
  {
    id: 'family-vocabulary',
    moduleId: 1,
    title: 'Family Vocabulary (Familie)',
    description: "Family members: die Mutter, der Vater, die Eltern, der Bruder, die Schwester, die Geschwister, der Sohn, die Tochter, die Großeltern.",
    exercises: [
      {
        id: 'm1-fam-1',
        type: 'matching',
        question: {
          en: "Match family terms to their English meanings.",
          pl: "Dopasuj terminy rodzinne do ich angielskich znaczeń.",
          uk: "Зіставте родинні терміни з їхніми англійськими значеннями.",
          sq: "Përputhni termat familjarë me kuptimet e tyre në anglisht."
        },
        context: ["die Mutter", "der Vater", "die Geschwister", "die Großeltern"],
        options: ["father", "siblings", "mother", "grandparents"],
        correctAnswer: ["mother", "father", "siblings", "grandparents"],
      },
      {
        id: 'm1-fam-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete family description.",
          pl: "Uzupełnij opis rodziny.",
          uk: "Доповніть опис родини.",
          sq: "Plotësoni përshkrimin e familjes."
        },
        context: "Ich habe einen ______ und eine ______.",
        correctAnswer: ["Bruder", "Schwester"],
      },
      {
        id: 'm1-fam-3',
        type: 'multiple-choice',
        question: {
          en: "What do you call your parents' parents?",
          pl: "Jak nazywasz rodziców swoich rodziców?",
          uk: "Як ви називаєте батьків ваших батьків?",
          sq: "Si i quani prindërit e prindërve tuaj?"
        },
        context: "",
        options: ["die Geschwister", "die Großeltern", "die Eltern"],
        correctAnswer: "die Großeltern",
      },
      {
        id: 'm1-fam-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence about family.",
          pl: "Zbuduj zdanie o rodzinie.",
          uk: "Побудуйте речення про сім'ю.",
          sq: "Ndërtoni fjali për familjen."
        },
        context: ["Meine", "Familie", "ist", "groß"],
        correctAnswer: "Meine Familie ist groß",
      },
      {
        id: 'm1-fam-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with family term.",
          pl: "Uzupełnij terminem rodzinnym.",
          uk: "Доповніть родинним терміном.",
          sq: "Plotësoni me termin familjar."
        },
        context: "Der ______ von meinen Eltern bin ich.",
        correctAnswer: "Sohn",
      },
      {
        id: 'm1-fam-6',
        type: 'matching',
        question: {
          en: "Match family members to their relationships.",
          pl: "Dopasuj członków rodziny do ich relacji.",
          uk: "Зіставте членів родини з їхніми стосунками.",
          sq: "Përputhni anëtarët e familjes me marrëdhëniet e tyre."
        },
        context: ["der Onkel", "die Tante", "der Cousin", "die Nichte"],
        options: ["nephew's sister", "uncle", "male cousin", "aunt"],
        correctAnswer: ["uncle", "aunt", "male cousin", "nephew's sister"],
      },
      {
        id: 'm1-fam-7',
        type: 'multiple-choice',
        question: {
          en: "Choose the correct term for 'daughter'.",
          pl: "Wybierz poprawny termin na 'córka'.",
          uk: "Виберіть правильний термін для 'дочка'.",
          sq: "Zgjidhni termin e saktë për 'vajzë'."
        },
        context: "Meine ______ ist 5 Jahre alt.",
        options: ["Sohn", "Tochter", "Schwester"],
        correctAnswer: "Tochter",
      },
      {
        id: 'm1-fam-8',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence about grandparents.",
          pl: "Zbuduj zdanie o dziadkach.",
          uk: "Побудуйте речення про дідуся та бабусю.",
          sq: "Ndërtoni fjali për gjyshërit."
        },
        context: ["Meine", "Großeltern", "wohnen", "in Bayern"],
        correctAnswer: "Meine Großeltern wohnen in Bayern",
      },
      {
        id: 'm1-fam-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete family tree description.",
          pl: "Uzupełnij opis drzewa genealogicznego.",
          uk: "Доповніть опис родовідного дерева.",
          sq: "Plotësoni përshkrimin e pemës familjare."
        },
        context: "Meine ______ haben zwei Kinder: meinen Bruder und mich.",
        correctAnswer: "Eltern",
      },
      {
        id: 'm1-fam-10',
        type: 'matching',
        question: {
          en: "Match family terms to plural forms.",
          pl: "Dopasuj terminy rodzinne do form liczby mnogiej.",
          uk: "Зіставте родинні терміни з формами множини.",
          sq: "Përputhni termat familjarë me format e shumësit."
        },
        context: ["der Bruder", "die Schwester", "das Kind", "der Sohn"],
        options: ["die Söhne", "die Brüder", "die Kinder", "die Schwestern"],
        correctAnswer: ["die Brüder", "die Schwestern", "die Kinder", "die Söhne"],
      }
    ]
  },
  {
    id: 'professions-vocabulary',
    moduleId: 2,
    title: 'Professions (Berufe)',
    description: "Common professions: der Arzt/die Ärztin, der Ingenieur, die Krankenschwester, der Kellner, die Köchin, der Programmierer, der Bankkaufmann/die Bankkauffrau.",
    exercises: [
      {
        id: 'm2-prof-1',
        type: 'matching',
        question: {
          en: "Match professions to their workplaces.",
          pl: "Dopasuj zawody do ich miejsc pracy.",
          uk: "Зіставте професії з їхніми місцями роботи.",
          sq: "Përputhni profesionet me vendet e tyre të punës."
        },
        context: ["der Arzt", "der Kellner", "die Köchin", "der Programmierer"],
        options: ["im Restaurant", "im Krankenhaus", "im Büro", "in der Küche"],
        correctAnswer: ["im Krankenhaus", "im Restaurant", "in der Küche", "im Büro"],
      },
      {
        id: 'm2-prof-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete profession with article.",
          pl: "Uzupełnij zawód rodzajnikiem.",
          uk: "Доповніть професію артиклем.",
          sq: "Plotësoni profesionin me nyje."
        },
        context: "Sie ist ______ Krankenschwester.",
        correctAnswer: "eine",
      },
      {
        id: 'm2-prof-3',
        type: 'multiple-choice',
        question: {
          en: "Choose female form of 'der Bankkaufmann'.",
          pl: "Wybierz żeńską formę 'der Bankkaufmann'.",
          uk: "Виберіть жіночу форму 'der Bankkaufmann'.",
          sq: "Zgjidhni formën femërore të 'der Bankkaufmann'."
        },
        context: "",
        options: ["die Bankkauffrau", "die Bankkaufmann", "der Bankkauffrau"],
        correctAnswer: "die Bankkauffrau",
      },
      {
        id: 'm2-prof-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence about profession.",
          pl: "Zbuduj zdanie o zawodzie.",
          uk: "Побудуйте речення про професію.",
          sq: "Ndërtoni fjali për profesionin."
        },
        context: ["Ich", "arbeite", "als", "Ingenieur"],
        correctAnswer: "Ich arbeite als Ingenieur",
      },
      {
        id: 'm2-prof-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Ask about profession.",
          pl: "Zapytaj o zawód.",
          uk: "Запитайте про професію.",
          sq: "Pyetni për profesionin."
        },
        context: "Was sind Sie von ______?",
        correctAnswer: "Beruf",
      },
      {
        id: 'm2-prof-6',
        type: 'matching',
        question: {
          en: "Match professions to their tools/equipment.",
          pl: "Dopasuj zawody do ich narzędzi/sprzętu.",
          uk: "Зіставте професії з їхніми інструментами/обладнанням.",
          sq: "Përputhni profesionet me mjetet/pajisjet e tyre."
        },
        context: ["der Mechaniker", "die Lehrerin", "der Koch", "der Polizist"],
        options: ["Handschellen", "Tafel", "Pfanne", "Schraubenschlüssel"],
        correctAnswer: ["Schraubenschlüssel", "Tafel", "Pfanne", "Handschellen"],
      },
      {
        id: 'm2-prof-7',
        type: 'multiple-choice',
        question: {
          en: "Choose the profession that works in a hospital.",
          pl: "Wybierz zawód, który wykonuje się w szpitalu.",
          uk: "Виберіть професію, представники якої працюють у лікарні.",
          sq: "Zgjidhni profesionin që punohet në spital."
        },
        context: "",
        options: ["der Bäcker", "die Krankenschwester", "der Friseur"],
        correctAnswer: "die Krankenschwester",
      },
      {
        id: 'm2-prof-8',
        type: 'sentence-scramble',
        question: {
          en: "Build question about profession.",
          pl: "Zbuduj pytanie o zawód.",
          uk: "Побудуйте питання про професію.",
          sq: "Ndërtoni pyetje për profesionin."
        },
        context: ["Was", "möchten", "Sie", "werden", "?"],
        correctAnswer: "Was möchten Sie werden?",
      },
      {
        id: 'm2-prof-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with male profession form.",
          pl: "Uzupełnij męską formą zawodu.",
          uk: "Доповніть чоловічою формою професії.",
          sq: "Plotësoni me formën mashkullore të profesionit."
        },
        context: "Er ist ______ Verkäufer im Supermarkt.",
        correctAnswer: "ein",
      },
      {
        id: 'm2-prof-10',
        type: 'matching',
        question: {
          en: "Match job descriptions to professions.",
          pl: "Dopasuj opisy stanowisk do zawodów.",
          uk: "Зіставте описи роботи з професіями.",
          sq: "Përputhni përshkrimet e punës me profesionet."
        },
        context: ["hilft kranken Menschen", "unterrichtet Kinder", "repariert Autos", "verkauft Kleidung"],
        options: ["der Verkäufer", "der Arzt", "der Lehrer", "der Mechaniker"],
        correctAnswer: ["der Arzt", "der Lehrer", "der Mechaniker", "der Verkäufer"],
      }
    ]
  },
  {
    id: 'daily-activities-time',
    moduleId: 3,
    title: 'Daily Activities and Time (Alltag & Zeit)',
    description: "Activities: arbeiten, lernen, schlafen, einkaufen, essen, trinken. Times: der Morgen, der Mittag, der Abend. Time expressions: heute, morgen, gestern, am Wochenende.",
    exercises: [
      {
        id: 'm3-daily-1',
        type: 'matching',
        question: {
          en: "Match activities to appropriate times.",
          pl: "Dopasuj czynności do odpowiednich pór dnia.",
          uk: "Зіставте дії з відповідним часом.",
          sq: "Përputhni aktivitetet me kohët e duhura."
        },
        context: ["frühstücken", "arbeiten", "schlafen", "fernsehen"],
        options: ["am Abend", "am Morgen", "am Tag", "in der Nacht"],
        correctAnswer: ["am Morgen", "am Tag", "in der Nacht", "am Abend"],
      },
      {
        id: 'm3-daily-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete daily routine.",
          pl: "Uzupełnij codzienną rutynę.",
          uk: "Доповніть розпорядок дня.",
          sq: "Plotësoni rutinën ditore."
        },
        context: "______ stehe ich um 7 Uhr auf.",
        correctAnswer: "Morgens",
      },
      {
        id: 'm3-daily-3',
        type: 'multiple-choice',
        question: {
          en: "When do you typically go shopping?",
          pl: "Kiedy zazwyczaj chodzisz na zakupy?",
          uk: "Коли ви зазвичай ходите за покупками?",
          sq: "Kur zakonisht shkoni për pazar?"
        },
        context: "Ich gehe ______ einkaufen.",
        options: ["am Wochenende", "in der Nacht", "beim Schlafen"],
        correctAnswer: "am Wochenende",
      },
      {
        id: 'm3-daily-4',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence about weekend.",
          pl: "Zbuduj zdanie o weekendzie.",
          uk: "Побудуйте речення про вихідні.",
          sq: "Ndërtoni fjali për fundjavën."
        },
        context: ["Am Samstag", "besuche", "ich", "Freunde"],
        correctAnswer: "Am Samstag besuche ich Freunde",
      },
      {
        id: 'm3-daily-5',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete time expression.",
          pl: "Uzupełnij wyrażenie czasowe.",
          uk: "Доповніть вираз часу.",
          sq: "Plotësoni shprehjen kohore."
        },
        context: "______ war ich im Kino. (yesterday)",
        correctAnswer: "Gestern",
      },
      {
        id: 'm3-daily-6',
        type: 'matching',
        question: {
          en: "Match time periods to activities.",
          pl: "Dopasuj pory dnia do czynności.",
          uk: "Зіставте періоди часу з діями.",
          sq: "Përputhni periudhat kohore me aktivitetet."
        },
        context: ["der Vormittag", "der Nachmittag", "der Abend", "die Nacht"],
        options: ["schlafen", "Mittagessen", "zur Arbeit gehen", "entspannen"],
        correctAnswer: ["zur Arbeit gehen", "Mittagessen", "entspannen", "schlafen"],
      },
      {
        id: 'm3-daily-7',
        type: 'multiple-choice',
        question: {
          en: "Choose the correct time expression.",
          pl: "Wybierz poprawne wyrażenie czasowe.",
          uk: "Виберіть правильний вираз часу.",
          sq: "Zgjidhni shprehjen e saktë kohore."
        },
        context: "______ gehe ich um 22 Uhr ins Bett.",
        options: ["Morgens", "Abends", "Mittags"],
        correctAnswer: "Abends",
      },
      {
        id: 'm3-daily-8',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence about weekly routine.",
          pl: "Zbuduj zdanie o rutynie tygodniowej.",
          uk: "Побудуйте речення про тижневий розпорядок.",
          sq: "Ndërtoni fjali për rutinën javore."
        },
        context: ["Jeden", "Donnerstag", "gehe", "ich", "zum Sport"],
        correctAnswer: "Jeden Donnerstag gehe ich zum Sport",
      },
      {
        id: 'm3-daily-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with frequency adverb. (always)",
          pl: "Uzupełnij przysłówkiem częstotliwości. (always)",
          uk: "Доповніть прислівником частоти. (always)",
          sq: "Plotësoni me ndajfoljen e shpeshtësisë. (always)"
        },
        context: "Ich trinke ______ Kaffee zum Frühstück.",
        correctAnswer: "immer",
      }
    ]
  },
  {
    id: 'telling-time',
    moduleId: 3,
    title: 'Telling Time (Uhrzeit)',
    description: "Official time uses the 24-hour clock ('Es ist 14:30 Uhr' → vierzehn Uhr dreißig). Unofficial/colloquial time uses a 12-hour clock with prepositions: nach (after), vor (before), Viertel (quarter), halb (half). Note: 'halb drei' means 2:30, not 3:30!",
    exercises: [
      {
        id: 'm3-time-1',
        type: 'matching',
        question: {
          en: "Match official times to unofficial times.",
          pl: "Dopasuj oficjalne godziny do nieoficjalnych.",
          uk: "Зіставте офіційний час з неофіційним.",
          sq: "Përputhni orët zyrtare me ato jozyrtare."
        },
        context: ["14:30", "08:15", "19:45", "11:55"],
        options: ["fünf vor zwölf", "Viertel vor acht", "Viertel nach acht", "halb drei"],
        correctAnswer: ["halb drei", "Viertel nach acht", "Viertel vor acht", "fünf vor zwölf"],
      },
      {
        id: 'm3-time-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'nach' or 'vor'.",
          pl: "Uzupełnij 'nach' lub 'vor'.",
          uk: "Доповніть 'nach' або 'vor'.",
          sq: "Plotësoni me 'nach' ose 'vor'."
        },
        context: "Es ist 10:20 Uhr. Es ist zwanzig ______ zehn.",
        correctAnswer: "nach",
      },
      {
        id: 'm3-time-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'nach' or 'vor'.",
          pl: "Uzupełnij 'nach' lub 'vor'.",
          uk: "Доповніть 'nach' або 'vor'.",
          sq: "Plotësoni me 'nach' ose 'vor'."
        },
        context: "Es ist 15:40 Uhr. Es ist zwanzig ______ vier.",
        correctAnswer: "vor",
      },
      {
        id: 'm3-time-4',
        type: 'multiple-choice',
        question: {
          en: "How do you say 5:30 (unofficially)?",
          pl: "Jak powiesz 5:30 (nieoficjalnie)?",
          uk: "Як сказати 5:30 (неофіційно)?",
          sq: "Si thua 5:30 (jozyrtarisht)?"
        },
        context: "Es ist 5:30 Uhr. Es ist ______.",
        options: ["halb fünf", "halb sechs", "dreißig nach fünf"],
        correctAnswer: "halb sechs",
        hint: "In German, 'halb' refers to the next hour.",
      },
      {
        id: 'm3-time-5',
        type: 'sentence-scramble',
        question: {
          en: "Ask for the time.",
          pl: "Zapytaj o godzinę.",
          uk: "Запитайте про час.",
          sq: "Pyetni për orën."
        },
        context: ["Wie", "spät", "ist", "es", "?"],
        correctAnswer: "Wie spät ist es?",
      },
      {
        id: 'm3-time-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Write the time officially.",
          pl: "Napisz godzinę oficjalnie.",
          uk: "Напишіть час офіційно.",
          sq: "Shkruani orën zyrtarisht."
        },
        context: "Der Zug fährt um ______. (19:05)",
        correctAnswer: "neunzehn Uhr fünf",
      },
      {
        id: 'm3-time-7',
        type: 'multiple-choice',
        question: {
          en: "What is 2:45 unofficially?",
          pl: "Jak jest 2:45 nieoficjalnie?",
          uk: "Як буде 2:45 неофіційно?",
          sq: "Sa është ora 2:45 jozyrtarisht?"
        },
        context: "Es ist 2:45 Uhr. Es ist ______.",
        options: ["Viertel nach drei", "drei Viertel drei", "Viertel vor drei"],
        correctAnswer: "Viertel vor drei",
      },
      {
        id: 'm3-time-8',
        type: 'fill-in-the-blank',
        question: {
          en: "Answer the question with the correct preposition.",
          pl: "Odpowiedz na pytanie, używając poprawnego przyimka.",
          uk: "Дайте відповідь на запитання, використовуючи правильний прийменник.",
          sq: "Përgjigjjuni pyetjes me parafjalën e saktë."
        },
        context: "Wann beginnt der Film? - ______ halb acht.",
        correctAnswer: "Um",
      },
      {
        id: 'm3-time-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Write the unofficial time.",
          pl: "Napisz nieoficjalną godzinę.",
          uk: "Напишіть неофіційний час.",
          sq: "Shkruani orën jozyrtare."
        },
        context: "Es ist 7:25 Uhr. Es ist fünf vor halb ______.",
        correctAnswer: "acht",
      },
      {
        id: 'm3-time-10',
        type: 'matching',
        question: {
          en: "Match the official time to the unofficial phrase.",
          pl: "Dopasuj oficjalny czas do nieoficjalnej frazy.",
          uk: "Зіставте офіційний час з неофіційною фразою.",
          sq: "Përputhni orën zyrtare me frazën jozyrtare."
        },
        context: ["13:00", "20:15", "09:30", "16:50"],
        options: ["zehn vor fünf", "Viertel nach acht", "halb zehn", "ein Uhr"],
        correctAnswer: ["ein Uhr", "Viertel nach acht", "halb zehn", "zehn vor fünf"],
      },
      {
        id: 'm3-time-11',
        type: 'sentence-scramble',
        question: {
          en: "Build a sentence about an appointment.",
          pl: "Zbuduj zdanie o spotkaniu.",
          uk: "Побудуйте речення про зустріч.",
          sq: "Ndërtoni një fjali për një takim."
        },
        context: ["Der", "Termin", "ist", "um", "Viertel", "vor", "zehn"],
        correctAnswer: "Der Termin ist um Viertel vor zehn",
      },
      {
        id: 'm3-time-12',
        type: 'multiple-choice',
        question: {
          en: "When do we use the word 'Uhr'?",
          pl: "Kiedy używamy słowa 'Uhr'?",
          uk: "Коли ми використовуємо слово 'Uhr'?",
          sq: "Kur e përdorim fjalën 'Uhr'?"
        },
        context: "Select the sentence where 'Uhr' is used correctly in colloquial speech.",
        options: ["Es ist halb drei Uhr.", "Es ist Viertel nach vier Uhr.", "Es ist genau zehn Uhr.", "Es ist zwanzig vor sechs Uhr."],
        correctAnswer: "Es ist genau zehn Uhr.",
        hint: "'Uhr' is used with official times and for times exactly on the hour.",
      },
      {
        id: 'm3-time-13',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete the sentence about a duration.",
          pl: "Uzupełnij zdanie o czasie trwania.",
          uk: "Доповніть речення про тривалість.",
          sq: "Plotësoni fjalinë për kohëzgjatjen."
        },
        context: "Die Öffnungszeiten sind ______ 9 Uhr ______ 17 Uhr.",
        correctAnswer: ["von", "bis"],
      },
      {
        id: 'm3-time-14',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete the phrase for 'shortly after'.",
          pl: "Uzupełnij wyrażenie 'chwilę po'.",
          uk: "Доповніть фразу 'незабаром після'.",
          sq: "Plotësoni frazën 'pak pas'."
        },
        context: "Es ist 16:03. Es ist kurz ______ vier.",
        correctAnswer: "nach",
      },
      {
        id: 'm3-time-15',
        type: 'matching',
        question: {
          en: "Match the question to the best answer.",
          pl: "Dopasuj pytanie do najlepszej odpowiedzi.",
          uk: "Зіставте запитання з найкращою відповіддю.",
          sq: "Përputhni pyetjen me përgjigjen më të mirë."
        },
        context: ["Wie spät ist es?", "Wann kommst du?", "Wie lange dauert der Film?", "Um wie viel Uhr treffen wir uns?"],
        options: ["Ungefähr zwei Stunden.", "Punkt 19 Uhr.", "Es ist halb drei.", "Gegen Mittag."],
        correctAnswer: ["Es ist halb drei.", "Gegen Mittag.", "Ungefähr zwei Stunden.", "Punkt 19 Uhr."],
      }
    ]
  }
];