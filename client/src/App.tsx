import { Outlet, Route, Routes } from 'react-router-dom';
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
import Lenis from 'lenis';

function AppLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
