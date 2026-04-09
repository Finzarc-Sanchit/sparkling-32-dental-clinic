import { Container } from '../ui/Container';
import { motion, useReducedMotion } from 'framer-motion';

export function RctWhatIsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 bg-primary text-on-primary overflow-hidden rounded-bl-[8rem] md:rounded-bl-[18rem]">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="order-2 lg:order-1 rounded-3xl overflow-hidden aspect-video shadow-sm"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.4 }}
          transition={reduce ? undefined : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <img
            className="w-full h-full object-cover"
            alt="Precision dental tools"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBth-2M11sE7lkvEfj0l2IEjuzx0PbiZbEOOOZdAzwsnzd-8fDfaKrOmFZbIaJf0fdIxIwoAB2rQL5dCWJI7uRFQICOzniSEDR3B63j-O0Kb1KhG8jH-xW5kmeeZI_0Z0dIFyOhYHiC9w165dfLhmwLNeraJIjFpruqjhPSMi37L_5gkEz1BCzMQq6tKKZNLSnMEiBDkGg7b5QZua0MT23I7RQ3-lWLt-ppQ8DsY9h6lVqzQl0ZOazLqAeGi_aDnmi17PVgo-P7oiI"
          />
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.55 }}
          transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-on-primary mb-8">What Is Root Canal Treatment?</h2>
          <div className="space-y-6 text-on-primary">
            <p className='text-on-primary'>Root canal treatment is a specialized procedure used to repair and save a tooth that is badly decayed or becomes infected. During the procedure, the nerve and pulp are removed and the inside of the tooth is cleaned and sealed.</p>
            <p className='text-on-primary'>Without treatment, the tissue surrounding the tooth will become infected and abscesses may form. Modern technology ensures that the experience is nearly identical to getting a standard filling.</p>

            <div className="bg-surface p-6 rounded-2xl shadow-lg mt-8 ring-1 ring-on-primary/20">
              <p className="text-primary">"Root canal treatment does not cause pain — it relieves it."</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

