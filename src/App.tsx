import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle, BookOpen, Globe } from 'lucide-react';

// --- TYPE DEFINITIONS ---
type Translations = {
  english: string;
  ukrainian: string;
  polish: string;
  albanian: string;
};

type Card = {
  german: string;
  translations: Translations;
};

type LanguageKey = keyof Translations;

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
};

// --- CONSTANTS (Moved outside the component for performance) ---
const languages: Record<LanguageKey, LanguageStrings> = {
  english: {
    name: 'English',
    selectSections: 'Select Sections',
    allSections: 'All Sections',
    currentCard: 'Card',
    of: 'of',
    clickToFlip: 'Click to see translation',
    clickToFlipBack: 'Click to flip back',
    previous: 'Previous',
    next: 'Next',
    startWith: 'Start with',
    shuffle: 'Shuffle',
    reset: 'Reset',
    language: 'Language',
    studyTips: 'Study Tips',
    tip1: 'Try to recall the translation before flipping the card.',
    tip2: 'Use the shuffle function to test your knowledge randomly.',
    tip3: 'Practice both German → Translation and Translation → German.',
    tip4: 'Focus extra time on cards you find difficult.',
    sections: { 1: 'Basic Greetings & Questions', 2: 'Objects & School Items', 3: 'Home & Furniture', 4: 'Family & Activities', 5: 'Time & Daily Activities' }
  },
  ukrainian: {
    name: 'Українська',
    selectSections: 'Оберіть розділи',
    allSections: 'Всі розділи',
    currentCard: 'Картка',
    of: 'з',
    clickToFlip: 'Натисніть, щоб побачити переклад',
    clickToFlipBack: 'Натисніть, щоб повернути',
    previous: 'Попередня',
    next: 'Наступна',
    startWith: 'Почати з',
    shuffle: 'Перемішати',
    reset: 'Скинути',
    language: 'Мова',
    studyTips: 'Поради для навчання',
    tip1: 'Спробуйте згадати переклад перед перевертанням картки.',
    tip2: 'Використовуйте функцію перемішування для випадкової перевірки.',
    tip3: 'Практикуйте німецьку → переклад і переклад → німецьку.',
    tip4: 'Приділяйте більше часу складним карткам.',
    sections: { 1: 'Базові привітання та питання', 2: 'Предмети та шкільні речі', 3: 'Дім і меблі', 4: 'Сім\'я та активності', 5: 'Час і щоденні справи' }
  },
  polish: {
    name: 'Polski',
    selectSections: 'Wybierz sekcje',
    allSections: 'Wszystkie sekcje',
    currentCard: 'Karta',
    of: 'z',
    clickToFlip: 'Kliknij, aby zobaczyć tłumaczenie',
    clickToFlipBack: 'Kliknij, aby odwrócić',
    previous: 'Poprzednia',
    next: 'Następna',
    startWith: 'Zacznij od',
    shuffle: 'Tasuj',
    reset: 'Resetuj',
    language: 'Język',
    studyTips: 'Wskazówki do nauki',
    tip1: 'Spróbuj przypomnieć sobie tłumaczenie przed odwróceniem karty.',
    tip2: 'Użyj funkcji tasowania do losowego testowania wiedzy.',
    tip3: 'Ćwicz niemiecki → tłumaczenie i tłumaczenie → niemiecki.',
    tip4: 'Poświęć więcej czasu na trudne karty.',
    sections: { 1: 'Podstawowe powitania i pytania', 2: 'Przedmioty i artykuły szkolne', 3: 'Dom i meble', 4: 'Rodzina i aktywności', 5: 'Czas i codzienne czynności' }
  },
  albanian: {
    name: 'Shqip',
    selectSections: 'Zgjidhni seksionet',
    allSections: 'Të gjitha seksionet',
    currentCard: 'Karta',
    of: 'nga',
    clickToFlip: 'Klikoni për të parë përkthimin',
    clickToFlipBack: 'Klikoni për të kthyer',
    previous: 'E mëparshme',
    next: 'Tjetër',
    startWith: 'Filloni me',
    shuffle: 'Përzieni',
    reset: 'Rivendos',
    language: 'Gjuha',
    studyTips: 'Këshilla për studim',
    tip1: 'Përpiquni të kujtoni përkthimin para se të ktheni kartën.',
    tip2: 'Përdorni funksionin e përzierjes për të testuar njohuritë në mënyrë të rastësishme.',
    tip3: 'Praktikoni gjermanisht → përkthim dhe përkthim → gjermanisht.',
    tip4: 'Fokusohuni më shumë te kartat që i gjeni të vështira.',
    sections: { 1: 'Përshëndetje dhe pyetje bazike', 2: 'Objekte dhe artikuj shkolle', 3: 'Shtëpia dhe mobiliet', 4: 'Familja dhe aktivitetet', 5: 'Koha dhe aktivitetet e përditshme' }
  }
};

