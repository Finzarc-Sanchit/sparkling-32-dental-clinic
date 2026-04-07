import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'

const PHONE_E164 = '+919898968686'
const PHONE_LABEL = '+91 98989 68686'
const EMAIL = 'hello@sparkling32.com'

export function ContactHeaderSection() {
  const whatsappLink = buildWhatsAppLink({
    message: "Hi, I'd like to enquire about a dental consultation at Sparkling 32.",
  })

  return (
    <section className="bg-surface-container-low py-20">
      <Container className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-on-surface tracking-tight leading-tight">
          Contact Sparkling 32 Dental Clinic
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          We're available on WhatsApp, phone, and email. Most WhatsApp messages are answered within{' '}
          <span className="font-bold text-primary">2 hours</span>.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <a
            className="w-full md:w-auto bg-tertiary text-on-tertiary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95"
            href={whatsappLink}
          >
            <MaterialIcon name="chat" />
            WhatsApp Us Now
          </a>
          <a
            className="w-full md:w-auto border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all active:scale-95"
            href={`tel:${PHONE_E164}`}
          >
            <MaterialIcon name="call" />
            Call Us: {PHONE_LABEL}
          </a>
          <a
            className="w-full md:w-auto text-on-surface-variant px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:text-primary transition-all"
            href={`mailto:${EMAIL}`}
          >
            <MaterialIcon name="mail" />
            Email Us
          </a>
        </div>
      </Container>
    </section>
  )
}

