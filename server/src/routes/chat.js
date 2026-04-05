const express = require('express');
const router = express.Router();

// Vedic knowledge base for AI responses
const vedicKnowledge = {
  om: {
    response: `ॐ (Om) is the most sacred syllable in Hinduism, representing the essence of the ultimate reality, Brahman.

**Significance:**
- It is the primordial sound from which the universe emerged
- Represents the three states of consciousness: waking (A), dreaming (U), and deep sleep (M)
- The silence after Om represents Turiya, the fourth state of pure consciousness

**From the Mandukya Upanishad:**
"Om! This syllable is all this. All that is past, present, and future is truly Om."

Om is chanted at the beginning and end of prayers, meditation, and sacred rituals. It connects the individual soul (Atman) to the universal soul (Brahman).`,
    keywords: ['om', 'aum', 'pranava', 'sacred sound', 'mantra'],
  },
  karma: {
    response: `**Karma** (कर्म) is one of the most important concepts in Hindu philosophy, meaning "action" or "deed."

**Key Principles:**
1. **Law of Cause and Effect**: Every action has consequences that affect our future
2. **Types of Karma**:
   - *Sanchita*: Accumulated karma from past lives
   - *Prarabdha*: Karma being experienced in current life
   - *Kriyamana*: Karma being created now

**From the Bhagavad Gita (2.47):**
"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
"You have the right to work only, but never to its fruits."

**Karma Yoga** teaches performing actions without attachment to results, dedicating all work to the Divine. This leads to liberation (moksha) while living an active life.`,
    keywords: ['karma', 'action', 'deed', 'cause effect', 'karma yoga'],
  },
  moksha: {
    response: `**Moksha** (मोक्ष) means liberation or release from the cycle of birth and death (samsara).

**The Four Paths to Moksha:**
1. **Jnana Yoga**: Path of knowledge and wisdom
2. **Bhakti Yoga**: Path of devotion and love
3. **Karma Yoga**: Path of selfless action
4. **Raja Yoga**: Path of meditation and discipline

**From the Upanishads:**
"When all desires that dwell in the heart are cast away, then the mortal becomes immortal and attains Brahman here." - Katha Upanishad

**Moksha represents:**
- Freedom from ignorance (avidya)
- Realization of one's true nature as Atman
- Union with Brahman, the ultimate reality
- End of suffering and the cycle of rebirth`,
    keywords: ['moksha', 'liberation', 'freedom', 'nirvana', 'mukti', 'salvation'],
  },
  vedas: {
    response: `The **Four Vedas** are the oldest sacred texts of Hinduism, composed between 1500-1200 BCE.

**1. Rig Veda (ऋग्वेद)**
- Oldest of the Vedas
- 10,552 verses in 1,028 hymns
- Hymns to deities like Agni, Indra, Varuna

**2. Sama Veda (सामवेद)**
- Veda of melodies
- 1,875 verses, mostly from Rig Veda
- Set to musical notation for rituals

**3. Yajur Veda (यजुर्वेद)**
- Veda of ritual formulas
- 1,975 prose mantras
- Instructions for sacrifices

**4. Atharva Veda (अथर्ववेद)**
- Veda of practical life
- 5,977 verses
- Spells, charms, and philosophical hymns

The Vedas contain:
- **Samhitas**: Hymns and mantras
- **Brahmanas**: Ritual explanations
- **Aranyakas**: Forest treatises
- **Upanishads**: Philosophical teachings`,
    keywords: ['vedas', 'rig veda', 'sama veda', 'yajur veda', 'atharva veda', 'four vedas'],
  },
  upanishads: {
    response: `The **Upanishads** (उपनिषद्) are philosophical texts that form the concluding part of the Vedas, also called Vedanta ("end of the Vedas").

**Principal Upanishads:**
1. Isha Upanishad - Divine presence in all
2. Kena Upanishad - Nature of Brahman
3. Katha Upanishad - Dialogue with Death
4. Mundaka Upanishad - Higher vs lower knowledge
5. Mandukya Upanishad - Analysis of Om
6. Chandogya Upanishad - "Tat Tvam Asi"
7. Brihadaranyaka Upanishad - Largest Upanishad

**Core Teachings:**
- **Brahman**: The ultimate, unchanging reality
- **Atman**: The individual soul, identical to Brahman
- **Maya**: The illusion that veils true reality
- **"Tat Tvam Asi"**: "You are That" - the identity of Atman and Brahman

The Upanishads teach that liberation comes through knowledge (jnana) of one's true nature.`,
    keywords: ['upanishads', 'vedanta', 'philosophy', 'brahman', 'atman'],
  },
  dharma: {
    response: `**Dharma** (धर्म) is a complex concept meaning righteous duty, moral law, and cosmic order.

**Aspects of Dharma:**
1. **Rita**: Cosmic order that maintains the universe
2. **Varnashrama Dharma**: Duties based on stage of life
3. **Svadharma**: One's personal duty
4. **Sanatana Dharma**: Eternal truth/religion

**From the Bhagavad Gita (3.35):**
"श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्"
"Better is one's own dharma, though imperfectly performed, than the dharma of another well performed."

**The Four Purusharthas (Life Goals):**
1. Dharma - Righteousness
2. Artha - Prosperity
3. Kama - Pleasure
4. Moksha - Liberation

Dharma is the foundation that supports the pursuit of the other three goals.`,
    keywords: ['dharma', 'duty', 'righteousness', 'law', 'ethics', 'moral'],
  },
  meditation: {
    response: `**Dhyana** (ध्यान) or Meditation is a central practice in Hindu spirituality for attaining self-realization.

**Types of Meditation:**
1. **Japa**: Repetition of mantras
2. **Trataka**: Gazing meditation
3. **Pranayama**: Breath-focused meditation
4. **Yoga Nidra**: Conscious deep sleep

**From the Yoga Sutras of Patanjali:**
"योगश्चित्तवृत्तिनिरोधः"
"Yoga is the cessation of the modifications of the mind."

**Eight Limbs of Yoga (Ashtanga):**
1. Yama - Ethical restraints
2. Niyama - Observances
3. Asana - Posture
4. Pranayama - Breath control
5. Pratyahara - Sense withdrawal
6. Dharana - Concentration
7. **Dhyana** - Meditation
8. Samadhi - Absorption

Regular meditation leads to inner peace, clarity, and ultimately, liberation.`,
    keywords: ['meditation', 'dhyana', 'yoga', 'mindfulness', 'concentration', 'samadhi'],
  },
};

