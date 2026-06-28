import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#1D120C] text-gray-300 py-2 px-4 text-sm flex flex-col sm:flex-row justify-between items-center z-50 relative border-b border-gray-800">
      
      {/* Left Side: Clickable Phone & Email */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-3 sm:mb-0">
        
        {/* Phone Link */}
        <a href="tel:+917059445500" className="flex items-center gap-2 hover:text-white transition">
          <FaPhoneAlt className="text-red-500 text-xs" />
          <span>Contact : +91 70594 45500</span>
        </a>
        
        <span className="hidden sm:block text-gray-600">|</span>
        
        {/* Email Link */}
        <a href="mailto:marypestcontrol@gmail.com" className="flex items-center gap-2 hover:text-white transition">
          <FaEnvelope className="text-[#D2B48C]" />
          <span>Email : marypestcontrol@gmail.com</span>
        </a>

      </div>

      {/* Right Side: WhatsApp Text (Mobile) / Button (Desktop) */}
      <div>
        <a 
          href="https://wa.me/917059445500?text=Hi%20Mary's%20Pest%20Control!%20I%20need%20help%20with%20a%20pest%20issue." 
          target="_blank" 
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 font-bold transition 
            text-[#25D366] hover:text-[#1ebe57] 
            sm:text-white sm:hover:text-white sm:bg-[#25D366] sm:hover:bg-[#1ebe57] sm:px-4 sm:py-1.5 sm:rounded-full sm:shadow-md sm:hover:shadow-lg sm:transform sm:hover:-translate-y-0.5
          "
        >
          <FaWhatsapp className="text-lg" />
          <span>WhatsApp Us!</span>
        </a>
      </div>

    </div>
  );
};

export default TopBar;