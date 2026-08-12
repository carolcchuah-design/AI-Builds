// History content bank, keyed by level id (sec2 only for these kids).
// Based on MOE 2021 Lower Secondary History Syllabus, Unit 3: Singapore 1940s-1960s
// (Japanese Occupation -> return of British rule -> road to self-government ->
// merger with Malaysia -> separation -> nation-building).
// `source` questions include a `context` field simulating a historical source excerpt.

const CONTENT_HISTORY = {
  sec2: [
    {
      id: 'sec2-hist-japanese-occupation',
      title: 'The Japanese Occupation (1942–1945)',
      titleEn: '',
      summary: 'Fall of Singapore, Syonan-to, Operation Sook Ching, and daily life under Japanese rule.',
      vocab: [
        { term: 'Syonan-to', meaning: '"Light of the South" — the name given to Singapore by the Japanese during the Occupation.' },
        { term: 'Operation Sook Ching', meaning: 'A mass screening operation (Feb–Mar 1942) targeting Chinese men aged 18-50, resulting in thousands of deaths.' },
        { term: 'Kempeitai', meaning: 'The Japanese military police who enforced control through fear, surveillance and torture.' }
      ],
      questions: [
        { type: 'mcq', q: 'On what date did Singapore fall to the Japanese?', options: ['8 December 1941', '15 February 1942', '6 February 1819', '9 August 1965'], answer: 1, explanation: 'Singapore fell on 15 February 1942, which Winston Churchill called one of the worst disasters in British military history.' },
        { type: 'fill', q: 'During the Japanese Occupation, Singapore was renamed ______.', answer: ['Syonan-to', 'Syonan'], explanation: 'Syonan-to means "Light of the South" in Japanese.' },
        { type: 'source', context: 'Source A: A survivor recalled in a 1995 interview, "We were made to stand in long lines while soldiers checked our faces. Some men were taken away in trucks and never seen again. I was terrified every single day."', q: 'How useful is Source A to a historian studying the impact of the Japanese Occupation on Singaporeans? Explain your answer.', answer: 'Useful because it gives a first-hand account of the fear and impact of Operation Sook Ching that matches known facts (mass screening, disappearances). Limited because it was recorded over 50 years after the event (memory may fade or be embellished) and reflects only one individual\'s experience, so it should be cross-checked against other sources before generalising.', explanation: 'A strong answer weighs both the value (first-hand emotional detail) and limitations (time gap, single perspective) rather than picking only one side.' },
        { type: 'match', instructions: 'Match each term to its correct description.', pairs: [
          ['Syonan-to', 'Japanese name for occupied Singapore'],
          ['Kempeitai', 'Japanese military police'],
          ['Operation Sook Ching', 'Mass screening/purge of Chinese men'],
          ['Black market', 'Illegal trade that grew due to food rationing']
        ]},
        { type: 'short', q: 'Describe the hardships faced by people in Singapore during the Japanese Occupation.', answer: 'Food rationing (e.g. rice cut to a few kg per adult per month) led to malnutrition and reliance on black markets; fear and brutality under the Kempeitai and Sook Ching; loss of freedoms and forced Japanese-language education/propaganda; economic hardship from inflation and worthless "banana money" currency.', explanation: 'Full marks require specific, well-explained details rather than just naming a category like "hardship."' }
      ]
    },
    {
      id: 'sec2-hist-return-british-rule',
      title: 'Return of British Rule (1945–1955)',
      titleEn: '',
      summary: 'The British Military Administration, the new Crown Colony, and changing political attitudes after the war.',
      vocab: [
        { term: 'British Military Administration (BMA)', meaning: 'Temporary military government of Singapore, Sept 1945 – Apr 1946, under Lord Louis Mountbatten.' },
        { term: 'Crown Colony', meaning: 'From 1 April 1946, Singapore became a separate British Crown Colony, distinct from the Malayan Union.' }
      ],
      questions: [
        { type: 'mcq', q: 'What administered Singapore immediately after the Japanese surrender in 1945?', options: ['The Malayan Union', 'The British Military Administration (BMA)', 'The Legislative Assembly', 'The People\'s Action Party'], answer: 1, explanation: 'The BMA governed Singapore from September 1945 until civilian rule resumed in April 1946.' },
        { type: 'fill', q: 'From 1 April 1946, Singapore became a separate British ______.', answer: ['crown colony', 'colony'], explanation: 'This separated Singapore administratively from the Malayan Union formed on the peninsula.' },
        { type: 'short', q: 'Explain why the Japanese Occupation changed how many Singaporeans viewed British colonial rule.', answer: 'The speed and ease of the British defeat in 1942 shattered the idea that the British were invincible protectors. Many Singaporeans lost confidence in British rule and became more open to nationalist and anti-colonial ideas after the war, fuelling the push for self-government.', explanation: 'This links the Occupation to the rise of political consciousness described later in the syllabus.' }
      ]
    },
    {
      id: 'sec2-hist-road-self-government',
      title: 'Road to Self-Government (1953–1959)',
      titleEn: '',
      summary: 'The Rendel Constitution, David Marshall, Lim Yew Hock, and the 1959 self-government milestone.',
      vocab: [
        { term: 'Rendel Constitution (1955)', meaning: 'Introduced partial internal self-government with a 32-seat Legislative Assembly (25 elected).' },
        { term: 'Merdeka Talks', meaning: 'Negotiations in London between Singapore leaders and Britain over self-government (1956, 1957–58).' },
        { term: 'David Marshall', meaning: 'Leader of the Labour Front; Singapore\'s first Chief Minister (1955).' }
      ],
      questions: [
        { type: 'mcq', q: 'Who became Singapore\'s first Prime Minister when full internal self-government was achieved in 1959?', options: ['David Marshall', 'Lim Yew Hock', 'Lee Kuan Yew', 'Tunku Abdul Rahman'], answer: 2, explanation: 'Lee Kuan Yew and the PAP won the 1959 election after Singapore achieved full internal self-government.' },
        { type: 'fill', q: 'The 1955 constitution that introduced partial self-government is known as the ______ Constitution.', answer: ['Rendel'], explanation: 'The Rendel Constitution gave Singapore a Legislative Assembly but Britain retained control of defence, internal security, finance and foreign affairs.' },
        { type: 'match', instructions: 'Match each leader/event to its correct description.', pairs: [
          ['David Marshall', 'First Chief Minister, resigned after First Merdeka Talks failed'],
          ['Lim Yew Hock', 'Succeeded Marshall, led successful Second Merdeka Talks'],
          ['1958 Constitution', 'Granted full internal self-government'],
          ['1959 election', 'PAP won; Lee Kuan Yew became first Prime Minister']
        ]},
        { type: 'short', q: 'Explain one limitation of the self-government granted under the Rendel Constitution of 1955.', answer: 'Although Singapore gained a Legislative Assembly with elected members, Britain still retained full control over defence, internal security, finance and foreign affairs — meaning Singapore did not yet have full control over its own governance.', explanation: 'This distinguishes "partial" internal self-government (1955) from "full" internal self-government (1959).' }
      ]
    },
    {
      id: 'sec2-hist-merger-malaysia',
      title: 'Merger with Malaysia (1961–1963)',
      titleEn: '',
      summary: 'Reasons for merger, the Battle for Merger, the 1961 referendum, and formation of Malaysia.',
      vocab: [
        { term: 'Battle for Merger', meaning: 'Lee Kuan Yew\'s series of 12 radio talks in 1961 to win public support for merger with Malaya.' },
        { term: 'National Referendum on Merger', meaning: 'Held 1 September 1961; about 71% of voters chose the PAP\'s preferred merger option.' }
      ],
      questions: [
        { type: 'mcq', q: 'When was the Federation of Malaysia formed?', options: ['9 August 1965', '3 June 1959', '16 September 1963', '1 April 1946'], answer: 2, explanation: 'The Federation of Malaysia, combining Malaya, Singapore, Sarawak and North Borneo (Sabah), was formed on 16 September 1963.' },
        { type: 'fill', q: 'Lee Kuan Yew delivered a series of radio talks in 1961 known as the "______ for Merger" to win public support.', answer: ['Battle'], explanation: 'The "Battle for Merger" radio talks aimed to counter opposition from the pro-communist faction of the PAP.' },
        { type: 'short', q: 'Give two reasons why Singapore\'s leaders sought merger with Malaya.', answer: 'Economic reasons: merger promised a common market, reducing Singapore\'s vulnerability as a small entrepôt economy. Security reasons: merger was seen as a way to counter the threat of communist subversion within Singapore.', explanation: 'Both economic and security motivations are core reasons given in the syllabus for pursuing merger.' }
      ]
    },
    {
      id: 'sec2-hist-separation',
      title: 'Separation from Malaysia (1963–1965)',
      titleEn: '',
      summary: 'Political, economic and communal tensions that led to Singapore\'s independence on 9 August 1965.',
      vocab: [
        { term: '1964 race riots', meaning: 'Communal riots that worsened tensions between Singapore and the federal government in Kuala Lumpur.' },
        { term: 'Separation', meaning: 'Singapore left Malaysia and became fully independent on 9 August 1965, by a Malaysian Parliament vote of 126-0.' }
      ],
      questions: [
        { type: 'mcq', q: 'On what date did Singapore separate from Malaysia and become independent?', options: ['16 September 1963', '9 August 1965', '3 June 1959', '15 February 1942'], answer: 1, explanation: 'Singapore became fully independent on 9 August 1965.' },
        { type: 'source', context: 'Source B: A 1965 newspaper editorial states, "Disagreements over the common market, mutual distrust between political parties, and the tragic riots of last year have made the union unworkable."', q: 'Using Source B and your own knowledge, explain why Singapore\'s merger with Malaysia eventually led to separation.', answer: 'Political tension: PAP contested seats in Malaysian elections while UMNO campaigned in Singapore, creating mutual distrust. Economic disagreement: delays in establishing the promised common market hurt Singapore\'s economy. Communal tension: UMNO\'s Malay-favouring policies clashed with the PAP\'s "Malaysian Malaysia" stance, contributing to the 1964 race riots and deepening suspicion, which together made the union unworkable.', explanation: 'A full answer uses the source\'s three clues (common market, distrust, riots) and elaborates each with syllabus knowledge.' },
        { type: 'fill', q: 'Communal riots that worsened Singapore-Malaysia relations broke out in ______.', answer: ['1964'], explanation: 'The 1964 race riots deepened mutual suspicion between Singapore and the federal government.' }
      ]
    },
    {
      id: 'sec2-hist-nation-building',
      title: 'Nation-Building After Independence',
      titleEn: '',
      summary: 'Challenges Singapore faced after 1965 and how the government responded — housing, jobs, and defence.',
      vocab: [
        { term: 'HDB', meaning: 'Housing & Development Board, established in 1960, responsible for public housing.' },
        { term: 'EDB', meaning: 'Economic Development Board, drove export-oriented industrialisation to create jobs.' },
        { term: 'National Service', meaning: 'Compulsory military service introduced in 1967 to build up Singapore\'s defence force.' }
      ],
      questions: [
        { type: 'mcq', q: 'Which statutory board was responsible for driving export-oriented industrialisation and attracting foreign investment after independence?', options: ['HDB', 'EDB', 'CPF Board', 'URA'], answer: 1, explanation: 'The Economic Development Board (EDB) led industrialisation efforts, including developing the Jurong Industrial Estate.' },
        { type: 'fill', q: 'Compulsory military service, introduced in 1967 to build up Singapore\'s defence force, is known as ______.', answer: ['National Service', 'NS'], explanation: 'National Service addressed the challenge of having no independent defence force after the British military withdrawal was announced.' },
        { type: 'match', instructions: 'Match each post-1965 challenge to the government\'s response.', pairs: [
          ['Housing shortage', 'HDB mass public housing programme'],
          ['Unemployment', 'EDB-led export-oriented industrialisation'],
          ['No defence force', 'Introduction of National Service (1967)'],
          ['Lack of common identity', 'Bilingual education and nation-building policies']
        ]},
        { type: 'short', q: 'Explain why unemployment was a serious challenge for Singapore immediately after independence in 1965.', answer: 'Singapore lost the guaranteed common market it would have had within Malaysia, and its traditional entrepôt trade role was vulnerable; combined with a fast-growing population, there were not enough jobs available, so the government pursued export-oriented industrialisation (via the EDB) to attract foreign investment and create jobs.', explanation: 'This connects the loss of merger benefits directly to the economic challenges Singapore had to solve alone.' }
      ]
    }
  ]
};
