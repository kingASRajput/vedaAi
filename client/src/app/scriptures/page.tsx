'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter, Loader2 } from 'lucide-react';
import { ScriptureGrid, FloatingMandala, Lotus, OmSymbol } from '@/components';

const categories = ['All', 'Vedas', 'Upanishads', 'Puranas', 'Epics', 'Sutras'];

interface ScriptureData {
  id: string;
  name: string;
  nameSanskrit: string;
  category: string;
  description: string;
  totalVerses: number;
}

const API_URL = '/api';

export default function ScripturesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scriptures, setScriptures] = useState<ScriptureData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScriptures = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/scriptures`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch scriptures');
        }
        
        const data = await response.json();
        setScriptures(data.scriptures || []);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load scriptures');
        // Fallback to empty array
        setScriptures([]);
      } finally {
        setLoading(false);
      }
    };

    fetchScriptures();
  }, []);

  const filteredScriptures = selectedCategory === 'All'
    ? scriptures
    : scriptures.filter((s) => s.category === selectedCategory);

  // Transform API data to match ScriptureCard props
  const transformedScriptures = filteredScriptures.map(s => ({
    id: s.id,
    title: s.name,
    titleSanskrit: s.nameSanskrit,
    description: s.description,
    category: s.category,
    verseCount: s.totalVerses,
  }));

  return (
    <div className="relative min-h-screen">
      <FloatingMandala className="top-40 -right-40 opacity-10" />
      <FloatingMandala className="bottom-40 -left-40 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Lotus size={100} />
          </div>
          <h1 className="text-4xl md:text-5xl font-spiritual gradient-text mb-4">
            Sacred Scriptures
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the timeless wisdom of ancient India through our comprehensive 
            collection of Vedas, Upanishads, and other sacred texts.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-spiritual text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-sacred-gold to-saffron-500 text-white'
                  : 'border border-sacred-gold/30 text-sacred-gold hover:bg-sacred-gold/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            >
              <OmSymbol size={60} className="opacity-50" />
            </motion.div>
            <p className="text-gray-500 mt-4 font-spiritual">Loading scriptures...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-12">
            <p className="text-red-400">{error}</p>
            <p className="text-gray-500 mt-2">Using offline data...</p>
          </div>
        )}

        {/* Scripture Stats */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <p className="text-3xl font-spiritual gradient-text">{transformedScriptures.length}</p>
              <p className="text-gray-500 text-sm">Scriptures</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-spiritual gradient-text">
                {transformedScriptures.reduce((acc, s) => acc + (s.verseCount || 0), 0).toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">Total Verses</p>
            </div>
          </motion.div>
        )}

        {/* Scripture Grid */}
        {!loading && <ScriptureGrid scriptures={transformedScriptures} />}
      </div>
    </div>
  );
}
