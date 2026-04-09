import { Container } from '../ui/Container';
import { motion, useReducedMotion } from 'framer-motion';

type Step = {
  n: number;
  title: string;
  description: string;
};

const APPROACH_STEPS: readonly Step[] = [
  { n: 1, title: 'Review your case online before you travel', description: '' },
  { n: 2, title: 'Share a clear treatment plan', description: '' },
  { n: 3, title: 'Schedule appointments in advance', description: '' },
  { n: 4, title: 'Complete treatments efficiently within your stay', description: '' },
] as const;

function StepCard({ title, description }: Step) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-on-primary">{title}</h3>
      {description ? <p className="text-on-primary/80">{description}</p> : null}
    </div>
  );
}

export function NriProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-on-primary" id="nri-plan">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 12% 25%, rgba(255,255,255,0.14), transparent 58%), radial-gradient(900px 420px at 88% 75%, rgba(255,255,255,0.10), transparent 55%)',
        }}
      />
      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div>
            <h2 className="text-on-primary">Our Approach for NRI Patients</h2>
          </div>
          <p className="max-w-xl text-on-primary/80 lg:justify-self-end">
            We understand your time is limited. So we keep everything planned, clear, and efficient.
          </p>
        </div>

        <div className="relative z-10 mt-20 lg:mt-48">
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-6xl">
              <div className="absolute left-0 top-4 h-px bg-on-primary/20" style={{ width: '82%' }} />

              <motion.div
                className="absolute left-0 top-4 h-px origin-left bg-on-primary/70"
                style={{ width: '82%' }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={reduce ? undefined : { scaleX: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.6 }}
                transition={reduce ? undefined : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.div
                className="absolute top-4 size-2 -translate-y-1/2 rounded-full bg-on-primary"
                initial={reduce ? false : { left: '0%', opacity: 0 }}
                whileInView={reduce ? undefined : { left: '82%', opacity: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.6 }}
                transition={reduce ? undefined : { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              />

              <div className="grid grid-cols-4 items-start gap-x-24">
                {APPROACH_STEPS.map((s) => (
                  <div key={s.n} className="relative">
                    <div className="absolute left-0 top-4 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex size-10 items-center justify-center rounded-full bg-on-primary text-primary">
                        <span className="text-sm font-semibold tabular-nums">{String(s.n).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <div className="pt-12 lg:-ml-5">
                      <StepCard {...s} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/tablet stack */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-10 w-px bg-on-primary/20" />
              <motion.div
                className="absolute left-5 top-5 bottom-10 w-px origin-top bg-on-primary/70"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.35 }}
                transition={reduce ? undefined : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute left-5 top-5 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-on-primary"
                initial={reduce ? false : { top: '0%', opacity: 0 }}
                whileInView={reduce ? undefined : { top: 'calc(100% - 2.5rem)', opacity: 1 }}
                viewport={reduce ? undefined : { once: true, amount: 0.35 }}
                transition={reduce ? undefined : { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              />

              <div className="grid grid-cols-1 gap-12 pl-16">
                {APPROACH_STEPS.map((s) => (
                  <div key={s.n} className="relative">
                    <div className="absolute -left-4 top-0 -translate-x-[2.85rem]">
                      <div className="flex size-10 items-center justify-center rounded-full bg-on-primary text-primary">
                        <span className="text-sm font-semibold tabular-nums">{String(s.n).padStart(2, '0')}</span>
                      </div>
                    </div>
                    <StepCard {...s} />
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

