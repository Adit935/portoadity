'use client';

import Image from 'next/image';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function About() {
  const { ref, isInView } = useInViewAnimation();

  return (

    

    <section id="about" className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold text-black mb-12 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Profile Photo */}
          <div className={`md:col-span-1 flex justify-center transition-all duration-700 ${isInView ? 'animate-slide-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm animate-float">
                18+ Years
              </div>
            </div>
          </div>

          {/* Bio and Stats */}
          <div className={`md:col-span-2 transition-all duration-700 ${isInView ? 'animate-slide-right' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4 text-zinc-600 mb-8">
              <p className="text-lg">
                Saya menguasai pengembangan aplikasi web dan mobile, serta memiliki ketertarikan dalam desain
UI/UX untuk menciptakan tampilan yang menarik dan fungsional. Didukung dengan pemahaman
yang baik mengenai berbagai jenis perangkat seluler (smartphone), saya mampu menyesuaikan
solusi teknologi dengan kebutuhan pengguna. Saya juga memiliki kemampuan bekerja sama dalam
tim, disiplin, serta komunikasi yang baik.
              </p>
              </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
             
                
        
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
