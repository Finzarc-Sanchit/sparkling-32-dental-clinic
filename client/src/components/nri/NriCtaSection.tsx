import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export function NriCtaSection() {
  const whatsappLink = buildWhatsAppLink();

  return (
    <section className="bg-tertiary text-on-tertiary py-20">
      <Container className="max-w-4xl text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">Get Your Treatment Plan Before You Travel</h2>
        <p className="text-xl opacity-90 mb-10 text-white">
          Save time and money with a pre-planned dental itinerary. Our concierge team is ready to help.
        </p>
        <a
          className="w-full sm:w-auto px-10 py-5 bg-surface-container-lowest text-tertiary font-bold rounded-2xl inline-flex items-center justify-center gap-3 shadow-2xl hover:brightness-105 active:scale-95 transition-all mx-auto"
          href={whatsappLink}
        >
          <MaterialIcon name="chat" filled className="text-2xl" />
          WhatsApp Us Your Reports
        </a>
      </Container>
    </section>
  );
}

