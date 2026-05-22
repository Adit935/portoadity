'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  image?: string;
  onImageClick?: () => void;
}

export default function ProjectCard({ title, description, tags, link, featured, image, onImageClick }: ProjectCardProps) {
  return (
    <div className="group h-full">
      <div className="dark-glass rounded-[2rem] flex flex-col w-full h-full overflow-hidden hover-lift border-white/10">
        {image && (
          <div className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer" onClick={onImageClick}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {featured && (
              <div className="absolute top-4 right-4 px-4 py-1.5 bg-white backdrop-blur-md text-black rounded-full text-xs font-bold tracking-wide shadow-sm border border-white/20">
                Unggulan
              </div>
            )}
            {/* Colorful overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}
        <div className="flex flex-col flex-1 p-8">
          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-gray-300 transition-colors">{title}</h3>
          <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed font-medium">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold text-slate-300 bg-white/10 border border-white/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {link && (
            <button
              onClick={onImageClick}
              className="inline-flex items-center text-sm font-bold text-white hover:text-gray-300 transition-colors mt-auto w-fit group/btn"
            >
              Lihat Detail 
              <span className="ml-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 group-hover/btn:translate-x-1 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
