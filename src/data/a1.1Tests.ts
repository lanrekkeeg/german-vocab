// src/data/a11Tests.ts
import { Test } from '../components/A1.1SelfTest'; // Import the type from the component file

export const a11Tests: Test[] = [
  // ===== TEST 1: Basic German & Introductions =====
  {
    id: 'a11-test-1',
    title: 'A1.1 Test 1 - Basic German',
    level: 'A1.1',
    totalPoints: 50,
    timeLimit: 45,
    exercises: [
      {
        id: 't1-ex1',
        type: 'fill-in-the-blank',
        title: 'Exercise 1: Verb conjugation',
        instructions: {
          en: 'Complete with the correct verb forms',
          de: 'Ergänzen Sie mit den richtigen Verbformen'
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
            correctAnswer: ["ist", "kommen"]
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
        correctAnswer: ["heiße", "ist", "wohnen", "arbeitet", "ist", "kommen", "Lebt", "wohnen", "Sprichst", "spreche"],
        points: 10
      },
      {
        id: 't1-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Separable verbs',
        instructions: {
          en: 'Complete with separable verbs',
          de: 'Ergänzen Sie mit trennbaren Verben'
        },
        questions: [
          {
            context: "Anna ______ morgen Abend ______. (ausgehen)",
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
            context: "Ich ______ meine Freundin ______. (anrufen)",
            correctAnswer: ["rufe", "an"]
          }
        ],
        correctAnswer: ["geht", "aus", "kaufe", "ein", "stehst", "auf", "fällt", "aus", "rufe", "an"],
        points: 10
      },
      {
        id: 't1-ex3',
        type: 'matching',
        title: 'Exercise 3: Question words',
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
        title: 'Exercise 4: Articles and objects',
        instructions: {
          en: 'Choose the correct article',
          de: 'Wählen Sie den richtigen Artikel'
        },
        questions: [
          {
            context: "______ Laptop ist neu.",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Der"
          },
          {
            context: "______ Tafel ist schwarz.",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Die"
          },
          {
            context: "______ Handy ist kaputt.",
            options: ["Der", "Die", "Das"],
            correctAnswer: "Das"
          },
          {
            context: "______ Wörterbuch kostet 25 Euro.",
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
          en: 'Complete with kein, keine, or keinen',
          de: 'Ergänzen Sie mit kein, keine oder keinen'
        },
        questions: [
          {
            context: "Ich habe ______ Geschwister.",
            correctAnswer: "keine"
          },
          {
            context: "Es gibt ______ Supermarkt hier.",
            correctAnswer: "keinen"
          },
          {
            context: "Ich trinke ______ Kaffee.",
            correctAnswer: "keinen"
          },
          {
            context: "Sie hat ______ Auto.",
            correctAnswer: "kein"
          }
        ],
        correctAnswer: ["keine", "keinen", "keinen", "kein"],
        points: 8
      },
      {
        id: 't1-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Building sentences',
        instructions: {
          en: 'Put the words in correct order',
          de: 'Bringen Sie die Wörter in die richtige Reihenfolge'
        },
        questions: [
          {
            context: ["Ich", "lerne", "Deutsch", "in", "Berlin"],
            correctAnswer: "Ich lerne Deutsch in Berlin"
          },
          {
            context: ["Das", "Buch", "ist", "sehr", "interessant"],
            correctAnswer: "Das Buch ist sehr interessant"
          },
          {
            context: ["Mein", "Schlüssel", "ist", "kaputt"],
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
    title: 'A1.1 Test 2 - Home & Living',
    level: 'A1.1',
    totalPoints: 55,
    timeLimit: 45,
    exercises: [
      {
        id: 't2-ex1',
        type: 'complete-text',
        title: 'Exercise 1: Looking for an apartment',
        instructions: {
          en: 'Complete the apartment viewing dialogue',
          de: 'Vervollständigen Sie den Dialog bei der Wohnungsbesichtigung'
        },
        context: "Maklerin: Das ist die ______. Sie ______ (haben) drei Zimmer: ein Wohnzimmer, ein ______ und eine Küche. Das Wohnzimmer ______ (sein) sehr hell und ______. Die ______ ist 800 Euro plus Nebenkosten. Hier ist der ______ - er ist klein aber ______. ______ (haben) Sie auch Möbel? Nein, die Wohnung ist ohne ______.",
        correctAnswer: ["Wohnung", "hat", "Schlafzimmer", "ist", "modern", "Miete", "Balkon", "gemütlich", "Haben", "Möbel"],
        points: 10
      },
      {
        id: 't2-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: haben conjugation',
        instructions: {
          en: 'Complete with the correct form of haben',
          de: 'Ergänzen Sie mit der richtigen Form von haben'
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
            context: "______ (haben) Sie auch einen Balkon?",
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
        title: 'Exercise 3: Furniture and rooms',
        instructions: {
          en: 'Match furniture with the correct room',
          de: 'Ordnen Sie die Möbel dem richtigen Zimmer zu'
        },
        context: ["der Herd", "das Bett", "der Fernseher", "die Spüle", "der Sessel", "der Schrank"],
        options: ["Küche", "Schlafzimmer", "Wohnzimmer", "Küche", "Wohnzimmer", "Schlafzimmer"],
        correctAnswer: ["Küche", "Schlafzimmer", "Wohnzimmer", "Küche", "Wohnzimmer", "Schlafzimmer"],
        points: 6
      },
      {
        id: 't2-ex4',
        type: 'fill-in-the-blank',
        title: 'Exercise 4: Colors and descriptions',
        instructions: {
          en: 'Complete with colors and adjectives',
          de: 'Ergänzen Sie mit Farben und Adjektiven'
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
        title: 'Exercise 5: Buying and costs',
        instructions: {
          en: 'Choose the correct option',
          de: 'Wählen Sie die richtige Option'
        },
        questions: [
          {
            context: "Was ______ der Schrank?",
            options: ["kostet", "kauft", "braucht"],
            correctAnswer: "kostet"
          },
          {
            context: "Ich ______ ein Regal für meine Bücher.",
            options: ["koste", "brauche", "habe"],
            correctAnswer: "brauche"
          },
          {
            context: "Wir ______ neue Möbel.",
            options: ["kosten", "brauchen", "kaufen"],
            correctAnswer: "kaufen"
          },
          {
            context: "Das Bett ist sehr ______.",
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
        title: 'Exercise 6: Describing living situation',
        instructions: {
          en: 'Build sentences about living',
          de: 'Bilden Sie Sätze über das Wohnen'
        },
        questions: [
          {
            context: ["Die", "Wohnung", "ist", "zu", "teuer"],
            correctAnswer: "Die Wohnung ist zu teuer"
          },
          {
            context: ["Wir", "kaufen", "neue", "Möbel"],
            correctAnswer: "Wir kaufen neue Möbel"
          },
          {
            context: ["Das", "Schlafzimmer", "ist", "sehr", "dunkel"],
            correctAnswer: "Das Schlafzimmer ist sehr dunkel"
          },
          {
            context: ["Der", "Balkon", "ist", "klein", "aber", "gemütlich"],
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
    title: 'A1.1 Test 3 - Family & Free Time',
    level: 'A1.1',
    totalPoints: 50,
    timeLimit: 45,
    exercises: [
      {
        id: 't3-ex1',
        type: 'complete-text',
        title: 'Exercise 1: Family introduction',
        instructions: {
          en: 'Complete the family story with correct verb forms',
          de: 'Vervollständigen Sie die Familiengeschichte mit den richtigen Verbformen'
        },
        context: "Hallo! Ich ______ (heißen) Tom und ______ (sein) verheiratet. Meine Frau ______ (heißen) Sarah und wir ______ (haben) zwei Kinder. Mein Sohn ______ (sein) 5 Jahre alt und meine Tochter ______ (sein) 3. Meine Eltern ______ (wohnen) in Hamburg. Mein Vater ______ (arbeiten) als Ingenieur und meine Mutter ______ (sein) Lehrerin. Ich ______ (haben) auch Geschwister: einen Bruder und eine Schwester. Am Wochenende ______ (besuchen) wir oft meine Eltern.",
        correctAnswer: ["heiße", "bin", "heißt", "haben", "ist", "ist", "wohnen", "arbeitet", "ist", "habe", "besuchen"],
        points: 11
      },
      {
        id: 't3-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Verbs with vowel change',
        instructions: {
          en: 'Complete with correct verb forms (strong verbs)',
          de: 'Ergänzen Sie mit den richtigen Verbformen (starke Verben)'
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
        points: 6
      },
      {
        id: 't3-ex3',
        type: 'matching',
        title: 'Exercise 3: Family relationships',
        instructions: {
          en: 'Match family members',
          de: 'Ordnen Sie Familienmitglieder zu'
        },
        context: ["der Cousin", "die Nichte", "der Neffe", "die Großmutter", "der Onkel", "die Tante"],
        options: ["Sohn des Onkels", "Tochter des Bruders", "Sohn der Schwester", "Mutter des Vaters", "Bruder der Mutter", "Schwester des Vaters"],
        correctAnswer: ["Sohn des Onkels", "Tochter des Bruders", "Sohn der Schwester", "Mutter des Vaters", "Bruder der Mutter", "Schwester des Vaters"],
        points: 6
      },
      {
        id: 't3-ex4',
        type: 'fill-in-the-blank',
        title: 'Exercise 4: Time expressions',
        instructions: {
          en: 'Complete with time expressions',
          de: 'Ergänzen Sie mit Zeitausdrücken'
        },
        questions: [
          {
            context: "______ gehe ich zur Arbeit. (First)",
            correctAnswer: "Zuerst"
          },
          {
            context: "______ esse ich zu Mittag. (Then)",
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
        points: 4
      },
      {
        id: 't3-ex5',
        type: 'multiple-choice',
        title: 'Exercise 5: Free time activities',
        instructions: {
          en: 'Choose the correct activity',
          de: 'Wählen Sie die richtige Freizeitaktivität'
        },
        questions: [
          {
            context: "Am Wochenende ______ ich gern.",
            options: ["faulenzen", "arbeiten", "studieren"],
            correctAnswer: "faulenzen"
          },
          {
            context: "Abends ______ wir oft.",
            options: ["fernsehen", "arbeiten", "lernen"],
            correctAnswer: "fernsehen"
          },
          {
            context: "Meine Schwester ______ gern Musik.",
            options: ["trinkt", "hört", "isst"],
            correctAnswer: "hört"
          },
          {
            context: "Im Sommer ______ wir oft.",
            options: ["schwimmen", "schlafen", "arbeiten"],
            correctAnswer: "schwimmen"
          },
          {
            context: "Ich ______ gern Schokolade.",
            options: ["trinke", "esse", "höre"],
            correctAnswer: "esse"
          }
        ],
        correctAnswer: ["faulenzen", "fernsehen", "hört", "schwimmen", "esse"],
        points: 10
      },
      {
        id: 't3-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Weekend plans',
        instructions: {
          en: 'Build sentences about weekend activities',
          de: 'Bilden Sie Sätze über Wochenendaktivitäten'
        },
        questions: [
          {
            context: ["Am", "Samstag", "gehen", "wir", "ins", "Kino"],
            correctAnswer: "Am Samstag gehen wir ins Kino"
          },
          {
            context: ["Meine", "Familie", "bleibt", "gern", "zu", "Hause"],
            correctAnswer: "Meine Familie bleibt gern zu Hause"
          },
          {
            context: ["Ich", "treffe", "oft", "Freunde"],
            correctAnswer: "Ich treffe oft Freunde"
          }
        ],
        correctAnswer: ["Am Samstag gehen wir ins Kino", "Meine Familie bleibt gern zu Hause", "Ich treffe oft Freunde"],
        points: 9
      },
      {
        id: 't3-ex7',
        type: 'fill-in-the-blank',
        title: 'Exercise 7: Family vocabulary',
        instructions: {
          en: 'Complete with family words',
          de: 'Ergänzen Sie mit Familienwörtern'
        },
        questions: [
          {
            context: "Meine ______ ist klein. Ich habe einen ______ und eine ______.",
            correctAnswer: ["Familie", "Bruder", "Schwester"]
          },
          {
            context: "Mein ______ arbeitet als Lehrer und meine ______ ist Ärztin.",
            correctAnswer: ["Vater", "Mutter"]
          }
        ],
        correctAnswer: ["Familie", "Bruder", "Schwester", "Vater", "Mutter"],
        points: 5
      }
    ]
  },

  // ===== TEST 4: Daily Routine & Time =====
  {
    id: 'a11-test-4',
    title: 'A1.1 Test 4 - Daily Routine & Time',
    level: 'A1.1',
    totalPoints: 55,
    timeLimit: 50,
    exercises: [
      {
        id: 't4-ex1',
        type: 'time-writing',
        title: 'Exercise 1: Telling time',
        instructions: {
          en: 'Write the times in words (colloquial style)',
          de: 'Schreiben Sie die Uhrzeiten in Worten (umgangssprachlich)'
        },
        questions: [
          {
            context: "7:30",
            correctAnswer: "halb acht"
          },
          {
            context: "14:15",
            correctAnswer: "Viertel nach zwei"
          },
          {
            context: "21:45",
            correctAnswer: "Viertel vor zehn"
          },
          {
            context: "16:20",
            correctAnswer: "zwanzig nach vier"
          },
          {
            context: "9:50",
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
          en: 'Complete with separable verbs',
          de: 'Ergänzen Sie mit trennbaren Verben'
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
        title: 'Exercise 3: Daily routine',
        instructions: {
          en: 'Complete Anna\'s daily routine with correct verb forms',
          de: 'Vervollständigen Sie Annas Tagesablauf mit den richtigen Verbformen'
        },
        context: "Mein Radiowecker ______ (klingeln) um 6:30 Uhr. Ich ______ (aufstehen) sofort und ______ (duschen). Um 7:15 Uhr ______ (verlassen) ich das Haus und ______ (fahren) zur Arbeit. Die Arbeit ______ (beginnen) um 8 Uhr. Ich ______ (haben) eine Pause von 12 bis 13 Uhr. Die Arbeit ______ (enden) um 17 Uhr. Abends ______ (anrufen) ich meine Freundin und wir ______ (gehen) ins Kino.",
        correctAnswer: ["klingelt", "stehe", "dusche", "verlasse", "fahre", "beginnt", "habe", "endet", "rufe", "gehen"],
        points: 10
      },
      {
        id: 't4-ex4',
        type: 'matching',
        title: 'Exercise 4: Daily activities and times',
        instructions: {
          en: 'Match activities with typical times',
          de: 'Ordnen Sie Aktivitäten den typischen Zeiten zu'
        },
        context: ["das Frühstück", "das Mittagessen", "das Abendessen", "die Hausaufgaben", "fernsehen"],
        options: ["am Morgen", "am Mittag", "am Abend", "am Nachmittag", "am Abend"],
        correctAnswer: ["am Morgen", "am Mittag", "am Abend", "am Nachmittag", "am Abend"],
        points: 5
      },
      {
        id: 't4-ex5',
        type: 'multiple-choice',
        title: 'Exercise 5: Transportation and appointments',
        instructions: {
          en: 'Choose the correct option',
          de: 'Wählen Sie die richtige Option'
        },
        questions: [
          {
            context: "Ich fahre mit ______ zur Arbeit.",
            options: ["dem Fahrrad", "das Fahrrad", "der Fahrrad"],
            correctAnswer: "dem Fahrrad"
          },
          {
            context: "Der Zug ______ um 15:30 Uhr.",
            options: ["ankommt", "kommt an", "ankommen"],
            correctAnswer: "kommt an"
          },
          {
            context: "Ich habe einen ______ beim Zahnarzt.",
            options: ["Termin", "Zeit", "Gespräch"],
            correctAnswer: "Termin"
          },
          {
            context: "Das ist sehr ______, ich muss sofort gehen.",
            options: ["spät", "dringend", "später"],
            correctAnswer: "dringend"
          },
          {
            context: "______ beginnt der Film?",
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
        title: 'Exercise 6: Making plans',
        instructions: {
          en: 'Build sentences about plans and appointments',
          de: 'Bilden Sie Sätze über Pläne und Termine'
        },
        questions: [
          {
            context: ["Morgen", "habe", "ich", "einen", "wichtigen", "Termin"],
            correctAnswer: "Morgen habe ich einen wichtigen Termin"
          },
          {
            context: ["Wir", "treffen", "uns", "um", "halb", "acht"],
            correctAnswer: "Wir treffen uns um halb acht"
          },
          {
            context: ["Hast", "du", "heute", "Abend", "Zeit", "?"],
            correctAnswer: "Hast du heute Abend Zeit?"
          },
          {
            context: ["Der", "Bus", "fährt", "um", "7:30", "ab"],
            correctAnswer: "Der Bus fährt um 7:30 ab"
          }
        ],
        correctAnswer: ["Morgen habe ich einen wichtigen Termin", "Wir treffen uns um halb acht", "Hast du heute Abend Zeit?", "Der Bus fährt um 7:30 ab"],
        points: 8
      }
    ]
  },

  // ===== TEST 5: Food & Modal Verbs =====
  {
    id: 'a11-test-5',
    title: 'A1.1 Test 5 - Food & Modal Verbs',
    level: 'A1.1',
    totalPoints: 60,
    timeLimit: 50,
    exercises: [
      {
        id: 't5-ex1',
        type: 'complete-text',
        title: 'Exercise 1: At the supermarket',
        instructions: {
          en: 'Complete the shopping conversation with correct verb forms',
          de: 'Vervollständigen Sie das Einkaufsgespräch mit den richtigen Verbformen'
        },
        context: "Anna ______ (gehen) einkaufen. Sie ______ (haben) einen Einkaufszettel und ______ (brauchen) viele Lebensmittel.\n\nVerkäufer: Guten Tag! Was ______ (möchten) Sie?\n\nAnna: Ich ______ (brauchen) zwei Kilo Äpfel, ein Liter Milch und 500 Gramm Käse.\n\nVerkäufer: ______ (möchten) Sie auch Fleisch oder Fisch?\n\nAnna: Ja, ich ______ (nehmen) ein Stück Brot und drei Brötchen. ______ (haben) Sie auch frischen Fisch?\n\nVerkäufer: Ja, natürlich. Der Lachs ______ (sein) sehr gut heute. ______ (mögen) Sie Lachs?\n\nAnna: Nein, danke. Lachs ______ (schmecken) mir nicht so gut. Was ______ (kosten) das alles?",
        correctAnswer: ["geht", "hat", "braucht", "möchten", "brauche", "Möchten", "nehme", "Haben", "ist", "Mögen", "schmeckt", "kostet"],
        points: 12
      },
      {
        id: 't5-ex2',
        type: 'fill-in-the-blank',
        title: 'Exercise 2: Modal verbs (können, wollen, müssen, möchten)',
        instructions: {
          en: 'Complete with the correct modal verb',
          de: 'Ergänzen Sie mit dem richtigen Modalverb'
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
        points: 8
      },
      {
        id: 't5-ex3',
        type: 'matching',
        title: 'Exercise 3: Food categories',
        instructions: {
          en: 'Match foods with their categories',
          de: 'Ordnen Sie Lebensmittel ihren Kategorien zu'
        },
        context: ["die Banane", "der Schinken", "die Kartoffel", "der Joghurt", "der Lachs", "die Zwiebel"],
        options: ["Obst", "Fleisch", "Gemüse", "Milchprodukt", "Fisch", "Gemüse"],
        correctAnswer: ["Obst", "Fleisch", "Gemüse", "Milchprodukt", "Fisch", "Gemüse"],
        points: 6
      },
      {
        id: 't5-ex4',
        type: 'multiple-choice',
        title: 'Exercise 4: Meals and preferences',
        instructions: {
          en: 'Choose the correct option',
          de: 'Wählen Sie die richtige Option'
        },
        questions: [
          {
            context: "Zum ______ esse ich oft Müsli.",
            options: ["Frühstück", "Mittagessen", "Abendessen"],
            correctAnswer: "Frühstück"
          },
          {
            context: "Pizza ______ mir sehr gut.",
            options: ["schmeckt", "kostet", "probiert"],
            correctAnswer: "schmeckt"
          },
          {
            context: "Ich ______ gern Schokolade.",
            options: ["trinke", "mag", "bezahle"],
            correctAnswer: "mag"
          },
          {
            context: "______ Sie den Kuchen mal!",
            options: ["Kosten", "Probieren", "Bezahlen"],
            correctAnswer: "Probieren"
          },
          {
            context: "Ich habe großen ______ auf Pizza.",
            options: ["Durst", "Hunger", "Preis"],
            correctAnswer: "Hunger"
          },
          {
            context: "Können Sie mit EC-Karte ______?",
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
          en: 'Complete with quantities and containers',
          de: 'Ergänzen Sie mit Mengen und Verpackungen'
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
            context: "Ich nehme ein ______ Brot. (piece)",
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
          en: 'Complete with frequency expressions',
          de: 'Ergänzen Sie mit Häufigkeitsausdrücken'
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
          }
        ],
        correctAnswer: ["oft", "selten", "manchmal", "immer"],
        points: 4
      },
      {
        id: 't5-ex7',
        type: 'sentence-scramble',
        title: 'Exercise 7: Restaurant conversation',
        instructions: {
          en: 'Build sentences for restaurant dialogue',
          de: 'Bilden Sie Sätze für ein Restaurantgespräch'
        },
        questions: [
          {
            context: ["Ich", "möchte", "bitte", "die", "Speisekarte"],
            correctAnswer: "Ich möchte bitte die Speisekarte"
          },
          {
            context: ["Können", "Sie", "mir", "das", "Menü", "empfehlen", "?"],
            correctAnswer: "Können Sie mir das Menü empfehlen?"
          },
          {
            context: ["Die", "Rechnung", "bitte"],
            correctAnswer: "Die Rechnung bitte"
          },
          {
            context: ["Ich", "kann", "nicht", "scharf", "essen"],
            correctAnswer: "Ich kann nicht scharf essen"
          }
        ],
        correctAnswer: ["Ich möchte bitte die Speisekarte", "Können Sie mir das Menü empfehlen?", "Die Rechnung bitte", "Ich kann nicht scharf essen"],
        points: 12
      }
    ]
  },

  // ===== TEST 6: Work & Professions =====
  {
    id: 'a11-test-6',
    title: 'A1.1 Test 6 - Work & Professions',
    level: 'A1.1',
    totalPoints: 50,
    timeLimit: 45,
    exercises: [
      {
        id: 't6-ex1',
        type: 'fill-in-the-blank',
        title: 'Exercise 1: Professions and workplaces',
        instructions: {
          en: 'Complete with professions and verb forms',
          de: 'Ergänzen Sie mit Berufen und Verbformen'
        },
        questions: [
          {
            context: "Der ______ (koch) ______ (arbeiten) in der Küche.",
            correctAnswer: ["Koch", "arbeitet"]
          },
          {
            context: "Die ______ (krankenschwester) ______ (helfen) den Patienten.",
            correctAnswer: ["Krankenschwester", "hilft"]
          },
          {
            context: "Der ______ (taxifahrer) ______ (fahren) Personen durch die Stadt.",
            correctAnswer: ["Taxifahrer", "fährt"]
          },
          {
            context: "Die ______ (lehrerin) ______ (unterrichten) Kinder in der Schule.",
            correctAnswer: ["Lehrerin", "unterrichtet"]
          },
          {
            context: "Der ______ (verkäufer) ______ (arbeiten) im Geschäft.",
            correctAnswer: ["Verkäufer", "arbeitet"]
          }
        ],
        correctAnswer: ["Koch", "arbeitet", "Krankenschwester", "hilft", "Taxifahrer", "fährt", "Lehrerin", "unterrichtet", "Verkäufer", "arbeitet"],
        points: 10
      },
      {
        id: 't6-ex2',
        type: 'complete-text',
        title: 'Exercise 2: Job interview',
        instructions: {
          en: 'Complete the job interview dialogue',
          de: 'Vervollständigen Sie das Vorstellungsgespräch'
        },
        context: "Chefin: Guten Tag! ______ (können) Sie sich vorstellen?\n\nBewerber: Ich ______ (heißen) Thomas Müller und ______ (sein) 28 Jahre alt. Ich ______ (kommen) aus Hamburg und ______ (wohnen) jetzt in Berlin.\n\nChefin: Was ______ (sein) Sie von Beruf?\n\nBewerber: Ich ______ (sein) Koch und ______ (haben) fünf Jahre Erfahrung. Ich ______ (können) sehr gut kochen und ______ (arbeiten) gern im Team.\n\nChefin: ______ (müssen) Sie auch am Wochenende arbeiten?\n\nBewerber: Das ______ (gehen) in Ordnung. Ich ______ (wollen) gern in Ihrem Restaurant arbeiten.",
        correctAnswer: ["Können", "heiße", "bin", "komme", "wohne", "sind", "bin", "habe", "kann", "arbeite", "Müssen", "geht", "möchte"],
        points: 13
      },
      {
        id: 't6-ex3',
        type: 'matching',
        title: 'Exercise 3: Work activities',
        instructions: {
          en: 'Match professions with their activities',
          de: 'Ordnen Sie Berufe ihren Tätigkeiten zu'
        },
        context: ["der Arzt", "der Kellner", "die Sekretärin", "der Hausmeister", "die Köchin", "der Briefträger"],
        options: ["repariert Sachen", "operiert Patienten", "kocht Essen", "bringt Post", "bedient Gäste", "schreibt E-Mails"],
        correctAnswer: ["operiert Patienten", "bedient Gäste", "schreibt E-Mails", "repariert Sachen", "kocht Essen", "bringt Post"],
        points: 6
      },
      {
        id: 't6-ex4',
        type: 'multiple-choice',
        title: 'Exercise 4: Working conditions',
        instructions: {
          en: 'Choose the correct option',
          de: 'Wählen Sie die richtige Option'
        },
        questions: [
          {
            context: "Ich ______ 1500 Euro im Monat.",
            options: ["verdiene", "koste", "bezahle"],
            correctAnswer: "verdiene"
          },
          {
            context: "Die Arbeit ist sehr ______.",
            options: ["müde", "anstrengend", "Geld"],
            correctAnswer: "anstrengend"
          },
          {
            context: "Ich arbeite nicht gern ______.",
            options: ["zusammen", "alleine", "Team"],
            correctAnswer: "alleine"
          },
          {
            context: "Meine ______ sind von 9 bis 17 Uhr.",
            options: ["Arbeitsplatz", "Arbeitszeiten", "Arbeit"],
            correctAnswer: "Arbeitszeiten"
          },
          {
            context: "Im ______ gibt es viele Computer.",
            options: ["Krankenhaus", "Büro", "Restaurant"],
            correctAnswer: "Büro"
          }
        ],
        correctAnswer: ["verdiene", "anstrengend", "alleine", "Arbeitszeiten", "Büro"],
        points: 10
      },
      {
        id: 't6-ex5',
        type: 'fill-in-the-blank',
        title: 'Exercise 5: Banking vocabulary',
        instructions: {
          en: 'Complete with banking terms',
          de: 'Ergänzen Sie mit Bankbegriffen'
        },
        questions: [
          {
            context: "Ich hole Geld am ______ (ATM).",
            correctAnswer: "Geldautomaten"
          },
          {
            context: "Meine ______ (account number) ist sehr lang.",
            correctAnswer: "Kontonummer"
          },
          {
            context: "Ich ______ (transfer) Geld an meine Mutter.",
            correctAnswer: "überweise"
          },
          {
            context: "Wo ist mein ______? (bank statement)",
            correctAnswer: "Kontoauszug"
          }
        ],
        correctAnswer: ["Geldautomaten", "Kontonummer", "überweise", "Kontoauszug"],
        points: 4
      },
      {
        id: 't6-ex6',
        type: 'sentence-scramble',
        title: 'Exercise 6: Work descriptions',
        instructions: {
          en: 'Build sentences about work',
          de: 'Bilden Sie Sätze über die Arbeit'
        },
        questions: [
          {
            context: ["Ich", "arbeite", "als", "Verkäuferin", "im", "Supermarkt"],
            correctAnswer: "Ich arbeite als Verkäuferin im Supermarkt"
          },
          {
            context: ["Der", "Chef", "ist", "sehr", "nett"],
            correctAnswer: "Der Chef ist sehr nett"
          },
          {
            context: ["Wir", "haben", "eine", "Pause", "um", "12", "Uhr"],
            correctAnswer: "Wir haben eine Pause um 12 Uhr"
          }
        ],
        correctAnswer: ["Ich arbeite als Verkäuferin im Supermarkt", "Der Chef ist sehr nett", "Wir haben eine Pause um 12 Uhr"],
        points: 9
      }
    ]
  }
];