import { useState } from 'react'
import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Item = {
  q: string
  a: string
}

const FAQ: readonly Item[] = [
  {
    q: 'How many days do I need for Implants?',
    a: 'Typically, a single trip of 7-10 days is sufficient for the first stage. However, we can provide a specific timeline once we see your X-rays.',
  },
  {
    q: 'How do I share my reports?',
    a: 'You can WhatsApp your OPG (Full mouth X-ray) or CBCT scans to our official clinical number for a free remote consultation.',
  },
  {
    q: 'Is pricing truly transparent?',
    a: 'Yes, we provide a written estimate before you travel. There are no "foreigner taxes"—our pricing is ethical and consistent for all.',
  },
  {
    q: 'What about post-treatment follow-ups?',
    a: 'We provide full digital documentation and are always available for video consultations once you are back in your country.',
  },
] as const

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: Item
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-5 text-left font-bold flex justify-between items-center hover:bg-surface-container-high transition-all"
      >
        <span className="pr-4">{item.q}</span>
        <MaterialIcon
          name="expand_more"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? (
        <div className="px-6 py-4 text-on-surface-variant border-t border-outline-variant/10">{item.a}</div>
      ) : null}
    </div>
  )
}

export function NriFaqSection() {
  const [openIdx, setOpenIdx] = useState<number>(0)

  return (
    <section className="py-24 bg-surface">
      <Container className="max-w-3xl">
        <h2 className="text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <FaqRow
              key={item.q}
              item={item}
              open={idx === openIdx}
              onToggle={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

