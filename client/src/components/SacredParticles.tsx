'use client';

import React from 'react';

// Lightweight CSS-only particles using pseudo-elements
// No canvas, no JS animation loop
export function SacredParticles({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {/* Simple CSS gradient overlay for ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-sacred-gold/[0.02] via-transparent to-saffron-500/[0.02]" />
      
      {/* Few static decorative dots */}
      <div className="absolute top-[10%] left-[20%] w-1 h-1 rounded-full bg-sacred-gold/30" />
      <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-saffron-500/20" />
      <div className="absolute top-[60%] left-[10%] w-1 h-1 rounded-full bg-sacred-gold/20" />
      <div className="absolute top-[80%] right-[25%] w-1 h-1 rounded-full bg-saffron-500/25" />
      <div className="absolute top-[45%] left-[80%] w-1.5 h-1.5 rounded-full bg-sacred-gold/15" />
    </div>
  );
}
