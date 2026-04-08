import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type CheckItemProps = {
  title: string
  description: string
}

function CheckItem({ title, description }: CheckItemProps) {
  return (
    <li className="flex items-start gap-4">
      <span className="bg-primary/10 rounded-full p-1 mt-1 shrink-0">
        <MaterialIcon name="check" className="text-primary text-xl" />
      </span>
      <div>
        <span className="font-bold block text-on-surface">{title}</span>
        <span className="text-on-surface-variant">{description}</span>
      </div>
    </li>
  )
}

export function AboutClinicOverviewSection() {
  return (
    <section className="py-24">
      <Container className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <img
            alt="Modern dental clinic interior"
            className="rounded-2xl shadow-sm object-cover w-full h-[500px]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgCtMoWEAL7UYi2-9DQ85bYFLrvhcQMmFo4i6X6_AR12UCP6Pex6lCbypCEPDvk2-bFfWJfDIuuPLKGSCHizSC-uxM_fcr1rPnLLgT9AO_kUhiHXsFeaLJGe2tYwFyhmTQp7TkqmpwU-kPp63oXOyiA0q_srJZ0CrrDo9PNOW5QSL6u1uL6Ew6lZo3v707MDYtc6eEVJ73xMsRRaUPTTdtEpJ1UDm9FHFMfS0_UW84VzuWqUrSEFLTU6gE0QSXg-cxdpSfJ0V8h8"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-on-surface mb-8">Our Clinic</h2>
          <p className="text-on-surface-variant mb-10">
            Located in the heart of Mumbai, Sparkling 32 is designed to be more than just a dental office. It is a space
            where advanced medical science meets high-end hospitality.
          </p>
          <ul className="space-y-6">
            <CheckItem title="ISO Certified Standards" description="We maintain world-class sterilization and hygiene protocols." />
            <CheckItem title="Global Technology" description="Equipped with digital X-rays and pain-free anesthetic delivery." />
            <CheckItem
              title="NRI Friendly Services"
              description="Customized schedules and tele-consultations for international patients."
            />
          </ul>
        </div>
      </Container>
    </section>
  )
}

