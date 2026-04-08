import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="bg-primary text-on-primary py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div>
            <div className="text-2xl font-medium mb-6">Sparkling 32 Dental Clinic</div>
            <p className="opacity-80 text-on-primary text-sm">
              Sparkling 32 Dental Clinic is a modern dental care center in Mumbai offering a complete range of treatments—from
              routine dental care to advanced cosmetic procedures.
            </p>
          </div>

          <div>
            <h6 className="font-medium mb-6 text-primary-fixed uppercase tracking-widest text-xs">Quick Links</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="opacity-80 hover:opacity-100 transition-opacity" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="opacity-80 hover:opacity-100 transition-opacity" to="/#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="opacity-80 hover:opacity-100 transition-opacity" to="/about">
                  About Dr.
                </Link>
              </li>
              <li>
                <Link className="opacity-80 hover:opacity-100 transition-opacity" to="/nri-patients">
                  NRI Patients
                </Link>
              </li>
              <li>
                <Link className="opacity-80 hover:opacity-100 transition-opacity" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium mb-6 text-primary-fixed uppercase tracking-widest text-xs">Top Services</h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
                  Dental Implants
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
                  Invisalign
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
                  Root Canal
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
                  Smile Design
                </a>
              </li>
              <li>
                <a className="opacity-80 hover:opacity-100 transition-opacity" href="#">
                  Pediatric Dentistry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium mb-6 text-primary-fixed uppercase tracking-widest text-xs">Contact Us</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MaterialIcon name="location_on" className="text-primary-fixed text-lg" />
                <span className="opacity-80">3rd Road, Bhagwan Society, Near Gurudwara, Khar West, Mumbai</span>
              </li>
              <li className="flex items-center gap-3">
                <MaterialIcon name="call" className="text-primary-fixed text-lg" />
                <span className="opacity-80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <MaterialIcon name="mail" className="text-primary-fixed text-lg" />
                <span className="opacity-80">care@premiumdental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Sparkling 32 Dental Clinic Mumbai. Designed with ❤️ for smiles worldwide.
        </div>
      </Container>
    </footer>
  );
}

