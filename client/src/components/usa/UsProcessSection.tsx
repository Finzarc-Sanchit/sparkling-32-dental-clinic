import { Container } from '../ui/Container'

type Step = {
  n: string
  title: string
  description: string
}

const STEPS: readonly Step[] = [
  { n: '01', title: 'WhatsApp Reports', description: 'Send your X-rays & reports via WhatsApp for an initial review.' },
  { n: '02', title: 'Personalised Plan', description: 'Receive a detailed treatment timeline and cost estimation.' },
  { n: '03', title: 'Confirm Dates', description: 'Schedule your appointments. We assist with local hotel bookings.' },
  { n: '04', title: 'Arrive Mumbai', description: 'Complete your treatment in our premium clinical sanctuary.' },
  { n: '05', title: 'Fly back', description: 'Return home with a beautiful smile and full treatment records.' },
] as const

function StepCard({ n, title, description }: Step) {
  return (
    <div className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
      <div className="text-5xl font-black text-primary/10 mb-4">{n}</div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-on-surface-variant">{description}</p>
    </div>
  )
}

export function UsProcessSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <Container>
        <h2 className="text-on-surface mb-16 text-center">How We Make Your Trip Easy</h2>
        <div className="grid lg:grid-cols-5 gap-4">
          {STEPS.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </Container>
    </section>
  )
}

