import { useEffect, useMemo, useState } from 'react';
import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { Reveal } from '../ui/Reveal';
import dentalImplants from '@/assets/services/dental-implant.jpg';
import rootCanalTreatment from '@/assets/services/root-canal.jpg';
import smileMakeoverVeneers from '@/assets/services/smile-makeover.jpg';
import teethWhitening from '@/assets/services/tooth-whitening.jpg';
import orthodonticsInvisalign from '@/assets/services/orthodontics-invisalign.jpg';
import fullMouthRehab from '@/assets/services/full-mouth.jpg';

type CurrencyCode = 'INR' | 'USD' | 'GBP' | 'AED';

const FALLBACK_RATES: Record<CurrencyCode, number> = {
  USD: 0.012,
  GBP: 0.0094,
  AED: 0.044,
  INR: 1,
};

type Treatment = {
  id: string;
  name: string;
  shortName: string;
  indiaInrAvg?: number;
};

const TREATMENTS: Treatment[] = [
  { id: 'dental-implants', name: 'Dental Implants', shortName: 'Implants', indiaInrAvg: 45000 },
  { id: 'root-canal-treatment', name: 'Root Canal', shortName: 'Root Canal', indiaInrAvg: 11500 },
  { id: 'smile-makeover-veneers', name: 'Veneers', shortName: 'Veneers', indiaInrAvg: 16000 },
  { id: 'teeth-whitening', name: 'Whitening', shortName: 'Whitening', indiaInrAvg: 12000 },
  { id: 'orthodontics-invisalign', name: 'Invisalign', shortName: 'Invisalign', indiaInrAvg: 240000 },
  { id: 'full-mouth-rehab', name: 'Full Mouth Rehab', shortName: 'Full Rehab', indiaInrAvg: 500000 },
];

const STEPS = [
  { n: 1, title: 'Case Review', desc: 'Online, before you travel' },
  { n: 2, title: 'Treatment Plan', desc: 'Transparent pricing' },
  { n: 3, title: 'Schedule Trip', desc: 'Around your dates' },
  { n: 4, title: 'Efficient Care', desc: 'Within your stay' },
  { n: 5, title: 'Follow-up', desc: 'Remote support after' },
] as const;

const STATS = [
  { value: '500+', label: 'NRI patients treated' },
  { value: '4.9★', label: 'Average patient rating' },
  { value: '20+', label: "Countries we've served" },
];

const PATIENT_QUOTE = {
  text: 'I flew in from Dubai for implants. The planning was seamless, the care was exceptional — and I saved over ₹2 lakhs compared to what I was quoted back home.',
  name: 'Riya S.',
  location: 'Abu Dhabi, UAE',
};

const WHATSAPP_LINK = buildWhatsAppLink();

const NRI_PHOTO_POOL = [
  dentalImplants,
  rootCanalTreatment,
  smileMakeoverVeneers,
  teethWhitening,
  orthodonticsInvisalign,
  fullMouthRehab,
] as const;

