import { NriCtaSection } from '../components/nri/NriCtaSection.tsx'
import { NriFaqSection } from '../components/nri/NriFaqSection.tsx'
import { NriHeroSection } from '../components/nri/NriHeroSection.tsx'
import { NriProcessSection } from '../components/nri/NriProcessSection.tsx'
import { NriSavingsSection } from '../components/nri/NriSavingsSection.tsx'
import { NriTestimonialsSection } from '../components/nri/NriTestimonialsSection.tsx'
import { NriTreatmentsSection } from '../components/nri/NriTreatmentsSection.tsx'
import { NriWhyChooseSection } from '../components/nri/NriWhyChooseSection.tsx'

export function NriPatientsPage() {
  return (
    <main>
      <NriHeroSection />
      <NriWhyChooseSection />
      <NriProcessSection />
      <NriSavingsSection />
      <NriTreatmentsSection />
      <NriTestimonialsSection />
      <NriFaqSection />
      <NriCtaSection />
    </main>
  )
}

