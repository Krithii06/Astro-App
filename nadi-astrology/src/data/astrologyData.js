// Complete Nadi Astrology Data from S. Ravi's book

export const RASHIS = [
  { num: 1, name: 'Mesha', english: 'Aries', lord: 'Kuja', symbol: '♈', element: 'Fire', nature: 'Chara', body: 'Head', disease: 'Bile (Pitta)', direction: 'East', color: 'Red', gender: 'Male', profession: 'Govt job, Police, Military, Fire Service, Sports, Engineering, Surgery, Mining', character: 'Hasty, impulsive, restless, short-tempered', causeOfDeath: 'High Fever' },
  { num: 2, name: 'Vrishaba', english: 'Taurus', lord: 'Sukra', symbol: '♉', element: 'Earth', nature: 'Sthira', body: 'Face', disease: 'Cold', direction: 'South', color: 'White', gender: 'Female', profession: 'Jewelry, Cattle, Money lending, Music, Cinema, Singer, Treasury', character: 'Slow, inclined to ease and luxury, faithful, obedient', causeOfDeath: 'Fire, Weapon' },
  { num: 3, name: 'Mithuna', english: 'Gemini', lord: 'Budha', symbol: '♊', element: 'Air', nature: 'Ubhaya', body: 'Shoulders, Arms, Throat', disease: 'Gas', direction: 'West', color: 'Green', gender: 'Male', profession: 'Broadcasting, Space, Education, Telephone, Accounting, Law, Ambassador', character: 'Good speakers, witty, humorous, fond of knowledge', causeOfDeath: 'Cataract, Asthma, Mental deviation' },
  { num: 4, name: 'Kataka', english: 'Cancer', lord: 'Chandra', symbol: '♋', element: 'Water', nature: 'Chara', body: 'Chest and Lungs', disease: 'Cold (Sleshma)', direction: 'North', color: 'Pink', gender: 'Female', profession: 'Export/Import, Shipping, Transport, Agriculture, Medical, Hotel, Distillery', character: 'Emotional, forgiving, sensitive', causeOfDeath: 'Cholera' },
  { num: 5, name: 'Simha', english: 'Leo', lord: 'Surya', symbol: '♌', element: 'Fire', nature: 'Sthira', body: 'Belly, Stomach', disease: 'Bile', direction: 'East', color: 'Brown', gender: 'Male', profession: 'Govt Job, Politics, Administrator, Social Services, Engineering Industry', character: 'Dominative, behaves like ruler', causeOfDeath: 'Wild beast, Fever, Boils, Enemies' },
  { num: 6, name: 'Kanya', english: 'Virgo', lord: 'Budha', symbol: '♍', element: 'Earth', nature: 'Ubhaya', body: 'Abdomen', disease: 'Gas', direction: 'South', color: 'Grey', gender: 'Female', profession: 'Auditing, Accounting, Business, Teacher, Writer, Retail shops', character: 'Intelligent, good speaker, tactful', causeOfDeath: 'Women, Venereal disease, Fall from height' },
  { num: 7, name: 'Thula', english: 'Libra', lord: 'Sukra', symbol: '♎', element: 'Air', nature: 'Chara', body: 'Hip', disease: 'Cold', direction: 'West', color: 'Variegated', gender: 'Male', profession: 'Jewelry, Fancy, Perfume, Cloth, Money lending, Bank, Law, Hotel, Music, Dance, Cinema', character: 'Good talker, judicious in dealings', causeOfDeath: 'Brain fever, Typhoid' },
  { num: 8, name: 'Vrischika', english: 'Scorpio', lord: 'Kuja', symbol: '♏', element: 'Water', nature: 'Sthira', body: 'Private Part', disease: 'Bile', direction: 'North', color: 'Black and Red', gender: 'Female', profession: 'Iron, Engineering, Mining, Agriculture, Electricity, Astrology, Mantra, Occult', character: 'Peevish, straight forward, likes to hide from crowds', causeOfDeath: 'Jaundice' },
  { num: 9, name: 'Dhanus', english: 'Sagittarius', lord: 'Guru', symbol: '♐', element: 'Fire', nature: 'Ubhaya', body: 'Thighs', disease: 'Gas', direction: 'East', color: 'Yellow (Golden)', gender: 'Male', profession: 'Forest, Saw mills, Bank, Law, Temple, Financial, Education, Military training, Social service', character: 'Honest, easy going, kind hearted', causeOfDeath: 'Tree, Water, Wood, Weapon' },
  { num: 10, name: 'Makara', english: 'Capricorn', lord: 'Sani', symbol: '♑', element: 'Earth', nature: 'Chara', body: 'Knees', disease: 'Gas (Vata)', direction: 'South', color: 'Yellow', gender: 'Female', profession: 'Hotels, Food products, Manure, Oil, Mining, Hardware, Leather, Building, Drivers', character: 'Witty, changeable, cautious, secretive, ambitious', causeOfDeath: 'Stomach ache, Insanity' },
  { num: 11, name: 'Kumbha', english: 'Aquarius', lord: 'Sani', symbol: '♒', element: 'Air', nature: 'Sthira', body: 'Buttocks and Ankle', disease: 'Gas', direction: 'West', color: 'Ash', gender: 'Male', profession: 'Psychology, Astrology, Philosophy, Research, Consultancy, Oil & Gas, Air Service, Defence', character: 'Studious, philosopher, honest, benevolent', causeOfDeath: 'Cough, Fever, Consumption' },
  { num: 12, name: 'Meena', english: 'Pisces', lord: 'Guru', symbol: '♓', element: 'Water', nature: 'Ubhaya', body: 'Feet', disease: 'Gas', direction: 'North', color: 'Deep Brown', gender: 'Female', profession: 'Education, Religious, Medicine, Financial, Law, Navy, Shipping, Temple, Priest', character: 'Lazy, emotional, timid, talkative, intuitive, psychic', causeOfDeath: 'Drowning' },
];

