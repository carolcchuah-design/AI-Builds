// Science content bank, keyed by level id (p4 / sec2).
// Based on MOE 2023 Primary Science Syllabus (P4: Diversity of Materials, Cycles in Matter,
// Water Cycle, Plant System, Human Digestive System, Light, Heat) and MOE 2021 Lower Secondary
// Science Syllabus (Sec2: Chemical Changes, Periodic Table & Formulae, Transport Systems,
// Digestive System, Reproductive System, Ecosystem Interactions, Thermal Energy, Light,
// Electricity, Force & Energy).

const CONTENT_SCIENCE = {
  p4: [
    {
      id: 'p4-sci-diversity-materials',
      title: 'Diversity of Materials',
      titleEn: '',
      summary: 'Classifying materials by hardness, transparency, solubility, and thermal/electrical conductivity.',
      vocab: [
        { term: 'Hardness', meaning: 'Ability of a material to resist being scratched or dented.' },
        { term: 'Transparent', meaning: 'Allows almost all light to pass through (you can see clearly through it).' },
        { term: 'Translucent', meaning: 'Allows some light through, but images look blurred.' },
        { term: 'Opaque', meaning: 'Does not allow any light to pass through.' },
        { term: 'Solubility', meaning: 'Ability of a substance to dissolve completely in a liquid.' },
        { term: 'Conductor', meaning: 'A material that allows heat or electric current to pass through easily.' },
        { term: 'Insulator', meaning: 'A material that does not allow heat or electric current to pass through easily.' }
      ],
      questions: [
        { type: 'mcq', q: 'Which property should you test to find out if a material is suitable for making a raincoat?', options: ['Hardness', 'Solubility / water-resistance', 'Electrical conductivity', 'Colour'], answer: 1, explanation: 'A raincoat material must not let water soak through, so testing how it behaves with water (solubility/water-resistance) is most relevant.' },
        { type: 'mcq', q: 'A material that lets you see a blurred image through it is described as:', options: ['Transparent', 'Translucent', 'Opaque', 'Conductive'], answer: 1, explanation: 'Translucent materials let some light through but scatter it, so images look blurred (e.g. frosted glass).' },
        { type: 'fill', q: 'Metal pot handles are often covered in plastic because plastic is a poor ______ of heat.', answer: ['conductor', 'heat conductor'], explanation: 'Plastic is a poor thermal conductor (a good insulator), so it stays cooler and safer to touch.' },
        { type: 'match', instructions: 'Match each material property to its correct meaning.', pairs: [
          ['Hardness', 'Resistance to scratching or denting'],
          ['Opaque', 'Blocks all light'],
          ['Solubility', 'Dissolves completely in a liquid'],
          ['Insulator', 'Poor conductor of heat/electricity']
        ]},
        { type: 'short', q: 'Jun Wei placed a metal spoon and a plastic spoon in a cup of hot water. After 2 minutes, the metal spoon’s handle felt hotter. What can he conclude, and give one everyday example that uses this property of plastic.', answer: 'Metal is a better conductor of heat than plastic (plastic is a poorer conductor / better insulator). Example: pot handles, electrical wire coating, oven mitts.', explanation: 'Metals generally conduct heat much faster than plastics, which is why plastic is used where we need to touch something safely.' }
      ]
    },
    {
      id: 'p4-sci-cycles-matter',
      title: 'Matter and Its Three States',
      titleEn: '',
      summary: 'Solids, liquids, gases, and how matter changes state: melting, freezing, boiling, evaporation, condensation.',
      vocab: [
        { term: 'Evaporation', meaning: 'A liquid changes to a gas/vapour at its surface, at any temperature.' },
        { term: 'Condensation', meaning: 'A gas/vapour changes back into a liquid, usually on cooling.' },
        { term: 'Melting', meaning: 'A solid changes into a liquid on heating.' },
        { term: 'Freezing', meaning: 'A liquid changes into a solid on cooling.' },
        { term: 'Boiling', meaning: 'A liquid changes rapidly into a gas throughout the liquid, at a fixed temperature.' }
      ],
      questions: [
        { type: 'mcq', q: 'What is the process called when water vapour in the air turns into tiny water droplets on a cold glass?', options: ['Evaporation', 'Condensation', 'Freezing', 'Boiling'], answer: 1, explanation: 'Condensation is a gas changing into a liquid, usually when it touches a cooler surface.' },
        { type: 'mcq', q: 'Which of these would make wet clothes dry FASTER?', options: ['Hanging them in a cool, still, shady room', 'Hanging them in a warm, breezy, sunny spot', 'Folding them up while still wet', 'Putting them in a sealed plastic bag'], answer: 1, explanation: 'Higher temperature, more air movement, and more exposed surface area all speed up evaporation.' },
        { type: 'fill', q: 'The change of state where a liquid becomes a solid is called ______.', answer: ['freezing'], explanation: 'Freezing happens when a liquid loses heat energy and its particles move closer together and slow down.' },
        { type: 'match', instructions: 'Match each change of state to its correct direction.', pairs: [
          ['Melting', 'Solid to liquid'],
          ['Freezing', 'Liquid to solid'],
          ['Boiling/Evaporation', 'Liquid to gas'],
          ['Condensation', 'Gas to liquid']
        ]},
        { type: 'short', q: 'Explain why puddles of water on the ground disappear on a hot, sunny day even though the water never reaches 100°C.', answer: 'Evaporation happens at the surface of a liquid at any temperature, not just at boiling point. The heat from the sun gives the water particles enough energy to escape into the air as water vapour, even below 100°C.', explanation: 'This is the key difference between evaporation (any temperature, surface only) and boiling (fixed temperature, throughout the liquid).' }
      ]
    },
    {
      id: 'p4-sci-water-cycle',
      title: 'The Water Cycle',
      titleEn: '',
      summary: 'Evaporation, condensation and precipitation as a continuous cycle driven by the sun’s heat.',
      vocab: [
        { term: 'Water cycle', meaning: 'The continuous natural process of evaporation, condensation and precipitation that moves water between Earth’s surface and the atmosphere.' },
        { term: 'Precipitation', meaning: 'Water falling from clouds back to Earth, e.g. as rain.' }
      ],
      questions: [
        { type: 'mcq', q: 'What provides the energy that drives the water cycle?', options: ['The moon', 'The sun', 'The wind', 'The ocean'], answer: 1, explanation: 'Heat from the sun causes water at the Earth’s surface to evaporate, starting the cycle.' },
        { type: 'fill', q: 'Tiny water droplets in clouds fall back to Earth as rain in a process called ______.', answer: ['precipitation'], explanation: 'Precipitation includes rain, and is the stage where water returns to the Earth’s surface.' },
        { type: 'short', q: 'Explain why the water cycle is described as a "continuous" process.', answer: 'Because water keeps moving in a repeating cycle between the Earth’s surface (seas, rivers) and the atmosphere — evaporation, condensation, and precipitation keep occurring one after another with no start or end point.', explanation: 'The same water is recycled endlessly through the three stages.' },
        { type: 'mcq', q: 'Put these water cycle stages in the correct order: (1) clouds form, (2) rain falls, (3) water evaporates from the sea.', options: ['1, 2, 3', '3, 1, 2', '2, 3, 1', '3, 2, 1'], answer: 1, explanation: 'Water evaporates from the sea → water vapour condenses to form clouds → rain falls as precipitation.' }
      ]
    },
    {
      id: 'p4-sci-plant-system',
      title: 'Plant System: Parts and Functions',
      titleEn: '',
      summary: 'Roots, stem, leaves, and flowers of a flowering plant, and what each part does.',
      vocab: [
        { term: 'Root', meaning: 'Anchors the plant and absorbs water and minerals from the soil.' },
        { term: 'Stem', meaning: 'Supports the plant and transports water/nutrients between roots and leaves.' },
        { term: 'Leaf', meaning: 'Makes food for the plant using sunlight (photosynthesis).' },
        { term: 'Flower', meaning: 'The reproductive part of the plant.' }
      ],
      questions: [
        { type: 'mcq', q: 'Which part of the plant absorbs water and minerals from the soil?', options: ['Leaf', 'Flower', 'Root', 'Stem'], answer: 2, explanation: 'Roots anchor the plant in soil and absorb water and minerals.' },
        { type: 'match', instructions: 'Match each plant part to its main function.', pairs: [
          ['Root', 'Anchorage and absorption of water/minerals'],
          ['Stem', 'Support and transport of water/nutrients'],
          ['Leaf', 'Making food using sunlight'],
          ['Flower', 'Reproduction']
        ]},
        { type: 'short', q: 'A gardener notices that a potted plant kept in a dark cupboard for two weeks has pale, yellowish leaves and a weak, thin stem, compared to an identical plant kept near a window. Suggest an explanation.', answer: 'The plant in the cupboard did not receive enough light, so its leaves could not make food properly. Without enough food/energy, the plant could not grow strong, healthy green leaves or a sturdy stem.', explanation: 'Leaves need light to make food for the plant; without it, growth and colour (green pigment) suffer.' },
        { type: 'fill', q: 'The part of a flowering plant responsible for reproduction is the ______.', answer: ['flower'], explanation: 'The flower contains the structures needed for the plant to reproduce.' }
      ]
    },
    {
      id: 'p4-sci-human-digestive',
      title: 'Human System: Digestive System',
      titleEn: '',
      summary: 'The path food takes through the body and the role of each digestive organ.',
      vocab: [
        { term: 'Gullet (oesophagus)', meaning: 'The tube connecting the mouth to the stomach through which food passes.' },
        { term: 'Digestion', meaning: 'The process of breaking down food into smaller substances the body can absorb and use.' },
        { term: 'Small intestine', meaning: 'Where most digested food is absorbed into the blood.' },
        { term: 'Large intestine', meaning: 'Absorbs water from undigested food and forms waste.' }
      ],
      questions: [
        { type: 'fill', q: 'Label part X: the organ that stores food and starts breaking it down using acid. X = ______.', answer: ['stomach'], explanation: 'The stomach churns food and mixes it with acid to begin digestion.' },
        { type: 'fill', q: 'Label part Y: the tube connecting the mouth to the stomach. Y = ______.', answer: ['gullet', 'oesophagus'], explanation: 'The gullet (oesophagus) is a muscular tube that pushes food down to the stomach.' },
        { type: 'mcq', q: 'What is the correct order food travels through the digestive system?', options: [
          'Mouth → stomach → gullet → small intestine → large intestine',
          'Mouth → gullet → stomach → small intestine → large intestine',
          'Mouth → small intestine → stomach → gullet → large intestine',
          'Mouth → gullet → small intestine → stomach → large intestine'
        ], answer: 1, explanation: 'Food travels: mouth → gullet (oesophagus) → stomach → small intestine → large intestine → rectum/anus.' },
        { type: 'short', q: 'Why is it important to eat a balanced diet in relation to how your digestive system works?', answer: 'A balanced diet gives the body the right nutrients that the digestive system can break down and absorb for energy, growth and repair; too much of one type of food or too little of another can make digestion less effective and affect health.', explanation: 'The digestive system’s job is to break down and absorb nutrients — the quality of food you eat affects how well your body is nourished.' }
      ]
    },
    {
      id: 'p4-sci-light',
      title: 'Light',
      titleEn: '',
      summary: 'Luminous and non-luminous objects, how shadows form, and how light passes through materials.',
      vocab: [
        { term: 'Luminous object', meaning: 'An object that gives out its own light (e.g. the sun, a lit bulb).' },
        { term: 'Non-luminous object', meaning: 'An object that does not give out its own light but can reflect light (e.g. the moon).' },
        { term: 'Shadow', meaning: 'A dark area formed when an opaque object blocks the path of light.' }
      ],
      questions: [
        { type: 'mcq', q: 'A shadow is formed when', options: ['light bends around an object', 'light passes completely through an object', 'an opaque object blocks the path of light', 'a luminous object stops giving out light'], answer: 2, explanation: 'A shadow forms on the far side of an opaque object because light cannot pass through it.' },
        { type: 'mcq', q: 'Which of these is a luminous object?', options: ['The moon', 'A mirror', 'A burning candle', 'A book'], answer: 2, explanation: 'A burning candle produces its own light, making it luminous. The moon and a book only reflect light.' },
        { type: 'fill', q: 'Light travels in ______ lines.', answer: ['straight'], explanation: 'This is why shadows have sharp, defined edges that match the shape of the blocking object.' },
        { type: 'short', q: 'Explain why the moon is not considered a luminous object even though it appears bright in the night sky.', answer: 'The moon does not produce its own light. It appears bright because it reflects light from the sun. An object is only luminous if it gives out its own light.', explanation: 'Luminous vs non-luminous depends on whether the object generates light itself, not whether it appears bright.' }
      ]
    },
    {
      id: 'p4-sci-heat',
      title: 'Heat',
      titleEn: '',
      summary: 'Heat energy vs temperature, sources of heat, and how heat affects matter.',
      vocab: [
        { term: 'Heat energy', meaning: 'A form of energy that flows from a hotter object to a colder object.' },
        { term: 'Temperature', meaning: 'A measure of how hot or cold an object is (not the same as heat energy).' },
        { term: 'Thermal expansion', meaning: 'The increase in size of a substance when it is heated.' }
      ],
      questions: [
        { type: 'mcq', q: 'Heat energy always flows from', options: ['a colder object to a hotter object', 'a hotter object to a colder object', 'small objects to large objects', 'metal to plastic only'], answer: 1, explanation: 'Heat flows from hot to cold until both objects reach the same temperature.' },
        { type: 'fill', q: 'When a substance is heated, it usually ______ (increases/decreases) in size.', answer: ['increases'], explanation: 'This is thermal expansion — particles move more and take up more space when heated.' },
        { type: 'short', q: 'Two cups of water are at the same temperature, but one cup has much more water than the other. If both are heated for the same time with the same heat source, which one will likely reach a higher temperature sooner, and why?', answer: 'The cup with less water will likely reach a higher temperature sooner, because the same amount of heat energy is shared among fewer water particles, so each particle gains more energy and the temperature rises faster.', explanation: 'This shows the distinction between heat energy (total amount) and temperature (average energy per particle).' }
      ]
    }
  ],
  sec2: [
    {
      id: 'sec2-sci-chemical-changes',
      title: 'Chemical Changes',
      titleEn: '',
      summary: 'Physical vs chemical change, combustion, rusting, and evidence of chemical reactions.',
      vocab: [
        { term: 'Physical change', meaning: 'No new substance is formed; usually reversible (e.g. melting ice).' },
        { term: 'Chemical change', meaning: 'One or more new substances are formed; usually irreversible, often with an energy change.' },
        { term: 'Rusting', meaning: 'The chemical reaction of iron with oxygen and water to form hydrated iron(III) oxide.' },
        { term: 'Combustion', meaning: 'A chemical reaction between a fuel and oxygen that releases energy, usually as heat and light.' }
      ],
      questions: [
        { type: 'mcq', q: 'Which of the following is evidence of a chemical change occurring?', options: ['Ice melting into water', 'Sugar dissolving in tea', 'Iron nail turning reddish-brown and flaky over time', 'Water boiling into steam'], answer: 2, explanation: 'Rusting forms a new substance (iron oxide) — the others are physical changes with no new substance formed.' },
        { type: 'fill', q: 'For iron to rust, it needs both oxygen and ______.', answer: ['water', 'moisture'], explanation: 'Rusting requires both oxygen and water to be present; removing either can prevent rust.' },
        { type: 'match', instructions: 'Match each term to its correct description.', pairs: [
          ['Physical change', 'No new substance formed, usually reversible'],
          ['Chemical change', 'New substance formed, usually irreversible'],
          ['Combustion', 'Fuel + oxygen → energy released'],
          ['Rusting', 'Iron + oxygen + water → iron oxide']
        ]},
        { type: 'short', q: 'Suggest two ways to prevent an iron gate from rusting, and explain how each method works.', answer: 'E.g. (1) Painting the gate — creates a barrier that keeps out water and oxygen. (2) Coating with grease/oil — also blocks water and oxygen from reaching the iron. (Accept galvanising — coating with zinc, which corrodes preferentially.)', explanation: 'All rust-prevention methods work by keeping water and/or oxygen away from the iron surface.' }
      ]
    },
    {
      id: 'sec2-sci-periodic-table',
      title: 'Periodic Table, Chemical Formulae & Equations',
      titleEn: '',
      summary: 'Elements, valency, writing simple chemical formulae, and basic ionic/covalent bonding.',
      vocab: [
        { term: 'Valency', meaning: 'The combining power of an element, indicating how many bonds it can form.' },
        { term: 'Ionic bond', meaning: 'A bond formed by the transfer of electrons between atoms, creating oppositely charged ions that attract.' },
        { term: 'Covalent bond', meaning: 'A bond formed by the sharing of electron pairs between atoms.' }
      ],
      questions: [
        { type: 'fill', q: 'Magnesium (valency 2) reacts with oxygen (valency 2) to form magnesium oxide. Its chemical formula is ______.', answer: ['MgO'], explanation: 'When both elements have the same valency, the simplest formula uses one atom of each: MgO.' },
        { type: 'mcq', q: 'The bond between magnesium and oxygen in magnesium oxide is best described as:', options: ['Covalent, because electrons are shared', 'Ionic, because electrons are transferred from metal to non-metal', 'Metallic, because both are metals', 'No bond forms between them'], answer: 1, explanation: 'Magnesium (a metal) transfers electrons to oxygen (a non-metal), forming Mg²⁺ and O²⁻ ions held together by electrostatic attraction — an ionic bond.' },
        { type: 'short', q: 'Write the word equation for magnesium reacting with oxygen, and explain in one sentence what a chemical equation shows.', answer: 'Magnesium + Oxygen → Magnesium oxide. A chemical equation shows the reactants that react together and the products that are formed.', explanation: 'Word equations show what happens in a reaction without needing chemical formulae.' },
        { type: 'match', instructions: 'Match each bonding concept to its description.', pairs: [
          ['Ionic bond', 'Electrons transferred, forms charged ions'],
          ['Covalent bond', 'Electrons shared between atoms'],
          ['Valency', 'Combining power of an element'],
          ['Metal + non-metal', 'Typically forms ionic bonds']
        ]}
      ]
    },
    {
      id: 'sec2-sci-transport-systems',
      title: 'Transport Systems in Living Things',
      titleEn: '',
      summary: 'The human circulatory system and plant transport via xylem and phloem.',
      vocab: [
        { term: 'Xylem', meaning: 'Plant tissue that transports water and dissolved minerals from roots to leaves.' },
        { term: 'Phloem', meaning: 'Plant tissue that transports manufactured food (sugars) from leaves to other parts of the plant.' },
        { term: 'Transpiration', meaning: 'The loss of water vapour from a plant, mainly through stomata in leaves.' },
        { term: 'Capillary', meaning: 'The smallest blood vessel, with walls one cell thick, allowing exchange of substances.' }
      ],
      questions: [
        { type: 'short', q: 'A student observes that a red blood cell cannot pass into a muscle cell to deliver oxygen directly, but oxygen still reaches the muscle cell. Explain how oxygen gets from the blood into the muscle cell.', answer: 'Oxygen diffuses out of the red blood cell/blood plasma, through the thin wall of the capillary, and then diffuses into the muscle cell, moving from a region of higher oxygen concentration (blood) to lower concentration (muscle cell), down the concentration gradient.', explanation: 'This tests understanding of diffusion across capillary walls, not direct cell-to-cell transport.' },
        { type: 'match', instructions: 'Match each vessel/tissue to its function.', pairs: [
          ['Xylem', 'Transports water and minerals upward'],
          ['Phloem', 'Transports sugars/food to other parts'],
          ['Capillary', 'Allows exchange of substances with cells'],
          ['Artery', 'Carries blood away from the heart']
        ]},
        { type: 'mcq', q: 'Which blood vessel has walls one cell thick to allow exchange of substances with surrounding tissue?', options: ['Artery', 'Vein', 'Capillary', 'Aorta'], answer: 2, explanation: 'Capillaries are the smallest vessels, thin enough for oxygen, nutrients and waste to diffuse across.' },
        { type: 'fill', q: 'The loss of water vapour from a plant, mainly through stomata in the leaves, is called ______.', answer: ['transpiration'], explanation: 'Transpiration helps draw water up through the xylem from the roots.' }
      ]
    },
    {
      id: 'sec2-sci-digestive-depth',
      title: 'Human Digestive System (In Depth)',
      titleEn: '',
      summary: 'Enzymes, food tests, absorption via villi, and food hygiene — building on the P-level digestive system.',
      vocab: [
        { term: 'Enzyme', meaning: 'A biological catalyst (protein) that speeds up digestive reactions without being used up.' },
        { term: 'Villi', meaning: 'Finger-like projections in the small intestine that increase surface area for absorption.' },
        { term: 'Peristalsis', meaning: 'Wave-like muscular contractions that push food along the digestive tract.' }
      ],
      questions: [
        { type: 'mcq', q: 'Which food test is used to detect the presence of starch?', options: ['Benedict’s test (turns brick-red)', 'Iodine test (turns blue-black)', 'Biuret test (turns purple)', 'Ethanol emulsion test (turns cloudy white)'], answer: 1, explanation: 'Iodine solution turns from orange-brown to blue-black in the presence of starch.' },
        { type: 'match', instructions: 'Match each enzyme to what it digests.', pairs: [
          ['Amylase', 'Carbohydrates (starch)'],
          ['Protease', 'Proteins'],
          ['Lipase', 'Fats'],
          ['Villi', 'Increase surface area for absorption']
        ]},
        { type: 'fill', q: 'The wave-like muscular contractions that push food along the digestive tract are called ______.', answer: ['peristalsis'], explanation: 'Peristalsis moves food through the oesophagus, stomach and intestines.' },
        { type: 'short', q: 'Explain why villi in the small intestine are important for digestion.', answer: 'Villi greatly increase the surface area of the small intestine, allowing digested food (nutrients) to be absorbed into the bloodstream more quickly and efficiently.', explanation: 'More surface area means more contact between the intestine wall and digested nutrients, speeding up absorption.' }
      ]
    },
    {
      id: 'sec2-sci-ecosystem-interactions',
      title: 'Interactions within Ecosystems',
      titleEn: '',
      summary: 'Biotic/abiotic factors, food chains, food webs, and energy flow through an ecosystem.',
      vocab: [
        { term: 'Producer', meaning: 'An organism (usually a plant) that makes its own food, forming the base of a food chain.' },
        { term: 'Consumer', meaning: 'An organism that feeds on other organisms for energy.' },
        { term: 'Food web', meaning: 'An interconnected network of multiple food chains showing feeding relationships in an ecosystem.' }
      ],
      questions: [
        { type: 'short', q: 'A field has this food chain: grass → grasshopper → frog → snake. Pesticide use kills most grasshoppers in Year 1. Predict what happens to the frog population in Year 2 and explain why.', answer: 'The frog population is likely to decrease, because frogs feed on grasshoppers. With fewer grasshoppers, there is less food available, so fewer frogs can survive and reproduce.', explanation: 'A drop in one level of a food chain reduces the food supply for the level directly above it.' },
        { type: 'mcq', q: 'What happens to the amount of energy available as you move up a food chain from producer to top consumer?', options: ['It increases at each level', 'It stays exactly the same', 'It decreases at each level', 'It has no relationship to feeding level'], answer: 2, explanation: 'Energy is lost as heat and through life processes at each feeding level, so less energy is available further up the chain.' },
        { type: 'fill', q: 'An organism that makes its own food, such as a green plant, is called a ______.', answer: ['producer'], explanation: 'Producers form the base of every food chain and food web.' },
        { type: 'match', instructions: 'Match each ecosystem term to its meaning.', pairs: [
          ['Biotic factor', 'A living component of an ecosystem'],
          ['Abiotic factor', 'A non-living component, e.g. temperature'],
          ['Food web', 'Interconnected network of food chains'],
          ['Decomposer', 'Breaks down dead matter and waste']
        ]}
      ]
    },
    {
      id: 'sec2-sci-thermal-energy',
      title: 'Thermal Energy',
      titleEn: '',
      summary: 'Conduction, convection and radiation, and thermal expansion.',
      vocab: [
        { term: 'Conduction', meaning: 'Heat transfer through direct particle-to-particle contact, mainly in solids.' },
        { term: 'Convection', meaning: 'Heat transfer through the bulk movement of a heated fluid due to density differences.' },
        { term: 'Radiation', meaning: 'Heat transfer via electromagnetic waves, needing no medium.' }
      ],
      questions: [
        { type: 'short', q: 'In an experiment, rods of copper, glass and wood coated with wax at one end are heated at the other end simultaneously. Wax melts fastest on copper, then glass, then wood. (a) Name the heat transfer process. (b) Explain, in terms of particles, why copper conducts heat faster than wood.', answer: '(a) Conduction. (b) In copper, particles are closely packed and have free-moving electrons that transfer heat energy quickly by colliding with neighbouring particles. Wood’s particles are less closely packed and lack free electrons, so heat transfers more slowly.', explanation: 'Metals conduct heat well mainly because of free electrons carrying energy through the material.' },
        { type: 'mcq', q: 'Which mode of heat transfer can occur through a vacuum (empty space), such as heat from the sun reaching Earth?', options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'], answer: 2, explanation: 'Radiation travels as electromagnetic waves and does not need a medium, unlike conduction and convection.' },
        { type: 'fill', q: 'Heat transfer through the bulk movement of a heated liquid or gas is called ______.', answer: ['convection'], explanation: 'Convection happens because heated fluid becomes less dense and rises, setting up a current.' },
        { type: 'short', q: 'Explain why there are small gaps left between sections of railway track.', answer: 'Metal rails expand when heated (thermal expansion). Gaps allow the rails to expand without buckling or bending on hot days.', explanation: 'This is a classic real-world application of thermal expansion in solids.' }
      ]
    },
    {
      id: 'sec2-sci-light',
      title: 'Light: Reflection and Refraction',
      titleEn: '',
      summary: 'Laws of reflection, refraction at boundaries between media, and introductory lenses.',
      vocab: [
        { term: 'Reflection', meaning: 'Light bouncing off a surface, following the law that angle of incidence = angle of reflection.' },
        { term: 'Refraction', meaning: 'The bending of light as it passes from one medium to another of different density.' }
      ],
      questions: [
        { type: 'mcq', q: 'A pencil appears "bent" when placed in a glass of water. This is due to:', options: ['Reflection', 'Refraction', 'Radiation', 'Diffusion'], answer: 1, explanation: 'Light bends (refracts) as it passes from water into air, making the pencil appear displaced.' },
        { type: 'fill', q: 'In reflection, the angle of incidence is equal to the angle of ______.', answer: ['reflection'], explanation: 'This is the fundamental law of reflection for light hitting a flat surface.' },
        { type: 'short', q: 'Explain why a swimming pool often looks shallower than it actually is when viewed from above the water surface.', answer: 'Light from the bottom of the pool refracts (bends) as it passes from water into air, making the pool bottom appear closer to the surface than it really is.', explanation: 'This is a common real-life application of refraction.' }
      ]
    },
    {
      id: 'sec2-sci-electricity',
      title: 'Electricity and Electrostatics',
      titleEn: '',
      summary: 'Series and parallel circuits, current, voltage, resistance, and electrical safety.',
      vocab: [
        { term: 'Resistance', meaning: 'A property of a component that opposes the flow of electric current, measured in ohms.' },
        { term: 'Series circuit', meaning: 'A circuit with only one path for current to flow.' },
        { term: 'Parallel circuit', meaning: 'A circuit with more than one path for current to flow.' }
      ],
      questions: [
        { type: 'mcq', q: 'In a series circuit with two identical bulbs connected to a battery, if one bulb is removed, what happens to the other bulb?', options: ['It becomes brighter', 'It stays the same brightness', 'It goes out completely', 'It flickers'], answer: 2, explanation: 'Removing a component in a series circuit breaks the single current path, so no current flows and the remaining bulb goes out.' },
        { type: 'mcq', q: 'What instrument is used to measure electric current?', options: ['Voltmeter', 'Ammeter', 'Thermometer', 'Barometer'], answer: 1, explanation: 'An ammeter is connected in series to measure the current flowing through a circuit.' },
        { type: 'fill', q: 'A circuit with more than one path for current to flow is called a ______ circuit.', answer: ['parallel'], explanation: 'In a parallel circuit, if one branch is broken, current can still flow through the other branches.' },
        { type: 'short', q: 'Explain why household appliances are usually connected in parallel rather than in series.', answer: 'In a parallel circuit, each appliance gets the full supply voltage and works independently — if one appliance is switched off or fails, the others continue to work. In series, all appliances would depend on each other and share the voltage.', explanation: 'This is why a single blown bulb in your home doesn’t cut off power to the whole house.' }
      ]
    },
    {
      id: 'sec2-sci-force-energy',
      title: 'Force and Energy',
      titleEn: '',
      summary: 'Effects of forces, work done, energy transfer, and energy sources.',
      vocab: [
        { term: 'Force', meaning: 'A push or pull that can change an object’s shape, speed, or direction.' },
        { term: 'Work done', meaning: 'The energy transferred when a force moves an object through a distance.' },
        { term: 'Renewable energy', meaning: 'Energy from sources that are naturally replenished, e.g. solar, wind.' }
      ],
      questions: [
        { type: 'mcq', q: 'Which of these is NOT a typical effect of a force acting on an object?', options: ['Changing its shape', 'Changing its speed', 'Changing its direction', 'Changing its chemical composition'], answer: 3, explanation: 'Forces affect motion and shape, not the chemical makeup of a substance.' },
        { type: 'fill', q: 'Energy sources that are naturally replenished, such as solar and wind, are called ______ energy.', answer: ['renewable'], explanation: 'Renewable sources contrast with non-renewable fossil fuels, which take millions of years to form.' },
        { type: 'short', q: 'Suggest one advantage and one disadvantage of using solar energy compared to burning fossil fuels.', answer: 'Advantage: solar energy does not produce air pollution or greenhouse gases when generating electricity. Disadvantage: solar energy generation depends on sunlight, so it is unreliable at night or on cloudy days (and requires more land/infrastructure for large-scale use).', explanation: 'Energy source choices always involve trade-offs between environmental impact, reliability, and cost.' }
      ]
    }
  ]
};