function stableHash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) {
    h = (h * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pickPhoto(seed: string, offset = 0) {
  const idx = (stableHash(seed) + offset) % NRI_PHOTO_POOL.length;
  return NRI_PHOTO_POOL[idx]!;
}

function meaningfulShape(seed: string) {
  // Single-contour concave notch shapes (no holes) for reliable clip-path rendering.
  const shapes = [
    // Bottom-right scoop (matches reference)
    "md:[clip-path:path('M 88 0 H 912 C 961 0 1000 39 1000 88 V 740 C 1000 760 986 778 965 782 C 900 794 860 846 860 914 V 912 C 860 961 821 1000 772 1000 H 88 C 39 1000 0 961 0 912 V 88 C 0 39 39 0 88 0 Z')]",
    // Same scoop, slightly larger for variety
    "md:[clip-path:path('M 88 0 H 912 C 961 0 1000 39 1000 88 V 720 C 1000 744 981 765 956 768 C 875 778 820 844 820 930 V 912 C 820 961 781 1000 732 1000 H 88 C 39 1000 0 961 0 912 V 88 C 0 39 39 0 88 0 Z')]",
  ] as const;
  return shapes[stableHash(seed) % shapes.length];
}

function formatINR(n: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
}

function formatForeign(n: number, currency: 'USD' | 'GBP' | 'AED') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(n);
}

export function NriSection() {
  const [rates, setRates] = useState(FALLBACK_RATES);
  const [treatmentId, setTreatmentId] = useState<string>(TREATMENTS[0]?.id ?? '');

  useEffect(() => {
    async function run() {
      try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/INR');
        const data = (await res.json()) as { rates?: Record<string, number>; };
        setRates({
          ...FALLBACK_RATES,
          USD: Number(data?.rates?.USD ?? FALLBACK_RATES.USD),
          GBP: Number(data?.rates?.GBP ?? FALLBACK_RATES.GBP),
          AED: Number(data?.rates?.AED ?? FALLBACK_RATES.AED),
          INR: 1,
        });
      } catch {
        // keep fallback rates
      }
    }
    run();
  }, []);

  const selectedTreatment = useMemo(
    () => TREATMENTS.find((t) => t.id === treatmentId) ?? TREATMENTS[0]!,
    [treatmentId]
  );

  const hasPricing = typeof selectedTreatment.indiaInrAvg === 'number';
  const inrAvg = selectedTreatment.indiaInrAvg ?? 0;

  return (
    <section className="relative py-20 bg-surface overflow-hidden" id="nri">
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 800px 400px at 10% 30%, rgba(0,0,0,0.04), transparent 60%), radial-gradient(ellipse 600px 300px at 90% 70%, rgba(0,0,0,0.03), transparent 60%)',
        }}
      />

      <Container>
        {/* ── TOP: Editorial header + stats ── */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
          <Reveal variant="fade" className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-[0.15em] text-primary font-semibold mb-3">
              For NRI &amp; International Patients
            </p>
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              World-class dental care.
              <br />
              <span className="text-primary">Right at home.</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-lg">
              Plan your treatment before you land. Complete it during your visit. Leave with a smile that lasts.
            </p>
          </Reveal>

          <Reveal variant="slide-left" className="shrink-0">
            <div className="flex gap-6 md:gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-on-surface tracking-tight">{s.value}</div>
                  <div className="text-xs text-on-surface-variant mt-0.5 whitespace-nowrap">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── MIDDLE: Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 mb-16">

          {/* LEFT: Photos + quote */}
          <Reveal variant="fade" className="flex flex-col gap-4">
            {/* Large primary photo */}
            <div
              className={[
                'relative overflow-hidden bg-surface-container aspect-[4/3] rounded-3xl ring-1 ring-outline-variant/25',
                // meaningful irregular shape on desktop; keep rounded corners on mobile
                meaningfulShape('nri-large'),
              ].join(' ')}
            >
              <img
                src={pickPhoto('nri-large', 1)}
                alt="Our modern dental clinic"
                className="w-full h-full object-cover"
              />
              {/* Warm overlay */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)',
                }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full">
                  Nashik, India
                </span>
              </div>
            </div>

            {/* Two small photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={[
                  'overflow-hidden bg-surface-container aspect-square rounded-2xl ring-1 ring-outline-variant/25',
                  meaningfulShape('nri-small-1'),
                ].join(' ')}
              >
                <img
                  src={pickPhoto('nri-small-1', 3)}
                  alt="Patient consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={[
                  'overflow-hidden bg-surface-container aspect-square rounded-2xl ring-1 ring-outline-variant/25',
                  meaningfulShape('nri-small-2'),
                ].join(' ')}
              >
                <img
                  src={pickPhoto('nri-small-2', 5)}
                  alt="Treatment in progress"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Patient quote */}
            <blockquote
              className="p-5 rounded-xl bg-surface-container-lowest/85 backdrop-blur"
              style={{ borderLeft: '3px solid var(--color-primary, currentColor)' }}
            >
              <p className="text-on-surface text-sm leading-relaxed italic mb-3">
                "{PATIENT_QUOTE.text}"
              </p>
              <footer className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-on-surface">{PATIENT_QUOTE.name}</span>
                  <span className="text-on-surface-variant text-xs ml-2">{PATIENT_QUOTE.location}</span>
                </div>
                <span className="text-amber-400 text-sm tracking-tight">★★★★★</span>
              </footer>
            </blockquote>
          </Reveal>

          {/* RIGHT: Pricing calculator */}
          <Reveal variant="slide-left">
            <div className="bg-surface-container-lowest/90 border border-outline-variant/25 rounded-3xl p-7 shadow-[0_32px_64px_-40px_rgba(0,0,0,0.55)] backdrop-blur sticky top-24">

              <h3 className="font-bold text-lg mb-1 text-on-surface">Estimate your treatment cost</h3>
              <p className="text-sm text-on-surface-variant mb-6">Live exchange rates · prices confirmed at consultation</p>

              {/* Treatment pill tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TREATMENTS.map((t) => {
                  const isActive = t.id === treatmentId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTreatmentId(t.id)}
                      className={[
                        'cursor-default px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                        isActive
                          ? 'bg-primary text-on-primary shadow-md scale-105'
                          : 'bg-surface-container text-on-surface-variant border border-outline-variant/30 hover:border-outline-variant/60',
                      ].join(' ')}
                    >
                      {t.shortName}
                    </button>
                  );
                })}
              </div>

              {/* Price display */}
              <div className="bg-primary/6 rounded-2xl p-6 mb-4 text-center">
                {hasPricing ? (
                  <>
                    <div className="text-5xl font-extrabold text-on-surface tracking-tight mb-1" style={{ letterSpacing: '-0.03em' }}>
                      {formatINR(inrAvg)}
                    </div>
                    <div className="text-sm text-on-surface-variant mb-3">{selectedTreatment.name}</div>
                    {/* All 3 currencies at once */}
                    <div className="text-sm text-on-surface-variant/80 font-medium">
                      ≈&nbsp;
                      <span className="text-on-surface">{formatForeign(inrAvg * rates.USD, 'USD')}</span>
                      <span className="mx-2 opacity-30">·</span>
                      <span className="text-on-surface">{formatForeign(inrAvg * rates.GBP, 'GBP')}</span>
                      <span className="mx-2 opacity-30">·</span>
                      <span className="text-on-surface">{formatForeign(inrAvg * rates.AED, 'AED')}</span>
                    </div>
                  </>
                ) : (
                  <div className="text-2xl font-bold text-on-surface">Pricing on request</div>
                )}
              </div>

              {/* Savings badge */}
              <div className="flex items-center justify-center gap-2 mb-6 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full px-4 py-2 text-sm font-semibold">
                <span>✦</span>
                <span>Save up to 80% vs UK &amp; US prices</span>
              </div>

              {/* CTA */}
              <a
                href={WHATSAPP_LINK}
                className="flex items-center justify-center gap-3 w-full bg-primary text-on-primary font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-lg text-base"
              >
                <span>Get My Treatment Plan</span>
                <MaterialIcon name="chat" />
              </a>

              <p className="text-[10px] text-center text-on-surface-variant/60 mt-4">
                No commitment. We review your case and respond within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── BOTTOM: Journey timeline strip ── */}
        <Reveal variant="fade">
          <div className="border border-outline-variant/20 bg-surface-container-lowest/60 rounded-2xl px-6 py-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.12em] text-on-surface-variant font-semibold mb-5 text-center">
              How it works
            </p>
            <div className="flex items-start justify-between gap-2 relative">
              {/* Connecting line */}
              <div
                aria-hidden
                className="absolute top-4 left-[calc(10%)] right-[calc(10%)] h-px bg-outline-variant/30"
                style={{ zIndex: 0 }}
              />
              {STEPS.map((s) => (
                <div key={s.n} className="flex flex-col items-center text-center gap-2 flex-1 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface text-xs">{s.title}</p>
                    <p className="text-on-surface-variant text-[11px] leading-tight mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}