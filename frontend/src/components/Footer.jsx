import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaUserTie,
  FaClock,
} from "react-icons/fa";
// Change it to this:
import logo from "../assets/mpc.png";

function Footer() {
  return (
<footer className="bg-[#120703] text-[#D4B483] text-sm">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 text-sm">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Column 1 */}

          <div className="border border-[#2a130d] rounded-2xl p-8">

            <div className="flex items-center gap-4 mb-8">
              <img
                src={logo}
                alt="Logo"
                className="h-10"
              />

              <div>
<h3 className="text-base font-semibold text-white">                  MARY'S PEST CONTROL
                </h3>

                <p className="text-red-500 text-sm">
                  Eco Friendly Pest Services
                </p>
              </div>
            </div>

            <p className="leading-6 text-xs md:text-sm">
              Scientific structural exclusion and defensive
              soil barrier installations. Defending residential
              families and commercial operations year-round
              with professional care.
            </p>

            
          </div>

          {/* Column 2 */}

          <div className="border border-[#2a130d] rounded-2xl p-8">

            <h3 className="text-lg font-semibold text-white mb-5">
              REGISTERED OFFICE
            </h3>

            <hr className="border-[#2a130d] mb-6" />

            <div className="flex gap-4 mb-8">
              <FaMapMarkerAlt className="text-red-500 mt-1" />

              <div>
                <h4 className="text-xs md:text-sm leading-6">
                  Headquarters Address
                </h4>

                <a
  href="https://maps.app.goo.gl/WZhAae2MxqXJkfy79"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-400 transition"
>
  65/N, M.I.D Road, Behala,
  <br />
  Parnasree (Extn.), 1st Floor,
  <br />
  Kolkata - 700060
</a>
              </div>
            </div>

            <hr className="border-[#2a130d] mb-6" />

            <div className="flex gap-4">
              <FaClock className="mt-1" />

              <div>
                <h4 className="text-xs md:text-sm leading-6">
                  Service Hours
                </h4>

                <p className="text-xs md:text-sm leading-6">
                  Monday – Saturday:
                  24 Hours
                </p>

                <p>
                  Sunday: Emergency Dispatch Only
                </p>
              </div>
            </div>

          </div>

          {/* Column 3 */}

          <div className="border border-[#2a130d] rounded-2xl p-8">

            <h3 className="text-lg font-semibold text-white mb-5">
              OFFICE BOOKINGS & DESK
            </h3>

            <hr className="border-[#2a130d] mb-6" />

            <div className="space-y-6">

              <div className="flex gap-4">
  <FaPhoneAlt className="text-red-500 mt-1" />

  <div>
    <h4 className="text-sm font-semibold text-white">
      Office Mobiles
    </h4>

    <a
      href="tel:+917059445500"
      className="block hover:text-red-400 transition"
    >
      +91 70594 45500
    </a>

    <a
      href="tel:+917595807288"
      className="block mt-1 hover:text-red-400 transition"
    >
      +91 8481806488
    </a>
  </div>
</div>

              <div className="flex gap-4">
                <FaWhatsapp className="text-green-500 mt-1" />

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    WhatsApp Priority
                  </h4>

                  <a
  href="https://wa.me/917059445500"
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-400 hover:text-green-300 transition"
>
  +91 70594 45500
</a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1" />

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    E-mail Inbox
                  </h4>

                  <a
  href="mailto:marypestcontrol@gmail.com"
  className="hover:text-red-400 transition break-all"
>
  marypestcontrol@gmail.com
</a>
                </div>
              </div>

              <div className="flex gap-4">
                <FaGlobe className="mt-1" />

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Official Portal
                  </h4>

                  <a
  href="https://mary-s-pest-control.ueniweb.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-500 hover:text-red-400 transition"
>
  www.maryspestcontrol.com
</a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-[#2a130d] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs">
            © 2026 Mary's Pest Control Corp.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <a href="#">Privacy Policy</a>
            <a href="#">Environmental Compliance</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;  
