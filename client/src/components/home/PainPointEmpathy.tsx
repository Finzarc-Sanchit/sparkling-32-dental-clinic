import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function PainPointEmpathy() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Warm texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(255,237,213,0.35), transparent 55%),
            radial-gradient(ellipse 70% 50% at 90% 85%, rgba(219,234,254,0.25), transparent 55%)
          `,
        }}
      />

      <Container>
        {/* Section label */}
        <Reveal variant="fade" className="mb-4">
          <span className="inline-flex max-w-full flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary/70">
            <span className="w-6 h-px bg-primary/50 inline-block shrink-0" />
            Real concerns. Real answers.
          </span>
        </Reveal>

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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">

          {/* LOCAL PATIENTS — warm card with image */}
          <Reveal variant="slide-left" delay={0.06}>
            <div className="group relative rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/20 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] h-full flex flex-col">
              {/* Photo strip */}
              <div className="relative h-52 overflow-hidden bg-orange-50">
                <img
                  src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&q=80"
                  alt="Patient being welcomed at the clinic"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                {/* Floating label */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  🇮🇳 Local Patients
                </span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="mb-3 leading-snug">
                  "Will it hurt? And what's it going to cost?"
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-1">
                  The two questions every patient asks — and nobody answers clearly.
                  We give you a full written estimate <em>before</em> any procedure starts,
                  and offer sedation options so you feel nothing but calm.
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-3 pt-4 border-t border-outline-variant/20">
                  <Stat value="0₹" label="Hidden fees" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="IV & oral" label="Sedation options" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="Same day" label="Cost estimate" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* NRI PATIENTS — cooler blue toned card */}
          <Reveal variant="slide-right" delay={0.1}>
            <div className="group relative rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/20 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)] h-full flex flex-col">
              <div className="relative h-52 overflow-hidden bg-blue-50">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                  alt="Airplane window view symbolising travel for dental care"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-tertiary text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  ✈️ NRI Patients
                </span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="mb-3 leading-snug">
                  "I'm flying in — can you fit everything into two weeks?"
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-1">
                  Yes — and we've done it hundreds of times. Send us your X-rays before
                  you land, and we'll have your full treatment plan ready on arrival.
                  All coordination happens over WhatsApp, in your timezone.
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-3 pt-4 border-t border-outline-variant/20">
                  <Stat value="Pre-trip" label="Consult via video" accent="tertiary" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="WhatsApp" label="Direct coordinator" accent="tertiary" />
                  <div className="hidden sm:block w-px bg-outline-variant/30" />
                  <Stat value="2 weeks" label="Full smile plan" accent="tertiary" />
                </div>
              </div>
            </div>
          </Reveal>
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