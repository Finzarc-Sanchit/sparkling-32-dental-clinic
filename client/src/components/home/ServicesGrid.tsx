import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

const SERVICES = [
  {
    icon: 'medical_services',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacement using Swiss technology.',
  },
  {
    icon: 'clean_hands',
    title: 'Root Canal Treatment',
    desc: 'Advanced microscopic RCT for pain-free preservation of natural teeth.',
  },
  {
    icon: 'auto_awesome',
    title: 'Smile Makeover / Veneers',
    desc: 'Custom-crafted porcelain veneers for a Hollywood-standard smile.',
  },
  { icon: 'flare', title: 'Teeth Whitening', desc: 'Professional zoom whitening for results 8 shades brighter in 1 hour.' },
  {
    icon: 'view_comfy',
    title: 'Orthodontics / Invisalign',
    desc: 'Discreet teeth straightening with premium invisible aligners.',
  },
  {
    icon: 'face_retouching_natural',
    title: 'Full Mouth Rehab',
    desc: 'Comprehensive restoration for complex functional and aesthetic cases.',
  },
] as const

export function ServicesGrid() {
  return (
    <section className="py-24 bg-surface" id="services">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dental Services at Sparkling 32</h2>
            <p className="text-on-surface-variant text-lg">
              A complete range of treatments—from routine dental care to advanced cosmetic procedures.
            </p>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
            View All Services <MaterialIcon name="arrow_forward" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-surface-container-lowest p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <MaterialIcon name={s.icon} className="text-primary text-4xl mb-6" />
              <h4 className="text-xl font-bold mb-2">{s.title}</h4>
              <p className="text-on-surface-variant mb-6">{s.desc}</p>
              <a className="text-primary font-bold text-sm uppercase tracking-wider hover:underline" href="#">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

