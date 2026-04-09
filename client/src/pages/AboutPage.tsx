import { AboutCtaSection } from '../components/about/AboutCtaSection';
import { AboutDoctorSection } from '../components/about/AboutDoctorSection';
import { AboutHeroSection } from '../components/about/AboutHeroSection';
import { AboutPhilosophySection } from '../components/about/AboutPhilosophySection';

export function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutDoctorSection />
      <AboutCtaSection />
    </main>
  );
}

