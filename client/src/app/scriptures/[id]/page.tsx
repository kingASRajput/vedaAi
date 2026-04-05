'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { 
  BookOpen, ChevronRight, ArrowLeft, Star, Sparkles, 
  BookMarked, Scroll, Quote, Loader2 
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

const API_URL = process.env.NEXT_PUBLIC_SCRIPTURE_API_URL || 'http://localhost:8080/api';

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
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);

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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        >
          <OmSymbol size={80} className="opacity-50" />
        </motion.div>
      </div>
    );
  }

  if (error || !scripture) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-sacred-gold/50 text-6xl mb-4">
          <Scroll className="w-20 h-20" />
        </div>
        <h2 className="text-2xl font-spiritual text-gray-300">Scripture not found</h2>
        <p className="text-gray-500">{error || 'The requested scripture does not exist.'}</p>
        <Link href="/scriptures">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-sacred-gold to-saffron-500 rounded-full text-white font-spiritual"
          >
            Browse All Scriptures
          </motion.button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background decorations */}
      <FloatingMandala className="top-20 -right-40 opacity-5" />
      <FloatingMandala className="bottom-40 -left-40 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <motion.button
          onClick={() => router.back()}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sacred-gold hover:text-saffron-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-spiritual">Back to Scriptures</span>
        </motion.button>

        {/* Scripture Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                boxShadow: ['0 0 20px rgba(212, 175, 55, 0.3)', '0 0 40px rgba(212, 175, 55, 0.5)', '0 0 20px rgba(212, 175, 55, 0.3)']
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="p-6 rounded-full bg-gradient-to-br from-sacred-gold/10 to-saffron-500/10 border border-sacred-gold/30"
            >
              <BookMarked className="w-16 h-16 text-sacred-gold" />
            </motion.div>
          </div>

          <span className="px-4 py-1.5 text-sm rounded-full bg-sacred-gold/20 text-sacred-gold border border-sacred-gold/30 mb-4 inline-block">
            {scripture.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-spiritual gradient-text mb-2">
            {scripture.name}
          </h1>
          <p className="text-2xl sanskrit-text text-sacred-gold/70 mb-4">
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
              <p className="text-3xl font-spiritual gradient-text">{scripture.totalVerses}</p>
              <p className="text-gray-500 text-sm">Verses</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-spiritual text-sacred-gold/70">{scripture.period}</p>
              <p className="text-gray-500 text-sm">Period</p>
            </div>
          </div>
        </motion.div>

        {/* Chapters Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-spiritual gradient-text mb-6 text-center">
            <Scroll className="w-6 h-6 inline-block mr-2" />
            Chapters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scripture.chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                <p className="text-sacred-gold/60 sanskrit-text text-sm mb-2">{chapter.nameSanskrit}</p>
                <p className="text-gray-400 text-sm line-clamp-2">{chapter.description}</p>

                <div className="mt-3 flex items-center text-sacred-gold text-sm">
                  <span>Read Chapter</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Verses Section (shown when chapter is selected) */}
        <AnimatePresence mode="wait">
          {selectedChapter && (
            <motion.div
              key={selectedChapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 spiritual-card sacred-border p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-spiritual gradient-text">
                    Chapter {selectedChapter.number}: {selectedChapter.name}
                  </h3>
                  <p className="text-sacred-gold/60 sanskrit-text">{selectedChapter.nameSanskrit}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedChapter(null);
                    setChapterVerses([]);
                    setSelectedVerse(null);
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
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
                  {chapterVerses.map((verse, index) => (
                    <motion.div
                      key={verse.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => setSelectedVerse(selectedVerse?.id === verse.id ? null : verse)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedVerse?.id === verse.id
                          ? 'border-sacred-gold bg-sacred-gold/10'
                          : 'border-sacred-gold/20 hover:border-sacred-gold/40 hover:bg-sacred-gold/5'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-sacred-gold/20 text-sacred-gold text-sm font-spiritual">
                          {verse.number}
                        </span>
                        <div className="flex-1">
                          <p className="text-sacred-gold/80 sanskrit-text text-lg leading-relaxed mb-2">
                            {verse.sanskrit}
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            {verse.translation}
                          </p>
                          
                          {/* Keywords */}
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
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Quote className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>No verses available for this chapter yet.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured decoration at bottom */}
        <div className="mt-16 flex justify-center">
          <Lotus size={60} />
        </div>
      </div>
    </div>
  );
}
