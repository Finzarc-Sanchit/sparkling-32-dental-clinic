import { motion } from 'framer-motion';

import aboutHeroBg from '@/assets/about-page/about-hero.png';

import { Container } from '../ui/Container';

export function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[min(70vh,36rem)] items-center justify-center overflow-hidden pt-24 pb-32">
      <img
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="high"
        loading="eager"
        src={aboutHeroBg}
        className="pointer-events-none absolute size-[1px] opacity-0"
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 origin-center bg-cover bg-center will-change-transform"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.75, ease: [0.33, 1, 0.68, 1] }}
        style={{ backgroundImage: `url(${aboutHeroBg})` }}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40"
      />

      <Container className="relative z-10 text-center">
        <h1 className="mb-8 text-balance text-white drop-shadow-sm">About Sparkling 32 Dental Clinic</h1>
        <p className="mx-auto max-w-2xl text-balance text-white/92 drop-shadow-sm">
          Sparkling 32 Dental Clinic is a modern dental care center in Mumbai offering a complete range of
          treatments—from routine dental care to advanced cosmetic procedures.
        </p>
      </Container>
    </section>
  );
}
