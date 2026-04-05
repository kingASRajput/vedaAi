import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar, SacredParticles, OmBackground } from '@/components';

export const metadata: Metadata = {
  title: 'VedaAI - Ancient Wisdom, Modern Understanding',
  description: 'Explore the sacred Vedas and Upanishads with AI-powered guidance. Discover the timeless wisdom of ancient Indian scriptures.',
  keywords: 'Vedas, Upanishads, Hindu scriptures, spiritual wisdom, AI, meditation, dharma, karma, moksha',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SacredParticles count={40} />
        <OmBackground />
        <Navbar />
        <main className="pt-16 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
