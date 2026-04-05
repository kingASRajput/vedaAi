const mongoose = require('mongoose');

const scriptureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  nameSanskrit: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Vedas', 'Upanishads', 'Puranas', 'Epics', 'Sutras', 'Other'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  totalVerses: {
    type: Number,
    default: 0,
  },
  chapters: [{
    number: Number,
    name: String,
    nameSanskrit: String,
    verseCount: Number,
  }],
  period: String,
  language: {
    type: String,
    default: 'Sanskrit',
  },
  significance: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Scripture', scriptureSchema);
