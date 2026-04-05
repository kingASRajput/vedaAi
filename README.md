# VedaAI - Ancient Wisdom, Modern Understanding

A beautiful spiritual AI application for exploring the Vedas, Upanishads, and other sacred Hindu scriptures. Built with MERN stack + Next.js featuring stunning animations and a meditative user experience.

## Features

- **Sacred Scriptures Library**: Browse the four Vedas, major Upanishads, and other texts
- **AI-Powered Q&A**: Ask questions about Vedic philosophy and get insightful answers
- **Beautiful Spiritual UI**: Mandala animations, floating lotus, sacred particles
- **Verse Search**: Search through thousands of verses
- **Responsive Design**: Works on desktop and mobile

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (optional)
- **Styling**: Custom spiritual theme with gold/saffron colors

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd vedaAi

# Install all dependencies
npm run install:all

# Or install separately
cd client && npm install
cd ../server && npm install
```

### Run Development Server

```bash
# From the root vedaAi directory

# Run both client and server
npm run dev

# Or run separately:
# Terminal 1 - Backend (port 5000)
cd server && npm run dev

# Terminal 2 - Frontend (port 3000)
cd client && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
vedaAi/
├── client/                 # Next.js Frontend
│   ├── src/
│   │   ├── app/           # Next.js app router pages
│   │   │   ├── page.tsx   # Home page
│   │   │   ├── chat/      # AI Chat page
│   │   │   ├── scriptures/# Scriptures browser
│   │   │   └── search/    # Search page
│   │   ├── components/    # React components
│   │   │   ├── Mandala.tsx
│   │   │   ├── Lotus.tsx
│   │   │   ├── OmSymbol.tsx
│   │   │   ├── SacredParticles.tsx
│   │   │   ├── AIChat.tsx
│   │   │   └── ...
│   │   ├── lib/           # Utilities and API
│   │   └── styles/        # Global CSS
│   └── package.json
│
├── server/                 # Express.js Backend
│   ├── src/
│   │   ├── index.js       # Entry point
│   │   ├── config/        # Database config
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   └── data/          # Seed data
│   └── package.json
│
└── package.json           # Root package.json
```

## Pages

### Home (/)
Beautiful landing page with animated mandala, Om symbol, and floating lotus. Features the four Vedas and call-to-action buttons.

### Scriptures (/scriptures)
Browse all sacred texts organized by category (Vedas, Upanishads, Epics, etc.)

### Chat (/chat)
AI-powered chat interface to ask questions about Vedic wisdom. Pre-trained with knowledge about:
- Om and sacred mantras
- Karma and Karma Yoga
- Moksha and liberation
- The four Vedas
- Upanishads philosophy
- Dharma and ethics
- Meditation practices

### Search (/search)
Search through verses and find specific teachings.

## API Endpoints

```
GET  /api/health              # Health check
GET  /api/scriptures          # Get all scriptures
GET  /api/scriptures/:id      # Get scripture by ID
GET  /api/verses              # Get all verses
GET  /api/verses/random       # Get random verse
GET  /api/verses/search?q=    # Search verses
POST /api/chat                # Send chat message
```

## Animations

The app features several spiritual animations:

- **Mandala**: Rotating sacred geometry pattern
- **Lotus**: Blooming lotus flower with breathing animation
- **Om Symbol**: Pulsing Om with glow effect
- **Sacred Particles**: Floating golden particles
- **Scroll animations**: Fade-in and slide-up effects

## Color Palette

```css
Sacred Gold:     #d4af37
Saffron:         #ff6600
Deep Blue:       #1e3a5f
Maroon:          #800020
Lotus Pink:      #f9a8d4
```

## Adding More Content

### Add New Scripture
Edit `server/src/routes/scriptures.js` to add to `sampleScriptures` array.

### Add Chat Knowledge
Edit `server/src/routes/chat.js` to add to `vedicKnowledge` object.

## Deployment

### Frontend (Vercel)
```bash
cd client
vercel
```

### Backend (Any Node.js host)
```bash
cd server
npm start
```

## Contributing

Contributions are welcome! Please feel free to add:
- More scriptures and verses
- Additional AI knowledge
- UI improvements
- Translations

## License

This project is for educational and spiritual purposes.

---

**ॐ सर्वे भवन्तु सुखिनः**
*May all beings be happy*
