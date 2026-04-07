export const WHATSAPP_PHONE = '9898968686'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi, I’m interested in dental treatment at Sparkling 32 Dental Clinic. I would like to understand the treatment plan and cost.'

type BuildWhatsAppLinkOptions = {
  phone?: string
  message?: string
}

function normalizePhone(phone: string) {
  return phone.replace(/[^\d]/g, '')
}

export function buildWhatsAppLink({ phone = WHATSAPP_PHONE, message = DEFAULT_WHATSAPP_MESSAGE }: BuildWhatsAppLinkOptions = {}) {
  const p = normalizePhone(phone)
  const text = encodeURIComponent(message)
  return `https://wa.me/${p}?text=${text}`
}

