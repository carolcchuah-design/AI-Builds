// Geography content bank, keyed by level id (sec2 only for these kids).
// Based on MOE 2021 Lower Secondary Geography Syllabus, Thematic Question 2:
// "How Can We Sustainably Build Cities?" (Sec 2 focus: urbanisation, housing, transport,
// geographical investigation/fieldwork skills).

const CONTENT_GEOGRAPHY = {
  sec2: [
    {
      id: 'sec2-geo-urbanisation',
      title: 'Cities and Urbanisation',
      titleEn: '',
      summary: 'What defines a city, why urbanisation happens, and its opportunities and challenges.',
      vocab: [
        { term: 'Urbanisation', meaning: 'The increasing proportion of a population living in urban (city) areas.' },
        { term: 'Push factors', meaning: 'Negative conditions driving people to leave rural areas, e.g. low incomes, limited services.' },
        { term: 'Pull factors', meaning: 'Attractive conditions drawing people to cities, e.g. jobs, education, healthcare.' },
        { term: 'Population density', meaning: 'The number of people per unit area, e.g. per km².' }
      ],
      questions: [
        { type: 'mcq', q: 'Which of these is a "pull factor" drawing people to cities?', options: ['Natural disasters in rural areas', 'Limited healthcare in villages', 'Better job opportunities in the city', 'Low agricultural income'], answer: 2, explanation: 'Pull factors are attractive conditions in the destination (city); the other options are push factors driving people away from rural areas.' },
        { type: 'fill', q: 'The increasing proportion of a population living in cities is called ______.', answer: ['urbanisation', 'urbanization'], explanation: 'Urbanisation is driven mainly by rural-urban migration and natural population increase.' },
        { type: 'match', instructions: 'Match each factor to whether it is a push or pull factor.', pairs: [
          ['Low agricultural income', 'Push factor'],
          ['Job opportunities', 'Pull factor'],
          ['Natural disasters', 'Push factor'],
          ['Better education access', 'Pull factor']
        ]},
        { type: 'short', q: 'Describe one opportunity and one challenge that urbanisation brings to a city.', answer: 'Opportunity: cities offer more jobs, better healthcare and education, and greater amenities, improving residents\' quality of life. Challenge: rapid urbanisation can cause pollution, traffic congestion, and competition for limited land and housing.', explanation: 'Urbanisation is a double-edged process — the same growth that creates opportunity also strains infrastructure and resources.' }
      ]
    },
    {
      id: 'sec2-geo-housing',
      title: 'Housing in Singapore',
      titleEn: '',
      summary: 'HDB new towns, Punggol as a smart eco-town, and the Ethnic Integration Policy.',
      vocab: [
        { term: 'HDB', meaning: 'Housing & Development Board, established 1960, builds and manages Singapore\'s public housing.' },
        { term: 'New Town concept', meaning: 'Self-contained HDB towns integrating housing with retail, industry, education, healthcare and recreation.' },
        { term: 'Ethnic Integration Policy (1989)', meaning: 'Sets ethnic quotas per HDB block/neighbourhood to prevent racial enclaves and promote integration.' }
      ],
      questions: [
        { type: 'mcq', q: 'In what year was the Housing & Development Board (HDB) established?', options: ['1965', '1960', '1989', '1990'], answer: 1, explanation: 'The HDB was established in 1960 to address Singapore\'s housing shortage.' },
        { type: 'fill', q: 'The policy that sets ethnic quotas per HDB block to prevent racial enclaves is called the ______ Policy.', answer: ['Ethnic Integration', 'ethnic integration'], explanation: 'Introduced in 1989 to promote racial harmony and integration in housing estates.' },
        { type: 'short', q: 'Using Punggol as an example, explain what makes an HDB town "sustainable."', answer: 'Punggol integrates housing with green/eco-friendly design features such as cycling and walking paths, waterways, and eco-corridors, and combines housing with amenities like retail, education and healthcare within the town so residents don\'t need to travel far — reducing environmental impact while meeting social and economic needs.', explanation: 'Sustainability in housing means balancing environmental design, convenient amenities, and community needs together.' },
        { type: 'match', instructions: 'Match each housing term to its description.', pairs: [
          ['New Town concept', 'Self-contained town with integrated amenities'],
          ['Punggol', 'Singapore\'s first smart, eco-town'],
          ['Ethnic Integration Policy', 'Quotas to prevent racial enclaves'],
          ['Inclusive housing', 'Design that accommodates elderly, low-income and diverse needs']
        ]}
      ]
    },
    {
      id: 'sec2-geo-transport',
      title: 'Transport Systems',
      titleEn: '',
      summary: 'Traffic congestion and Singapore\'s COE, ERP, and car-lite strategies.',
      vocab: [
        { term: 'COE (Certificate of Entitlement)', meaning: 'Singapore\'s vehicle quota licence system (since 1990), granting the right to own a vehicle for 10 years via bidding.' },
        { term: 'ERP (Electronic Road Pricing)', meaning: 'Gantry-based congestion pricing charging vehicles for using certain roads at peak times.' },
        { term: 'Car-lite policy', meaning: 'A strategy to reduce dependence on private cars by promoting public transport, walking and cycling.' }
      ],
      questions: [
        { type: 'source', context: 'Fig. 3 shows a photograph of an expressway with vehicles packed bumper-to-bumper across all lanes during the evening rush hour.', q: 'With reference to Fig. 3 and your own knowledge, describe two negative impacts of traffic congestion.', answer: 'Environmental impact: vehicles idling in stop-start traffic burn more fuel and release more pollutants (e.g. CO2, particulate matter), worsening air quality. Economic/social impact: wasted commuting time reduces productivity and can delay emergency services like ambulances.', explanation: 'A full answer describes what the figure shows (bumper-to-bumper congestion) and then explains a consequence — description alone isn\'t enough.' },
        { type: 'mcq', q: 'What is the main purpose of Singapore\'s Certificate of Entitlement (COE) system?', options: ['To fund new MRT lines directly', 'To limit the total number of vehicles by capping supply', 'To reward drivers who use fewer roads', 'To set speed limits on expressways'], answer: 1, explanation: 'The COE caps vehicle population growth through a competitive bidding quota system, helping manage congestion without needing more roads.' },
        { type: 'fill', q: 'Gantry-based congestion pricing that charges vehicles for using certain roads at peak times is called ______.', answer: ['Electronic Road Pricing', 'ERP'], explanation: 'ERP charges vary by time and location to discourage peak-hour road use.' },
        { type: 'short', q: 'Explain how a "car-lite" policy helps Singapore build more sustainable cities.', answer: 'Car-lite policies promote walking, cycling and public transport instead of private car use, reducing traffic congestion, fuel consumption and air pollution while requiring less land to be used for roads and carparks — supporting environmental and land-use sustainability.', explanation: 'This connects transport policy directly back to the syllabus\'s core theme of sustainability.' }
      ]
    },
    {
      id: 'sec2-geo-investigation-skills',
      title: 'Geographical Investigation Skills',
      titleEn: '',
      summary: 'Fieldwork and sampling methods used to investigate real geographical questions, e.g. in a neighbourhood like Punggol.',
      vocab: [
        { term: 'Primary data', meaning: 'Data collected first-hand by the researcher, e.g. surveys, field sketches, photographs.' },
        { term: 'Secondary data', meaning: 'Data collected by someone else and used by the researcher, e.g. published reports, existing statistics.' },
        { term: 'Systematic sampling', meaning: 'Selecting participants/samples at regular intervals, e.g. every 5th household.' },
        { term: 'Stratified sampling', meaning: 'Dividing a population into groups (strata) and sampling proportionally from each group.' }
      ],
      questions: [
        { type: 'short', q: 'A group of students wants to find out how residents of a housing estate feel about a new car-lite scheme. Suggest a suitable sampling method for their questionnaire survey, and explain one advantage of this method.', answer: 'Systematic sampling (e.g. surveying every 5th household along a block) or stratified sampling (dividing residents by block/age group and surveying proportionally). Advantage: systematic sampling is quick and avoids bias from only approaching people who happen to be around; stratified sampling ensures the sample reflects the estate\'s diversity, making findings more representative.', explanation: 'Sampling method questions are marked on both a valid method AND a correctly explained advantage.' },
        { type: 'mcq', q: 'Which of these is an example of primary data in a geographical investigation?', options: ['A government census report from 5 years ago', 'A newspaper article about housing policy', 'Photographs and field sketches taken by the students themselves', 'A textbook chapter on urbanisation'], answer: 2, explanation: 'Primary data is collected first-hand by the researcher; the other options are all secondary sources compiled by someone else.' },
        { type: 'match', instructions: 'Match each term to its correct description.', pairs: [
          ['Primary data', 'Collected first-hand by the researcher'],
          ['Secondary data', 'Collected by someone else, e.g. reports'],
          ['Systematic sampling', 'Selecting at regular intervals'],
          ['Stratified sampling', 'Sampling proportionally from sub-groups']
        ]}
      ]
    }
  ]
};