export const PLANETS = [
  { id: 'Surya', name: 'Surya', english: 'Sun', symbol: '☉', dasaYears: 6, exaltation: 'Mesha', debilitation: 'Thula', ownSign: ['Simha'], gender: 'Male', guna: 'Sathwic', relation: 'Father, Son', bodyPart: 'Right Eye, Bone', disease: 'Bile, Eye disease, Headache, Heart', profession: 'Politicians, Physicians, Goldsmiths, Govt service, IAS', color: 'Red', element: 'Fire', character: 'Pious, Reliable, Philanthropic, Popular', nakshatra: ['Krittika', 'Uttara', 'Uttarashada'], friends: ['Chandra', 'Kuja', 'Budha', 'Guru'], enemies: ['Sukra', 'Sani', 'Rahu', 'Ketu'] },
  { id: 'Chandra', name: 'Chandra', english: 'Moon', symbol: '☽', dasaYears: 10, exaltation: 'Vrishaba', debilitation: 'Vrischika', ownSign: ['Kataka'], gender: 'Female', guna: 'Sathwic', relation: 'Mother, Mother-in-law', bodyPart: 'Left Eye, Chest, Urinary Bladder', disease: 'Cold, Venereal, Skin, Mental disorder, Epilepsy', profession: 'Milk, Farming, Nurse, Cook, Travel agent, Pearl maker', color: 'White', element: 'Water', character: 'Capricious, Deceptive, Artistic, Charitable, Adulterous', nakshatra: ['Rohini', 'Hasta', 'Sravana'], friends: ['Surya', 'Kuja', 'Guru'], enemies: ['Budha', 'Sukra', 'Sani', 'Rahu'] },
  { id: 'Kuja', name: 'Kuja', english: 'Mars', symbol: '♂', dasaYears: 7, exaltation: 'Makara', debilitation: 'Kataka', ownSign: ['Mesha', 'Vrischika'], gender: 'Male', guna: 'Thamasic', relation: 'Younger Brother, Husband', bodyPart: 'Heart, Blood, Bone Marrow', disease: 'Accidents, Wounds, Blood pressure, Piles', profession: 'Police, Military, Engineer, Surgeon, Sports, Blacksmith, Soldier', color: 'Red', element: 'Fire', character: 'Egoistic, Courageous, Hasty, Stubborn, Aggressive', nakshatra: ['Mrigashira', 'Chitta', 'Dhanista'], friends: ['Surya', 'Chandra', 'Guru', 'Sukra', 'Ketu'], enemies: ['Budha', 'Sani', 'Rahu'] },
  { id: 'Budha', name: 'Budha', english: 'Mercury', symbol: '☿', dasaYears: 17, exaltation: 'Kanya', debilitation: 'Meena', ownSign: ['Mithuna', 'Kanya'], gender: 'Male/Female', guna: 'Rajasic', relation: 'Maternal Uncle, Girlfriend/Boyfriend', bodyPart: 'Hands, Neck, Shoulders, Skin', disease: 'Stomach, Leprosy, Intestinal, Skin diseases', profession: 'Teacher, Writer, Accountant, Lawyer, Editor, Publisher, Journalist', color: 'Green', element: 'Air', character: 'Intelligent, Witty, Romantic, Cunning, Diplomatic, Soft spoken', nakshatra: ['Aslesha', 'Jyesta', 'Revathi'], friends: ['Sukra', 'Sani', 'Rahu', 'Surya'], enemies: ['Chandra', 'Kuja', 'Guru', 'Ketu'] },
  { id: 'Guru', name: 'Guru', english: 'Jupiter', symbol: '♃', dasaYears: 16, exaltation: 'Kataka', debilitation: 'Makara', ownSign: ['Dhanus', 'Meena'], gender: 'Male', guna: 'Sathwic', relation: 'Teacher, Self (Jeevakaraka)', bodyPart: 'Brain, Thighs, Feet, Flesh', disease: 'Hernia, Bronchitis, Liver, Jaundice', profession: 'Priest, Manager, Minister, Lawyer, Judge, Banker', color: 'Yellow', element: 'Ether', character: 'Religious, Noble, Respectable, Independent, Dutiful', nakshatra: ['Punarvasu', 'Visaka', 'Poorva Badra'], friends: ['Surya', 'Chandra', 'Kuja', 'Sani', 'Rahu', 'Ketu'], enemies: ['Budha', 'Sukra'] },
  { id: 'Sukra', name: 'Sukra', english: 'Venus', symbol: '♀', dasaYears: 20, exaltation: 'Meena', debilitation: 'Kanya', ownSign: ['Vrishaba', 'Thula'], gender: 'Female', guna: 'Rajasic', relation: 'Wife, Sister, Daughter', bodyPart: 'Womb, Uterus, Ovaries, Face, Semen', disease: 'Venereal, Uterine, Eye, Diabetes, Skin', profession: 'Beauty Parlor, Cloth, Luxury, Music, Dance, Cinema, Jewelry, Finance', color: 'White', element: 'Water', character: 'Sexy, Artistic, Fond of luxury and tasty food, Passionate', nakshatra: ['Bharani', 'Poorva Phalguni', 'Poorvashada'], friends: ['Budha', 'Sani', 'Rahu', 'Kuja', 'Ketu'], enemies: ['Surya', 'Chandra', 'Guru'] },
  { id: 'Sani', name: 'Sani', english: 'Saturn', symbol: '♄', dasaYears: 19, exaltation: 'Thula', debilitation: 'Mesha', ownSign: ['Makara', 'Kumbha'], gender: 'Male', guna: 'Thamasic', relation: 'Elder Brother, Profession/Career (Karmakaraka)', bodyPart: 'Feet, Knees, Digestion System', disease: 'Lethargy, Rheumatism, Arthritis, Tooth, Ulcer, Asthma', profession: 'Watchman, Cleaner, Miner, Brick layers, any service profession', color: 'Black/Dark Blue', element: 'Air', character: 'Lazy, Stubborn', nakshatra: ['Pushya', 'Anusha', 'Uttarabadra'], friends: ['Budha', 'Sukra', 'Guru', 'Rahu'], enemies: ['Surya', 'Chandra', 'Kuja', 'Ketu'] },
  { id: 'Rahu', name: 'Rahu', english: "Dragon's Head", symbol: '☊', dasaYears: 18, exaltation: 'Vrishaba', debilitation: 'Vrischika', ownSign: ['Kumbha'], gender: 'Male', guna: 'Thamasic', relation: 'Paternal Grand Father, Foreign travels', bodyPart: 'Intestine, Ears, Head', disease: 'Cataract, Leprosy, Pox, Rheumatism, Snake bite, Insanity', profession: 'Chemical Industry, Electronics, CBI, Secret organization, Foreign trade', color: 'Black/Ash', element: 'Air+Fire', character: 'Thief, Courageous, Adventurous', nakshatra: ['Aridra', 'Swati', 'Sathabisha'], friends: ['Budha', 'Sukra', 'Sani', 'Guru'], enemies: ['Surya', 'Chandra', 'Kuja'] },
  { id: 'Ketu', name: 'Ketu', english: "Dragon's Tail", symbol: '☋', dasaYears: 7, exaltation: 'Vrischika', debilitation: 'Vrishaba', ownSign: ['Vrischika'], gender: 'Male', guna: 'Thamasic', relation: 'Maternal Grand Father', bodyPart: 'Nails, Hairs, Anus, Private Parts, Nerves', disease: 'Cuts, wounds, Leprosy, Cancer, Piles, Tumour', profession: 'Doctor, Astrologer, Priest, Lawyer, Tailor, Faith healer, Occultist', color: 'Red', element: 'Fire', character: 'Miser, Philosopher, Religious, Recluse', nakshatra: ['Aswini', 'Makha', 'Moola'], friends: ['Kuja', 'Sukra', 'Guru'], enemies: ['Surya', 'Chandra', 'Budha', 'Sani'] },
];

