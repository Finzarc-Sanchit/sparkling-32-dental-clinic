import { Container } from '../ui/Container';
import { motion, useReducedMotion } from 'framer-motion';
import clinicalPrecisionImg from '@/assets/about-page/clinical-precision.png';
import patientComfortImg from '@/assets/about-page/patient-comfort.png';
import ethicalTreatmentImg from '@/assets/about-page/ethical.png';

export function AboutPhilosophySection() {
  const reduce = useReducedMotion();
  const items = [
    { src: patientComfortImg, alt: 'Patient comfort' },
    { src: clinicalPrecisionImg, alt: 'Clinical precision' },
    { src: ethicalTreatmentImg, alt: 'Ethical and transparent treatment' },
  ] as const;

  return (
    <section
      className="relative bg-primary py-24 text-on-primary overflow-hidden rounded-tr-[8rem] md:rounded-tr-[18rem]"
      style={{
        // Curved top edge + large rounded top-right corner (swoop like reference).
        clipPath:
          'path("M 0 56 C 26% 8 58% 0 78% 0 C 90% 0 96% 6 100% 20 L 100% 100% L 0 100% Z")',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/18 via-white/8 to-transparent"
      />
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-on-primary">Our clinic is built on three core principles:</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-on-primary/35" />
          <p className="mx-auto mt-6 max-w-2xl text-on-primary/85">
            We aim to provide high-quality dental care in a hygienic, well-equipped environment with minimal waiting time and
            personalized attention.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 md:mx-auto md:w-max md:grid-cols-3 md:gap-0">
          {items.map((it, i) => (
            <motion.img
              key={it.alt}
              alt={it.alt}
              className="block h-auto w-full max-w-[min(100%,20rem)] object-contain md:h-128 md:w-108 md:max-w-none"
              decoding="async"
              loading="lazy"
              src={it.src}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : { once: true, amount: 0.5 }}
              transition={reduce ? undefined : { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

