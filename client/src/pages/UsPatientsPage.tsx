import { UsCtaSection } from '../components/usa/UsCtaSection.tsx'
import { UsFaqSection } from '../components/usa/UsFaqSection.tsx'
import { UsHeroSection } from '../components/usa/UsHeroSection.tsx'
import { UsProcessSection } from '../components/usa/UsProcessSection.tsx'
import { UsQualitySection } from '../components/usa/UsQualitySection.tsx'
import { UsTestimonialsSection } from '../components/usa/UsTestimonialsSection.tsx'
import { UsUsaCostComparisonSection } from '../components/usa/UsUsaCostComparisonSection.tsx'

export function UsPatientsPage() {
  return (
    <main>
      <UsHeroSection />
      <UsUsaCostComparisonSection />
      <UsQualitySection />
      <UsProcessSection />
      <UsTestimonialsSection />
      <UsFaqSection />
      <UsCtaSection />
    </main>
  )
}

