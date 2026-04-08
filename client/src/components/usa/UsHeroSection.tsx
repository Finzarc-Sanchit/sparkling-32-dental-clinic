import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Link } from 'react-router-dom';

export function UsHeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-surface">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold mb-6">
            <span className="text-lg" aria-hidden="true">
              🇺🇸
            </span>
            US Patients Welcomed
          </div>

          <h1 className="text-on-surface mb-6">
            Dental Treatment in India for Patients from the USA
          </h1>

          <p className="text-on-surface-variant mb-8 max-w-xl">
            Dental treatments in the USA can be expensive and time-consuming. At Sparkling 32 Dental Clinic, we provide
            advanced dental care at significantly lower costs while maintaining high standards of hygiene and precision.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              className="bg-primary hover:brightness-110 text-on-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 active:scale-95"
              to="/contact"
            >
              <MaterialIcon name="chat" />
              Contact Us
            </Link>
            <a
              className="border-2 border-primary text-primary hover:bg-primary-container hover:text-on-primary px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
              href="#cost"
            >
              See Cost Comparison
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 py-4 border-t border-outline-variant/30 text-sm font-medium text-on-surface-variant">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500" aria-hidden="true">
                ★
              </span>
              4.9 Rating
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="check_circle" className="text-sm" />
              English-Speaking Team
            </div>
            <div className="flex items-center gap-2">
              <MaterialIcon name="verified" className="text-sm" />
              International Standards
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            alt="Sparkling 32 Dental Clinic"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdYG-1E5I1UoacDis6LAb67nbewQSGRvtStM-bWb6WR3o4TqKI4oR7v_snSyWVfdzCI2B3m6ipwTuSb5z4yGzvXEmZ05hdzrAJBOW8e-IXJRLTMnPFpYIwAqqV3HBiZgm-3M4nfCXtiET8zbi1J6_i709zyjqwhYVZITu9C4fRoCXJ66eGWx6ZB1mgFRy0BAqAQWD8AnuHN8MJ2DtzQxM8omdUWJGPLw6TZFocNQcRpZG2REYKivkt2BGCWIrOfalJtRN6yIuH3kc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        </div>
      </Container>
    </section>
  );
}

