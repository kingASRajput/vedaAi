'use client';

import React from 'react';
import { BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

interface ScriptureCardProps {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  category: string;
  verseCount?: number;
}

export function ScriptureCard({
  id,
  title,
  titleSanskrit,
  description,
  category,
  verseCount,
}: ScriptureCardProps) {
  return (
    <Link href={`/scriptures/${id}`}>
      <div className="spiritual-card sacred-border p-6 cursor-pointer h-full hover:bg-sacred-gold/5 transition-colors">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs rounded-full bg-sacred-gold/20 text-sacred-gold border border-sacred-gold/30">
            {category}
          </span>
          {verseCount && (
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <BookOpen className="w-4 h-4" />
              <span>{verseCount.toLocaleString()} verses</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-spiritual gradient-text mb-1">{title}</h3>
        <p className="text-sacred-gold/70 text-lg mb-3">{titleSanskrit}</p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{description}</p>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-sacred-gold/10 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-sacred-gold fill-sacred-gold" />
            ))}
          </div>
          <span className="text-sacred-gold text-sm font-spiritual">Read More →</span>
        </div>
      </div>
    </Link>
  );
}

export function ScriptureGrid({ scriptures }: { scriptures: ScriptureCardProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scriptures.map((scripture) => (
        <ScriptureCard key={scripture.id} {...scripture} />
      ))}
    </div>
  );
}
