'use client';

import React from 'react';

interface MandalaProps {
  size?: number;
  className?: string;
}

// Simplified static Mandala - no animations, fewer elements
export function Mandala({ size = 400, className = '' }: MandalaProps) {
  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="mandalaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff6600" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Simple concentric circles */}
        <g transform="translate(200, 200)">
          <circle r="30" fill="none" stroke="url(#mandalaGrad)" strokeWidth="1.5" />
          <circle r="60" fill="none" stroke="url(#mandalaGrad)" strokeWidth="1" opacity="0.7" />
          <circle r="90" fill="none" stroke="url(#mandalaGrad)" strokeWidth="1" opacity="0.5" />
          <circle r="120" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" opacity="0.3" />
          <circle r="150" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" opacity="0.2" />
          
          {/* Simple 8-point star pattern */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={30 * Math.cos((angle * Math.PI) / 180)}
              y1={30 * Math.sin((angle * Math.PI) / 180)}
              x2={120 * Math.cos((angle * Math.PI) / 180)}
              y2={120 * Math.sin((angle * Math.PI) / 180)}
              stroke="url(#mandalaGrad)"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}
          
          {/* Center Om */}
          <text
            textAnchor="middle"
            dominantBaseline="central"
            fill="#d4af37"
            fontSize="32"
            fontFamily="serif"
          >
            ॐ
          </text>
        </g>
      </svg>
    </div>
  );
}

// Static floating mandala - CSS animation instead of JS
export function FloatingMandala({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute opacity-10 pointer-events-none ${className}`}>
      <Mandala size={250} />
    </div>
  );
}