export const DASA_ORDER = ['Ketu', 'Sukra', 'Surya', 'Chandra', 'Kuja', 'Rahu', 'Guru', 'Sani', 'Budha'];

export const DASA_YEARS = { Surya: 6, Chandra: 10, Kuja: 7, Budha: 17, Guru: 16, Sukra: 20, Sani: 19, Rahu: 18, Ketu: 7 };

export const HOUSES = [
  { num: 1, name: 'Tanu Bhava', meaning: 'Self, Physical body, Personality, Health, Appearance, Longevity' },
  { num: 2, name: 'Dhana Bhava', meaning: 'Wealth, Family, Speech, Food, Eyes, Early education' },
  { num: 3, name: 'Sahaja Bhava', meaning: 'Siblings, Short travels, Communication, Courage, Hands' },
  { num: 4, name: 'Sukha Bhava', meaning: 'Mother, Home, Land, Vehicles, Education, Happiness' },
  { num: 5, name: 'Putra Bhava', meaning: 'Children, Intelligence, Past deeds, Speculation, Love affairs' },
  { num: 6, name: 'Ripu Bhava', meaning: 'Enemies, Disease, Debts, Service, Legal troubles' },
  { num: 7, name: 'Kalatra Bhava', meaning: 'Spouse, Marriage, Partnership, Business partner, Open enemies' },
  { num: 8, name: 'Mrityu Bhava', meaning: 'Longevity, Inheritance, Hidden matters, Occult, Transformation' },
  { num: 9, name: 'Dharma Bhava', meaning: 'Fortune, Father, Religion, Long journeys, Higher education, Guru' },
  { num: 10, name: 'Karma Bhava', meaning: 'Profession, Career, Status, Fame, Government, Father' },
  { num: 11, name: 'Labha Bhava', meaning: 'Gains, Income, Elder siblings, Fulfillment of desires, Friends' },
  { num: 12, name: 'Vyaya Bhava', meaning: 'Losses, Expenses, Foreign lands, Liberation, Bed pleasures' },
];

export const getPlanetInfo = (id) => PLANETS.find(p => p.id === id);
export const getRashiInfo = (num) => RASHIS.find(r => r.num === num);

