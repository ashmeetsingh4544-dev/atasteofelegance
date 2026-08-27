import { useReveal } from '@/hooks/useReveal';

const images = [
  {
    url: 'https://images.pexels.com/photos/8922199/pexels-photo-8922199.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Group enjoying a classy hotel dinner with waiter service',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/5086620/pexels-photo-5086620.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Couple enjoying a romantic dinner with wine',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/3926216/pexels-photo-3926216.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Three women enjoying a sophisticated hotel dinner',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/37686900/pexels-photo-37686900.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Luxurious restaurant table setting with elegant decor',
    span: 'md:col-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/8775063/pexels-photo-8775063.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sophisticated dinner gathering with wine and elegant setting',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegant rooftop restaurant with poolside dining at sunset',
    span: '',
  },
];

export default function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}
        >
          <p className="text-accent-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            A world of luxury
          </h2>
          <p className="text-coffee-500 max-w-xl mx-auto">
            From intimate dinners to grand celebrations, every moment is unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-lg ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
