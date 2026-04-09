import { Container } from '../ui/Container';
import { Link } from 'react-router-dom';
import rootCanalHeroImg from '@/assets/root-canal-hero.webp';
import { motion, useReducedMotion } from 'framer-motion';


export function RctHeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-primary text-on-primary py-20 lg:py-32 rounded-tl-[8rem] md:rounded-tl-[18rem]">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="z-10"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.45 }}
          transition={reduce ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-on-primary bg-on-primary/12 rounded-full">
            SPECIALIZED ENDODONTICS
          </span>
          <h1 className="text-on-primary mb-6">
            Painless Root Canal Treatment in Mumbai
          </h1>
          <p className="text-on-primary/85 mb-10 max-w-xl">
            Save your natural tooth. Eliminate the pain. Most patients are surprised by how comfortable it is.
          </p>

          <ul className="mb-10 space-y-3 text-on-primary/90">
            <li className="flex items-center gap-3">
              <span aria-hidden className="text-on-primary/80">
                →
              </span>
              <span>Comfortable and painless procedures</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden className="text-on-primary/80">
                →
              </span>
              <span>Use of advanced techniques</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden className="text-on-primary/80">
                →
              </span>
              <span>Proper diagnosis and long-term results</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              className="bg-on-primary text-primary px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:brightness-110 transition-all active:scale-95"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>

        </motion.div>

        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : { once: true, amount: 0.35 }}
          transition={reduce ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div
            className="relative w-full h-full aspect-[4/5] lg:aspect-square"
            style={{ filter: 'drop-shadow(0 28px 32px rgba(0,0,0,0.2))' }}
          >
            <svg
              viewBox="0 0 600 700"
              className="w-full h-full transition-transform duration-500 hover:scale-[1.02]"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* 🔁 REVERSE BLOB SHAPE */}
                <clipPath id="rctBlob">
                  <path d="M280,40 
          C200,20 80,60 40,160 
          C0,260 40,420 150,520 
          C260,620 420,640 520,560 
          C620,480 600,320 540,200 
          C480,80 360,60 280,40 Z" />
                </clipPath>
              </defs>

              <image
                href={rootCanalHeroImg}
                width="600"
                height="700"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#rctBlob)"
              />

              {/* subtle overlay (no primary color) */}
              <rect
                width="600"
                height="700"
                clipPath="url(#rctBlob)"
                fill="url(#rctOverlay)"
              />

              <defs>
                <linearGradient id="rctOverlay" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
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

