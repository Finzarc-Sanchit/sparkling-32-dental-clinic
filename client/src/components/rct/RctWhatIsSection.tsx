import { Container } from '../ui/Container'

export function RctWhatIsSection() {
  return (
    <section className="py-24">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 rounded-3xl overflow-hidden aspect-video shadow-sm">
          <img
            className="w-full h-full object-cover"
            alt="Precision dental tools"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBth-2M11sE7lkvEfj0l2IEjuzx0PbiZbEOOOZdAzwsnzd-8fDfaKrOmFZbIaJf0fdIxIwoAB2rQL5dCWJI7uRFQICOzniSEDR3B63j-O0Kb1KhG8jH-xW5kmeeZI_0Z0dIFyOhYHiC9w165dfLhmwLNeraJIjFpruqjhPSMi37L_5gkEz1BCzMQq6tKKZNLSnMEiBDkGg7b5QZua0MT23I7RQ3-lWLt-ppQ8DsY9h6lVqzQl0ZOazLqAeGi_aDnmi17PVgo-P7oiI"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-on-surface mb-8">What Is Root Canal Treatment?</h2>
          <div className="space-y-6 text-lg text-on-surface-variant">
            <p>
              Root canal treatment helps save infected teeth and eliminate pain effectively.
            </p>

            <div>
              <div className="font-bold text-on-surface mb-3">At Sparkling 32 Dental Clinic, we focus on:</div>
              <ul className="space-y-2">
                <li>Comfortable and painless procedures</li>
                <li>Use of advanced techniques</li>
                <li>Proper diagnosis and long-term results</li>
              </ul>
            </div>

            <div className="bg-primary text-on-primary-container p-6 rounded-2xl shadow-lg mt-8">
              <p className="font-bold text-xl leading-snug">"Root canal treatment does not cause pain — it relieves it."</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

