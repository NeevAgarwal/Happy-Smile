import { SEO } from '../components/SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Clinic', 'Cosmetic', 'Orthodontics', 'Implants'];

const galleryItems = [
  { id: 1, category: 'Clinic', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', title: 'Modern Equipment' },
  { id: 2, category: 'Clinic', image: '/waiting-area.jpg', title: 'Waiting Area' },
  { id: 3, category: 'Cosmetic', image: '/smile-makeover.jpeg', title: 'Smile Makeover' },
  { id: 4, category: 'Orthodontics', image: '/clear-aligners2.jpeg', title: 'Clear Aligners' },
  { id: 5, category: 'Implants', image: '/dental-implant.jpeg', title: 'Dental Implants' },
  { id: 6, category: 'Cosmetic', image: '/teeth-whitening.jpeg', title: 'Teeth Whitening' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO 
        title="Smile Gallery | Our Clinic & Results"
        description="View our state-of-the-art clinic facilities in Guwahati and browse through before and after pictures of our successful dental treatments."
      />
      
      <section className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Smile Gallery</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Explore our modern clinic and see the beautiful smiles we've crafted.</p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden group relative aspect-[4/3] bg-slate-800"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </>
  );
}
