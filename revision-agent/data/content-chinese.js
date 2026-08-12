// Chinese Language content bank, keyed by level id (p2 / p4 / sec2).
// P2: based on 2024 syllabus, 欢乐伙伴2.0 themes (no formal MOE exam at P2 - practice/revision framing).
// P4: based on 2015 syllabus, 欢乐伙伴 4A/4B themes (formal WA/SA2 exams).
// Sec2: based on 2021 Secondary MTL syllabus, 华文伴我行 themes (formal WA/SA2 exams, idiom-focused).

const CONTENT_CHINESE = {
  p2: [
    {
      id: 'p2-cn-family-school',
      title: '家庭与学校生活',
      titleEn: 'Family & School Life',
      summary: '认识家人、同学，学习简单的日常用语。(Family and classmate vocabulary, daily routines.)',
      vocab: [
        { term: '家庭', pinyin: 'jiātíng', meaning: 'family' },
        { term: '兄弟姐妹', pinyin: 'xiōngdì jiěmèi', meaning: 'siblings' },
        { term: '同学', pinyin: 'tóngxué', meaning: 'classmate' },
        { term: '老师', pinyin: 'lǎoshī', meaning: 'teacher' },
        { term: '帮忙', pinyin: 'bāngmáng', meaning: 'to help' },
        { term: '打扫', pinyin: 'dǎsǎo', meaning: 'to sweep / clean' }
      ],
      questions: [
        { type: 'mcq', q: '“同学”是什么意思？(What does 同学 mean?)', options: ['Teacher', 'Classmate', 'Family', 'Neighbour'], answer: 1, explanation: '同学 (tóngxué) means classmate.' },
        { type: 'fill', q: '看拼音写汉字：bāngmáng（ ）— 我常常＿＿妈妈做家务。', answer: ['帮忙'], explanation: '帮忙 means "to help" — 我常常帮忙妈妈做家务 (I often help mother with housework).' },
        { type: 'match', instructions: '请把词语和意思连起来 (Match each word to its meaning).', pairs: [
          ['家庭', 'family'],
          ['同学', 'classmate'],
          ['打扫', 'to sweep/clean'],
          ['帮忙', 'to help']
        ]},
        { type: 'mcq', q: '选词填空 (choose the correct word): 弟弟考了满分，他很＿＿。', options: ['害怕', '高兴', '打扫', '客人'], answer: 1, explanation: '高兴 (gāoxìng) means happy — fits the context of scoring full marks.' }
      ]
    },
    {
      id: 'p2-cn-growing-up',
      title: '我长大了',
      titleEn: "I've Grown Up",
      summary: '学习和成长、勇敢有关的词语。(Vocabulary about growing up and courage.)',
      vocab: [
        { term: '长大', pinyin: 'zhǎngdà', meaning: 'to grow up' },
        { term: '勇敢', pinyin: 'yǒnggǎn', meaning: 'brave' },
        { term: '害怕', pinyin: 'hàipà', meaning: 'afraid' },
        { term: '生日', pinyin: 'shēngrì', meaning: 'birthday' }
      ],
      questions: [
        { type: 'fill', q: '看拼音写汉字：yǒnggǎn（ ）— 消防员很＿＿。', answer: ['勇敢'], explanation: '勇敢 (yǒnggǎn) means brave.' },
        { type: 'mcq', q: '“害怕”的意思是什么？(What does 害怕 mean?)', options: ['Happy', 'Afraid', 'Brave', 'Tired'], answer: 1, explanation: '害怕 (hàipà) means afraid/scared.' },
        { type: 'short', q: '照样子写句子 — 例句：小猫又白又胖。请你用"又…又…"写一句话。(Write a sentence using "又...又...", following the example.)', answer: '例如：这只小狗又大又可爱。(Example: This dog is big and cute.)', explanation: '"又…又…" links two describing words together, e.g. 又大又可爱 (big and cute).' },
        { type: 'match', instructions: '请把词语和意思连起来 (Match each word to its meaning).', pairs: [
          ['长大', 'to grow up'],
          ['勇敢', 'brave'],
          ['害怕', 'afraid'],
          ['生日', 'birthday']
        ]}
      ]
    },
    {
      id: 'p2-cn-food-transport',
      title: '饮食与交通',
      titleEn: 'Food & Transport',
      summary: '早餐、水果、上学交通方式等词语。(Breakfast, fruit, and ways of getting to school.)',
      vocab: [
        { term: '早餐', pinyin: 'zǎocān', meaning: 'breakfast' },
        { term: '水果', pinyin: 'shuǐguǒ', meaning: 'fruit' },
        { term: '蔬菜', pinyin: 'shūcài', meaning: 'vegetable' },
        { term: '公园', pinyin: 'gōngyuán', meaning: 'park' }
      ],
      questions: [
        { type: 'mcq', q: '“水果”是什么意思？(What does 水果 mean?)', options: ['Vegetable', 'Fruit', 'Breakfast', 'Park'], answer: 1, explanation: '水果 (shuǐguǒ) means fruit.' },
        { type: 'fill', q: '看拼音写汉字：gōngyuán（ ）— 星期天，我们去＿＿放风筝。', answer: ['公园'], explanation: '公园 (gōngyuán) means park.' },
        { type: 'short', q: '阅读理解：星期天，小明和爸爸妈妈去公园。他们在公园里放风筝，还吃了水果。小明很开心。\n问：小明星期天去了哪里？', answer: '公园 (the park)', explanation: 'The passage states 小明和爸爸妈妈去公园 — they went to the park.' }
      ]
    },
    {
      id: 'p2-cn-festivals-neighbourhood',
      title: '节庆与邻里',
      titleEn: 'Festivals & Neighbourhood',
      summary: '新年、客人、热闹的夜市等词语。(New Year, guests, and a lively night market.)',
      vocab: [
        { term: '新年', pinyin: 'xīnnián', meaning: 'New Year' },
        { term: '客人', pinyin: 'kèrén', meaning: 'guest' },
        { term: '热闹', pinyin: 'rènao', meaning: 'lively, bustling' },
        { term: '玩具', pinyin: 'wánjù', meaning: 'toy' }
      ],
      questions: [
        { type: 'mcq', q: '“客人”是什么意思？(What does 客人 mean?)', options: ['Guest', 'Toy', 'Festival', 'Neighbour'], answer: 0, explanation: '客人 (kèrén) means guest.' },
        { type: 'fill', q: '选词填空：新年到了，夜市变得很＿＿。(word bank: 热闹 / 害怕)', answer: ['热闹'], explanation: '热闹 (rènao) means lively/bustling — fits describing a busy night market.' },
        { type: 'match', instructions: '请把词语和意思连起来 (Match each word to its meaning).', pairs: [
          ['新年', 'New Year'],
          ['客人', 'guest'],
          ['热闹', 'lively, bustling'],
          ['玩具', 'toy']
        ]},
        { type: 'short', q: '看图写话：图中一个小孩在浇花。请你写两句话。(Write two sentences about a child watering plants.)', answer: '例如：小华在浇花。他每天都帮妈妈浇花。(Example: Xiao Hua is watering the flowers. He helps his mother water the flowers every day.)', explanation: 'P2 picture-writing tasks expect 2-4 simple, connected sentences.' }
      ]
    }
  ],
  p4: [
    {
      id: 'p4-cn-family-responsibility',
      title: '家庭关系与责任',
      titleEn: 'Family & Responsibility',
      summary: '道歉、值日、负责等有关责任感的词语与句型。(Apologising, class duty, and connectives.)',
      vocab: [
        { term: '值日', pinyin: 'zhírì', meaning: 'to be on class duty' },
        { term: '对不起 / 抱歉', pinyin: 'duìbuqǐ / bàoqiàn', meaning: 'sorry, apologise' },
        { term: '负责', pinyin: 'fùzé', meaning: 'responsible' },
        { term: '认真', pinyin: 'rènzhēn', meaning: 'conscientious, earnest' },
        { term: '后悔', pinyin: 'hòuhuǐ', meaning: 'to regret' }
      ],
      questions: [
        { type: 'mcq', q: '“负责”最接近哪个意思？(Which is closest in meaning to 负责?)', options: ['Careless', 'Responsible', 'Happy', 'Forgetful'], answer: 1, explanation: '负责 (fùzé) means responsible.' },
        { type: 'fill', q: '看拼音写汉字：zhírì（ ）— 今天轮到我＿＿，我要打扫教室。', answer: ['值日'], explanation: '值日 (zhírì) means to be on class duty.' },
        { type: 'short', q: '造句：请用"不但…而且"造一个句子。(Make a sentence using "不但...而且".)', answer: '例如：小美不但成绩好，而且很有礼貌。(Example: Xiaomei is not only good at her studies, but also very polite.)', explanation: '"不但…而且…" adds a second, often stronger point — "not only... but also...".' },
        { type: 'match', instructions: '请把关联词和意思连起来 (Match each connective to its meaning).', pairs: [
          ['不但…而且…', 'not only... but also...'],
          ['虽然…但是…', 'although... yet...'],
          ['只要…就…', 'as long as... then...'],
          ['除了…还…', 'besides... also...']
        ]}
      ]
    },
    {
      id: 'p4-cn-courage-health',
      title: '健康与勇气',
      titleEn: 'Health & Courage',
      summary: '看医生、打针、克服恐惧的词语。(Doctor visits, injections, overcoming fear.)',
      vocab: [
        { term: '打针', pinyin: 'dǎzhēn', meaning: 'to get an injection' },
        { term: '紧张', pinyin: 'jǐnzhāng', meaning: 'nervous' },
        { term: '勇敢', pinyin: 'yǒnggǎn', meaning: 'brave' },
        { term: '鼓励', pinyin: 'gǔlì', meaning: 'to encourage' }
      ],
      questions: [
        { type: 'mcq', q: '“紧张”的意思最接近：(紧张 is closest in meaning to:)', options: ['Relaxed', 'Nervous', 'Excited', 'Sleepy'], answer: 1, explanation: '紧张 (jǐnzhāng) means nervous/tense.' },
        { type: 'fill', q: '选词填空（word bank: 只要…就 / 虽然…但是）：他＿＿努力练习，＿＿一定能进步。', answer: ['只要…就', '只要...就'], explanation: '只要…就… means "as long as... then..." — fits "as long as he practises hard, he will improve."' },
        { type: 'short', q: '阅读理解：小华从来没打过针，一开始很害怕。护士姐姐安慰他，他打完针后才发现并不痛。\n问：小华为什么一开始很害怕？他后来的心情有什么变化？请用自己的话回答。', answer: '小华一开始害怕是因为他从来没打过针，怕痛。后来护士安慰他，打完针后发现不痛，心情从紧张变得放心。(He was afraid at first because he had never had an injection and feared pain. After the nurse comforted him and it turned out painless, his feelings changed from nervous to relieved.)', explanation: 'This tests inferential comprehension — explaining the change in the character\'s feelings, not just recalling facts.' }
      ]
    },
    {
      id: 'p4-cn-environment',
      title: '环境保护',
      titleEn: 'Environmental Protection',
      summary: '垃圾分类、保护环境的词语与句型。(Recycling and protecting the environment.)',
      vocab: [
        { term: '环境', pinyin: 'huánjìng', meaning: 'environment' },
        { term: '垃圾分类', pinyin: 'lājī fēnlèi', meaning: 'waste sorting / recycling' },
        { term: '保护', pinyin: 'bǎohù', meaning: 'to protect' },
        { term: '社区', pinyin: 'shèqū', meaning: 'community' }
      ],
      questions: [
        { type: 'mcq', q: '“保护”最接近哪个意思？(Which is closest in meaning to 保护?)', options: ['To destroy', 'To protect', 'To ignore', 'To sell'], answer: 1, explanation: '保护 (bǎohù) means to protect.' },
        { type: 'fill', q: '看拼音写汉字：huánjìng（ ）— 我们应该一起保护＿＿。', answer: ['环境'], explanation: '环境 (huánjìng) means environment.' },
        { type: 'short', q: '造句：请用"除了…还"造一个和环保有关的句子。(Make an environment-related sentence using "除了...还".)', answer: '例如：除了垃圾分类，我们还可以节约用水。(Example: Besides sorting waste, we can also save water.)', explanation: '"除了…还…" means "besides... also...", useful for listing multiple related ideas.' }
      ]
    },
    {
      id: 'p4-cn-activities-choices',
      title: '课外活动与选择',
      titleEn: 'CCAs & Making Choices',
      summary: '兴趣班、活动、合作等词语。(Enrichment classes, activities, teamwork.)',
      vocab: [
        { term: '活动', pinyin: 'huódòng', meaning: 'activity' },
        { term: '兴趣班', pinyin: 'xìngqùbān', meaning: 'enrichment class' },
        { term: '合作', pinyin: 'hézuò', meaning: 'to cooperate' },
        { term: '难忘', pinyin: 'nánwàng', meaning: 'unforgettable' }
      ],
      questions: [
        { type: 'mcq', q: '“合作”是什么意思？(What does 合作 mean?)', options: ['To compete', 'To cooperate', 'To complain', 'To copy'], answer: 1, explanation: '合作 (hézuò) means to cooperate/work together.' },
        { type: 'match', instructions: '请把词语和意思连起来 (Match each word to its meaning).', pairs: [
          ['活动', 'activity'],
          ['兴趣班', 'enrichment class'],
          ['合作', 'to cooperate'],
          ['难忘', 'unforgettable']
        ]},
        { type: 'short', q: '作文（看图/情境作文）：题目《难忘的一次活动》，请写一写你参加过的一次活动，说说你做了什么，心情怎么样。字数：约100字。', answer: '参考重点：清楚交代活动的地点和内容；用2-3个句子描述经过，尝试用上学过的关联词（如"一…就"、"除了…还"）；结尾表达心情或感受。(Guidance: clearly state where/what the activity was; describe 2-3 events using a taught connective; end with a sentence about your feelings.)', explanation: 'This is a self-checked composition question — compare your writing against the guidance points.' }
      ]
    }
  ],
  sec2: [
    {
      id: 'sec2-cn-self-growth',
      title: '自我认识与成长',
      titleEn: 'Self-Identity & Growth',
      summary: '面对挑战、坚持不懈的词语与成语。(Facing challenges, perseverance, and idioms.)',
      vocab: [
        { term: '挑战', pinyin: 'tiǎozhàn', meaning: 'challenge' },
        { term: '压力', pinyin: 'yālì', meaning: 'pressure, stress' },
        { term: '反思', pinyin: 'fǎnsī', meaning: 'to reflect (on oneself)' },
        { term: '半途而废', pinyin: 'bàntú\'érfèi', meaning: 'to give up halfway (idiom)' },
        { term: '持之以恒', pinyin: 'chízhīyǐhéng', meaning: 'to persevere (idiom)' }
      ],
      questions: [
        { type: 'mcq', q: '篇章填空：面对困难，他没有放弃，反而更加＿＿地朝目标前进。', options: ['半途而废', '持之以恒', '五花八门', '络绎不绝'], answer: 1, explanation: '持之以恒 (chízhīyǐhéng) means "to persevere" — fits someone who didn\'t give up despite difficulty.' },
        { type: 'short', q: '造句（成语）：请用成语"半途而废"造一个句子。', answer: '例如：学习一门语言需要长期坚持，绝不能半途而废。(Example: Learning a language requires long-term commitment — one must never give up halfway.)', explanation: '半途而废 means to abandon something halfway through.' },
        { type: 'match', instructions: '请把成语和意思连起来 (Match each idiom to its meaning).', pairs: [
          ['半途而废', 'to give up halfway'],
          ['持之以恒', 'to persevere'],
          ['脚踏实地', 'down-to-earth, pragmatic'],
          ['全神贯注', 'fully focused/absorbed']
        ]},
        { type: 'fill', q: '词语替代：他做事总是脚踏实地，从不投机取巧。"脚踏实地"最接近的词语是＿＿。', answer: ['踏实', '认真', '扎实'], explanation: '脚踏实地 describes being steady, dependable and diligent — close synonyms include 踏实 or 认真.' }
      ]
    },
    {
      id: 'sec2-cn-friendship',
      title: '友情与人际关系',
      titleEn: 'Friendship & Relationships',
      summary: '沟通、尊重、团队精神等词语。(Communication, respect, and teamwork.)',
      vocab: [
        { term: '沟通', pinyin: 'gōutōng', meaning: 'to communicate' },
        { term: '尊重', pinyin: 'zūnzhòng', meaning: 'to respect' },
        { term: '团队精神', pinyin: 'tuánduì jīngshén', meaning: 'team spirit' },
        { term: '见义勇为', pinyin: 'jiànyì yǒngwéi', meaning: 'to act bravely for justice (idiom)' }
      ],
      questions: [
        { type: 'mcq', q: '“尊重”最接近哪个意思？(Which is closest in meaning to 尊重?)', options: ['To ignore', 'To respect', 'To argue with', 'To avoid'], answer: 1, explanation: '尊重 (zūnzhòng) means to respect.' },
        { type: 'fill', q: '看拼音写汉字：gōutōng（ ）— 朋友之间需要良好的＿＿才能减少误会。', answer: ['沟通'], explanation: '沟通 (gōutōng) means to communicate.' },
        { type: 'short', q: '造句：请用成语"见义勇为"造一个句子。', answer: '例如：他见义勇为，在路人遇险时挺身而出帮助他们。(Example: He acted bravely for justice, stepping forward to help passers-by in danger.)', explanation: '见义勇为 describes acting courageously to help others or uphold justice.' }
      ]
    },
    {
      id: 'sec2-cn-technology',
      title: '科技与网络生活',
      titleEn: 'Technology & Internet Life',
      summary: '网络、社交媒体使用与阅读理解。(Internet, social media use, and reading comprehension.)',
      vocab: [
        { term: '科技', pinyin: 'kējì', meaning: 'technology' },
        { term: '网络', pinyin: 'wǎngluò', meaning: 'internet, network' },
        { term: '价值观', pinyin: 'jiàzhíguān', meaning: 'values, value system' }
      ],
      questions: [
        { type: 'short', q: '阅读理解：一篇文章讨论一名学生过度使用社交媒体，影响了学习和睡眠。\n问：作者写这篇文章的主要目的是什么？请简要说明。', answer: '作者想提醒青少年应该合理使用网络/社交媒体，避免影响学习和健康，说明适度使用科技的重要性。(The author aims to remind teenagers to use social media/the internet in moderation to avoid harming their studies and health.)', explanation: 'This tests identifying the author\'s purpose/main idea, a key Sec 2 comprehension skill.' },
        { type: 'mcq', q: '“网络”最接近哪个意思？(网络 is closest in meaning to:)', options: ['Library', 'Internet/network', 'Newspaper', 'Textbook'], answer: 1, explanation: '网络 (wǎngluò) means internet or network.' },
        { type: 'fill', q: '看拼音写汉字：jiàzhíguān（ ）— 每个人的＿＿都不完全相同。', answer: ['价值观'], explanation: '价值观 (jiàzhíguān) means values/value system.' }
      ]
    },
    {
      id: 'sec2-cn-environment-argument',
      title: '环境保护与议论文',
      titleEn: 'Environmental Protection & Argumentative Writing',
      summary: '环保话题，以及议论文的论点、论据、论证结构。(Environmental topics and argumentative essay structure.)',
      vocab: [
        { term: '环保', pinyin: 'huánbǎo', meaning: 'environmental protection' },
        { term: '论点', pinyin: 'lùndiǎn', meaning: 'thesis / position (in an argumentative essay)' },
        { term: '论据', pinyin: 'lùnjù', meaning: 'supporting evidence / examples' },
        { term: '论证', pinyin: 'lùnzhèng', meaning: 'reasoning connecting evidence to the thesis' }
      ],
      questions: [
        { type: 'match', instructions: '请把议论文的部分和意思连起来 (Match each part of an argumentative essay to its meaning).', pairs: [
          ['论点', 'the position/thesis being argued'],
          ['论据', 'supporting evidence or examples'],
          ['论证', 'reasoning that connects evidence to the thesis'],
          ['结论', 'the conclusion']
        ]},
        { type: 'short', q: '议论文：题目《我认为课外活动和课业同样重要》。请说明你的立场（论点），并举出至少一个论据支持你的观点。', answer: '论点示例：我认为课外活动和课业同样重要。论据示例：课外活动能培养团队精神和领导能力，这些是课本无法教会的技能；同时，全面发展有助于学生保持身心健康，进而提升学习效率。(Sample thesis: CCAs are just as important as academics. Sample evidence: CCAs build teamwork and leadership skills that textbooks can\'t teach, and well-rounded development supports mental/physical health, which in turn improves study efficiency.)', explanation: 'A strong 议论文 answer states a clear 论点 (position), then supports it with specific 论据 (evidence/examples).' },
        { type: 'fill', q: '看拼音写汉字：huánbǎo（ ）— 政府鼓励大家参与＿＿活动，例如减少使用塑料袋。', answer: ['环保'], explanation: '环保 (huánbǎo) means environmental protection.' }
      ]
    }
  ]
};
