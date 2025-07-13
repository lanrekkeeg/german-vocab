import React, { useState, useEffect, useMemo, useCallback, useRef, Dispatch, SetStateAction } from 'react';
import { 
    ChevronLeft, ChevronRight, RotateCcw, Shuffle, BookOpen, Globe, CheckSquare,
    Play, CheckCircle2, Eye, XCircle, Ear, Pause, User, Users, BrainCircuit, Menu, X
} from 'lucide-react';

// --- AUDIO IMPORTS ---
import passage1Audio from './audio/passage1.wav';
import passage2Audio from './audio/passage2.wav';
import passage3Audio from './audio/passage3.wav';
import passage4Audio from './audio/passage4.wav';
import passage5Audio from './audio/passage5.wav';
import dialogue1Audio from './audio/1_restaurant_reservation.wav';
import dialogue2Audio from './audio/2_doctors_appointment.wav';
import dialogue3Audio from './audio/3_job_interview.wav';
import dialogue4Audio from './audio/4_apartment_viewing.wav';
// import dialogue5Audio from './audio/5_technical_support.wav';
import dialogue6Audio from './audio/6_supermarket_shopping.wav';
import dialogue7Audio from './audio/7_asking_directions.wav';
import dialogue8Audio from './audio/8_cafe_ordering.wav';
import dialogue9Audio from './audio/9_hair_salon.wav';
import dialogue10Audio from './audio/10_train_ticket.wav';
import dialogue11Audio from './audio/11_hotel_checkin.wav';
import dialogue12Audio from './audio/12_at_the_doctor.wav';
import dialogue13Audio from './audio/13_clothing_store.wav';
import dialogue14Audio from './audio/14_post_office.wav';
import dialogue15Audio from './audio/15_bank_appointment.wav';

// --- COMPONENT & DATA IMPORTS ---
import { module7Grammar } from './data/grammarExercises';
import { GrammarPracticeMode } from './components/GrammerPracticeMode';
import { A11SelfTest } from './components/A1.1SelfTest';
import { a11Tests } from './data/a1.1Tests';

// --- TYPE DEFINITIONS ---
type Translations = {
  english: string;
  ukrainian: string;
  polish: string;
  albanian: string;
  german: string; 
};

type Card = {
  german: string;
  translations: Translations;
  audioSrc?: string;
};

type LanguageKey = keyof Translations;
type TestLanguageKey = 'en' | 'de';
type Blank = { answer: string; size: number };
type SpeakerLabel = { speaker: string };
type LearningContentPart = string | Blank | SpeakerLabel;

type LearningContent = {
    id: number;
    title: string;
    level: string;
    type: 'passage' | 'dialogue';
    fullText: string;
    parts: LearningContentPart[];
    audioSrc: string;
    vocabulary: Card[];
};
type LanguageStrings = {
  name: string;
  selectSections: string;
  allSections: string;
  currentCard: string;
  of: string;
  clickToFlip: string;
  clickToFlipBack: string;
  previous: string;
  next: string;
  startWith: string;
  shuffle: string;
  reset: string;
  language: string;
  studyTips: string;
  tip1: string;
  tip2: string;
  tip3: string;
  tip4: string;
  sections: { [key: number]: string };
  flashcards: string;
  listeningPractice: string;
  selectPassage: string;
  passageInstructions: string;
  playAudio: string;
  pauseAudio: string;
  checkAnswers: string;
  showAnswers: string;
  keyVocabulary: string;
  grammarPractice: string;
  selectTopic: string;
  checkAnswer: string;
  nextExercise: string;
  correct: string;
  incorrect: string;
  showCorrectAnswer: string;
  finalScore: string;
  practiceAgain: string;
  question: string;
  grammarWelcomeTitle: string;
  grammarWelcomeText: string;
};
// --- LANGUAGE STRINGS DATA ---
const languages: Record<LanguageKey, LanguageStrings> = {
  english: {
    name: 'English',
    selectSections: 'Select Sections', allSections: 'All Sections', currentCard: 'Card', of: 'of',
    clickToFlip: 'Click to see translation', clickToFlipBack: 'Click to flip back', previous: 'Previous',
    next: 'Next', startWith: 'Start with', shuffle: 'Shuffle', reset: 'Reset', language: 'Language',
    studyTips: 'Study Tips', tip1: 'Try to recall the translation before flipping the card.',
    tip2: 'Use the shuffle function to test your knowledge randomly.', tip3: 'Practice both German → Translation and Translation → German.',
    tip4: 'Focus extra time on cards you find difficult.',
    sections: {
      1: 'Basic Greetings & Questions', 2: 'Objects & School Items', 3: 'Home & Furniture', 4: 'Family & Activities',
      5: 'Time & Daily Activities', 6: 'Food & Shopping', 7: 'Work & Money'
    },
    flashcards: 'Flashcards', listeningPractice: 'Listening Practice', selectPassage: 'Select a Passage',
    passageInstructions: 'Listen to the audio and fill in the blanks.', playAudio: 'Play Audio', pauseAudio: 'Pause Audio',
    checkAnswers: 'Check Answers', showAnswers: 'Show Answers', keyVocabulary: 'Key Vocabulary',
    grammarPractice: 'Grammar Practice', selectTopic: 'Select a Topic', checkAnswer: 'Check Answer',
    nextExercise: 'Next', correct: 'Correct!', incorrect: 'Incorrect.',
    showCorrectAnswer: 'Show Answer', finalScore: 'Final Score', practiceAgain: 'Practice Again', question: 'Question',
    grammarWelcomeTitle: 'Welcome to Grammar Practice', grammarWelcomeText: 'Please choose a topic from the left to begin.',
  },
  ukrainian: {
    name: 'Українська',
    selectSections: 'Оберіть розділи', allSections: 'Всі розділи', currentCard: 'Картка', of: 'з',
    clickToFlip: 'Натисніть, щоб побачити переклад', clickToFlipBack: 'Натисніть, щоб повернути', previous: 'Попередня',
    next: 'Наступна', startWith: 'Почати з', shuffle: 'Перемішати', reset: 'Скинути', language: 'Мова',
    studyTips: 'Поради для навчання', tip1: 'Спробуйте згадати переклад перед перевертанням картки.',
    tip2: 'Використовуйте функцію перемішування для випадкової перевірки.', tip3: 'Практикуйте німецьку → переклад і переклад → німецьку.',
    tip4: 'Приділяйте більше часу складним карткам.',
    sections: {
      1: 'Базові привітання та питання', 2: 'Предмети та шкільні речі', 3: 'Дім і меблі', 4: 'Сім\'я та активності',
      5: 'Час і щоденні справи', 6: 'Їжа та покупки', 7: 'Робота та гроші'
    },
    flashcards: 'Флеш-картки', listeningPractice: 'Практика аудіювання', selectPassage: 'Виберіть уривок',
    passageInstructions: 'Прослухайте аудіо та заповніть пропуски.', playAudio: 'Відтворити аудіо', pauseAudio: 'Пауза',
    checkAnswers: 'Перевірити відповіді', showAnswers: 'Показати відповіді', keyVocabulary: 'Ключова лексика',
    grammarPractice: 'Практика граматики', selectTopic: 'Виберіть тему', checkAnswer: 'Перевірити',
    nextExercise: 'Далі', correct: 'Правильно!', incorrect: 'Неправильно.',
    showCorrectAnswer: 'Показати відповідь', finalScore: 'Підсумковий рахунок', practiceAgain: 'Спробувати знову', question: 'Питання',
    grammarWelcomeTitle: 'Ласкаво просимо до практики граматики', grammarWelcomeText: 'Будь ласка, оберіть тему зліва, щоб почати.',
  },
  polish: {
    name: 'Polski',
    selectSections: 'Wybierz sekcje', allSections: 'Wszystkie sekcje', currentCard: 'Karta', of: 'z',
    clickToFlip: 'Kliknij, aby zobaczyć tłumaczenie', clickToFlipBack: 'Kliknij, aby odwrócić', previous: 'Poprzednia',
    next: 'Następna', startWith: 'Zacznij od', shuffle: 'Tasuj', reset: 'Resetuj', language: 'Język',
    studyTips: 'Wskazówki do nauki', tip1: 'Spróbuj przypomnieć sobie tłumaczenie przed odwróceniem karty.',
    tip2: 'Użyj funkcji tasowania do losowego testowania wiedzy.', tip3: 'Ćwicz niemiecki → tłumaczenie i tłumaczenie → niemiecki.',
    tip4: 'Poświęć więcej czasu na trudne karty.',
    sections: {
      1: 'Podstawowe powitania i pytania', 2: 'Przedmioty i artykuły szkolne', 3: 'Dom i meble', 4: 'Rodzina i aktywności',
      5: 'Czas i codzienne czynności', 6: 'Jedzenie i zakupy', 7: 'Praca i pieniądze'
    },
    flashcards: 'Fiszki', listeningPractice: 'Ćwiczenia ze słuchu', selectPassage: 'Wybierz fragment',
    passageInstructions: 'Posłuchaj nagrania i uzupełnij luki.', playAudio: 'Odtwórz audio', pauseAudio: 'Pauza',
    checkAnswers: 'Sprawdź odpowiedzi', showAnswers: 'Pokaż odpowiedzi', keyVocabulary: 'Kluczowe słownictwo',
    grammarPractice: 'Ćwiczenia gramatyczne', selectTopic: 'Wybierz temat', checkAnswer: 'Sprawdź',
    nextExercise: 'Dalej', correct: 'Poprawnie!', incorrect: 'Niepoprawnie.',
    showCorrectAnswer: 'Pokaż odpowiedź', finalScore: 'Wynik końcowy', practiceAgain: 'Ćwicz ponownie', question: 'Pytanie',
    grammarWelcomeTitle: 'Witaj w ćwiczeniach gramatycznych', grammarWelcomeText: 'Proszę wybrać temat z lewej strony, aby rozpocząć.',
  },
  albanian: {
    name: 'Shqip',
    selectSections: 'Zgjidhni seksionet', allSections: 'Të gjitha seksionet', currentCard: 'Karta', of: 'nga',
    clickToFlip: 'Klikoni për të parë përkthimin', clickToFlipBack: 'Klikoni për të kthyer', previous: 'E mëparshme',
    next: 'Tjetër', startWith: 'Filloni me', shuffle: 'Përzieni', reset: 'Rivendos', language: 'Gjuha',
    studyTips: 'Këshilla për studim', tip1: 'Përpiquni të kujtoni përkthimin para se të ktheni kartën.',
    tip2: 'Përdorni funksionin e përzierjes për të testuar njohuritë në mënyrë të rastësishme.', tip3: 'Praktikoni gjermanisht → përkthim dhe përkthim → gjermanisht.',
    tip4: 'Fokusohuni më shumë te kartat që i gjeni të vështira.',
    sections: {
      1: 'Përshëndetje dhe pyetje bazike', 2: 'Objekte dhe artikuj shkolle', 3: 'Shtëpia dhe mobiliet', 4: 'Familja dhe aktivitetet',
      5: 'Koha dhe aktivitetet e përditshme', 6: 'Ushqimi dhe Blerjet', 7: 'Puna dhe Paratë'
    },
    flashcards: 'Kartela', listeningPractice: 'Praktikë dëgjimi', selectPassage: 'Zgjidhni një pasazh',
    passageInstructions: 'Dëgjoni audion dhe plotësoni boshllëqet.', playAudio: 'Luaj audion', pauseAudio: 'Pauzë',
    checkAnswers: 'Kontrollo përgjigjet', showAnswers: 'Shfaq përgjigjet', keyVocabulary: 'Fjalori kyç',
    grammarPractice: 'Praktikë gramatikore', selectTopic: 'Zgjidh një temë', checkAnswer: 'Kontrollo',
    nextExercise: 'Tjetra', correct: 'Saktë!', incorrect: 'Gabim.',
    showCorrectAnswer: 'Shfaq përgjigjen', finalScore: 'Rezultati final', practiceAgain: 'Praktiko përsëri', question: 'Pyetja',
    grammarWelcomeTitle: 'Mirë se vini në praktikën e gramatikës', grammarWelcomeText: 'Ju lutemi zgjidhni një temë nga e majta për të filluar.',
  },
  german: {
    name: 'Deutsch',
    selectSections: 'Abschnitte auswählen', allSections: 'Alle Abschnitte', currentCard: 'Karte', of: 'von',
    clickToFlip: 'Klicken zum Übersetzen', clickToFlipBack: 'Klicken zum Zurückdrehen', previous: 'Zurück',
    next: 'Weiter', startWith: 'Beginne mit', shuffle: 'Mischen', reset: 'Zurücksetzen', language: 'Sprache',
    studyTips: 'Lerntipps', tip1: 'Versuche, die Übersetzung zu erinnern, bevor du die Karte umdrehst.',
    tip2: 'Nutze die Mischfunktion, um dein Wissen zufällig zu testen.', tip3: 'Übe sowohl Deutsch → Übersetzung als auch Übersetzung → Deutsch.',
    tip4: 'Konzentriere dich besonders auf Karten, die dir schwerfallen.',
    sections: {
        1: 'Grundlegende Begrüßungen & Fragen', 2: 'Gegenstände & Schulmaterial', 3: 'Zuhause & Möbel', 4: 'Familie & Aktivitäten',
        5: 'Zeit & Tägliche Aktivitäten', 6: 'Essen & Einkaufen', 7: 'Arbeit & Geld'
    },
    flashcards: 'Lernkarten', listeningPractice: 'Hörübungen', selectPassage: 'Wähle einen Text',
    passageInstructions: 'Höre dir die Audiodatei an und fülle die Lücken aus.', playAudio: 'Audio abspielen', pauseAudio: 'Pausieren',
    checkAnswers: 'Antworten prüfen', showAnswers: 'Antworten anzeigen', keyVocabulary: 'Schlüsselvokabular',
    grammarPractice: 'Grammatikübungen', selectTopic: 'Wähle ein Thema', checkAnswer: 'Antwort prüfen',
    nextExercise: 'Weiter', correct: 'Richtig!', incorrect: 'Falsch.',
    showCorrectAnswer: 'Antwort zeigen', finalScore: 'Endergebnis', practiceAgain: 'Nochmal üben', question: 'Frage',
    grammarWelcomeTitle: 'Willkommen bei den Grammatikübungen', grammarWelcomeText: 'Bitte wähle links ein Thema, um zu beginnen.',
  }
};

// --- VOCABULARY & CONTENT DATA ---
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
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

