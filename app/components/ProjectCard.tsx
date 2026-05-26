'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  onImageClick?: () => void;
}

export default function ProjectCard({ title, description, tags, link, image, onImageClick }: ProjectCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering other clicks if any
    if (isClicked) return;
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      if (onImageClick) onImageClick();
    }, 350); // 350ms delay for the arrow shoot animation
  };

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
              className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                isClicked ? 'scale-125' : 'group-hover:scale-110'
              }`}
            />

            {/* Colorful overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent transition-opacity duration-500 ${
              isClicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}></div>
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
              type="button"
              onClick={handleDetailsClick}
              className={`inline-flex items-center text-sm font-bold text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 mt-auto w-fit group/btn ${
                isClicked 
                  ? 'scale-95 text-white/70' 
                  : 'hover:text-gray-300 active:scale-95 active:translate-y-0.5 active:bg-white/20'
              }`}
            >
              Lihat Detail 
              <span className={`ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isClicked
                  ? 'bg-white/30 translate-x-8 opacity-0 scale-75'
                  : 'bg-white/10 group-hover/btn:bg-white/20 group-hover/btn:translate-x-1 active:scale-90'
              }`}>
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
