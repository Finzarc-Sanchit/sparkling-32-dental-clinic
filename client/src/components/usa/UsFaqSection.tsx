import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Item = { q: string; a: string; open?: boolean }

const ITEMS: readonly Item[] = [
  {
    q: 'How does the quality compare to US clinics?',
    a: 'We use the same brands (Nobel Biocare, Straumann, 3M) and same technology used in top-tier Manhattan or LA clinics. Our lead doctors have international certifications and maintain ISO standards.',
    open: true,
  },
  {
    q: 'Can I get follow-ups in the USA?',
    a: 'Yes, we provide full digital records, treatment notes, and material warranty cards that any US dentist can read and service if needed in the future.',
  },
  {
    q: 'How long do I need to stay in Mumbai?',
    a: 'Most major treatments (implants/veneers) require a 7-10 day visit. Complex full-mouth reconstructions might require two shorter trips spaced 3 months apart.',
  },
  {
    q: 'Will you share my digital dental records?',
    a: 'Absolutely. We provide a cloud-based folder containing your 3D scans, high-resolution pre/post photos, and formal medical reports for your local primary dentist.',
  },
] as const

export function UsFaqSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <Container className="max-w-4xl">
        <h2 className="text-4xl font-extrabold text-on-surface mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {ITEMS.map((it) => (
            <details key={it.q} className="group bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden" open={Boolean(it.open)}>
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-on-surface list-none">
                {it.q}
                <MaterialIcon name="expand_more" className="group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">{it.a}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