const allVocabulary: Record<number, Card[]> = addAudioPaths({
  "1": [
    { "german": "wie", "translations": { "english": "how", "ukrainian": "як", "polish": "jak", "albanian": "si" }},
    { "german": "heißen", "translations": { "english": "to be called", "ukrainian": "називатися", "polish": "nazywać się", "albanian": "të quhem" }},
    { "german": "Wie heißen Sie?", "translations": { "english": "What is your name?", "ukrainian": "Як Вас звати?", "polish": "Jak się Pan/Pani nazywa?", "albanian": "Si quheni?" }},
    { "german": "Guten Tag", "translations": { "english": "Good day", "ukrainian": "Добрий день", "polish": "Dzień dobry", "albanian": "Mirëdita" }},
    { "german": "und", "translations": { "english": "and", "ukrainian": "і", "polish": "i", "albanian": "dhe" }},
    { "german": "woher", "translations": { "english": "from where", "ukrainian": "звідки", "polish": "skąd", "albanian": "nga ku" }},
    { "german": "kommen", "translations": { "english": "to come", "ukrainian": "приходити", "polish": "przyjść", "albanian": "të vij" }},
    { "german": "Woher kommen Sie?", "translations": { "english": "Where do you come from?", "ukrainian": "Звідки Ви?", "polish": "Skąd Pan/Pani pochodzi?", "albanian": "Nga ku vini?" }},
    { "german": "Guten Morgen", "translations": { "english": "Good morning", "ukrainian": "Доброго ранку", "polish": "Dzień dobry", "albanian": "Mirëmëngjes" }},
    { "german": "der Name", "translations": { "english": "the name", "ukrainian": "ім'я", "polish": "imię", "albanian": "emri" }},
    { "german": "neu", "translations": { "english": "new", "ukrainian": "новий", "polish": "nowy", "albanian": "i ri" }},
    { "german": "das Haus", "translations": { "english": "the house", "ukrainian": "дім", "polish": "dom", "albanian": "shtëpia" }},
    { "german": "wohnen", "translations": { "english": "to live", "ukrainian": "жити", "polish": "mieszkać", "albanian": "të jetoj" }},
    { "german": "hier", "translations": { "english": "here", "ukrainian": "тут", "polish": "tutaj", "albanian": "këtu" }},
    { "german": "Hallo", "translations": { "english": "Hello", "ukrainian": "Привіт", "polish": "Cześć", "albanian": "Përshëndetje" }},
    { "german": "wer", "translations": { "english": "who", "ukrainian": "хто", "polish": "kto", "albanian": "kush" }},
    { "german": "schreiben", "translations": { "english": "to write", "ukrainian": "писати", "polish": "pisać", "albanian": "të shkruaj" }},
    { "german": "buchstabieren", "translations": { "english": "to spell", "ukrainian": "писати по літерах", "polish": "literować", "albanian": "të shkruaj shkronja për shkronja" }},
    { "german": "der Familienname", "translations": { "english": "family name", "ukrainian": "прізвище", "polish": "nazwisko", "albanian": "mbiemri" }},
    { "german": "der Vorname", "translations": { "english": "first name", "ukrainian": "ім'я", "polish": "imię", "albanian": "emri" }},
    { "german": "das Land", "translations": { "english": "country", "ukrainian": "країна", "polish": "kraj", "albanian": "vendi" }},
    { "german": "danke", "translations": { "english": "thank you", "ukrainian": "дякую", "polish": "dziękuję", "albanian": "faleminderit" }},
    { "german": "gut", "translations": { "english": "good", "ukrainian": "добре", "polish": "dobrze", "albanian": "mirë" }},
    { "german": "auch", "translations": { "english": "also", "ukrainian": "також", "polish": "też", "albanian": "gjithashtu" }},
    { "german": "was", "translations": { "english": "what", "ukrainian": "що", "polish": "co", "albanian": "çfarë" }},
    { "german": "machen", "translations": { "english": "to do/make", "ukrainian": "робити", "polish": "robić", "albanian": "të bëj" }},
    { "german": "lernen", "translations": { "english": "to learn", "ukrainian": "вчитися", "polish": "uczyć się", "albanian": "të mësoj" }},
    { "german": "Deutsch", "translations": { "english": "German", "ukrainian": "німецька", "polish": "niemiecki", "albanian": "gjermanishte" }},
    { "german": "wo", "translations": { "english": "where", "ukrainian": "де", "polish": "gdzie", "albanian": "ku" }},
    { "german": "ja", "translations": { "english": "yes", "ukrainian": "так", "polish": "tak", "albanian": "po" }},
    { "german": "nein", "translations": { "english": "no", "ukrainian": "ні", "polish": "nie", "albanian": "jo" }},
    { "german": "nicht", "translations": { "english": "not", "ukrainian": "не", "polish": "nie", "albanian": "jo" }},
    { "german": "die Hausfrau", "translations": { "english": "housewife", "ukrainian": "домогосподарка", "polish": "gospodyni domowa", "albanian": "shtëpiake" }},
    { "german": "der Student", "translations": { "english": "student (male)", "ukrainian": "студент", "polish": "student", "albanian": "student" }},
    { "german": "die Studentin", "translations": { "english": "student (female)", "ukrainian": "студентка", "polish": "studentka", "albanian": "studente" }}
  ],
  "2": [
    { "german": "die Heimat", "translations": { "english": "homeland", "ukrainian": "батьківщина", "polish": "ojczyzna", "albanian": "atdheu" }},
    { "german": "die Nationalität", "translations": { "english": "nationality", "ukrainian": "національність", "polish": "narodowość", "albanian": "kombësia" }},
    { "german": "die Sprache", "translations": { "english": "language", "ukrainian": "мова", "polish": "język", "albanian": "gjuha" }},
    { "german": "sprechen", "translations": { "english": "to speak", "ukrainian": "говорити", "polish": "mówić", "albanian": "të flas" }},
    { "german": "ein bisschen", "translations": { "english": "a little", "ukrainian": "трохи", "polish": "trochę", "albanian": "pak" }},
    { "german": "arbeiten", "translations": { "english": "to work", "ukrainian": "працювати", "polish": "pracować", "albanian": "të punoj" }},
    { "german": "lieben", "translations": { "english": "to love", "ukrainian": "любити", "polish": "kochać", "albanian": "të dua" }},
    { "german": "leben", "translations": { "english": "to live", "ukrainian": "жити", "polish": "żyć", "albanian": "të jetoj" }},
    { "german": "suchen", "translations": { "english": "to search", "ukrainian": "шукати", "polish": "szukać", "albanian": "të kërkoj" }},
    { "german": "die Arbeit", "translations": { "english": "work", "ukrainian": "робота", "polish": "praca", "albanian": "puna" }},
    { "german": "der Stift", "translations": { "english": "pen", "ukrainian": "ручка", "polish": "długopis", "albanian": "stilolapsi" }},
    { "german": "der Kugelschreiber", "translations": { "english": "ballpoint pen", "ukrainian": "кулькова ручка", "polish": "długopis", "albanian": "stilolapsi" }},
    { "german": "der Laptop", "translations": { "english": "laptop", "ukrainian": "ноутбук", "polish": "laptop", "albanian": "laptop" }},
    { "german": "das Tablet", "translations": { "english": "tablet", "ukrainian": "планшет", "polish": "tablet", "albanian": "tablet" }},
    { "german": "der Schlüssel", "translations": { "english": "key", "ukrainian": "ключ", "polish": "klucz", "albanian": "çelësi" }},
    { "german": "der Tisch", "translations": { "english": "table", "ukrainian": "стіл", "polish": "stół", "albanian": "tavolina" }},
    { "german": "der Stuhl", "translations": { "english": "chair", "ukrainian": "стілець", "polish": "krzesło", "albanian": "karriga" }},
    { "german": "das Buch", "translations": { "english": "book", "ukrainian": "книга", "polish": "książka", "albanian": "libri" }},
    { "german": "das Heft", "translations": { "english": "notebook", "ukrainian": "зошит", "polish": "zeszyt", "albanian": "fletorja" }},
    { "german": "das Handy", "translations": { "english": "mobile phone", "ukrainian": "мобільний телефон", "polish": "telefon komórkowy", "albanian": "celulari" }},
    { "german": "das Fenster", "translations": { "english": "window", "ukrainian": "вікно", "polish": "okno", "albanian": "dritarja" }},
    { "german": "die Lampe", "translations": { "english": "lamp", "ukrainian": "лампа", "polish": "lampa", "albanian": "llamba" }},
    { "german": "die Brille", "translations": { "english": "glasses", "ukrainian": "окуляри", "polish": "okulary", "albanian": "syzet" }},
    { "german": "die CD", "translations": { "english": "CD", "ukrainian": "компакт-диск", "polish": "płyta CD", "albanian": "CD" }},
    { "german": "die Flasche", "translations": { "english": "bottle", "ukrainian": "пляшка", "polish": "butelka", "albanian": "shishja" }},
    { "german": "die Tür", "translations": { "english": "door", "ukrainian": "двері", "polish": "drzwi", "albanian": "dera" }},
    { "german": "die Uhr", "translations": { "english": "clock/watch", "ukrainian": "годинник", "polish": "zegarek", "albanian": "ora" }},
    { "german": "die Tafel", "translations": { "english": "blackboard", "ukrainian": "дошка", "polish": "tablica", "albanian": "tabela" }},
    { "german": "die Tasche", "translations": { "english": "bag", "ukrainian": "сумка", "polish": "torba", "albanian": "çanta" }},
    { "german": "kosten", "translations": { "english": "to cost", "ukrainian": "коштувати", "polish": "kosztować", "albanian": "të kushtoj" }},
    { "german": "der Euro", "translations": { "english": "euro", "ukrainian": "євро", "polish": "euro", "albanian": "euro" }},
    { "german": "richtig", "translations": { "english": "correct", "ukrainian": "правильно", "polish": "poprawnie", "albanian": "saktë" }},
    { "german": "kaputt", "translations": { "english": "broken", "ukrainian": "зламаний", "polish": "zepsuty", "albanian": "i prishur" }},
    { "german": "interessant", "translations": { "english": "interesting", "ukrainian": "цікавий", "polish": "interesujący", "albanian": "interesant" }},
    { "german": "die Adresse", "translations": { "english": "address", "ukrainian": "адреса", "polish": "adres", "albanian": "adresa" }},
    { "german": "die Straße", "translations": { "english": "street", "ukrainian": "вулиця", "polish": "ulica", "albanian": "rruga" }},
    { "german": "die Postleitzahl", "translations": { "english": "postal code", "ukrainian": "поштовий індекс", "polish": "kod pocztowy", "albanian": "kodi postar" }},
    { "german": "der Beruf", "translations": { "english": "profession", "ukrainian": "професія", "polish": "zawód", "albanian": "profesioni" }},
    { "german": "der Ingenieur", "translations": { "english": "engineer (male)", "ukrainian": "інженер", "polish": "inżynier", "albanian": "inxhinier" }},
    { "german": "der Verkäufer", "translations": { "english": "salesperson (male)", "ukrainian": "продавець", "polish": "sprzedawca", "albanian": "shitës" }},
    { "german": "der Arzt", "translations": { "english": "doctor (male)", "ukrainian": "лікар", "polish": "lekarz", "albanian": "mjek" }},
    { "german": "der Lehrer", "translations": { "english": "teacher (male)", "ukrainian": "вчитель", "polish": "nauczyciel", "albanian": "mësues" }},
    { "german": "das Plakat", "translations": { "english": "poster", "ukrainian": "плакат", "polish": "plakat", "albanian": "poster" }},
    { "german": "das Papier", "translations": { "english": "paper", "ukrainian": "папір", "polish": "papier", "albanian": "letër" }},
    { "german": "das Wörterbuch", "translations": { "english": "dictionary", "ukrainian": "словник", "polish": "słownik", "albanian": "fjalor" }},
    { "german": "der USB-Stick", "translations": { "english": "USB stick", "ukrainian": "флешка", "polish": "pendrive", "albanian": "USB" }},
    { "german": "die Zahl", "translations": { "english": "number", "ukrainian": "число", "polish": "liczba", "albanian": "numër" }},
    { "german": "die Hausnummer", "translations": { "english": "house number", "ukrainian": "номер будинку", "polish": "numer domu", "albanian": "numri i shtëpisë" }},
    { "german": "der Kuli", "translations": { "english": "pen", "ukrainian": "ручка", "polish": "długopis", "albanian": "stilolaps" }},
    { "german": "schick", "translations": { "english": "chic, stylish", "ukrainian": "шикарний", "polish": "szykowny", "albanian": "shik" }}
  ],
  "3": [
    { "german": "die Wohnung", "translations": { "english": "apartment", "ukrainian": "квартира", "polish": "mieszkanie", "albanian": "apartamenti" }},
    { "german": "das Wohnzimmer", "translations": { "english": "living room", "ukrainian": "вітальня", "polish": "salon", "albanian": "dhoma e ndenjjes" }},
    { "german": "das Schlafzimmer", "translations": { "english": "bedroom", "ukrainian": "спальня", "polish": "sypialnia", "albanian": "dhoma e gjumit" }},
    { "german": "die Küche", "translations": { "english": "kitchen", "ukrainian": "кухня", "polish": "kuchnia", "albanian": "kuzhina" }},
    { "german": "die Möbel", "translations": { "english": "furniture", "ukrainian": "меблі", "polish": "meble", "albanian": "mobilje" }},
    { "german": "der Schrank", "translations": { "english": "wardrobe", "ukrainian": "шафа", "polish": "szafa", "albanian": "dollapi" }},
    { "german": "der Sessel", "translations": { "english": "armchair", "ukrainian": "крісло", "polish": "fotel", "albanian": "kolltuku" }},
    { "german": "das Sofa", "translations": { "english": "sofa", "ukrainian": "диван", "polish": "sofa", "albanian": "divan" }},
    { "german": "das Regal", "translations": { "english": "shelf", "ukrainian": "полиця", "polish": "półka", "albanian": "raft" }},
    { "german": "der Teppich", "translations": { "english": "carpet", "ukrainian": "килим", "polish": "dywan", "albanian": "qilim" }},
    { "german": "das Bild", "translations": { "english": "picture", "ukrainian": "картина", "polish": "obraz", "albanian": "figura" }},
    { "german": "der Vorhang", "translations": { "english": "curtain", "ukrainian": "завіса", "polish": "zasłona", "albanian": "perde" }},
    { "german": "das Bett", "translations": { "english": "bed", "ukrainian": "ліжко", "polish": "łóżko", "albanian": "krevati" }},
    { "german": "der Fernseher", "translations": { "english": "television", "ukrainian": "телевізор", "polish": "telewizor", "albanian": "televizori" }},
    { "german": "der Herd", "translations": { "english": "stove", "ukrainian": "плита", "polish": "kuchenka", "albanian": "soba" }},
    { "german": "die Spüle", "translations": { "english": "sink", "ukrainian": "мийка", "polish": "zlew", "albanian": "lavamani" }},
    { "german": "modern", "translations": { "english": "modern", "ukrainian": "сучасний", "polish": "nowoczesny", "albanian": "modern" }},
    { "german": "groß", "translations": { "english": "big", "ukrainian": "великий", "polish": "duży", "albanian": "i madh" }},
    { "german": "klein", "translations": { "english": "small", "ukrainian": "маленький", "polish": "mały", "albanian": "i vogël" }},
    { "german": "schön", "translations": { "english": "beautiful", "ukrainian": "красивий", "polish": "ładny", "albanian": "i bukur" }},
    { "german": "hässlich", "translations": { "english": "ugly", "ukrainian": "потворний", "polish": "brzydki", "albanian": "i shëmtuar" }},
    { "german": "bequem", "translations": { "english": "comfortable", "ukrainian": "зручний", "polish": "wygodny", "albanian": "i rehatshëm" }},
    { "german": "haben", "translations": { "english": "to have", "ukrainian": "мати", "polish": "mieć", "albanian": "të kem" }},
    { "german": "brauchen", "translations": { "english": "to need", "ukrainian": "потребувати", "polish": "potrzebować", "albanian": "të kem nevojë" }},
    { "german": "kaufen", "translations": { "english": "to buy", "ukrainian": "купувати", "polish": "kupować", "albanian": "të blej" }},
    { "german": "der Kühlschrank", "translations": { "english": "refrigerator", "ukrainian": "холодильник", "polish": "lodówka", "albanian": "frigoriferi" }},
    { "german": "die Blume", "translations": { "english": "flower", "ukrainian": "квітка", "polish": "kwiat", "albanian": "lulja" }},
    { "german": "die Mikrowelle", "translations": { "english": "microwave", "ukrainian": "мікрохвильова піч", "polish": "kuchenka mikrofalowa", "albanian": "mikrovalë" }},
    { "german": "die Waschmaschine", "translations": { "english": "washing machine", "ukrainian": "пральна машина", "polish": "pralka", "albanian": "makina e rrobave" }},
    { "german": "die Farbe", "translations": { "english": "color", "ukrainian": "колір", "polish": "kolor", "albanian": "ngjyra" }},
    { "german": "gelb", "translations": { "english": "yellow", "ukrainian": "жовтий", "polish": "żółty", "albanian": "e verdhë" }},
    { "german": "rot", "translations": { "english": "red", "ukrainian": "червоний", "polish": "czerwony", "albanian": "e kuqe" }},
    { "german": "blau", "translations": { "english": "blue", "ukrainian": "синій", "polish": "niebieski", "albanian": "blu" }},
    { "german": "grün", "translations": { "english": "green", "ukrainian": "зелений", "polish": "zielony", "albanian": "gjelbër" }},
    { "german": "schwarz", "translations": { "english": "black", "ukrainian": "чорний", "polish": "czarny", "albanian": "e zezë" }},
    { "german": "weiß", "translations": { "english": "white", "ukrainian": "білий", "polish": "biały", "albanian": "e bardhë" }},
    { "german": "super", "translations": { "english": "super", "ukrainian": "супер", "polish": "super", "albanian": "super" }},
    { "german": "toll", "translations": { "english": "great", "ukrainian": "чудово", "polish": "świetnie", "albanian": "bukur" }},
    { "german": "gemütlich", "translations": { "english": "cozy", "ukrainian": "затишний", "polish": "przytulny", "albanian": "i qetë" }},
    { "german": "der Balkon", "translations": { "english": "balcony", "ukrainian": "балкон", "polish": "balkon", "albanian": "balkoni" }},
    { "german": "der Garten", "translations": { "english": "garden", "ukrainian": "сад", "polish": "ogród", "albanian": "kopshti" }},
    { "german": "die Miete", "translations": { "english": "rent", "ukrainian": "оренда", "polish": "czynsz", "albanian": "qiraja" }},
    { "german": "kalt", "translations": { "english": "cold", "ukrainian": "холодний", "polish": "zimny", "albanian": "ftohtë" }},
    { "german": "warm", "translations": { "english": "warm", "ukrainian": "теплий", "polish": "ciepły", "albanian": "ngrohtë" }},
    { "german": "hell", "translations": { "english": "bright", "ukrainian": "світлий", "polish": "jasny", "albanian": "i ndritshëm" }},
    { "german": "dunkel", "translations": { "english": "dark", "ukrainian": "темний", "polish": "ciemny", "albanian": "errët" }},
    { "german": "laut", "translations": { "english": "loud", "ukrainian": "гучний", "polish": "głośny", "albanian": "zhurmshëm" }},
    { "german": "ruhig", "translations": { "english": "quiet", "ukrainian": "тихий", "polish": "cichy", "albanian": "qetë" }},
    { "german": "günstig", "translations": { "english": "cheap, affordable", "ukrainian": "вигідний, дешевий", "polish": "korzystny, tani", "albanian": "i lirë, i përballueshëm" }},
    { "german": "das Bad", "translations": { "english": "bathroom", "ukrainian": "ванна кімната", "polish": "łazienka", "albanian": "banjo" }},
    { "german": "die Nebenkosten", "translations": { "english": "utilities, additional costs", "ukrainian": "комунальні послуги", "polish": "koszty dodatkowe", "albanian": "shpenzime shtesë" }},
    { "german": "die Kommode", "translations": { "english": "chest of drawers", "ukrainian": "комод", "polish": "komoda", "albanian": "komodinë" }},
    { "german": "das Waschbecken", "translations": { "english": "washbasin", "ukrainian": "умивальник", "polish": "umywalka", "albanian": "lavaman" }},
    { "german": "die Spülmaschine", "translations": { "english": "dishwasher", "ukrainian": "посудомийна машина", "polish": "zmywarka", "albanian": "lavastovilje" }},
    { "german": "der Stock", "translations": { "english": "floor, story", "ukrainian": "поверх", "polish": "piętro", "albanian": "kat" }},
    { "german": "das Dachgeschoss", "translations": { "english": "attic", "ukrainian": "мансарда", "polish": "poddasze", "albanian": "papafingo" }},
    { "german": "das Erdgeschoss", "translations": { "english": "ground floor", "ukrainian": "перший поверх", "polish": "parter", "albanian": "përdhesë" }},
    { "german": "der Nachbar", "translations": { "english": "neighbor (male)", "ukrainian": "сусід", "polish": "sąsiad", "albanian": "fqinj" }},
    { "german": "mieten", "translations": { "english": "to rent", "ukrainian": "орендувати", "polish": "wynajmować", "albanian": "të marr me qira" }},
    { "german": "teuer", "translations": { "english": "expensive", "ukrainian": "дорогий", "polish": "drogi", "albanian": "i shtrenjtë" }},
    { "german": "billig", "translations": { "english": "cheap", "ukrainian": "дешевий", "polish": "tani", "albanian": "i lirë" }},
    { "german": "elegant", "translations": { "english": "elegant", "ukrainian": "елегантний", "polish": "elegancki", "albanian": "elegant" }},
    { "german": "langweilig", "translations": { "english": "boring", "ukrainian": "нудний", "polish": "nudny", "albanian": "i mërzitshëm" }}
  ],
  "4": [
    { "german": "der Vater", "translations": { "english": "father", "ukrainian": "батько", "polish": "ojciec", "albanian": "babai" }},
    { "german": "die Mutter", "translations": { "english": "mother", "ukrainian": "мати", "polish": "matka", "albanian": "nëna" }},
    { "german": "die Eltern", "translations": { "english": "parents", "ukrainian": "батьки", "polish": "rodzice", "albanian": "prindërit" }},
    { "german": "der Bruder", "translations": { "english": "brother", "ukrainian": "брат", "polish": "brat", "albanian": "vëllai" }},
    { "german": "die Schwester", "translations": { "english": "sister", "ukrainian": "сестра", "polish": "siostra", "albanian": "motra" }},
    { "german": "der Onkel", "translations": { "english": "uncle", "ukrainian": "дядько", "polish": "wujek", "albanian": "xhaxhai" }},
    { "german": "die Tante", "translations": { "english": "aunt", "ukrainian": "тітка", "polish": "ciocia", "albanian": "tezja" }},
    { "german": "der Sohn", "translations": { "english": "son", "ukrainian": "син", "polish": "syn", "albanian": "djali" }},
    { "german": "die Tochter", "translations": { "english": "daughter", "ukrainian": "дочка", "polish": "córka", "albanian": "vajza" }},
    { "german": "das Foto", "translations": { "english": "photo", "ukrainian": "фото", "polish": "zdjęcie", "albanian": "fotografia" }},
    { "german": "zu Hause", "translations": { "english": "at home", "ukrainian": "вдома", "polish": "w domu", "albanian": "në shtëpi" }},
    { "german": "studieren", "translations": { "english": "to study", "ukrainian": "навчатися", "polish": "studiować", "albanian": "të studioj" }},
    { "german": "die Freizeit", "translations": { "english": "free time", "ukrainian": "вільний час", "polish": "czas wolny", "albanian": "koha e lirë" }},
    { "german": "die Familie", "translations": { "english": "family", "ukrainian": "сім'я", "polish": "rodzina", "albanian": "familja" }},
    { "german": "alle", "translations": { "english": "all", "ukrainian": "всі", "polish": "wszyscy", "albanian": "të gjithë" }},
    { "german": "faulenzen", "translations": { "english": "to laze around", "ukrainian": "лінуватися", "polish": "leniuchować", "albanian": "të dërgjem" }},
    { "german": "schlafen", "translations": { "english": "to sleep", "ukrainian": "спати", "polish": "spać", "albanian": "të fle" }},
    { "german": "essen", "translations": { "english": "to eat", "ukrainian": "їсти", "polish": "jeść", "albanian": "të ha" }},
    { "german": "lesen", "translations": { "english": "to read", "ukrainian": "читати", "polish": "czytać", "albanian": "të lexoj" }},
    { "german": "sehen", "translations": { "english": "to see", "ukrainian": "бачити", "polish": "widzieć", "albanian": "të shoh" }},
    { "german": "nehmen", "translations": { "english": "to take", "ukrainian": "брати", "polish": "brać", "albanian": "të marr" }},
    { "german": "fahren", "translations": { "english": "to drive", "ukrainian": "їхати", "polish": "jechać", "albanian": "të drejtoj" }},
    { "german": "treffen", "translations": { "english": "to meet", "ukrainian": "зустрічатися", "polish": "spotkać", "albanian": "të takoj" }},
    { "german": "die Schokolade", "translations": { "english": "chocolate", "ukrainian": "шоколад", "polish": "czekolada", "albanian": "çokollata" }},
    { "german": "die Pizza", "translations": { "english": "pizza", "ukrainian": "піца", "polish": "pizza", "albanian": "pica" }},
    { "german": "der Film", "translations": { "english": "film", "ukrainian": "фільм", "polish": "film", "albanian": "filmi" }},
    { "german": "nach Hause", "translations": { "english": "home", "ukrainian": "додому", "polish": "do domu", "albanian": "në shtëpi" }},
    { "german": "Zeit haben", "translations": { "english": "to have time", "ukrainian": "мати час", "polish": "mieć czas", "albanian": "të kem kohë" }},
    { "german": "gern", "translations": { "english": "gladly", "ukrainian": "охоче", "polish": "chętnie", "albanian": "me kënaqësi" }},
    { "german": "das Wochenende", "translations": { "english": "weekend", "ukrainian": "вихідні", "polish": "weekend", "albanian": "fundjavë" }},
    { "german": "bleiben", "translations": { "english": "to stay", "ukrainian": "залишатися", "polish": "zostawać", "albanian": "të rri" }},
    { "german": "chillen", "translations": { "english": "to chill", "ukrainian": "відпочивати", "polish": "chillować", "albanian": "të çlodhëm" }},
    { "german": "der Tag", "translations": { "english": "day", "ukrainian": "день", "polish": "dzień", "albanian": "dita" }},
    { "german": "wohin", "translations": { "english": "where to", "ukrainian": "куди", "polish": "dokąd", "albanian": "ku" }},
    { "german": "der Supermarkt", "translations": { "english": "supermarket", "ukrainian": "супермаркет", "polish": "supermarket", "albanian": "supermarket" }},
    { "german": "besichtigen", "translations": { "english": "to visit/sightsee", "ukrainian": "оглядати", "polish": "zwiedzać", "albanian": "të vizitoj" }},
    { "german": "besuchen", "translations": { "english": "to visit", "ukrainian": "відвідувати", "polish": "odwiedzać", "albanian": "të vizitoj" }},
    { "german": "der Kaffee", "translations": { "english": "coffee", "ukrainian": "кава", "polish": "kawa", "albanian": "kafeja" }},
    { "german": "trinken", "translations": { "english": "to drink", "ukrainian": "пити", "polish": "pić", "albanian": "të pi" }},
    { "german": "kennen", "translations": { "english": "to know", "ukrainian": "знати", "polish": "znać", "albanian": "të njoh" }},
    { "german": "zuerst", "translations": { "english": "first", "ukrainian": "спочатку", "polish": "najpierw", "albanian": "së pari" }},
    { "german": "dann", "translations": { "english": "then", "ukrainian": "потім", "polish": "potem", "albanian": "pastaj" }},
    { "german": "danach", "translations": { "english": "after that", "ukrainian": "після того", "polish": "potem", "albanian": "pas kësaj" }},
    { "german": "früher", "translations": { "english": "earlier, in the past", "ukrainian": "раніше", "polish": "wcześniej, dawniej", "albanian": "më herët, dikur" }},
    { "german": "der Großvater", "translations": { "english": "grandfather", "ukrainian": "дідусь", "polish": "dziadek", "albanian": "gjyshi" }},
    { "german": "die Großmutter", "translations": { "english": "grandmother", "ukrainian": "бабуся", "polish": "babcia", "albanian": "gjyshja" }},
    { "german": "der Cousin", "translations": { "english": "cousin (male)", "ukrainian": "двоюрідний брат", "polish": "kuzyn", "albanian": "kushëri" }},
    { "german": "die Cousine", "translations": { "english": "cousin (female)", "ukrainian": "двоюрідна сестра", "polish": "kuzynka", "albanian": "kushërirë" }},
    { "german": "der Neffe", "translations": { "english": "nephew", "ukrainian": "племінник", "polish": "siostrzeniec, bratanek", "albanian": "nipi" }},
    { "german": "die Nichte", "translations": { "english": "niece", "ukrainian": "племінниця", "polish": "siostrzenica, bratanica", "albanian": "mbesa" }},
    { "german": "die Kindheit", "translations": { "english": "childhood", "ukrainian": "дитинство", "polish": "dzieciństwo", "albanian": "fëmijëria" }},
    { "german": "das Smartphone", "translations": { "english": "smartphone", "ukrainian": "смартфон", "polish": "smartfon", "albanian": "smartphone" }},
    { "german": "die Idee", "translations": { "english": "idea", "ukrainian": "ідея", "polish": "pomysł", "albanian": "ide" }},
    { "german": "glauben", "translations": { "english": "to believe", "ukrainian": "вірити", "polish": "wierzyć", "albanian": "të besoj" }},
    { "german": "wissen", "translations": { "english": "to know (a fact)", "ukrainian": "знати (факт)", "polish": "wiedzieć", "albanian": "të di" }},
    { "german": "süß", "translations": { "english": "sweet, cute", "ukrainian": "солодкий, милий", "polish": "słodki, uroczy", "albanian": "i ëmbël, i lezetshëm" }},
    { "german": "verheiratet", "translations": { "english": "married", "ukrainian": "одружений", "polish": "żonaty, zamężna", "albanian": "i martuar" }}
  ],
  "5": [
    { "german": "Fußball spielen", "translations": { "english": "to play football", "ukrainian": "грати у футбол", "polish": "grać w piłkę nożną", "albanian": "të luaj futboll" }},
    { "german": "joggen", "translations": { "english": "to jog", "ukrainian": "бігати підтюпцем", "polish": "biegać", "albanian": "të vrapoj" }},
    { "german": "ein Bild malen", "translations": { "english": "to paint a picture", "ukrainian": "малювати картину", "polish": "malować obraz", "albanian": "të pikturoj" }},
    { "german": "tanzen", "translations": { "english": "to dance", "ukrainian": "танцювати", "polish": "tańczyć", "albanian": "të kërcej" }},
    { "german": "im Internet surfen", "translations": { "english": "to surf the internet", "ukrainian": "користуватися інтернетом", "polish": "surfować po internecie", "albanian": "të shfletoj internetin" }},
    { "german": "grillen", "translations": { "english": "to grill", "ukrainian": "готувати на грилі", "polish": "grillować", "albanian": "të pjek në skarë" }},
    { "german": "Musik hören", "translations": { "english": "to listen to music", "ukrainian": "слухати музику", "polish": "słuchać muzyki", "albanian": "të dëgjoj muzikë" }},
    { "german": "schwimmen", "translations": { "english": "to swim", "ukrainian": "плавати", "polish": "pływać", "albanian": "të notoj" }},
    { "german": "das Hobby", "translations": { "english": "hobby", "ukrainian": "хобі", "polish": "hobby", "albanian": "hobi" }},
    { "german": "spät", "translations": { "english": "late", "ukrainian": "пізно", "polish": "późno", "albanian": "vonë" }},
    { "german": "Wie spät ist es?", "translations": { "english": "What time is it?", "ukrainian": "Котра година?", "polish": "Która godzina?", "albanian": "Sa është ora?" }},
    { "german": "halb", "translations": { "english": "half", "ukrainian": "половина", "polish": "pół", "albanian": "gjysmë" }},
    { "german": "Viertel vor", "translations": { "english": "quarter to", "ukrainian": "за чверть", "polish": "za kwadrans", "albanian": "një çerek para" }},
    { "german": "Viertel nach", "translations": { "english": "quarter past", "ukrainian": "чверть на", "polish": "kwadrans po", "albanian": "një çerek pas" }},
    { "german": "um", "translations": { "english": "at (time)", "ukrainian": "о", "polish": "o", "albanian": "në" }},
    { "german": "beginnen", "translations": { "english": "to begin", "ukrainian": "починати", "polish": "zaczynać", "albanian": "të filloj" }},
    { "german": "Um wie viel Uhr?", "translations": { "english": "At what time?", "ukrainian": "О котрій годині?", "polish": "O której godzinie?", "albanian": "Në çfarë ore?" }},
    { "german": "enden", "translations": { "english": "to end", "ukrainian": "закінчувати", "polish": "kończyć", "albanian": "të mbaroj" }},
    { "german": "gehen", "translations": { "english": "to go", "ukrainian": "йти", "polish": "iść", "albanian": "të shkoj" }},
    { "german": "von ... bis", "translations": { "english": "from ... to", "ukrainian": "з ... до", "polish": "od ... do", "albanian": "nga ... deri" }},
    { "german": "die Pause", "translations": { "english": "break", "ukrainian": "перерва", "polish": "przerwa", "albanian": "pushimi" }},
    { "german": "der Zug", "translations": { "english": "train", "ukrainian": "поїзд", "polish": "pociąg", "albanian": "treni" }},
    { "german": "der Radiowecker", "translations": { "english": "radio alarm clock", "ukrainian": "радіобудильник", "polish": "radiobudzik", "albanian": "zgjuesi me radio" }},
    { "german": "klingeln", "translations": { "english": "to ring", "ukrainian": "дзвонити", "polish": "dzwonić", "albanian": "të bie" }},
    { "german": "das Flugzeug", "translations": { "english": "airplane", "ukrainian": "літак", "polish": "samolot", "albanian": "aeroplani" }},
    { "german": "der Krimi", "translations": { "english": "crime show", "ukrainian": "детектив", "polish": "kryminał", "albanian": "film kriminal" }},
    { "german": "anrufen", "translations": { "english": "to call", "ukrainian": "телефонувати", "polish": "dzwonić", "albanian": "të telefonoj" }},
    { "german": "das Kino", "translations": { "english": "cinema", "ukrainian": "кіно", "polish": "kino", "albanian": "kinema" }},
    { "german": "anfangen", "translations": { "english": "to start", "ukrainian": "починати", "polish": "zaczynać", "albanian": "të filloj" }},
    { "german": "aufhören", "translations": { "english": "to stop", "ukrainian": "припиняти", "polish": "przestawać", "albanian": "të ndaloj" }},
    { "german": "aufstehen", "translations": { "english": "to get up", "ukrainian": "вставати", "polish": "wstawać", "albanian": "të çohem" }},
    { "german": "aufräumen", "translations": { "english": "to tidy up", "ukrainian": "прибирати", "polish": "sprzątać", "albanian": "të pastroj" }},
    { "german": "einkaufen", "translations": { "english": "to shop", "ukrainian": "робити покупки", "polish": "robić zakupy", "albanian": "të bëj pazar" }},
    { "german": "mitnehmen", "translations": { "english": "to take along", "ukrainian": "брати з собою", "polish": "brać ze sobą", "albanian": "të marr me vete" }},
    { "german": "die Zeitung", "translations": { "english": "newspaper", "ukrainian": "газета", "polish": "gazeta", "albanian": "gazeta" }},
    { "german": "fernsehen", "translations": { "english": "to watch TV", "ukrainian": "дивитися телевізор", "polish": "oglądać telewizję", "albanian": "të shoh televizor" }},
    { "german": "ausgehen", "translations": { "english": "to go out", "ukrainian": "виходити", "polish": "wychodzić", "albanian": "të dal" }},
    { "german": "wegfahren", "translations": { "english": "to drive away", "ukrainian": "від'їжджати", "polish": "odjeżdżać", "albanian": "të largohem" }},
    { "german": "mitkommen", "translations": { "english": "to come along", "ukrainian": "йти разом", "polish": "iść razem", "albanian": "të vij bashkë" }},
    { "german": "stattfinden", "translations": { "english": "to take place", "ukrainian": "відбуватися", "polish": "odbywać się", "albanian": "të zhvillohet" }},
    { "german": "ausfallen", "translations": { "english": "to be cancelled", "ukrainian": "скасовуватися", "polish": "być odwołanym", "albanian": "të anulohet" }},
    { "german": "einkaufen gehen", "translations": { "english": "to go shopping", "ukrainian": "йти за покупками", "polish": "iść na zakupy", "albanian": "të shkoj për pazar" }},
    { "german": "spazieren gehen", "translations": { "english": "to go for a walk", "ukrainian": "йти на прогулянку", "polish": "iść na spacer", "albanian": "të shëtis" }},
    { "german": "jeden Tag", "translations": { "english": "every day", "ukrainian": "кожного дня", "polish": "codziennie", "albanian": "çdo ditë" }},
    { "german": "der Ausflug", "translations": { "english": "excursion, trip", "ukrainian": "екскурсія, поїздка", "polish": "wycieczka", "albanian": "udhëtim" }},
    { "german": "heute", "translations": { "english": "today", "ukrainian": "сьогодні", "polish": "dzisiaj", "albanian": "sot" }},
    { "german": "die Woche", "translations": { "english": "week", "ukrainian": "тиждень", "polish": "tydzień", "albanian": "java" }},
    { "german": "der Montag", "translations": { "english": "Monday", "ukrainian": "понеділок", "polish": "poniedziałek", "albanian": "e hënë" }},
    { "german": "der Dienstag", "translations": { "english": "Tuesday", "ukrainian": "вівторок", "polish": "wtorek", "albanian": "e martë" }},
    { "german": "der Mittwoch", "translations": { "english": "Wednesday", "ukrainian": "середа", "polish": "środa", "albanian": "e mërkurë" }},
    { "german": "der Donnerstag", "translations": { "english": "Thursday", "ukrainian": "четвер", "polish": "czwartek", "albanian": "e enjte" }},
    { "german": "der Freitag", "translations": { "english": "Friday", "ukrainian": "п'ятниця", "polish": "piątek", "albanian": "e premte" }},
    { "german": "der Samstag", "translations": { "english": "Saturday", "ukrainian": "субота", "polish": "sobota", "albanian": "e shtunë" }},
    { "german": "der Sonntag", "translations": { "english": "Sunday", "ukrainian": "неділя", "polish": "niedziela", "albanian": "e diel" }},
    { "german": "die Hausaufgabe", "translations": { "english": "homework", "ukrainian": "домашнє завдання", "polish": "zadanie domowe", "albanian": "detyra e shtëpisë" }},
    { "german": "das Fahrrad", "translations": { "english": "bicycle", "ukrainian": "велосипед", "polish": "rower", "albanian": "biçikletë" }},
    { "german": "reparieren", "translations": { "english": "to repair", "ukrainian": "ремонтувати", "polish": "naprawiać", "albanian": "të riparoj" }},
    { "german": "am Morgen", "translations": { "english": "in the morning", "ukrainian": "вранці", "polish": "rano", "albanian": "në mëngjes" }},
    { "german": "am Vormittag", "translations": { "english": "in the forenoon", "ukrainian": "до обіду", "polish": "przed południem", "albanian": "në paradrekë" }},
    { "german": "am Mittag", "translations": { "english": "at noon", "ukrainian": "в обід", "polish": "w południe", "albanian": "në mesditë" }},
    { "german": "am Nachmittag", "translations": { "english": "in the afternoon", "ukrainian": "після обіду", "polish": "po południu", "albanian": "pasdite" }},
    { "german": "am Abend", "translations": { "english": "in the evening", "ukrainian": "ввечері", "polish": "wieczorem", "albanian": "në mbrëmje" }},
    { "german": "in der Nacht", "translations": { "english": "at night", "ukrainian": "вночі", "polish": "w nocy", "albanian": "natën" }},
    { "german": "die Fahrkarte", "translations": { "english": "ticket", "ukrainian": "квиток", "polish": "bilet", "albanian": "bileta" }},
    { "german": "Schach spielen", "translations": { "english": "to play chess", "ukrainian": "грати в шахи", "polish": "grać w szachy", "albanian": "të luaj shah" }},
    { "german": "zusammen", "translations": { "english": "together", "ukrainian": "разом", "polish": "razem", "albanian": "bashkë" }},
    { "german": "vielleicht", "translations": { "english": "maybe", "ukrainian": "можливо", "polish": "może", "albanian": "ndoshta" }},
    { "german": "Lust haben", "translations": { "english": "to feel like it", "ukrainian": "мати бажання", "polish": "mieć ochotę", "albanian": "të kem dëshirë" }},
    { "german": "später", "translations": { "english": "later", "ukrainian": "пізніше", "polish": "później", "albanian": "më vonë" }},
    { "german": "leider", "translations": { "english": "unfortunately", "ukrainian": "на жаль", "polish": "niestety", "albanian": "fatkeqësisht" }},
    { "german": "kochen", "translations": { "english": "to cook", "ukrainian": "готувати", "polish": "gotować", "albanian": "të gatuaj" }},
    { "german": "der Termin", "translations": { "english": "appointment", "ukrainian": "зустріч, термін", "polish": "termin, spotkanie", "albanian": "takim" }},
    { "german": "der Zahnarzt", "translations": { "english": "dentist", "ukrainian": "стоматолог", "polish": "dentysta", "albanian": "dentist" }},
    { "german": "der Freund", "translations": { "english": "friend (male)", "ukrainian": "друг", "polish": "przyjaciel", "albanian": "mik" }},
    { "german": "die Freundin", "translations": { "english": "friend (female)", "ukrainian": "подруга", "polish": "przyjaciółka", "albanian": "mike" }},
    { "german": "der Kollege", "translations": { "english": "colleague (male)", "ukrainian": "колега", "polish": "kolega", "albanian": "koleg" }},
    { "german": "das Gespräch", "translations": { "english": "conversation", "ukrainian": "розмова", "polish": "rozmowa", "albanian": "bisedë" }},
    { "german": "abholen", "translations": { "english": "to pick up", "ukrainian": "забирати", "polish": "odbierać", "albanian": "të marr dikë" }},
    { "german": "wiederholen", "translations": { "english": "to repeat", "ukrainian": "повторювати", "polish": "powtarzać", "albanian": "të përsëris" }},
    { "german": "dringend", "translations": { "english": "urgent", "ukrainian": "терміновий", "polish": "pilny", "albanian": "urgjent" }}
  ],
  "6": [
    { "german": "der Einkaufszettel", "translations": { "english": "shopping list", "ukrainian": "список покупок", "polish": "lista zakupów", "albanian": "lista e pazarit" }},
    { "german": "der Preis", "translations": { "english": "price", "ukrainian": "ціна", "polish": "cena", "albanian": "çmimi" }},
    { "german": "das Lebensmittel", "translations": { "english": "food, grocery", "ukrainian": "продукт харчування", "polish": "artykuł spożywczy", "albanian": "ushqim" }},
    { "german": "der Hunger", "translations": { "english": "hunger", "ukrainian": "голод", "polish": "głód", "albanian": "uri" }},
    { "german": "der Durst", "translations": { "english": "thirst", "ukrainian": "спрага", "polish": "pragnienie", "albanian": "etje" }},
    { "german": "das Frühstück", "translations": { "english": "breakfast", "ukrainian": "сніданок", "polish": "śniadanie", "albanian": "mëngjesi" }},
    { "german": "das Mittagessen", "translations": { "english": "lunch", "ukrainian": "обід", "polish": "obiad", "albanian": "dreka" }},
    { "german": "das Abendessen", "translations": { "english": "dinner, supper", "ukrainian": "вечеря", "polish": "kolacja", "albanian": "darka" }},
    { "german": "probieren", "translations": { "english": "to try, to taste", "ukrainian": "пробувати, куштувати", "polish": "próbować, smakować", "albanian": "të provoj" }},
    { "german": "bezahlen", "translations": { "english": "to pay", "ukrainian": "платити", "polish": "płacić", "albanian": "të paguaj" }},
    { "german": "mögen", "translations": { "english": "to like", "ukrainian": "любити, подобатися", "polish": "lubić", "albanian": "të pëlqej" }},
    { "german": "möchten", "translations": { "english": "would like", "ukrainian": "хотів би", "polish": "chcieć (grzecznie)", "albanian": "dëshiroj" }},
    { "german": "schmecken", "translations": { "english": "to taste (good/bad)", "ukrainian": "смакувати", "polish": "smakować", "albanian": "të shijoj" }},
    { "german": "das Fleisch", "translations": { "english": "meat", "ukrainian": "м'ясо", "polish": "mięso", "albanian": "mishi" }},
    { "german": "der Fisch", "translations": { "english": "fish", "ukrainian": "риба", "polish": "ryba", "albanian": "peshku" }},
    { "german": "das Obst", "translations": { "english": "fruit", "ukrainian": "фрукти", "polish": "owoce", "albanian": "fruta" }},
    { "german": "das Gemüse", "translations": { "english": "vegetables", "ukrainian": "овочі", "polish": "warzywa", "albanian": "perime" }},
    { "german": "der Käse", "translations": { "english": "cheese", "ukrainian": "сир", "polish": "ser", "albanian": "djathi" }},
    { "german": "der Salat", "translations": { "english": "salad", "ukrainian": "салат", "polish": "sałatka", "albanian": "sallata" }},
    { "german": "die Wurst", "translations": { "english": "sausage", "ukrainian": "ковбаса", "polish": "kiełbasa", "albanian": "salsiçe" }},
    { "german": "das Brot", "translations": { "english": "bread", "ukrainian": "хліб", "polish": "chleb", "albanian": "buka" }},
    { "german": "das Brötchen", "translations": { "english": "bread roll", "ukrainian": "булочка", "polish": "bułka", "albanian": "panine" }},
    { "german": "der Kuchen", "translations": { "english": "cake", "ukrainian": "торт, пиріг", "polish": "ciasto", "albanian": "kek" }},
    { "german": "die Butter", "translations": { "english": "butter", "ukrainian": "масло", "polish": "masło", "albanian": "gjalpi" }},
    { "german": "der Joghurt", "translations": { "english": "yogurt", "ukrainian": "йогурт", "polish": "jogurt", "albanian": "kosi" }},
    { "german": "die Milch", "translations": { "english": "milk", "ukrainian": "молоко", "polish": "mleko", "albanian": "qumështi" }},
    { "german": "das Ei", "translations": { "english": "egg", "ukrainian": "яйце", "polish": "jajko", "albanian": "veza" }},
    { "german": "der Reis", "translations": { "english": "rice", "ukrainian": "рис", "polish": "ryż", "albanian": "orizi" }},
    { "german": "die Nudel", "translations": { "english": "noodle, pasta", "ukrainian": "локшина, макарони", "polish": "makaron", "albanian": "makarona" }},
    { "german": "die Kartoffel", "translations": { "english": "potato", "ukrainian": "картопля", "polish": "ziemniak", "albanian": "patatja" }},
    { "german": "die Tomate", "translations": { "english": "tomato", "ukrainian": "помідор", "polish": "pomidor", "albanian": "domatja" }},
    { "german": "die Zwiebel", "translations": { "english": "onion", "ukrainian": "цибуля", "polish": "cebula", "albanian": "qepa" }},
    { "german": "der Apfel", "translations": { "english": "apple", "ukrainian": "яблуко", "polish": "jabłko", "albanian": "molla" }},
    { "german": "die Banane", "translations": { "english": "banana", "ukrainian": "банан", "polish": "banan", "albanian": "banania" }},
    { "german": "die Orange", "translations": { "english": "orange", "ukrainian": "апельсин", "polish": "pomarańcza", "albanian": "portokalli" }},
    { "german": "das Wasser", "translations": { "english": "water", "ukrainian": "вода", "polish": "woda", "albanian": "uji" }},
    { "german": "der Saft", "translations": { "english": "juice", "ukrainian": "сік", "polish": "sok", "albanian": "lëngu" }},
    { "german": "der Tee", "translations": { "english": "tea", "ukrainian": "чай", "polish": "herbata", "albanian": "çaji" }},
    { "german": "der Wein", "translations": { "english": "wine", "ukrainian": "вино", "polish": "wino", "albanian": "vera" }},
    { "german": "das Bier", "translations": { "english": "beer", "ukrainian": "пиво", "polish": "piwo", "albanian": "birra" }},
    { "german": "das Hackfleisch", "translations": { "english": "minced meat", "ukrainian": "фарш", "polish": "mięso mielone", "albanian": "mish i grirë" }},
    { "german": "der Schinken", "translations": { "english": "ham", "ukrainian": "шинка", "polish": "szynka", "albanian": "proshuta" }},
    { "german": "der Kiosk", "translations": { "english": "kiosk", "ukrainian": "кіоск", "polish": "kiosk", "albanian": "kjoskë" }},
    { "german": "die Bäckerei", "translations": { "english": "bakery", "ukrainian": "пекарня", "polish": "piekarnia", "albanian": "furrë buke" }},
    { "german": "die Metzgerei", "translations": { "english": "butcher shop", "ukrainian": "м'ясний магазин", "polish": "sklep mięsny", "albanian": "dyqan mishi" }},
    { "german": "die Tankstelle", "translations": { "english": "gas station", "ukrainian": "заправка", "polish": "stacja benzynowa", "albanian": "pikë karburanti" }},
    { "german": "die Packung", "translations": { "english": "pack, package", "ukrainian": "упаковка", "polish": "opakowanie", "albanian": "paketë" }},
    { "german": "die Dose", "translations": { "english": "can, tin", "ukrainian": "консервна банка", "polish": "puszka", "albanian": "kuti" }},
    { "german": "die Tüte", "translations": { "english": "bag (plastic/paper)", "ukrainian": "пакет", "polish": "torba, torebka", "albanian": "qese" }},
    { "german": "das Glas", "translations": { "english": "glass, jar", "ukrainian": "склянка, банка", "polish": "szklanka, słoik", "albanian": "gotë, kavanoz" }},
    { "german": "das Stück", "translations": { "english": "piece", "ukrainian": "шматок, штука", "polish": "kawałek, sztuka", "albanian": "copë" }},
    { "german": "das Kilo", "translations": { "english": "kilo", "ukrainian": "кілограм", "polish": "kilogram", "albanian": "kilogram" }},
    { "german": "das Pfund", "translations": { "english": "pound (500g)", "ukrainian": "фунт (500г)", "polish": "funt (500g)", "albanian": "paund (500g)" }},
    { "german": "der Liter", "translations": { "english": "liter", "ukrainian": "літр", "polish": "litr", "albanian": "litër" }},
    { "german": "oft", "translations": { "english": "often", "ukrainian": "часто", "polish": "często", "albanian": "shpesh" }},
    { "german": "selten", "translations": { "english": "rarely", "ukrainian": "рідко", "polish": "rzadko", "albanian": "rrallë" }},
    { "german": "manchmal", "translations": { "english": "sometimes", "ukrainian": "іноді", "polish": "czasami", "albanian": "nganjëherë" }},
    { "german": "passend", "translations": { "english": "fitting, exact (money)", "ukrainian": "підходящий, точно (про гроші)", "polish": "pasujący, dokładnie (o pieniądzach)", "albanian": "i përshtatshëm, fiks (para)" }}
  ],
  "7": [
    { "german": "der Koch", "translations": { "english": "cook (male)", "ukrainian": "кухар", "polish": "kucharz", "albanian": "kuzhinier" }},
    { "german": "die Köchin", "translations": { "english": "cook (female)", "ukrainian": "кухарка", "polish": "kucharka", "albanian": "kuzhiniere" }},
    { "german": "der Taxifahrer", "translations": { "english": "taxi driver (male)", "ukrainian": "таксист", "polish": "taksówkarz", "albanian": "shofer taksie" }},
    { "german": "die Taxifahrerin", "translations": { "english": "taxi driver (female)", "ukrainian": "таксистка", "polish": "taksówkarka", "albanian": "shofer taksie (femër)" }},
    { "german": "der Sekretär", "translations": { "english": "secretary (male)", "ukrainian": "секретар", "polish": "sekretarz", "albanian": "sekretar" }},
    { "german": "die Sekretärin", "translations": { "english": "secretary (female)", "ukrainian": "секретарка", "polish": "sekretarka", "albanian": "sekretare" }},
    { "german": "der Bankkaufmann", "translations": { "english": "bank clerk (male)", "ukrainian": "банківський службовець", "polish": "urzędnik bankowy", "albanian": "nëpunës banke" }},
    { "german": "die Bankkauffrau", "translations": { "english": "bank clerk (female)", "ukrainian": "банківська службовиця", "polish": "urzędniczka bankowa", "albanian": "nëpunëse banke" }},
    { "german": "der Briefträger", "translations": { "english": "mail carrier (male)", "ukrainian": "листоноша", "polish": "listonosz", "albanian": "postier" }},
    { "german": "die Briefträgerin", "translations": { "english": "mail carrier (female)", "ukrainian": "листоноша (жін.)", "polish": "listonoszka", "albanian": "postiere" }},
    { "german": "der Krankenpfleger", "translations": { "english": "nurse (male)", "ukrainian": "медбрат", "polish": "pielęgniarz", "albanian": "infermier" }},
    { "german": "die Krankenschwester", "translations": { "english": "nurse (female)", "ukrainian": "медсестра", "polish": "pielęgniarka", "albanian": "infermiere" }},
    { "german": "die Reinigungskraft", "translations": { "english": "cleaner", "ukrainian": "прибиральник/ця", "polish": "sprzątacz/ka", "albanian": "pastrues/e" }},
    { "german": "der Hausmeister", "translations": { "english": "janitor, caretaker (male)", "ukrainian": "двірник, завгосп", "polish": "dozorca", "albanian": "kujdestar" }},
    { "german": "die Hausmeisterin", "translations": { "english": "janitor, caretaker (female)", "ukrainian": "двірник (жін.)", "polish": "dozorczyni", "albanian": "kujdestare" }},
    { "german": "der Kellner", "translations": { "english": "waiter", "ukrainian": "офіціант", "polish": "kelner", "albanian": "kamerier" }},
    { "german": "der Buchhalter", "translations": { "english": "accountant (male)", "ukrainian": "бухгалтер", "polish": "księgowy", "albanian": "kontabilist" }},
    { "german": "der Chef", "translations": { "english": "boss (male)", "ukrainian": "шеф, начальник", "polish": "szef", "albanian": "shef" }},
    { "german": "der Arbeitsplatz", "translations": { "english": "workplace", "ukrainian": "робоче місце", "polish": "miejsce pracy", "albanian": "vendi i punës" }},
    { "german": "die Arbeitszeit", "translations": { "english": "working hours", "ukrainian": "робочий час", "polish": "czas pracy", "albanian": "orari i punës" }},
    { "german": "der Schichtdienst", "translations": { "english": "shift work", "ukrainian": "робота по змінах", "polish": "praca zmianowa", "albanian": "punë me turne" }},
    { "german": "der Kontakt", "translations": { "english": "contact", "ukrainian": "контакт", "polish": "kontakt", "albanian": "kontakt" }},
    { "german": "das Geld", "translations": { "english": "money", "ukrainian": "гроші", "polish": "pieniądze", "albanian": "para" }},
    { "german": "verdienen", "translations": { "english": "to earn", "ukrainian": "заробляти", "polish": "zarabiać", "albanian": "të fitoj" }},
    { "german": "wechseln", "translations": { "english": "to change, to exchange", "ukrainian": "міняти, обмінювати", "polish": "zmieniać, wymieniać", "albanian": "të ndërroj, të këmbej" }},
    { "german": "das Internet", "translations": { "english": "internet", "ukrainian": "інтернет", "polish": "internet", "albanian": "internet" }},
    { "german": "der Computer", "translations": { "english": "computer", "ukrainian": "комп'ютер", "polish": "komputer", "albanian": "kompjuter" }},
    { "german": "das Büro", "translations": { "english": "office", "ukrainian": "офіс", "polish": "biuro", "albanian": "zyrë" }},
    { "german": "die Baustelle", "translations": { "english": "construction site", "ukrainian": "будівельний майданчик", "polish": "plac budowy", "albanian": "kantier ndërtimi" }},
    { "german": "das Team", "translations": { "english": "team", "ukrainian": "команда", "polish": "zespół", "albanian": "ekip" }},
    { "german": "der Terminplan", "translations": { "english": "schedule", "ukrainian": "розклад", "polish": "harmonogram", "albanian": "orar" }},
    { "german": "die Operation", "translations": { "english": "operation, surgery", "ukrainian": "операція", "polish": "operacja", "albanian": "operacion" }},
    { "german": "vorbereiten", "translations": { "english": "to prepare", "ukrainian": "готувати", "polish": "przygotowywać", "albanian": "të përgatis" }},
    { "german": "unterstützen", "translations": { "english": "to support", "ukrainian": "підтримувати", "polish": "wspierać", "albanian": "të mbështes" }},
    { "german": "beraten", "translations": { "english": "to advise", "ukrainian": "консультувати", "polish": "doradzać", "albanian": "të këshilloj" }},
    { "german": "kontrollieren", "translations": { "english": "to control, to check", "ukrainian": "контролювати, перевіряти", "polish": "kontrolować, sprawdzać", "albanian": "të kontrolloj" }},
    { "german": "unterschreiben", "translations": { "english": "to sign", "ukrainian": "підписувати", "polish": "podpisywać", "albanian": "të nënshkruaj" }},
    { "german": "bearbeiten", "translations": { "english": "to process, to edit", "ukrainian": "опрацьовувати", "polish": "opracowywać", "albanian": "të përpunoj" }},
    { "german": "anstrengend", "translations": { "english": "strenuous, tiring", "ukrainian": "виснажливий", "polish": "męczący", "albanian": "i lodhshëm" }},
    { "german": "alleine", "translations": { "english": "alone", "ukrainian": "один, самотньо", "polish": "sam, samotnie", "albanian": "vetëm" }},
    { "german": "können", "translations": { "english": "can, to be able to", "ukrainian": "могти, вміти", "polish": "móc, umieć", "albanian": "mundem" }},
    { "german": "müssen", "translations": { "english": "must, to have to", "ukrainian": "мусити", "polish": "musieć", "albanian": "duhet" }},
    { "german": "wollen", "translations": { "english": "to want to", "ukrainian": "хотіти", "polish": "chcieć", "albanian": "dua" }},
    { "german": "das Modalverb", "translations": { "english": "modal verb", "ukrainian": "модальне дієслово", "polish": "czasownik modalny", "albanian": "folje modale" }},
    { "german": "der Geldautomat", "translations": { "english": "ATM", "ukrainian": "банкомат", "polish": "bankomat", "albanian": "bankomat" }},
    { "german": "die Kontonummer", "translations": { "english": "account number", "ukrainian": "номер рахунку", "polish": "numer konta", "albanian": "numri i llogarisë" }},
    { "german": "die EC-Karte", "translations": { "english": "debit card", "ukrainian": "дебетова картка", "polish": "karta debetowa", "albanian": "kartë debiti" }},
    { "german": "die IBAN", "translations": { "english": "IBAN", "ukrainian": "IBAN", "polish": "IBAN", "albanian": "IBAN" }},
    { "german": "der Kontoauszug", "translations": { "english": "bank statement", "ukrainian": "виписка з рахунку", "polish": "wyciąg z konta", "albanian": "pasqyrë llogarie" }},
    { "german": "das Überweisungsformular", "translations": { "english": "transfer form", "ukrainian": "бланк переказу", "polish": "formularz przelewu", "albanian": "formular transferi" }},
    { "german": "überweisen", "translations": { "english": "to transfer (money)", "ukrainian": "переказувати (гроші)", "polish": "przelewać (pieniądze)", "albanian": "të transferoj (para)" }},
    { "german": "die Gebühr", "translations": { "english": "fee", "ukrainian": "комісія, збір", "polish": "opłata", "albanian": "tarifë" }}
  ]
});

