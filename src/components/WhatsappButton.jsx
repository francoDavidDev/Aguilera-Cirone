import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const handleWhatsAppClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-10950443891/T3QyCOGUj9IaEPOGyuUo",
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-2">
      {/* Mensaje gratuito flotante */}
      <div className="bg-white text-green-700 font-semibold text-sm px-3 py-1 rounded-full shadow-md animate-bounce">
        ¡Consultas GRATIS!
      </div>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/541165683058?text=Hola,%20quiero%20hacer%20una%20consulta%20gratuita"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contactar por WhatsApp"
        title="Hacé tu consulta gratuita por WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </div>
  );
};

export default WhatsappButton;
