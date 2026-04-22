'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Footer() {
  const { ref, isInView } = useInViewAnimation();
  
  return (
    <footer className="bg-white text-black py-16 px-4 sm:px-6 border-t border-zinc-200" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-zinc-200 pt-8 text-center text-zinc-500 text-sm">
          <p>© 2026 Aditya Saputra Setiadi. </p>
        </div>
      </div>
    </footer>
  );
}
