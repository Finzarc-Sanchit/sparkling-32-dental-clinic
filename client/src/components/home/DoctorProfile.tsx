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
    <section className="py-24 bg-surface-container-low overflow-hidden" id="about">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            <img
              alt="Head Dentist at work"
              className="rounded-xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX8RPCGbpFescsceJg6LABMrsqxmvFhJJBaIHbEUzYaGrKe7H9SdGOdBEfC6TCOO4cPhLVtZtdRR6dQUDBwConi8rru9B4pD57q7pIu8Ow3ob6Dtx_tEiGQ1FtdEiHM2iaevPVqiHC6DvqYU5vhoCmt3bBm6jslWxjyhYtKZMqeczJ1zZaY6HkisJFuomS-S7mmt_fTRxTrq-BFfkiytp6NO_lXa1AspWgnLM3Ob7wrYQxH5qfoLfUEfwIq9wD81ZvE0CrwfYQ1c0"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-3 leading-tight">Dr. Twinkle Jain</h2>
            <div className="text-primary font-bold uppercase tracking-widest text-xs mb-6">About Doctor</div>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              Dr. Twinkle Jain is a dedicated dental surgeon with expertise in cosmetic and general dentistry. A graduate of
              Bharati Vidyapeeth Dental College, she brings a patient-centric approach—ensuring every treatment is comfortable,
              well-explained, and tailored to individual needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-surface p-8 rounded-xl shadow-sm">
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

