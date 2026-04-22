'use client';

import { useEffect, useState } from 'react';

interface Particle {
  width: string;
  height: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on the client to avoid hydration mismatch
    const newParticles: Particle[] = [...Array(30)].map(() => ({
      width: Math.random() * 100 + 50 + 'px',
      height: Math.random() * 100 + 50 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animationDuration: Math.random() * 10 + 20 + 's',
      animationDelay: Math.random() * 5 + 's',
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute bg-blue-400/30 rounded-full animate-float"
          style={particle}
        />
      ))}
    </div>
  );
}
