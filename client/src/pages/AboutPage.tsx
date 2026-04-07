import { AboutCtaSection } from '../components/about/AboutCtaSection'
import { AboutClinicOverviewSection } from '../components/about/AboutClinicOverviewSection'
import { AboutDoctorSection } from '../components/about/AboutDoctorSection'
import { AboutHeroSection } from '../components/about/AboutHeroSection'
import { AboutPhilosophySection } from '../components/about/AboutPhilosophySection'
import { AboutTimelineSection } from '../components/about/AboutTimelineSection'
import { Reveal } from '../components/ui/Reveal'

export function AboutPage() {
  return (
    <main>
      <Reveal>
        <AboutHeroSection />
      </Reveal>
      <Reveal delay={0.05}>
        <AboutPhilosophySection />
      </Reveal>
      <Reveal delay={0.05}>
        <AboutClinicOverviewSection />
      </Reveal>
      <Reveal delay={0.05}>
        <AboutDoctorSection />
      </Reveal>
      <Reveal delay={0.05}>
        <AboutTimelineSection />
      </Reveal>
      <Reveal delay={0.05}>
        <AboutCtaSection />
      </Reveal>
    </main>
  )
}

