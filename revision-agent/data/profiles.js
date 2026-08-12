// Kid profiles: which subjects apply at which MOE level.
// P2 has no Science/Humanities under MOE (Science starts P3, History/Geography start Lower Secondary).
// P4 syllabus for these kids covers Chinese + Science only (Social Studies intentionally excluded).
// Sec 2 covers Chinese + Combined Science + History + Geography.

const PROFILES = [
  {
    id: 'p2',
    label: 'Primary 2',
    tagline: 'Chinese Language',
    color: '#e8734a',
    subjects: ['chinese']
  },
  {
    id: 'p4',
    label: 'Primary 4',
    tagline: 'Chinese Language · Science',
    color: '#2f8f6e',
    subjects: ['chinese', 'science']
  },
  {
    id: 'sec2',
    label: 'Secondary 2',
    tagline: 'Chinese · Science · History · Geography',
    color: '#3763c9',
    subjects: ['chinese', 'science', 'history', 'geography']
  }
];

const SUBJECT_META = {
  chinese:  { label: 'Chinese 华文', icon: '🈶' },
  science:  { label: 'Science', icon: '🔬' },
  history:  { label: 'History', icon: '🏛️' },
  geography:{ label: 'Geography', icon: '🌏' }
};

// Maps subject key -> which content bank to use per level id.
// e.g. CONTENT.chinese.p2, CONTENT.science.p4, CONTENT.history.sec2
