'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-center pt-6 pb-6">
        <nav className="bg-white/30 backdrop-blur-xl border border-white/50 rounded-full px-4 sm:px-6 md:px-8 py-3 flex items-center gap-4 sm:gap-6 md:gap-8 shadow-lg">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            <a href="#about" className="text-zinc-700 hover:text-black transition-smooth font-semibold hover:scale-110 hover:-translate-y-1">
              About
            </a>
            <a href="#skills" className="text-zinc-700 hover:text-black transition-smooth font-semibold hover:scale-110 hover:-translate-y-1">
              Skills
            </a>
            <a href="#experience" className="text-zinc-700 hover:text-black transition-smooth font-semibold hover:scale-110 hover:-translate-y-1">
              Experience
            </a>
            <a href="#projects" className="text-zinc-700 hover:text-black transition-smooth font-semibold hover:scale-110 hover:-translate-y-1">
              Projects
            </a>
            <a href="#contact" className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full transition-smooth font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-700 hover:text-black transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/95 backdrop-blur-xl border border-white/50 rounded-2xl px-6 py-4 shadow-lg min-w-[200px]">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-zinc-700 hover:text-black transition-smooth font-semibold" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#skills" className="text-zinc-700 hover:text-black transition-smooth font-semibold" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
              <a href="#experience" className="text-zinc-700 hover:text-black transition-smooth font-semibold" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
              <a href="#projects" className="text-zinc-700 hover:text-black transition-smooth font-semibold" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full transition-smooth font-bold text-center shadow-lg shadow-blue-500/50" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
