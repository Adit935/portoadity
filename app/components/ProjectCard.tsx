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
    <div className={`group relative bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${featured ? 'lg:col-span-1 lg:row-span-1' : ''}`}>
      {image && (
        <div className="relative w-full h-32 sm:h-40 md:h-48 overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-300 cursor-pointer active:scale-95 transition-transform duration-200" onClick={onImageClick}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>
      )}
      <div className="p-6">
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full animate-fade-in">
            Featured
          </div>
        )}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <p className="text-zinc-600 mb-4 line-clamp-2 transition-colors duration-300">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full border border-blue-200 group-hover:bg-blue-100 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {link && (
            <button
              onClick={onImageClick}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold transition-all duration-300 group-hover:translate-x-1 bg-none border-none cursor-pointer active:scale-95"
            >
              View Project <span className="ml-1 group-hover:translate-x-1 transition-all duration-300">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
