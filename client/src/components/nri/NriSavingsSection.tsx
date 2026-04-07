import { useMemo, useState } from 'react'
import { Container } from '../ui/Container'
import { NriSectionHeading } from './NriSectionHeading'

type Currency = 'USD' | 'GBP' | 'AED'

const MOCK_RATES: Record<Currency, number> = {
  USD: 0.0119,
  GBP: 0.0093,
  AED: 0.0437,
}

const COMPARISON = [
  { treatment: 'Dental Implants', global: '$3,500 - $5,000', clinic: '$800 - $1,200' },
  { treatment: 'Root Canal + Crown', global: '$1,200 - $2,000', clinic: '$200 - $350' },
  { treatment: 'Porcelain Veneers', global: '$1,500 / tooth', clinic: '$350 / tooth' },
  { treatment: 'Teeth Whitening', global: '$600 - $800', clinic: '$150 - $250' },
] as const

export function NriSavingsSection() {
  const [inr, setInr] = useState<number>(50000)
  const [active, setActive] = useState<Currency>('USD')

  const converted = useMemo(() => inr * MOCK_RATES[active], [active, inr])
  const formatter = useMemo(() => new Intl.NumberFormat('en-US', { style: 'currency', currency: active }), [active])

  return (
    <section className="py-24 bg-primary/5">
      <Container>
        <NriSectionHeading
          title="See What You'll Save"
          subtitle="Compare Mumbai's premium dental costs with global rates instantly."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-xl border border-outline-variant/10 w-full max-w-full">
            <label className="block text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-4">
              Estimated Treatment Value
            </label>
            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-on-surface-variant">₹</span>
              <input
                className="w-full pl-10 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-3xl font-bold text-primary focus:ring-2 focus:ring-primary"
                type="number"
                value={Number.isFinite(inr) ? inr : 0}
                min={0}
                onChange={(e) => setInr(Number(e.target.value))}
              />
            </div>

            <div className="flex gap-2 mb-8">
              {(['USD', 'GBP', 'AED'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  className={
                    c === active
                      ? 'flex-1 py-3 bg-primary text-on-primary rounded-lg font-bold shadow-md'
                      : 'flex-1 py-3 bg-surface-container-high text-on-surface-variant rounded-lg font-bold hover:bg-surface-variant transition-all'
                  }
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="p-6 bg-primary/10 rounded-xl text-center">
              <p className="text-sm text-primary font-bold uppercase mb-2">Indicative Conversion</p>
              <div className="text-4xl font-extrabold text-on-surface">{formatter.format(converted)}</div>
              <p className="text-xs text-on-surface-variant mt-2">*Indicative conversion. Rates vary daily.</p>
            </div>
          </div>

          <div className="lg:col-span-3 overflow-x-auto w-full max-w-full">
            <table className="w-full text-left bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden min-w-[720px]">
              <thead>
                <tr className="bg-primary text-on-primary">
                  <th className="p-5 font-bold">Treatment</th>
                  <th className="p-5 font-bold">USA / UK</th>
                  <th className="p-5 font-bold text-secondary-fixed">Sparkling 32 (Mumbai)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {COMPARISON.map((r) => (
                  <tr key={r.treatment}>
                    <td className="p-5 font-bold">{r.treatment}</td>
                    <td className="p-5 text-on-surface-variant">{r.global}</td>
                    <td className="p-5 font-bold text-primary">{r.clinic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-on-surface-variant italic">
              **Costs are approximate and depend on material choices and complexity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

