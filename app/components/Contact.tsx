'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Contact() {
  const { ref, isInView } = useInViewAnimation();
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-black mb-6 text-center transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>Ready to Work Together?</h2>
        <p className={`text-zinc-600 mb-12 max-w-2xl mx-auto text-center transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          I'm always interested in hearing about new projects and opportunities. Let's create something amazing together!
        </p>
        <div className={`bg-zinc-50 border border-zinc-200 rounded-2xl p-12 transition-all duration-700 ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✉️</div>
              <div>
                <h3 className="font-bold text-black mb-1">Email</h3>
                <a href="mailto:" className="text-blue-600 hover:text-blue-700 transition-smooth">aditiasetiadi24@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="font-bold text-black mb-1">WhatsApp</h3>
                <a href="https://wa.me/0821-2378-9852" className="text-blue-600 hover:text-blue-700 transition-smooth">0821-2378-9852</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="font-bold text-black mb-1">Location</h3>
                <p className="text-zinc-600">Kawali</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl"></div>
              <div>
                
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}
