import { useReveal } from '@/hooks/useReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'Hotel Guest',
    text: 'The most luxurious dining experience I\'ve had. The truffle eggs benedict was exquisite, and the service was impeccable. This is five-star dining at its finest.',
    rating: 5,
  },
  {
    name: 'James Mitchell',
    role: 'Hotel Guest',
    text: 'Every meal here feels like a special occasion. The seared salmon is perfection, the wine list is exceptional, and the staff treat you like royalty.',
    rating: 5,
  },
  {
    name: 'Sophia Laurent',
    role: 'Hotel Guest',
    text: 'Dinner at Maison Doré is unforgettable. The chocolate fondant is divine and the rooftop view at sunset is breathtaking. A true luxury experience.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}
        >
          <p className="text-accent-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            Loved by our guests
          </h2>
          <p className="text-coffee-500 max-w-lg mx-auto">
            Don't just take our word for it — here's what our guests say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-cream-100 rounded-2xl p-8 shadow-lg shadow-coffee-900/5 hover:shadow-xl hover:shadow-coffee-900/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-accent-300 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent-500 fill-accent-500" />
                ))}
              </div>
              <p className="text-coffee-600 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-coffee-200 flex items-center justify-center font-serif text-lg font-bold text-coffee-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif font-semibold text-coffee-800">{t.name}</p>
                  <p className="text-sm text-coffee-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
