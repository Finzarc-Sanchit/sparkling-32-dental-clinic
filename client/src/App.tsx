import { Outlet, Route, Routes } from 'react-router-dom';
import { SiteFooter } from './components/home/SiteFooter';
import { TopNavBar } from './components/home/TopNavBar';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NriPatientsPage } from './pages/NriPatientsPage';
import { UsPatientsPage } from './pages/UsPatientsPage';
import { RootCanalPage } from './pages/RootCanalPage';

function AppLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <TopNavBar />
      <div className="flex-1">
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
        <Route path="/nri" element={<NriPatientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/usa" element={<UsPatientsPage />} />
        <Route path="/root-canal" element={<RootCanalPage />} />
      </Route>
    </Routes>
  );
}

export default App;