const ALL_SECTIONS = Object.keys(allVocabulary).map(Number);

// THIS IS THE COMPLETED AND CORRECTED learningContent VARIABLE
const learningContent: LearningContent[] = [
    {
        id: 1, type: 'passage', title: 'Mein Tag', level: 'A1', audioSrc: passage1Audio,
        fullText: 'Ich heiße Anna und ich bin 25 Jahre alt. Ich stehe jeden Tag um 7 Uhr auf. Dann trinke ich Kaffee und esse Brot mit Marmelade. Um 8 Uhr fahre ich zur Arbeit. Ich arbeite in einem Büro von 9 bis 17 Uhr. Am Abend koche ich das Abendessen und sehe fern. Um 22 Uhr gehe ich schlafen.',
        parts: [
            'Ich heiße Anna und ich bin 25 Jahre alt. Ich ', { answer: 'stehe', size: 10 }, ' jeden Tag um 7 Uhr auf. Dann trinke ich ', { answer: 'Kaffee', size: 10 },
            ' und esse Brot mit Marmelade. Um 8 Uhr fahre ich zur Arbeit. Ich arbeite in einem ', { answer: 'Büro', size: 8 }, ' von 9 bis 17 Uhr. Am Abend ',
            { answer: 'koche', size: 10 }, ' ich das Abendessen und sehe fern. Um 22 Uhr gehe ich schlafen.'
        ],
        vocabulary: [
            { german: "aufstehen", translations: { english: "to get up", ukrainian: "вставати", polish: "wstawać", albanian: "të çohem", german: "aufstehen" }},
            { german: "jeden Tag", translations: { english: "every day", ukrainian: "кожного дня", polish: "codziennie", albanian: "çdo ditë", german: "jeden Tag" }},
            { german: "zur Arbeit fahren", translations: { english: "to go to work", ukrainian: "їхати на роботу", polish: "jechać do pracy", albanian: "të shkoj në punë", german: "zur Arbeit fahren" }},
            { german: "das Büro", translations: { english: "the office", ukrainian: "офіс", polish: "biuro", albanian: "zyra", german: "das Büro" }},
            { german: "das Abendessen", translations: { english: "the dinner", ukrainian: "вечеря", polish: "kolacja", albanian: "darka", german: "das Abendessen" }},
            { german: "kochen", translations: { english: "to cook", ukrainian: "готувати", polish: "gotować", albanian: "të gatuaj", german: "kochen" }},
            { german: "fernsehen", translations: { english: "to watch TV", ukrainian: "дивитися телевізор", polish: "oglądać telewizję", albanian: "të shoh TV", german: "fernsehen" }},
            { german: "schlafen gehen", translations: { english: "to go to sleep", ukrainian: "йти спати", polish: "iść spać", albanian: "të shkoj të fle", german: "schlafen gehen" }},
        ]
    },
    {
        id: 2, type: 'passage',title: 'Meine Familie', level: 'A1', audioSrc: passage2Audio,
        fullText: 'Das ist meine Familie. Mein Vater heißt Peter und ist 50 Jahre alt. Er ist Lehrer. Meine Mutter heißt Maria und ist 48 Jahre alt. Sie arbeitet im Krankenhaus. Ich habe einen Bruder. Er heißt Tom und ist 20 Jahre alt. Er studiert an der Universität. Wir wohnen in einem Haus in Berlin. Wir haben auch einen Hund. Er heißt Max.',
        parts: [
            'Das ist meine Familie. Mein Vater heißt Peter und ist 50 Jahre alt. Er ist ', { answer: 'Lehrer', size: 10 }, '. Meine Mutter heißt Maria und ist 48 Jahre alt. Sie arbeitet im ',
            { answer: 'Krankenhaus', size: 15 }, '. Ich habe einen ', { answer: 'Bruder', size: 10 }, '. Er heißt Tom und ist 20 Jahre alt. Er studiert an der Universität. Wir ',
            { answer: 'wohnen', size: 10 }, ' in einem Haus in Berlin. Wir haben auch einen Hund. Er heißt Max.'
        ],
        vocabulary: [
            { german: "die Familie", translations: { english: "the family", ukrainian: "сім'я", polish: "rodzina", albanian: "familja", german: "die Familie" }},
            { german: "der Lehrer", translations: { english: "the teacher (m)", ukrainian: "вчитель", polish: "nauczyciel", albanian: "mësuesi", german: "der Lehrer" }},
            { german: "das Krankenhaus", translations: { english: "the hospital", ukrainian: "лікарня", polish: "szpital", albanian: "spitali", german: "das Krankenhaus" }},
            { german: "der Bruder", translations: { english: "the brother", ukrainian: "брат", polish: "brat", albanian: "vëllai", german: "der Bruder" }},
            { german: "studieren", translations: { english: "to study (at university)", ukrainian: "навчатися (в університеті)", polish: "studiować", albanian: "të studiosh", german: "studieren" }},
            { german: "die Universität", translations: { english: "the university", ukrainian: "університет", polish: "uniwersytet", albanian: "universiteti", german: "die Universität" }},
            { german: "wohnen", translations: { english: "to live/reside", ukrainian: "жити/проживати", polish: "mieszkać", albanian: "të banosh", german: "wohnen" }},
            { german: "der Hund", translations: { english: "the dog", ukrainian: "собака", polish: "pies", albanian: "qeni", german: "der Hund" }},
        ]
    },
    {
        id: 3, type: 'passage',title: 'Im Supermarkt', level: 'A1', audioSrc: passage3Audio,
        fullText: 'Heute gehe ich zum Supermarkt. Ich kaufe Brot, Milch und Äpfel. Das Brot kostet 2 Euro. Die Milch kostet 1,50 Euro. Die Äpfel kosten 3 Euro pro Kilo. Ich nehme auch Käse und Butter. An der Kasse zahle ich mit Karte. Die Verkäuferin ist sehr freundlich. Sie sagt "Haben Sie einen schönen Tag!"',
        parts: [
            'Heute gehe ich zum Supermarkt. Ich ', { answer: 'kaufe', size: 10 }, ' Brot, Milch und Äpfel. Das Brot kostet 2 Euro. Die Milch ',
            { answer: 'kostet', size: 10 }, ' 1,50 Euro. Die Äpfel kosten 3 Euro pro Kilo. Ich nehme auch Käse und Butter. An der Kasse zahle ich mit ',
            { answer: 'Karte', size: 8 }, '. Die Verkäuferin ist sehr ', { answer: 'freundlich', size: 14 }, '. Sie sagt "Haben Sie einen schönen Tag!"'
        ],
        vocabulary: [
            { german: "der Supermarkt", translations: { english: "the supermarket", ukrainian: "супермаркет", polish: "supermarket", albanian: "supermarketi", german: "der Supermarkt" }},
            { german: "kaufen", translations: { english: "to buy", ukrainian: "купувати", polish: "kupować", albanian: "të blej", german: "kaufen" }},
            { german: "kosten", translations: { english: "to cost", ukrainian: "коштувати", polish: "kosztować", albanian: "të kushtoj", german: "kosten" }},
            { german: "pro Kilo", translations: { english: "per kilo", ukrainian: "за кілограм", polish: "za kilogram", albanian: "për kilogram", german: "pro Kilo" }},
            { german: "die Kasse", translations: { english: "the checkout / cashier", ukrainian: "каса", polish: "kasa", albanian: "arka", german: "die Kasse" }},
            { german: "mit Karte zahlen", translations: { english: "to pay by card", ukrainian: "платити карткою", polish: "płacić kartą", albanian: "të paguaj me kartë", german: "mit Karte zahlen" }},
            { german: "die Verkäuferin", translations: { english: "the saleswoman", ukrainian: "продавщиця", polish: "sprzedawczyni", albanian: "shitësja", german: "die Verkäuferin" }},
            { german: "freundlich", translations: { english: "friendly", ukrainian: "дружелюбний", polish: "przyjazny", albanian: "miqësor", german: "freundlich" }},
        ]
    },
    {
        id: 4, type: 'passage',title: 'Das Wetter', level: 'A1', audioSrc: passage4Audio,
        fullText: 'Heute ist Montag. Das Wetter ist schön. Die Sonne scheint und es ist warm. Es sind 22 Grad. Ich trage ein T-Shirt und eine Jeans. Morgen wird es regnen. Es wird kalt und windig. Ich muss dann eine Jacke anziehen. Am Wochenende soll es wieder sonnig werden. Dann gehe ich in den Park spazieren.',
        parts: [
            'Heute ist Montag. Das Wetter ist ', { answer: 'schön', size: 8 }, '. Die Sonne scheint und es ist ', { answer: 'warm', size: 8 },
            '. Es sind 22 Grad. Ich trage ein T-Shirt und eine Jeans. Morgen wird es ', { answer: 'regnen', size: 10 },
            '. Es wird kalt und windig. Ich muss dann eine Jacke anziehen. Am Wochenende soll es wieder sonnig werden. Dann gehe ich in den Park ', { answer: 'spazieren', size: 12 }, '.'
        ],
        vocabulary: [
            { german: "das Wetter", translations: { english: "the weather", ukrainian: "погода", polish: "pogoda", albanian: "moti", german: "das Wetter" }},
            { german: "Die Sonne scheint", translations: { english: "The sun is shining", ukrainian: "Сонце світить", polish: "Słońce świeci", albanian: "Dielli shkëlqen", german: "Die Sonne scheint" }},
            { german: "warm / kalt", translations: { english: "warm / cold", ukrainian: "тепло / холодно", polish: "ciepło / zimno", albanian: "ngrohtë / ftohtë", german: "warm / kalt" }},
            { german: "das Grad", translations: { english: "the degree", ukrainian: "градус", polish: "stopień", albanian: "grada", german: "das Grad" }},
            { german: "tragen", translations: { english: "to wear", ukrainian: "носити (одяг)", polish: "nosić", albanian: "të vesh", german: "tragen" }},
            { german: "regnen", translations: { english: "to rain", ukrainian: "дощити", polish: "padać (deszcz)", albanian: "të bie shi", german: "regnen" }},
            { german: "windig", translations: { english: "windy", ukrainian: "вітряно", polish: "wietrznie", albanian: "me erë", german: "windig" }},
            { german: "spazieren gehen", translations: { english: "to go for a walk", ukrainian: "йти на прогулянку", polish: "iść na spacer", albanian: "të shëtis", german: "spazieren gehen" }},
        ]
    },
    {
        id: 5,type: 'passage', title: 'Mein Hobby', level: 'A1', audioSrc: passage5Audio,
        fullText: 'Mein Hobby ist Lesen. Ich lese gerne Bücher. Jeden Abend lese ich eine Stunde. Ich mag Krimis und Romane. Meine Lieblingsbuchautorin ist Agatha Christie. Ich gehe oft zur Bibliothek. Dort kann ich kostenlos Bücher leihen. Am Wochenende besuche ich auch Buchläden. Lesen macht mir viel Spaß.',
        parts: [
            'Mein Hobby ist ', { answer: 'Lesen', size: 8 }, '. Ich lese gerne Bücher. Jeden Abend lese ich eine ', { answer: 'Stunde', size: 10 },
            '. Ich mag Krimis und Romane. Meine Lieblingsbuchautorin ist Agatha Christie. Ich gehe oft zur ', { answer: 'Bibliothek', size: 14 },
            '. Dort kann ich kostenlos Bücher leihen. Am Wochenende besuche ich auch Buchläden. Lesen macht mir viel ', { answer: 'Spaß', size: 8 }, '.'
        ],
        vocabulary: [
            { german: "das Hobby", translations: { english: "the hobby", ukrainian: "хобі", polish: "hobby", albanian: "hobi", german: "das Hobby" }},
            { german: "lesen", translations: { english: "to read", ukrainian: "читати", polish: "czytać", albanian: "të lexoj", german: "lesen" }},
            { german: "die Stunde", translations: { english: "the hour", ukrainian: "година", polish: "godzina", albanian: "ora", german: "die Stunde" }},
            { german: "der Krimi / der Roman", translations: { english: "the crime novel / the novel", ukrainian: "детектив / роман", polish: "kryminał / powieść", albanian: "romani kriminal / romani", german: "der Krimi / der Roman" }},
            { german: "die Bibliothek", translations: { english: "the library", ukrainian: "бібліотека", polish: "biblioteka", albanian: "biblioteka", german: "die Bibliothek" }},
            { german: "kostenlos", translations: { english: "free of charge", ukrainian: "безкоштовно", polish: "darmowy", albanian: "falas", german: "kostenlos" }},
            { german: "Bücher leihen", translations: { english: "to borrow books", ukrainian: "позичати книги", polish: "wypożyczać książki", albanian: "të marr hua libra", german: "Bücher leihen" }},
            { german: "Spaß machen", translations: { english: "to be fun", ukrainian: "приносити задоволення", polish: "sprawiać przyjemność", albanian: "të bëj qejf", german: "Spaß machen" }},
        ]
    },
    {
        id: 6, type: 'dialogue', title: 'Restaurant Reservation', level: 'A1', audioSrc: dialogue1Audio,
        fullText: `Kellner: Guten Abend, Restaurant "Zur Goldenen Krone", hier spricht Thomas Weber. Kundin: Guten Abend, hier ist Sandra Klein. Ich möchte gerne einen Tisch für morgen Abend reservieren. Kellner: Sehr gerne, Frau Klein. Für wie viele Personen denn? Kundin: Für vier Personen, bitte. Wäre 19:30 Uhr möglich? Kellner: Moment, ich schaue mal... Ja, das passt perfekt. Haben Sie besondere Wünsche? Kundin: Einen ruhigen Tisch, wenn möglich. Und gibt es auch vegetarische Gerichte? Kellner: Selbstverständlich. Wir haben eine große Auswahl an vegetarischen Speisen. Ich reserviere Ihnen Tisch Nummer 12, das ist unser ruhigster Platz. Kundin: Wunderbar! Kann ich Ihnen noch meine Telefonnummer geben? Kellner: Ja, bitte. Kundin: 0177 456 78 90. Kellner: Perfekt. Also morgen um 19:30 Uhr für vier Personen, Tisch 12. Vielen Dank für Ihre Reservierung, Frau Klein!`,
        parts: [
            { speaker: 'Kellner' }, 'Guten Abend, Restaurant "Zur Goldenen Krone", hier spricht Thomas Weber.',
            { speaker: 'Kundin' }, 'Guten Abend, hier ist Sandra Klein. Ich möchte gerne einen Tisch für morgen Abend ', { answer: 'reservieren', size: 12 }, '.',
            { speaker: 'Kellner' }, 'Sehr gerne, Frau Klein. Für wie viele ', { answer: 'Personen', size: 9 }, ' denn?',
            { speaker: 'Kundin' }, 'Für vier Personen, bitte. Wäre 19:30 Uhr möglich?',
            { speaker: 'Kellner' }, 'Moment, ich schaue mal... Ja, das passt perfekt. Haben Sie besondere ', { answer: 'Wünsche', size: 8 }, '?',
            { speaker: 'Kundin' }, 'Einen ruhigen Tisch, wenn möglich. Und gibt es auch vegetarische Gerichte?',
            { speaker: 'Kellner' }, 'Selbstverständlich. Ich reserviere Ihnen Tisch Nummer ', { answer: '12', size: 3 }, ', das ist unser ruhigster Platz.',
            { speaker: 'Kundin' }, 'Wunderbar! Kann ich Ihnen noch meine ', { answer: 'Telefonnummer', size: 14 }, ' geben?',
            { speaker: 'Kellner' }, 'Ja, bitte.',
            { speaker: 'Kundin' }, '0177 456 78 90.',
            { speaker: 'Kellner' }, 'Perfekt. Also morgen um 19:30 Uhr für vier Personen, Tisch 12. Vielen Dank für Ihre Reservierung, Frau Klein!',
        ],
        vocabulary: [
            { german: "reservieren", translations: { english: "to reserve", ukrainian: "резервувати", polish: "rezerwować", albanian: "të rezervoj", german: "reservieren" }},
            { german: "der Tisch", translations: { english: "the table", ukrainian: "стіл", polish: "stół", albanian: "tavolina", german: "der Tisch" }},
            { german: "die Personen", translations: { english: "the people / persons", ukrainian: "особи", polish: "osoby", albanian: "personat", german: "die Personen" }},
            { german: "möglich", translations: { english: "possible", ukrainian: "можливо", polish: "możliwy", albanian: "e mundur", german: "möglich" }},
            { german: "besondere Wünsche", translations: { english: "special wishes", ukrainian: "особливі побажання", polish: "specjalne życzenia", albanian: "dëshira të veçanta", german: "besondere Wünsche" }},
            { german: "ruhig", translations: { english: "quiet", ukrainian: "тихий", polish: "cichy", albanian: "i qetë", german: "ruhig" }},
            { german: "vegetarische Gerichte", translations: { english: "vegetarian dishes", ukrainian: "вегетаріанські страви", polish: "dania wegetariańskie", albanian: "pjatat vegjetariane", german: "vegetarische Gerichte" }},
            { german: "selbstverständlich", translations: { english: "of course / naturally", ukrainian: "звичайно", polish: "oczywiście", albanian: "sigurisht", german: "selbstverständlich" }},
        ]
    },
    {
        id: 7, type: 'dialogue', title: "Doctor's Appointment", level: 'A1', audioSrc: dialogue2Audio,
        fullText: `Sprechstundenhilfe: Praxis Dr. Hoffmann, guten Tag, hier ist Petra Schneider. Patient: Guten Tag, hier ist Michael Braun. Ich bräuchte dringend einen Termin. Sprechstundenhilfe: Was für Beschwerden haben Sie denn, Herr Braun? Patient: Ich habe seit drei Tagen starke Kopfschmerzen und Fieber. Sprechstundenhilfe: Das klingt nicht gut. Moment, ich schaue... Können Sie heute um 15:30 Uhr kommen? Patient: Ja, das geht. Soll ich etwas mitbringen? Sprechstundenhilfe: Ihre Versichertenkarte und falls Sie Medikamente nehmen, bringen Sie die Liste mit. Patient: Alles klar. Wie ist noch mal die Adresse? Sprechstundenhilfe: Hauptstraße 45, zweiter Stock. Der Fahrstuhl ist rechts neben dem Eingang. Patient: Vielen Dank! Bis heute Nachmittag dann. Sprechstundenhilfe: Gerne, Herr Braun. Gute Besserung und bis später!`,
        parts: [
            { speaker: 'Sprechstundenhilfe' }, 'Praxis Dr. Hoffmann, guten Tag, hier ist Petra Schneider.',
            { speaker: 'Patient' }, 'Guten Tag, hier ist Michael Braun. Ich bräuchte dringend einen ', { answer: 'Termin', size: 8}, '.',
            { speaker: 'Sprechstundenhilfe' }, 'Was für ', { answer: 'Beschwerden', size: 12 }, ' haben Sie denn, Herr Braun?',
            { speaker: 'Patient' }, 'Ich habe seit drei Tagen starke Kopfschmerzen und Fieber.',
            { speaker: 'Sprechstundenhilfe' }, 'Das klingt nicht gut. Moment, ich schaue... Können Sie heute um ', { answer: '15:30', size: 6 }, ' Uhr kommen?',
            { speaker: 'Patient' }, 'Ja, das geht. Soll ich etwas ', { answer: 'mitbringen', size: 11 }, '?',
            { speaker: 'Sprechstundenhilfe' }, 'Ihre ', { answer: 'Versichertenkarte', size: 18 }, ' und falls Sie Medikamente nehmen, bringen Sie die Liste mit.',
            { speaker: 'Patient' }, 'Alles klar. Wie ist noch mal die ', { answer: 'Adresse', size: 9 }, '?',
            { speaker: 'Sprechstundenhilfe' }, 'Hauptstraße 45, zweiter Stock. Der Fahrstuhl ist rechts neben dem Eingang.',
            { speaker: 'Patient' }, 'Vielen Dank! Bis heute Nachmittag dann.',
            { speaker: 'Sprechstundenhilfe' }, 'Gerne, Herr Braun. Gute Besserung und bis später!',
        ],
        vocabulary: [
            { german: "dringend", translations: { english: "urgent", ukrainian: "терміново", polish: "pilny", albanian: "urgjente", german: "dringend" }},
            { german: "der Termin", translations: { english: "the appointment", ukrainian: "запис / зустріч", polish: "termin", albanian: "takimi", german: "der Termin" }},
            { german: "die Beschwerden", translations: { english: "the symptoms / complaints", ukrainian: "скарги", polish: "dolegliwości", albanian: "ankesat", german: "die Beschwerden" }},
            { german: "die Kopfschmerzen", translations: { english: "the headache", ukrainian: "головний біль", polish: "bóle głowy", albanian: "dhimbja e kokës", german: "die Kopfschmerzen" }},
            { german: "das Fieber", translations: { english: "the fever", ukrainian: "температура / лихоманка", polish: "gorączka", albanian: "temperatura", german: "das Fieber" }},
            { german: "mitbringen", translations: { english: "to bring with", ukrainian: "принести з собою", polish: "przynieść ze sobą", albanian: "të sjell me vete", german: "mitbringen" }},
            { german: "die Versichertenkarte", translations: { english: "the health insurance card", ukrainian: "страхова картка", polish: "karta ubezpieczenia", albanian: "karta e sigurimit", german: "die Versichertenkarte" }},
            { german: "Gute Besserung", translations: { english: "Get well soon", ukrainian: "Швидкого одужання", polish: "Szybkiego powrotu do zdrowia", albanian: "Shërim të shpejtë", german: "Gute Besserung" }},
        ]
    },
    {
        id: 8, type: 'dialogue', title: 'Job Interview Scheduling', level: 'A2', audioSrc: dialogue3Audio,
        fullText: `Personalerin: Firma Schmidt & Partner, Personalabteilung, hier ist Julia Becker. Bewerber: Guten Tag, Frau Becker. Hier ist David Müller. Sie hatten mir eine E-Mail wegen eines Vorstellungsgesprächs geschickt. Personalerin: Ach ja, Herr Müller! Schön, dass Sie anrufen. Wann würde es Ihnen denn passen? Bewerber: Ich bin nächste Woche ziemlich flexibel. Dienstag oder Mittwoch wäre ideal. Personalerin: Dienstag um 10:00 Uhr hätten wir einen Termin frei. Würde das gehen? Bewerber: Ja, das passt perfekt. Wie lange soll ich einplanen? Personalerin: Rechnen Sie mit etwa einer Stunde. Sie sprechen erst mit mir, dann mit dem Abteilungsleiter. Bewerber: Verstehe. Soll ich besondere Unterlagen mitbringen? Personalerin: Ihre Zeugnisse im Original und eine Kopie Ihres Lebenslaufs. Ach ja, und ein Foto für unsere Unterlagen. Bewerber: Alles notiert. Wie finde ich Sie denn? Personalerin: Melden Sie sich am Empfang, dritter Stock, Zimmer 312. Dort wird man Sie zu mir bringen. Bewerber: Perfekt. Dann bis Dienstag, 10:00 Uhr. Vielen Dank!`,
        parts: [
            { speaker: 'Personalerin' }, 'Firma Schmidt & Partner, Personalabteilung, hier ist Julia Becker.',
            { speaker: 'Bewerber' }, 'Guten Tag, Frau Becker. Sie hatten mir eine E-Mail wegen eines ', { answer: 'Vorstellungsgesprächs', size: 20 }, ' geschickt.',
            { speaker: 'Personalerin' }, 'Ach ja, Herr Müller! Schön, dass Sie anrufen. Wann würde es Ihnen denn passen?',
            { speaker: 'Bewerber' }, 'Ich bin nächste Woche ziemlich ', { answer: 'flexibel', size: 10 }, '. Dienstag oder Mittwoch wäre ideal.',
            { speaker: 'Personalerin' }, 'Dienstag um 10:00 Uhr hätten wir einen Termin frei. Würde das gehen?',
            { speaker: 'Bewerber' }, 'Ja, das passt perfekt. Wie lange soll ich ', { answer: 'einplanen', size: 10 }, '?',
            { speaker: 'Personalerin' }, 'Rechnen Sie mit etwa einer ', { answer: 'Stunde', size: 7 }, '. Sie sprechen erst mit mir, dann mit dem Abteilungsleiter.',
            { speaker: 'Bewerber' }, 'Verstehe. Soll ich besondere ', { answer: 'Unterlagen', size: 11 }, ' mitbringen?',
            { speaker: 'Personalerin' }, 'Ihre Zeugnisse im Original und eine Kopie Ihres Lebenslaufs.',
            { speaker: 'Bewerber' }, 'Alles notiert. Wie finde ich Sie denn?',
            { speaker: 'Personalerin' }, 'Melden Sie sich am ', { answer: 'Empfang', size: 8 }, ', dritter Stock, Zimmer 312.',
            { speaker: 'Bewerber' }, 'Perfekt. Dann bis Dienstag, 10:00 Uhr. Vielen Dank!',
        ],
        vocabulary: [
            { german: "die Personalabteilung", translations: { english: "the HR department", ukrainian: "відділ кадрів", polish: "dział kadr", albanian: "departamenti i burimeve njerëzore", german: "die Personalabteilung" }},
            { german: "der Bewerber", translations: { english: "the applicant (m)", ukrainian: "кандидат", polish: "kandydat", albanian: "aplikanti", german: "der Bewerber" }},
            { german: "das Vorstellungsgespräch", translations: { english: "the job interview", ukrainian: "співбесіда", polish: "rozmowa kwalifikacyjna", albanian: "intervista e punës", german: "das Vorstellungsgespräch" }},
            { german: "flexibel", translations: { english: "flexible", ukrainian: "гнучкий", polish: "elastyczny", albanian: "fleksibël", german: "flexibel" }},
            { german: "einplanen", translations: { english: "to schedule / plan for", ukrainian: "запланувати", polish: "zaplanować", albanian: "të planifikoj", german: "einplanen" }},
            { german: "der Abteilungsleiter", translations: { english: "the department head", ukrainian: "керівник відділу", polish: "kierownik działu", albanian: "shefi i departamentit", german: "der Abteilungsleiter" }},
            { german: "die Unterlagen", translations: { english: "the documents", ukrainian: "документи", polish: "dokumenty", albanian: "dokumentet", german: "die Unterlagen" }},
            { german: "der Empfang", translations: { english: "the reception", ukrainian: "рецепція", polish: "recepcja", albanian: "recepsioni", german: "der Empfang" }},
        ]
    },
    {
        id: 9, type: 'dialogue', title: 'Apartment Viewing', level: 'A2', audioSrc: dialogue4Audio,
        fullText: `Makler: Immobilienbüro Hartmann, guten Tag, hier ist Klaus Hartmann. Interessentin: Guten Tag, hier ist Anna Fischer. Ich interessiere mich für die Drei-Zimmer-Wohnung in der Mozartstraße. Makler: Ah, die schöne Wohnung im dritten Stock! Wann könnten Sie denn zur Besichtigung kommen? Interessentin: Wäre Samstag möglich? Ich arbeite unter der Woche bis 17:00 Uhr. Makler: Samstag ist gut. Sagen wir 14:00 Uhr? Dann haben wir genug Zeit. Interessentin: Perfekt. Kann ich meinen Freund mitbringen? Makler: Natürlich! Übrigens, die Wohnung ist frisch renoviert und hat eine neue Küche. Interessentin: Das klingt interessant. Wie hoch ist denn die Miete? Makler: 850 Euro kalt, plus etwa 150 Euro Nebenkosten. Kaution sind drei Monatsmieten. Interessentin: Okay. Und wo genau treffen wir uns? Makler: Direkt vor dem Haus, Mozartstraße 23. Ich warte im blauen BMW. Interessentin: Gut, dann bis Samstag um 14:00 Uhr. Auf Wiederhören!`,
        parts: [
            { speaker: 'Makler' }, 'Immobilienbüro Hartmann, guten Tag, hier ist Klaus Hartmann.',
            { speaker: 'Interessentin' }, 'Guten Tag. Ich interessiere mich für die Drei-Zimmer-', { answer: 'Wohnung', size: 8 }, ' in der Mozartstraße.',
            { speaker: 'Makler' }, 'Ah, die schöne Wohnung! Wann könnten Sie denn zur ', { answer: 'Besichtigung', size: 13 }, ' kommen?',
            { speaker: 'Interessentin' }, 'Wäre ', { answer: 'Samstag', size: 8 }, ' möglich? Ich arbeite unter der Woche bis 17:00 Uhr.',
            { speaker: 'Makler' }, 'Samstag ist gut. Sagen wir ', { answer: '14:00', size: 6 }, ' Uhr?',
            { speaker: 'Interessentin' }, 'Perfekt. Kann ich meinen Freund mitbringen?',
            { speaker: 'Makler' }, 'Natürlich! Übrigens, die Wohnung ist frisch ', { answer: 'renoviert', size: 10 }, ' und hat eine neue Küche.',
            { speaker: 'Interessentin' }, 'Das klingt interessant. Wie hoch ist denn die ', { answer: 'Miete', size: 7 }, '?',
            { speaker: 'Makler' }, '850 Euro kalt, plus etwa 150 Euro Nebenkosten. ', { answer: 'Kaution', size: 8 }, ' sind drei Monatsmieten.',
            { speaker: 'Interessentin' }, 'Okay. Und wo genau treffen wir uns?',
            { speaker: 'Makler' }, 'Direkt vor dem Haus, Mozartstraße 23.',
            { speaker: 'Interessentin' }, 'Gut, dann bis Samstag um 14:00 Uhr. Auf Wiederhören!',
        ],
        vocabulary: [
            { german: "sich interessieren für", translations: { english: "to be interested in", ukrainian: "цікавитися чимось", polish: "interesować się czymś", albanian: "të interesohem për", german: "sich interessieren für" }},
            { german: "die Wohnung", translations: { english: "the apartment", ukrainian: "квартира", polish: "mieszkanie", albanian: "apartamenti", german: "die Wohnung" }},
            { german: "die Besichtigung", translations: { english: "the viewing / visit", ukrainian: "огляд", polish: "oglądanie", albanian: "vizita", german: "die Besichtigung" }},
            { german: "unter der Woche", translations: { english: "during the week", ukrainian: "протягом тижня", polish: "w ciągu tygodnia", albanian: "gjatë javës", german: "unter der Woche" }},
            { german: "renoviert", translations: { english: "renovated", ukrainian: "відремонтований", polish: "odnowiony", albanian: "i rinovuar", german: "renoviert" }},
            { german: "die Miete", translations: { english: "the rent", ukrainian: "орендна плата", polish: "czynsz", albanian: "qiraja", german: "die Miete" }},
            { german: "die Nebenkosten", translations: { english: "the utility costs", ukrainian: "комунальні послуги", polish: "koszty dodatkowe", albanian: "shpenzimet shtesë", german: "die Nebenkosten" }},
            { german: "die Kaution", translations: { english: "the security deposit", ukrainian: "застава", polish: "kaucja", albanian: "depozita", german: "die Kaution" }},
        ]
    },
    // {
    //     id: 10, type: 'dialogue', title: 'Technical Support Call', level: 'A2', audioSrc: dialogue5Audio,
    //     fullText: `Support: Computer-Hilfe-Service, guten Tag, hier ist Martin Krause. Kundin: Guten Tag, hier ist Elisabeth Weber. Mein Computer funktioniert nicht mehr richtig. Support: Was für Probleme haben Sie denn genau, Frau Weber? Kundin: Er startet nicht mehr. Ich drücke den Knopf, aber es passiert nichts. Support: Ist das Kabel richtig eingesteckt? Schauen Sie mal nach der Steckdose. Kundin: Moment... ja, alles ist eingesteckt. Aber es leuchtet kein Licht. Support: Hmm, das könnte das Netzteil sein. Können Sie das Gerät zu uns bringen? Kundin: Ja, das geht. Wann haben Sie denn geöffnet? Support: Montag bis Freitag von 9:00 bis 18:00 Uhr, samstags bis 14:00 Uhr. Kundin: Ich komme morgen Vormittag vorbei. Wie viel kostet eine Reparatur? Support: Die Diagnose ist kostenlos. Je nach Problem zwischen 50 und 150 Euro. Kundin: In Ordnung. Wo finde ich Sie denn? Support: Bahnhofstraße 12, direkt neben der Post. Großes Schild "PC-Service". Kundin: Perfekt. Bis morgen dann. Vielen Dank! Support: Gerne, Frau Weber. Bringen Sie alle Kabel mit. Bis morgen!`,
    //     parts: [
    //         { speaker: 'Support' }, 'Computer-Hilfe-Service, guten Tag, hier ist Martin Krause.',
    //         { speaker: 'Kundin' }, 'Guten Tag. Mein Computer ', { answer: 'funktioniert', size: 13 }, ' nicht mehr richtig.',
    //         { speaker: 'Support' }, 'Was für ', { answer: 'Probleme', size: 9 }, ' haben Sie denn genau, Frau Weber?',
    //         { speaker: 'Kundin' }, 'Er startet nicht mehr. Ich drücke den Knopf, aber es passiert nichts.',
    //         { speaker: 'Support' }, 'Ist das ', { answer: 'Kabel', size: 6 }, ' richtig eingesteckt? Schauen Sie mal nach der Steckdose.',
    //         { speaker: 'Kundin' }, 'Moment... ja, alles ist eingesteckt. Aber es leuchtet kein Licht.',
    //         { speaker: 'Support' }, 'Hmm, das könnte das ', { answer: 'Netzteil', size: 9 }, ' sein. Können Sie das Gerät zu uns bringen?',
    //         { speaker: 'Kundin' }, 'Ja, das geht. Wann haben Sie denn ', { answer: 'geöffnet', size: 9 }, '?',
    //         { speaker: 'Support' }, 'Montag bis Freitag von 9:00 bis 18:00 Uhr, samstags bis 14:00 Uhr.',
    //         { speaker: 'Kundin' }, 'Ich komme morgen Vormittag vorbei. Wie viel kostet eine ', { answer: 'Reparatur', size: 10 }, '?',
    //         { speaker: 'Support' }, 'Die Diagnose ist kostenlos. Je nach Problem zwischen 50 und 150 Euro.',
    //         { speaker: 'Kundin' }, 'In Ordnung. Wo finde ich Sie denn?',
    //         { speaker: 'Support' }, 'Bahnhofstraße 12, direkt neben der Post.',
    //         { speaker: 'Kundin' }, 'Perfekt. Bis morgen dann. Vielen Dank!',
    //         { speaker: 'Support' }, 'Gerne, Frau Weber. Bringen Sie alle Kabel mit. Bis morgen!',
    //     ],
    //     vocabulary: [
    //         { german: "funktionieren", translations: { english: "to work / function", ukrainian: "працювати / функціонувати", polish: "działać", albanian: "të funksionoj", german: "funktionieren" }},
    //         { german: "das Problem", translations: { english: "the problem", ukrainian: "проблема", polish: "problem", albanian: "problemi", german: "das Problem" }},
    //         { german: "starten", translations: { english: "to start", ukrainian: "запускати", polish: "uruchamiać", albanian: "të nis", german: "starten" }},
    //         { german: "das Kabel", translations: { english: "the cable", ukrainian: "кабель", polish: "kabel", albanian: "kablloja", german: "das Kabel" }},
    //         { german: "eingesteckt", translations: { english: "plugged in", ukrainian: "включений в розетку", polish: "podłączony", albanian: "i futur në prizë", german: "eingesteckt" }},
    //         { german: "das Netzteil", translations: { english: "the power supply", ukrainian: "блок живлення", polish: "zasilacz", albanian: "furnizuesi i energjisë", german: "das Netzteil" }},
    //         { german: "das Gerät", translations: { english: "the device", ukrainian: "пристрій", polish: "urządzenie", albanian: "pajisja", german: "das Gerät" }},
    //         { german: "die Diagnose", translations: { english: "the diagnosis", ukrainian: "діагностика", polish: "diagnoza", albanian: "diagnoza", german: "die Diagnose" }},
    //     ]
    // },
    {
        id: 11, type: 'dialogue', title: 'Im Supermarkt einkaufen', level: 'A1', audioSrc: dialogue6Audio,
        fullText: `Verkäuferin: Guten Tag! Kann ich Ihnen helfen? Kunde: Ja, gerne. Wo finde ich denn die Milch? Verkäuferin: Die Milchprodukte sind ganz hinten rechts, neben dem Fleisch. Kunde: Danke schön. Und haben Sie auch Bio-Äpfel? Verkäuferin: Ja, die Bio-Äpfel sind im Obst- und Gemüsebereich, gleich am Eingang links. Kunde: Perfekt! Was kostet ein Kilo Äpfel? Verkäuferin: Die Bio-Äpfel kosten 3,50 Euro pro Kilo. Kunde: Das ist okay. Können Sie mir noch sagen, wo ich Brot finde? Verkäuferin: Natürlich! Die Bäckerei ist dort drüben, neben der Kasse. Kunde: Vielen Dank für Ihre Hilfe! Verkäuferin: Gern geschehen. Einen schönen Tag noch!`,
        parts: [
            { speaker: 'Verkäuferin' }, 'Guten Tag! Kann ich Ihnen helfen?',
            { speaker: 'Kunde' }, 'Ja, gerne. Wo finde ich denn die ', { answer: 'Milch', size: 7 }, '?',
            { speaker: 'Verkäuferin' }, 'Die Milchprodukte sind ganz hinten rechts, neben dem ', { answer: 'Fleisch', size: 8 }, '.',
            { speaker: 'Kunde' }, 'Danke schön. Und haben Sie auch Bio-Äpfel?',
            { speaker: 'Verkäuferin' }, 'Ja, die Bio-Äpfel sind im Obst- und ', { answer: 'Gemüsebereich', size: 14 }, ', gleich am Eingang links.',
            { speaker: 'Kunde' }, 'Perfekt! Was kostet ein Kilo Äpfel?',
            { speaker: 'Verkäuferin' }, 'Die Bio-Äpfel kosten ', { answer: '3,50', size: 5 }, ' Euro pro Kilo.',
            { speaker: 'Kunde' }, 'Das ist okay. Können Sie mir noch sagen, wo ich Brot finde?',
            { speaker: 'Verkäuferin' }, 'Natürlich! Die ', { answer: 'Bäckerei', size: 10 }, ' ist dort drüben, neben der Kasse.',
            { speaker: 'Kunde' }, 'Vielen Dank für Ihre Hilfe!',
            { speaker: 'Verkäuferin' }, 'Gern geschehen. Einen schönen Tag noch!',
        ],
        vocabulary: [
            { german: "helfen", translations: { english: "to help", ukrainian: "допомагати", polish: "pomagać", albanian: "të ndihmoj", german: "helfen" }},
            { german: "finden", translations: { english: "to find", ukrainian: "знаходити", polish: "znaleźć", albanian: "të gjej", german: "finden" }},
            { german: "die Milchprodukte", translations: { english: "the dairy products", ukrainian: "молочні продукти", polish: "produkty mleczne", albanian: "produktet e qumështit", german: "die Milchprodukte" }},
            { german: "das Obst und Gemüse", translations: { english: "the fruit and vegetables", ukrainian: "фрукти та овочі", polish: "owoce i warzywa", albanian: "frutat dhe perimet", german: "das Obst und Gemüse" }},
            { german: "der Eingang", translations: { english: "the entrance", ukrainian: "вхід", polish: "wejście", albanian: "hyrja", german: "der Eingang" }},
            { german: "kosten", translations: { english: "to cost", ukrainian: "коштувати", polish: "kosztować", albanian: "të kushtoj", german: "kosten" }},
            { german: "die Bäckerei", translations: { english: "the bakery", ukrainian: "пекарня", polish: "piekarnia", albanian: "furra e bukës", german: "die Bäckerei" }},
            { german: "gern geschehen", translations: { english: "you're welcome", ukrainian: "нема за що", polish: "nie ma za co", albanian: "me kënaqësi", german: "gern geschehen" }},
        ]
    },
    {
        id: 12, type: 'dialogue', title: 'Nach dem Weg fragen', level: 'A1', audioSrc: dialogue7Audio,
        fullText: `Tourist: Entschuldigung, können Sie mir helfen? Passantin: Ja, gerne. Was kann ich für Sie tun? Tourist: Ich suche das Rathaus. Wissen Sie, wo das ist? Passantin: Ja, das ist ganz einfach. Gehen Sie hier geradeaus bis zur Ampel. Tourist: Okay, bis zur Ampel. Und dann? Passantin: Dann biegen Sie links ab in die Hauptstraße. Das Rathaus ist nach etwa 200 Metern auf der rechten Seite. Tourist: Links in die Hauptstraße, dann rechts. Wie lange brauche ich zu Fuß? Passantin: Zu Fuß sind das nur fünf Minuten. Sie können es nicht verfehlen - es ist ein großes weißes Gebäude. Tourist: Vielen Dank! Sie haben mir sehr geholfen. Passantin: Bitte schön! Ich wünsche Ihnen einen schönen Aufenthalt in unserer Stadt.`,
        parts: [
            { speaker: 'Tourist' }, 'Entschuldigung, können Sie mir ', { answer: 'helfen', size: 7 }, '?',
            { speaker: 'Passantin' }, 'Ja, gerne. Was kann ich für Sie tun?',
            { speaker: 'Tourist' }, 'Ich suche das ', { answer: 'Rathaus', size: 9 }, '. Wissen Sie, wo das ist?',
            { speaker: 'Passantin' }, 'Ja, das ist ganz einfach. Gehen Sie hier ', { answer: 'geradeaus', size: 10 }, ' bis zur Ampel.',
            { speaker: 'Tourist' }, 'Okay, bis zur Ampel. Und dann?',
            { speaker: 'Passantin' }, 'Dann biegen Sie ', { answer: 'links', size: 7 }, ' ab in die Hauptstraße. Das Rathaus ist nach etwa 200 Metern auf der rechten Seite.',
            { speaker: 'Tourist' }, 'Links in die Hauptstraße, dann rechts. Wie lange brauche ich zu ', { answer: 'Fuß', size: 5 }, '?',
            { speaker: 'Passantin' }, 'Zu Fuß sind das nur fünf Minuten. Sie können es nicht verfehlen - es ist ein großes weißes ', { answer: 'Gebäude', size: 9 }, '.',
            { speaker: 'Tourist' }, 'Vielen Dank! Sie haben mir sehr geholfen.',
            { speaker: 'Passantin' }, 'Bitte schön! Ich wünsche Ihnen einen schönen Aufenthalt in unserer Stadt.',
        ],
        vocabulary: [
            { german: "Entschuldigung", translations: { english: "Excuse me", ukrainian: "Вибачте", polish: "Przepraszam", albanian: "Më falni", german: "Entschuldigung" }},
            { german: "suchen", translations: { english: "to look for", ukrainian: "шукати", polish: "szukać", albanian: "të kërkoj", german: "suchen" }},
            { german: "das Rathaus", translations: { english: "the city hall", ukrainian: "ратуша", polish: "ratusz", albanian: "bashkia", german: "das Rathaus" }},
            { german: "geradeaus", translations: { english: "straight ahead", ukrainian: "прямо", polish: "prosto", albanian: "drejt", german: "geradeaus" }},
            { german: "die Ampel", translations: { english: "the traffic light", ukrainian: "світлофор", polish: "sygnalizacja świetlna", albanian: "semafori", german: "die Ampel" }},
            { german: "links / rechts abbiegen", translations: { english: "to turn left / right", ukrainian: "повернути ліворуч / праворуч", polish: "skręcić w lewo / w prawo", albanian: "të kthehem majtas / djathtas", german: "links / rechts abbiegen" }},
            { german: "zu Fuß", translations: { english: "on foot", ukrainian: "пішки", polish: "pieszo", albanian: "në këmbë", german: "zu Fuß" }},
            { german: "das Gebäude", translations: { english: "the building", ukrainian: "будівля", polish: "budynek", albanian: "ndërtesa", german: "das Gebäude" }},
        ]
    },
    {
        id: 13, type: 'dialogue', title: 'Im Café bestellen', level: 'A1', audioSrc: dialogue8Audio,
        fullText: `Kellner: Guten Morgen! Was darf ich Ihnen bringen? Kundin: Guten Morgen! Ich hätte gerne einen Kaffee, bitte. Kellner: Möchten Sie einen normalen Kaffee oder einen Cappuccino? Kundin: Einen Cappuccino, bitte. Und haben Sie auch Kuchen? Kellner: Ja, wir haben heute Apfelkuchen, Schwarzwälder Kirschtorte und Käsekuchen. Kundin: Der Apfelkuchen hört sich gut an. Ein Stück, bitte. Kellner: Gerne! Möchten Sie den Cappuccino mit oder ohne Zucker? Kundin: Mit einem Löffel Zucker, bitte. Kellner: Alles klar. Das macht zusammen 6,50 Euro. Kundin: Hier sind 7 Euro. Kellner: Danke schön, 50 Cent zurück. Ihre Bestellung kommt gleich.`,
        parts: [
            { speaker: 'Kellner' }, 'Guten Morgen! Was darf ich Ihnen ', { answer: 'bringen', size: 8 }, '?',
            { speaker: 'Kundin' }, 'Guten Morgen! Ich hätte gerne einen Kaffee, bitte.',
            { speaker: 'Kellner' }, 'Möchten Sie einen normalen Kaffee oder einen Cappuccino?',
            { speaker: 'Kundin' }, 'Einen Cappuccino, bitte. Und haben Sie auch ', { answer: 'Kuchen', size: 8 }, '?',
            { speaker: 'Kellner' }, 'Ja, wir haben heute Apfelkuchen, Schwarzwälder Kirschtorte und Käsekuchen.',
            { speaker: 'Kundin' }, 'Der Apfelkuchen hört sich gut an. Ein ', { answer: 'Stück', size: 7 }, ', bitte.',
            { speaker: 'Kellner' }, 'Gerne! Möchten Sie den Cappuccino mit oder ohne Zucker?',
            { speaker: 'Kundin' }, 'Mit einem ', { answer: 'Löffel', size: 8 }, ' Zucker, bitte.',
            { speaker: 'Kellner' }, 'Alles klar. Das macht zusammen ', { answer: '6,50', size: 5 }, ' Euro.',
            { speaker: 'Kundin' }, 'Hier sind 7 Euro.',
            { speaker: 'Kellner' }, 'Danke schön, 50 Cent zurück. Ihre ', { answer: 'Bestellung', size: 11 }, ' kommt gleich.',
        ],
        vocabulary: [
            { german: "bestellen", translations: { english: "to order", ukrainian: "замовляти", polish: "zamawiać", albanian: "të porosis", german: "bestellen" }},
            { german: "bringen", translations: { english: "to bring", ukrainian: "приносити", polish: "przynieść", albanian: "të sjell", german: "bringen" }},
            { german: "der Kuchen", translations: { english: "the cake", ukrainian: "торт / пиріг", polish: "ciasto", albanian: "ëmbëlsira", german: "der Kuchen" }},
            { german: "das Stück", translations: { english: "the piece", ukrainian: "шматок", polish: "kawałek", albanian: "copa", german: "das Stück" }},
            { german: "der Zucker", translations: { english: "the sugar", ukrainian: "цукор", polish: "cukier", albanian: "sheqeri", german: "der Zucker" }},
            { german: "zusammen", translations: { english: "together / in total", ukrainian: "разом", polish: "razem", albanian: "bashkë / në total", german: "zusammen" }},
            { german: "das macht...", translations: { english: "that makes... / that will be...", ukrainian: "це коштує...", polish: "to kosztuje...", albanian: "kjo bën...", german: "das macht..." }},
            { german: "die Bestellung", translations: { english: "the order", ukrainian: "замовлення", polish: "zamówienie", albanian: "porosia", german: "die Bestellung" }},
        ]
    },
    {
        id: 14, type: 'dialogue', title: 'Beim Friseur', level: 'A1', audioSrc: dialogue9Audio,
        fullText: `Friseurin: Hallo! Haben Sie einen Termin? Kundin: Ja, ich bin Emma Richter. Ich habe um 14 Uhr einen Termin. Friseurin: Ah ja, Frau Richter! Ich bin Sabine. Was möchten Sie denn heute machen lassen? Kundin: Ich möchte meine Haare schneiden lassen. Nicht zu kurz, aber ein bisschen kürzer. Friseurin: Verstehe. Etwa 5 Zentimeter kürzer? Und möchten Sie auch eine neue Farbe? Kundin: Nein, die Farbe gefällt mir. Nur schneiden, bitte. Friseurin: In Ordnung. Kommen Sie mit, ich wasche Ihnen erst die Haare. Kundin: Wie lange dauert das ungefähr? Friseurin: Mit Waschen und Schneiden etwa 45 Minuten. Kundin: Das passt gut. Ich habe um 16 Uhr noch einen anderen Termin. Friseurin: Das schaffen wir problemlos. Setzen Sie sich bitte hier hin.`,
        parts: [
            { speaker: 'Friseurin' }, 'Hallo! Haben Sie einen ', { answer: 'Termin', size: 8 }, '?',
            { speaker: 'Kundin' }, 'Ja, ich bin Emma Richter. Ich habe um 14 Uhr einen Termin.',
            { speaker: 'Friseurin' }, 'Ah ja, Frau Richter! Was möchten Sie denn heute machen lassen?',
            { speaker: 'Kundin' }, 'Ich möchte meine Haare ', { answer: 'schneiden', size: 10 }, ' lassen. Nicht zu kurz, aber ein bisschen kürzer.',
            { speaker: 'Friseurin' }, 'Verstehe. Etwa 5 Zentimeter kürzer? Und möchten Sie auch eine neue ', { answer: 'Farbe', size: 7 }, '?',
            { speaker: 'Kundin' }, 'Nein, die Farbe gefällt mir. Nur schneiden, bitte.',
            { speaker: 'Friseurin' }, 'In Ordnung. Kommen Sie mit, ich ', { answer: 'wasche', size: 8 }, ' Ihnen erst die Haare.',
            { speaker: 'Kundin' }, 'Wie lange ', { answer: 'dauert', size: 7 }, ' das ungefähr?',
            { speaker: 'Friseurin' }, 'Mit Waschen und Schneiden etwa 45 Minuten.',
            { speaker: 'Kundin' }, 'Das passt gut. Ich habe um 16 Uhr noch einen anderen Termin.',
            { speaker: 'Friseurin' }, 'Das schaffen wir problemlos. Setzen Sie sich bitte hier hin.',
        ],
        vocabulary: [
            { german: "der Friseur / die Friseurin", translations: { english: "the hairdresser (m/f)", ukrainian: "перукар / перукарка", polish: "fryzjer / fryzjerka", albanian: "parukieri / parukierja", german: "der Friseur / die Friseurin" }},
            { german: "der Termin", translations: { english: "the appointment", ukrainian: "запис / зустріч", polish: "termin", albanian: "takimi", german: "der Termin" }},
            { german: "Haare schneiden", translations: { english: "to cut hair", ukrainian: "стригти волосся", polish: "strzyc włosy", albanian: "të pres flokët", german: "Haare schneiden" }},
            { german: "kürzer", translations: { english: "shorter", ukrainian: "коротше", polish: "krótszy", albanian: "më të shkurtra", german: "kürzer" }},
            { german: "die Farbe", translations: { english: "the color", ukrainian: "колір", polish: "kolor", albanian: "ngjyra", german: "die Farbe" }},
            { german: "waschen", translations: { english: "to wash", ukrainian: "мити", polish: "myć", albanian: "të laj", german: "waschen" }},
            { german: "dauern", translations: { english: "to last / take time", ukrainian: "тривати", polish: "trwać", albanian: "të zgjasë", german: "dauern" }},
            { german: "ungefähr", translations: { english: "approximately", ukrainian: "приблизно", polish: "około", albanian: "afërsisht", german: "ungefähr" }},
        ]
    },
    {
        id: 15, type: 'dialogue', title: 'Eine Fahrkarte kaufen', level: 'A2', audioSrc: dialogue10Audio,
        fullText: `Kunde: Guten Tag. Ich möchte eine Fahrkarte nach München kaufen. Verkäuferin: Guten Tag! Wann möchten Sie denn fahren? Kunde: Am Donnerstag um 9 Uhr morgens, wenn möglich. Verkäuferin: Moment, ich schaue mal... Es gibt einen Zug um 9:15 Uhr. Ist das okay? Kunde: Ja, das ist perfekt. Wie lange dauert die Fahrt? Verkäuferin: Die Fahrt dauert 3 Stunden und 20 Minuten. Sie kommen um 12:35 Uhr in München an. Kunde: Gut. Was kostet die Fahrkarte? Verkäuferin: Eine einfache Fahrt kostet 45 Euro. Möchten Sie auch eine Rückfahrkarte? Kunde: Ja, bitte. Wann fährt der letzte Zug zurück? Verkäuferin: Der letzte Zug am Donnerstag fährt um 20:30 Uhr ab München. Kunde: Das ist zu spät. Gibt es auch einen um 18 Uhr? Verkäuferin: Ja, um 18:15 Uhr. Die Rückfahrkarte macht dann insgesamt 85 Euro.`,
        parts: [
            { speaker: 'Kunde' }, 'Guten Tag. Ich möchte eine ', { answer: 'Fahrkarte', size: 10 }, ' nach München kaufen.',
            { speaker: 'Verkäuferin' }, 'Guten Tag! Wann möchten Sie denn fahren?',
            { speaker: 'Kunde' }, 'Am Donnerstag um 9 Uhr morgens, wenn möglich.',
            { speaker: 'Verkäuferin' }, 'Moment, ich schaue mal... Es gibt einen ', { answer: 'Zug', size: 5 }, ' um 9:15 Uhr. Ist das okay?',
            { speaker: 'Kunde' }, 'Ja, das ist perfekt. Wie lange dauert die Fahrt?',
            { speaker: 'Verkäuferin' }, 'Die Fahrt dauert 3 Stunden und 20 Minuten.',
            { speaker: 'Kunde' }, 'Gut. Was kostet die Fahrkarte?',
            { speaker: 'Verkäuferin' }, 'Eine ', { answer: 'einfache', size: 9 }, ' Fahrt kostet 45 Euro. Möchten Sie auch eine ', { answer: 'Rückfahrkarte', size: 14 }, '?',
            { speaker: 'Kunde' }, 'Ja, bitte. Wann fährt der letzte Zug zurück?',
            { speaker: 'Verkäuferin' }, 'Der letzte Zug am Donnerstag fährt um 20:30 Uhr ab München.',
            { speaker: 'Kunde' }, 'Das ist zu spät. Gibt es auch einen um 18 Uhr?',
            { speaker: 'Verkäuferin' }, 'Ja, um 18:15 Uhr. Die Rückfahrkarte macht dann insgesamt ', { answer: '85', size: 4 }, ' Euro.',
        ],
        vocabulary: [
            { german: "die Fahrkarte", translations: { english: "the ticket", ukrainian: "квиток", polish: "bilet", albanian: "bileta", german: "die Fahrkarte" }},
            { german: "fahren", translations: { english: "to go / travel", ukrainian: "їхати", polish: "jechać", albanian: "të udhëtoj", german: "fahren" }},
            { german: "der Zug", translations: { english: "the train", ukrainian: "поїзд", polish: "pociąg", albanian: "treni", german: "der Zug" }},
            { german: "dauern", translations: { english: "to last / take time", ukrainian: "тривати", polish: "trwać", albanian: "të zgjasë", german: "dauern" }},
            { german: "ankommen", translations: { english: "to arrive", ukrainian: "прибувати", polish: "przyjeżdżać", albanian: "të arrij", german: "ankommen" }},
            { german: "einfache Fahrt", translations: { english: "one-way trip", ukrainian: "поїздка в один кінець", polish: "przejazd w jedną stronę", albanian: "udhëtim vajtje", german: "einfache Fahrt" }},
            { german: "die Rückfahrkarte", translations: { english: "the return ticket", ukrainian: "зворотний квиток", polish: "bilet powrotny", albanian: "bileta e kthimit", german: "die Rückfahrkarte" }},
            { german: "insgesamt", translations: { english: "in total", ukrainian: "загалом", polish: "w sumie", albanian: "në total", german: "insgesamt" }},
        ]
    },
    {
        id: 16, type: 'dialogue', title: 'Im Hotel einchecken', level: 'A1', audioSrc: dialogue11Audio,
        fullText: `Rezeptionist: Guten Abend! Willkommen im Hotel Garni. Gästin: Guten Abend! Ich habe ein Zimmer reserviert. Mein Name ist Anna Kowalski. Rezeptionist: Einen Moment bitte... Ja, hier ist Ihre Reservierung. Ein Einzelzimmer für drei Nächte. Gästin: Das stimmt. Ist das Zimmer ruhig? Ich bin geschäftlich hier und muss früh aufstehen. Rezeptionist: Ja, Ihr Zimmer liegt zum Innenhof. Es ist sehr ruhig. Sie haben Zimmer 205 im zweiten Stock. Gästin: Perfekt. Gibt es WLAN im Zimmer? Rezeptionist: Ja, das WLAN ist kostenlos. Das Passwort steht auf Ihrem Nachttisch. Gästin: Danke. Bis wann kann ich morgen früh frühstücken? Rezeptionist: Das Frühstück gibt es von 6:30 bis 10:00 Uhr im Erdgeschoss. Gästin: Wunderbar. Hier ist mein Ausweis. Rezeptionist: Danke schön. Hier ist Ihr Zimmerschlüssel. Ich wünsche Ihnen einen angenehmen Aufenthalt!`,
        parts: [
            { speaker: 'Rezeptionist' }, 'Guten Abend! Willkommen im Hotel Garni.',
            { speaker: 'Gästin' }, 'Guten Abend! Ich habe ein ', { answer: 'Zimmer', size: 7 }, ' reserviert. Mein Name ist Anna Kowalski.',
            { speaker: 'Rezeptionist' }, 'Einen Moment bitte... Ja, hier ist Ihre Reservierung. Ein Einzelzimmer für drei ', { answer: 'Nächte', size: 8 }, '.',
            { speaker: 'Gästin' }, 'Das stimmt. Ist das Zimmer ruhig? Ich bin ', { answer: 'geschäftlich', size: 13 }, ' hier und muss früh aufstehen.',
            { speaker: 'Rezeptionist' }, 'Ja, Ihr Zimmer liegt zum Innenhof. Es ist sehr ruhig. Sie haben Zimmer 205 im zweiten Stock.',
            { speaker: 'Gästin' }, 'Perfekt. Gibt es ', { answer: 'WLAN', size: 5 }, ' im Zimmer?',
            { speaker: 'Rezeptionist' }, 'Ja, das WLAN ist ', { answer: 'kostenlos', size: 10 }, '. Das Passwort steht auf Ihrem Nachttisch.',
            { speaker: 'Gästin' }, 'Danke. Bis wann kann ich morgen früh frühstücken?',
            { speaker: 'Rezeptionist' }, 'Das ', { answer: 'Frühstück', size: 11 }, ' gibt es von 6:30 bis 10:00 Uhr im Erdgeschoss.',
            { speaker: 'Gästin' }, 'Wunderbar. Hier ist mein Ausweis.',
            { speaker: 'Rezeptionist' }, 'Danke schön. Hier ist Ihr Zimmerschlüssel. Ich wünsche Ihnen einen angenehmen Aufenthalt!',
        ],
        vocabulary: [
            { german: "einchecken", translations: { english: "to check in", ukrainian: "зареєструватися", polish: "zameldować się", albanian: "të bëj check-in", german: "einchecken" }},
            { german: "reserviert", translations: { english: "reserved", ukrainian: "заброньовано", polish: "zarezerwowany", albanian: "i rezervuar", german: "reserviert" }},
            { german: "die Reservierung", translations: { english: "the reservation", ukrainian: "бронювання", polish: "rezerwacja", albanian: "rezervimi", german: "die Reservierung" }},
            { german: "das Einzelzimmer", translations: { english: "the single room", ukrainian: "одномісний номер", polish: "pokój jednoosobowy", albanian: "dhoma teke", german: "das Einzelzimmer" }},
            { german: "ruhig", translations: { english: "quiet", ukrainian: "тихий", polish: "cichy", albanian: "i qetë", german: "ruhig" }},
            { german: "der Innenhof", translations: { english: "the courtyard", ukrainian: "внутрішній двір", polish: "dziedziniec", albanian: "oborri i brendshëm", german: "der Innenhof" }},
            { german: "kostenlos", translations: { english: "free of charge", ukrainian: "безкоштовно", polish: "darmowy", albanian: "falas", german: "kostenlos" }},
            { german: "der Zimmerschlüssel", translations: { english: "the room key", ukrainian: "ключ від номера", polish: "klucz do pokoju", albanian: "çelësi i dhomës", german: "der Zimmerschlüssel" }},
        ]
    },
    {
        id: 17, type: 'dialogue', title: 'Beim Arzt', level: 'A1', audioSrc: dialogue12Audio,
        fullText: `Ärztin: Guten Tag, Herr Neumann. Setzen Sie sich bitte. Was kann ich für Sie tun? Patient: Guten Tag, Frau Doktor. Ich fühle mich seit drei Tagen nicht gut. Ärztin: Was für Beschwerden haben Sie denn? Patient: Ich habe Kopfschmerzen, Halsschmerzen und bin sehr müde. Ärztin: Haben Sie auch Fieber? Patient: Ja, gestern hatte ich 38,5 Grad. Heute morgen waren es noch 37,8 Grad. Ärztin: Ich schaue mal in Ihren Hals... Ja, der ist ziemlich rot. Das sieht nach einer Erkältung aus. Patient: Ist das schlimm? Ich habe nächste Woche wichtige Termine. Ärztin: Nein, keine Sorge. Mit den richtigen Medikamenten sind Sie in einer Woche wieder fit. Patient: Was soll ich denn machen? Ärztin: Ich verschreibe Ihnen Tabletten gegen die Schmerzen. Trinken Sie viel Tee und ruhen Sie sich aus. Patient: Muss ich im Bett bleiben? Ärztin: Zwei bis drei Tage sollten Sie zu Hause bleiben. Ich schreibe Sie krank.`,
        parts: [
            { speaker: 'Ärztin' }, 'Guten Tag, Herr Neumann. Was kann ich für Sie tun?',
            { speaker: 'Patient' }, 'Guten Tag, Frau Doktor. Ich fühle mich seit drei Tagen nicht ', { answer: 'gut', size: 5 }, '.',
            { speaker: 'Ärztin' }, 'Was für Beschwerden haben Sie denn?',
            { speaker: 'Patient' }, 'Ich habe ', { answer: 'Kopfschmerzen', size: 13 }, ', Halsschmerzen und bin sehr müde.',
            { speaker: 'Ärztin' }, 'Haben Sie auch ', { answer: 'Fieber', size: 7 }, '?',
            { speaker: 'Patient' }, 'Ja, gestern hatte ich 38,5 Grad.',
            { speaker: 'Ärztin' }, 'Ich schaue mal in Ihren Hals... Ja, der ist ziemlich rot. Das sieht nach einer ', { answer: 'Erkältung', size: 10 }, ' aus.',
            { speaker: 'Patient' }, 'Ist das schlimm? Ich habe nächste Woche wichtige Termine.',
            { speaker: 'Ärztin' }, 'Nein, keine Sorge. Mit den richtigen ', { answer: 'Medikamenten', size: 13 }, ' sind Sie in einer Woche wieder fit.',
            { speaker: 'Patient' }, 'Was soll ich denn machen?',
            { speaker: 'Ärztin' }, 'Ich verschreibe Ihnen Tabletten. Trinken Sie viel Tee und ruhen Sie sich aus.',
            { speaker: 'Patient' }, 'Muss ich im ', { answer: 'Bett', size: 5 }, ' bleiben?',
            { speaker: 'Ärztin' }, 'Zwei bis drei Tage sollten Sie zu Hause bleiben. Ich schreibe Sie krank.',
        ],
        vocabulary: [
            { german: "sich fühlen", translations: { english: "to feel", ukrainian: "почуватися", polish: "czuć się", albanian: "të ndihem", german: "sich fühlen" }},
            { german: "die Beschwerden", translations: { english: "the symptoms", ukrainian: "скарги / симптоми", polish: "dolegliwości", albanian: "ankesat / simptomat", german: "die Beschwerden" }},
            { german: "müde", translations: { english: "tired", ukrainian: "втомлений", polish: "zmęczony", albanian: "i lodhur", german: "müde" }},
            { german: "das Fieber", translations: { english: "the fever", ukrainian: "температура", polish: "gorączka", albanian: "temperatura", german: "das Fieber" }},
            { german: "die Erkältung", translations: { english: "the cold (illness)", ukrainian: "застуда", polish: "przeziębienie", albanian: "ftohja", german: "die Erkältung" }},
            { german: "die Medikamente", translations: { english: "the medicine", ukrainian: "ліки", polish: "lekarstwa", albanian: "ilaçet", german: "die Medikamente" }},
            { german: "sich ausruhen", translations: { english: "to rest", ukrainian: "відпочивати", polish: "odpoczywać", albanian: "të pushoj", german: "sich ausruhen" }},
            { german: "krank sein / jemanden krankschreiben", translations: { english: "to be sick / to write a sick note", ukrainian: "бути хворим / виписати лікарняний", polish: "być chorym / wystawić zwolnienie lekarskie", albanian: "të jesh i sëmurë / të japësh raport mjekësor", german: "krank sein / jemanden krankschreiben" }},
        ]
    },
    {
        id: 18, type: 'dialogue', title: 'Im Kleidungsgeschäft', level: 'A1', audioSrc: dialogue13Audio,
        fullText: `Verkäuferin: Guten Tag! Kann ich Ihnen behilflich sein? Kunde: Ja, ich suche eine Jeans. Größe 32. Verkäuferin: Welche Farbe hätten Sie denn gerne? Wir haben blau, schwarz und grau. Kunde: Eine blaue Jeans, bitte. Nicht zu dunkel. Verkäuferin: Hier haben wir ein schönes Modell in hellblau. Möchten Sie sie anprobieren? Kunde: Ja, gerne. Wo ist die Umkleidekabine? Verkäuferin: Dort hinten links. Ich bringe Ihnen noch eine andere Größe mit, falls diese nicht passt. Kunde: Das ist sehr nett, danke. Die Jeans passt gut. Was kostet sie? Verkäuferin: Sie kostet 79 Euro. Heute haben wir 20 Prozent Rabatt, das macht 63,20 Euro. Kunde: Das ist ein guter Preis. Ich nehme sie. Kann ich mit Karte zahlen? Verkäuferin: Selbstverständlich. Kommen Sie bitte zur Kasse. Möchten Sie eine Tüte? Kunde: Ja, bitte. Vielen Dank für die gute Beratung! Verkäuferin: Gerne! Ich hoffe, Sie haben lange Freude an der Jeans.`,
        parts: [
            { speaker: 'Verkäuferin' }, 'Guten Tag! Kann ich Ihnen behilflich sein?',
            { speaker: 'Kunde' }, 'Ja, ich suche eine Jeans. ', { answer: 'Größe', size: 7 }, ' 32.',
            { speaker: 'Verkäuferin' }, 'Welche Farbe hätten Sie denn gerne? Wir haben ', { answer: 'blau', size: 6 }, ', schwarz und grau.',
            { speaker: 'Kunde' }, 'Eine blaue Jeans, bitte. Nicht zu dunkel.',
            { speaker: 'Verkäuferin' }, 'Hier haben wir ein schönes Modell. Möchten Sie sie ', { answer: 'anprobieren', size: 12 }, '?',
            { speaker: 'Kunde' }, 'Ja, gerne. Wo ist die Umkleidekabine?',
            { speaker: 'Verkäuferin' }, 'Dort hinten links.',
            { speaker: 'Kunde' }, 'Die Jeans passt gut. Was ', { answer: 'kostet', size: 8 }, ' sie?',
            { speaker: 'Verkäuferin' }, 'Sie kostet 79 Euro. Heute haben wir 20 Prozent ', { answer: 'Rabatt', size: 8 }, '.',
            { speaker: 'Kunde' }, 'Das ist ein guter Preis. Ich nehme sie. Kann ich mit ', { answer: 'Karte', size: 7 }, ' zahlen?',
            { speaker: 'Verkäuferin' }, 'Selbstverständlich. Kommen Sie bitte zur Kasse.',
            { speaker: 'Kunde' }, 'Ja, bitte. Vielen Dank für die gute ', { answer: 'Beratung', size: 10 }, '!',
            { speaker: 'Verkäuferin' }, 'Gerne! Ich hoffe, Sie haben lange Freude an der Jeans.',
        ],
        vocabulary: [
            { german: "behilflich sein", translations: { english: "to be helpful", ukrainian: "бути корисним", polish: "być pomocnym", albanian: "të jem i dobishëm", german: "behilflich sein" }},
            { german: "suchen", translations: { english: "to look for", ukrainian: "шукати", polish: "szukać", albanian: "të kërkoj", german: "suchen" }},
            { german: "die Größe", translations: { english: "the size", ukrainian: "розмір", polish: "rozmiar", albanian: "masa", german: "die Größe" }},
            { german: "anprobieren", translations: { english: "to try on", ukrainian: "приміряти", polish: "przymierzać", albanian: "të provoj", german: "anprobieren" }},
            { german: "die Umkleidekabine", translations: { english: "the changing room", ukrainian: "примірочна", polish: "przymierzalnia", albanian: "dhoma e zhveshjes", german: "die Umkleidekabine" }},
            { german: "passen", translations: { english: "to fit", ukrainian: "підходити (за розміром)", polish: "pasować", albanian: "të përshtatet", german: "passen" }},
            { german: "der Rabatt", translations: { english: "the discount", ukrainian: "знижка", polish: "rabat", albanian: "zbritja", german: "der Rabatt" }},
            { german: "die Beratung", translations: { english: "the consultation / advice", ukrainian: "консультація", polish: "doradztwo", albanian: "këshilla", german: "die Beratung" }},
        ]
    },
    {
        id: 19, type: 'dialogue', title: 'Auf der Post', level: 'A2', audioSrc: dialogue14Audio,
        fullText: `Postangestellte: Guten Tag! Was kann ich für Sie tun? Kunde: Ich möchte dieses Paket nach Italien schicken. Was kostet das? Postangestellte: Moment, ich wiege es mal... Das Paket wiegt 2,3 Kilo. Nach Italien kostet das 18,90 Euro. Kunde: Wie lange dauert der Versand? Postangestellte: Mit der normalen Post etwa 5 bis 7 Werktage. Express geht in 2 bis 3 Tagen. Kunde: Was kostet Express? Postangestellte: Express kostet 32 Euro. Möchten Sie das Paket auch versichern? Kunde: Ja, das ist eine gute Idee. Der Wert ist etwa 150 Euro. Postangestellte: Die Versicherung kostet zusätzlich 3,50 Euro. Normal oder Express? Kunde: Normal reicht. Also 18,90 plus 3,50, das macht 22,40 Euro, richtig? Postangestellte: Genau. Hier ist Ihr Beleg. Die Sendungsnummer steht darauf. Kunde: Kann ich das Paket online verfolgen? Postangestellte: Ja, mit dieser Nummer auf unserer Website. Vielen Dank und auf Wiedersehen!`,
        parts: [
            { speaker: 'Postangestellte' }, 'Guten Tag! Was kann ich für Sie tun?',
            { speaker: 'Kunde' }, 'Ich möchte dieses ', { answer: 'Paket', size: 7 }, ' nach Italien schicken. Was kostet das?',
            { speaker: 'Postangestellte' }, 'Moment, ich ', { answer: 'wiege', size: 7 }, ' es mal... Das Paket wiegt 2,3 Kilo.',
            { speaker: 'Kunde' }, 'Wie lange dauert der ', { answer: 'Versand', size: 9 }, '?',
            { speaker: 'Postangestellte' }, 'Mit der normalen Post etwa 5 bis 7 Werktage. ', { answer: 'Express', size: 8 }, ' geht in 2 bis 3 Tagen.',
            { speaker: 'Kunde' }, 'Was kostet Express?',
            { speaker: 'Postangestellte' }, 'Express kostet 32 Euro. Möchten Sie das Paket auch ', { answer: 'versichern', size: 11 }, '?',
            { speaker: 'Kunde' }, 'Ja, das ist eine gute Idee. Der Wert ist etwa 150 Euro.',
            { speaker: 'Postangestellte' }, 'Die Versicherung kostet zusätzlich 3,50 Euro.',
            { speaker: 'Kunde' }, 'Normal reicht. Also 18,90 plus 3,50, das macht 22,40 Euro, ', { answer: 'richtig', size: 8 }, '?',
            { speaker: 'Postangestellte' }, 'Genau. Hier ist Ihr ', { answer: 'Beleg', size: 7 }, '. Die Sendungsnummer steht darauf.',
            { speaker: 'Kunde' }, 'Kann ich das Paket online verfolgen?',
            { speaker: 'Postangestellte' }, 'Ja, mit dieser Nummer auf unserer Website. Vielen Dank!',
        ],
        vocabulary: [
            { german: "das Paket", translations: { english: "the package", ukrainian: "посилка", polish: "paczka", albanian: "pakoja", german: "das Paket" }},
            { german: "schicken", translations: { english: "to send", ukrainian: "відправляти", polish: "wysyłać", albanian: "të dërgoj", german: "schicken" }},
            { german: "wiegen", translations: { english: "to weigh", ukrainian: "важити", polish: "ważyć", albanian: "të peshoj", german: "wiegen" }},
            { german: "der Versand", translations: { english: "the shipping", ukrainian: "доставка", polish: "wysyłka", albanian: "dërgesa", german: "der Versand" }},
            { german: "der Werktag", translations: { english: "the working day", ukrainian: "робочий день", polish: "dzień roboczy", albanian: "dita e punës", german: "der Werktag" }},
            { german: "versichern", translations: { english: "to insure", ukrainian: "страхувати", polish: "ubezpieczać", albanian: "të siguroj", german: "versichern" }},
            { german: "zusätzlich", translations: { english: "additional", ukrainian: "додатково", polish: "dodatkowo", albanian: "shtesë", german: "zusätzlich" }},
            { german: "verfolgen", translations: { english: "to track", ukrainian: "відстежувати", polish: "śledzić", albanian: "të ndjek", german: "verfolgen" }},
        ]
    },
    {
        id: 20, type: 'dialogue', title: 'Termin bei der Bank', level: 'A2', audioSrc: dialogue15Audio,
        fullText: `Bankangestellter: Guten Tag, Frau Müller! Schön, Sie zu sehen. Setzen Sie sich bitte. Kundin: Guten Tag, Herr Wagner. Ich hätte gerne Informationen über ein Sparkonto. Bankangestellter: Gerne! Wie viel möchten Sie denn ungefähr anlegen? Kundin: Ich denke an etwa 5000 Euro. Was für Zinsen gibt es zur Zeit? Bankangestellter: Aktuell bieten wir 2,1 Prozent Zinsen pro Jahr bei unserem Festgeldkonto. Kundin: Und wie lange muss das Geld dort bleiben? Bankangestellter: Bei 2,1 Prozent ist das Geld zwei Jahre fest angelegt. Sie können nicht vorher darauf zugreifen. Kundin: Gibt es auch flexiblere Möglichkeiten? Bankangestellter: Ja, unser Tagesgeldkonto gibt 1,5 Prozent und Sie können jederzeit an Ihr Geld. Kundin: Das klingt interessant. Welche Unterlagen brauche ich? Bankangestellter: Ihren Personalausweis und eine Gehaltsabrechnung. Soll ich Ihnen einen Termin für nächste Woche geben? Kundin: Ja, das wäre gut. Mittwoch Nachmittag hätte ich Zeit. Bankangestellter: Mittwoch um 15 Uhr? Dann bereite ich alle Unterlagen vor.`,
        parts: [
            { speaker: 'Bankangestellter' }, 'Guten Tag, Frau Müller! Schön, Sie zu sehen.',
            { speaker: 'Kundin' }, 'Guten Tag, Herr Wagner. Ich hätte gerne Informationen über ein ', { answer: 'Sparkonto', size: 11 }, '.',
            { speaker: 'Bankangestellter' }, 'Gerne! Wie viel möchten Sie denn ungefähr anlegen?',
            { speaker: 'Kundin' }, 'Ich denke an etwa ', { answer: '5000', size: 5 }, ' Euro. Was für ', { answer: 'Zinsen', size: 8 }, ' gibt es zur Zeit?',
            { speaker: 'Bankangestellter' }, 'Aktuell bieten wir 2,1 Prozent Zinsen pro Jahr bei unserem ', { answer: 'Festgeldkonto', size: 14 }, '.',
            { speaker: 'Kundin' }, 'Und wie lange muss das Geld dort bleiben?',
            { speaker: 'Bankangestellter' }, 'Das Geld ist zwei Jahre fest ', { answer: 'angelegt', size: 10 }, '.',
            { speaker: 'Kundin' }, 'Gibt es auch flexiblere ', { answer: 'Möglichkeiten', size: 14 }, '?',
            { speaker: 'Bankangestellter' }, 'Ja, unser Tagesgeldkonto gibt 1,5 Prozent.',
            { speaker: 'Kundin' }, 'Das klingt interessant. Welche Unterlagen brauche ich?',
            { speaker: 'Bankangestellter' }, 'Ihren ', { answer: 'Personalausweis', size: 16 }, ' und eine Gehaltsabrechnung.',
            { speaker: 'Kundin' }, 'Ja, das wäre gut. Mittwoch Nachmittag hätte ich Zeit.',
            { speaker: 'Bankangestellter' }, 'Mittwoch um 15 Uhr? Dann bereite ich alle Unterlagen vor.',
        ],
        vocabulary: [
            { german: "die Bank", translations: { english: "the bank", ukrainian: "банк", polish: "bank", albanian: "banka", german: "die Bank" }},
            { german: "das Sparkonto", translations: { english: "the savings account", ukrainian: "ощадний рахунок", polish: "konto oszczędnościowe", albanian: "llogaria e kursimeve", german: "das Sparkonto" }},
            { german: "anlegen", translations: { english: "to invest", ukrainian: "вкладати", polish: "inwestować", albanian: "të investoj", german: "anlegen" }},
            { german: "die Zinsen", translations: { english: "the interest", ukrainian: "відсотки", polish: "odsetki", albanian: "interesi", german: "die Zinsen" }},
            { german: "das Festgeldkonto", translations: { english: "fixed deposit account", ukrainian: "строковий депозит", polish: "konto lokacyjne", albanian: "llogaria me afat", german: "das Festgeldkonto" }},
            { german: "zugreifen auf", translations: { english: "to access", ukrainian: "мати доступ до", polish: "mieć dostęp do", albanian: "të kem akses në", german: "zugreifen auf" }},
            { german: "flexibel", translations: { english: "flexible", ukrainian: "гнучкий", polish: "elastyczny", albanian: "fleksibël", german: "flexibel" }},
            { german: "der Personalausweis", translations: { english: "the ID card", ukrainian: "посвідчення особи", polish: "dowód osobisty", albanian: "letërnjoftimi", german: "der Personalausweis" }},
        ]
    }
];

