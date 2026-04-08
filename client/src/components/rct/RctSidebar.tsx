import { buildWhatsAppLink } from '../../utils/whatsapp'
import { MaterialIcon } from '../ui/MaterialIcon'

const PHONE_E164 = '+919898968686'

const INTERNAL_LINKS = [
  { href: '/nri-patients', label: 'NRI Patients' },
  { href: '/#services', label: 'Dental Implants' },
  { href: '/about', label: 'About Dr. Twinkle Jain' },
  { href: '/contact', label: 'Contact Us' },
] as const

export function RctSidebar() {
  const whatsappLink = buildWhatsAppLink()

  return (
    <aside className="hidden lg:block fixed right-10 top-40 z-40 w-80 bg-surface-container-lowest border-t-4 border-primary rounded-xl shadow-xl p-6">
      <h3 className="text-on-surface mb-4">Book Your Root Canal Consultation</h3>
      <p className="text-on-surface-variant mb-6">Expert care for NRI &amp; local patients in Mumbai.</p>

      <div className="space-y-3">
        <a
          className="w-full bg-tertiary text-on-tertiary py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95"
          href={whatsappLink}
        >
          <MaterialIcon name="chat" className="text-sm" />
          WhatsApp Us
        </a>
        <a
          className="w-full border-2 border-primary text-primary py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all active:scale-95"
          href={`tel:${PHONE_E164}`}
        >
          <MaterialIcon name="call" className="text-sm" />
          Call Us
        </a>
      </div>

      <div className="mt-6 pt-6 border-t border-outline-variant/20">
        <p className="text-primary mb-4">Internal Links</p>
        <ul className="space-y-2 text-sm text-on-surface-variant">
          {INTERNAL_LINKS.map((l) => (
            <li key={l.href}>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href={l.href}>
                <MaterialIcon name="arrow_forward" className="text-xs" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

