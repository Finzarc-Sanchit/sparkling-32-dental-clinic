import { MaterialIcon } from '../ui/MaterialIcon'
import { buildWhatsAppLink } from '../../utils/whatsapp'

export function MobileWhatsAppBar() {
  const whatsappLink = buildWhatsAppLink()

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex items-center justify-center bg-orange-700 dark:bg-orange-800 h-[48px] shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <a
        className="flex flex-row items-center justify-center gap-2 w-full h-full text-white font-bold text-sm uppercase tracking-widest whatsapp-pulse active:scale-98 transition-transform"
        href={whatsappLink}
      >
        <MaterialIcon name="chat" />
        Chat With Us
      </a>
    </div>
  )
}

