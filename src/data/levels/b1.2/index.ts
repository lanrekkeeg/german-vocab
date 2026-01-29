import { b1_2_Vocabulary, B1_2_ALL_SECTIONS } from './vocabulary';
import { b1_2_ListeningContent } from './listeningContent';
import { b1_2_Grammar } from './grammar';
import { b1_2_Tests } from './selfTest';
import { b1_2_Sentences, B1_2_SENTENCE_SECTIONS } from './sentences';

// B1.2 Module Names (7 modules: 8-14)
// Note: Module 7 (Travel and Traffic) has been moved to B1.1
export const b1_2_SectionNames = {
    english: {
        8: "A New Start",
        9: "Nature and Environment",
        10: "Getting and Staying Healthy",
        11: "Politics and Society",
        12: "How Will It Be?",
        13: "Review and Outlook",
        14: "Exam Preparation"
    },
    ukrainian: {
        8: "Новий початок",
        9: "Природа та навколишнє середовище",
        10: "Одужання та збереження здоров'я",
        11: "Політика та суспільство",
        12: "Як буде?",
        13: "Огляд та перспектива",
        14: "Підготовка до іспиту"
    },
    polish: {
        8: "Nowy początek",
        9: "Przyroda i środowisko",
        10: "Zdrowie i pozostanie zdrowym",
        11: "Polityka i społeczeństwo",
        12: "Jak to będzie?",
        13: "Podsumowanie i perspektywy",
        14: "Przygotowanie do egzaminu"
    },
    albanian: {
        8: "Fillim i ri",
        9: "Natyra dhe mjedisi",
        10: "Të shërohesh dhe të qëndrosh i shëndetshëm",
        11: "Politika dhe shoqëria",
        12: "Si do të jetë?",
        13: "Rishikim dhe perspektivë",
        14: "Përgatitja për provim"
    },
    german: {
        8: "Ein neuer Start",
        9: "Natur und Umwelt",
        10: "Gesund werden und bleiben",
        11: "Politik und Gesellschaft",
        12: "Wie wird es sein?",
        13: "Rückblick und Ausblick",
        14: "Prüfungsvorbereitung"
    },
    arabic: {
        8: "بداية جديدة",
        9: "الطبيعة والبيئة",
        10: "الشفاء والبقاء بصحة جيدة",
        11: "السياسة والمجتمع",
        12: "كيف سيكون؟",
        13: "مراجعة وتطلع",
        14: "التحضير للامتحان"
    },
    italian: {
        8: "Un nuovo inizio",
        9: "Natura e ambiente",
        10: "Guarire e restare in salute",
        11: "Politica e società",
        12: "Come sarà?",
        13: "Riepilogo e prospettive",
        14: "Preparazione all'esame"
    }
};

export const b1_2_Data = {
    vocabulary: b1_2_Vocabulary,
    allSections: B1_2_ALL_SECTIONS,
    listeningContent: b1_2_ListeningContent,
    grammar: b1_2_Grammar,
    selfTest: b1_2_Tests,
    sentences: b1_2_Sentences,
    sentenceSections: B1_2_SENTENCE_SECTIONS,
    sectionNames: b1_2_SectionNames
};
