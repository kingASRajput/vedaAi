import { NextResponse } from 'next/server';
import { getScriptureById } from '@/data/scriptures';

export async function GET(
  request: Request,
  { params }: { params: { scriptureId: string; chapterNumber: string } }
) {
  const scripture = getScriptureById(params.scriptureId);
  
  if (!scripture) {
    return NextResponse.json({ error: 'Scripture not found' }, { status: 404 });
  }
  
  const chapterNum = parseInt(params.chapterNumber);
  const chapter = scripture.chapters.find(c => c.number === chapterNum);
  
  if (!chapter) {
    return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
  }
  
  return NextResponse.json({
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
}
