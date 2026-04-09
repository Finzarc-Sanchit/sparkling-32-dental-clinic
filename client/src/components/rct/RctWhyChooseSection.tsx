import { Container } from '../ui/Container';
import whyChooseImg from '@/assets/root-canal/why-us-1.jpg';
import whyChooseImg2 from '@/assets/root-canal/why-us-2.jpg';
import whyChooseImg3 from '@/assets/root-canal/why-us-3.jpg';
import { Award, ShieldCheck, Smile, Zap } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-surface py-24 text-on-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 15% 20%, rgba(0,104,93,0.10), transparent 58%), radial-gradient(900px 420px at 85% 80%, rgba(0,104,93,0.06), transparent 55%)',
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.10]" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(60% 50% at 30% 40%, black, transparent 70%)',
      }} />
      <Container>
        <div className="relative z-10 mt-10 sm:mt-0 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image collage */}
          <div className="order-2 lg:order-1 relative mx-auto mt-28 sm:mt-0 w-full max-w-xl">
            <div className="relative mx-auto h-[30rem] w-full max-w-[30rem]">
              <div className="absolute right-0 top-[-7.75rem] z-20 aspect-square w-56 overflow-hidden rounded-[1.25rem] bg-surface-container-lowest ring-1 ring-outline-variant/20 shadow-2xl sm:w-64">
                <img alt="" src={whyChooseImg} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>

              <div className="absolute left-0 top-[40%] z-10 aspect-square w-56 -translate-y-1/2 overflow-hidden rounded-[1.25rem] bg-surface-container-lowest ring-1 ring-outline-variant/20 shadow-2xl sm:w-64">
                <img alt="" src={whyChooseImg2} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>

              <div className="absolute right-6 bottom-[-1.75rem] z-0 aspect-square w-56 overflow-hidden rounded-[1.25rem] bg-surface-container-lowest ring-1 ring-outline-variant/20 shadow-2xl sm:w-64">
                <img alt="" src={whyChooseImg3} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Right: heading + 2x2 features */}
          <div className="order-1 lg:order-2">
            <h2 className="text-on-surface mb-4">Why Patients Choose Us for Root Canal</h2>
            <p className="max-w-2xl text-on-surface-variant">
              {REASONS[0].description}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              <div className="relative">
                <Award className="size-10 text-primary" />
                <div aria-hidden className="mt-5 h-0.5 w-28 bg-gradient-to-r from-primary/70 to-transparent" />
                <h3 className="mt-5 text-on-surface">{REASONS[0].title}</h3>
                <p className="text-on-surface-variant text-base">{REASONS[0].description}</p>
                <div aria-hidden className="mt-8 h-px w-full bg-outline-variant/25" />
              </div>

              <div className="relative">
                <ShieldCheck className="size-10 text-primary" />
                <div aria-hidden className="mt-5 h-0.5 w-28 bg-gradient-to-r from-primary/70 to-transparent" />
                <h3 className="mt-5 text-on-surface">{REASONS[1].title}</h3>
                <p className="text-on-surface-variant text-base">{REASONS[1].description}</p>
                <div aria-hidden className="mt-8 h-px w-full bg-outline-variant/25" />
              </div>

              <div className="relative">
                <Smile className="size-10 text-primary" />
                <div aria-hidden className="mt-5 h-0.5 w-28 bg-gradient-to-r from-primary/70 to-transparent" />
                <h3 className="mt-5 text-on-surface">{REASONS[2].title}</h3>
                <p className="text-on-surface-variant text-base">{REASONS[2].description}</p>
              </div>

              <div className="relative">
                <Zap className="size-10 text-primary" />
                <div aria-hidden className="mt-5 h-0.5 w-28 bg-gradient-to-r from-primary/70 to-transparent" />
                <h3 className="mt-5 text-on-surface">{REASONS[3].title}</h3>
                <p className="text-on-surface-variant text-base">{REASONS[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

