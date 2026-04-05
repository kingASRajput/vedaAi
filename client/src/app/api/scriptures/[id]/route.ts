import { NextResponse } from 'next/server';
import { getScriptureById } from '@/data/scriptures';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const scripture = getScriptureById(params.id);
  
  if (!scripture) {
    return NextResponse.json({ error: 'Scripture not found' }, { status: 404 });
  }
  
  // Return scripture with chapter summary (no verses in list)
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
  
  return NextResponse.json(result);
}
