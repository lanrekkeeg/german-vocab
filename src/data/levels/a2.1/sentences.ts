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
        "italian": "presentare una persona"
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
        "italian": "Lui viene dalla Germania."
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
        "italian": "Lei conosce molto bene la città."
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
        "italian": "Lui ha vissuto e lavorato a Berlino."
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
        "italian": "Lei trova Berlino interessante, piacevole e pulita."
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
        "italian": "A lui non piace Berlino. La città è troppo grande e troppo frenetica."
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
        "italian": "Lui vive in Germania da diversi anni."
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
        "italian": "A lui piacerebbe vivere e lavorare in Germania."
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
        "italian": "Amburgo si trova nel nord della Germania."
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
        "italian": "Potsdam si trova vicino a Berlino."
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
        "italian": "I suoi parenti e amici vivono in un'altra città."
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
        "italian": "parlare delle esperienze in Germania"
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
        "italian": "Avete lasciato la vostra patria. È stato difficile per voi?"
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
        "italian": "Sì, non è stato facile. Ma ora la Germania è anche la nostra patria."
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
        "italian": "parlare dell'apprendimento delle lingue e dare consigli"
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
        "italian": "fare proposte e dare consigli"
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
        "italian": "Puoi forse parlare tedesco con i vicini."
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
        "italian": "Devi assolutamente frequentare un corso, ad esempio un corso di danza o di cucina."
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
        "italian": "Non devi avere paura."
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
        "italian": "Non capisco i tedeschi. Parlano così veloce e così complicato."
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
        "italian": "Ho bisogno di molte parole. Come posso imparare bene nuove parole?"
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
        "italian": "Non so scrivere bene. Faccio sempre tanti errori."
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
        "italian": "leggere un giornale"
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
        "italian": "ascoltare musica con le cuffie"
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
        "italian": "lavorare al laptop"
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
        "italian": "navigare su internet"
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
        "italian": "telefonare con il cellulare/smartphone"
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
        "italian": "chattare con gli amici"
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
        "italian": "Uso il mio smartphone ogni giorno. Devo essere sempre reperibile."
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
        "italian": "Internet è importante per me perché posso trovare buone informazioni lì."
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
        "italian": "Prima si apre il programma di posta elettronica."
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
        "italian": "Quale software usa? Quali app trova buone? Perché?"
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
        "italian": "A volte guardo il telegiornale. Ma purtroppo non capisco molte parole."
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
        "italian": "Ogni famiglia in Germania deve pagare una tassa per i programmi televisivi e radiofonici pubblici."
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
        "italian": "Penso che la televisione offra buone informazioni."
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
        "italian": "Pensa che abbiamo ancora bisogno di libri oggi?"
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
        "italian": "Sono a favore del fatto che lo facciamo."
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
        "italian": "Sono contrario al fatto che lo facciamo."
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
        "italian": "Gli studenti hanno spesso bisogno di internet perché cercano informazioni per la scuola."
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
        "italian": "fare ricerche su internet"
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
        "italian": "scaricare un'app"
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
        "italian": "fare banking online"
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
        "italian": "inserire un appuntamento sul tablet"
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
        "italian": "modificare immagini"
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
        "italian": "nel fine settimana"
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
        "italian": "sabato"
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
        "italian": "domenica"
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
        "italian": "fare la spesa"
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
        "italian": "mangiare il gelato"
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
        "italian": "andare a nuotare"
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
        "italian": "fare sport"
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
        "italian": "incontrare amici"
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
        "italian": "bere caffè"
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
        "italian": "fare un picnic"
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
        "italian": "ballare"
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
        "italian": "grigliare"
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
        "italian": "dormire a lungo"
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
        "italian": "pulire l'appartamento"
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
        "italian": "lavare la macchina"
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
        "italian": "lavorare in giardino"
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
        "italian": "fare gite"
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
        "italian": "visitare i parenti"
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
        "italian": "andare in un club"
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
        "italian": "lavorare"
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
        "italian": "andare a passeggio"
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
        "italian": "riparare qualcosa"
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
        "italian": "leggere il giornale"
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
        "italian": "sul tavolo"
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
        "italian": "accanto al piatto"
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
        "italian": "davanti alla porta"
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
        "italian": "sotto la sedia"
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
        "italian": "al tavolo"
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
        "italian": "davanti alla farmacia"
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
        "italian": "in farmacia"
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
        "italian": "nel caffè"
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
        "italian": "nei negozi"
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
        "italian": "sul pavimento"
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
        "italian": "sotto l'albero"
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
        "italian": "al caffè"
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
        "italian": "accanto alla sedia"
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
        "italian": "sul tavolo"
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
        "italian": "sotto le scale"
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
        "italian": "sull'albero"
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
        "italian": "in farmacia"
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
        "italian": "nei negozi"
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
        "italian": "tra le sedie"
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
        "italian": "sì, no e invece sì"
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
        "italian": "Hai tempo?"
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
        "italian": "Sì."
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
        "italian": "No."
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
        "italian": "Non hai tempo?"
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
        "italian": "Sì, invece."
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
        "italian": "Non vieni?"
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
        "italian": "Sì, vengo."
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
        "italian": "prenotare un tavolo"
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
        "italian": "ordinare cibo"
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
        "italian": "pagare per il cibo"
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
        "italian": "Vorrei prenotare un tavolo."
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
        "italian": "Vorrebbe ordinare?"
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
        "italian": "Il conto, per favore."
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
        "italian": "Quando vorrebbe venire?"
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
        "italian": "Quante persone?"
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
        "italian": "Prendo la cotoletta."
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
        "italian": "Vorrei un'acqua."
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
        "italian": "Separato o insieme?"
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
        "italian": "Lunedì alle 10."
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
        "italian": "Cosa vorrebbe da bere?"
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
        "italian": "Separato. Io ho preso il pollo."
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
        "italian": "Insieme, per favore."
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
        "italian": "Allora fanno 15 euro."
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
        "italian": "Un caffè, per favore."
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
        "italian": "Grazie, va bene così."
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
        "italian": "andare a casa"
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
        "italian": "andare al ristorante"
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
        "italian": "andare a un lago"
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
        "italian": "andare al mare"
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
        "italian": "andare in centro"
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
        "italian": "andare in montagna"
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
        "italian": "andare in campagna"
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
        "italian": "restare a casa"
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
        "italian": "al ristorante"
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
        "italian": "al mare"
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
        "italian": "in centro"
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
        "italian": "in montagna"
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
        "italian": "a una festa"
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
        "italian": "in campagna"
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
        "italian": "La domenica è giorno di famiglia."
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
        "italian": "La domenica lavoro spesso."
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
        "italian": "Non mi piace la domenica."
      }
    }
  ]
});
