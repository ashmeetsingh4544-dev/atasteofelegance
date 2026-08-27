import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Star } from 'lucide-react';

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  rating: number;
  tag?: string;
};

type Category = {
  id: string;
  label: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      {
        name: 'Truffle Eggs Benedict',
        desc: 'Poached eggs, hollandaise, truffle oil on brioche',
        price: '$18',
        rating: 5,
        tag: 'Signature',
      },
      {
        name: 'Avocado Toast',
        desc: 'Smashed avocado, cherry tomato, microgreens, sourdough',
        price: '$14',
        rating: 4,
      },
      {
        name: 'French Toast',
        desc: 'Brioche, vanilla custard, maple syrup, fresh berries',
        price: '$16',
        rating: 5,
      },
      {
        name: 'Granola Bowl',
        desc: 'House granola, Greek yogurt, seasonal fruit, honey',
        price: '$12',
        rating: 4,
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      {
        name: 'Seared Salmon',
        desc: 'Atlantic salmon, lemon butter, asparagus, dill',
        price: '$28',
        rating: 5,
        tag: 'Chef\'s Pick',
      },
      {
        name: 'Wild Mushroom Risotto',
        desc: 'Arborio rice, porcini, parmesan, white truffle',
        price: '$24',
        rating: 5,
      },
      {
        name: 'Grilled Ribeye',
        desc: '12oz ribeye, herb butter, roasted vegetables, jus',
        price: '$38',
        rating: 5,
      },
      {
        name: 'Garden Pasta',
        desc: 'Fresh tagliatelle, seasonal vegetables, olive oil',
        price: '$22',
        rating: 4,
      },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee & Tea',
    items: [
      {
        name: 'Flat White',
        desc: 'Double ristretto, steamed milk, velvety microfoam',
        price: '$6',
        rating: 5,
        tag: 'Popular',
      },
      {
        name: 'Pour Over',
        desc: 'Single origin, hand-brewed, rotating selection',
        price: '$7',
        rating: 4,
      },
      {
        name: 'Matcha Latte',
        desc: 'Ceremonial grade matcha, steamed milk, honey',
        price: '$7',
        rating: 4,
      },
      {
        name: 'Chai Latte',
        desc: 'House spiced chai, steamed milk, cinnamon',
        price: '$6',
        rating: 5,
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        desc: 'Espresso-soaked ladyfingers, mascarpone, cocoa',
        price: '$12',
        rating: 5,
        tag: 'Classic',
      },
      {
        name: 'Chocolate Fondant',
        desc: 'Warm molten center, vanilla bean ice cream',
        price: '$14',
        rating: 5,
      },
      {
        name: 'Berry Cheesecake',
        desc: 'New York style, mixed berry compote, graham crust',
        price: '$11',
        rating: 4,
      },
      {
        name: 'Crème Brûlée',
        desc: 'Vanilla custard, caramelized sugar, fresh mint',
        price: '$10',
        rating: 5,
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState('breakfast');
  const { ref, visible } = useReveal();

  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 md:py-32 bg-coffee-800 relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent-300 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-sage-400 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}
        >
          <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Crafted with care
          </h2>
          <p className="text-cream-100/70 max-w-xl mx-auto">
            A seasonal selection of dishes and drinks, made fresh throughout the day.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? 'bg-accent-500 text-coffee-900 shadow-lg shadow-accent-500/20'
                  : 'bg-cream-50/10 text-cream-100 hover:bg-cream-50/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {current.items.map((item, i) => (
            <div
              key={item.name}
              className="group flex gap-4 items-start animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-serif text-xl font-semibold text-cream-50 group-hover:text-accent-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="flex-1 border-b border-dashed border-cream-100/20 mb-1" />
                  <span className="font-serif text-lg font-bold text-accent-300">
                    {item.price}
                  </span>
                </div>
                <p className="text-cream-100/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`w-3.5 h-3.5 ${
                          j < item.rating
                            ? 'text-accent-400 fill-accent-400'
                            : 'text-cream-100/20 fill-cream-100/20'
                        }`}
                      />
                    ))}
                  </div>
                  {item.tag && (
                    <span className="text-xs font-medium text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
