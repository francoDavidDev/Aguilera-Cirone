import { FaGavel, FaUserTie, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";
import banner_hero from '../assets/imgs/hero/banner2.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: `url(${banner_hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      />

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-20 mb-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="uppercase text-sm tracking-widest mb-2 text-gray-300"
        >
          ESTUDIO JURIDICO - AGUILERA & CIRONE
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "10rem" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#b08d57] mx-auto mb-6 my-5"
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-8"
        >
          Soluciones legales sólidas,<br /> resultados seguros
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          href="https://wa.me/5491165683058?text=Hola,%20quisiera%20hacer%20una%20consulta%20legal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white px-6 py-3 rounded text-white 
             bg-[#b08d57] md:bg-transparent
             md:border-white md:text-white
             transition-all duration-300 ease-in-out
             md:hover:bg-[#b08d57] md:hover:border-[#b08d57] md:hover:text-black 
             cursor-pointer uppercase text-sm tracking-wide"
        >
          Consultanos por WhatsApp
        </motion.a>

        {/* Consulta gratis */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-4 text-sm text-gray-300 italic"
        >
          Primera consulta sin cargo
        </motion.p>
      </motion.div>

      {/* Valores sobre el banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 bg-opacity-50 px-6 py-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[ 
            {
              icon: <FaGavel className="text-[#b08d57] text-4xl mb-3" />,
              title: "Prestigio",
              description:
                "Somos una firma de abogados de prestigio gracias a nuestra experiencia y compromiso con la excelencia.",
            },
            {
              icon: <FaUserTie className="text-[#b08d57] text-4xl mb-3" />,
              title: "Profesionalismo",
              description:
                "Nos enfocamos en establecer relaciones de confianza y compromiso con nuestros clientes a largo plazo.",
            },
            {
              icon: <FaBalanceScale className="text-[#b08d57] text-4xl mb-3" />,
              title: "Transparencia",
              description:
                "Proporcionamos información clara y accesible para que nuestros clientes tomen decisiones bien informadas.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center md:items-start ${
                i > 0 ? "md:border-l md:border-[#033667] md:pl-6" : ""
              }`}
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
