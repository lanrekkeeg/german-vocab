import { Card, Translations } from '../../../types';

// B1.2 Vocabulary organized by module (8-14)
// Module 8: Ein neuer Start (A New Start)
// Module 9: Natur und Umwelt (Nature and Environment)
// Module 10: Gesund werden und bleiben (Getting and Staying Healthy)
// Module 11: Politik und Gesellschaft (Politics and Society)
// Module 12: Wie wird es sein? (How Will It Be?)
// Module 13: Rückblick und Ausblick (Review and Outlook)
// Module 14: Prüfungsvorbereitung (Exam Preparation)

const sanitizeFilename = (text: string): string => {
    let sanitized = text.replace(/\s+/g, '_');
    sanitized = sanitized.replace(/[^a-zA-Z0-9_äöüÄÖÜß]/g, '');
    return sanitized;
};

const addAudioPaths = (vocabBySection: Record<number, (Omit<Card, 'audioSrc' | 'translations'> & { translations: Omit<Translations, 'german'> })[]>) => {
  const result: Record<number, Card[]> = {};
  for (const section in vocabBySection) {
    result[section] = vocabBySection[section].map(card => ({
      ...card,
      translations: { ...card.translations, german: card.german },
      audioSrc: `${process.env.PUBLIC_URL}/syntactic_output/b1.2/words/${sanitizeFilename(card.german)}.mp3`
    }));
  }
  return result;
};

export const b1_2_Vocabulary: Record<number, Card[]> = addAudioPaths({

  // Module 8: Ein neuer Start (A New Start)
  // TODO: Extract vocabulary from AB Module 8 "Wichtige Wörter" section
  8: [],

  // Module 9: Natur und Umwelt (Nature and Environment)
  // TODO: Extract vocabulary from AB Module 9 "Wichtige Wörter" section
  9: [],

  // Module 10: Gesund werden und bleiben (Getting and Staying Healthy)
  // TODO: Extract vocabulary from AB Module 10 "Wichtige Wörter" section
  10: [],

  // Module 11: Politik und Gesellschaft (Politics and Society)
  // TODO: Extract vocabulary from AB Module 11 "Wichtige Wörter" section
  11: [],

  // Module 12: Wie wird es sein? (How Will It Be?)
  // TODO: Extract vocabulary from AB Module 12 "Wichtige Wörter" section
  12: [],

  // Module 13: Rückblick und Ausblick (Review and Outlook)
  // TODO: Extract vocabulary from AB Module 13 "Wichtige Wörter" section
  13: [],

  // Module 14: Prüfungsvorbereitung (Exam Preparation)
  // TODO: Extract vocabulary from AB Module 14 "Wichtige Wörter" section
  14: []
});

export const B1_2_ALL_SECTIONS = [8, 9, 10, 11, 12, 13, 14];
