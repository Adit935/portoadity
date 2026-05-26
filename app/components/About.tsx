'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="dark-glass rounded-[2.5rem] p-8 md:p-16 border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Profile Photo */}
            <div className="lg:col-span-5 relative fade-up-enter group">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden hover-lift border border-white/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Subtle Dark Accent */}
              <div className="absolute -inset-6 bg-white rounded-[2.5rem] z-[-1] opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-7 fade-up-enter" style={{animationDelay: '0.1s'}}>
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">Tentang Saya</div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">Mengenal Lebih <span className="text-gradient-subtle">Jauh</span></h3>
              </div>
              
              <div className="text-lg text-slate-400 leading-relaxed space-y-6">
                <p>
                  <strong className="text-white font-bold">Saya memiliki ketertarikan yang besar pada dunia desain grafis dan UI/UX</strong>, dengan fokus menciptakan tampilan yang tidak hanya menarik secara visual, tetapi juga fungsional dan nyaman digunakan. Saya senang mengeksplorasi ide, detail visual, serta mengembangkan desain yang mampu menyampaikan pesan dan memberikan pengalaman pengguna yang baik.
                </p>
                <p>
                  Fokus utama saya adalah menciptakan desain yang modern, sederhana, dan interaktif. Saya terus belajar dan mengembangkan kemampuan melalui eksplorasi serta berbagai proyek desain.
                </p>
                 </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
