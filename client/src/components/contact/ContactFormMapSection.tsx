import { useMemo, useState } from 'react'
import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'
import { DEFAULT_WHATSAPP_MESSAGE, buildWhatsAppLink } from '../../utils/whatsapp'

type Preferred = 'WhatsApp' | 'Phone Call'

const COUNTRIES = ['India', 'USA', 'UK', 'UAE', 'Canada', 'Australia', 'Singapore', 'Other'] as const

const TREATMENTS = [
  'Dental Implants',
  'Root Canal',
  'Smile Makeover',
  'Veneers & Crowns',
  'Teeth Whitening',
  'Orthodontics',
  'Full Mouth Rehab',
  'General Checkup',
  'Other',
] as const

export function ContactFormMapSection() {
  const [fullName, setFullName] = useState('')
  const [country, setCountry] = useState<(typeof COUNTRIES)[number]>('India')
  const [treatment, setTreatment] = useState<(typeof TREATMENTS)[number]>('General Checkup')
  const [preferred, setPreferred] = useState<Preferred>('WhatsApp')
  const [message, setMessage] = useState('')
  const [hasReports, setHasReports] = useState(false)

  const whatsappLink = useMemo(() => {
    const details = [
      fullName ? `Full name: ${fullName}` : null,
      country ? `Country: ${country}` : null,
      treatment ? `Treatment: ${treatment}` : null,
      preferred ? `Preferred contact: ${preferred}` : null,
      hasReports ? 'I have reports to share.' : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const msg = details ? `${DEFAULT_WHATSAPP_MESSAGE}\n\n${details}` : DEFAULT_WHATSAPP_MESSAGE
    return buildWhatsAppLink({ message: msg })
  }, [country, fullName, hasReports, message, preferred, treatment])

  const mapsLink =
    'https://www.google.com/maps/place/Sparkling+32+:+Best+Dental+Clinic+near+me+in+khar+west.Implants,+Cleaning,+Extraction,Root+canal,+Whitening,Fillings/@19.0666903,71.7185416,9z/data=!4m10!1m2!2m1!1ssparkling+32+dental+clinic!3m6!1s0x3be7c93ff1670cd9:0xcb546687a72241c1!8m2!3d19.0666903!4d72.8391471!15sChpzcGFya2xpbmcgMzIgZGVudGFsIGNsaW5pY1ocIhpzcGFya2xpbmcgMzIgZGVudGFsIGNsaW5pY5IBB2RlbnRpc3TgAQA!16s%2Fg%2F11td73_2lv?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D'
  const mapsEmbedSrc =
    'https://www.google.com/maps?output=embed&q=' +
    encodeURIComponent(
      'Sparkling 32 : Best Dental Clinic near me in khar west. Implants, Cleaning, Extraction, Root canal, Whitening, Fillings'
    ) +
    '&z=17'

  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_32px_32px_-4px_rgba(69,69,91,0.06)] border border-outline-variant/15">
          <div className="mb-8">
            <h2 className="text-on-surface mb-2">Send Us a Message</h2>
            <p className="text-on-surface-variant">We'll get back to you within 24 hours.</p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              window.open(whatsappLink, '_blank', 'noopener,noreferrer')
            }}
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">Full Name</label>
              <input
                className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20"
                placeholder="Enter your name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">Country of Residence</label>
                <select
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20"
                  value={country}
                  onChange={(e) => setCountry(e.target.value as (typeof COUNTRIES)[number])}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">Treatment Needed</label>
                <select
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value as (typeof TREATMENTS)[number])}
                >
                  {TREATMENTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">Upload X-Rays or Reports</label>
              <div className="relative group">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  type="file"
                  onChange={(e) => setHasReports(Boolean(e.target.files?.length))}
                />
                <div className="w-full bg-surface-container-low border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-on-surface-variant group-hover:bg-surface-container-high transition-colors">
                  <MaterialIcon name="upload_file" className="text-3xl mb-2 text-on-surface-variant" />
                  <span className="font-medium">Click to upload or drag &amp; drop</span>
                  <span className="text-xs opacity-60 mt-1">PDF, JPG, or DICOM (Max 10MB)</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">Preferred Contact Method</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setPreferred('WhatsApp')}
                  className={
                    preferred === 'WhatsApp'
                      ? 'flex-1 p-4 text-center rounded-xl bg-primary text-on-primary transition-all font-semibold'
                      : 'flex-1 p-4 text-center rounded-xl bg-surface-container-low transition-all font-semibold'
                  }
                >
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setPreferred('Phone Call')}
                  className={
                    preferred === 'Phone Call'
                      ? 'flex-1 p-4 text-center rounded-xl bg-primary text-on-primary transition-all font-semibold'
                      : 'flex-1 p-4 text-center rounded-xl bg-surface-container-low transition-all font-semibold'
                  }
                >
                  Phone Call
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">Message</label>
              <textarea
                className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20"
                placeholder="How can we help you today?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-tertiary text-on-tertiary py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg active:scale-[0.98]"
              type="submit"
            >
              Get My Treatment Plan
              <MaterialIcon name="arrow_forward" />
            </button>
          </form>
        </div>

        <div className="space-y-12 h-full flex flex-col">
          <div id="map" className="flex-grow min-h-[450px] relative overflow-hidden rounded-xl shadow-lg">
            <a
              className="absolute inset-0 z-10"
              href={mapsLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open location in Google Maps"
            />
            <iframe
              allowFullScreen
              loading="lazy"
              src={mapsEmbedSrc}
              style={{ border: 0 }}
              title="Clinic Location"
              width="100%"
              height="100%"
            />
          </div>

          <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20 space-y-6">
            <h3 className="text-on-surface flex items-center gap-2">
              <MaterialIcon name="explore" className="text-primary" />
              How to Find Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-on-surface-variant">
              <div className="space-y-3">
                <p className="text-on-surface">By Train</p>
                <p>5 mins walk from Khar Road Station. Head towards 3rd Road West.</p>
                <p className="text-on-surface">Landmarks</p>
                <p>Near the iconic Khar West Gurudwara and Bhagwan Society.</p>
              </div>
              <div className="space-y-3">
                <p className="text-on-surface">From Airport</p>
                <p>Approx. 20-30 mins drive from Chhatrapati Shivaji Maharaj International Airport (T2).</p>
                <p className="text-on-surface">Parking</p>
                <p>Valet parking available upon prior request for appointments.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

