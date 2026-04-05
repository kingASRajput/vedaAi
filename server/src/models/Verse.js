const mongoose = require('mongoose');

const verseSchema = new mongoose.Schema({
  scripture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scripture',
    required: true,
  },
  scriptureName: {
    type: String,
    required: true,
  },
  chapter: {
    number: Number,
    name: String,
  },
  verseNumber: {
    type: Number,
    required: true,
  },
  sanskrit: {
    type: String,
    required: true,
  },
  transliteration: String,
  translation: {
    type: String,
    required: true,
  },
  meaning: String,
  commentary: String,
  keywords: [String],
  themes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for search
verseSchema.index({ 
  sanskrit: 'text', 
  translation: 'text', 
  meaning: 'text',
  keywords: 'text' 
});

module.exports = mongoose.model('Verse', verseSchema);
