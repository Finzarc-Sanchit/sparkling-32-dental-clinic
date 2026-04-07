import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'

const PHONE_E164 = '+919898968686'

const BADGES = [
  { icon: 'check_circle', text: 'No Hidden Costs', tone: 'primary' as const },
  { icon: 'check_circle', text: 'Advanced Techniques', tone: 'primary' as const },
  { icon: 'check_circle', text: 'Comfortable Procedure', tone: 'primary' as const },
  { icon: 'star', text: '4.9 Google Rating', tone: 'tertiary' as const, filled: true },
] as const

export function RctHeroSection() {
  const whatsappLink = buildWhatsAppLink()

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
            SPECIALIZED ENDODONTICS
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-on-surface leading-[1.1] mb-6">
            Painless Root Canal Treatment in Mumbai
          </h1>
          <p className="text-xl text-on-surface-variant mb-10 max-w-xl">
            Save your natural tooth. Eliminate the pain. Most patients are surprised by how comfortable it is.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              className="bg-tertiary text-on-tertiary px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:brightness-110 transition-all active:scale-95"
              href={whatsappLink}
            >
              Book Consultation for RCT
            </a>
            <a
              className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95"
              href={`tel:${PHONE_E164}`}
            >
              Call Us
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-on-surface-variant bg-surface-container-low p-4 rounded-2xl w-fit max-w-full">
            {BADGES.map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <MaterialIcon
                  name={b.icon}
                  filled={Boolean((b as { filled?: boolean }).filled)}
                  className={`text-lg ${b.tone === 'tertiary' ? 'text-tertiary' : 'text-primary'}`}
                />
                {b.text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 aspect-[4/5] lg:aspect-square">
            <img
              className="w-full h-full object-cover"
              alt="Clinic interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTdcmK97DbJR1lUH3ct2Zp9TfNeEP7Oie-bsV3IQwSxmA7ztIB413O2Hvd7YbBN649iIIRD2y3R9lYv5eWumEBKjIBAlv3DRFfcKhrl3MAsLxGtHR1Yotiqy4yzeK7wnMcLquvAc3A3qQK91HAdGwfFFB5ojoBSOKncTul9_k_g7zljgR5Dzj2M1Cw2-zld1msCwv0mFk3goFeMfg34j1swnWFnNU7Mya4gcrnhRSpxVM1FLkCkrlIrvQmBAzQMYtvF9_XDvL7iDM"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

