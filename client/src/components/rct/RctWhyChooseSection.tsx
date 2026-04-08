import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';

const REASONS = [
  {
    icon: 'workspace_premium',
    title: 'Experienced Dentist',
    description: 'Led by specialized endodontists with over a decade of clinical experience in complex cases.',
  },
  {
    icon: 'sanitizer',
    title: 'Hygienic Environment',
    description: 'Strict sterilization protocols following international ISO standards for patient safety.',
  },
  {
    icon: 'mood',
    title: 'Minimal Discomfort',
    description: 'Advanced micro-endodontic tools that minimize trauma and speed up recovery time.',
  },
  {
    icon: 'bolt',
    title: 'Efficient Treatment Process',
    description: 'Single-visit root canals available for most cases, respecting your time and convenience.',
  },
] as const;

export function RctWhyChooseSection() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-on-surface mb-16 text-center">Why Patients Choose Us for Root Canal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map((r) => (
            <div key={r.title} className="flex gap-6 p-8 bg-surface-container-low rounded-3xl">
              <MaterialIcon name={r.icon} className="text-primary text-4xl" />
              <div>
                <h3 className="text-on-surface mb-2">{r.title}</h3>
                <p className="text-on-surface-variant">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