const allVocabulary: Record<number, Card[]> = {
  1: [
    { german: "wie", translations: { english: "how", ukrainian: "як", polish: "jak", albanian: "si" }},
    { german: "heißen", translations: { english: "to be called", ukrainian: "називатися", polish: "nazywać się", albanian: "të quhem" }},
    { german: "Wie heißen Sie?", translations: { english: "What is your name?", ukrainian: "Як Вас звати?", polish: "Jak się Pan/Pani nazywa?", albanian: "Si quheni?" }},
    { german: "Guten Tag", translations: { english: "Good day", ukrainian: "Добрий день", polish: "Dzień dobry", albanian: "Mirëdita" }},
    { german: "und", translations: { english: "and", ukrainian: "і", polish: "i", albanian: "dhe" }},
    { german: "woher", translations: { english: "from where", ukrainian: "звідки", polish: "skąd", albanian: "nga ku" }},
    { german: "kommen", translations: { english: "to come", ukrainian: "приходити", polish: "przyjść", albanian: "të vij" }},
    { german: "Woher kommen Sie?", translations: { english: "Where do you come from?", ukrainian: "Звідки Ви?", polish: "Skąd Pan/Pani pochodzi?", albanian: "Nga ku vini?" }},
    { german: "Guten Morgen", translations: { english: "Good morning", ukrainian: "Доброго ранку", polish: "Dzień dobry", albanian: "Mirëmëngjes" }},
    { german: "der Name", translations: { english: "the name", ukrainian: "ім'я", polish: "imię", albanian: "emri" }},
    { german: "neu", translations: { english: "new", ukrainian: "новий", polish: "nowy", albanian: "i ri" }},
    { german: "das Haus", translations: { english: "the house", ukrainian: "дім", polish: "dom", albanian: "shtëpia" }},
    { german: "wohnen", translations: { english: "to live", ukrainian: "жити", polish: "mieszkać", albanian: "të jetoj" }},
    { german: "hier", translations: { english: "here", ukrainian: "тут", polish: "tutaj", albanian: "këtu" }},
    { german: "Hallo", translations: { english: "Hello", ukrainian: "Привіт", polish: "Cześć", albanian: "Përshëndetje" }},
    { german: "wer", translations: { english: "who", ukrainian: "хто", polish: "kto", albanian: "kush" }},
    { german: "schreiben", translations: { english: "to write", ukrainian: "писати", polish: "pisać", albanian: "të shkruaj" }},
    { german: "buchstabieren", translations: { english: "to spell", ukrainian: "писати по літерах", polish: "literować", albanian: "të shkruaj shkronja për shkronja" }},
    { german: "der Familienname", translations: { english: "family name", ukrainian: "прізвище", polish: "nazwisko", albanian: "mbiemri" }},
    { german: "der Vorname", translations: { english: "first name", ukrainian: "ім'я", polish: "imię", albanian: "emri" }},
    { german: "das Land", translations: { english: "country", ukrainian: "країна", polish: "kraj", albanian: "vendi" }},
    { german: "danke", translations: { english: "thank you", ukrainian: "дякую", polish: "dziękuję", albanian: "faleminderit" }},
    { german: "gut", translations: { english: "good", ukrainian: "добре", polish: "dobrze", albanian: "mirë" }},
    { german: "auch", translations: { english: "also", ukrainian: "також", polish: "też", albanian: "gjithashtu" }},
    { german: "was", translations: { english: "what", ukrainian: "що", polish: "co", albanian: "çfarë" }},
    { german: "machen", translations: { english: "to do/make", ukrainian: "робити", polish: "robić", albanian: "të bëj" }},
    { german: "lernen", translations: { english: "to learn", ukrainian: "вчитися", polish: "uczyć się", albanian: "të mësoj" }},
    { german: "Deutsch", translations: { english: "German", ukrainian: "німецька", polish: "niemiecki", albanian: "gjermanishte" }},
    { german: "wo", translations: { english: "where", ukrainian: "де", polish: "gdzie", albanian: "ku" }},
    { german: "ja", translations: { english: "yes", ukrainian: "так", polish: "tak", albanian: "po" }},
    { german: "nein", translations: { english: "no", ukrainian: "ні", polish: "nie", albanian: "jo" }},
    { german: "nicht", translations: { english: "not", ukrainian: "не", polish: "nie", albanian: "jo" }}
  ],
  2: [
    { german: "die Heimat", translations: { english: "homeland", ukrainian: "батьківщина", polish: "ojczyzna", albanian: "atdheu" }},
    { german: "die Nationalität", translations: { english: "nationality", ukrainian: "національність", polish: "narodowość", albanian: "kombësia" }},
    { german: "die Sprache", translations: { english: "language", ukrainian: "мова", polish: "język", albanian: "gjuha" }},
    { german: "sprechen", translations: { english: "to speak", ukrainian: "говорити", polish: "mówić", albanian: "të flas" }},
    { german: "ein bisschen", translations: { english: "a little", ukrainian: "трохи", polish: "trochę", albanian: "pak" }},
    { german: "arbeiten", translations: { english: "to work", ukrainian: "працювати", polish: "pracować", albanian: "të punoj" }},
    { german: "lieben", translations: { english: "to love", ukrainian: "любити", polish: "kochać", albanian: "të dua" }},
    { german: "leben", translations: { english: "to live", ukrainian: "жити", polish: "żyć", albanian: "të jetoj" }},
    { german: "suchen", translations: { english: "to search", ukrainian: "шукати", polish: "szukać", albanian: "të kërkoj" }},
    { german: "die Arbeit", translations: { english: "work", ukrainian: "робота", polish: "praca", albanian: "puna" }},
    { german: "der Stift", translations: { english: "pen", ukrainian: "ручка", polish: "długopis", albanian: "stilolapsi" }},
    { german: "der Kugelschreiber", translations: { english: "ballpoint pen", ukrainian: "кулькова ручка", polish: "długopis", albanian: "stilolapsi" }},
    { german: "der Laptop", translations: { english: "laptop", ukrainian: "ноутбук", polish: "laptop", albanian: "laptop" }},
    { german: "das Tablet", translations: { english: "tablet", ukrainian: "планшет", polish: "tablet", albanian: "tablet" }},
    { german: "der Schlüssel", translations: { english: "key", ukrainian: "ключ", polish: "klucz", albanian: "çelësi" }},
    { german: "der Tisch", translations: { english: "table", ukrainian: "стіл", polish: "stół", albanian: "tavolina" }},
    { german: "der Stuhl", translations: { english: "chair", ukrainian: "стілець", polish: "krzesło", albanian: "karriga" }},
    { german: "das Buch", translations: { english: "book", ukrainian: "книга", polish: "książka", albanian: "libri" }},
    { german: "das Heft", translations: { english: "notebook", ukrainian: "зошит", polish: "zeszyt", albanian: "fletorja" }},
    { german: "das Handy", translations: { english: "mobile phone", ukrainian: "мобільний телефон", polish: "telefon komórkowy", albanian: "celulari" }},
    { german: "das Fenster", translations: { english: "window", ukrainian: "вікно", polish: "okno", albanian: "dritarja" }},
    { german: "die Lampe", translations: { english: "lamp", ukrainian: "лампа", polish: "lampa", albanian: "llamba" }},
    { german: "die Brille", translations: { english: "glasses", ukrainian: "окуляри", polish: "okulary", albanian: "syzet" }},
    { german: "die CD", translations: { english: "CD", ukrainian: "компакт-диск", polish: "płyta CD", albanian: "CD" }},
    { german: "die Flasche", translations: { english: "bottle", ukrainian: "пляшка", polish: "butelka", albanian: "shishja" }},
    { german: "die Tür", translations: { english: "door", ukrainian: "двері", polish: "drzwi", albanian: "dera" }},
    { german: "die Uhr", translations: { english: "clock/watch", ukrainian: "годинник", polish: "zegarek", albanian: "ora" }},
    { german: "die Tafel", translations: { english: "blackboard", ukrainian: "дошка", polish: "tablica", albanian: "tabela" }},
    { german: "die Tasche", translations: { english: "bag", ukrainian: "сумка", polish: "torba", albanian: "çanta" }},
    { german: "kosten", translations: { english: "to cost", ukrainian: "коштувати", polish: "kosztować", albanian: "të kushtoj" }},
    { german: "der Euro", translations: { english: "euro", ukrainian: "євро", polish: "euro", albanian: "euro" }},
    { german: "richtig", translations: { english: "correct", ukrainian: "правильно", polish: "poprawnie", albanian: "saktë" }},
    { german: "kaputt", translations: { english: "broken", ukrainian: "зламаний", polish: "zepsuty", albanian: "i prishur" }},
    { german: "interessant", translations: { english: "interesting", ukrainian: "цікавий", polish: "interesujący", albanian: "interesant" }},
    { german: "die Adresse", translations: { english: "address", ukrainian: "адреса", polish: "adres", albanian: "adresa" }},
    { german: "die Straße", translations: { english: "street", ukrainian: "вулиця", polish: "ulica", albanian: "rruga" }},
    { german: "die Postleitzahl", translations: { english: "postal code", ukrainian: "поштовий індекс", polish: "kod pocztowy", albanian: "kodi postar" }},
    { german: "der Beruf", translations: { english: "profession", ukrainian: "професія", polish: "zawód", albanian: "profesioni" }},
    { german: "der Ingenieur", translations: { english: "engineer", ukrainian: "інженер", polish: "inżynier", albanian: "inxhinier" }},
    { german: "der Verkäufer", translations: { english: "salesperson", ukrainian: "продавець", polish: "sprzedawca", albanian: "shitës" }},
    { german: "der Arzt", translations: { english: "doctor", ukrainian: "лікар", polish: "lekarz", albanian: "mjek" }},
    { german: "der Lehrer", translations: { english: "teacher", ukrainian: "вчитель", polish: "nauczyciel", albanian: "mësues" }}
  ],
  3: [
    { german: "die Wohnung", translations: { english: "apartment", ukrainian: "квартира", polish: "mieszkanie", albanian: "apartamenti" }},
    { german: "das Wohnzimmer", translations: { english: "living room", ukrainian: "вітальня", polish: "salon", albanian: "dhoma e ndenjjes" }},
    { german: "das Schlafzimmer", translations: { english: "bedroom", ukrainian: "спальня", polish: "sypialnia", albanian: "dhoma e gjumit" }},
    { german: "die Küche", translations: { english: "kitchen", ukrainian: "кухня", polish: "kuchnia", albanian: "kuzhina" }},
    { german: "die Möbel", translations: { english: "furniture", ukrainian: "меблі", polish: "meble", albanian: "mobilje" }},
    { german: "der Schrank", translations: { english: "wardrobe", ukrainian: "шафа", polish: "szafa", albanian: "dollapi" }},
    { german: "der Sessel", translations: { english: "armchair", ukrainian: "крісло", polish: "fotel", albanian: "kolltuku" }},
    { german: "das Sofa", translations: { english: "sofa", ukrainian: "диван", polish: "sofa", albanian: "divan" }},
    { german: "das Regal", translations: { english: "shelf", ukrainian: "полиця", polish: "półka", albanian: "raft" }},
    { german: "der Teppich", translations: { english: "carpet", ukrainian: "килим", polish: "dywan", albanian: "qilim" }},
    { german: "das Bild", translations: { english: "picture", ukrainian: "картина", polish: "obraz", albanian: "figura" }},
    { german: "der Vorhang", translations: { english: "curtain", ukrainian: "завіса", polish: "zasłona", albanian: "perde" }},
    { german: "das Bett", translations: { english: "bed", ukrainian: "ліжко", polish: "łóżko", albanian: "krevati" }},
    { german: "der Fernseher", translations: { english: "television", ukrainian: "телевізор", polish: "telewizor", albanian: "televizori" }},
    { german: "der Herd", translations: { english: "stove", ukrainian: "плита", polish: "kuchenka", albanian: "soba" }},
    { german: "die Spüle", translations: { english: "sink", ukrainian: "мийка", polish: "zlew", albanian: "lavamani" }},
    { german: "modern", translations: { english: "modern", ukrainian: "сучасний", polish: "nowoczesny", albanian: "modern" }},
    { german: "groß", translations: { english: "big", ukrainian: "великий", polish: "duży", albanian: "i madh" }},
    { german: "klein", translations: { english: "small", ukrainian: "маленький", polish: "mały", albanian: "i vogël" }},
    { german: "schön", translations: { english: "beautiful", ukrainian: "красивий", polish: "ładny", albanian: "i bukur" }},
    { german: "hässlich", translations: { english: "ugly", ukrainian: "потворний", polish: "brzydki", albanian: "i shëmtuar" }},
    { german: "bequem", translations: { english: "comfortable", ukrainian: "зручний", polish: "wygodny", albanian: "i rehatshëm" }},
    { german: "haben", translations: { english: "to have", ukrainian: "мати", polish: "mieć", albanian: "të kem" }},
    { german: "brauchen", translations: { english: "to need", ukrainian: "потребувати", polish: "potrzebować", albanian: "të kem nevojë" }},
    { german: "kaufen", translations: { english: "to buy", ukrainian: "купувати", polish: "kupować", albanian: "të blej" }},
    { german: "der Kühlschrank", translations: { english: "refrigerator", ukrainian: "холодильник", polish: "lodówka", albanian: "frigoriferi" }},
    { german: "die Blume", translations: { english: "flower", ukrainian: "квітка", polish: "kwiat", albanian: "lulja" }},
    { german: "die Mikrowelle", translations: { english: "microwave", ukrainian: "мікрохвильова піч", polish: "kuchenka mikrofalowa", albanian: "mikrovalë" }},
    { german: "die Waschmaschine", translations: { english: "washing machine", ukrainian: "пральна машина", polish: "pralka", albanian: "makina e rrobave" }},
    { german: "die Farbe", translations: { english: "color", ukrainian: "колір", polish: "kolor", albanian: "ngjyra" }},
    { german: "gelb", translations: { english: "yellow", ukrainian: "жовтий", polish: "żółty", albanian: "e verdhë" }},
    { german: "rot", translations: { english: "red", ukrainian: "червоний", polish: "czerwony", albanian: "e kuqe" }},
    { german: "blau", translations: { english: "blue", ukrainian: "синій", polish: "niebieski", albanian: "blu" }},
    { german: "grün", translations: { english: "green", ukrainian: "зелений", polish: "zielony", albanian: "gjelbër" }},
    { german: "schwarz", translations: { english: "black", ukrainian: "чорний", polish: "czarny", albanian: "e zezë" }},
    { german: "weiß", translations: { english: "white", ukrainian: "білий", polish: "biały", albanian: "e bardhë" }},
    { german: "super", translations: { english: "super", ukrainian: "супер", polish: "super", albanian: "super" }},
    { german: "toll", translations: { english: "great", ukrainian: "чудово", polish: "świetnie", albanian: "bukur" }},
    { german: "gemütlich", translations: { english: "cozy", ukrainian: "затишний", polish: "przytulny", albanian: "i qetë" }},
    { german: "der Balkon", translations: { english: "balcony", ukrainian: "балкон", polish: "balkon", albanian: "balkoni" }},
    { german: "der Garten", translations: { english: "garden", ukrainian: "сад", polish: "ogród", albanian: "kopshti" }},
    { german: "die Miete", translations: { english: "rent", ukrainian: "оренда", polish: "czynsz", albanian: "qiraja" }},
    { german: "kalt", translations: { english: "cold", ukrainian: "холодний", polish: "zimny", albanian: "ftohtë" }},
    { german: "warm", translations: { english: "warm", ukrainian: "теплий", polish: "ciepły", albanian: "ngrohtë" }},
    { german: "hell", translations: { english: "bright", ukrainian: "світлий", polish: "jasny", albanian: "i ndritshëm" }},
    { german: "dunkel", translations: { english: "dark", ukrainian: "темний", polish: "ciemny", albanian: "errët" }},
    { german: "laut", translations: { english: "loud", ukrainian: "гучний", polish: "głośny", albanian: "zhurmshëm" }},
    { german: "ruhig", translations: { english: "quiet", ukrainian: "тихий", polish: "cichy", albanian: "qetë" }},
    { german: "günstig", translations: { english: "cheap", ukrainian: "дешевий", polish: "tani", albanian: "i lirë" }}
  ],
  4: [
    { german: "der Vater", translations: { english: "father", ukrainian: "батько", polish: "ojciec", albanian: "babai" }},
    { german: "die Mutter", translations: { english: "mother", ukrainian: "мати", polish: "matka", albanian: "nëna" }},
    { german: "die Eltern", translations: { english: "parents", ukrainian: "батьки", polish: "rodzice", albanian: "prindërit" }},
    { german: "der Bruder", translations: { english: "brother", ukrainian: "брат", polish: "brat", albanian: "vëllai" }},
    { german: "die Schwester", translations: { english: "sister", ukrainian: "сестра", polish: "siostra", albanian: "motra" }},
    { german: "der Onkel", translations: { english: "uncle", ukrainian: "дядько", polish: "wujek", albanian: "xhaxhai" }},
    { german: "die Tante", translations: { english: "aunt", ukrainian: "тітка", polish: "ciocia", albanian: "tezja" }},
    { german: "der Sohn", translations: { english: "son", ukrainian: "син", polish: "syn", albanian: "djali" }},
    { german: "die Tochter", translations: { english: "daughter", ukrainian: "дочка", polish: "córka", albanian: "vajza" }},
    { german: "das Foto", translations: { english: "photo", ukrainian: "фото", polish: "zdjęcie", albanian: "fotografia" }},
    { german: "zu Hause", translations: { english: "at home", ukrainian: "вдома", polish: "w domu", albanian: "në shtëpi" }},
    { german: "studieren", translations: { english: "to study", ukrainian: "навчатися", polish: "studiować", albanian: "të studioj" }},
    { german: "die Freizeit", translations: { english: "free time", ukrainian: "вільний час", polish: "czas wolny", albanian: "koha e lirë" }},
    { german: "die Familie", translations: { english: "family", ukrainian: "сім'я", polish: "rodzina", albanian: "familja" }},
    { german: "alle", translations: { english: "all", ukrainian: "всі", polish: "wszyscy", albanian: "të gjithë" }},
    { german: "faulenzen", translations: { english: "to laze around", ukrainian: "лінуватися", polish: "leniuchować", albanian: "të dërgjem" }},
    { german: "schlafen", translations: { english: "to sleep", ukrainian: "спати", polish: "spać", albanian: "të fle" }},
    { german: "essen", translations: { english: "to eat", ukrainian: "їсти", polish: "jeść", albanian: "të ha" }},
    { german: "lesen", translations: { english: "to read", ukrainian: "читати", polish: "czytać", albanian: "të lexoj" }},
    { german: "sehen", translations: { english: "to see", ukrainian: "бачити", polish: "widzieć", albanian: "të shoh" }},
    { german: "nehmen", translations: { english: "to take", ukrainian: "брати", polish: "brać", albanian: "të marr" }},
    { german: "fahren", translations: { english: "to drive", ukrainian: "їхати", polish: "jechać", albanian: "të drejtoj" }},
    { german: "treffen", translations: { english: "to meet", ukrainian: "зустрічатися", polish: "spotkać", albanian: "të takoj" }},
    { german: "die Schokolade", translations: { english: "chocolate", ukrainian: "шоколад", polish: "czekolada", albanian: "çokollata" }},
    { german: "die Pizza", translations: { english: "pizza", ukrainian: "піца", polish: "pizza", albanian: "pica" }},
    { german: "der Film", translations: { english: "film", ukrainian: "фільм", polish: "film", albanian: "filmi" }},
    { german: "nach Hause", translations: { english: "home", ukrainian: "додому", polish: "do domu", albanian: "në shtëpi" }},
    { german: "Zeit haben", translations: { english: "to have time", ukrainian: "мати час", polish: "mieć czas", albanian: "të kem kohë" }},
    { german: "gern", translations: { english: "gladly", ukrainian: "охоче", polish: "chętnie", albanian: "me kënaqësi" }},
    { german: "das Wochenende", translations: { english: "weekend", ukrainian: "вихідні", polish: "weekend", albanian: "fundjavë" }},
    { german: "bleiben", translations: { english: "to stay", ukrainian: "залишатися", polish: "zostawać", albanian: "të rri" }},
    { german: "chillen", translations: { english: "to chill", ukrainian: "відпочивати", polish: "chillować", albanian: "të çlodhëm" }},
    { german: "der Tag", translations: { english: "day", ukrainian: "день", polish: "dzień", albanian: "dita" }},
    { german: "wohin", translations: { english: "where to", ukrainian: "куди", polish: "dokąd", albanian: "ku" }},
    { german: "der Supermarkt", translations: { english: "supermarket", ukrainian: "супермаркет", polish: "supermarket", albanian: "supermarket" }},
    { german: "besichtigen", translations: { english: "to visit/sightsee", ukrainian: "оглядати", polish: "zwiedzać", albanian: "të vizitoj" }},
    { german: "besuchen", translations: { english: "to visit", ukrainian: "відвідувати", polish: "odwiedzać", albanian: "të vizitoj" }},
    { german: "der Kaffee", translations: { english: "coffee", ukrainian: "кава", polish: "kawa", albanian: "kafeja" }},
    { german: "trinken", translations: { english: "to drink", ukrainian: "пити", polish: "pić", albanian: "të pi" }},
    { german: "kennen", translations: { english: "to know", ukrainian: "знати", polish: "znać", albanian: "të njoh" }},
    { german: "zuerst", translations: { english: "first", ukrainian: "спочатку", polish: "najpierw", albanian: "së pari" }},
    { german: "dann", translations: { english: "then", ukrainian: "потім", polish: "potem", albanian: "pastaj" }},
    { german: "danach", translations: { english: "after that", ukrainian: "після того", polish: "potem", albanian: "pas kësaj" }},
    { german: "früher", translations: { english: "earlier", ukrainian: "раніше", polish: "wcześniej", albanian: "më herët" }}
  ],
  5: [
    { german: "Fußball spielen", translations: { english: "to play football", ukrainian: "грати у футбол", polish: "grać w piłkę nożną", albanian: "të luaj futboll" }},
    { german: "joggen", translations: { english: "to jog", ukrainian: "бігати підтюпцем", polish: "biegać", albanian: "të vrapoj" }},
    { german: "ein Bild malen", translations: { english: "to paint a picture", ukrainian: "малювати картину", polish: "malować obraz", albanian: "të pikturoj" }},
    { german: "tanzen", translations: { english: "to dance", ukrainian: "танцювати", polish: "tańczyć", albanian: "të kërcej" }},
    { german: "im Internet surfen", translations: { english: "to surf the internet", ukrainian: "користуватися інтернетом", polish: "surfować po internecie", albanian: "të shfletoj internetin" }},
    { german: "grillen", translations: { english: "to grill", ukrainian: "готувати на грилі", polish: "grillować", albanian: "të pjek në skarë" }},
    { german: "Musik hören", translations: { english: "to listen to music", ukrainian: "слухати музику", polish: "słuchać muzyki", albanian: "të dëgjoj muzikë" }},
    { german: "schwimmen", translations: { english: "to swim", ukrainian: "плавати", polish: "pływać", albanian: "të notoj" }},
    { german: "das Hobby", translations: { english: "hobby", ukrainian: "хобі", polish: "hobby", albanian: "hobi" }},
    { german: "spät", translations: { english: "late", ukrainian: "пізно", polish: "późno", albanian: "vonë" }},
    { german: "Wie spät ist es?", translations: { english: "What time is it?", ukrainian: "Котра година?", polish: "Która godzina?", albanian: "Sa është ora?" }},
    { german: "halb", translations: { english: "half", ukrainian: "половина", polish: "pół", albanian: "gjysmë" }},
    { german: "Viertel vor", translations: { english: "quarter to", ukrainian: "без чверті", polish: "za kwadrans", albanian: "një çerek para" }},
    { german: "Viertel nach", translations: { english: "quarter past", ukrainian: "чверть на", polish: "kwadrans po", albanian: "një çerek pas" }},
    { german: "um", translations: { english: "at (time)", ukrainian: "о", polish: "o", albanian: "në" }},
    { german: "beginnen", translations: { english: "to begin", ukrainian: "починати", polish: "zaczynać", albanian: "të filloj" }},
    { german: "Um wie viel Uhr?", translations: { english: "At what time?", ukrainian: "О котрій годині?", polish: "O której godzinie?", albanian: "Në çfarë ore?" }},
    { german: "enden", translations: { english: "to end", ukrainian: "закінчувати", polish: "kończyć", albanian: "të mbaroj" }},
    { german: "gehen", translations: { english: "to go", ukrainian: "йти", polish: "iść", albanian: "të shkoj" }},
    { german: "von ... bis", translations: { english: "from ... to", ukrainian: "з ... до", polish: "od ... do", albanian: "nga ... deri" }},
    { german: "die Pause", translations: { english: "break", ukrainian: "перерва", polish: "przerwa", albanian: "pushimi" }},
    { german: "der Zug", translations: { english: "train", ukrainian: "поїзд", polish: "pociąg", albanian: "treni" }},
    { german: "der Radiowecker", translations: { english: "radio alarm clock", ukrainian: "радіобудильник", polish: "radiobudzik", albanian: "zgjuesi me radio" }},
    { german: "klingeln", translations: { english: "to ring", ukrainian: "дзвонити", polish: "dzwonić", albanian: "të bie" }},
    { german: "das Flugzeug", translations: { english: "airplane", ukrainian: "літак", polish: "samolot", albanian: "aeroplani" }},
    { german: "der Krimi", translations: { english: "crime show", ukrainian: "детектив", polish: "kryminał", albanian: "film kriminal" }},
    { german: "anrufen", translations: { english: "to call", ukrainian: "телефонувати", polish: "dzwonić", albanian: "të telefonoj" }},
    { german: "das Kino", translations: { english: "cinema", ukrainian: "кіно", polish: "kino", albanian: "kinema" }},
    { german: "anfangen", translations: { english: "to start", ukrainian: "починати", polish: "zaczynać", albanian: "të filloj" }},
    { german: "aufhören", translations: { english: "to stop", ukrainian: "припиняти", polish: "przestawać", albanian: "të ndaloj" }},
    { german: "aufstehen", translations: { english: "to get up", ukrainian: "вставати", polish: "wstawać", albanian: "të çohem" }},
    { german: "aufräumen", translations: { english: "to tidy up", ukrainian: "прибирати", polish: "sprzątać", albanian: "të pastroj" }},
    { german: "einkaufen", translations: { english: "to shop", ukrainian: "робити покупки", polish: "robić zakupy", albanian: "të bëj pazar" }},
    { german: "mitnehmen", translations: { english: "to take along", ukrainian: "брати з собою", polish: "brać ze sobą", albanian: "të marr me vete" }},
    { german: "die Zeitung", translations: { english: "newspaper", ukrainian: "газета", polish: "gazeta", albanian: "gazeta" }},
    { german: "fernsehen", translations: { english: "to watch TV", ukrainian: "дивитися телевізор", polish: "oglądać telewizję", albanian: "të shoh televizor" }},
    { german: "ausgehen", translations: { english: "to go out", ukrainian: "виходити", polish: "wychodzić", albanian: "të dal" }},
    { german: "wegfahren", translations: { english: "to drive away", ukrainian: "від'їжджати", polish: "odjeżdżać", albanian: "të largohem" }},
    { german: "mitkommen", translations: { english: "to come along", ukrainian: "йти разом", polish: "iść razem", albanian: "të vij bashkë" }},
    { german: "stattfinden", translations: { english: "to take place", ukrainian: "відбуватися", polish: "odbywać się", albanian: "të zhvillohet" }},
    { german: "ausfallen", translations: { english: "to be cancelled", ukrainian: "відмінятися", polish: "odwoływać", albanian: "të anulohet" }},
    { german: "einkaufen gehen", translations: { english: "to go shopping", ukrainian: "йти за покупками", polish: "iść na zakupy", albanian: "të shkoj për pazar" }},
    { german: "spazieren gehen", translations: { english: "to go for a walk", ukrainian: "йти на прогулянку", polish: "iść na spacer", albanian: "të shëtis" }},
    { german: "jeden Tag", translations: { english: "every day", ukrainian: "кожного дня", polish: "codziennie", albanian: "çdo ditë" }},
    { german: "der Ausflug", translations: { english: "excursion", ukrainian: "екскурсія", polish: "wycieczka", albanian: "udhëtim" }},
    { german: "heute", translations: { english: "today", ukrainian: "сьогодні", polish: "dzisiaj", albanian: "sot" }},
    { german: "die Woche", translations: { english: "week", ukrainian: "тиждень", polish: "tydzień", albanian: "java" }},
    { german: "der Montag", translations: { english: "Monday", ukrainian: "понеділок", polish: "poniedziałek", albanian: "e hënë" }},
    { german: "der Dienstag", translations: { english: "Tuesday", ukrainian: "вівторок", polish: "wtorek", albanian: "e martë" }},
    { german: "der Mittwoch", translations: { english: "Wednesday", ukrainian: "середа", polish: "środa", albanian: "e mërkurë" }},
    { german: "der Donnerstag", translations: { english: "Thursday", ukrainian: "четвер", polish: "czwartek", albanian: "e enjte" }},
    { german: "der Freitag", translations: { english: "Friday", ukrainian: "п'ятниця", polish: "piątek", albanian: "e premte" }},
    { german: "der Samstag", translations: { english: "Saturday", ukrainian: "субота", polish: "sobota", albanian: "e shtunë" }},
    { german: "der Sonntag", translations: { english: "Sunday", ukrainian: "неділя", polish: "niedziela", albanian: "e diel" }},
    { german: "die Hausaufgabe", translations: { english: "homework", ukrainian: "домашнє завдання", polish: "zadanie domowe", albanian: "detyra e shtëpisë" }},
    { german: "das Fahrrad", translations: { english: "bicycle", ukrainian: "велосипед", polish: "rower", albanian: "biçikletë" }},
    { german: "reparieren", translations: { english: "to repair", ukrainian: "ремонтувати", polish: "naprawiać", albanian: "të riparoj" }},
    { german: "am Morgen", translations: { english: "in the morning", ukrainian: "вранці", polish: "rano", albanian: "në mëngjes" }},
    { german: "am Vormittag", translations: { english: "in the late morning", ukrainian: "до обіду", polish: "przed południem", albanian: "në paradrekë" }},
    { german: "am Mittag", translations: { english: "at noon", ukrainian: "в обід", polish: "w południe", albanian: "në mesditë" }},
    { german: "am Nachmittag", translations: { english: "in the afternoon", ukrainian: "після обіду", polish: "po południu", albanian: "pasdrekë" }},
    { german: "am Abend", translations: { english: "in the evening", ukrainian: "ввечері", polish: "wieczorem", albanian: "në mbrëmje" }},
    { german: "in der Nacht", translations: { english: "at night", ukrainian: "вночі", polish: "w nocy", albanian: "natën" }},
    { german: "die Fahrkarte", translations: { english: "ticket", ukrainian: "квиток", polish: "bilet", albanian: "bileta" }},
    { german: "Schach spielen", translations: { english: "to play chess", ukrainian: "грати в шахи", polish: "grać w szachy", albanian: "të luaj shah" }},
    { german: "zusammen", translations: { english: "together", ukrainian: "разом", polish: "razem", albanian: "bashkë" }},
    { german: "vielleicht", translations: { english: "maybe", ukrainian: "можливо", polish: "może", albanian: "ndoshta" }},
    { german: "Lust haben", translations: { english: "to feel like doing", ukrainian: "мати бажання", polish: "mieć ochotę", albanian: "të kem dëshirë" }},
    { german: "Zeit haben", translations: { english: "to have time", ukrainian: "мати час", polish: "mieć czas", albanian: "të kem kohë" }},
    { german: "später", translations: { english: "later", ukrainian: "пізніше", polish: "później", albanian: "më vonë" }},
    { german: "leider", translations: { english: "unfortunately", ukrainian: "на жаль", polish: "niestety", albanian: "fatkeqësisht" }},
    { german: "kochen", translations: { english: "to cook", ukrainian: "готувати", polish: "gotować", albanian: "të gatuaj" }}
  ]
};
const ALL_SECTIONS = Object.keys(allVocabulary).map(Number);


