import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from '../assets/imgs/logo2.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 max-w-7xl mx-auto flex justify-between items-center bg-transparent">
      {/* Logo */}
      <ScrollLink
        to="hero"
        smooth={true}
        offset={-80}
        duration={500}
        className="cursor-pointer"
      >
        <img
          src={logo}
          alt="Aguilera & Cirone Logo"
          className="h-10 w-auto md:h-12"
        />
      </ScrollLink>

      {/* Botón hamburguesa */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Abrir menú"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar mobile */}
      <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#1A2238] p-8 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        {/* Botón cerrar */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-white text-2xl"
          aria-label="Cerrar menú"
        >
          &times;
        </button>

        <ul className="space-y-6 mt-20">
          {[
            { label: "Inicio", to: "hero" },
            { label: "Nosotros", to: "about" },
            { label: "Servicios", to: "services" },
            { label: "Por qué elegirnos", to: "why" },
            { label: "Contacto", to: "contacto" },
          ].map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={item.to}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className="block text-white hover:text-[#b08d57] font-medium cursor-pointer transition"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desktop */}
      <ul className="hidden md:flex md:items-center gap-6">
        {[
          { label: "Inicio", to: "hero" },
          { label: "Nosotros", to: "about" },
          { label: "Servicios", to: "services" },
          { label: "Por qué elegirnos", to: "why" },
          { label: "Contacto", to: "contacto" },
        ].map((item, index) => (
          <li key={index}>
            <ScrollLink
              to={item.to}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-white hover:text-[#b08d57] font-medium cursor-pointer transition"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
