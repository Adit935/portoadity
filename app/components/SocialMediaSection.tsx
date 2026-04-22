'use client';

import Image from 'next/image';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/aditya-saputra-setiadi-b535bb38a/', 
    image: '/images/linkedin.png'
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/ditx.lmo/', 
    image: '/images/ig.png'
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/082123789852', 
    image: '/images/w.png'
  },
  { 
    name: 'TikTok', 
    url: 'https://www.tiktok.com/@adit.dev1?is_from_webapp=1&sender_device=pc', 
    image: '/images/tiktok.png'
  },
];

export default function SocialMediaSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">

        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 transition-all duration-700 
          ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          Let's Connect
        </h2>

        <p className={`text-zinc-600 mb-12 transition-all duration-700 
          ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '0.1s' }}>
          Find me on these platforms and let's collaborate
        </p>

        <div className="flex justify-center items-center">
          <div className={`flex gap-6 flex-wrap justify-center transition-all duration-700 
            ${isInView ? 'opacity-100' : 'opacity-0'}`}>

            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`group transition-all duration-500 
                hover:scale-90 hover:shadow-2xl 
                w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px]
                flex items-center justify-center rounded-xl bg-white
                ${isInView ? 'animate-scale-in' : 'opacity-0 scale-75'}`}
                style={{ transitionDelay: `${0.05 * index}s` }}
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  width={64}
                  height={64}
                  
                  className="object-contain"
                />
              </a>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}