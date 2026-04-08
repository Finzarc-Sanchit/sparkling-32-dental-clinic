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

const BASE_INR = 50000;

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

  const converted = BASE_INR * rates[active];
  const displayLabel = active === 'INR' ? 'Indian Rupees' : `Approximate in ${active}`;

  return (
    <section className="py-24 bg-surface" id="nri">
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">Dental Treatment in India for NRI Patients</h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto">
            Quality care. Transparent pricing. Planned convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-24">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center p-6 bg-surface-container-low rounded-xl relative">
              <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {s.n}
              </div>
              <h5 className="font-bold mb-2">{s.title}</h5>
              <p className="text-on-surface-variant">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12 overflow-x-hidden pb-12">
          <div className="md:col-span-1 min-w-0">
            <div className="bg-surface-container-lowest border-2 border-primary/20 p-8 rounded-xl shadow-xl sticky top-24 w-full max-w-full">
              <h4 className="mb-6 text-center font-bold">Live Savings Calculator</h4>
              <div className="bg-primary/5 p-6 rounded-xl text-center mb-6">
                <div className="text-sm text-primary font-bold uppercase mb-2">Sample Treatment Cost</div>
                <div className="text-4xl font-extrabold text-on-surface mb-1">{formatter.format(converted)}</div>
                <div className="text-sm text-on-surface-variant">{displayLabel}</div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {(['INR', 'USD', 'GBP', 'AED'] as const).map((c) => {
                  const isActive = c === active;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setActive(c)}
                      className={
                        isActive
                          ? 'px-4 py-2 rounded-full border border-primary font-bold text-xs bg-primary text-on-primary'
                          : 'px-4 py-2 rounded-full border border-outline font-bold text-xs'
                      }
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              <p className="text-[10px] text-center text-on-surface-variant opacity-70">
                Rates are approximate. Final cost confirmed at consultation. Last updated: <span>{lastUpdate}</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-2 min-w-0">
            <div className="overflow-x-auto w-full max-w-full bg-surface-container-lowest rounded-xl shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="p-6 font-bold text-on-surface">Treatment</th>
                    <th className="p-6 font-bold text-primary">India (Us)</th>
                    <th className="p-6 font-bold text-on-surface-variant">UK (NHS/Prv)</th>
                    <th className="p-6 font-bold text-on-surface-variant">USA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr>
                    <td className="p-6 font-semibold">Dental Implant</td>
                    <td className="p-6 font-bold text-primary">₹35k - 55k</td>
                    <td className="p-6 text-on-surface-variant">£2.5k - 3.5k</td>
                    <td className="p-6 text-on-surface-variant">$3k - 5k</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold">Root Canal</td>
                    <td className="p-6 font-bold text-primary">₹8k - 15k</td>
                    <td className="p-6 text-on-surface-variant">£500 - 900</td>
                    <td className="p-6 text-on-surface-variant">$800 - 1.5k</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold">Veneers (Each)</td>
                    <td className="p-6 font-bold text-primary">₹12k - 20k</td>
                    <td className="p-6 text-on-surface-variant">£600 - 1.2k</td>
                    <td className="p-6 text-on-surface-variant">$900 - 2.5k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 pb-8 text-center">
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
      </Container>
    </section>
  );
}