// --- CHILD COMPONENTS ---

const Header = React.memo(() => (
  <div className="text-center mb-4 sm:mb-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">German Learning Hub</h1>
    <p className="text-md sm:text-lg text-gray-600">Flashcards, Listening & Grammar</p>
  </div>
));

const ModeSwitcher = React.memo(({ mode, setMode, t }: { mode: string, setMode: (mode: string) => void, t: LanguageStrings }) => (
  <div className="flex justify-center mb-6">
    <div className="flex flex-wrap justify-center p-1 bg-gray-200 rounded-xl gap-1">
      <button 
        onClick={() => setMode('flashcards')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'flashcards' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600'}`}
      >
        <BookOpen size={20} /> {t.flashcards}
      </button>
      <button 
        onClick={() => setMode('listeningPractice')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'listeningPractice' ? 'bg-white text-green-600 shadow-md' : 'text-gray-600'}`}
      >
        <Ear size={20} /> {t.listeningPractice}
      </button>
      <button 
        onClick={() => setMode('grammarPractice')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'grammarPractice' ? 'bg-white text-purple-600 shadow-md' : 'text-gray-600'}`}
      >
        <BrainCircuit size={20} /> {t.grammarPractice}
      </button>
      <button 
        onClick={() => setMode('selfTest')}
        className={`flex items-center gap-2 px-3 py-2 text-sm sm:text-base font-semibold rounded-lg transition-colors ${mode === 'selfTest' ? 'bg-white text-red-600 shadow-md' : 'text-gray-600'}`}
      >
        <CheckSquare size={20} /> Self-Test
      </button>
    </div>
  </div>
));

