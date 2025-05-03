import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";
import { GiJusticeStar } from "react-icons/gi";
import { PiHandshakeFill } from "react-icons/pi";

import imagen1 from '../assets/imgs/whychooseus/imagen1.png'
import imagen2 from '../assets/imgs/whychooseus/imagen2.png'
import imagen3 from '../assets/imgs/whychooseus/imagen3.png'
import imagen4 from '../assets/imgs/whychooseus/imagen4.png'

const items = [
  {
    icon: <FaUserTie className="text-5xl text-[#999] mb-6" />,
    text: "Formas de pago en",
    bold: "Efectivo, Transferencia y Cuotas",
  },
  {
    icon: <GiJusticeStar className="text-5xl text-[#999] mb-6" />,
    text: "Asesoría legal personalizada y",
    bold: "especializada",
  },
  {
    icon: <PiHandshakeFill className="text-5xl text-[#999] mb-6" />,
    text: "Expertos en soluciones legales",
    bold: "a medida",
  },
];

const galleryStrip = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
];

const Highlights = () => {
  return (
    <motion.section 
      id="why" 
      className="min-h-screen bg-white text-[#1A2238] py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.6 }}
          className="h-[2px] bg-[#b08d57] mx-auto mb-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold mb-6"
        >
          ¿Qué hacemos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#444] text-lg font-sans max-w-3xl mx-auto mb-2 leading-relaxed"
        >
          Cubrimos los requerimientos legales ante diversas situaciones. Nos caracterizamos por ofrecer un trabajo de calidad, basado en principios esenciales: <strong>honestidad, innovación, perseverancia, análisis minucioso del derecho</strong> y las <strong>ganas continuas de superación</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#444] text-lg font-sans max-w-3xl mx-auto leading-relaxed"
        >
          Estos fundamentos hacen que nuestro trabajo satisfaga los pedimentos de nuestros representados, con quienes mantenemos una relación basada en la <strong>confianza, el respeto y la empatía</strong>.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="px-10 py-10"
          >
            {item.icon}
            <p className="font-serif text-lg font-medium text-[#1A2238] leading-relaxed">
              {item.text} <br />
              <span className="text-[#b08d57] font-bold">{item.bold}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Galería inferior */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        className="flex flex-wrap justify-center gap-6 mt-20"
      >
        {galleryStrip.map((src, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`overflow-hidden grayscale hover:grayscale-0 transition duration-500 shadow-md
              ${i === 1 || i === 2 ? 'w-[160px] h-[260px]' : 'w-[160px] h-[200px]'}`}
          >
            <img
              src={src}
              alt={`Estudio ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Highlights;
