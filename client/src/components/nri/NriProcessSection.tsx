import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';

type Step = {
  n: number;
  icon: string;
  title: string;
  description: string;
};

const APPROACH_STEPS: readonly Step[] = [
  { n: 1, icon: 'video_call', title: 'Review your case online before you travel', description: '' },
  { n: 2, icon: 'assignment', title: 'Share a clear treatment plan', description: '' },
  { n: 3, icon: 'calendar_month', title: 'Schedule appointments in advance', description: '' },
  { n: 4, icon: 'bolt', title: 'Complete treatments efficiently within your stay', description: '' },
] as const;

function StepCard({ n, icon, title, description }: Step) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center text-3xl font-bold mb-6 shadow-xl relative">
        {n}
        <span className="absolute -top-2 -right-2 bg-surface-container-lowest text-primary p-2 rounded-full shadow-md leading-none">
          <MaterialIcon name={icon} className="text-xl" />
        </span>
      </div>
      <h3 className="mb-2">{title}</h3>
      {description ? <p className="text-on-surface-variant">{description}</p> : null}
    </div>
  );
}

export function NriProcessSection() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="nri-plan">
      <Container>
        <div className="text-center mb-16">
          <h2>Our Approach for NRI Patients</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mt-4">
            We understand your time is limited. That’s why we:
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-primary/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {APPROACH_STEPS.map((s) => (
              <StepCard key={s.n} {...s} />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}

