import { RctFaqSection } from '../components/rct/RctFaqSection.tsx';
import { RctHeroSection } from '../components/rct/RctHeroSection.tsx';
import { RctPricingSection } from '../components/rct/RctPricingSection.tsx';
import { RctFocusSection } from '../components/rct/RctProcedureSection.tsx';
import { RctSymptomsSection } from '../components/rct/RctSymptomsSection.tsx';
import { RctWhatIsSection } from '../components/rct/RctWhatIsSection.tsx';
import { RctWhyChooseSection } from '../components/rct/RctWhyChooseSection.tsx';

export function RootCanalPage() {
  return (
    <main className="relative">
      <RctHeroSection />
      <RctWhatIsSection />
      <RctSymptomsSection />
      <RctFocusSection />
      <RctPricingSection />
      <RctWhyChooseSection />
      <RctFaqSection />
    </main>
  );
}

