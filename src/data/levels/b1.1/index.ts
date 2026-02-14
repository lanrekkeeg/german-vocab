import { b1_1_Vocabulary, B1_1_ALL_SECTIONS } from './vocabulary';
import { b1_1_ListeningContent } from './listeningContent';
import { b1_1_Grammar } from './grammar';
import { b1_1_Tests } from './selfTest';
import { b1_1_Sentences, B1_1_SENTENCE_SECTIONS } from './sentences';

// B1.1 Module Names (6 modules: 1-6)
export const b1_1_SectionNames = {
    english: {
        1: "Women - Men - Families",
        2: "The Digital World",
        3: "The First Impression",
        4: "Back Then, Yesterday, Today",
        5: "From the Working World",
        6: "Wishes"
    },
    ukrainian: {
        1: "Жінки - Чоловіки - Сім'ї",
        2: "Цифровий світ",
        3: "Перше враження",
        4: "Тоді, вчора, сьогодні",
        5: "Зі світу праці",
        6: "Бажання"
    },
    polish: {
        1: "Kobiety - Mężczyźni - Rodziny",
        2: "Świat cyfrowy",
        3: "Pierwsze wrażenie",
        4: "Kiedyś, wczoraj, dziś",
        5: "Ze świata pracy",
        6: "Życzenia"
    },
    albanian: {
        1: "Gratë - Burrat - Familjet",
        2: "Bota dixhitale",
        3: "Përshtypja e parë",
        4: "Dikur, dje, sot",
        5: "Nga bota e punës",
        6: "Dëshira"
    },
    german: {
        1: "Frauen - Männer - Familien",
        2: "Die digitale Welt",
        3: "Der erste Eindruck",
        4: "Damals, gestern, heute",
        5: "Aus der Arbeitswelt",
        6: "Wünsche"
    },
    arabic: {
        1: "نساء - رجال - عائلات",
        2: "العالم الرقمي",
        3: "الانطباع الأول",
        4: "الماضي، الأمس، اليوم",
        5: "من عالم العمل",
        6: "أمنيات"
    },
    italian: {
        1: "Donne - Uomini - Famiglie",
        2: "Il mondo digitale",
        3: "La prima impressione",
        4: "Allora, ieri, oggi",
        5: "Dal mondo del lavoro",
        6: "Desideri"
    },
    serbian: {
        1: "Жене - Мушкарци - Породице",
        2: "Дигитални свет",
        3: "Први утисак",
        4: "Тада, јуче, данас",
        5: "Из света рада",
        6: "Жеље"
    }
};

export const b1_1_Data = {
    vocabulary: b1_1_Vocabulary,
    allSections: B1_1_ALL_SECTIONS,
    listeningContent: b1_1_ListeningContent,
    grammar: b1_1_Grammar,
    selfTest: b1_1_Tests,
    sentences: b1_1_Sentences,
    sentenceSections: B1_1_SENTENCE_SECTIONS,
    sectionNames: b1_1_SectionNames
};
