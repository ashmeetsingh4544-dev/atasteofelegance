import { useReveal } from '@/hooks/useReveal';
import { Leaf, Clock, Award } from 'lucide-react';

const aboutImg =
  'https://images.pexels.com/photos/8922199/pexels-photo-8922199.jpeg?auto=compress&cs=tinysrgb&w=1200';
const aboutImg2 =
  'https://images.pexels.com/photos/5086620/pexels-photo-5086620.jpeg?auto=compress&cs=tinysrgb&w=800';

const features = [
  {
    icon: Leaf,
    title: 'Farm to Table',
    desc: 'Locally sourced, seasonal ingredients delivered fresh every morning.',
  },
  {
    icon: Award,
    title: 'Five-Star Rated',
    desc: 'Award-winning cuisine recognized by the International Hotel & Restaurant Awards.'
  },
  {
    icon: Clock,
    title: 'Open Daily',
    desc: 'Serving breakfast, lunch, and dinner from 7am to 11pm, every day.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={ref}
            className={`relative reveal ${visible ? 'visible' : ''}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-coffee-900/20">
              <img
                src={aboutImg}
                alt="Guests enjoying a luxurious hotel dinner"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-4 right-4 w-36 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-cream-50 hidden md:block">
                <img
                  src={aboutImg2}
                  alt="Couple enjoying romantic dinner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative accent frame */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-accent-300 rounded-2xl -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage-200 rounded-2xl -z-10 hidden md:block" />

            {/* Floating badge */}
            <div className="absolute -bottom-8 left-8 bg-cream-50 rounded-xl shadow-xl px-6 py-4 hidden md:block">
              <p className="font-serif text-4xl font-bold text-coffee-800">5★</p>
              <p className="text-sm text-coffee-500">Luxury Hotel Dining</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-accent-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800 leading-tight mb-6">
              A five-star dining experience
            </h2>
            <p className="text-coffee-600 text-lg leading-relaxed mb-6">
              Maison Doré is the signature restaurant of our luxury hotel, where
              guests and visitors gather for unforgettable culinary journeys. Our
              philosophy is simple: world-class cuisine, impeccable service, and
              an atmosphere of refined elegance.
            </p>
            <p className="text-coffee-500 leading-relaxed mb-8">
              Every dish is crafted from scratch by our award-winning chefs using
              the finest seasonal ingredients. From intimate dinners to grand
              celebrations, every moment at Maison Doré is designed to be
              extraordinary.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-3">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-coffee-800 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-coffee-500 leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
