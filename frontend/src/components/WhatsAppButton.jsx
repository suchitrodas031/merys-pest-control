import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "917059445500";
  // A professional, welcoming message suitable for any general pest control inquiry
  const preFilledMessage = encodeURIComponent(
    "Hi Mary's Pest Control! I am looking for professional pest control services for my property. Could you please help me with an inspection and a quote?"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${preFilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
}

export default WhatsAppButton;