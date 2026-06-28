import { useParams, Link } from 'react-router-dom';

const blogContent = {
  '1': { 
    title: 'Importance of Regular Pest Control', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgYiFji7mS0s1CLJzY-ExNHBJqEx4DpYf361TEUYfYA&s=10',
    content: (
      <div className="space-y-4">
        <p><strong>Proactive Maintenance:</strong> Maintaining a clean and safe home environment goes far beyond regular vacuuming and dusting. One of the most critical, yet frequently overlooked, aspects of home maintenance is regular pest control. Many homeowners make the mistake of waiting until they see a visible infestation before contacting a professional, but by that time, the infestation is often already severe.</p>
        <p><strong>Protecting Health:</strong> Regular pest control is vital for protecting both your property and your family’s health. Pests like rodents, cockroaches, and mosquitoes are notorious carriers of diseases, bacteria, and allergens. Cockroaches, for instance, can trigger severe asthma attacks, while rodents can contaminate your food supply with dangerous pathogens.</p>
        <p><strong>Preventing Structural Damage:</strong> Beyond health concerns, pests can cause devastating structural damage to your home. Termites and carpenter ants can silently hollow out the wooden framework of your house, leading to costly repair bills. Rodents are also known to gnaw through electrical wiring, creating significant fire hazards behind your walls.</p>
        <p><strong>Long-Term Peace of Mind:</strong> By scheduling regular, quarterly pest control inspections, you take a proactive approach rather than a reactive one. Professional pest controllers can identify early warning signs, locate potential entry points, and apply preventative treatments before a minor issue becomes a massive problem.</p>
      </div>
    )
  },
  '2': { 
    title: 'Signs of Termite Damage',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJY7rO6LcJzKbUJEzr3RDkeK8IwRz9TzUEK2hA3oDdA&s=10', 
    content: (
      <div className="space-y-4">
        <p><strong>The Silent Destroyers:</strong> Termites are often referred to as "silent destroyers" for a very good reason. These tiny insects can secretly thrive inside your home, slowly devouring the structural wood without showing any immediate signs of their presence. Because they consume wood from the inside out, termite damage often goes completely unnoticed until significant failure has occurred.</p>
        <p><strong>Hollow-Sounding Wood:</strong> One of the most common indicators of termite activity is the presence of hollow-sounding wood. If you tap on a wooden door frame, baseboard, or support beam and it sounds hollow or papery, it is highly likely that termites have eaten away the interior. You may also notice wood that appears blistered or unusually easily dented.</p>
        <p><strong>Discarded Wings:</strong> Another critical sign to look out for is the sudden appearance of discarded wings. After a termite swarm—which usually occurs in the spring—the reproductive termites will shed their wings once they have found a suitable mate. You will typically find these small, translucent wings piled up on windowsills, near doors, or around heating vents.</p>
        <p><strong>Mud Tubes & Moisture Damage:</strong> Mud tubes are also a dead giveaway. Subterranean termites construct pencil-sized tubes out of dirt and saliva to travel safely between their underground nests and your home's wooden structures. Additionally, keep an eye out for uneven or bubbling paint, and doors or windows that suddenly become difficult to open.</p>
      </div>
    )
  },
  '3': { 
    title: 'How to Prevent Bed Bugs', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnBGqYoay1zxL6fn6j0NICNhpJRdWFXKNUsIOca4GkQ&s=10',
    content: (
      <div className="space-y-4">
        <p><strong>Vigilance During Travel:</strong> Bed bugs are among the most dreaded household pests. These tiny, resilient, blood-sucking insects are notorious hitchhikers, easily transferring from public spaces into the comfort of your own home. Therefore, the absolute best defense against a bed bug infestation is strict, proactive prevention, especially when you are traveling.</p>
        <p><strong>Hotel Room Inspections:</strong> When staying at a hotel or any guest accommodation, you should never immediately place your luggage on the bed or the floor. Use a luggage rack and keep it pulled away from the walls. Before settling in, pull back the bed sheets and meticulously inspect the mattress seams, the box spring, and the corners of the bed frame for live bugs or rust-colored stains.</p>
        <p><strong>Post-Trip Cleaning Protocol:</strong> Prevention doesn't stop when you check out. Upon returning home from a trip, do not bring your suitcase directly into your bedroom. Unpack your clothes directly into the washing machine and wash everything in the hottest water possible, followed by a high-heat cycle in the dryer for at least 30 minutes to kill bed bugs in all stages of life.</p>
        <p><strong>At-Home Safeguards:</strong> At home, you can further protect yourself by investing in high-quality, tear-resistant mattress and box spring encasements. These covers eliminate the hiding spots that bed bugs prefer and make it much easier to spot an early infestation. Finally, be incredibly cautious when acquiring second-hand furniture.</p>
      </div>
    )
  },
  '4': { 
    title: 'DIY vs Professional Control',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZtI1a2zV3IsJDUDhia580eSg_iCMU33O0Ij3H0_3vQ&s=10', 
    content: (
      <div className="space-y-4">
        <p><strong>The Illusion of DIY:</strong> When faced with a pest problem, many homeowners immediately head to their local hardware store to stock up on over-the-counter sprays, traps, and baits. The appeal of Do-It-Yourself (DIY) pest control is understandable; it often appears to be the faster, cheaper, and more convenient option. However, they frequently fall short when dealing with a genuine infestation.</p>
        <p><strong>Treating Symptoms vs. Root Causes:</strong> One of the primary drawbacks of DIY pest control is that it usually only addresses the visible symptoms of the problem rather than the root cause. A store-bought bug bomb might kill the spiders currently crawling on your floor, but it won't penetrate the walls to destroy the hidden nests where the pests are actively breeding.</p>
        <p><strong>Professional Expertise:</strong> Professional pest control technicians offer a level of expertise and efficacy that DIY solutions simply cannot match. They are extensively trained to identify the specific species of pest, locate their hidden nesting areas, and understand the precise environmental factors that are drawing the pests to your property.</p>
        <p><strong>Safety & Risk Management:</strong> For severe, destructive, or health-threatening infestations—such as termites, bed bugs, or large rodent populations—relying on DIY methods is not just ineffective; it can be downright dangerous. Attempting to handle hazardous chemicals or confront aggressive pests without proper training can lead to serious injury or property damage.</p>
      </div>
    )
  }
};

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogContent[blogId];

  if (!blog) return <div className="text-center py-20 text-2xl font-bold text-gray-600">Blog Not Found</div>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link to="/blog" className="text-[#800000] font-semibold hover:underline mb-6 inline-block">&larr; Back to Blogs</Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-8 leading-tight">{blog.title}</h1>
      
      <img 
        src={blog.img} 
        alt={blog.title} 
        className="w-full h-64 md:h-96 object-cover rounded-xl mb-10 shadow-lg" 
      />

      <div className="text-lg text-gray-700 leading-relaxed bg-white p-8 md:p-10 rounded-xl shadow-lg border-l-4 border-[#800000]">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetail;