import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Reveal } from '../ui/Reveal';
import { CardsSpotlightCarousel } from '../ui/cards';

const ROW_1 = [
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60',
    name: 'Ananya Mehta',
    handle: 'Teeth Whitening · Mumbai',
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    name: 'Neha Sharma',
    handle: 'Veneers · Pune',
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
    name: 'Priya Nair',
    handle: 'Dental Implants · Bengaluru',
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    name: 'Arjun Verma',
    handle: 'Root Canal · Delhi',
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=60',
    name: 'Meera Iyer',
    handle: 'Smile Makeover · Chennai',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    name: 'Rohit Kapoor',
    handle: 'Invisalign · Hyderabad',
  },
] as const;

const ROW_2 = [
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    name: 'Vikram Singh',
    handle: 'Full Mouth Rehab · Ahmedabad',
  },
  {
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    name: 'Kavya Reddy',
    handle: 'Dental Implants · Visakhapatnam',
  },
  {
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&auto=format&fit=crop&q=60',
    name: 'Siddharth Jain',
    handle: 'Veneers · Jaipur',
  },
  {
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&auto=format&fit=crop&q=60',
    name: 'Ishita Das',
    handle: 'Root Canal · Kolkata',
  },
  {
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=60',
    name: 'Aditi Kulkarni',
    handle: 'Whitening · Nashik',
  },
] as const;

export function TestimonialsSection() {
  const TESTIMONIALS = [...ROW_1, ...ROW_2];

  return (
    <section className="relative py-24 bg-surface-container-low overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 15% 15%, rgba(255,255,255,0.14), transparent 60%), radial-gradient(900px 420px at 85% 80%, rgba(255,255,255,0.10), transparent 55%)',
        }}
      />
      <Container>
        <Reveal variant="fade">
          <h2 className="text-center mb-16">Patients from 30+ countries trust us</h2>
        </Reveal>
        <p className="text-center -mt-12 mb-16">
          Real stories from Indian patients who chose Sparkling 32 for comfortable, confident care.
        </p>

        <Reveal variant="slide-up" delay={0.05}>
          <CardsSpotlightCarousel cards={TESTIMONIALS} />
        </Reveal>

        <Reveal variant="scale" delay={0.08}>
          <div className="mt-16 max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative group aspect-video shadow-2xl">
            <img
              alt="Clinic Interior Video Placeholder"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDq0qGL3FjdI8UJQ3QUpVMMxsE00fEfMrcOiqf0xAvQHJlq56hTsdfi1sHeocFc9PkJaFuMI2zzSq0M-b016xRa0cGu-Dk-3FrpUC41VQH8Jt470SlaayPOMbN1sEnFSQRpu4hDNSu4FpCcUCNsZH3AS-8sbemxur1w3zLgTyghA8-At_EB8EpUcQJi7kibDqDgVFy0uZ4AisZr05tkG9j1XOwRAQAYiMEgWRD5ZKugb__p7f2Z064v8uE1kDBzorx-uhvvKUdf-0"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all cursor-pointer">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl active:scale-90 transition-transform">
                <MaterialIcon name="play_arrow" filled className="text-4xl" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="font-bold text-lg">Video Testimonial</div>
              <div className="text-sm opacity-80">"My experience as an NRI patient"</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

