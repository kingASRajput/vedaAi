'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LotusProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export function Lotus({ size = 200, className = '', animate = true }: LotusProps) {
  const petalCount = 12;
  const innerPetalCount = 8;

  const petalVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const breatheVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      variants={animate ? breatheVariants : undefined}
      animate={animate ? 'animate' : undefined}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="lotusGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#fce7f3" />
          </linearGradient>
          <linearGradient id="lotusGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f9a8d4" />
          </linearGradient>
          <linearGradient id="lotusCenter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#ff6600" />
          </linearGradient>
          <filter id="lotusShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#ec4899" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer petals */}
        <g transform="translate(100, 100)">
          {Array.from({ length: petalCount }).map((_, i) => {
            const angle = (i * 360) / petalCount - 90;
            return (
              <motion.path
                key={`outer-${i}`}
                d="M 0,0 Q -15,-40 0,-70 Q 15,-40 0,0"
                fill="url(#lotusGradient1)"
                transform={`rotate(${angle})`}
                filter="url(#lotusShadow)"
                custom={i}
                variants={petalVariants}
                initial="initial"
                animate="animate"
              />
            );
          })}

          {/* Inner petals */}
          {Array.from({ length: innerPetalCount }).map((_, i) => {
            const angle = (i * 360) / innerPetalCount - 90 + 22.5;
            return (
              <motion.path
                key={`inner-${i}`}
                d="M 0,0 Q -10,-25 0,-45 Q 10,-25 0,0"
                fill="url(#lotusGradient2)"
                transform={`rotate(${angle})`}
                filter="url(#lotusShadow)"
                custom={i + petalCount}
                variants={petalVariants}
                initial="initial"
                animate="animate"
              />
            );
          })}

          {/* Center */}
          <motion.circle
            r="15"
            fill="url(#lotusCenter)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />

          {/* Center dots */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60) * Math.PI / 180;
            const x = Math.cos(angle) * 8;
            const y = Math.sin(angle) * 8;
            return (
              <motion.circle
                key={`dot-${i}`}
                cx={x}
                cy={y}
                r="2"
                fill="#fff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              />
            );
          })}
        </g>
      </svg>
    </motion.div>
  );
}

export function FloatingLotus({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <Lotus size={100} />
    </motion.div>
  );
}
