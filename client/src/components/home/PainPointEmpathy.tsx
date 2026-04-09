import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import painPointEmpathyImg from '@/assets/pain-point-1.jpg';

export function PainPointEmpathy() {
  return (
    <section className="relative py-28 overflow-hidden">

      <Container>

        {/* Big heading */}
        <Reveal variant="slide-up" delay={0.04} className="mb-16 max-w-2xl">
          <h2 className="leading-tight">
            We know why you{' '}
            <span className="relative inline-block">
              haven't booked yet.
              {/* Hand-drawn underline SVG */}
              <svg
                aria-hidden
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 260 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9 C40 3, 100 11, 160 5 C200 1, 240 9, 258 6"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
            </span>
          </h2>
        </Reveal>

        {/* Two-story layout */}
        <div className="space-y-20">
          {/* LOCAL PATIENTS — text left, image right */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="slide-up" delay={0.06}>
              <div>
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary/70">
                    <span className="h-px w-6 bg-primary/50" />
                    Local Patients
                  </span>
                </div>
                <h3 className="mb-3 leading-snug">"Will it hurt? And what's it going to cost?"</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  The two questions every patient asks — and nobody answers clearly. We give you a full written estimate{' '}
                  <em>before</em> any procedure starts, and offer sedation options so you feel nothing but calm.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-3 pt-4 border-t border-outline-variant/20">
                  <Stat value="0₹" label="Hidden fees" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="IV & oral" label="Sedation options" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="Same day" label="Cost estimate" />
                </div>
              </div>
            </Reveal>

            <Reveal variant="slide-up" delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.5rem] bg-surface-container-lowest ring-1 ring-outline-variant/20 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.28)]">
                <img
                  src={painPointEmpathyImg}
                  alt="Patient being welcomed at the clinic"
                  className="h-80 w-full object-cover object-top md:h-[26rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>

          {/* NRI PATIENTS — image left, text right (md+), text first (mobile) */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal variant="slide-up" delay={0.1} className="order-1 md:order-2">
              <div>
                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-tertiary/80">
                    <span className="h-px w-6 bg-tertiary/50" />
                    NRI Patients
                  </span>
                </div>
                <h3 className="mb-3 leading-snug">"I'm flying in — can you fit everything into two weeks?"</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Yes — and we've done it hundreds of times. Send us your X-rays before you land, and we'll have your full
                  treatment plan ready on arrival. All coordination happens over WhatsApp, in your timezone.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-3 pt-4 border-t border-outline-variant/20">
                  <Stat value="Pre-trip" label="Consult via video" accent="tertiary" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="WhatsApp" label="Direct coordinator" accent="tertiary" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="2 weeks" label="Full smile plan" accent="tertiary" />
                </div>
              </div>
            </Reveal>

            <Reveal variant="slide-up" delay={0.06} className="order-2 md:order-1">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-surface-container-lowest ring-1 ring-outline-variant/20 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.28)]">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
                  alt="Airplane window view symbolising travel for dental care"
                  className="h-80 w-full object-cover object-center md:h-[26rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom reassurance line */}
        <Reveal variant="fade" delay={0.15} className="mt-12 text-center">
          <p className="text-on-surface-variant">
            Both paths lead to the same place —{' '}
            <span className="text-on-surface font-medium">leaving with a smile you're proud of.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

// Small inline stat component
function Stat({
  value,
  label,
  accent = 'primary',
}: {
  value: string;
  label: string;
  accent?: 'primary' | 'tertiary';
}) {
  return (
    <div className="flex flex-col gap-0.5 min-w-0">
      <span
        className={`text-sm font-bold truncate ${accent === 'tertiary' ? 'text-tertiary' : 'text-primary'
          }`}
      >
        {value}
      </span>
      <span className="text-xs text-on-surface-variant truncate">{label}</span>
    </div>
  );
}