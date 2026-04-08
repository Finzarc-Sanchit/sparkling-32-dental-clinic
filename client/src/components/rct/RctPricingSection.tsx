import { useMemo, useState } from 'react';
import { Container } from '../ui/Container';

type Currency = 'INR' | 'USD' | 'GBP' | 'AED';

const DISPLAY: Record<Currency, { investment: string; usa: string; mumbai: string; }> = {
  INR: { investment: '₹8,000 – ₹15,000', usa: '$800 – $1,500', mumbai: '~$100 – $180' },
  USD: { investment: '$100 – $180', usa: '$800 – $1,500', mumbai: '$100 – $180' },
  GBP: { investment: '£80 – £150', usa: '$800 – $1,500', mumbai: '£80 – £150' },
  AED: { investment: 'AED 450 – 800', usa: '$800 – $1,500', mumbai: 'AED 450 – 800' },
};

export function RctPricingSection() {
  const [currency, setCurrency] = useState<Currency>('INR');

  const display = useMemo(() => DISPLAY[currency], [currency]);

  return (
    <section className="py-24 bg-primary text-on-primary-container overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-6">Transparent Pricing</h2>
            <p className="mb-12 opacity-90 text-white">
              Honest, upfront costs with no hidden fees. We provide premium care that is accessible to both local and
              international patients.
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-center items-start sm:justify-between mb-8 gap-4 sm:gap-6 min-w-0">
                <span className="text-lg font-semibold">Currency Toggle</span>
                <div className="flex flex-wrap bg-white/20 p-1 rounded-full max-w-full">
                  {(['INR', 'USD', 'GBP', 'AED'] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCurrency(c)}
                      className={
                        c === currency
                          ? 'px-3 sm:px-4 py-1 rounded-full bg-white text-primary font-bold'
                          : 'px-3 sm:px-4 py-1 rounded-full hover:bg-white/10 transition-colors'
                      }
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center py-6">
                <p className="opacity-80 mb-2 text-white">Investment per tooth</p>
                <h3>{display.investment}</h3>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[2.5rem] p-12 text-on-background relative">
            <div className="inline-flex sm:absolute mb-6 sm:mb-0 sm:-top-6 sm:-right-6 bg-tertiary text-white px-6 py-2 rounded-full font-bold shadow-lg rotate-0 sm:rotate-3">
              Comparison Note
            </div>
            <h4 className="mb-6 text-on-surface font-bold">Global Savings</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                <span>Same treatment in USA</span>
                <span className="font-bold text-error">{display.usa}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-2xl">
                <span>Sparkling 32 Mumbai</span>
                <span className="font-bold text-primary">{display.mumbai}</span>
              </div>
              <p className="text-on-surface-variant italic mt-4">
                Save over 85% compared to international prices while receiving world-class specialized care.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

