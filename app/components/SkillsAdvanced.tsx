'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

const skillCategories = [
  {
    category: 'Design & UI/UX',
    icon: '🎨',
    skills: ['Figma', 'canva', 'Capcut', 'Alight motion', ],
  },
 
   {
    category: 'Soft Skills',
    icon: '💡',
    skills: ['Kerja sama tim', 'Disiplin', 'komunikasi',],
  },
];

export default function SkillsAdvanced() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 text-center transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          Skills & Expertise
        </h2>
        <p className={`text-zinc-600 text-center mb-16 max-w-2xl mx-auto transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          A comprehensive set of technical and soft skills developed through years of experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-zinc-50 rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl hover:scale-105 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.1 * idx}s` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-black mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-all"></div>
                    <span className="text-zinc-700 group-hover:text-blue-600 transition-all">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
