'use client';

import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import ProjectCard from "./ProjectCard";
import ImageModal from "./ImageModal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  featured?: boolean;
  category: 'Website' | 'Desain';
}

const projects: Project[] = [
  {
    title: "Web Rental motor",
    description: "website rental motor dengan fitur lengkap seperti pemesanan online, manajemen inventaris, dan sistem pembayaran terintegrasi. Dibangun dengan teknologi modern untuk pengalaman pengguna yang optimal.",
    tags: ["Php", "Mysql", "Draw.io"],
    link: "#",
    image: "/images/image1.png",
    featured: true,
    category: 'Website',
  },
  {
    title: "Buku Induk",
    description: "buku induk sekolah dengan fitur lengkap seperti manajemen data siswa, guru, dan kelas. Dibangun dengan teknologi modern untuk pengalaman pengguna yang optimal.",
    tags: ["Figma", "draw.io", "laravel", "mysql"],
    link: "#",
    image: "/images/buku.png",
    category: 'Website',
  },
  {
    title: "Poster Parfum",
    description: "poster parfum dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva atau Figma untuk menciptakan visual yang memikat dan sesuai dengan merek parfum.",
    tags: ["Canva", "Figma"],
    link: "#",
    image: "/images/califblue.png",
    featured: true,
    category: 'Desain',
  },
  {
    title: "Poster Maulid nabi",
    description: "poster maulid nabi dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva untuk menciptakan visual yang memikat dan sesuai dengan tema maulid nabi.",
    tags: ["Canva", "Pinterest"],
    link: "#",
    image: "/images/maulid.png",
    category: 'Desain',
  },
  {
    title: "Poster Hari Raya Idul Adha",
    description: "poster hari raya idul adha dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva untuk menciptakan visual yang memikat dan sesuai dengan tema hari raya idul adha.",
    tags: ["Canva", "Pinterest"],
    link: "#",
    image: "/images/iduladha.png",
    category: 'Desain',
  },

  {
    title: "Poster Perpisahan Kelas",
    description: "poster perpisahan kelas dengan desain yang menarik dan profesional. Dibuat menggunakan alat desain grafis seperti Canva untuk menciptakan visual yang memikat dan sesuai dengan tema perpisahan kelas.",
    tags: ["Canva", "Pinterest"],
    link: "#",
    image: "/images/kelas.png",
    category: 'Desain',
  },

];

export default function Projects() {
  const { ref, isInView } = useInViewAnimation();
  const [selectedProject, setSelectedProject] = useState<{ title: string; image: string } | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Semua');

  const websiteProjects = projects.filter(project => project.category === 'Website');
  const designProjects = projects.filter(project => project.category === 'Desain');

  const renderProjectGrid = (items: Project[]) => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <div key={`${project.title}-${index}`} className={`transition-all duration-700 ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${0.05 * index}s` }}>
          <ProjectCard
            {...project}
            onImageClick={() => project.image && setSelectedProject({ title: project.title, image: project.image })}
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>Proyek Unggulan</h2>
            <p className={`text-zinc-600 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>Pameran karya terbaik dan proyek yang sukses.</p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
            {['Semua', 'Website', 'Desain'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black hover:scale-105'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {activeTab === 'Semua' && (
              <>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-6 border-b pb-2">Proyek Website</h3>
                  {renderProjectGrid(websiteProjects)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-6 border-b pb-2">Proyek Desain</h3>
                  {renderProjectGrid(designProjects)}
                </div>
              </>
            )}
            {activeTab === 'Website' && (
              <div>
                {renderProjectGrid(websiteProjects)}
              </div>
            )}
            {activeTab === 'Desain' && (
              <div>
                {renderProjectGrid(designProjects)}
              </div>
            )}
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
