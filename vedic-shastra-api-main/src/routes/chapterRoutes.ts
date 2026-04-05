import { Router, Request, Response } from 'express';
import { getScriptureById } from '../data/scriptures';

const router = Router();

// GET /api/chapters/:scriptureId - Get all chapters of a scripture
router.get('/:scriptureId', (req: Request, res: Response) => {
  const scripture = getScriptureById(String(req.params.scriptureId));
  
  if (!scripture) {
    return res.status(404).json({ error: 'Scripture not found' });
  }
  
  const chapters = scripture.chapters.map(c => ({
    id: c.id,
    number: c.number,
    name: c.name,
    nameSanskrit: c.nameSanskrit,
    description: c.description,
    verseCount: c.verseCount,
  }));
  
  res.json({
    scripture: scripture.name,
    totalChapters: chapters.length,
    chapters
  });
});

// GET /api/chapters/:scriptureId/:chapterNumber - Get specific chapter
router.get('/:scriptureId/:chapterNumber', (req: Request, res: Response) => {
  const scripture = getScriptureById(String(req.params.scriptureId));
  
  if (!scripture) {
    return res.status(404).json({ error: 'Scripture not found' });
  }
  
  const chapterNum = parseInt(String(req.params.chapterNumber));
  const chapter = scripture.chapters.find(c => c.number === chapterNum);
  
  if (!chapter) {
    return res.status(404).json({ error: 'Chapter not found' });
  }
  
  res.json({
    scripture: scripture.name,
    chapter: {
      id: chapter.id,
      number: chapter.number,
      name: chapter.name,
      nameSanskrit: chapter.nameSanskrit,
      description: chapter.description,
      verseCount: chapter.verseCount,
      verses: chapter.verses
    }
  });
});

export default router;
