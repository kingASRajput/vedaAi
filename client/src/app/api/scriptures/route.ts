import { NextResponse } from 'next/server';
import { scriptures, getScripturesByCategory } from '@/data/scriptures';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  let result = scriptures;
  
  if (category) {
    result = getScripturesByCategory(category);
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
  
  return NextResponse.json({
    count: summary.length,
    scriptures: summary
  });
}
