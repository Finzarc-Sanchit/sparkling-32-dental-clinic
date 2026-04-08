import { useMemo, useState } from 'react'
import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Currency = 'USD' | 'INR' | 'GBP' | 'AED'

const ROWS = [
  {
    treatment: 'Single Dental Implant',
    usa: '$3,000 - $5,000',
    mumbai: '$450 - $700',
    save: '~85%',
  },
  {
    treatment: 'Root Canal Treatment',
    usa: '$1,500 - $3,000',
    mumbai: '$150 - $280',
    save: '~90%',
  },
  {
    treatment: 'Porcelain Veneers (Each)',
    usa: '$900 - $2,500',
    mumbai: '$150 - $250',
    save: '~80%',
  },
  {
    treatment: 'Full Smile Makeover',
    usa: '$10,000 - $30,000',
    mumbai: '$1,000 - $2,500',
    save: '~91%',
  },
  {
    treatment: 'Professional Whitening',
    usa: '$500 - $1,000',
    mumbai: '$80 - $130',
    save: '~85%',
  },
] as const

export function UsUsaCostComparisonSection() {
  const [currency, setCurrency] = useState<Currency>('USD')

  const note = useMemo(() => {
    switch (currency) {
      case 'INR':
        return 'Indicative display (prices shown in USD in this demo).'
      case 'GBP':
      case 'AED':
        return 'Indicative display (prices shown in USD in this demo).'
      default:
        return 'Prices are indicative and vary by case complexity and material choice.'
    }
  }, [currency])

  return (
    <section className="py-24 bg-surface-container-low" id="cost">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-on-surface mb-4">What You'd Pay in the USA vs. At Our Clinic</h2>
          <div className="flex justify-center items-center gap-4 mt-8">
            <span className="text-sm font-bold text-on-surface-variant">CURRENCY</span>
            <div className="bg-surface-container-highest p-1 rounded-full flex gap-1">
              {(['USD', 'INR', 'GBP', 'AED'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={
                    c === currency
                      ? 'bg-primary text-on-primary px-4 py-1.5 rounded-full text-xs font-bold shadow-sm'
                      : 'px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:bg-surface-container'
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl shadow-xl bg-surface-container-lowest w-full max-w-full">
          <table className="w-full text-left border-collapse min-w-[880px]">
            <thead>
              <tr className="bg-primary text-on-primary">
                <th className="p-6 font-bold text-lg">Treatment Type</th>
                <th className="p-6 font-bold text-lg">Avg. Cost in USA</th>
                <th className="p-6 font-bold text-lg">Sparkling 32 (Mumbai)</th>
                <th className="p-6 font-bold text-lg">You Save</th>
              </tr>
            </thead>
            <tbody className="text-on-surface divide-y divide-surface-container">
              {ROWS.map((r) => (
                <tr key={r.treatment} className="hover:bg-surface-container-low transition-colors">
                  <td className="p-6 font-semibold">{r.treatment}</td>
                  <td className="p-6 text-on-surface-variant">{r.usa}</td>
                  <td className="p-6 font-bold text-primary">{r.mumbai}</td>
                  <td className="p-6 text-tertiary font-bold">{r.save}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-tertiary/10 rounded-2xl flex items-center gap-4 text-tertiary border border-tertiary/20">
          <MaterialIcon name="lightbulb" filled className="flex-shrink-0" />
          <p>
            Most patients save enough to cover their entire India trip, including flights and 5-star accommodation in Mumbai.
          </p>
        </div>

        <p className="mt-4 text-on-surface-variant text-center">{note}</p>
      </Container>
    </section>
  )
}

