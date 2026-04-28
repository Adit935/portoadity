'use client';

import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import ProjectCard from "./ProjectCard";
import ImageModal from "./ImageModal";

const projects = [
  {
    title: "Web Rental motor",
    description: "website rental motor dengan fitur lengkap seperti pemesanan online, manajemen inventaris, dan sistem pembayaran terintegrasi. Dibangun dengan teknologi modern untuk pengalaman pengguna yang optimal.",
    tags: ["Php", "Mysql", "Draw.io",],
    link: "#",
    image: "/images/image1.png",
    featured: true,
  },
  {
    title: "Buku Induk",
    description: "buku induk sekolah dengan fitur lengkap seperti manajemen data siswa, guru, dan kelas. Dibangun dengan teknologi modern untuk pengalaman pengguna yang optimal.",
    tags: ["Figma","draw.io", "laravel", "mysql"],
    link: "#",
    image: "/images/buku.png",
   
  },
  {
    title: "poster parfum",
    description: "poster parfum dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva atau Figma untuk menciptakan visual yang memikat dan sesuai dengan merek parfum.",
    tags: ["canva", "Figma"],
    link: "#",
    image: "/images/califblue.png",
    featured: true,
  },
  {
    title: "poster hari buruh",
    description: "poster hari buruh dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva untuk menciptakan visual yang memikat dan sesuai dengan tema hari buruh.",
    tags: ["canva", "pinterest"],
    link: "#",
    image: "/images/BURUH.png",
  },
   {
    title: "poster hari raya idul adha",
    description: "poster hari raya idul adha dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva untuk menciptakan visual yang memikat dan sesuai dengan tema hari raya idul adha.",
    tags: ["canva", "pinterest"],
    link: "#",
    image: "/images/iduladha.png",
  },

  ];

export default function Projects() {
  const { ref, isInView } = useInViewAnimation();
  const [selectedProject, setSelectedProject] = useState<{ title: string; image: string } | null>(null);
  
  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>Featured Projects</h2>
          <p className={`text-zinc-600 mb-16 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>Showcase of my best work and successful projects</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className={`transition-all duration-700 ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${0.05 * index}s` }}>
                <ProjectCard 
                  {...project} 
                  onImageClick={() => setSelectedProject({ title: project.title, image: project.image || '' })}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={selectedProject !== null}
        image={selectedProject?.image || ''}
        title={selectedProject?.title || ''}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
