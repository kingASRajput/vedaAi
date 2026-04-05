// VedaAI Scripture Data - Comprehensive Vedic Knowledge Base
// Author: Anmol Rajput

export interface Verse {
  id: string;
  number: number;
  sanskrit: string;
  transliteration?: string;
  translation: string;
  meaning?: string;
  keywords: string[];
}

export interface Chapter {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  description: string;
  verseCount: number;
  verses: Verse[];
}

export interface Scripture {
  id: string;
  name: string;
  nameSanskrit: string;
  category: string;
  description: string;
  period?: string;
  totalVerses: number;
  totalChapters: number;
  chapters: Chapter[];
}

export const scriptures: Scripture[] = [
  {
    id: 'bhagavad-gita',
    name: 'Bhagavad Gita',
    nameSanskrit: 'भगवद्गीता',
    category: 'Epics',
    description: 'The divine song of Lord Krishna to Arjuna on the battlefield of Kurukshetra, teaching the paths of knowledge, devotion, and selfless action.',
    period: '5th-2nd century BCE',
    totalVerses: 700,
    totalChapters: 18,
    chapters: [
      {
        id: 'bg-1',
        number: 1,
        name: 'Arjuna Vishada Yoga',
        nameSanskrit: 'अर्जुनविषादयोग',
        description: 'The Yoga of Arjuna\'s Dejection - Arjuna\'s moral dilemma on the battlefield',
        verseCount: 47,
        verses: [
          { id: 'bg-1-1', number: 1, sanskrit: 'धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥', translation: 'Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager for battle?', keywords: ['kurukshetra', 'battlefield', 'dharma'] },
          { id: 'bg-1-2', number: 2, sanskrit: 'सञ्जय उवाच। दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा। आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्॥', translation: 'Sanjaya said: Seeing the army of the Pandavas arrayed, King Duryodhana approached his teacher Drona and spoke these words.', keywords: ['duryodhana', 'drona', 'army'] },
        ]
      },
      {
        id: 'bg-2',
        number: 2,
        name: 'Sankhya Yoga',
        nameSanskrit: 'साङ्ख्ययोग',
        description: 'The Yoga of Knowledge - Krishna teaches about the eternal soul and the path of wisdom',
        verseCount: 72,
        verses: [
          { id: 'bg-2-11', number: 11, sanskrit: 'श्रीभगवानुवाच। अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥', translation: 'The Blessed Lord said: You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise grieve neither for the living nor for the dead.', keywords: ['wisdom', 'grief', 'soul'] },
          { id: 'bg-2-13', number: 13, sanskrit: 'देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥', translation: 'Just as the soul passes through childhood, youth and old age in this body, so too does it pass into another body. The wise are not deluded by this.', keywords: ['soul', 'rebirth', 'body', 'atman'] },
          { id: 'bg-2-20', number: 20, sanskrit: 'न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥', translation: 'The soul is never born, nor does it ever die. It has never come into being, nor will it ever cease to be. Unborn, eternal, everlasting, and primeval, it is not slain when the body is slain.', keywords: ['soul', 'immortal', 'eternal', 'atman'] },
          { id: 'bg-2-47', number: 47, sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥', translation: 'You have the right to work only, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.', meaning: 'This is the essence of Karma Yoga - perform your duty without attachment to results.', keywords: ['karma', 'action', 'detachment', 'duty', 'nishkama karma'] },
          { id: 'bg-2-62', number: 62, sanskrit: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥', translation: 'When a person dwells on sense objects, attachment to them arises. From attachment springs desire, and from desire comes anger.', keywords: ['desire', 'attachment', 'anger', 'mind'] },
        ]
      },
      {
        id: 'bg-3',
        number: 3,
        name: 'Karma Yoga',
        nameSanskrit: 'कर्मयोग',
        description: 'The Yoga of Action - The path of selfless service',
        verseCount: 43,
        verses: [
          { id: 'bg-3-19', number: 19, sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥', translation: 'Therefore, without attachment, always perform the work that has to be done; for by performing action without attachment, one attains the Supreme.', keywords: ['karma', 'detachment', 'action', 'duty'] },
          { id: 'bg-3-21', number: 21, sanskrit: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥', translation: 'Whatever a great person does, others follow. Whatever standards they set, the world pursues.', keywords: ['leadership', 'example', 'dharma'] },
        ]
      },
      {
        id: 'bg-4',
        number: 4,
        name: 'Jnana Karma Sanyasa Yoga',
        nameSanskrit: 'ज्ञानकर्मसंन्यासयोग',
        description: 'The Yoga of Knowledge and Renunciation of Action',
        verseCount: 42,
        verses: [
          { id: 'bg-4-7', number: 7, sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥', translation: 'Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself.', keywords: ['avatar', 'dharma', 'incarnation', 'god'] },
          { id: 'bg-4-8', number: 8, sanskrit: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥', translation: 'To protect the righteous, to destroy the wicked, and to establish dharma, I am born in every age.', keywords: ['avatar', 'protection', 'dharma', 'yuga'] },
        ]
      },
      {
        id: 'bg-9',
        number: 9,
        name: 'Raja Vidya Raja Guhya Yoga',
        nameSanskrit: 'राजविद्याराजगुह्ययोग',
        description: 'The Yoga of Royal Knowledge and Royal Secret',
        verseCount: 34,
        verses: [
          { id: 'bg-9-22', number: 22, sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥', translation: 'To those who worship Me alone, thinking of no other, to those ever-devoted, I provide what they lack and preserve what they have.', keywords: ['devotion', 'protection', 'bhakti', 'surrender'] },
        ]
      },
      {
        id: 'bg-12',
        number: 12,
        name: 'Bhakti Yoga',
        nameSanskrit: 'भक्तियोग',
        description: 'The Yoga of Devotion',
        verseCount: 20,
        verses: [
          { id: 'bg-12-13', number: 13, sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥', translation: 'One who is free from hatred towards all beings, friendly and compassionate, free from possessiveness and ego, equal in joy and sorrow, and forgiving.', keywords: ['devotion', 'compassion', 'equanimity', 'bhakti'] },
        ]
      },
    ]
  },
  {
    id: 'isha-upanishad',
    name: 'Isha Upanishad',
    nameSanskrit: 'ईशोपनिषद्',
    category: 'Upanishads',
    description: 'One of the shortest yet most profound Upanishads, teaching the unity of Atman with Brahman.',
    period: '1st millennium BCE',
    totalVerses: 18,
    totalChapters: 1,
    chapters: [
      {
        id: 'isha-1',
        number: 1,
        name: 'Main Text',
        nameSanskrit: 'मूलपाठ',
        description: 'The complete Isha Upanishad',
        verseCount: 18,
        verses: [
          { id: 'isha-1-1', number: 1, sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥', translation: 'All this, whatever exists in this universe, is pervaded by the Lord. Enjoy with renunciation; do not covet, for whose is wealth?', meaning: 'The divine pervades all existence. Enjoy life with detachment.', keywords: ['god', 'universe', 'renunciation', 'brahman'] },
          { id: 'isha-1-6', number: 6, sanskrit: 'यस्तु सर्वाणि भूतान्यात्मन्येवानुपश्यति। सर्वभूतेषु चात्मानं ततो न विजुगुप्सते॥', translation: 'One who sees all beings in the Self and the Self in all beings, never turns away from anything.', keywords: ['unity', 'self', 'atman', 'oneness'] },
        ]
      }
    ]
  },
  {
    id: 'katha-upanishad',
    name: 'Katha Upanishad',
    nameSanskrit: 'कठोपनिषद्',
    category: 'Upanishads',
    description: 'The dialogue between Nachiketa and Yama (Death), revealing profound truths about the immortal soul.',
    period: '1st millennium BCE',
    totalVerses: 119,
    totalChapters: 6,
    chapters: [
      {
        id: 'katha-1',
        number: 1,
        name: 'Valli 1',
        nameSanskrit: 'वल्ली १',
        description: 'Nachiketa\'s meeting with Death',
        verseCount: 29,
        verses: [
          { id: 'katha-1-2-20', number: 20, sanskrit: 'अणोरणीयान्महतो महीयानात्माऽस्य जन्तोर्निहितो गुहायाम्। तमक्रतुः पश्यति वीतशोको धातुप्रसादान्महिमानमात्मनः॥', translation: 'The Self is subtler than the subtle, greater than the great. It is hidden in the heart of all beings. One who is free from desires and sorrow sees the glory of the Self.', keywords: ['atman', 'soul', 'self', 'subtle'] },
        ]
      }
    ]
  },
  {
    id: 'mundaka-upanishad',
    name: 'Mundaka Upanishad',
    nameSanskrit: 'मुण्डकोपनिषद्',
    category: 'Upanishads',
    description: 'Distinguishes between higher knowledge (para vidya) and lower knowledge (apara vidya).',
    period: '1st millennium BCE',
    totalVerses: 64,
    totalChapters: 3,
    chapters: [
      {
        id: 'mundaka-1',
        number: 1,
        name: 'Mundaka 1',
        nameSanskrit: 'मुण्डक १',
        description: 'Two kinds of knowledge',
        verseCount: 18,
        verses: [
          { id: 'mundaka-3-1-6', number: 6, sanskrit: 'सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः। येनाक्रमन्त्यृषयो ह्याप्तकामा यत्र तत् सत्यस्य परमं निधानम्॥', translation: 'Truth alone triumphs, not falsehood. By truth is laid out the path called Devayana, by which the sages who are free from desires ascend to where is the supreme treasure of Truth.', meaning: 'This is India\'s national motto - Satyameva Jayate.', keywords: ['truth', 'satyameva jayate', 'victory', 'path'] },
        ]
      }
    ]
  },
  {
    id: 'mandukya-upanishad',
    name: 'Mandukya Upanishad',
    nameSanskrit: 'माण्डूक्योपनिषद्',
    category: 'Upanishads',
    description: 'The shortest Upanishad, explaining Om and the four states of consciousness.',
    period: '1st millennium BCE',
    totalVerses: 12,
    totalChapters: 1,
    chapters: [
      {
        id: 'mandukya-1',
        number: 1,
        name: 'Main Text',
        nameSanskrit: 'मूलपाठ',
        description: 'Analysis of Om and consciousness',
        verseCount: 12,
        verses: [
          { id: 'mandukya-1-1', number: 1, sanskrit: 'ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद्भविष्यदिति सर्वमोङ्कार एव।', translation: 'Om! This syllable is all this. All that is past, present, and future is truly Om. And whatever transcends the three periods of time, that too is Om.', keywords: ['om', 'time', 'consciousness', 'brahman'] },
          { id: 'mandukya-1-7', number: 7, sanskrit: 'नान्तःप्रज्ञं न बहिष्प्रज्ञं नोभयतःप्रज्ञं न प्रज्ञानघनं न प्रज्ञं नाप्रज्ञम्। अदृष्टमव्यवहार्यमग्राह्यमलक्षणमचिन्त्यमव्यपदेश्यमेकात्मप्रत्ययसारं प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं मन्यन्ते स आत्मा स विज्ञेयः॥', translation: 'Turiya is not conscious of the internal, nor conscious of the external, nor of both. It is not a mass of consciousness, nor conscious, nor unconscious. It is unseen, beyond empirical dealings, ungraspable, without characteristics, inconceivable, indescribable, the essence of Self-awareness, the cessation of all phenomena, peaceful, blissful, non-dual. This is the Self, this is to be known.', keywords: ['turiya', 'consciousness', 'fourth state', 'atman', 'advaita'] },
        ]
      }
    ]
  },
  {
    id: 'rig-veda',
    name: 'Rig Veda',
    nameSanskrit: 'ऋग्वेद',
    category: 'Vedas',
    description: 'The oldest of the Vedas, containing hymns dedicated to various deities including Agni, Indra, and Varuna.',
    period: '1500-1200 BCE',
    totalVerses: 10552,
    totalChapters: 10,
    chapters: [
      {
        id: 'rv-1',
        number: 1,
        name: 'Mandala 1',
        nameSanskrit: 'मण्डल १',
        description: 'First book of hymns',
        verseCount: 191,
        verses: [
          { id: 'rv-1-1-1', number: 1, sanskrit: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्। होतारं रत्नधातमम्॥', translation: 'I praise Agni, the priest of the sacrifice, the divine, the one who officiates, the invoker, the best bestower of treasures.', keywords: ['agni', 'fire', 'sacrifice', 'yajna'] },
          { id: 'rv-1-164-46', number: 46, sanskrit: 'इन्द्रं मित्रं वरुणमग्निमाहुरथो दिव्यः स सुपर्णो गरुत्मान्। एकं सद्विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः॥', translation: 'They call it Indra, Mitra, Varuna, Agni, and also the divine bird Garutman. The Truth is one; the wise call it by various names - Agni, Yama, Matarishvan.', meaning: 'This famous verse establishes the unity of the divine despite many names.', keywords: ['ekam sat', 'one truth', 'unity', 'gods'] },
        ]
      },
      {
        id: 'rv-10',
        number: 10,
        name: 'Mandala 10',
        nameSanskrit: 'मण्डल १०',
        description: 'Final book containing the Nasadiya Sukta and Purusha Sukta',
        verseCount: 191,
        verses: [
          { id: 'rv-10-129-1', number: 1, sanskrit: 'नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत्। किमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम्॥', translation: 'Then there was neither existence nor non-existence. There was no air, no sky beyond. What covered it? Where was it? What sheltered it? Was there water, deep and unfathomable?', meaning: 'The famous Nasadiya Sukta - Creation Hymn questioning the origin of universe.', keywords: ['creation', 'nasadiya', 'origin', 'universe', 'philosophy'] },
          { id: 'rv-10-90-1', number: 1, sanskrit: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात्। स भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम्॥', translation: 'The Purusha (Cosmic Being) has a thousand heads, a thousand eyes, and a thousand feet. He pervaded the earth on all sides and stood beyond it by ten fingers\' breadth.', meaning: 'The Purusha Sukta describes the cosmic being from whom all creation emerged.', keywords: ['purusha', 'cosmic', 'creation', 'sukta'] },
        ]
      }
    ]
  },
  {
    id: 'sama-veda',
    name: 'Sama Veda',
    nameSanskrit: 'सामवेद',
    category: 'Vedas',
    description: 'The Veda of melodies and chants, used in Soma sacrifices. Most verses are from the Rig Veda set to musical notation.',
    period: '1200-1000 BCE',
    totalVerses: 1875,
    totalChapters: 2,
    chapters: [
      {
        id: 'sv-1',
        number: 1,
        name: 'Purvarchika',
        nameSanskrit: 'पूर्वार्चिक',
        description: 'First part containing verses for chanting',
        verseCount: 585,
        verses: [
          { id: 'sv-1-1', number: 1, sanskrit: 'अग्न आ याहि वीतये गृणानो हव्यदातये। नि होता सत्सि बर्हिषि॥', translation: 'O Agni, come to the feast, praised one, to receive the offerings. Sit down as the invoker on the sacred grass.', keywords: ['agni', 'fire', 'offering', 'ritual'] },
        ]
      }
    ]
  },
  {
    id: 'yajur-veda',
    name: 'Yajur Veda',
    nameSanskrit: 'यजुर्वेद',
    category: 'Vedas',
    description: 'The Veda of prose mantras used in rituals and sacrifices.',
    period: '1200-1000 BCE',
    totalVerses: 1975,
    totalChapters: 40,
    chapters: [
      {
        id: 'yv-40',
        number: 40,
        name: 'Adhyaya 40 (Isha Upanishad)',
        nameSanskrit: 'अध्याय ४०',
        description: 'The final chapter, also known as Isha Upanishad',
        verseCount: 18,
        verses: [
          { id: 'yv-40-1', number: 1, sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥', translation: 'All this, whatever exists in this universe, is pervaded by the Lord. Enjoy with renunciation; do not covet anyone\'s wealth.', keywords: ['isha', 'god', 'renunciation', 'universe'] },
        ]
      }
    ]
  },
  {
    id: 'atharva-veda',
    name: 'Atharva Veda',
    nameSanskrit: 'अथर्ववेद',
    category: 'Vedas',
    description: 'Contains hymns, spells, and incantations for everyday life, healing, protection, and prosperity.',
    period: '1200-1000 BCE',
    totalVerses: 5977,
    totalChapters: 20,
    chapters: [
      {
        id: 'av-12',
        number: 12,
        name: 'Kanda 12',
        nameSanskrit: 'काण्ड १२',
        description: 'Contains the famous Prithvi Sukta (Hymn to Earth)',
        verseCount: 63,
        verses: [
          { id: 'av-12-1-1', number: 1, sanskrit: 'सत्यं बृहदृतमुग्रं दीक्षा तपो ब्रह्म यज्ञः पृथिवीं धारयन्ति। सा नो भूतस्य भव्यस्य पत्न्युरुं लोकं पृथिवी नः कृणोतु॥', translation: 'Truth, cosmic order, consecration, austerity, prayer and sacrifice uphold the Earth. May she, the mistress of what has been and what will be, make a wide world for us.', meaning: 'The famous Prithvi Sukta honoring Mother Earth.', keywords: ['earth', 'prithvi', 'truth', 'nature'] },
        ]
      }
    ]
  }
];

// Export helper functions
export const getScriptureById = (id: string): Scripture | undefined => 
  scriptures.find(s => s.id === id);

export const getScripturesByCategory = (category: string): Scripture[] => 
  scriptures.filter(s => s.category.toLowerCase() === category.toLowerCase());

export const searchVerses = (query: string): { scripture: string; chapter: string; verse: Verse }[] => {
  const results: { scripture: string; chapter: string; verse: Verse }[] = [];
  const q = query.toLowerCase();
  
  scriptures.forEach(scripture => {
    scripture.chapters.forEach(chapter => {
      chapter.verses.forEach(verse => {
        if (
          verse.translation.toLowerCase().includes(q) ||
          verse.sanskrit.includes(query) ||
          verse.keywords.some(k => k.toLowerCase().includes(q)) ||
          (verse.meaning && verse.meaning.toLowerCase().includes(q))
        ) {
          results.push({
            scripture: scripture.name,
            chapter: chapter.name,
            verse
          });
        }
      });
    });
  });
  
  return results;
};

export const getRandomVerse = (): { scripture: string; chapter: string; verse: Verse } => {
  const allVerses: { scripture: string; chapter: string; verse: Verse }[] = [];
  
  scriptures.forEach(scripture => {
    scripture.chapters.forEach(chapter => {
      chapter.verses.forEach(verse => {
        allVerses.push({ scripture: scripture.name, chapter: chapter.name, verse });
      });
    });
  });
  
  return allVerses[Math.floor(Math.random() * allVerses.length)];
};