// Generate AI response based on user query
function generateResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check for known topics
  for (const [topic, data] of Object.entries(vedicKnowledge)) {
    if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return data.response;
    }
  }
  
  // Default response for unknown queries
  return `Namaste! Thank you for your question about "${message}".

While I don't have specific information about this topic in my current knowledge base, I encourage you to explore the following resources:

**Primary Sources:**
- The four Vedas (Rig, Sama, Yajur, Atharva)
- The principal Upanishads
- The Bhagavad Gita
- The Brahma Sutras

**Key Concepts to Study:**
- Brahman and Atman
- Karma, Dharma, and Moksha
- The paths of Yoga

Feel free to ask about specific concepts like:
- What is the meaning of Om?
- Explain the concept of Karma
- What are the four Vedas?
- What is Moksha?
- Tell me about Dharma
- How to practice meditation?

May your journey into Vedic wisdom be blessed! 🙏`;
}

// Chat endpoint
router.post('/', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    // Generate response from knowledge base
    const response = generateResponse(message);
    
    res.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      response: 'I apologize, but I encountered an error. Please try again.'
    });
  }
});

// Get chat suggestions
router.get('/suggestions', (req, res) => {
  res.json({
    suggestions: [
      'What is the meaning of Om?',
      'Explain the concept of Karma',
      'What are the four Vedas?',
      'What is Moksha?',
      'Tell me about Dharma',
      'What are the Upanishads?',
      'How to practice meditation?',
    ],
  });
});

module.exports = router;
