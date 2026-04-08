import { Container } from '../ui/Container';

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
          <h2 className="text-on-surface mb-8">What Is Root Canal Treatment?</h2>
          <div className="space-y-6 text-on-surface-variant">
            <p>Root canal treatment is a specialized procedure used to repair and save a tooth that is badly decayed or becomes infected. During the procedure, the nerve and pulp are removed and the inside of the tooth is cleaned and sealed.</p>
            <p>Without treatment, the tissue surrounding the tooth will become infected and abscesses may form. Modern technology ensures that the experience is nearly identical to getting a standard filling.</p>

            <div className="bg-primary text-on-primary-container p-6 rounded-2xl shadow-lg mt-8">
              <p className="text-white">"Root canal treatment does not cause pain — it relieves it."</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

