import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Card = {
  icon: string
  title: string
  description: string
}

const CARDS: readonly Card[] = [
  {
    icon: 'payments',
    title: 'Transparent pricing',
    description: 'Perfect for patients planning treatment during their India visit.',
  },
  {
    icon: 'person_raised_hand',
    title: 'Personalized care',
    description: 'Perfect for patients planning treatment during their India visit.',
  },
  {
    icon: 'schedule',
    title: 'Efficient treatment timelines',
    description: 'Perfect for patients planning treatment during their India visit.',
  },
] as const

function QualityCard({ icon, title, description }: Card) {
  return (
    <div className="p-8 rounded-3xl bg-on-primary/7 shadow-[0_32px_32px_-4px_rgba(0,0,0,0.12)] group hover:-translate-y-2 transition-all duration-300 border border-on-primary/15">
      <div className="w-16 h-16 bg-on-primary/12 rounded-2xl flex items-center justify-center text-on-primary mb-6 group-hover:bg-on-primary group-hover:text-primary transition-colors">
        <MaterialIcon name={icon} className="text-3xl" />
      </div>
      <h3 className="mb-4 text-on-primary">{title}</h3>
      <p className="text-on-primary/80">{description}</p>
    </div>
  )
}

export function UsQualitySection() {
  return (
    <section className="py-24 bg-primary">
      <Container>
        <h2 className="text-on-primary mb-16 text-center">Our clinic ensures:</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map((c) => (
            <QualityCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