// --- CHILD COMPONENTS ---

const Header = React.memo(() => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-gray-800 mb-2">German Vocabulary Flashcards</h1>
    <p className="text-lg text-gray-600">Multi-language support for effective learning</p>
  </div>
));

const SectionSelector = React.memo(({ t, selectedSections, onToggle, onSelectAll }: {
  t: LanguageStrings,
  selectedSections: number[],
  onToggle: (section: number) => void,
  onSelectAll: () => void
}) => (
  <aside className="w-full p-6 bg-white rounded-xl shadow-lg">
    <h3 className="text-xl font-bold mb-4">{t.selectSections}</h3>
    <div className="flex flex-col gap-2 mb-4">
      {ALL_SECTIONS.map(section => (
        <button
          key={section}
          onClick={() => onToggle(section)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
            selectedSections.includes(section)
              ? 'bg-green-500 text-white shadow-sm'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {section}: {t.sections[section]}
        </button>
      ))}
    </div>
    <button
      onClick={onSelectAll}
      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
    >
      {t.allSections}
    </button>
  </aside>
));

const Flashcard = React.memo(({ isFlipped, onFlip, frontText, backText, t }: {
  isFlipped: boolean,
  onFlip: () => void,
  frontText: string,
  backText: string,
  t: LanguageStrings
}) => (
  <div className="w-full h-64 perspective-1000">
    <div
      className="relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-3d"
      style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      onClick={onFlip}
    >
      {/* Front of Card */}
      <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 backface-hidden">
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-800">{frontText}</p>
          <span className="mt-4 text-sm text-gray-500 block">{t.clickToFlip}</span>
        </div>
      </div>
      {/* Back of Card */}
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
    t: LanguageStrings,
    onPrev: () => void,
    onNext: () => void,
    onShuffle: () => void,
    onReset: () => void
}) => (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6">
        <div className="flex gap-4">
          <button onClick={onPrev} className="control-button bg-blue-500 hover:bg-blue-600 !sm:w-28 !flex !sm:justify-center !items-center">
              <ChevronLeft size={20} /> {t.previous}
          </button>
          <button onClick={onNext} className="control-button bg-blue-500 hover:bg-blue-600 sm:w-28 flex sm:justify-center !items-center">
              {t.next} <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex gap-4">
             <button onClick={onShuffle} className="control-button bg-purple-500 hover:bg-purple-600 sm:w-28 flex sm:justify-center items-center">
                <Shuffle size={16} /> {t.shuffle}
            </button>
            <button onClick={onReset} className="control-button bg-gray-500 hover:bg-gray-600 sm:w-28 flex sm:justify-center items-center">
                <RotateCcw size={16} /> {t.reset}
            </button>
        </div>
    </div>
));

