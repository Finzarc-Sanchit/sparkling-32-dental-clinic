import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Card = {
  icon: string
  title: string
  description: string
}

const CARDS: readonly Card[] = [
  {
    icon: 'biotech',
    title: 'Advanced Equipment',
    description:
      'We utilize digital 3D CT scans, intraoral cameras, and laser technology equivalent to top-tier US clinics.',
  },
  {
    icon: 'sanitizer',
    title: 'Strict Hygiene Protocols',
    description:
      'ISO-certified sterilization procedures and single-use dental kits ensuring 100% patient safety and infection control.',
  },
  {
    icon: 'translate',
    title: 'English-Speaking Team',
    description:
      'Our specialists are English-proficient, ensuring clear communication about your procedure and recovery steps.',
  },
] as const

function QualityCard({ icon, title, description }: Card) {
  return (
    <div className="p-8 rounded-3xl bg-surface-container-lowest shadow-[0_32px_32px_-4px_rgba(69,69,91,0.06)] group hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10">
      <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
        <MaterialIcon name={icon} className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-on-surface">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  )
}

export function UsQualitySection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <h2 className="text-4xl font-extrabold text-on-surface mb-16 text-center">Same Standards. Fraction of the Cost.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map((c) => (
            <QualityCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

