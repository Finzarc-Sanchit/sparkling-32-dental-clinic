import { RctFaqSection } from '../components/rct/RctFaqSection'
import { RctHeroSection } from '../components/rct/RctHeroSection'
import { RctPricingSection } from '../components/rct/RctPricingSection'
import { RctProcedureSection } from '../components/rct/RctProcedureSection'
import { RctSidebar } from '../components/rct/RctSidebar'
import { RctSymptomsSection } from '../components/rct/RctSymptomsSection'
import { RctWhatIsSection } from '../components/rct/RctWhatIsSection'
import { RctWhyChooseSection } from '../components/rct/RctWhyChooseSection'

export function RootCanalPage() {
  return (
    <main className="relative">
      <RctHeroSection />
      <RctSidebar />
      <RctWhatIsSection />
      <RctSymptomsSection />
      <RctProcedureSection />
      <RctPricingSection />
      <RctWhyChooseSection />
      <RctFaqSection />
    </main>
  )
}

