import { Card, Translations } from '../../../types';

export const B1_1_SENTENCE_SECTIONS = [1, 2, 3, 4, 5, 6];

const sanitizeFilename = (text: string): string => {
    let sanitized = text.replace(/\s+/g, '_');
    sanitized = sanitized.replace(/[^a-zA-Z0-9_äöüÄÖÜß]/g, '');
    return sanitized;
};

const addAudioPaths = (sentencesBySection: Record<number, (Omit<Card, 'audioSrc' | 'translations'> & { translations: Omit<Translations, 'german'> })[]>) => {
  const result: Record<number, Card[]> = {};
  for (const section in sentencesBySection) {
    result[section] = sentencesBySection[section].map(card => ({
      ...card,
      translations: { ...card.translations, german: card.german },
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/b1.1/sentences/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const b1_1_Sentences: Record<string, Card[]> = addAudioPaths({
  // Module 1: Frauen - Männer - Familien
  // Extracted from KB Module 1
  "1": [
    {
      "german": "In einer Familie unterstützt man sich gegenseitig.",
      "translations": {
        "english": "In a family, you support each other.",
        "ukrainian": "У сім'ї підтримують один одного.",
        "polish": "W rodzinie wspiera się nawzajem.",
        "albanian": "Në një familje mbështeteni njëri-tjetrin.",
        "arabic": "في العائلة يدعم الجميع بعضهم البعض.",
        "italian": "In una famiglia ci si sostiene a vicenda.",
        "serbian": "У породици се међусобно подржавамо."
      }
    },
    {
      "german": "Meine Familie ist mir sehr wichtig.",
      "translations": {
        "english": "My family is very important to me.",
        "ukrainian": "Моя сім'я дуже важлива для мене.",
        "polish": "Moja rodzina jest dla mnie bardzo ważna.",
        "albanian": "Familja ime është shumë e rëndësishme për mua.",
        "arabic": "عائلتي مهمة جداً بالنسبة لي.",
        "italian": "La mia famiglia è molto importante per me.",
        "serbian": "Моја породица ми је веома важна."
      }
    },
    {
      "german": "Ich habe ein enges Verhältnis zu meiner Familie.",
      "translations": {
        "english": "I have a close relationship with my family.",
        "ukrainian": "У мене близькі стосунки з моєю сім'єю.",
        "polish": "Mam bliskie relacje z moją rodziną.",
        "albanian": "Kam një marrëdhënie të ngushtë me familjen time.",
        "arabic": "لدي علاقة وثيقة مع عائلتي.",
        "italian": "Ho un rapporto stretto con la mia famiglia.",
        "serbian": "Имам близак однос са својом породицом."
      }
    },
    {
      "german": "Ich kann mich immer auf meine Eltern verlassen.",
      "translations": {
        "english": "I can always rely on my parents.",
        "ukrainian": "Я завжди можу покластися на своїх батьків.",
        "polish": "Zawsze mogę polegać na moich rodzicach.",
        "albanian": "Mund të mbështetem gjithmonë tek prindërit e mi.",
        "arabic": "يمكنني دائماً الاعتماد على والديّ.",
        "italian": "Posso sempre contare sui miei genitori.",
        "serbian": "Увек могу да се ослоним на своје родитеље."
      }
    },
    {
      "german": "Obwohl ich alleinerziehend bin, fühle ich mich nicht allein.",
      "translations": {
        "english": "Although I am a single parent, I don't feel alone.",
        "ukrainian": "Хоча я виховую дитину сам, я не почуваюся самотнім.",
        "polish": "Chociaż jestem samotnym rodzicem, nie czuję się samotny.",
        "albanian": "Edhe pse jam prind i vetëm, nuk ndihem i vetmuar.",
        "arabic": "على الرغم من أنني أربي أطفالي وحدي، لا أشعر بالوحدة.",
        "italian": "Anche se sono un genitore single, non mi sento solo.",
        "serbian": "Иако сам самохрани родитељ, не осећам се усамљено."
      }
    },
    {
      "german": "Karl und ich sind jetzt Rentner. Trotzdem sind wir noch sehr aktiv.",
      "translations": {
        "english": "Karl and I are retired now. Nevertheless, we are still very active.",
        "ukrainian": "Ми з Карлом зараз пенсіонери. Проте ми все ще дуже активні.",
        "polish": "Karl i ja jesteśmy teraz emerytami. Mimo to jesteśmy bardzo aktywni.",
        "albanian": "Karl dhe unë jemi tani pensionistë. Megjithatë jemi ende shumë aktivë.",
        "arabic": "كارل وأنا متقاعدان الآن. ومع ذلك، لا نزال نشيطين جداً.",
        "italian": "Karl e io siamo in pensione ora. Tuttavia siamo ancora molto attivi.",
        "serbian": "Карл и ја смо сада пензионери. Ипак, још увек смо веома активни."
      }
    },
    {
      "german": "Die Kinder streiten sich ständig. Die Eltern bleiben ruhig.",
      "translations": {
        "english": "The children argue constantly. The parents stay calm.",
        "ukrainian": "Діти постійно сваряться. Батьки залишаються спокійними.",
        "polish": "Dzieci ciągle się kłócą. Rodzice pozostają spokojni.",
        "albanian": "Fëmijët zihen vazhdimisht. Prindërit qëndrojnë të qetë.",
        "arabic": "يتشاجر الأطفال باستمرار. يبقى الوالدان هادئين.",
        "italian": "I bambini litigano continuamente. I genitori restano calmi.",
        "serbian": "Деца се стално свађају. Родитељи остају мирни."
      }
    },
    {
      "german": "Frauen und Männer haben die gleichen Rechte.",
      "translations": {
        "english": "Women and men have equal rights.",
        "ukrainian": "Жінки та чоловіки мають рівні права.",
        "polish": "Kobiety i mężczyźni mają równe prawa.",
        "albanian": "Gratë dhe burrat kanë të drejta të barabarta.",
        "arabic": "للنساء والرجال حقوق متساوية.",
        "italian": "Donne e uomini hanno gli stessi diritti.",
        "serbian": "Жене и мушкарци имају једнака права."
      }
    },
    {
      "german": "Wir arbeiten beide halbtags und kümmern uns beide um die Erziehung unserer Kinder.",
      "translations": {
        "english": "We both work part-time and both take care of raising our children.",
        "ukrainian": "Ми обоє працюємо на півставки і обоє займаємося вихованням наших дітей.",
        "polish": "Oboje pracujemy na pół etatu i oboje zajmujemy się wychowaniem naszych dzieci.",
        "albanian": "Të dy punojmë me gjysmë orari dhe të dy kujdesemi për edukimin e fëmijëve tanë.",
        "arabic": "نعمل كلانا بدوام جزئي ونهتم كلانا بتربية أطفالنا.",
        "italian": "Lavoriamo entrambi part-time e ci occupiamo entrambi dell'educazione dei nostri figli.",
        "serbian": "Обоје радимо скраћено радно време и обоје се бринемо о васпитању наше деце."
      }
    },
    {
      "german": "Obwohl das Wasser kalt ist, baden die Leute im See.",
      "translations": {
        "english": "Although the water is cold, people swim in the lake.",
        "ukrainian": "Хоча вода холодна, люди купаються в озері.",
        "polish": "Chociaż woda jest zimna, ludzie kąpią się w jeziorze.",
        "albanian": "Edhe pse uji është i ftohtë, njerëzit lahen në liqen.",
        "arabic": "على الرغم من أن الماء بارد، يسبح الناس في البحيرة.",
        "italian": "Anche se l'acqua è fredda, la gente nuota nel lago.",
        "serbian": "Иако је вода хладна, људи се купају у језеру."
      }
    },
    {
      "german": "Ich bin froh, dass wir uns die Arbeit im Haushalt teilen.",
      "translations": {
        "english": "I'm glad that we share the housework.",
        "ukrainian": "Я радий, що ми ділимо домашню роботу.",
        "polish": "Cieszę się, że dzielimy prace domowe.",
        "albanian": "Jam i lumtur që ndajmë punët e shtëpisë.",
        "arabic": "أنا سعيد أننا نتشارك الأعمال المنزلية.",
        "italian": "Sono contento che ci dividiamo i lavori domestici.",
        "serbian": "Драго ми је што делимо кућне послове."
      }
    },
    {
      "german": "Ich habe den Eindruck, dass oft die Frauen die Hausarbeit machen.",
      "translations": {
        "english": "I have the impression that women often do the housework.",
        "ukrainian": "У мене враження, що часто жінки виконують домашню роботу.",
        "polish": "Mam wrażenie, że często kobiety wykonują prace domowe.",
        "albanian": "Kam përshtypjen që shpesh gratë bëjnë punët e shtëpisë.",
        "arabic": "لدي انطباع أن النساء غالباً ما يقمن بالأعمال المنزلية.",
        "italian": "Ho l'impressione che spesso siano le donne a fare i lavori domestici.",
        "serbian": "Имам утисак да жене често обављају кућне послове."
      }
    }
  ],

  // Module 2: Die digitale Welt
  // Extracted from KB Module 2
  "2": [
    {
      "german": "Wir leben in einer Medienwelt.",
      "translations": {
        "english": "We live in a media world.",
        "ukrainian": "Ми живемо в медіасвіті.",
        "polish": "Żyjemy w świecie mediów.",
        "albanian": "Ne jetojmë në një botë mediatike.",
        "arabic": "نحن نعيش في عالم إعلامي.",
        "italian": "Viviamo in un mondo mediatico.",
        "serbian": "Живимо у медијском свету."
      }
    },
    {
      "german": "Junge Menschen können sich ein Leben ohne Internet nicht vorstellen.",
      "translations": {
        "english": "Young people cannot imagine a life without the internet.",
        "ukrainian": "Молоді люди не можуть уявити життя без інтернету.",
        "polish": "Młodzi ludzie nie wyobrażają sobie życia bez internetu.",
        "albanian": "Të rinjtë nuk mund ta imagjinojnë jetën pa internet.",
        "arabic": "لا يستطيع الشباب تخيل الحياة بدون إنترنت.",
        "italian": "I giovani non riescono a immaginare una vita senza internet.",
        "serbian": "Млади људи не могу да замисле живот без интернета."
      }
    },
    {
      "german": "Es ist leicht, mit dem Smartphone unterwegs zu kommunizieren.",
      "translations": {
        "english": "It's easy to communicate on the go with a smartphone.",
        "ukrainian": "Легко спілкуватися в дорозі зі смартфоном.",
        "polish": "Łatwo jest komunikować się w podróży ze smartfonem.",
        "albanian": "Është e lehtë të komunikosh në lëvizje me smartphone.",
        "arabic": "من السهل التواصل أثناء التنقل بالهاتف الذكي.",
        "italian": "È facile comunicare in movimento con lo smartphone.",
        "serbian": "Лако је комуницирати у покрету помоћу паметног телефона."
      }
    },
    {
      "german": "Die sozialen Netzwerke verändern, wie Jugendliche miteinander kommunizieren.",
      "translations": {
        "english": "Social networks are changing how young people communicate with each other.",
        "ukrainian": "Соціальні мережі змінюють те, як молодь спілкується між собою.",
        "polish": "Sieci społecznościowe zmieniają sposób komunikacji młodzieży.",
        "albanian": "Rrjetet sociale ndryshojnë mënyrën si komunikojnë të rinjtë me njëri-tjetrin.",
        "arabic": "تغير الشبكات الاجتماعية طريقة تواصل الشباب مع بعضهم.",
        "italian": "I social network stanno cambiando il modo in cui i giovani comunicano tra loro.",
        "serbian": "Друштвене мреже мењају начин на који млади међусобно комуницирају."
      }
    },
    {
      "german": "Viele Eltern haben Angst, dass die Smartphones ihre Kinder süchtig machen.",
      "translations": {
        "english": "Many parents are afraid that smartphones will make their children addicted.",
        "ukrainian": "Багато батьків бояться, що смартфони зроблять їхніх дітей залежними.",
        "polish": "Wielu rodziców boi się, że smartfony uzależnią ich dzieci.",
        "albanian": "Shumë prindër kanë frikë se smartfonet do t'i bëjnë fëmijët e tyre të varur.",
        "arabic": "يخشى كثير من الآباء أن الهواتف الذكية ستسبب الإدمان لأطفالهم.",
        "italian": "Molti genitori temono che gli smartphone renderanno i loro figli dipendenti.",
        "serbian": "Многи родитељи се плаше да ће паметни телефони учинити њихову децу зависном."
      }
    },
    {
      "german": "Die Zahl der Online-Käufe ist in Deutschland um 30 Prozent gestiegen.",
      "translations": {
        "english": "The number of online purchases in Germany has increased by 30 percent.",
        "ukrainian": "Кількість онлайн-покупок у Німеччині зросла на 30 відсотків.",
        "polish": "Liczba zakupów online w Niemczech wzrosła o 30 procent.",
        "albanian": "Numri i blerjeve online në Gjermani është rritur me 30 përqind.",
        "arabic": "ارتفع عدد المشتريات عبر الإنترنت في ألمانيا بنسبة 30 بالمائة.",
        "italian": "Il numero di acquisti online in Germania è aumentato del 30 percento.",
        "serbian": "Број онлајн куповина у Немачкој је порастао за 30 процената."
      }
    },
    {
      "german": "Sie kaufen vor allem gern Bücher, Schuhe und Kleidung online ein.",
      "translations": {
        "english": "They especially like to buy books, shoes, and clothing online.",
        "ukrainian": "Вони особливо люблять купувати книги, взуття та одяг онлайн.",
        "polish": "Szczególnie lubią kupować online książki, buty i ubrania.",
        "albanian": "Ata veçanërisht pëlqejnë të blejnë libra, këpucë dhe veshje online.",
        "arabic": "يحبون بشكل خاص شراء الكتب والأحذية والملابس عبر الإنترنت.",
        "italian": "Amano particolarmente comprare libri, scarpe e vestiti online.",
        "serbian": "Посебно воле да купују књиге, ципеле и одећу онлајн."
      }
    },
    {
      "german": "Man kann bequem von zu Hause aus Preise vergleichen.",
      "translations": {
        "english": "You can conveniently compare prices from home.",
        "ukrainian": "Можна зручно порівнювати ціни з дому.",
        "polish": "Można wygodnie porównywać ceny z domu.",
        "albanian": "Mund të krahasoni çmimet komodisht nga shtëpia.",
        "arabic": "يمكنك مقارنة الأسعار بسهولة من المنزل.",
        "italian": "Si possono comodamente confrontare i prezzi da casa.",
        "serbian": "Можете удобно да упоредите цене од куће."
      }
    },
    {
      "german": "Man kann die Waren zurückschicken, wenn man mit ihnen nicht zufrieden ist.",
      "translations": {
        "english": "You can return the goods if you are not satisfied with them.",
        "ukrainian": "Можна повернути товари, якщо ви ними незадоволені.",
        "polish": "Można odesłać towar, jeśli nie jesteś z niego zadowolony.",
        "albanian": "Mund t'i ktheni mallrat nëse nuk jeni të kënaqur me to.",
        "arabic": "يمكنك إرجاع البضائع إذا لم تكن راضياً عنها.",
        "italian": "Si possono restituire le merci se non si è soddisfatti.",
        "serbian": "Можете вратити робу ако нисте задовољни њоме."
      }
    },
    {
      "german": "Sie nimmt an einem E-Learning-Kurs teil.",
      "translations": {
        "english": "She is taking an e-learning course.",
        "ukrainian": "Вона бере участь у курсі електронного навчання.",
        "polish": "Ona uczestniczy w kursie e-learningowym.",
        "albanian": "Ajo merr pjesë në një kurs e-learning.",
        "arabic": "تشارك في دورة تعلم إلكتروني.",
        "italian": "Sta partecipando a un corso di e-learning.",
        "serbian": "Она похађа курс електронског учења."
      }
    },
    {
      "german": "Ich kann lernen, wann und wo ich will.",
      "translations": {
        "english": "I can learn when and where I want.",
        "ukrainian": "Я можу вчитися, коли і де захочу.",
        "polish": "Mogę się uczyć, kiedy i gdzie chcę.",
        "albanian": "Mund të mësoj kur dhe ku dua.",
        "arabic": "يمكنني التعلم متى وأينما أريد.",
        "italian": "Posso imparare quando e dove voglio.",
        "serbian": "Могу да учим кад и где желим."
      }
    },
    {
      "german": "Wenn Eleni die Prüfung besteht, bekommt sie ein Zertifikat.",
      "translations": {
        "english": "If Eleni passes the exam, she will get a certificate.",
        "ukrainian": "Якщо Елені здасть іспит, вона отримає сертифікат.",
        "polish": "Jeśli Eleni zda egzamin, otrzyma certyfikat.",
        "albanian": "Nëse Eleni e kalon provimin, do të marrë një certifikatë.",
        "arabic": "إذا نجحت إليني في الامتحان، ستحصل على شهادة.",
        "italian": "Se Eleni supera l'esame, otterrà un certificato.",
        "serbian": "Ако Елени положи испит, добиће сертификат."
      }
    },
    {
      "german": "Es macht Spaß, Selfies zu posten.",
      "translations": {
        "english": "It's fun to post selfies.",
        "ukrainian": "Постити селфі — це весело.",
        "polish": "Fajnie jest publikować selfie.",
        "albanian": "Është kënaqësi të postosh selfie.",
        "arabic": "من الممتع نشر الصور الشخصية.",
        "italian": "È divertente postare selfie.",
        "serbian": "Забавно је објављивати селфије."
      }
    },
    {
      "german": "Evi und Luca haben jeden Tag miteinander geskypt.",
      "translations": {
        "english": "Evi and Luca skyped with each other every day.",
        "ukrainian": "Еві та Лука спілкувалися по скайпу щодня.",
        "polish": "Evi i Luca codziennie rozmawiali przez Skype.",
        "albanian": "Evi dhe Luca bënin Skype me njëri-tjetrin çdo ditë.",
        "arabic": "كانت إيفي ولوكا يتحدثان عبر سكايب كل يوم.",
        "italian": "Evi e Luca si sentivano su Skype ogni giorno.",
        "serbian": "Еви и Лука су се сваки дан дописивали преко Скајпа."
      }
    },
    {
      "german": "Anna und Robert haben sich letztes Jahr ineinander verliebt.",
      "translations": {
        "english": "Anna and Robert fell in love with each other last year.",
        "ukrainian": "Анна та Роберт закохалися один в одного минулого року.",
        "polish": "Anna i Robert zakochali się w sobie w zeszłym roku.",
        "albanian": "Anna dhe Robert u dashuruan me njëri-tjetrin vitin e kaluar.",
        "arabic": "وقعت آنا وروبرت في حب بعضهما العام الماضي.",
        "italian": "Anna e Robert si sono innamorati l'uno dell'altra l'anno scorso.",
        "serbian": "Ана и Роберт су се заљубили једно у друго прошле године."
      }
    }
  ],

  // Module 3: Der erste Eindruck
  // Extracted from KB Module 3
  "3": [
    {
      "german": "Der Bewerber macht einen gepflegten Eindruck.",
      "translations": {
        "english": "The applicant makes a well-groomed impression.",
        "ukrainian": "Претендент справляє доглянуте враження.",
        "polish": "Kandydat robi schludne wrażenie.",
        "albanian": "Aplikanti bën një përshtypje të kujdesshme.",
        "arabic": "يعطي المتقدم انطباعاً أنيقاً.",
        "italian": "Il candidato fa un'impressione curata.",
        "serbian": "Кандидат оставља уредан утисак."
      }
    },
    {
      "german": "Wir sind ein weltweit bekanntes und erfolgreiches Unternehmen.",
      "translations": {
        "english": "We are a globally known and successful company.",
        "ukrainian": "Ми є всесвітньо відомою та успішною компанією.",
        "polish": "Jesteśmy znaną na całym świecie i odnoszącą sukcesy firmą.",
        "albanian": "Ne jemi një kompani e njohur dhe e suksesshme në mbarë botën.",
        "arabic": "نحن شركة معروفة وناجحة عالمياً.",
        "italian": "Siamo un'azienda conosciuta e di successo a livello mondiale.",
        "serbian": "Ми смо светски позната и успешна компанија."
      }
    },
    {
      "german": "Wir sind stets auf der Suche nach motivierten Mitarbeitern.",
      "translations": {
        "english": "We are always looking for motivated employees.",
        "ukrainian": "Ми постійно шукаємо мотивованих працівників.",
        "polish": "Stale poszukujemy zmotywowanych pracowników.",
        "albanian": "Ne jemi gjithmonë në kërkim të punonjësve të motivuar.",
        "arabic": "نحن نبحث دائماً عن موظفين متحمسين.",
        "italian": "Siamo sempre alla ricerca di dipendenti motivati.",
        "serbian": "Увек тражимо мотивисане запослене."
      }
    },
    {
      "german": "Das neue Ausbildungsjahr beginnt am ersten September.",
      "translations": {
        "english": "The new training year begins on September first.",
        "ukrainian": "Новий навчальний рік починається першого вересня.",
        "polish": "Nowy rok szkolenia rozpoczyna się pierwszego września.",
        "albanian": "Viti i ri i trajnimit fillon më një shtator.",
        "arabic": "تبدأ سنة التدريب الجديدة في الأول من سبتمبر.",
        "italian": "Il nuovo anno di formazione inizia il primo settembre.",
        "serbian": "Нова година обуке почиње првог септембра."
      }
    },
    {
      "german": "Wir bieten gutes Gehalt und angenehme Arbeitszeiten.",
      "translations": {
        "english": "We offer good salary and pleasant working hours.",
        "ukrainian": "Ми пропонуємо хорошу зарплату та приємний графік роботи.",
        "polish": "Oferujemy dobre wynagrodzenie i przyjemne godziny pracy.",
        "albanian": "Ne ofrojmë pagë të mirë dhe orë pune të këndshme.",
        "arabic": "نقدم راتباً جيداً وساعات عمل مريحة.",
        "italian": "Offriamo buono stipendio e orari di lavoro piacevoli.",
        "serbian": "Нудимо добру плату и пријатно радно време."
      }
    },
    {
      "german": "Bei Online-Bewerbungen ist Sorgfalt wichtig.",
      "translations": {
        "english": "Care is important for online applications.",
        "ukrainian": "При онлайн-заявках важлива ретельність.",
        "polish": "W przypadku aplikacji online ważna jest staranność.",
        "albanian": "Kujdesi është i rëndësishëm për aplikimet online.",
        "arabic": "الحرص مهم في التقديم عبر الإنترنت.",
        "italian": "La cura è importante per le candidature online.",
        "serbian": "Пажња је важна код онлајн пријава."
      }
    },
    {
      "german": "Der Lebenslauf sollte lückenlos und übersichtlich sein.",
      "translations": {
        "english": "The resume should be complete and clear.",
        "ukrainian": "Резюме має бути повним і зрозумілим.",
        "polish": "CV powinno być kompletne i przejrzyste.",
        "albanian": "CV-ja duhet të jetë e plotë dhe e qartë.",
        "arabic": "يجب أن تكون السيرة الذاتية كاملة وواضحة.",
        "italian": "Il curriculum dovrebbe essere completo e chiaro.",
        "serbian": "Биографија треба да буде потпуна и прегледна."
      }
    },
    {
      "german": "Man sollte vor dem Abschicken alles auf Fehler prüfen.",
      "translations": {
        "english": "You should check everything for errors before sending.",
        "ukrainian": "Перед відправленням слід перевірити все на помилки.",
        "polish": "Przed wysłaniem należy sprawdzić wszystko pod kątem błędów.",
        "albanian": "Duhet të kontrolloni gjithçka për gabime para se të dërgoni.",
        "arabic": "يجب التحقق من كل شيء بحثاً عن الأخطاء قبل الإرسال.",
        "italian": "Si dovrebbe controllare tutto per errori prima di inviare.",
        "serbian": "Треба проверити све да нема грешака пре слања."
      }
    },
    {
      "german": "Er nimmt ein Taxi, um nicht zu spät zu kommen.",
      "translations": {
        "english": "He takes a taxi in order not to be late.",
        "ukrainian": "Він бере таксі, щоб не запізнитися.",
        "polish": "Bierze taksówkę, żeby się nie spóźnić.",
        "albanian": "Ai merr taksi për të mos ardhur vonë.",
        "arabic": "يأخذ سيارة أجرة حتى لا يتأخر.",
        "italian": "Prende un taxi per non arrivare in ritardo.",
        "serbian": "Он узима такси да не би закаснио."
      }
    },
    {
      "german": "Er hat sich über die Firma informiert.",
      "translations": {
        "english": "He informed himself about the company.",
        "ukrainian": "Він поінформувався про компанію.",
        "polish": "Poinformował się o firmie.",
        "albanian": "Ai u informua për kompaninë.",
        "arabic": "استعلم عن الشركة.",
        "italian": "Si è informato sull'azienda.",
        "serbian": "Информисао се о компанији."
      }
    },
    {
      "german": "Die Kleidung muss zu der Stelle passen.",
      "translations": {
        "english": "The clothing must fit the position.",
        "ukrainian": "Одяг повинен відповідати посаді.",
        "polish": "Ubiór musi pasować do stanowiska.",
        "albanian": "Veshja duhet të përshtatet me pozicionin.",
        "arabic": "يجب أن يناسب الملابس الوظيفة.",
        "italian": "L'abbigliamento deve essere adatto alla posizione.",
        "serbian": "Одећа мора одговарати радном месту."
      }
    },
    {
      "german": "Die Kleidung muss gepflegt und ordentlich sein.",
      "translations": {
        "english": "The clothing must be neat and tidy.",
        "ukrainian": "Одяг повинен бути доглянутим і охайним.",
        "polish": "Ubiór musi być schludny i uporządkowany.",
        "albanian": "Veshja duhet të jetë e kujdesshme dhe e rregullt.",
        "arabic": "يجب أن يكون الملابس أنيقاً ومرتباً.",
        "italian": "L'abbigliamento deve essere curato e ordinato.",
        "serbian": "Одећа мора бити уредна и средства."
      }
    },
    {
      "german": "Man sollte sich auf das Bewerbungsgespräch gut vorbereiten.",
      "translations": {
        "english": "One should prepare well for the job interview.",
        "ukrainian": "Потрібно добре підготуватися до співбесіди.",
        "polish": "Należy dobrze przygotować się do rozmowy kwalifikacyjnej.",
        "albanian": "Duhet të përgatiteni mirë për intervistën e punës.",
        "arabic": "يجب الاستعداد جيداً لمقابلة العمل.",
        "italian": "Bisogna prepararsi bene per il colloquio di lavoro.",
        "serbian": "Треба се добро припремити за разговор за посао."
      }
    },
    {
      "german": "Das Bewerbungsschreiben muss zum Stellenangebot passen.",
      "translations": {
        "english": "The cover letter must match the job offer.",
        "ukrainian": "Супровідний лист повинен відповідати пропозиції роботи.",
        "polish": "List motywacyjny musi pasować do oferty pracy.",
        "albanian": "Letra e aplikimit duhet të përshtatet me ofertën e punës.",
        "arabic": "يجب أن تتوافق رسالة التقديم مع عرض العمل.",
        "italian": "La lettera di presentazione deve corrispondere all'offerta di lavoro.",
        "serbian": "Пријавно писмо мора одговарати огласу за посао."
      }
    },
    {
      "german": "Anstatt angemessene Kleidung zu tragen, trägt er Jeans und T-Shirt.",
      "translations": {
        "english": "Instead of wearing appropriate clothing, he wears jeans and a T-shirt.",
        "ukrainian": "Замість того, щоб носити відповідний одяг, він носить джинси і футболку.",
        "polish": "Zamiast nosić odpowiednie ubranie, nosi dżinsy i T-shirt.",
        "albanian": "Në vend që të veshë veshje të përshtatshme, ai vesh xhinse dhe bluzë.",
        "arabic": "بدلاً من ارتداء ملابس مناسبة، يرتدي جينز وقميص.",
        "italian": "Invece di indossare abbigliamento appropriato, indossa jeans e maglietta.",
        "serbian": "Уместо да носи одговарајућу одећу, носи фармерке и мајицу."
      }
    }
  ],

  // Module 4: Damals, gestern, heute
  // Extracted from KB Module 4
  "4": [
    {
      "german": "Schon als Kind wollte sie Sängerin werden.",
      "translations": {
        "english": "Even as a child, she wanted to become a singer.",
        "ukrainian": "Ще дитиною вона хотіла стати співачкою.",
        "polish": "Już jako dziecko chciała zostać piosenkarką.",
        "albanian": "Që si fëmijë ajo donte të bëhej këngëtare.",
        "arabic": "حتى وهي طفلة، أرادت أن تصبح مغنية.",
        "italian": "Già da bambina voleva diventare una cantante.",
        "serbian": "Још као дете желела је да постане певачица."
      }
    },
    {
      "german": "Als er vier Jahre alt war, wanderten seine Eltern nach Deutschland aus.",
      "translations": {
        "english": "When he was four years old, his parents emigrated to Germany.",
        "ukrainian": "Коли йому було чотири роки, його батьки емігрували до Німеччини.",
        "polish": "Kiedy miał cztery lata, jego rodzice wyemigrowali do Niemiec.",
        "albanian": "Kur ishte katër vjeç, prindërit e tij emigruan në Gjermani.",
        "arabic": "عندما كان في الرابعة من عمره، هاجر والداه إلى ألمانيا.",
        "italian": "Quando aveva quattro anni, i suoi genitori emigrarono in Germania.",
        "serbian": "Када је имао четири године, његови родитељи су емигрирали у Немачку."
      }
    },
    {
      "german": "Als Schüler gründete er eine Rockband.",
      "translations": {
        "english": "As a student, he founded a rock band.",
        "ukrainian": "Будучи школярем, він заснував рок-гурт.",
        "polish": "Jako uczeń założył zespół rockowy.",
        "albanian": "Si nxënës ai themeloi një bandë rok.",
        "arabic": "كطالب، أسس فرقة روك.",
        "italian": "Da studente ha fondato una band rock.",
        "serbian": "Као ученик основао је рок бенд."
      }
    },
    {
      "german": "Heute hat fast jeder Haushalt in Deutschland ein Auto.",
      "translations": {
        "english": "Today, almost every household in Germany has a car.",
        "ukrainian": "Сьогодні майже кожне домогосподарство в Німеччині має автомобіль.",
        "polish": "Dziś prawie każde gospodarstwo domowe w Niemczech ma samochód.",
        "albanian": "Sot pothuajse çdo familje në Gjermani ka një makinë.",
        "arabic": "اليوم، تمتلك كل أسرة تقريباً في ألمانيا سيارة.",
        "italian": "Oggi quasi ogni famiglia in Germania ha un'auto.",
        "serbian": "Данас скоро свако домаћинство у Немачкој има аутомобил."
      }
    },
    {
      "german": "In den 1920er Jahren war das noch nicht so.",
      "translations": {
        "english": "In the 1920s, that was not yet the case.",
        "ukrainian": "У 1920-х роках це було ще не так.",
        "polish": "W latach dwudziestych XX wieku tak jeszcze nie było.",
        "albanian": "Në vitet 1920, kjo nuk ishte ende kështu.",
        "arabic": "في عشرينيات القرن الماضي، لم يكن الأمر كذلك.",
        "italian": "Negli anni '20, non era ancora così.",
        "serbian": "Двадесетих година прошлог века то још није било тако."
      }
    },
    {
      "german": "Motorräder waren bei den Menschen sehr beliebt, weil sie nicht so teuer waren.",
      "translations": {
        "english": "Motorcycles were very popular with people because they were not so expensive.",
        "ukrainian": "Мотоцикли були дуже популярними серед людей, бо вони не були такими дорогими.",
        "polish": "Motocykle były bardzo popularne wśród ludzi, ponieważ nie były tak drogie.",
        "albanian": "Motorçikletat ishin shumë të popullarizuara tek njerëzit sepse nuk ishin aq të shtrenjta.",
        "arabic": "كانت الدراجات النارية شائعة جداً لأنها لم تكن باهظة الثمن.",
        "italian": "Le moto erano molto popolari perché non erano così costose.",
        "serbian": "Мотоцикли су били веома популарни међу људима јер нису били тако скупи."
      }
    },
    {
      "german": "Die Zahl der Verkehrsunfälle stieg damals stark.",
      "translations": {
        "english": "The number of traffic accidents rose sharply at that time.",
        "ukrainian": "Кількість дорожньо-транспортних пригод тоді різко зросла.",
        "polish": "Liczba wypadków drogowych wówczas gwałtownie wzrosła.",
        "albanian": "Numri i aksidenteve të trafikut u rrit shumë në atë kohë.",
        "arabic": "ارتفع عدد حوادث المرور بشكل حاد في ذلك الوقت.",
        "italian": "Il numero di incidenti stradali aumentò notevolmente a quel tempo.",
        "serbian": "Број саобраћајних несрећа је тада нагло порастао."
      }
    },
    {
      "german": "Als ich sechs Jahre alt war, bin ich in die Schule gekommen.",
      "translations": {
        "english": "When I was six years old, I started school.",
        "ukrainian": "Коли мені було шість років, я пішов до школи.",
        "polish": "Kiedy miałem sześć lat, poszedłem do szkoły.",
        "albanian": "Kur isha gjashtë vjeç, fillova shkollën.",
        "arabic": "عندما كان عمري ست سنوات، بدأت المدرسة.",
        "italian": "Quando avevo sei anni, ho iniziato la scuola.",
        "serbian": "Када сам имао шест година, кренуо сам у школу."
      }
    },
    {
      "german": "Wenn das Wetter schön war, bin ich zum See gefahren.",
      "translations": {
        "english": "When the weather was nice, I went to the lake.",
        "ukrainian": "Коли погода була гарною, я їздив до озера.",
        "polish": "Kiedy pogoda była ładna, jeździłem nad jezioro.",
        "albanian": "Kur moti ishte i bukur, shkoja tek liqeni.",
        "arabic": "عندما كان الطقس جميلاً، كنت أذهب إلى البحيرة.",
        "italian": "Quando il tempo era bello, andavo al lago.",
        "serbian": "Када је време било лепо, ишао сам на језеро."
      }
    },
    {
      "german": "Wenn die Sonne morgen scheint, gehe ich mit meinen Enkelkindern spazieren.",
      "translations": {
        "english": "If the sun shines tomorrow, I'll go for a walk with my grandchildren.",
        "ukrainian": "Якщо завтра буде сонце, я піду гуляти з онуками.",
        "polish": "Jeśli jutro będzie słońce, pójdę na spacer z wnukami.",
        "albanian": "Nëse dielli shkëlqen nesër, do të shkoj në shëtitje me nipërit e mi.",
        "arabic": "إذا أشرقت الشمس غداً، سأذهب في نزهة مع أحفادي.",
        "italian": "Se domani c'è il sole, andrò a passeggiare con i miei nipoti.",
        "serbian": "Ако сутра буде сунце, ићи ћу у шетњу са унуцима."
      }
    },
    {
      "german": "Die Zeit nach dem Krieg war hart, denn es gab wenig zu essen.",
      "translations": {
        "english": "The time after the war was hard because there was little to eat.",
        "ukrainian": "Час після війни був важким, бо їсти було мало.",
        "polish": "Czas po wojnie był ciężki, bo było mało jedzenia.",
        "albanian": "Koha pas luftës ishte e vështirë, sepse kishte pak për të ngrënë.",
        "arabic": "كان الوقت بعد الحرب صعباً لأنه لم يكن هناك الكثير من الطعام.",
        "italian": "Il periodo dopo la guerra era duro perché c'era poco da mangiare.",
        "serbian": "Време после рата било је тешко, јер је било мало хране."
      }
    },
    {
      "german": "Wenn das Wetter gut war, bin ich schwimmen gegangen.",
      "translations": {
        "english": "When the weather was good, I went swimming.",
        "ukrainian": "Коли погода була хорошою, я ходив плавати.",
        "polish": "Kiedy pogoda była dobra, chodziłem pływać.",
        "albanian": "Kur moti ishte i mirë, shkoja për not.",
        "arabic": "عندما كان الطقس جيداً، كنت أذهب للسباحة.",
        "italian": "Quando il tempo era bello, andavo a nuotare.",
        "serbian": "Када је време било добро, ишао сам да пливам."
      }
    },
    {
      "german": "Immer wenn ich in München bin, gehe ich in den Englischen Garten.",
      "translations": {
        "english": "Whenever I'm in Munich, I go to the English Garden.",
        "ukrainian": "Щоразу, коли я в Мюнхені, я йду до Англійського саду.",
        "polish": "Za każdym razem, gdy jestem w Monachium, idę do Ogrodu Angielskiego.",
        "albanian": "Sa herë që jam në Mynih, shkoj në Kopshtin Anglez.",
        "arabic": "كلما كنت في ميونخ، أذهب إلى الحديقة الإنجليزية.",
        "italian": "Ogni volta che sono a Monaco, vado al Giardino Inglese.",
        "serbian": "Кад год сам у Минхену, идем у Енглески врт."
      }
    },
    {
      "german": "Die Firma wurde 1905 von Georg Knorr in Berlin gegründet.",
      "translations": {
        "english": "The company was founded in 1905 by Georg Knorr in Berlin.",
        "ukrainian": "Компанія була заснована в 1905 році Георгом Кнорром у Берліні.",
        "polish": "Firma została założona w 1905 roku przez Georga Knorra w Berlinie.",
        "albanian": "Kompania u themelua në 1905 nga Georg Knorr në Berlin.",
        "arabic": "تأسست الشركة عام 1905 على يد جورج كنور في برلين.",
        "italian": "L'azienda fu fondata nel 1905 da Georg Knorr a Berlino.",
        "serbian": "Компанију је 1905. године у Берлину основао Георг Кнор."
      }
    },
    {
      "german": "Nach dem Zweiten Weltkrieg ging die Firma nach München.",
      "translations": {
        "english": "After World War II, the company moved to Munich.",
        "ukrainian": "Після Другої світової війни компанія переїхала до Мюнхена.",
        "polish": "Po drugiej wojnie światowej firma przeniosła się do Monachium.",
        "albanian": "Pas Luftës së Dytë Botërore, kompania u zhvendos në Mynih.",
        "arabic": "بعد الحرب العالمية الثانية، انتقلت الشركة إلى ميونخ.",
        "italian": "Dopo la Seconda Guerra Mondiale, l'azienda si trasferì a Monaco.",
        "serbian": "После Другог светског рата компанија се преселила у Минхен."
      }
    }
  ],

  // Module 5: Aus der Arbeitswelt
  // Extracted from KB Module 5
  "5": [
    {
      "german": "3.000 Menschen haben gegen die Schließung des Werks demonstriert.",
      "translations": {
        "english": "3,000 people demonstrated against the closure of the factory.",
        "ukrainian": "3000 людей протестували проти закриття заводу.",
        "polish": "3000 osób demonstrowało przeciwko zamknięciu fabryki.",
        "albanian": "3.000 njerëz demonstruan kundër mbylljes së fabrikës.",
        "arabic": "تظاهر 3000 شخص ضد إغلاق المصنع.",
        "italian": "3.000 persone hanno manifestato contro la chiusura della fabbrica.",
        "serbian": "3.000 људи је демонстрирало против затварања фабрике."
      }
    },
    {
      "german": "Wir haben alle Angst, dass wir arbeitslos werden.",
      "translations": {
        "english": "We are all afraid that we will become unemployed.",
        "ukrainian": "Ми всі боїмося, що станемо безробітними.",
        "polish": "Wszyscy boimy się, że zostaniemy bezrobotni.",
        "albanian": "Të gjithë kemi frikë se do të bëhemi të papunë.",
        "arabic": "نخشى جميعاً أن نصبح عاطلين عن العمل.",
        "italian": "Abbiamo tutti paura di diventare disoccupati.",
        "serbian": "Сви се плашимо да ћемо остати без посла."
      }
    },
    {
      "german": "Wir müssen für unsere Arbeitsplätze kämpfen.",
      "translations": {
        "english": "We have to fight for our jobs.",
        "ukrainian": "Ми повинні боротися за наші робочі місця.",
        "polish": "Musimy walczyć o nasze miejsca pracy.",
        "albanian": "Duhet të luftojmë për vendet tona të punës.",
        "arabic": "يجب أن نكافح من أجل وظائفنا.",
        "italian": "Dobbiamo lottare per i nostri posti di lavoro.",
        "serbian": "Морамо се борити за наша радна места."
      }
    },
    {
      "german": "Ich suche jetzt eine neue Arbeit, denn die Situation ist unsicher.",
      "translations": {
        "english": "I'm looking for a new job now because the situation is uncertain.",
        "ukrainian": "Я зараз шукаю нову роботу, бо ситуація нестабільна.",
        "polish": "Szukam teraz nowej pracy, bo sytuacja jest niepewna.",
        "albanian": "Po kërkoj punë të re tani, sepse situata është e pasigurt.",
        "arabic": "أبحث الآن عن عمل جديد لأن الوضع غير مستقر.",
        "italian": "Sto cercando un nuovo lavoro perché la situazione è incerta.",
        "serbian": "Сада тражим нови посао, јер је ситуација несигурна."
      }
    },
    {
      "german": "Der Vorsitzende des Betriebsrats fordert Verhandlungen.",
      "translations": {
        "english": "The chairman of the works council demands negotiations.",
        "ukrainian": "Голова профспілки вимагає переговорів.",
        "polish": "Przewodniczący rady zakładowej żąda negocjacji.",
        "albanian": "Kryetari i këshillit të punëtorëve kërkon negociata.",
        "arabic": "يطالب رئيس مجلس العمال بمفاوضات.",
        "italian": "Il presidente del consiglio di fabbrica chiede negoziati.",
        "serbian": "Председник радничког савета захтева преговоре."
      }
    },
    {
      "german": "Die Kosten für die Produktion sind einfach zu hoch.",
      "translations": {
        "english": "The costs for production are simply too high.",
        "ukrainian": "Витрати на виробництво просто занадто високі.",
        "polish": "Koszty produkcji są po prostu za wysokie.",
        "albanian": "Kostot e prodhimit janë thjesht shumë të larta.",
        "arabic": "تكاليف الإنتاج مرتفعة للغاية.",
        "italian": "I costi di produzione sono semplicemente troppo alti.",
        "serbian": "Трошкови производње су једноставно превисоки."
      }
    },
    {
      "german": "Nach vierwöchigen Verhandlungen haben sie einen Kompromiss gefunden.",
      "translations": {
        "english": "After four weeks of negotiations, they found a compromise.",
        "ukrainian": "Після чотирьох тижнів переговорів вони знайшли компроміс.",
        "polish": "Po czterotygodniowych negocjacjach znaleźli kompromis.",
        "albanian": "Pas katër javësh negociatash, ata gjetën një kompromis.",
        "arabic": "بعد أربعة أسابيع من المفاوضات، وجدوا حلاً وسطاً.",
        "italian": "Dopo quattro settimane di trattative, hanno trovato un compromesso.",
        "serbian": "После четири недеље преговора, пронашли су компромис."
      }
    },
    {
      "german": "Die Beschäftigten, die ihre Arbeit verlieren, bekommen Abfindungen.",
      "translations": {
        "english": "Employees who lose their jobs receive severance pay.",
        "ukrainian": "Працівники, які втрачають роботу, отримують вихідну допомогу.",
        "polish": "Pracownicy, którzy tracą pracę, otrzymują odprawy.",
        "albanian": "Punonjësit që humbasin punën e tyre marrin kompensim.",
        "arabic": "يحصل الموظفون الذين يفقدون وظائفهم على تعويضات.",
        "italian": "I dipendenti che perdono il lavoro ricevono una liquidazione.",
        "serbian": "Запослени који изгубе посао добијају отпремнину."
      }
    },
    {
      "german": "Ich bin es gewohnt, selbstständig sowie im Team zu arbeiten.",
      "translations": {
        "english": "I am used to working independently as well as in a team.",
        "ukrainian": "Я звик працювати як самостійно, так і в команді.",
        "polish": "Jestem przyzwyczajony do pracy samodzielnej i w zespole.",
        "albanian": "Jam mësuar të punoj i pavarur si dhe në ekip.",
        "arabic": "أنا معتاد على العمل بشكل مستقل وكذلك ضمن فريق.",
        "italian": "Sono abituato a lavorare sia in autonomia che in team.",
        "serbian": "Навикао сам да радим самостално као и у тиму."
      }
    },
    {
      "german": "Die Tätigkeit in Ihrer Firma interessiert mich sehr.",
      "translations": {
        "english": "I am very interested in the position at your company.",
        "ukrainian": "Мене дуже цікавить робота у вашій компанії.",
        "polish": "Bardzo interesuje mnie praca w Państwa firmie.",
        "albanian": "Jam shumë i interesuar për pozicionin në kompaninë tuaj.",
        "arabic": "أنا مهتم جداً بالعمل في شركتكم.",
        "italian": "Sono molto interessato alla posizione nella vostra azienda.",
        "serbian": "Веома ме занима посао у вашој компанији."
      }
    },
    {
      "german": "Über die Möglichkeit zu einem persönlichen Gespräch würde ich mich freuen.",
      "translations": {
        "english": "I would be happy about the opportunity for a personal conversation.",
        "ukrainian": "Я був би радий можливості особистої розмови.",
        "polish": "Ucieszyłbym się z możliwości osobistej rozmowy.",
        "albanian": "Do të isha i lumtur për mundësinë e një bisede personale.",
        "arabic": "سأكون سعيداً بفرصة إجراء محادثة شخصية.",
        "italian": "Sarei lieto di avere l'opportunità di un colloquio personale.",
        "serbian": "Био бих срећан због могућности личног разговора."
      }
    },
    {
      "german": "Bevor er die Bewerbung schreibt, liest er die Stellenanzeige.",
      "translations": {
        "english": "Before he writes the application, he reads the job advertisement.",
        "ukrainian": "Перш ніж писати заявку, він читає оголошення про роботу.",
        "polish": "Zanim pisze podanie, czyta ogłoszenie o pracę.",
        "albanian": "Para se të shkruajë aplikimin, ai lexon njoftimin e punës.",
        "arabic": "قبل أن يكتب طلب التقديم، يقرأ إعلان الوظيفة.",
        "italian": "Prima di scrivere la candidatura, legge l'annuncio di lavoro.",
        "serbian": "Пре него што напише пријаву, чита оглас за посао."
      }
    },
    {
      "german": "Während er die Bewerbung schreibt, denkt er über seine Stärken nach.",
      "translations": {
        "english": "While he writes the application, he thinks about his strengths.",
        "ukrainian": "Поки він пише заявку, він думає про свої сильні сторони.",
        "polish": "Podczas pisania podania, myśli o swoich mocnych stronach.",
        "albanian": "Ndërsa shkruan aplikimin, ai mendon për pikat e tij të forta.",
        "arabic": "بينما يكتب طلب التقديم، يفكر في نقاط قوته.",
        "italian": "Mentre scrive la candidatura, pensa ai suoi punti di forza.",
        "serbian": "Док пише пријаву, размишља о својим јаким странама."
      }
    },
    {
      "german": "Nachdem er die Bewerbung geschrieben hat, sortiert er die Unterlagen.",
      "translations": {
        "english": "After he has written the application, he sorts the documents.",
        "ukrainian": "Після того, як він написав заявку, він сортує документи.",
        "polish": "Po napisaniu podania, sortuje dokumenty.",
        "albanian": "Pasi ka shkruar aplikimin, ai organizon dokumentet.",
        "arabic": "بعد أن كتب طلب التقديم، يرتب المستندات.",
        "italian": "Dopo aver scritto la candidatura, ordina i documenti.",
        "serbian": "Након што је написао пријаву, сортира документа."
      }
    },
    {
      "german": "Das Netto-Gehalt ist das Geld, das man am Ende des Monats bekommt.",
      "translations": {
        "english": "The net salary is the money you receive at the end of the month.",
        "ukrainian": "Чиста зарплата — це гроші, які ви отримуєте наприкінці місяця.",
        "polish": "Wynagrodzenie netto to pieniądze, które otrzymujesz na koniec miesiąca.",
        "albanian": "Paga neto është paraja që merrni në fund të muajit.",
        "arabic": "الراتب الصافي هو المال الذي تحصل عليه في نهاية الشهر.",
        "italian": "Lo stipendio netto è il denaro che si riceve alla fine del mese.",
        "serbian": "Нето плата је новац који добијете на крају месеца."
      }
    }
  ],

  // Module 6: Wünsche
  // Extracted from KB Module 6
  "6": [
    {
      "german": "Viele Deutsche hätten gern mehr Zeit für sich und ihre Familien.",
      "translations": {
        "english": "Many Germans would like to have more time for themselves and their families.",
        "ukrainian": "Багато німців хотіли б мати більше часу для себе та своїх сімей.",
        "polish": "Wielu Niemców chciałoby mieć więcej czasu dla siebie i swoich rodzin.",
        "albanian": "Shumë gjermanë do të donin të kishin më shumë kohë për veten dhe familjet e tyre.",
        "arabic": "يود كثير من الألمان أن يكون لديهم مزيد من الوقت لأنفسهم وعائلاتهم.",
        "italian": "Molti tedeschi vorrebbero avere più tempo per sé e per le loro famiglie.",
        "serbian": "Многи Немци би желели да имају више времена за себе и своје породице."
      }
    },
    {
      "german": "77% möchten glücklich verheiratet sein.",
      "translations": {
        "english": "77% would like to be happily married.",
        "ukrainian": "77% хотіли б бути щасливо одруженими.",
        "polish": "77% chciałoby być szczęśliwie w związku małżeńskim.",
        "albanian": "77% do të donin të ishin të martuar lumturisht.",
        "arabic": "77% يرغبون في أن يكونوا متزوجين بسعادة.",
        "italian": "Il 77% vorrebbe essere felicemente sposato.",
        "serbian": "77% би желело да буде срећно у браку."
      }
    },
    {
      "german": "Viele hätten gern einen unbefristeten Arbeitsvertrag.",
      "translations": {
        "english": "Many would like to have a permanent employment contract.",
        "ukrainian": "Багато хто хотів би мати безстроковий трудовий договір.",
        "polish": "Wielu chciałoby mieć umowę o pracę na czas nieokreślony.",
        "albanian": "Shumë do të donin të kishin një kontratë pune të përhershme.",
        "arabic": "كثيرون يودون الحصول على عقد عمل دائم.",
        "italian": "Molti vorrebbero avere un contratto di lavoro a tempo indeterminato.",
        "serbian": "Многи би желели да имају уговор о раду на неодређено време."
      }
    },
    {
      "german": "80% würden gern ein Haus oder eine Wohnung besitzen.",
      "translations": {
        "english": "80% would like to own a house or an apartment.",
        "ukrainian": "80% хотіли б мати власний будинок або квартиру.",
        "polish": "80% chciałoby posiadać dom lub mieszkanie.",
        "albanian": "80% do të donin të zotëronin një shtëpi ose apartament.",
        "arabic": "80% يرغبون في امتلاك منزل أو شقة.",
        "italian": "L'80% vorrebbe possedere una casa o un appartamento.",
        "serbian": "80% би желело да поседује кућу или стан."
      }
    },
    {
      "german": "Wenn ich ein neues Fahrrad hätte, würde ich eine Radtour machen.",
      "translations": {
        "english": "If I had a new bicycle, I would go on a bike tour.",
        "ukrainian": "Якби я мав новий велосипед, я б поїхав у велотур.",
        "polish": "Gdybym miał nowy rower, zrobiłbym wycieczkę rowerową.",
        "albanian": "Nëse do të kisha një biçikletë të re, do të bëja një tur me biçikletë.",
        "arabic": "لو كان لدي دراجة جديدة، لذهبت في جولة بالدراجة.",
        "italian": "Se avessi una bicicletta nuova, farei un giro in bici.",
        "serbian": "Да имам нов бицикл, ишао бих на бициклистичку туру."
      }
    },
    {
      "german": "Wenn es warm wäre, würde ich im See baden gehen.",
      "translations": {
        "english": "If it were warm, I would go swimming in the lake.",
        "ukrainian": "Якби було тепло, я б пішов купатися в озері.",
        "polish": "Gdyby było ciepło, poszedłbym się kąpać w jeziorze.",
        "albanian": "Nëse do të ishte ngrohtë, do të shkoja të notoja në liqen.",
        "arabic": "لو كان الجو دافئاً، لذهبت للسباحة في البحيرة.",
        "italian": "Se facesse caldo, andrei a fare il bagno nel lago.",
        "serbian": "Да је топло, ишао бих да се купам у језеру."
      }
    },
    {
      "german": "Wenn ich morgen frei hätte, würde ich bis 10 Uhr schlafen.",
      "translations": {
        "english": "If I had tomorrow off, I would sleep until 10 o'clock.",
        "ukrainian": "Якби я завтра був вільний, я б спав до 10 години.",
        "polish": "Gdybym miał jutro wolne, spałbym do 10.",
        "albanian": "Nëse do të isha i lirë nesër, do të flija deri në orën 10.",
        "arabic": "لو كنت في إجازة غداً، لنمت حتى الساعة 10.",
        "italian": "Se domani fossi libero, dormirei fino alle 10.",
        "serbian": "Да сутра имам слободан дан, спавао бих до 10 сати."
      }
    },
    {
      "german": "Ich wünsche mir ein Smartphone zum Geburtstag.",
      "translations": {
        "english": "I wish for a smartphone for my birthday.",
        "ukrainian": "Я хочу смартфон на день народження.",
        "polish": "Życzę sobie smartfona na urodziny.",
        "albanian": "Dëshiroj një smartphone për ditëlindjen time.",
        "arabic": "أتمنى هاتفاً ذكياً لعيد ميلادي.",
        "italian": "Desidero uno smartphone per il mio compleanno.",
        "serbian": "Желим паметни телефон за рођендан."
      }
    },
    {
      "german": "Das können wir uns leider nicht leisten.",
      "translations": {
        "english": "Unfortunately, we cannot afford that.",
        "ukrainian": "На жаль, ми не можемо собі цього дозволити.",
        "polish": "Niestety, nie możemy sobie na to pozwolić.",
        "albanian": "Fatkeqësisht, nuk mund ta përballojmë atë.",
        "arabic": "للأسف، لا نستطيع تحمل ذلك.",
        "italian": "Purtroppo non possiamo permettercelo.",
        "serbian": "Нажалост, то не можемо себи да приуштимо."
      }
    },
    {
      "german": "Die Verbraucherzentralen bieten Beratung und Informationen.",
      "translations": {
        "english": "The consumer advice centers offer advice and information.",
        "ukrainian": "Центри захисту прав споживачів пропонують консультації та інформацію.",
        "polish": "Centra porad konsumenckich oferują doradztwo i informacje.",
        "albanian": "Qendrat e këshillimit të konsumatorëve ofrojnë këshilla dhe informacione.",
        "arabic": "تقدم مراكز حماية المستهلك المشورة والمعلومات.",
        "italian": "I centri di consulenza per i consumatori offrono consigli e informazioni.",
        "serbian": "Центри за заштиту потрошача нуде савете и информације."
      }
    },
    {
      "german": "Ich würde gern mehrere Sprachen sprechen.",
      "translations": {
        "english": "I would like to speak several languages.",
        "ukrainian": "Я хотів би говорити кількома мовами.",
        "polish": "Chciałbym mówić kilkoma językami.",
        "albanian": "Do të doja të flisja disa gjuhë.",
        "arabic": "أود أن أتحدث عدة لغات.",
        "italian": "Vorrei parlare diverse lingue.",
        "serbian": "Волео бих да говорим више језика."
      }
    },
    {
      "german": "Ich hätte gern mehr Zeit für meine Familie.",
      "translations": {
        "english": "I would like to have more time for my family.",
        "ukrainian": "Я хотів би мати більше часу для своєї сім'ї.",
        "polish": "Chciałbym mieć więcej czasu dla mojej rodziny.",
        "albanian": "Do të doja të kisha më shumë kohë për familjen time.",
        "arabic": "أود أن يكون لدي مزيد من الوقت لعائلتي.",
        "italian": "Vorrei avere più tempo per la mia famiglia.",
        "serbian": "Желео бих да имам више времена за своју породицу."
      }
    },
    {
      "german": "Du solltest mehr Obst essen.",
      "translations": {
        "english": "You should eat more fruit.",
        "ukrainian": "Тобі слід їсти більше фруктів.",
        "polish": "Powinieneś jeść więcej owoców.",
        "albanian": "Duhet të hash më shumë fruta.",
        "arabic": "يجب أن تأكل المزيد من الفاكهة.",
        "italian": "Dovresti mangiare più frutta.",
        "serbian": "Требало би да једеш више воћа."
      }
    },
    {
      "german": "Du könntest mal dein Zimmer aufräumen.",
      "translations": {
        "english": "You could tidy up your room for once.",
        "ukrainian": "Ти міг би нарешті прибрати свою кімнату.",
        "polish": "Mógłbyś w końcu posprzątać swój pokój.",
        "albanian": "Mund ta rregulloje dhomën tënde një herë.",
        "arabic": "يمكنك ترتيب غرفتك لمرة واحدة.",
        "italian": "Potresti riordinare la tua stanza una buona volta.",
        "serbian": "Могао би једном да средиш своју собу."
      }
    },
    {
      "german": "Wir könnten zusammen ins Kino gehen.",
      "translations": {
        "english": "We could go to the cinema together.",
        "ukrainian": "Ми могли б піти разом у кіно.",
        "polish": "Moglibyśmy pójść razem do kina.",
        "albanian": "Mund të shkonim në kinema së bashku.",
        "arabic": "يمكننا الذهاب إلى السينما معاً.",
        "italian": "Potremmo andare al cinema insieme.",
        "serbian": "Могли бисмо заједно да идемо у биоскоп."
      }
    }
  ]
});
