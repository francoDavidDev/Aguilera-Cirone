import { motion } from 'framer-motion';
import imageTemis from '../assets/imgs/about/dibujo3.png';
import logo from '../assets/imgs/logo2.png';

const galleryImages = [
  "https://img.freepik.com/foto-gratis/hombre-negocios-brazos-cruzados-sobre-fondo-blanco_1368-5998.jpg",
  "https://img.freepik.com/foto-gratis/joven-empresaria-gafas_329181-11694.jpg",
  "https://img.freepik.com/foto-gratis/mujer-sonriente-chaqueta-marron_1098-1290.jpg",
  "https://img.freepik.com/foto-gratis/retrato-hispano-limpio-delgado-natural_1368-2048.jpg"
];

const About = () => {
  return (
    <section id="about" className="relative h-[90vh] bg-[#0c0c0c] text-white py-20 px-6 overflow-hidden">
      {/* Imagen decorativa lateral con animación */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        className="absolute hidden md:block left-0 top-0 h-full w-1/2 pointer-events-none"
      >
        <img
          src={imageTemis}
          alt="Ilustración de la Justicia"
          className="h-full w-auto object-contain mx-auto"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center md:pl-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed italic">
            Somos dos abogadas recibidas de la Facultad de Derecho de la Universidad de Buenos Aires, que tenemos la convicción y la pasión por nuestra profesión, la cual fue posible luego de varios años de esfuerzo y dedicación.
            <br /><br />
            La palabra "abogado", proviene del latín <strong>ABOGAR</strong> que significa ayudar. Esa será nuestra premisa primordial para poder aplicar nuestros conocimientos a las necesidades de nuestros patrocinados.
          </p>

          <div className="flex gap-6 mb-8 text-center">
            {[{ label: "Años de experiencia", value: "15+" }, { label: "Casos resueltos", value: "300+" }, { label: "Clientes satisfechos", value: "100%" }].map((item, idx) => (
              <div key={idx}>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Botón sin bordes redondeados */}
          <a
            href="https://wa.me/5491165683058?text=Hola,%20tengo%20una%20consulta%20legal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-white text-[#1A2238] px-6 py-3 font-sans font-semibold shadow hover:shadow-md hover:bg-amber-400/70 transition"
          >
            <img src={logo} alt="Logo del Estudio" className="w-5 h-5 object-contain" />
            <span className="text-center">¿Tenés dudas? Hablá con nosotros</span>
            <img src={logo} alt="Logo del Estudio" className="w-5 h-5 object-contain" />
          </a>
        </motion.div>

        {/* Galería sin bordes redondeados */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.35,
              },
            },
          }}
          className="grid grid-cols-2 gap-4"
        >
          {galleryImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Profesional ${index + 1}`}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`shadow-xl w-full h-[200px] object-cover object-top ${index === 0 ? 'row-span-2 h-[420px]' : ''}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
