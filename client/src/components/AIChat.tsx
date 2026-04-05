'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, BookOpen, RefreshCw } from 'lucide-react';
import { OmSymbol } from './OmSymbol';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  className?: string;
}

export function AIChat({ className = '' }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Namaste 🙏 I am VedaAI, your guide to the ancient wisdom of the Vedas and Upanishads. Ask me anything about dharma, karma, moksha, or any spiritual topic from the sacred texts.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response || 'I apologize, but I could not process your request. Please try again.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but there was an error connecting to the server. Please ensure the backend is running.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    'What is the meaning of Om?',
    'Explain the concept of Karma',
    'What are the four Vedas?',
    'What is Moksha?',
  ];

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-sacred-gold/20">
        <OmSymbol size={40} />
        <div>
          <h2 className="text-xl font-spiritual gradient-text">VedaAI</h2>
          <p className="text-sm text-gray-400">Your Spiritual Guide</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-sacred-gold/20 to-saffron-500/20 border border-sacred-gold/30'
                    : 'bg-gradient-to-r from-sacred-deepblue/40 to-sacred-maroon/20 border border-sacred-gold/10'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-sacred-gold" />
                    <span className="text-xs text-sacred-gold font-spiritual">VedaAI</span>
                  </div>
                )}
                <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-r from-sacred-deepblue/40 to-sacred-maroon/20 border border-sacred-gold/10 p-4 rounded-2xl">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-sacred-gold animate-spin" />
                <span className="text-sacred-gold text-sm">Contemplating...</span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="text-xs px-3 py-1.5 rounded-full border border-sacred-gold/30 text-sacred-gold hover:bg-sacred-gold/10 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-sacred-gold/20">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Vedic wisdom..."
              rows={1}
              className="w-full px-4 py-3 bg-sacred-deepblue/30 border border-sacred-gold/20 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-sacred-gold/50 resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="px-4 py-3 bg-gradient-to-r from-sacred-gold to-saffron-500 rounded-xl text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
