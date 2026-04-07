import { AboutCtaSection } from '../components/about/AboutCtaSection'
import { AboutClinicOverviewSection } from '../components/about/AboutClinicOverviewSection'
import { AboutDoctorSection } from '../components/about/AboutDoctorSection'
import { AboutHeroSection } from '../components/about/AboutHeroSection'
import { AboutPhilosophySection } from '../components/about/AboutPhilosophySection'
import { AboutTimelineSection } from '../components/about/AboutTimelineSection'

export function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutClinicOverviewSection />
      <AboutDoctorSection />
      <AboutTimelineSection />
      <AboutCtaSection />
    </main>
  )
}

