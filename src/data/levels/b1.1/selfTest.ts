import { Test } from '../../../types';

export const b1_1_Tests: Test[] = [
  // ===== TEST 1: Connectors & Causal Relations (Modules 1-2) =====
  {
    id: "b1.1-test-1",
    title: "Self-Test 1: Connectors & Clauses",
    level: "B1.1",
    totalPoints: 60,
    timeLimit: 45,
    exercises: [
      {
        id: "b1t1-ex1",
        type: "fill-in-the-blank",
        title: "Obwohl vs. Trotzdem",
        instructions: {
          en: "Complete the sentences with 'obwohl' or 'trotzdem'.",
          de: "Ergänzen Sie die Sätze mit 'obwohl' oder 'trotzdem'."
        },
        points: 12,
        questions: [
          {
            context: "________ er krank war, ging er zur Arbeit.",
            correctAnswer: ["Obwohl"]
          },
          {
            context: "Sie hatte wenig Zeit. ________ half sie mir.",
            correctAnswer: ["Trotzdem"]
          },
          {
            context: "________ ich müde bin, kann ich nicht schlafen.",
            correctAnswer: ["Obwohl"]
          },
          {
            context: "Das Wetter war schlecht. ________ sind wir spazieren gegangen.",
            correctAnswer: ["Trotzdem"]
          },
          {
            context: "________ sie Vegetarierin ist, isst sie manchmal Fisch.",
            correctAnswer: ["Obwohl"]
          },
          {
            context: "Der Film war langweilig. Wir haben ihn ________ zu Ende geschaut.",
            correctAnswer: ["trotzdem"]
          }
        ],
        correctAnswer: ["Obwohl", "Trotzdem", "Obwohl", "Trotzdem", "Obwohl", "trotzdem"]
      },
      {
        id: "b1t1-ex2",
        type: "fill-in-the-blank",
        title: "Weil vs. Deshalb",
        instructions: {
          en: "Complete with 'weil' or 'deshalb'.",
          de: "Ergänzen Sie mit 'weil' oder 'deshalb'."
        },
        points: 12,
        questions: [
          {
            context: "Ich bleibe zu Hause, ________ ich krank bin.",
            correctAnswer: ["weil"]
          },
          {
            context: "Er hat viel gearbeitet. ________ ist er müde.",
            correctAnswer: ["Deshalb"]
          },
          {
            context: "________ das Essen schlecht war, habe ich mich beschwert.",
            correctAnswer: ["Weil"]
          },
          {
            context: "Das Wetter ist schön. ________ gehen wir schwimmen.",
            correctAnswer: ["Deshalb"]
          },
          {
            context: "Sie lernt Deutsch, ________ sie in Deutschland arbeiten möchte.",
            correctAnswer: ["weil"]
          },
          {
            context: "Der Zug hatte Verspätung. Ich bin ________ zu spät gekommen.",
            correctAnswer: ["deshalb"]
          }
        ],
        correctAnswer: ["weil", "Deshalb", "Weil", "Deshalb", "weil", "deshalb"]
      },
      {
        id: "b1t1-ex3",
        type: "multiple-choice",
        title: "Subordinate vs. Main Clause Word Order",
        instructions: {
          en: "Choose the grammatically correct sentence.",
          de: "Wählen Sie den grammatisch korrekten Satz."
        },
        points: 12,
        questions: [
          {
            context: "I didn't come because I was sick.",
            options: [
              "Ich bin nicht gekommen, weil ich krank war.",
              "Ich bin nicht gekommen, weil ich war krank.",
              "Ich bin nicht gekommen, weil war ich krank."
            ],
            correctAnswer: ["Ich bin nicht gekommen, weil ich krank war."]
          },
          {
            context: "She works a lot. Therefore she earns well.",
            options: [
              "Sie arbeitet viel. Deshalb sie verdient gut.",
              "Sie arbeitet viel. Deshalb verdient sie gut.",
              "Sie arbeitet viel. Sie verdient deshalb gut."
            ],
            correctAnswer: ["Sie arbeitet viel. Deshalb verdient sie gut."]
          },
          {
            context: "Although he is tired, he continues working.",
            options: [
              "Obwohl er müde ist, er arbeitet weiter.",
              "Obwohl er ist müde, arbeitet er weiter.",
              "Obwohl er müde ist, arbeitet er weiter."
            ],
            correctAnswer: ["Obwohl er müde ist, arbeitet er weiter."]
          },
          {
            context: "The food was cold. Nevertheless, I ate it.",
            options: [
              "Das Essen war kalt. Trotzdem habe ich es gegessen.",
              "Das Essen war kalt. Trotzdem ich habe es gegessen.",
              "Das Essen war kalt. Ich habe trotzdem gegessen es."
            ],
            correctAnswer: ["Das Essen war kalt. Trotzdem habe ich es gegessen."]
          }
        ],
        correctAnswer: [
          "Ich bin nicht gekommen, weil ich krank war.",
          "Sie arbeitet viel. Deshalb verdient sie gut.",
          "Obwohl er müde ist, arbeitet er weiter.",
          "Das Essen war kalt. Trotzdem habe ich es gegessen."
        ]
      },
      {
        id: "b1t1-ex4",
        type: "fill-in-the-blank",
        title: "Um...zu vs. Damit",
        instructions: {
          en: "Complete with 'um...zu' or 'damit'.",
          de: "Ergänzen Sie mit 'um...zu' oder 'damit'."
        },
        points: 12,
        questions: [
          {
            context: "Ich lerne Deutsch, ________ ich besser kommunizieren kann.",
            correctAnswer: ["damit"]
          },
          {
            context: "Er spart Geld, ________ ein Haus ________ kaufen.",
            correctAnswer: ["um", "zu"]
          },
          {
            context: "Sie fährt langsamer, ________ die Kinder sicher sind.",
            correctAnswer: ["damit"]
          },
          {
            context: "Ich rufe an, ________ dich ________ informieren.",
            correctAnswer: ["um", "zu"]
          },
          {
            context: "Er spricht lauter, ________ alle ihn verstehen können.",
            correctAnswer: ["damit"]
          }
        ],
        correctAnswer: ["damit", "um", "zu", "damit", "um", "zu", "damit"]
      },
      {
        id: "b1t1-ex5",
        type: "fill-in-the-blank",
        title: "Anstatt...zu / Ohne...zu",
        instructions: {
          en: "Complete the sentences with the correct form.",
          de: "Ergänzen Sie die Sätze mit der richtigen Form."
        },
        points: 12,
        questions: [
          {
            context: "________ zu lernen, spielt er Computer.",
            correctAnswer: ["Anstatt"]
          },
          {
            context: "Er ging weg, ________ sich zu verabschieden.",
            correctAnswer: ["ohne"]
          },
          {
            context: "________ zu arbeiten, liegt sie den ganzen Tag im Bett.",
            correctAnswer: ["Anstatt"]
          },
          {
            context: "Sie bestellte das Essen, ________ die Speisekarte zu lesen.",
            correctAnswer: ["ohne"]
          },
          {
            context: "________ mir zu helfen, schaut er nur zu.",
            correctAnswer: ["Anstatt"]
          },
          {
            context: "Er hat das Auto gekauft, ________ es zu testen.",
            correctAnswer: ["ohne"]
          }
        ],
        correctAnswer: ["Anstatt", "ohne", "Anstatt", "ohne", "Anstatt", "ohne"]
      }
    ]
  },

  // ===== TEST 2: Temporal & Conditional (Modules 3-4) =====
  {
    id: "b1.1-test-2",
    title: "Self-Test 2: Temporal & Past Tenses",
    level: "B1.1",
    totalPoints: 60,
    timeLimit: 50,
    exercises: [
      {
        id: "b1t2-ex1",
        type: "fill-in-the-blank",
        title: "Als vs. Wenn (Past)",
        instructions: {
          en: "Complete with 'als' (one-time past) or 'wenn' (repeated or conditional).",
          de: "Ergänzen Sie mit 'als' (einmalig Vergangenheit) oder 'wenn' (wiederholt oder Bedingung)."
        },
        points: 12,
        questions: [
          {
            context: "________ ich ein Kind war, wohnte ich in München.",
            correctAnswer: ["Als"]
          },
          {
            context: "________ es regnet, bleibe ich zu Hause.",
            correctAnswer: ["Wenn"]
          },
          {
            context: "________ ich gestern ankam, war niemand da.",
            correctAnswer: ["Als"]
          },
          {
            context: "Früher, ________ ich Zeit hatte, ging ich oft ins Kino.",
            correctAnswer: ["wenn"]
          },
          {
            context: "________ ich 18 wurde, machte ich den Führerschein.",
            correctAnswer: ["Als"]
          },
          {
            context: "________ du kommst, ruf mich bitte an.",
            correctAnswer: ["Wenn"]
          }
        ],
        correctAnswer: ["Als", "Wenn", "Als", "wenn", "Als", "Wenn"]
      },
      {
        id: "b1t2-ex2",
        type: "fill-in-the-blank",
        title: "Präteritum - Regular Verbs",
        instructions: {
          en: "Write the Präteritum form of the verb in parentheses.",
          de: "Schreiben Sie die Präteritumform des Verbs in Klammern."
        },
        points: 10,
        questions: [
          {
            context: "Ich ________ gestern den ganzen Tag. (arbeiten)",
            correctAnswer: ["arbeitete"]
          },
          {
            context: "Er ________ seine Eltern letzte Woche. (besuchen)",
            correctAnswer: ["besuchte"]
          },
          {
            context: "Wir ________ in der Schule viel. (lernen)",
            correctAnswer: ["lernten"]
          },
          {
            context: "Sie ________ in Berlin. (wohnen)",
            correctAnswer: ["wohnte"]
          },
          {
            context: "Die Kinder ________ im Garten. (spielen)",
            correctAnswer: ["spielten"]
          }
        ],
        correctAnswer: ["arbeitete", "besuchte", "lernten", "wohnte", "spielten"]
      },
      {
        id: "b1t2-ex3",
        type: "fill-in-the-blank",
        title: "Präteritum - Irregular Verbs",
        instructions: {
          en: "Write the Präteritum form of the irregular verb.",
          de: "Schreiben Sie die Präteritumform des unregelmäßigen Verbs."
        },
        points: 12,
        questions: [
          {
            context: "Er ________ gestern ins Kino. (gehen)",
            correctAnswer: ["ging"]
          },
          {
            context: "Wir ________ ein schönes Buch. (lesen)",
            correctAnswer: ["lasen"]
          },
          {
            context: "Sie ________ den ganzen Tag. (schlafen)",
            correctAnswer: ["schlief"]
          },
          {
            context: "Ich ________ letztes Jahr nach Italien. (fahren)",
            correctAnswer: ["fuhr"]
          },
          {
            context: "Er ________ mir die Wahrheit. (sagen → said in context 'told')",
            correctAnswer: ["sagte"]
          },
          {
            context: "Die Kinder ________ Kuchen. (essen)",
            correctAnswer: ["aßen"]
          }
        ],
        correctAnswer: ["ging", "lasen", "schlief", "fuhr", "sagte", "aßen"]
      },
      {
        id: "b1t2-ex4",
        type: "fill-in-the-blank",
        title: "Bevor, Während, Nachdem",
        instructions: {
          en: "Complete with 'bevor', 'während', or 'nachdem'.",
          de: "Ergänzen Sie mit 'bevor', 'während' oder 'nachdem'."
        },
        points: 12,
        questions: [
          {
            context: "________ ich esse, wasche ich mir die Hände.",
            correctAnswer: ["Bevor"]
          },
          {
            context: "________ ich dusche, höre ich Musik.",
            correctAnswer: ["Während"]
          },
          {
            context: "________ er angekommen war, rief er mich an.",
            correctAnswer: ["Nachdem"]
          },
          {
            context: "________ du gehst, schließ bitte die Tür.",
            correctAnswer: ["Bevor"]
          },
          {
            context: "________ wir gegessen hatten, gingen wir spazieren.",
            correctAnswer: ["Nachdem"]
          },
          {
            context: "________ sie arbeitet, trinkt sie Kaffee.",
            correctAnswer: ["Während"]
          }
        ],
        correctAnswer: ["Bevor", "Während", "Nachdem", "Bevor", "Nachdem", "Während"]
      },
      {
        id: "b1t2-ex5",
        type: "fill-in-the-blank",
        title: "Plusquamperfekt",
        instructions: {
          en: "Complete with the correct Plusquamperfekt form.",
          de: "Ergänzen Sie mit der richtigen Plusquamperfekt-Form."
        },
        points: 14,
        questions: [
          {
            context: "Nachdem ich ________ ________, ging ich ins Bett. (essen)",
            correctAnswer: ["gegessen", "hatte"]
          },
          {
            context: "Bevor er kam, ________ sie schon ________. (gehen)",
            correctAnswer: ["war", "gegangen"]
          },
          {
            context: "Nachdem wir den Film ________ ________, diskutierten wir. (sehen)",
            correctAnswer: ["gesehen", "hatten"]
          },
          {
            context: "Sie war müde, weil sie nicht ________ ________. (schlafen)",
            correctAnswer: ["geschlafen", "hatte"]
          },
          {
            context: "Er wusste die Antwort, weil er das Buch ________ ________. (lesen)",
            correctAnswer: ["gelesen", "hatte"]
          }
        ],
        correctAnswer: ["gegessen", "hatte", "war", "gegangen", "gesehen", "hatten", "geschlafen", "hatte", "gelesen", "hatte"]
      }
    ]
  },

  // ===== TEST 3: Advanced Grammar (Modules 5-6) =====
  {
    id: "b1.1-test-3",
    title: "Self-Test 3: Advanced Structures",
    level: "B1.1",
    totalPoints: 70,
    timeLimit: 55,
    exercises: [
      {
        id: "b1t3-ex1",
        type: "fill-in-the-blank",
        title: "Genitiv",
        instructions: {
          en: "Complete with the correct genitive form.",
          de: "Ergänzen Sie mit der richtigen Genitivform."
        },
        points: 14,
        questions: [
          {
            context: "Das ist das Auto ________ Vaters. (mein)",
            correctAnswer: ["meines"]
          },
          {
            context: "Die Farbe ________ Hauses gefällt mir. (das)",
            correctAnswer: ["des"]
          },
          {
            context: "Der Name ________ Frau ist mir bekannt. (die)",
            correctAnswer: ["der"]
          },
          {
            context: "Das Ende ________ Films war traurig. (der)",
            correctAnswer: ["des"]
          },
          {
            context: "Die Kinder ________ Nachbarn spielen im Garten. (die/Plural)",
            correctAnswer: ["der"]
          },
          {
            context: "Wegen ________ schlechten Wetters blieben wir zu Hause. (das)",
            correctAnswer: ["des"]
          },
          {
            context: "Trotz ________ Regens gingen wir spazieren. (der)",
            correctAnswer: ["des"]
          }
        ],
        correctAnswer: ["meines", "des", "der", "des", "der", "des", "des"]
      },
      {
        id: "b1t3-ex2",
        type: "fill-in-the-blank",
        title: "Konjunktiv II - Höflichkeit & Wünsche",
        instructions: {
          en: "Complete with the correct Konjunktiv II form.",
          de: "Ergänzen Sie mit der richtigen Konjunktiv II-Form."
        },
        points: 12,
        questions: [
          {
            context: "________ Sie mir bitte helfen? (können)",
            correctAnswer: ["Könnten"]
          },
          {
            context: "Ich ________ gern einen Kaffee. (haben → möchten)",
            correctAnswer: ["hätte"]
          },
          {
            context: "Wenn ich reich ________, würde ich reisen. (sein)",
            correctAnswer: ["wäre"]
          },
          {
            context: "________ du mir das Salz geben? (können)",
            correctAnswer: ["Könntest"]
          },
          {
            context: "Ich ________ lieber zu Hause bleiben. (werden)",
            correctAnswer: ["würde"]
          },
          {
            context: "Wenn ich Zeit ________, würde ich dir helfen. (haben)",
            correctAnswer: ["hätte"]
          }
        ],
        correctAnswer: ["Könnten", "hätte", "wäre", "Könntest", "würde", "hätte"]
      },
      {
        id: "b1t3-ex3",
        type: "fill-in-the-blank",
        title: "Relativsätze",
        instructions: {
          en: "Complete with the correct relative pronoun (der, die, das, den, dem, dessen, deren).",
          de: "Ergänzen Sie mit dem richtigen Relativpronomen."
        },
        points: 14,
        questions: [
          {
            context: "Der Mann, ________ dort steht, ist mein Chef.",
            correctAnswer: ["der"]
          },
          {
            context: "Die Frau, ________ ich geholfen habe, war sehr dankbar.",
            correctAnswer: ["der"]
          },
          {
            context: "Das Buch, ________ auf dem Tisch liegt, gehört mir.",
            correctAnswer: ["das"]
          },
          {
            context: "Der Student, ________ Arbeit sehr gut war, bekam eine Eins.",
            correctAnswer: ["dessen"]
          },
          {
            context: "Die Kinder, ________ im Park spielen, sind sehr laut.",
            correctAnswer: ["die"]
          },
          {
            context: "Der Film, ________ wir gesehen haben, war spannend.",
            correctAnswer: ["den"]
          },
          {
            context: "Das ist der Mann, mit ________ ich gesprochen habe.",
            correctAnswer: ["dem"]
          }
        ],
        correctAnswer: ["der", "der", "das", "dessen", "die", "den", "dem"]
      },
      {
        id: "b1t3-ex4",
        type: "fill-in-the-blank",
        title: "Passiv Präsens",
        instructions: {
          en: "Transform to passive or complete the passive sentence.",
          de: "Bilden Sie das Passiv oder ergänzen Sie den Passivsatz."
        },
        points: 12,
        questions: [
          {
            context: "Das Essen ________ von meiner Mutter gekocht. (werden)",
            correctAnswer: ["wird"]
          },
          {
            context: "Die Hausaufgaben ________ von den Schülern gemacht. (werden)",
            correctAnswer: ["werden"]
          },
          {
            context: "Das Auto ________ jetzt repariert. (werden)",
            correctAnswer: ["wird"]
          },
          {
            context: "Die Briefe ________ jeden Tag zugestellt. (werden)",
            correctAnswer: ["werden"]
          },
          {
            context: "Die Tür ________ um 8 Uhr geschlossen. (werden)",
            correctAnswer: ["wird"]
          },
          {
            context: "Hier ________ Deutsch gesprochen. (werden)",
            correctAnswer: ["wird"]
          }
        ],
        correctAnswer: ["wird", "werden", "wird", "werden", "wird", "wird"]
      },
      {
        id: "b1t3-ex5",
        type: "fill-in-the-blank",
        title: "Verben mit Präpositionen",
        instructions: {
          en: "Complete with the correct preposition.",
          de: "Ergänzen Sie mit der richtigen Präposition."
        },
        points: 10,
        questions: [
          {
            context: "Ich warte ________ den Bus.",
            correctAnswer: ["auf"]
          },
          {
            context: "Sie interessiert sich ________ Musik.",
            correctAnswer: ["für"]
          },
          {
            context: "Er denkt ________ seine Familie.",
            correctAnswer: ["an"]
          },
          {
            context: "Wir freuen uns ________ den Urlaub.",
            correctAnswer: ["auf"]
          },
          {
            context: "Ich habe Angst ________ Spinnen.",
            correctAnswer: ["vor"]
          }
        ],
        correctAnswer: ["auf", "für", "an", "auf", "vor"]
      },
      {
        id: "b1t3-ex6",
        type: "multiple-choice",
        title: "Zweiteilige Konnektoren",
        instructions: {
          en: "Choose the correct connector pair.",
          de: "Wählen Sie das richtige Konnektoren-Paar."
        },
        points: 8,
        questions: [
          {
            context: "________ regnet es, ________ scheint die Sonne. (Either...or)",
            options: ["Entweder...oder", "Sowohl...als auch", "Weder...noch"],
            correctAnswer: ["Entweder...oder"]
          },
          {
            context: "Er spricht ________ Deutsch ________ Englisch. (both...and)",
            options: ["entweder...oder", "sowohl...als auch", "weder...noch"],
            correctAnswer: ["sowohl...als auch"]
          },
          {
            context: "Sie trinkt ________ Kaffee ________ Tee. (neither...nor)",
            options: ["entweder...oder", "sowohl...als auch", "weder...noch"],
            correctAnswer: ["weder...noch"]
          },
          {
            context: "________ er kommt, ________ ich gehe. (Either...or)",
            options: ["Entweder...oder", "Sowohl...als auch", "Nicht nur...sondern auch"],
            correctAnswer: ["Entweder...oder"]
          }
        ],
        correctAnswer: ["Entweder...oder", "sowohl...als auch", "weder...noch", "Entweder...oder"]
      }
    ]
  },

  // ===== TEST 4: Comprehensive Review =====
  {
    id: "b1.1-test-4",
    title: "Self-Test 4: Final Review",
    level: "B1.1",
    totalPoints: 80,
    timeLimit: 60,
    exercises: [
      {
        id: "b1t4-ex1",
        type: "fill-in-the-blank",
        title: "N-Deklination",
        instructions: {
          en: "Complete with the correct N-declension form.",
          de: "Ergänzen Sie mit der richtigen N-Deklination."
        },
        points: 10,
        questions: [
          {
            context: "Ich kenne den ________ nicht. (Student)",
            correctAnswer: ["Studenten"]
          },
          {
            context: "Das ist das Haus des ________. (Nachbar)",
            correctAnswer: ["Nachbarn"]
          },
          {
            context: "Ich habe dem ________ geholfen. (Junge)",
            correctAnswer: ["Jungen"]
          },
          {
            context: "Der ________ arbeitet im Krankenhaus. (Biologe)",
            correctAnswer: ["Biologe"]
          },
          {
            context: "Kennst du den neuen ________? (Kollege)",
            correctAnswer: ["Kollegen"]
          }
        ],
        correctAnswer: ["Studenten", "Nachbarn", "Jungen", "Biologe", "Kollegen"]
      },
      {
        id: "b1t4-ex2",
        type: "fill-in-the-blank",
        title: "Indirekte Fragen",
        instructions: {
          en: "Transform direct questions into indirect questions.",
          de: "Verwandeln Sie direkte Fragen in indirekte Fragen."
        },
        points: 12,
        questions: [
          {
            context: "Wo ist der Bahnhof? → Können Sie mir sagen, ________ der Bahnhof ________?",
            correctAnswer: ["wo", "ist"]
          },
          {
            context: "Wann kommt der Zug? → Ich weiß nicht, ________ der Zug ________.",
            correctAnswer: ["wann", "kommt"]
          },
          {
            context: "Hat er Zeit? → Ich frage mich, ________ er Zeit ________.",
            correctAnswer: ["ob", "hat"]
          },
          {
            context: "Wie viel kostet das? → Wissen Sie, ________ ________ das ________?",
            correctAnswer: ["wie", "viel", "kostet"]
          }
        ],
        correctAnswer: ["wo", "ist", "wann", "kommt", "ob", "hat", "wie", "viel", "kostet"]
      },
      {
        id: "b1t4-ex3",
        type: "fill-in-the-blank",
        title: "Reflexive Verben mit Präpositionen",
        instructions: {
          en: "Complete with the correct reflexive pronoun and preposition.",
          de: "Ergänzen Sie mit dem richtigen Reflexivpronomen und der Präposition."
        },
        points: 12,
        questions: [
          {
            context: "Ich freue ________ ________ das Geschenk.",
            correctAnswer: ["mich", "über"]
          },
          {
            context: "Er interessiert ________ ________ Sport.",
            correctAnswer: ["sich", "für"]
          },
          {
            context: "Wir erinnern ________ ________ den Urlaub.",
            correctAnswer: ["uns", "an"]
          },
          {
            context: "Sie kümmert ________ ________ ihre Großmutter.",
            correctAnswer: ["sich", "um"]
          },
          {
            context: "Ich ärgere ________ ________ den Lärm.",
            correctAnswer: ["mich", "über"]
          }
        ],
        correctAnswer: ["mich", "über", "sich", "für", "uns", "an", "sich", "um", "mich", "über"]
      },
      {
        id: "b1t4-ex4",
        type: "fill-in-the-blank",
        title: "Zu-Infinitiv Konstruktionen",
        instructions: {
          en: "Complete with 'zu' where necessary (write '-' if not needed).",
          de: "Ergänzen Sie mit 'zu' wo nötig (schreiben Sie '-' wenn nicht nötig)."
        },
        points: 10,
        questions: [
          {
            context: "Ich habe keine Lust, heute ________ arbeiten.",
            correctAnswer: ["zu"]
          },
          {
            context: "Er kann gut Deutsch ________ sprechen.",
            correctAnswer: ["-"]
          },
          {
            context: "Es ist wichtig, viel ________ lernen.",
            correctAnswer: ["zu"]
          },
          {
            context: "Ich lasse mein Auto ________ reparieren.",
            correctAnswer: ["-"]
          },
          {
            context: "Er vergisst immer, die Tür ________ schließen.",
            correctAnswer: ["zu"]
          }
        ],
        correctAnswer: ["zu", "-", "zu", "-", "zu"]
      },
      {
        id: "b1t4-ex5",
        type: "fill-in-the-blank",
        title: "Adjektive mit Dativ",
        instructions: {
          en: "Complete the sentences with the adjective and correct ending.",
          de: "Ergänzen Sie die Sätze mit dem Adjektiv und der richtigen Endung."
        },
        points: 12,
        questions: [
          {
            context: "Das ist mir ________. (egal)",
            correctAnswer: ["egal"]
          },
          {
            context: "Die Aufgabe war ________ ________ leicht. (ich)",
            correctAnswer: ["mir", "zu"]
          },
          {
            context: "Der Film war ________ langweilig. (ich)",
            correctAnswer: ["mir"]
          },
          {
            context: "Ist dir das ________? (klar)",
            correctAnswer: ["klar"]
          },
          {
            context: "Das Wetter ist ________ egal. (er)",
            correctAnswer: ["ihm"]
          },
          {
            context: "Die Arbeit ist ________ wichtig. (wir)",
            correctAnswer: ["uns"]
          }
        ],
        correctAnswer: ["egal", "mir", "zu", "mir", "klar", "ihm", "uns"]
      },
      {
        id: "b1t4-ex6",
        type: "fill-in-the-blank",
        title: "Adjektive mit -un und -los",
        instructions: {
          en: "Form the opposite using -un or -los.",
          de: "Bilden Sie das Gegenteil mit -un oder -los."
        },
        points: 12,
        questions: [
          {
            context: "möglich → ________",
            correctAnswer: ["unmöglich"]
          },
          {
            context: "Arbeit haben → ________",
            correctAnswer: ["arbeitslos"]
          },
          {
            context: "freundlich → ________",
            correctAnswer: ["unfreundlich"]
          },
          {
            context: "Hoffnung haben → ________",
            correctAnswer: ["hoffnungslos"]
          },
          {
            context: "zufrieden → ________",
            correctAnswer: ["unzufrieden"]
          },
          {
            context: "Sinn haben → ________",
            correctAnswer: ["sinnlos"]
          }
        ],
        correctAnswer: ["unmöglich", "arbeitslos", "unfreundlich", "hoffnungslos", "unzufrieden", "sinnlos"]
      },
      {
        id: "b1t4-ex7",
        type: "multiple-choice",
        title: "Mixed Grammar",
        instructions: {
          en: "Choose the correct answer.",
          de: "Wählen Sie die richtige Antwort."
        },
        points: 12,
        questions: [
          {
            context: "________ ich 10 Jahre alt war, zogen wir nach Berlin.",
            options: ["Als", "Wenn", "Weil"],
            correctAnswer: ["Als"]
          },
          {
            context: "Das ist der Mann, ________ Auto gestohlen wurde.",
            options: ["der", "dem", "dessen"],
            correctAnswer: ["dessen"]
          },
          {
            context: "Ich gehe ins Bett, ________ ich müde bin.",
            options: ["weil", "obwohl", "deshalb"],
            correctAnswer: ["weil"]
          },
          {
            context: "________ Sie so freundlich sein und mir helfen?",
            options: ["Können", "Könnten", "Konnten"],
            correctAnswer: ["Könnten"]
          }
        ],
        correctAnswer: ["Als", "dessen", "weil", "Könnten"]
      }
    ]
  }
];
