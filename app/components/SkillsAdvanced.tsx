'use client';

const skillCategories = [
  {
    category: 'Hard Skills',
    skills: ['Figma', 'Canva', 'Capcut', 'Alight motion'],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    category: 'Soft Skills',
    skills: ['Kerja sama tim', 'Disiplin', 'Komunikasi'],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-400'
  },
];

export default function SkillsAdvanced() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center fade-up-enter">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white font-bold text-xs tracking-widest uppercase mb-4 shadow-sm">Kompetensi</div>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">Keahlian <span className="text-gradient-subtle">Utama</span></h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="dark-glass p-10 hover-lift fade-up-enter group relative overflow-hidden rounded-3xl" style={{animationDelay: `${0.1 * idx}s`}}>
              {/* Subtle top border gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-50`}></div>

              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 shadow-sm border border-white/10 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold hover:bg-white/20 hover:text-white hover:shadow-md transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
