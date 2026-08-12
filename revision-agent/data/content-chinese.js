// Chinese Language content bank, keyed by level id (p2 / p4 / sec2).
// Schema per topic:
// {
//   id, title, titleEn, summary,
//   vocab: [{ term, pinyin, meaning }],
//   questions: [
//     { type:'mcq', q, options:[...], answer:index, explanation },
//     { type:'fill', q, answer:'string'|['alt1','alt2'], explanation },
//     { type:'match', instructions, pairs:[[left,right],...] },
//     { type:'short', q, answer, explanation }
//   ]
// }

const CONTENT_CHINESE = {
  p2: [
    {
      id: 'p2-cn-placeholder',
      title: '占位主题',
      titleEn: 'Placeholder topic',
      summary: 'Placeholder — will be replaced with real P2 Chinese syllabus content.',
      vocab: [],
      questions: [
        { type: 'mcq', q: '占位题目？', options: ['A', 'B', 'C', 'D'], answer: 0, explanation: 'Placeholder.' }
      ]
    }
  ],
  p4: [],
  sec2: []
};
