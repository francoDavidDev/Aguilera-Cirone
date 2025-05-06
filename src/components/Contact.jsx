import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import EmailStatusModal from "../components/EmailStatusModal";

const SERVICE_ID = "service_r1wdemo";
const TEMPLATE_ID = "template_o19b3o3";
const PUBLIC_KEY = "ohiQcA5q8g47JdngV";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setEmailStatus("success");
        setModalOpen(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        setEmailStatus("error");
        setModalOpen(true);
        console.error(error);
      });
  };

  return (
    <>
      <motion.section
        id="contacto"
        className="min-h-screen bg-[#0c0c0c] text-white py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl text-[#b08d57] italic mb-2">
            ¡Ponete en contacto con nosotros!
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-[#1A2238] py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ staggerChildren: 0.2 }}
          >
            {[{
              icon: <FaPhoneAlt className="text-[#b08d57] text-2xl mb-2 mx-auto" />,
              lines: [
                <a
                  key="tel"
                  href="https://wa.me/541165683058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#b08d57]"
                >
                  +54 11 6568-3058
                </a>,
              ],
            },
            {
              icon: <FaMapMarkerAlt className="text-[#b08d57] text-2xl mb-2 mx-auto" />,
              lines: ["Argentina", "Buenos Aires, CABA"],
            },
            {
              icon: <FaEnvelope className="text-[#b08d57] text-2xl mb-2 mx-auto" />,
              lines: [
                <a
                  key="mail"
                  href="mailto:estudioaguileracirone@gmail.com"
                  className="underline text-[#b08d57]"
                >
                  estudioaguileracirone@gmail.com
                </a>,
              ],
            }].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                {item.icon}
                {item.lines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3
            className="text-sm uppercase tracking-wider text-gray-400 mb-4"
            variants={fadeInUp}
          >
            Si tenés alguna inquietud, no dudes en enviarnos un mensaje.
          </motion.h3>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
          >
            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full p-3 bg-[#1a1a1a] text-white border border-[#1A2238] focus:outline-none"
              variants={fadeInUp}
              required
            />
            <motion.input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              className="w-full p-3 bg-[#1a1a1a] text-white border border-[#1A2238] focus:outline-none"
              variants={fadeInUp}
              required
            />
            <motion.input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Tu número de teléfono"
              className="w-full p-3 bg-[#1a1a1a] text-white border border-[#1A2238] focus:outline-none"
              variants={fadeInUp}
              required
            />
            <motion.input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Asunto"
              className="w-full p-3 bg-[#1a1a1a] text-white border border-[#1A2238] focus:outline-none"
              variants={fadeInUp}
              required
            />
            <motion.textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Mensaje"
              className="w-full p-3 bg-[#1a1a1a] text-white border border-[#1A2238] focus:outline-none"
              variants={fadeInUp}
              required
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-[#b08d57] text-black font-semibold px-6 py-3 hover:bg-[#c49b5f] transition"
              variants={fadeInUp}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-[#b08d57] italic mb-4">¡Seguinos en Instagram!</h4>
          <motion.div
            className="flex justify-center gap-4 text-white text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ staggerChildren: 0.15, delayChildren: 0.8 }}
          >
            <motion.a
              href="https://www.instagram.com/estudio_aguileracirone/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="hover:text-[#b08d57] text-[#b08d57] transition text-2xl"
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      <EmailStatusModal
        isOpen={modalOpen}
        status={emailStatus}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Contact;
