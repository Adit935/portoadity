'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Experience() {
  const { ref, isInView } = useInViewAnimation();
  
  const experiences = [
    { 
      year: " 2025-2026", 
      title: "Magang di PT.INOVINDO DIGITAL MEDIA",
      description: "Mengikuti kegiatan magang di PT. INOVINDO DIGITAL MEDIA"
    },
    { 
      year: "2023 - 2025", 
      title: "Anggota Ekstrakurikuler IT (Divisi Ict)",
      description: "Menyiapkan peralatan yang akan di pakai & Membantu Divisi lain"
    },
    { 
      year: "2019 - 2021", 
      title: "Pelatihan landing page 2025", 
      
      description: "Mengikuti Pelatihan pembuatan landing page"
    },
    { 
      year: "2025", 
      title: "Mengikuti program digitalisasi pendidikan pandi bersama dinas pendidikan jawa barat 2024", 
      company: "",
      description: ""
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-zinc-50 to-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold text-black mb-12 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          Work Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`flex gap-6 pb-6 border-l-4 border-blue-500 pl-6 hover:bg-white p-6 rounded-lg transition-all duration-500 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.05 * index}s` }}
            >
              <div className="flex-shrink-0">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  {exp.year}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black mb-1">{exp.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <p className="text-zinc-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
