import { Container } from '../ui/Container';
import { SectionHeading } from './SectionHeading';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

function Timeline({ items }: { items: readonly TimelineItem[]; }) {
  return (
    <div className="relative">
      <div className="absolute top-3 left-0 w-full h-1 bg-primary/20 hidden md:block" />
      <div className="absolute top-0 left-3 w-1 h-full bg-primary/20 block md:hidden" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {items.map((it) => (
          <div key={it.year} className="flex flex-row md:flex-col items-center gap-6 md:gap-4 group">
            <div className="w-6 h-6 rounded-full bg-primary ring-8 ring-background group-hover:scale-125 transition-transform shrink-0" />
            <div className="md:text-center">
              <span className="block text-2xl font-bold text-primary mb-1">{it.year}</span>
              <h4 className="font-bold text-on-surface mb-2">{it.title}</h4>
              <p className="text-on-surface-variant">{it.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutTimelineSection() {
  return (
    <section className="py-24 overflow-hidden">
      <Container>
        <SectionHeading title="How We've Grown" />
        <Timeline
          items={[
            {
              year: '2010',
              title: 'The Foundation',
              description: 'Dr. Jain started her journey with a small boutique clinic focusing on personalized family care.',
            },
            {
              year: '2015',
              title: 'Tech Integration',
              description: 'Adopted digital diagnostic imaging and advanced root canal systems.',
            },
            {
              year: '2020',
              title: 'Sparkling 32 Launch',
              description: 'Relocated to our current modern facility with multi-specialty capabilities.',
            },
            {
              year: '2023',
              title: 'Global Outreach',
              description: 'Dedicated wing for NRI patients and advanced laser dentistry treatments.',
            },
          ]}
        />
      </Container>
    </section>
  );
}

