import { Test } from '../../../types'; // Assuming you create a Test type
export const a1_1_Tests: Test[] = [
  // ===== TEST 1: Basic German & Introductions =====
  {
    id: 'a11-test-1',
    title: 'A1.1 Test 1 - Basic German & Personal Introduction',
    level: 'A1.1',
    totalPoints: 50,
    timeLimit: 30,
    exercises: [
      {
        id: 't1-ex1',
        type: 'fill-in-the-blank',
        title: 'Exercise 1: Verb conjugation (sein, heißen, arbeiten)',
        instructions: {
          en: 'Complete with the correct verb forms. Use the verbs given in brackets.',
          de: 'Ergänzen Sie mit den richtigen Verbformen. Verwenden Sie die Verben in Klammern.'
        },
        questions: [
          {
            context: "Ich ______ (heißen) Maria und das ______ (sein) Tom.",
            correctAnswer: ["heiße", "ist"]
          },
          {
            context: "Wir ______ (wohnen) in Berlin. Tom ______ (arbeiten) als Ingenieur.",
            correctAnswer: ["wohnen", "arbeitet"]
          },
          {
            context: "Das ______ (sein) Anna und Klaus. Sie ______ (kommen) aus Österreich.",
            correctAnswer: ["sind", "kommen"]
          },
          {
            context: "______ (leben) ihr in München? Nein, wir ______ (wohnen) in Hamburg.",
            correctAnswer: ["Lebt", "wohnen"]
          },
          {
            context: "______ (sprechen) du Englisch? Nein, ich ______ (sprechen) nur Deutsch.",
            correctAnswer: ["Sprichst", "spreche"]
          }
        ],
        correctAnswer: ["heiße", "ist", "wohnen", "arbeitet", "sind", "kommen", "Lebt", "wohnen", "Sprichst", "spreche"],
        points: 10
      },
      {
        id: 't1-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Separable verbs',
        instructions: {
          en: 'Complete with separable verbs. Split the verb correctly and conjugate the main part.',
          de: 'Ergänzen Sie mit trennbaren Verben. Trennen Sie das Verb korrekt und konjugieren Sie den Hauptteil.'
        },
        questions: [
          {
            context: "Anna ______ morgen Abend ______. (ausgehen )",
            correctAnswer: ["geht", "aus"]
          },
          {
            context: "Am Samstag ______ ich Lebensmittel ______. (einkaufen)",
            correctAnswer: ["kaufe", "ein"]
          },
          {
            context: "Wann ______ du ______? (aufstehen)",
            correctAnswer: ["stehst", "auf"]
          },
          {
            context: "Der Kurs ______ heute ______. (ausfallen)",
            correctAnswer: ["fällt", "aus"]
          },
          {
            context: "Ich ______ meine Freundin ______. (anrufen )",
            correctAnswer: ["rufe", "an"]
          }
        ],
        correctAnswer: ["geht", "aus", "kaufe", "ein", "stehst", "auf", "fällt", "aus", "rufe", "an"],
        points: 10
      },
      {
        id: 't1-ex3',
        type: 'matching',
        title: 'Exercise 3: Question words (W-Fragen)',
        instructions: {
          en: 'Match questions with appropriate question words',
          de: 'Ordnen Sie Fragen den passenden Fragewörtern zu'
        },
        context: ["______ heißen Sie?", "______ kommen Sie?", "______ wohnen Sie?", "______ ist das?", "______ Sprachen sprechen Sie?"],
        options: ["Wie", "Woher", "Wo", "Wer", "Welche"],
        correctAnswer: ["Wie", "Woher", "Wo", "Wer", "Welche"],
        points: 5
      },
      {
        id: 't1-ex4',
        type: 'multiple-choice',
        title: 'Exercise 4: Articles (der, die, das)',
        instructions: {
          en: 'Choose the correct definite article',
          de: 'Wählen Sie den richtigen bestimmten Artikel'
        },
        questions: [
          {
            context: "______ Laptop ist neu. (masculine, device)",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Der"
          },
          {
            context: "______ Tafel ist schwarz. (feminine, classroom object)",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Die"
          },
          {
            context: "______ Handy ist kaputt. (neuter, device)",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Das"
          },
          {
            context: "______ Wörterbuch kostet 25 Euro. (neuter, book)",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Das"
          }
        ],
        correctAnswer: ["Der", "Die", "Das", "Das"],
        points: 8
      },
      {
        id: 't1-ex5',
        type: 'fill-in-the-blank',
        title: 'Exercise 5: Negation with kein/keine/keinen',
        instructions: {
          en: 'Complete with the correct form of "kein" (no/not a). Remember: kein (masc./neut.), keine (fem./plural), keinen (acc. masc.)',
          de: 'Ergänzen Sie mit der richtigen Form von "kein". Denken Sie an: kein (mask./neutr.), keine (fem./Plural), keinen (Akk. mask.)'
        },
        questions: [
          {
            context: "Ich habe ______ Geschwister. (Geschwister = plural)",
            correctAnswer: "keine"
          },
          {
            context: "Es gibt ______ Supermarkt hier. (accusative + masculine)",
            correctAnswer: "keinen"
          },
          {
            context: "Ich trinke ______ Kaffee. (accusative + masculine)",
            correctAnswer: "keinen"
          },
          {
            context: "Sie hat ______ Auto. (nominative + neuter)",
            correctAnswer: "kein"
          }
        ],
        correctAnswer: ["keine", "keinen", "keinen", "kein"],
        points: 8
      },
      {
        id: 't1-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Word order in German sentences',
        instructions: {
          en: 'Put the words in correct German word order (Subject-Verb-Object pattern)',
          de: 'Bringen Sie die Wörter in die richtige deutsche Wortstellung (Subjekt-Verb-Objekt)'
        },
        questions: [
          {
            context: ["Berlin", "Deutsch", "in", "lerne", "Ich"],
            correctAnswer: "Ich lerne Deutsch in Berlin"
          },
          {
            context: ["interessant", "sehr", "ist", "Buch", "Das"],
            correctAnswer: "Das Buch ist sehr interessant"
          },
          {
            context: ["ist", "Schlüssel", "kaputt", "Mein"],
            correctAnswer: "Mein Schlüssel ist kaputt"
          }
        ],
        correctAnswer: ["Ich lerne Deutsch in Berlin", "Das Buch ist sehr interessant", "Mein Schlüssel ist kaputt"],
        points: 9
      }
    ]
  },

  // ===== TEST 2: Home & Living =====
  {
    id: 'a11-test-2',
    title: 'A1.1 Test 2 - Home & Living (Wohnen)',
    level: 'A1.1',
    totalPoints: 55,
    timeLimit: 35,
    exercises: [
      {
        id: 't2-ex1',
        type: 'complete-text',
        title: 'Exercise 1: Apartment viewing dialogue',
        instructions: {
          en: 'Complete the apartment viewing dialogue using the vocabulary provided below.Hint:["Wohnung", "Schlafzimmer", "modern", "Miete", "Balkon", "gemütlich" "Möbel"]',
          de: 'Vervollständigen Sie den Dialog bei der Wohnungsbesichtigung mit dem unten angegebenen Vokabular.'
        },
        context: "Maklerin: Das ist die ______. Sie ______ (haben) drei Zimmer: ein Wohnzimmer, ein ______ und eine Küche. Das Wohnzimmer ______ (sein) sehr hell und ______. Die ______ ist 800 Euro plus Nebenkosten. Hier ist der ______ - er ist klein aber ______. ______ (haben) Sie auch Möbel? Nein, die Wohnung ist ohne ______.\n\nVocabulary to use: Wohnung, hat, Schlafzimmer, ist, modern, Miete, Balkon, gemütlich, Haben, Möbel",
        correctAnswer: ["Wohnung", "hat", "Schlafzimmer", "ist", "modern", "Miete", "Balkon", "gemütlich", "Haben", "Möbel"],
        points: 10
      },
      {
        id: 't2-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Verb "haben" (to have) - conjugation practice',
        instructions: {
          en: 'Complete with the correct form of "haben". Remember: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben',
          de: 'Ergänzen Sie mit der richtigen Form von "haben". Denken Sie an: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben'
        },
        questions: [
          {
            context: "Wir ______ (haben) eine große Küche.",
            correctAnswer: "haben"
          },
          {
            context: "______ (haben) du einen Garten?",
            correctAnswer: "Hast"
          },
          {
            context: "Meine Schwester ______ (haben) ein schönes Zimmer.",
            correctAnswer: "hat"
          },
          {
            context: "______ (haben) Sie auch einen Balkon? (formal you)",
            correctAnswer: "Haben"
          },
          {
            context: "Ihr ______ (haben) viele Möbel.",
            correctAnswer: "habt"
          }
        ],
        correctAnswer: ["haben", "Hast", "hat", "Haben", "habt"],
        points: 10
      },
      {
        id: 't2-ex3',
        type: 'matching',
        title: 'Exercise 3: Furniture and rooms (Möbel und Zimmer)',
        instructions: {
          en: 'Match each piece of furniture with the room where it typically belongs',
          de: 'Ordnen Sie jedes Möbelstück dem Zimmer zu, wo es normalerweise hingehört'
        },
        context: ["der Herd (stove)", "das Bett (bed)", "der Fernseher (TV)", "die Spüle (sink)", "der Sessel (armchair)", "der Kleiderschrank (wardrobe)"],
        options: ["Küche", "Schlafzimmer", "Wohnzimmer", "Küche", "Wohnzimmer", "Schlafzimmer"],
        correctAnswer: ["Küche", "Schlafzimmer", "Wohnzimmer", "Küche", "Wohnzimmer", "Schlafzimmer"],
        points: 6
      },
      {
        id: 't2-ex4',
        type: 'fill-in-the-blank',
        title: 'Exercise 4: Colors and adjective agreement',
        instructions: {
          en: 'Complete with colors and descriptive adjectives. Use "sein" (to be) correctly.',
          de: 'Ergänzen Sie mit Farben und beschreibenden Adjektiven. Verwenden Sie "sein" richtig.'
        },
        questions: [
          {
            context: "Das Sofa ______ (sein) blau und sehr ______. (comfortable)",
            correctAnswer: ["ist", "bequem"]
          },
          {
            context: "Die Küche ______ (sein) weiß und ______. (modern)",
            correctAnswer: ["ist", "modern"]
          },
          {
            context: "Der Teppich ______ (sein) rot und ______. (beautiful)",
            correctAnswer: ["ist", "schön"]
          },
          {
            context: "Das Zimmer ______ (sein) klein aber ______. (cozy)",
            correctAnswer: ["ist", "gemütlich"]
          }
        ],
        correctAnswer: ["ist", "bequem", "ist", "modern", "ist", "schön", "ist", "gemütlich"],
        points: 8
      },
      {
        id: 't2-ex5',
        type: 'multiple-choice',
        title: 'Exercise 5: Shopping for furniture',
        instructions: {
          en: 'Choose the correct verb for each context',
          de: 'Wählen Sie das richtige Verb für jeden Kontext'
        },
        questions: [
          {
            context: "Was ______ der Schrank? (asking about price)",
            options: ["kostet", "kauft", "braucht"],
            correctAnswer: "kostet"
          },
          {
            context: "Ich ______ ein Regal für meine Bücher. (expressing need)",
            options: ["koste", "brauche", "habe"],
            correctAnswer: "brauche"
          },
          {
            context: "Wir ______ neue Möbel. (purchasing action)",
            options: ["kosten", "brauchen", "kaufen"],
            correctAnswer: "kaufen"
          },
          {
            context: "Das Bett ist sehr ______. (describing price level)",
            options: ["teuer", "kosten", "kaufen"],
            correctAnswer: "teuer"
          }
        ],
        correctAnswer: ["kostet", "brauche", "kaufen", "teuer"],
        points: 8
      },
      {
        id: 't2-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Describing living situations',
        instructions: {
          en: 'Build grammatically correct German sentences about living situations',
          de: 'Bilden Sie grammatisch richtige deutsche Sätze über Wohnsituationen'
        },
        questions: [
          {
            context: ["teuer", "zu", "ist", "Wohnung", "Die"],
            correctAnswer: "Die Wohnung ist zu teuer"
          },
          {
            context: ["neue", "kaufen", "Möbel", "Wir"],
            correctAnswer: "Wir kaufen neue Möbel"
          },
          {
            context: ["sehr", "ist", "Schlafzimmer", "dunkel", "Das"],
            correctAnswer: "Das Schlafzimmer ist sehr dunkel"
          },
          {
            context: ["gemütlich", "aber", "klein", "Balkon", "ist", "Der"],
            correctAnswer: "Der Balkon ist klein aber gemütlich"
          }
        ],
        correctAnswer: ["Die Wohnung ist zu teuer", "Wir kaufen neue Möbel", "Das Schlafzimmer ist sehr dunkel", "Der Balkon ist klein aber gemütlich"],
        points: 13
      }
    ]
  },

  // ===== TEST 3: Family & Free Time =====
  {
    id: 'a11-test-3',
    title: 'A1.1 Test 3 - Family & Free Time (Familie und Freizeit)',
    level: 'A1.1',
    totalPoints: 55,
    timeLimit: 35,
    exercises: [
      {
        id: 't3-ex1',
        type: 'complete-text',
        title: 'Exercise 1: Family introduction',
        instructions: {
          en: 'Complete Tom\'s family story with the correct verb forms from the vocabulary provided.',
          de: 'Vervollständigen Sie Toms Familiengeschichte mit den richtigen Verbformen aus dem angegebenen Vokabular.'
        },
        context: "Hallo! Ich ______ (heißen) Tom und ______ (sein) verheiratet. Meine Frau ______ (heißen) Sarah und wir ______ (haben) zwei Kinder. Mein Sohn ______ (sein) 5 Jahre alt und meine Tochter ______ (sein) 3. Meine Eltern ______ (wohnen) in Hamburg. Mein Vater ______ (arbeiten) als Ingenieur und meine Mutter ______ (sein) Lehrerin. Ich ______ (haben) auch Geschwister: einen Bruder und eine Schwester. Am Wochenende ______ (besuchen) wir oft meine Eltern.\n\nVerbs to conjugate: heiße, bin, heißt, haben, ist, ist, wohnen, arbeitet, ist, habe, besuchen",
        correctAnswer: ["heiße", "bin", "heißt", "haben", "ist", "ist", "wohnen", "arbeitet", "ist", "habe", "besuchen"],
        points: 11
      },
      {
        id: 't3-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Strong verbs with vowel changes',
        instructions: {
          en: 'Complete with correct verb forms. These verbs change their vowel in 2nd and 3rd person singular.',
          de: 'Ergänzen Sie mit den richtigen Verbformen. Diese Verben ändern ihren Vokal in der 2. und 3. Person Singular.'
        },
        questions: [
          {
            context: "Mein Vater ______ (lesen) jeden Tag Zeitung.",
            correctAnswer: "liest"
          },
          {
            context: "______ (essen) du gern Pizza?",
            correctAnswer: "Isst"
          },
          {
            context: "Am Sonntag ______ (treffen) wir Freunde.",
            correctAnswer: "treffen"
          },
          {
            context: "Meine Mutter ______ (fahren) mit dem Auto zur Arbeit.",
            correctAnswer: "fährt"
          },
          {
            context: "______ (sehen) ihr den neuen Film?",
            correctAnswer: "Seht"
          },
          {
            context: "Er ______ (nehmen) immer den Bus um 8 Uhr.",
            correctAnswer: "nimmt"
          }
        ],
        correctAnswer: ["liest", "Isst", "treffen", "fährt", "Seht", "nimmt"],
        points: 12
      },
      {
        id: 't3-ex3',
        type: 'matching',
        title: 'Exercise 3: Family relationships (Familienverhältnisse)',
        instructions: {
          en: 'Match family members with their relationship definitions',
          de: 'Ordnen Sie Familienmitglieder ihren Verwandtschaftsdefinitionen zu'
        },
        context: ["der Cousin", "die Nichte", "der Neffe", "die Großmutter", "der Onkel", "die Tante"],
        options: ["Sohn des Onkels/der Tante", "Tochter des Bruders/der Schwester", "Sohn des Bruders/der Schwester", "Mutter des Vaters/der Mutter", "Bruder der Mutter/des Vaters", "Schwester der Mutter/des Vaters"],
        correctAnswer: ["Sohn des Onkels/der Tante", "Tochter des Bruders/der Schwester", "Sohn des Bruders/der Schwester", "Mutter des Vaters/der Mutter", "Bruder der Mutter/des Vaters", "Schwester der Mutter/des Vaters"],
        points: 6
      },
      {
        id: 't3-ex4',
        type: 'multiple-choice',
        title: 'Exercise 4: Free time activities and preferences',
        instructions: {
          en: 'Choose the most logical activity or verb for each context',
          de: 'Wählen Sie die logischste Aktivität oder das passendste Verb für jeden Kontext'
        },
        questions: [
          {
            context: "Am Wochenende ______ ich gern. (relaxing activity)",
            options: ["faulenzen", "arbeiten", "studieren"],
            correctAnswer: "faulenzen"
          },
          {
            context: "Abends ______ wir oft. (evening activity with family)",
            options: ["fernsehen", "arbeiten", "lernen"],
            correctAnswer: "fernsehen"
          },
          {
            context: "Meine Schwester ______ gern Musik. (audio activity)",
            options: ["trinkt", "hört", "isst"],
            correctAnswer: "hört"
          },
          {
            context: "Im Sommer ______ wir oft. (summer activity)",
            options: ["schwimmen", "schlafen", "arbeiten"],
            correctAnswer: "schwimmen"
          },
          {
            context: "Ich ______ gern Schokolade. (food activity)",
            options: ["trinke", "esse", "höre"],
            correctAnswer: "esse"
          }
        ],
        correctAnswer: ["faulenzen", "fernsehen", "hört", "schwimmen", "esse"],
        points: 10
      },
      {
        id: 't3-ex5',
        type: 'fill-in-the-blank',
        title: 'Exercise 5: Time expressions and sequencing',
        instructions: {
          en: 'Complete with appropriate time expressions to show sequence of events',
          de: 'Ergänzen Sie mit passenden Zeitausdrücken um eine Reihenfolge von Ereignissen zu zeigen'
        },
        questions: [
          {
            context: "______ gehe ich zur Arbeit. (First/Initially)",
            correctAnswer: "Zuerst"
          },
          {
            context: "______ esse ich zu Mittag. (Then/After that)",
            correctAnswer: "Dann"
          },
          {
            context: "______ besuche ich meine Eltern. (After that)",
            correctAnswer: "Danach"
          },
          {
            context: "______ war mein Großvater Koch. (In the past)",
            correctAnswer: "Früher"
          }
        ],
        correctAnswer: ["Zuerst", "Dann", "Danach", "Früher"],
        points: 8
      },
      {
        id: 't3-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Weekend plans and family activities',
        instructions: {
          en: 'Build sentences about weekend activities. Pay attention to German word order.',
          de: 'Bilden Sie Sätze über Wochenendaktivitäten. Achten Sie auf die deutsche Wortstellung.'
        },
        questions: [
          {
            context: ["Kino", "ins", "wir", "Samstag", "gehen", "Am"],
            correctAnswer: "Am Samstag gehen wir ins Kino"
          },
          {
            context: ["zu", "gern", "Familie", "Hause", "bleibt", "Meine"],
            correctAnswer: "Meine Familie bleibt gern zu Hause"
          },
          {
            context: ["meine", "oft", "treffe", "Freunde", "Ich"],
            correctAnswer: "Ich treffe oft meine Freunde"
          }
        ],
        correctAnswer: ["Am Samstag gehen wir ins Kino", "Meine Familie bleibt gern zu Hause", "Ich treffe oft meine Freunde"],
        points: 9
      }
    ]
  },

  // ===== TEST 4: Daily Routine & Time =====
  {
    id: 'a11-test-4',
    title: 'A1.1 Test 4 - Daily Routine & Time (Tagesablauf und Zeit)',
    level: 'A1.1',
    totalPoints: 60,
    timeLimit: 40,
    exercises: [
      {
        id: 't4-ex1',
        type: 'time-writing',
        title: 'Exercise 1: Telling time in German (informal style)',
        instructions: {
          en: 'Write the times in words using informal German time expressions (halb, Viertel nach/vor)',
          de: 'Schreiben Sie die Uhrzeiten in Worten mit umgangssprachlichen deutschen Zeitausdrücken (halb, Viertel nach/vor)'
        },
        questions: [
          {
            context: "7:30 (half past seven)",
            correctAnswer: "halb acht"
          },
          {
            context: "14:15 (quarter past two PM)",
            correctAnswer: "Viertel nach zwei"
          },
          {
            context: "21:45 (quarter to ten PM)",
            correctAnswer: "Viertel vor zehn"
          },
          {
            context: "16:20 (twenty past four PM)",
            correctAnswer: "zwanzig nach vier"
          },
          {
            context: "9:50 (ten to ten)",
            correctAnswer: "zehn vor zehn"
          }
        ],
        correctAnswer: ["halb acht", "Viertel nach zwei", "Viertel vor zehn", "zwanzig nach vier", "zehn vor zehn"],
        points: 10
      },
      {
        id: 't4-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Separable verbs in daily routine',
        instructions: {
          en: 'Complete with separable verbs. Remember to split them: prefix goes to the end, main verb is conjugated.',
          de: 'Ergänzen Sie mit trennbaren Verben. Denken Sie daran: Präfix geht ans Ende, Hauptverb wird konjugiert.'
        },
        questions: [
          {
            context: "Wann ______ der Kurs ______? (anfangen)",
            correctAnswer: ["fängt", "an"]
          },
          {
            context: "Ich ______ heute Lebensmittel ______. (einkaufen)",
            correctAnswer: ["kaufe", "ein"]
          },
          {
            context: "Das Konzert ______ leider ______. (ausfallen)",
            correctAnswer: ["fällt", "aus"]
          },
          {
            context: "Wir ______ am Samstag ______. (ausgehen)",
            correctAnswer: ["gehen", "aus"]
          },
          {
            context: "______ du dein Zimmer ______? (aufräumen)",
            correctAnswer: ["Räumst", "auf"]
          },
          {
            context: "Ich ______ um 6:30 Uhr ______. (aufstehen)",
            correctAnswer: ["stehe", "auf"]
          }
        ],
        correctAnswer: ["fängt", "an", "kaufe", "ein", "fällt", "aus", "gehen", "aus", "Räumst", "auf", "stehe", "auf"],
        points: 12
      },
      {
        id: 't4-ex3',
        type: 'complete-text',
        title: 'Exercise 3: Anna\'s daily routine',
        instructions: {
          en: 'Complete Anna\'s daily routine with the correct verb forms from the vocabulary provided.',
          de: 'Vervollständigen Sie Annas Tagesablauf mit den richtigen Verbformen aus dem angegebenen Vokabular.'
        },
        context: "Mein Radiowecker ______ (klingeln) um 6:30 Uhr. Ich ______ (aufstehen) sofort und ______ (duschen). Um 7:15 Uhr ______ (verlassen) ich das Haus und ______ (fahren) zur Arbeit. Die Arbeit ______ (beginnen) um 8 Uhr. Ich ______ (haben) eine Pause von 12 bis 13 Uhr. Die Arbeit ______ (enden) um 17 Uhr. Abends ______ (anrufen) ich meine Freundin ______ und wir ______ (gehen) ins Kino.\n\nVerbs to use: klingelt, stehe, dusche, verlasse, fahre, beginnt, habe, endet, rufe, an, gehen",
        correctAnswer: ["klingelt", "stehe", "dusche", "verlasse", "fahre", "beginnt", "habe", "endet", "rufe", "an", "gehen"],
        points: 12
      },
      {
        id: 't4-ex4',
        type: 'matching',
        title: 'Exercise 4: Daily activities and typical times',
        instructions: {
          en: 'Match daily activities with the times when they typically happen',
          de: 'Ordnen Sie Alltagsaktivitäten den Zeiten zu, wann sie normalerweise stattfinden'
        },
        context: ["das Frühstück (breakfast)", "das Mittagessen (lunch)", "das Abendessen (dinner)", "die Hausaufgaben (homework)", "ins Bett gehen (going to bed)"],
        options: ["am Morgen", "am Mittag", "am Abend", "am Nachmittag", "in der Nacht"],
        correctAnswer: ["am Morgen", "am Mittag", "am Abend", "am Nachmittag", "in der Nacht"],
        points: 5
      },
      {
        id: 't4-ex5',
        type: 'multiple-choice',
        title: 'Exercise 5: Transportation and appointments',
        instructions: {
          en: 'Choose the correct option for each transportation and appointment context',
          de: 'Wählen Sie die richtige Option für jeden Transport- und Terminkontext'
        },
        questions: [
          {
            context: "Ich fahre mit ______ zur Arbeit. (dative case with 'mit')",
            options: ["dem Fahrrad", "das Fahrrad", "der Fahrrad"],
            correctAnswer: "dem Fahrrad"
          },
          {
            context: "Der Zug ______ um 15:30 Uhr. (separable verb: ankommen)",
            options: ["ankommt", "kommt an", "ankommen"],
            correctAnswer: "kommt an"
          },
          {
            context: "Ich habe einen ______ beim Zahnarzt. (appointment)",
            options: ["Termin", "Zeit", "Gespräch"],
            correctAnswer: "Termin"
          },
          {
            context: "Das ist sehr ______, ich muss sofort gehen! (urgent)",
            options: ["spät", "dringend", "später"],
            correctAnswer: "dringend"
          },
          {
            context: "______ beginnt der Film? (asking about time)",
            options: ["Wann", "Wo", "Wie"],
            correctAnswer: "Wann"
          }
        ],
        correctAnswer: ["dem Fahrrad", "kommt an", "Termin", "dringend", "Wann"],
        points: 10
      },
      {
        id: 't4-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Making plans and appointments',
        instructions: {
          en: 'Build sentences about plans and appointments using correct German word order',
          de: 'Bilden Sie Sätze über Pläne und Termine mit der richtigen deutschen Wortstellung'
        },
        questions: [
          {
            context: ["wichtigen", "einen", "ich", "Termin", "Morgen", "habe"],
            correctAnswer: "Morgen habe ich einen wichtigen Termin"
          },
          {
            context: ["acht", "uns", "halb", "um", "treffen", "Wir"],
            correctAnswer: "Wir treffen uns um halb acht"
          },
          {
            context: ["Zeit", "heute", "?", "du", "Abend", "Hast"],
            correctAnswer: "Hast du heute Abend Zeit?"
          },
          {
            context: ["ab", "7:30", "um", "fährt", "Bus", "Der"],
            correctAnswer: "Der Bus fährt um 7:30 ab"
          }
        ],
        correctAnswer: ["Morgen habe ich einen wichtigen Termin", "Wir treffen uns um halb acht", "Hast du heute Abend Zeit?", "Der Bus fährt um 7:30 ab"],
        points: 11
      }
    ]
  },

  // ===== TEST 5: Food & Modal Verbs =====
  {
    id: 'a11-test-5',
    title: 'A1.1 Test 5 - Food & Modal Verbs (Essen und Modalverben)',
    level: 'A1.1',
    totalPoints: 65,
    timeLimit: 45,
    exercises: [
      {
        id: 't5-ex1',
        type: 'complete-text',
        title: 'Exercise 1: At the supermarket dialogue',
        instructions: {
          en: 'Complete the shopping conversation with the correct words from the vocabulary provided.',
          de: 'Vervollständigen Sie das Einkaufsgespräch mit den richtigen Wörtern aus dem angegebenen Vokabular.'
        },
        context: "Anna ______ (gehen) einkaufen. Sie ______ (haben) einen Einkaufszettel und ______ (brauchen) viele Lebensmittel.\n\nVerkäufer: Guten Tag! Was ______ (möchten) Sie?\n\nAnna: Ich ______ (brauchen) zwei Kilo Äpfel, einen Liter Milch und 500 Gramm Käse.\n\nVerkäufer: ______ (möchten) Sie auch Fleisch oder Fisch?\n\nAnna: Ja, ich ______ (nehmen) ein Brot und drei Brötchen. ______ (haben) Sie auch frischen Fisch?\n\nVerkäufer: Ja, natürlich. Der Lachs ______ (sein) sehr gut heute. ______ (mögen) Sie Lachs?\n\nAnna: Nein, danke. Lachs ______ (schmecken) mir nicht so gut. Was ______ (kosten) das alles?\n\nVerbs to use: geht, hat, braucht, möchten, brauche, Möchten, nehme, Haben, ist, Mögen, schmeckt, kostet",
        correctAnswer: ["geht", "hat", "braucht", "möchten", "brauche", "Möchten", "nehme", "Haben", "ist", "Mögen", "schmeckt", "kostet"],
        points: 12
      },
      {
        id: 't5-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Modal verbs conjugation',
        instructions: {
          en: 'Complete with the correct modal verb form. Remember: können (can), wollen (want), müssen (must), möchten (would like), dürfen (may), sollen (should)',
          de: 'Ergänzen Sie mit der richtigen Modalverbform. Denken Sie an: können, wollen, müssen, möchten, dürfen, sollen'
        },
        questions: [
          {
            context: "Ich ______ (können) nicht schwimmen.",
            correctAnswer: "kann"
          },
          {
            context: "______ (wollen) du heute kochen?",
            correctAnswer: "Willst"
          },
          {
            context: "Wir ______ (müssen) einkaufen gehen.",
            correctAnswer: "müssen"
          },
          {
            context: "______ (können) Sie Deutsch sprechen?",
            correctAnswer: "Können"
          },
          {
            context: "Die Kinder ______ (dürfen) nicht so spät aufbleiben.",
            correctAnswer: "dürfen"
          },
          {
            context: "______ (möchten) Sie Kaffee oder Tee?",
            correctAnswer: "Möchten"
          },
          {
            context: "Er ______ (wollen) Koch werden.",
            correctAnswer: "will"
          },
          {
            context: "Ihr ______ (sollen) mehr Obst essen.",
            correctAnswer: "sollt"
          }
        ],
        correctAnswer: ["kann", "Willst", "müssen", "Können", "dürfen", "Möchten", "will", "sollt"],
        points: 16
      },
      {
        id: 't5-ex3',
        type: 'matching',
        title: 'Exercise 3: Food categories (Lebensmittelkategorien)',
        instructions: {
          en: 'Match each food item with its correct food category',
          de: 'Ordnen Sie jedes Lebensmittel seiner richtigen Kategorie zu'
        },
        context: ["die Banane", "der Schinken", "die Kartoffel", "der Joghurt", "der Lachs", "die Zwiebel", "der Apfel", "das Hähnchen"],
        options: ["Obst", "Fleisch", "Gemüse", "Milchprodukt", "Fisch", "Gemüse", "Obst", "Fleisch"],
        correctAnswer: ["Obst", "Fleisch", "Gemüse", "Milchprodukt", "Fisch", "Gemüse", "Obst", "Fleisch"],
        points: 8
      },
      {
        id: 't5-ex4',
        type: 'multiple-choice',
        title: 'Exercise 4: Meals and food preferences',
        instructions: {
          en: 'Choose the correct option for each food-related context',
          de: 'Wählen Sie die richtige Option für jeden lebensmittelbezogenen Kontext'
        },
        questions: [
          {
            context: "Zum ______ esse ich oft Müsli. (morning meal)",
            options: ["Frühstück", "Mittagessen", "Abendessen"],
            correctAnswer: "Frühstück"
          },
          {
            context: "Pizza ______ mir sehr gut. (expressing taste preference)",
            options: ["schmeckt", "kostet", "probiert"],
            correctAnswer: "schmeckt"
          },
          {
            context: "Ich ______ gern Schokolade. (liking something)",
            options: ["trinke", "mag", "bezahle"],
            correctAnswer: "mag"
          },
          {
            context: "______ Sie den Kuchen mal! (trying food)",
            options: ["Kosten", "Probieren", "Bezahlen"],
            correctAnswer: "Probieren"
          },
          {
            context: "Ich habe großen ______ auf Pizza. (feeling hungry for)",
            options: ["Durst", "Hunger", "Preis"],
            correctAnswer: "Hunger"
          },
          {
            context: "Können Sie mit EC-Karte ______? (payment method)",
            options: ["bezahlen", "kaufen", "kosten"],
            correctAnswer: "bezahlen"
          }
        ],
        correctAnswer: ["Frühstück", "schmeckt", "mag", "Probieren", "Hunger", "bezahlen"],
        points: 12
      },
      {
        id: 't5-ex5',
        type: 'fill-in-the-blank',
        title: 'Exercise 5: Quantities and packages',
        instructions: {
          en: 'Complete with the correct quantity words or containers. Learn German measurement vocabulary.',
          de: 'Ergänzen Sie mit den richtigen Mengenangaben oder Verpackungen. Lernen Sie deutsche Maßeinheiten.'
        },
        questions: [
          {
            context: "Ich kaufe eine ______ Milch. (bottle)",
            correctAnswer: "Flasche"
          },
          {
            context: "Wir brauchen zwei ______ Äpfel. (kilos)",
            correctAnswer: "Kilo"
          },
          {
            context: "Kaufst du eine ______ Eier? (package)",
            correctAnswer: "Packung"
          },
          {
            context: "Ich nehme ein ______ Brot. (piece/loaf)",
            correctAnswer: "Stück"
          },
          {
            context: "Haben Sie eine ______ Tomaten? (can)",
            correctAnswer: "Dose"
          },
          {
            context: "Ein ______ Orangensaft bitte. (liter)",
            correctAnswer: "Liter"
          }
        ],
        correctAnswer: ["Flasche", "Kilo", "Packung", "Stück", "Dose", "Liter"],
        points: 6
      },
      {
        id: 't5-ex6',
        type: 'fill-in-the-blank',
        title: 'Exercise 6: Frequency adverbs',
        instructions: {
          en: 'Complete with frequency expressions: immer (always), oft (often), manchmal (sometimes), selten (rarely), nie (never)',
          de: 'Ergänzen Sie mit Häufigkeitsausdrücken: immer, oft, manchmal, selten, nie'
        },
        questions: [
          {
            context: "Ich trinke ______ Kaffee. (often)",
            correctAnswer: "oft"
          },
          {
            context: "Sie isst ______ Fleisch. (rarely)",
            correctAnswer: "selten"
          },
          {
            context: "Wir gehen ______ ins Restaurant. (sometimes)",
            correctAnswer: "manchmal"
          },
          {
            context: "Er kocht ______ zu Hause. (always)",
            correctAnswer: "immer"
          },
          {
            context: "Ich esse ______ Zwiebeln. (never)",
            correctAnswer: "nie"
          }
        ],
        correctAnswer: ["oft", "selten", "manchmal", "immer", "nie"],
        points: 5
      },
      {
        id: 't5-ex7',
        type: 'sentence-scramble',
        title: 'Exercise 7: Restaurant conversation',
        instructions: {
          en: 'Build polite sentences for restaurant dialogue using correct German word order',
          de: 'Bilden Sie höfliche Sätze für ein Restaurantgespräch mit der richtigen deutschen Wortstellung'
        },
        questions: [
          {
            context: ["Speisekarte", "die", "bitte", "möchte", "Ich"],
            correctAnswer: "Ich möchte bitte die Speisekarte"
          },
          {
            context: ["empfehlen", "mir", "Menü", "Sie", "das", "Können", "?"],
            correctAnswer: "Können Sie mir das Menü empfehlen?"
          },
          {
            context: ["bitte", "Rechnung", "Die"],
            correctAnswer: "Die Rechnung bitte"
          },
          {
            context: ["essen", "scharf", "kann", "nicht", "Ich"],
            correctAnswer: "Ich kann nicht scharf essen"
          }
        ],
        correctAnswer: ["Ich möchte bitte die Speisekarte", "Können Sie mir das Menü empfehlen?", "Die Rechnung bitte", "Ich kann nicht scharf essen"],
        points: 6
      }
    ]
  },

  // ===== TEST 6: Work & Professions =====
  {
    id: 'a11-test-6',
    title: 'A1.1 Test 6 - Work & Professions (Arbeit und Berufe)',
    level: 'A1.1',
    totalPoints: 60,
    timeLimit: 40,
    exercises: [
      {
        id: 't6-ex1',
        type: 'fill-in-the-blank',
        title: 'Exercise 1: Professions and their work activities',
        instructions: {
          en: 'Complete with professions and correct verb forms. Match the profession to the activity described.',
          de: 'Ergänzen Sie mit Berufen und den richtigen Verbformen. Ordnen Sie den Beruf der beschriebenen Tätigkeit zu.'
        },
        questions: [
          {
            context: "Der ______ (kochen) ______ (arbeiten) in der Küche und ______ (kochen) leckeres Essen.",
            correctAnswer: ["Koch", "arbeitet", "kocht"]
          },
          {
            context: "Die Krankenschwester ______ (helfen) den Patienten im Krankenhaus.",
            correctAnswer: [ "hilft"]
          },
          {
            context: "Der Taxifahrer ______ (fahren) Personen durch die Stadt.",
            correctAnswer: ["Taxifahrer", "fährt"]
          },
          {
            context: "Die Lehrerin______ (unterrichten) Kinder in der Schule.",
            correctAnswer: ["Lehrerin", "unterrichtet"]
          },
          {
            context: "Der ______ (verkaufen) ______ (arbeiten) im Geschäft und ______ (verkaufen) Produkte.",
            correctAnswer: ["Verkäufer", "arbeitet", "verkauft"]
          }
        ],
        correctAnswer: ["Koch", "arbeitet", "kocht", "hilft", "fährt", "unterrichtet", "Verkäufer", "arbeitet", "verkauft"],
        points: 12
      },
      {
        id: 't6-ex2',
        type: 'complete-text',
        title: 'Exercise 2: Job interview dialogue',
        instructions: {
          en: 'Complete the job interview dialogue with the correct words from the vocabulary provided.',
          de: 'Vervollständigen Sie das Vorstellungsgespräch mit den richtigen Wörtern aus dem angegebenen Vokabular.'
        },
        context: "Chefin: Guten Tag! ______ (können) Sie sich bitte vorstellen?\n\nBewerber: Guten Tag! Ich ______ (heißen) Thomas Müller und ______ (sein) 28 Jahre alt. Ich ______ (kommen) aus Hamburg und ______ (wohnen) jetzt in Berlin.\n\nChefin: Was ______ (sein) Sie von Beruf?\n\nBewerber: Ich ______ (sein) Koch und ______ (haben) fünf Jahre Berufserfahrung. Ich ______ (können) sehr gut kochen und ______ (arbeiten) gern im Team.\n\nChefin: ______ (müssen) Sie auch am Wochenende arbeiten?\n\nBewerber: Das ______ (gehen) in Ordnung. Ich ______ (möchten) gern in Ihrem Restaurant arbeiten.\n\nWords to use: Können, heiße, bin, komme, wohne, sind, bin, habe, kann, arbeite, Müssen, geht, möchte",
        correctAnswer: ["Können", "heiße", "bin", "komme", "wohne", "sind", "bin", "habe", "kann", "arbeite", "Müssen", "geht", "möchte"],
        points: 13
      },
      {
        id: 't6-ex3',
        type: 'matching',
        title: 'Exercise 3: Professions and their work activities',
        instructions: {
          en: 'Match each profession with their typical work activity',
          de: 'Ordnen Sie jeden Beruf seiner typischen Arbeitstätigkeit zu'
        },
        context: ["der Arzt", "der Kellner", "die Sekretärin", "der Hausmeister", "die Köchin", "der Briefträger", "der Polizist", "die Friseurin"],
        options: ["operiert Patienten", "bedient Gäste", "schreibt E-Mails", "repariert Sachen", "kocht Essen", "bringt Post", "kontrolliert Verkehr", "schneidet Haare"],
        correctAnswer: ["operiert Patienten", "bedient Gäste", "schreibt E-Mails", "repariert Sachen", "kocht Essen", "bringt Post", "kontrolliert Verkehr", "schneidet Haare"],
        points: 8
      },
      {
        id: 't6-ex4',
        type: 'multiple-choice',
        title: 'Exercise 4: Working conditions and workplace vocabulary',
        instructions: {
          en: 'Choose the correct option for each work-related context',
          de: 'Wählen Sie die richtige Option für jeden arbeitsbezogenen Kontext'
        },
        questions: [
          {
            context: "Ich ______ 1500 Euro im Monat. (earning money)",
            options: ["verdiene", "koste", "bezahle"],
            correctAnswer: "verdiene"
          },
          {
            context: "Die Arbeit ist sehr ______. (difficult/tiring)",
            options: ["müde", "anstrengend", "Geld"],
            correctAnswer: "anstrengend"
          },
          {
            context: "Ich arbeite nicht gern ______. (without others)",
            options: ["zusammen", "alleine", "Team"],
            correctAnswer: "alleine"
          },
          {
            context: "Meine ______ sind von 9 bis 17 Uhr. (work schedule)",
            options: ["Arbeitsplatz", "Arbeitszeiten", "Arbeit"],
            correctAnswer: "Arbeitszeiten"
          },
          {
            context: "Im ______ gibt es viele Computer. (workplace for desk jobs)",
            options: ["Krankenhaus", "Büro", "Restaurant"],
            correctAnswer: "Büro"
          },
          {
            context: "Mein ______ ist sehr nett und hilfsbereit. (supervisor)",
            options: ["Chef", "Kollege", "Kunde"],
            correctAnswer: "Chef"
          }
        ],
        correctAnswer: ["verdiene", "anstrengend", "alleine", "Arbeitszeiten", "Büro", "Chef"],
        points: 12
      },
      {
        id: 't6-ex5',
        type: 'fill-in-the-blank',
        title: 'Exercise 5: Banking and money vocabulary',
        instructions: {
          en: 'Complete with banking terms. Learn essential vocabulary for handling money in Germany.',
          de: 'Ergänzen Sie mit Bankbegriffen. Lernen Sie wichtiges Vokabular für den Umgang mit Geld in Deutschland.'
        },
        questions: [
          {
            context: "Ich hole Geld am ______. (ATM machine)",
            correctAnswer: "Geldautomaten"
          },
          {
            context: "Meine ______ ist sehr lang - sie hat 22 Zahlen. (account number)",
            correctAnswer: "Kontonummer"
          },
          {
            context: "Ich ______ jeden Monat Geld an meine Mutter. (transfer money)",
            correctAnswer: "überweise"
          },
          {
            context: "Wo ist mein ______? Ich brauche ihn für die Steuererklärung. (bank statement)",
            correctAnswer: "Kontoauszug"
          },
          {
            context: "Kann ich hier mit ______ bezahlen? (debit card)",
            correctAnswer: "EC-Karte"
          }
        ],
        correctAnswer: ["Geldautomaten", "Kontonummer", "überweise", "Kontoauszug", "EC-Karte"],
        points: 5
      },
      {
        id: 't6-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Describing work situations',
        instructions: {
          en: 'Build sentences about work situations using proper German sentence structure',
          de: 'Bilden Sie Sätze über Arbeitssituationen mit der richtigen deutschen Satzstruktur'
        },
        questions: [
          {
            context: ["Verkäuferin", "als", "im", "Supermarkt", "arbeite", "Ich"],
            correctAnswer: "Ich arbeite als Verkäuferin im Supermarkt"
          },
          {
            context: ["verständnisvoll", "und", "sehr", "ist", "Chef", "nett", "Der"],
            correctAnswer: "Der Chef ist sehr nett und verständnisvoll"
          },
          {
            context: ["12", "eine", "um", "haben", "Uhr", "Mittagspause", "Wir"],
            correctAnswer: "Wir haben eine Mittagspause um 12 Uhr"
          },
          {
            context: ["hilfsbereit", "sehr", "Kollegen", "sind", "Meine"],
            correctAnswer: "Meine Kollegen sind sehr hilfsbereit"
          },
          {
            context: ["Lohn", "unseren", "bekommen", "Freitag", "wir", "Am"],
            correctAnswer: "Am Freitag bekommen wir unseren Lohn"
          }
        ],
        correctAnswer: ["Ich arbeite als Verkäuferin im Supermarkt", "Der Chef ist sehr nett und verständnisvoll", "Wir haben eine Mittagspause um 12 Uhr", "Meine Kollegen sind sehr hilfsbereit", "Am Freitag bekommen wir unseren Lohn"],
        points: 10
      }
    ]
  }
];