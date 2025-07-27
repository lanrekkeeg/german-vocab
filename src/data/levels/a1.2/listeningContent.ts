import { LearningContent } from '../../../types';
import passage1Audio from '../../../audio/passage1.wav';
import passage2Audio from '../../../audio/passage2.wav';
import passage3Audio from '../../../audio/passage3.wav';
import passage4Audio from '../../../audio/passage4.wav';
import passage5Audio from '../../../audio/passage5.wav';
import dialogue1Audio from '../../../audio/1_restaurant_reservation.wav';
import dialogue2Audio from '../../../audio/2_doctors_appointment.wav';
import dialogue3Audio from '../../../audio/3_job_interview.wav';
import dialogue4Audio from '../../../audio/4_apartment_viewing.wav';
// import dialogue5Audio from '../../../audio/5_technical_support.wav';
import dialogue6Audio from '../../../audio/6_supermarket_shopping.wav';
import dialogue7Audio from '../../../audio/7_asking_directions.wav';
import dialogue8Audio from '../../../audio/8_cafe_ordering.wav';
import dialogue9Audio from '../../../audio/9_hair_salon.wav';
import dialogue10Audio from '../../../audio/10_train_ticket.wav';
import dialogue11Audio from '../../../audio/11_hotel_checkin.wav';
import dialogue12Audio from '../../../audio/12_at_the_doctor.wav';
import dialogue13Audio from '../../../audio/13_clothing_store.wav';
import dialogue14Audio from '../../../audio/14_post_office.wav';
import dialogue15Audio from '../../../audio/15_bank_appointment.wav';
import lateNightPharmacyAudio from '../../../audio/a1.2/dialogue/section8/1_late_night_pharmacy.wav';
import workplaceAccidentAudio from '../../../audio/a1.2/dialogue/section8/2_workplace_accident.wav';
import dentistAnxietyAudio from '../../../audio/a1.2/dialogue/section8/3_dentist_anxiety.wav';
import onlineHealthConsultationAudio from '../../../audio/a1.2/dialogue/section8/4_online_health_consultation.wav';


