import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { NriSectionHeading } from './NriSectionHeading'

type Card = { icon: string; title: string; description: string }

const CARDS: readonly Card[] = [
  {
    icon: 'payments',
    title: 'High-quality dental treatments at affordable costs',
    description: '',
  },
  {
    icon: 'verified',
    title: 'Advanced equipment and hygiene standards',
    description: '',
  },
  {
    icon: 'schedule',
    title: 'Efficient scheduling with minimal waiting time',
    description: '',
  },
  {
    icon: 'forum',
    title: 'Comfortable experience for international patients',
    description: '',
  },
] as const

function WhyCard({ icon, title, description }: Card) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        <MaterialIcon name={icon} className="text-3xl text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      {description ? <p className="text-on-surface-variant">{description}</p> : null}
    </div>
  )
}

export function NriWhyChooseSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <NriSectionHeading title="Why NRIs Choose Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARDS.map((c) => (
            <WhyCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  )
}

