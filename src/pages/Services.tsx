import { SEO } from '../components/SEO';
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'Dental Checkup', desc: 'Comprehensive oral examinations and diagnosis using modern technology.', category: 'General', impact: 'Regular checkups prevent complex dental issues by detecting them early, ensuring your gums and teeth remain healthy and reducing the need for extensive treatments.' },
  { id: 2, title: 'Teeth Cleaning (Scaling)', desc: 'Professional cleaning to remove plaque, tartar, and surface stains.', category: 'General', impact: 'Scaling prevents gum disease (gingivitis) and tooth decay by removing hardened tartar that regular brushing cannot eliminate, promoting overall periodontal health.' },
  { id: 3, title: 'Root Canal Treatment', desc: 'Pain-free root canal treatments to save infected or severely decayed teeth.', category: 'Restorative', impact: 'Saves your natural tooth from extraction by removing severely infected pulp, which relieves pain and prevents infection from spreading to your jawbone.' },
  { id: 4, title: 'Tooth Extraction', desc: 'Safe and painless removal of problematic or wisdom teeth.', category: 'Surgical', impact: 'Prevents damage to adjacent healthy teeth and stops the spread of decay or infection from a tooth that cannot be restored.' },
  { id: 5, title: 'Dental Fillings', desc: 'Tooth-colored composite fillings to restore decayed teeth.', category: 'Restorative', impact: 'Restores the structural integrity of a cavity-damaged tooth, stopping decay in its tracks and preventing further deterioration.' },
  { id: 6, title: 'Dental Crowns & Bridges', desc: 'Custom-made caps and bridges to restore the shape and function of teeth.', category: 'Restorative', impact: 'Provides crucial strength to weakened teeth and replaces missing gaps to prevent remaining teeth from shifting, restoring proper chewing function.' },
  { id: 7, title: 'Dentures', desc: 'Removable appliances replacing missing teeth and surrounding tissues.', category: 'Restorative', impact: 'Restores facial muscle support, aids in proper speech and chewing, and greatly improves the quality of life after significant tooth loss.' },
  { id: 8, title: 'Braces & Aligners', desc: 'Orthodontic treatments to correct misaligned teeth and bite issues.', category: 'Orthodontics', impact: 'Proper alignment goes beyond aesthetics; it improves bite function, makes cleaning easier, and reduces the risk of jaw strain and uneven tooth wear.' },
  { id: 9, title: 'Teeth Whitening', desc: 'Professional bleaching to brighten your smile safely and effectively.', category: 'Cosmetic', impact: 'Enhances aesthetic appeal and boosts confidence without compromising the protective enamel layer of your teeth.' },
  { id: 10, title: 'Smile Makeover', desc: 'Comprehensive cosmetic treatments tailored to perfect your smile.', category: 'Cosmetic', impact: 'Combines multiple cosmetic treatments to holistically improve both the function and appearance of your teeth and gums for psychological and physical well-being.' },
  { id: 11, title: 'Dental Implants', desc: 'Permanent titanium posts replacing tooth roots for missing teeth.', category: 'Surgical', impact: 'Prevents bone loss in the jaw by mimicking a natural tooth root, maintaining facial structure and providing a permanent, durable chewing surface.' },
  { id: 12, title: 'Pediatric Dentistry', desc: 'Gentle and specialized dental care for children of all ages.', category: 'Pediatric', impact: 'Establishes proper dental development, prevents early childhood caries, and creates a positive psychological association with dental care for life.' },
  { id: 13, title: 'Gum Treatment', desc: 'Therapy for gum disease to ensure a healthy foundation for your teeth.', category: 'Periodontics', impact: 'Halts the progression of periodontitis, protecting the bone and connective tissues that hold your teeth in place, which is vital for long-term tooth retention.' },
  { id: 14, title: 'Emergency Care', desc: 'Immediate attention for toothaches, trauma, and dental emergencies.', category: 'Emergency', impact: 'Provides rapid pain relief, stabilizes traumatic dental injuries, and prevents acute infections from becoming systemic health risks.' }
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Dental Services | Root Canals, Implants in Guwahati"
        description="Explore our wide range of dental services including teeth whitening, dental implants, root canals, braces, and pediatric dentistry at Happy Smile Dental Clinic."
      />

      {/* Page Header */}
      <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        {/* High-quality background image with overlay blend */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 filter grayscale mix-blend-overlay"></div>
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-primary/30"></div>
        
        {/* Soft Glowing Abstract Shapes */}
        <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] bg-primary/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-[20rem] h-[20rem] bg-blue-500/20 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 drop-shadow-sm tracking-tight">Our Dental Services</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto backdrop-blur-md bg-slate-900/40 p-4 rounded-2xl border border-white/10 shadow-xl leading-relaxed">
            Comprehensive, advanced, and affordable dental treatments tailored for you and your family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-700 hover:border-primary/50 transition-all group flex flex-col h-full relative overflow-hidden"
              >
                {/* Default Card Content */}
                <div className="flex flex-col h-full transform transition-transform duration-500 group-hover:scale-95 group-hover:opacity-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/20 px-2 py-1 rounded-md">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                  <Link to="/book-appointment" className="text-white font-semibold transition-colors flex items-center mt-auto mt-4">
                    Book this treatment <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Separate Hover Window (Overlay) */}
                <div className="absolute inset-0 bg-slate-800 p-8 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto border-2 border-primary rounded-3xl shadow-2xl">
                  <h3 className="text-xl font-bold font-heading text-white mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.desc}</p>
                  
                  <div className="w-full h-px bg-slate-700 my-4"></div>
                  
                  <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2 flex items-center">
                    <Shield className="w-3 h-3 mr-1.5" />
                    Oral Health Impact
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    {service.impact}
                  </p>
                  
                  <Link to="/book-appointment" className="text-primary font-semibold hover:text-white transition-colors flex items-center mt-auto">
                    Book Treatment <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-red-500 text-white inline-block px-4 py-1 rounded-full font-bold text-sm tracking-widest uppercase mb-6 animate-pulse">
            Dental Emergency?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Need Immediate Help?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Severe toothache? Broken tooth? Don't wait. We provide priority emergency dental care to relieve your pain quickly.
          </p>
          <a href="tel:+918638387812" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg inline-flex items-center">
            Call +91 86383 87812
          </a>
        </div>
      </section>
    </>
  );
}
