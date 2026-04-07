import { Container } from '../ui/Container'
import { MaterialIcon } from '../ui/MaterialIcon'

type Testimonial = {
  name: string
  location: string
  quote: string
  imageSrc: string
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: 'Rajesh Mehta',
    location: 'London, UK',
    quote:
      '"Incredible efficiency. I had my implants done during a 2-week visit. The coordination via WhatsApp before I arrived made it stress-free."',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0vVaFNTjp_pR5VGNYM41DewfEi3JS0pqHfDfkyc7kzk_Fu4Co5pJWZ3-fhpcwuwIv221HFbkJ-JoFE_HTm4Q9DvIsDmJ--u8ooY1l5N9hFowc9dgAbE99MdQt1UAkngILJJkzRwPld3JBETslnliBs0ClLcpxPRV-rOiXGW-oS4P6n7WOlARfqmHaYlui5YGKCCra-GHrt78RaOfZ3vtnBzGk3a5wJexnAQBOb1nE_sIzVA7MuTVM527Lt1flhjGTqf9jpuktmZg',
  },
  {
    name: 'Saira Khan',
    location: 'Dubai, UAE',
    quote:
      '"The clinic is cleaner and more modern than many I\'ve seen in the Middle East. The Dr. speaks perfect English and explained everything clearly."',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPYVWm_EMjH0mewXgEV02-xeWOdet5D1UriAvwG761c4fEtbf8PcuMNSd9lbjziB4yX91rcVhwB-r26Kx8klfyVQGngEs6cNiGg-9tfVhv6JUSJuhIrtsx8sjYE-KFu8YYO6zx0U7c5kTTVJA02_MvGdNh6fwuL-GOZ1DHX7fymzuXwJUfCSSooETmS6QJhU287sRoBVIIRMamUPfY6tu04PNyLWpq4UWtG2dSF4Uiq4BtA71Aj0GeclaizS7cZ68sny7UUZi5SAU',
  },
  {
    name: 'Dr. Amit Patel',
    location: 'New Jersey, USA',
    quote:
      '"Being a doctor myself, I was very picky about sterilization. Sparkling 32 exceeded my expectations. Professional and precise work."',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGTc-1ikdUIy5sUd9SINWKvDtxx4p8CteEQgrwRtSg5z3pM06bkoUUAfwESjT1s5aV082oul2ap4JT-zEAqgm8v4DWMAEab_dPf5hT9STL510a1BxSL8wxVHioOl0kqq6VsNHFNzldyh3I0r9ony9dtCXtt0bUWuLP05v7Urt60IQVb5TtoLTBCSwNyUn3sX9p89d65SRZmq02FhTufX7UJmalow69gITrcXe0GLrN-097xUdWRnuTvpMydN2WN5zCoAqCzqNUaP0',
  },
] as const

function Stars() {
  return (
    <div className="flex text-tertiary mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <MaterialIcon key={i} name="star" filled className="text-sm" />
      ))}
    </div>
  )
}

export function NriTestimonialsSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <Container>
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Global Stories from Mumbai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative">
              <MaterialIcon name="format_quote" className="text-5xl text-primary/10 absolute top-4 right-4" />

              <div className="flex items-center gap-3 mb-6">
                <img alt={t.name} className="w-12 h-12 rounded-full object-cover" src={t.imageSrc} />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1">
                    <MaterialIcon name="location_on" className="text-sm text-primary" />
                    {t.location}
                  </p>
                </div>
              </div>

              <Stars />
              <p className="text-on-surface-variant italic">{t.quote}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

