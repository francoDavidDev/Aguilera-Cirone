import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import ScrollToTop from './components/ScrollToTop';
import WhatsappButton from './components/WhatsappButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> {/* ← Ahora siempre visible */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

     {/* ← También visible en todas las páginas */}
      <WhatsappButton /> {/* ← Flotante en todas las páginas */}
    </Router>
  );
};

export default App;
