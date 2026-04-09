import drTwinkleJainImg from '@/assets/about-page/twinkle-jain.webp';

import { Container } from '../ui/Container';
import { motion, useReducedMotion } from 'framer-motion';

export function AboutDoctorSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <svg
          className="absolute -left-1/4 -top-1/4 h-auto w-[min(1000px,140vw)] text-primary opacity-[0.04]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150,500 C150,200 400,100 500,100 C600,100 850,200 850,500 C850,800 600,900 500,900 C400,900 150,800 150,500 Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute -right-1/4 top-1/2 h-auto w-[min(900px,120vw)] text-primary opacity-[0.06]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,400 Q400,100 700,400 T900,700 Q600,900 300,700 T200,400"
            fill="currentColor"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <motion.div
            className="max-w-xl space-y-8"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : { once: true, amount: 0.35 }}
            transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.05em] text-primary">
              About Doctor
            </span>
            <h2 className="text-primary">Dr. Twinkle Jain</h2>
            <p className="text-on-surface-variant md:pr-8">
              Dr. Twinkle Jain is a dedicated dental surgeon with expertise in cosmetic and general dentistry. A graduate of
              Bharati Vidyapeeth Dental College, she brings a patient-centric approach to dentistry—ensuring every treatment is
              comfortable, well-explained, and tailored to individual needs. Her ability to handle patients calmly and her
              commitment to continuous learning make her a trusted choice for both local and NRI patients.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-md md:max-w-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : { once: true, amount: 0.35 }}
            transition={reduce ? undefined : { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm flex-col rounded-b-full bg-primary p-4 shadow-[0_12px_40px_rgba(27,28,26,0.08)] md:aspect-[3/4] md:max-w-md md:p-5">
              <div className="min-h-0 flex-1 overflow-hidden rounded-b-full">
                <img
                  alt="Dr. Twinkle Jain"
                  className="h-full w-full object-cover object-center"
                  decoding="async"
                  loading="lazy"
                  src={drTwinkleJainImg}
                />
              </div>

              <motion.div
                className="absolute right-0 top-4 rounded-2xl border border-outline-variant/25 bg-surface-container-lowest/90 px-4 py-3 shadow-sm backdrop-blur-sm"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : { once: true, amount: 0.6 }}
                transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                <div className="text-xs font-semibold tracking-wide text-on-surface-variant">Trusted clinical care</div>
                <div className="text-base font-medium tracking-tight text-on-surface">1500+ Patients</div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-4 rounded-2xl border border-outline-variant/25 bg-surface-container-lowest/90 px-4 py-3 shadow-sm backdrop-blur-sm"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : { once: true, amount: 0.6 }}
                transition={reduce ? undefined : { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="text-xs font-semibold tracking-wide text-on-surface-variant">Specialized oral health</div>
                <div className="text-base font-medium tracking-tight text-on-surface">5+ Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
