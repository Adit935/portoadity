'use client';

export default function Experience() {
  const experiences = [
    { 
      year: "2025 - 2026", 
      title: "Magang di PT.INOVINDO DIGITAL MEDIA",
      description: "Mengikuti kegiatan magang dan mendapatkan pengalaman langsung di industri digital yang dinamis."
    },
    { 
      year: "2023 - 2025", 
      title: "Anggota Ekstrakurikuler IT (Divisi ICT)",
      description: "Menyiapkan peralatan teknologi & membantu kelancaran operasional divisi lain."
    },
    { 
      year: "2019 - 2021", 
      title: "Pelatihan Landing Page 2025", 
      description: "Mengikuti pelatihan komprehensif merancang antarmuka web modern."
    },
    { 
      year: "2025", 
      title: "Program Digitalisasi Pendidikan PANDI", 
      company: "Dinas Pendidikan Jawa Barat",
      description: "Berpartisipasi aktif dalam percepatan digitalisasi pendidikan daerah."
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center fade-up-enter">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-white/50 text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">Perjalanan Karir</div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">Pengalaman <span className="text-gradient-vibrant">Saya</span></h3>
        </div>
        
        <div className="relative pl-6 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 md:-translate-x-1/2 rounded-full opacity-50"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} fade-up-enter`} style={{animationDelay: `${0.1 * index}s`}}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-white ring-4 ring-purple-100 shadow-[0_0_15px_rgba(168,85,247,0.4)] z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                </div>

                <div className="md:w-1/2 md:px-12 flex flex-col group">
                  <div className={`light-glass p-8 hover-lift ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 text-purple-600 border border-white text-xs font-bold mb-5 shadow-sm">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{exp.title}</h3>
                    {exp.company && <p className="text-blue-600 font-bold mb-4 text-sm">{exp.company}</p>}
                    {exp.description && <p className="text-slate-600 font-medium leading-relaxed">{exp.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
