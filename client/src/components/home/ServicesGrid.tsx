import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Reveal } from '../ui/Reveal';
import dentalImplants from '@/assets/services/dental-implant.jpg';
import rootCanalTreatment from '@/assets/services/root-canal.jpg';
import smileMakeoverVeneers from '@/assets/services/smile-makeover.jpg';
import teethWhitening from '@/assets/services/tooth-whitening.jpg';
import orthodonticsInvisalign from '@/assets/services/orthodontics-invisalign.jpg';
import fullMouthRehab from '@/assets/services/full-mouth.jpg';

const SERVICES = [
  {
    icon: 'medical_services',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacement using Swiss technology.',
    image: dentalImplants,
  },
  {
    icon: 'clean_hands',
    title: 'Root Canal Treatment',
    desc: 'Advanced microscopic RCT for pain-free preservation of natural teeth.',
    image: rootCanalTreatment,
  },
  {
    icon: 'auto_awesome',
    title: 'Smile Makeover / Veneers',
    desc: 'Custom-crafted porcelain veneers for a Hollywood-standard smile.',
    image: smileMakeoverVeneers,
  },
  {
    icon: 'flare',
    title: 'Teeth Whitening',
    desc: 'Professional zoom whitening for results 8 shades brighter in 1 hour.',
    image: teethWhitening,
  },
  {
    icon: 'view_comfy',
    title: 'Orthodontics / Invisalign',
    desc: 'Discreet teeth straightening with premium invisible aligners.',
    image: orthodonticsInvisalign,
  },
  {
    icon: 'face_retouching_natural',
    title: 'Full Mouth Rehab',
    desc: 'Comprehensive restoration for complex functional and aesthetic cases.',
    image: fullMouthRehab,
  },
] as const;

type Service = (typeof SERVICES)[number];

function ServiceBlock({ i, service }: { i: number; service: Service; }) {
  const n = String(i + 1).padStart(2, '0');
  const imageFirstMobile = i % 2 === 1;
  // Desktop-only override: 2nd and 5th items show image first.
  const imageFirstDesktop = i === 1 || i === 4;

  const textOrder = imageFirstMobile ? 'order-2' : 'order-1';
  const imageOrder = imageFirstMobile ? 'order-1' : 'order-2';

  const textOrderMd = imageFirstDesktop ? 'md:order-2' : 'md:order-1';
  const imageOrderMd = imageFirstDesktop ? 'md:order-1' : 'md:order-2';

  return (
    <Reveal variant="slide-up-lg" delay={0.06 * i}>
      <article className="group flex flex-col pb-14">
        <div className="text-sm tracking-widest text-on-primary/70">{n}</div>

        <div className="mt-3 flex flex-col gap-8">
          <div className={`space-y-3 ${textOrder} ${textOrderMd}`}>
            <h3 className="text-on-primary font-medium underline-offset-4 decoration-white/35 group-hover:underline">
              {service.title}
            </h3>
            <p className="text-on-primary/80">{service.desc}</p>
          </div>

          <div className={`overflow-hidden rounded-xl ring-1 ring-white/10 ${imageOrder} ${imageOrderMd}`}>
            <img
              alt={service.title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
              src={service.image}
            />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function ServicesGrid() {
  const columns: Service[][] = [[], [], []];
  SERVICES.forEach((s, i) => {
    columns[i % 3]?.push(s);
  });

  return (
    <section
      className="relative py-24 bg-primary text-on-primary overflow-hidden rounded-tl-[8rem] rounded-br-[8rem] md:rounded-tl-[18rem] md:rounded-br-[18rem]"
      id="services"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 10% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(900px 420px at 90% 80%, rgba(255,255,255,0.12), transparent 55%)',
        }}
      />
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="mb-4">Dental Services at Sparkling 32</h2>
              <p className="text-on-primary/80">
                A complete range of treatments—from routine dental care to advanced cosmetic procedures.
              </p>
            </div>
            <a className="text-on-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
              View All Services <MaterialIcon name="arrow_forward" />
            </a>
          </div>
        </Reveal>

        {/* Mobile: strictly sequential (01 → 06) */}
        <div className="md:hidden pt-10">
          {SERVICES.map((service, i) => (
            <ServiceBlock key={service.title} i={i} service={service} />
          ))}
        </div>

        {/* Desktop: editorial 3-column layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-0">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={[
                'pt-12',
                colIdx === 1 ? 'border-x border-white/12 px-10' : 'px-10',
              ].join(' ')}
            >
              {col.map((service) => {
                const i = SERVICES.findIndex((s) => s.title === service.title);
                return <ServiceBlock key={service.title} i={i} service={service} />;
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

