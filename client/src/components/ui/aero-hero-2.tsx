import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import heroBg from '@/assets/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg';
import { Link } from 'react-router-dom';
import test1 from '@/assets/testimonials/test-1.jpg';
import test2 from '@/assets/testimonials/test-2.jpg';
import test3 from '@/assets/testimonials/test-3.jpg';
import test4 from '@/assets/testimonials/test-4.jpg';

/** Increments on every `AeroHero2` mount; used to skip intro on React 18 Strict Mode’s dev-only remount (even mounts). */
let homeHeroMountSeq = 0;

const HERO_BG = heroBg;

const PATIENT_AVATARS = [
  test1,
  test2,
  test3,
  test4,
] as const;

export default function AeroHero2() {
  const reduce = useReducedMotion();
  const mountSeqRef = useRef(0);
  if (mountSeqRef.current === 0) {
    homeHeroMountSeq += 1;
    mountSeqRef.current = homeHeroMountSeq;
  }
  /** Odd mount index = real first paint or SPA return; even = Strict Mode’s immediate remount in dev. */
  const playHomeIntro = mountSeqRef.current % 2 === 1;

  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      className="relative flex min-h-screen w-full items-end justify-center bg-surface"
      id="home"
    >
      {/* Preload hero background with high priority (keeps display as CSS bg-image) */}
      <img
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="high"
        loading="eager"
        src={HERO_BG}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />

      <div ref={parallaxRef} className="absolute inset-0 h-full overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -inset-x-0 -inset-y-[12vh] bg-cover bg-center will-change-transform"
          style={{
            y: reduce ? undefined : bgY,
            backgroundImage: `url(${HERO_BG})`,
            backgroundPosition: 'center bottom',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-70 mix-blend-overlay"
          style={{
            backgroundImage:
              'radial-gradient(900px 500px at 15% 85%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(800px 500px at 85% 20%, rgba(255,255,255,0.10), transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-32 text-white md:px-8 md:pb-36 lg:px-10">
        <div className="flex flex-col gap-12 text-left lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-3xl space-y-6">
            <motion.h1
              className="text-white"
              initial={
                reduce ? undefined : playHomeIntro ? { opacity: 0, y: 18 } : false
              }
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              Restore Your Smile.
              <br />
              <span className="text-primary-fixed">Pain-Free, Guaranteed.</span>
            </motion.h1>

            <motion.p
              className="max-w-2xl text-white/90"
              initial={
                reduce ? undefined : playHomeIntro ? { opacity: 0, y: 16 } : false
              }
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay: 0.08 }}
            >
              Trusted by patients from the USA, UK, Canada &amp; UAE.
              World-class dental care at honest Indian prices.
            </motion.p>
          </div>

          <motion.div
            className="flex w-full flex-col gap-8 lg:mt-0 lg:w-auto lg:max-w-md"
            initial={reduce ? undefined : playHomeIntro ? { opacity: 0, x: 18 } : false}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
          >
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {PATIENT_AVATARS.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={
                      reduce ? undefined : playHomeIntro ? { opacity: 0, y: 14 } : false
                    }
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.2, 0.8, 0.2, 1],
                      delay: 0.18 + i * 0.05,
                    }}
                  >
                    <Avatar
                      className="size-12 border-2 border-primary-fixed transition-all duration-300 hover:grayscale-0"
                      size="lg"
                    >
                      <AvatarImage alt="" src={src} />
                      <AvatarFallback className="bg-surface-container-high text-on-surface text-xs">
                        P{i + 1}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col text-sm font-medium text-white/95">
                <span className="text-base sm:text-lg">10k+</span>
                <span>Happy patients</span>
              </div>
            </div>

            <motion.div
              className="flex w-full flex-col gap-4 sm:w-fit"
              initial={
                reduce ? undefined : playHomeIntro ? { opacity: 0, y: 18 } : false
              }
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1], delay: 0.22 }}
            >
              <Link
                className="group mx-0 flex w-full cursor-pointer items-center justify-start gap-0 rounded-full border-none bg-transparent px-0 py-1 font-normal shadow-none sm:w-fit sm:py-5"
                to="/contact"
              >
                <span className="rounded-full bg-primary-fixed px-6 py-3 text-on-primary-fixed duration-500 ease-in-out group-hover:bg-on-surface group-hover:text-primary-fixed">
                  Contact us
                </span>
                <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-primary-fixed p-5 text-on-primary-fixed duration-500 ease-in-out group-hover:bg-on-surface group-hover:text-primary-fixed">
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
