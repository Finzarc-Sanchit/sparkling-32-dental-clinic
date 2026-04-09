import { Container } from '../ui/Container'
import { motion, useReducedMotion } from 'framer-motion'

const STEPS = [
  {
    n: 1,
    title: 'Comfortable and painless procedures',
    description:
      'We use gentle numbing and careful technique to keep you comfortable, with a focus on effective pain relief.',
  },
  {
    n: 2,
    title: 'Use of advanced techniques',
    description:
      'Modern tools and precise methods help us treat infected canals efficiently, safely, and with predictable outcomes.',
  },
  {
    n: 3,
    title: 'Proper diagnosis and long-term results',
    description:
      'Thorough evaluation and planning ensure the right treatment approach and strong, lasting results for your tooth.',
  },
] as const

export function RctFocusSection() {
  const reduce = useReducedMotion()

  return (
    <section className="py-24">
      <Container>
        <motion.h2
          className="text-on-surface mb-16 text-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.6 }}
          transition={reduce ? undefined : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Root canal treatment helps save infected teeth and eliminate pain effectively.
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 border-l-2 border-dotted border-outline-variant/30" />
          <div className="space-y-12">
            {STEPS.map((s, idx) => (
              <motion.div
                key={s.n}
                className="relative pl-20 md:pl-24 group"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : { once: true, amount: 0.35 }}
                transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
              >
                <div className="absolute left-0 top-0 w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg z-10 transition-transform group-hover:scale-110">
                  {s.n}
                </div>
                <div className="bg-surface-container-low p-8 rounded-3xl">
                  <h3 className="text-on-surface mb-2">{s.title}</h3>
                  <p className="text-on-surface-variant">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

