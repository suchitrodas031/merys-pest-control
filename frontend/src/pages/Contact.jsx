import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
    const handleChange = (e ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
    const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.category ||
      !formData.message
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
axios.post(
    `${import.meta.env.VITE_API_URL}/api/contact`,
    formData
);
      toast.success(
  "Inquiry submitted successfully! We will contact you shortly."
);
      setSuccess(true);
      

      setFormData({
        name: "",
        phone: "",
        email: "",
        category: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {

      toast.error("Something went wrong!");

    }

    finally {
  setLoading(false);
}
  };
  
  return (
    <section className="bg-[#F7F3EE] py-12 md:py-20">
      <AnimatePresence>

  {success && (

    <motion.div

      initial={{ opacity: 0, scale: 0.5 }}

      animate={{ opacity: 1, scale: 1 }}

      exit={{ opacity: 0, scale: 0.5 }}

      transition={{ duration: 0.4 }}

      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"

    >

      <div className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-sm">

        <FaCheckCircle
          className="text-green-500 text-7xl mx-auto animate-bounce"
        />

        <h2 className="text-3xl font-bold mt-6">

          Success!

        </h2>

        <p className="text-gray-600 mt-3">

          Your enquiry has been sent successfully.

        </p>

      </div>

    </motion.div>

  )}

</AnimatePresence>
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Side - Contact Form */}

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#2A140D] text-white p-3 rounded-lg">
                <FaEnvelope size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Send A Direct Inquiry
                </h2>

                <p className="text-gray-500">
                  For service queries and support requests
                </p>
              </div>
            </div>

            <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 font-semibold text-sm uppercase text-gray-600">
                    Full Name
                  </label>

                  <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter Your Name"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
/>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-sm uppercase text-gray-600">
                    Phone Number
                  </label>

                  <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="+91 XXXXX XXXXX"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
/>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 font-semibold text-sm uppercase text-gray-600">
                    Email Address
                  </label>

                  <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="example@email.com"
  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
/>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-sm uppercase text-gray-600">
                    Subject Category
                  </label>

                      <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-700">
                    <option value="">Select Category</option>
                    
                    <option value="Residential Pest Control">
  Residential Pest Control
</option>

<option value="Commercial Pest Control">
  Commercial Pest Control
</option>

<option value="Termite Treatment">
  Termite Treatment
</option>

<option value="Cockroach Control">
  Cockroach Control
</option>

<option value="General Inquiry">
  General Inquiry
</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="block mb-2 font-semibold text-sm uppercase text-gray-600">
                  Description
                </label>

                <textarea
  rows="5"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Describe your pest issue or what you need help with..."
  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-700"
></textarea>
              </div>

              <button
  type="submit"
  disabled={loading}
  className="
    w-full
    bg-[#8B0015]
    hover:bg-[#700012]
    text-white
    py-4
    rounded-xl
    font-semibold
    flex
    justify-center
    items-center
    gap-3
    transition-all
    duration-300
    disabled:opacity-70
    disabled:cursor-not-allowed
  "
>
  {loading ? (
    <>
      <ClipLoader
        color="#ffffff"
        size={22}
      />

      Sending...
    </>
  ) : (
    "Dispatch Inquiry Form"
  )}
</button>

            </form>

          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Map */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

              <iframe
                title="Mary's Pest Control"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14743.700034217103!2d88.28284978866576!3d22.506996629872027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b8910571b81%3A0xb500e036fdb716f2!2sMary%E2%80%99s%20Pest%20Control!5e0!3m2!1sen!2sin!4v1782225211529!5m2!1sen!2sin"
                className="w-full h-96"
                loading="lazy"
              ></iframe>

            </div>

            {/* Contact Info Card */}

            <div className="bg-white rounded-3xl shadow-lg p-6 border">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Connect Instantly
                  </h3>

                  <div className="space-y-4">

                    <a
                      href="tel:+917059445500"
                      className="flex items-center gap-3 hover:text-red-700"
                    >
                      <FaPhoneAlt />
                      <span>+91 70594 45500</span>
                    </a>

                    <a
                      href="https://wa.me/917059445500"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-green-600"
                    >
                      <FaWhatsapp />
                      <span>+91 70594 45500</span>
                    </a>

                    <a
                      href="mailto:marypestcontrol@gmail.com"
                      className="flex items-center gap-3 hover:text-red-700"
                    >
                      <FaEnvelope />
                      <span>marypestcontrol@gmail.com</span>
                    </a>

                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Operation Hours
                  </h3>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3">
                      <FaClock />
                      <span>
                        Mon - Sat : 7:00 AM - 10:00 PM
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-red-700">
                      <FaMapMarkerAlt />
                      <span>
                        24/7 Priority Emergency Dispatch
                      </span>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
