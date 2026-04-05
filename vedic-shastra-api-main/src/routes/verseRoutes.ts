import { Router, Request, Response } from 'express';
import { scriptures, getScriptureById, getRandomVerse } from '../data/scriptures';

const router = Router();

// GET /api/verses/random - Get random verse
router.get('/random', (req: Request, res: Response) => {
  const result = getRandomVerse();
  res.json(result);
});

// GET /api/verses/:scriptureId - Get all verses of a scripture
router.get('/:scriptureId', (req: Request, res: Response) => {
  const scripture = getScriptureById(String(req.params.scriptureId));
  
  if (!scripture) {
    return res.status(404).json({ error: 'Scripture not found' });
  }
  
  const verses = scripture.chapters.flatMap(chapter => 
    chapter.verses.map(verse => ({
      ...verse,
      chapter: chapter.name,
      chapterNumber: chapter.number
    }))
  );
  
  res.json({
    scripture: scripture.name,
    totalVerses: verses.length,
    verses
  });
});

// GET /api/verses/:scriptureId/:chapterNumber - Get verses of specific chapter
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
      number: chapter.number,
      name: chapter.name,
      nameSanskrit: chapter.nameSanskrit,
      description: chapter.description,
    },
    totalVerses: chapter.verses.length,
    verses: chapter.verses
  });
});

// GET /api/verses/:scriptureId/:chapterNumber/:verseNumber - Get specific verse
router.get('/:scriptureId/:chapterNumber/:verseNumber', (req: Request, res: Response) => {
  const scripture = getScriptureById(String(req.params.scriptureId));
  
  if (!scripture) {
    return res.status(404).json({ error: 'Scripture not found' });
  }
  
  const chapterNum = parseInt(String(req.params.chapterNumber));
  const verseNum = parseInt(String(req.params.verseNumber));
  
  const chapter = scripture.chapters.find(c => c.number === chapterNum);
  if (!chapter) {
    return res.status(404).json({ error: 'Chapter not found' });
  }
  
  const verse = chapter.verses.find(v => v.number === verseNum);
  if (!verse) {
    return res.status(404).json({ error: 'Verse not found' });
  }
  
  res.json({
    scripture: scripture.name,
    chapter: chapter.name,
    verse
  });
});

export default router;
