import { useState } from 'react';
import { Link } from 'react-router-dom';
import mpcLogo from '../assets/mpc.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    { name: "Bed Bug Control", path: "/services/bed-bug" },
    { name: "Cockroach Control", path: "/services/cockroach" },
    { name: "Rat Control", path: "/services/rat" },
    { name: "Termite Control", path: "/services/termite" },
    { name: "Mouse Control", path: "/services/mouse" },
    { name: "Fly Pest Control", path: "/services/fly" }, // Add this line!
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        
        {/* LOGO & TITLE SECTION */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={mpcLogo} 
            alt="MPC Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
          {/* Title color updated to #1D120C here */}
          <span className="text-xl md:text-2xl font-bold text-[#1D120C] uppercase tracking-wide">
            Mary's Pest Control
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#800000] font-medium transition">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/services" className="hover:text-[#800000] font-medium py-2 transition">Services</Link>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border-t-2 border-[#1D120C] rounded-b flex flex-col py-2 transition-all duration-300">
                {services.map((service, idx) => (
                  <Link 
                    key={idx} 
                    to={service.path} 
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#800000]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="hover:text-[#800000] font-medium transition">Blog</Link>
          <Link to="/contact" className="hover:text-[#800000] font-medium transition">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Mobile hamburger menu icon updated to match */}
          <svg className="w-6 h-6 text-[#1D120C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pt-2 pb-4 space-y-2 shadow-inner">
          <Link to="/" className="block py-2 hover:text-[#800000] font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block py-2 hover:text-[#800000] font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <div className="pl-4 border-l-2 border-[#1D120C] space-y-1">
            {services.map((service, idx) => (
              <Link key={idx} to={service.path} className="block py-1 text-sm text-gray-600 hover:text-[#800000]" onClick={() => setIsOpen(false)}>
                {service.name}
              </Link>
            ))}
          </div>
          <Link to="/blog" className="block py-2 hover:text-[#800000] font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="block py-2 hover:text-[#800000] font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;