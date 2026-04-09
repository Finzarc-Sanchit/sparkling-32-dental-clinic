import { UsCtaSection } from '../components/usa/UsCtaSection.tsx'
import { UsHeroSection } from '../components/usa/UsHeroSection.tsx'
import { UsQualitySection } from '../components/usa/UsQualitySection.tsx'

export function UsPatientsPage() {
  return (
    <main>
      <UsHeroSection />
      <UsQualitySection />
      <UsCtaSection />
    </main>
  )
}

