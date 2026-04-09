import { Container } from '../ui/Container';
import { Award, ShieldCheck, Smile, Zap } from 'lucide-react';

type Treatment = {
  title: string;
  description: string;
};

const TREATMENTS: readonly Treatment[] = [
  {
    title: 'Dental Implants',
    description: 'Lifetime solution for missing teeth using top-tier Swiss or German implant systems.',
  },
  {
    title: 'Smile Makeovers',
    description: 'Complete aesthetic overhaul with digital smile design and expert craftsmanship.',
  },
  {
    title: 'Veneers & Crowns',
    description: 'High-strength Zirconia or E-max porcelain for durable, natural-looking aesthetics.',
  },
  {
    title: 'Full Mouth Rehabilitation',
    description: 'Restoring function and aesthetics for extensive dental wear or loss.',
  },
] as const;

function TreatmentCard({
  title,
  description,
  icon: Icon,
  showDivider,
}: Treatment & { icon: typeof Award; showDivider?: boolean; }) {
  return (
    <div className="relative">
      <Icon className="size-10 text-primary" />
      <div aria-hidden className="mt-5 h-0.5 w-28 bg-gradient-to-r from-primary/70 to-transparent" />
      <h3 className="mt-5 text-on-surface">{title}</h3>
      <p className="text-on-surface-variant text-base">{description}</p>
      {showDivider ? <div aria-hidden className="mt-8 h-px w-full bg-outline-variant/25" /> : null}
    </div>
  );
}

export function NriTreatmentsSection() {
  const cards = [
    { ...TREATMENTS[0], icon: Award, showDivider: true },
    { ...TREATMENTS[1], icon: ShieldCheck, showDivider: true },
    { ...TREATMENTS[2], icon: Smile },
    { ...TREATMENTS[3], icon: Zap },
  ] as const;

  return (
    <section className="py-24 bg-surface">
      <Container>
        <h2 className="text-center mb-16">Treatments Ideal for NRI Visits</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {cards.map((t) => (
            <TreatmentCard key={t.title} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

