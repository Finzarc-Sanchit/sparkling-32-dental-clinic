import { MaterialIcon } from '../ui/MaterialIcon'
import { Container } from '../ui/Container'
import { SectionHeading } from './SectionHeading'

type IconCardProps = {
  icon: string
  title: string
  description: string
}

function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:-translate-y-1 transition-transform duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
        <MaterialIcon name={icon} className="text-primary text-3xl" />
      </div>
      <h3 className="text-xl font-bold text-on-surface mb-3">{title}</h3>
      {description ? <p className="text-on-surface-variant leading-relaxed">{description}</p> : null}
    </div>
  )
}

export function AboutPhilosophySection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <Container>
        <SectionHeading
          title="Our clinic is built on three core principles:"
          subtitle="We aim to provide high-quality dental care in a hygienic, well-equipped environment with minimal waiting time and personalized attention."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <IconCard
            icon="volunteer_activism"
            title="Patient comfort"
            description=""
          />
          <IconCard
            icon="biotech"
            title="Clinical precision"
            description=""
          />
          <IconCard
            icon="verified_user"
            title="Ethical and transparent treatment"
            description=""
          />
        </div>
      </Container>
    </section>
  )
}

