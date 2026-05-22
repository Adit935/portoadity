'use client';

import { useState } from 'react';
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
    description: "Website rental motor dengan fitur lengkap seperti pemesanan online, manajemen inventaris, dan sistem pembayaran terintegrasi.",
    tags: ["PHP", "MySQL", "Draw.io"],
    link: "#",
    image: "/images/image1.png",
    featured: true,
    category: 'Website',
  },
  {
    title: "Buku Induk",
    description: "Aplikasi buku induk sekolah dengan fitur lengkap seperti manajemen data siswa, guru, dan kelas.",
    tags: ["Figma", "Draw.io", "Laravel", "MySQL"],
    link: "#",
    image: "/images/buku.png",
    category: 'Website',
  },
  {
    title: "Poster Parfum",
    description: "Desain poster parfum yang menarik dan profesional untuk keperluan promosi produk.",
    tags: ["Canva", "Figma"],
    link: "#",
    image: "/images/califblue.png",
    featured: true,
    category: 'Desain',
  },
  {
    title: "Poster Maulid Nabi",
    description: "Desain poster peringatan Maulid Nabi dengan nuansa Islami yang modern dan elegan.",
    tags: ["Canva", "Pinterest"],
    link: "#",
    image: "/images/maulid.png",
    category: 'Desain',
  },
  {
    title: "Poster Idul Adha",
    description: "Desain poster perayaan Hari Raya Idul Adha yang menarik dan meriah.",
    tags: ["Canva", "Pinterest"],
    link: "#",
    image: "/images/iduladha.png",
    category: 'Desain',
  },
  {
    title: "Poster Perpisahan",
    description: "Desain poster kenang-kenangan perpisahan kelas yang berkesan.",
    tags: ["Canva", "Pinterest"],
    link: "#",
    image: "/images/kelas.png",
    category: 'Desain',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{ title: string; image: string } | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Semua');

  const websiteProjects = projects.filter(project => project.category === 'Website');
  const designProjects = projects.filter(project => project.category === 'Desain');

  const renderProjectGrid = (items: Project[]) => (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, index) => (
        <div key={`${project.title}-${index}`} className="fade-up-enter" style={{animationDelay: `${0.1 * index}s`}}>
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
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center fade-up-enter">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">Portfolio</div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Karya <span className="text-gradient-subtle">Pilihan</span></h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Jelajahi berbagai proyek yang telah saya kerjakan, dari pengembangan sistem web hingga eksplorasi desain grafis.
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-16 overflow-x-auto pb-4 fade-up-enter" style={{animationDelay: '0.1s'}}>
            {['Semua', 'Website', 'Desain'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white text-black shadow-[0_8px_15px_rgba(255,255,255,0.1)] hover:-translate-y-1'
                    : 'dark-glass text-slate-400 hover:text-white hover:-translate-y-1'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {activeTab === 'Semua' && (
              <>
                <div className="fade-up-enter" style={{animationDelay: '0.2s'}}>
                  <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-2xl font-black text-white">Pengembangan Web</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                  {renderProjectGrid(websiteProjects)}
                </div>
                <div className="fade-up-enter" style={{animationDelay: '0.3s'}}>
                  <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-2xl font-black text-white">Desain Grafis</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                  {renderProjectGrid(designProjects)}
                </div>
              </>
            )}
            {activeTab === 'Website' && (
              <div className="fade-up-enter" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-black text-white">Pengembangan Web</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                {renderProjectGrid(websiteProjects)}
              </div>
            )}
            {activeTab === 'Desain' && (
              <div className="fade-up-enter" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-2xl font-black text-white">Desain Grafis</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
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
