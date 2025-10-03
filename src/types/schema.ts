// export type GermanLevel = 'A1.1' | 'A1.2' | 'A2.1' | 'A2.2' | 'B1.1' | 'B1.2';
export {}
// export interface Question {
//   context: string;
//   correctAnswer: string[];
// }

// export interface Exercise {
//   id: string;
//   type: 'fill-in-the-blank' | 'matching' | 'multiple-choice' | 'ordering';
//   title: string;
//   instructions: {
//     en: string;
//     de: string;
//   };
//   questions: Question[];
//   correctAnswer: string[];
//   points: number;
//   options?: string[]; // For matching and multiple-choice exercises
// }

// export interface Test {
//   id: string;
//   title: string;
//   level: GermanLevel;
//   totalPoints: number;
//   timeLimit: number; // in minutes
//   exercises: Exercise[];
// }

// // Schema for LLM to generate data
// export const testGenerationSchema = {
//   type: 'object',
//   properties: {
//     id: { type: 'string', description: 'Unique identifier for the test' },
//     title: { type: 'string', description: 'Title of the test' },
//     level: { type: 'string', enum: ['A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2'] },
//     totalPoints: { type: 'number', description: 'Total points for the test' },
//     timeLimit: { type: 'number', description: 'Time limit in minutes' },
//     exercises: {
//       type: 'array',
//       items: {
//         type: 'object',
//         properties: {
//           id: { type: 'string' },
//           type: { type: 'string', enum: ['fill-in-the-blank', 'matching', 'multiple-choice', 'ordering'] },
//           title: { type: 'string' },
//           instructions: {
//             type: 'object',
//             properties: {
//               en: { type: 'string' },
//               de: { type: 'string' }
//             }
//           },
//           questions: {
//             type: 'array',
//             items: {
//               type: 'object',
//               properties: {
//                 context: { type: 'string' },
//                 correctAnswer: { type: 'array', items: { type: 'string' } }
//               }
//             }
//           },
//           correctAnswer: { type: 'array', items: { type: 'string' } },
//           points: { type: 'number' },
//           options: { type: 'array', items: { type: 'string' } }
//         }
//       }
//     }
//   }
// };