const MobileSidebar = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}
    <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold">Menu</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X size={20} /></button>
      </div>
      <div className="p-4 overflow-y-auto h-full">{children}</div>
    </div>
  </>
);

const SectionSelector = React.memo(({ t, selectedSections, onToggle, onSelectAll }: {
  t: LanguageStrings,
  selectedSections: number[],
  onToggle: (section: number) => void,
  onSelectAll: () => void
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4">{t.selectSections}</h3>
    <div className="flex flex-col gap-2 mb-4">
      {ALL_SECTIONS.map(section => (
        <button
          key={section}
          onClick={() => onToggle(section)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
            selectedSections.includes(section) ? 'bg-green-500 text-white shadow-sm' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {section}: {t.sections[section]}
        </button>
      ))}
    </div>
    <button onClick={onSelectAll} className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold">
      {t.allSections}
    </button>
  </div>
));

const Flashcard = React.memo(({ isFlipped, onFlip, frontText, backText, t, audioSrc, onPlayAudio }: {
  isFlipped: boolean, onFlip: () => void, frontText: string, backText: string, t: LanguageStrings, audioSrc?: string, onPlayAudio: (e: React.MouseEvent) => void;
}) => (
  <div className="w-full h-64 perspective-1000">
    <div
      className="relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-3d"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      onClick={onFlip}
    >
      <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 backface-hidden">
        {audioSrc && (
          <button onClick={onPlayAudio} className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors z-10" aria-label="Play audio">
            <Ear size={24} />
          </button>
        )}
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-800">{frontText}</p>
          <span className="mt-4 text-sm text-gray-500 block">{t.clickToFlip}</span>
        </div>
      </div>
      <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-700">{backText}</p>
          <span className="mt-4 text-sm text-gray-500 block">{t.clickToFlipBack}</span>
        </div>
      </div>
    </div>
  </div>
));

const CardControls = React.memo(({ t, onPrev, onNext, onShuffle, onReset }: {
  t: LanguageStrings, onPrev: () => void, onNext: () => void, onShuffle: () => void, onReset: () => void
}) => (
  <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6">
    <div className="flex gap-4">
      <button onClick={onPrev} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 sm:w-28">
        <ChevronLeft size={20} /> {t.previous}
      </button>
      <button onClick={onNext} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 sm:w-28">
        {t.next} <ChevronRight size={20} />
      </button>
    </div>
    <div className="flex gap-4">
      <button onClick={onShuffle} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-purple-500 hover:bg-purple-600 sm:w-28">
        <Shuffle size={16} /> {t.shuffle}
      </button>
      <button onClick={onReset} className="px-4 py-2 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 bg-gray-500 hover:bg-gray-600 sm:w-28">
        <RotateCcw size={16} /> {t.reset}
      </button>
    </div>
  </div>
));

const ProgressBar = React.memo(({ current, total }: { current: number, total: number }) => (
  <div className="mt-6">
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-green-500 h-2.5 rounded-full transition-all duration-300" style={{ width: total > 0 ? `${(current / total) * 100}%` : '0%' }}/>
    </div>
  </div>
));

const StudyTips = React.memo(({ t }: { t: LanguageStrings }) => (
  <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
    <h3 className="font-semibold text-yellow-800 mb-2">{t.studyTips}:</h3>
    <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
      <li>{t.tip1}</li> <li>{t.tip2}</li> <li>{t.tip3}</li> <li>{t.tip4}</li>
    </ul>
  </div>
));

const VocabularyList = React.memo(({ vocab, currentLanguage, t }: { vocab: Card[], currentLanguage: LanguageKey, t: LanguageStrings }) => (
  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <h4 className="font-bold text-blue-800 mb-3">{t.keyVocabulary}</h4>
    <ul className="space-y-2">
      {vocab.map((item, index) => (
        <li key={index} className="flex justify-between items-center text-sm">
          <span className="font-semibold text-gray-700">{item.german}</span>
          <span className="text-blue-700 text-right">{item.translations[currentLanguage]}</span>
        </li>
      ))}
    </ul>
  </div>
));

const AudioProgressBar = React.memo(({ duration, currentTime, onSeek }: { duration: number; currentTime: number; onSeek: (time: number) => void; }) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const percentage = clickPosition / progressBar.offsetWidth;
    onSeek(duration * percentage);
  };
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const floorSeconds = Math.floor(seconds);
    const mins = Math.floor(floorSeconds / 60);
    const secs = floorSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  return (
    <div className="flex items-center gap-3 w-full">
      <span className="text-xs font-mono text-gray-500 w-10 text-right">{formatTime(currentTime)}</span>
      <div className="w-full bg-gray-200 rounded-full h-2 cursor-pointer group" onClick={handleSeek}>
        <div className="bg-blue-500 h-2 rounded-full relative" style={{ width: `${progress}%` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <span className="text-xs font-mono text-gray-500 w-10">{formatTime(duration)}</span>
    </div>
  );
});

const AudioControlBar = React.memo(({ t, title, isPlaying, togglePlayPause, duration, currentTime, onSeek, checkAnswers, setShowAnswers, setIsVocabVisible }: {
  t: LanguageStrings; title: string; isPlaying: boolean; togglePlayPause: () => void; duration: number; currentTime: number; onSeek: (time: number) => void;
  checkAnswers: () => void; setShowAnswers: Dispatch<SetStateAction<boolean>>; setIsVocabVisible: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm shadow-md p-4 rounded-xl mb-6">
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <button onClick={togglePlayPause} className="flex-shrink-0 w-14 h-14 rounded-full text-white font-semibold flex items-center justify-center transition-colors bg-blue-500 hover:bg-blue-600 shadow-lg" aria-label={isPlaying ? t.pauseAudio : t.playAudio}>
        {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
      </button>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800 truncate" title={title}>{title}</h3>
          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={checkAnswers} className="p-2 rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors" title={t.checkAnswers}><CheckCircle2 size={20} /></button>
            <button onClick={() => setShowAnswers(prev => !prev)} className="p-2 rounded-full text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 transition-colors" title={t.showAnswers}><Eye size={20} /></button>
            <button onClick={() => setIsVocabVisible(prev => !prev)} className="p-2 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors" title={t.keyVocabulary}><BookOpen size={20} /></button>
          </div>
        </div>
        <AudioProgressBar duration={duration} currentTime={currentTime} onSeek={onSeek} />
      </div>
    </div>
  </div>
));

const ListeningPracticeMode = ({ t, currentLanguage }: { t: LanguageStrings, currentLanguage: LanguageKey }) => {
  const [selectedContentId, setSelectedContentId] = useState<number>(learningContent[0].id);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, 'correct' | 'incorrect' | null>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVocabVisible, setIsVocabVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio());
  const mainContentRef = useRef<HTMLElement>(null);
  const selectedContent = useMemo(() => learningContent.find(p => p.id === selectedContentId)!, [selectedContentId]);
  const blanks = useMemo(() => selectedContent.parts.filter(p => typeof p === 'object' && 'answer' in p) as Blank[], [selectedContent]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.src = selectedContent.audioSrc;
    const setAudioData = () => { setDuration(audio.duration); setCurrentTime(audio.currentTime); };
    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => { setIsPlaying(false); setCurrentTime(0); };
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [selectedContent.audioSrc]);

  const resetState = useCallback(() => {
    const initialAnswers: Record<number, string> = {};
    blanks.forEach((_, index) => { initialAnswers[index] = ''; });
    setUserAnswers(initialAnswers);
    setResults({});
    setShowAnswers(false);
    setIsVocabVisible(false);
    setCurrentTime(0);
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
    if(mainContentRef.current) mainContentRef.current.parentElement?.scrollTo(0, 0);
  }, [blanks]);
  
  useEffect(() => { resetState(); }, [selectedContentId, resetState]);

  const handleAnswerChange = (index: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [index]: value }));
    if (results[index]) setResults(prev => ({ ...prev, [index]: null }));
  };
  
  const togglePlayPause = useCallback(() => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(error => console.error("Error playing audio:", error));
  }, [isPlaying]);

  const handleSeek = useCallback((time: number) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const checkAnswers = () => {
    const newResults: Record<number, 'correct' | 'incorrect' | null> = {};
    blanks.forEach((blank, index) => {
      const correctAnswer = blank.answer;
      const userAnswer = userAnswers[index] || '';
      newResults[index] = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? 'correct' : 'incorrect';
    });
    setResults(newResults);
    setShowAnswers(false);
  };

  const handleContentSelect = (contentId: number) => {
    setSelectedContentId(contentId);
    setIsSidebarOpen(false);
  };

  let blankCounter = -1;

  const sidebarContent = (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-6">
      <h3 className="text-xl font-bold mb-4">{t.selectPassage}</h3>
      <div className="flex flex-col gap-2">
        {learningContent.map(content => (
          <button
            key={content.id}
            onClick={() => handleContentSelect(content.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm flex items-center gap-3 ${
              selectedContentId === content.id ? 'bg-green-500 text-white shadow-md' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {content.type === 'dialogue' ? <Users size={16} className="opacity-70 flex-shrink-0"/> : <User size={16} className="opacity-70 flex-shrink-0"/>}
            <span className="flex-grow font-semibold">{content.title} <span className="font-normal opacity-80">({content.level})</span></span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-blue-600 transition-colors">
        <Menu size={24} />
      </button>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>{sidebarContent}</MobileSidebar>
      <aside className="hidden lg:block w-full lg:w-1/3 lg:max-h-[80vh] lg:overflow-y-auto">{sidebarContent}</aside>
      <div className="w-full lg:w-2/3 lg:max-h-[80vh] overflow-y-auto rounded-xl shadow-lg bg-white">
        <main ref={mainContentRef} className="p-6 sm:p-8 relative">
          <AudioControlBar t={t} title={selectedContent.title} isPlaying={isPlaying} togglePlayPause={togglePlayPause} duration={duration} currentTime={currentTime} onSeek={handleSeek} checkAnswers={checkAnswers} setShowAnswers={setShowAnswers} setIsVocabVisible={setIsVocabVisible} />
          <p className="text-gray-600 mb-8 text-center">{t.passageInstructions}</p>
          <div className="prose max-w-none text-xl leading-loose">
            {selectedContent.parts.map((part, partIndex) => {
              if (typeof part === 'object' && 'speaker' in part) {
                return <div key={partIndex} className="mt-5 first:mt-0"><strong className="font-semibold text-gray-900 block mb-1">{part.speaker}:</strong></div>;
              }
              if (typeof part === 'object' && 'answer' in part) {
                blankCounter++;
                const blankIndex = blankCounter;
                const result = results[blankIndex];
                const isCorrect = result === 'correct';
                const isIncorrect = result === 'incorrect';
                const inputClassName = `mx-1.5 inline-block bg-gray-100 rounded-md border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-xl px-2 py-0.5
                    ${isCorrect ? 'ring-2 ring-green-500 border-transparent' : ''} ${isIncorrect ? 'ring-2 ring-red-500 border-transparent' : ''} ${!result ? 'focus:ring-blue-500' : ''}`;
                return (
                  <span key={partIndex} className="inline-block relative align-baseline">
                    <input type="text" value={showAnswers ? part.answer : (userAnswers[blankIndex] || '')} onChange={e => handleAnswerChange(blankIndex, e.target.value)} disabled={showAnswers} style={{ width: `${part.size * 1.1}ch`, minWidth: '5ch' }} className={inputClassName} aria-label={`Blank ${blankIndex + 1}`} />
                    {isCorrect && <CheckCircle2 size={18} className="absolute -right-2 top-0 text-green-500 bg-white rounded-full"/>}
                    {isIncorrect && <XCircle size={18} className="absolute -right-2 top-0 text-red-500 bg-white rounded-full"/>}
                  </span>
                );
              }
              return <span key={partIndex}>{part}</span>;
            })}
          </div>
          {isVocabVisible && selectedContent.vocabulary && <div className="mt-10 pt-6 border-t"><VocabularyList vocab={selectedContent.vocabulary} currentLanguage={currentLanguage} t={t} /></div>}
        </main>
      </div>
    </div>
  );
};

const FlashcardMode = ({ t, currentLanguage }: { t: LanguageStrings, currentLanguage: LanguageKey }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showGermanFirst, setShowGermanFirst] = useState(true);
  const [selectedSections, setSelectedSections] = useState([1]);
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    return () => { if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; } };
  }, []);

  const filteredCards = useMemo(() => {
    return selectedSections.flatMap(section => allVocabulary[section] || []);
  }, [selectedSections]);

  useEffect(() => { setShuffledCards([...filteredCards]); }, [filteredCards]);
  useEffect(() => { setCurrentCardIndex(0); setIsFlipped(false); }, [shuffledCards]);

  const nextCard = useCallback(() => {
    if (shuffledCards.length === 0) return;
    setCurrentCardIndex(prev => (prev + 1) % shuffledCards.length);
    setIsFlipped(false);
  }, [shuffledCards.length]);

  const prevCard = useCallback(() => {
    if (shuffledCards.length === 0) return;
    setCurrentCardIndex(prev => (prev - 1 + shuffledCards.length) % shuffledCards.length);
    setIsFlipped(false);
  }, [shuffledCards.length]);

  const shuffleCards = useCallback(() => { setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5)); }, []);
  const resetCards = useCallback(() => { setShuffledCards([...filteredCards]); }, [filteredCards]);

  const toggleSection = useCallback((section: number) => {
    setSelectedSections(prev =>
      prev.includes(section) ? prev.length > 1 ? prev.filter(s => s !== section) : prev : [...prev, section].sort((a, b) => a - b)
    );
    setIsSidebarOpen(false);
  }, []);

  const selectAllSections = useCallback(() => {
    setSelectedSections(ALL_SECTIONS);
    setIsSidebarOpen(false);
  }, []);

  const currentFlashcard = shuffledCards[currentCardIndex];

  const handlePlayAudio = useCallback((event: React.MouseEvent) => {
    event.stopPropagation(); 
    const audio = audioRef.current;
    const audioSrc = currentFlashcard?.audioSrc;
    if (!audio || !audioSrc) return;
    const playAudio = () => { audio.currentTime = 0; audio.play().catch(e => console.error("Error playing audio:", e)); };
    if (audio.src.endsWith(audioSrc)) playAudio();
    else {
      audio.src = audioSrc;
      const onCanPlay = () => { playAudio(); audio.removeEventListener('canplaythrough', onCanPlay); };
      audio.addEventListener('canplaythrough', onCanPlay);
    }
  }, [currentFlashcard]);

  const frontText = showGermanFirst ? currentFlashcard?.german : currentFlashcard?.translations[currentLanguage];
  const backText = showGermanFirst ? currentFlashcard?.translations[currentLanguage] : currentFlashcard?.german;

  const sidebarContent = (
    <SectionSelector t={t} selectedSections={selectedSections} onToggle={toggleSection} onSelectAll={selectAllSections} />
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-blue-600 transition-colors">
        <Menu size={24} />
      </button>
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>{sidebarContent}</MobileSidebar>
      <div className="hidden lg:block w-full lg:w-1/3">{sidebarContent}</div>
      <main className="w-full lg:w-2/3">
        {!currentFlashcard ? (
          <div className="text-center p-10 bg-white rounded-xl shadow-lg h-full flex flex-col justify-center items-center">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Section</h2>
            <p className="text-gray-600">Please choose a vocabulary section to start learning.</p>
            <button onClick={() => setIsSidebarOpen(true)} className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold lg:hidden">
              Choose Sections
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">{t.currentCard} {currentCardIndex + 1} {t.of} {shuffledCards.length}</span>
                <button onClick={() => { setShowGermanFirst(p => !p); setIsFlipped(false); }} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-semibold">
                  {t.startWith}: {showGermanFirst ? 'Deutsch' : t.name}
                </button>
              </div>
              <Flashcard isFlipped={isFlipped} onFlip={() => setIsFlipped(p => !p)} frontText={frontText || ''} backText={backText || ''} t={t} audioSrc={showGermanFirst ? currentFlashcard?.audioSrc : undefined} onPlayAudio={handlePlayAudio} />
              <CardControls t={t} onPrev={prevCard} onNext={nextCard} onShuffle={shuffleCards} onReset={resetCards} />
              <ProgressBar current={currentCardIndex + 1} total={shuffledCards.length} />
            </div>
            <StudyTips t={t} />
          </>
        )}
      </main>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

const GermanVocabularyApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('english');
  const [mode, setMode] = useState('flashcards');
  const t = languages[currentLanguage];
  const testLanguage: TestLanguageKey = currentLanguage === 'english' ? 'en' : 'de';

   return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="p-4 bg-white rounded-xl shadow-lg mb-8 max-w-lg mx-auto">
          <h3 className="text-lg font-bold mb-3 text-center flex items-center justify-center gap-2">
            <Globe size={20}/> {t.language}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {(Object.keys(languages) as LanguageKey[]).map(lang => (
              <button key={lang} onClick={() => setCurrentLanguage(lang)}
                className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${
                    currentLanguage === lang ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}>
                {languages[lang].name}
              </button>
            ))}
          </div>
        </div>
        <ModeSwitcher mode={mode} setMode={setMode} t={t} />
        <div className="mt-8">
          {mode === 'flashcards' && <FlashcardMode t={t} currentLanguage={currentLanguage} />}
          {mode === 'listeningPractice' && <ListeningPracticeMode t={t} currentLanguage={currentLanguage} />}
{mode === 'grammarPractice' && <GrammarPracticeMode t={t} topics={module7Grammar} languageKey={currentLanguage} />}        </div>
{mode === 'selfTest' && <A11SelfTest tests={a11Tests} language={testLanguage} />}      </div>
    </div>
  );
};

export default GermanVocabularyApp;