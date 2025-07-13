// src/data/grammarExercises.ts (or wherever your types are defined)

export type ExerciseType = 'fill-in-the-blank' | 'multiple-choice' | 'sentence-scramble' | 'matching';

// A reusable type for multilingual text fields
export interface MultilingualText {
  en: string;
  pl: string;
  uk: string;
  sq: string;
  de: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: MultilingualText; // Uses the MultilingualText type
  context?: string | string[];
  options?: string[];
  correctAnswer: string | string[];
  hint?: string;
}

export interface GrammarTopic {
  id: string;
  moduleId: number;
  title: MultilingualText;       // MUST be MultilingualText
  description: MultilingualText; // MUST be MultilingualText
  exercises: Exercise[];
}

export const module7Grammar: GrammarTopic[] = [
  // ===== VERBEN (VERBS) =====
  {
    id: 'present-tense-regular',
    moduleId: 1,
    title: {
      en: 'Present Tense - Regular Verbs',
      pl: 'Czas teraźniejszy - Czasowniki regularne',
      uk: 'Теперішній час - Правильні дієслова',
      sq: 'Koha e tashme - Foljet e rregullta',
      de: 'Präsens - Regelmäßige Verben'
    },
    description: {
      en: "Regular verbs follow the pattern: stem + endings (-e, -st, -t, -en, -t, -en). Examples: lernen, wohnen, kommen, machen, heißen.",
      pl: "Czasowniki regularne odmieniają się według wzoru: temat + końcówki (-e, -st, -t, -en, -t, -en). Przykłady: lernen, wohnen, kommen, machen, heißen.",
      uk: "Правильні дієслова відмінюються за зразком: основа + закінчення (-e, -st, -t, -en, -t, -en). Приклади: lernen, wohnen, kommen, machen, heißen.",
      sq: "Foljet e rregullta ndjekin modelin: rrënja + mbaresat (-e, -st, -t, -en, -t, -en). Shembuj: lernen, wohnen, kommen, machen, heißen.",
      de: "Regelmäßige Verben folgen dem Muster: Stamm + Endungen (-e, -st, -t, -en, -t, -en). Beispiele: lernen, wohnen, kommen, machen, heißen."
    },
    exercises: [
      {
        id: 'm1-reg-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct form of 'lernen' (ich).",
          pl: "Uzupełnij poprawną formą 'lernen' (ich).",
          uk: "Доповніть правильною формою 'lernen' (ich).",
          sq: "Plotësoni me formën e saktë të 'lernen' (ich).",
          de: "Vervollständige mit der korrekten Form von 'lernen' (ich)."
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
          sq: "Plotësoni me formën e saktë të 'wohnen' (du).",
          de: "Vervollständige mit der korrekten Form von 'wohnen' (du)."
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
          sq: "Zgjidhni formën e saktë të 'kommen' (er).",
          de: "Wähle die korrekte Form von 'kommen' (er)."
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
          sq: "Ndërtoni fjalinë e saktë.",
          de: "Bilde den korrekten Satz."
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
          sq: "Përputhni përemrat me mbaresat e foljes 'heißen'.",
          de: "Ordne die Pronomen den Verbendungen für 'heißen' zu."
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
          sq: "Plotësoni me 'arbeiten' (ihr).",
          de: "Vervollständige mit 'arbeiten' (ihr)."
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
          sq: "Zgjidhni formën e saktë të 'spielen' (sie - shumës).",
          de: "Wähle die korrekte Form von 'spielen' (sie - Plural)."
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
          sq: "Ndërtoni një fjali me 'wohnen'.",
          de: "Bilde einen Satz mit 'wohnen'."
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
          sq: "Plotësoni me 'kaufen' (wir).",
          de: "Vervollständige mit 'kaufen' (wir)."
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
          sq: "Përputhni foljet me format e tyre të sakta 'du'.",
          de: "Ordne die Verben ihren korrekten 'du'-Formen zu."
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
    title: {
      en: 'Present Tense - Irregular Verbs (Stem-changing)',
      pl: 'Czas teraźniejszy - Czasowniki nieregularne (ze zmianą samogłoski)',
      uk: 'Теперішній час - Неправильні дієслова (зі зміною кореневої голосної)',
      sq: 'Koha e tashme - Foljet e parregullta (me ndryshim zanoreje)',
      de: 'Präsens - Unregelmäßige Verben (Stammvokalwechsel)'
    },
    description: {
      en: "Some verbs change their stem vowel in du and er/sie/es forms: sprechen (du sprichst), fahren (du fährst), lesen (du liest), sehen (du siehst), nehmen (du nimmst).",
      pl: "Niektóre czasowniki zmieniają samogłoskę w temacie w formach du i er/sie/es: sprechen (du sprichst), fahren (du fährst), lesen (du liest), sehen (du siehst), nehmen (du nimmst).",
      uk: "Деякі дієслова змінюють кореневу голосну у формах du та er/sie/es: sprechen (du sprichst), fahren (du fährst), lesen (du liest), sehen (du siehst), nehmen (du nimmst).",
      sq: "Disa folje ndryshojnë zanoren e rrënjës në format du dhe er/sie/es: sprechen (du sprichst), fahren (du fährst), lesen (du liest), sehen (du siehst), nehmen (du nimmst).",
      de: "Einige Verben ändern ihren Stammvokal in der du- und er/sie/es-Form: sprechen (du sprichst), fahren (du fährst), lesen (du liest), sehen (du siehst), nehmen (du nimmst)."
    },
    exercises: [
      {
        id: 'm1-irreg-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'sprechen' (du).",
          pl: "Uzupełnij formą 'sprechen' (du).",
          uk: "Доповніть формою 'sprechen' (du).",
          sq: "Plotësoni me 'sprechen' (du).",
          de: "Vervollständige mit 'sprechen' (du)."
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
          sq: "Zgjidhni formën e saktë të 'fahren' (er).",
          de: "Wähle die korrekte Form von 'fahren' (er)."
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
          sq: "Plotësoni me 'lesen' (sie).",
          de: "Vervollständige mit 'lesen' (sie)."
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
          sq: "Përputhni foljet me format e tyre të sakta 'du'.",
          de: "Ordne die Verben ihren korrekten du-Formen zu."
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
          sq: "Ndërtoni një fjali me folje të parregullt.",
          de: "Bilde einen Satz mit einem unregelmäßigen Verb."
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
          sq: "Plotësoni me 'essen' (ich).",
          de: "Vervollständige mit 'essen' (ich)."
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
          sq: "Zgjidhni formën e saktë të 'schlafen' (du).",
          de: "Wähle die korrekte Form von 'schlafen' (du)."
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
          sq: "Plotësoni me 'geben' (er).",
          de: "Vervollständige mit 'geben' (er)."
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
          sq: "Ndërtoni një fjali me 'laufen'.",
          de: "Bilde einen Satz mit 'laufen'."
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
          sq: "Përputhni paskajoren me format er/sie/es.",
          de: "Ordne den Infinitiv den er/sie/es-Formen zu."
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
    title: {
      en: 'Auxiliary Verbs: sein and haben',
      pl: 'Czasowniki posiłkowe: sein i haben',
      uk: 'Допоміжні дієслова: sein та haben',
      sq: 'Foljet ndihmëse: sein dhe haben',
      de: 'Hilfsverben: sein und haben'
    },
    description: {
      en: "'sein' (to be) and 'haben' (to have) are the most important auxiliary verbs. They are highly irregular and must be memorized.",
      pl: "'sein' (być) i 'haben' (mieć) to najważniejsze czasowniki posiłkowe. Są one bardzo nieregularne i należy je zapamiętać.",
      uk: "'sein' (бути) та 'haben' (мати) є найважливішими допоміжними дієсловами. Вони дуже неправильні, і їх потрібно вивчити напам'ять.",
      sq: "'sein' (me qenë) dhe 'haben' (me pasë) janë foljet ndihmëse më të rëndësishme. Ato janë shumë të parregullta dhe duhen mësuar përmendësh.",
      de: "'sein' und 'haben' sind die wichtigsten Hilfsverben. Sie sind sehr unregelmäßig und müssen auswendig gelernt werden."
    },
    exercises: [
      {
        id: 'm1-aux-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct form of 'sein' (ich).",
          pl: "Uzupełnij poprawną formą 'sein' (ich).",
          uk: "Доповніть правильною формою 'sein' (ich).",
          sq: "Plotësoni me formën e saktë të 'sein' (ich).",
          de: "Vervollständige mit der korrekten Form von 'sein' (ich)."
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
          sq: "Zgjidhni formën e saktë të 'haben' (wir).",
          de: "Wähle die korrekte Form von 'haben' (wir)."
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
          sq: "Përputhni përemrat me format e sakta të 'sein'.",
          de: "Ordne die Pronomen den korrekten Formen von 'sein' zu."
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
          sq: "Plotësoni me 'haben' (sie - shumës).",
          de: "Vervollständige mit 'haben' (sie - Plural)."
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
          sq: "Ndërtoni një fjali me 'sein'.",
          de: "Bilde einen Satz mit 'sein'."
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
          sq: "Plotësoni me 'sein' (du).",
          de: "Vervollständige mit 'sein' (du)."
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
          sq: "Zgjidhni formën e saktë të 'haben' (er).",
          de: "Wähle die korrekte Form von 'haben' (er)."
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
          sq: "Ndërtoni pyetje me 'haben'.",
          de: "Bilde eine Frage mit 'haben'."
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
          sq: "Plotësoni me 'sein' (wir).",
          de: "Vervollständige mit 'sein' (wir)."
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
          sq: "Përputhni përemrat me format e sakta të 'haben'.",
          de: "Ordne die Pronomen den korrekten Formen von 'haben' zu."
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
    title: {
      en: 'Modal Verbs: können, wollen, müssen',
      pl: 'Czasowniki modalne: können, wollen, müssen',
      uk: 'Модальні дієслова: können, wollen, müssen',
      sq: 'Foljet modale: können, wollen, müssen',
      de: 'Modalverben: können, wollen, müssen'
    },
    description: {
      en: "Modal verbs express ability (können), desire (wollen), or necessity (müssen). Pattern: Subject + modal verb (pos. 2) + ... + infinitive (end). Note: ich/er/sie/es forms are identical.",
      pl: "Czasowniki modalne wyrażają umiejętność (können), chęć (wollen) lub konieczność (müssen). Wzór: Podmiot + czasownik modalny (poz. 2) + ... + bezokolicznik (koniec). Uwaga: formy ich/er/sie/es są identyczne.",
      uk: "Модальні дієслова виражають здатність (können), бажання (wollen) або необхідність (müssen). Схема: Підмет + модальне дієслово (поз. 2) + ... + інфінітив (кінець). Примітка: форми ich/er/sie/es однакові.",
      sq: "Foljet modale shprehin aftësi (können), dëshirë (wollen) ose domosdoshmëri (müssen). Modeli: Kryefjala + folje modale (poz. 2) + ... + paskajore (fund). Shënim: format ich/er/sie/es janë identike.",
      de: "Modalverben drücken Fähigkeit (können), Wunsch (wollen) oder Notwendigkeit (müssen) aus. Muster: Subjekt + Modalverb (Pos. 2) + ... + Infinitiv (Ende). Hinweis: Die Formen ich/er/sie/es sind identisch."
    },
    exercises: [
      {
        id: 'm2-modal-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'können' (ich).",
          pl: "Uzupełnij formą 'können' (ich).",
          uk: "Доповніть формою 'können' (ich).",
          sq: "Plotësoni me 'können' (ich).",
          de: "Vervollständige mit 'können' (ich)."
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
          sq: "Zgjidhni formën e saktë të 'wollen' (du).",
          de: "Wähle die korrekte Form von 'wollen' (du)."
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
          sq: "Ndërtoni një fjali me folje modale (Satzklammer).",
          de: "Bilde einen Satz mit einem Modalverb (Satzklammer)."
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
          sq: "Plotësoni strukturën e fjalisë me folje modale.",
          de: "Vervollständige die Satzstruktur mit einem Modalverb."
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
          sq: "Përputhni foljet modale me kuptimet e tyre.",
          de: "Ordne die Modalverben ihren Bedeutungen zu."
        },
        context: ["können", "wollen", "müssen"],
        options: ["want to/desire", "can/be able to", "must/have to"],
        correctAnswer: ["can/be able to", "want to/desire", "must/have to"],
      },
      {
        id: 'm2-modal-6',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'dürfen' (ich).",
          pl: "Uzupełnij formą 'dürfen' (ich).",
          uk: "Доповніть формою 'dürfen' (ich).",
          sq: "Plotësoni me 'dürfen' (ich).",
          de: "Vervollständige mit 'dürfen' (ich)."
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
          sq: "Zgjidhni formën e saktë të 'sollen' (wir).",
          de: "Wähle die korrekte Form von 'sollen' (wir)."
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
          sq: "Ndërtoni një fjali me 'mögen'.",
          de: "Bilde einen Satz mit 'mögen'."
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
          sq: "Plotësoni me 'können' (ihr).",
          de: "Vervollständige mit 'können' (ihr)."
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
          sq: "Përputhni foljet modale me situatat.",
          de: "Ordne die Modalverben den Situationen zu."
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
    title: {
        en: 'Separable Verbs (Trennbare Verben)',
        pl: 'Czasowniki rozdzielnie złożone (Trennbare Verben)',
        uk: 'Відокремлювані дієслова (Trennbare Verben)',
        sq: 'Foljet e ndashme (Trennbare Verben)',
        de: 'Trennbare Verben'
    },
    description: {
        en: "Separable verbs like einkaufen, aufstehen, anrufen split: prefix goes to sentence end. Example: 'Ich kaufe im Supermarkt ein.' / 'Wann stehst du auf?'",
        pl: "Czasowniki rozdzielnie złożone, takie jak einkaufen, aufstehen, anrufen, dzielą się: przedrostek idzie na koniec zdania. Przykład: 'Ich kaufe im Supermarkt ein.' / 'Wann stehst du auf?'",
        uk: "Відокремлювані дієслова, такі як einkaufen, aufstehen, anrufen, розділяються: префікс іде в кінець речення. Приклад: 'Ich kaufe im Supermarkt ein.' / 'Wann stehst du auf?'",
        sq: "Foljet e ndashme si einkaufen, aufstehen, anrufen ndahen: parashtesa shkon në fund të fjalisë. Shembull: 'Ich kaufe im Supermarkt ein.' / 'Wann stehst du auf?'",
        de: "Trennbare Verben wie einkaufen, aufstehen, anrufen werden geteilt: Die Vorsilbe geht ans Satzende. Beispiel: 'Ich kaufe im Supermarkt ein.' / 'Wann stehst du auf?'"
    },
    exercises: [
        {
            id: 'm3-sep-1',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with separable verb 'einkaufen' (ich).",
                pl: "Uzupełnij czasownikiem rozdzielnie złożonym 'einkaufen' (ich).",
                uk: "Доповніть роздільним дієсловом 'einkaufen' (ich).",
                sq: "Plotësoni me foljen e ndashme 'einkaufen' (ich).",
                de: "Vervollständige mit dem trennbaren Verb 'einkaufen' (ich)."
            },
            context: "Ich ______ im Supermarkt ______.",
            correctAnswer: ["kaufe", "ein"]
        },
        {
            id: 'm3-sep-2',
            type: 'sentence-scramble',
            question: {
                en: "Build sentence with separable verb.",
                pl: "Zbuduj zdanie z czasownikiem rozdzielnie złożonym.",
                uk: "Побудуйте речення з роздільним дієсловом.",
                sq: "Ndërtoni një fjali me folje të ndashme.",
                de: "Bilde einen Satz mit einem trennbaren Verb."
            },
            context: ["Du", "stehst", "um 7 Uhr", "auf"],
            correctAnswer: "Du stehst um 7 Uhr auf"
        },
        {
            id: 'm3-sep-3',
            type: 'multiple-choice',
            question: {
                en: "Where does the prefix go in main clauses?",
                pl: "Gdzie w zdaniach głównych umieszcza się przedrostek?",
                uk: "Куди йде префікс у головних реченнях?",
                sq: "Ku shkon parashtesa në fjalitë kryesore?",
                de: "Wohin kommt die Vorsilbe in Hauptsätzen?"
            },
            context: "Wir ______ unsere Freunde ______. (anrufen)",
            options: ["anrufen ... ∅", "rufen ... an", "an ... rufen"],
            correctAnswer: "rufen ... an"
        },
        {
            id: 'm3-sep-4',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with 'fernsehen' (er).",
                pl: "Uzupełnij formą 'fernsehen' (er).",
                uk: "Доповніть формою 'fernsehen' (er).",
                sq: "Plotësoni me 'fernsehen' (er).",
                de: "Vervollständige mit 'fernsehen' (er)."
            },
            context: "Er ______ jeden Abend ______.",
            correctAnswer: ["sieht", "fern"]
        },
        {
            id: 'm3-sep-5',
            type: 'matching',
            question: {
                en: "Match separable verbs to their split forms (ich-form).",
                pl: "Dopasuj czasowniki rozdzielnie złożone do ich rozdzielonych form (forma ich).",
                uk: "Зіставте роздільні дієслова з їхніми розділеними формами (форма ich).",
                sq: "Përputhni foljet e ndashme me format e tyre të ndara (forma ich).",
                de: "Ordne trennbare Verben ihren getrennten Formen zu (ich-Form)."
            },
            context: ["mitkommen", "aufstehen", "einkaufen", "anrufen"],
            options: ["rufe ... an", "stehe ... auf", "kaufe ... ein", "komme ... mit"],
            correctAnswer: ["komme ... mit", "stehe ... auf", "kaufe ... ein", "rufe ... an"]
        },
        {
            id: 'm3-sep-6',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with 'abfahren' (der Zug).",
                pl: "Uzupełnij formą 'abfahren' (der Zug).",
                uk: "Доповніть формою 'abfahren' (der Zug).",
                sq: "Plotësoni me 'abfahren' (der Zug).",
                de: "Vervollständige mit 'abfahren' (der Zug)."
            },
            context: "Der Zug ______ um 15:30 ______.",
            correctAnswer: ["fährt", "ab"]
        },
        {
            id: 'm3-sep-7',
            type: 'sentence-scramble',
            question: {
                en: "Build sentence with 'zumachen'.",
                pl: "Zbuduj zdanie z 'zumachen'.",
                uk: "Побудуйте речення з 'zumachen'.",
                sq: "Ndërtoni një fjali me 'zumachen'.",
                de: "Bilde einen Satz mit 'zumachen'."
            },
            context: ["Ich", "mache", "das Fenster", "zu"],
            correctAnswer: "Ich mache das Fenster zu"
        },
        {
            id: 'm3-sep-8',
            type: 'multiple-choice',
            question: {
                en: "Choose correct separation of 'vorstellen' (er).",
                pl: "Wybierz poprawne rozdzielenie 'vorstellen' (er).",
                uk: "Виберіть правильне розділення 'vorstellen' (er).",
                sq: "Zgjidhni ndarjen e saktë të 'vorstellen' (er).",
                de: "Wähle die korrekte Trennung von 'vorstellen' (er)."
            },
            context: "Er ______ sich ______.",
            options: ["vorstellt", "stellt ... vor", "vor ... stellt"],
            correctAnswer: "stellt ... vor"
        },
        {
            id: 'm3-sep-9',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with 'zurückkommen' (wir).",
                pl: "Uzupełnij formą 'zurückkommen' (wir).",
                uk: "Доповніть формою 'zurückkommen' (wir).",
                sq: "Plotësoni me 'zurückkommen' (wir).",
                de: "Vervollständige mit 'zurückkommen' (wir)."
            },
            context: "Wir ______ morgen ______.",
            correctAnswer: ["kommen", "zurück"]
        },
        {
            id: 'm3-sep-10',
            type: 'matching',
            question: {
                en: "Match separable verbs to their base verbs.",
                pl: "Dopasuj czasowniki rozdzielnie złożone do ich czasowników podstawowych.",
                uk: "Зіставте роздільні дієслова з їхніми основними дієсловами.",
                sq: "Përputhni foljet e ndashme me foljet e tyre bazë.",
                de: "Ordne trennbare Verben ihren Basisverben zu."
            },
            context: ["aufmachen", "weggehen", "herkommen", "ausgehen"],
            options: ["gehen", "kommen", "gehen", "machen"],
            correctAnswer: ["machen", "gehen", "kommen", "gehen"]
        }
    ]
  },
  {
    id: 'imperative-forms',
    moduleId: 3,
    title: {
      en: 'Imperative (Command Forms)',
      pl: 'Tryb rozkazujący (Formy poleceń)',
      uk: 'Наказовий спосіб (Форми команд)',
      sq: 'Mënyra urdhërore (Format urdhërore)',
      de: 'Imperativ (Befehlsformen)'
    },
    description: {
      en: "Du-form: verb stem (often no -st): Kauf!, Geh! Ihr-form: normal conjugation: Kauft!, Geht! Sie-form: conjugation + Sie: Kaufen Sie!",
      pl: "Forma du: temat czasownika (często bez -st): Kauf!, Geh! Forma ihr: normalna koniugacja: Kauft!, Geht! Forma Sie: koniugacja + Sie: Kaufen Sie!",
      uk: "Форма du: основа дієслова (часто без -st): Kauf!, Geh! Форма ihr: звичайна форма: Kauft!, Geht! Форма Sie: форма + Sie: Kaufen Sie!",
      sq: "Forma du: rrënja e foljes (shpesh pa -st): Kauf!, Geh! Forma ihr: zgjedhim normal: Kauft!, Geht! Forma Sie: zgjedhim + Sie: Kaufen Sie!",
      de: "Du-Form: Verbstamm (oft ohne -st): Kauf!, Geh! Ihr-Form: normale Konjugation: Kauft!, Geht! Sie-Form: Konjugation + Sie: Kaufen Sie!"
    },
    exercises: [
        {
            id: 'm3-imp-1',
            type: 'fill-in-the-blank',
            question: {
                en: "Give command using du-form of 'kaufen'.",
                pl: "Podaj polecenie używając formy 'du' czasownika 'kaufen'.",
                uk: "Дайте команду, використовуючи форму 'du' дієслова 'kaufen'.",
                sq: "Jepni urdhrin duke përdorur formën 'du' të foljes 'kaufen'.",
                de: "Gib einen Befehl mit der du-Form von 'kaufen'."
            },
            context: "______ Brot im Supermarkt!",
            correctAnswer: "Kauf"
        },
        {
            id: 'm3-imp-2',
            type: 'multiple-choice',
            question: {
                en: "Choose correct ihr-form imperative of 'gehen'.",
                pl: "Wybierz poprawną formę rozkazującą 'ihr' dla 'gehen'.",
                uk: "Виберіть правильну наказову форму 'ihr' для 'gehen'.",
                sq: "Zgjidhni formën e saktë urdhërore 'ihr' të 'gehen'.",
                de: "Wähle den korrekten Imperativ der ihr-Form von 'gehen'."
            },
            context: "______ nach Hause!",
            options: ["Geh", "Geht", "Gehen Sie"],
            correctAnswer: "Geht"
        },
        {
            id: 'm3-imp-3',
            type: 'fill-in-the-blank',
            question: {
                en: "Give formal command with 'sprechen'.",
                pl: "Podaj formalne polecenie z 'sprechen'.",
                uk: "Дайте формальну команду з 'sprechen'.",
                sq: "Jepni urdhrin formal me 'sprechen'.",
                de: "Gib einen formellen Befehl mit 'sprechen'."
            },
            context: "______ ______ bitte langsamer!",
            correctAnswer: ["Sprechen", "Sie"]
        },
        {
            id: 'm3-imp-4',
            type: 'matching',
            question: {
                en: "Match imperative forms to their addressees.",
                pl: "Dopasuj formy rozkazujące do ich adresatów.",
                uk: "Зіставте наказові форми з їхніми адресатами.",
                sq: "Përputhni format urdhërore me adresuesit e tyre.",
                de: "Ordne die Imperativformen ihren Adressaten zu."
            },
            context: ["Komm!", "Kommt!", "Kommen Sie!"],
            options: ["formal (Sie)", "one person (du)", "multiple people (ihr)"],
            correctAnswer: ["one person (du)", "multiple people (ihr)", "formal (Sie)"]
        },
        {
            id: 'm3-imp-5',
            type: 'sentence-scramble',
            question: {
                en: "Build imperative sentence.",
                pl: "Zbuduj zdanie rozkazujące.",
                uk: "Побудуйте наказове речення.",
                sq: "Ndërtoni një fjali urdhërore.",
                de: "Bilde einen Imperativsatz."
            },
            context: ["Hilf", "mir", "bitte", "!"],
            correctAnswer: "Hilf mir bitte!"
        },
        {
            id: 'm3-imp-6',
            type: 'fill-in-the-blank',
            question: {
                en: "Give du-form imperative of 'nehmen'.",
                pl: "Podaj formę rozkazującą 'du' dla 'nehmen'.",
                uk: "Дайте наказову форму 'du' для 'nehmen'.",
                sq: "Jepni formën urdhërore 'du' të 'nehmen'.",
                de: "Gib den Imperativ der du-Form von 'nehmen'."
            },
            context: "______ den Bus!",
            correctAnswer: "Nimm"
        },
        {
            id: 'm3-imp-7',
            type: 'multiple-choice',
            question: {
                en: "Choose correct formal imperative of 'warten'.",
                pl: "Wybierz poprawną formalną formę rozkazującą 'warten'.",
                uk: "Виберіть правильну формальну наказову форму 'warten'.",
                sq: "Zgjidhni formën e saktë formale urdhërore të 'warten'.",
                de: "Wähle den korrekten formellen Imperativ von 'warten'."
            },
            context: "______ ______ bitte einen Moment!",
            options: ["Warte", "Wartet", "Warten Sie"],
            correctAnswer: "Warten Sie"
        },
        {
            id: 'm3-imp-8',
            type: 'sentence-scramble',
            question: {
                en: "Build polite command.",
                pl: "Zbuduj uprzejme polecenie.",
                uk: "Побудуйте ввічливу команду.",
                sq: "Ndërtoni një urdhër të sjellshëm.",
                de: "Bilde einen höflichen Befehl."
            },
            context: ["Bitte", "seid", "leise", "!"],
            correctAnswer: "Bitte seid leise!"
        },
        {
            id: 'm3-imp-9',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete imperative with separable verb.",
                pl: "Uzupełnij tryb rozkazujący czasownikiem rozdzielnie złożonym.",
                uk: "Доповніть наказовий спосіб роздільним дієсловом.",
                sq: "Plotësoni urdhëroren me folje të ndashme.",
                de: "Vervollständige den Imperativ mit einem trennbaren Verb."
            },
            context: "______ die Tür ______! (aufmachen - du)",
            correctAnswer: ["Mach", "auf"]
        },
        {
            id: 'm3-imp-10',
            type: 'matching',
            question: {
                en: "Match verbs to their du-imperative forms.",
                pl: "Dopasuj czasowniki do ich form rozkazujących 'du'.",
                uk: "Зіставте дієслова з їхніми наказовими формами 'du'.",
                sq: "Përputhni foljet me format e tyre urdhërore 'du'.",
                de: "Ordne die Verben ihren du-Imperativformen zu."
            },
            context: ["essen", "lesen", "geben", "fahren"],
            options: ["fahr", "iss", "gib", "lies"],
            correctAnswer: ["iss", "lies", "gib", "fahr"]
        }
    ]
  },
  {
    id: 'past-tense-sein-haben',
    moduleId: 4,
    title: {
      en: 'Simple Past: sein and haben (Präteritum)',
      pl: 'Czas przeszły prosty: sein i haben (Präteritum)',
      uk: 'Простий минулий час: sein і haben (Präteritum)',
      sq: 'Koha e shkuar e thjeshtë: sein dhe haben (Präteritum)',
      de: 'Präteritum: sein und haben'
    },
    description: {
      en: "Past forms: sein → war, warst, war, waren, wart, waren; haben → hatte, hattest, hatte, hatten, hattet, hatten. Used for past events: 'Früher war mein Großvater Arzt.'",
      pl: "Formy przeszłe: sein → war, warst, war, waren, wart, waren; haben → hatte, hattest, hatte, hatten, hattet, hatten. Używane do opisu wydarzeń z przeszłości: 'Früher war mein Großvater Arzt.'",
      uk: "Минулі форми: sein → war, warst, war, waren, wart, waren; haben → hatte, hattest, hatte, hatten, hattet, hatten. Використовується для минулих подій: 'Früher war mein Großvater Arzt.'",
      sq: "Format e së shkuarës: sein → war, warst, war, waren, wart, waren; haben → hatte, hattest, hatte, hatten, hattet, hatten. Përdoret për ngjarje të së shkuarës: 'Früher war mein Großvater Arzt.'",
      de: "Vergangenheitsformen: sein → war, warst, war, waren, wart, waren; haben → hatte, hattest, hatte, hatten, hattet, hatten. Wird für vergangene Ereignisse verwendet: 'Früher war mein Großvater Arzt.'"
    },
    exercises: [
        {
            id: 'm4-past-1',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with past form of 'sein' (ich).",
                pl: "Uzupełnij formą przeszłą 'sein' (ich).",
                uk: "Доповніть минулою формою 'sein' (ich).",
                sq: "Plotësoni me formën e shkuar të 'sein' (ich).",
                de: "Vervollständige mit der Vergangenheitsform von 'sein' (ich)."
            },
            context: "Ich ______ gestern krank.",
            correctAnswer: "war"
        },
        {
            id: 'm4-past-2',
            type: 'multiple-choice',
            question: {
                en: "Choose past form of 'haben' (wir).",
                pl: "Wybierz formę przeszłą 'haben' (wir).",
                uk: "Виберіть минулу форму 'haben' (wir).",
                sq: "Zgjidhni formën e shkuar të 'haben' (wir).",
                de: "Wähle die Vergangenheitsform von 'haben' (wir)."
            },
            context: "Wir ______ früher einen Hund.",
            options: ["hatte", "hattest", "hatten", "hattet"],
            correctAnswer: "hatten"
        },
        {
            id: 'm4-past-3',
            type: 'matching',
            question: {
                en: "Match pronouns to past forms of 'sein'.",
                pl: "Dopasuj zaimki do form przeszłych 'sein'.",
                uk: "Зіставте займенники з минулими формами 'sein'.",
                sq: "Përputhni përemrat me format e shkuara të 'sein'.",
                de: "Ordne die Pronomen den Vergangenheitsformen von 'sein' zu."
            },
            context: ["du", "ihr", "sie (plural)", "er"],
            options: ["wart", "war", "warst", "waren"],
            correctAnswer: ["warst", "wart", "waren", "war"]
        },
        {
            id: 'm4-past-4',
            type: 'sentence-scramble',
            question: {
                en: "Build past tense sentence.",
                pl: "Zbuduj zdanie w czasie przeszłym.",
                uk: "Побудуйте речення в минулому часі.",
                sq: "Ndërtoni një fjali në kohën e shkuar.",
                de: "Bilde einen Satz im Präteritum."
            },
            context: ["Früher", "hatte", "ich", "keine Zeit"],
            correctAnswer: "Früher hatte ich keine Zeit"
        },
        {
            id: 'm4-past-5',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete biography sentence.",
                pl: "Uzupełnij zdanie biograficzne.",
                uk: "Доповніть біографічне речення.",
                sq: "Plotësoni fjalinë biografike.",
                de: "Vervollständige den biographischen Satz."
            },
            context: "Mein Großvater ______ Arzt und ______ ein großes Haus.",
            correctAnswer: ["war", "hatte"]
        },
        {
            id: 'm4-past-6',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with past form of 'haben' (du).",
                pl: "Uzupełnij formą przeszłą 'haben' (du).",
                uk: "Доповніть минулою формою 'haben' (du).",
                sq: "Plotësoni me formën e shkuar të 'haben' (du).",
                de: "Vervollständige mit der Vergangenheitsform von 'haben' (du)."
            },
            context: "______ du Spaß auf der Party?",
            correctAnswer: "Hattest"
        },
        {
            id: 'm4-past-7',
            type: 'multiple-choice',
            question: {
                en: "Choose past form of 'sein' (sie - plural).",
                pl: "Wybierz formę przeszłą 'sein' (sie - l.mn.).",
                uk: "Виберіть минулу форму 'sein' (sie - множина).",
                sq: "Zgjidhni formën e shkuar të 'sein' (sie - shumës).",
                de: "Wähle die Vergangenheitsform von 'sein' (sie - Plural)."
            },
            context: "Sie ______ sehr müde.",
            options: ["war", "warst", "waren", "wart"],
            correctAnswer: "waren"
        },
        {
            id: 'm4-past-8',
            type: 'sentence-scramble',
            question: {
                en: "Build past tense question.",
                pl: "Zbuduj pytanie w czasie przeszłym.",
                uk: "Побудуйте питання в минулому часі.",
                sq: "Ndërtoni një pyetje në kohën e shkuar.",
                de: "Bilde eine Frage im Präteritum."
            },
            context: ["Waren", "Sie", "schon", "in Berlin", "?"],
            correctAnswer: "Waren Sie schon in Berlin?"
        },
        {
            id: 'm4-past-9',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete past tense story.",
                pl: "Uzupełnij historię w czasie przeszłym.",
                uk: "Доповніть розповідь у минулому часі.",
                sq: "Plotësoni tregimin në kohën e shkuar.",
                de: "Vervollständige die Geschichte im Präteritum."
            },
            context: "Als Kind ______ ich sehr klein und ______ viele Spielsachen.",
            correctAnswer: ["war", "hatte"]
        },
        {
            id: 'm4-past-10',
            type: 'matching',
            question: {
                en: "Match present to past forms.",
                pl: "Dopasuj formy teraźniejsze do przeszłych.",
                uk: "Зіставте теперішні форми з минулими.",
                sq: "Përputhni format e tashme me ato të shkuara.",
                de: "Ordne die Präsensformen den Vergangenheitsformen zu."
            },
            context: ["ich bin", "du hast", "wir sind", "ihr habt"],
            options: ["wir waren", "ich war", "ihr hattet", "du hattest"],
            correctAnswer: ["ich war", "du hattest", "wir waren", "ihr hattet"]
        }
    ]
  },

  // ===== NOMEN & ARTIKEL (NOUNS & ARTICLES) =====
  {
    id: 'gender-articles',
    moduleId: 1,
    title: {
      en: 'Gender and Articles (der, die, das)',
      pl: 'Rodzaj i rodzajniki (der, die, das)',
      uk: 'Рід та артиклі (der, die, das)',
      sq: 'Gjinia dhe nyjet (der, die, das)',
      de: 'Genus und Artikel (der, die, das)'
    },
    description: {
      en: "All German nouns have gender: masculine (der), feminine (die), neuter (das). Indefinite articles: ein, eine, ein. Gender must be memorized with each noun.",
      pl: "Wszystkie niemieckie rzeczowniki mają rodzaj: męski (der), żeński (die), nijaki (das). Rodzajniki nieokreślone: ein, eine, ein. Rodzaj należy zapamiętać z każdym rzeczownikiem.",
      uk: "Усі німецькі іменники мають рід: чоловічий (der), жіночий (die), середній (das). Неозначені артиклі: ein, eine, ein. Рід потрібно запам'ятовувати з кожним іменником.",
      sq: "Të gjithë emrat gjermanë kanë gjini: mashkullore (der), femërore (die), asnjanëse (das). Nyjet e pashquara: ein, eine, ein. Gjinia duhet të mësohet përmendësh me çdo emër.",
      de: "Alle deutschen Nomen haben ein Geschlecht: maskulin (der), feminin (die), neutrum (das). Unbestimmte Artikel: ein, eine, ein. Das Geschlecht muss mit jedem Nomen gelernt werden."
    },
    exercises: [
        {
            id: 'm1-art-1',
            type: 'matching',
            question: {
                en: "Match nouns to their correct definite articles.",
                pl: "Dopasuj rzeczowniki do ich poprawnych rodzajników określonych.",
                uk: "Зіставте іменники з їхніми правильними означеними артиклями.",
                sq: "Përputhni emrat me nyjet e tyre të sakta shquese.",
                de: "Ordne die Nomen ihren korrekten bestimmten Artikeln zu."
            },
            context: ["Mann", "Frau", "Kind", "Haus"],
            options: ["das", "der", "die", "das"],
            correctAnswer: ["der", "die", "das", "das"]
        },
        {
            id: 'm1-art-2',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with correct indefinite article.",
                pl: "Uzupełnij poprawnym rodzajnikiem nieokreślonym.",
                uk: "Доповніть правильним неозначеним артиклем.",
                sq: "Plotësoni me nyjen e saktë të pashquar.",
                de: "Vervollständige mit dem korrekten unbestimmten Artikel."
            },
            context: "Das ist ______ Buch. (das Buch)",
            correctAnswer: "ein"
        },
        {
            id: 'm1-art-3',
            type: 'multiple-choice',
            question: {
                en: "Choose correct article for 'Schule'.",
                pl: "Wybierz poprawny rodzajnik dla 'Schule'.",
                uk: "Виберіть правильний артикль для 'Schule'.",
                sq: "Zgjidhni nyjen e saktë për 'Schule'.",
                de: "Wähle den korrekten Artikel für 'Schule'."
            },
            context: "______ Schule ist groß.",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Die"
        },
        {
            id: 'm1-art-4',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with definite article.",
                pl: "Uzupełnij rodzajnikiem określonym.",
                uk: "Доповніть означеним артиклем.",
                sq: "Plotësoni me nyjen shquese.",
                de: "Vervollständige mit dem bestimmten Artikel."
            },
            context: "______ Auto ist rot. (das Auto)",
            correctAnswer: "Das"
        },
        {
            id: 'm1-art-5',
            type: 'sentence-scramble',
            question: {
                en: "Build sentence with correct articles.",
                pl: "Zbuduj zdanie z poprawnymi rodzajnikami.",
                uk: "Побудуйте речення з правильними артиклями.",
                sq: "Ndërtoni fjali me nyjet e sakta.",
                de: "Bilde einen Satz mit den korrekten Artikeln."
            },
            context: ["Das", "ist", "eine", "Lehrerin"],
            correctAnswer: "Das ist eine Lehrerin"
        },
        {
            id: 'm1-art-6',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with indefinite article for 'Tisch' (accusative).",
                pl: "Uzupełnij rodzajnikiem nieokreślonym dla 'Tisch' (biernik).",
                uk: "Доповніть неозначеним артиклем для 'Tisch' (знахідний).",
                sq: "Plotësoni me nyjen e pashquar për 'Tisch' (kallëzore).",
                de: "Vervollständige mit dem unbestimmten Artikel für 'Tisch' (Akkusativ)."
            },
            context: "Ich brauche ______ Tisch.",
            correctAnswer: "einen"
        },
        {
            id: 'm1-art-7',
            type: 'multiple-choice',
            question: {
                en: "Choose correct article for 'Universität'.",
                pl: "Wybierz poprawny rodzajnik dla 'Universität'.",
                uk: "Виберіть правильний артикль для 'Universität'.",
                sq: "Zgjidhni nyjen e saktë për 'Universität'.",
                de: "Wähle den korrekten Artikel für 'Universität'."
            },
            context: "______ Universität ist sehr modern.",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Die"
        },
        {
            id: 'm1-art-8',
            type: 'matching',
            question: {
                en: "Match nouns to indefinite articles (nominative/accusative).",
                pl: "Dopasuj rzeczowniki do rodzajników nieokreślonych (mianownik/biernik).",
                uk: "Зіставте іменники з неозначеними артиклями (називний/знахідний).",
                sq: "Përputhni emrat me nyjet e pashquara (emërore/kallëzore).",
                de: "Ordne Nomen unbestimmten Artikeln zu (Nominativ/Akkusativ)."
            },
            context: ["Lampe (sie hat...)", "Computer (er hat...)", "Mädchen (es ist...)", "Stuhl (er braucht...)"],
            options: ["ein", "eine", "einen", "ein"],
            correctAnswer: ["eine", "einen", "ein", "einen"]
        },
        {
            id: 'm1-art-9',
            type: 'sentence-scramble',
            question: {
                en: "Build sentence with articles.",
                pl: "Zbuduj zdanie z rodzajnikami.",
                uk: "Побудуйте речення з артиклями.",
                sq: "Ndërtoni fjali me nyje.",
                de: "Bilde einen Satz mit Artikeln."
            },
            context: ["Der", "Mann", "kauft", "ein", "Auto"],
            correctAnswer: "Der Mann kauft ein Auto"
        },
        {
            id: 'm1-art-10',
            type: 'fill-in-the-blank',
            question: {
                en: "Complete with correct article for 'Telefon'.",
                pl: "Uzupełnij poprawnym rodzajnikiem dla 'Telefon'.",
                uk: "Доповніть правильним артиклем для 'Telefon'.",
                sq: "Plotësoni me nyjen e saktë për 'Telefon'.",
                de: "Vervollständige mit dem korrekten Artikel für 'Telefon'."
            },
            context: "______ Telefon klingelt. (das Telefon)",
            correctAnswer: "Das"
        }
    ]
  },
  {
    id: 'nominative-case',
    moduleId: 2,
    title: {
      en: 'Nominative Case (Subject)',
      pl: 'Mianownik (Podmiot)',
      uk: 'Називний відмінок (Підмет)',
      sq: 'Rasa emërore (Kryefjala)',
      de: 'Nominativ (Subjekt)'
    },
    description: {
      en: "Nominative answers 'Wer?' (who) or 'Was?' (what). It's the subject of the sentence. Articles: der/ein, die/eine, das/ein.",
      pl: "Mianownik odpowiada na pytanie 'Kto?' (wer) lub 'Co?' (was). Jest to podmiot zdania. Rodzajniki: der/ein, die/eine, das/ein.",
      uk: "Називний відмінок відповідає на питання 'Хто?' (wer) або 'Що?' (was). Це підмет речення. Артиклі: der/ein, die/eine, das/ein.",
      sq: "Rasa emërore i përgjigjet pyetjes 'Kush?' (wer) ose 'Çfarë?' (was). Është kryefjala e fjalisë. Nyjet: der/ein, die/eine, das/ein.",
      de: "Der Nominativ antwortet auf 'Wer?' oder 'Was?'. Er ist das Subjekt des Satzes. Artikel: der/ein, die/eine, das/ein."
    },
    exercises: [
      {
        id: 'm2-nom-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete subject in nominative.",
          pl: "Uzupełnij podmiot w mianowniku.",
          uk: "Доповніть підмет у називному відмінку.",
          sq: "Plotësoni kryefjalën në rasën emërore.",
          de: "Vervollständige das Subjekt im Nominativ."
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
          sq: "Identifikoni rasën emërore në fjali.",
          de: "Identifiziere den Nominativ im Satz."
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
          sq: "Ndërtoni fjali me kryefjalë në rasën emërore.",
          de: "Bilde einen Satz mit einem Subjekt im Nominativ."
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
          sq: "Përgjigjjuni pyetjes 'Wer?'.",
          de: "Beantworte die 'Wer?'-Frage."
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
          sq: "Përputhni pyetjet me përgjigjet në rasën emërore.",
          de: "Ordne die Fragen den Antworten im Nominativ zu."
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
          sq: "Plotësoni kryefjalën në rasën emërore.",
          de: "Vervollständige das Subjekt im Nominativ."
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
          sq: "Zgjidhni formën e saktë emërore.",
          de: "Wähle die korrekte Nominativform."
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
          sq: "Ndërtoni fjali në rasën emërore.",
          de: "Bilde einen Satz im Nominativ."
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
          sq: "Plotësoni me nyjen në rasën emërore.",
          de: "Vervollständige mit dem Nominativartikel."
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
          sq: "Përputhni pyetjet Wer/Was me përgjigjet.",
          de: "Ordne Wer/Was-Fragen den Antworten zu."
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
    title: {
      en: 'Accusative Case (Direct Object)',
      pl: 'Biernik (Dopełnienie bliższe)',
      uk: 'Знахідний відмінок (Прямий додаток)',
      sq: 'Rasa kallëzore (Kundrinori i drejtë)',
      de: 'Akkusativ (Direktes Objekt)'
    },
    description: {
      en: "Accusative answers 'Wen?' (whom) or 'Was?' (what). It's the direct object. Articles change: der→den, ein→einen. die/das remain unchanged.",
      pl: "Biernik odpowiada na pytanie 'Kogo?' (wen) lub 'Co?' (was). Jest to dopełnienie bliższe. Rodzajniki się zmieniają: der→den, ein→einen. die/das pozostają bez zmian.",
      uk: "Знахідний відмінок відповідає на питання 'Кого?' (wen) або 'Що?' (was). Це прямий додаток. Артиклі змінюються: der→den, ein→einen. die/das залишаються без змін.",
      sq: "Rasa kallëzore i përgjigjet pyetjes 'Kë?' (wen) ose 'Çfarë?' (was). Është kundrinori i drejtë. Nyjet ndryshojnë: der→den, ein→einen. die/das mbeten të pandryshuara.",
      de: "Der Akkusativ antwortet auf 'Wen?' oder 'Was?'. Er ist das direkte Objekt. Die Artikel ändern sich: der→den, ein→einen. die/das bleiben unverändert."
    },
    exercises: [
      {
        id: 'm3-acc-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete direct object in accusative.",
          pl: "Uzupełnij dopełnienie bliższe w bierniku.",
          uk: "Доповніть прямий додаток у знахідному відмінку.",
          sq: "Plotësoni kundrinorin e drejtë në rasën kallëzore.",
          de: "Vervollständige das direkte Objekt im Akkusativ."
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
          sq: "Zgjidhni formën e saktë kallëzore.",
          de: "Wähle die korrekte Akkusativform."
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
          sq: "Plotësoni me nyjen në rasën kallëzore.",
          de: "Vervollständige mit dem Akkusativartikel."
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
          sq: "Ndërtoni fjali me kundrinor në rasën kallëzore.",
          de: "Bilde einen Satz mit einem Akkusativobjekt."
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
          sq: "Përputhni format emërore me format kallëzore.",
          de: "Ordne die Nominativformen den Akkusativformen zu."
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
          sq: "Plotësoni kallëzoren me 'sehen'.",
          de: "Vervollständige den Akkusativ mit 'sehen'."
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
          sq: "Zgjidhni formën kallëzore për emrin femëror.",
          de: "Wähle die Akkusativform für ein feminines Nomen."
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
          sq: "Ndërtoni fjali në rasën kallëzore.",
          de: "Bilde einen Satz im Akkusativ."
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
          sq: "Plotësoni me përemër në rasën kallëzore.",
          de: "Vervollständige mit dem Akkusativpronomen."
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
          sq: "Përputhni pyetjet Wen/Was me përgjigjet në kallëzore.",
          de: "Ordne Wen/Was-Fragen den Akkusativ-Antworten zu."
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
    title: {
      en: 'Dative Case (Indirect Object)',
      pl: 'Celownik (Dopełnienie dalsze)',
      uk: 'Давальний відмінок (Непрямий додаток)',
      sq: 'Rasa dhanore (Kundrinori i zhdrejtë)',
      de: 'Dativ (Indirektes Objekt)'
    },
    description: {
      en: "Dative answers 'Wem?' (to whom). Articles: der→dem, die→der, das→dem, die(pl)→den. Used for indirect objects and after dative prepositions.",
      pl: "Celownik odpowiada na pytanie 'Komu?' (wem). Rodzajniki: der→dem, die→der, das→dem, die(l.mn.)→den. Używany do dopełnień dalszych i po przyimkach z celownikiem.",
      uk: "Давальний відмінок відповідає на питання 'Кому?' (wem). Артиклі: der→dem, die→der, das→dem, die(мн.)→den. Використовується для непрямих додатків і після прийменників, що вимагають давального відмінка.",
      sq: "Rasa dhanore i përgjigjet pyetjes 'Kujt?' (wem). Nyjet: der→dem, die→der, das→dem, die(sh)→den. Përdoret për kundrinorët e zhdrejtë dhe pas parafjalëve që kërkojnë dhanoren.",
      de: "Der Dativ antwortet auf 'Wem?'. Artikel: der→dem, die→der, das→dem, die(Pl)→den. Wird für indirekte Objekte und nach Dativpräpositionen verwendet."
    },
    exercises: [
      {
        id: 'm4-dat-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete indirect object in dative.",
          pl: "Uzupełnij dopełnienie dalsze w celowniku.",
          uk: "Доповніть непрямий додаток у давальному відмінку.",
          sq: "Plotësoni kundrinorin e zhdrejtë në rasën dhanore.",
          de: "Vervollständige das indirekte Objekt im Dativ."
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
          sq: "Zgjidhni formën e saktë dhanore.",
          de: "Wähle die korrekte Dativform."
        },
        context: "Sie hilft ______ Frau. (die Frau)",
        options: ["die", "der", "den"],
        correctAnswer: "der",
      },
      {
        id: 'm4-dat-3',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with dative after preposition.",
          pl: "Uzupełnij z celownikiem po przyimku.",
          uk: "Доповніть давальним відмінком після прийменника.",
          sq: "Plotësoni me dhanore pas parafjale.",
          de: "Vervollständige mit dem Dativ nach der Präposition."
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
          sq: "Ndërtoni fjali me rasën dhanore.",
          de: "Bilde einen Satz mit Dativ."
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
          sq: "Përputhni parafjalët me frazat në rasën dhanore.",
          de: "Ordne die Präpositionen den Dativ-Phrasen zu."
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
          sq: "Plotësoni dhanoren me 'schreiben'.",
          de: "Vervollständige den Dativ mit 'schreiben'."
        },
        context: "Er schreibt ______ Schwester einen Brief. (seine Schwester)",
        correctAnswer: "seiner",
      },
      {
        id: 'm4-dat-7',
        type: 'multiple-choice',
        question: {
          en: "Choose dative form after 'von' (plural).",
          pl: "Wybierz formę celownika po 'von' (liczba mnoga).",
          uk: "Виберіть форму давального відмінка після 'von' (множина).",
          sq: "Zgjidhni formën dhanore pas 'von' (shumës).",
          de: "Wähle die Dativform nach 'von' (Plural)."
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
          sq: "Ndërtoni fjali në dhanore me 'schenken'.",
          de: "Bilde einen Dativsatz mit 'schenken'."
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
          sq: "Plotësoni me dhanore pas 'nach'.",
          de: "Vervollständige mit dem Dativ nach 'nach'."
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
          sq: "Përputhni foljet dhanore me kuptimet e tyre.",
          de: "Ordne die Dativverben ihren Bedeutungen zu."
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
    title: {
      en: 'Plural Forms (Pluralformen)',
      pl: 'Formy liczby mnogiej (Pluralformen)',
      uk: 'Форми множини (Pluralformen)',
      sq: 'Format e shumësit (Pluralformen)',
      de: 'Pluralformen'
    },
    description: {
      en: "German has different plural endings: -e, -er, -n, -en, -s. Plural forms must be learned with each noun. In dative plural, add -n if not already present.",
      pl: "Niemiecki ma różne końcówki liczby mnogiej: -e, -er, -n, -en, -s. Formy liczby mnogiej należy uczyć się z każdym rzeczownikiem. W celowniku liczby mnogiej dodaje się -n, jeśli go tam jeszcze nie ma.",
      uk: "Німецька мова має різні закінчення множини: -e, -er, -n, -en, -s. Форми множини потрібно вивчати з кожним іменником. У давальному відмінку множини додається -n, якщо його ще немає.",
      sq: "Gjermanishtja ka mbaresa të ndryshme shumsi: -e, -er, -n, -en, -s. Format e shumësit duhen mësuar me çdo emër. Në dhanoren e shumësit, shtohet -n nëse nuk është tashmë i pranishëm.",
      de: "Im Deutschen gibt es verschiedene Pluralendungen: -e, -er, -n, -en, -s. Pluralformen müssen mit jedem Nomen gelernt werden. Im Dativ Plural wird ein -n hinzugefügt, wenn noch keins vorhanden ist."
    },
    exercises: [
      {
        id: 'm4-plur-1',
        type: 'matching',
        question: {
          en: "Match singular nouns to their plurals.",
          pl: "Dopasuj rzeczowniki w liczbie pojedynczej do ich liczby mnogiej.",
          uk: "Зіставте іменники в однині з їхніми формами множини.",
          sq: "Përputhni emrat në njëjës me shumësit e tyre.",
          de: "Ordne die Nomen im Singular ihren Pluralformen zu."
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
          sq: "Plotësoni me formën e shumësit.",
          de: "Vervollständige mit der Pluralform."
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
          sq: "Zgjidhni shumësine e saktë të 'der Student'.",
          de: "Wähle den korrekten Plural von 'der Student'."
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
          sq: "Plotësoni dhanoren në shumës.",
          de: "Vervollständige den Dativ Plural."
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
          sq: "Ndërtoni fjali me shumës.",
          de: "Bilde einen Satz mit Plural."
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
          sq: "Plotësoni me shumesin e 'der Apfel'.",
          de: "Vervollständige mit dem Plural von 'der Apfel'."
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
          sq: "Zgjidhni shumësine e 'die Universität'.",
          de: "Wähle den Plural von 'die Universität'."
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
          sq: "Përputhni shumësit me format e tyre njëjës.",
          de: "Ordne die Pluralformen ihren Singularformen zu."
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
          sq: "Ndërtoni fjali me dhanoren në shumës.",
          de: "Bilde einen Satz mit Dativ Plural."
        },
        context: ["Er", "hilft", "den", "Studenten"],
        correctAnswer: "Er hilft den Studenten",
      },
      {
        id: 'm4-plur-10',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with dative plural ending.",
          pl: "Uzupełnij końcówką celownika liczby mnogiej.",
          uk: "Доповніть закінченням давального відмінка множини.",
          sq: "Plotësoni me mbaresën e dhanores në shumës.",
          de: "Vervollständige mit der Dativ-Plural-Endung."
        },
        context: "Die Kinder spielen mit ihren ______. (das Spielzeug -> die Spielzeuge)",
        correctAnswer: "Spielzeugen",
      }
    ]
  },
  {
    id: 'possessive-articles',
    moduleId: 3,
    title: {
      en: 'Possessive Articles (mein, dein, sein, ihr...)',
      pl: 'Rodzajniki dzierżawcze (mein, dein, sein, ihr...)',
      uk: 'Присвійні артиклі (mein, dein, sein, ihr...)',
      sq: 'Nyjet pronore (mein, dein, sein, ihr...)',
      de: 'Possessivartikel (mein, dein, sein, ihr...)'
    },
    description: {
      en: "Possessive articles: mein, dein, sein, ihr, unser, euer, Ihr. They decline like 'kein' and agree with the possessed noun's gender and case.",
      pl: "Rodzajniki dzierżawcze: mein, dein, sein, ihr, unser, euer, Ihr. Odmieniają się jak 'kein' i zgadzają się z rodzajem i przypadkiem posiadanego rzeczownika.",
      uk: "Присвійні артиклі: mein, dein, sein, ihr, unser, euer, Ihr. Вони відмінюються як 'kein' і узгоджуються з родом та відмінком іменника, до якого відносяться.",
      sq: "Nyjet pronore: mein, dein, sein, ihr, unser, euer, Ihr. Ato lakohen si 'kein' dhe përshtaten me gjininë dhe rasën e emrit që zotërojnë.",
      de: "Possessivartikel: mein, dein, sein, ihr, unser, euer, Ihr. Sie werden wie 'kein' dekliniert und richten sich nach Genus und Kasus des Nomens."
    },
    exercises: [
      {
        id: 'm3-poss-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct possessive (my mother).",
          pl: "Uzupełnij poprawnym zaimkiem dzierżawczym (moja matka).",
          uk: "Доповніть правильним присвійним займенником (моя мати).",
          sq: "Plotësoni me përemrin e saktë pronor (nëna ime).",
          de: "Vervollständige mit dem korrekten Possessivartikel (meine Mutter)."
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
          sq: "Zgjidhni përemrin e saktë pronor (babai i tij).",
          de: "Wähle den korrekten Possessivartikel (sein Vater)."
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
          sq: "Plotësoni me përemër pronor në rasën kallëzore.",
          de: "Vervollständige mit dem Possessivartikel im Akkusativ."
        },
        context: "Ich sehe ______ Auto. (dein Auto - neuter)",
        correctAnswer: "dein",
      },
      {
        id: 'm3-poss-4',
        type: 'matching',
        question: {
          en: "Match possessives to persons.",
          pl: "Dopasuj zaimki dzierżawcze do osób.",
          uk: "Зіставте присвійні займенники з особами.",
          sq: "Përputhni pronorët me vetat.",
          de: "Ordne die Possessivartikel den Personen zu."
        },
        context: ["ich", "du", "er", "sie (she)"],
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
          sq: "Ndërtoni fjali me përemër pronor.",
          de: "Bilde einen Satz mit einem Possessivartikel."
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
          sq: "Plotësoni me përemër pronor në rasën dhanore.",
          de: "Vervollständige mit dem Possessivartikel im Dativ."
        },
        context: "Ich helfe ______ Bruder. (mein Bruder)",
        correctAnswer: "meinem",
      },
      {
        id: 'm3-poss-7',
        type: 'multiple-choice',
        question: {
          en: "Choose correct possessive for plural.",
          pl: "Wybierz poprawny zaimek dzierżawczy dla liczby mnogiej.",
          uk: "Виберіть правильний присвійний займенник для множини.",
          sq: "Zgjidhni përemrin e saktë pronor për shumës.",
          de: "Wähle den korrekten Possessivartikel für Plural."
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
          sq: "Ndërtoni fjali pronore.",
          de: "Bilde einen Possessivsatz."
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
          sq: "Plotësoni me përemër pronor formal.",
          de: "Vervollständige mit dem formellen Possessivartikel."
        },
        context: "Ist das ______ Koffer? (your suitcase - formal)",
        correctAnswer: "Ihr",
      },
      {
        id: 'm3-poss-10',
        type: 'matching',
        question: {
          en: "Match possessive articles to their nominative forms.",
          pl: "Dopasuj rodzajniki dzierżawcze do ich form mianownikowych.",
          uk: "Зіставте присвійні артиклі з їхніми називними формами.",
          sq: "Përputhni nyjet pronore me format e tyre emërore.",
          de: "Ordne die Possessivartikel ihren Nominativformen zu."
        },
        context: ["mein Vater", "meine Mutter", "mein Kind", "meine Eltern (pl.)"],
        options: ["meine Eltern", "mein Vater", "mein Kind", "meine Mutter"],
        correctAnswer: ["mein Vater", "meine Mutter", "mein Kind", "meine Eltern"],
      }
    ]
  },

  // ===== PRÄPOSITIONEN (PREPOSITIONS) =====
  {
    id: 'dative-prepositions',
    moduleId: 4,
    title: {
      en: 'Dative Prepositions: aus, bei, mit, nach, von, zu',
      pl: 'Przyimki z celownikiem: aus, bei, mit, nach, von, zu',
      uk: 'Прийменники, що вимагають давального відмінка: aus, bei, mit, nach, von, zu',
      sq: 'Parafjalët me dhanore: aus, bei, mit, nach, von, zu',
      de: 'Dativpräpositionen: aus, bei, mit, nach, von, zu'
    },
    description: {
      en: "These prepositions always take dative case. Common contractions: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom.",
      pl: "Te przyimki zawsze łączą się z celownikiem. Częste skróty: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom.",
      uk: "Ці прийменники завжди вимагають давального відмінка. Поширені скорочення: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom.",
      sq: "Këto parafjalë marrin gjithmonë rasën dhanore. Shkurtimet e zakonshme: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom.",
      de: "Diese Präpositionen stehen immer mit dem Dativ. Häufige Verschmelzungen: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom."
    },
    exercises: [
      {
        id: 'm4-prep-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with correct dative form.",
          pl: "Uzupełnij poprawną formą celownika.",
          uk: "Доповніть правильною формою давального відмінка.",
          sq: "Plotësoni me formën e saktë dhanore.",
          de: "Vervollständige mit der korrekten Dativform."
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
          sq: "Zgjidhni parafjalën e saktë për 'me'.",
          de: "Wähle die korrekte Präposition für 'mit'."
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
          sq: "Plotësoni me shkurtim.",
          de: "Vervollständige mit der Verschmelzung."
        },
        context: "Wir gehen ______ Arzt. (zu dem Arzt)",
        correctAnswer: "zum",
      },
      {
        id: 'm4-prep-4',
        type: 'matching',
        question: {
          en: "Match prepositions to their meanings.",
          pl: "Dopasuj przyimki do ich znaczeń.",
          uk: "Зіставте прийменники з їхніми значеннями.",
          sq: "Përputhni parafjalët me kuptimet e tyre.",
          de: "Ordne die Präpositionen ihren Bedeutungen zu."
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
          sq: "Ndërtoni fjali me parafjalë dhanore.",
          de: "Bilde einen Satz mit einer Dativpräposition."
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
          sq: "Plotësoni me 'von' + dhanore.",
          de: "Vervollständige mit 'von' + Dativ."
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
          sq: "Zgjidhni shkurtimin e saktë.",
          de: "Wähle die korrekte Verschmelzung."
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
          sq: "Ndërtoni fjali me 'nach'.",
          de: "Bilde einen Satz mit 'nach'."
        },
        context: ["Nach", "dem Essen", "trinke", "ich Kaffee"],
        correctAnswer: "Nach dem Essen trinke ich Kaffee",
      },
      {
        id: 'm4-prep-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'bei' + dative (contraction).",
          pl: "Uzupełnij 'bei' + celownik (skrót).",
          uk: "Доповніть 'bei' + давальний відмінок (скорочення).",
          sq: "Plotësoni me 'bei' + dhanore (shkurtim).",
          de: "Vervollständige mit 'bei' + Dativ (Verschmelzung)."
        },
        context: "Wir kaufen Brot ______ Bäcker. (bei dem Bäcker)",
        correctAnswer: "beim",
      },
      {
        id: 'm4-prep-10',
        type: 'matching',
        question: {
          en: "Match prepositions to example phrases.",
          pl: "Dopasuj przyimki do przykładowych zwrotów.",
          uk: "Зіставте прийменники з прикладами фраз.",
          sq: "Përputhni parafjalët me frazat shembull.",
          de: "Ordne die Präpositionen den Beispielphrasen zu."
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
    title: {
      en: 'Location Prepositions (Wo? Wohin? Woher?)',
      pl: 'Przyimki miejsca (Wo? Wohin? Woher?)',
      uk: 'Прийменники місця (Wo? Wohin? Woher?)',
      sq: 'Parafjalët e vendit (Wo? Wohin? Woher?)',
      de: 'Lokale Präpositionen (Wo? Wohin? Woher?)'
    },
    description: {
      en: "Wo? (location-dative): in der Schule, beim Arzt. Wohin? (direction-accusative): in die Schule, zum Arzt, nach Hause. Woher? (origin-dative): aus der Schule, vom Arzt.",
      pl: "Wo? (miejsce-celownik): in der Schule, beim Arzt. Wohin? (kierunek-biernik): in die Schule, zum Arzt, nach Hause. Woher? (pochodzenie-celownik): aus der Schule, vom Arzt.",
      uk: "Wo? (місце-давальний): in der Schule, beim Arzt. Wohin? (напрямок-знахідний): in die Schule, zum Arzt, nach Hause. Woher? (походження-давальний): aus der Schule, vom Arzt.",
      sq: "Ku? (vendndodhje-dhanore): in der Schule, beim Arzt. Për ku? (drejtim-kallëzore): in die Schule, zum Arzt, nach Hause. Nga ku? (origjinë-dhanore): aus der Schule, vom Arzt.",
      de: "Wo? (Ort-Dativ): in der Schule, beim Arzt. Wohin? (Richtung-Akkusativ): in die Schule, zum Arzt, nach Hause. Woher? (Herkunft-Dativ): aus der Schule, vom Arzt."
    },
    exercises: [
      {
        id: 'm5-loc-1',
        type: 'multiple-choice',
        question: {
          en: "Choose correct preposition for 'Wo?'",
          pl: "Wybierz poprawny przyimek dla 'Wo?'",
          uk: "Виберіть правильний прийменник для 'Wo?'",
          sq: "Zgjidhni parafjalën e saktë për 'Ku?'",
          de: "Wähle die korrekte Präposition für 'Wo?'"
        },
        context: "Wo arbeitet er? - Er arbeitet ______ der Bank.",
        options: ["in", "nach", "zu"],
        correctAnswer: "in",
      },
      {
        id: 'm5-loc-2',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete direction (Wohin?).",
          pl: "Uzupełnij kierunek (Wohin?).",
          uk: "Доповніть напрямок (Wohin?).",
          sq: "Plotësoni drejtimin (Për ku?).",
          de: "Vervollständige die Richtung (Wohin?)."
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
          sq: "Plotësoni origjinën (Nga ku?).",
          de: "Vervollständige die Herkunft (Woher?)."
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
          sq: "Përputhni pyetjet me përgjigjet e duhura.",
          de: "Ordne die Fragen den passenden Antworten zu."
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
          sq: "Ndërtoni fjali me parafjalë vendi.",
          de: "Bilde einen Satz mit einer lokalen Präposition."
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
          sq: "Plotësoni 'Për ku?' me 'auf'.",
          de: "Vervollständige 'Wohin?' mit 'auf'."
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
          sq: "Zgjidhni rasën e saktë për 'Ku?'",
          de: "Wähle den korrekten Kasus für 'Wo?'"
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
          sq: "Ndërtoni fjali me 'Nga ku?'.",
          de: "Bilde einen 'Woher?'-Satz."
        },
        context: ["Ich", "komme", "gerade", "vom Arzt"],
        correctAnswer: "Ich komme gerade vom Arzt",
      },
      {
        id: 'm5-loc-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete direction to a country (without article).",
          pl: "Uzupełnij kierunek do kraju (bez rodzajnika).",
          uk: "Доповніть напрямок до країни (без артикля).",
          sq: "Plotësoni drejtimin për në një vend (pa nyje).",
          de: "Vervollständige die Richtung zu einem Land (ohne Artikel)."
        },
        context: "Wir fahren ______ Italien. (to Italy)",
        correctAnswer: "nach",
      },
      {
        id: 'm5-loc-10',
        type: 'matching',
        question: {
          en: "Match location types to 'Wohin?' prepositions.",
          pl: "Dopasuj typy lokalizacji do przyimków 'Wohin?'.",
          uk: "Зіставте типи локацій з прийменниками 'Wohin?'.",
          sq: "Përputhni llojet e vendndodhjeve me parafjalët 'Për ku?'.",
          de: "Ordne Ortstypen den 'Wohin?'-Präpositionen zu."
        },
        context: ["countries (no article)", "buildings/enclosed spaces", "people's homes/shops", "open squares/islands"],
        options: ["zu", "nach", "in", "auf"],
        correctAnswer: ["nach", "in", "zu", "auf"],
      }
    ]
  },

  // ===== PRONOMEN (PRONOUNS) =====
  {
    id: 'personal-pronouns',
    moduleId: 1,
    title: {
      en: 'Personal Pronouns (ich, du, er, sie, es...)',
      pl: 'Zaimki osobowe (ich, du, er, sie, es...)',
      uk: 'Особові займенники (ich, du, er, sie, es...)',
      sq: 'Përemrat vetorë (ich, du, er, sie, es...)',
      de: 'Personalpronomen (ich, du, er, sie, es...)'
    },
    description: {
      en: "Personal pronouns replace nouns. Nominative: ich, du, er, sie, es, wir, ihr, sie, Sie. They must agree with the verb conjugation.",
      pl: "Zaimki osobowe zastępują rzeczowniki. Mianownik: ich, du, er, sie, es, wir, ihr, sie, Sie. Muszą zgadzać się z koniugacją czasownika.",
      uk: "Особові займенники замінюють іменники. Називний відмінок: ich, du, er, sie, es, wir, ihr, sie, Sie. Вони повинні узгоджуватися з відмінюванням дієслова.",
      sq: "Përemrat vetorë zëvendësojnë emrat. Emërore: ich, du, er, sie, es, wir, ihr, sie, Sie. Ato duhet të përputhen me zgjedhimin e foljes.",
      de: "Personalpronomen ersetzen Nomen. Nominativ: ich, du, er, sie, es, wir, ihr, sie, Sie. Sie müssen mit der Verbkonjugation übereinstimmen."
    },
    exercises: [
      {
        id: 'm1-pron-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Replace noun with pronoun.",
          pl: "Zastąp rzeczownik zaimkiem.",
          uk: "Замініть іменник займенником.",
          sq: "Zëvendësoni emrin me përemër.",
          de: "Ersetze das Nomen durch ein Pronomen."
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
          sq: "Zgjidhni përemrin e saktë për 'die Frau'.",
          de: "Wähle das korrekte Pronomen für 'die Frau'."
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
          sq: "Përputhni emrat me përemrat e tyre.",
          de: "Ordne die Nomen ihren Pronomen zu."
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
          sq: "Ndërtoni fjali me përemra.",
          de: "Bilde einen Satz mit Pronomen."
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
          sq: "Plotësoni adresimin formal.",
          de: "Vervollständige die formelle Anrede."
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
          sq: "Zëvendësoni me përemër në rasën kallëzore.",
          de: "Ersetze mit dem Akkusativpronomen."
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
          sq: "Zgjidhni përemrin për 'das Auto'.",
          de: "Wähle das Pronomen für 'das Auto'."
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
          sq: "Ndërtoni fjali me zëvendësim përemri.",
          de: "Bilde einen Satz mit Pronomenersetzung."
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
          sq: "Plotësoni me përemër në rasën dhanore.",
          de: "Vervollständige mit dem Dativpronomen."
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
          sq: "Përputhni përemrat me rasat e tyre.",
          de: "Ordne die Pronomen ihren Fällen zu."
        },
        context: ["er (Subjekt)", "ihn (Objekt)", "ihm (ind. Objekt)", "sie (Subjekt)"],
        options: ["Akkusativ", "Nominativ", "Dativ", "Nominativ"],
        correctAnswer: ["Nominativ", "Akkusativ", "Dativ", "Nominativ"],
      }
    ]
  },
  {
    id: 'impersonal-pronoun-man',
    moduleId: 4,
    title: {
      en: 'Impersonal Pronoun "man"',
      pl: 'Zaimek nieosobowy "man"',
      uk: 'Безособовий займенник "man"',
      sq: 'Përemri jopersonal "man"',
      de: 'Indefinitpronomen "man"'
    },
    description: {
      en: "'man' corresponds to English 'one' or 'you' (general). The verb is always conjugated in 3rd person singular. Example: 'In Deutschland isst man oft Brot.'",
      pl: "'man' odpowiada angielskiemu 'one' lub 'you' (ogólnie). Czasownik jest zawsze odmieniany w 3. osobie liczby pojedynczej. Przykład: 'In Deutschland isst man oft Brot.'",
      uk: "'man' відповідає англійському 'one' або 'you' (узагальнено). Дієслово завжди відмінюється в 3-й особі однини. Приклад: 'In Deutschland isst man oft Brot.'",
      sq: "'man' korrespondon me anglishten 'one' ose 'you' (e përgjithshme). Folja zgjedhohet gjithmonë në vetën e tretë njëjës. Shembull: 'In Deutschland isst man oft Brot.'",
      de: "'man' entspricht dem englischen 'one' oder 'you' (allgemein). Das Verb wird immer in der 3. Person Singular konjugiert. Beispiel: 'In Deutschland isst man oft Brot.'"
    },
    exercises: [
      {
        id: 'm4-man-1',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with 'man' construction.",
          pl: "Uzupełnij konstrukcją z 'man'.",
          uk: "Доповніть конструкцією з 'man'.",
          sq: "Plotësoni me konstruksionin 'man'.",
          de: "Vervollständige mit der 'man'-Konstruktion."
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
          sq: "Zgjidhni formën e saktë të foljes me 'man'.",
          de: "Wähle die korrekte Verbform mit 'man'."
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
          sq: "Ndërtoni fjali me 'man'.",
          de: "Bilde einen Satz mit 'man'."
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
          sq: "Plotësoni pohimin e përgjithshëm.",
          de: "Vervollständige die allgemeine Aussage."
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
          sq: "Përkthejeni: 'Këtu mund të mësosh gjermanisht.'",
          de: "Übersetze: 'Hier kann man Deutsch lernen.'"
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
          sq: "Plotësoni me 'man' + folje modale.",
          de: "Vervollständige mit 'man' + Modalverb."
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
          sq: "Ndërtoni një rregull të përgjithshëm me 'man'.",
          de: "Bilde eine allgemeine Regel mit 'man'."
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
          sq: "Zgjidhni përkthimin e saktë të 'man'.",
          de: "Wähle die korrekte Übersetzung von 'man'."
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
          sq: "Plotësoni pohimin kulturor.",
          de: "Vervollständige die kulturelle Aussage."
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
          sq: "Përputhni fjalitë me 'man' me kuptimet e tyre.",
          de: "Ordne die 'man'-Sätze ihren Bedeutungen zu."
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
    title: {
      en: 'Declarative Sentences (Aussagesätze)',
      pl: 'Zdania oznajmujące (Aussagesätze)',
      uk: 'Розповідні речення (Aussagesätze)',
      sq: 'Fjalitë dëftore (Aussagesätze)',
      de: 'Aussagesätze'
    },
    description: {
      en: "Basic structure: Subject + Verb (position 2) + Rest. Example: 'Ich lerne Deutsch.' The verb always stays in position 2.",
      pl: "Podstawowa struktura: Podmiot + Orzeczenie (pozycja 2) + Reszta. Przykład: 'Ich lerne Deutsch.' Czasownik zawsze pozostaje na pozycji 2.",
      uk: "Базова структура: Підмет + Дієслово (позиція 2) + Решта. Приклад: 'Ich lerne Deutsch.' Дієслово завжди залишається на другій позиції.",
      sq: "Struktura bazë: Kryefjalë + Folje (pozicioni 2) + Pjesa tjetër. Shembull: 'Ich lerne Deutsch.' Folja qëndron gjithmonë në pozicionin 2.",
      de: "Grundstruktur: Subjekt + Verb (Position 2) + Rest. Beispiel: 'Ich lerne Deutsch.' Das Verb bleibt immer an Position 2."
    },
    exercises: [
      {
        id: 'm1-decl-1',
        type: 'sentence-scramble',
        question: {
          en: "Build basic declarative sentence.",
          pl: "Zbuduj podstawowe zdanie oznajmujące.",
          uk: "Побудуйте базове розповідне речення.",
          sq: "Ndërtoni një fjali bazë dëftore.",
          de: "Bilde einen einfachen Aussagesatz."
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
          sq: "Plotësoni strukturën e fjalisë.",
          de: "Vervollständige die Satzstruktur."
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
          sq: "Ku ndodhet folja në fjalitë kryesore gjermane?",
          de: "Wo steht das Verb in deutschen Hauptsätzen?"
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
          sq: "Ndërtoni fjali dëftore me kundrinor.",
          de: "Bilde einen Aussagesatz mit Objekt."
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
          sq: "Plotësoni me rendin e saktë të fjalëve.",
          de: "Vervollständige mit der korrekten Wortstellung."
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
          sq: "Ndërtoni fjali me shprehje kohe.",
          de: "Bilde einen Satz mit einem Zeitausdruck."
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
          sq: "Zgjidhni rendin e saktë të fjalëve.",
          de: "Wähle die korrekte Wortstellung."
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
          sq: "Plotësoni fjalinë dëftore.",
          de: "Vervollständige den Aussagesatz."
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
          sq: "Ndërtoni fjali me vendndodhje.",
          de: "Bilde einen Satz mit einer Ortsangabe."
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
          sq: "Përputhni pjesët e fjalive për të ndërtuar fjali dëftore.",
          de: "Verbinde die Satzteile, um Aussagesätze zu bilden."
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
    title: {
      en: 'Inverted Sentences (with Time/Adverb first)',
      pl: 'Zdania z inwersją (z czasem/przysłówkiem na początku)',
      uk: 'Інвертовані речення (з часом/прислівником на початку)',
      sq: 'Fjali të përmbysura (me kohë/ndajfolje në fillim)',
      de: 'Inversionssätze (mit Zeit/Adverb am Anfang)'
    },
    description: {
      en: "Structure: Time/Adverb + Verb (pos. 2) + Subject + Rest. Example: 'Heute lerne ich Deutsch.' Verb still in position 2.",
      pl: "Struktura: Czas/Przysłówek + Orzeczenie (poz. 2) + Podmiot + Reszta. Przykład: 'Heute lerne ich Deutsch.' Czasownik wciąż na pozycji 2.",
      uk: "Структура: Час/Прислівник + Дієслово (поз. 2) + Підмет + Решта. Приклад: 'Heute lerne ich Deutsch.' Дієслово все ще на другій позиції.",
      sq: "Struktura: Koha/Ndajfolja + Folja (poz. 2) + Kryefjala + Pjesa tjetër. Shembull: 'Heute lerne ich Deutsch.' Folja ende në pozicionin 2.",
      de: "Struktur: Zeit/Adverb + Verb (Pos. 2) + Subjekt + Rest. Beispiel: 'Heute lerne ich Deutsch.' Das Verb bleibt an Position 2."
    },
    exercises: [
      {
        id: 'm2-inv-1',
        type: 'sentence-scramble',
        question: {
          en: "Build inverted sentence starting with time.",
          pl: "Zbuduj zdanie z inwersją, zaczynając od czasu.",
          uk: "Побудуйте інвертоване речення, починаючи з часу.",
          sq: "Ndërtoni fjali të përmbysur duke filluar me kohën.",
          de: "Bilde einen Inversionssatz, der mit einer Zeitangabe beginnt."
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
          sq: "Plotësoni fjalinë e përmbysur.",
          de: "Vervollständige den Inversionssatz."
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
          sq: "Zgjidhni rendin e saktë të fjalëve pas shprehjes kohore.",
          de: "Wähle die korrekte Wortstellung nach dem Zeitausdruck."
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
          sq: "Ndërtoni fjali duke filluar me vendndodhjen.",
          de: "Bilde einen Satz, der mit einer Ortsangabe beginnt."
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
          sq: "Plotësoni me strukturë të përmbysur.",
          de: "Vervollständige mit Inversionsstruktur."
        },
        context: "Abends ______ ich gern ______. (fernsehen)",
        correctAnswer: ["sehe", "fern"],
      },
      {
        id: 'm2-inv-6',
        type: 'sentence-scramble',
        question: {
          en: "Build inverted sentence with adverb.",
          pl: "Zbuduj zdanie z inwersją i przysłówkiem.",
          uk: "Побудуйте інвертоване речення з прислівником.",
          sq: "Ndërtoni fjali të përmbysur me ndajfolje.",
          de: "Bilde einen Inversionssatz mit einem Adverb."
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
          sq: "Zgjidhni përmbysjen e saktë pas 'Dort'.",
          de: "Wähle die korrekte Inversion nach 'Dort'."
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
          sq: "Plotësoni fjalinë e përmbysur me folje modale.",
          de: "Vervollständige den Inversionssatz mit einem Modalverb."
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
          sq: "Ndërtoni fjali duke filluar me 'Hier'.",
          de: "Bilde einen Satz, der mit 'Hier' beginnt."
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
          sq: "Përputhni shprehjet kohore me fjalitë e përmbysura.",
          de: "Ordne die Zeitausdrücke den Inversionssätzen zu."
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
    title: {
      en: 'W-Questions (W-Fragen)',
      pl: 'Pytania typu W (W-Fragen)',
      uk: 'W-питання (W-Fragen)',
      sq: 'Pyetjet me W (W-Fragen)',
      de: 'W-Fragen'
    },
    description: {
      en: "Structure: W-word + Verb (pos. 2) + Subject + Rest? Question words: wer, was, wo, wann, wie, warum, woher, wohin.",
      pl: "Struktura: Słowo pytające W + Orzeczenie (poz. 2) + Podmiot + Reszta? Słowa pytające: wer, was, wo, wann, wie, warum, woher, wohin.",
      uk: "Структура: W-слово + Дієслово (поз. 2) + Підмет + Решта? Питальні слова: wer, was, wo, wann, wie, warum, woher, wohin.",
      sq: "Struktura: Fjala pyetëse W + Folja (poz. 2) + Kryefjala + Pjesa tjetër? Fjalët pyetëse: wer, was, wo, wann, wie, warum, woher, wohin.",
      de: "Struktur: W-Wort + Verb (Pos. 2) + Subjekt + Rest? Fragewörter: wer, was, wo, wann, wie, warum, woher, wohin."
    },
    exercises: [
      {
        id: 'm2-w-1',
        type: 'matching',
        question: {
          en: "Match W-words to their English meanings.",
          pl: "Dopasuj słowa pytające (W-Wörter) do ich angielskich znaczeń.",
          uk: "Зіставте питальні слова (W-Wörter) з їхніми англійськими значеннями.",
          sq: "Përputhni fjalët pyetëse (W-Wörter) me kuptimet e tyre në anglisht.",
          de: "Ordne die W-Wörter ihren englischen Bedeutungen zu."
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
          sq: "Plotësoni pyetjen me W- që pyet për personin.",
          de: "Vervollständige die W-Frage, die nach einer Person fragt."
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
          sq: "Ndërtoni pyetje me W- që pyet për vendndodhjen.",
          de: "Bilde eine W-Frage, die nach einem Ort fragt."
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
          sq: "Zgjidhni fjalën e saktë pyetëse (W-Wort) për kohën.",
          de: "Wähle das korrekte W-Wort für die Zeit."
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
          sq: "Plotësoni pyetjen për origjinën.",
          de: "Vervollständige die Frage nach der Herkunft."
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
          sq: "Ndërtoni pyetje për destinacionin.",
          de: "Bilde eine Frage nach dem Ziel."
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
          sq: "Zgjidhni fjalën pyetëse (W-Wort) për arsyen.",
          de: "Wähle das W-Wort für den Grund."
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
          sq: "Plotësoni pyetjen për mënyrën.",
          de: "Vervollständige die Frage nach der Art und Weise."
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
          sq: "Ndërtoni pyetje për objektin.",
          de: "Bilde eine Frage nach dem Objekt."
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
          sq: "Përputhni pyetjet me W- me përgjigjet e duhura.",
          de: "Ordne die W-Fragen den passenden Antworten zu."
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
    title: {
      en: 'Yes/No Questions (Ja/Nein-Fragen)',
      pl: 'Pytania Tak/Nie (Ja/Nein-Fragen)',
      uk: 'Питання Так/Ні (Ja/Nein-Fragen)',
      sq: 'Pyetjet Po/Jo (Ja/Nein-Fragen)',
      de: 'Ja/Nein-Fragen'
    },
    description: {
      en: "Structure: Verb (pos. 1) + Subject + Rest? Example: 'Kommen Sie aus Spanien?' Answer: 'Ja/Nein, ich komme aus...'",
      pl: "Struktura: Orzeczenie (poz. 1) + Podmiot + Reszta? Przykład: 'Kommen Sie aus Spanien?' Odpowiedź: 'Ja/Nein, ich komme aus...'",
      uk: "Структура: Дієслово (поз. 1) + Підмет + Решта? Приклад: 'Kommen Sie aus Spanien?' Відповідь: 'Ja/Nein, ich komme aus...'",
      sq: "Struktura: Folja (poz. 1) + Kryefjala + Pjesa tjetër? Shembull: 'Kommen Sie aus Spanien?' Përgjigje: 'Ja/Nein, ich komme aus...'",
      de: "Struktur: Verb (Pos. 1) + Subjekt + Rest? Beispiel: 'Kommen Sie aus Spanien?' Antwort: 'Ja/Nein, ich komme aus...'"
    },
    exercises: [
      {
        id: 'm2-yn-1',
        type: 'sentence-scramble',
        question: {
          en: "Build yes/no question.",
          pl: "Zbuduj pytanie typu tak/nie.",
          uk: "Побудуйте питання типу так/ні.",
          sq: "Ndërtoni pyetje po/jo.",
          de: "Bilde eine Ja/Nein-Frage."
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
          sq: "Plotësoni pyetjen po/jo.",
          de: "Vervollständige die Ja/Nein-Frage."
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
          sq: "Zgjidhni formimin e saktë të pyetjes.",
          de: "Wähle die korrekte Fragebildung."
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
          sq: "Formoni pyetje nga pohimi.",
          de: "Bilde eine Frage aus der Aussage."
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
          sq: "Ndërtoni pyetje po/jo me folje modale.",
          de: "Bilde eine Ja/Nein-Frage mit einem Modalverb."
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
          sq: "Ndërtoni pyetje me 'sein'.",
          de: "Bilde eine Frage mit 'sein'."
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
          sq: "Zgjidhni pyetjen e saktë po/jo.",
          de: "Wähle die korrekte Ja/Nein-Frage."
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
          sq: "Ndërtoni pyetje për pronësinë.",
          de: "Bilde eine Frage zum Besitz."
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
          sq: "Plotësoni pyetjen me folje të ndashme.",
          de: "Vervollständige die Frage mit einem trennbaren Verb."
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
          sq: "Përputhni pyetjet po/jo me përgjigjet e duhura.",
          de: "Ordne die Ja/Nein-Fragen den passenden Antworten zu."
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
    title: {
      en: 'Sentence Bracket (Satzklammer)',
      pl: 'Szyk ramowy (Satzklammer)',
      uk: 'Рамкова конструкція (Satzklammer)',
      sq: 'Kllapa e fjalisë (Satzklammer)',
      de: 'Satzklammer'
    },
    description: {
      en: "With modal verbs: conjugated modal at pos. 2, infinitive at end. With separable verbs: stem at pos. 2, prefix at end. Examples: 'Wir wollen nach Berlin fahren.' / 'Der Zug fährt ab.'",
      pl: "Z czasownikami modalnymi: odmieniony modalny na poz. 2, bezokolicznik na końcu. Z czasownikami rozdzielnymi: temat na poz. 2, przedrostek na końcu. Przykłady: 'Wir wollen nach Berlin fahren.' / 'Der Zug fährt ab.'",
      uk: "З модальними дієсловами: відмінюване модальне на поз. 2, інфінітив у кінці. З відокремлюваними дієсловами: основа на поз. 2, префікс у кінці. Приклади: 'Wir wollen nach Berlin fahren.' / 'Der Zug fährt ab.'",
      sq: "Me folje modale: modali i zgjedhuar në poz. 2, paskajorja në fund. Me folje të ndashme: rrënja në poz. 2, parashtesa në fund. Shembuj: 'Wir wollen nach Berlin fahren.' / 'Der Zug fährt ab.'",
      de: "Bei Modalverben: konjugiertes Modalverb an Pos. 2, Infinitiv am Ende. Bei trennbaren Verben: Stamm an Pos. 2, Präfix am Ende. Beispiele: 'Wir wollen nach Berlin fahren.' / 'Der Zug fährt ab.'"
    },
    exercises: [
      {
        id: 'm3-bracket-1',
        type: 'sentence-scramble',
        question: {
          en: "Build sentence with modal verb bracket.",
          pl: "Zbuduj zdanie z ramą czasownikową (czasownik modalny).",
          uk: "Побудуйте речення з рамковою конструкцією (модальне дієслово).",
          sq: "Ndërtoni fjali me kllapë fjalie (folje modale).",
          de: "Bilde einen Satz mit einer Modalverbklammer."
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
          sq: "Plotësoni kllapën e fjalisë me folje të ndashme.",
          de: "Vervollständige die Satzklammer mit einem trennbaren Verb."
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
          sq: "Ku shkon paskajorja me foljet modale?",
          de: "Wohin kommt der Infinitiv bei Modalverben?"
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
          sq: "Ndërtoni fjali me kllapë fjalie (folje e ndashme).",
          de: "Bilde einen Satz mit einer Klammer für trennbare Verben."
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
          sq: "Plotësoni fjalinë me folje modale.",
          de: "Vervollständige den Satz mit dem Modalverb."
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
          sq: "Ndërtoni kllapë me folje modale dhe kohë.",
          de: "Bilde eine Klammer mit Modalverb und Zeit."
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
          sq: "Zgjidhni strukturën e saktë të kllapës.",
          de: "Wähle die korrekte Klammerstruktur."
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
          sq: "Plotësoni me kllapë fjalie (folje e ndashme).",
          de: "Vervollständige mit einer Klammer für trennbare Verben."
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
          sq: "Ndërtoni fjali të përmbysur me kllapë.",
          de: "Bilde einen Inversionssatz mit Klammer."
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
          sq: "Përputhni llojet e kllapave me shembuj.",
          de: "Ordne die Klammertypen den Beispielen zu."
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
    title: {
      en: 'Family Vocabulary (Familie)',
      pl: 'Słownictwo: Rodzina (Familie)',
      uk: 'Лексика: Сім\'я (Familie)',
      sq: 'Fjalor: Familja (Familie)',
      de: 'Wortschatz: Familie'
    },
    description: {
      en: "Family members: die Mutter, der Vater, die Eltern, der Bruder, die Schwester, die Geschwister, der Sohn, die Tochter, die Großeltern.",
      pl: "Członkowie rodziny: die Mutter, der Vater, die Eltern, der Bruder, die Schwester, die Geschwister, der Sohn, die Tochter, die Großeltern.",
      uk: "Члени сім'ї: die Mutter, der Vater, die Eltern, der Bruder, die Schwester, die Geschwister, der Sohn, die Tochter, die Großeltern.",
      sq: "Anëtarët e familjes: die Mutter, der Vater, die Eltern, der Bruder, die Schwester, die Geschwister, der Sohn, die Tochter, die Großeltern.",
      de: "Familienmitglieder: die Mutter, der Vater, die Eltern, der Bruder, die Schwester, die Geschwister, der Sohn, die Tochter, die Großeltern."
    },
    exercises: [
      {
        id: 'm1-fam-1',
        type: 'matching',
        question: {
          en: "Match family terms to their English meanings.",
          pl: "Dopasuj terminy rodzinne do ich angielskich znaczeń.",
          uk: "Зіставте родинні терміни з їхніми англійськими значеннями.",
          sq: "Përputhni termat familjarë me kuptimet e tyre në anglisht.",
          de: "Ordne die Familienbegriffe ihren englischen Bedeutungen zu."
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
          sq: "Plotësoni përshkrimin e familjes.",
          de: "Vervollständige die Familienbeschreibung."
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
          sq: "Si i quani prindërit e prindërve tuaj?",
          de: "Wie nennt man die Eltern seiner Eltern?"
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
          sq: "Ndërtoni fjali për familjen.",
          de: "Bilde einen Satz über die Familie."
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
          sq: "Plotësoni me termin familjar.",
          de: "Vervollständige mit dem Familienbegriff."
        },
        context: "Der ______ meiner Eltern bin ich.",
        correctAnswer: "Sohn",
      },
      {
        id: 'm1-fam-6',
        type: 'matching',
        question: {
          en: "Match family members to their relationships.",
          pl: "Dopasuj członków rodziny do ich relacji.",
          uk: "Зіставте членів родини з їхніми стосунками.",
          sq: "Përputhni anëtarët e familjes me marrëdhëniet e tyre.",
          de: "Ordne Familienmitglieder ihren Beziehungen zu."
        },
        context: ["der Onkel", "die Tante", "der Cousin", "die Nichte"],
        options: ["aunt", "niece", "uncle", "male cousin"],
        correctAnswer: ["uncle", "aunt", "male cousin", "niece"],
      },
      {
        id: 'm1-fam-7',
        type: 'multiple-choice',
        question: {
          en: "Choose the correct term for 'daughter'.",
          pl: "Wybierz poprawny termin na 'córka'.",
          uk: "Виберіть правильний термін для 'дочка'.",
          sq: "Zgjidhni termin e saktë për 'vajzë'.",
          de: "Wähle den korrekten Begriff für 'Tochter'."
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
          sq: "Ndërtoni fjali për gjyshërit.",
          de: "Bilde einen Satz über Großeltern."
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
          sq: "Plotësoni përshkrimin e pemës familjare.",
          de: "Vervollständige die Beschreibung des Stammbaums."
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
          sq: "Përputhni termat familjarë me format e shumësit.",
          de: "Ordne die Familienbegriffe den Pluralformen zu."
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
    title: {
      en: 'Professions (Berufe)',
      pl: 'Zawody (Berufe)',
      uk: 'Професії (Berufe)',
      sq: 'Profesionet (Berufe)',
      de: 'Wortschatz: Berufe'
    },
    description: {
      en: "Common professions: der Arzt/die Ärztin, der Ingenieur, die Krankenschwester, der Kellner, die Köchin, der Programmierer, der Bankkaufmann/die Bankkauffrau.",
      pl: "Popularne zawody: der Arzt/die Ärztin, der Ingenieur, die Krankenschwester, der Kellner, die Köchin, der Programmierer, der Bankkaufmann/die Bankkauffrau.",
      uk: "Поширені професії: der Arzt/die Ärztin, der Ingenieur, die Krankenschwester, der Kellner, die Köchin, der Programmierer, der Bankkaufmann/die Bankkauffrau.",
      sq: "Profesionet e zakonshme: der Arzt/die Ärztin, der Ingenieur, die Krankenschwester, der Kellner, die Köchin, der Programmierer, der Bankkaufmann/die Bankkauffrau.",
      de: "Häufige Berufe: der Arzt/die Ärztin, der Ingenieur, die Krankenschwester, der Kellner, die Köchin, der Programmierer, der Bankkaufmann/die Bankkauffrau."
    },
    exercises: [
      {
        id: 'm2-prof-1',
        type: 'matching',
        question: {
          en: "Match professions to their workplaces.",
          pl: "Dopasuj zawody do ich miejsc pracy.",
          uk: "Зіставте професії з їхніми місцями роботи.",
          sq: "Përputhni profesionet me vendet e tyre të punës.",
          de: "Ordne die Berufe ihren Arbeitsplätzen zu."
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
          sq: "Plotësoni profesionin me nyje.",
          de: "Vervollständige den Beruf mit Artikel."
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
          sq: "Zgjidhni formën femërore të 'der Bankkaufmann'.",
          de: "Wähle die weibliche Form von 'der Bankkaufmann'."
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
          sq: "Ndërtoni fjali për profesionin.",
          de: "Bilde einen Satz über einen Beruf."
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
          sq: "Pyetni për profesionin.",
          de: "Frage nach dem Beruf."
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
          sq: "Përputhni profesionet me mjetet/pajisjet e tyre.",
          de: "Ordne Berufe ihren Werkzeugen/Ausrüstungen zu."
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
          sq: "Zgjidhni profesionin që punohet në spital.",
          de: "Wähle den Beruf, der im Krankenhaus arbeitet."
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
          sq: "Ndërtoni pyetje për profesionin.",
          de: "Bilde eine Frage zum Beruf."
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
          sq: "Plotësoni me formën mashkullore të profesionit.",
          de: "Vervollständige mit der männlichen Berufsform."
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
          sq: "Përputhni përshkrimet e punës me profesionet.",
          de: "Ordne die Tätigkeitsbeschreibungen den Berufen zu."
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
    title: {
      en: 'Daily Activities and Time (Alltag & Zeit)',
      pl: 'Czynności codzienne i czas (Alltag & Zeit)',
      uk: 'Щоденні справи та час (Alltag & Zeit)',
      sq: 'Aktivitetet e përditshme dhe koha (Alltag & Zeit)',
      de: 'Wortschatz: Alltag & Zeit'
    },
    description: {
      en: "Activities: arbeiten, lernen, schlafen, einkaufen, essen, trinken. Times: der Morgen, der Mittag, der Abend. Time expressions: heute, morgen, gestern, am Wochenende.",
      pl: "Czynności: arbeiten, lernen, schlafen, einkaufen, essen, trinken. Pory dnia: der Morgen, der Mittag, der Abend. Wyrażenia czasowe: heute, morgen, gestern, am Wochenende.",
      uk: "Дії: arbeiten, lernen, schlafen, einkaufen, essen, trinken. Час: der Morgen, der Mittag, der Abend. Вирази часу: heute, morgen, gestern, am Wochenende.",
      sq: "Aktivitetet: arbeiten, lernen, schlafen, einkaufen, essen, trinken. Kohët: der Morgen, der Mittag, der Abend. Shprehjet kohore: heute, morgen, gestern, am Wochenende.",
      de: "Aktivitäten: arbeiten, lernen, schlafen, einkaufen, essen, trinken. Tageszeiten: der Morgen, der Mittag, der Abend. Zeitausdrücke: heute, morgen, gestern, am Wochenende."
    },
    exercises: [
      {
        id: 'm3-daily-1',
        type: 'matching',
        question: {
          en: "Match activities to appropriate times.",
          pl: "Dopasuj czynności do odpowiednich pór dnia.",
          uk: "Зіставте дії з відповідним часом.",
          sq: "Përputhni aktivitetet me kohët e duhura.",
          de: "Ordne die Aktivitäten den passenden Tageszeiten zu."
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
          sq: "Plotësoni rutinën ditore.",
          de: "Vervollständige die tägliche Routine."
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
          sq: "Kur zakonisht shkoni për pazar?",
          de: "Wann gehst du typischerweise einkaufen?"
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
          sq: "Ndërtoni fjali për fundjavën.",
          de: "Bilde einen Satz über das Wochenende."
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
          sq: "Plotësoni shprehjen kohore.",
          de: "Vervollständige den Zeitausdruck."
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
          sq: "Përputhni periudhat kohore me aktivitetet.",
          de: "Ordne Tageszeiten Aktivitäten zu."
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
          sq: "Zgjidhni shprehjen e saktë kohore.",
          de: "Wähle den korrekten Zeitausdruck."
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
          sq: "Ndërtoni fjali për rutinën javore.",
          de: "Bilde einen Satz über eine wöchentliche Routine."
        },
        context: ["Jeden", "Donnerstag", "gehe", "ich", "zum Sport"],
        correctAnswer: "Jeden Donnerstag gehe ich zum Sport",
      },
      {
        id: 'm3-daily-9',
        type: 'fill-in-the-blank',
        question: {
          en: "Complete with frequency adverb. (always)",
          pl: "Uzupełnij przysłówkiem częstotliwości. (zawsze)",
          uk: "Доповніть прислівником частоти. (завжди)",
          sq: "Plotësoni me ndajfoljen e shpeshtësisë. (gjithmonë)",
          de: "Vervollständige mit dem Häufigkeitsadverb. (immer)"
        },
        context: "Ich trinke ______ Kaffee zum Frühstück.",
        correctAnswer: "immer",
      }
    ]
  },
  {
    id: 'telling-time',
    moduleId: 3,
    title: {
      en: 'Telling Time (Uhrzeit)',
      pl: 'Określanie czasu (Uhrzeit)',
      uk: 'Визначення часу (Uhrzeit)',
      sq: 'Tregimi i orës (Uhrzeit)',
      de: 'Uhrzeit'
    },
    description: {
      en: "Official time uses the 24-hour clock ('Es ist 14:30 Uhr' → vierzehn Uhr dreißig). Unofficial/colloquial time uses a 12-hour clock with prepositions: nach (after), vor (before), Viertel (quarter), halb (half). Note: 'halb drei' means 2:30, not 3:30!",
      pl: "Oficjalny czas używa zegara 24-godzinnego ('Es ist 14:30 Uhr' → vierzehn Uhr dreißig). Nieoficjalny/potoczny czas używa zegara 12-godzinnego z przyimkami: nach (po), vor (przed), Viertel (kwadrans), halb (pół). Uwaga: 'halb drei' oznacza 2:30, a nie 3:30!",
      uk: "Офіційний час використовує 24-годинний формат ('Es ist 14:30 Uhr' → vierzehn Uhr dreißig). Неофіційний/розмовний час використовує 12-годинний формат з прийменниками: nach (після), vor (до), Viertel (чверть), halb (пів). Увага: 'halb drei' означає 2:30, а не 3:30!",
      sq: "Koha zyrtare përdor orën 24-orëshe ('Es ist 14:30 Uhr' → vierzehn Uhr dreißig). Koha jozyrtare/bisedore përdor një orë 12-orëshe me parafjalë: nach (pas), vor (para), Viertel (çerek), halb (gjysmë). Shënim: 'halb drei' do të thotë 2:30, jo 3:30!",
      de: "Die offizielle Zeit verwendet die 24-Stunden-Uhr ('Es ist 14:30 Uhr' → vierzehn Uhr dreißig). Die inoffizielle/umgangssprachliche Zeit verwendet eine 12-Stunden-Uhr mit Präpositionen: nach, vor, Viertel, halb. Achtung: 'halb drei' bedeutet 2:30, nicht 3:30!"
    },
    exercises: [
      {
        id: 'm3-time-1',
        type: 'matching',
        question: {
          en: "Match official times to unofficial times.",
          pl: "Dopasuj oficjalne godziny do nieoficjalnych.",
          uk: "Зіставте офіційний час з неофіційним.",
          sq: "Përputhni orët zyrtare me ato jozyrtare.",
          de: "Ordne die offiziellen Uhrzeiten den inoffiziellen zu."
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
          sq: "Plotësoni me 'nach' ose 'vor'.",
          de: "Vervollständige mit 'nach' oder 'vor'."
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
          sq: "Plotësoni me 'nach' ose 'vor'.",
          de: "Vervollständige mit 'nach' oder 'vor'."
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
          sq: "Si thua 5:30 (jozyrtarisht)?",
          de: "Wie sagt man 5:30 (inoffiziell)?"
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
          sq: "Pyetni për orën.",
          de: "Frage nach der Uhrzeit."
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
          sq: "Shkruani orën zyrtarisht.",
          de: "Schreibe die Uhrzeit offiziell."
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
          sq: "Sa është ora 2:45 jozyrtarisht?",
          de: "Was ist 2:45 inoffiziell?"
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
          sq: "Përgjigjjuni pyetjes me parafjalën e saktë.",
          de: "Beantworte die Frage mit der richtigen Präposition."
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
          sq: "Shkruani orën jozyrtare.",
          de: "Schreibe die inoffizielle Uhrzeit."
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
          sq: "Përputhni orën zyrtare me frazën jozyrtare.",
          de: "Ordne die offizielle Uhrzeit der inoffiziellen Phrase zu."
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
          sq: "Ndërtoni një fjali për një takim.",
          de: "Bilde einen Satz über einen Termin."
        },
        context: ["Der", "Termin", "ist", "um", "Viertel", "vor", "zehn"],
        correctAnswer: "Der Termin ist um Viertel vor zehn",
      },
      {
        id: 'm3-time-12',
        type: 'multiple-choice',
        question: {
          en: "When do we use the word 'Uhr' in colloquial speech?",
          pl: "Kiedy używamy słowa 'Uhr' w mowie potocznej?",
          uk: "Коли ми використовуємо слово 'Uhr' у розмовній мові?",
          sq: "Kur e përdorim fjalën 'Uhr' në të folurën bisedore?",
          de: "Wann verwenden wir das Wort 'Uhr' in der Umgangssprache?"
        },
        context: "Select the sentence where 'Uhr' is used correctly.",
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
          sq: "Plotësoni fjalinë për kohëzgjatjen.",
          de: "Vervollständige den Satz über eine Dauer."
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
          sq: "Plotësoni frazën 'pak pas'.",
          de: "Vervollständige die Phrase für 'kurz nach'."
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
          sq: "Përputhni pyetjen me përgjigjen më të mirë.",
          de: "Ordne die Frage der besten Antwort zu."
        },
        context: ["Wie spät ist es?", "Wann kommst du?", "Wie lange dauert der Film?", "Um wie viel Uhr treffen wir uns?"],
        options: ["Ungefähr zwei Stunden.", "Punkt 19 Uhr.", "Es ist halb drei.", "Gegen Mittag."],
        correctAnswer: ["Es ist halb drei.", "Gegen Mittag.", "Ungefähr zwei Stunden.", "Punkt 19 Uhr."],
      }
    ]
  },
];