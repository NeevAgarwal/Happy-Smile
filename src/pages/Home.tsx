import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import teethWhiteningBefore from '../assets/images/regenerated_image_1781505664426.jpg';
import teethWhiteningAfter from '../assets/images/regenerated_image_1781505665119.jpg';
import veneersBefore from '../assets/images/regenerated_image_1781662769860.jpg';
import veneersAfter from '../assets/images/regenerated_image_1781662772212.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Best Dental Clinic in Guwahati | Happy Smile Dental Clinic"
        description="Happy Smile Dental Clinic in Jyotikuchi, Guwahati offers dental implants, root canals, teeth whitening, braces, pediatric dentistry, and complete oral care. Book your appointment today."
      />
      
      {/* Hero Section */}
      <section className="relative hero-gradient pt-4 sm:pt-8 lg:pt-12 pb-12 lg:pb-32 overflow-hidden smooth-boundary mx-2 mt-2">
        <div className="absolute inset-0 z-0 pointer-events-none">
           {/* Subtle background image representing a Happy Smile */}
           <div 
             className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] mix-blend-overlay"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')` }}
           />
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-screen"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 mix-blend-screen"></div>
           
           {/* Abstract large glowing "Smile" Curve */}
           <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120%] min-w-[1000px] h-auto text-primary/[0.04]" viewBox="0 0 1000 300" fill="none" stroke="currentColor">
             <path d="M 100 50 Q 500 250 900 50" strokeWidth="20" strokeLinecap="round" />
           </svg>
           <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[130%] min-w-[1100px] h-auto text-blue-400/[0.02]" viewBox="0 0 1000 300" fill="none" stroke="currentColor">
             <path d="M 100 50 Q 500 280 900 50" strokeWidth="10" strokeLinecap="round" />
           </svg>
           
           {/* Subtle Star/Sparkle Accents representing a bright smile */}
           <svg className="absolute top-[25%] left-[45%] w-8 h-8 text-primary/20 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
           </svg>
           <svg className="absolute bottom-[35%] right-[40%] w-6 h-6 text-blue-400/20" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] sm:leading-[1.1] lg:leading-[1.1] mb-4 sm:mb-6">
                Creating Healthy, <br className="hidden sm:block"/>
                <span className="text-primary">Beautiful Smiles</span> <br className="hidden sm:block"/>
                in Guwahati
              </h1>
              <p className="text-sm sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-sm sm:max-w-lg mx-auto lg:mx-0">
                Advanced dental care with modern technology, experienced dentists, and personalized treatment plans in a comfortable environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-10 justify-center lg:justify-start">
                <Link to="/book-appointment" className="bg-white hover:opacity-90 text-dark px-8 py-3 rounded-full font-bold text-center transition-all">
                  Book Appointment
                </Link>
                <a href="https://wa.me/918638387812" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-full font-bold text-center transition-all flex items-center justify-center">
                  Chat on WhatsApp
                </a>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: "Experienced Dentists" },
                  { label: "Advanced Equipment" },
                  { label: "Affordable Care" },
                  { label: "Comfortable Clinic" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-1.5 sm:space-x-2 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-300 leading-tight">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[500px] flex flex-col justify-center mt-4 lg:my-0 max-w-[280px] sm:max-w-sm mx-auto lg:ml-auto w-full"
            >
              <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-4 sm:p-8 rounded-[40px] shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                
                <div className="w-32 h-40 sm:w-56 sm:h-64 tooth-shape overflow-hidden border-4 border-slate-700/80 mb-4 sm:mb-6 relative z-10 shadow-lg shrink-0">
                  <img src="/doctor.webp" alt="Dr. Hirakjyoti Goswami" className="w-full h-full object-cover object-top" />
                </div>
                
                <div className="relative z-10 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1">Dr. Hirakjyoti Goswami</h3>
                  <p className="text-primary font-medium tracking-wide text-[10px] sm:text-sm uppercase mb-2 sm:mb-4 lg:mb-4">Chief Dental Surgeon</p>
                  
                  <div className="h-px w-8 sm:w-12 bg-slate-700 mx-auto mb-2 sm:mb-4 lg:mb-4"></div>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-[280px] mx-auto hidden sm:block">
                    Dedicated to providing compassionate care and creating beautiful, healthy smiles with over 12 years of clinical excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900 border-none relative smooth-boundary mx-2 mt-4 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800"
          >
            {[
              { icon: Users, stat: '400+', label: 'Happy Patients' },
              { icon: Shield, stat: '100%', label: 'Modern Clinic' },
              { icon: Award, stat: '10+', label: 'Years Experience' },
              { icon: Star, stat: '4.9/5', label: 'Patient Satisfaction' }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1">{item.stat}</h3>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-dark relative smooth-boundary mx-2 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">Our Services</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 sm:mb-6">Comprehensive Dental Care for Your Family</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Dental Checkup', desc: 'Comprehensive oral examinations and diagnosis using modern technology.', image: '/free-dental-check-up-service.jpg' },
              { title: 'Root Canal', desc: 'Pain-free root canal treatments to save infected or severely decayed teeth.', image: '/Root-Canal-Treatment-2x-1.jpg' },
              { title: 'Dental Implants', desc: 'Permanent solution for missing teeth restoring function and aesthetics.', image: '/dental-implant.jpeg' },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800 tooth-shape p-8 border border-slate-700 hover:bg-primary hover:border-primary group transition-all soft-shadow relative"
              >
                <div className="h-48 tooth-shape overflow-hidden mb-6 bg-slate-700 relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white mb-2 transition-colors">{service.title}</h4>
                <p className="text-slate-400 mb-4 h-12 line-clamp-2 group-hover:text-white/90 transition-colors">{service.desc}</p>
                <Link to="/services" className="text-primary font-bold flex items-center group-hover:text-white transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-white font-bold hover:text-primary transition-colors">
              View All 15+ Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-slate-300 relative smooth-boundary mx-2 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Why Choose Happy Smile</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-heading text-white mb-4 sm:mb-6">Setting the Standard for Dental Excellence</h3>
              <p className="text-slate-400 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                We combine years of expertise with state-of-the-art technology to provide you with the best possible dental care in Guwahati. Your comfort and health are our top priorities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Modern Equipment', icon: Shield },
                  { title: 'Experienced Team', icon: Users },
                  { title: 'Sterilized Environment', icon: CheckCircle },
                  { title: 'Affordable Pricing', icon: Award }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mr-4 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-heading text-white mt-2">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary tooth-shape rotate-3 transform origin-bottom-right"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Clinic" 
                className="relative tooth-shape shadow-2xl w-full h-[500px] object-cover border-8 border-slate-900 opacity-90"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Before & After Transformations */}
      <section className="py-24 bg-dark relative smooth-boundary mx-2 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">Transformations</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 sm:mb-6">Real Patients, Real Results</h3>
            <p className="text-slate-400 text-sm sm:text-lg">See the difference our specialized care makes. Swipe to see the transformations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Teeth Whitening & Cleaning",
                before: teethWhiteningBefore,
                after: teethWhiteningAfter
              },
              {
                title: "Dental Veneers Makeover",
                before: veneersBefore,
                after: veneersAfter
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 p-2 relative group"
              >
                <div className="flex flex-col sm:flex-row relative">
                  <div className="relative w-full sm:w-1/2 overflow-hidden rounded-l-2xl sm:rounded-l-2xl sm:rounded-tr-none rounded-t-2xl sm:rounded-bl-2xl">
                    <img src={item.before} alt="Before" className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-700">Before</div>
                  </div>
                  <div className="h-1 sm:w-1 bg-slate-900 z-10 hidden sm:block"></div>
                  <div className="relative w-full sm:w-1/2 overflow-hidden rounded-r-2xl sm:rounded-r-2xl sm:rounded-tl-none rounded-b-2xl sm:rounded-br-2xl">
                    <img src={item.after} alt="After" className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-primary text-slate-900 text-xs font-bold px-3 py-1 rounded-full">After</div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-xl font-bold font-heading text-white">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 relative overflow-hidden smooth-boundary mx-2 mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">Testimonials</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white">Loved by Thousands</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul D.", text: "The most comfortable dental experience I've ever had. Dr. Hirakjyoti is extremely gentle and explains everything perfectly.", rating: 5 },
              { name: "Priya S.", text: "Got my veneers done here. The facility is world-class, and the transformation in my smile is breathtaking. Highly recommend!", rating: 5 },
              { name: "Amit K.", text: "I was always scared of root canals, but the team here made it completely painless. Thank you for the wonderful care.", rating: 5 }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-800/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xl uppercase font-heading">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-slate-400 text-sm">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden smooth-boundary mx-2 mt-4 mb-4">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 sm:mb-6">Ready for a Brighter Smile?</h2>
          <p className="text-white/80 text-sm sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards perfect oral health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-appointment" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              Schedule Appointment
            </Link>
            <a href="tel:+918638387812" className="bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors border border-white/20">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
