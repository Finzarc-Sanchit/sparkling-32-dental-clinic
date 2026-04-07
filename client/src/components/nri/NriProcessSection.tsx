import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Step = {
  n: number
  icon: string
  title: string
  description: string
}

const STEPS: readonly Step[] = [
  { n: 1, icon: 'smartphone', title: 'Share X-rays', description: 'Upload your reports via WhatsApp or Email for initial review.' },
  { n: 2, icon: 'assignment', title: 'Personalised Plan', description: 'Receive a detailed treatment roadmap and transparent quote.' },
  { n: 3, icon: 'calendar_month', title: 'Book Dates', description: 'We align your appointments with your flight schedule.' },
  { n: 4, icon: 'dentistry', title: 'Arrive & Treated', description: 'Painless treatment at our clinic in Mumbai sanctuary.' },
  { n: 5, icon: 'flight_takeoff', title: 'Fly Home', description: 'Return with a confident smile and full digital records.' },
] as const

function StepCard({ n, icon, title, description }: Step) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center text-3xl font-bold mb-6 shadow-xl relative">
        {n}
        <span className="absolute -top-2 -right-2 bg-surface-container-lowest text-primary p-2 rounded-full shadow-md leading-none">
          <MaterialIcon name={icon} className="text-xl" />
        </span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  )
}

export function NriProcessSection() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="nri-plan">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Our Approach for NRI Patients</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">
            We understand your time is limited. That’s why we:
          </p>
        </div>

        <ul className="max-w-3xl mx-auto bg-surface-container-lowest rounded-2xl p-8 shadow-sm space-y-3 text-on-surface-variant">
          <li>Review your case online before you travel</li>
          <li>Share a clear treatment plan</li>
          <li>Schedule appointments in advance</li>
          <li>Complete treatments efficiently within your stay</li>
        </ul>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-center mb-10">Your 5-Step Smile Journey</h3>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-primary/20" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
              {STEPS.map((s) => (
                <StepCard key={s.n} {...s} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

