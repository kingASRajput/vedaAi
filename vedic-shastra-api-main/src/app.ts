import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import scriptureRoutes from './routes/scriptureRoutes';
import verseRoutes from './routes/verseRoutes';
import chapterRoutes from './routes/chapterRoutes';
import searchRoutes from './routes/searchRoutes';

// Import data
import { scriptures } from './data/scriptures';

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get('/api', (req: Request, res: Response) => {
  res.json({
    name: 'VedaAI Scripture API',
    version: '2.0.0',
    description: 'Comprehensive API for Vedic Scriptures',
    author: 'Anmol Rajput',
    endpoints: {
      scriptures: '/api/scriptures',
      chapters: '/api/chapters/:scriptureId',
      verses: '/api/verses/:scriptureId/:chapter',
      search: '/api/search?q=keyword',
      random: '/api/verses/random',
    },
    statistics: {
      totalScriptures: scriptures.length,
      categories: ['Vedas', 'Upanishads', 'Epics', 'Puranas', 'Sutras'],
    },
  });
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok', 
    message: 'VedaAI Scripture API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/scriptures', scriptureRoutes);
app.use('/api/verses', verseRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/search', searchRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`,
    availableEndpoints: ['/api', '/api/scriptures', '/api/verses', '/api/chapters', '/api/search']
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════╗
║           VedaAI Scripture API v2.0                  ║
║           Port: ${PORT}                                 ║
║           ॐ सर्वे भवन्तु सुखिनः                         ║
╚══════════════════════════════════════════════════════╝
  `);
});

export default app;
