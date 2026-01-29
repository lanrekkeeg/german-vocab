import { GrammarTopic } from '../../../types';

export const b1_2_Grammar: GrammarTopic[] = [
  {
    id: 'b1-2-futur-i',
    moduleId: 13,
    title: {
      en: 'Futur I (Future Tense)',
      uk: 'Futur I (Майбутній час)',
      pl: 'Futur I (Czas przyszły)',
      sq: 'Futur I (Koha e ardhme)',
      de: 'Futur I',
      ar: 'المستقبل البسيط',
      it: 'Futur I (Futuro semplice)',
      sr: 'Футур I (Будуће вријеме)'
    },
    description: {
      en: 'Futur I is used to express future events, predictions, and assumptions. It is formed with werden + infinitive.',
      uk: 'Futur I використовується для вираження майбутніх подій, прогнозів та припущень. Утворюється з werden + інфінітив.',
      pl: 'Futur I używany jest do wyrażania przyszłych wydarzeń, prognoz i przypuszczeń. Tworzy się z werden + bezokolicznik.',
      sq: 'Futur I përdoret për të shprehur ngjarje të ardhme, parashikime dhe supozime. Formohet me werden + paskajore.',
      de: 'Das Futur I wird für zukünftige Ereignisse, Vorhersagen und Vermutungen verwendet. Es wird mit werden + Infinitiv gebildet.',
      ar: 'يُستخدم المستقبل البسيط للتعبير عن الأحداث المستقبلية والتوقعات والافتراضات. يتكون من werden + المصدر.',
      it: 'Il Futur I si usa per esprimere eventi futuri, previsioni e supposizioni. Si forma con werden + infinito.',
      sr: 'Футур I се користи за изражавање будућих догађаја, предвиђања и претпоставки. Гради се са werden + инфинитив.'
    },
    exercises: [
      {
        id: 'b1-2-futur-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form of "werden".',
          uk: 'Заповніть правильну форму "werden".',
          pl: 'Wpisz poprawną formę "werden".',
          sq: 'Plotësoni formën e saktë të "werden".',
          de: 'Ergänzen Sie die richtige Form von "werden".',
          ar: 'أكمل الصيغة الصحيحة لـ "werden".',
          it: 'Inserisci la forma corretta di "werden".',
          sr: 'Унесите правилан облик глагола "werden".'
        },
        context: 'Ich ___ morgen nach Berlin fahren.',
        correctAnswer: 'werde'
      },
      {
        id: 'b1-2-futur-ex2',
        type: 'multiple-choice',
        question: {
          en: 'Which sentence is correct?',
          uk: 'Яке речення правильне?',
          pl: 'Które zdanie jest poprawne?',
          sq: 'Cila fjali është e saktë?',
          de: 'Welcher Satz ist richtig?',
          ar: 'أي جملة صحيحة؟',
          it: 'Quale frase è corretta?',
          sr: 'Која реченица је тачна?'
        },
        context: 'Wählen Sie den richtigen Satz.',
        options: [
          'Er werde morgen kommen.',
          'Er wird morgen kommen.',
          'Er werden morgen kommen.',
          'Er wirds morgen kommen.'
        ],
        correctAnswer: 'Er wird morgen kommen.'
      }
    ]
  },
  {
    id: 'b1-2-passiv',
    moduleId: 11,
    title: {
      en: 'Passive Voice',
      uk: 'Пасивний стан',
      pl: 'Strona bierna',
      sq: 'Forma pasive',
      de: 'Passiv',
      ar: 'المبني للمجهول',
      it: 'Passivo',
      sr: 'Пасив'
    },
    description: {
      en: 'The passive voice is used when the action is more important than who performs it. It is formed with werden + past participle.',
      uk: 'Пасивний стан використовується, коли дія важливіша за того, хто її виконує. Утворюється з werden + дієприкметник минулого часу.',
      pl: 'Strona bierna używana jest, gdy czynność jest ważniejsza niż wykonawca. Tworzy się z werden + imiesłów bierny.',
      sq: 'Forma pasive përdoret kur veprimi është më i rëndësishëm se kush e kryen. Formohet me werden + pjesore.',
      de: 'Das Passiv wird verwendet, wenn die Handlung wichtiger ist als die Person, die sie ausführt. Es wird mit werden + Partizip II gebildet.',
      ar: 'يُستخدم المبني للمجهول عندما يكون الفعل أهم من الفاعل. يتكون من werden + اسم المفعول.',
      it: 'Il passivo si usa quando l\'azione è più importante di chi la compie. Si forma con werden + participio passato.',
      sr: 'Пасив се користи када је радња важнија од онога ко је извршава. Гради се са werden + партицип перфекта.'
    },
    exercises: [
      {
        id: 'b1-2-passiv-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct passive form.',
          uk: 'Заповніть правильну пасивну форму.',
          pl: 'Wpisz poprawną formę bierną.',
          sq: 'Plotësoni formën e saktë pasive.',
          de: 'Ergänzen Sie die richtige Passivform.',
          ar: 'أكمل صيغة المبني للمجهول الصحيحة.',
          it: 'Inserisci la forma passiva corretta.',
          sr: 'Унесите правилан пасивни облик.'
        },
        context: 'Das Auto ___ repariert. (werden)',
        correctAnswer: 'wird'
      },
      {
        id: 'b1-2-passiv-ex2',
        type: 'multiple-choice',
        question: {
          en: 'Which sentence is in passive voice?',
          uk: 'Яке речення у пасивному стані?',
          pl: 'Które zdanie jest w stronie biernej?',
          sq: 'Cila fjali është në formë pasive?',
          de: 'Welcher Satz steht im Passiv?',
          ar: 'أي جملة في المبني للمجهول؟',
          it: 'Quale frase è al passivo?',
          sr: 'Која реченица је у пасиву?'
        },
        context: 'Wählen Sie den Satz im Passiv.',
        options: [
          'Der Arzt untersucht den Patienten.',
          'Der Patient wird vom Arzt untersucht.',
          'Der Arzt hat den Patienten untersucht.',
          'Der Patient geht zum Arzt.'
        ],
        correctAnswer: 'Der Patient wird vom Arzt untersucht.'
      }
    ]
  },
  {
    id: 'b1-2-relativsaetze',
    moduleId: 9,
    title: {
      en: 'Relative Clauses',
      uk: 'Відносні речення',
      pl: 'Zdania względne',
      sq: 'Fjalitë relative',
      de: 'Relativsätze',
      ar: 'الجمل الموصولة',
      it: 'Frasi relative',
      sr: 'Релативне реченице'
    },
    description: {
      en: 'Relative clauses provide additional information about a noun. They are introduced by relative pronouns (der, die, das, etc.).',
      uk: 'Відносні речення надають додаткову інформацію про іменник. Вони вводяться відносними займенниками (der, die, das тощо).',
      pl: 'Zdania względne dostarczają dodatkowych informacji o rzeczowniku. Wprowadzane są zaimkami względnymi (der, die, das itp.).',
      sq: 'Fjalitë relative japin informacion shtesë për emrin. Fillojnë me përemra relativ (der, die, das etj.).',
      de: 'Relativsätze geben zusätzliche Informationen über ein Nomen. Sie werden durch Relativpronomen (der, die, das usw.) eingeleitet.',
      ar: 'الجمل الموصولة تعطي معلومات إضافية عن الاسم. تُقدَّم بضمائر موصولة (der, die, das إلخ).',
      it: 'Le frasi relative forniscono informazioni aggiuntive su un sostantivo. Sono introdotte da pronomi relativi (der, die, das ecc.).',
      sr: 'Релативне реченице дају додатне информације о именици. Уводе се релативним замјеницама (der, die, das итд.).'
    },
    exercises: [
      {
        id: 'b1-2-relativ-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct relative pronoun.',
          uk: 'Заповніть правильний відносний займенник.',
          pl: 'Wpisz poprawny zaimek względny.',
          sq: 'Plotësoni përemrin relativ të saktë.',
          de: 'Ergänzen Sie das richtige Relativpronomen.',
          ar: 'أكمل ضمير الوصل الصحيح.',
          it: 'Inserisci il pronome relativo corretto.',
          sr: 'Унесите правилну релативну замјеницу.'
        },
        context: 'Das ist der Mann, ___ mir geholfen hat.',
        correctAnswer: 'der'
      },
      {
        id: 'b1-2-relativ-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct relative pronoun.',
          uk: 'Заповніть правильний відносний займенник.',
          pl: 'Wpisz poprawny zaimek względny.',
          sq: 'Plotësoni përemrin relativ të saktë.',
          de: 'Ergänzen Sie das richtige Relativpronomen.',
          ar: 'أكمل ضمير الوصل الصحيح.',
          it: 'Inserisci il pronome relativo corretto.',
          sr: 'Унесите правилну релативну замјеницу.'
        },
        context: 'Die Frau, ___ ich kenne, arbeitet bei der Bank.',
        correctAnswer: 'die'
      }
    ]
  }
];
