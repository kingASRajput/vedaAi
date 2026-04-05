'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface OmSymbolProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function OmSymbol({ size = 100, className = '', animated = true }: OmSymbolProps) {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      animate={animated ? {
        scale: [1, 1.05, 1],
        filter: [
          'drop-shadow(0 0 10px rgba(255, 102, 0, 0.5))',
          'drop-shadow(0 0 25px rgba(255, 102, 0, 0.8))',
          'drop-shadow(0 0 10px rgba(255, 102, 0, 0.5))',
        ],
      } : undefined}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#ff6600" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
          <filter id="omGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text
          x="50"
          y="65"
          textAnchor="middle"
          fill="url(#omGradient)"
          fontSize="60"
          fontFamily="Noto Sans Devanagari, serif"
          filter="url(#omGlow)"
        >
          ॐ
        </text>
      </svg>
    </motion.div>
  );
}

export function OmBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <motion.div
        className="opacity-5"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <OmSymbol size={600} animated={false} />
      </motion.div>
    </div>
  );
}
