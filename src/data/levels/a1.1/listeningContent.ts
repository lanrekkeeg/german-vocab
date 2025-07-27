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


// THIS IS THE COMPLETED AND CORRECTED learningContent VARIABLE
export const a1_1_ListeningContent: LearningContent[] = [
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