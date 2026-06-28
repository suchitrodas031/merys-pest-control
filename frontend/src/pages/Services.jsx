import { Link } from 'react-router-dom';

// Importing all local images
import bedBugImg from '../assets/bed-bug.webp'; 
import cockroachImg from '../assets/cockroach.jpg';
import ratImg from '../assets/rat.jpg';
import termiteImg from '../assets/Termite.jpg';
import mouseImg from '../assets/mouse.jpg';
import flyImg from '../assets/flycontrol.jpg'; // ADDED FLY IMAGE

const serviceData = [
  { 
    id: 'bed-bug', 
    title: 'Bed Bug Control', 
    desc: 'Bed bugs infestation can spread easily and it’s very difficult to treat. We offer early detection and quick treatment.', 
    img: bedBugImg 
  },
  { 
    id: 'cockroach', 
    title: 'Cockroach Control', 
    desc: 'Cockroaches pose a real threat of food contamination and damage to your home and business reputation.', 
    img: cockroachImg 
  },
  { 
    id: 'rat', 
    title: 'Rat Control', 
    desc: 'Rats spread infections, cause damage to buildings, and gnaw through cables. Get professional rat removal today.', 
    img: ratImg 
  },
  { 
    id: 'termite', 
    title: 'Termite Control', 
    desc: 'Termites can devalue your property by more than 25%. Protect your structure with our liquid termiticide barriers.', 
    img: termiteImg 
  },
  { 
    id: 'mouse', 
    title: 'Mouse Control', 
    desc: 'Mice spread diseases and pose genuine fire risks. We provide highly targeted treatments to keep you safe.', 
    img: mouseImg 
  },
  // ADDED FLY CONTROL HERE
  { 
    id: 'fly', 
    title: 'Fly Pest Control', 
    desc: 'Effective, hygienic fly elimination and prevention to keep your space safe.', 
    img: flyImg 
  }
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#800000] mb-10">Our Pest Control Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((s) => (
          <div key={s.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex flex-col bg-white">
            
            <div className="w-full h-48 bg-white border-b flex items-center justify-center p-4">
              <img 
                src={s.img} 
                alt={s.title} 
                className="w-full h-full object-contain object-center" 
              />
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                  <h2 className="text-2xl font-bold mb-3 text-[#800000]">{s.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{s.desc}</p>
              </div>
              <Link to={`/services/${s.id}`} className="bg-[#800000] text-white font-semibold text-center py-2 rounded hover:bg-red-900 transition">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;