'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, image, title, onClose }: ImageModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isVisible || !image) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Blurred Dark Background */}
      <div className={`absolute inset-0 bg-black/90 backdrop-blur-2xl transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Modal Content */}
      <div
        className={`relative z-50 w-full max-w-6xl h-[85vh] flex flex-col bg-[#050505] rounded-3xl shadow-[0_0_80px_-15px_rgba(255,255,255,0.05)] overflow-hidden transform transition-all duration-500 border border-white/10 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 hover:rotate-90 group shadow-lg"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full flex-1 flex items-center justify-center bg-transparent group">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-contain p-4 md:p-12 transition-transform duration-700 ease-out group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          
          {/* Cinematic Title Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent pt-40 pointer-events-none">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-2xl translate-y-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
              {title}
            </h3>
            <div className="h-1.5 w-16 bg-gradient-to-r from-white to-white/10 mt-6 rounded-full translate-y-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards] shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
