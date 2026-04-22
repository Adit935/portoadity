'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Web Rental motor",
    description: "A full-stack e-commerce solution with product catalog, shopping cart, and payment integration. Features real-time inventory management and advanced analytics.",
    tags: ["Php", "Mysql", "Draw.io",],
    link: "#",
    image: "/images/image1.png",
    featured: true,
  },
  {
    title: "Adtnottes",
    description: "Real-time task management application with collaborative features and time tracking. Includes team workflows and project planning tools.",
    tags: ["Flutter",],
    link: "#",
    image: "/images/project2.jpg",
    featured: true,
  },
  {
    title: "Buku Induk",
    description: "Data visualization dashboard with interactive charts and real-time analytics. Provides comprehensive business insights and KPI tracking.",
    tags: ["Laravel", "Mysql", "draw.io", "Figma"],
    link: "#",
    image: "/images/buku.png",
    featured: true,
  },
  {
    title: "Webdes",
    description: "Modern chat application powered by AI with natural language processing. Features conversation history and smart recommendations.",
    tags: ["Html", "Css"],
    link: "#",
    image: "/images/project4.jpg",
  },
  ];

export default function Projects() {
  const { ref, isInView } = useInViewAnimation();
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>Featured Projects</h2>
        <p className={`text-zinc-600 mb-16 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>Showcase of my best work and successful projects</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className={`transition-all duration-700 ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${0.05 * index}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
