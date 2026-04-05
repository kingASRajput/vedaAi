'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AIChat, FloatingMandala } from '@/components';

export default function ChatPage() {
  return (
    <div className="relative min-h-screen">
      <FloatingMandala className="top-20 -right-40 opacity-10" />
      <FloatingMandala className="bottom-20 -left-40 opacity-10" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-spiritual gradient-text mb-2">
            Ask VedaAI
          </h1>
          <p className="text-gray-400">
            Seek wisdom from the ancient scriptures. Ask any question about Vedic philosophy,
            dharma, karma, meditation, or spiritual practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sacred-border bg-gradient-to-br from-sacred-deepblue/30 to-black/50 h-[calc(100vh-250px)] min-h-[500px]"
        >
          <AIChat className="h-full" />
        </motion.div>
      </div>
    </div>
  );
}
