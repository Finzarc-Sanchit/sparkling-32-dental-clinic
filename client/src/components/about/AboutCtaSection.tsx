import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'

export function AboutCtaSection() {
  const whatsappLink = buildWhatsAppLink()

  return (
    <section className="py-24">
      <Container>
        <div className="rounded-2xl bg-[linear-gradient(135deg,_var(--color-primary)_0%,_var(--color-primary-container)_100%)] p-12 md:p-20 text-center relative overflow-hidden text-on-primary">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to meet us?</h2>
            <p className="text-primary bg-white/90 inline-block px-4 py-1 rounded-full text-sm font-bold mb-10 uppercase tracking-widest">
              Experience world-class dental care
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                className="bg-tertiary text-on-tertiary px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-xl w-full md:w-auto justify-center"
                href={whatsappLink}
              >
                <MaterialIcon name="chat" />
                WhatsApp Us Now
              </a>
              <a
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary active:scale-95 transition-all w-full md:w-auto justify-center text-center"
                href="#contact"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

