'use client';

import { ParticleBackground } from './ParticleBackground';

export default function Hero() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/50 mb-6 animate-slide-up">
          <span className="flex w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-blue-400 text-sm font-medium">Welcome to my portfolio</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-black mb-6 animate-slide-up leading-tight" style={{ animationDelay: '0.1s' }}>
          Welcome to 
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> my portfolio</span>
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-600 mb-8 max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
         </p>
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-smooth font-bold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/75 hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-zinc-400 hover:border-black text-black rounded-lg transition-smooth font-bold text-lg hover:bg-black/5 hover:scale-105">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