// Nadi aspects: same direction (1,5,9), opposite (3,7,11), front/rear (2,12)
export const getAspectingPlanets = (planets, targetHouse) => {
  const aspectSigns = [
    targetHouse,
    ((targetHouse + 3) % 12) || 12,
    ((targetHouse + 6) % 12) || 12,
    ((targetHouse + 8) % 12) || 12,
    ((targetHouse + 4) % 12) || 12,
    ((targetHouse + 10) % 12) || 12,
    ((targetHouse) % 12) || 12,
    ((targetHouse + 1) % 12) || 12,
    ((targetHouse + 11) % 12) || 12,
  ];
  const sameDir = [targetHouse, ((targetHouse+4-1)%12)+1, ((targetHouse+8-1)%12)+1];
  const oppDir = [((targetHouse+2-1)%12)+1, ((targetHouse+6-1)%12)+1, ((targetHouse+10-1)%12)+1];
  const frontRear = [((targetHouse+0)%12)+1 === targetHouse+1 ? ((targetHouse)%12)+1 : ((targetHouse)%12)+1, ((targetHouse+10)%12)+1];
  const allAspects = new Set([targetHouse,...sameDir,...oppDir,...frontRear]);
  return Object.entries(planets).filter(([p, h]) => allAspects.has(h)).map(([p]) => p);
};

// NADI key rules
export const analyzeMarriage = (planets, gender) => {
  const results = [];
  const p = planets;
  const sukraHouse = p['Sukra'];
  const kujaHouse = p['Kuja'];
  const guruHouse = p['Guru'];
  const saniHouse = p['Sani'];
  const ketuHouse = p['Ketu'];
  const rahuHouse = p['Rahu'];
  const chandraHouse = p['Chandra'];
  const budhaHouse = p['Budha'];

  const isSameDir = (a, b) => {
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    return dirs.some(d => d.includes(a) && d.includes(b));
  };
  const isOppDir = (a, b) => {
    const pairs = [[1,7],[5,11],[9,3],[2,8],[6,12],[10,4]];
    return pairs.some(([x,y]) => (a===x&&b===y)||(a===y&&b===x));
  };
  const isFrontRear = (a, b) => Math.abs(a-b)===1 || Math.abs(a-b)===11;
  const aspects = (a, b) => isSameDir(a,b)||isOppDir(a,b)||isFrontRear(a,b)||a===b;

  if (gender === 'male') {
    if (aspects(sukraHouse, guruHouse)) results.push({ type: 'positive', text: 'Venus aspects Jupiter → Marriage will happen. Will get a good life partner.' });
    if (aspects(sukraHouse, guruHouse) && isSameDir(sukraHouse, guruHouse)) results.push({ type: 'positive', text: 'Venus in same direction as Jupiter → Early marriage likely.' });
    if (aspects(sukraHouse, saniHouse)) results.push({ type: 'neutral', text: 'Venus aspects Saturn → Late marriage. Delay expected.' });
    if (aspects(ketuHouse, sukraHouse)) results.push({ type: 'negative', text: 'Ketu aspects Venus → Obstacles in marriage. Disputes with wife.' });
    if (aspects(rahuHouse, sukraHouse)) results.push({ type: 'negative', text: 'Rahu aspects Venus → Marriage delayed or denied. Wife may not be faithful.' });
    if (aspects(budhaHouse, guruHouse) || aspects(budhaHouse, saniHouse)) results.push({ type: 'neutral', text: 'Mercury aspects Jupiter/Saturn → Will have girlfriend other than wife (extra-marital tendency).' });
    if (chandraHouse && sukraHouse && budhaHouse && isSameDir(chandraHouse, sukraHouse) && isSameDir(budhaHouse, sukraHouse)) results.push({ type: 'negative', text: 'Moon, Venus, Mercury in same direction → Loose character. Multiple relationships.' });
    if (aspects(saniHouse, sukraHouse)) results.push({ type: 'neutral', text: 'Saturn aspects Venus → Wife will be a working woman.' });
  } else {
    if (aspects(kujaHouse, sukraHouse)) results.push({ type: 'positive', text: 'Mars aspects Venus → Marriage will happen. Good married life.' });
    if (aspects(kujaHouse, guruHouse)) results.push({ type: 'positive', text: 'Mars aspects Jupiter → Marriage confirmed.' });
    if (isSameDir(kujaHouse, sukraHouse)) results.push({ type: 'positive', text: 'Mars and Venus in same direction → Early marriage.' });
    if (aspects(kujaHouse, saniHouse)) results.push({ type: 'neutral', text: 'Mars aspects Saturn → Late marriage for female native.' });
    if (aspects(ketuHouse, kujaHouse)) results.push({ type: 'negative', text: 'Ketu aspects Mars → Obstacles in marriage. Disputes with husband.' });
    if (aspects(rahuHouse, kujaHouse)) results.push({ type: 'negative', text: 'Rahu aspects Mars → Marriage delayed or denied. Will not like husband.' });
    if (aspects(chandraHouse, sukraHouse)) results.push({ type: 'negative', text: 'Moon aspects Venus → Female native may run away with lover. Pre-marital issues.' });
    if (sukraHouse && budhaHouse && chandraHouse && isSameDir(sukraHouse, budhaHouse) && isSameDir(sukraHouse, chandraHouse)) results.push({ type: 'negative', text: 'Venus, Mercury, Moon in same direction → Highly loose character. Multiple relationships.' });
  }

  // Love marriage
  if (budhaHouse && ketuHouse && isSameDir(budhaHouse, ketuHouse)) {
    results.push({ type: 'neutral', text: 'Mercury and Ketu in same direction → Love affair. If aspected by Venus/Jupiter, love marriage.' });
  }

  // Divorce indicators
  if (sukraHouse && ketuHouse && kujaHouse) {
    if (isSameDir(sukraHouse, ketuHouse) && isSameDir(sukraHouse, kujaHouse)) results.push({ type: 'negative', text: 'Venus, Ketu, Mars in same direction → Risk of separation or divorce.' });
    if (isSameDir(sukraHouse, rahuHouse) && isSameDir(sukraHouse, kujaHouse)) results.push({ type: 'negative', text: 'Venus, Rahu, Mars in same direction → Separation risk. If female, ill-treats husband.' });
  }

  return results;
};

