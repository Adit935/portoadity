'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 light-glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav className="px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter text-slate-800 flex items-center gap-1">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg">A</span>
            ditya
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Pengalaman</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Proyek</a>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:-translate-y-0.5">
              Mari Berdiskusi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800 p-2 hover:bg-slate-100/50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'w-0 opacity-0' : 'w-5'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 top-[73px] bg-white/80 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center`}>
          <div className="flex flex-col gap-8 text-center text-2xl font-bold tracking-tight text-slate-800 w-full px-6">
            <a href="#about" className="block py-4 border-b border-slate-200 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Tentang</a>
            <a href="#experience" className="block py-4 border-b border-slate-200 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pengalaman</a>
            <a href="#skills" className="block py-4 border-b border-slate-200 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Keahlian</a>
            <a href="#projects" className="block py-4 border-b border-slate-200 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Proyek</a>
            <a href="#contact" className="mt-4 mx-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold w-full max-w-xs shadow-lg" onClick={() => setIsMenuOpen(false)}>
              Mari Berdiskusi
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
