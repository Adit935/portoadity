'use client';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Animated Vibrant Background */}
      <div className="vibrant-bg">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-3"></div>
      </div>
      
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        
        <div className="inline-flex items-center px-4 py-2 rounded-full light-glass text-slate-700 text-sm font-semibold mb-10 fade-up-enter hover-lift cursor-default shadow-sm border-white/50">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2 relative">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </span>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tersedia untuk proyek baru</span>
        </div>

        <h1 className="text-5xl md:text-5xl lg:text-[4.5rem] font-black text-slate-800 mb-8 leading-[1.05] tracking-tight fade-up-enter" style={{animationDelay: '0.1s'}}>
          SELAMAT DATANG DI <br className="hidden sm:block" />
          <span className="text-gradient-vibrant">PORTOFOLIO SAYA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 fade-up-enter font-medium" style={{animationDelay: '0.2s'}}>
                  </p>
        
        <div className="flex flex-col sm:flex-row gap-5 fade-up-enter" style={{animationDelay: '0.3s'}}>
          <a href="#projects" className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover-lift">
            Jelajahi Karya
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full light-glass text-slate-800 font-semibold transition-all hover-lift border-white/60">
            Hubungi Saya
          </a>
        </div>

      </div>
    </section>
  );
}
