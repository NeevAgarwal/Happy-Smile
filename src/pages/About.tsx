import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Star, Heart } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Happy Smile Dental Clinic Guwahati"
        description="Learn about Happy Smile Dental Clinic, our experienced team of dentists, and our commitment to providing top-quality dental care in Guwahati."
      />
      
      {/* Page Header */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">About Happy Smile</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Committed to providing exceptional dental care with compassion and advanced technology in Guwahati.</p>
        </div>
      </section>

      {/* Doctor Expertise & Popularity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Lead Dental Surgeon</h2>
              <h3 className="text-3xl lg:text-5xl font-bold font-heading text-white mb-4">Dr. Hirak Jyoti Goswami</h3>
              <p className="text-xl text-primary mb-8 font-medium">Renowned expert in modern dentistry & smile design</p>
              
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  Dr. Hirak Jyoti Goswami is widely recognized across Guwahati for his unparalleled clinical excellence and his deeply compassionate approach to patient care. With years of rigorous training and hands-on experience, he has successfully transformed thousands of smiles, establishing himself as a highly sought-after dental professional in the region.
                </p>
                <p>
                  Known for his gentle touch and meticulous precision, Dr. Goswami specializes in restorative dentistry, complex root canal treatments, and aesthetic smile makeovers. His vast popularity stems not just from his cutting-edge technical skills, but primarily from his unique ability to make every patient feel relaxed, informed, and entirely pain-free during their visit.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Highly Rated</h4>
                      <p className="text-xs text-slate-400">By thousands of patients</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Expert Surgeon</h4>
                      <p className="text-xs text-slate-400">Advanced qualifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-slate-800 rounded-[40px] overflow-hidden border border-slate-700 relative shadow-2xl">
                 {/* Subtle gradient overlay at bottom for text contrast if needed */}
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
                 
                 <img src="/images/621654603_18114060571716483_6746221448609133886_n.webp" alt="Dr. Hirak Jyoti Goswami" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 
                 <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl flex items-center justify-between">
                   <div>
                     <p className="text-white font-bold text-lg mb-1">Dr. Hirak Jyoti Goswami</p>
                     <p className="text-primary text-sm font-medium">Founder & Chief Dentist</p>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Happy Smile */}
      <section className="py-20 bg-slate-900 border-t border-slate-800 border-b relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-square bg-slate-800 rounded-[40px] overflow-hidden relative border border-slate-700 shadow-xl">
                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinic Environment" className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About The Clinic</h2>
              <h3 className="text-3xl lg:text-4xl font-bold font-heading text-white mb-6">What is Happy Smile?</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Happy Smile Dental Clinic</strong> is a state-of-the-art restorative and cosmetic dental practice located in the heart of Jyotikuchi, Dhopolia (Guwahati). We stand as a beacon of advanced oral healthcare in Assam, seamlessly combining medical expertise with top-tier technological equipment to provide world-class dental solutions locally.
                </p>
                <div className="bg-slate-800 p-6 rounded-2xl border-l-4 border-primary my-6 shadow-sm">
                  <h4 className="text-white font-bold mb-3 flex items-center text-lg"><Heart className="w-5 h-5 text-primary mr-2" /> How We Were Founded</h4>
                  <p className="text-sm leading-relaxed">
                    Happy Smile was founded by Dr. Hirak Jyoti Goswami with a singular, driving vision: to completely redefine the dental care experience. Recognizing that many patients struggle with dental anxiety and lack access to modern, pain-free solutions, the clinic was established to bridge that gap. We built it from the ground up to offer a calming, stress-free atmosphere where clinical excellence meets genuine human compassion.
                  </p>
                </div>
                <p>
                  Every aspect of Happy Smile—from our soothing waiting areas to our completely modernized treatment units—was deliberately designed under the philosophy that a visit to the dentist should be something you look forward to, not fear.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark text-slate-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-3xl p-10 shadow-sm border border-slate-700">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver comprehensive, high-quality, and affordable dental care in a state-of-the-art environment. We strive to educate our patients and partner with them in achieving optimal oral health for a lifetime.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-10 shadow-sm border border-slate-700">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the most trusted and respected dental clinic in Northeast India, recognized for our ethical practices, advanced clinical skills, and unwavering dedication to patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">What Drives Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-16">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Excellence in Care', 'Patient-First Approach', 'Hygiene & Safety', 'Honesty & Integrity'].map((value, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-700 flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-primary mb-6" />
                <h4 className="text-xl font-bold font-heading text-white">{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
