import { NriCtaSection } from '../components/nri/NriCtaSection.tsx'
import { NriFaqSection } from '../components/nri/NriFaqSection.tsx'
import { NriHeroSection } from '../components/nri/NriHeroSection.tsx'
import { NriProcessSection } from '../components/nri/NriProcessSection.tsx'
import { NriSavingsSection } from '../components/nri/NriSavingsSection.tsx'
import { NriTestimonialsSection } from '../components/nri/NriTestimonialsSection.tsx'
import { NriTreatmentsSection } from '../components/nri/NriTreatmentsSection.tsx'
import { NriWhyChooseSection } from '../components/nri/NriWhyChooseSection.tsx'
import { Reveal } from '../components/ui/Reveal'

export function NriPatientsPage() {
  return (
    <main>
      <Reveal>
        <NriHeroSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriWhyChooseSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriProcessSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriSavingsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriTreatmentsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriTestimonialsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriFaqSection />
      </Reveal>
      <Reveal delay={0.05}>
        <NriCtaSection />
      </Reveal>
    </main>
  )
}

