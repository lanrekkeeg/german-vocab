import { GrammarTopic } from '../../../types';

export const a1_2_Grammar: GrammarTopic[] = [
  // ===== VERBEN (VERBS) =====
  {
    "id": "modal-verbs-advice-obligation",
    "moduleId": 8,
    "title": {
      "en": "Modal Verbs: sollen, müssen, können",
      "pl": "Czasowniki modalne: sollen, müssen, können",
      "uk": "Модальні дієслова: sollen, müssen, können",
      "sq": "Foljet modale: sollen, müssen, können",
      "de": "Modalverben: sollen, müssen, können"
    },
    "description": {
      "en": "Using 'sollen' for advice, 'müssen' for obligation, and 'können' for ability in health contexts.",
      "pl": "Używanie 'sollen' do rad, 'müssen' do obowiązków i 'können' do umiejętności w kontekście zdrowia.",
      "uk": "Використання 'sollen' для порад, 'müssen' для зобов'язань та 'können' для можливостей у контексті здоров'я.",
      "sq": "Përdorimi i 'sollen' për këshilla, 'müssen' për detyrime dhe 'können' për aftësi në kontekste shëndetësore.",
      "de": "Verwendung von 'sollen' für Ratschläge, 'müssen' für Verpflichtungen und 'können' für Fähigkeiten im Gesundheitskontext."
    },
    "exercises": [
      {
        "id": "m8-mod-1",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct form of 'sollen' (ich).",
          "de": "Ergänze die richtige Form von 'sollen' (ich).",
          "pl": "Uzupełnij poprawną formę 'sollen' (ich).",
          "uk": "Заповніть правильну форму 'sollen' (ich).",
          "sq": "Plotëso formën e saktë të 'sollen' (ich)."
        },
        "context": "Die Ärztin sagt, ich ______ viel Tee trinken.",
        "correctAnswer": "soll",
        "hint": "First person singular for advice"
      },
      {
        "id": "m8-mod-2",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct form of 'sollen' (du).",
          "de": "Ergänze die richtige Form von 'sollen' (du).",
          "pl": "Uzupełnij poprawną formę 'sollen' (du).",
          "uk": "Заповніть правильну форму 'sollen' (du).",
          "sq": "Plotëso formën e saktë të 'sollen' (du)."
        },
        "context": "Du ______ Tabletten nehmen.",
        "correctAnswer": "sollst",
        "hint": "Second person singular"
      },
      {
        "id": "m8-mod-3",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct form of 'müssen' (Sie).",
          "de": "Ergänze die richtige Form von 'müssen' (Sie).",
          "pl": "Uzupełnij poprawną formę 'müssen' (Sie).",
          "uk": "Заповніть правильну форму 'müssen' (Sie).",
          "sq": "Plotëso formën e saktë të 'müssen' (Sie)."
        },
        "context": "Sie ______ sofort ins Krankenhaus.",
        "correctAnswer": "müssen"
      },
      {
        "id": "m8-mod-4",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct form of 'können' (er).",
          "de": "Ergänze die richtige Form von 'können' (er).",
          "pl": "Uzupełnij poprawną formę 'können' (er).",
          "uk": "Заповніть правильну форму 'können' (er).",
          "sq": "Plotëso formën e saktë të 'können' (er)."
        },
        "context": "Er ______ wieder nach Hause gehen.",
        "correctAnswer": "kann"
      },
      {
        "id": "m8-mod-5",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct form of 'müssen' (du).",
          "de": "Wähle die richtige Form von 'müssen' (du).",
          "pl": "Wybierz poprawną formę 'müssen' (du).",
          "uk": "Виберіть правильну форму 'müssen' (du).",
          "sq": "Zgjidh formën e saktë të 'müssen' (du)."
        },
        "context": "Du ______ eine Tablette nehmen.",
        "options": ["muss", "musst", "müssen"],
        "correctAnswer": "musst"
      },
      {
        "id": "m8-mod-6",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct form of 'sollen' (Sie - formal).",
          "de": "Wähle die richtige Form von 'sollen' (Sie - formell).",
          "pl": "Wybierz poprawną formę 'sollen' (Sie - formalne).",
          "uk": "Виберіть правильну форму 'sollen' (Sie - формально).",
          "sq": "Zgjidh formën e saktë të 'sollen' (Sie - formal)."
        },
        "context": "Sie ______ nicht schwer tragen.",
        "options": ["soll", "sollst", "sollen"],
        "correctAnswer": "sollen"
      },
      {
        "id": "m8-mod-7",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct form of 'können' (ich).",
          "de": "Wähle die richtige Form von 'können' (ich).",
          "pl": "Wybierz poprawną formę 'können' (ich).",
          "uk": "Виберіть правильну форму 'können' (ich).",
          "sq": "Zgjidh formën e saktë të 'können' (ich)."
        },
        "context": "Ich ______ heute nicht arbeiten.",
        "options": ["kann", "kannst", "können"],
        "correctAnswer": "kann"
      },
      {
        "id": "m8-mod-8",
        "type": "sentence-scramble",
        "question": {
          "en": "Put the words in the correct order.",
          "de": "Bringe die Wörter in die richtige Reihenfolge.",
          "pl": "Ułóż słowa w poprawnej kolejności.",
          "uk": "Розставте слова у правильному порядку.",
          "sq": "Vendos fjalët në rendin e saktë."
        },
        "context": ["ich", "Tabletten", "soll", "nehmen"],
        "correctAnswer": "Ich soll Tabletten nehmen"
      },
      {
        "id": "m8-mod-9",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the formal version of this sentence.",
          "de": "Wähle die höfliche Version dieses Satzes.",
          "pl": "Wybierz formalną wersję tego zdania.",
          "uk": "Виберіть формальну версію цього речення.",
          "sq": "Zgjidh versionin formal të kësaj fjalie."
        },
        "context": "Du sollst Tabletten nehmen.",
        "options": ["Sie sollen Tabletten nehmen.", "Sie sollst Tabletten nehmen.", "Sie sollt Tabletten nehmen."],
        "correctAnswer": "Sie sollen Tabletten nehmen."
      },
      {
        "id": "m8-mod-10",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct form of 'sollen' (wir).",
          "de": "Ergänze die richtige Form von 'sollen' (wir).",
          "pl": "Uzupełnij poprawną formę 'sollen' (wir).",
          "uk": "Заповніть правильну форму 'sollen' (wir).",
          "sq": "Plotëso formën e saktë të 'sollen' (wir)."
        },
        "context": "Wir ______ mehr Sport machen.",
        "correctAnswer": "sollen"
      }
    ]
  },
  {
    "id": "personal-pronouns-accusative",
    "moduleId": 8,
    "title": {
      "en": "Personal Pronouns: Accusative",
      "pl": "Zaimki osobowe: Biernik",
      "uk": "Особові займенники: Знахідний відмінок",
      "sq": "Përemrat vetorë: Kallëzorja",
      "de": "Personalpronomen: Akkusativ"
    },
    "description": {
      "en": "Using personal pronouns (ihn, sie, es...) as direct objects, for example: 'Die Ärztin untersucht ihn.'",
      "pl": "Używanie zaimków osobowych (ihn, sie, es...) jako dopełnienia bliższego, na przykład: 'Die Ärztin untersucht ihn.'",
      "uk": "Використання особових займенників (ihn, sie, es...) як прямих додатків, наприклад: 'Die Ärztin untersucht ihn.'",
      "sq": "Përdorimi i përemrave vetorë (ihn, sie, es...) si kundrinorë të drejtë, për shembull: 'Die Ärztin untersucht ihn.'",
      "de": "Verwendung von Personalpronomen (ihn, sie, es...) als direkte Objekte, zum Beispiel: 'Die Ärztin untersucht ihn.'"
    },
    "exercises": [
      {
        "id": "m8-acc-1",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct accusative pronoun for 'him'.",
          "de": "Wähle das richtige Akkusativpronomen für 'ihn'.",
          "pl": "Wybierz poprawny zaimek w bierniku dla 'jego'.",
          "uk": "Виберіть правильний займенник у знахідному відмінку для 'його'.",
          "sq": "Zgjidh përemrin e saktë në rasën kallëzore për 'atë' (mashkullore)."
        },
        "context": "Die Ärzte untersuchen ______.",
        "options": ["er", "ihn", "ihm"],
        "correctAnswer": "ihn"
      },
      {
        "id": "m8-acc-2",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct accusative pronoun for 'it' (das Medikament).",
          "de": "Wähle das richtige Akkusativpronomen für 'es' (das Medikament).",
          "pl": "Wybierz poprawny zaimek w bierniku dla 'to' (das Medikament).",
          "uk": "Виберіть правильний займенник у знахідному відмінку для 'воно' (das Medikament).",
          "sq": "Zgjidh përemrin e saktë në rasën kallëzore për 'atë' (asnjanëse, das Medikament)."
        },
        "context": "Brauchst du ______?",
        "options": ["es", "sie", "ihn"],
        "correctAnswer": "es"
      },
      {
        "id": "m8-acc-3",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct accusative pronoun for 'her'.",
          "de": "Wähle das richtige Akkusativpronomen für 'sie'.",
          "pl": "Wybierz poprawny zaimek w bierniku dla 'ją'.",
          "uk": "Виберіть правильний займенник у знахідному відмінку для 'її'.",
          "sq": "Zgjidh përemrin e saktë në rasën kallëzore për 'atë' (femërore)."
        },
        "context": "Ich rufe ______ an.",
        "options": ["sie", "ihr", "ihnen"],
        "correctAnswer": "sie"
      },
      {
        "id": "m8-acc-4",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct accusative pronoun for 'me'.",
          "de": "Ergänze das richtige Akkusativpronomen für 'mich'.",
          "pl": "Uzupełnij poprawny zaimek w bierniku dla 'mnie'.",
          "uk": "Заповніть правильний займенник у знахідному відмінку для 'мене'.",
          "sq": "Plotëso përemrin e saktë në rasën kallëzore për 'mua'."
        },
        "context": "Der Arzt untersucht ______.",
        "correctAnswer": "mich"
      },
      {
        "id": "m8-acc-5",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct accusative pronoun for 'you' (informal).",
          "de": "Ergänze das richtige Akkusativpronomen für 'dich'.",
          "pl": "Uzupełnij poprawny zaimek w bierniku dla 'ciebie'.",
          "uk": "Заповніть правильний займенник у знахідному відмінку для 'тебе'.",
          "sq": "Plotëso përemrin e saktë në rasën kallëzore për 'ty'."
        },
        "context": "Ich sehe ______ morgen.",
        "correctAnswer": "dich"
      },
      {
        "id": "m8-acc-6",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct accusative pronoun for 'us'.",
          "de": "Wähle das richtige Akkusativpronomen für 'uns'.",
          "pl": "Wybierz poprawny zaimek w bierniku dla 'nas'.",
          "uk": "Виберіть правильний займенник у знахідному відмінку для 'нас'.",
          "sq": "Zgjidh përemrin e saktë në rasën kallëzore për 'ne'."
        },
        "context": "Die Ärztin behandelt ______.",
        "options": ["wir", "uns", "unser"],
        "correctAnswer": "uns"
      },
      {
        "id": "m8-acc-7",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct accusative pronoun for 'das Tablet'.",
          "de": "Ergänze das richtige Akkusativpronomen für 'das Tablet'.",
          "pl": "Uzupełnij poprawny zaimek w bierniku dla 'das Tablet'.",
          "uk": "Заповніть правильний займенник у знахідному відмінку для 'das Tablet'.",
          "sq": "Plotëso përemrin e saktë në rasën kallëzore për 'das Tablet'."
        },
        "context": "Soll ich ______ mitbringen?",
        "correctAnswer": "es"
      },
      {
        "id": "m8-acc-8",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct accusative pronoun for 'them'.",
          "de": "Wähle das richtige Akkusativpronomen für 'sie' (Plural).",
          "pl": "Wybierz poprawny zaimek w bierniku dla 'ich'.",
          "uk": "Виберіть правильний займенник у знахідному відмінку для 'їх'.",
          "sq": "Zgjidh përemrin e saktë në rasën kallëzore për 'ata/ato'."
        },
        "context": "Der Arzt sieht ______ morgen.",
        "options": ["sie", "ihnen", "ihr"],
        "correctAnswer": "sie"
      },
      {
        "id": "m8-acc-9",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct accusative pronoun for 'die Tabletten'.",
          "de": "Ergänze das richtige Akkusativpronomen für 'die Tabletten'.",
          "pl": "Uzupełnij poprawny zaimek w bierniku dla 'die Tabletten'.",
          "uk": "Заповніть правильний займенник у знахідному відмінку для 'die Tabletten'.",
          "sq": "Plotëso përemrin e saktë në rasën kallëzore për 'die Tabletten'."
        },
        "context": "Ich nehme ______ jeden Tag.",
        "correctAnswer": "sie"
      },
      {
        "id": "m8-acc-10",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct accusative pronoun for 'you' (formal).",
          "de": "Wähle das richtige Akkusativpronomen für 'Sie'.",
          "pl": "Wybierz poprawny zaimek w bierniku dla 'Pana/Panią'.",
          "uk": "Виберіть правильний займенник у знахідному відмінку для 'Вас'.",
          "sq": "Zgjidh përemrin e saktë në rasën kallëzore për 'Ju' (formal)."
        },
        "context": "Ich rufe ______ heute Abend an.",
        "options": ["Sie", "Ihnen", "Ihr"],
        "correctAnswer": "Sie"
      }
    ]
  },
  {
    "id": "body-parts-vocabulary",
    "moduleId": 8,
    "title": {
      "en": "Body Parts & Pain Expressions",
      "pl": "Części ciała i wyrażenia bólu",
      "uk": "Частини тіла та вираження болю",
      "sq": "Pjesët e trupit dhe shprehjet e dhimbjes",
      "de": "Körperteile & Schmerzausdrücke"
    },
    "description": {
      "en": "Learn body parts with correct articles and how to express pain using 'weh tun' and 'Schmerzen haben'.",
      "pl": "Naucz się części ciała z poprawnymi rodzajnikami i jak wyrażać ból za pomocą 'weh tun' i 'Schmerzen haben'.",
      "uk": "Вивчіть частини тіла з правильними артиклями та як виражати біль за допомогою 'weh tun' та 'Schmerzen haben'.",
      "sq": "Mësoni pjesët e trupit me nyjet e sakta dhe si të shprehni dhimbjen duke përdorur 'weh tun' dhe 'Schmerzen haben'.",
      "de": "Lerne Körperteile mit richtigen Artikeln und wie man Schmerzen mit 'weh tun' und 'Schmerzen haben' ausdrückt."
    },
    "exercises": [
      {
        "id": "m8-body-1",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct article for 'Kopf'.",
          "de": "Wähle den richtigen Artikel für 'Kopf'.",
          "pl": "Wybierz poprawny rodzajnik dla 'Kopf'.",
          "uk": "Виберіть правильний артикль для 'Kopf'.",
          "sq": "Zgjidh nyjen e saktë për 'Kopf'."
        },
        "context": "______ Kopf tut weh.",
        "options": ["Der", "Die", "Das"],
        "correctAnswer": "Der"
      },
      {
        "id": "m8-body-2",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct article for 'Hand'.",
          "de": "Wähle den richtigen Artikel für 'Hand'.",
          "pl": "Wybierz poprawny rodzajnik dla 'Hand'.",
          "uk": "Виберіть правильний артикль для 'Hand'.",
          "sq": "Zgjidh nyjen e saktë për 'Hand'."
        },
        "context": "______ Hand ist verletzt.",
        "options": ["der", "die", "das"],
        "correctAnswer": "die"
      },
      {
        "id": "m8-body-3",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the sentence about pain using 'weh tun'.",
          "de": "Vervollständige den Satz über Schmerzen mit 'weh tun'.",
          "pl": "Uzupełnij zdanie o bólu używając 'weh tun'.",
          "uk": "Доповніть речення про біль, використовуючи 'weh tun'.",
          "sq": "Plotëso fjalinë për dhimbjen duke përdorur 'weh tun'."
        },
        "context": "Mein Rücken ______ ______.",
        "correctAnswer": ["tut", "weh"]
      },
      {
        "id": "m8-body-4",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the sentence about pain using 'haben'.",
          "de": "Vervollständige den Satz über Schmerzen mit 'haben'.",
          "pl": "Uzupełnij zdanie o bólu używając 'haben'.",
          "uk": "Доповніть речення про біль, використовуючи 'haben'.",
          "sq": "Plotëso fjalinë për dhimbjen duke përdorur 'haben'."
        },
        "context": "Ich ______ Kopfschmerzen.",
        "correctAnswer": "habe"
      },
      {
        "id": "m8-body-5",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct article for 'Auge'.",
          "de": "Wähle den richtigen Artikel für 'Auge'.",
          "pl": "Wybierz poprawny rodzajnik dla 'Auge'.",
          "uk": "Виберіть правильний артикль для 'Auge'.",
          "sq": "Zgjidh nyjen e saktë për 'Auge'."
        },
        "context": "______ Auge schmerzt.",
        "options": ["der", "die", "das"],
        "correctAnswer": "das"
      },
      {
        "id": "m8-body-6",
        "type": "sentence-scramble",
        "question": {
          "en": "Put the words in the correct order.",
          "de": "Bringe die Wörter in die richtige Reihenfolge.",
          "pl": "Ułóż słowa w poprawnej kolejności.",
          "uk": "Розставте слова у правильному порядку.",
          "sq": "Vendos fjalët në rendin e saktë."
        },
        "context": ["mein", "weh", "Rücken", "tut"],
        "correctAnswer": "Mein Rücken tut weh"
      },
      {
        "id": "m8-body-7",
        "type": "matching",
        "question": {
          "en": "Match the body part to the corresponding type of pain.",
          "de": "Ordne den Körperteil der entsprechenden Schmerzart zu.",
          "pl": "Dopasuj część ciała do odpowiedniego rodzaju bólu.",
          "uk": "Зіставте частину тіла з відповідним типом болю.",
          "sq": "Përputhni pjesën e trupit me llojin përkatës të dhimbjes."
        },
        "context": ["der Kopf", "der Bauch", "der Rücken", "der Hals"],
        "options": ["Rückenschmerzen", "Kopfschmerzen", "Halsschmerzen", "Bauchschmerzen"],
        "correctAnswer": ["Kopfschmerzen", "Bauchschmerzen", "Rückenschmerzen", "Halsschmerzen"]
      },
      {
        "id": "m8-body-8",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct article for 'Bein'.",
          "de": "Wähle den richtigen Artikel für 'Bein'.",
          "pl": "Wybierz poprawny rodzajnik dla 'Bein'.",
          "uk": "Виберіть правильний артикль для 'Bein'.",
          "sq": "Zgjidh nyjen e saktë për 'Bein'."
        },
        "context": "______ Bein ist gebrochen.",
        "options": ["der", "die", "das"],
        "correctAnswer": "das"
      },
      {
        "id": "m8-body-9",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the sentence about pain using 'haben'.",
          "de": "Vervollständige den Satz über Schmerzen mit 'haben'.",
          "pl": "Uzupełnij zdanie o bólu używając 'haben'.",
          "uk": "Доповніть речення про біль, використовуючи 'haben'.",
          "sq": "Plotëso fjalinë për dhimbjen duke përdorur 'haben'."
        },
        "context": "Sie ______ Bauchschmerzen.",
        "correctAnswer": "hat"
      },
      {
        "id": "m8-body-10",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the negative sentence.",
          "de": "Vervollständige den verneinten Satz.",
          "pl": "Uzupełnij zdanie przeczące.",
          "uk": "Доповніть заперечне речення.",
          "sq": "Plotëso fjalinë mohore."
        },
        "context": "Mir geht es ______ gut.",
        "correctAnswer": "nicht"
      }
    ]
  },
  {
    "id": "prepositions-medical-contexts",
    "moduleId": 8,
    "title": {
      "en": "Prepositions: Medical Contexts",
      "pl": "Przyimki w kontekstach medycznych",
      "uk": "Прийменники у медичних контекстах",
      "sq": "Parafjalët në kontekste mjekësore",
      "de": "Präpositionen: Medizinische Kontexte"
    },
    "description": {
      "en": "Using local prepositions for direction (Wohin? - zum), location (Wo? - beim), and origin (Woher? - vom) in medical contexts.",
      "pl": "Używanie przyimków miejsca dla kierunku (Wohin? - zum), lokalizacji (Wo? - beim) i pochodzenia (Woher? - vom) w kontekstach medycznych.",
      "uk": "Використання місцевих прийменників для напрямку (Wohin? - zum), місця (Wo? - beim) та походження (Woher? - vom) у медичних контекстах.",
      "sq": "Përdorimi i parafjalëve të vendit për drejtim (Wohin? - zum), vendndodhje (Wo? - beim) dhe origjinë (Woher? - vom) në kontekste mjekësore.",
      "de": "Verwendung von lokalen Präpositionen für Richtung (Wohin? - zum), Ort (Wo? - beim) und Herkunft (Woher? - vom) in medizinischen Kontexten."
    },
    "exercises": [
      {
        "id": "m8-prep-1",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition for direction (Wohin?).",
          "de": "Wähle die richtige Präposition für die Richtung (Wohin?).",
          "pl": "Wybierz poprawny przyimek dla kierunku (Wohin?).",
          "uk": "Виберіть правильний прийменник для напрямку (Wohin?).",
          "sq": "Zgjidh parafjalën e saktë për drejtim (Wohin?)."
        },
        "context": "Ich gehe ______ Arzt.",
        "options": ["zum", "beim", "vom"],
        "correctAnswer": "zum"
      },
      {
        "id": "m8-prep-2",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition for location (Wo?).",
          "de": "Wähle die richtige Präposition für den Ort (Wo?).",
          "pl": "Wybierz poprawny przyimek dla lokalizacji (Wo?).",
          "uk": "Виберіть правильний прийменник для місця (Wo?).",
          "sq": "Zgjidh parafjalën e saktë për vendndodhje (Wo?)."
        },
        "context": "Ich bin ______ Arzt.",
        "options": ["zum", "beim", "vom"],
        "correctAnswer": "beim"
      },
      {
        "id": "m8-prep-3",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition for origin (Woher?).",
          "de": "Wähle die richtige Präposition für die Herkunft (Woher?).",
          "pl": "Wybierz poprawny przyimek dla pochodzenia (Woher?).",
          "uk": "Виберіть правильний прийменник для походження (Woher?).",
          "sq": "Zgjidh parafjalën e saktë për origjinë (Woher?)."
        },
        "context": "Ich komme ______ Arzt.",
        "options": ["zum", "beim", "vom"],
        "correctAnswer": "vom"
      },
      {
        "id": "m8-prep-4",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition.",
          "de": "Wähle die richtige Präposition.",
          "pl": "Wybierz poprawny przyimek.",
          "uk": "Виберіть правильний прийменник.",
          "sq": "Zgjidh parafjalën e saktë."
        },
        "context": "Wir fahren ______ Krankenhaus.",
        "options": ["ins", "im", "aus dem"],
        "correctAnswer": "ins"
      },
      {
        "id": "m8-prep-5",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition.",
          "de": "Wähle die richtige Präposition.",
          "pl": "Wybierz poprawny przyimek.",
          "uk": "Виберіть правильний прийменник.",
          "sq": "Zgjidh parafjalën e saktë."
        },
        "context": "Er liegt ______ Krankenhaus.",
        "options": ["ins", "im", "aus dem"],
        "correctAnswer": "im"
      },
      {
        "id": "m8-prep-6",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct preposition for direction.",
          "de": "Ergänze die richtige Präposition für die Richtung.",
          "pl": "Uzupełnij poprawny przyimek dla kierunku.",
          "uk": "Заповніть правильний прийменник для напрямку.",
          "sq": "Plotëso parafjalën e saktë për drejtim."
        },
        "context": "Ich gehe ______ Apotheke.",
        "correctAnswer": "zur"
      },
      {
        "id": "m8-prep-7",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct preposition for location.",
          "de": "Ergänze die richtige Präposition für den Ort.",
          "pl": "Uzupełnij poprawny przyimek dla lokalizacji.",
          "uk": "Заповніть правильний прийменник для місця.",
          "sq": "Plotëso parafjalën e saktë për vendndodhje."
        },
        "context": "Ich bin ______ der Apotheke.",
        "correctAnswer": "in"
      },
      {
        "id": "m8-prep-8",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition.",
          "de": "Wähle die richtige Präposition.",
          "pl": "Wybierz poprawny przyimek.",
          "uk": "Виберіть правильний прийменник.",
          "sq": "Zgjidh parafjalën e saktë."
        },
        "context": "Sie kommt ______ Krankenhaus zurück.",
        "options": ["ins", "im", "aus dem"],
        "correctAnswer": "aus dem"
      },
      {
        "id": "m8-prep-9",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct preposition.",
          "de": "Ergänze die richtige Präposition.",
          "pl": "Uzupełnij poprawny przyimek.",
          "uk": "Заповніть правильний прийменник.",
          "sq": "Plotëso parafjalën e saktë."
        },
        "context": "Der Termin ist ______ Zahnarzt.",
        "correctAnswer": "beim"
      },
      {
        "id": "m8-prep-10",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct preposition.",
          "de": "Wähle die richtige Präposition.",
          "pl": "Wybierz poprawny przyimek.",
          "uk": "Виберіть правильний прийменник.",
          "sq": "Zgjidh parafjalën e saktë."
        },
        "context": "Ich komme ______ Apotheke.",
        "options": ["zur", "in der", "von der"],
        "correctAnswer": "von der"
      }
    ]
  },
  {
    "id": "possessive-pronouns-health",
    "moduleId": 8,
    "title": {
      "en": "Possessive Pronouns in Health Contexts",
      "pl": "Zaimki dzierżawcze w kontekstach zdrowotnych",
      "uk": "Присвійні займенники у контекстах охорони здоров'я",
      "sq": "Përemrat pronorë në kontekste shëndetësore",
      "de": "Possessivpronomen in Gesundheitskontexten"
    },
    "description": {
      "en": "Using possessive pronouns (mein, dein, sein, ihr...) with health-related vocabulary and medical items.",
      "pl": "Używanie zaimków dzierżawczych (mein, dein, sein, ihr...) ze słownictwem związanym ze zdrowiem i przedmiotami medycznymi.",
      "uk": "Використання присвійних займенників (mein, dein, sein, ihr...) з лексикою, пов'язаною зі здоров'ям та медичними предметами.",
      "sq": "Përdorimi i përemrave pronorë (mein, dein, sein, ihr...) me fjalor të lidhur me shëndetin dhe artikuj mjekësorë.",
      "de": "Verwendung von Possessivpronomen (mein, dein, sein, ihr...) mit gesundheitsbezogenem Wortschatz und medizinischen Gegenständen."
    },
    "exercises": [
      {
        "id": "m8-poss-1",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct possessive pronoun for 'die Gesundheitskarte' (my).",
          "de": "Wähle das richtige Possessivpronomen für 'die Gesundheitskarte' (meine).",
          "pl": "Wybierz poprawny zaimek dzierżawczy dla 'die Gesundheitskarte' (moja).",
          "uk": "Виберіть правильний присвійний займенник для 'die Gesundheitskarte' (моя).",
          "sq": "Zgjidh përemrin pronor të saktë për 'die Gesundheitskarte' (ime)."
        },
        "context": "Das ist ______ Gesundheitskarte.",
        "options": ["mein", "meine", "meinen"],
        "correctAnswer": "meine"
      },
      {
        "id": "m8-poss-2",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct possessive pronoun for 'das Kind' (my).",
          "de": "Wähle das richtige Possessivpronomen für 'das Kind' (mein).",
          "pl": "Wybierz poprawny zaimek dzierżawczy dla 'das Kind' (moje).",
          "uk": "Виберіть правильний присвійний займенник для 'das Kind' (моє).",
          "sq": "Zgjidh përemrin pronor të saktë për 'das Kind' (imi)."
        },
        "context": "______ Kind ist krank.",
        "options": ["mein", "meine", "meinen"],
        "correctAnswer": "mein"
      },
      {
        "id": "m8-poss-3",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct possessive pronoun for 'der Termin' (your - informal).",
          "de": "Ergänze das richtige Possessivpronomen für 'der Termin' (dein).",
          "pl": "Uzupełnij poprawny zaimek dzierżawczy dla 'der Termin' (twój).",
          "uk": "Заповніть правильний присвійний займенник для 'der Termin' (твій).",
          "sq": "Plotëso përemrin pronor të saktë për 'der Termin' (yt)."
        },
        "context": "Wann ist ______ Termin?",
        "correctAnswer": "dein"
      },
      {
        "id": "m8-poss-4",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct possessive pronoun for 'die Tabletten' (his).",
          "de": "Wähle das richtige Possessivpronomen für 'die Tabletten' (seine).",
          "pl": "Wybierz poprawny zaimek dzierżawczy dla 'die Tabletten' (jego).",
          "uk": "Виберіть правильний присвійний займенник для 'die Tabletten' (його).",
          "sq": "Zgjidh përemrin pronor të saktë për 'die Tabletten' (e tij)."
        },
        "context": "______ Tabletten sind auf dem Tisch.",
        "options": ["sein", "seine", "seinen"],
        "correctAnswer": "seine"
      },
      {
        "id": "m8-poss-5",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct possessive pronoun for 'das Rezept' (her).",
          "de": "Ergänze das richtige Possessivpronomen für 'das Rezept' (ihr).",
          "pl": "Uzupełnij poprawny zaimek dzierżawczy dla 'das Rezept' (jej).",
          "uk": "Заповніть правильний присвійний займенник для 'das Rezept' (її).",
          "sq": "Plotëso përemrin pronor të saktë për 'das Rezept' (e saj)."
        },
        "context": "______ Rezept ist in der Apotheke.",
        "correctAnswer": "ihr"
      },
      {
        "id": "m8-poss-6",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct possessive pronoun for 'der Arzt' (our).",
          "de": "Wähle das richtige Possessivpronomen für 'der Arzt' (unser).",
          "pl": "Wybierz poprawny zaimek dzierżawczy dla 'der Arzt' (nasz).",
          "uk": "Виберіть правильний присвійний займенник для 'der Arzt' (наш).",
          "sq": "Zgjidh përemrin pronor të saktë për 'der Arzt' (ynë)."
        },
        "context": "______ Arzt ist sehr gut.",
        "options": ["unser", "unsere", "unseren"],
        "correctAnswer": "unser"
      },
      {
        "id": "m8-poss-7",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct possessive pronoun for 'die Praxis' (your - formal).",
          "de": "Ergänze das richtige Possessivpronomen für 'die Praxis' (Ihre).",
          "pl": "Uzupełnij poprawny zaimek dzierżawczy dla 'die Praxis' (Pana/Pani).",
          "uk": "Заповніть правильний присвійний займенник для 'die Praxis' (Ваша).",
          "sq": "Plotëso përemrin pronor të saktë për 'die Praxis' (juaja - formal)."
        },
        "context": "______ Praxis ist sehr modern.",
        "correctAnswer": "Ihre"
      },
      {
        "id": "m8-poss-8",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct possessive pronoun for 'die Krankenkasse' (their).",
          "de": "Wähle das richtige Possessivpronomen für 'die Krankenkasse' (ihre).",
          "pl": "Wybierz poprawny zaimek dzierżawczy dla 'die Krankenkasse' (ich).",
          "uk": "Виберіть правильний присвійний займенник для 'die Krankenkasse' (їхня).",
          "sq": "Zgjidh përemrin pronor të saktë për 'die Krankenkasse' (e tyre)."
        },
        "context": "______ Krankenkasse zahlt alles.",
        "options": ["ihr", "ihre", "ihren"],
        "correctAnswer": "ihre"
      },
      {
        "id": "m8-poss-9",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the correct possessive pronoun for 'der Rücken' (my).",
          "de": "Ergänze das richtige Possessivpronomen für 'der Rücken' (mein).",
          "pl": "Uzupełnij poprawny zaimek dzierżawczy dla 'der Rücken' (mój).",
          "uk": "Заповніть правильний присвійний займенник для 'der Rücken' (моя).",
          "sq": "Plotëso përemrin pronor të saktë për 'der Rücken' (imi)."
        },
        "context": "______ Rücken tut weh.",
        "correctAnswer": "mein"
      },
      {
        "id": "m8-poss-10",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct possessive pronoun for 'das Medikament' (your - informal, plural).",
          "de": "Wähle das richtige Possessivpronomen für 'das Medikament' (euer).",
          "pl": "Wybierz poprawny zaimek dzierżawczy dla 'das Medikament' (wasze).",
          "uk": "Виберіть правильний присвійний займенник для 'das Medikament' (ваш - неформально).",
          "sq": "Zgjidh përemrin pronor të saktë për 'das Medikament' (juaj - joformal)."
        },
        "context": "______ Medikament ist teuer.",
        "options": ["euer", "eure", "euren"],
        "correctAnswer": "euer"
      }
    ]
  },
  {
    "id": "health-communication-phrases",
    "moduleId": 8,
    "title": {
      "en": "Health Communication & Appointments",
      "pl": "Komunikacja zdrowotna i wizyty",
      "uk": "Медична комунікація та прийоми",
      "sq": "Komunikimi shëndetësor dhe takimet",
      "de": "Gesundheitskommunikation & Termine"
    },
    "description": {
      "en": "Essential phrases for making appointments, emergency situations, and formal health communication including sick notes.",
      "pl": "Podstawowe zwroty do umawiania wizyt, sytuacji awaryjnych i formalnej komunikacji zdrowotnej, w tym zwolnień lekarskich.",
      "uk": "Основні фрази для запису на прийом, надзвичайних ситуацій та формального медичного спілкування, включаючи лікарняні.",
      "sq": "Fraza thelbësore për caktimin e takimeve, situatat e urgjencës dhe komunikimin formal shëndetësor duke përfshirë justifikimet mjekësore.",
      "de": "Wesentliche Phrasen für Terminvereinbarungen, Notfälle und formelle Gesundheitskommunikation einschließlich Krankmeldungen."
    },
    "exercises": [
      {
        "id": "m8-comm-1",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the appointment dialogue.",
          "de": "Vervollständige den Terminausdialog.",
          "pl": "Uzupełnij dialog o umawianiu wizyty.",
          "uk": "Доповніть діалог про запис на прийом.",
          "sq": "Plotëso dialogun e takimit."
        },
        "context": "Wann ______ der Termin? - Am Montag ______ 9.00 Uhr.",
        "correctAnswer": ["ist", "um"]
      },
      {
        "id": "m8-comm-2",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Fill in the emergency number for Germany.",
          "de": "Ergänze die Notrufnummer für Deutschland.",
          "pl": "Uzupełnij numer alarmowy dla Niemiec.",
          "uk": "Заповніть номер екстрених служб для Німеччини.",
          "sq": "Plotëso numrin e urgjencës për Gjermaninë."
        },
        "context": "Die Notrufnummer ist ______.",
        "correctAnswer": "112",
        "hint": "Three digits, valid in all of the EU"
      },
      {
        "id": "m8-comm-3",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct formal greeting for an excuse note.",
          "de": "Wähle die richtige höfliche Anrede für eine Entschuldigung.",
          "pl": "Wybierz poprawne formalne powitanie do usprawiedliwienia.",
          "uk": "Виберіть правильне формальне привітання для виправдувальної записки.",
          "sq": "Zgjidh përshëndetjen formale të saktë për justifikimin."
        },
        "context": "Start of an excuse note to Mr. Müller:",
        "options": ["Sehr geehrter Herr Müller,", "Hallo Herr Müller,", "Lieber Herr Müller,"],
        "correctAnswer": "Sehr geehrter Herr Müller,"
      },
      {
        "id": "m8-comm-4",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the appointment dialogue.",
          "de": "Vervollständige den Terminausdialog.",
          "pl": "Uzupełnij dialog o umawianiu wizyty.",
          "uk": "Доповніть діалог про запис на прийом.",
          "sq": "Plotëso dialogun e takimit."
        },
        "context": "______ Sie am Dienstag Zeit? - Ja, das ______.",
        "correctAnswer": ["Haben", "geht"]
      },
      {
        "id": "m8-comm-5",
        "type": "multiple-choice",
        "question": {
          "en": "Choose the correct formal closing for an excuse note.",
          "de": "Wähle den richtigen höflichen Abschluss für eine Entschuldigung.",
          "pl": "Wybierz poprawne formalne zakończenie usprawiedliwienia.",
          "uk": "Виберіть правильне формальне закінчення для виправдувальної записки.",
          "sq": "Zgjidh mbylljen formale të saktë për justifikimin."
        },
        "context": "End of an excuse note:",
        "options": ["Mit freundlichen Grüßen", "Bis bald", "Tschüss"],
        "correctAnswer": "Mit freundlichen Grüßen"
      },
      {
        "id": "m8-comm-6",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the sentence with the correct health term.",
          "de": "Vervollständige den Satz mit dem richtigen Gesundheitsbegriff.",
          "pl": "Uzupełnij zdanie poprawnym terminem zdrowotnym.",
          "uk": "Доповніть речення правильним терміном охорони здоров'я.",
          "sq": "Plotëso fjalinë me termin e saktë shëndetësor."
        },
        "context": "Ich habe ______ und muss im Bett bleiben.",
        "correctAnswer": "Fieber"
      },
      {
        "id": "m8-comm-7",
        "type": "multiple-choice",
        "question": {
          "en": "What do you need to bring to the doctor?",
          "de": "Was musst du zum Arzt mitbringen?",
          "pl": "Co musisz zabrać do lekarza?",
          "uk": "Що потрібно взяти до лікаря?",
          "sq": "Çfarë duhet të marrësh te mjeku?"
        },
        "context": "Für den Arztbesuch brauche ich meine ______.",
        "options": ["Gesundheitskarte", "Fahrkarte", "Bankkarte"],
        "correctAnswer": "Gesundheitskarte"
      },
      {
        "id": "m8-comm-8",
        "type": "sentence-scramble",
        "question": {
          "en": "Put the words in the correct order.",
          "de": "Bringe die Wörter in die richtige Reihenfolge.",
          "pl": "Ułóż słowa w poprawnej kolejności.",
          "uk": "Розставте слова у правильному порядку.",
          "sq": "Vendos fjalët në rendin e saktë."
        },
        "context": ["er", "ins", "muss", "Krankenhaus"],
        "correctAnswer": "Er muss ins Krankenhaus"
      },
      {
        "id": "m8-comm-9",
        "type": "fill-in-the-blank",
        "question": {
          "en": "Complete the sentence with the correct health term.",
          "de": "Vervollständige den Satz mit dem richtigen Gesundheitsbegriff.",
          "pl": "Uzupełnij zdanie poprawnym terminem zdrowotnym.",
          "uk": "Доповніть речення правильним терміном охорони здоров'я.",
          "sq": "Plotëso fjalinë me termin e saktë shëndetësor."
        },
        "context": "Ich brauche ein ______ für die Medikamente.",
        "correctAnswer": "Rezept"
      },
      {
        "id": "m8-comm-10",
        "type": "matching",
        "question": {
          "en": "Match the doctor with their specialty.",
          "de": "Verbinde den Arzt mit seinem Fachgebiet.",
          "pl": "Dopasuj lekarza do jego specjalizacji.",
          "uk": "Поєднайте лікаря з його спеціальністю.",
          "sq": "Lidh mjekun me specializimin e tij."
        },
        "context": ["der Zahnarzt", "der Augenarzt", "der Kinderarzt", "der Hausarzt"],
        "options": ["Allgemeinmedizin", "Zähne", "Kinder", "Augen"],
        "correctAnswer": ["Zähne", "Augen", "Kinder", "Allgemeinmedizin"]
      }
    ]
  }
];