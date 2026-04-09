import { RctFaqSection } from '../components/rct/RctFaqSection.tsx';
import { RctHeroSection } from '../components/rct/RctHeroSection.tsx';
import { RctWhatIsSection } from '../components/rct/RctWhatIsSection.tsx';
import { RctWhyChooseSection } from '../components/rct/RctWhyChooseSection.tsx';

export function RootCanalPage() {
  return (
    <main className="relative">
      <RctHeroSection />
      <RctWhatIsSection />
      <RctWhyChooseSection />
      <RctFaqSection />
    </main>
  );
}

