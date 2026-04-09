import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { motion, useReducedMotion } from 'framer-motion';

export function UsCtaSection() {
  const whatsappLink = buildWhatsAppLink();
  const reduce = useReducedMotion();

  return (
    <section className="py-20">
      <Container>
        <motion.div
          className="rounded-[3rem] bg-tertiary-container text-on-tertiary p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.5 }}
          transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="mb-8">Ready to Plan Your Treatment?</h2>
            <p className="mb-12 opacity-90 max-w-2xl mx-auto text-white">
              Get a free digital consultation and a cost comparison report within 24 hours.
            </p>
            <a
              className="bg-surface-container-lowest text-tertiary hover:scale-105 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl inline-flex items-center gap-3 mx-auto active:scale-95"
              href={whatsappLink}
            >
              <MaterialIcon name="chat" />
              WhatsApp Us Now
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