export const analyzeForeignTravel = (planets) => {
  const results = [];
  const p = planets;
  const isSameDir = (a, b, c) => {
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    return dirs.some(d => d.includes(a) && d.includes(b) && d.includes(c));
  };
  if (isSameDir(p['Guru'], p['Chandra'], p['Rahu'])) results.push('Jupiter, Moon, Rahu in same direction → Native will travel to foreign countries.');
  if (isSameDir(p['Sani'], p['Chandra'], p['Rahu'])) results.push('Saturn, Moon, Rahu in same direction → Foreign travel/settlement abroad.');
  if (isSameDir(p['Surya'], p['Chandra'], p['Rahu'])) results.push('Sun, Moon, Rahu in same direction → Father or son will have foreign travel.');
  if (isSameDir(p['Kuja'], p['Chandra'], p['Rahu'])) results.push('Mars, Moon, Rahu in same direction → Brother (or husband if female) will go abroad.');
  if (isSameDir(p['Sukra'], p['Chandra'], p['Rahu'])) results.push('Venus, Moon, Rahu in same direction → Sister/wife/daughter will go abroad (or native herself if female).');
  if (isSameDir(p['Guru'], p['Chandra'], p['Ketu'])) results.push('Jupiter, Moon, Ketu in same direction → Brief foreign travel only.');
  if (results.length === 0) results.push('No strong foreign travel yoga found in this chart.');
  return results;
};

export const analyzeMedical = (planets, gender) => {
  const results = [];
  const p = planets;
  const jeevakaraka = gender === 'male' ? 'Guru' : 'Sukra';
  const aspects = (a, b) => {
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    const oppPairs = [[1,4],[1,7],[1,10],[2,5],[2,8],[2,11],[3,6],[3,9],[3,12],[4,7],[4,10],[5,8],[5,11],[6,9],[6,12],[7,10],[8,11],[9,12]];
    return a === b || dirs.some(d => d.includes(a) && d.includes(b)) || oppPairs.some(([x,y]) => (a===x&&b===y)||(a===y&&b===x)) || Math.abs(a-b)===1 || Math.abs(a-b)===11;
  };

  const jHouse = p[jeevakaraka];
  const sHouse = p['Sani'];

  // Pitta (fire planets)
  const firePlanets = ['Surya','Kuja','Ketu'];
  firePlanets.forEach(fp => { if (p[fp] && aspects(p[fp], jHouse)) results.push({ organ: 'General', issue: `${fp} (fire) aspects ${jeevakaraka} → Bile/Pitta diseases: Fever, inflammation, acidity` }); });
  
  // Vata (air)
  const airPlanets = ['Rahu','Sani','Budha'];
  airPlanets.forEach(ap => { if (p[ap] && aspects(p[ap], jHouse)) results.push({ organ: 'Joints/Nerves', issue: `${ap} (air) aspects ${jeevakaraka} → Vata diseases: Gas, rheumatism, arthritis, nerve issues` }); });

  // Kapha (water)
  const waterPlanets = ['Chandra','Sukra'];
  waterPlanets.forEach(wp => { if (p[wp] && aspects(p[wp], jHouse)) results.push({ organ: 'Respiratory', issue: `${wp} (water) aspects ${jeevakaraka} → Cold, phlegm, breathing troubles` }); });

  // Specific
  if (p['Sani'] && aspects(p['Sani'], p['Surya'])) results.push({ organ: 'Eyes', issue: 'Saturn aspects Sun → Weak eyesight' });
  if (p['Sani'] && aspects(p['Sani'], p['Chandra'])) results.push({ organ: 'Eyes', issue: 'Saturn aspects Moon → Weak eyesight' });
  if (p['Rahu'] && p['Surya'] && aspects(p['Rahu'], p['Surya'])) results.push({ organ: 'Eyes', issue: 'Rahu aspects Sun → Cataract, colour blindness, defective eyesight' });
  if (p['Rahu'] && p['Budha'] && aspects(p['Rahu'], p['Budha'])) results.push({ organ: 'Ear', issue: 'Rahu aspects Mercury → Ear trouble' });
  if (p['Rahu'] && p['Guru'] && aspects(p['Rahu'], p['Guru'])) results.push({ organ: 'Nose', issue: 'Rahu aspects Jupiter → Ugly/problematic nose' });
  if (p['Ketu'] && p['Budha'] && aspects(p['Ketu'], p['Budha'])) results.push({ organ: 'Throat', issue: 'Ketu aspects Mercury → Extra growth in throat' });
  if (p['Sani'] && p['Kuja'] && aspects(p['Sani'], p['Kuja'])) results.push({ organ: 'Teeth', issue: 'Saturn aspects Mars → Tooth ache or decay' });
  if (p['Rahu'] && p['Kuja'] && aspects(p['Rahu'], p['Kuja'])) results.push({ organ: 'Teeth', issue: 'Rahu aspects Mars → Uneven/ugly teeth' });
  if (p['Chandra'] && p['Budha'] && aspects(p['Chandra'], p['Budha'])) results.push({ organ: 'Skin/Throat', issue: 'Moon aspects Mercury → Skin disease, throat infection' });
  if (p['Kuja'] && p['Guru'] && aspects(p['Kuja'], p['Guru'])) results.push({ organ: 'Heart/Blood', issue: 'Mars aspects Jupiter → High blood pressure, heart disease' });
  if (p['Sukra'] && p['Chandra'] && aspects(p['Sukra'], p['Chandra'])) results.push({ organ: 'Urinary/Uterus', issue: 'Venus aspects Moon → Diabetes, urinary infection, uterus trouble' });
  if (p['Rahu'] && p['Guru'] && aspects(p['Rahu'], p['Guru'])) results.push({ organ: 'Joints', issue: 'Rahu aspects Jupiter → Rheumatic pain' });
  if (p['Ketu'] && p['Guru'] && aspects(p['Ketu'], p['Guru'])) results.push({ organ: 'Joints', issue: 'Ketu aspects Jupiter → Rheumatic pain' });

  const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
  const sameDir3 = (a,b,c) => dirs.some(d => d.includes(a) && d.includes(b) && d.includes(c));
  if (p['Guru'] && p['Kuja'] && p['Rahu'] && sameDir3(p['Guru'], p['Kuja'], p['Rahu'])) results.push({ organ: 'Accident', issue: 'Jupiter, Mars, Rahu in same direction → Vehicle accident risk' });
  if (p['Chandra'] && p['Kuja'] && p['Rahu'] && sameDir3(p['Chandra'], p['Kuja'], p['Rahu'])) results.push({ organ: 'Mental', issue: 'Moon, Mars, Rahu in same direction → Suicidal tendency' });
  if (p['Chandra'] && p['Rahu'] && aspects(p['Chandra'], p['Rahu'])) results.push({ organ: 'Mental', issue: 'Moon and Rahu together/aspecting → Mental hallucination, instability' });

  if (results.length === 0) results.push({ organ: 'General', issue: 'No major health afflictions indicated. Maintain regular health checkups.' });
  return results;
};

