'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Footer() {
  const { ref, isInView } = useInViewAnimation();
  
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 border-t border-white/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-white/10 pt-8 text-center text-zinc-400 text-sm">
          <p>© 2026 Aditya Saputra Setiadi. </p>
        </div>
      </div>
    </footer>
  );
}
