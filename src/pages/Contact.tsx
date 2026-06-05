import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // In a real app we might want a separate table for generic contact messages
    // or just send an email. For now, we simulate success.
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Happy Smile Dental Clinic Guwahati"
        description="Get in touch with Happy Smile Dental Clinic in Jyotikuchi, Guwahati. Find our address, phone number, and opening hours."
      />

      <section className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Contact Us</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">We're here to help you achieve your best smile. Reach out to us today.</p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-heading text-white mb-8">Get in Touch</h2>
              
              <div className="flex items-start bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-700">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0 mr-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Clinic Address</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Jyotikuchi, Dhopolia,<br />
                    Near LP School,<br />
                    Guwahati, Assam 781040
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-700">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0 mr-6">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Phone Number</h3>
                  <p className="text-slate-300 text-lg font-medium">+91 86383 87812</p>
                  <p className="text-sm text-slate-400 mt-1">Call us for immediate assistance</p>
                </div>
              </div>
              
              <div className="flex items-start bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-700">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0 mr-6">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Opening Hours</h3>
                  <ul className="text-slate-300 space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Sun:</span> <span>9:30 AM – 8:00 PM</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 p-10 rounded-[40px] shadow-xl border border-slate-700">
              <h3 className="text-2xl font-bold font-heading text-white mb-8">Send Us a Message</h3>
              
              {status === 'success' ? (
                <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-green-700 font-medium underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500 text-white" placeholder="Rahul Sharma" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500 text-white" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address (Optional)</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500 text-white" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder:text-slate-500 text-white" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center disabled:opacity-70"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.975102555776!2d91.73708215!3d26.155799999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b512cfffff9%3A0x6bba8fcd0e340b90!2sJyotikuchi%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        ></iframe>
      </section>
    </>
  );
}
