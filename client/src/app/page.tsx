'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, MessageCircle, Search, Sparkles, ArrowRight } from 'lucide-react';
import { Mandala, Lotus, OmSymbol, FloatingMandala } from '@/components';

const features = [
  {
    icon: BookOpen,
    title: 'Sacred Scriptures',
    description: 'Explore the four Vedas, major Upanishads, and other sacred texts with translations.',
    href: '/scriptures',
  },
  {
    icon: MessageCircle,
    title: 'Ask VedaAI',
    description: 'Get answers to your spiritual questions powered by AI trained on Vedic wisdom.',
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
    <div className="relative min-h-screen">
      {/* Simple static decorations */}
      <FloatingMandala className="top-20 -left-32" />
      <FloatingMandala className="top-1/2 -right-32" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Static Om and Mandala */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <Mandala size={250} className="opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <OmSymbol size={80} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-spiritual mb-4">
            <span className="gradient-text">VedaAI</span>
          </h1>

          <p className="text-xl md:text-2xl text-sacred-gold/80 font-spiritual mb-2">
            वेदाः प्रमाणम्
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ancient Wisdom, Modern Understanding. Explore the timeless teachings of 
            the Vedas and Upanishads with AI-powered guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <button className="px-8 py-4 bg-gradient-to-r from-sacred-gold to-saffron-500 rounded-xl text-white font-spiritual text-lg flex items-center gap-2 justify-center hover:opacity-90 transition-opacity">
                <Sparkles className="w-5 h-5" />
                Ask VedaAI
              </button>
            </Link>
            <Link href="/scriptures">
              <button className="px-8 py-4 border-2 border-sacred-gold/50 rounded-xl text-sacred-gold font-spiritual text-lg flex items-center gap-2 justify-center hover:bg-sacred-gold/10 transition-colors">
                <BookOpen className="w-5 h-5" />
                Explore Scriptures
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-spiritual gradient-text mb-4">
              Discover Divine Knowledge
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in the profound wisdom of ancient India through our 
              comprehensive collection of sacred texts and AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href}>
                <div className="spiritual-card sacred-border p-8 h-full group hover:bg-sacred-gold/5 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sacred-gold/20 to-saffron-500/20 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-sacred-gold" />
                  </div>
                  <h3 className="text-xl font-spiritual text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex items-center gap-2 text-sacred-gold font-spiritual text-sm">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vedas Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-sacred-deepblue/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-spiritual gradient-text mb-4">
              The Four Vedas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The foundational texts of Sanatan Dharma, containing hymns, philosophy, 
              and guidance for rituals composed over 3,500 years ago.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scriptures.map((scripture) => (
              <div key={scripture.name} className="spiritual-card sacred-border p-6 text-center">
                <Lotus size={60} className="mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-spiritual text-white mb-1">{scripture.name}</h3>
                <p className="text-2xl text-sacred-gold sanskrit-text mb-2">{scripture.sanskrit}</p>
                <p className="text-sm text-gray-400">{scripture.verses} hymns</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="sacred-border p-12 bg-gradient-to-br from-sacred-deepblue/20 to-sacred-maroon/10">
            <OmSymbol size={50} className="mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-spiritual text-white mb-4 leading-relaxed">
              "असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।"
            </blockquote>
            <p className="text-base text-gray-300 mb-2">
              "Lead me from the unreal to the real. Lead me from darkness to light. 
              Lead me from death to immortality."
            </p>
            <p className="text-sacred-gold font-spiritual">— Brihadaranyaka Upanishad</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-sacred-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <OmSymbol size={24} />
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
