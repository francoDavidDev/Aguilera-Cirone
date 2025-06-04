import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailStatusModal = ({ isOpen, status, onClose }) => {
  const isSuccess = status === "success";

  // Evento de conversión de Google Ads
  useEffect(() => {
    if (isOpen && isSuccess && typeof window.gtag === "function") {
      window.gtag('event', 'conversion', {
        send_to: 'AW-10950443891/T3QyCOGUj9IaEPOGyuUo',
      });
    }
  }, [isOpen, isSuccess]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0c0c0c] border border-[#1A2238] text-white p-6 rounded-lg w-80 shadow-xl"
          >
            <h2 className="text-xl font-bold mb-2 text-[#b08d57]">
              {isSuccess ? "¡Mensaje enviado!" : "Error al enviar"}
            </h2>
            <p className="text-sm mb-4 text-gray-300">
              {isSuccess
                ? "Gracias por contactarte. Te responderemos pronto."
                : "Ocurrió un error al enviar el mensaje. Por favor, intentá nuevamente."}
            </p>
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-[#b08d57] text-black font-semibold rounded hover:bg-[#c49b5f] transition"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailStatusModal;
