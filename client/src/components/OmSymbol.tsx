'use client';

import React from 'react';

interface OmSymbolProps {
  size?: number;
  className?: string;
}

// Static Om symbol - no animations
export function OmSymbol({ size = 100, className = '' }: OmSymbolProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="omGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#ff6600" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
        <text
          x="50"
          y="65"
          textAnchor="middle"
          fill="url(#omGradient)"
          fontSize="60"
          fontFamily="serif"
        >
          ॐ
        </text>
      </svg>
    </div>
  );
}

// Static background Om
export function OmBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      <div className="opacity-[0.03]">
        <OmSymbol size={500} />
      </div>
    </div>
  );
}
