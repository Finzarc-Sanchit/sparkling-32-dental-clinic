import { useEffect, useMemo, useState } from 'react';
import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { buildWhatsAppLink } from '../../utils/whatsapp';

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
  indiaInrAvg?: number;
};

const TREATMENTS: Treatment[] = [
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    indiaInrAvg: 45000,
  },
  {
    id: 'root-canal-treatment',
    name: 'Root Canal Treatment',
    indiaInrAvg: 11500,
  },
  {
    id: 'smile-makeover-veneers',
    name: 'Smile Makeover / Veneers',
    indiaInrAvg: 16000,
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    indiaInrAvg: 12000,
  },
  {
    id: 'orthodontics-invisalign',
    name: 'Orthodontics / Invisalign',
    indiaInrAvg: 240000,
  },
  {
    id: 'full-mouth-rehab',
    name: 'Full Mouth Rehab',
    indiaInrAvg: 500000,
  },
];

const STEPS = [
  { n: 1, title: 'Case Review Online', desc: 'We review your case before you travel' },
  { n: 2, title: 'Clear Treatment Plan', desc: 'Transparent plan and expectations' },
  { n: 3, title: 'Schedule in Advance', desc: 'Appointments planned around your trip' },
  { n: 4, title: 'Efficient Treatment', desc: 'Complete treatment within your stay' },
  { n: 5, title: 'Follow-up Support', desc: 'Convenient follow-up coordination' },
] as const;

const WHATSAPP_LINK = buildWhatsAppLink();

export function NriSection() {
  const [rates, setRates] = useState(FALLBACK_RATES);
  const [active, setActive] = useState<CurrencyCode>('INR');
  const [lastUpdate, setLastUpdate] = useState<string>('Loading…');
  const [treatmentId, setTreatmentId] = useState<string>(TREATMENTS[0]?.id ?? 'dental-implants');

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/INR');
        const data = (await res.json()) as { rates?: Record<string, number>; time_last_updated?: number; };
        if (cancelled) return;

        const next = {
          ...FALLBACK_RATES,
          USD: Number(data?.rates?.USD ?? FALLBACK_RATES.USD),
          GBP: Number(data?.rates?.GBP ?? FALLBACK_RATES.GBP),
          AED: Number(data?.rates?.AED ?? FALLBACK_RATES.AED),
          INR: 1,
        } satisfies Record<CurrencyCode, number>;

        setRates(next);
        setLastUpdate(
          typeof data?.time_last_updated === 'number'
            ? new Date(data.time_last_updated * 1000).toLocaleTimeString()
            : 'Updated'
        );
      } catch {
        if (!cancelled) setLastUpdate('Fallback Rates Loaded');
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const formatter = useMemo(() => {
    const formatters: Record<CurrencyCode, Intl.NumberFormat> = {
      USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
      GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
      AED: new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED' }),
      INR: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }),
    };
    return formatters[active];
  }, [active]);

  const selectedTreatment = useMemo(() => {
    return TREATMENTS.find((t) => t.id === treatmentId) ?? TREATMENTS[0]!;
  }, [treatmentId]);

  const hasPricing = typeof selectedTreatment.indiaInrAvg === 'number';
  const convertedAvg = hasPricing ? selectedTreatment.indiaInrAvg! * rates[active] : 0;
  const displayLabel = active === 'INR' ? 'Indian Rupees' : `Approximate in ${active}`;

  return (
    <section className="relative py-24 bg-surface overflow-hidden" id="nri">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 15% 20%, rgba(0,0,0,0.05), transparent 55%), radial-gradient(900px 420px at 85% 80%, rgba(0,0,0,0.04), transparent 55%)',
        }}
      />
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">Dental Treatment in India for NRI Patients</h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto">
            Quality care. Transparent pricing. Planned convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-24">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="text-center p-6 bg-surface-container-lowest/85 rounded-3xl border border-outline-variant/20 shadow-[0_18px_40px_-32px_rgba(0,0,0,0.55)] backdrop-blur relative"
            >
              <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {s.n}
              </div>
              <h5 className="font-bold mb-2">{s.title}</h5>
              <p className="text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 overflow-x-hidden pb-12">
          <div className="min-w-0">
            <div className="mb-5">
              <h2 className="font-medium">Choose your treatment</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TREATMENTS.map((t) => {
                const isActiveRow = t.id === treatmentId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTreatmentId(t.id)}
                    className={[
                      'cursor-default',
                      'w-full rounded-2xl border px-6 py-5 text-left transition-all duration-300 ease-out',
                      isActiveRow
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant/25 bg-surface-container-lowest/85 text-on-surface hover:bg-surface-container-lowest hover:border-outline-variant/35',
                    ].join(' ')}
                  >
                    <div className="font-bold">{t.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-w-0">
            <div className="bg-surface-container-lowest/85 border border-outline-variant/25 p-8 rounded-3xl shadow-[0_32px_60px_-44px_rgba(0,0,0,0.65)] backdrop-blur sticky top-24 w-full max-w-full">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="min-w-0">
                  <p className="text-on-surface-variant mt-1">
                    Estimates update using live exchange rates when available.
                  </p>
                </div>

                <label className="shrink-0 text-right">
                  <div className="text-xs uppercase tracking-wider text-on-surface-variant mb-2">Currency</div>
                  <select
                    value={active}
                    onChange={(e) => setActive(e.target.value as CurrencyCode)}
                    className="h-10 rounded-full border border-outline bg-transparent px-4 text-sm font-bold text-on-surface outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="AED">AED</option>
                  </select>
                </label>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl text-center mb-6">
                <div className="text-sm text-primary font-bold uppercase mb-2">{selectedTreatment.name}</div>
                {hasPricing ? (
                  <div className="text-4xl font-extrabold text-on-surface mb-1">{formatter.format(convertedAvg)}</div>
                ) : (
                  <div className="text-2xl font-extrabold text-on-surface mb-1">Pricing on request</div>
                )}
                <div className="text-sm text-on-surface-variant">{displayLabel}</div>
              </div>

              <p className="text-[10px] text-center text-on-surface-variant opacity-70">
                Rates are approximate. Final cost confirmed at consultation. Last updated: <span>{lastUpdate}</span>
              </p>

              <div className="mt-8 text-center">
                <a
                  className="bg-tertiary text-on-tertiary px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-3 hover:brightness-110 hover:scale-100 active:scale-100 transition-all shadow-xl text-lg w-full max-w-full flex-wrap text-center sm:w-auto"
                  href={WHATSAPP_LINK}
                >
                  <span className="sm:hidden">Get Your Treatment Plan</span>
                  <span className="hidden sm:inline">Get Your Treatment Plan Before You Travel</span>
                  <MaterialIcon name="chat" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

