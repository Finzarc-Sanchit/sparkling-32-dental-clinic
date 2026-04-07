import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';

type Treatment = {
  icon: string;
  title: string;
  description: string;
};

const TREATMENTS: readonly Treatment[] = [
  {
    icon: 'dentistry',
    title: 'Dental Implants',
    description: 'Lifetime solution for missing teeth using top-tier Swiss or German implant systems.',
  },
  {
    icon: 'face',
    title: 'Smile Makeovers',
    description: 'Complete aesthetic overhaul with digital smile design and expert craftsmanship.',
  },
  {
    icon: 'auto_awesome',
    title: 'Veneers & Crowns',
    description: 'High-strength Zirconia or E-max porcelain for durable, natural-looking aesthetics.',
  },
  {
    icon: 'health_and_safety',
    title: 'Full Mouth Rehabilitation',
    description: 'Restoring function and aesthetics for extensive dental wear or loss.',
  },
] as const;

function TreatmentCard({ icon, title, description }: Treatment) {
  return (
    <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
      <MaterialIcon name={icon} className="text-4xl text-primary mb-6" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-on-surface-variant mb-6">{description}</p>
      <a className="text-primary font-bold inline-flex items-center group-hover:gap-2 transition-all" href="#contact">
        Learn More →
      </a>
    </div>
  );
}

export function NriTreatmentsSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Treatments Ideal for NRI Visits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {TREATMENTS.map((t) => (
            <TreatmentCard key={t.title} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

