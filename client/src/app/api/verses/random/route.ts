import { NextResponse } from 'next/server';
import { getRandomVerse } from '@/data/scriptures';

export async function GET() {
  const result = getRandomVerse();
  return NextResponse.json(result);
}
