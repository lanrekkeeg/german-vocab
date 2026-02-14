import { GrammarTopic } from '../../../types';

export const b1_1_Grammar: GrammarTopic[] = [
  // ============================================
  // MODULE 1: Frauen - Männer - Familien
  // ============================================
  {
    id: 'b1-1-obwohl-trotzdem',
    moduleId: 1,
    title: {
      en: 'Obwohl and Trotzdem (Concessive Clauses)',
      uk: 'Obwohl і Trotzdem (Допустові речення)',
      pl: 'Obwohl i Trotzdem (Zdania przyzwalające)',
      sq: 'Obwohl dhe Trotzdem (Fjali lejuese)',
      de: 'Obwohl und Trotzdem',
      ar: 'Obwohl و Trotzdem (جمل التنازل)',
      it: 'Obwohl e Trotzdem (Frasi concessive)',
      sr: 'Obwohl и Trotzdem (Допусне реченице)'
    },
    description: {
      en: 'Obwohl introduces a subordinate clause (verb at end). Trotzdem is an adverb that starts the main clause (verb in position 2).',
      uk: 'Obwohl вводить підрядне речення (дієслово в кінці). Trotzdem — прислівник, що починає головне речення (дієслово на 2-й позиції).',
      pl: 'Obwohl wprowadza zdanie podrzędne (czasownik na końcu). Trotzdem to przysłówek rozpoczynający zdanie główne (czasownik na pozycji 2).',
      sq: 'Obwohl prezanton një fjali të varur (folja në fund). Trotzdem është ndajfolje që fillon fjali kryesore (folja në pozicionin 2).',
      de: 'Obwohl leitet einen Nebensatz ein (Verb am Ende). Trotzdem ist ein Adverb und steht im Hauptsatz (Verb auf Position 2).',
      ar: 'Obwohl تقدم جملة فرعية (الفعل في النهاية). Trotzdem ظرف يبدأ الجملة الرئيسية (الفعل في الموضع 2).',
      it: 'Obwohl introduce una frase subordinata (verbo alla fine). Trotzdem è un avverbio che inizia la frase principale (verbo in posizione 2).',
      sr: 'Obwohl уводи зависну реченицу (глагол на крају). Trotzdem је прилог који започиње главну реченицу (глагол на позицији 2).'
    },
    exercises: [
      {
        id: 'b1-1-obwohl-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "obwohl" or "trotzdem".',
          uk: 'Заповніть "obwohl" або "trotzdem".',
          pl: 'Wpisz "obwohl" lub "trotzdem".',
          sq: 'Plotësoni "obwohl" ose "trotzdem".',
          de: 'Ergänzen Sie "obwohl" oder "trotzdem".',
          ar: 'أكمل بـ "obwohl" أو "trotzdem".',
          it: 'Inserisci "obwohl" o "trotzdem".',
          sr: 'Допуните "obwohl" или "trotzdem".'
        },
        context: '___ ich alleinerziehend bin, fühle ich mich nicht allein.',
        correctAnswer: 'Obwohl'
      },
      {
        id: 'b1-1-obwohl-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "obwohl" or "trotzdem".',
          uk: 'Заповніть "obwohl" або "trotzdem".',
          pl: 'Wpisz "obwohl" lub "trotzdem".',
          sq: 'Plotësoni "obwohl" ose "trotzdem".',
          de: 'Ergänzen Sie "obwohl" oder "trotzdem".',
          ar: 'أكمل بـ "obwohl" أو "trotzdem".',
          it: 'Inserisci "obwohl" o "trotzdem".',
          sr: 'Допуните "obwohl" или "trotzdem".'
        },
        context: 'Karl und ich sind jetzt Rentner. ___ sind wir noch sehr aktiv.',
        correctAnswer: 'Trotzdem'
      },
      {
        id: 'b1-1-obwohl-ex3',
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
        context: 'Das Wasser ist kalt. Die Leute baden im See.',
        options: [
          'Obwohl das Wasser kalt ist, baden die Leute im See.',
          'Obwohl das Wasser ist kalt, baden die Leute im See.',
          'Trotzdem das Wasser kalt ist, baden die Leute im See.',
          'Obwohl das Wasser kalt ist, die Leute baden im See.'
        ],
        correctAnswer: 'Obwohl das Wasser kalt ist, baden die Leute im See.'
      }
    ]
  },
  {
    id: 'b1-1-weil-deshalb',
    moduleId: 1,
    title: {
      en: 'Weil and Deshalb (Causal Clauses)',
      uk: 'Weil і Deshalb (Причинні речення)',
      pl: 'Weil i Deshalb (Zdania przyczynowe)',
      sq: 'Weil dhe Deshalb (Fjali shkakore)',
      de: 'Weil und Deshalb',
      ar: 'Weil و Deshalb (جمل السبب)',
      it: 'Weil e Deshalb (Frasi causali)',
      sr: 'Weil и Deshalb (Узрочне реченице)'
    },
    description: {
      en: 'Weil introduces a subordinate clause (verb at end) stating the reason. Deshalb introduces a main clause stating the consequence.',
      uk: 'Weil вводить підрядне речення (дієслово в кінці), що вказує причину. Deshalb вводить головне речення, що вказує наслідок.',
      pl: 'Weil wprowadza zdanie podrzędne (czasownik na końcu) podające przyczynę. Deshalb wprowadza zdanie główne podające skutek.',
      sq: 'Weil prezanton fjali të varur (folja në fund) që tregon arsyen. Deshalb prezanton fjali kryesore që tregon pasojën.',
      de: 'Weil leitet einen Nebensatz ein (Verb am Ende) und nennt den Grund. Deshalb leitet einen Hauptsatz ein und nennt die Folge.',
      ar: 'Weil تقدم جملة فرعية (الفعل في النهاية) تذكر السبب. Deshalb تقدم جملة رئيسية تذكر النتيجة.',
      it: 'Weil introduce una frase subordinata (verbo alla fine) che indica la ragione. Deshalb introduce una frase principale che indica la conseguenza.',
      sr: 'Weil уводи зависну реченицу (глагол на крају) која наводи разлог. Deshalb уводи главну реченицу која наводи последицу.'
    },
    exercises: [
      {
        id: 'b1-1-weil-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "weil" or "deshalb".',
          uk: 'Заповніть "weil" або "deshalb".',
          pl: 'Wpisz "weil" lub "deshalb".',
          sq: 'Plotësoni "weil" ose "deshalb".',
          de: 'Ergänzen Sie "weil" oder "deshalb".',
          ar: 'أكمل بـ "weil" أو "deshalb".',
          it: 'Inserisci "weil" o "deshalb".',
          sr: 'Допуните "weil" или "deshalb".'
        },
        context: 'Er versteht seine Frau nicht, ___ er Musik hört.',
        correctAnswer: 'weil'
      },
      {
        id: 'b1-1-weil-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "weil" or "deshalb".',
          uk: 'Заповніть "weil" або "deshalb".',
          pl: 'Wpisz "weil" lub "deshalb".',
          sq: 'Plotësoni "weil" ose "deshalb".',
          de: 'Ergänzen Sie "weil" oder "deshalb".',
          ar: 'أكمل بـ "weil" أو "deshalb".',
          it: 'Inserisci "weil" o "deshalb".',
          sr: 'Допуните "weil" или "deshalb".'
        },
        context: 'Er hört Musik. ___ versteht er seine Frau nicht.',
        correctAnswer: 'Deshalb'
      }
    ]
  },
  {
    id: 'b1-1-genitiv',
    moduleId: 1,
    title: {
      en: 'Genitive Case',
      uk: 'Родовий відмінок',
      pl: 'Dopełniacz',
      sq: 'Rasa gjinore',
      de: 'Genitiv',
      ar: 'حالة الجر',
      it: 'Caso genitivo',
      sr: 'Генитив'
    },
    description: {
      en: 'The genitive case shows possession. Masculine/neuter nouns add -s/-es. Prepositions with genitive: wegen, während, innerhalb, außerhalb.',
      uk: 'Родовий відмінок показує належність. Чоловічі/середні іменники додають -s/-es. Прийменники з родовим: wegen, während, innerhalb, außerhalb.',
      pl: 'Dopełniacz wyraża posiadanie. Rzeczowniki męskie/nijakie dodają -s/-es. Przyimki z dopełniaczem: wegen, während, innerhalb, außerhalb.',
      sq: 'Rasa gjinore tregon pronësinë. Emrat mashkullorë/asnjanës marrin -s/-es. Parafjalët me gjinore: wegen, während, innerhalb, außerhalb.',
      de: 'Der Genitiv zeigt Besitz. Maskuline/neutrale Nomen bekommen -s/-es. Präpositionen mit Genitiv: wegen, während, innerhalb, außerhalb.',
      ar: 'حالة الجر تُظهر الملكية. الأسماء المذكرة/المحايدة تضيف -s/-es. حروف الجر مع الجر: wegen, während, innerhalb, außerhalb.',
      it: 'Il genitivo esprime possesso. I sostantivi maschili/neutri aggiungono -s/-es. Preposizioni con genitivo: wegen, während, innerhalb, außerhalb.',
      sr: 'Генитив показује припадност. Именице мушког/средњег рода добијају -s/-es. Предлози са генитивом: wegen, während, innerhalb, außerhalb.'
    },
    exercises: [
      {
        id: 'b1-1-genitiv-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct genitive form.',
          uk: 'Заповніть правильну форму родового відмінка.',
          pl: 'Wpisz poprawną formę dopełniacza.',
          sq: 'Plotësoni formën e saktë të gjinores.',
          de: 'Ergänzen Sie die richtige Genitivform.',
          ar: 'أكمل صيغة الجر الصحيحة.',
          it: 'Inserisci la forma corretta del genitivo.',
          sr: 'Допуните тачну форму генитива.'
        },
        context: 'Die Mehrheit ___ Frauen arbeitet heute.',
        correctAnswer: 'der'
      },
      {
        id: 'b1-1-genitiv-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct genitive form.',
          uk: 'Заповніть правильну форму родового відмінка.',
          pl: 'Wpisz poprawną formę dopełniacza.',
          sq: 'Plotësoni formën e saktë të gjinores.',
          de: 'Ergänzen Sie die richtige Genitivform.',
          ar: 'أكمل صيغة الجر الصحيحة.',
          it: 'Inserisci la forma corretta del genitivo.',
          sr: 'Допуните тачну форму генитива.'
        },
        context: 'Die Eltern ___ Mannes wohnen in Berlin.',
        correctAnswer: 'des'
      },
      {
        id: 'b1-1-genitiv-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition (wegen, während, innerhalb).',
          uk: 'Заповніть правильний прийменник (wegen, während, innerhalb).',
          pl: 'Wpisz poprawny przyimek (wegen, während, innerhalb).',
          sq: 'Plotësoni parafjalën e saktë (wegen, während, innerhalb).',
          de: 'Ergänzen Sie die richtige Präposition (wegen, während, innerhalb).',
          ar: 'أكمل حرف الجر الصحيح (wegen, während, innerhalb).',
          it: 'Inserisci la preposizione corretta (wegen, während, innerhalb).',
          sr: 'Допуните тачан предлог (wegen, während, innerhalb).'
        },
        context: 'Sie hat ___ des Studiums ihr erstes Kind bekommen.',
        correctAnswer: 'während'
      }
    ]
  },

  // ============================================
  // MODULE 2: Die digitale Welt
  // ============================================
  {
    id: 'b1-1-zu-infinitiv',
    moduleId: 2,
    title: {
      en: 'Zu + Infinitive',
      uk: 'Zu + інфінітив',
      pl: 'Zu + bezokolicznik',
      sq: 'Zu + paskajore',
      de: 'Zu + Infinitiv',
      ar: 'Zu + المصدر',
      it: 'Zu + Infinito',
      sr: 'Zu + инфинитив'
    },
    description: {
      en: 'Zu + Infinitive is used after certain verbs (vergessen, anfangen, versuchen), expressions with haben (Zeit/Lust/Angst haben), and adjective phrases (Es ist gut/leicht/schwer...).',
      uk: 'Zu + інфінітив вживається після певних дієслів (vergessen, anfangen, versuchen), виразів з haben (Zeit/Lust/Angst haben) та прикметникових конструкцій (Es ist gut/leicht/schwer...).',
      pl: 'Zu + bezokolicznik używany jest po określonych czasownikach (vergessen, anfangen, versuchen), wyrażeniach z haben (Zeit/Lust/Angst haben) i konstrukcjach przymiotnikowych (Es ist gut/leicht/schwer...).',
      sq: 'Zu + paskajore përdoret pas foljeve të caktuara (vergessen, anfangen, versuchen), shprehjeve me haben (Zeit/Lust/Angst haben) dhe frazave mbiemërore (Es ist gut/leicht/schwer...).',
      de: 'Zu + Infinitiv steht nach bestimmten Verben (vergessen, anfangen, versuchen), Ausdrücken mit haben (Zeit/Lust/Angst haben) und Adjektiv-Ausdrücken (Es ist gut/leicht/schwer...).',
      ar: 'Zu + المصدر يُستخدم بعد أفعال معينة (vergessen, anfangen, versuchen)، وتعبيرات مع haben (Zeit/Lust/Angst haben)، وعبارات صفات (Es ist gut/leicht/schwer...).',
      it: 'Zu + Infinito si usa dopo certi verbi (vergessen, anfangen, versuchen), espressioni con haben (Zeit/Lust/Angst haben) e frasi aggettivali (Es ist gut/leicht/schwer...).',
      sr: 'Zu + инфинитив се користи после одређених глагола (vergessen, anfangen, versuchen), израза са haben (Zeit/Lust/Angst haben) и придевских фраза (Es ist gut/leicht/schwer...).'
    },
    exercises: [
      {
        id: 'b1-1-zu-inf-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Complete the sentence with zu + infinitive.',
          uk: 'Доповніть речення конструкцією zu + інфінітив.',
          pl: 'Uzupełnij zdanie konstrukcją zu + bezokolicznik.',
          sq: 'Plotësoni fjalinë me zu + paskajore.',
          de: 'Ergänzen Sie den Satz mit zu + Infinitiv.',
          ar: 'أكمل الجملة بـ zu + المصدر.',
          it: 'Completa la frase con zu + infinito.',
          sr: 'Допуните реченицу са zu + инфинитив.'
        },
        context: 'Es ist leicht, mit dem Smartphone unterwegs ___ kommunizieren.',
        correctAnswer: 'zu'
      },
      {
        id: 'b1-1-zu-inf-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Complete the sentence with the correct form.',
          uk: 'Доповніть речення правильною формою.',
          pl: 'Uzupełnij zdanie poprawną formą.',
          sq: 'Plotësoni fjalinë me formën e saktë.',
          de: 'Ergänzen Sie den Satz mit der richtigen Form.',
          ar: 'أكمل الجملة بالصيغة الصحيحة.',
          it: 'Completa la frase con la forma corretta.',
          sr: 'Допуните реченицу тачном формом.'
        },
        context: 'Es macht Spaß, Selfies ___ posten.',
        correctAnswer: 'zu'
      },
      {
        id: 'b1-1-zu-inf-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Complete with zu + infinitive (separable verb).',
          uk: 'Доповніть zu + інфінітив (відокремлюване дієслово).',
          pl: 'Uzupełnij zu + bezokolicznik (czasownik rozdzielnie złożony).',
          sq: 'Plotësoni me zu + paskajore (folje e ndashme).',
          de: 'Ergänzen Sie mit zu + Infinitiv (trennbares Verb).',
          ar: 'أكمل بـ zu + المصدر (فعل منفصل).',
          it: 'Completa con zu + infinito (verbo separabile).',
          sr: 'Допуните са zu + инфинитив (раздвојив глагол).'
        },
        context: 'Tarek hat vergessen, seine E-Mails ___ .',
        correctAnswer: 'zu checken'
      }
    ]
  },
  {
    id: 'b1-1-einander',
    moduleId: 2,
    title: {
      en: 'Prepositions + -einander (Reciprocal Pronouns)',
      uk: 'Прийменники + -einander (Взаємні займенники)',
      pl: 'Przyimki + -einander (Zaimki wzajemne)',
      sq: 'Parafjalët + -einander (Përemrat reciprokë)',
      de: 'Präpositionen + -einander',
      ar: 'حروف الجر + -einander (ضمائر متبادلة)',
      it: 'Preposizioni + -einander (Pronomi reciproci)',
      sr: 'Предлози + -einander (Узајамне заменице)'
    },
    description: {
      en: 'Einander means "each other". It combines with prepositions: miteinander (with each other), füreinander (for each other), ineinander (in each other), gegeneinander (against each other).',
      uk: 'Einander означає «один одного». Поєднується з прийменниками: miteinander (один з одним), füreinander (один для одного), ineinander (один в одного), gegeneinander (один проти одного).',
      pl: 'Einander oznacza "nawzajem". Łączy się z przyimkami: miteinander (ze sobą), füreinander (dla siebie), ineinander (w sobie), gegeneinander (przeciwko sobie).',
      sq: 'Einander do të thotë "njëri-tjetrin". Kombinohet me parafjalë: miteinander (me njëri-tjetrin), füreinander (për njëri-tjetrin), ineinander (në njëri-tjetrin), gegeneinander (kundër njëri-tjetrit).',
      de: 'Einander bedeutet "sich gegenseitig". Es wird mit Präpositionen kombiniert: miteinander, füreinander, ineinander, gegeneinander.',
      ar: 'Einander تعني "بعضنا البعض". تُدمج مع حروف الجر: miteinander (مع بعض)، füreinander (لبعض)، ineinander (في بعض)، gegeneinander (ضد بعض).',
      it: 'Einander significa "l\'un l\'altro". Si combina con preposizioni: miteinander (l\'uno con l\'altro), füreinander (l\'uno per l\'altro), ineinander (l\'uno nell\'altro), gegeneinander (l\'uno contro l\'altro).',
      sr: 'Einander значи „један другог". Комбинује се са предлозима: miteinander (један са другим), füreinander (један за другог), ineinander (један у другог), gegeneinander (један против другог).'
    },
    exercises: [
      {
        id: 'b1-1-einander-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form with -einander.',
          uk: 'Заповніть правильну форму з -einander.',
          pl: 'Wpisz poprawną formę z -einander.',
          sq: 'Plotësoni formën e saktë me -einander.',
          de: 'Ergänzen Sie die richtige Form mit -einander.',
          ar: 'أكمل الصيغة الصحيحة مع -einander.',
          it: 'Inserisci la forma corretta con -einander.',
          sr: 'Допуните тачну форму са -einander.'
        },
        context: 'Evi und Luca haben jeden Tag ___ geskypt.',
        correctAnswer: 'miteinander'
      },
      {
        id: 'b1-1-einander-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form with -einander.',
          uk: 'Заповніть правильну форму з -einander.',
          pl: 'Wpisz poprawną formę z -einander.',
          sq: 'Plotësoni formën e saktë me -einander.',
          de: 'Ergänzen Sie die richtige Form mit -einander.',
          ar: 'أكمل الصيغة الصحيحة مع -einander.',
          it: 'Inserisci la forma corretta con -einander.',
          sr: 'Допуните тачну форму са -einander.'
        },
        context: 'Anna und Robert haben sich letztes Jahr ___ verliebt.',
        correctAnswer: 'ineinander'
      },
      {
        id: 'b1-1-einander-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form with -einander.',
          uk: 'Заповніть правильну форму з -einander.',
          pl: 'Wpisz poprawną formę z -einander.',
          sq: 'Plotësoni formën e saktë me -einander.',
          de: 'Ergänzen Sie die richtige Form mit -einander.',
          ar: 'أكمل الصيغة الصحيحة مع -einander.',
          it: 'Inserisci la forma corretta con -einander.',
          sr: 'Допуните тачну форму са -einander.'
        },
        context: 'Lena und Sabine sind immer ___ da.',
        correctAnswer: 'füreinander'
      }
    ]
  },

  // ============================================
  // MODULE 3: Der erste Eindruck
  // ============================================
  {
    id: 'b1-1-adjektiv-dativ',
    moduleId: 3,
    title: {
      en: 'Adjective Declension in Dative',
      uk: 'Відмінювання прикметників у давальному відмінку',
      pl: 'Deklinacja przymiotników w celowniku',
      sq: 'Lakimi i mbiemrave në rasën dhanore',
      de: 'Adjektivdeklination im Dativ',
      ar: 'تصريف الصفات في حالة المفعول به',
      it: 'Declinazione degli aggettivi nel dativo',
      sr: 'Деклинација придева у дативу'
    },
    description: {
      en: 'Adjectives in dative with definite/indefinite article always end in -en. Without article: m/n: -em, f: -er, pl: -en.',
      uk: 'Прикметники в давальному з означеним/неозначеним артиклем завжди закінчуються на -en. Без артикля: m/n: -em, f: -er, pl: -en.',
      pl: 'Przymiotniki w celowniku z rodzajnikiem określonym/nieokreślonym kończą się na -en. Bez rodzajnika: m/n: -em, f: -er, pl: -en.',
      sq: 'Mbiemrat në dhanore me nyjën e shquar/të pashquar përfundojnë gjithmonë me -en. Pa nyje: m/n: -em, f: -er, pl: -en.',
      de: 'Adjektive im Dativ haben nach Artikel immer die Endung -en. Ohne Artikel: m/n: -em, f: -er, Pl: -en.',
      ar: 'الصفات في حالة الجر مع أداة التعريف/التنكير تنتهي دائماً بـ -en. بدون أداة: m/n: -em، f: -er، pl: -en.',
      it: 'Gli aggettivi nel dativo con articolo determinativo/indeterminativo terminano sempre in -en. Senza articolo: m/n: -em, f: -er, pl: -en.',
      sr: 'Придеви у дативу са одређеним/неодређеним чланом увек се завршавају на -en. Без члана: m/n: -em, f: -er, pl: -en.'
    },
    exercises: [
      {
        id: 'b1-1-adj-dat-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct adjective ending.',
          uk: 'Заповніть правильне закінчення прикметника.',
          pl: 'Wpisz poprawną końcówkę przymiotnika.',
          sq: 'Plotësoni mbaresën e saktë të mbiemrit.',
          de: 'Ergänzen Sie die richtige Adjektivendung.',
          ar: 'أكمل نهاية الصفة الصحيحة.',
          it: 'Inserisci la desinenza corretta dell\'aggettivo.',
          sr: 'Допуните тачан наставак придева.'
        },
        context: 'Wir arbeiten mit dem ausgezeichnet___ Ruf.',
        correctAnswer: 'en'
      },
      {
        id: 'b1-1-adj-dat-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct adjective ending.',
          uk: 'Заповніть правильне закінчення прикметника.',
          pl: 'Wpisz poprawną końcówkę przymiotnika.',
          sq: 'Plotësoni mbaresën e saktë të mbiemrit.',
          de: 'Ergänzen Sie die richtige Adjektivendung.',
          ar: 'أكمل نهاية الصفة الصحيحة.',
          it: 'Inserisci la desinenza corretta dell\'aggettivo.',
          sr: 'Допуните тачан наставак придева.'
        },
        context: 'Sie arbeiten in einem engagiert___ Team.',
        correctAnswer: 'en'
      },
      {
        id: 'b1-1-adj-dat-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct adjective ending (without article).',
          uk: 'Заповніть правильне закінчення прикметника (без артикля).',
          pl: 'Wpisz poprawną końcówkę przymiotnika (bez rodzajnika).',
          sq: 'Plotësoni mbaresën e saktë (pa nyje).',
          de: 'Ergänzen Sie die richtige Adjektivendung (ohne Artikel).',
          ar: 'أكمل نهاية الصفة الصحيحة (بدون أداة).',
          it: 'Inserisci la desinenza corretta (senza articolo).',
          sr: 'Допуните тачан наставак придева (без члана).'
        },
        context: 'Er arbeitet bei lokal___ Pflegedienst.',
        correctAnswer: 'em'
      }
    ]
  },
  {
    id: 'b1-1-um-zu-damit',
    moduleId: 3,
    title: {
      en: 'Um ... zu + Infinitive / Damit (Purpose Clauses)',
      uk: 'Um ... zu + інфінітив / Damit (Цільові речення)',
      pl: 'Um ... zu + bezokolicznik / Damit (Zdania celowe)',
      sq: 'Um ... zu + paskajore / Damit (Fjali qëllimore)',
      de: 'Um ... zu + Infinitiv / Damit',
      ar: 'Um ... zu + المصدر / Damit (جمل الغرض)',
      it: 'Um ... zu + Infinito / Damit (Frasi finali)',
      sr: 'Um ... zu + инфинитив / Damit (Намерне реченице)'
    },
    description: {
      en: 'Um ... zu + infinitive expresses purpose when both clauses have the same subject. Damit is used when the subjects are different.',
      uk: 'Um ... zu + інфінітив виражає мету, коли обидва речення мають однаковий підмет. Damit вживається, коли підмети різні.',
      pl: 'Um ... zu + bezokolicznik wyraża cel, gdy oba zdania mają ten sam podmiot. Damit używa się, gdy podmioty są różne.',
      sq: 'Um ... zu + paskajore shpreh qëllimin kur të dy fjalitë kanë të njëjtin subjekt. Damit përdoret kur subjektet janë të ndryshëm.',
      de: 'Um ... zu + Infinitiv drückt einen Zweck aus, wenn beide Sätze das gleiche Subjekt haben. Damit wird verwendet, wenn die Subjekte unterschiedlich sind.',
      ar: 'Um ... zu + المصدر يعبر عن الغرض عندما يكون لكلتا الجملتين نفس الفاعل. Damit تُستخدم عندما يكون الفاعلان مختلفين.',
      it: 'Um ... zu + infinito esprime lo scopo quando entrambe le frasi hanno lo stesso soggetto. Damit si usa quando i soggetti sono diversi.',
      sr: 'Um ... zu + инфинитив изражава намеру када обе реченице имају исти субјекат. Damit се користи када су субјекти различити.'
    },
    exercises: [
      {
        id: 'b1-1-umzu-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "um ... zu" or "damit".',
          uk: 'Заповніть "um ... zu" або "damit".',
          pl: 'Wpisz "um ... zu" lub "damit".',
          sq: 'Plotësoni "um ... zu" ose "damit".',
          de: 'Ergänzen Sie "um ... zu" oder "damit".',
          ar: 'أكمل بـ "um ... zu" أو "damit".',
          it: 'Inserisci "um ... zu" o "damit".',
          sr: 'Допуните "um ... zu" или "damit".'
        },
        context: 'Er nimmt ein Taxi, ___ nicht zu spät zu kommen.',
        correctAnswer: 'um'
      },
      {
        id: 'b1-1-umzu-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "um ... zu" or "damit".',
          uk: 'Заповніть "um ... zu" або "damit".',
          pl: 'Wpisz "um ... zu" lub "damit".',
          sq: 'Plotësoni "um ... zu" ose "damit".',
          de: 'Ergänzen Sie "um ... zu" oder "damit".',
          ar: 'أكمل بـ "um ... zu" أو "damit".',
          it: 'Inserisci "um ... zu" o "damit".',
          sr: 'Допуните "um ... zu" или "damit".'
        },
        context: 'Seine Frau ruft ein Taxi, ___ er nicht zu spät kommt.',
        correctAnswer: 'damit'
      },
      {
        id: 'b1-1-umzu-ex3',
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
        context: 'Er hat den Lebenslauf ausgedruckt. Er will ihn korrigieren.',
        options: [
          'Er hat den Lebenslauf ausgedruckt, um ihn zu korrigieren.',
          'Er hat den Lebenslauf ausgedruckt, damit ihn zu korrigieren.',
          'Er hat den Lebenslauf ausgedruckt, um ihn korrigieren.',
          'Er hat den Lebenslauf ausgedruckt, damit er ihn korrigieren.'
        ],
        correctAnswer: 'Er hat den Lebenslauf ausgedruckt, um ihn zu korrigieren.'
      }
    ]
  },
  {
    id: 'b1-1-anstatt-zu',
    moduleId: 3,
    title: {
      en: 'Anstatt ... zu + Infinitive / Nicht ..., sondern',
      uk: 'Anstatt ... zu + інфінітив / Nicht ..., sondern',
      pl: 'Anstatt ... zu + bezokolicznik / Nicht ..., sondern',
      sq: 'Anstatt ... zu + paskajore / Nicht ..., sondern',
      de: '(An)statt ... zu + Infinitiv / Nicht ..., sondern',
      ar: 'Anstatt ... zu + المصدر / Nicht ..., sondern',
      it: 'Anstatt ... zu + Infinito / Nicht ..., sondern',
      sr: 'Anstatt ... zu + инфинитив / Nicht ..., sondern'
    },
    description: {
      en: 'Anstatt ... zu + infinitive means "instead of doing something". Nicht ..., sondern means "not ..., but rather".',
      uk: 'Anstatt ... zu + інфінітив означає «замість того, щоб робити щось». Nicht ..., sondern означає «не ..., а».',
      pl: 'Anstatt ... zu + bezokolicznik oznacza "zamiast coś robić". Nicht ..., sondern oznacza "nie ..., lecz".',
      sq: 'Anstatt ... zu + paskajore do të thotë "në vend që të bësh diçka". Nicht ..., sondern do të thotë "jo ..., por".',
      de: '(An)statt ... zu + Infinitiv bedeutet "anstelle von etwas tun". Nicht ..., sondern bedeutet "nicht ..., aber".',
      ar: 'Anstatt ... zu + المصدر تعني "بدلاً من فعل شيء". Nicht ..., sondern تعني "ليس ...، بل".',
      it: 'Anstatt ... zu + infinito significa "invece di fare qualcosa". Nicht ..., sondern significa "non ..., ma piuttosto".',
      sr: 'Anstatt ... zu + инфинитив значи „уместо да се нешто ради". Nicht ..., sondern значи „не ..., већ".'
    },
    exercises: [
      {
        id: 'b1-1-anstatt-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Complete with anstatt ... zu.',
          uk: 'Доповніть anstatt ... zu.',
          pl: 'Uzupełnij anstatt ... zu.',
          sq: 'Plotësoni me anstatt ... zu.',
          de: 'Ergänzen Sie mit anstatt ... zu.',
          ar: 'أكمل بـ anstatt ... zu.',
          it: 'Completa con anstatt ... zu.',
          sr: 'Допуните са anstatt ... zu.'
        },
        context: '___ angemessene Kleidung zu tragen, trägt er Jeans und T-Shirt.',
        correctAnswer: 'Anstatt'
      },
      {
        id: 'b1-1-anstatt-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Complete with nicht ... sondern.',
          uk: 'Доповніть nicht ... sondern.',
          pl: 'Uzupełnij nicht ... sondern.',
          sq: 'Plotësoni me nicht ... sondern.',
          de: 'Ergänzen Sie mit nicht ... sondern.',
          ar: 'أكمل بـ nicht ... sondern.',
          it: 'Completa con nicht ... sondern.',
          sr: 'Допуните са nicht ... sondern.'
        },
        context: 'Er hört seiner Gesprächspartnerin ___ zu, ___ redet ohne Pause.',
        correctAnswer: 'nicht, sondern'
      }
    ]
  },

  // ============================================
  // MODULE 4: Damals, gestern, heute
  // ============================================
  {
    id: 'b1-1-als-wenn',
    moduleId: 4,
    title: {
      en: 'Als vs. Wenn (When - Past vs. Conditional)',
      uk: 'Als vs. Wenn (Коли - минуле vs. умовне)',
      pl: 'Als vs. Wenn (Kiedy - przeszłość vs. warunek)',
      sq: 'Als vs. Wenn (Kur - e kaluara vs. kusht)',
      de: 'Als vs. Wenn',
      ar: 'Als مقابل Wenn',
      it: 'Als vs. Wenn (Quando - passato vs. condizionale)',
      sr: 'Als наспрам Wenn (Када - прошлост наспрам услова)'
    },
    description: {
      en: 'Als is used for single past events. Wenn is used for repeated past events, hypothetical situations, or future/present conditions.',
      uk: 'Als використовується для одноразових минулих подій. Wenn — для повторюваних минулих подій, гіпотетичних ситуацій або умов у майбутньому/теперішньому.',
      pl: 'Als używamy dla pojedynczych wydarzeń w przeszłości. Wenn dla powtarzających się wydarzeń, sytuacji hipotetycznych lub warunków w przyszłości/teraźniejszości.',
      sq: 'Als përdoret për ngjarje të vetme në të kaluarën. Wenn për ngjarje të përsëritura, situata hipotetike ose kushte në të ardhmen/tashmen.',
      de: 'Als wird für einmalige Ereignisse in der Vergangenheit verwendet. Wenn für wiederholte Ereignisse, hypothetische Situationen oder Bedingungen in der Zukunft/Gegenwart.',
      ar: 'تُستخدم Als للأحداث الفردية في الماضي. Wenn للأحداث المتكررة، المواقف الافتراضية، أو الشروط في المستقبل/الحاضر.',
      it: 'Als si usa per eventi singoli nel passato. Wenn per eventi ripetuti, situazioni ipotetiche o condizioni nel futuro/presente.',
      sr: 'Als се користи за појединачне догађаје у прошлости. Wenn за поновљене догађаје, хипотетичке ситуације или услове у будућности/садашњости.'
    },
    exercises: [
      {
        id: 'b1-1-als-wenn-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "als" or "wenn".',
          uk: 'Заповніть "als" або "wenn".',
          pl: 'Wpisz "als" lub "wenn".',
          sq: 'Plotësoni "als" ose "wenn".',
          de: 'Ergänzen Sie "als" oder "wenn".',
          ar: 'أكمل بـ "als" أو "wenn".',
          it: 'Inserisci "als" o "wenn".',
          sr: 'Допуните "als" или "wenn".'
        },
        context: '___ ich ein Kind war, wohnten wir in Berlin.',
        correctAnswer: 'Als'
      },
      {
        id: 'b1-1-als-wenn-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "als" or "wenn".',
          uk: 'Заповніть "als" або "wenn".',
          pl: 'Wpisz "als" lub "wenn".',
          sq: 'Plotësoni "als" ose "wenn".',
          de: 'Ergänzen Sie "als" oder "wenn".',
          ar: 'أكمل بـ "als" أو "wenn".',
          it: 'Inserisci "als" o "wenn".',
          sr: 'Допуните "als" или "wenn".'
        },
        context: 'Früher ___ meine Oma uns besucht hat, hat sie immer Kuchen mitgebracht.',
        correctAnswer: 'wenn'
      },
      {
        id: 'b1-1-als-wenn-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "als" or "wenn".',
          uk: 'Заповніть "als" або "wenn".',
          pl: 'Wpisz "als" lub "wenn".',
          sq: 'Plotësoni "als" ose "wenn".',
          de: 'Ergänzen Sie "als" oder "wenn".',
          ar: 'أكمل بـ "als" أو "wenn".',
          it: 'Inserisci "als" o "wenn".',
          sr: 'Допуните "als" или "wenn".'
        },
        context: '___ die Sonne morgen scheint, gehe ich spazieren.',
        correctAnswer: 'Wenn'
      }
    ]
  },
  {
    id: 'b1-1-praeteritum',
    moduleId: 4,
    title: {
      en: 'Präteritum (Simple Past)',
      uk: 'Präteritum (Простий минулий час)',
      pl: 'Präteritum (Czas przeszły prosty)',
      sq: 'Präteritum (Koha e kryer e thjeshtë)',
      de: 'Präteritum',
      ar: 'الماضي البسيط',
      it: 'Präteritum (Passato semplice)',
      sr: 'Претеритум (Прошло просто време)'
    },
    description: {
      en: 'The Präteritum is mainly used in written German, especially in narratives and formal texts. Common in haben, sein, and modal verbs.',
      uk: 'Präteritum переважно використовується в письмовій німецькій мові, особливо в оповідях та офіційних текстах. Часто вживається з haben, sein та модальними дієсловами.',
      pl: 'Präteritum używany jest głównie w języku pisanym, szczególnie w narracjach i tekstach formalnych. Często z haben, sein i czasownikami modalnymi.',
      sq: 'Präteritum përdoret kryesisht në gjermanishten e shkruar, veçanërisht në tregime dhe tekste formale. Zakonisht me haben, sein dhe folje modale.',
      de: 'Das Präteritum wird hauptsächlich in der geschriebenen Sprache verwendet, besonders in Erzählungen und formellen Texten. Häufig bei haben, sein und Modalverben.',
      ar: 'يُستخدم الماضي البسيط بشكل رئيسي في الألمانية المكتوبة، خاصة في القصص والنصوص الرسمية. شائع مع haben وsein والأفعال المشروطة.',
      it: 'Il Präteritum si usa principalmente nel tedesco scritto, specialmente nelle narrazioni e nei testi formali. Comune con haben, sein e verbi modali.',
      sr: 'Претеритум се углавном користи у писаном немачком, посебно у нарацијама и формалним текстовима. Уобичајен са haben, sein и модалним глаголима.'
    },
    exercises: [
      {
        id: 'b1-1-praet-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the Präteritum form of "sein".',
          uk: 'Заповніть форму Präteritum дієслова "sein".',
          pl: 'Wpisz formę Präteritum czasownika "sein".',
          sq: 'Plotësoni formën Präteritum të "sein".',
          de: 'Ergänzen Sie die Präteritum-Form von "sein".',
          ar: 'أكمل صيغة الماضي البسيط لـ "sein".',
          it: 'Inserisci la forma del Präteritum di "sein".',
          sr: 'Допуните форму претеритума глагола "sein".'
        },
        context: 'Gestern ___ ich müde.',
        correctAnswer: 'war'
      },
      {
        id: 'b1-1-praet-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the Präteritum form of "haben".',
          uk: 'Заповніть форму Präteritum дієслова "haben".',
          pl: 'Wpisz formę Präteritum czasownika "haben".',
          sq: 'Plotësoni formën Präteritum të "haben".',
          de: 'Ergänzen Sie die Präteritum-Form von "haben".',
          ar: 'أكمل صيغة الماضي البسيط لـ "haben".',
          it: 'Inserisci la forma del Präteritum di "haben".',
          sr: 'Допуните форму претеритума глагола "haben".'
        },
        context: 'Er ___ keine Zeit.',
        correctAnswer: 'hatte'
      },
      {
        id: 'b1-1-praet-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the Präteritum form of "können".',
          uk: 'Заповніть форму Präteritum дієслова "können".',
          pl: 'Wpisz formę Präteritum czasownika "können".',
          sq: 'Plotësoni formën Präteritum të "können".',
          de: 'Ergänzen Sie die Präteritum-Form von "können".',
          ar: 'أكمل صيغة الماضي البسيط لـ "können".',
          it: 'Inserisci la forma del Präteritum di "können".',
          sr: 'Допуните форму претеритума глагола "können".'
        },
        context: 'Die Menschen ___ sich ein Auto nicht leisten.',
        correctAnswer: 'konnten'
      }
    ]
  },

  // ============================================
  // MODULE 5: Aus der Arbeitswelt
  // ============================================
  {
    id: 'b1-1-bevor-waehrend-nachdem',
    moduleId: 5,
    title: {
      en: 'Temporal Clauses: Bevor, Während, Nachdem',
      uk: 'Часові речення: Bevor, Während, Nachdem',
      pl: 'Zdania czasowe: Bevor, Während, Nachdem',
      sq: 'Fjali kohore: Bevor, Während, Nachdem',
      de: 'Nebensätze mit bevor, während und nachdem',
      ar: 'جمل زمنية: Bevor, Während, Nachdem',
      it: 'Frasi temporali: Bevor, Während, Nachdem',
      sr: 'Временске реченице: Bevor, Während, Nachdem'
    },
    description: {
      en: 'Bevor (before), während (while), nachdem (after) introduce temporal clauses. After nachdem, the verb is in Perfekt or Plusquamperfekt.',
      uk: 'Bevor (перед), während (поки), nachdem (після) вводять часові речення. Після nachdem дієслово у Perfekt або Plusquamperfekt.',
      pl: 'Bevor (zanim), während (podczas), nachdem (po tym jak) wprowadzają zdania czasowe. Po nachdem czasownik w Perfekt lub Plusquamperfekt.',
      sq: 'Bevor (para), während (ndërsa), nachdem (pasi) prezantojnë fjali kohore. Pas nachdem folja është në Perfekt ose Plusquamperfekt.',
      de: 'Bevor (bevor), während (während), nachdem (nachdem) leiten temporale Nebensätze ein. Nach nachdem steht das Verb im Perfekt oder Plusquamperfekt.',
      ar: 'Bevor (قبل)، während (بينما)، nachdem (بعد) تقدم جملاً زمنية. بعد nachdem، الفعل في Perfekt أو Plusquamperfekt.',
      it: 'Bevor (prima), während (mentre), nachdem (dopo) introducono frasi temporali. Dopo nachdem il verbo è al Perfekt o Plusquamperfekt.',
      sr: 'Bevor (пре), während (док), nachdem (пошто) уводе временске реченице. После nachdem глагол је у Perfekt или Plusquamperfekt.'
    },
    exercises: [
      {
        id: 'b1-1-temp-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "bevor", "während", or "nachdem".',
          uk: 'Заповніть "bevor", "während" або "nachdem".',
          pl: 'Wpisz "bevor", "während" lub "nachdem".',
          sq: 'Plotësoni "bevor", "während" ose "nachdem".',
          de: 'Ergänzen Sie "bevor", "während" oder "nachdem".',
          ar: 'أكمل بـ "bevor" أو "während" أو "nachdem".',
          it: 'Inserisci "bevor", "während" o "nachdem".',
          sr: 'Допуните "bevor", "während" или "nachdem".'
        },
        context: '___ Herr Moran die Bewerbung schreibt, liest er die Stellenanzeige.',
        correctAnswer: 'Bevor'
      },
      {
        id: 'b1-1-temp-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "bevor", "während", or "nachdem".',
          uk: 'Заповніть "bevor", "während" або "nachdem".',
          pl: 'Wpisz "bevor", "während" lub "nachdem".',
          sq: 'Plotësoni "bevor", "während" ose "nachdem".',
          de: 'Ergänzen Sie "bevor", "während" oder "nachdem".',
          ar: 'أكمل بـ "bevor" أو "während" أو "nachdem".',
          it: 'Inserisci "bevor", "während" o "nachdem".',
          sr: 'Допуните "bevor", "während" или "nachdem".'
        },
        context: '___ Herr Moran die Bewerbung schreibt, denkt er über seine Stärken nach.',
        correctAnswer: 'Während'
      },
      {
        id: 'b1-1-temp-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "bevor", "während", or "nachdem".',
          uk: 'Заповніть "bevor", "während" або "nachdem".',
          pl: 'Wpisz "bevor", "während" lub "nachdem".',
          sq: 'Plotësoni "bevor", "während" ose "nachdem".',
          de: 'Ergänzen Sie "bevor", "während" oder "nachdem".',
          ar: 'أكمل بـ "bevor" أو "während" أو "nachdem".',
          it: 'Inserisci "bevor", "während" o "nachdem".',
          sr: 'Допуните "bevor", "während" или "nachdem".'
        },
        context: '___ er die Bewerbung geschrieben hat, sortiert er die Unterlagen.',
        correctAnswer: 'Nachdem'
      }
    ]
  },
  {
    id: 'b1-1-adjektive-un-los',
    moduleId: 5,
    title: {
      en: 'Adjectives with un- and -los',
      uk: 'Прикметники з un- та -los',
      pl: 'Przymiotniki z un- i -los',
      sq: 'Mbiemra me un- dhe -los',
      de: 'Adjektive mit un- und -los',
      ar: 'صفات مع un- و-los',
      it: 'Aggettivi con un- e -los',
      sr: 'Придеви са un- и -los'
    },
    description: {
      en: 'The prefix un- negates adjectives (unsicher = not safe). The suffix -los means "without" (arbeitslos = without work).',
      uk: 'Префікс un- заперечує прикметники (unsicher = небезпечний). Суфікс -los означає «без» (arbeitslos = без роботи).',
      pl: 'Przedrostek un- neguje przymiotniki (unsicher = niepewny). Przyrostek -los oznacza "bez" (arbeitslos = bez pracy).',
      sq: 'Parashtesa un- mohon mbiemrat (unsicher = jo i sigurt). Prapashtesa -los do të thotë "pa" (arbeitslos = pa punë).',
      de: 'Die Vorsilbe un- verneint Adjektive (unsicher = nicht sicher). Die Nachsilbe -los bedeutet "ohne" (arbeitslos = ohne Arbeit).',
      ar: 'البادئة un- تنفي الصفات (unsicher = غير آمن). اللاحقة -los تعني "بدون" (arbeitslos = بدون عمل).',
      it: 'Il prefisso un- nega gli aggettivi (unsicher = non sicuro). Il suffisso -los significa "senza" (arbeitslos = senza lavoro).',
      sr: 'Префикс un- негира придеве (unsicher = несигуран). Суфикс -los значи „без" (arbeitslos = без посла).'
    },
    exercises: [
      {
        id: 'b1-1-unlos-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Form the adjective: keine Arbeit = ___',
          uk: 'Утворіть прикметник: keine Arbeit = ___',
          pl: 'Utwórz przymiotnik: keine Arbeit = ___',
          sq: 'Formoni mbiemrin: keine Arbeit = ___',
          de: 'Bilden Sie das Adjektiv: keine Arbeit = ___',
          ar: 'شكّل الصفة: keine Arbeit = ___',
          it: 'Forma l\'aggettivo: keine Arbeit = ___',
          sr: 'Формирајте придев: keine Arbeit = ___'
        },
        context: 'Sie hat keine Arbeit. Sie ist ___.',
        correctAnswer: 'arbeitslos'
      },
      {
        id: 'b1-1-unlos-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Form the adjective: nicht sicher = ___',
          uk: 'Утворіть прикметник: nicht sicher = ___',
          pl: 'Utwórz przymiotnik: nicht sicher = ___',
          sq: 'Formoni mbiemrin: nicht sicher = ___',
          de: 'Bilden Sie das Adjektiv: nicht sicher = ___',
          ar: 'شكّل الصفة: nicht sicher = ___',
          it: 'Forma l\'aggettivo: nicht sicher = ___',
          sr: 'Формирајте придев: nicht sicher = ___'
        },
        context: 'Die Arbeitsplätze sind nicht sicher. Sie sind ___.',
        correctAnswer: 'unsicher'
      },
      {
        id: 'b1-1-unlos-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Form the adjective: kein Erfolg = ___',
          uk: 'Утворіть прикметник: kein Erfolg = ___',
          pl: 'Utwórz przymiotnik: kein Erfolg = ___',
          sq: 'Formoni mbiemrin: kein Erfolg = ___',
          de: 'Bilden Sie das Adjektiv: kein Erfolg = ___',
          ar: 'شكّل الصفة: kein Erfolg = ___',
          it: 'Forma l\'aggettivo: kein Erfolg = ___',
          sr: 'Формирајте придев: kein Erfolg = ___'
        },
        context: 'Er hat keinen Erfolg. Er ist ___.',
        correctAnswer: 'erfolglos'
      }
    ]
  },
  {
    id: 'b1-1-nomen-adjektive',
    moduleId: 5,
    title: {
      en: 'Nouns Declined Like Adjectives',
      uk: 'Іменники, що відмінюються як прикметники',
      pl: 'Rzeczowniki odmieniane jak przymiotniki',
      sq: 'Emra që lakohen si mbiemra',
      de: 'Nomen, die man wie Adjektive dekliniert',
      ar: 'أسماء تُصرّف كالصفات',
      it: 'Sostantivi declinati come aggettivi',
      sr: 'Именице које се деклинирају као придеви'
    },
    description: {
      en: 'Some nouns (der Angestellte, der Vorsitzende, der Deutsche) are declined like adjectives. Their endings change based on article and case.',
      uk: 'Деякі іменники (der Angestellte, der Vorsitzende, der Deutsche) відмінюються як прикметники. Їхні закінчення змінюються залежно від артикля та відмінка.',
      pl: 'Niektóre rzeczowniki (der Angestellte, der Vorsitzende, der Deutsche) odmieniają się jak przymiotniki. Ich końcówki zmieniają się w zależności od rodzajnika i przypadka.',
      sq: 'Disa emra (der Angestellte, der Vorsitzende, der Deutsche) lakohen si mbiemra. Mbaresë e tyre ndryshon sipas nyjës dhe rasës.',
      de: 'Einige Nomen (der Angestellte, der Vorsitzende, der Deutsche) werden wie Adjektive dekliniert. Ihre Endungen ändern sich je nach Artikel und Kasus.',
      ar: 'بعض الأسماء (der Angestellte, der Vorsitzende, der Deutsche) تُصرّف كالصفات. نهاياتها تتغير حسب الأداة والحالة.',
      it: 'Alcuni sostantivi (der Angestellte, der Vorsitzende, der Deutsche) si declinano come aggettivi. Le loro desinenze cambiano in base all\'articolo e al caso.',
      sr: 'Неке именице (der Angestellte, der Vorsitzende, der Deutsche) се деклинирају као придеви. Њихови наставци се мењају у зависности од члана и падежа.'
    },
    exercises: [
      {
        id: 'b1-1-nom-adj-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form.',
          uk: 'Заповніть правильну форму.',
          pl: 'Wpisz poprawną formę.',
          sq: 'Plotësoni formën e saktë.',
          de: 'Ergänzen Sie die richtige Form.',
          ar: 'أكمل الصيغة الصحيحة.',
          it: 'Inserisci la forma corretta.',
          sr: 'Допуните тачну форму.'
        },
        context: 'Von den 1.500 Beschäftigt___ müssen 500 den Betrieb verlassen.',
        correctAnswer: 'en'
      },
      {
        id: 'b1-1-nom-adj-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form.',
          uk: 'Заповніть правильну форму.',
          pl: 'Wpisz poprawną formę.',
          sq: 'Plotësoni formën e saktë.',
          de: 'Ergänzen Sie die richtige Form.',
          ar: 'أكمل الصيغة الصحيحة.',
          it: 'Inserisci la forma corretta.',
          sr: 'Допуните тачну форму.'
        },
        context: 'Der Vorsitzend___ des Betriebsrats ist nicht ganz zufrieden.',
        correctAnswer: 'e'
      },
      {
        id: 'b1-1-nom-adj-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form.',
          uk: 'Заповніть правильну форму.',
          pl: 'Wpisz poprawną formę.',
          sq: 'Plotësoni formën e saktë.',
          de: 'Ergänzen Sie die richtige Form.',
          ar: 'أكمل الصيغة الصحيحة.',
          it: 'Inserisci la forma corretta.',
          sr: 'Допуните тачну форму.'
        },
        context: 'Leider verlieren 100 Angestellt___ in der Verwaltung ihren Arbeitsplatz.',
        correctAnswer: 'e'
      }
    ]
  },

  // ============================================
  // MODULE 6: Wünsche
  // ============================================
  {
    id: 'b1-1-konjunktiv-ii',
    moduleId: 6,
    title: {
      en: 'Konjunktiv II (Subjunctive II)',
      uk: 'Konjunktiv II (Умовний спосіб II)',
      pl: 'Konjunktiv II (Tryb przypuszczający II)',
      sq: 'Konjunktiv II (Mënyra dëshirore II)',
      de: 'Konjunktiv II',
      ar: 'الشرطية II',
      it: 'Congiuntivo II',
      sr: 'Конјунктив II (Потенцијал)'
    },
    description: {
      en: 'The Konjunktiv II is used for wishes, hypothetical situations, and polite requests. Forms: würde + infinitive, hätte, wäre, könnte, sollte.',
      uk: 'Konjunktiv II використовується для побажань, гіпотетичних ситуацій та ввічливих прохань. Форми: würde + інфінітив, hätte, wäre, könnte, sollte.',
      pl: 'Konjunktiv II używany jest do wyrażania życzeń, sytuacji hipotetycznych i grzecznych próśb. Formy: würde + bezokolicznik, hätte, wäre, könnte, sollte.',
      sq: 'Konjunktiv II përdoret për dëshira, situata hipotetike dhe kërkesa të sjellshme. Format: würde + paskajore, hätte, wäre, könnte, sollte.',
      de: 'Der Konjunktiv II wird für Wünsche, hypothetische Situationen und höfliche Bitten verwendet. Formen: würde + Infinitiv, hätte, wäre, könnte, sollte.',
      ar: 'يُستخدم الشرطية II للتمنيات والمواقف الافتراضية والطلبات المهذبة. الصيغ: würde + المصدر، hätte، wäre، könnte، sollte.',
      it: 'Il Congiuntivo II si usa per desideri, situazioni ipotetiche e richieste cortesi. Forme: würde + infinito, hätte, wäre, könnte, sollte.',
      sr: 'Конјунктив II се користи за жеље, хипотетичке ситуације и учтиве молбе. Форме: würde + инфинитив, hätte, wäre, könnte, sollte.'
    },
    exercises: [
      {
        id: 'b1-1-konj2-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct Konjunktiv II form of "haben".',
          uk: 'Заповніть правильну форму Konjunktiv II дієслова "haben".',
          pl: 'Wpisz poprawną formę Konjunktiv II czasownika "haben".',
          sq: 'Plotësoni formën e saktë të Konjunktiv II të "haben".',
          de: 'Ergänzen Sie die richtige Konjunktiv II-Form von "haben".',
          ar: 'أكمل صيغة الشرطية II الصحيحة لـ "haben".',
          it: 'Inserisci la forma corretta del Congiuntivo II di "haben".',
          sr: 'Допуните тачну форму Конјунктива II глагола "haben".'
        },
        context: 'Wenn ich mehr Zeit ___, würde ich mehr lesen.',
        correctAnswer: 'hätte'
      },
      {
        id: 'b1-1-konj2-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct Konjunktiv II form of "sein".',
          uk: 'Заповніть правильну форму Konjunktiv II дієслова "sein".',
          pl: 'Wpisz poprawną formę Konjunktiv II czasownika "sein".',
          sq: 'Plotësoni formën e saktë të Konjunktiv II të "sein".',
          de: 'Ergänzen Sie die richtige Konjunktiv II-Form von "sein".',
          ar: 'أكمل صيغة الشرطية II الصحيحة لـ "sein".',
          it: 'Inserisci la forma corretta del Congiuntivo II di "sein".',
          sr: 'Допуните тачну форму Конјунктива II глагола "sein".'
        },
        context: 'Wenn es warm ___, würde ich im See baden gehen.',
        correctAnswer: 'wäre'
      },
      {
        id: 'b1-1-konj2-ex3',
        type: 'multiple-choice',
        question: {
          en: 'Which sentence uses Konjunktiv II correctly?',
          uk: 'Яке речення правильно використовує Konjunktiv II?',
          pl: 'Które zdanie poprawnie używa Konjunktiv II?',
          sq: 'Cila fjali përdor Konjunktiv II saktë?',
          de: 'Welcher Satz verwendet den Konjunktiv II richtig?',
          ar: 'أي جملة تستخدم الشرطية II بشكل صحيح؟',
          it: 'Quale frase usa correttamente il Congiuntivo II?',
          sr: 'Која реченица правилно користи Конјунктив II?'
        },
        context: 'Wählen Sie den richtigen Satz.',
        options: [
          'Wenn ich reich bin, kaufe ich ein Auto.',
          'Wenn ich reich wäre, würde ich ein Auto kaufen.',
          'Wenn ich reich war, kaufte ich ein Auto.',
          'Wenn ich reich sein, kaufen ich ein Auto.'
        ],
        correctAnswer: 'Wenn ich reich wäre, würde ich ein Auto kaufen.'
      },
      {
        id: 'b1-1-konj2-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Express a polite suggestion using Konjunktiv II.',
          uk: 'Висловіть ввічливу пропозицію за допомогою Konjunktiv II.',
          pl: 'Wyraź grzeczną sugestię używając Konjunktiv II.',
          sq: 'Shprehni një sugjerim të sjellshëm duke përdorur Konjunktiv II.',
          de: 'Drücken Sie einen höflichen Vorschlag mit Konjunktiv II aus.',
          ar: 'عبّر عن اقتراح مهذب باستخدام الشرطية II.',
          it: 'Esprimi un suggerimento cortese usando il Congiuntivo II.',
          sr: 'Изразите учтив предлог користећи Конјунктив II.'
        },
        context: 'Du ___ mehr Obst essen. (sollen)',
        correctAnswer: 'solltest'
      },
      {
        id: 'b1-1-konj2-ex5',
        type: 'fill-in-the-blank',
        question: {
          en: 'Express a wish using Konjunktiv II.',
          uk: 'Висловіть бажання за допомогою Konjunktiv II.',
          pl: 'Wyraź życzenie używając Konjunktiv II.',
          sq: 'Shprehni një dëshirë duke përdorur Konjunktiv II.',
          de: 'Drücken Sie einen Wunsch mit Konjunktiv II aus.',
          ar: 'عبّر عن أمنية باستخدام الشرطية II.',
          it: 'Esprimi un desiderio usando il Congiuntivo II.',
          sr: 'Изразите жељу користећи Конјунктив II.'
        },
        context: 'Ich ___ gern mehrere Sprachen sprechen. (würde)',
        correctAnswer: 'würde'
      }
    ]
  },

  // ============================================
  // ADDITIONAL GRAMMAR TOPICS
  // ============================================

  // Reflexive Verben mit Präpositionen
  {
    id: 'b1-1-reflexive-praep',
    moduleId: 2,
    title: {
      en: 'Reflexive Verbs with Prepositions',
      uk: 'Зворотні дієслова з прийменниками',
      pl: 'Czasowniki zwrotne z przyimkami',
      sq: 'Foljet refleksive me parafjalë',
      de: 'Reflexive Verben mit Präpositionen',
      ar: 'الأفعال الانعكاسية مع حروف الجر',
      it: 'Verbi riflessivi con preposizioni',
      sr: 'Повратни глаголи са предлозима'
    },
    description: {
      en: 'Many reflexive verbs require specific prepositions: sich freuen auf (to look forward to), sich freuen über (to be happy about), sich interessieren für (to be interested in), sich ärgern über (to be annoyed about).',
      uk: 'Багато зворотних дієслів вимагають певних прийменників: sich freuen auf (чекати з нетерпінням), sich freuen über (радіти чомусь), sich interessieren für (цікавитися), sich ärgern über (злитися на).',
      pl: 'Wiele czasowników zwrotnych wymaga określonych przyimków: sich freuen auf (cieszyć się na), sich freuen über (cieszyć się z), sich interessieren für (interesować się), sich ärgern über (złościć się na).',
      sq: 'Shumë folje refleksive kërkojnë parafjalë specifike: sich freuen auf (të presësh me padurim), sich freuen über (të gëzohesh për), sich interessieren für (të interesohesh për), sich ärgern über (të mërzitesh për).',
      de: 'Viele reflexive Verben brauchen bestimmte Präpositionen: sich freuen auf (Vorfreude), sich freuen über (Freude über etwas), sich interessieren für (Interesse), sich ärgern über (Ärger).',
      ar: 'تتطلب العديد من الأفعال الانعكاسية حروف جر محددة: sich freuen auf (يتطلع إلى), sich freuen über (يسعد بـ), sich interessieren für (يهتم بـ), sich ärgern über (يغضب من).',
      it: 'Molti verbi riflessivi richiedono preposizioni specifiche: sich freuen auf (non vedere l\'ora di), sich freuen über (essere felice di), sich interessieren für (interessarsi a), sich ärgern über (arrabbiarsi per).',
      sr: 'Многи повратни глаголи захтевају одређене предлоге: sich freuen auf (радовати се нечему), sich freuen über (бити срећан због), sich interessieren für (интересовати се за), sich ärgern über (љутити се на).'
    },
    exercises: [
      {
        id: 'b1-1-refl-praep-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните тачан предлог.'
        },
        context: 'Ich freue mich ___ meinen Urlaub nächste Woche.',
        correctAnswer: 'auf'
      },
      {
        id: 'b1-1-refl-praep-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните тачан предлог.'
        },
        context: 'Sie interessiert sich ___ moderne Kunst.',
        correctAnswer: 'für'
      },
      {
        id: 'b1-1-refl-praep-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните тачан предлог.'
        },
        context: 'Er ärgert sich ___ seinen Nachbarn.',
        correctAnswer: 'über'
      },
      {
        id: 'b1-1-refl-praep-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните тачан предлог.'
        },
        context: 'Wir haben uns ___ das Geschenk gefreut.',
        correctAnswer: 'über'
      },
      {
        id: 'b1-1-refl-praep-ex5',
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
        context: 'Choose the correct sentence.',
        options: [
          'Ich erinnere mich auf meinen ersten Schultag.',
          'Ich erinnere mich an meinen ersten Schultag.',
          'Ich erinnere mich für meinen ersten Schultag.',
          'Ich erinnere mich über meinen ersten Schultag.'
        ],
        correctAnswer: 'Ich erinnere mich an meinen ersten Schultag.'
      }
    ]
  },

  // Relativsätze
  {
    id: 'b1-1-relativsaetze',
    moduleId: 3,
    title: {
      en: 'Relative Clauses (Relativsätze)',
      uk: 'Відносні речення (Relativsätze)',
      pl: 'Zdania względne (Relativsätze)',
      sq: 'Fjali relative (Relativsätze)',
      de: 'Relativsätze',
      ar: 'الجمل الموصولة',
      it: 'Frasi relative (Relativsätze)',
      sr: 'Односне реченице (Relativsätze)'
    },
    description: {
      en: 'Relative clauses describe nouns. The relative pronoun (der, die, das, etc.) agrees in gender and number with the noun, but its case depends on its function in the relative clause. The verb goes to the end.',
      uk: 'Відносні речення описують іменники. Відносний займенник (der, die, das тощо) узгоджується в роді й числі з іменником, але його відмінок залежить від функції у відносному реченні. Дієслово стоїть в кінці.',
      pl: 'Zdania względne opisują rzeczowniki. Zaimek względny (der, die, das itd.) zgadza się w rodzaju i liczbie z rzeczownikiem, ale jego przypadek zależy od funkcji w zdaniu względnym. Czasownik stoi na końcu.',
      sq: 'Fjali relative përshkruajnë emra. Përemri relativ (der, die, das etj.) përshtatet në gjini dhe numër me emrin, por rasa e tij varet nga funksioni në fjali relative. Folja shkon në fund.',
      de: 'Relativsätze beschreiben Nomen. Das Relativpronomen (der, die, das usw.) stimmt in Genus und Numerus mit dem Nomen überein, aber sein Kasus hängt von seiner Funktion im Relativsatz ab. Das Verb steht am Ende.',
      ar: 'الجمل الموصولة تصف الأسماء. الضمير الموصول (der, die, das إلخ) يتوافق في الجنس والعدد مع الاسم، لكن حالته تعتمد على وظيفته في الجملة الموصولة. الفعل في النهاية.',
      it: 'Le frasi relative descrivono i sostantivi. Il pronome relativo (der, die, das ecc.) concorda in genere e numero con il sostantivo, ma il suo caso dipende dalla sua funzione nella frase relativa. Il verbo va alla fine.',
      sr: 'Односне реченице описују именице. Односна заменица (der, die, das итд.) слаже се у роду и броју са именицом, али њен падеж зависи од њене функције у односној реченици. Глагол иде на крај.'
    },
    exercises: [
      {
        id: 'b1-1-relativ-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct relative pronoun (Nominative).',
          uk: 'Заповніть правильний відносний займенник (Називний).',
          pl: 'Wpisz poprawny zaimek względny (Mianownik).',
          sq: 'Plotësoni përemrin relativ të saktë (Emërore).',
          de: 'Ergänzen Sie das richtige Relativpronomen (Nominativ).',
          ar: 'أكمل الضمير الموصول الصحيح (حالة الرفع).',
          it: 'Inserisci il pronome relativo corretto (Nominativo).',
          sr: 'Допуните тачну односну заменицу (Номинатив).'
        },
        context: 'Das ist der Mann, ___ mir geholfen hat.',
        correctAnswer: 'der'
      },
      {
        id: 'b1-1-relativ-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct relative pronoun (Accusative).',
          uk: 'Заповніть правильний відносний займенник (Знахідний).',
          pl: 'Wpisz poprawny zaimek względny (Biernik).',
          sq: 'Plotësoni përemrin relativ të saktë (Kallëzore).',
          de: 'Ergänzen Sie das richtige Relativpronomen (Akkusativ).',
          ar: 'أكمل الضمير الموصول الصحيح (حالة النصب).',
          it: 'Inserisci il pronome relativo corretto (Accusativo).',
          sr: 'Допуните тачну односну заменицу (Акузатив).'
        },
        context: 'Wie heißt die Frau, ___ du gestern getroffen hast?',
        correctAnswer: 'die'
      },
      {
        id: 'b1-1-relativ-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct relative pronoun (Dative).',
          uk: 'Заповніть правильний відносний займенник (Давальний).',
          pl: 'Wpisz poprawny zaimek względny (Celownik).',
          sq: 'Plotësoni përemrin relativ të saktë (Dhanore).',
          de: 'Ergänzen Sie das richtige Relativpronomen (Dativ).',
          ar: 'أكمل الضمير الموصول الصحيح (حالة الجر).',
          it: 'Inserisci il pronome relativo corretto (Dativo).',
          sr: 'Допуните тачну односну заменицу (Датив).'
        },
        context: 'Das ist die Kollegin, ___ ich das Buch geliehen habe.',
        correctAnswer: 'der'
      },
      {
        id: 'b1-1-relativ-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct relative pronoun (Plural).',
          uk: 'Заповніть правильний відносний займенник (Множина).',
          pl: 'Wpisz poprawny zaimek względny (Liczba mnoga).',
          sq: 'Plotësoni përemrin relativ të saktë (Shumës).',
          de: 'Ergänzen Sie das richtige Relativpronomen (Plural).',
          ar: 'أكمل الضمير الموصول الصحيح (الجمع).',
          it: 'Inserisci il pronome relativo corretto (Plurale).',
          sr: 'Допуните тачну односну заменицу (Множина).'
        },
        context: 'Das sind die Bücher, ___ ich lesen möchte.',
        correctAnswer: 'die'
      },
      {
        id: 'b1-1-relativ-ex5',
        type: 'multiple-choice',
        question: {
          en: 'Which sentence uses the relative pronoun correctly?',
          uk: 'Яке речення правильно використовує відносний займенник?',
          pl: 'Które zdanie poprawnie używa zaimka względnego?',
          sq: 'Cila fjali përdor përemrin relativ saktë?',
          de: 'Welcher Satz verwendet das Relativpronomen richtig?',
          ar: 'أي جملة تستخدم الضمير الموصول بشكل صحيح؟',
          it: 'Quale frase usa correttamente il pronome relativo?',
          sr: 'Која реченица правилно користи односну заменицу?'
        },
        context: 'Choose the correct sentence.',
        options: [
          'Das Haus, in der ich wohne, ist alt.',
          'Das Haus, in dem ich wohne, ist alt.',
          'Das Haus, in das ich wohne, ist alt.',
          'Das Haus, in die ich wohne, ist alt.'
        ],
        correctAnswer: 'Das Haus, in dem ich wohne, ist alt.'
      }
    ]
  },

  // Passiv Präsens
  {
    id: 'b1-1-passiv',
    moduleId: 4,
    title: {
      en: 'Passive Voice (Vorgangspassiv)',
      uk: 'Пасивний стан (Vorgangspassiv)',
      pl: 'Strona bierna (Vorgangspassiv)',
      sq: 'Pësore (Vorgangspassiv)',
      de: 'Passiv (Vorgangspassiv)',
      ar: 'المبني للمجهول',
      it: 'Voce passiva (Vorgangspassiv)',
      sr: 'Пасив (Vorgangspassiv)'
    },
    description: {
      en: 'The passive voice emphasizes the action, not who does it. Formation: werden + Partizip II. Present: Das Auto wird repariert. Past: Das Auto wurde repariert.',
      uk: 'Пасивний стан підкреслює дію, а не того, хто її виконує. Утворення: werden + Partizip II. Теперішній час: Das Auto wird repariert. Минулий час: Das Auto wurde repariert.',
      pl: 'Strona bierna podkreśla czynność, nie wykonawcę. Tworzenie: werden + Partizip II. Czas teraźniejszy: Das Auto wird repariert. Czas przeszły: Das Auto wurde repariert.',
      sq: 'Pësore thekson veprimin, jo kush e bën. Formimi: werden + Partizip II. E tashme: Das Auto wird repariert. E shkuar: Das Auto wurde repariert.',
      de: 'Das Passiv betont die Handlung, nicht wer sie ausführt. Bildung: werden + Partizip II. Präsens: Das Auto wird repariert. Präteritum: Das Auto wurde repariert.',
      ar: 'المبني للمجهول يؤكد الفعل، ليس من يقوم به. التكوين: werden + Partizip II. المضارع: Das Auto wird repariert. الماضي: Das Auto wurde repariert.',
      it: 'La voce passiva enfatizza l\'azione, non chi la compie. Formazione: werden + Partizip II. Presente: Das Auto wird repariert. Passato: Das Auto wurde repariert.',
      sr: 'Пасив наглашава радњу, а не ко је врши. Формирање: werden + Partizip II. Садашњост: Das Auto wird repariert. Прошлост: Das Auto wurde repariert.'
    },
    exercises: [
      {
        id: 'b1-1-passiv-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Convert to passive: Man repariert das Auto. → Das Auto ___ repariert.',
          uk: 'Перетворіть на пасив: Man repariert das Auto. → Das Auto ___ repariert.',
          pl: 'Zamień na stronę bierną: Man repariert das Auto. → Das Auto ___ repariert.',
          sq: 'Ktheni në pësore: Man repariert das Auto. → Das Auto ___ repariert.',
          de: 'Bilden Sie das Passiv: Man repariert das Auto. → Das Auto ___ repariert.',
          ar: 'حوّل إلى المبني للمجهول: Man repariert das Auto. → Das Auto ___ repariert.',
          it: 'Converti in passivo: Man repariert das Auto. → Das Auto ___ repariert.',
          sr: 'Претворите у пасив: Man repariert das Auto. → Das Auto ___ repariert.'
        },
        context: 'Das Auto ___ repariert.',
        correctAnswer: 'wird'
      },
      {
        id: 'b1-1-passiv-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct passive form (Präteritum).',
          uk: 'Заповніть правильну форму пасиву (Präteritum).',
          pl: 'Wpisz poprawną formę strony biernej (Präteritum).',
          sq: 'Plotësoni formën e saktë të pësores (Präteritum).',
          de: 'Ergänzen Sie die richtige Passivform (Präteritum).',
          ar: 'أكمل صيغة المبني للمجهول الصحيحة (الماضي).',
          it: 'Inserisci la forma passiva corretta (Präteritum).',
          sr: 'Допуните тачну форму пасива (Präteritum).'
        },
        context: 'Das Haus ___ letztes Jahr gebaut.',
        correctAnswer: 'wurde'
      },
      {
        id: 'b1-1-passiv-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct passive form (Plural).',
          uk: 'Заповніть правильну форму пасиву (Множина).',
          pl: 'Wpisz poprawną formę strony biernej (Liczba mnoga).',
          sq: 'Plotësoni formën e saktë të pësores (Shumës).',
          de: 'Ergänzen Sie die richtige Passivform (Plural).',
          ar: 'أكمل صيغة المبني للمجهول الصحيحة (الجمع).',
          it: 'Inserisci la forma passiva corretta (Plurale).',
          sr: 'Допуните тачну форму пасива (Множина).'
        },
        context: 'Die E-Mails ___ jeden Tag gelesen.',
        correctAnswer: 'werden'
      },
      {
        id: 'b1-1-passiv-ex4',
        type: 'multiple-choice',
        question: {
          en: 'Which sentence is in passive voice?',
          uk: 'Яке речення в пасивному стані?',
          pl: 'Które zdanie jest w stronie biernej?',
          sq: 'Cila fjali është në pësore?',
          de: 'Welcher Satz steht im Passiv?',
          ar: 'أي جملة في المبني للمجهول؟',
          it: 'Quale frase è in voce passiva?',
          sr: 'Која реченица је у пасиву?'
        },
        context: 'Wählen Sie den Passivsatz.',
        options: [
          'Der Mechaniker repariert das Auto.',
          'Das Auto wird vom Mechaniker repariert.',
          'Das Auto ist kaputt.',
          'Der Mechaniker hat das Auto repariert.'
        ],
        correctAnswer: 'Das Auto wird vom Mechaniker repariert.'
      },
      {
        id: 'b1-1-passiv-ex5',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in with "von" or "durch".',
          uk: 'Заповніть "von" або "durch".',
          pl: 'Wpisz "von" lub "durch".',
          sq: 'Plotësoni "von" ose "durch".',
          de: 'Ergänzen Sie "von" oder "durch".',
          ar: 'أكمل بـ "von" أو "durch".',
          it: 'Inserisci "von" o "durch".',
          sr: 'Допуните "von" или "durch".'
        },
        context: 'Das Fenster wurde ___ den Sturm zerstört.',
        correctAnswer: 'durch'
      }
    ]
  },

  // Indirekte Fragen
  {
    id: 'b1-1-indirekte-fragen',
    moduleId: 2,
    title: {
      en: 'Indirect Questions',
      uk: 'Непрямі запитання',
      pl: 'Pytania pośrednie',
      sq: 'Pyetje të tërthorta',
      de: 'Indirekte Fragen',
      ar: 'الأسئلة غير المباشرة',
      it: 'Domande indirette',
      sr: 'Индиректна питања'
    },
    description: {
      en: 'Indirect questions are subordinate clauses. W-questions use the question word; yes/no questions use "ob". The verb goes to the end: Ich weiß nicht, wann er kommt. Ich frage mich, ob er kommt.',
      uk: 'Непрямі запитання — це підрядні речення. Запитання з питальним словом використовують це слово; запитання так/ні використовують "ob". Дієслово в кінці: Ich weiß nicht, wann er kommt. Ich frage mich, ob er kommt.',
      pl: 'Pytania pośrednie to zdania podrzędne. Pytania z zaimkiem pytającym używają tego zaimka; pytania tak/nie używają "ob". Czasownik na końcu: Ich weiß nicht, wann er kommt. Ich frage mich, ob er kommt.',
      sq: 'Pyetjet e tërthorta janë fjali të varura. Pyetjet me W- përdorin fjalën pyetëse; pyetjet po/jo përdorin "ob". Folja në fund: Ich weiß nicht, wann er kommt. Ich frage mich, ob er kommt.',
      de: 'Indirekte Fragen sind Nebensätze. W-Fragen verwenden das Fragewort; Ja/Nein-Fragen verwenden "ob". Das Verb steht am Ende: Ich weiß nicht, wann er kommt. Ich frage mich, ob er kommt.',
      ar: 'الأسئلة غير المباشرة جمل فرعية. أسئلة W تستخدم كلمة السؤال؛ أسئلة نعم/لا تستخدم "ob". الفعل في النهاية.',
      it: 'Le domande indirette sono frasi subordinate. Le domande con W usano la parola interrogativa; le domande sì/no usano "ob". Il verbo va alla fine.',
      sr: 'Индиректна питања су зависне реченице. W-питања користе упитну реч; да/не питања користе "ob". Глагол иде на крај: Ich weiß nicht, wann er kommt. Ich frage mich, ob er kommt.'
    },
    exercises: [
      {
        id: 'b1-1-indir-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Convert to indirect question: Wann kommt der Bus?',
          uk: 'Перетворіть на непряме запитання: Wann kommt der Bus?',
          pl: 'Zamień na pytanie pośrednie: Wann kommt der Bus?',
          sq: 'Ktheni në pyetje të tërthortë: Wann kommt der Bus?',
          de: 'Bilden Sie eine indirekte Frage: Wann kommt der Bus?',
          ar: 'حوّل إلى سؤال غير مباشر: Wann kommt der Bus?',
          it: 'Converti in domanda indiretta: Wann kommt der Bus?',
          sr: 'Претворите у индиректно питање: Wann kommt der Bus?'
        },
        context: 'Ich weiß nicht, ___ der Bus kommt.',
        correctAnswer: 'wann'
      },
      {
        id: 'b1-1-indir-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Convert to indirect question: Kommt er heute?',
          uk: 'Перетворіть на непряме запитання: Kommt er heute?',
          pl: 'Zamień na pytanie pośrednie: Kommt er heute?',
          sq: 'Ktheni në pyetje të tërthortë: Kommt er heute?',
          de: 'Bilden Sie eine indirekte Frage: Kommt er heute?',
          ar: 'حوّل إلى سؤال غير مباشر: Kommt er heute?',
          it: 'Converti in domanda indiretta: Kommt er heute?',
          sr: 'Претворите у индиректно питање: Kommt er heute?'
        },
        context: 'Ich frage mich, ___ er heute kommt.',
        correctAnswer: 'ob'
      },
      {
        id: 'b1-1-indir-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Convert to indirect question: Wo wohnt Maria?',
          uk: 'Перетворіть на непряме запитання: Wo wohnt Maria?',
          pl: 'Zamień na pytanie pośrednie: Wo wohnt Maria?',
          sq: 'Ktheni në pyetje të tërthortë: Wo wohnt Maria?',
          de: 'Bilden Sie eine indirekte Frage: Wo wohnt Maria?',
          ar: 'حوّل إلى سؤال غير مباشر: Wo wohnt Maria?',
          it: 'Converti in domanda indiretta: Wo wohnt Maria?',
          sr: 'Претворите у индиректно питање: Wo wohnt Maria?'
        },
        context: 'Kannst du mir sagen, ___ Maria wohnt?',
        correctAnswer: 'wo'
      },
      {
        id: 'b1-1-indir-ex4',
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
        context: 'Ich möchte wissen, ... (Hat er Zeit?)',
        options: [
          'Ich möchte wissen, hat er Zeit.',
          'Ich möchte wissen, ob hat er Zeit.',
          'Ich möchte wissen, ob er Zeit hat.',
          'Ich möchte wissen, er hat Zeit ob.'
        ],
        correctAnswer: 'Ich möchte wissen, ob er Zeit hat.'
      },
      {
        id: 'b1-1-indir-ex5',
        type: 'fill-in-the-blank',
        question: {
          en: 'Convert to indirect question: Warum ist er nicht gekommen?',
          uk: 'Перетворіть на непряме запитання: Warum ist er nicht gekommen?',
          pl: 'Zamień na pytanie pośrednie: Warum ist er nicht gekommen?',
          sq: 'Ktheni në pyetje të tërthortë: Warum ist er nicht gekommen?',
          de: 'Bilden Sie eine indirekte Frage: Warum ist er nicht gekommen?',
          ar: 'حوّل إلى سؤال غير مباشر: Warum ist er nicht gekommen?',
          it: 'Converti in domanda indiretta: Warum ist er nicht gekommen?',
          sr: 'Претворите у индиректно питање: Warum ist er nicht gekommen?'
        },
        context: 'Ich verstehe nicht, ___ er nicht gekommen ist.',
        correctAnswer: 'warum'
      }
    ]
  },

  // Plusquamperfekt
  {
    id: 'b1-1-plusquamperfekt',
    moduleId: 4,
    title: {
      en: 'Past Perfect (Plusquamperfekt)',
      uk: 'Давноминулий час (Plusquamperfekt)',
      pl: 'Czas zaprzeszły (Plusquamperfekt)',
      sq: 'E kryera e tejshkuar (Plusquamperfekt)',
      de: 'Plusquamperfekt',
      ar: 'الماضي التام',
      it: 'Trapassato prossimo (Plusquamperfekt)',
      sr: 'Давнопрошло време (Plusquamperfekt)'
    },
    description: {
      en: 'The Plusquamperfekt describes an action that happened before another past action. Formation: hatte/war + Partizip II. Often used with "nachdem": Nachdem ich gegessen hatte, ging ich schlafen.',
      uk: 'Plusquamperfekt описує дію, яка відбулася перед іншою минулою дією. Утворення: hatte/war + Partizip II. Часто з "nachdem": Nachdem ich gegessen hatte, ging ich schlafen.',
      pl: 'Plusquamperfekt opisuje czynność, która wydarzyła się przed inną przeszłą czynnością. Tworzenie: hatte/war + Partizip II. Często z "nachdem": Nachdem ich gegessen hatte, ging ich schlafen.',
      sq: 'Plusquamperfekt përshkruan një veprim që ndodhi para një veprimi tjetër të shkuar. Formimi: hatte/war + Partizip II. Shpesh me "nachdem".',
      de: 'Das Plusquamperfekt beschreibt eine Handlung, die vor einer anderen vergangenen Handlung passiert ist. Bildung: hatte/war + Partizip II. Oft mit "nachdem".',
      ar: 'يصف الماضي التام فعلاً حدث قبل فعل ماضٍ آخر. التكوين: hatte/war + Partizip II. غالباً مع "nachdem".',
      it: 'Il Plusquamperfekt descrive un\'azione avvenuta prima di un\'altra azione passata. Formazione: hatte/war + Partizip II. Spesso con "nachdem".',
      sr: 'Plusquamperfekt описује радњу која се десила пре друге прошле радње. Грађење: hatte/war + Partizip II. Често се користи са "nachdem": Nachdem ich gegessen hatte, ging ich schlafen.'
    },
    exercises: [
      {
        id: 'b1-1-plusq-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct Plusquamperfekt form.',
          uk: 'Заповніть правильну форму Plusquamperfekt.',
          pl: 'Wpisz poprawną formę Plusquamperfekt.',
          sq: 'Plotësoni formën e saktë të Plusquamperfekt.',
          de: 'Ergänzen Sie die richtige Plusquamperfekt-Form.',
          ar: 'أكمل صيغة الماضي التام الصحيحة.',
          it: 'Inserisci la forma corretta del Plusquamperfekt.',
          sr: 'Допуните исправну форму Plusquamperfekt.'
        },
        context: 'Nachdem ich die E-Mail ___ (schreiben), schickte ich sie ab.',
        correctAnswer: 'geschrieben hatte'
      },
      {
        id: 'b1-1-plusq-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct Plusquamperfekt form.',
          uk: 'Заповніть правильну форму Plusquamperfekt.',
          pl: 'Wpisz poprawną formę Plusquamperfekt.',
          sq: 'Plotësoni formën e saktë të Plusquamperfekt.',
          de: 'Ergänzen Sie die richtige Plusquamperfekt-Form.',
          ar: 'أكمل صيغة الماضي التام الصحيحة.',
          it: 'Inserisci la forma corretta del Plusquamperfekt.',
          sr: 'Допуните исправну форму Plusquamperfekt.'
        },
        context: 'Nachdem er ___ (ankommen), rief er mich an.',
        correctAnswer: 'angekommen war'
      },
      {
        id: 'b1-1-plusq-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "hatte" or "war".',
          uk: 'Заповніть "hatte" або "war".',
          pl: 'Wpisz "hatte" lub "war".',
          sq: 'Plotësoni "hatte" ose "war".',
          de: 'Ergänzen Sie "hatte" oder "war".',
          ar: 'أكمل بـ "hatte" أو "war".',
          it: 'Inserisci "hatte" o "war".',
          sr: 'Допуните "hatte" или "war".'
        },
        context: 'Bevor sie ins Bett ging, ___ sie noch ein Buch gelesen.',
        correctAnswer: 'hatte'
      },
      {
        id: 'b1-1-plusq-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in "hatte" or "war".',
          uk: 'Заповніть "hatte" або "war".',
          pl: 'Wpisz "hatte" lub "war".',
          sq: 'Plotësoni "hatte" ose "war".',
          de: 'Ergänzen Sie "hatte" oder "war".',
          ar: 'أكمل بـ "hatte" أو "war".',
          it: 'Inserisci "hatte" o "war".',
          sr: 'Допуните "hatte" или "war".'
        },
        context: 'Nachdem der Zug abgefahren ___, merkte ich, dass ich meinen Koffer vergessen hatte.',
        correctAnswer: 'war'
      },
      {
        id: 'b1-1-plusq-ex5',
        type: 'multiple-choice',
        question: {
          en: 'Which sentence uses Plusquamperfekt correctly?',
          uk: 'Яке речення правильно використовує Plusquamperfekt?',
          pl: 'Które zdanie poprawnie używa Plusquamperfekt?',
          sq: 'Cila fjali përdor Plusquamperfekt saktë?',
          de: 'Welcher Satz verwendet das Plusquamperfekt richtig?',
          ar: 'أي جملة تستخدم الماضي التام بشكل صحيح؟',
          it: 'Quale frase usa correttamente il Plusquamperfekt?',
          sr: 'Која реченица исправно користи Plusquamperfekt?'
        },
        context: 'Wählen Sie den richtigen Satz.',
        options: [
          'Nachdem ich aufstand, hatte ich gefrühstückt.',
          'Nachdem ich aufgestanden war, frühstückte ich.',
          'Nachdem ich aufgestanden bin, frühstückte ich.',
          'Nachdem ich aufstehe, hatte ich gefrühstückt.'
        ],
        correctAnswer: 'Nachdem ich aufgestanden war, frühstückte ich.'
      }
    ]
  },

  // Verben mit Präpositionen
  {
    id: 'b1-1-verben-praep',
    moduleId: 3,
    title: {
      en: 'Verbs with Prepositions',
      uk: 'Дієслова з прийменниками',
      pl: 'Czasowniki z przyimkami',
      sq: 'Foljet me parafjalë',
      de: 'Verben mit Präpositionen',
      ar: 'الأفعال مع حروف الجر',
      it: 'Verbi con preposizioni',
      sr: 'Глаголи са предлозима'
    },
    description: {
      en: 'Many German verbs require specific prepositions: warten auf (+Akk), denken an (+Akk), träumen von (+Dat), sich beschäftigen mit (+Dat). The preposition determines the case.',
      uk: 'Багато німецьких дієслів вимагають певних прийменників: warten auf (+Akk), denken an (+Akk), träumen von (+Dat), sich beschäftigen mit (+Dat). Прийменник визначає відмінок.',
      pl: 'Wiele niemieckich czasowników wymaga określonych przyimków: warten auf (+Akk), denken an (+Akk), träumen von (+Dat), sich beschäftigen mit (+Dat). Przyimek określa przypadek.',
      sq: 'Shumë folje gjermane kërkojnë parafjalë specifike: warten auf (+Akk), denken an (+Akk), träumen von (+Dat), sich beschäftigen mit (+Dat). Parafjalja përcakton rasën.',
      de: 'Viele deutsche Verben brauchen bestimmte Präpositionen: warten auf (+Akk), denken an (+Akk), träumen von (+Dat), sich beschäftigen mit (+Dat). Die Präposition bestimmt den Kasus.',
      ar: 'تتطلب العديد من الأفعال الألمانية حروف جر محددة. حرف الجر يحدد الحالة.',
      it: 'Molti verbi tedeschi richiedono preposizioni specifiche. La preposizione determina il caso.',
      sr: 'Многи немачки глаголи захтевају одређене предлоге: warten auf (+Akk), denken an (+Akk), träumen von (+Dat), sich beschäftigen mit (+Dat). Предлог одређује падеж.'
    },
    exercises: [
      {
        id: 'b1-1-verb-praep-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните исправан предлог.'
        },
        context: 'Ich warte ___ den Bus.',
        correctAnswer: 'auf'
      },
      {
        id: 'b1-1-verb-praep-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните исправан предлог.'
        },
        context: 'Sie denkt oft ___ ihre Kindheit.',
        correctAnswer: 'an'
      },
      {
        id: 'b1-1-verb-praep-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните исправан предлог.'
        },
        context: 'Er träumt ___ einer langen Reise.',
        correctAnswer: 'von'
      },
      {
        id: 'b1-1-verb-praep-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните исправан предлог.'
        },
        context: 'Ich beschäftige mich ___ diesem Thema.',
        correctAnswer: 'mit'
      },
      {
        id: 'b1-1-verb-praep-ex5',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct preposition.',
          uk: 'Заповніть правильний прийменник.',
          pl: 'Wpisz poprawny przyimek.',
          sq: 'Plotësoni parafjalën e saktë.',
          de: 'Ergänzen Sie die richtige Präposition.',
          ar: 'أكمل حرف الجر الصحيح.',
          it: 'Inserisci la preposizione corretta.',
          sr: 'Допуните исправан предлог.'
        },
        context: 'Sie hat sich ___ die Stelle beworben.',
        correctAnswer: 'um'
      }
    ]
  },

  // Zweiteilige Konnektoren
  {
    id: 'b1-1-zweiteilige-konnektoren',
    moduleId: 5,
    title: {
      en: 'Two-Part Connectors',
      uk: 'Двочастинні сполучники',
      pl: 'Spójniki dwuczęściowe',
      sq: 'Lidhëza dypalëshe',
      de: 'Zweiteilige Konnektoren',
      ar: 'الروابط المزدوجة',
      it: 'Connettori bipartiti',
      sr: 'Дводелни везници'
    },
    description: {
      en: 'Two-part connectors link parallel elements: sowohl...als auch (both...and), weder...noch (neither...nor), entweder...oder (either...or), nicht nur...sondern auch (not only...but also), zwar...aber (indeed...but).',
      uk: 'Двочастинні сполучники з\'єднують паралельні елементи: sowohl...als auch (як...так і), weder...noch (ні...ні), entweder...oder (або...або), nicht nur...sondern auch (не тільки...але й), zwar...aber (хоча...але).',
      pl: 'Spójniki dwuczęściowe łączą elementy równoległe: sowohl...als auch (zarówno...jak i), weder...noch (ani...ani), entweder...oder (albo...albo), nicht nur...sondern auch (nie tylko...ale także), zwar...aber (wprawdzie...ale).',
      sq: 'Lidhëzat dypalëshe lidhin elemente paralele: sowohl...als auch (si...ashtu edhe), weder...noch (as...as), entweder...oder (ose...ose), nicht nur...sondern auch (jo vetëm...por edhe), zwar...aber (doemos...por).',
      de: 'Zweiteilige Konnektoren verbinden parallele Elemente: sowohl...als auch, weder...noch, entweder...oder, nicht nur...sondern auch, zwar...aber.',
      ar: 'الروابط المزدوجة تربط عناصر متوازية.',
      it: 'I connettori bipartiti collegano elementi paralleli.',
      sr: 'Дводелни везници повезују паралелне елементе: sowohl...als auch (како...тако и), weder...noch (нити...нити), entweder...oder (или...или), nicht nur...sondern auch (не само...него и), zwar...aber (додуше...али).'
    },
    exercises: [
      {
        id: 'b1-1-zweit-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the missing part: sowohl...___',
          uk: 'Заповніть відсутню частину: sowohl...___',
          pl: 'Wpisz brakującą część: sowohl...___',
          sq: 'Plotësoni pjesën që mungon: sowohl...___',
          de: 'Ergänzen Sie den fehlenden Teil: sowohl...___',
          ar: 'أكمل الجزء المفقود: sowohl...___',
          it: 'Inserisci la parte mancante: sowohl...___',
          sr: 'Допуните део који недостаје: sowohl...___'
        },
        context: 'Er spricht sowohl Deutsch ___ auch Englisch.',
        correctAnswer: 'als'
      },
      {
        id: 'b1-1-zweit-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the missing part: weder...___',
          uk: 'Заповніть відсутню частину: weder...___',
          pl: 'Wpisz brakującą część: weder...___',
          sq: 'Plotësoni pjesën që mungon: weder...___',
          de: 'Ergänzen Sie den fehlenden Teil: weder...___',
          ar: 'أكمل الجزء المفقود: weder...___',
          it: 'Inserisci la parte mancante: weder...___',
          sr: 'Допуните део који недостаје: weder...___'
        },
        context: 'Sie hat weder Zeit ___ Geld.',
        correctAnswer: 'noch'
      },
      {
        id: 'b1-1-zweit-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the missing part: entweder...___',
          uk: 'Заповніть відсутню частину: entweder...___',
          pl: 'Wpisz brakującą część: entweder...___',
          sq: 'Plotësoni pjesën që mungon: entweder...___',
          de: 'Ergänzen Sie den fehlenden Teil: entweder...___',
          ar: 'أكمل الجزء المفقود: entweder...___',
          it: 'Inserisci la parte mancante: entweder...___',
          sr: 'Допуните део који недостаје: entweder...___'
        },
        context: 'Wir fahren entweder nach Italien ___ nach Spanien.',
        correctAnswer: 'oder'
      },
      {
        id: 'b1-1-zweit-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the missing connector.',
          uk: 'Заповніть відсутній сполучник.',
          pl: 'Wpisz brakujący spójnik.',
          sq: 'Plotësoni lidhëzën që mungon.',
          de: 'Ergänzen Sie den fehlenden Konnektor.',
          ar: 'أكمل الرابط المفقود.',
          it: 'Inserisci il connettore mancante.',
          sr: 'Допуните везник који недостаје.'
        },
        context: 'Er ist nicht nur intelligent, ___ auch fleißig.',
        correctAnswer: 'sondern'
      },
      {
        id: 'b1-1-zweit-ex5',
        type: 'multiple-choice',
        question: {
          en: 'Which connector pair fits: "Das Restaurant ist ___ teuer, ___ das Essen ist ausgezeichnet."',
          uk: 'Яка пара сполучників підходить?',
          pl: 'Która para spójników pasuje?',
          sq: 'Cila çift lidhëzash përshtatet?',
          de: 'Welches Konnektorenpaar passt?',
          ar: 'أي زوج من الروابط يناسب؟',
          it: 'Quale coppia di connettori si adatta?',
          sr: 'Који пар везника одговара?'
        },
        context: 'Das Restaurant ist ___ teuer, ___ das Essen ist ausgezeichnet.',
        options: [
          'sowohl...als auch',
          'weder...noch',
          'zwar...aber',
          'entweder...oder'
        ],
        correctAnswer: 'zwar...aber'
      }
    ]
  },

  // N-Deklination
  {
    id: 'b1-1-n-deklination',
    moduleId: 6,
    title: {
      en: 'N-Declension (Weak Nouns)',
      uk: 'N-відмінювання (Слабкі іменники)',
      pl: 'Deklinacja słaba (N-Deklination)',
      sq: 'Lakimi i dobët (N-Deklination)',
      de: 'N-Deklination (schwache Nomen)',
      ar: 'تصريف N (الأسماء الضعيفة)',
      it: 'Declinazione debole (N-Deklination)',
      sr: 'N-деклинација (слабе именице)'
    },
    description: {
      en: 'Some masculine nouns add -(e)n in all cases except nominative singular: der Student → den/dem/des Studenten. Common examples: der Mensch, der Junge, der Herr, der Kollege, der Kunde, der Name.',
      uk: 'Деякі чоловічі іменники додають -(e)n у всіх відмінках, крім називного однини: der Student → den/dem/des Studenten. Приклади: der Mensch, der Junge, der Herr, der Kollege, der Kunde, der Name.',
      pl: 'Niektóre rzeczowniki rodzaju męskiego dodają -(e)n we wszystkich przypadkach oprócz mianownika liczby pojedynczej: der Student → den/dem/des Studenten. Przykłady: der Mensch, der Junge, der Herr, der Kollege, der Kunde, der Name.',
      sq: 'Disa emra mashkullorë shtojnë -(e)n në të gjitha rasat përveç emërores njëjës: der Student → den/dem/des Studenten.',
      de: 'Einige maskuline Nomen bekommen -(e)n in allen Fällen außer Nominativ Singular: der Student → den/dem/des Studenten. Beispiele: der Mensch, der Junge, der Herr, der Kollege, der Kunde, der Name.',
      ar: 'بعض الأسماء المذكرة تضيف -(e)n في جميع الحالات ما عدا حالة الرفع المفرد.',
      it: 'Alcuni sostantivi maschili aggiungono -(e)n in tutti i casi tranne il nominativo singolare.',
      sr: 'Неке именице мушког рода добијају -(e)n у свим падежима осим номинатива једнине: der Student → den/dem/des Studenten. Примери: der Mensch, der Junge, der Herr, der Kollege, der Kunde, der Name.'
    },
    exercises: [
      {
        id: 'b1-1-ndekl-ex1',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form of "Student" (Akkusativ).',
          uk: 'Заповніть правильну форму "Student" (Знахідний).',
          pl: 'Wpisz poprawną formę "Student" (Biernik).',
          sq: 'Plotësoni formën e saktë të "Student" (Kallëzore).',
          de: 'Ergänzen Sie die richtige Form von "Student" (Akkusativ).',
          ar: 'أكمل الصيغة الصحيحة لـ "Student" (حالة النصب).',
          it: 'Inserisci la forma corretta di "Student" (Accusativo).',
          sr: 'Допуните исправну форму "Student" (акузатив).'
        },
        context: 'Ich kenne den ___ aus meinem Kurs.',
        correctAnswer: 'Studenten'
      },
      {
        id: 'b1-1-ndekl-ex2',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form of "Kollege" (Dativ).',
          uk: 'Заповніть правильну форму "Kollege" (Давальний).',
          pl: 'Wpisz poprawną formę "Kollege" (Celownik).',
          sq: 'Plotësoni formën e saktë të "Kollege" (Dhanore).',
          de: 'Ergänzen Sie die richtige Form von "Kollege" (Dativ).',
          ar: 'أكمل الصيغة الصحيحة لـ "Kollege" (حالة الجر).',
          it: 'Inserisci la forma corretta di "Kollege" (Dativo).',
          sr: 'Допуните исправну форму "Kollege" (датив).'
        },
        context: 'Ich habe dem ___ geholfen.',
        correctAnswer: 'Kollegen'
      },
      {
        id: 'b1-1-ndekl-ex3',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form of "Herr" (Genitiv).',
          uk: 'Заповніть правильну форму "Herr" (Родовий).',
          pl: 'Wpisz poprawną formę "Herr" (Dopełniacz).',
          sq: 'Plotësoni formën e saktë të "Herr" (Gjinore).',
          de: 'Ergänzen Sie die richtige Form von "Herr" (Genitiv).',
          ar: 'أكمل الصيغة الصحيحة لـ "Herr" (حالة الإضافة).',
          it: 'Inserisci la forma corretta di "Herr" (Genitivo).',
          sr: 'Допуните исправну форму "Herr" (генитив).'
        },
        context: 'Das ist das Auto des ___.',
        correctAnswer: 'Herrn'
      },
      {
        id: 'b1-1-ndekl-ex4',
        type: 'fill-in-the-blank',
        question: {
          en: 'Fill in the correct form of "Name" (Akkusativ).',
          uk: 'Заповніть правильну форму "Name" (Знахідний).',
          pl: 'Wpisz poprawną formę "Name" (Biernik).',
          sq: 'Plotësoni formën e saktë të "Name" (Kallëzore).',
          de: 'Ergänzen Sie die richtige Form von "Name" (Akkusativ).',
          ar: 'أكمل الصيغة الصحيحة لـ "Name" (حالة النصب).',
          it: 'Inserisci la forma corretta di "Name" (Accusativo).',
          sr: 'Допуните исправну форму "Name" (акузатив).'
        },
        context: 'Ich habe den ___ vergessen.',
        correctAnswer: 'Namen'
      },
      {
        id: 'b1-1-ndekl-ex5',
        type: 'multiple-choice',
        question: {
          en: 'Which noun does NOT follow N-declension?',
          uk: 'Який іменник НЕ відмінюється за N-відмінюванням?',
          pl: 'Który rzeczownik NIE podlega deklinacji słabej?',
          sq: 'Cili emër NUK ndjek lakimin N?',
          de: 'Welches Nomen folgt NICHT der N-Deklination?',
          ar: 'أي اسم لا يتبع تصريف N؟',
          it: 'Quale sostantivo NON segue la declinazione N?',
          sr: 'Која именица НЕ следи N-деклинацију?'
        },
        context: 'Wählen Sie das richtige Nomen.',
        options: [
          'der Student',
          'der Mensch',
          'der Tisch',
          'der Junge'
        ],
        correctAnswer: 'der Tisch'
      }
    ]
  }
];
