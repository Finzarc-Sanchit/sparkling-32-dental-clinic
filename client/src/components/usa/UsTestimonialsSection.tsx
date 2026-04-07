import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Testimonial = {
  quote: string
  name: string
  location: string
  imageSrc: string
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      '"I needed three implants which were quoted at $12k in New Jersey. I flew to Mumbai, had them done at Sparkling 32 for a fraction of that, and still had a luxury holiday. Highly recommend!"',
    name: 'Arjun P.',
    location: 'New Jersey, USA',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABvCdhT0uWQtX22Ada0T5S8zeZ49_SoWB75QCMHKyloxnbNpahCKR01nrRjH0kW5-SNfM3OyTv-4e81fdqJoxJcZcQHhdQak01xgU_m5pZrVEI3Q8buxaueJ5OzjZDt60dxqITXO1zedCB87-Vz-56ouG_a2LO5ZQWwzkN2qpt0B9H8jYkgGLkPNFgWzy_HERgeIInOmRK9HKiOABkcNIGwt165YnIz4M06vxncT5iLvYwT_xhnhVmtEsazRlDZrOkLPGtWk482q8',
  },
  {
    quote:
      '"The veneers here are incredible. The clinic is cleaner and more modern than many I\'ve seen in California. The doctors are so patient and explained everything in perfect English."',
    name: 'Sunita R.',
    location: 'California, USA',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaSsLq7Hb4HezrM3c71BT_Y2XiKhjlCjfXzRFbj9z3joMUPMsKCpm4TJiLHgDKn-rYefhFZ76rxHiP2njMNRxS3G2SSKZrXTA4RrSVMRUOMt2vWaRxSdf2NTgzVEtYHWA_Ojrhyw5oyv-zh18Y9lbLES4tOiawkjcCkeO4ItBYdBJ93jQ2LmJSroCmd1OkliwFl9V-8wQu0z_5W9xTOQW8eNw3r_RaLxVTgaFI71yA_k5QQNFaRXdXVip61msMZCu3ywjsOZhwqQU',
  },
] as const

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-500 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <MaterialIcon key={i} name="star" filled />
      ))}
    </div>
  )
}

function Card(t: Testimonial) {
  return (
    <div className="bg-surface-container-low p-10 rounded-[2rem] relative">
      <div className="absolute -top-6 left-10 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center">
        <MaterialIcon name="format_quote" />
      </div>
      <Stars />
      <p className="text-xl text-on-surface leading-relaxed italic mb-8">{t.quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary-container overflow-hidden">
          <img alt={t.name} className="w-full h-full object-cover" src={t.imageSrc} />
        </div>
        <div>
          <div className="font-bold flex items-center gap-2">
            {t.name}{' '}
            <span className="text-sm grayscale" aria-hidden="true">
              🇺🇸
            </span>
          </div>
          <div className="text-sm text-on-surface-variant">{t.location}</div>
        </div>
      </div>
    </div>
  )
}

export function UsTestimonialsSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <h2 className="text-4xl font-extrabold text-on-surface mb-16 text-center">US Patients Who Chose Sparkling 32</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  )
}

