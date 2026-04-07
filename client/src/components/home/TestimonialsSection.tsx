import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins 🇬🇧',
    treatment: 'Dental Implants',
    stars: '⭐⭐⭐⭐⭐',
    featured: false,
    quote:
      '"The standard of care was significantly higher than my dentist in London. Dr. and his team planned everything perfectly for my 2-week trip."',
  },
  {
    name: 'Rajesh Kumar 🇦🇪',
    treatment: 'Full Mouth Rehab',
    stars: '⭐⭐⭐⭐⭐',
    featured: true,
    quote:
      '"Absolutely transparent pricing. No hidden costs. They even sent a car to pick me up from the airport. Best decision for my dental health."',
  },
  {
    name: 'Michael S. 🇺🇸',
    treatment: 'Smile Makeover',
    stars: '⭐⭐⭐⭐⭐',
    featured: false,
    quote:
      '"Top notch technology! Used digital scanning instead of messy molds. My veneers look incredibly natural. Highly recommend!"',
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">Patients from 30+ countries trust us</h2>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? 'min-w-[320px] md:min-w-[400px] snap-center bg-primary text-on-primary p-8 rounded-xl shadow-xl'
                  : 'min-w-[320px] md:min-w-[400px] snap-center bg-surface-container-lowest p-8 rounded-xl shadow-sm'
              }
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className={t.featured ? 'text-primary-fixed text-sm font-semibold' : 'text-primary text-sm font-semibold'}>
                    {t.treatment}
                  </div>
                </div>
                <div className={t.featured ? 'text-primary-fixed' : 'text-tertiary'}>{t.stars}</div>
              </div>
              <p className={t.featured ? 'leading-relaxed text-white italic mb-4' : 'text-on-surface-variant leading-relaxed italic mb-4'}>
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto rounded-xl overflow-hidden relative group aspect-video shadow-2xl">
          <img
            alt="Clinic Interior Video Placeholder"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDq0qGL3FjdI8UJQ3QUpVMMxsE00fEfMrcOiqf0xAvQHJlq56hTsdfi1sHeocFc9PkJaFuMI2zzSq0M-b016xRa0cGu-Dk-3FrpUC41VQH8Jt470SlaayPOMbN1sEnFSQRpu4hDNSu4FpCcUCNsZH3AS-8sbemxur1w3zLgTyghA8-At_EB8EpUcQJi7kibDqDgVFy0uZ4AisZr05tkG9j1XOwRAQAYiMEgWRD5ZKugb__p7f2Z064v8uE1kDBzorx-uhvvKUdf-0"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl active:scale-90 transition-transform">
              <MaterialIcon name="play_arrow" filled className="text-4xl" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="font-bold text-lg">Video Testimonial</div>
            <div className="text-sm opacity-80">"My experience as an NRI patient"</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

