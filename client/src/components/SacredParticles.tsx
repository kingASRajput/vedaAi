'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface SacredParticlesProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export function SacredParticles({
  count = 50,
  colors = ['#d4af37', '#ff6600', '#f9a8d4', '#ffffff'],
  className = '',
}: SacredParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(createParticle(canvas.width, canvas.height, colors));
      }
    };

    const createParticle = (width: number, height: number, colors: string[]): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -Math.random() * 0.5 - 0.2,
      life: Math.random() * 100,
      maxLife: 100 + Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Reset particle if it's dead or out of bounds
        if (
          particle.life > particle.maxLife ||
          particle.y < 0 ||
          particle.x < 0 ||
          particle.x > canvas.width
        ) {
          particlesRef.current[index] = createParticle(canvas.width, canvas.height, colors);
          particlesRef.current[index].y = canvas.height + 10;
        }

        // Calculate opacity based on life
        const lifeRatio = particle.life / particle.maxLife;
        const opacity = lifeRatio < 0.1 
          ? lifeRatio * 10 
          : lifeRatio > 0.9 
            ? (1 - lifeRatio) * 10 
            : 1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity * 0.6;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.globalAlpha = opacity * 0.3;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
