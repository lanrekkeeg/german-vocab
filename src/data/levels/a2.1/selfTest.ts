import { Test } from '../../../types';

export const a2_1_Tests: Test[] = [
  // ===== TEST 1: GRAMMAR FUNDAMENTALS (Modules 1-3) =====
  {
    id: "a2.1-test-1",
    title: "Self-Test 1: Grammar Fundamentals",
    level: "A2.1",
    totalPoints: 50,
    timeLimit: 45,
    exercises: [
      {
        id: "t1-ex1",
        type: "fill-in-the-blank",
        title: "Participles with and without 'ge-'",
        instructions: {
          en: "Complete the sentences with the correct participle form.",
          de: "Ergänzen Sie die Sätze mit der richtigen Partizipform."
        },
        points: 10,
        questions: [
          {
            context: "Ich habe in Berlin ________. (studieren)",
            correctAnswer: ["studiert"]
          },
          {
            context: "Wir haben das Problem ________. (verstehen)",
            correctAnswer: ["verstanden"]
          },
          {
            context: "Sie hat mich zum Essen ________. (einladen)",
            correctAnswer: ["eingeladen"]
          },
          {
            context: "Er hat sein Handy ________. (reparieren)",
            correctAnswer: ["repariert"]
          },
          {
            context: "Ich habe meine Heimat ________. (verlassen)",
            correctAnswer: ["verlassen"]
          }
        ],
        correctAnswer: ["studiert", "verstanden", "eingeladen", "repariert", "verlassen"]
      },
      {
        id: "t1-ex2",
        type: "fill-in-the-blank",
        title: "Possessive Articles",
        instructions: {
          en: "Fill in the correct possessive article (mein, dein, sein, ihr, unser, euer).",
          de: "Ergänzen Sie den richtigen Possessivartikel (mein, dein, sein, ihr, unser, euer)."
        },
        points: 10,
        questions: [
          {
            context: "Das ist ________ Frau. (ich)",
            correctAnswer: ["meine"]
          },
          {
            context: "Wo ist ________ Vater? (ihr/plural)",
            correctAnswer: ["euer"]
          },
          {
            context: "Das sind ________ Kinder. (wir)",
            correctAnswer: ["unsere"]
          },
          {
            context: "________ Haus ist sehr groß. (er)",
            correctAnswer: ["Sein"]
          },
          {
            context: "Wie heißt ________ Tochter? (du)",
            correctAnswer: ["deine"]
          }
        ],
        correctAnswer: ["meine", "euer", "unsere", "Sein", "deine"]
      },
      {
        id: "t1-ex3",
        type: "multiple-choice",
        title: "Perfect Tense: haben or sein?",
        instructions: {
          en: "Choose the correct auxiliary verb (haben or sein) for each sentence.",
          de: "Wählen Sie das richtige Hilfsverb (haben oder sein) für jeden Satz."
        },
        points: 10,
        questions: [
          {
            context: "Ich ________ nach Deutschland gefahren.",
            options: ["habe", "bin"],
            correctAnswer: ["bin"]
          },
          {
            context: "Wir ________ einen Film gesehen.",
            options: ["haben", "sind"],
            correctAnswer: ["haben"]
          },
          {
            context: "Sie ________ zu Hause geblieben.",
            options: ["hat", "ist"],
            correctAnswer: ["ist"]
          },
          {
            context: "Er ________ Deutsch gelernt.",
            options: ["hat", "ist"],
            correctAnswer: ["hat"]
          },
          {
            context: "Die Kinder ________ im Park gelaufen.",
            options: ["haben", "sind"],
            correctAnswer: ["sind"]
          }
        ],
        correctAnswer: ["bin", "haben", "ist", "hat", "sind"]
      },
      {
        id: "t1-ex4",
        type: "fill-in-the-blank",
        title: "Two-Way Prepositions (Wechselpräpositionen)",
        instructions: {
          en: "Complete with the correct article (accusative or dative) after the preposition.",
          de: "Ergänzen Sie mit dem richtigen Artikel (Akkusativ oder Dativ) nach der Präposition."
        },
        points: 10,
        questions: [
          {
            context: "Ich gehe in ________ Kino. (das Kino - wohin?)",
            correctAnswer: ["das"]
          },
          {
            context: "Das Buch liegt auf ________ Tisch. (der Tisch - wo?)",
            correctAnswer: ["dem"]
          },
          {
            context: "Wir stellen die Lampe neben ________ Sofa. (das Sofa - wohin?)",
            correctAnswer: ["das"]
          },
          {
            context: "Die Katze sitzt unter ________ Stuhl. (der Stuhl - wo?)",
            correctAnswer: ["dem"]
          },
          {
            context: "Er hängt das Bild an ________ Wand. (die Wand - wohin?)",
            correctAnswer: ["die"]
          }
        ],
        correctAnswer: ["das", "dem", "das", "dem", "die"]
      },
      {
        id: "t1-ex5",
        type: "multiple-choice",
        title: "Ja, Nein, Doch",
        instructions: {
          en: "Choose the correct answer: ja, nein, or doch.",
          de: "Wählen Sie die richtige Antwort: ja, nein oder doch."
        },
        points: 10,
        questions: [
          {
            context: "Kommst du nicht mit? - ________, ich komme mit!",
            options: ["Ja", "Nein", "Doch"],
            correctAnswer: ["Doch"]
          },
          {
            context: "Hast du schon gegessen? - ________, ich habe schon gegessen.",
            options: ["Ja", "Nein", "Doch"],
            correctAnswer: ["Ja"]
          },
          {
            context: "Möchtest du keinen Kaffee? - ________, ich möchte gern einen!",
            options: ["Ja", "Nein", "Doch"],
            correctAnswer: ["Doch"]
          },
          {
            context: "Sprichst du Deutsch? - ________, ich spreche kein Deutsch.",
            options: ["Ja", "Nein", "Doch"],
            correctAnswer: ["Nein"]
          },
          {
            context: "Warst du nicht in Berlin? - ________, ich war dort!",
            options: ["Ja", "Nein", "Doch"],
            correctAnswer: ["Doch"]
          }
        ],
        correctAnswer: ["Doch", "Ja", "Doch", "Nein", "Doch"]
      }
    ]
  },

  // ===== TEST 2: COMMUNICATION SKILLS (Modules 4-5) =====
  {
    id: "a2.1-test-2",
    title: "Self-Test 2: Communication & Questions",
    level: "A2.1",
    totalPoints: 50,
    timeLimit: 40,
    exercises: [
      {
        id: "t2-ex1",
        type: "fill-in-the-blank",
        title: "Time Prepositions",
        instructions: {
          en: "Complete the sentences with the correct time preposition (am, um, im, von...bis).",
          de: "Ergänzen Sie die Sätze mit der richtigen Zeitpräposition (am, um, im, von...bis)."
        },
        points: 10,
        questions: [
          {
            context: "________ Montag habe ich einen Termin.",
            correctAnswer: ["Am"]
          },
          {
            context: "Der Kurs beginnt ________ 9 Uhr.",
            correctAnswer: ["um"]
          },
          {
            context: "________ Sommer fahre ich nach Italien.",
            correctAnswer: ["Im"]
          },
          {
            context: "Ich arbeite ________ Montag ________ Freitag.",
            correctAnswer: ["von", "bis"]
          },
          {
            context: "________ Wochenende bleibe ich zu Hause.",
            correctAnswer: ["Am"]
          }
        ],
        correctAnswer: ["Am", "um", "Im", "von", "bis", "Am"]
      },
      {
        id: "t2-ex2",
        type: "sentence-scramble",
        title: "Indirect Questions (W-Fragen)",
        instructions: {
          en: "Put the words in the correct order to form an indirect question.",
          de: "Bringen Sie die Wörter in die richtige Reihenfolge, um eine indirekte Frage zu bilden."
        },
        points: 15,
        questions: [
          {
            context: ["Kannst", "du", "mir", "sagen", ",", "wo", "der", "Bahnhof", "ist", "?"],
            correctAnswer: ["Kannst du mir sagen, wo der Bahnhof ist?"]
          },
          {
            context: ["Ich", "weiß", "nicht", ",", "wann", "der", "Zug", "kommt", "."],
            correctAnswer: ["Ich weiß nicht, wann der Zug kommt."]
          },
          {
            context: ["Weißt", "du", ",", "wie", "viel", "das", "kostet", "?"],
            correctAnswer: ["Weißt du, wie viel das kostet?"]
          }
        ],
        correctAnswer: [
          "Kannst du mir sagen, wo der Bahnhof ist?",
          "Ich weiß nicht, wann der Zug kommt.",
          "Weißt du, wie viel das kostet?"
        ]
      },
      {
        id: "t2-ex3",
        type: "fill-in-the-blank",
        title: "Personal Pronouns in Dative",
        instructions: {
          en: "Replace the underlined words with the correct dative pronoun (mir, dir, ihm, ihr, uns, euch, ihnen).",
          de: "Ersetzen Sie die unterstrichenen Wörter durch das richtige Dativpronomen (mir, dir, ihm, ihr, uns, euch, ihnen)."
        },
        points: 10,
        questions: [
          {
            context: "Ich gebe [dem Mann] das Buch. → Ich gebe ________ das Buch.",
            correctAnswer: ["ihm"]
          },
          {
            context: "Kannst du [meiner Schwester] helfen? → Kannst du ________ helfen?",
            correctAnswer: ["ihr"]
          },
          {
            context: "Der Lehrer erklärt [den Studenten] die Grammatik. → Der Lehrer erklärt ________ die Grammatik.",
            correctAnswer: ["ihnen"]
          },
          {
            context: "Das Essen schmeckt [mir] sehr gut. → Das Essen schmeckt ________ sehr gut.",
            correctAnswer: ["mir"]
          },
          {
            context: "Ich zeige [dir und deinem Bruder] die Fotos. → Ich zeige ________ die Fotos.",
            correctAnswer: ["euch"]
          }
        ],
        correctAnswer: ["ihm", "ihr", "ihnen", "mir", "euch"]
      },
      {
        id: "t2-ex4",
        type: "fill-in-the-blank",
        title: "The Verb 'wissen'",
        instructions: {
          en: "Conjugate the verb 'wissen' correctly in each sentence.",
          de: "Konjugieren Sie das Verb 'wissen' richtig in jedem Satz."
        },
        points: 10,
        questions: [
          {
            context: "Ich ________ nicht, wo er wohnt.",
            correctAnswer: ["weiß"]
          },
          {
            context: "________ du, wann der Film beginnt?",
            correctAnswer: ["Weißt"]
          },
          {
            context: "Sie (sie/plural) ________ die Antwort nicht.",
            correctAnswer: ["wissen"]
          },
          {
            context: "Wir ________ schon, wie das funktioniert.",
            correctAnswer: ["wissen"]
          },
          {
            context: "________ ihr, wo die Bibliothek ist?",
            correctAnswer: ["Wisst"]
          }
        ],
        correctAnswer: ["weiß", "Weißt", "wissen", "wissen", "Wisst"]
      },
      {
        id: "t2-ex5",
        type: "multiple-choice",
        title: "Demonstrative Pronouns (welch- / dies-)",
        instructions: {
          en: "Choose the correct demonstrative pronoun.",
          de: "Wählen Sie das richtige Demonstrativpronomen."
        },
        points: 5,
        questions: [
          {
            context: "________ Buch möchtest du lesen? (Which book...)",
            options: ["Welches", "Welcher", "Welche"],
            correctAnswer: ["Welches"]
          },
          {
            context: "________ Frau ist deine Lehrerin? (Which woman...)",
            options: ["Welches", "Welcher", "Welche"],
            correctAnswer: ["Welche"]
          },
          {
            context: "Ich nehme ________ Mantel hier. (This coat)",
            options: ["diesen", "dieser", "dieses"],
            correctAnswer: ["diesen"]
          }
        ],
        correctAnswer: ["Welches", "Welche", "diesen"]
      }
    ]
  },

  // ===== TEST 3: LIVING & MOVING (Module 6) =====
  {
    id: "a2.1-test-3",
    title: "Self-Test 3: Housing & Daily Life",
    level: "A2.1",
    totalPoints: 50,
    timeLimit: 40,
    exercises: [
      {
        id: "t3-ex1",
        type: "fill-in-the-blank",
        title: "Reading Comprehension: Apartment Search",
        instructions: {
          en: "Read the apartment advertisement and answer the questions by filling in the blanks.",
          de: "Lesen Sie die Wohnungsanzeige und beantworten Sie die Fragen, indem Sie die Lücken ausfüllen."
        },
        points: 15,
        context: "Advertisement: 3-Zi.-Wohnung in Haus mit 6 Parteien, sehr ruhig, 72 qm, keine Haustiere, KM 690€ / NK 180€ (3 MM Kaution), Tel. 07641 210 234. Die Wohnung liegt im 2. Stock und hat einen kleinen Balkon. Sie ist zentral gelegen, in der Nähe vom Bahnhof. Die Küche ist eingebaut.",
        questions: [
          {
            context: "Wie viele Zimmer hat die Wohnung? ________",
            correctAnswer: ["3"]
          },
          {
            context: "Wie hoch ist die Kaltmiete? ________",
            correctAnswer: ["690€"]
          },
          {
            context: "Sind Haustiere erlaubt? ________",
            correctAnswer: ["Nein"]
          },
          {
            context: "In welchem Stock liegt die Wohnung? ________",
            correctAnswer: ["2. Stock"]
          },
          {
            context: "Was gibt es Besonderes in der Wohnung? ________",
            correctAnswer: ["Balkon und eingebaute Küche"]
          }
        ],
        correctAnswer: ["3", "690€", "Nein", "2. Stock", "Balkon und eingebaute Küche"]
      },
      {
        id: "t3-ex2",
        type: "fill-in-the-blank",
        title: "The Verb 'lassen'",
        instructions: {
          en: "Complete the sentences with the correct form of 'lassen'.",
          de: "Ergänzen Sie die Sätze mit der richtigen Form von 'lassen'."
        },
        points: 10,
        questions: [
          {
            context: "Ich ________ die Wohnung renovieren.",
            correctAnswer: ["lasse"]
          },
          {
            context: "Wir ________ die Möbel transportieren.",
            correctAnswer: ["lassen"]
          },
          {
            context: "________ du dir die Haare schneiden?",
            correctAnswer: ["Lässt"]
          },
          {
            context: "Er ________ sein Auto reparieren.",
            correctAnswer: ["lässt"]
          },
          {
            context: "Sie (plural) ________ die Küche einbauen.",
            correctAnswer: ["lassen"]
          }
        ],
        correctAnswer: ["lasse", "lassen", "Lässt", "lässt", "lassen"]
      },
      {
        id: "t3-ex3",
        type: "fill-in-the-blank",
        title: "Position Verbs: liegen/legen, stehen/stellen",
        instructions: {
          en: "Choose the correct verb (liegen/legen or stehen/stellen).",
          de: "Wählen Sie das richtige Verb (liegen/legen oder stehen/stellen)."
        },
        points: 15,
        questions: [
          {
            context: "Die Bücher ________ im Regal. (wo?)",
            correctAnswer: ["liegen"]
          },
          {
            context: "Ich ________ die Bücher ins Regal. (wohin?)",
            correctAnswer: ["lege"]
          },
          {
            context: "Die Lampe ________ auf dem Tisch. (wo?)",
            correctAnswer: ["steht"]
          },
          {
            context: "Wir ________ die Lampe auf den Tisch. (wohin?)",
            correctAnswer: ["stellen"]
          },
          {
            context: "Der Teppich ________ auf dem Boden. (wo?)",
            correctAnswer: ["liegt"]
          },
          {
            context: "Sie ________ den Teppich auf den Boden. (wohin?)",
            correctAnswer: ["legt"]
          }
        ],
        correctAnswer: ["liegen", "lege", "steht", "stellen", "liegt", "legt"]
      },
      {
        id: "t3-ex4",
        type: "fill-in-the-blank",
        title: "Reflexive Verbs",
        instructions: {
          en: "Complete with the correct reflexive pronoun (mich, dich, sich, uns, euch).",
          de: "Ergänzen Sie mit dem richtigen Reflexivpronomen (mich, dich, sich, uns, euch)."
        },
        points: 10,
        questions: [
          {
            context: "Ich freue ________, dass Sie gekommen sind.",
            correctAnswer: ["mich"]
          },
          {
            context: "Fühlst du ________ wohl hier?",
            correctAnswer: ["dich"]
          },
          {
            context: "Wir möchten ________ vorstellen.",
            correctAnswer: ["uns"]
          },
          {
            context: "Die Kinder freuen ________ auf das Wochenende.",
            correctAnswer: ["sich"]
          },
          {
            context: "Könnt ihr ________ an den Plan erinnern?",
            correctAnswer: ["euch"]
          }
        ],
        correctAnswer: ["mich", "dich", "uns", "sich", "euch"]
      }
    ]
  },

  // ===== TEST 4: CELEBRATIONS & CULTURE (Module 7) =====
  {
    id: "a2.1-test-4",
    title: "Self-Test 4: Celebrations & Dates",
    level: "A2.1",
    totalPoints: 50,
    timeLimit: 35,
    exercises: [
      {
        id: "t4-ex1",
        type: "fill-in-the-blank",
        title: "Dates and Ordinal Numbers",
        instructions: {
          en: "Write the dates in words using ordinal numbers.",
          de: "Schreiben Sie die Daten in Worten mit Ordinalzahlen."
        },
        points: 15,
        questions: [
          {
            context: "01.05. → Am ________ Mai.",
            correctAnswer: ["ersten"]
          },
          {
            context: "03.10. → Am ________ Oktober.",
            correctAnswer: ["dritten"]
          },
          {
            context: "21.07. → Am ________ Juli.",
            correctAnswer: ["einundzwanzigsten"]
          },
          {
            context: "25.12. → Am ________ Dezember ist Weihnachten.",
            correctAnswer: ["fünfundzwanzigsten"]
          },
          {
            context: "Vom 15.06. ________ 20.06. → Vom fünfzehnten ________ zwanzigsten Juni.",
            correctAnswer: ["bis", "zum"]
          }
        ],
        correctAnswer: ["ersten", "dritten", "einundzwanzigsten", "fünfundzwanzigsten", "bis", "zum"]
      },
      {
        id: "t4-ex2",
        type: "fill-in-the-blank",
        title: "Verbs with Dative and Accusative",
        instructions: {
          en: "Complete the sentences with the correct case (dative for person, accusative for thing).",
          de: "Ergänzen Sie die Sätze mit dem richtigen Fall (Dativ für Person, Akkusativ für Sache)."
        },
        points: 15,
        questions: [
          {
            context: "Ich schenke ________ (meine Mutter) ________ (eine Rose).",
            correctAnswer: ["meiner Mutter", "eine Rose"]
          },
          {
            context: "Er gibt ________ (sein Freund) ________ (das Buch).",
            correctAnswer: ["seinem Freund", "das Buch"]
          },
          {
            context: "Wir kaufen ________ (unsere Kinder) ________ (ein Geschenk).",
            correctAnswer: ["unseren Kindern", "ein Geschenk"]
          },
          {
            context: "Sie zeigt ________ (die Gäste) ________ (die Fotos).",
            correctAnswer: ["den Gästen", "die Fotos"]
          }
        ],
        correctAnswer: ["meiner Mutter", "eine Rose", "seinem Freund", "das Buch", "unseren Kindern", "ein Geschenk", "den Gästen", "die Fotos"]
      },
      {
        id: "t4-ex3",
        type: "fill-in-the-blank",
        title: "Adjective Declension after Indefinite Article",
        instructions: {
          en: "Complete with the correct adjective ending after ein/eine/ein.",
          de: "Ergänzen Sie mit der richtigen Adjektivendung nach ein/eine/ein."
        },
        points: 10,
        questions: [
          {
            context: "Das ist ein schön________ Kleid. (neuter, nominative)",
            correctAnswer: ["es"]
          },
          {
            context: "Sie trägt eine weiß________ Bluse. (feminine, accusative)",
            correctAnswer: ["e"]
          },
          {
            context: "Er hat einen schwarz________ Anzug. (masculine, accusative)",
            correctAnswer: ["en"]
          },
          {
            context: "Das ist eine elegant________ Hochzeitstorte. (feminine, nominative)",
            correctAnswer: ["e"]
          },
          {
            context: "Ich möchte ein groß________ Haus kaufen. (neuter, accusative)",
            correctAnswer: ["es"]
          }
        ],
        correctAnswer: ["es", "e", "en", "e", "es"]
      },
      {
        id: "t4-ex4",
        type: "matching",
        title: "Festival Vocabulary",
        instructions: {
          en: "Match the German phrases with their English meanings.",
          de: "Ordnen Sie die deutschen Ausdrücke ihren englischen Bedeutungen zu."
        },
        points: 10,
        questions: [
          {
            context: "Herzlichen Glückwunsch zum Geburtstag!",
            options: ["Happy New Year!", "Happy Easter!", "Happy Birthday!", "Best wishes for your wedding!", "Cheers to the New Year!"],
            correctAnswer: ["Happy Birthday!"]
          },
          {
            context: "Frohe Ostern!",
            options: ["Happy New Year!", "Happy Easter!", "Happy Birthday!", "Best wishes for your wedding!", "Cheers to the New Year!"],
            correctAnswer: ["Happy Easter!"]
          },
          {
            context: "Alles Gute zum neuen Jahr!",
            options: ["Happy New Year!", "Happy Easter!", "Happy Birthday!", "Best wishes for your wedding!", "Cheers to the New Year!"],
            correctAnswer: ["Happy New Year!"]
          },
          {
            context: "Alles Gute zur Hochzeit!",
            options: ["Happy New Year!", "Happy Easter!", "Happy Birthday!", "Best wishes for your wedding!", "Cheers to the New Year!"],
            correctAnswer: ["Best wishes for your wedding!"]
          },
          {
            context: "Prosit Neujahr!",
            options: ["Happy New Year!", "Happy Easter!", "Happy Birthday!", "Best wishes for your wedding!", "Cheers to the New Year!"],
            correctAnswer: ["Cheers to the New Year!"]
          }
        ],
        correctAnswer: ["Happy Birthday!", "Happy Easter!", "Happy New Year!", "Best wishes for your wedding!", "Cheers to the New Year!"]
      }
    ]
  },

  // ===== TEST 5: COMPREHENSIVE FINAL TEST (All Modules) =====
  {
    id: "a2.1-test-5",
    title: "Self-Test 5: Comprehensive Final Exam",
    level: "A2.1",
    totalPoints: 100,
    timeLimit: 90,
    exercises: [
      {
        id: "t5-ex1",
        type: "complete-text",
        title: "Reading Comprehension: Meine Geschichte",
        instructions: {
          en: "Read the text and complete the gaps with the correct verb forms.",
          de: "Lesen Sie den Text und ergänzen Sie die Lücken mit den richtigen Verbformen."
        },
        points: 20,
        context: "Mein Name ist Anna und ich ________ (kommen) aus Polen. Vor fünf Jahren ________ (ziehen) ich nach Deutschland ________. Zuerst ________ (studieren) ich Deutsch an einer Sprachschule. Das ________ (sein) sehr wichtig für mich. Dann ________ (finden) ich eine Arbeit in Berlin. Ich ________ (arbeiten) dort zwei Jahre ________. Die Stadt ________ (gefallen) mir sehr gut, aber sie ________ (sein) auch sehr teuer. Deshalb ________ (umziehen) ich nach Leipzig ________. Hier ________ (wohnen) ich jetzt in einer schönen 3-Zimmer-Wohnung. Ich ________ (sich freuen) sehr, dass ich diese Wohnung ________ (bekommen) ________. Meine Nachbarn ________ (sein) sehr freundlich und ________ (helfen) mir oft. Am Wochenende ________ (treffen) wir uns manchmal und ________ (kochen) zusammen.",
        questions: [
          {
            context: "________ (kommen)",
            correctAnswer: ["komme"]
          },
          {
            context: "________ (ziehen) ich nach Deutschland ________",
            correctAnswer: ["bin", "gezogen"]
          },
          {
            context: "________ (studieren)",
            correctAnswer: ["habe studiert"]
          },
          {
            context: "________ (sein)",
            correctAnswer: ["war"]
          },
          {
            context: "________ (finden)",
            correctAnswer: ["habe gefunden"]
          },
          {
            context: "________ (arbeiten) dort zwei Jahre ________",
            correctAnswer: ["habe", "gearbeitet"]
          },
          {
            context: "________ (gefallen)",
            correctAnswer: ["hat gefallen"]
          },
          {
            context: "________ (sein)",
            correctAnswer: ["war"]
          },
          {
            context: "________ (umziehen) ich nach Leipzig ________",
            correctAnswer: ["bin", "umgezogen"]
          },
          {
            context: "________ (wohnen)",
            correctAnswer: ["wohne"]
          },
          {
            context: "________ (sich freuen)",
            correctAnswer: ["freue mich"]
          },
          {
            context: "________ (bekommen) ________",
            correctAnswer: ["bekommen", "habe"]
          },
          {
            context: "________ (sein)",
            correctAnswer: ["sind"]
          },
          {
            context: "________ (helfen)",
            correctAnswer: ["helfen"]
          },
          {
            context: "________ (treffen)",
            correctAnswer: ["treffen"]
          },
          {
            context: "________ (kochen)",
            correctAnswer: ["kochen"]
          }
        ],
        correctAnswer: ["komme", "bin", "gezogen", "habe studiert", "war", "habe gefunden", "habe", "gearbeitet", "hat gefallen", "war", "bin", "umgezogen", "wohne", "freue mich", "bekommen", "habe", "sind", "helfen", "treffen", "kochen"]
      },
      {
        id: "t5-ex2",
        type: "fill-in-the-blank",
        title: "Mixed Grammar Challenge",
        instructions: {
          en: "Complete the dialogue with the correct forms (articles, pronouns, prepositions, verbs).",
          de: "Ergänzen Sie den Dialog mit den richtigen Formen (Artikel, Pronomen, Präpositionen, Verben)."
        },
        points: 25,
        context: [
          "A: Hallo! Kannst du ________ sagen, wo die Post ist?",
          "B: Ja, die Post liegt ________ der Hauptstraße, ________ dem Rathaus.",
          "A: Danke! Und weißt du, ________ sie öffnet?",
          "B: Ich glaube, ________ 9 Uhr.",
          "A: Perfekt! Ich muss ________ (meine Eltern) ein Paket schicken.",
          "B: Ach so. Was schickst du ________?",
          "A: Ich schicke ________ Fotos von ________ (meine Hochzeit).",
          "B: Oh, du hast ________! Herzlichen Glückwunsch!",
          "A: Danke! Die Hochzeit ________ ________ 21. Mai.",
          "B: Das ist schön! Und wo ________ ihr jetzt?",
          "A: Wir ________ in ________ Wohnung in ________ Stadtmitte.",
          "B: ________ euch die Wohnung?",
          "A: Ja, sehr! Wir ________ ________ sehr wohl hier."
        ],
        questions: [
          {
            context: "Kannst du ________ sagen",
            correctAnswer: ["mir"]
          },
          {
            context: "liegt ________ der Hauptstraße",
            correctAnswer: ["in"]
          },
          {
            context: "________ dem Rathaus",
            correctAnswer: ["neben"]
          },
          {
            context: "weißt du, ________ sie öffnet",
            correctAnswer: ["wann"]
          },
          {
            context: "________ 9 Uhr",
            correctAnswer: ["Um"]
          },
          {
            context: "muss ________ ein Paket schicken",
            correctAnswer: ["meinen Eltern"]
          },
          {
            context: "Was schickst du ________",
            correctAnswer: ["ihnen"]
          },
          {
            context: "Ich schicke ________ Fotos",
            correctAnswer: ["ihnen"]
          },
          {
            context: "von ________ Hochzeit",
            correctAnswer: ["meiner"]
          },
          {
            context: "du hast ________",
            correctAnswer: ["geheiratet"]
          },
          {
            context: "________ ________ 21. Mai",
            correctAnswer: ["war", "am"]
          },
          {
            context: "wo ________ ihr jetzt",
            correctAnswer: ["wohnt"]
          },
          {
            context: "Wir ________ in ________ Wohnung",
            correctAnswer: ["wohnen", "einer"]
          },
          {
            context: "in ________ Stadtmitte",
            correctAnswer: ["der"]
          },
          {
            context: "________ euch die Wohnung",
            correctAnswer: ["Gefällt"]
          },
          {
            context: "Wir ________ ________ sehr wohl",
            correctAnswer: ["fühlen", "uns"]
          }
        ],
        correctAnswer: ["mir", "in", "neben", "wann", "Um", "meinen Eltern", "ihnen", "ihnen", "meiner", "geheiratet", "war", "am", "wohnt", "wohnen", "einer", "der", "Gefällt", "fühlen", "uns"]
      },
      {
        id: "t5-ex3",
        type: "time-writing",
        title: "Written Production: Eine Einladung schreiben",
        instructions: {
          en: "Write an invitation to your birthday party (60-80 words). Include: date, time, location, and what you plan to do.",
          de: "Schreiben Sie eine Einladung zu Ihrer Geburtstagsparty (60-80 Wörter). Nennen Sie: Datum, Uhrzeit, Ort und was Sie planen."
        },
        points: 20,
        context: "Write your invitation here. Include:\n- Greeting (Liebe/Lieber...)\n- Date (Am... / Datum)\n- Time (Um... Uhr / ab... Uhr)\n- Location (bei mir / in...)\n- Activities (Wir werden... / Es gibt...)\n- Closing (Ich freue mich auf... / Bitte sag Bescheid...)",
        correctAnswer: ["[Student writes their own invitation - graded by teacher on: 1) Correct date format with ordinal numbers 2) Appropriate time expressions 3) Use of future/plan expressions 4) Proper salutation and closing 5) Overall coherence]"]
      },
      {
        id: "t5-ex4",
        type: "multiple-choice",
        title: "Comprehensive Multiple Choice",
        instructions: {
          en: "Choose the correct answer for each question.",
          de: "Wählen Sie die richtige Antwort für jede Frage."
        },
        points: 20,
        questions: [
          {
            context: "Ich habe gestern meine Freundin ________.",
            options: ["anrufen", "angerufen", "anruft"],
            correctAnswer: ["angerufen"]
          },
          {
            context: "________ Buch liest du gerade? - Dieses hier.",
            options: ["Welches", "Welcher", "Welche"],
            correctAnswer: ["Welches"]
          },
          {
            context: "Kommst du nicht mit ins Kino? - ________, ich komme mit!",
            options: ["Ja", "Nein", "Doch"],
            correctAnswer: ["Doch"]
          },
          {
            context: "Wir ________ die Wohnung streichen.",
            options: ["lassen", "lässt", "lass"],
            correctAnswer: ["lassen"]
          },
          {
            context: "Die Lampe ________ auf dem Tisch.",
            options: ["liegt", "steht", "legt"],
            correctAnswer: ["steht"]
          },
          {
            context: "Ich schenke ________ Blumen. (meine Mutter)",
            options: ["meiner Mutter", "meine Mutter", "meinen Mutter"],
            correctAnswer: ["meiner Mutter"]
          },
          {
            context: "Das ist ein schön________ Kleid.",
            options: ["es", "e", "en"],
            correctAnswer: ["es"]
          },
          {
            context: "________ dritten Oktober ist ein Feiertag.",
            options: ["Am", "Im", "Um"],
            correctAnswer: ["Am"]
          },
          {
            context: "Ich weiß nicht, ________ er heute kommt.",
            options: ["wenn", "wann", "ob"],
            correctAnswer: ["ob"]
          },
          {
            context: "________ ihr, wo die Bibliothek ist?",
            options: ["Weiß", "Weißt", "Wisst"],
            correctAnswer: ["Wisst"]
          }
        ],
        correctAnswer: ["angerufen", "Welches", "Doch", "lassen", "steht", "meiner Mutter", "es", "Am", "ob", "Wisst"]
      },
      {
        id: "t5-ex5",
        type: "sentence-scramble",
        title: "Sentence Building Challenge",
        instructions: {
          en: "Put the words in the correct order to form grammatically correct sentences.",
          de: "Bringen Sie die Wörter in die richtige Reihenfolge, um grammatisch korrekte Sätze zu bilden."
        },
        points: 15,
        questions: [
          {
            context: ["bin", "nach", "Deutschland", "vor", "zwei", "Jahren", "ich", "gekommen"],
            correctAnswer: ["Ich bin vor zwei Jahren nach Deutschland gekommen."]
          },
          {
            context: ["mir", "kannst", "sagen", "du", ",", "wann", "der", "Zug", "abfährt", "?"],
            correctAnswer: ["Kannst du mir sagen, wann der Zug abfährt?"]
          },
          {
            context: ["lasse", "ich", "die", "Wohnung", "renovieren"],
            correctAnswer: ["Ich lasse die Wohnung renovieren."]
          },
          {
            context: ["schenke", "meiner", "ich", "Schwester", "zum", "Geburtstag", "ein", "Buch"],
            correctAnswer: ["Ich schenke meiner Schwester zum Geburtstag ein Buch."]
          },
          {
            context: ["freue", "ich", "mich", ",", "dass", "Sie", "gekommen", "sind"],
            correctAnswer: ["Ich freue mich, dass Sie gekommen sind."]
          }
        ],
        correctAnswer: [
          "Ich bin vor zwei Jahren nach Deutschland gekommen.",
          "Kannst du mir sagen, wann der Zug abfährt?",
          "Ich lasse die Wohnung renovieren.",
          "Ich schenke meiner Schwester zum Geburtstag ein Buch.",
          "Ich freue mich, dass Sie gekommen sind."
        ]
      }
    ]
  }
];
