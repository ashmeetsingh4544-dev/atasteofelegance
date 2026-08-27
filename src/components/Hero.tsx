import { ArrowDown, Star } from 'lucide-react';

const heroImg =
  'https://images.pexels.com/photos/3775172/pexels-photo-3775172.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxurious hotel restaurant with guests dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/70 via-coffee-900/50 to-coffee-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <div className="flex items-center justify-center gap-1 mb-6 opacity-0-init animate-fade-down animation-delay-200">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
          ))}
        </div>

        <p className="text-accent-300 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 opacity-0-init animate-fade-up animation-delay-200">
          Luxury Hotel Dining
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream-50 leading-tight text-balance opacity-0-init animate-fade-up animation-delay-400">
          A Taste of
          <span className="block italic text-accent-300 mt-2">Luxury</span>
        </h1>

        <p className="mt-6 text-cream-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0-init animate-fade-up animation-delay-600">
          Where world-class cuisine meets timeless elegance. Savor exquisite dishes
          and unforgettable moments in our award-winning hotel restaurant.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-init animate-fade-up animation-delay-800">
          <a
            href="#reserve"
            className="px-8 py-4 bg-accent-500 text-coffee-900 font-semibold rounded-full hover:bg-accent-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-500/30"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border-2 border-cream-100/40 text-cream-50 font-semibold rounded-full hover:bg-cream-50/10 hover:border-cream-100/70 transition-all duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream-100/70 hover:text-cream-50 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
