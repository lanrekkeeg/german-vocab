import { a2_2_Vocabulary, A2_2_ALL_SECTIONS } from './vocabulary';
import { a2_2_ListeningContent } from './listeningContent';
import { a2_2_Grammar } from './grammar';
import { a2_2_Tests } from './selfTest';
import { a2_2_Sentences, A2_2_SENTENCE_SECTIONS } from './sentences';

// A2.2 Module Names (7 modules: 8-14)
export const a2_2_SectionNames = {
    english: {
        8: "New Chances",
        9: "Healthy Living",
        10: "Job Search",
        11: "From Place to Place",
        12: "Meeting Points",
        13: "Banks & Insurance",
        14: "Culture & Society"
    },
    ukrainian: {
        8: "Нові можливості",
        9: "Здорове життя",
        10: "Пошук роботи",
        11: "З місця на місце",
        12: "Місця зустрічей",
        13: "Банки та страхування",
        14: "Культура та суспільство"
    },
    polish: {
        8: "Nowe szanse",
        9: "Zdrowe życie",
        10: "Poszukiwanie pracy",
        11: "Z miejsca na miejsce",
        12: "Punkty spotkań",
        13: "Banki i ubezpieczenia",
        14: "Kultura i społeczeństwo"
    },
    albanian: {
        8: "Mundësi të reja",
        9: "Jetë e shëndetshme",
        10: "Kërkimi i punës",
        11: "Nga vendi në vend",
        12: "Pikat e takimit",
        13: "Bankat dhe sigurimet",
        14: "Kultura dhe shoqëria"
    },
    german: {
        8: "Neue Chancen",
        9: "Gesund leben",
        10: "Arbeitssuche",
        11: "Von Ort zu Ort",
        12: "Treffpunkte",
        13: "Banken und Versicherungen",
        14: "Kultur und Gesellschaft"
    },
    arabic: {
        8: "فرص جديدة",
        9: "حياة صحية",
        10: "البحث عن عمل",
        11: "من مكان إلى مكان",
        12: "نقاط الالتقاء",
        13: "البنوك والتأمين",
        14: "الثقافة والمجتمع"
    },
    italian: {
        8: "Nuove opportunità",
        9: "Vita sana",
        10: "Ricerca di lavoro",
        11: "Da un luogo all'altro",
        12: "Punti d'incontro",
        13: "Banche e assicurazioni",
        14: "Cultura e società"
    }
};

export const a2_2_Data = {
    vocabulary: a2_2_Vocabulary,
    allSections: A2_2_ALL_SECTIONS,
    listeningContent: a2_2_ListeningContent,
    grammar: a2_2_Grammar,
    selfTest: a2_2_Tests,
    sentences: a2_2_Sentences,
    sentenceSections: A2_2_SENTENCE_SECTIONS,
    sectionNames: a2_2_SectionNames
};
