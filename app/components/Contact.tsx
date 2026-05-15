'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Contact() {
  const { ref, isInView } = useInViewAnimation();
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 text-center transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>Siap Bekerja Sama?</h2>
        <p className={`text-zinc-600 mb-12 max-w-2xl mx-auto text-center transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          Saya selalu tertarik untuk mendiskusikan proyek dan peluang baru. Mari ciptakan sesuatu yang luar biasa bersama!
        </p>
          <div className={`bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 md:p-12 transition-all duration-700 ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M20 4H4C2.895 4 2 4.895 2 6v12c0 1.105.895 2 2 2h16c1.104 0 2-.895 2-2V6c0-1.105-.896-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l7.396 4.932c.264.176.578.176.843 0L20 8.489V18H4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Email</h3>
                <a href="mailto:aditiasetiadi24@gmail.com" className="text-blue-600 hover:text-blue-700 transition-smooth">aditiasetiadi24@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0016.96 0h-4.91z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">WhatsApp</h3>
                <a href="https://wa.me/6282123789852" className="text-blue-600 hover:text-blue-700 transition-smooth">0821-2378-9852</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-violet-100 text-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.381 0-2.5-1.119-2.5-2.5S10.619 6.5 12 6.5s2.5 1.119 2.5 2.5S13.381 11.5 12 11.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-black mb-1">Lokasi</h3>
                <p className="text-zinc-600">Kawali</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}
