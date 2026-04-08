import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

const CREDENTIALS = [
  { icon: 'school', title: 'BDS', sub: 'Bharati Vidyapeeth Dental College' },
  { icon: 'clean_hands', title: 'Cosmetic Dentistry', sub: 'Smile makeovers, veneers, aesthetic care' },
  { icon: 'medical_services', title: 'General Dentistry', sub: 'Routine care with clinical precision' },
  { icon: 'verified_user', title: 'Patient-centric Care', sub: 'Comfortable, well-explained treatment' },
] as const

export function DoctorProfile() {
  return (
    <section className="relative py-24 bg-surface-container-low overflow-hidden" id="about">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 15% 15%, rgba(255,255,255,0.14), transparent 60%), radial-gradient(900px 420px at 85% 80%, rgba(255,255,255,0.10), transparent 55%)',
        }}
      />
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Head Dentist at work"
                className="w-full aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX8RPCGbpFescsceJg6LABMrsqxmvFhJJBaIHbEUzYaGrKe7H9SdGOdBEfC6TCOO4cPhLVtZtdRR6dQUDBwConi8rru9B4pD57q7pIu8Ow3ob6Dtx_tEiGQ1FtdEiHM2iaevPVqiHC6DvqYU5vhoCmt3bBm6jslWxjyhYtKZMqeczJ1zZaY6HkisJFuomS-S7mmt_fTRxTrq-BFfkiytp6NO_lXa1AspWgnLM3Ob7wrYQxH5qfoLfUEfwIq9wD81ZvE0CrwfYQ1c0"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="mb-3">Dr. Twinkle Jain</h2>
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-6">About Doctor</div>
            <p className="text-on-surface-variant mb-8">
              Dr. Twinkle Jain is a dedicated dental surgeon with expertise in cosmetic and general dentistry. A graduate of
              Bharati Vidyapeeth Dental College, she brings a patient-centric approach—ensuring every treatment is comfortable,
              well-explained, and tailored to individual needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-surface-container-lowest/85 p-8 rounded-3xl border border-outline-variant/25 shadow-[0_26px_50px_-38px_rgba(0,0,0,0.55)] backdrop-blur">
              {CREDENTIALS.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <MaterialIcon name={c.icon} className="text-primary" />
                  <div>
                    <div className="font-bold">{c.title}</div>
                    <div className="text-sm text-on-surface-variant">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

