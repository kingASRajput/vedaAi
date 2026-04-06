'use client';

import React from 'react';

interface LotusProps {
  size?: number;
  className?: string;
}

// Simplified static Lotus - no animations
export function Lotus({ size = 200, className = '' }: LotusProps) {
  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="lotusGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
          <linearGradient id="lotusGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
          <linearGradient id="lotusCenter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#ff6600" />
          </linearGradient>
        </defs>

        <g transform="translate(100, 100)">
          {/* Outer petals - just 8 */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <path
              key={`outer-${angle}`}
              d="M 0,0 Q -12,-35 0,-60 Q 12,-35 0,0"
              fill="url(#lotusGrad1)"
              transform={`rotate(${angle - 90})`}
              opacity="0.9"
            />
          ))}

          {/* Inner petals - just 8 */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
            <path
              key={`inner-${angle}`}
              d="M 0,0 Q -8,-20 0,-38 Q 8,-20 0,0"
              fill="url(#lotusGrad2)"
              transform={`rotate(${angle - 90})`}
            />
          ))}

          {/* Center */}
          <circle r="12" fill="url(#lotusCenter)" />
        </g>
      </svg>
    </div>
  );
}

// Static floating lotus
export function FloatingLotus({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute opacity-20 ${className}`}>
      <Lotus size={80} />
    </div>
  );
}
