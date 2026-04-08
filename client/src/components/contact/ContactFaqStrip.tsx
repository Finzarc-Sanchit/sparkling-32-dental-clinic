import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Item = { q: string; a: string; open?: boolean }

const ITEMS: readonly Item[] = [
  {
    q: 'What are your clinic hours?',
    a: 'We operate from Monday to Sunday, but strictly by appointment only. This ensures each patient receives undivided attention and minimal waiting time. Typical hours are 10:00 AM to 8:00 PM.',
    open: true,
  },
  {
    q: 'Do you handle emergency appointments?',
    a: 'Yes, we prioritize dental emergencies like acute pain, broken teeth, or swelling. Please call our emergency line or message us on WhatsApp with the subject "EMERGENCY" for immediate triage.',
  },
  {
    q: 'Can I have an online consultation first?',
    a: 'Absolutely. We offer initial virtual consults via video call for both domestic and international patients. This is ideal for discussing treatment options, sharing reports, and getting a preliminary cost estimate.',
  },
] as const

export function ContactFaqStrip() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-on-surface">Quick Answers</h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {ITEMS.map((it) => (
            <details
              key={it.q}
              className="group bg-surface-container-low rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              open={Boolean(it.open)}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-surface-container-high transition-colors">
                <h4 className="font-bold text-on-surface">{it.q}</h4>
                <MaterialIcon name="expand_more" className="transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant">{it.a}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

