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
                  <strong className="text-white font-bold">Saya menguasai pengembangan aplikasi web dan mobile</strong>, serta memiliki ketertarikan yang sangat mendalam pada dunia desain antarmuka (UI/UX) untuk menciptakan tampilan yang tidak hanya fungsional, tetapi juga indah dan interaktif.
                </p>
                <p>
                  Fokus utama saya adalah menciptakan pengalaman digital yang mulus (*seamless*). Saya percaya bahwa setiap detail kecil—mulai dari bayangan tombol hingga kecepatan animasi—sangat berpengaruh pada kenyamanan pengguna.
                </p>
                <p>
                  Di luar koding dan mendesain, saya adalah pendengar yang baik dan komunikator yang aktif, memastikan setiap proyek tim berjalan dengan kolaborasi yang harmonis.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
