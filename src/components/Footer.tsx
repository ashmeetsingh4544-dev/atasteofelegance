import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-cream-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-7 h-7 text-accent-400" />
              <span className="font-serif text-2xl font-bold text-cream-50">
                Maison Doré
              </span>
            </div>
            <p className="text-cream-100/60 text-sm leading-relaxed mb-4">
              A five-star luxury hotel restaurant serving world-class cuisine,
              fine wines, and handcrafted desserts since 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center hover:bg-accent-500 hover:text-coffee-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center hover:bg-accent-500 hover:text-coffee-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream-50/10 flex items-center justify-center hover:bg-accent-500 hover:text-coffee-900 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Reservations', href: '#reserve' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream-100/60 hover:text-accent-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-cream-100/60">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />
                <span>Mon – Thu: 7am – 10pm</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />
                <span>Fri – Sat: 7am – 11pm</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />
                <span>Sunday: 8am – 9pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-cream-100/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />
                <span>42 Rue de la Paix, Old Town</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />
                <span>(555) 234-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent-400 shrink-0" />
                <span>hello@maisondore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-100/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-cream-100/40">
            © 2026 Maison Doré. All rights reserved.
          </p>
          <p className="text-sm text-cream-100/40">
            Crafted with passion & five-star service.
          </p>
        </div>
      </div>
    </footer>
  );
}
