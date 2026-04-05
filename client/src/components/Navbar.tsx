'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, BookOpen, MessageCircle, Search, Menu, X } from 'lucide-react';
import { OmSymbol } from './OmSymbol';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/scriptures', label: 'Scriptures', icon: BookOpen },
  { href: '/chat', label: 'Ask VedaAI', icon: MessageCircle },
  { href: '/search', label: 'Search', icon: Search },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-sacred-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <OmSymbol size={40} />
            <span className="text-2xl font-spiritual gradient-text">VedaAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-sacred-gold/20 text-sacred-gold'
                        : 'text-gray-400 hover:text-sacred-gold hover:bg-sacred-gold/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-spiritual text-sm">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-sacred-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-b border-sacred-gold/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                      isActive
                        ? 'bg-sacred-gold/20 text-sacred-gold'
                        : 'text-gray-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-spiritual">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
