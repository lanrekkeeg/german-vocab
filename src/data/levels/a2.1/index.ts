import { a2_1_Vocabulary, A2_1_ALL_SECTIONS } from './vocabulary';
import { a2_1_ListeningContent } from './listeningContent';
import { a2_1_Grammar } from './grammar';
import { a2_1_Tests } from './selfTest';
import { a2_1_Sentences, A2_1_SENTENCE_SECTIONS } from './sentences';

// A2.1 Module Names (7 modules)
export const a2_1_SectionNames = {
    english: {
        1: "My Story",
        2: "Media",
        3: "Weekend",
        4: "School",
        5: "At the Workplace",
        6: "Living as You Wish",
        7: "Celebrating Festivals"
    },
    ukrainian: {
        1: "Моя історія",
        2: "Медіа",
        3: "Вихідні",
        4: "Школа",
        5: "На робочому місці",
        6: "Життя за бажанням",
        7: "Святкування"
    },
    polish: {
        1: "Moja historia",
        2: "Media",
        3: "Weekend",
        4: "Szkoła",
        5: "W pracy",
        6: "Mieszkanie według życzenia",
        7: "Świętowanie"
    },
    albanian: {
        1: "Historia ime",
        2: "Media",
        3: "Fundjavë",
        4: "Shkolla",
        5: "Në vendin e punës",
        6: "Të jetosh sipas dëshirës",
        7: "Festimet"
    },
    german: {
        1: "Meine Geschichte",
        2: "Medien",
        3: "Wochenende",
        4: "Schule",
        5: "Am Arbeitsplatz",
        6: "Wohnen nach Wunsch",
        7: "Feste feiern"
    },
    arabic: {
        1: "قصتي",
        2: "وسائل الإعلام",
        3: "عطلة نهاية الأسبوع",
        4: "المدرسة",
        5: "في مكان العمل",
        6: "السكن كما تريد",
        7: "الاحتفال بالأعياد"
    },
    italian: {
        1: "La mia storia",
        2: "Media",
        3: "Fine settimana",
        4: "Scuola",
        5: "Al lavoro",
        6: "Abitare come si desidera",
        7: "Festeggiare"
    }
};

export const a2_1_Data = {
    vocabulary: a2_1_Vocabulary,
    allSections: A2_1_ALL_SECTIONS,
    listeningContent: a2_1_ListeningContent,
    grammar: a2_1_Grammar,
    selfTest: a2_1_Tests,
    sentences: a2_1_Sentences,
    sentenceSections: A2_1_SENTENCE_SECTIONS,
    sectionNames: a2_1_SectionNames
};
