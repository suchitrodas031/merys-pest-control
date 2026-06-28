import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

// Importing all local images
import bedBugImg from '../assets/bed-bug.webp'; 
import cockroachImg from '../assets/cockroach.jpg';
import ratImg from '../assets/rat.jpg';
import termiteImg from '../assets/Termite.jpg';
import mouseImg from '../assets/mouse.jpg';
import flyImg from '../assets/flycontrol.jpg';

const serviceData = {
  'bed-bug': { 
    title: 'Bed Bug Control', 
    content: (
      <div className="space-y-4">
        <p><strong>Rapid Infestation:</strong> Bed bugs can spread easily and thrive in almost any weather and environment. This makes them extremely difficult to treat, especially when an infestation reaches epidemic proportions in your home.</p>
        <p><strong>Expert Eradication:</strong> The key to eliminating bed bugs is early detection and quick treatment by an expert pest controller. Our field biologists and service technicians are extensively trained and skilled in understanding bed bug habits.</p>
        <p><strong>Effective Solutions:</strong> Mary’s Pest Control provides highly effective, long-term solutions against bed bug infestations using carefully chosen control methods, materials, and advanced spraying and steam treatments.</p>
      </div>
    ), 
    img: bedBugImg 
  },
  'cockroach': { 
    title: 'Cockroach Control', 
    content: (
      <div className="space-y-4">
        <p><strong>Health & Contamination Risks:</strong> Cockroaches pose a real threat of food contamination and are associated with serious health hazards. They are notorious disease-spreading pests that compromise the sanitation of your space.</p>
        <p><strong>Property & Reputation Damage:</strong> Their presence can cause significant damage to stored items and severely harm your commercial business reputation if spotted by customers or guests.</p>
        <p><strong>Professional Solutions:</strong> At Mary’s Pest Control, our professionals know the exact control solutions to combat infestations effectively, target their hidden nests, and help reduce the risk of future re-infestation.</p>
      </div>
    ), 
    img: cockroachImg 
  },
  'rat': { 
    title: 'Rat Control', 
    content: (
      <div className="space-y-4">
        <p><strong>Disease Transmission:</strong> Rats are known to spread dangerous infections such as Salmonella, Hantavirus, and Leptospirosis. They also transmit tapeworms, fungal skin infections, and can introduce secondary pests like fleas and biting mites into your premises.</p>
        <p><strong>Structural & Fire Hazards:</strong> A rat's sharp teeth can gnaw through cables, plastic, wooden doors, and even mild steel. This causes damage to stock and buildings, and can lead to short circuits and subsequent fires if they chew on insulation and wiring.</p>
        <p><strong>Food Contamination:</strong> Wet fur on the underbelly of rats soaked in urine can transmit diseases to work surfaces, table tops, or anywhere the rat has climbed, heavily contaminating foodstuffs and goods.</p>
        <p><strong>Expert Removal:</strong> Professional rat removal is the quickest and most effective way to get rid of rats. Backed by global knowledge, our qualified local technicians offer a reliable form of control and a long-term solution to rat infestations.</p>
      </div>
    ), 
    img: ratImg 
  },
  'termite': { 
    title: 'Termite Control', 
    content: (
      <div className="space-y-4">
        <p><strong>Severe Structural Damage:</strong> Subterranean termites are capable of destroying an entire wooden door frame within just 2 weeks. Untreated infestations can devalue your property by more than 25% and lead to mounting frustration and costly repairs.</p>
        <p><strong>Continuous Monitoring:</strong> If you find signs of termite activity, you need experienced, professionally trained experts to restore your safety. Our service technicians undergo continuous training to ensure their pest knowledge is always up-to-date.</p>
        <p><strong>Advanced Liquid Termiticide:</strong> We use liquid termiticide in post-construction treatments to create a protective treated zone around your perimeter. It can be applied under concrete floors or around building foundations to form a strong barrier.</p>
        <p><strong>Colony Elimination:</strong> As termite workers tunnel through treated zones, they ingest the termiticide and it adheres to their bodies. They then spread the active ingredient to other termites through physical contact, eventually wiping out the entire colony.</p>
      </div>
    ), 
    img: termiteImg 
  },
  'mouse': { 
    title: 'Mouse Control', 
    content: (
      <div className="space-y-4">
        <p><strong>Disease:</strong> Mice are well known to spread diseases, with the ability to contaminate food and water supplies. Salmonella, Leptospirosis, and Hantavirus are just a few they can easily transmit to your family or staff.</p>
        <p><strong>Damage:</strong> They are also able to cause considerable damage to property and pose a genuine fire risk with their constant habit of chewing on electrical cables and wiring behind your walls.</p>
        <p><strong>Targeted Treatments:</strong> Mary’s Pest Control service technicians provide highly targeted treatments to deal with any mouse problem and will offer expert advice on how to keep your home mouse-free in the future.</p>
        <p><strong>Safe Domestic Service:</strong> We offer a fast, effective call-out service to deal with mice and other pest problems in the home, providing the absolute highest level of safety for your family and pets.</p>
      </div>
    ), 
    img: mouseImg 
  },
  'fly': { 
    title: 'Fly Pest Control', 
    content: (
      <div className="space-y-4">
        <p><strong>Health Risks:</strong> Flies are notoriously unhygienic pests that carry and transmit numerous diseases, including Salmonella, E. coli, and Cholera. Because they frequently land on decaying matter, they can easily contaminate your food and food preparation surfaces, posing a significant health risk to your family or commercial business.</p>
        <p><strong>Rapid Infestation:</strong> A minor fly problem can quickly escalate into a massive infestation. Flies reproduce at an alarming rate, especially in warm and unsanitary conditions. Delaying treatment only allows the breeding cycle to expand rapidly.</p>
        <p><strong>Targeted Eradication:</strong> Mary’s Pest Control offers highly effective and hygienic fly control solutions. Our expert technicians will identify active breeding sites and implement targeted eradication methods such as light traps and safe insecticidal baits.</p>
        <p><strong>Sanitation & Prevention:</strong> Beyond just removing the current infestation, we provide expert advice on sanitation and structural exclusion techniques to keep your property fly-free year-round.</p>
      </div>
    ), 
    img: flyImg 
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) return <div className="text-center py-20 text-2xl font-bold text-gray-600">Service Not Found</div>;

  const phoneNumber = "917059445500";
  const preFilledMessage = encodeURIComponent(`Hi Mary's Pest Control! I would like to inquire about your ${service.title} services. Could you provide more details?`);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${preFilledMessage}`;

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <Link to="/services" className="text-[#800000] font-semibold hover:underline mb-6 inline-block">&larr; Back to Services</Link>
      
      <img 
        src={service.img} 
        alt={service.title} 
        className="w-full max-h-96 object-contain rounded-xl mb-8 mx-auto" 
      />
      
      <h1 className="text-4xl font-bold text-[#800000] mb-6">{service.title}</h1>
      
      <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-[#800000]">
        <div className="text-lg text-gray-700 leading-relaxed">
          {service.content}
        </div>
      </div>

      <div className="mt-10 mb-6 flex justify-center">
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <FaWhatsapp className="text-3xl" />
          Book {service.title}
        </a>
      </div>

    </div>
  );
};

export default ServiceDetail;