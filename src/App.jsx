import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

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

      </Routes>

     {/* ← También visible en todas las páginas */}
      <WhatsappButton /> {/* ← Flotante en todas las páginas */}
    </Router>
  );
};

export default App;
