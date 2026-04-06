'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  BookOpen, ChevronRight, ArrowLeft, Loader2, BookMarked, Scroll, Quote 
} from 'lucide-react';
import Link from 'next/link';
import { FloatingMandala, Lotus, OmSymbol } from '@/components';

interface Verse {
  id: string;
  number: number;
  sanskrit: string;
  translation: string;
  keywords: string[];
}

interface Chapter {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  description: string;
  verseCount: number;
  verses?: Verse[];
}

interface Scripture {
  id: string;
  name: string;
  nameSanskrit: string;
  category: string;
  description: string;
  period: string;
  totalVerses: number;
  totalChapters: number;
  chapters: Chapter[];
}

const API_URL = '/api';

export default function ScriptureDetailPage() {
  const params = useParams();
  const router = useRouter();
  const scriptureId = params.id as string;

  const [scripture, setScripture] = useState<Scripture | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [chapterVerses, setChapterVerses] = useState<Verse[]>([]);
  const [loadingVerses, setLoadingVerses] = useState(false);

  useEffect(() => {
    const fetchScripture = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/scriptures/${scriptureId}`);
        
        if (!response.ok) {
          throw new Error('Scripture not found');
        }
        
        const data = await response.json();
        setScripture(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load scripture');
      } finally {
        setLoading(false);
      }
    };

    if (scriptureId) {
      fetchScripture();
    }
  }, [scriptureId]);

  const loadChapterVerses = async (chapter: Chapter) => {
    try {
      setLoadingVerses(true);
      setSelectedChapter(chapter);
      
      const response = await fetch(`${API_URL}/verses/${scriptureId}/${chapter.number}`);
      
      if (response.ok) {
        const data = await response.json();
        setChapterVerses(data.verses || []);
      }
    } catch (err) {
      console.error('Failed to load verses:', err);
    } finally {
      setLoadingVerses(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-sacred-gold animate-spin" />
      </div>
    );
  }

  if (error || !scripture) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Scroll className="w-16 h-16 text-sacred-gold/50" />
        <h2 className="text-2xl font-spiritual text-gray-300">Scripture not found</h2>
        <p className="text-gray-500">{error || 'The requested scripture does not exist.'}</p>
        <Link href="/scriptures">
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-sacred-gold to-saffron-500 rounded-full text-white font-spiritual hover:opacity-90 transition-opacity">
            Browse All Scriptures
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <FloatingMandala className="top-20 -right-40 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sacred-gold hover:text-saffron-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-spiritual">Back to Scriptures</span>
        </button>

        {/* Scripture Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-6 rounded-full bg-gradient-to-br from-sacred-gold/10 to-saffron-500/10 border border-sacred-gold/30">
              <BookMarked className="w-12 h-12 text-sacred-gold" />
            </div>
          </div>

          <span className="px-4 py-1.5 text-sm rounded-full bg-sacred-gold/20 text-sacred-gold border border-sacred-gold/30 mb-4 inline-block">
            {scripture.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-spiritual gradient-text mb-2">
            {scripture.name}
          </h1>
          <p className="text-2xl text-sacred-gold/70 mb-4">
            {scripture.nameSanskrit}
          </p>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {scripture.description}
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-spiritual gradient-text">{scripture.totalChapters}</p>
              <p className="text-gray-500 text-sm">Chapters</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-spiritual gradient-text">{scripture.totalVerses.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">Verses</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-spiritual text-sacred-gold/70">{scripture.period}</p>
              <p className="text-gray-500 text-sm">Period</p>
            </div>
          </div>
        </div>

        {/* Chapters Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-spiritual gradient-text mb-6 text-center flex items-center justify-center gap-2">
            <Scroll className="w-6 h-6" />
            Chapters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scripture.chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => loadChapterVerses(chapter)}
                className={`spiritual-card sacred-border p-5 cursor-pointer transition-all ${
                  selectedChapter?.id === chapter.id 
                    ? 'ring-2 ring-sacred-gold bg-sacred-gold/5' 
                    : 'hover:bg-sacred-gold/5'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sacred-gold/20 to-saffron-500/20 text-sacred-gold font-spiritual">
                    {chapter.number}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>{chapter.verseCount}</span>
                  </div>
                </div>

                <h3 className="text-lg font-spiritual text-white mb-1">{chapter.name}</h3>
                <p className="text-sacred-gold/60 text-sm mb-2">{chapter.nameSanskrit}</p>
                <p className="text-gray-400 text-sm line-clamp-2">{chapter.description}</p>

                <div className="mt-3 flex items-center text-sacred-gold text-sm">
                  <span>Read Chapter</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verses Section */}
        {selectedChapter && (
          <div className="mt-12 spiritual-card sacred-border p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-spiritual gradient-text">
                  Chapter {selectedChapter.number}: {selectedChapter.name}
                </h3>
                <p className="text-sacred-gold/60">{selectedChapter.nameSanskrit}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedChapter(null);
                  setChapterVerses([]);
                }}
                className="text-gray-400 hover:text-white transition-colors px-3 py-1 rounded border border-gray-600 hover:border-gray-400"
              >
                Close
              </button>
            </div>

            <p className="text-gray-400 mb-6">{selectedChapter.description}</p>

            {loadingVerses ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-sacred-gold animate-spin" />
              </div>
            ) : chapterVerses.length > 0 ? (
              <div className="space-y-4">
                {chapterVerses.map((verse) => (
                  <div
                    key={verse.id}
                    className="p-4 rounded-lg border border-sacred-gold/20 hover:border-sacred-gold/40 hover:bg-sacred-gold/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-sacred-gold/20 text-sacred-gold text-sm font-spiritual">
                        {verse.number}
                      </span>
                      <div className="flex-1">
                        <p className="text-sacred-gold/80 text-lg leading-relaxed mb-2">
                          {verse.sanskrit}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          {verse.translation}
                        </p>
                        
                        {verse.keywords && verse.keywords.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {verse.keywords.map((keyword, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-xs rounded-full bg-saffron-500/10 text-saffron-400 border border-saffron-500/20"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Quote className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>No verses available for this chapter yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Footer decoration */}
        <div className="mt-16 flex justify-center">
          <Lotus size={50} />
        </div>
      </div>
    </div>
  );
}
