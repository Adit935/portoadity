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
      const timer = setTimeout(() => setIsVisible(false), 300);
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

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Blurred Background */}
      <div className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Modal Content */}
      <div
        className={`relative z-50 w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full min-h-[400px] flex-1 bg-gradient-to-br from-zinc-200 to-zinc-300 transform transition-transform duration-500 animate-fade-in">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-contain transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </div>

        {/* Title */}
        <div className="p-6 bg-white border-t border-zinc-200 transform transition-transform duration-500 animate-slide-up-smooth">
          <h3 className="text-2xl font-bold text-black">{title}</h3>
        </div>
      </div>
    </div>
  );
}
