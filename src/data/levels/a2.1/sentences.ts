import { Card } from '../../../types';

export const A2_1_SENTENCE_SECTIONS = [1, 2, 3, 4, 5, 6, 7];

const sanitizeFilename = (text: string): string => {
    let sanitized = text.replace(/\s+/g, '_');
    sanitized = sanitized.replace(/[^a-zA-Z0-9_äöüÄÖÜß]/g, '');
    return sanitized;
};

const addAudioPaths = (sentencesBySection: Record<number, Omit<Card, 'audioSrc'>[]>) => {
  const result: Record<number, Card[]> = {};
  for (const section in sentencesBySection) {
    result[section] = sentencesBySection[section].map(card => ({
        ...card,
        audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/a2.1/sentences/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const a2_1_Sentences: Record<number, Card[]> = addAudioPaths({
  1: [
    {
      "german": "eine Person vorstellen",
      "translations": {
        "english": "to introduce a person",
        "ukrainian": "представити особу",
        "polish": "przedstawić osobę",
        "albanian": "të prezantosh një person",
        "arabic": "تقديم شخص",
        "italian": "presentare una persona",
        "serbian": "представити особу"
      }
    },
    {
      "german": "Er kommt aus Deutschland.",
      "translations": {
        "english": "He comes from Germany.",
        "ukrainian": "Він походить з Німеччини.",
        "polish": "On pochodzi z Niemiec.",
        "albanian": "Ai vjen nga Gjermania.",
        "arabic": "هو من ألمانيا.",
        "italian": "Lui viene dalla Germania.",
        "serbian": "Он долази из Немачке."
      }
    },
    {
      "german": "Sie kennt die Stadt sehr gut.",
      "translations": {
        "english": "She knows the city very well.",
        "ukrainian": "Вона добре знає місто.",
        "polish": "Ona dobrze zna miasto.",
        "albanian": "Ajo e njeh qytetin shumë mirë.",
        "arabic": "هي تعرف المدينة جيدًا.",
        "italian": "Lei conosce molto bene la città.",
        "serbian": "Она веома добро познаје град."
      }
    },
    {
      "german": "Er hat in Berlin gewohnt und gearbeitet.",
      "translations": {
        "english": "He lived and worked in Berlin.",
        "ukrainian": "Він жив і працював у Берліні.",
        "polish": "On mieszkał i pracował w Berlinie.",
        "albanian": "Ai ka jetuar dhe punuar në Berlin.",
        "arabic": "هو عاش وعمل في برلين.",
        "italian": "Lui ha vissuto e lavorato a Berlino.",
        "serbian": "Живео је и радио у Берлину."
      }
    },
    {
      "german": "Sie findet Berlin interessant, angenehm und sauber.",
      "translations": {
        "english": "She finds Berlin interesting, pleasant, and clean.",
        "ukrainian": "Вона вважає Берлін цікавим, приємним і чистим.",
        "polish": "Ona uważa Berlin za interesujące, przyjemne i czyste.",
        "albanian": "Ajo e gjen Berlinin interesante, të këndshme dhe të pastër.",
        "arabic": "هي تجد برلين مثيرة للاهتمام، لطيفة ونظيفة.",
        "italian": "Lei trova Berlino interessante, piacevole e pulita.",
        "serbian": "Она сматра да је Берлин занимљив, пријатан и чист."
      }
    },
    {
      "german": "Er mag Berlin nicht. Die Stadt ist zu groß und zu hektisch.",
      "translations": {
        "english": "He doesn't like Berlin. The city is too big and too hectic.",
        "ukrainian": "Йому не подобається Берлін. Місто занадто велике і занадто неспокійне.",
        "polish": "On nie lubi Berlina. Miasto jest za duże i za gorączkowe.",
        "albanian": "Ai nuk i pëlqen Berlini. Qyteti është shumë i madh dhe shumë i shpejtë.",
        "arabic": "هو لا يحب برلين. المدينة كبيرة جدًا ومحمومة جدًا.",
        "italian": "A lui non piace Berlino. La città è troppo grande e troppo frenetica.",
        "serbian": "Не свиђа му се Берлин. Град је превелик и пребукан."
      }
    },
    {
      "german": "Er wohnt schon seit einigen Jahren in Deutschland.",
      "translations": {
        "english": "He has been living in Germany for several years.",
        "ukrainian": "Він живе в Німеччині вже кілька років.",
        "polish": "On mieszka w Niemczech już od kilku lat.",
        "albanian": "Ai jeton në Gjermani prej disa vitesh.",
        "arabic": "هو يعيش في ألمانيا منذ عدة سنوات.",
        "italian": "Lui vive in Germania da diversi anni.",
        "serbian": "Он живи у Немачкој већ неколико година."
      }
    },
    {
      "german": "Er möchte gerne in Deutschland wohnen und arbeiten.",
      "translations": {
        "english": "He would like to live and work in Germany.",
        "ukrainian": "Він хотів би жити і працювати в Німеччині.",
        "polish": "On chciałby mieszkać i pracować w Niemczech.",
        "albanian": "Ai do të dëshironte të jetonte dhe punonte në Gjermani.",
        "arabic": "هو يود أن يعيش ويعمل في ألمانيا.",
        "italian": "A lui piacerebbe vivere e lavorare in Germania.",
        "serbian": "Волео би да живи и ради у Немачкој."
      }
    },
    {
      "german": "Hamburg liegt im Norden von Deutschland.",
      "translations": {
        "english": "Hamburg is located in the north of Germany.",
        "ukrainian": "Гамбург знаходиться на півночі Німеччини.",
        "polish": "Hamburg znajduje się na północy Niemiec.",
        "albanian": "Hamburgu ndodhet në veri të Gjermanisë.",
        "arabic": "هامبورغ تقع في شمال ألمانيا.",
        "italian": "Amburgo si trova nel nord della Germania.",
        "serbian": "Хамбург се налази на северу Немачке."
      }
    },
    {
      "german": "Potsdam liegt in der Nähe von Berlin.",
      "translations": {
        "english": "Potsdam is located near Berlin.",
        "ukrainian": "Потсдам знаходиться поблизу Берліна.",
        "polish": "Poczdam znajduje się w pobliżu Berlina.",
        "albanian": "Potsdami ndodhet pranë Berlinit.",
        "arabic": "بوتسدام تقع بالقرب من برلين.",
        "italian": "Potsdam si trova vicino a Berlino.",
        "serbian": "Потсдам се налази близу Берлина."
      }
    },
    {
      "german": "Seine Verwandten und Freunde wohnen in einer anderen Stadt.",
      "translations": {
        "english": "His relatives and friends live in another city.",
        "ukrainian": "Його родичі та друзі живуть в іншому місті.",
        "polish": "Jego krewni i przyjaciele mieszkają w innym mieście.",
        "albanian": "Të afërmit dhe miqtë e tij jetojnë në një qytet tjetër.",
        "arabic": "أقاربه وأصدقاؤه يعيشون في مدينة أخرى.",
        "italian": "I suoi parenti e amici vivono in un'altra città.",
        "serbian": "Његови рођаци и пријатељи живе у другом граду."
      }
    },
    {
      "german": "über Erfahrungen in Deutschland sprechen",
      "translations": {
        "english": "to talk about experiences in Germany",
        "ukrainian": "говорити про досвід у Німеччині",
        "polish": "rozmawiać o doświadczeniach w Niemczech",
        "albanian": "të flasësh për përvojat në Gjermani",
        "arabic": "التحدث عن التجارب في ألمانيا",
        "italian": "parlare delle esperienze in Germania",
        "serbian": "говорити о искуствима у Немачкој"
      }
    },
    {
      "german": "Ihr habt eure Heimat verlassen. War das schwer für euch?",
      "translations": {
        "english": "You left your homeland. Was that difficult for you?",
        "ukrainian": "Ви покинули свою батьківщину. Це було важко для вас?",
        "polish": "Opuściliście swoją ojczyznę. Czy to było dla was trudne?",
        "albanian": "Ju e keni lënë atdheun tuaj. A ishte e vështirë për ju?",
        "arabic": "لقد تركتم وطنكم. هل كان ذلك صعبًا عليكم؟",
        "italian": "Avete lasciato la vostra patria. È stato difficile per voi?",
        "serbian": "Напустили сте своју домовину. Да ли вам је то било тешко?"
      }
    },
    {
      "german": "Ja, das war nicht einfach. Aber jetzt ist Deutschland auch unsere Heimat.",
      "translations": {
        "english": "Yes, it wasn't easy. But now Germany is also our homeland.",
        "ukrainian": "Так, це було нелегко. Але тепер Німеччина також наша батьківщина.",
        "polish": "Tak, to nie było łatwe. Ale teraz Niemcy są także naszą ojczyzną.",
        "albanian": "Po, nuk ishte e lehtë. Por tani Gjermania është gjithashtu atdheu ynë.",
        "arabic": "نعم، لم يكن سهلاً. لكن الآن ألمانيا هي وطننا أيضًا.",
        "italian": "Sì, non è stato facile. Ma ora la Germania è anche la nostra patria.",
        "serbian": "Да, није било лако. Али сада је и Немачка наша домовина."
      }
    },
    {
      "german": "über das Sprachenlernen sprechen und Lerntipps geben",
      "translations": {
        "english": "to talk about language learning and give learning tips",
        "ukrainian": "говорити про вивчення мов і давати поради щодо навчання",
        "polish": "rozmawiać o nauce języków i dawać wskazówki dotyczące nauki",
        "albanian": "të flasësh për mësimin e gjuhëve dhe të japësh këshilla për mësim",
        "arabic": "التحدث عن تعلم اللغات وإعطاء نصائح للتعلم",
        "italian": "parlare dell'apprendimento delle lingue e dare consigli",
        "serbian": "говорити о учењу језика и давати савете за учење"
      }
    },
    {
      "german": "Vorschläge machen und Tipps geben",
      "translations": {
        "english": "to make suggestions and give tips",
        "ukrainian": "робити пропозиції та давати поради",
        "polish": "składać propozycje i dawać wskazówki",
        "albanian": "të bësh sugjerime dhe të japësh këshilla",
        "arabic": "تقديم الاقتراحات والنصائح",
        "italian": "fare proposte e dare consigli",
        "serbian": "давати предлоге и савете"
      }
    },
    {
      "german": "Du kannst vielleicht mit den Nachbarn Deutsch sprechen.",
      "translations": {
        "english": "You can perhaps speak German with the neighbors.",
        "ukrainian": "Ти можеш, можливо, говорити німецькою з сусідами.",
        "polish": "Możesz być może rozmawiać po niemiecku z sąsiadami.",
        "albanian": "Ti mund të flasësh ndoshta gjermanisht me fqinjët.",
        "arabic": "يمكنك ربما التحدث بالألمانية مع الجيران.",
        "italian": "Puoi forse parlare tedesco con i vicini.",
        "serbian": "Можда можете говорити немачки са комшијама."
      }
    },
    {
      "german": "Du musst unbedingt einen Kurs besuchen, zum Beispiel einen Tanzkurs oder Kochkurs.",
      "translations": {
        "english": "You must absolutely attend a course, for example a dance course or cooking course.",
        "ukrainian": "Ти повинен обов'язково відвідувати курси, наприклад, танцювальні або кулінарні.",
        "polish": "Musisz koniecznie uczęszczać na kurs, na przykład taneczny lub kulinarny.",
        "albanian": "Duhet patjetër të ndjekësh një kurs, për shembull kurs vallëzimi ose gatimi.",
        "arabic": "يجب عليك بالتأكيد حضور دورة، على سبيل المثال دورة الرقص أو الطبخ.",
        "italian": "Devi assolutamente frequentare un corso, ad esempio un corso di danza o di cucina.",
        "serbian": "Обавезно морате похађати курс, на пример курс плеса или кувања."
      }
    },
    {
      "german": "Du darfst keine Angst haben.",
      "translations": {
        "english": "You must not be afraid.",
        "ukrainian": "Тобі не можна боятися.",
        "polish": "Nie możesz się bać.",
        "albanian": "Nuk duhet të kesh frikë.",
        "arabic": "يجب ألا تخاف.",
        "italian": "Non devi avere paura.",
        "serbian": "Не смете се плашити."
      }
    },
    {
      "german": "Ich verstehe die Deutschen nicht. Sie sprechen so schnell und so kompliziert.",
      "translations": {
        "english": "I don't understand the Germans. They speak so fast and so complicated.",
        "ukrainian": "Я не розумію німців. Вони говорять так швидко і так складно.",
        "polish": "Nie rozumiem Niemców. Mówią tak szybko i tak skomplikowanie.",
        "albanian": "Nuk i kuptoj gjermanët. Ata flasin aq shpejt dhe aq të ndërlikuar.",
        "arabic": "لا أفهم الألمان. إنهم يتحدثون بسرعة كبيرة ومعقدة.",
        "italian": "Non capisco i tedeschi. Parlano così veloce e così complicato.",
        "serbian": "Не разумем Немце. Говоре тако брзо и тако компликовано."
      }
    },
    {
      "german": "Ich brauche viele Wörter. Wie kann ich gut neue Wörter lernen?",
      "translations": {
        "english": "I need many words. How can I learn new words well?",
        "ukrainian": "Мені потрібно багато слів. Як я можу добре вивчити нові слова?",
        "polish": "Potrzebuję wielu słów. Jak mogę dobrze uczyć się nowych słów?",
        "albanian": "Më duhen shumë fjalë. Si mund të mësoj mirë fjalë të reja?",
        "arabic": "أحتاج إلى كلمات كثيرة. كيف يمكنني تعلم كلمات جديدة بشكل جيد؟",
        "italian": "Ho bisogno di molte parole. Come posso imparare bene nuove parole?",
        "serbian": "Треба ми много речи. Како могу добро научити нове речи?"
      }
    },
    {
      "german": "Ich kann nicht gut schreiben. Ich mache immer so viele Fehler.",
      "translations": {
        "english": "I can't write well. I always make so many mistakes.",
        "ukrainian": "Я не можу добре писати. Я завжди роблю так багато помилок.",
        "polish": "Nie potrafię dobrze pisać. Zawsze robię tak wiele błędów.",
        "albanian": "Nuk mund të shkruaj mirë. Gjithmonë bëj kaq shumë gabime.",
        "arabic": "لا أستطيع الكتابة جيدًا. أرتكب دائمًا الكثير من الأخطاء.",
        "italian": "Non so scrivere bene. Faccio sempre tanti errori.",
        "serbian": "Не могу добро да пишем. Увек правим толико грешака."
      }
    }
  ],
  2: [
    {
      "german": "eine Zeitung lesen",
      "translations": {
        "english": "to read a newspaper",
        "ukrainian": "читати газету",
        "polish": "czytać gazetę",
        "albanian": "të lexosh gazetë",
        "arabic": "قراءة الجريدة",
        "italian": "leggere un giornale",
        "serbian": "читати новине"
      }
    },
    {
      "german": "mit Kopfhörern Musik hören",
      "translations": {
        "english": "to listen to music with headphones",
        "ukrainian": "слухати музику в навушниках",
        "polish": "słuchać muzyki przez słuchawki",
        "albanian": "të dëgjosh muzikë me kufje",
        "arabic": "الاستماع إلى الموسيقى بسماعات الرأس",
        "italian": "ascoltare musica con le cuffie",
        "serbian": "слушати музику са слушалицама"
      }
    },
    {
      "german": "am Laptop arbeiten",
      "translations": {
        "english": "to work on the laptop",
        "ukrainian": "працювати на ноутбуці",
        "polish": "pracować na laptopie",
        "albanian": "të punosh në laptop",
        "arabic": "العمل على الكمبيوتر المحمول",
        "italian": "lavorare al laptop",
        "serbian": "радити на лаптопу"
      }
    },
    {
      "german": "im Internet surfen",
      "translations": {
        "english": "to surf the internet",
        "ukrainian": "серфити в інтернеті",
        "polish": "surfować w internecie",
        "albanian": "të sërfosh në internet",
        "arabic": "تصفح الإنترنت",
        "italian": "navigare su internet",
        "serbian": "сурфовати интернетом"
      }
    },
    {
      "german": "mit dem Handy/Smartphone telefonieren",
      "translations": {
        "english": "to make a phone call with the mobile/smartphone",
        "ukrainian": "телефонувати з мобільного/смартфона",
        "polish": "rozmawiać przez telefon komórkowy/smartfon",
        "albanian": "të telefonosh me celular/smartfon",
        "arabic": "إجراء مكالمة هاتفية بالموبايل/الهاتف الذكي",
        "italian": "telefonare con il cellulare/smartphone",
        "serbian": "телефонирати мобилним/паметним телефоном"
      }
    },
    {
      "german": "mit Freunden chatten",
      "translations": {
        "english": "to chat with friends",
        "ukrainian": "чатитися з друзями",
        "polish": "czatować ze znajomymi",
        "albanian": "të bisedosh me miqtë",
        "arabic": "الدردشة مع الأصدقاء",
        "italian": "chattare con gli amici",
        "serbian": "ћаскати са пријатељима"
      }
    },
    {
      "german": "Mein Smartphone benutze ich täglich. Ich muss immer erreichbar sein.",
      "translations": {
        "english": "I use my smartphone daily. I must always be reachable.",
        "ukrainian": "Я користуюся своїм смартфоном щодня. Я повинен бути завжди доступним.",
        "polish": "Codziennie używam smartfona. Muszę być zawsze dostępny.",
        "albanian": "Përdor smartfonin çdo ditë. Duhet të jem gjithmonë i arritshëm.",
        "arabic": "أستخدم هاتفي الذكي يوميًا. يجب أن أكون دائمًا متاحًا.",
        "italian": "Uso il mio smartphone ogni giorno. Devo essere sempre reperibile.",
        "serbian": "Користим свој паметни телефон свакодневно. Увек морам бити доступан."
      }
    },
    {
      "german": "Das Internet ist für mich wichtig, weil ich da gute Informationen finden kann.",
      "translations": {
        "english": "The internet is important for me because I can find good information there.",
        "ukrainian": "Інтернет для мене важливий, тому що там я можу знайти хорошу інформацію.",
        "polish": "Internet jest dla mnie ważny, ponieważ mogę tam znaleźć dobre informacje.",
        "albanian": "Interneti është i rëndësishëm për mua sepse mund të gjej informacione të mira atje.",
        "arabic": "الإنترنت مهم بالنسبة لي لأنني أستطيع العثور على معلومات جيدة هناك.",
        "italian": "Internet è importante per me perché posso trovare buone informazioni lì.",
        "serbian": "Интернет ми је важан јер тамо могу наћи добре информације."
      }
    },
    {
      "german": "Zuerst öffnet man das E-Mail-Programm.",
      "translations": {
        "english": "First you open the email program.",
        "ukrainian": "Спочатку відкривають програму електронної пошти.",
        "polish": "Najpierw otwiera się program e-mail.",
        "albanian": "Fillimisht hap programin e emailit.",
        "arabic": "أولاً تفتح برنامج البريد الإلكتروني.",
        "italian": "Prima si apre il programma di posta elettronica.",
        "serbian": "Прво отворите програм за е-пошту."
      }
    },
    {
      "german": "Welche Software benutzen Sie? Welche Apps finden Sie gut? Warum?",
      "translations": {
        "english": "What software do you use? Which apps do you find good? Why?",
        "ukrainian": "Яким програмним забезпеченням ви користуєтеся? Які додатки вам подобаються? Чому?",
        "polish": "Jakiego oprogramowania Pan/Pani używa? Które aplikacje uważa Pan/Pani za dobre? Dlaczego?",
        "albanian": "Çfarë software përdorni? Cilat aplikacione i gjeni të mira? Pse?",
        "arabic": "ما هو البرنامج الذي تستخدمه؟ ما هي التطبيقات التي تجدها جيدة؟ لماذا؟",
        "italian": "Quale software usa? Quali app trova buone? Perché?",
        "serbian": "Који софтвер користите? Које апликације сматрате добрим? Зашто?"
      }
    },
    {
      "german": "Ich sehe manchmal die Nachrichten. Aber leider verstehe ich viele Wörter nicht.",
      "translations": {
        "english": "I sometimes watch the news. But unfortunately I don't understand many words.",
        "ukrainian": "Я іноді дивлюся новини. Але, на жаль, я не розумію багато слів.",
        "polish": "Czasami oglądam wiadomości. Ale niestety nie rozumiem wielu słów.",
        "albanian": "Ndonjëherë shikoj lajmet. Por fatkeqësisht nuk kuptoj shumë fjalë.",
        "arabic": "أشاهد الأخبار أحيانًا. لكن للأسف لا أفهم الكثير من الكلمات.",
        "italian": "A volte guardo il telegiornale. Ma purtroppo non capisco molte parole.",
        "serbian": "Понекад гледам вести. Али нажалост не разумем много речи."
      }
    },
    {
      "german": "Jeder Haushalt in Deutschland muss für das öffentlich-rechtliche Fernseh- und Radioprogramm eine Gebühr bezahlen.",
      "translations": {
        "english": "Every household in Germany must pay a fee for public television and radio programs.",
        "ukrainian": "Кожне домогосподарство в Німеччині повинно платити збір за громадське телебачення та радіопрограми.",
        "polish": "Każde gospodarstwo domowe w Niemczech musi płacić opłatę za publiczne programy telewizyjne i radiowe.",
        "albanian": "Çdo familje në Gjermani duhet të paguajë një tarifë për programet publike të televizionit dhe radios.",
        "arabic": "يجب على كل أسرة في ألمانيا دفع رسوم لبرامج التلفزيون والراديو العامة.",
        "italian": "Ogni famiglia in Germania deve pagare una tassa per i programmi televisivi e radiofonici pubblici.",
        "serbian": "Свако домаћинство у Немачкој мора платити накнаду за јавне телевизијске и радио програме."
      }
    },
    {
      "german": "Ich finde, dass das Fernsehen gute Informationen bietet.",
      "translations": {
        "english": "I think that television offers good information.",
        "ukrainian": "Я вважаю, що телебачення пропонує хорошу інформацію.",
        "polish": "Uważam, że telewizja oferuje dobre informacje.",
        "albanian": "Mendoj se televizioni ofron informacione të mira.",
        "arabic": "أعتقد أن التلفزيون يقدم معلومات جيدة.",
        "italian": "Penso che la televisione offra buone informazioni.",
        "serbian": "Мислим да телевизија нуди добре информације."
      }
    },
    {
      "german": "Meinen Sie, dass wir heute noch Bücher brauchen?",
      "translations": {
        "english": "Do you think we still need books today?",
        "ukrainian": "Ви вважаєте, що нам сьогодні ще потрібні книги?",
        "polish": "Czy uważa Pan/Pani, że dziś jeszcze potrzebujemy książek?",
        "albanian": "A mendoni se sot kemi ende nevojë për libra?",
        "arabic": "هل تعتقد أننا ما زلنا بحاجة إلى الكتب اليوم؟",
        "italian": "Pensa che abbiamo ancora bisogno di libri oggi?",
        "serbian": "Мислите ли да нам данас још увек требају књиге?"
      }
    },
    {
      "german": "Ich bin dafür, dass wir das machen.",
      "translations": {
        "english": "I am in favor of us doing that.",
        "ukrainian": "Я за те, щоб ми це зробили.",
        "polish": "Jestem za tym, żebyśmy to zrobili.",
        "albanian": "Jam pro që ta bëjmë këtë.",
        "arabic": "أنا أؤيد أن نفعل ذلك.",
        "italian": "Sono a favore del fatto che lo facciamo.",
        "serbian": "Ја сам за то да то урадимо."
      }
    },
    {
      "german": "Ich bin dagegen, dass wir das machen.",
      "translations": {
        "english": "I am against us doing that.",
        "ukrainian": "Я проти того, щоб ми це робили.",
        "polish": "Jestem przeciwny temu, żebyśmy to zrobili.",
        "albanian": "Jam kundër që ta bëjmë këtë.",
        "arabic": "أنا ضد أن نفعل ذلك.",
        "italian": "Sono contrario al fatto che lo facciamo.",
        "serbian": "Ја сам против тога да то урадимо."
      }
    },
    {
      "german": "Schüler brauchen oft Internet, weil sie Informationen für die Schule recherchieren.",
      "translations": {
        "english": "Students often need internet because they research information for school.",
        "ukrainian": "Учні часто потребують інтернету, тому що вони шукають інформацію для школи.",
        "polish": "Uczniowie często potrzebują internetu, ponieważ szukają informacji do szkoły.",
        "albanian": "Nxënësit shpesh kanë nevojë për internet sepse kërkojnë informacione për shkollën.",
        "arabic": "الطلاب غالبًا ما يحتاجون للإنترنت لأنهم يبحثون عن معلومات للمدرسة.",
        "italian": "Gli studenti hanno spesso bisogno di internet perché cercano informazioni per la scuola.",
        "serbian": "Ученици често требају интернет јер истражују информације за школу."
      }
    },
    {
      "german": "im Internet recherchieren",
      "translations": {
        "english": "to research on the internet",
        "ukrainian": "шукати в інтернеті",
        "polish": "szukać w internecie",
        "albanian": "të kërkosh në internet",
        "arabic": "البحث على الإنترنت",
        "italian": "fare ricerche su internet",
        "serbian": "истраживати на интернету"
      }
    },
    {
      "german": "eine App herunterladen",
      "translations": {
        "english": "to download an app",
        "ukrainian": "завантажити додаток",
        "polish": "pobrać aplikację",
        "albanian": "të shkarkosh një aplikacion",
        "arabic": "تحميل تطبيق",
        "italian": "scaricare un'app",
        "serbian": "преузети апликацију"
      }
    },
    {
      "german": "Online-Banking machen",
      "translations": {
        "english": "to do online banking",
        "ukrainian": "користуватися онлайн-банкінгом",
        "polish": "korzystać z bankowości internetowej",
        "albanian": "të bësh banking online",
        "arabic": "القيام بالخدمات المصرفية عبر الإنترنت",
        "italian": "fare banking online",
        "serbian": "користити онлајн банкарство"
      }
    },
    {
      "german": "einen Termin am Tablet eintragen",
      "translations": {
        "english": "to enter an appointment on the tablet",
        "ukrainian": "внести зустріч на планшеті",
        "polish": "wpisać termin na tablecie",
        "albanian": "të futësh një takim në tablet",
        "arabic": "إدخال موعد على الجهاز اللوحي",
        "italian": "inserire un appuntamento sul tablet",
        "serbian": "унети термин на таблету"
      }
    },
    {
      "german": "Bilder bearbeiten",
      "translations": {
        "english": "to edit images",
        "ukrainian": "редагувати зображення",
        "polish": "edytować obrazy",
        "albanian": "të përpunosh imazhe",
        "arabic": "تحرير الصور",
        "italian": "modificare immagini",
        "serbian": "уређивати слике"
      }
    }
  ],
  3: [
    {
      "german": "am Wochenende",
      "translations": {
        "english": "on the weekend",
        "ukrainian": "на вихідних",
        "polish": "w weekend",
        "albanian": "në fundjavë",
        "arabic": "في عطلة نهاية الأسبوع",
        "italian": "nel fine settimana",
        "serbian": "викендом"
      }
    },
    {
      "german": "am Samstag",
      "translations": {
        "english": "on Saturday",
        "ukrainian": "в суботу",
        "polish": "w sobotę",
        "albanian": "të shtunën",
        "arabic": "يوم السبت",
        "italian": "sabato",
        "serbian": "у суботу"
      }
    },
    {
      "german": "am Sonntag",
      "translations": {
        "english": "on Sunday",
        "ukrainian": "в неділю",
        "polish": "w niedzielę",
        "albanian": "të dielën",
        "arabic": "يوم الأحد",
        "italian": "domenica",
        "serbian": "у недељу"
      }
    },
    {
      "german": "einkaufen",
      "translations": {
        "english": "to go shopping",
        "ukrainian": "робити покупки",
        "polish": "robić zakupy",
        "albanian": "të bësh blerje",
        "arabic": "التسوق",
        "italian": "fare la spesa",
        "serbian": "куповати"
      }
    },
    {
      "german": "Eis essen",
      "translations": {
        "english": "to eat ice cream",
        "ukrainian": "їсти морозиво",
        "polish": "jeść lody",
        "albanian": "të hash akullore",
        "arabic": "تناول الآيس كريم",
        "italian": "mangiare il gelato",
        "serbian": "јести сладолед"
      }
    },
    {
      "german": "schwimmen gehen",
      "translations": {
        "english": "to go swimming",
        "ukrainian": "йти плавати",
        "polish": "iść pływać",
        "albanian": "të shkosh të notosh",
        "arabic": "الذهاب للسباحة",
        "italian": "andare a nuotare",
        "serbian": "ићи на пливање"
      }
    },
    {
      "german": "Sport machen",
      "translations": {
        "english": "to do sports",
        "ukrainian": "займатися спортом",
        "polish": "uprawiać sport",
        "albanian": "të bësh sport",
        "arabic": "ممارسة الرياضة",
        "italian": "fare sport",
        "serbian": "бавити се спортом"
      }
    },
    {
      "german": "Freunde treffen",
      "translations": {
        "english": "to meet friends",
        "ukrainian": "зустрічатися з друзями",
        "polish": "spotkać się z przyjaciółmi",
        "albanian": "të takosh miq",
        "arabic": "مقابلة الأصدقاء",
        "italian": "incontrare amici",
        "serbian": "срести пријатеље"
      }
    },
    {
      "german": "Kaffee trinken",
      "translations": {
        "english": "to drink coffee",
        "ukrainian": "пити каву",
        "polish": "pić kawę",
        "albanian": "të pish kafe",
        "arabic": "شرب القهوة",
        "italian": "bere caffè",
        "serbian": "пити кафу"
      }
    },
    {
      "german": "ein Picknick machen",
      "translations": {
        "english": "to have a picnic",
        "ukrainian": "влаштовувати пікнік",
        "polish": "urządzić piknik",
        "albanian": "të bësh piknik",
        "arabic": "القيام بنزهة",
        "italian": "fare un picnic",
        "serbian": "то хаве а пицниц"
      }
    },
    {
      "german": "tanzen",
      "translations": {
        "english": "to dance",
        "ukrainian": "танцювати",
        "polish": "tańczyć",
        "albanian": "të kërcesh",
        "arabic": "الرقص",
        "italian": "ballare",
        "serbian": "то данце"
      }
    },
    {
      "german": "grillen",
      "translations": {
        "english": "to grill/barbecue",
        "ukrainian": "смажити на грилі",
        "polish": "grillować",
        "albanian": "të pjekësh në skarë",
        "arabic": "الشواء",
        "italian": "grigliare",
        "serbian": "то грилл/барбецуе"
      }
    },
    {
      "german": "lange schlafen",
      "translations": {
        "english": "to sleep in/sleep late",
        "ukrainian": "довго спати",
        "polish": "długo spać",
        "albanian": "të flesh gjatë",
        "arabic": "النوم طويلاً",
        "italian": "dormire a lungo",
        "serbian": "то слееп ин/слееп лате"
      }
    },
    {
      "german": "die Wohnung putzen",
      "translations": {
        "english": "to clean the apartment",
        "ukrainian": "прибирати квартиру",
        "polish": "sprzątać mieszkanie",
        "albanian": "të pastrosh apartamentin",
        "arabic": "تنظيف الشقة",
        "italian": "pulire l'appartamento",
        "serbian": "то цлеан тхе апартмент"
      }
    },
    {
      "german": "das Auto putzen",
      "translations": {
        "english": "to clean the car",
        "ukrainian": "мити машину",
        "polish": "myć samochód",
        "albanian": "të lash makinën",
        "arabic": "غسل السيارة",
        "italian": "lavare la macchina",
        "serbian": "то цлеан тхе цар"
      }
    },
    {
      "german": "im Garten arbeiten",
      "translations": {
        "english": "to work in the garden",
        "ukrainian": "працювати в саду",
        "polish": "pracować w ogrodzie",
        "albanian": "të punosh në kopsht",
        "arabic": "العمل في الحديقة",
        "italian": "lavorare in giardino",
        "serbian": "то ворк ин тхе гарден"
      }
    },
    {
      "german": "Ausflüge machen",
      "translations": {
        "english": "to go on excursions",
        "ukrainian": "робити екскурсії",
        "polish": "robić wycieczki",
        "albanian": "të bësh ekskursione",
        "arabic": "القيام برحلات",
        "italian": "fare gite",
        "serbian": "то го он ексцурсион"
      }
    },
    {
      "german": "Verwandte besuchen",
      "translations": {
        "english": "to visit relatives",
        "ukrainian": "відвідувати родичів",
        "polish": "odwiedzać krewnych",
        "albanian": "të vizitosh të afërmit",
        "arabic": "زيارة الأقارب",
        "italian": "visitare i parenti",
        "serbian": "посетити рођаке"
      }
    },
    {
      "german": "in einen Club gehen",
      "translations": {
        "english": "to go to a club",
        "ukrainian": "йти в клуб",
        "polish": "iść do klubu",
        "albanian": "të shkosh në klub",
        "arabic": "الذهاب إلى النادي",
        "italian": "andare in un club",
        "serbian": "то го то а цлуб"
      }
    },
    {
      "german": "arbeiten",
      "translations": {
        "english": "to work",
        "ukrainian": "працювати",
        "polish": "pracować",
        "albanian": "të punosh",
        "arabic": "العمل",
        "italian": "lavorare",
        "serbian": "радити"
      }
    },
    {
      "german": "spazieren gehen",
      "translations": {
        "english": "to go for a walk",
        "ukrainian": "йти на прогулянку",
        "polish": "iść na spacer",
        "albanian": "të shëtisësh",
        "arabic": "الذهاب في نزهة",
        "italian": "andare a passeggio",
        "serbian": "ићи у шетњу"
      }
    },
    {
      "german": "etwas reparieren",
      "translations": {
        "english": "to repair something",
        "ukrainian": "щось ремонтувати",
        "polish": "coś naprawiać",
        "albanian": "të riparosh diçka",
        "arabic": "إصلاح شيء",
        "italian": "riparare qualcosa",
        "serbian": "то репаир сометхинг"
      }
    },
    {
      "german": "Zeitung lesen",
      "translations": {
        "english": "to read the newspaper",
        "ukrainian": "читати газету",
        "polish": "czytać gazetę",
        "albanian": "të lexosh gazetë",
        "arabic": "قراءة الجريدة",
        "italian": "leggere il giornale",
        "serbian": "то реад тхе невспапер"
      }
    },
    {
      "german": "auf dem Tisch",
      "translations": {
        "english": "on the table",
        "ukrainian": "на столі",
        "polish": "na stole",
        "albanian": "në tryezë",
        "arabic": "على الطاولة",
        "italian": "sul tavolo",
        "serbian": "он тхе табле"
      }
    },
    {
      "german": "neben dem Teller",
      "translations": {
        "english": "next to the plate",
        "ukrainian": "біля тарілки",
        "polish": "obok talerza",
        "albanian": "pranë pjatës",
        "arabic": "بجانب الطبق",
        "italian": "accanto al piatto",
        "serbian": "некст то тхе плате"
      }
    },
    {
      "german": "vor der Tür",
      "translations": {
        "english": "in front of the door",
        "ukrainian": "перед дверима",
        "polish": "przed drzwiami",
        "albanian": "para derës",
        "arabic": "أمام الباب",
        "italian": "davanti alla porta",
        "serbian": "ин фронт оф тхе доор"
      }
    },
    {
      "german": "unter dem Stuhl",
      "translations": {
        "english": "under the chair",
        "ukrainian": "під стільцем",
        "polish": "pod krzesłem",
        "albanian": "nën karrige",
        "arabic": "تحت الكرسي",
        "italian": "sotto la sedia",
        "serbian": "ундер тхе чаир"
      }
    },
    {
      "german": "am Tisch",
      "translations": {
        "english": "at the table",
        "ukrainian": "за столом",
        "polish": "przy stole",
        "albanian": "në tryezë",
        "arabic": "على الطاولة",
        "italian": "al tavolo",
        "serbian": "за столом"
      }
    },
    {
      "german": "vor der Apotheke",
      "translations": {
        "english": "in front of the pharmacy",
        "ukrainian": "перед аптекою",
        "polish": "przed apteką",
        "albanian": "para farmacisë",
        "arabic": "أمام الصيدلية",
        "italian": "davanti alla farmacia",
        "serbian": "ин фронт оф тхе пхармаци"
      }
    },
    {
      "german": "in der Apotheke",
      "translations": {
        "english": "in the pharmacy",
        "ukrainian": "в аптеці",
        "polish": "w aptece",
        "albanian": "në farmaci",
        "arabic": "في الصيدلية",
        "italian": "in farmacia",
        "serbian": "ин тхе пхармаци"
      }
    },
    {
      "german": "in dem Café",
      "translations": {
        "english": "in the café",
        "ukrainian": "в кафе",
        "polish": "w kawiarni",
        "albanian": "në kafe",
        "arabic": "في المقهى",
        "italian": "nel caffè",
        "serbian": "ин тхе цафé"
      }
    },
    {
      "german": "in den Geschäften",
      "translations": {
        "english": "in the shops",
        "ukrainian": "в магазинах",
        "polish": "w sklepach",
        "albanian": "në dyqane",
        "arabic": "في المتاجر",
        "italian": "nei negozi",
        "serbian": "ин тхе шоп"
      }
    },
    {
      "german": "auf den Boden",
      "translations": {
        "english": "on the floor",
        "ukrainian": "на підлогу",
        "polish": "na podłogę",
        "albanian": "në dysheme",
        "arabic": "على الأرض",
        "italian": "sul pavimento",
        "serbian": "он тхе флоор"
      }
    },
    {
      "german": "unter den Baum",
      "translations": {
        "english": "under the tree",
        "ukrainian": "під дерево",
        "polish": "pod drzewo",
        "albanian": "nën pemë",
        "arabic": "تحت الشجرة",
        "italian": "sotto l'albero",
        "serbian": "ундер тхе трее"
      }
    },
    {
      "german": "ins Café",
      "translations": {
        "english": "to the café",
        "ukrainian": "в кафе",
        "polish": "do kawiarni",
        "albanian": "në kafe",
        "arabic": "إلى المقهى",
        "italian": "al caffè",
        "serbian": "то тхе цафé"
      }
    },
    {
      "german": "neben den Stuhl",
      "translations": {
        "english": "next to the chair",
        "ukrainian": "біля стільця",
        "polish": "obok krzesła",
        "albanian": "pranë karriges",
        "arabic": "بجانب الكرسي",
        "italian": "accanto alla sedia",
        "serbian": "некст то тхе чаир"
      }
    },
    {
      "german": "auf den Tisch",
      "translations": {
        "english": "onto the table",
        "ukrainian": "на стіл",
        "polish": "na stół",
        "albanian": "në tryezë",
        "arabic": "على الطاولة",
        "italian": "sul tavolo",
        "serbian": "онто тхе табле"
      }
    },
    {
      "german": "unter die Treppe",
      "translations": {
        "english": "under the stairs",
        "ukrainian": "під сходи",
        "polish": "pod schody",
        "albanian": "nën shkallë",
        "arabic": "تحت الدرج",
        "italian": "sotto le scale",
        "serbian": "ундер тхе стаир"
      }
    },
    {
      "german": "in den Baum",
      "translations": {
        "english": "into the tree",
        "ukrainian": "на дерево",
        "polish": "na drzewo",
        "albanian": "në pemë",
        "arabic": "في الشجرة",
        "italian": "sull'albero",
        "serbian": "инто тхе трее"
      }
    },
    {
      "german": "in die Apotheke",
      "translations": {
        "english": "to the pharmacy",
        "ukrainian": "в аптеку",
        "polish": "do apteki",
        "albanian": "në farmaci",
        "arabic": "إلى الصيدلية",
        "italian": "in farmacia",
        "serbian": "то тхе пхармаци"
      }
    },
    {
      "german": "in die Geschäfte",
      "translations": {
        "english": "to the shops",
        "ukrainian": "в магазини",
        "polish": "do sklepów",
        "albanian": "në dyqane",
        "arabic": "إلى المتاجر",
        "italian": "nei negozi",
        "serbian": "то тхе шоп"
      }
    },
    {
      "german": "zwischen die Stühle",
      "translations": {
        "english": "between the chairs",
        "ukrainian": "між стільцями",
        "polish": "między krzesłami",
        "albanian": "midis karrigeve",
        "arabic": "بين الكراسي",
        "italian": "tra le sedie",
        "serbian": "бетвеен тхе чаир"
      }
    },
    {
      "german": "ja, nein und doch",
      "translations": {
        "english": "yes, no and on the contrary",
        "ukrainian": "так, ні та навпаки",
        "polish": "tak, nie i jednak",
        "albanian": "po, jo dhe megjithatë",
        "arabic": "نعم، لا، بل على العكس",
        "italian": "sì, no e invece sì",
        "serbian": "иес, но анд он тхе цонтрари"
      }
    },
    {
      "german": "Hast du Zeit?",
      "translations": {
        "english": "Do you have time?",
        "ukrainian": "У тебе є час?",
        "polish": "Masz czas?",
        "albanian": "A ke kohë?",
        "arabic": "هل لديك وقت؟",
        "italian": "Hai tempo?",
        "serbian": "Имате ли времена?"
      }
    },
    {
      "german": "Ja.",
      "translations": {
        "english": "Yes.",
        "ukrainian": "Так.",
        "polish": "Tak.",
        "albanian": "Po.",
        "arabic": "نعم.",
        "italian": "Sì.",
        "serbian": "Иес."
      }
    },
    {
      "german": "Nein.",
      "translations": {
        "english": "No.",
        "ukrainian": "Ні.",
        "polish": "Nie.",
        "albanian": "Jo.",
        "arabic": "لا.",
        "italian": "No.",
        "serbian": "Но."
      }
    },
    {
      "german": "Hast du keine Zeit?",
      "translations": {
        "english": "Don't you have time?",
        "ukrainian": "У тебе немає часу?",
        "polish": "Nie masz czasu?",
        "albanian": "Nuk ke kohë?",
        "arabic": "أليس لديك وقت؟",
        "italian": "Non hai tempo?",
        "serbian": "Зар немате времена?"
      }
    },
    {
      "german": "Doch.",
      "translations": {
        "english": "Yes, I do.",
        "ukrainian": "Так, маю.",
        "polish": "Mam.",
        "albanian": "Po, kam.",
        "arabic": "بلى، لدي.",
        "italian": "Sì, invece.",
        "serbian": "Иес, И до."
      }
    },
    {
      "german": "Kommst du nicht?",
      "translations": {
        "english": "Aren't you coming?",
        "ukrainian": "Ти не приходиш?",
        "polish": "Nie przychodzisz?",
        "albanian": "Nuk po vjen?",
        "arabic": "ألا تأتي؟",
        "italian": "Non vieni?",
        "serbian": "Зар не долазиш?"
      }
    },
    {
      "german": "Doch, ich komme.",
      "translations": {
        "english": "Yes, I'm coming.",
        "ukrainian": "Так, я прийду.",
        "polish": "Przyjdę.",
        "albanian": "Po, po vij.",
        "arabic": "بلى، سآتي.",
        "italian": "Sì, vengo.",
        "serbian": "Да, долазим."
      }
    },
    {
      "german": "einen Tisch reservieren",
      "translations": {
        "english": "to reserve a table",
        "ukrainian": "забронювати столик",
        "polish": "zarezerwować stolik",
        "albanian": "të rezervosh një tavolinë",
        "arabic": "حجز طاولة",
        "italian": "prenotare un tavolo",
        "serbian": "резервисати сто"
      }
    },
    {
      "german": "Essen bestellen",
      "translations": {
        "english": "to order food",
        "ukrainian": "замовити їжу",
        "polish": "zamówić jedzenie",
        "albanian": "të porositësh ushqim",
        "arabic": "طلب الطعام",
        "italian": "ordinare cibo",
        "serbian": "наручити храну"
      }
    },
    {
      "german": "Essen bezahlen",
      "translations": {
        "english": "to pay for food",
        "ukrainian": "заплатити за їжу",
        "polish": "zapłacić za jedzenie",
        "albanian": "të paguash për ushqim",
        "arabic": "دفع ثمن الطعام",
        "italian": "pagare per il cibo",
        "serbian": "то паи фор фоод"
      }
    },
    {
      "german": "Ich möchte einen Tisch reservieren.",
      "translations": {
        "english": "I would like to reserve a table.",
        "ukrainian": "Я хотів би забронювати столик.",
        "polish": "Chciałbym zarezerwować stolik.",
        "albanian": "Do të doja të rezervoj një tavolinë.",
        "arabic": "أود حجز طاولة.",
        "italian": "Vorrei prenotare un tavolo.",
        "serbian": "Желео бих да резервишем сто."
      }
    },
    {
      "german": "Möchten Sie bestellen?",
      "translations": {
        "english": "Would you like to order?",
        "ukrainian": "Ви хочете замовити?",
        "polish": "Czy chcieliby Państwo zamówić?",
        "albanian": "Dëshironi të porositni?",
        "arabic": "هل تريد أن تطلب؟",
        "italian": "Vorrebbe ordinare?",
        "serbian": "Да ли желите да наручите?"
      }
    },
    {
      "german": "Die Rechnung, bitte.",
      "translations": {
        "english": "The bill, please.",
        "ukrainian": "Рахунок, будь ласка.",
        "polish": "Rachunek, proszę.",
        "albanian": "Faturën, ju lutem.",
        "arabic": "الفاتورة، من فضلك.",
        "italian": "Il conto, per favore.",
        "serbian": "Рачун, молим."
      }
    },
    {
      "german": "Wann möchten Sie kommen?",
      "translations": {
        "english": "When would you like to come?",
        "ukrainian": "Коли ви хочете прийти?",
        "polish": "Kiedy chcieliby Państwo przyjść?",
        "albanian": "Kur do të donit të vini?",
        "arabic": "متى تريد أن تأتي؟",
        "italian": "Quando vorrebbe venire?",
        "serbian": "Када бисте желели да дођете?"
      }
    },
    {
      "german": "Wie viele Personen?",
      "translations": {
        "english": "How many people?",
        "ukrainian": "Скільки осіб?",
        "polish": "Ile osób?",
        "albanian": "Sa persona?",
        "arabic": "كم عدد الأشخاص؟",
        "italian": "Quante persone?",
        "serbian": "Хов мани пеопле?"
      }
    },
    {
      "german": "Ich nehme das Schnitzel.",
      "translations": {
        "english": "I'll have the schnitzel.",
        "ukrainian": "Я візьму шніцель.",
        "polish": "Wezmę sznycel.",
        "albanian": "Do të marr shnicelin.",
        "arabic": "سآخذ الشنيتزل.",
        "italian": "Prendo la cotoletta.",
        "serbian": "И'лл хаве тхе счнитзел."
      }
    },
    {
      "german": "Ich hätte gern ein Wasser.",
      "translations": {
        "english": "I would like a water.",
        "ukrainian": "Я б хотів воду.",
        "polish": "Chciałbym wodę.",
        "albanian": "Do të doja një ujë.",
        "arabic": "أود ماء.",
        "italian": "Vorrei un'acqua.",
        "serbian": "Желела бих воду."
      }
    },
    {
      "german": "Getrennt oder zusammen?",
      "translations": {
        "english": "Separate or together?",
        "ukrainian": "Окремо чи разом?",
        "polish": "Osobno czy razem?",
        "albanian": "Veçmas apo së bashku?",
        "arabic": "منفصل أم معاً؟",
        "italian": "Separato o insieme?",
        "serbian": "Сепарате ор тогетхер?"
      }
    },
    {
      "german": "Am Montag um 10 Uhr.",
      "translations": {
        "english": "On Monday at 10 o'clock.",
        "ukrainian": "В понеділок о 10 годині.",
        "polish": "W poniedziałek o godzinie 10.",
        "albanian": "Të hënën në orën 10.",
        "arabic": "يوم الاثنين الساعة 10.",
        "italian": "Lunedì alle 10.",
        "serbian": "У понедељак у 10 сати."
      }
    },
    {
      "german": "Was möchten Sie trinken?",
      "translations": {
        "english": "What would you like to drink?",
        "ukrainian": "Що ви хочете випити?",
        "polish": "Co chcieliby Państwo pić?",
        "albanian": "Çfarë do të donit të pini?",
        "arabic": "ماذا تريد أن تشرب؟",
        "italian": "Cosa vorrebbe da bere?",
        "serbian": "Шта бисте желели да пијете?"
      }
    },
    {
      "german": "Getrennt. Ich hatte das Hähnchen.",
      "translations": {
        "english": "Separately. I had the chicken.",
        "ukrainian": "Окремо. Я їв курку.",
        "polish": "Osobno. Miałem kurczaka.",
        "albanian": "Veçmas. Unë kisha pulën.",
        "arabic": "بشكل منفصل. لقد تناولت الدجاج.",
        "italian": "Separato. Io ho preso il pollo.",
        "serbian": "Сепаратели. И хад тхе чицкен."
      }
    },
    {
      "german": "Zusammen, bitte.",
      "translations": {
        "english": "Together, please.",
        "ukrainian": "Разом, будь ласка.",
        "polish": "Razem, proszę.",
        "albanian": "Së bashku, ju lutem.",
        "arabic": "معاً، من فضلك.",
        "italian": "Insieme, per favore.",
        "serbian": "Заједно, молим."
      }
    },
    {
      "german": "Das macht dann 15 Euro.",
      "translations": {
        "english": "That will be 15 euros then.",
        "ukrainian": "Тоді це буде 15 євро.",
        "polish": "To będzie 15 euro.",
        "albanian": "Atëherë bëjnë 15 euro.",
        "arabic": "إذًا المجموع 15 يورو.",
        "italian": "Allora fanno 15 euro.",
        "serbian": "Тхат вилл бе 15 еурос тхен."
      }
    },
    {
      "german": "Einen Kaffee, bitte.",
      "translations": {
        "english": "A coffee, please.",
        "ukrainian": "Каву, будь ласка.",
        "polish": "Poproszę kawę.",
        "albanian": "Një kafe, ju lutem.",
        "arabic": "قهوة، من فضلك.",
        "italian": "Un caffè, per favore.",
        "serbian": "Кафу, молим."
      }
    },
    {
      "german": "Danke, stimmt so.",
      "translations": {
        "english": "Thanks, keep the change.",
        "ukrainian": "Дякую, решту не треба.",
        "polish": "Dziękuję, reszta się zgadza.",
        "albanian": "Faleminderit, mbaje.",
        "arabic": "شكراً، احتفظ بالباقي.",
        "italian": "Grazie, va bene così.",
        "serbian": "Тханкс, кееп тхе чанге."
      }
    },
    {
      "german": "nach Hause gehen",
      "translations": {
        "english": "to go home",
        "ukrainian": "йти додому",
        "polish": "iść do domu",
        "albanian": "të shkosh në shtëpi",
        "arabic": "الذهاب إلى المنزل",
        "italian": "andare a casa",
        "serbian": "то го хоме"
      }
    },
    {
      "german": "ins Restaurant gehen",
      "translations": {
        "english": "to go to the restaurant",
        "ukrainian": "йти в ресторан",
        "polish": "iść do restauracji",
        "albanian": "të shkosh në restorant",
        "arabic": "الذهاب إلى المطعم",
        "italian": "andare al ristorante",
        "serbian": "то го то тхе рестаурант"
      }
    },
    {
      "german": "an einen See gehen",
      "translations": {
        "english": "to go to a lake",
        "ukrainian": "йти до озера",
        "polish": "iść nad jezioro",
        "albanian": "të shkosh në një liqen",
        "arabic": "الذهاب إلى بحيرة",
        "italian": "andare a un lago",
        "serbian": "то го то а лаке"
      }
    },
    {
      "german": "ans Meer gehen",
      "translations": {
        "english": "to go to the sea",
        "ukrainian": "йти до моря",
        "polish": "iść nad morze",
        "albanian": "të shkosh në det",
        "arabic": "الذهاب إلى البحر",
        "italian": "andare al mare",
        "serbian": "то го то тхе сеа"
      }
    },
    {
      "german": "ins Stadtzentrum gehen",
      "translations": {
        "english": "to go to the city center",
        "ukrainian": "йти в центр міста",
        "polish": "iść do centrum miasta",
        "albanian": "të shkosh në qendër të qytetit",
        "arabic": "الذهاب إلى مركز المدينة",
        "italian": "andare in centro",
        "serbian": "то го то тхе цити центер"
      }
    },
    {
      "german": "in die Berge gehen",
      "translations": {
        "english": "to go to the mountains",
        "ukrainian": "йти в гори",
        "polish": "iść w góry",
        "albanian": "të shkosh në male",
        "arabic": "الذهاب إلى الجبال",
        "italian": "andare in montagna",
        "serbian": "то го то тхе моунтаин"
      }
    },
    {
      "german": "aufs Land fahren",
      "translations": {
        "english": "to go to the countryside",
        "ukrainian": "їхати на село",
        "polish": "jechać na wieś",
        "albanian": "të shkosh në fshat",
        "arabic": "الذهاب إلى الريف",
        "italian": "andare in campagna",
        "serbian": "то го то тхе цоунтрисиде"
      }
    },
    {
      "german": "zu Hause bleiben",
      "translations": {
        "english": "to stay at home",
        "ukrainian": "залишатися вдома",
        "polish": "zostać w domu",
        "albanian": "të qëndrosh në shtëpi",
        "arabic": "البقاء في المنزل",
        "italian": "restare a casa",
        "serbian": "то стаи ат хоме"
      }
    },
    {
      "german": "im Restaurant",
      "translations": {
        "english": "in the restaurant",
        "ukrainian": "в ресторані",
        "polish": "w restauracji",
        "albanian": "në restorant",
        "arabic": "في المطعم",
        "italian": "al ristorante",
        "serbian": "ин тхе рестаурант"
      }
    },
    {
      "german": "am Meer",
      "translations": {
        "english": "at the sea",
        "ukrainian": "на морі",
        "polish": "nad morzem",
        "albanian": "në det",
        "arabic": "على البحر",
        "italian": "al mare",
        "serbian": "на мору"
      }
    },
    {
      "german": "im Stadtzentrum",
      "translations": {
        "english": "in the city center",
        "ukrainian": "в центрі міста",
        "polish": "w centrum miasta",
        "albanian": "në qendër të qytetit",
        "arabic": "في مركز المدينة",
        "italian": "in centro",
        "serbian": "у центру града"
      }
    },
    {
      "german": "in den Bergen",
      "translations": {
        "english": "in the mountains",
        "ukrainian": "в горах",
        "polish": "w górach",
        "albanian": "në male",
        "arabic": "في الجبال",
        "italian": "in montagna",
        "serbian": "у планинама"
      }
    },
    {
      "german": "auf einer Party",
      "translations": {
        "english": "at a party",
        "ukrainian": "на вечірці",
        "polish": "na imprezie",
        "albanian": "në një festë",
        "arabic": "في حفلة",
        "italian": "a una festa",
        "serbian": "на журци"
      }
    },
    {
      "german": "auf dem Land",
      "translations": {
        "english": "in the countryside",
        "ukrainian": "на селі",
        "polish": "na wsi",
        "albanian": "në fshat",
        "arabic": "في الريف",
        "italian": "in campagna",
        "serbian": "на селу"
      }
    },
    {
      "german": "Sonntag ist Familientag.",
      "translations": {
        "english": "Sunday is family day.",
        "ukrainian": "Неділя - сімейний день.",
        "polish": "Niedziela to dzień rodzinny.",
        "albanian": "E diela është ditë familjare.",
        "arabic": "الأحد هو يوم العائلة.",
        "italian": "La domenica è giorno di famiglia.",
        "serbian": "Недеља је породични дан."
      }
    },
    {
      "german": "Sonntags arbeite ich oft.",
      "translations": {
        "english": "I often work on Sundays.",
        "ukrainian": "По неділях я часто працюю.",
        "polish": "W niedziele często pracuję.",
        "albanian": "Të dielave punoj shpesh.",
        "arabic": "أعمل غالباً أيام الأحد.",
        "italian": "La domenica lavoro spesso.",
        "serbian": "Недељом често радим."
      }
    },
    {
      "german": "Ich mag den Sonntag nicht.",
      "translations": {
        "english": "I don't like Sunday.",
        "ukrainian": "Я не люблю неділю.",
        "polish": "Nie lubię niedziel.",
        "albanian": "Nuk më pëlqen e diela.",
        "arabic": "لا أحب الأحد.",
        "italian": "Non mi piace la domenica.",
        "serbian": "Не волим недељу."
      }
    }
  ],

  4: [
    {
      "german": "Wenn ein Schüler eine Ausbildung macht, geht er in die Berufsschule.",
      "translations": {
        "english": "When a student does an apprenticeship, he goes to vocational school.",
        "ukrainian": "Коли учень проходить навчання, він ходить до професійної школи.",
        "polish": "Kiedy uczeń odbywa praktykę, chodzi do szkoły zawodowej.",
        "albanian": "Kur një nxënës bën praktikë, ai shkon në shkollën profesionale.",
        "arabic": "عندما يقوم الطالب بالتدريب المهني، يذهب إلى المدرسة المهنية.",
        "italian": "Quando uno studente fa un apprendistato, va alla scuola professionale.",
        "serbian": "Када ученик учи занат, иде у стручну школу."
      }
    },
    {
      "german": "Wenn Filip eine Zwei in Mathe hat, dann kann er an der Universität studieren.",
      "translations": {
        "english": "If Filip has a two in math, then he can study at the university.",
        "ukrainian": "Якщо Філіп має двійку з математики, то він може навчатися в університеті.",
        "polish": "Jeśli Filip ma dwójkę z matematyki, może studiować na uniwersytecie.",
        "albanian": "Nëse Filip ka një dy në matematikë, atëherë ai mund të studiojë në universitet.",
        "arabic": "إذا حصل فيليب على اثنين في الرياضيات، يمكنه الدراسة في الجامعة.",
        "italian": "Se Filip ha un due in matematica, allora può studiare all'università.",
        "serbian": "Ако Филип има двојку из математике, онда може студирати на универзитету."
      }
    },
    {
      "german": "Wenn du die Stelle haben willst, kannst du bei der Firma anrufen.",
      "translations": {
        "english": "If you want the job, you can call the company.",
        "ukrainian": "Якщо ти хочеш отримати роботу, можеш зателефонувати в компанію.",
        "polish": "Jeśli chcesz mieć tę pracę, możesz zadzwonić do firmy.",
        "albanian": "Nëse dëshiron vendin e punës, mund të telefonosh në kompani.",
        "arabic": "إذا كنت تريد الوظيفة، يمكنك الاتصال بالشركة.",
        "italian": "Se vuoi il lavoro, puoi chiamare l'azienda.",
        "serbian": "Ако желите посао, можете позвати фирму."
      }
    },
    {
      "german": "Wenn man etwas nicht versteht, kann man den Lehrer fragen.",
      "translations": {
        "english": "If you don't understand something, you can ask the teacher.",
        "ukrainian": "Якщо чогось не розумієш, можеш запитати вчителя.",
        "polish": "Jeśli czegoś nie rozumiesz, możesz zapytać nauczyciela.",
        "albanian": "Nëse nuk e kupton diçka, mund të pyesësh mësuesin.",
        "arabic": "إذا لم تفهم شيئاً، يمكنك أن تسأل المعلم.",
        "italian": "Se non capisci qualcosa, puoi chiedere all'insegnante.",
        "serbian": "Ако нешто не разумете, можете питати наставника."
      }
    },
    {
      "german": "Wenn Kinder Probleme in der Schule haben, können sie Nachhilfe bekommen.",
      "translations": {
        "english": "If children have problems at school, they can get tutoring.",
        "ukrainian": "Якщо у дітей є проблеми в школі, вони можуть отримати додаткові заняття.",
        "polish": "Jeśli dzieci mają problemy w szkole, mogą dostać korepetycje.",
        "albanian": "Nëse fëmijët kanë probleme në shkollë, mund të marrin mësim shtesë.",
        "arabic": "إذا كان لدى الأطفال مشاكل في المدرسة، يمكنهم الحصول على دروس خصوصية.",
        "italian": "Se i bambini hanno problemi a scuola, possono ricevere ripetizioni.",
        "serbian": "Иф чилдрен хаве проблемс ат счоол, тхеи цан гет туторинг."
      }
    },
    {
      "german": "Die Schüler haben Unterricht.",
      "translations": {
        "english": "The students have class.",
        "ukrainian": "Учні мають урок.",
        "polish": "Uczniowie mają zajęcia.",
        "albanian": "Nxënësit kanë mësim.",
        "arabic": "الطلاب لديهم حصة دراسية.",
        "italian": "Gli studenti hanno lezione.",
        "serbian": "Тхе студентс хаве цласс."
      }
    },
    {
      "german": "Der Unterricht hat morgens um 8 Uhr angefangen.",
      "translations": {
        "english": "Class started at 8 a.m. in the morning.",
        "ukrainian": "Заняття почалися о 8 годині ранку.",
        "polish": "Lekcje zaczęły się rano o 8.",
        "albanian": "Mësimi filloi në mëngjes në orën 8.",
        "arabic": "بدأت الحصة صباحاً في الساعة 8.",
        "italian": "La lezione è iniziata alle 8 del mattino.",
        "serbian": "Цласс стартед ат 8 а.м. ин тхе морнинг."
      }
    },
    {
      "german": "Der Unterricht hat nachmittags aufgehört.",
      "translations": {
        "english": "Class ended in the afternoon.",
        "ukrainian": "Заняття закінчилися після обіду.",
        "polish": "Lekcje skończyły się po południu.",
        "albanian": "Mësimi mbaroi pasdite.",
        "arabic": "انتهت الحصة بعد الظهر.",
        "italian": "La lezione è finita nel pomeriggio.",
        "serbian": "Цласс ендед ин тхе афтерноон."
      }
    },
    {
      "german": "Am Nachmittag hat Herr Vogel immer Fußball gespielt.",
      "translations": {
        "english": "Mr. Vogel always played football in the afternoon.",
        "ukrainian": "Пан Фогель завжди грав у футбол після обіду.",
        "polish": "Pan Vogel zawsze grał w piłkę nożną po południu.",
        "albanian": "Zoti Vogel luante gjithmonë futboll pasdite.",
        "arabic": "كان السيد فوغل يلعب كرة القدم دائماً بعد الظهر.",
        "italian": "Il signor Vogel giocava sempre a calcio nel pomeriggio.",
        "serbian": "Мр. Вогел алваис плаиед фоотбалл ин тхе афтерноон."
      }
    },
    {
      "german": "Meine Tochter besucht die Gesamtschule.",
      "translations": {
        "english": "My daughter attends comprehensive school.",
        "ukrainian": "Моя дочка відвідує загальноосвітню школу.",
        "polish": "Moja córka chodzi do szkoły ogólnokształcącej.",
        "albanian": "Vajza ime frekuenton shkollën e përgjithshme.",
        "arabic": "ابنتي تذهب إلى المدرسة الشاملة.",
        "italian": "Mia figlia frequenta la scuola comprensiva.",
        "serbian": "Ми даугхтер аттендс цомпрехенсиве счоол."
      }
    },
    {
      "german": "Paula ist in die Kita gegangen.",
      "translations": {
        "english": "Paula went to daycare.",
        "ukrainian": "Паула ходила до дитячого садка.",
        "polish": "Paula chodziła do przedszkola.",
        "albanian": "Paula shkonte në çerdhe.",
        "arabic": "ذهبت باولا إلى الحضانة.",
        "italian": "Paula andava all'asilo.",
        "serbian": "Паула вент то даицаре."
      }
    },
    {
      "german": "Nach der Grundschule konnte ich in unserem Dorf auf die Realschule gehen.",
      "translations": {
        "english": "After primary school I could go to secondary school in our village.",
        "ukrainian": "Після початкової школи я міг ходити до середньої школи в нашому селі.",
        "polish": "Po szkole podstawowej mogłem chodzić do szkoły średniej w naszej wiosce.",
        "albanian": "Pas shkollës fillore mund të shkoj në shkollën e mesme në fshatin tonë.",
        "arabic": "بعد المدرسة الابتدائية استطعت الذهاب إلى المدرسة الإعدادية في قريتنا.",
        "italian": "Dopo la scuola elementare potevo andare alla scuola secondaria nel nostro villaggio.",
        "serbian": "Афтер примари счоол И цоулд го то сецондари счоол ин оур виллаге."
      }
    },
    {
      "german": "Ich möchte nicht studieren, ich mache eine Ausbildung.",
      "translations": {
        "english": "I don't want to study, I'm doing an apprenticeship.",
        "ukrainian": "Я не хочу навчатися в університеті, я проходжу професійне навчання.",
        "polish": "Nie chcę studiować, robię praktykę zawodową.",
        "albanian": "Nuk dua të studioj, po bëj praktikë.",
        "arabic": "لا أريد الدراسة، أنا أقوم بالتدريب المهني.",
        "italian": "Non voglio studiare, sto facendo un apprendistato.",
        "serbian": "Не желим да студирам, учим занат."
      }
    },
    {
      "german": "Am Ende vom Schuljahr bekommen alle Schüler ein Zeugnis.",
      "translations": {
        "english": "At the end of the school year all students get a report card.",
        "ukrainian": "Наприкінці навчального року всі учні отримують табель.",
        "polish": "Pod koniec roku szkolnego wszyscy uczniowie otrzymują świadectwo.",
        "albanian": "Në fund të vitit shkollor të gjithë nxënësit marrin një dëftesë.",
        "arabic": "في نهاية العام الدراسي يحصل جميع الطلاب على شهادة.",
        "italian": "Alla fine dell'anno scolastico tutti gli studenti ricevono una pagella.",
        "serbian": "На крају школске године сви ученици добијају сведочанство."
      }
    },
    {
      "german": "Im Zeugnis steht für jedes Fach eine Note.",
      "translations": {
        "english": "The report card shows a grade for each subject.",
        "ukrainian": "У табелі вказана оцінка з кожного предмета.",
        "polish": "W świadectwie jest ocena z każdego przedmiotu.",
        "albanian": "Në dëftesë është një notë për çdo lëndë.",
        "arabic": "تظهر الشهادة علامة لكل مادة.",
        "italian": "La pagella mostra un voto per ogni materia.",
        "serbian": "У сведочанству стоји оцена за сваки предмет."
      }
    },
    {
      "german": "Der Abschluss vom Gymnasium heißt Abitur.",
      "translations": {
        "english": "The graduation from gymnasium is called Abitur.",
        "ukrainian": "Випускний іспит у гімназії називається Abitur.",
        "polish": "Ukończenie gimnazjum nazywa się Abitur.",
        "albanian": "Diploma e gjimnazit quhet Abitur.",
        "arabic": "تسمى شهادة التخرج من الثانوية Abitur.",
        "italian": "Il diploma del liceo si chiama Abitur.",
        "serbian": "Тхе градуатион фром гимнасиум ис цаллед Абитур."
      }
    },
    {
      "german": "Wenn ein Schüler Probleme in der Schule hat, macht er oft extra Unterricht.",
      "translations": {
        "english": "If a student has problems at school, he often does extra lessons.",
        "ukrainian": "Якщо учень має проблеми в школі, він часто бере додаткові заняття.",
        "polish": "Jeśli uczeń ma problemy w szkole, często bierze dodatkowe lekcje.",
        "albanian": "Nëse një nxënës ka probleme në shkollë, ai shpesh bën mësim shtesë.",
        "arabic": "إذا كان لدى الطالب مشاكل في المدرسة، فإنه غالباً ما يأخذ دروساً إضافية.",
        "italian": "Se uno studente ha problemi a scuola, spesso fa lezioni extra.",
        "serbian": "Иф а студент хас проблемс ат счоол, хе офтен доес екстра лессонс."
      }
    },
    {
      "german": "Die Lehrer waren streng.",
      "translations": {
        "english": "The teachers were strict.",
        "ukrainian": "Вчителі були суворими.",
        "polish": "Nauczyciele byli surowi.",
        "albanian": "Mësuesit ishin të rreptë.",
        "arabic": "كان المعلمون صارمين.",
        "italian": "Gli insegnanti erano severi.",
        "serbian": "Тхе теачерс вере стрицт."
      }
    },
    {
      "german": "Wir durften früher nicht im Klassenzimmer spielen.",
      "translations": {
        "english": "We were not allowed to play in the classroom before.",
        "ukrainian": "Раніше нам не можна було гратися в класі.",
        "polish": "Wcześniej nie wolno nam było bawić się w klasie.",
        "albanian": "Më parë nuk na lejohej të luanim në klasë.",
        "arabic": "لم يُسمح لنا باللعب في الفصل الدراسي سابقاً.",
        "italian": "Prima non potevamo giocare in classe.",
        "serbian": "Раније нисмо смели да се играмо у учионици."
      }
    },
    {
      "german": "Früher wollten auch nicht so viele Schüler das Abitur machen.",
      "translations": {
        "english": "In the past, not so many students wanted to do the Abitur either.",
        "ukrainian": "Раніше також не так багато учнів хотіли здавати Abitur.",
        "polish": "Wcześniej też niewielu uczniów chciało zdawać Abitur.",
        "albanian": "Më parë edhe nuk donin shumë nxënës të bënin Abitur.",
        "arabic": "في الماضي، لم يرغب العديد من الطلاب أيضاً في الحصول على شهادة Abitur.",
        "italian": "In passato, nemmeno così tanti studenti volevano fare l'Abitur.",
        "serbian": "Ин тхе паст, нот со мани студентс вантед то до тхе Абитур еитхер."
      }
    },
    {
      "german": "Was machen Sie, wenn Sie müde sind?",
      "translations": {
        "english": "What do you do when you're tired?",
        "ukrainian": "Що ви робите, коли втомилися?",
        "polish": "Co robisz, kiedy jesteś zmęczony?",
        "albanian": "Çfarë bën kur je i lodhur?",
        "arabic": "ماذا تفعل عندما تكون متعباً؟",
        "italian": "Cosa fai quando sei stanco?",
        "serbian": "Вхат до иоу до вхен иоу'ре тиред?"
      }
    },
    {
      "german": "Wenn ich müde bin, trinke ich einen Kaffee.",
      "translations": {
        "english": "When I'm tired, I drink a coffee.",
        "ukrainian": "Коли я втомлений, я п'ю каву.",
        "polish": "Kiedy jestem zmęczony, piję kawę.",
        "albanian": "Kur jam i lodhur, pi një kafe.",
        "arabic": "عندما أكون متعباً، أشرب قهوة.",
        "italian": "Quando sono stanco, bevo un caffè.",
        "serbian": "Вхен И'м тиред, И дринк а цоффее."
      }
    },
    {
      "german": "Wenn ich Fieber habe, gehe ich zum Arzt.",
      "translations": {
        "english": "When I have a fever, I go to the doctor.",
        "ukrainian": "Коли у мене температура, я йду до лікаря.",
        "polish": "Kiedy mam gorączkę, idę do lekarza.",
        "albanian": "Kur kam ethe, shkoj te mjeku.",
        "arabic": "عندما أعاني من الحمى، أذهب إلى الطبيب.",
        "italian": "Quando ho la febbre, vado dal medico.",
        "serbian": "Вхен И хаве а февер, И го то тхе доцтор."
      }
    },
    {
      "german": "Wenn das Wetter schön ist, gehe ich spazieren.",
      "translations": {
        "english": "When the weather is nice, I go for a walk.",
        "ukrainian": "Коли гарна погода, я йду на прогулянку.",
        "polish": "Kiedy jest ładna pogoda, idę na spacer.",
        "albanian": "Kur është mot i bukur, shkoj për një shëtitje.",
        "arabic": "عندما يكون الطقس جميلاً، أذهب للتنزه.",
        "italian": "Quando il tempo è bello, vado a fare una passeggiata.",
        "serbian": "Вхен тхе веатхер ис нице, И го фор а валк."
      }
    },
    {
      "german": "In Deutschland gibt es die Schulpflicht.",
      "translations": {
        "english": "In Germany there is compulsory schooling.",
        "ukrainian": "У Німеччині є обов'язкова освіта.",
        "polish": "W Niemczech obowiązuje obowiązek szkolny.",
        "albanian": "Në Gjermani ekziston detyrimi shkollor.",
        "arabic": "في ألمانيا هناك تعليم إلزامي.",
        "italian": "In Germania c'è l'obbligo scolastico.",
        "serbian": "Ин Германи тхере ис цомпулсори счоолинг."
      }
    },
    {
      "german": "Die Schulpflicht dauert mindestens neun Schuljahre.",
      "translations": {
        "english": "Compulsory education lasts at least nine school years.",
        "ukrainian": "Обов'язкова освіта триває щонайменше дев'ять років.",
        "polish": "Obowiązek szkolny trwa co najmniej dziewięć lat.",
        "albanian": "Detyrimi shkollor zgjat të paktën nëntë vjet shkollore.",
        "arabic": "التعليم الإلزامي يستمر لمدة تسع سنوات دراسية على الأقل.",
        "italian": "L'obbligo scolastico dura almeno nove anni scolastici.",
        "serbian": "Обавезно образовање траје најмање девет школских година."
      }
    }
  ],

  5: [
    {
      "german": "In meinem Heimatland arbeiten nur wenige Männer als Erzieher.",
      "translations": {
        "english": "In my home country only few men work as educators.",
        "ukrainian": "У моїй країні лише небагато чоловіків працюють вихователями.",
        "polish": "W moim kraju tylko niewielu mężczyzn pracuje jako wychowawcy.",
        "albanian": "Në vendin tim vetëm pak burra punojnë si edukatorë.",
        "arabic": "في بلدي، يعمل عدد قليل فقط من الرجال كمعلمين.",
        "italian": "Nel mio paese solo pochi uomini lavorano come educatori.",
        "serbian": "У мојој земљи само мало мушкараца ради као васпитач."
      }
    },
    {
      "german": "Bei uns sind die meisten Polizisten Männer.",
      "translations": {
        "english": "With us most police officers are men.",
        "ukrainian": "У нас більшість поліцейських - чоловіки.",
        "polish": "U nas większość policjantów to mężczyźni.",
        "albanian": "Tek ne shumica e policëve janë meshkuj.",
        "arabic": "عندنا معظم رجال الشرطة رجال.",
        "italian": "Da noi la maggior parte dei poliziotti sono uomini.",
        "serbian": "Витх ус мост полице оффицерс аре мен."
      }
    },
    {
      "german": "Der Beruf Arzt gefällt mir, weil man viel Geld verdienen kann.",
      "translations": {
        "english": "I like the profession of doctor because you can earn a lot of money.",
        "ukrainian": "Мені подобається професія лікаря, бо можна заробляти багато грошей.",
        "polish": "Podoba mi się zawód lekarza, bo można zarobić dużo pieniędzy.",
        "albanian": "Më pëlqen profesioni i mjekut sepse mund të fitosh shumë para.",
        "arabic": "تعجبني مهنة الطبيب لأنه يمكن كسب الكثير من المال.",
        "italian": "Mi piace la professione di medico perché si possono guadagnare molti soldi.",
        "serbian": "И лике тхе профессион оф доцтор бецаусе иоу цан еарн а лот оф монеи."
      }
    },
    {
      "german": "Mein Sohn möchte Pilot werden.",
      "translations": {
        "english": "My son wants to become a pilot.",
        "ukrainian": "Мій син хоче стати пілотом.",
        "polish": "Mój syn chce zostać pilotem.",
        "albanian": "Djali im dëshiron të bëhet pilot.",
        "arabic": "يريد ابني أن يصبح طياراً.",
        "italian": "Mio figlio vuole diventare pilota.",
        "serbian": "Мој син жели да постане пилот."
      }
    },
    {
      "german": "Die Ausbildung ist sehr teuer.",
      "translations": {
        "english": "The training is very expensive.",
        "ukrainian": "Навчання дуже дороге.",
        "polish": "Szkolenie jest bardzo drogie.",
        "albanian": "Trajnimi është shumë i shtrenjtë.",
        "arabic": "التدريب غالٍ جداً.",
        "italian": "La formazione è molto costosa.",
        "serbian": "Обука је веома скупа."
      }
    },
    {
      "german": "Können Sie mir sagen, wann der Chef kommt?",
      "translations": {
        "english": "Can you tell me when the boss is coming?",
        "ukrainian": "Чи можете ви сказати мені, коли прийде шеф?",
        "polish": "Czy możesz mi powiedzieć, kiedy przyjdzie szef?",
        "albanian": "A mund të më thuash kur vjen shefi?",
        "arabic": "هل يمكنك أن تخبرني متى سيأتي المدير؟",
        "italian": "Può dirmi quando arriva il capo?",
        "serbian": "Можете ли ми рећи када долази шеф?"
      }
    },
    {
      "german": "Wissen Sie, warum der Chef angerufen hat?",
      "translations": {
        "english": "Do you know why the boss called?",
        "ukrainian": "Ви знаєте, чому зателефонував шеф?",
        "polish": "Czy wiesz, dlaczego szef zadzwonił?",
        "albanian": "A e di pse telefonoi shefi?",
        "arabic": "هل تعرف لماذا اتصل المدير؟",
        "italian": "Sa perché ha chiamato il capo?",
        "serbian": "Да ли знате зашто је шеф звао?"
      }
    },
    {
      "german": "Weißt du, was es heute zum Mittagessen gibt?",
      "translations": {
        "english": "Do you know what there is for lunch today?",
        "ukrainian": "Ти знаєш, що сьогодні на обід?",
        "polish": "Czy wiesz, co jest dzisiaj na obiad?",
        "albanian": "A e di se çfarë ka për drekë sot?",
        "arabic": "هل تعرف ماذا يوجد للغداء اليوم؟",
        "italian": "Sai cosa c'è per pranzo oggi?",
        "serbian": "До иоу кнов вхат тхере ис фор лунч тодаи?"
      }
    },
    {
      "german": "Die neue Kollegin braucht einen Schlüssel.",
      "translations": {
        "english": "The new colleague needs a key.",
        "ukrainian": "Новій колезі потрібен ключ.",
        "polish": "Nowa koleżanka potrzebuje klucza.",
        "albanian": "Kolegja e re ka nevojë për një çelës.",
        "arabic": "الزميلة الجديدة تحتاج إلى مفتاح.",
        "italian": "La nuova collega ha bisogno di una chiave.",
        "serbian": "Новој колегиници треба кључ."
      }
    },
    {
      "german": "Die Mitarbeiter sollen am Freitagvormittag in die Kantine kommen.",
      "translations": {
        "english": "The employees should come to the cafeteria on Friday morning.",
        "ukrainian": "Співробітники повинні прийти до їдальні в п'ятницю вранці.",
        "polish": "Pracownicy powinni przyjść do stołówki w piątek rano.",
        "albanian": "Punonjësit duhet të vijnë në mensë të premten në mëngjes.",
        "arabic": "يجب على الموظفين أن يأتوا إلى الكافتيريا صباح يوم الجمعة.",
        "italian": "I dipendenti dovrebbero venire in mensa venerdì mattina.",
        "serbian": "Тхе емплоиеес шоулд цоме то тхе цафетериа он Фридаи морнинг."
      }
    },
    {
      "german": "Ein Arbeitskollege muss einen Termin verschieben.",
      "translations": {
        "english": "A work colleague must postpone an appointment.",
        "ukrainian": "Колега по роботі має перенести зустріч.",
        "polish": "Kolega z pracy musi przełożyć termin.",
        "albanian": "Një koleg pune duhet të shtyjë një takim.",
        "arabic": "يجب على زميل العمل تأجيل موعد.",
        "italian": "Un collega di lavoro deve rimandare un appuntamento.",
        "serbian": "А ворк цоллеагуе муст постпоне ан аппоинтмент."
      }
    },
    {
      "german": "Ich soll ihm helfen.",
      "translations": {
        "english": "I should help him.",
        "ukrainian": "Я маю йому допомогти.",
        "polish": "Mam mu pomóc.",
        "albanian": "Duhet ta ndihmoj atë.",
        "arabic": "يجب أن أساعده.",
        "italian": "Dovrei aiutarlo.",
        "serbian": "Треба да му помогнем."
      }
    },
    {
      "german": "Er gefällt ihnen sehr gut.",
      "translations": {
        "english": "They like him very much.",
        "ukrainian": "Він їм дуже подобається.",
        "polish": "Bardzo im się podoba.",
        "albanian": "Atyre u pëlqen shumë.",
        "arabic": "يعجبهم كثيراً.",
        "italian": "A loro piace molto.",
        "serbian": "Тхеи лике хим вери муч."
      }
    },
    {
      "german": "Könnten Sie ihr bitte einen Schlüssel geben?",
      "translations": {
        "english": "Could you please give her a key?",
        "ukrainian": "Чи могли б ви, будь ласка, дати їй ключ?",
        "polish": "Czy mógłbyś dać jej klucz?",
        "albanian": "A mund t'i jepni një çelës, ju lutem?",
        "arabic": "هل يمكنك أن تعطيها مفتاحاً من فضلك؟",
        "italian": "Potrebbe darle una chiave per favore?",
        "serbian": "Можете ли јој молим вас дати кључ?"
      }
    },
    {
      "german": "Könntest du mir bitte helfen?",
      "translations": {
        "english": "Could you please help me?",
        "ukrainian": "Чи міг би ти, будь ласка, мені допомогти?",
        "polish": "Czy mógłbyś mi pomóc?",
        "albanian": "A mund të më ndihmosh, të lutem?",
        "arabic": "هل يمكنك مساعدتي من فضلك؟",
        "italian": "Potresti aiutarmi per favore?",
        "serbian": "Можете ли ми молим вас помоћи?"
      }
    },
    {
      "german": "Entschuldigung, ist hier noch frei?",
      "translations": {
        "english": "Excuse me, is this seat still free?",
        "ukrainian": "Вибачте, тут ще вільно?",
        "polish": "Przepraszam, czy to miejsce jest wolne?",
        "albanian": "Më fal, a është ende e lirë këtu?",
        "arabic": "عذراً، هل هذا المقعد لا يزال فارغاً؟",
        "italian": "Scusi, questo posto è ancora libero?",
        "serbian": "Ексцусе ме, ис тхис сеат стилл фрее?"
      }
    },
    {
      "german": "Ja, ich arbeite seit drei Tagen hier.",
      "translations": {
        "english": "Yes, I've been working here for three days.",
        "ukrainian": "Так, я працюю тут вже три дні.",
        "polish": "Tak, pracuję tu od trzech dni.",
        "albanian": "Po, unë punoj këtu prej tre ditësh.",
        "arabic": "نعم، أعمل هنا منذ ثلاثة أيام.",
        "italian": "Sì, lavoro qui da tre giorni.",
        "serbian": "Иес, И'ве беен воркинг хере фор тхрее даис."
      }
    },
    {
      "german": "Die Arbeit ist interessant.",
      "translations": {
        "english": "The work is interesting.",
        "ukrainian": "Робота цікава.",
        "polish": "Praca jest interesująca.",
        "albanian": "Puna është interesante.",
        "arabic": "العمل مثير للاهتمام.",
        "italian": "Il lavoro è interessante.",
        "serbian": "Посао је занимљив."
      }
    },
    {
      "german": "In welcher Abteilung arbeiten Sie?",
      "translations": {
        "english": "In which department do you work?",
        "ukrainian": "У якому відділі ви працюєте?",
        "polish": "W jakim dziale pracujesz?",
        "albanian": "Në cilën departament punoni?",
        "arabic": "في أي قسم تعمل؟",
        "italian": "In quale reparto lavori?",
        "serbian": "У ком одељењу радите?"
      }
    },
    {
      "german": "Ich mache technischen Service.",
      "translations": {
        "english": "I do technical service.",
        "ukrainian": "Я займаюся технічним обслуговуванням.",
        "polish": "Zajmuję się serwisem technicznym.",
        "albanian": "Bëj shërbim teknik.",
        "arabic": "أقوم بالخدمة الفنية.",
        "italian": "Faccio assistenza tecnica.",
        "serbian": "Радим у техничкој служби."
      }
    },
    {
      "german": "Nehmen Sie Platz, bitte.",
      "translations": {
        "english": "Please take a seat.",
        "ukrainian": "Сідайте, будь ласка.",
        "polish": "Proszę usiąść.",
        "albanian": "Ju lutem uluni.",
        "arabic": "تفضل بالجلوس من فضلك.",
        "italian": "Si accomodi, prego.",
        "serbian": "Плеасе таке а сеат."
      }
    },
    {
      "german": "Zuerst müssen Sie 50 Cent einwerfen.",
      "translations": {
        "english": "First you must insert 50 cents.",
        "ukrainian": "Спочатку ви маєте вкинути 50 центів.",
        "polish": "Najpierw musisz wrzucić 50 centów.",
        "albanian": "Së pari duhet të fusni 50 cent.",
        "arabic": "أولاً يجب عليك إدخال 50 سنتاً.",
        "italian": "Prima devi inserire 50 centesimi.",
        "serbian": "Фирст иоу муст инсерт 50 центс."
      }
    },
    {
      "german": "Dann drücken Sie auf diese Taste.",
      "translations": {
        "english": "Then press this button.",
        "ukrainian": "Потім натисніть цю кнопку.",
        "polish": "Następnie naciśnij ten przycisk.",
        "albanian": "Pastaj shtypni këtë buton.",
        "arabic": "ثم اضغط على هذا الزر.",
        "italian": "Poi premi questo pulsante.",
        "serbian": "Затим притисните ово дугме."
      }
    },
    {
      "german": "Welche Taste muss man drücken?",
      "translations": {
        "english": "Which button must one press?",
        "ukrainian": "Яку кнопку треба натиснути?",
        "polish": "Który przycisk trzeba nacisnąć?",
        "albanian": "Cilin buton duhet të shtypësh?",
        "arabic": "أي زر يجب الضغط عليه؟",
        "italian": "Quale pulsante bisogna premere?",
        "serbian": "Вхич буттон муст оне пресс?"
      }
    },
    {
      "german": "Wo ist mein USB-Stick?",
      "translations": {
        "english": "Where is my USB stick?",
        "ukrainian": "Де моя флешка?",
        "polish": "Gdzie jest mój pendrive?",
        "albanian": "Ku është USB-ja ime?",
        "arabic": "أين ذاكرة USB الخاصة بي؟",
        "italian": "Dov'è la mia chiavetta USB?",
        "serbian": "Где је мој УСБ стик?"
      }
    }
  ],

  6: [
    {
      "german": "Wohnen nach Wunsch",
      "translations": {
        "english": "Living as desired",
        "ukrainian": "Житло за бажанням",
        "polish": "Mieszkać według życzeń",
        "albanian": "Jetoj sipas dëshirës"
      }
    },
    {
      "german": "in der Innenstadt",
      "translations": {
        "english": "in the city center",
        "ukrainian": "у центрі міста",
        "polish": "w centrum miasta",
        "albanian": "në qendër të qytetit"
      }
    },
    {
      "german": "in einem Vorort",
      "translations": {
        "english": "in a suburb",
        "ukrainian": "у передмісті",
        "polish": "na przedmieściu",
        "albanian": "në një fshat"
      }
    },
    {
      "german": "auf dem Land",
      "translations": {
        "english": "in the countryside",
        "ukrainian": "на селі",
        "polish": "na wsi",
        "albanian": "në fshat"
      }
    },
    {
      "german": "Ich wohne in der Innenstadt, aber ich möchte lieber außerhalb wohnen.",
      "translations": {
        "english": "I live in the city center, but I would rather live outside.",
        "ukrainian": "Я живу в центрі міста, але я воліла б жити за містом.",
        "polish": "Mieszkam w centrum miasta, ale wolałabym mieszkać poza miastem.",
        "albanian": "Unë jetoj në qendër të qytetit, por do preferoja të jetoj jashtë."
      }
    },
    {
      "german": "Ich wohne gern in einer Großstadt, weil ich da kein Auto brauche.",
      "translations": {
        "english": "I like living in a big city because I don't need a car there.",
        "ukrainian": "Я люблю жити у великому місті, тому що мені там не потрібна машина.",
        "polish": "Lubię mieszkać w dużym mieście, bo nie potrzebuję tam samochodu.",
        "albanian": "Më pëlqen të jetoj në një qytet të madh sepse nuk më duhet makinë atje."
      }
    },
    {
      "german": "eine Wohnung suchen",
      "translations": {
        "english": "to look for an apartment",
        "ukrainian": "шукати квартиру",
        "polish": "szukać mieszkania",
        "albanian": "të kërkosh banesë"
      }
    },
    {
      "german": "Ist die Wohnung noch frei?",
      "translations": {
        "english": "Is the apartment still available?",
        "ukrainian": "Чи ця квартира ще вільна?",
        "polish": "Czy mieszkanie jest jeszcze wolne?",
        "albanian": "A është ende e lirë banesa?"
      }
    },
    {
      "german": "Kann ich die Wohnung besichtigen?",
      "translations": {
        "english": "Can I view the apartment?",
        "ukrainian": "Чи можу я оглянути квартиру?",
        "polish": "Czy mogę obejrzeć mieszkanie?",
        "albanian": "A mund ta shoh banesën?"
      }
    },
    {
      "german": "Die Wohnung ist in der Blücherstraße 12.",
      "translations": {
        "english": "The apartment is at Blücherstraße 12.",
        "ukrainian": "Квартира знаходиться на вулиці Блюхерштрассе 12.",
        "polish": "Mieszkanie znajduje się przy Blücherstraße 12.",
        "albanian": "Banesa është në Blücherstraße 12."
      }
    },
    {
      "german": "der Umzug",
      "translations": {
        "english": "the move / relocation",
        "ukrainian": "переїзд",
        "polish": "przeprowadzka",
        "albanian": "shpërngulja"
      }
    },
    {
      "german": "die Möbel abbauen",
      "translations": {
        "english": "to disassemble the furniture",
        "ukrainian": "розібрати меблі",
        "polish": "rozmontować meble",
        "albanian": "të çmontosh mobiljet"
      }
    },
    {
      "german": "die Möbel transportieren",
      "translations": {
        "english": "to transport the furniture",
        "ukrainian": "транспортувати меблі",
        "polish": "transportować meble",
        "albanian": "të transportosh mobiljet"
      }
    },
    {
      "german": "die Lampen aufhängen",
      "translations": {
        "english": "to hang up the lamps",
        "ukrainian": "повісити лампи",
        "polish": "powiesić lampy",
        "albanian": "të varësh lampat"
      }
    },
    {
      "german": "Der Teppich liegt auf einem Tisch.",
      "translations": {
        "english": "The carpet is lying on a table.",
        "ukrainian": "Килим лежить на столі.",
        "polish": "Dywan leży na stole.",
        "albanian": "Qilimi shtrihet mbi një tavolinë."
      }
    },
    {
      "german": "Die Lampe steht auf einem Umzugskarton.",
      "translations": {
        "english": "The lamp is standing on a moving box.",
        "ukrainian": "Лампа стоїть на коробці для переїзду.",
        "polish": "Lampa stoi na pudełku do przeprowadzki.",
        "albanian": "Llamba qëndron mbi një kuti shpërnguljeje."
      }
    },
    {
      "german": "Sie stellen den Tisch auf den Teppich.",
      "translations": {
        "english": "They place the table on the carpet.",
        "ukrainian": "Вони ставлять стіл на килим.",
        "polish": "Oni stawiają stół na dywanie.",
        "albanian": "Ata e vendosin tavolinën mbi qilim."
      }
    },
    {
      "german": "die Wohnung streichen",
      "translations": {
        "english": "to paint the apartment",
        "ukrainian": "фарбувати квартиру",
        "polish": "malować mieszkanie",
        "albanian": "të lyesh banesën"
      }
    },
    {
      "german": "die Wohnung tapezieren",
      "translations": {
        "english": "to wallpaper the apartment",
        "ukrainian": "наклеїти шпалери в квартирі",
        "polish": "tapetować mieszkanie",
        "albanian": "të vendosësh letër muri në banesë"
      }
    },
    {
      "german": "ein Bild aufhängen",
      "translations": {
        "english": "to hang up a picture",
        "ukrainian": "повісити картину",
        "polish": "powiesić obraz",
        "albanian": "të varësh një foto"
      }
    },
    {
      "german": "eine Lampe aufhängen",
      "translations": {
        "english": "to hang up a lamp",
        "ukrainian": "повісити лампу",
        "polish": "powiesić lampę",
        "albanian": "të varësh një llambë"
      }
    },
    {
      "german": "Ich lasse die Wohnung renovieren.",
      "translations": {
        "english": "I'm having the apartment renovated.",
        "ukrainian": "Я даю відремонтувати квартиру.",
        "polish": "Daję wyremontować mieszkanie.",
        "albanian": "Po e lë banesën të rinovohet."
      }
    },
    {
      "german": "Ich lasse die Küche einbauen.",
      "translations": {
        "english": "I'm having the kitchen installed.",
        "ukrainian": "Я даю встановити кухню.",
        "polish": "Daję zainstalować kuchnię.",
        "albanian": "Po e lë kuzhinën të instalohet."
      }
    },
    {
      "german": "die neuen Nachbarn",
      "translations": {
        "english": "the new neighbors",
        "ukrainian": "нові сусіди",
        "polish": "nowi sąsiedzi",
        "albanian": "fqinjët e rinj"
      }
    },
    {
      "german": "Wir möchten uns vorstellen. Wir sind die neuen Nachbarn.",
      "translations": {
        "english": "We would like to introduce ourselves. We are the new neighbors.",
        "ukrainian": "Ми хочемо представитися. Ми нові сусіди.",
        "polish": "Chcielibyśmy się przedstawić. Jesteśmy nowymi sąsiadami.",
        "albanian": "Duam të paraqitemi. Jemi fqinjët e rinj."
      }
    },
    {
      "german": "Ich freue mich, dass Sie diese Wohnung bekommen haben.",
      "translations": {
        "english": "I'm glad that you got this apartment.",
        "ukrainian": "Я радий, що ви отримали цю квартиру.",
        "polish": "Cieszę się, że dostaliście to mieszkanie.",
        "albanian": "Jam i lumtur që ju morët këtë banesë."
      }
    },
    {
      "german": "Ich fühle mich gut.",
      "translations": {
        "english": "I feel good.",
        "ukrainian": "Я почуваюся добре.",
        "polish": "Czuję się dobrze.",
        "albanian": "Ndihem mirë."
      }
    },
    {
      "german": "Wir freuen uns.",
      "translations": {
        "english": "We are happy.",
        "ukrainian": "Ми раді.",
        "polish": "Cieszymy się.",
        "albanian": "Jemi të lumtur."
      }
    },
    {
      "german": "Sie fühlen sich fantastisch.",
      "translations": {
        "english": "They feel fantastic.",
        "ukrainian": "Вони почуваються фантастично.",
        "polish": "Oni czują się fantastycznie.",
        "albanian": "Ata ndihen fantastikisht."
      }
    }
  ],

  7: [
    {
      "german": "Feste feiern",
      "translations": {
        "english": "Celebrating festivals",
        "ukrainian": "Святкувати свята",
        "polish": "Świętować święta",
        "albanian": "Festoj festa"
      }
    },
    {
      "german": "ein Feuerwerk machen",
      "translations": {
        "english": "to make fireworks",
        "ukrainian": "влаштувати феєрверк",
        "polish": "wypuścić fajerwerki",
        "albanian": "të bësh fishekzjarrë"
      }
    },
    {
      "german": "gut essen",
      "translations": {
        "english": "to eat well",
        "ukrainian": "добре поїсти",
        "polish": "dobrze zjeść",
        "albanian": "të hash mirë"
      }
    },
    {
      "german": "etwas schenken",
      "translations": {
        "english": "to give something (as a gift)",
        "ukrainian": "подарувати щось",
        "polish": "coś podarować",
        "albanian": "të dhurosh diçka"
      }
    },
    {
      "german": "Spaß haben",
      "translations": {
        "english": "to have fun",
        "ukrainian": "розважатися",
        "polish": "bawić się",
        "albanian": "të argëtohesh"
      }
    },
    {
      "german": "sich verkleiden",
      "translations": {
        "english": "to dress up / disguise oneself",
        "ukrainian": "переодягатися",
        "polish": "przebierać się",
        "albanian": "të maskohesh"
      }
    },
    {
      "german": "Verwandte/Freunde einladen",
      "translations": {
        "english": "to invite relatives/friends",
        "ukrainian": "запросити родичів/друзів",
        "polish": "zaprosić krewnych/przyjaciół",
        "albanian": "të ftosh të afërm/miq"
      }
    },
    {
      "german": "Am 25. und 26. Dezember ist Weihnachten.",
      "translations": {
        "english": "On the 25th and 26th of December is Christmas.",
        "ukrainian": "25-го і 26-го грудня Різдво.",
        "polish": "25 i 26 grudnia jest Boże Narodzenie.",
        "albanian": "Në 25 dhe 26 dhjetor është Krishtlindja."
      }
    },
    {
      "german": "Am dritten Oktober haben die meisten Leute frei. Das ist ein Feiertag.",
      "translations": {
        "english": "On the third of October most people have the day off. That is a holiday.",
        "ukrainian": "Третього жовтня більшість людей мають вихідний. Це свято.",
        "polish": "Trzeciego października większość ludzi ma wolne. To jest święto.",
        "albanian": "Në tre tetor shumica e njerëzve kanë pushim. Është një festë."
      }
    },
    {
      "german": "eine Einladung",
      "translations": {
        "english": "an invitation",
        "ukrainian": "запрошення",
        "polish": "zaproszenie",
        "albanian": "një ftesë"
      }
    },
    {
      "german": "Am 26. Mai werde ich 50! Wollt ihr mit mir meinen Geburtstag feiern?",
      "translations": {
        "english": "On the 26th of May I'll turn 50! Do you want to celebrate my birthday with me?",
        "ukrainian": "26-го травня мені виповниться 50! Хочете відсвяткувати мій день народження зі мною?",
        "polish": "26 maja skończę 50 lat! Czy chcecie świętować moje urodziny ze mną?",
        "albanian": "Më 26 maj do të bëhem 50 vjeç! Doni të festoni ditëlindjen time me mua?"
      }
    },
    {
      "german": "Kommt ab 16 Uhr zu uns.",
      "translations": {
        "english": "Come to us from 4 PM.",
        "ukrainian": "Приходьте до нас з 16:00.",
        "polish": "Przyjdźcie do nas od 16:00.",
        "albanian": "Ejani tek ne nga ora 16:00."
      }
    },
    {
      "german": "Wenn ihr nicht kommt, sagt bitte Bescheid!",
      "translations": {
        "english": "If you're not coming, please let us know!",
        "ukrainian": "Якщо ви не прийдете, будь ласка, повідомте!",
        "polish": "Jeśli nie przyjdziecie, proszę dajcie znać!",
        "albanian": "Nëse nuk vini, ju lutem na njoftoni!"
      }
    },
    {
      "german": "Ich freue mich!",
      "translations": {
        "english": "I'm looking forward to it!",
        "ukrainian": "Я радію!",
        "polish": "Cieszę się!",
        "albanian": "Gëzohem!"
      }
    },
    {
      "german": "Ich möchte dich gern zu meinem Geburtstag einladen.",
      "translations": {
        "english": "I would like to invite you to my birthday.",
        "ukrainian": "Я хотів би запросити тебе на мій день народження.",
        "polish": "Chciałbym cię zaprosić na moje urodziny.",
        "albanian": "Do doja të të ftoj në ditëlindjen time."
      }
    },
    {
      "german": "Ja, ich komme gern. Wann beginnt die Feier?",
      "translations": {
        "english": "Yes, I'd love to come. When does the party start?",
        "ukrainian": "Так, я радий прийти. Коли починається свято?",
        "polish": "Tak, chętnie przyjdę. Kiedy zaczyna się impreza?",
        "albanian": "Po, do vij me kënaqësi. Kur fillon festa?"
      }
    },
    {
      "german": "Geschenke",
      "translations": {
        "english": "Gifts",
        "ukrainian": "Подарунки",
        "polish": "Prezenty",
        "albanian": "Dhurata"
      }
    },
    {
      "german": "Man kann Susanne Blumen schenken.",
      "translations": {
        "english": "One can give Susanne flowers.",
        "ukrainian": "Можна подарувати Сюзанні квіти.",
        "polish": "Można podarować Susanne kwiaty.",
        "albanian": "Mund t'i dhurosh Susannës lule."
      }
    },
    {
      "german": "Man kann ihr auch ein Parfüm schenken.",
      "translations": {
        "english": "One can also give her a perfume.",
        "ukrainian": "Можна також подарувати їй парфуми.",
        "polish": "Można jej również podarować perfumy.",
        "albanian": "Mund t'i dhurosh edhe një parfum."
      }
    },
    {
      "german": "Ich schenke meinem Vater ein Buch.",
      "translations": {
        "english": "I give my father a book.",
        "ukrainian": "Я дарую своєму батькові книгу.",
        "polish": "Daję mojemu ojcu książkę.",
        "albanian": "I dhuroj babait tim një libër."
      }
    },
    {
      "german": "Ich schenke ihm ein Buch.",
      "translations": {
        "english": "I give him a book.",
        "ukrainian": "Я дарую йому книгу.",
        "polish": "Daję mu książkę.",
        "albanian": "I dhuroj atij një libër."
      }
    },
    {
      "german": "Ich schenke meiner Frau Rosen zum Hochzeitstag.",
      "translations": {
        "english": "I give my wife roses for our wedding anniversary.",
        "ukrainian": "Я дарую своїй дружині троянди на річницю весілля.",
        "polish": "Daję mojej żonie róże na rocznicę ślubu.",
        "albanian": "I dhuroj gruas sime trëndafila për përvjetorin e martesës."
      }
    },
    {
      "german": "eine Hochzeit",
      "translations": {
        "english": "a wedding",
        "ukrainian": "весілля",
        "polish": "wesele",
        "albanian": "një dasmë"
      }
    },
    {
      "german": "Der Bräutigam trägt einen Anzug.",
      "translations": {
        "english": "The groom wears a suit.",
        "ukrainian": "Наречений носить костюм.",
        "polish": "Pan młody nosi garnitur.",
        "albanian": "Dhëndri mban kostum."
      }
    },
    {
      "german": "Die Braut trägt ein weißes Kleid.",
      "translations": {
        "english": "The bride wears a white dress.",
        "ukrainian": "Наречена носить білу сукню.",
        "polish": "Panna młoda nosi białą suknię.",
        "albanian": "Nusja mban një fustan të bardhë."
      }
    },
    {
      "german": "Sie tragen Ringe.",
      "translations": {
        "english": "They wear rings.",
        "ukrainian": "Вони носять каблучки.",
        "polish": "Oni noszą obrączki.",
        "albanian": "Ata mbajnë unaza."
      }
    },
    {
      "german": "Es gibt eine Hochzeitstorte.",
      "translations": {
        "english": "There is a wedding cake.",
        "ukrainian": "Є весільний торт.",
        "polish": "Jest tort weselny.",
        "albanian": "Ka një tortë dasme."
      }
    },
    {
      "german": "Bei der Hochzeit trägt die Frau oft ein weißes Kleid.",
      "translations": {
        "english": "At the wedding the woman often wears a white dress.",
        "ukrainian": "На весіллі жінка часто носить білу сукню.",
        "polish": "Na weselu kobieta często nosi białą suknię.",
        "albanian": "Në dasmë gruaja shpesh mban një fustan të bardhë."
      }
    },
    {
      "german": "die Freunde und Verwandten",
      "translations": {
        "english": "the friends and relatives",
        "ukrainian": "друзі та родичі",
        "polish": "przyjaciele i krewni",
        "albanian": "miqtë dhe të afërmit"
      }
    },
    {
      "german": "Sie gehen zum Restaurant.",
      "translations": {
        "english": "They go to the restaurant.",
        "ukrainian": "Вони йдуть до ресторану.",
        "polish": "Oni idą do restauracji.",
        "albanian": "Ata shkojnë në restorant."
      }
    },
    {
      "german": "Sie feiern.",
      "translations": {
        "english": "They celebrate.",
        "ukrainian": "Вони святкують.",
        "polish": "Oni świętują.",
        "albanian": "Ata festojnë."
      }
    },
    {
      "german": "Herzlichen Glückwunsch zum Geburtstag!",
      "translations": {
        "english": "Happy birthday!",
        "ukrainian": "Щасливого дня народження!",
        "polish": "Wszystkiego najlepszego z okazji urodzin!",
        "albanian": "Gëzuar ditëlindjen!"
      }
    },
    {
      "german": "Alles Gute zum neuen Jahr!",
      "translations": {
        "english": "Happy New Year!",
        "ukrainian": "З Новим роком!",
        "polish": "Szczęśliwego Nowego Roku!",
        "albanian": "Gëzuar vitin e ri!"
      }
    },
    {
      "german": "Frohe Ostern!",
      "translations": {
        "english": "Happy Easter!",
        "ukrainian": "Христос Воскрес!",
        "polish": "Wesołych Świąt Wielkanocnych!",
        "albanian": "Gëzuar Pashkët!"
      }
    },
    {
      "german": "Alles Gute zur Hochzeit!",
      "translations": {
        "english": "Best wishes for your wedding!",
        "ukrainian": "Найкращі побажання з весіллям!",
        "polish": "Wszystkiego najlepszego z okazji ślubu!",
        "albanian": "Urime për dasmën!"
      }
    },
    {
      "german": "Welcher Tag ist heute?",
      "translations": {
        "english": "What day is today?",
        "ukrainian": "Який сьогодні день?",
        "polish": "Jaki jest dzisiaj dzień?",
        "albanian": "Çfarë dite është sot?"
      }
    },
    {
      "german": "Ich glaube, heute ist der einundzwanzigste Mai.",
      "translations": {
        "english": "I think today is the twenty-first of May.",
        "ukrainian": "Думаю, сьогодні двадцять перше травня.",
        "polish": "Myślę, że dzisiaj jest dwudziesty pierwszy maja.",
        "albanian": "Mendoj se sot është njëzet e një maj."
      }
    },
    {
      "german": "Am ersten Januar ist Neujahr.",
      "translations": {
        "english": "On the first of January is New Year.",
        "ukrainian": "Першого січня Новий рік.",
        "polish": "Pierwszego stycznia jest Nowy Rok.",
        "albanian": "Në një janar është Viti i Ri."
      }
    },
    {
      "german": "Vom 23. bis zum 28. Mai hat meine Frau Geburtstag.",
      "translations": {
        "english": "From the 23rd to the 28th of May my wife has her birthday.",
        "ukrainian": "З 23-го по 28-е травня у моєї дружини день народження.",
        "polish": "Od 23 do 28 maja moja żona ma urodziny.",
        "albanian": "Nga 23 deri më 28 maj gruaja ime ka ditëlindje."
      }
    }
  ]
});
