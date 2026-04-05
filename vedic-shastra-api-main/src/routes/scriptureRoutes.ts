import { Router, Request, Response } from 'express';
import { scriptures, getScriptureById, getScripturesByCategory } from '../data/scriptures';

const router = Router();

// GET /api/scriptures - Get all scriptures
router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;
  
  let result = scriptures;
  
  if (category) {
    result = getScripturesByCategory(String(category));
  }
  
  // Return summary without full chapter/verse data
  const summary = result.map(s => ({
    id: s.id,
    name: s.name,
    nameSanskrit: s.nameSanskrit,
    category: s.category,
    description: s.description,
    period: s.period,
    totalVerses: s.totalVerses,
    totalChapters: s.totalChapters,
  }));
  
  res.json({
    count: summary.length,
    scriptures: summary
  });
});

// GET /api/scriptures/categories - Get all categories
router.get('/categories', (req: Request, res: Response) => {
  const categories = [...new Set(scriptures.map(s => s.category))];
  res.json({ categories });
});

// GET /api/scriptures/:id - Get scripture by ID
router.get('/:id', (req: Request, res: Response) => {
  const scripture = getScriptureById(String(req.params.id));
  
  if (!scripture) {
    return res.status(404).json({ error: 'Scripture not found' });
  }
  
  // Return scripture with chapter summary (no verses)
  const result = {
    ...scripture,
    chapters: scripture.chapters.map(c => ({
      id: c.id,
      number: c.number,
      name: c.name,
      nameSanskrit: c.nameSanskrit,
      description: c.description,
      verseCount: c.verseCount,
    }))
  };
  
  res.json(result);
});

export default router;
