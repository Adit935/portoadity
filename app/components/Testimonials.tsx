'use client';

import { useInViewAnimation } from '../hooks/useInViewAnimation';

const testimonials = [
  
  {
    name: 'Sarah Smith',
    role: 'Product Manager, Digital Agency',
    text: 'Very professional and communicative. Would definitely hire again for future projects.',
    avatar: '👩‍💼',
    rating: 5,
  },

];

export default function Testimonials() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 text-center transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
         What Clients Say
        </h2>
        <p className={`text-zinc-600 text-center mb-16 transition-all duration-700 ${isInView ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          Feedback from my satisfied clients and collaborators
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isInView ? 'animate-scale-in' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-zinc-700 italic">" {testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
