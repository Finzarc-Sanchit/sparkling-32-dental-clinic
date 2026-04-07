import { NriCtaSection } from '../components/nri/NriCtaSection'
import { NriFaqSection } from '../components/nri/NriFaqSection'
import { NriHeroSection } from '../components/nri/NriHeroSection'
import { NriProcessSection } from '../components/nri/NriProcessSection'
import { NriSavingsSection } from '../components/nri/NriSavingsSection'
import { NriTestimonialsSection } from '../components/nri/NriTestimonialsSection'
import { NriTreatmentsSection } from '../components/nri/NriTreatmentsSection'
import { NriWhyChooseSection } from '../components/nri/NriWhyChooseSection'

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

