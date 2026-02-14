import { b1_2_Vocabulary, B1_2_ALL_SECTIONS } from './vocabulary';
import { b1_2_ListeningContent } from './listeningContent';
import { b1_2_Grammar } from './grammar';
import { b1_2_Tests } from './selfTest';
import { b1_2_Sentences, B1_2_SENTENCE_SECTIONS } from './sentences';

// B1.2 Module Names (6 modules: 7-12)
export const b1_2_SectionNames = {
    english: {
        7: "Travel and Traffic",
        8: "A New Start",
        9: "Nature and Environment",
        10: "Getting and Staying Healthy",
        11: "Politics and Society",
        12: "How Will It Be?"
    },
    ukrainian: {
        7: "Подорожі та транспорт",
        8: "Новий початок",
        9: "Природа та навколишнє середовище",
        10: "Одужання та збереження здоров'я",
        11: "Політика та суспільство",
        12: "Як буде?"
    },
    polish: {
        7: "Podróże i komunikacja",
        8: "Nowy początek",
        9: "Przyroda i środowisko",
        10: "Zdrowie i pozostanie zdrowym",
        11: "Polityka i społeczeństwo",
        12: "Jak to będzie?"
    },
    albanian: {
        7: "Udhëtimet dhe trafiku",
        8: "Fillim i ri",
        9: "Natyra dhe mjedisi",
        10: "Të shërohesh dhe të qëndrosh i shëndetshëm",
        11: "Politika dhe shoqëria",
        12: "Si do të jetë?"
    },
    german: {
        7: "Reisen und Verkehr",
        8: "Ein neuer Start",
        9: "Natur und Umwelt",
        10: "Gesund werden und bleiben",
        11: "Politik und Gesellschaft",
        12: "Wie wird es sein?"
    },
    arabic: {
        7: "السفر والمرور",
        8: "بداية جديدة",
        9: "الطبيعة والبيئة",
        10: "الشفاء والبقاء بصحة جيدة",
        11: "السياسة والمجتمع",
        12: "كيف سيكون؟"
    },
    italian: {
        7: "Viaggi e traffico",
        8: "Un nuovo inizio",
        9: "Natura e ambiente",
        10: "Guarire e restare in salute",
        11: "Politica e società",
        12: "Come sarà?"
    },
    serbian: {
        7: "Путовања и саобраћај",
        8: "Нови почетак",
        9: "Природа и животна средина",
        10: "Оздрављење и одржавање здравља",
        11: "Политика и друштво",
        12: "Како ће бити?"
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
