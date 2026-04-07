import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'

export function ContactStickyWhatsApp() {
  const whatsappLink = buildWhatsAppLink()

  return (
    <a
      className="md:hidden fixed bottom-20 left-4 right-4 bg-tertiary text-on-tertiary h-[48px] rounded-full flex items-center justify-center gap-3 font-bold shadow-2xl z-[60] active:scale-95 transition-transform"
      href={whatsappLink}
    >
      <MaterialIcon name="chat" filled />
      WhatsApp Us Now
    </a>
  )
}

