import { motion } from "framer-motion";
import penal from "../assets/imgs/services/penal.jpg";
import laboral from "../assets/imgs/services/laboral.jpg";
import comercial from "../assets/imgs/services/comercial.jpg";
import civil from "../assets/imgs/services/civil.jpg";
import logo from "../assets/imgs/logo2.png";

const services = [
  {
    title: "Derecho Civil",
    description: "Divorcios, Sucesiones , cuota de alimentos.",
    image: civil,
    mensaje: "Hola, estoy interesado en el servicio de DERECHO CIVIL.",
  },
  {
    title: "Derecho Penal",
    description: "Defensa en procesos penales.",
    image: penal,
    mensaje: "Hola, estoy interesado en el servicio de DERECHO PENAL.",
  },
  {
    title: "Derecho Laboral",
    description: "Despidos, accidentes laborales y Redacción de Carta Documento.",
    image: laboral,
    mensaje: "Hola, estoy interesado en el servicio de DERECHO LABORAL.",
  },
  {
    title: "Derecho Comercial",
    description: "Sociedades, contratos y concursos.",
    image: comercial,
    mensaje: "Hola, estoy interesado en el servicio de DERECHO COMERCIAL.",
  },
];

const Services = () => (
  <section className="h-auto px-6 pt-10 pb-10 bg-[#1A2238] text-white" id="services">
    {/* Título */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto text-center mb-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-serif text-white mb-2"
      >
        Nuestros Servicios
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg font-sans text-gray-300"
      >
        Brindamos asesoramiento legal en distintas ramas del derecho
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "16rem" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="h-0.5 bg-[#b08d57] mx-auto mt-4"
      />
    </motion.div>

    {/* Acordeón horizontal */}
    <div className="flex flex-col md:flex-row h-[400px] md:h-[70vh] max-w-7xl mx-auto overflow-hidden shadow-lg">
      {services.map(({ title, description, image, mensaje }, index) => (
        <a
          key={index}
          href={`https://wa.me/5491165683058?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 transition-all duration-500 ease-in-out hover:flex-[3] flex-[1]"
        >
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative w-full h-full overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/60 z-10 transition-all duration-500" />

            <div className="relative z-20 p-6 flex flex-col justify-end h-full text-center items-center">
              <h3 className="text-white font-bold text-lg font-serif group-hover:text-[#b08d57] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-300 text-sm font-sans mt-1">{description}</p>
            </div>
          </motion.div>
        </a>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center mt-10"
    >
      {/* Frase adicional */}
      <p className="mb-4 text-sm text-gray-300 italic">
        Primera consulta sin compromiso.
      </p>

      <a
        href="https://wa.me/5491165683058?text=Hola,%20tengo%20una%20consulta%20legal"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white text-[#1A2238] px-6 py-3 font-sans font-semibold shadow hover:shadow-md hover:bg-[#b08d57]/70 transition"
      >
        ¿Tenés dudas? Hablá con nosotros
        <img
          src={logo}
          alt="Logo del Estudio"
          className="w-6 h-6 object-contain"
        />
      </a>
    </motion.div>
  </section>
);

export default Services;