export const analyzeCareer = (planets) => {
  const results = [];
  const p = planets;
  const aspects = (a, b) => {
    if (!a || !b) return false;
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    return a === b || dirs.some(d => d.includes(a) && d.includes(b)) || Math.abs(a-b)===1 || Math.abs(a-b)===11;
  };
  const sHouse = p['Sani'];
  if (!sHouse) return [{ career: 'Career', detail: 'Saturn placement needed for career analysis' }];

  if (aspects(p['Surya'], sHouse)) results.push({ career: 'Government Service / Politics', detail: 'Sun aspects Saturn → Government job, IAS, political career, father\'s profession' });
  if (aspects(p['Chandra'], sHouse)) results.push({ career: 'Travel / Food / Liquid Trade', detail: 'Moon aspects Saturn → Frequent traveling profession, food products, travel agent, milk/water trade' });
  if (aspects(p['Kuja'], sHouse)) results.push({ career: 'Engineering / Military / Police', detail: 'Mars aspects Saturn → Machinery, police, defence service, fire service' });
  if (aspects(p['Budha'], sHouse)) results.push({ career: 'Teaching / Writing / Business', detail: 'Mercury aspects Saturn → Teacher, writer, businessman, accountant' });
  if (aspects(p['Guru'], sHouse)) results.push({ career: 'Management / Law / Finance', detail: 'Jupiter aspects Saturn → Respectable career, judge, lawyer, manager, comfortable profession' });
  if (aspects(p['Sukra'], sHouse)) results.push({ career: 'Finance / Luxury / Arts', detail: 'Venus aspects Saturn → Finance, luxury articles, arts, jewelry, beauty industry' });
  if (aspects(p['Rahu'], sHouse)) results.push({ career: 'Secret / Intelligence / Abroad', detail: 'Rahu aspects Saturn → Initially difficult (Daridra Yoga) but becomes eminent. Secret organizations, foreign connections.' });
  if (aspects(p['Ketu'], sHouse)) results.push({ career: 'Spirituality / Religion / Healing', detail: 'Ketu aspects Saturn → Spiritual profession, priest, astrologer, no stable job, reclusive nature' });
  if (results.length === 0) results.push({ career: 'Varied Career', detail: 'Multiple income sources possible. Analyze Saturn\'s house placement for more specifics.' });
  return results;
};

