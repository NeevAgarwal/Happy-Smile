import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Smile Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">+91 86383 87812</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Jyotikuchi, Dhopolia, Guwahati</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Mon-Sun: 9:30 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-sm py-4 border-b border-slate-800' : 'bg-slate-900 border-b border-slate-800 py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="gradient-logo-nav" x1="4" y1="4" x2="44" y2="44">
                      <stop stopColor="#e0f2fe" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="gradient-sparkle-nav" x1="30" y1="4" x2="44" y2="18">
                      <stop stopColor="#fef08a" />
                      <stop offset="1" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                  
                  <path d="M24 10C16 10 10 15 10 22C10 26.5 12 28.5 13.5 33C14.5 36 15 40 18 40C21.5 40 22.5 35 24 32C25.5 35 26.5 40 30 40C33 40 33.5 36 34.5 33C36 28.5 38 26.5 38 22C38 15 32 10 24 10Z" fill="url(#gradient-logo-nav)" />
                  <path d="M16 23C16 23 20 27 24 27C28 27 32 23 32 23" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 12L39 7L42 12L47 15L42 18L39 23L36 18L31 15L36 12Z" fill="url(#gradient-sparkle-nav)" />
                </svg>
              </div>
              <div className="ml-1">
                <span className="font-bold text-xl text-white tracking-tight uppercase leading-none block">Happy Smile</span>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase mt-0.5 block">Dental Clinic</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    location.pathname === link.path ? 'text-primary' : 'text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-appointment"
                className="bg-primary hover:opacity-90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      location.pathname === link.path
                        ? 'bg-primary/20 text-primary'
                        : 'text-slate-300 hover:bg-slate-800'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 pb-2 px-4">
                  <Link
                    to="/book-appointment"
                    className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-medium"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
