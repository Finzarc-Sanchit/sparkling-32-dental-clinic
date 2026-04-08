import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'

export function ContactNriCalloutSection() {
  const whatsappLink = buildWhatsAppLink()

  return (
    <section className="bg-surface-container-low py-20">
      <Container className="max-w-4xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <MaterialIcon name="flight_takeoff" className="text-sm" />
          International Services
        </div>
        <h2 className="text-on-surface">Travelling from Abroad?</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          NRI patients can start the consultation process before flying. Share your X-rays on WhatsApp and receive your
          treatment plan within <span className="font-bold">24 hours</span>.
        </p>
        <div className="pt-4">
          <a
            className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-md"
            href={whatsappLink}
          >
            <MaterialIcon name="chat" />
            WhatsApp Your Reports Now
          </a>
        </div>
      </Container>
    </section>
  )
}