export const analyzeParents = (planets) => {
  const results = { father: [], mother: [] };
  const p = planets;
  const aspects = (a, b) => {
    if (!a || !b) return false;
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    return a === b || dirs.some(d => d.includes(a) && d.includes(b)) || Math.abs(a-b)===1 || Math.abs(a-b)===11;
  };
  const sameDir = (a,b) => { const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]]; return dirs.some(d => d.includes(a) && d.includes(b)); };

  // Father
  if (aspects(p['Guru'], p['Surya'])) results.father.push('Good relationship between native and father. Father is respectable.');
  if (aspects(p['Sani'], p['Surya'])) results.father.push('Strained relationship with father. Father faces difficulties from government.');
  if (p['Surya'] && p['Ketu'] && p['Chandra'] && sameDir(p['Surya'], p['Ketu']) && sameDir(p['Surya'], p['Chandra'])) results.father.push('Dispute between father and mother indicated.');
  if (p['Surya'] && p['Ketu'] && p['Kuja'] && sameDir(p['Surya'], p['Ketu'])) results.father.push('Dispute between father and brothers.');
  if (p['Rahu'] && p['Surya'] && aspects(p['Rahu'], p['Surya'])) results.father.push('Father may face sudden troubles or health issues. Risk of early loss of father.');
  if (results.father.length === 0) results.father.push('Father is generally supportive. Check Sun\'s house placement for more details.');

  // Mother
  if (aspects(p['Guru'], p['Chandra'])) results.mother.push('Good relationship with mother. Mother is caring and supportive.');
  if (aspects(p['Sani'], p['Chandra'])) results.mother.push('Difficult relationship with mother or mother faces health troubles.');
  if (p['Chandra'] && p['Rahu'] && aspects(p['Chandra'], p['Rahu'])) results.mother.push('Mother faces danger or mental disturbances. Be cautious of mother\'s health.');
  if (p['Guru'] && p['Ketu'] && p['Chandra'] && sameDir(p['Guru'], p['Ketu'])) results.mother.push('Dispute between native and mother at some point.');
  if (results.mother.length === 0) results.mother.push('Mother is generally well. Check Moon\'s placement for more details.');

  return results;
};

export const analyzeYogas = (planets, gender) => {
  const yogas = [];
  const p = planets;
  const aspects = (a, b) => {
    if (!a || !b) return false;
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    return a === b || dirs.some(d => d.includes(a) && d.includes(b)) || Math.abs(a-b)===1 || Math.abs(a-b)===11;
  };
  const sameDir3 = (a,b,c) => { const dirs=[[1,5,9],[2,6,10],[3,7,11],[4,8,12]]; return a&&b&&c&&dirs.some(d=>d.includes(a)&&d.includes(b)&&d.includes(c)); };
  const sameDir2 = (a,b) => { const dirs=[[1,5,9],[2,6,10],[3,7,11],[4,8,12]]; return a&&b&&dirs.some(d=>d.includes(a)&&d.includes(b)); };
  const sucSign = (a,b) => a&&b&&(Math.abs(a-b)===1||Math.abs(a-b)===11);

  // Wealth
  if (aspects(p['Sukra'], p['Sani'])) yogas.push({ name: 'Dhana Yoga', type: 'positive', desc: 'Venus aspects Saturn → Rich life. Own house, own vehicle. Financial prosperity through wife/partner.' });
  if (aspects(p['Guru'], p['Sani'])) yogas.push({ name: 'Comfortable Career Yoga', type: 'positive', desc: 'Jupiter aspects Saturn → Smooth career. Honor, respect, and luxury. Job comes easily.' });
  if (aspects(p['Budha'], p['Sani'])) yogas.push({ name: 'Business Success Yoga', type: 'positive', desc: 'Mercury aspects Saturn → Successful business. Gain of land and property.' });

  // Difficult yogas
  if (aspects(p['Kuja'], p['Sani'])) yogas.push({ name: 'Hardship Yoga', type: 'negative', desc: 'Mars aspects Saturn → Hardship throughout life. Enemies harass. Difficulty in career.' });
  if (aspects(p['Surya'], p['Sani'])) yogas.push({ name: 'Government Trouble Yoga', type: 'negative', desc: 'Sun aspects Saturn → Government troubles. Low-paid job. Employer finds fault.' });
  if (aspects(p['Rahu'], p['Sani'])) yogas.push({ name: 'Daridra Yoga (Initial Poverty)', type: 'neutral', desc: 'Rahu aspects Saturn → Initial subordination and struggle (Daridra Yoga). But becomes eminent in later life.' });
  if (aspects(p['Ketu'], p['Sani'])) yogas.push({ name: 'Recluse/Spiritual Yoga', type: 'neutral', desc: 'Ketu aspects Saturn → No stable job. Disputes at workplace. Behaves like a recluse.' });

  // Spiritual yogas
  if (aspects(p['Ketu'], p['Sani']) || aspects(p['Ketu'], p['Guru'])) yogas.push({ name: 'Spiritual Inclination', type: 'neutral', desc: 'Ketu aspects Saturn/Jupiter → Spiritual thoughts, inclination towards moksha.' });
  if (sameDir3(p['Guru'], p['Surya'], p['Ketu'])) yogas.push({ name: 'Raja Yoga (Spiritual)', type: 'positive', desc: 'Jupiter, Sun, Ketu in same direction → Practice of Raja Yoga.' });
  if (sameDir3(p['Guru'], p['Kuja'], p['Ketu'])) yogas.push({ name: 'Hatha Yoga', type: 'positive', desc: 'Jupiter, Mars, Ketu in same direction → Practice of Hatha Yoga.' });
  if (sameDir3(p['Guru'], p['Budha'], p['Ketu'])) yogas.push({ name: 'Gnana Yoga', type: 'positive', desc: 'Jupiter, Mercury, Ketu in same direction → Wisdom and Gnana Yoga practice.' });
  if (sameDir3(p['Guru'], p['Sukra'], p['Ketu'])) yogas.push({ name: 'Kundalini Yoga', type: 'positive', desc: 'Jupiter, Venus, Ketu in same direction → Kundalini/Sahaja Yoga.' });

  // Moksha
  if (sameDir2(p['Guru'], p['Ketu']) || sucSign(p['Guru'], p['Ketu'])) yogas.push({ name: 'Moksha Yoga', type: 'positive', desc: 'Jupiter and Ketu together or successive → Possibility of Moksha in this birth.' });

  // Politician
  if (aspects(p['Surya'], p['Guru']) || aspects(p['Surya'], p['Sani'])) yogas.push({ name: 'Political Career', type: 'positive', desc: 'Sun aspects Jupiter/Saturn → Native will become a politician or political influencer.' });

  // Writer/Speaker
  if (aspects(p['Budha'], p['Guru']) || aspects(p['Budha'], p['Sani'])) yogas.push({ name: 'Writing/Speaking Talent', type: 'positive', desc: 'Mercury aspects Jupiter/Saturn → Excellent writer and public speaker.' });

  // Artist
  if (aspects(p['Sukra'], p['Guru']) || aspects(p['Sukra'], p['Sani'])) yogas.push({ name: 'Artistic Talent', type: 'positive', desc: 'Venus aspects Jupiter/Saturn → Talent in acting, music, singing, cinema.' });

  // Astrologer
  if (aspects(p['Ketu'], p['Guru']) || aspects(p['Ketu'], p['Sani'])) yogas.push({ name: 'Astrology Aptitude', type: 'positive', desc: 'Ketu aspects Jupiter/Saturn → Knowledge in astrology and occult sciences.' });

  return yogas;
};

