import { ContactDetailsStrip } from '../components/contact/ContactDetailsStrip.tsx';
import { ContactFaqStrip } from '../components/contact/ContactFaqStrip.tsx';
import { ContactFormMapSection } from '../components/contact/ContactFormMapSection.tsx';
import { ContactHeaderSection } from '../components/contact/ContactHeaderSection.tsx';

export function ContactPage() {
  return (
    <main>
      <ContactHeaderSection />
      <ContactDetailsStrip />
      <ContactFormMapSection />
      <ContactFaqStrip />
    </main>
  );
}

