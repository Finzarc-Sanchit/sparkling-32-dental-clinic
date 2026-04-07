import { UsCtaSection } from '../components/usa/UsCtaSection.tsx'
import { UsFaqSection } from '../components/usa/UsFaqSection.tsx'
import { UsHeroSection } from '../components/usa/UsHeroSection.tsx'
import { UsProcessSection } from '../components/usa/UsProcessSection.tsx'
import { UsQualitySection } from '../components/usa/UsQualitySection.tsx'
import { UsTestimonialsSection } from '../components/usa/UsTestimonialsSection.tsx'
import { UsUsaCostComparisonSection } from '../components/usa/UsUsaCostComparisonSection.tsx'
import { Reveal } from '../components/ui/Reveal'

export function UsPatientsPage() {
  return (
    <main>
      <Reveal>
        <UsHeroSection />
      </Reveal>
      <Reveal delay={0.05}>
        <UsUsaCostComparisonSection />
      </Reveal>
      <Reveal delay={0.05}>
        <UsQualitySection />
      </Reveal>
      <Reveal delay={0.05}>
        <UsProcessSection />
      </Reveal>
      <Reveal delay={0.05}>
        <UsTestimonialsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <UsFaqSection />
      </Reveal>
      <Reveal delay={0.05}>
        <UsCtaSection />
      </Reveal>
    </main>
  )
}

