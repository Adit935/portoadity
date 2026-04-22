'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

const stats = [
  { number: '50+', label: 'Projects Completed', icon: '🚀' },
  { number: '30+', label: 'Happy Clients', icon: '😊' },
  { number: '100+', label: 'Code Commits', icon: '💻' },
  { number: '8+', label: 'Years Experience', icon: '⭐' },
];

export default function Statistics() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-700 hover:bg-white/20 hover:scale-110 cursor-pointer ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
