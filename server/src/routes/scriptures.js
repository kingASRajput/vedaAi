const express = require('express');
const router = express.Router();
const Scripture = require('../models/Scripture');

// Sample data for when DB is not connected
const sampleScriptures = [
  {
    _id: 'rig-veda',
    name: 'Rig Veda',
    nameSanskrit: 'ऋग्वेद',
    category: 'Vedas',
    description: 'The oldest of the Vedas, containing 1,028 hymns dedicated to various deities.',
    totalVerses: 10552,
  },
  {
    _id: 'sama-veda',
    name: 'Sama Veda',
    nameSanskrit: 'सामवेद',
    category: 'Vedas',
    description: 'The Veda of melodies and chants, used primarily in Soma sacrifices.',
    totalVerses: 1875,
  },
  {
    _id: 'yajur-veda',
    name: 'Yajur Veda',
    nameSanskrit: 'यजुर्वेद',
    category: 'Vedas',
    description: 'The Veda of prose mantras used in rituals and sacrifices.',
    totalVerses: 1975,
  },
  {
    _id: 'atharva-veda',
    name: 'Atharva Veda',
    nameSanskrit: 'अथर्ववेद',
    category: 'Vedas',
    description: 'Contains hymns, spells, and incantations for everyday life.',
    totalVerses: 5977,
  },
  {
    _id: 'bhagavad-gita',
    name: 'Bhagavad Gita',
    nameSanskrit: 'भगवद्गीता',
    category: 'Epics',
    description: 'The divine song of Lord Krishna to Arjuna on the battlefield.',
    totalVerses: 700,
  },
];

// Get all scriptures
router.get('/', async (req, res) => {
  try {
    const scriptures = await Scripture.find().sort({ category: 1, name: 1 });
    res.json(scriptures.length > 0 ? scriptures : sampleScriptures);
  } catch (error) {
    res.json(sampleScriptures);
  }
});

// Get scripture by ID
router.get('/:id', async (req, res) => {
  try {
    const scripture = await Scripture.findById(req.params.id);
    if (!scripture) {
      const sample = sampleScriptures.find(s => s._id === req.params.id);
      return res.json(sample || { error: 'Scripture not found' });
    }
    res.json(scripture);
  } catch (error) {
    const sample = sampleScriptures.find(s => s._id === req.params.id);
    res.json(sample || { error: 'Scripture not found' });
  }
});

// Get scriptures by category
router.get('/category/:category', async (req, res) => {
  try {
    const scriptures = await Scripture.find({ category: req.params.category });
    if (scriptures.length === 0) {
      return res.json(sampleScriptures.filter(s => s.category === req.params.category));
    }
    res.json(scriptures);
  } catch (error) {
    res.json(sampleScriptures.filter(s => s.category === req.params.category));
  }
});

module.exports = router;
