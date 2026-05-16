'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto text-center fade-up-enter">
        <div className="light-glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
          {/* Decorative vibrant blur */}
          <div className="absolute top-[-50%] left-[-10%] w-full h-full bg-gradient-to-br from-blue-300/40 to-purple-300/40 rounded-full blur-[100px] z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-white/50 text-blue-600 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
              Mari Berkolaborasi
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-slate-800 mb-8 tracking-tight">
              Mulai Proyek <span className="text-gradient-vibrant">Baru?</span>
            </h3>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Punya ide menarik atau sedang mencari pengembang untuk tim Anda? Jangan ragu untuk menyapa. Saya selalu terbuka untuk mendiskusikan peluang baru.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href="mailto:aditiasetiadi24@gmail.com" 
                className="px-10 py-5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Email
              </a>
              
              <a 
                href="https://wa.me/6282123789852" 
                className="px-10 py-5 rounded-full bg-white/80 text-slate-800 font-bold hover:bg-white border border-white/60 transition-all w-full sm:w-auto flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
