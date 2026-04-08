import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Reveal } from '../ui/Reveal';

export function PainPointEmpathy() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(900px 420px at 15% 15%, rgba(255,255,255,0.16), transparent 60%), radial-gradient(900px 420px at 85% 80%, rgba(255,255,255,0.10), transparent 55%)',
        }}
      />
      <Reveal variant="scale" className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="mb-6">We understand why you hesitated.</h2>
        <p className="text-on-surface-variant">
          Dental anxiety and billing transparency are real concerns. We've built our practice to address them head-on.
        </p>
      </Reveal>

      <Container className="grid md:grid-cols-2 gap-8">
        <Reveal variant="slide-left" delay={0.05}>
          <div className="relative bg-surface-container-lowest/85 p-10 rounded-3xl border border-outline-variant/25 shadow-[0_28px_50px_-38px_rgba(0,0,0,0.55)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_40px_70px_-44px_rgba(0,0,0,0.6)]">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MaterialIcon name="payments" className="text-3xl" />
            </div>
            <h3 className="mb-4">Local Patients</h3>
            <p className="text-on-surface-variant italic">
              "Worried about pain? Or getting a surprise bill? We eliminate both with upfront quotes and sedation dentistry
              options."
            </p>
          </div>
        </Reveal>

        <Reveal variant="slide-right" delay={0.08}>
          <div className="relative bg-surface-container-lowest/85 p-10 rounded-3xl border border-outline-variant/25 shadow-[0_28px_50px_-38px_rgba(0,0,0,0.55)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_40px_70px_-44px_rgba(0,0,0,0.6)]">
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-tertiary/10 text-tertiary">
              <MaterialIcon name="flight_takeoff" className="text-3xl" />
            </div>
            <h3 className="mb-4">NRI Patients</h3>
            <p className="text-on-surface-variant italic">
              "Flying in from abroad? We'll plan your entire treatment around your trip — start to finish coordination via
              WhatsApp."
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

