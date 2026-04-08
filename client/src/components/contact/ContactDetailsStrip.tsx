import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';

const ADDRESS = '3rd Road, Bhagwan Society, Near Gurudwara, Khar West, Mumbai – 400052.';
const PHONE_LABEL = '+91 98989 68686';
const EMAIL = 'hello@sparkling32.com';
const MAPS_PLACE_LINK =
  'https://www.google.com/maps/place/Sparkling+32+:+Best+Dental+Clinic+near+me+in+khar+west.Implants,+Cleaning,+Extraction,Root+canal,+Whitening,Fillings/@19.0666903,71.7185416,9z/data=!4m10!1m2!2m1!1ssparkling+32+dental+clinic!3m6!1s0x3be7c93ff1670cd9:0xcb546687a72241c1!8m2!3d19.0666903!4d72.8391471!15sChpzcGFya2xpbmcgMzIgZGVudGFsIGNsaW5pY1ocIhpzcGFya2xpbmcgMzIgZGVudGFsIGNsaW5pY5IBB2RlbnRpc3TgAQA!16s%2Fg%2F11td73_2lv?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D';

export function ContactDetailsStrip() {
  return (
    <section className="bg-primary text-on-primary py-12">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 opacity-80 uppercase tracking-widest text-xs font-bold">
            <MaterialIcon name="location_on" className="text-sm" />
            Address
          </div>
          <p className="text-white">{ADDRESS}</p>
          <a
            className="inline-block text-on-primary underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all font-semibold"
            href={MAPS_PLACE_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Directions
          </a>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 opacity-80 uppercase tracking-widest text-xs font-bold">
            <MaterialIcon name="schedule" className="text-sm" />
            Clinic Hours
          </div>
          <p className="text-white">Monday – Sunday, By Appointment Only.</p>
          <p className="opacity-90 italic text-white">"We recommend calling ahead or booking via WhatsApp"</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 opacity-80 uppercase tracking-widest text-xs font-bold">
            <MaterialIcon name="contact_support" className="text-sm" />
            Get In Touch
          </div>
          <ul className="space-y-1 font-medium">
            <li>WhatsApp: {PHONE_LABEL}</li>
            <li>Phone: {PHONE_LABEL}</li>
            <li>Email: {EMAIL}</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

