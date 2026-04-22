'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-center pt-6 pb-6">
        <nav className="bg-white/30 backdrop-blur-xl border border-white/50 rounded-full px-8 py-3 flex items-center gap-8 animate-fade-in shadow-lg">
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
          <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full transition-smooth font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
