const express = require('express');
const router = express.Router();
const Verse = require('../models/Verse');

// Sample verses for demo
const sampleVerses = [
  {
    _id: '1',
    scriptureName: 'Bhagavad Gita',
    chapter: { number: 2, name: 'Sankhya Yoga' },
    verseNumber: 47,
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    transliteration: 'karmaṇy evādhikāras te mā phaleṣu kadācana mā karma-phala-hetur bhūr mā te saṅgo \'stv akarmaṇi',
    translation: 'You have the right to work only, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.',
    meaning: 'This verse teaches the essence of Karma Yoga - performing actions without attachment to results.',
    keywords: ['karma', 'action', 'detachment', 'duty'],
    themes: ['Karma Yoga', 'Detachment', 'Duty'],
  },
  {
    _id: '2',
    scriptureName: 'Isha Upanishad',
    chapter: { number: 1, name: 'Main Text' },
    verseNumber: 1,
    sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥',
    transliteration: 'īśā vāsyam idaṁ sarvaṁ yat kiñca jagatyāṁ jagat tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam',
    translation: 'All this, whatever exists in the universe, should be covered by the Lord. Protect the Self by renunciation. Do not covet the wealth of anyone.',
    meaning: 'This opening verse establishes that the divine pervades everything in creation.',
    keywords: ['God', 'universe', 'renunciation', 'non-attachment'],
    themes: ['Brahman', 'Renunciation', 'Divine Presence'],
  },
  {
    _id: '3',
    scriptureName: 'Mandukya Upanishad',
    chapter: { number: 1, name: 'Om Analysis' },
    verseNumber: 1,
    sanskrit: 'ओमित्येतदक्षरमिदं सर्वं तस्योपव्याख्यानं भूतं भवद्भविष्यदिति सर्वमोङ्कार एव।',
    transliteration: 'om ity etad akṣaram idaṁ sarvaṁ tasyopavyākhyānaṁ bhūtaṁ bhavad bhaviṣyad iti sarvam oṅkāra eva',
    translation: 'Om! This syllable is all this. All that is past, present, and future is truly Om. And whatever transcends the three periods of time, that too is Om.',
    meaning: 'Om represents the totality of existence - past, present, future, and the timeless.',
    keywords: ['Om', 'time', 'existence', 'eternity'],
    themes: ['Om', 'Consciousness', 'Totality'],
  },
];

// Get all verses
router.get('/', async (req, res) => {
  try {
    const verses = await Verse.find().limit(50);
    res.json(verses.length > 0 ? verses : sampleVerses);
  } catch (error) {
    res.json(sampleVerses);
  }
});

// Get random verse
router.get('/random', async (req, res) => {
  try {
    const count = await Verse.countDocuments();
    if (count > 0) {
      const random = Math.floor(Math.random() * count);
      const verse = await Verse.findOne().skip(random);
      return res.json(verse);
    }
    res.json(sampleVerses[Math.floor(Math.random() * sampleVerses.length)]);
  } catch (error) {
    res.json(sampleVerses[Math.floor(Math.random() * sampleVerses.length)]);
  }
});

// Search verses
router.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);

  try {
    const verses = await Verse.find(
      { $text: { $search: q } },
      { score: { $meta: 'textScore' } }
    ).sort({ score: { $meta: 'textScore' } }).limit(20);

    if (verses.length > 0) return res.json(verses);

    // Fallback to sample search
    const filtered = sampleVerses.filter(v =>
      v.translation.toLowerCase().includes(q.toLowerCase()) ||
      v.sanskrit.includes(q) ||
      v.keywords.some(k => k.toLowerCase().includes(q.toLowerCase()))
    );
    res.json(filtered);
  } catch (error) {
    const filtered = sampleVerses.filter(v =>
      v.translation.toLowerCase().includes(q.toLowerCase()) ||
      v.keywords.some(k => k.toLowerCase().includes(q.toLowerCase()))
    );
    res.json(filtered);
  }
});

// Get verses by scripture
router.get('/scripture/:scriptureId', async (req, res) => {
  try {
    const verses = await Verse.find({ scripture: req.params.scriptureId });
    res.json(verses.length > 0 ? verses : sampleVerses);
  } catch (error) {
    res.json(sampleVerses);
  }
});

module.exports = router;
