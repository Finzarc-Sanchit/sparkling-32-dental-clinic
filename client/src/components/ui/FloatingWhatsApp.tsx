import whatsAppLogo from '@/assets/whatsApp-logo.png';
import { buildWhatsAppLink } from '@/utils/whatsapp';

export function FloatingWhatsApp() {
  const whatsappLink = buildWhatsAppLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={[
        'fixed bottom-5 right-5 z-[80]',
        'h-16 w-16 rounded-full',
        'grid place-items-center',
        'hover:scale-[1.03] active:scale-[0.98] transition-transform',
        'hover:cursor-pointer',
      ].join(' ')}
    >
      <img
        alt=""
        aria-hidden
        src={whatsAppLogo}
        className="h-16 w-16 object-contain"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}

