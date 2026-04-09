import { Container } from '../ui/Container'
import { NriSectionHeading } from './NriSectionHeading'

import affordableDentalCareImg from '@/assets/nri-page/affordable-dental-care-with-quality-assurance.webp'
import advancedStandardsImg from '@/assets/nri-page/advanced-dental-care-standards-illustration.webp'
import efficientSchedulingImg from '@/assets/nri-page/efficient-scheduling-with-minimal-wait.webp'
import globalHealthcareImg from '@/assets/nri-page/global-healthcare-for-international-patients.webp'

const WHY_IMAGES = [
  {
    src: affordableDentalCareImg,
    alt: 'High-quality dental treatments at affordable costs',
  },
  {
    src: advancedStandardsImg,
    alt: 'Advanced equipment and hygiene standards',
  },
  {
    src: efficientSchedulingImg,
    alt: 'Efficient scheduling with minimal waiting time',
  },
  {
    src: globalHealthcareImg,
    alt: 'Comfortable experience for international patients',
  },
] as const

export function NriWhyChooseSection() {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <NriSectionHeading title="Why NRIs Choose Us" />
        <div className="grid grid-cols-2 gap-4 md:mx-auto md:w-max md:grid-cols-4 md:gap-6">
          {WHY_IMAGES.map((it) => (
            <div
              key={it.alt}
              className="w-full max-w-[min(100%,12rem)] overflow-hidden rounded-2xl bg-surface-container-lowest ring-1 ring-outline-variant/20 md:h-[17rem] md:w-[20rem] md:max-w-none"
            >
              <img
                alt={it.alt}
                className="h-full w-full object-cover"
                decoding="async"
                loading="lazy"
                src={it.src}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

