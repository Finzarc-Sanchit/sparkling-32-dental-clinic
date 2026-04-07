import { Container } from '../ui/Container'

const STEPS = [
  {
    n: 1,
    title: 'Diagnosis',
    description: 'Digital X-rays and comprehensive examination to determine the extent of the infection.',
  },
  {
    n: 2,
    title: 'Anaesthesia',
    description: 'Local anaesthesia is administered to ensure complete numbness and zero discomfort during the procedure.',
  },
  {
    n: 3,
    title: 'Cleaning',
    description: 'Removal of infected pulp tissue using advanced rotary instruments for maximum efficiency.',
  },
  {
    n: 4,
    title: 'Sealing',
    description: 'The canals are filled with a biocompatible material to prevent future infection.',
  },
  {
    n: 5,
    title: 'Crown',
    description: 'A final restoration (crown or filling) is placed to return the tooth to full function.',
  },
] as const

export function RctProcedureSection() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-4xl font-bold text-on-surface mb-16 text-center">What to Expect During Your Visit</h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-outline-variant/30 hidden md:block" />
          <div className="space-y-12">
            {STEPS.map((s) => (
              <div key={s.n} className="relative md:pl-24 group">
                <div className="absolute left-0 top-0 w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg z-10 transition-transform group-hover:scale-110">
                  {s.n}
                </div>
                <div className="bg-surface-container-low p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold text-on-surface mb-2">{s.title}</h3>
                  <p className="text-on-surface-variant text-lg">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

