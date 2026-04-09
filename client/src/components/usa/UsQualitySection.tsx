import { Container } from '../ui/Container'
import { motion, useReducedMotion } from 'framer-motion'

import qualityCardImg from '@/assets/us-page/abstract-connection-in-gradient-colors.webp'
import dentalProgressTimeImg from '@/assets/us-page/dental-progress-time-symbol.webp'
import toothRupeeImg from '@/assets/us-page/stylized-tooth-with-rupee-symbol.webp'

type Card = {
  title: string
  imageSrc: string
}

const CARDS: readonly Card[] = [
  {
    title: 'Transparent pricing',
    imageSrc: toothRupeeImg,
  },
  {
    title: 'Personalized care',
    imageSrc: qualityCardImg,
  },
  {
    title: 'Efficient treatment timelines',
    imageSrc: dentalProgressTimeImg,
  },
] as const

function QualityCard({ title, imageSrc }: Card) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="relative min-h-[34rem] overflow-hidden rounded-3xl border border-on-primary/15 bg-secondary-container/20 shadow-[0_32px_32px_-4px_rgba(0,0,0,0.12)] transition-transform duration-300 group hover:-translate-y-2"
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : { once: true, amount: 0.35 }}
      transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <img alt="" className="absolute inset-0 h-full w-full object-cover" decoding="async" loading="lazy" src={imageSrc} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/55 via-black/15 to-transparent backdrop-blur-[1px]" />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        <div className="mx-auto flex min-h-[4.75rem] max-w-[26ch] items-end justify-center">
          <h3 className="text-on-primary text-2xl md:text-3xl leading-tight text-balance">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export function UsQualitySection() {
  const reduce = useReducedMotion()
  return (
    <section className="py-24 bg-primary">
      <Container>
        <motion.h2
          className="text-on-primary mb-16 text-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.6 }}
          transition={reduce ? undefined : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Our clinic ensures:
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map((c) => (
            <QualityCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

