import { Container } from '../ui/Container';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  { n: 1, title: 'Case Review Online', desc: 'We review your case before you travel' },
  { n: 2, title: 'Clear Treatment Plan', desc: 'Transparent plan and expectations' },
  { n: 3, title: 'Schedule in Advance', desc: 'Appointments planned around your trip' },
  { n: 4, title: 'Efficient Treatment', desc: 'Complete treatment within your stay' },
  { n: 5, title: 'Follow-up Support', desc: 'Convenient follow-up coordination' },
] as const;

export function HomeProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface py-24 text-on-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 12% 25%, rgba(0,0,0,0.05), transparent 58%), radial-gradient(900px 420px at 88% 75%, rgba(0,0,0,0.04), transparent 55%)',
        }}
      />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div>
            <h2>How we plan your treatment</h2>
          </div>
          <p className="max-w-xl text-on-surface-variant lg:justify-self-end">
            A clear, travel-friendly process that keeps timelines predictable and care comfortable.
          </p>
        </div>

        <div className="relative z-10 mt-20">
          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="relative mx-auto max-w-6xl">
              <div className="absolute left-0 top-4 h-px bg-outline-variant/25" style={{ width: '88%' }} />

              <motion.div
                className="absolute left-0 top-4 h-px origin-left bg-primary/70"
                style={{ width: '88%' }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={reduce ? undefined : { scaleX: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.6 }}
                transition={reduce ? undefined : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.div
                className="absolute top-4 size-2 -translate-y-1/2 rounded-full bg-primary"
                initial={reduce ? false : { left: '0%', opacity: 0 }}
                whileInView={reduce ? undefined : { left: '87%', opacity: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.6 }}
                transition={reduce ? undefined : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              />

              <div className="grid grid-cols-5 items-start gap-x-16 lg:gap-x-24">
                {STEPS.map((s) => (
                  <div key={s.n} className="relative">
                    <div className="absolute left-0 top-4 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm">
                        <span className="text-sm font-semibold tabular-nums">{String(s.n).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="pt-12 lg:-ml-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-on-surface">{s.title}</h3>
                        <p className="text-on-surface-variant text-xs sm:text-sm">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-10 w-px bg-outline-variant/25" />
              <motion.div
                className="absolute left-5 top-5 bottom-10 w-px origin-top bg-primary/70"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.35 }}
                transition={reduce ? undefined : { duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute left-5 top-5 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                initial={reduce ? false : { top: '0%', opacity: 0 }}
                whileInView={reduce ? undefined : { top: 'calc(100% - 2.5rem)', opacity: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.35 }}
                transition={reduce ? undefined : { duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              />

              <div className="grid grid-cols-1 gap-12 pl-16">
                {STEPS.map((s) => (
                  <div key={s.n} className="relative">
                    <div className="absolute -left-4 top-0 -translate-x-[2.85rem]">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm">
                        <span className="text-sm font-semibold tabular-nums">{String(s.n).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-on-surface">{s.title}</h3>
                      <p className="text-on-surface-variant text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

