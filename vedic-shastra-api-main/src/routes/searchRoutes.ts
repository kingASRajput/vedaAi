import { Router, Request, Response } from 'express';
import { searchVerses, scriptures } from '../data/scriptures';

const router = Router();

// GET /api/search?q=keyword - Search verses
router.get('/', (req: Request, res: Response) => {
  const { q, category, scripture } = req.query;
  
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }
  
  let results = searchVerses(q);
  
  // Filter by category if provided
  if (category && typeof category === 'string') {
    const scripturesInCategory = scriptures
      .filter(s => s.category.toLowerCase() === category.toLowerCase())
      .map(s => s.name);
    results = results.filter(r => scripturesInCategory.includes(r.scripture));
  }
  
  // Filter by specific scripture if provided
  if (scripture && typeof scripture === 'string') {
    results = results.filter(r => r.scripture.toLowerCase().includes(scripture.toLowerCase()));
  }
  
  res.json({
    query: q,
    count: results.length,
    results
  });
});

// GET /api/search/keywords - Get all keywords
router.get('/keywords', (req: Request, res: Response) => {
  const keywords = new Set<string>();
  
  scriptures.forEach(scripture => {
    scripture.chapters.forEach(chapter => {
      chapter.verses.forEach(verse => {
        verse.keywords.forEach(k => keywords.add(k));
      });
    });
  });
  
  res.json({
    count: keywords.size,
    keywords: Array.from(keywords).sort()
  });
});

export default router;
