import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NriHeroSection() {
  const reduce = useReducedMotion();

  const textWrap = reduce
    ? undefined
    : {
      hidden: {},
      show: {
        transition: { staggerChildren: 0.06, delayChildren: 0.04 },
      },
    };

  const textItem = reduce
    ? undefined
    : {
      hidden: { opacity: 0, y: 18 },
      show: { opacity: 1, y: 0 },
    };

  const textEase = reduce ? undefined : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative pb-20 lg:pb-32 bg-surface-container-low overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden lg:block bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-primary-container)_100%)] [clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%)]" />

      <Container className="relative z-10 mt-16 lg:mt-24 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={textWrap}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
        >
          <motion.span variants={textItem} transition={textEase} className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-secondary-container text-on-secondary-fixed-variant rounded-full">
            Global Standards, Mumbai Warmth
          </motion.span>

          <motion.h1 variants={textItem} transition={textEase} className="text-on-surface mb-6">
            Dental Treatment in India for <span className="text-primary">NRI Patients</span>
          </motion.h1>

          <motion.p variants={textItem} transition={textEase} className="text-on-surface-variant mb-4">
            Quality Care. Transparent Pricing. Planned Convenience.
          </motion.p>

          <motion.p variants={textItem} transition={textEase} className="text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0">
            Trusted by patients from USA, UK, UAE, Canada, and Australia. Experience world-class clinical excellence at a
            fraction of the global cost, perfectly timed with your visit home.
          </motion.p>

          <motion.div variants={textItem} transition={textEase} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            <Link
              className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all"
              to="/contact"
            >
              <MaterialIcon name="chat" filled />
              Contact Us
            </Link>
            <a
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 active:scale-95 transition-all"
              href="#nri-plan"
            >
              Get My Treatment Plan
            </a>
          </motion.div>

          <motion.div variants={textItem} transition={textEase} className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <MaterialIcon name="star" filled className="text-primary" />
              <span className="font-bold">4.9 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="public" className="text-primary" />
              <span className="font-bold">15+ Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="translate" className="text-primary" />
              <span className="font-bold">English Speaking Team</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-xl lg:ml-auto"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
          transition={reduce ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <div
            className="relative w-full h-full"
            style={{ filter: 'drop-shadow(0 28px 32px rgba(0,0,0,0.18))' }}
          >
            <svg
              viewBox="0 0 600 700"
              className="w-full h-full transition-transform duration-500"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* 🔵 NEW UNIQUE SHAPE (different from previous one) */}
                <clipPath id="nriBlob">
                  <path d="M320,30 
          C420,20 560,100 580,220 
          C600,340 520,500 380,600 
          C240,700 80,620 40,480 
          C0,340 60,200 140,120 
          C220,40 260,40 320,30 Z" />
                </clipPath>
              </defs>

              <image
                href="https://lh3.googleusercontent.com/aida-public/AB6AXuA8vLT_gi5u_0hrCR71cM-RjRnxBfzYwgjsQzfa5FHnJx_QdKWEQOt3XwdtzcPnfmE_0t4xbrHjKyAVpeljOh5gqGOZFA7jqEJzc15DDOMbc1lI2gQIzoiK0AzsbTwjGhUekzMu3DZiNH9C_CqBQdmEodsfTxQVMT8oUi3fXhuDh3czkddosm0D00NcsZLjjcewjfFACSIKIa5ZUlOZjG5Rh_iSRJ0jRLk7OAjJs_aheY76t8Wzc2UNVoFe2tiWG78vs4OHN7ewjok"
                width="600"
                height="700"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#nriBlob)"
              />

              {/* subtle gradient (no primary color used) */}
              <rect
                width="600"
                height="700"
                clipPath="url(#nriBlob)"
                fill="url(#softOverlay)"
              />

              <defs>
                <linearGradient id="softOverlay" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.25)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

