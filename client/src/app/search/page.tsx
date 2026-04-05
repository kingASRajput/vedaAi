'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, BookOpen, Sparkles } from 'lucide-react';
import { FloatingMandala, OmSymbol } from '@/components';

interface SearchResult {
  id: string;
  scripture: string;
  chapter: string;
  verse: string;
  sanskrit: string;
  translation: string;
  relevance: number;
}

// Sample search results
const sampleResults: SearchResult[] = [
  {
    id: '1',
    scripture: 'Bhagavad Gita',
    chapter: 'Chapter 2',
    verse: 'Verse 47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।',
    translation: 'You have the right to work only, but never to its fruits. Let not the fruits of action be your motive.',
    relevance: 98,
  },
  {
    id: '2',
    scripture: 'Isha Upanishad',
    chapter: '',
    verse: 'Verse 1',
    sanskrit: 'ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।',
    translation: 'All this, whatever exists in the universe, should be covered by the Lord. Protect the Self by renunciation.',
    relevance: 92,
  },
  {
    id: '3',
    scripture: 'Katha Upanishad',
    chapter: 'Part 1',
    verse: 'Verse 2.20',
    sanskrit: 'अणोरणीयान्महतो महीयान्',
    translation: 'The Self is subtler than the subtle, greater than the great. It is hidden in the heart of all living beings.',
    relevance: 87,
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setHasSearched(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo, show sample results
    setResults(sampleResults);
    setIsSearching(false);
  };

  const popularSearches = [
    'karma yoga',
    'meaning of Om',
    'moksha liberation',
    'dharma duty',
    'atman brahman',
    'meditation dhyana',
  ];

  return (
    <div className="relative min-h-screen">
      <FloatingMandala className="top-40 -right-40 opacity-10" />
      <FloatingMandala className="bottom-40 -left-40 opacity-10" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <OmSymbol size={80} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-spiritual gradient-text mb-4">
            Search Sacred Texts
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Search through thousands of verses from the Vedas, Upanishads, 
            and other sacred scriptures to find the wisdom you seek.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSearch}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for verses, concepts, or teachings..."
              className="w-full px-6 py-4 pl-14 bg-sacred-deepblue/30 border border-sacred-gold/20 rounded-2xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-sacred-gold/50 text-lg"
            />
            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <motion.button
              type="submit"
              disabled={isSearching}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-sacred-gold to-saffron-500 rounded-xl text-white font-spiritual disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </motion.button>
          </div>
        </motion.form>

        {/* Popular Searches */}
        {!hasSearched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-gray-500 text-sm mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setQuery(search)}
                  className="px-4 py-2 rounded-full border border-sacred-gold/30 text-sacred-gold text-sm hover:bg-sacred-gold/10 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search Results */}
        {hasSearched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {isSearching ? (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-2 border-sacred-gold border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-gray-400">Searching the sacred texts...</p>
              </div>
            ) : results.length > 0 ? (
              <>
                <p className="text-gray-500 mb-4">
                  Found {results.length} results for "{query}"
                </p>
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="spiritual-card sacred-border p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-sacred-gold" />
                        <span className="text-sacred-gold font-spiritual">
                          {result.scripture}
                        </span>
                        {result.chapter && (
                          <span className="text-gray-500">• {result.chapter}</span>
                        )}
                        <span className="text-gray-500">• {result.verse}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-sacred-gold">
                        <Sparkles className="w-3 h-3" />
                        {result.relevance}% match
                      </div>
                    </div>
                    <p className="text-xl text-sacred-gold/80 sanskrit-text mb-3">
                      {result.sanskrit}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {result.translation}
                    </p>
                  </motion.div>
                ))}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No results found for "{query}"</p>
                <p className="text-gray-500 text-sm mt-2">
                  Try different keywords or browse our scriptures
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
