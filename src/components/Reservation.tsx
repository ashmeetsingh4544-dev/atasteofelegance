import { useState, type FormEvent } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { supabase } from '@/lib/supabase';
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';

const times = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
  '20:00', '21:00',
];

export default function Reservation() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const today = new Date().toISOString().split('T')[0];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      party_size: parseInt(data.get('party_size') as string, 10),
      reservation_date: data.get('date') as string,
      reservation_time: data.get('time') as string,
      message: (data.get('message') as string) || null,
    };

    const { error } = await supabase.from('reservations').insert(payload);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      form.reset();
    }
  }

  return (
    <section id="reserve" className="py-24 md:py-32 bg-sage-700 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-700 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-10 reveal ${visible ? 'visible' : ''}`}
        >
          <p className="text-accent-300 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Reservations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Book your table
          </h2>
          <p className="text-cream-100/70 max-w-lg mx-auto">
            Reserve your spot and let us take care of the rest. We can't wait to welcome you.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-cream-50 rounded-2xl p-10 text-center shadow-2xl animate-scale-in">
            <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-coffee-800 mb-2">
              Reservation received!
            </h3>
            <p className="text-coffee-500 mb-6">
              We'll send a confirmation email shortly. See you soon at Maison Doré.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 bg-coffee-700 text-cream-50 rounded-full font-medium hover:bg-coffee-600 transition-colors"
            >
              Make another reservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-cream-50 rounded-2xl p-6 md:p-10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 placeholder-coffee-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="jane@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 placeholder-coffee-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 placeholder-coffee-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Party size */}
              <div>
                <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                  Party Size
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <select
                    name="party_size"
                    required
                    defaultValue="2"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="8">8+ guests</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <input
                    name="date"
                    required
                    type="date"
                    min={today}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-coffee-400" />
                  <select
                    name="time"
                    required
                    defaultValue=""
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled>
                      Select time
                    </option>
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="block text-sm font-medium text-coffee-700 mb-1.5">
                Special Requests <span className="text-coffee-400">(optional)</span>
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Allergies, celebrations, seating preferences..."
                className="w-full px-4 py-3 rounded-lg border border-coffee-200 bg-cream-50 text-coffee-800 placeholder-coffee-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Error */}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 w-full py-4 bg-accent-500 text-coffee-900 font-semibold rounded-lg hover:bg-accent-400 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Confirm Reservation'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
