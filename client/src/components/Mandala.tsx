'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MandalaProps {
  size?: number;
  className?: string;
}

export function Mandala({ size = 400, className = '' }: MandalaProps) {
  const layers = 8;
  const petalsPerLayer = [8, 12, 16, 20, 24, 28, 32, 36];

  return (
    <div className={`mandala-container ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 400 400"
        className="animate-mandala-rotate"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="mandalaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ff6600" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center Om symbol */}
        <g transform="translate(200, 200)">
          <circle r="30" fill="none" stroke="url(#mandalaGradient)" strokeWidth="2" filter="url(#glow)" />
          <text
            textAnchor="middle"
            dominantBaseline="central"
            fill="#d4af37"
            fontSize="36"
            fontFamily="Noto Sans Devanagari"
            filter="url(#glow)"
          >
            ॐ
          </text>
        </g>

        {/* Mandala layers */}
        {Array.from({ length: layers }).map((_, layerIndex) => {
          const radius = 50 + layerIndex * 22;
          const petals = petalsPerLayer[layerIndex];
          const angleStep = 360 / petals;

          return (
            <g key={layerIndex} transform="translate(200, 200)">
              {/* Circle for this layer */}
              <circle
                r={radius}
                fill="none"
                stroke="url(#mandalaGradient)"
                strokeWidth="0.5"
                opacity={0.3 + layerIndex * 0.05}
              />

              {/* Petals */}
              {Array.from({ length: petals }).map((_, petalIndex) => {
                const angle = petalIndex * angleStep;
                const petalLength = 15 + layerIndex * 2;
                const x1 = radius * Math.cos((angle * Math.PI) / 180);
                const y1 = radius * Math.sin((angle * Math.PI) / 180);
                const x2 = (radius + petalLength) * Math.cos((angle * Math.PI) / 180);
                const y2 = (radius + petalLength) * Math.sin((angle * Math.PI) / 180);

                return (
                  <g key={petalIndex}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="url(#mandalaGradient)"
                      strokeWidth="1"
                      opacity={0.6}
                      filter="url(#glow)"
                    />
                    {layerIndex % 2 === 0 && (
                      <circle
                        cx={x2}
                        cy={y2}
                        r="2"
                        fill="#d4af37"
                        opacity={0.8}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function FloatingMandala({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute opacity-20 pointer-events-none ${className}`}
      animate={{
        rotate: 360,
        scale: [1, 1.05, 1],
      }}
      transition={{
        rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
        scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <Mandala size={300} />
    </motion.div>
  );
}
