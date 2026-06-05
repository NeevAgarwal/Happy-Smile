import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="transparent"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="gradient-logo-footer" x1="4" y1="4" x2="44" y2="44">
                      <stop stopColor="#0ea5e9" />
                      <stop offset="1" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="gradient-sparkle-footer" x1="30" y1="4" x2="44" y2="18">
                      <stop stopColor="#fef08a" />
                      <stop offset="1" stopColor="#eab308" />
                    </linearGradient>
                  </defs>
                  
                  <path d="M24 10C16 10 10 15 10 22C10 26.5 12 28.5 13.5 33C14.5 36 15 40 18 40C21.5 40 22.5 35 24 32C25.5 35 26.5 40 30 40C33 40 33.5 36 34.5 33C36 28.5 38 26.5 38 22C38 15 32 10 24 10Z" fill="url(#gradient-logo-footer)" />
                  <path d="M16 23C16 23 20 27 24 27C28 27 32 23 32 23" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 12L39 7L42 12L47 15L42 18L39 23L36 18L31 15L36 12Z" fill="url(#gradient-sparkle-footer)" />
                </svg>
              </div>
              <div className="ml-1">
                <span className="font-heading font-bold text-xl text-white tracking-tight leading-none block">Happy Smile</span>
                <span className="text-[10px] text-primary font-medium tracking-wider uppercase mt-0.5 block">Dental Clinic</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing advanced dental care with modern technology, experienced dentists, and customized treatment plans in Guwahati.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BQmVXEJxp/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hirakjyotigoswami?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918638387812" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Smile Gallery', path: '/gallery' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://www.facebook.com/share/1BQmVXEJxp/" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hirakjyotigoswami?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/918638387812" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-4">
              {['Dental Implants', 'Root Canal Treatment', 'Teeth Whitening', 'Braces & Aligners', 'Pediatric Dentistry', 'Dental Checkup'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Jyotikuchi, Dhopolia,<br />
                  Near LP School,<br />
                  Guwahati, Assam 781040
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-sm text-slate-400">+91 86383 87812</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-sm text-slate-400">hello@happysmilguwahati.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  Mon-Sun: 9:30 AM – 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Happy Smile Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/admin" className="hover:text-primary transition-colors font-medium">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
