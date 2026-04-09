import { HeroSection } from '../components/home/HeroSection';
import { NriSection } from '../components/home/NriSection';
import { HomeProcessSection } from '../components/home/HomeProcessSection';
import { PainPointEmpathy } from '../components/home/PainPointEmpathy';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { StatsBar } from '../components/home/StatsBar';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export function HomePage() {
  return (
    <div>
      <main>
        <HeroSection />
        <StatsBar />
        <PainPointEmpathy />
        <HomeProcessSection />
        <ServicesGrid />
        <NriSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}

