import {
  FaShieldAlt,
  FaLeaf,
  FaUsers,
  FaStar,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import heroBg from "../assets/hero-bg.jpg"; // Imported your local background image

const reviews = [
  {
    name: "Soumyadeep Das",
    time: "9 months ago",
    review: "I've been using this pest control service for the past 3 years and have been thoroughly .....",
    link: "https://share.google/yMFXNhR4UkRtkaRei",
  },
  {
    name: "Shaqib Ali",
    time: "5 years ago",
    review: "Excellent service given by Mary Pest control. Behaviour and attitude towards the work is amazing",
    link: "https://share.google/rx4fKoZ57BQWSErQh",
  },
  {
    name: "Kingsuk Adhikari",
    time: "5 years ago",
    review: "I have used the Anti Termite Drilling Treatment service for my residence very recently. My overall feedback is",
    link: "https://share.google/NzMTShQb3Lt05ygrg",
  },
  {
    name: "Debi Dutta",
    time: "7 years ago",
    review: "Really realiable pest control firm. Fully satisfied by their work. Comparing to other firm the quality of job is exceptionally good ",
    link: "https://share.google/5niEuZ4saGTgL6SgB",
  },
  {
    name:"Samir Kumar Dandapath",
    time:"7 years ago",
    review:"Very honest and realistic suggestions and solutions provided by Mary’s pest control by which we can manage ourselves to control various pest at home",
    link:"https://share.google/Im1bQuU90G9Od1dqS"
  },
  {
    name:"Biplab Dutta",
    time:"7 years ago",
    review:"Unlike other pest control companies Mary's Pest Control does their job with great care and the result is really amazing",
    link:"https://share.google/VgfPT5ZcIyRzoXtYL"
  },
  {
    name:"Ashish Kumar Sen Gupta",
    time:"5 months ago",
    review:"Mr Sandeep Majumdar and his team are very well behaved,efficient,professional , Co-operative.Service and after sales service are Excellent ",
    link:"https://share.google/dMQLnomlbAm0eyeOz"
  },
  {
    name:"Babai Danda",
    time:"7 years ago",
    review:"Mary's Pest control is truely a professional organisation . As per there annual service contract they never miss the timeline ",
    link:"https://share.google/FgijE97XPaCSMbKfO"
  },
  {
    name:"Padmanava Chatterjee",
    time:"10 months ago",
    review:"Hi I would recommend pest control service from Mary's pest control very efficient and effective service against all pest.",
    link:"https://share.google/4DE00f8fS9duRQwgT"
  },
  {
    name:"ARNAB PAUL",
    time:"8 months ago",
    review:"Very prompt and professional service by knowledgeable persons.",
    link:"https://share.google/xYqGZBaRM9andfvTF"
  }
];

const texts = [
  "Say Goodbye to Pests...",
  "Stop Termites Before They Spread...",
  "Eliminate Cockroaches & Rodents...",
  "Professional Pest Control Services...",
  "Book Your Inspection Today..."
];

const duplicatedReviews = [...reviews, ...reviews];

const homeServices = [
  { id: 'bed-bug', title: 'Bed Bug Control', desc: 'Fast and effective bed bug eradication.' },
  { id: 'cockroach', title: 'Cockroach Control', desc: 'Effective and safe cockroach elimination.' },
  { id: 'rat', title: 'Rat Control', desc: 'Reliable rat trapping and swift removal.' },
  { id: 'termite', title: 'Termite Control', desc: 'Complete termite inspection and treatment.' },
  { id: 'mouse', title: 'Mouse Control', desc: 'Targeted treatments for mouse problems.' },
  { id: 'fly', title: 'Fly Pest Control', desc: 'Hygienic fly elimination and prevention.' }
];

function Home() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <>
      {/* Hero - Now utilizing inline style with your optimized local image! */}
      <section 
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-black/60 py-24 md:py-40 px-4 md:px-6 text-center text-white">
          <h2 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            Professional Pest Control Services
          </h2>
          
          <div className="h-16 flex items-center justify-center">
            <span className="text-xl md:text-3xl font-semibold text-[#F6F5F2]">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="max-w-3xl mx-auto text-base md:text-lg mt-4">
            Protect your home and business from termites,
            cockroaches, rodents, mosquitoes, bed bugs and
            other harmful pests.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`} 
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#800000] transition-all duration-300 block group"
              >
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#800000] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* We approach pest... */}
      <section className="bg-[#F7F3EE] py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side */}
            <div>
              <h2 className="text-5xl font-extrabold leading-tight text-[#1B120C]">
                We approach pest
                <br />
                control as a precise
                <br />
                <span className="italic text-[#7A0019] font-serif">
                  biological science.
                </span>
              </h2>

              <p className="mt-8 text-gray-700 leading-9 text-lg">
                Our professional pest control team delivers
                environmentally responsible treatments that
                eliminate infestations while keeping your family,
                pets and property safe.
              </p>

              <p className="mt-6 text-gray-700 leading-9 text-lg">
                We inspect thoroughly, identify the root cause,
                and implement long-term prevention strategies
                rather than temporary fixes.
              </p>

              {/* Features */}
              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaShieldAlt className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">
                      Certified Safe Formulations
                    </h3>
                    <p className="text-gray-600">
                      Eco-friendly and family-safe treatments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <FaLeaf className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">
                      Structural-First Methodology
                    </h3>
                    <p className="text-gray-600">
                      Permanent solutions instead of temporary fixes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">
                      Trusted & Vetted Experts
                    </h3>
                    <p className="text-gray-600">
                      Trained professionals with verified credentials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md text-center">
                  <h3 className="text-3xl md:text-5xl font-black">10+</h3>
                  <p className="mt-3 text-gray-600">
                    Years of Experience
                  </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md text-center">
                  <h3 className="text-3xl md:text-5xl font-black">12.5K+</h3>
                  <p className="mt-3 text-gray-600">
                    Homes Protected
                  </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md text-center">
                  <h3 className="text-3xl md:text-5xl font-black">100%</h3>
                  <p className="mt-3 text-gray-600">
                    Eco Certified
                  </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md text-center">
                  <h3 className="text-3xl md:text-5xl font-black">4 hrs</h3>
                  <p className="mt-3 text-gray-600">
                    Average Response
                  </p>
                </div>
              </div>

              {/* Quality Banner */}
              <div className="mt-10 bg-[#1D120C] text-white rounded-3xl p-8">
                <p className="uppercase text-red-400 tracking-widest text-sm">
                  Quality Assurance
                </p>
                <h3 className="text-3xl font-bold mt-3">
                  Premium Structural Integrity Standards
                </h3>
                <p className="text-gray-300 mt-4">
                  Engineered to target root causes, ensuring your home or business remains reinforced against pest vulnerabilities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Reviews */}
      {/* Google Reviews */}

<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-4xl font-bold text-center mb-12">
      Customer Reviews
    </h2>

    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      loop={true}
      grabCursor={true}
      speed={700}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
    >

      {reviews.map((review, index) => (

        <SwiperSlide key={index} className="h-auto">

          <a
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              h-full
              bg-white
              border
              border-gray-200
              rounded-3xl
              p-8
              shadow-md
              hover:shadow-xl
              transition
            "
          >

            <div className="flex justify-between items-start mb-4">

              <div>

                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {review.time}
                </p>

              </div>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                className="w-8 h-8"
                alt="Google"
              />

            </div>

            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-gray-700">
              {review.review}
            </p>

          </a>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>
    </>
  );
}

export default Home;