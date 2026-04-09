import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { motion, useReducedMotion } from 'framer-motion'

const FAQ = [
  {
    q: 'Is a root canal painful?',
    a: "Modern anaesthesia ensures you won't feel anything during the procedure. Most patients compare it to a standard cavity filling.",
    open: true,
  },
  {
    q: 'How long does the procedure take?',
    a: 'Usually 45 to 90 minutes. Many cases can be completed in a single visit, though complex infections may require two.',
  },
  {
    q: 'How long is the recovery?',
    a: 'Most patients return to work the same day. You might feel minor tenderness for 2-3 days which is easily managed with OTC medicine.',
  },
  {
    q: 'Do I really need a crown after?',
    a: 'Yes, usually. A root canal leaves the tooth slightly more brittle; a crown protects it from cracking and restores full bite strength.',
  },
  {
    q: "What happens if I don't get one?",
    a: 'The infection can spread to the jawbone, cause severe abscesses, and eventually lead to tooth loss and systemic health issues.',
  },
  {
    q: 'Are NRI appointments prioritized?',
    a: 'Yes, we offer concierge scheduling for NRI patients to ensure all treatments are completed within their travel window.',
  },
  {
    q: 'What technology do you use?',
    a: 'We use Apex Locators, Rotary Endodontics, and Digital Radiography for precise cleaning and superior long-term results.',
  },
  {
    q: 'Is there a success guarantee?',
    a: 'Root canals have a success rate over 95%. We provide follow-up care to monitor the healing of your tooth and bone.',
  },
] as const

export function RctFaqSection() {
  const reduce = useReducedMotion()

  return (
    <section className="py-24 bg-surface-container-lowest">
      <Container className="max-w-3xl">
        <motion.h2
          className="text-on-surface mb-12 text-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.6 }}
          transition={reduce ? undefined : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          className="space-y-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
          transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          {FAQ.map((it) => (
            <details
              key={it.q}
              className="group bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden"
              open={Boolean((it as { open?: boolean }).open)}
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-on-surface hover:bg-surface-container-high transition-colors list-none">
                {it.q}
                <MaterialIcon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">{it.a}</div>
            </details>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

