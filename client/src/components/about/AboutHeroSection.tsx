import { Container } from '../ui/Container'

export function AboutHeroSection() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <Container className="text-center relative z-10">
        <h1 className="text-on-surface mb-8">
          About Sparkling 32 Dental Clinic
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Sparkling 32 Dental Clinic is a modern dental care center in Mumbai offering a complete range of treatments—from
          routine dental care to advanced cosmetic procedures.
        </p>
      </Container>
    </section>
  )
}

