import { RctFaqSection } from '../components/rct/RctFaqSection.tsx';
import { RctHeroSection } from '../components/rct/RctHeroSection.tsx';
import { RctPricingSection } from '../components/rct/RctPricingSection.tsx';
import { RctFocusSection } from '../components/rct/RctProcedureSection.tsx';
import { RctSymptomsSection } from '../components/rct/RctSymptomsSection.tsx';
import { RctWhatIsSection } from '../components/rct/RctWhatIsSection.tsx';
import { RctWhyChooseSection } from '../components/rct/RctWhyChooseSection.tsx';
import { Reveal } from '../components/ui/Reveal';

export function RootCanalPage() {
  return (
    <main className="relative">
      <Reveal>
        <RctHeroSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RctWhatIsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RctSymptomsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RctFocusSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RctPricingSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RctWhyChooseSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RctFaqSection />
      </Reveal>
    </main>
  );
}

