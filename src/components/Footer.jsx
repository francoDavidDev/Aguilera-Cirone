import { motion } from "framer-motion";
import logo from '../assets/imgs/logo2.png';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#1A2238] text-white py-10 px-6"
    >
      <motion.div
        variants={itemVariants}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo del Estudio" className="w-28 mb-3" />
          <h4 className="font-bold text-white mb-2 tracking-wide text-lg">Martínez Garraza Abogados</h4>
          <p className="text-gray-300">Estudio Jurídico</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-white font-medium mb-1">Dirección:</p>
          <p className="text-gray-300">Av. Ejemplo 123</p>
          <p className="text-gray-300">Buenos Aires, Argentina</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-white font-medium mb-1">Contacto:</p>
          <p className="text-gray-300">Teléfono: +54 11 1234-5678</p>
          <p className="text-gray-300">Email: contacto@martinezgarraza.com</p>
          <p className="text-white font-medium mt-4 mb-1">Horario:</p>
          <p className="text-gray-300">Lunes a Viernes: 09:00 - 17:00</p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="text-center mt-10 text-gray-400 text-xs"
      >
        &copy; {new Date().getFullYear()} Aguilera & Cirone Abogados. Todos los derechos reservados.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