// THIS IS THE COMPLETED AND CORRECTED learningContent VARIABLE
// Section 8: Gute Besserung! - Converted to LearningContent format
export const a1_2_ListeningContent: LearningContent[] = [
    {
        id: 21,
        type: 'dialogue',
        title: 'Notdienst-Apotheke',
        level: 'A2',
        audioSrc: lateNightPharmacyAudio,
        fullText: `Apotheker: Apotheke Notdienst, guten Abend! Mutter: Guten Abend! Mein Baby weint die ganze Nacht. Es hat hohes Fieber! Apotheker: Wie alt ist das Baby? Mutter: Acht Monate. Die Temperatur ist 39 Grad! Apotheker: Haben Sie Fieberzäpfchen zu Hause? Mutter: Nein, wir haben nichts. Was soll ich machen? Apotheker: Kommen Sie sofort! Ich habe Kinderzäpfchen da. Mutter: Soll ich zum Kinderarzt fahren? Apotheker: Wenn das Fieber nicht runtergeht, ja. Fahren Sie ins Krankenhaus. Mutter: Vielen Dank! Ich komme sofort!`,
        parts: [
            { speaker: 'Apotheker' }, 'Apotheke Notdienst, guten Abend!',
            { speaker: 'Mutter' }, 'Guten Abend! Mein Baby weint die ganze Nacht. Es hat hohes ', { answer: 'Fieber', size: 7 }, '!',
            { speaker: 'Apotheker' }, 'Wie alt ist das Baby?',
            { speaker: 'Mutter' }, 'Acht Monate. Die ', { answer: 'Temperatur', size: 11 }, ' ist 39 Grad!',
            { speaker: 'Apotheker' }, 'Haben Sie ', { answer: 'Fieberzäpfchen', size: 15 }, ' zu Hause?',
            { speaker: 'Mutter' }, 'Nein, wir haben nichts. Was soll ich machen?',
            { speaker: 'Apotheker' }, 'Kommen Sie sofort! Ich habe ', { answer: 'Kinderzäpfchen', size: 15 }, ' da.',
            { speaker: 'Mutter' }, 'Soll ich zum ', { answer: 'Kinderarzt', size: 11 }, ' fahren?',
            { speaker: 'Apotheker' }, 'Wenn das Fieber nicht runtergeht, ja. Fahren Sie ins ', { answer: 'Krankenhaus', size: 12 }, '.',
            { speaker: 'Mutter' }, 'Vielen Dank! Ich komme sofort!',
        ],
        vocabulary: [
            { german: "der Notdienst", translations: { english: "emergency service", ukrainian: "екстрена служба", polish: "służba dyżurna", albanian: "shërbimi urgjent", german: "der Notdienst" }},
            { german: "das Baby", translations: { english: "the baby", ukrainian: "немовля", polish: "dziecko", albanian: "foshnja", german: "das Baby" }},
            { german: "weinen", translations: { english: "to cry", ukrainian: "плакати", polish: "płakać", albanian: "të qaj", german: "weinen" }},
            { german: "das Fieber", translations: { english: "the fever", ukrainian: "лихоманка", polish: "gorączka", albanian: "temperatura", german: "das Fieber" }},
            { german: "die Fieberzäpfchen", translations: { english: "fever suppositories", ukrainian: "жарознижувальні свічки", polish: "czopki przeciwgorączkowe", albanian: "qirinj kundër temperaturës", german: "die Fieberzäpfchen" }},
            { german: "der Kinderarzt", translations: { english: "pediatrician", ukrainian: "дитячий лікар", polish: "pediatra", albanian: "pediatri", german: "der Kinderarzt" }},
            { german: "das Krankenhaus", translations: { english: "the hospital", ukrainian: "лікарня", polish: "szpital", albanian: "spitali", german: "das Krankenhaus" }},
            { german: "runtergehen", translations: { english: "to go down", ukrainian: "знижуватися", polish: "spadać", albanian: "të zbresë", german: "runtergehen" }},
        ]
    },
    {
        id: 22,
        type: 'dialogue',
        title: 'Arbeitsunfall',
        level: 'A2',
        audioSrc: workplaceAccidentAudio,
        fullText: `Mitarbeiter: Chef, wir haben ein Problem in der Küche! Chef: Was ist passiert? Mitarbeiter: Tom hat sich in den Finger geschnitten. Es blutet stark! Chef: Wo ist der Erste-Hilfe-Kasten? Mitarbeiter: Im Büro, aber Tom braucht einen Arzt! Chef: Ich rufe den Notarzt. Du machst einen Verband um den Finger. Mitarbeiter: Soll ich seine Familie anrufen? Chef: Ja, ruf seine Frau an. Sag ihr, wir fahren ins Krankenhaus. Mitarbeiter: Tom, alles wird gut! Der Krankenwagen kommt gleich.`,
        parts: [
            { speaker: 'Mitarbeiter' }, 'Chef, wir haben ein Problem in der ', { answer: 'Küche', size: 7 }, '!',
            { speaker: 'Chef' }, 'Was ist passiert?',
            { speaker: 'Mitarbeiter' }, 'Tom hat sich in den Finger ', { answer: 'geschnitten', size: 12 }, '. Es blutet stark!',
            { speaker: 'Chef' }, 'Wo ist der Erste-Hilfe-Kasten?',
            { speaker: 'Mitarbeiter' }, 'Im Büro, aber Tom braucht einen ', { answer: 'Arzt', size: 5 }, '!',
            { speaker: 'Chef' }, 'Ich rufe den ', { answer: 'Notarzt', size: 8 }, '. Du machst einen Verband um den Finger.',
            { speaker: 'Mitarbeiter' }, 'Soll ich seine Familie anrufen?',
            { speaker: 'Chef' }, 'Ja, ruf seine Frau an. Sag ihr, wir fahren ins Krankenhaus.',
            { speaker: 'Mitarbeiter' }, 'Tom, alles wird gut! Der ', { answer: 'Krankenwagen', size: 13 }, ' kommt gleich.',
        ],
        vocabulary: [
            { german: "der Arbeitsunfall", translations: { english: "workplace accident", ukrainian: "нещасний випадок на роботі", polish: "wypadek przy pracy", albanian: "aksidenti në punë", german: "der Arbeitsunfall" }},
            { german: "sich schneiden", translations: { english: "to cut oneself", ukrainian: "порізатися", polish: "skaleczyć się", albanian: "të pres veten", german: "sich schneiden" }},
            { german: "bluten", translations: { english: "to bleed", ukrainian: "кровоточити", polish: "krwawić", albanian: "të gjakos", german: "bluten" }},
            { german: "der Erste-Hilfe-Kasten", translations: { english: "first aid kit", ukrainian: "аптечка першої допомоги", polish: "apteczka pierwszej pomocy", albanian: "kuti i ndihmës së parë", german: "der Erste-Hilfe-Kasten" }},
            { german: "der Notarzt", translations: { english: "emergency doctor", ukrainian: "лікар швидкої допомоги", polish: "lekarz pogotowia", albanian: "mjeku urgjent", german: "der Notarzt" }},
            { german: "der Verband", translations: { english: "the bandage", ukrainian: "бинт", polish: "bandaż", albanian: "fashë", german: "der Verband" }},
            { german: "der Krankenwagen", translations: { english: "the ambulance", ukrainian: "швидка допомога", polish: "karetka pogotowia", albanian: "ambulanca", german: "der Krankenwagen" }},
            { german: "anrufen", translations: { english: "to call", ukrainian: "телефонувати", polish: "dzwonić", albanian: "të telefonoj", german: "anrufen" }},
        ]
    },
    {
        id: 23,
        type: 'dialogue',
        title: 'Angst beim Zahnarzt',
        level: 'A2',
        audioSrc: dentistAnxietyAudio,
        fullText: `Zahnarzt: Herr Klein, kommen Sie bitte ins Behandlungszimmer. Patient: Muss das sein? Ich habe große Angst vor dem Zahnarzt! Zahnarzt: Keine Sorge! Was tut denn weh? Patient: Mein Zahn schmerzt seit einer Woche. Ich kann nicht schlafen! Zahnarzt: Welcher Zahn ist es? Patient: Hier links hinten. Müssen Sie bohren? Zahnarzt: Erst schaue ich. Machen Sie den Mund weit auf... Ah, ein kleines Loch. Patient: Tut das weh? Zahnarzt: Nein, ich gebe Ihnen eine Spritze. Sie spüren nichts. Patient: Können wir heute aufhören? Ich komme morgen wieder...`,
        parts: [
            { speaker: 'Zahnarzt' }, 'Herr Klein, kommen Sie bitte ins ', { answer: 'Behandlungszimmer', size: 18 }, '.',
            { speaker: 'Patient' }, 'Muss das sein? Ich habe große ', { answer: 'Angst', size: 6 }, ' vor dem Zahnarzt!',
            { speaker: 'Zahnarzt' }, 'Keine Sorge! Was tut denn weh?',
            { speaker: 'Patient' }, 'Mein Zahn ', { answer: 'schmerzt', size: 9 }, ' seit einer Woche. Ich kann nicht schlafen!',
            { speaker: 'Zahnarzt' }, 'Welcher Zahn ist es?',
            { speaker: 'Patient' }, 'Hier links hinten. Müssen Sie ', { answer: 'bohren', size: 7 }, '?',
            { speaker: 'Zahnarzt' }, 'Erst schaue ich. Machen Sie den Mund weit auf... Ah, ein kleines ', { answer: 'Loch', size: 5 }, '.',
            { speaker: 'Patient' }, 'Tut das weh?',
            { speaker: 'Zahnarzt' }, 'Nein, ich gebe Ihnen eine ', { answer: 'Spritze', size: 8 }, '. Sie spüren nichts.',
            { speaker: 'Patient' }, 'Können wir heute aufhören? Ich komme morgen wieder...',
        ],
        vocabulary: [
            { german: "der Zahnarzt", translations: { english: "the dentist", ukrainian: "стоматолог", polish: "dentysta", albanian: "dentisti", german: "der Zahnarzt" }},
            { german: "das Behandlungszimmer", translations: { english: "treatment room", ukrainian: "кабінет лікаря", polish: "gabinet", albanian: "dhoma e trajtimit", german: "das Behandlungszimmer" }},
            { german: "die Angst", translations: { english: "the fear", ukrainian: "страх", polish: "strach", albanian: "frika", german: "die Angst" }},
            { german: "schmerzen", translations: { english: "to hurt/ache", ukrainian: "боліти", polish: "boleć", albanian: "të dhemb", german: "schmerzen" }},
            { german: "bohren", translations: { english: "to drill", ukrainian: "свердлити", polish: "wiercić", albanian: "të shpoj", german: "bohren" }},
            { german: "das Loch", translations: { english: "the hole", ukrainian: "дірка", polish: "dziura", albanian: "vrima", german: "das Loch" }},
            { german: "die Spritze", translations: { english: "the injection", ukrainian: "укол", polish: "zastrzyk", albanian: "injeksioni", german: "die Spritze" }},
            { german: "spüren", translations: { english: "to feel", ukrainian: "відчувати", polish: "czuć", albanian: "të ndjej", german: "spüren" }},
        ]
    },
    {
        id: 24,
        type: 'dialogue',
        title: 'Online-Arztbesuch',
        level: 'A2',
        audioSrc: onlineHealthConsultationAudio,
        fullText: `Arzt: Guten Tag! Hier ist Dr. Wagner von der Online-Praxis. Patient: Hallo Doktor! Ich habe Ihre App heruntergeladen. Arzt: Prima! Was sind Ihre Symptome? Patient: Seit drei Tagen habe ich Husten und Schnupfen. Arzt: Haben Sie auch Fieber gemessen? Patient: Ja, 37,5 Grad. Ist das Corona? Arzt: Machen Sie einen Schnelltest! Ich schicke Ihnen das Rezept per App. Patient: Wie funktioniert das? Arzt: Sie gehen zur Apotheke und zeigen den QR-Code auf Ihrem Handy. Patient: Das ist ja praktisch! Vielen Dank! Arzt: Gute Besserung! Melden Sie sich, wenn es schlimmer wird.`,
        parts: [
            { speaker: 'Arzt' }, 'Guten Tag! Hier ist Dr. Wagner von der Online-Praxis.',
            { speaker: 'Patient' }, 'Hallo Doktor! Ich habe Ihre ', { answer: 'App', size: 4 }, ' heruntergeladen.',
            { speaker: 'Arzt' }, 'Prima! Was sind Ihre ', { answer: 'Symptome', size: 9 }, '?',
            { speaker: 'Patient' }, 'Seit drei Tagen habe ich ', { answer: 'Husten', size: 7 }, ' und Schnupfen.',
            { speaker: 'Arzt' }, 'Haben Sie auch Fieber gemessen?',
            { speaker: 'Patient' }, 'Ja, 37,5 Grad. Ist das ', { answer: 'Corona', size: 7 }, '?',
            { speaker: 'Arzt' }, 'Machen Sie einen ', { answer: 'Schnelltest', size: 11 }, '! Ich schicke Ihnen das Rezept per App.',
            { speaker: 'Patient' }, 'Wie funktioniert das?',
            { speaker: 'Arzt' }, 'Sie gehen zur Apotheke und zeigen den ', { answer: 'QR-Code', size: 8 }, ' auf Ihrem Handy.',
            { speaker: 'Patient' }, 'Das ist ja praktisch! Vielen Dank!',
            { speaker: 'Arzt' }, 'Gute Besserung! Melden Sie sich, wenn es schlimmer wird.',
        ],
        vocabulary: [
            { german: "die Online-Praxis", translations: { english: "online practice", ukrainian: "онлайн-клініка", polish: "praktyka online", albanian: "praktika online", german: "die Online-Praxis" }},
            { german: "herunterladen", translations: { english: "to download", ukrainian: "завантажувати", polish: "pobierać", albanian: "të shkarkosh", german: "herunterladen" }},
            { german: "die Symptome", translations: { english: "the symptoms", ukrainian: "симптоми", polish: "objawy", albanian: "simptomat", german: "die Symptome" }},
            { german: "der Husten", translations: { english: "the cough", ukrainian: "кашель", polish: "kaszel", albanian: "kollitja", german: "der Husten" }},
            { german: "der Schnupfen", translations: { english: "the runny nose/cold", ukrainian: "нежить", polish: "katar", albanian: "rrjedhja e hundës", german: "der Schnupfen" }},
            { german: "der Schnelltest", translations: { english: "rapid test", ukrainian: "експрес-тест", polish: "test szybki", albanian: "testi i shpejtë", german: "der Schnelltest" }},
            { german: "das Rezept", translations: { english: "the prescription", ukrainian: "рецепт", polish: "recepta", albanian: "receta", german: "das Rezept" }},
            { german: "praktisch", translations: { english: "practical/convenient", ukrainian: "практично", polish: "praktyczne", albanian: "praktike", german: "praktisch" }},
        ]
    }
];