export const analyzeSexAndRelationship = (planets, gender) => {
  const results = [];
  const p = planets;
  const aspects = (a, b) => {
    if (!a || !b) return false;
    const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]];
    return a === b || dirs.some(d => d.includes(a) && d.includes(b)) || Math.abs(a-b)===1 || Math.abs(a-b)===11;
  };
  const sameDir = (a, b) => { const dirs = [[1,5,9],[2,6,10],[3,7,11],[4,8,12]]; return a && b && dirs.some(d => d.includes(a) && d.includes(b)); };

  if (gender === 'male') {
    if (aspects(p['Chandra'], p['Sukra'])) results.push({ type: 'negative', text: 'Moon aspects Venus → High sexual drive. Wife has loose character or native has adulterous tendencies.' });
    if (sameDir(p['Budha'], p['Ketu'])) results.push({ type: 'neutral', text: 'Mercury and Ketu in same direction → Love affair before marriage. Pre-marital relationship.' });
    if (sameDir(p['Sukra'], p['Kuja']) && sameDir(p['Sukra'], p['Budha'])) results.push({ type: 'negative', text: 'Venus hemmed between Mars and Mercury → Relationship with both wife and lover.' });
    if (aspects(p['Budha'], p['Guru'])) results.push({ type: 'neutral', text: 'Mercury aspects Jupiter → Will have girlfriend other than wife.' });
  } else {
    if (sameDir(p['Sukra'], p['Chandra'])) results.push({ type: 'negative', text: 'Venus and Moon in same direction → Female native may elope with lover.' });
    if (aspects(p['Chandra'], p['Sukra']) && aspects(p['Budha'], p['Sukra'])) results.push({ type: 'negative', text: 'Moon and Mercury both aspect Venus → Abnormal sexual behaviour. Multiple relationships.' });
    if (sameDir(p['Sukra'], p['Rahu']) && sameDir(p['Sukra'], p['Kuja'])) results.push({ type: 'negative', text: 'Venus, Rahu, Mars in same direction → Female native will ill-treat husband. Extramarital affairs.' });
    if (sameDir(p['Kuja'], p['Budha']) && sameDir(p['Kuja'], p['Sukra']) && sameDir(p['Kuja'], p['Ketu'])) results.push({ type: 'negative', text: 'Mars, Mercury, Venus, Ketu in same direction → Love affair with person of different caste/community.' });
    if (aspects(p['Chandra'], p['Sukra']) && !aspects(p['Guru'], p['Sukra'])) results.push({ type: 'negative', text: 'Moon aspects Venus (without Jupiter) → Pre-marital pregnancy risk.' });
  }

  if (results.length === 0) results.push({ type: 'positive', text: 'No significant pre-marital or extramarital tendencies indicated. Generally balanced love life.' });
  return results;
};

// Calculate Dasa from birth star
export const calculateDasa = (birthStar, starPada, birthYear) => {
  const nadiStars = [
    'Aswini','Bharani','Krittika','Rohini','Mrigasira','Aridra','Punarvasu','Pushya','Aslesha',
    'Makha','Pubha','Uttara','Hasta','Chitta','Swathi','Vishaka','Anuradha','Jyesta',
    'Moola','Poorvashada','Utharashada','Sravana','Dhanishta','Sathabisha','Poorvabhadra','Uttarabhadra','Revathi'
  ];
  const dasaLords = ['Ketu','Sukra','Surya','Chandra','Kuja','Rahu','Guru','Sani','Budha'];
  // Each star: first 3 stars = Ketu, next 3 = Sukra, etc.
  const starIndex = nadiStars.indexOf(birthStar);
  if (starIndex === -1) return null;
  const dasaIndex = Math.floor(starIndex / 3) % 9;
  
  const dasas = [];
  let year = birthYear || 2000;
  for (let i = 0; i < 9; i++) {
    const idx = (dasaIndex + i) % 9;
    const lord = dasaLords[idx];
    const years = DASA_YEARS[lord];
    dasas.push({ lord, years, start: year, end: year + years });
    year += years;
  }
  return dasas;
};
