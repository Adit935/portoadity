'use client';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Minimalist Background (Solid Black) */}
      
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        
        <div className="inline-flex items-center px-4 py-2 rounded-full dark-glass text-slate-200 text-sm font-semibold mb-10 fade-up-enter hover-lift cursor-default shadow-sm border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2 relative">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </span>
          <span className="text-slate-200">Tersedia untuk proyek baru</span>
        </div>

        <h1 className="text-5xl md:text-5xl lg:text-[4.5rem] font-black text-white mb-8 leading-[1.05] tracking-tight fade-up-enter" style={{animationDelay: '0.1s'}}>
          SELAMAT DATANG DI <br className="hidden sm:block" />
          <span className="text-gradient-subtle">PORTOFOLIO SAYA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 fade-up-enter font-medium" style={{animationDelay: '0.2s'}}>
                  </p>
        
        <div className="flex flex-col sm:flex-row gap-5 fade-up-enter" style={{animationDelay: '0.3s'}}>
          <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover-lift">
            Jelajahi Karya
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full dark-glass text-white font-semibold transition-all hover-lift border-white/10 hover:bg-white/10">
            Hubungi Saya
          </a>
        </div>

      </div>
    </section>
  );
}
