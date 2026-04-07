import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { useMemo, useState } from 'react'
import { DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppLink } from '../../utils/whatsapp'

export function ContactSection() {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [treatmentNeeded, setTreatmentNeeded] = useState('')
  const [preferredContact, setPreferredContact] = useState<'WhatsApp' | 'Call'>('WhatsApp')
  const [hasReports, setHasReports] = useState(false)

  const whatsappLink = useMemo(() => {
    const base = DEFAULT_WHATSAPP_MESSAGE
    const details = [
      name ? `Name: ${name}` : null,
      country ? `Country: ${country}` : null,
      treatmentNeeded ? `Treatment needed: ${treatmentNeeded}` : null,
      preferredContact ? `Preferred contact: ${preferredContact}` : null,
      hasReports ? 'I have reports to share.' : null,
    ]
      .filter(Boolean)
      .join('\n')

    const message = details ? `${base}\n\n${details}` : base
    return buildWhatsAppLink({ message })
  }, [country, hasReports, name, preferredContact, treatmentNeeded])

  return (
    <section className="py-24 bg-surface" id="contact">
      <Container className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Sparkling 32 Dental Clinic</h2>
          <p className="text-xl text-on-surface-variant mb-12">
            3rd Road, Bhagwan Society, Near Gurudwara, Khar West, Mumbai
          </p>

          <div className="space-y-4 mb-10">
            <a
              className="w-full bg-tertiary text-on-tertiary p-5 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:brightness-110 active:scale-98 transition-all"
              href={whatsappLink}
            >
              <MaterialIcon name="chat" />
              WhatsApp Us Now
            </a>
            <a
              className="w-full border-2 border-primary text-primary p-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary/5 active:scale-98 transition-all"
              href="tel:+91XXXXXXXXXX"
            >
              <MaterialIcon name="call" />
              Call Us: +91 XXXXX XXXXX
            </a>
          </div>

          <form
            className="p-6 bg-surface-container-low rounded-xl space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              window.open(whatsappLink, '_blank', 'noopener,noreferrer')
            }}
          >
            <div className="font-bold text-on-surface mb-1">Send your details</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="text-sm font-semibold text-on-surface-variant">
                Name
                <input
                  className="mt-1 w-full rounded-lg border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm font-semibold text-on-surface-variant">
                Country
                <input
                  className="mt-1 w-full rounded-lg border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g., USA"
                />
              </label>
            </div>
            <label className="text-sm font-semibold text-on-surface-variant block">
              Treatment Needed
              <input
                className="mt-1 w-full rounded-lg border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface"
                value={treatmentNeeded}
                onChange={(e) => setTreatmentNeeded(e.target.value)}
                placeholder="e.g., Root Canal / Implants / Veneers"
              />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <label className="text-sm font-semibold text-on-surface-variant">
                Preferred Contact
                <select
                  className="mt-1 w-full rounded-lg border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface"
                  value={preferredContact}
                  onChange={(e) => setPreferredContact(e.target.value as 'WhatsApp' | 'Call')}
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Call">Call</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-on-surface-variant flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[var(--color-primary)]"
                  checked={hasReports}
                  onChange={(e) => setHasReports(e.target.checked)}
                />
                Upload Reports (you can share on WhatsApp)
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary p-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 active:scale-98 transition-all"
            >
              Send on WhatsApp <MaterialIcon name="open_in_new" className="text-sm" />
            </button>
          </form>

          <div className="mt-6 p-6 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-4 text-on-surface mb-2 font-bold">
              <MaterialIcon name="schedule" className="text-primary" />
              Timings: Monday – Sunday (By Appointment)
            </div>
            <p className="text-sm text-on-surface-variant pl-10">
              Efficient scheduling with minimal waiting time and personalized attention.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl h-[400px] md:h-full min-h-[400px]">
          <iframe
            allowFullScreen
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120612.345678!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
            style={{ border: 0 }}
            title="Clinic Location"
            width="100%"
            height="100%"
          />
        </div>
      </Container>
    </section>
  )
}

