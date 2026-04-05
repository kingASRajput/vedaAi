'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Search, Sparkles, ArrowRight } from 'lucide-react';
import { Mandala, Lotus, OmSymbol, FloatingLotus, FloatingMandala } from '@/components';

const features = [
  {
    icon: BookOpen,
    title: 'Sacred Scriptures',
    description: 'Explore the four Vedas, major Upanishads, and other sacred texts with translations and commentaries.',
    href: '/scriptures',
  },
  {
    icon: MessageCircle,
    title: 'Ask VedaAI',
    description: 'Get answers to your spiritual questions powered by AI trained on ancient Vedic wisdom.',
    href: '/chat',
  },
  {
    icon: Search,
    title: 'Deep Search',
    description: 'Search through thousands of verses to find specific teachings and references.',
    href: '/search',
  },
];

const scriptures = [
  { name: 'Rig Veda', sanskrit: 'ऋग्वेद', verses: '10,552' },
  { name: 'Sama Veda', sanskrit: 'सामवेद', verses: '1,875' },
  { name: 'Yajur Veda', sanskrit: 'यजुर्वेद', verses: '1,975' },
  { name: 'Atharva Veda', sanskrit: 'अथर्ववेद', verses: '5,977' },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating decorations */}
      <FloatingMandala className="top-20 -left-40" />
      <FloatingMandala className="top-1/2 -right-40" />
      <FloatingLotus className="bottom-40 left-20 opacity-30" />
      <FloatingLotus className="top-40 right-20 opacity-30" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Om and Mandala */}
          <motion.div
            className="relative mb-8 flex justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="relative">
              <Mandala size={280} className="opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <OmSymbol size={100} />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-spiritual mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text glow-text">VedaAI</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-sacred-gold/80 font-spiritual mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            वेदाः प्रमाणम्
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Ancient Wisdom, Modern Understanding. Explore the timeless teachings of 
            the Vedas and Upanishads with AI-powered guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link href="/chat">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-sacred-gold to-saffron-500 rounded-xl text-white font-spiritual text-lg flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Ask VedaAI
              </motion.button>
            </Link>
            <Link href="/scriptures">
              <motion.button
                className="px-8 py-4 border-2 border-sacred-gold/50 rounded-xl text-sacred-gold font-spiritual text-lg flex items-center gap-2 justify-center hover:bg-sacred-gold/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                Explore Scriptures
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-sacred-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-sacred-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-spiritual gradient-text mb-4">
              Discover Divine Knowledge
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in the profound wisdom of ancient India through our 
              comprehensive collection of sacred texts and AI-powered insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={feature.href}>
                  <div className="spiritual-card sacred-border p-8 h-full group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sacred-gold/20 to-saffron-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-sacred-gold" />
                    </div>
                    <h3 className="text-xl font-spiritual text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <div className="flex items-center gap-2 text-sacred-gold font-spiritual text-sm">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vedas Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-sacred-deepblue/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-spiritual gradient-text mb-4">
              The Four Vedas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The foundational texts of Sanatan Dharma, containing hymns, philosophy, 
              and guidance for rituals composed over 3,500 years ago.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scriptures.map((scripture, index) => (
              <motion.div
                key={scripture.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="spiritual-card sacred-border p-6 text-center">
                  <Lotus size={80} className="mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-spiritual text-white mb-1">{scripture.name}</h3>
                  <p className="text-2xl text-sacred-gold sanskrit-text mb-2">{scripture.sanskrit}</p>
                  <p className="text-sm text-gray-400">{scripture.verses} hymns</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="sacred-border p-12 bg-gradient-to-br from-sacred-deepblue/30 to-sacred-maroon/20">
            <OmSymbol size={60} className="mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-spiritual text-white mb-4 leading-relaxed">
              "असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।"
            </blockquote>
            <p className="text-lg text-gray-300 mb-2">
              "Lead me from the unreal to the real. Lead me from darkness to light. 
              Lead me from death to immortality."
            </p>
            <p className="text-sacred-gold font-spiritual">— Brihadaranyaka Upanishad</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-sacred-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <OmSymbol size={30} />
            <span className="text-xl font-spiritual gradient-text">VedaAI</span>
          </div>
          <p className="text-gray-500 text-sm">
            Preserving and sharing the eternal wisdom of the Vedas
          </p>
          <p className="text-gray-600 text-xs mt-2">
            सर्वे भवन्तु सुखिनः | May all beings be happy
          </p>
        </div>
      </footer>
    </div>
  );
}
