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
    image: '/images/instagram.png'
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/082123789852', 
    image: '/images/wa.png'
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
        <h2 className={`text-4xl font-bold text-black mb-4 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          Let's Connect
        </h2>
        <p className={`text-zinc-600 mb-12 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          Find me on these platforms and let's collaborate
        </p>
        <div className="flex justify-center items-center">
          <div className={`flex gap-6 flex-wrap justify-center transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {socialLinks.map((social, index) => {
              const isInstagram = social.name === 'Instagram';
              return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-90 hover:shadow-2xl ${isInstagram ? 'w-28 h-28 -translate-y-4' : 'w-21 h-21'} flex items-center justify-center rounded-xl ${isInView ? 'animate-scale-in' : 'opacity-0 scale-60'}`}
                style={{ transitionDelay: `${0.05 * index}s` }}
                title={social.name}
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  width={isInstagram ? 110 : 80}
                  height={isInstagram ? 110 : 80}
                  className={`object-contain w-full h-full ${isInstagram ? 'p-0.1' : 'p-1'}`}
                />
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
