import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

export function PainPointEmpathy() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">We understand why you hesitated.</h2>
        <p className="text-on-surface-variant text-lg">
          Dental anxiety and billing transparency are real concerns. We've built our practice to address them head-on.
        </p>
      </div>

      <Container className="grid md:grid-cols-2 gap-8">
        <div className="bg-surface-container-lowest p-10 rounded-xl border-l-8 border-primary shadow-sm hover:shadow-md transition-all">
          <MaterialIcon name="payments" className="text-primary text-4xl mb-6" />
          <h3 className="text-2xl font-bold mb-4">Local Patients</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed italic">
            "Worried about pain? Or getting a surprise bill? We eliminate both with upfront quotes and sedation dentistry
            options."
          </p>
        </div>

        <div className="bg-surface-container-lowest p-10 rounded-xl border-l-8 border-tertiary shadow-sm hover:shadow-md transition-all">
          <MaterialIcon name="flight_takeoff" className="text-tertiary text-4xl mb-6" />
          <h3 className="text-2xl font-bold mb-4">NRI Patients</h3>
          <p className="text-on-surface-variant text-lg leading-relaxed italic">
            "Flying in from abroad? We'll plan your entire treatment around your trip — start to finish coordination via
            WhatsApp."
          </p>
        </div>
      </Container>
    </section>
  )
}

