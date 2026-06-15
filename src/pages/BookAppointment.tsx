import { SEO } from '../components/SEO';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  'General Checkup',
  'Teeth Cleaning',
  'Root Canal',
  'Tooth Extraction',
  'Dental Fillings',
  'Braces & Aligners',
  'Teeth Whitening',
  'Dental Implants',
  'Pediatric Dentistry',
  'Other / Not Sure'
];

export default function BookAppointment() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      treatment: formData.get('treatment') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('appointments')
        .insert([data]);

      if (error) {
        throw error;
      }

      setStatus('success');
    } catch (error: any) {
      console.error(error);
      if (error.message && error.message.includes('row-level security')) {
        setErrorMsg('Database Error: Go to Supabase -> Authentication -> Policies -> "appointments" table, and create a policy to enable "Insert" access for public/anon users.');
      } else {
        setErrorMsg(error.message || 'Something went wrong. Please try again or call us directly.');
      }
      setStatus('error');
    }
  };

  return (
    <>
      <SEO 
        title="Book Appointment | Happy Smile Dental Clinic"
        description="Schedule your dental checkup or treatment at Happy Smile Dental Clinic in Guwahati. Quick and easy online appointment booking."
      />

      <section className="bg-slate-900 py-12 md:py-20 lg:min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-full font-medium text-sm mb-6 text-primary shadow-sm border border-slate-700">
                <Calendar className="w-4 h-4" />
                <span>Online Booking</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-[1.1]">
                Book Your <br/>
                <span className="text-primary">Visit Today</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Take the first step towards a healthier, brighter smile. Fill out the form and our team will confirm your appointment shortly.
              </p>
              
              <div className="hidden lg:block space-y-6 bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-700">
                <h3 className="font-bold text-white text-lg mb-4">Why Book With Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Zero Waiting Time Strategy',
                    'Experienced Dental Professionals',
                    'Transparent Pricing',
                    'Strict Sterilization Protocols'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-800 p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-700 relative">
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-white mb-4">Request Received!</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
                      Thank you for choosing Happy Smile. Our receptionist will call you shortly on your provided number to confirm the exact time slot.
                    </p>
                    <Link to="/" className="bg-primary text-white px-8 py-3 rounded-full font-bold inline-block hover:bg-primary-dark transition-colors">
                      Return to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold font-heading text-white mb-6 border-b border-slate-700 pb-4">Patient Information</h2>
                    
                    {status === 'error' && (
                       <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6">
                         {errorMsg}
                       </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                        <input name="name" type="text" required className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500" placeholder="Rahul Sharma" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                        <input name="phone" type="tel" required className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500" placeholder="+91" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <input name="email" type="email" className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500" placeholder="Optional" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Treatment Type *</label>
                        <select name="treatment" required className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none [&>option]:bg-slate-900">
                          <option value="">Select Treatment</option>
                          {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Date *</label>
                        <input name="date" type="date" required className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" min={new Date().toISOString().split('T')[0]} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Time *</label>
                        <select name="time" required className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none [&>option]:bg-slate-900">
                          <option value="">Select Time Slot</option>
                          <option value="9:30 AM - 12:00 PM">Morning (9:30 AM - 12:00 PM)</option>
                          <option value="12:00 PM - 3:00 PM">Afternoon (12:00 PM - 3:00 PM)</option>
                          <option value="3:00 PM - 8:00 PM">Evening (3:00 PM - 8:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Any additional message?</label>
                      <textarea name="message" rows={3} className="w-full px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none placeholder:text-slate-500" placeholder="Describe your symptoms or requirements..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 text-lg mt-4"
                    >
                      {status === 'submitting' ? 'Processing...' : 'Confirm Appointment Request'}
                    </button>
                    <p className="text-xs text-center text-slate-500 mt-4">
                      By booking, you agree to our clinic's cancellation policy. Your data is secure.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
