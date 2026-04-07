import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { SiteFooter } from './components/home/SiteFooter';
import { TopNavBar } from './components/home/TopNavBar';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NriPatientsPage } from './pages/NriPatientsPage';
import { UsPatientsPage } from './pages/UsPatientsPage';
import { RootCanalPage } from './pages/RootCanalPage';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (reduce) return;

    const sections = Array.from(document.querySelectorAll('main section, section'));
    if (sections.length === 0) return;

    sections.forEach((el) => el.classList.add('reveal-on-scroll'));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-dvh flex flex-col">
      <ScrollToTop />
      <TopNavBar />
      <div className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/nri-patients" element={<NriPatientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/usa-patients" element={<UsPatientsPage />} />
        <Route path="/root-canal" element={<RootCanalPage />} />
      </Route>
    </Routes>
  );
}

export default App;
