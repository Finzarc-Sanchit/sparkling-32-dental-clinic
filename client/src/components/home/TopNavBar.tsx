import { Container } from '../ui/Container';
import { MaterialIcon } from '../ui/MaterialIcon';
import { buildWhatsAppLink } from '../../utils/whatsapp';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/nri-patients', label: 'NRI Patients' },
  { href: '/usa-patients', label: 'USA Patients' },
  { href: '/contact', label: 'Contact' },
] satisfies readonly NavLink[];

const SERVICES_LINKS = [
  { href: '/root-canal', label: 'Root Canal' },
] satisfies readonly NavLink[];

const WHATSAPP_LINK = buildWhatsAppLink();

export function TopNavBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const activeHref = useMemo(() => `${location.pathname}${location.hash}`, [location.hash, location.pathname]);

  useEffect(() => {
    // Close the mobile menu after navigation.
    setMobileOpen(false);
    setServicesOpen(false);
  }, [activeHref]);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (!servicesOpen) return;
      const el = servicesRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setServicesOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <nav className="bg-surface/80 dark:bg-surface-container-low/80 backdrop-blur-xl shadow-sm fixed top-0 left-0 w-full z-50">
      <Container className="flex justify-between items-center w-full py-4">
        <NavLink className="text-2xl font-bold text-teal-800 tracking-tighter" to="/">
          Sparkling 32 Dental Clinic
        </NavLink>

        <div className="hidden md:flex items-center gap-8 font-semibold tracking-tight">
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className={`inline-flex items-center gap-1 ${location.pathname === '/root-canal' || (location.pathname === '/' && location.hash === '#services')
                  ? 'text-teal-700 border-b-2 border-teal-700 pb-1'
                  : 'text-on-surface-variant hover:text-teal-800 transition-colors'
                }`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <MaterialIcon name="expand_more" className={`text-base transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              role="menu"
              className={`absolute top-full left-0 mt-3 w-56 rounded-xl border border-outline-variant/30 bg-surface/95 backdrop-blur-xl shadow-lg p-2 ${servicesOpen ? 'block' : 'hidden'
                }`}
            >
              {SERVICES_LINKS.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  role="menuitem"
                  className="block px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-teal-800 transition-colors"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) => {
                // react-router's `isActive` won't consider hash-only matches,
                // so we treat "/#..." as active only when we're on "/" and the hash matches.
                const isHomeHash =
                  l.href.startsWith('/#') && location.pathname === '/' && location.hash === l.href.slice(1);
                const active = isActive || isHomeHash;

                return active
                  ? 'text-teal-700 border-b-2 border-teal-700 pb-1'
                  : 'text-on-surface-variant hover:text-teal-800 transition-colors';
              }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <a
          className="hidden md:flex bg-tertiary text-on-tertiary px-6 py-2.5 rounded-full font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm items-center gap-2"
          href={WHATSAPP_LINK}
        >
          <MaterialIcon name="chat" className="text-sm" />
          WhatsApp Us
        </a>

        <button
          type="button"
          className="md:hidden text-primary"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <MaterialIcon name="menu" />
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`md:hidden absolute top-full left-0 w-full border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl shadow-lg ${mobileOpen ? 'block' : 'hidden'
          }`}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-2 font-semibold tracking-tight">
            <div className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-70">
              Services
            </div>
            {SERVICES_LINKS.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) => {
                  const isHomeHash =
                    l.href.startsWith('/#') && location.pathname === '/' && location.hash === l.href.slice(1);
                  const active = isActive || isHomeHash;
                  return active
                    ? 'px-4 py-3 rounded-xl bg-primary/10 text-primary'
                    : 'px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low';
                }}
              >
                {l.label}
              </NavLink>
            ))}

            <div className="my-2 h-px bg-outline-variant/30" />

            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                className={({ isActive }) => {
                  const isHomeHash =
                    l.href.startsWith('/#') && location.pathname === '/' && location.hash === l.href.slice(1);
                  const active = isActive || isHomeHash;
                  return active
                    ? 'px-4 py-3 rounded-xl bg-primary/10 text-primary'
                    : 'px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low';
                }}
              >
                {l.label}
              </NavLink>
            ))}

            <a
              className="mt-2 bg-tertiary text-on-tertiary px-4 py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-sm"
              href={WHATSAPP_LINK}
            >
              <MaterialIcon name="chat" className="text-sm" />
              WhatsApp Us
            </a>
          </div>
        </Container>
      </div>
    </nav>
  );
}