const ProgressBar = React.memo(({ current, total }: { current: number, total: number }) => (
    <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
                className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(current / total) * 100}%` }}
            />
        </div>
    </div>
));

const StudyTips = React.memo(({ t }: { t: LanguageStrings }) => (
    <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">{t.studyTips}:</h3>
        <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
            <li>{t.tip1}</li>
            <li>{t.tip2}</li>
            <li>{t.tip3}</li>
            <li>{t.tip4}</li>
        </ul>
    </div>
));


// --- MAIN APP COMPONENT ---

const GermanVocabularyApp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showGermanFirst, setShowGermanFirst] = useState(true);
  const [selectedSections, setSelectedSections] = useState(ALL_SECTIONS);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('english');
  const [shuffledCards, setShuffledCards] = useState<Card[]>([]);
  
  const t = languages[currentLanguage];

  const filteredCards = useMemo(() => {
    const cards = selectedSections.flatMap(section => allVocabulary[section] || []);
    setShuffledCards([...cards]); // Keep an unshuffled copy
    return cards;
  }, [selectedSections]);

  useEffect(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [filteredCards]);

  const nextCard = useCallback(() => {
    if(shuffledCards.length === 0) return;
    setCurrentCardIndex((prev) => (prev + 1) % shuffledCards.length);
    setIsFlipped(false);
  }, [shuffledCards.length]);

  const prevCard = useCallback(() => {
    if(shuffledCards.length === 0) return;
    setCurrentCardIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
    setIsFlipped(false);
  }, [shuffledCards.length]);

  const shuffleCards = useCallback(() => {
    setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5));
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, []);

  const resetCards = useCallback(() => {
    setShuffledCards([...filteredCards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [filteredCards]);

  const toggleSection = useCallback((section: number) => {
    setSelectedSections(prev => 
      prev.includes(section) 
        ? prev.length > 1 ? prev.filter(s => s !== section) : prev
        : [...prev, section].sort((a, b) => a - b)
    );
  }, []);

  const selectAllSections = useCallback(() => {
    setSelectedSections(ALL_SECTIONS);
  }, []);

  const currentFlashcard = shuffledCards[currentCardIndex];

  if (!currentFlashcard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8 flex items-center justify-center">
        <div className="text-center p-10 bg-white rounded-xl shadow-lg">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Section</h2>
          <p className="text-gray-600 mb-4">Please choose at least one vocabulary section to begin.</p>
          <SectionSelector 
            t={t} 
            selectedSections={selectedSections} 
            onToggle={toggleSection} 
            onSelectAll={selectAllSections} 
          />
        </div>
      </div>
    );
  }

  const frontText = showGermanFirst ? currentFlashcard.german : currentFlashcard.translations[currentLanguage];
  const backText = showGermanFirst ? currentFlashcard.translations[currentLanguage] : currentFlashcard.german;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar for Controls */}
          <div className="w-full xl:w-1/4">
             <div className="p-6 bg-white rounded-xl shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Globe size={20}/> {t.language}</h3>
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(languages) as LanguageKey[]).map(lang => (
                        <button key={lang} onClick={() => setCurrentLanguage(lang)}
                            className={`px-3 py-1 rounded-md text-sm transition-colors ${currentLanguage === lang ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
            <SectionSelector 
              t={t} 
              selectedSections={selectedSections} 
              onToggle={toggleSection} 
              onSelectAll={selectAllSections} 
            />
          </div>

          {/* Main Content Area */}
          <main className="w-full lg:w-2/3 xl:w-3/4">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                 <span className="text-gray-600">
                    {t.currentCard} {currentCardIndex + 1} {t.of} {shuffledCards.length}
                </span>
                <button
                    onClick={() => { setShowGermanFirst(p => !p); setIsFlipped(false); }}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-semibold"
                >
                    {t.startWith}: {showGermanFirst ? 'Deutsch' : t.name}
                </button>
              </div>

              <Flashcard 
                isFlipped={isFlipped} 
                onFlip={() => setIsFlipped(p => !p)} 
                frontText={frontText} 
                backText={backText} 
                t={t}
              />
              
              <CardControls 
                t={t} 
                onPrev={prevCard} 
                onNext={nextCard} 
                onShuffle={shuffleCards}
                onReset={resetCards}
              />

              <ProgressBar current={currentCardIndex + 1} total={shuffledCards.length} />
            </div>

            <StudyTips t={t} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default GermanVocabularyApp;