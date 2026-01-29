// src/data/levels/a2.2/studyguides/index.ts

export interface StudyGuideModule {
    id: number;
    title: string;
    description: string;
    getContent: () => Promise<string>;
}

export const studyGuides: StudyGuideModule[] = [
    {
        id: 7,
        title: "Module 7: Feste feiern",
        description: "Celebrations, festivals, invitations, and dates",
        getContent: async () => (await import('./Module_7_Study_Guide')).markdown
    },
    {
        id: 8,
        title: "Module 8: Neue Chancen",
        description: "Job information centers, courses, and continuing education",
        getContent: async () => (await import('./Module_8_Study_Guide')).markdown
    },
    {
        id: 9,
        title: "Module 9: Gesund leben",
        description: "Health, doctor visits, medications, and nutrition",
        getContent: async () => (await import('./Module_9_Study_Guide')).markdown
    },
    {
        id: 10,
        title: "Module 10: Arbeitssuche",
        description: "Job searching, applications, and CV writing",
        getContent: async () => (await import('./Module_10_Study_Guide')).markdown
    },
    {
        id: 11,
        title: "Module 11: Von Ort zu Ort",
        description: "Travel, trip planning, and vacation destinations",
        getContent: async () => (await import('./Module_11_Study_Guide')).markdown
    },
    {
        id: 12,
        title: "Module 12: Treffpunkte",
        description: "Meeting points, volunteer work, and clubs",
        getContent: async () => (await import('./Module_12_Study_Guide')).markdown
    },
    {
        id: 13,
        title: "Module 13: Banken und Versicherungen",
        description: "Banking, insurance, and consumer rights",
        getContent: async () => (await import('./Module_13_Study_Guide')).markdown
    },
    {
        id: 14,
        title: "Module 14: Freunde und Bekannte",
        description: "Friends, acquaintances, and relationships",
        getContent: async () => (await import('./Module_14_Study_Guide')).markdown
    }
];
