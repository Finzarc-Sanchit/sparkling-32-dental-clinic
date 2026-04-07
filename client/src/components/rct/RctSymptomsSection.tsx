import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

const SIGNS = [
  {
    icon: 'medical_mask',
    title: 'Severe toothache',
    description: 'Persistent pain that intensifies when chewing or applying pressure.',
  },
  {
    icon: 'thermostat',
    title: 'Sensitivity',
    description: 'Prolonged sensitivity to hot or cold temperatures, even after the source is removed.',
  },
  {
    icon: 'vital_signs',
    title: 'Swelling',
    description: 'Swelling or tenderness in the nearby gums, sometimes accompanied by a persistent pimple.',
  },
  {
    icon: 'flare',
    title: 'Cracked tooth',
    description: 'Trauma or deep cracks that have exposed the inner pulp to infection.',
  },
] as const

export function RctSymptomsSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-4">Do You Need a Root Canal?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Early intervention can save your tooth. Look out for these common warning signs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNS.map((s) => (
            <div key={s.title} className="bg-surface-container-lowest p-8 rounded-3xl transition-all hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <MaterialIcon name={s.icon} className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{s.title}</h3>
              <p className="text-on-surface-variant">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

