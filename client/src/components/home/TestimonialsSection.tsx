import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const maxIndex = useMemo(() => TESTIMONIALS.length - 1, []);

  const scrollToIndex = useCallback((idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const target = children[idx];
    if (!target) return;
    // Use horizontal scroll only (avoid vertical page scroll side-effects).
    const left = target.offsetLeft - 16;
    el.scrollTo({ left, behavior: 'smooth' });
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => {
      const nextIndex = i >= maxIndex ? 0 : i + 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [maxIndex, scrollToIndex]);

  const prev = useCallback(() => {
    setActiveIndex((i) => {
      const nextIndex = i <= 0 ? maxIndex : i - 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [maxIndex, scrollToIndex]);

  useEffect(() => {
    // Auto-scroll only on mobile viewports.
    const mql = window.matchMedia('(min-width: 768px)');
    if (mql.matches) return;

    const el = scrollerRef.current;
    if (!el) return;

    let timer: number | undefined;
    const start = () => {
      stop();
      timer = window.setInterval(() => {
        setActiveIndex((i) => {
          const nextIndex = i >= maxIndex ? 0 : i + 1;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 3800);
    };
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };

    const onUserInteract = () => {
      // Pause briefly after user interaction.
      stop();
      window.setTimeout(start, 4500);
    };

    // Only start if the section is in view (prevents jumping when user is at footer).
    if (isInView && document.visibilityState === 'visible') start();
    el.addEventListener('touchstart', onUserInteract, { passive: true });
    el.addEventListener('scroll', onUserInteract, { passive: true });
    document.addEventListener('visibilitychange', onUserInteract, { passive: true });

    return () => {
      stop();
      el.removeEventListener('touchstart', onUserInteract);
      el.removeEventListener('scroll', onUserInteract);
      document.removeEventListener('visibilitychange', onUserInteract);
    };
  }, [isInView, maxIndex, scrollToIndex]);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    if (mql.matches) {
      setIsInView(false);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.35 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-surface-container-low overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 15% 15%, rgba(255,255,255,0.14), transparent 60%), radial-gradient(900px 420px at 85% 80%, rgba(255,255,255,0.10), transparent 55%)',
        }}
      />
      <Container>
        <h2 className="text-center mb-16">Patients from 30+ countries trust us</h2>

        <div className="relative">
          <div className="sr-only" aria-live="polite">
            Showing testimonial {activeIndex + 1} of {TESTIMONIALS.length}
          </div>
          {/* Mobile-only controls (top aligned) */}
          <div className="md:hidden mb-4 flex items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-lowest/85 border border-outline-variant/25 shadow-sm backdrop-blur transition-colors duration-300 hover:bg-surface-container-lowest"
            >
              <MaterialIcon name="arrow_back" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-lowest/85 border border-outline-variant/25 shadow-sm backdrop-blur transition-colors duration-300 hover:bg-surface-container-lowest"
            >
              <MaterialIcon name="arrow_forward" />
            </button>
          </div>

          <div ref={scrollerRef} className="flex overflow-x-auto gap-8 pb-12 snap-x no-scrollbar">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? 'min-w-[320px] md:min-w-[400px] snap-center bg-primary text-on-primary p-8 rounded-3xl shadow-[0_32px_60px_-44px_rgba(0,0,0,0.65)]'
                  : 'min-w-[320px] md:min-w-[400px] snap-center bg-surface-container-lowest/85 p-8 rounded-3xl border border-outline-variant/20 shadow-[0_22px_44px_-36px_rgba(0,0,0,0.55)] backdrop-blur'
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
              <p className={t.featured ? 'text-white italic mb-4' : 'text-on-surface-variant italic mb-4'}>
                {t.quote}
              </p>
            </div>
          ))}
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative group aspect-video shadow-2xl">
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

