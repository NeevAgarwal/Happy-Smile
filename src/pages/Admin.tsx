import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Calendar, Trash2, LogOut, CheckCircle, Clock, ShieldCheck, Mail, Phone, User, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [adminExists, setAdminExists] = useState(false);

  // Auth form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchAppointments();
      } else {
        checkAdminExists();
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchAppointments();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminExists = async () => {
    try {
      // We use a special marker row in the appointments table to denote that an admin has been registered
      const { data, error } = await supabase
        .from('appointments')
        .select('id')
        .eq('email', 'admin_setup@system.local')
        .limit(1);
      
      if (!error && data && data.length > 0) {
        setAdminExists(true);
        setMode('login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .neq('email', 'admin_setup@system.local') // filter out our marker row
        .order('id', { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      if (mode === 'signup') {
        if (adminExists) {
          throw new Error("An administrator account has already been initialized.");
        }
        
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;

        // Create the marker to prevent future signups
        await supabase.from('appointments').insert([{
          name: 'System Admin',
          email: 'admin_setup@system.local',
          phone: '-',
          date: '-',
          time: '-',
          treatment: 'System Initialization',
          message: 'Admin account has been created.'
        }]);

        setAuthError("Account created! You can now log in.");
        setMode('login');
        setAdminExists(true);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (err: any) {
      if (err.message === 'Email not confirmed') {
        setAuthError('Email not confirmed. To fix this: Go to your Supabase Dashboard -> Authentication -> Providers -> Email -> Turn OFF "Confirm email". Then try again.');
      } else {
        setAuthError(err.message || 'Authentication failed');
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const [actionError, setActionError] = useState('');

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const toggleStatus = async (id: string | number, currentStatus: string) => {
    setActionError('');
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', id);
      
      if (error) throw error;
      fetchAppointments();
    } catch (err: any) {
      console.error("Error updating status:", err);
      if (err.message && err.message.toLowerCase().includes('status')) {
         setActionError("Database Error: Go to Supabase -> SQL Editor and run: ALTER TABLE appointments ADD COLUMN status text DEFAULT 'pending';");
      } else {
         setActionError(err.message || "Failed to update appointment status.");
      }
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;
    setActionError('');
    try {
      const { error } = await supabase.from('appointments').delete().eq('id', id);
      if (error) throw error;
      fetchAppointments();
    } catch (err: any) {
      console.error("Error deleting appointment:", err);
      setActionError(err.message || "Failed to delete appointment.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <SEO title="Admin Login | Happy Smile Dental Clinic" />
        <div className="min-h-[80vh] bg-slate-900 flex items-center justify-center p-4">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 w-full max-w-md">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-2xl font-bold font-heading text-white text-center mb-6">
              {mode === 'login' ? 'Admin Login' : 'Admin Setup'}
            </h1>
            
            {authError && (
              <div className={`p-4 rounded-lg mb-6 flex items-start ${authError.includes('created') ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}>
                {authError.includes('created') ? <CheckCircle className="w-5 h-5 mr-2 shrink-0" /> : <AlertCircle className="w-5 h-5 mr-2 shrink-0" />}
                <p className="text-sm">{authError}</p>
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500" 
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-500" 
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>
              <button 
                type="submit" 
                disabled={authLoading}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-70 mt-4"
              >
                {authLoading ? 'Processing...' : (mode === 'login' ? 'Sign In' : 'Create Admin Account')}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-400">
              {mode === 'login' ? (
                adminExists ? (
                  <p>Admin account has already been configured.</p>
                ) : (
                  <button onClick={() => setMode('signup')} className="text-primary hover:underline">
                    No admin yet? Initialize admin account
                  </button>
                )
              ) : (
                <button onClick={() => setMode('login')} className="text-primary hover:underline">
                  Back to login
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Admin Dashboard | Happy Smile Dental Clinic" />
      <div className="min-h-screen bg-slate-900">
        <header className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h1 className="text-xl font-bold font-heading text-white">Admin Dashboard</h1>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <span className="text-sm font-medium">Logout</span>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Recent Bookings</h2>
            <p className="text-slate-400">Manage and view all incoming appointment requests.</p>
          </div>

          {actionError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg mb-6 flex items-start">
              <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
              <div className="text-sm whitespace-pre-wrap">{actionError}</div>
            </div>
          )}

          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
            {appointments.length === 0 ? (
              <div className="p-12 text-center text-slate-400">
                <Calendar className="w-12 h-12 mx-auto text-slate-600 mb-4" />
                <p className="text-lg">No appointments found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-800/50 border-b border-slate-700">
                      <th className="px-6 py-4 text-sm font-semibold text-slate-300">Patient</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-300">Contact</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-300">Treatment</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-300">Requested Time</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-300">Status</th>
                      <th className="px-6 py-4 text-sm font-semibold text-slate-300 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {appointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-slate-700/20 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                              <User className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                              <p className="font-bold text-white">{apt.name}</p>
                              <p className="text-xs text-slate-500">ID: #{apt.id || '-'}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-slate-300 whitespace-nowrap">
                              <Phone className="w-3.5 h-3.5 mr-2 text-primary" />
                              {apt.phone}
                            </div>
                            {apt.email && (
                              <div className="flex items-center text-sm text-slate-400 whitespace-nowrap">
                                <Mail className="w-3.5 h-3.5 mr-2" />
                                {apt.email}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                            {apt.treatment}
                          </span>
                          {apt.message && (
                            <p className="text-xs text-slate-400 mt-2 line-clamp-2 max-w-[200px]" title={apt.message}>
                              {apt.message}
                            </p>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-white whitespace-nowrap">
                              <Calendar className="w-4 h-4 mr-2 text-primary" />
                              {apt.date}
                            </div>
                            <div className="flex items-center text-sm text-slate-400 whitespace-nowrap">
                              <Clock className="w-4 h-4 mr-2" />
                              {apt.time}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <label className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                              <input 
                                type="checkbox" 
                                className="peer sr-only" 
                                checked={apt.status === 'completed'}
                                onChange={() => toggleStatus(apt.id, apt.status)}
                              />
                              <div className="w-6 h-6 rounded border-2 border-slate-600 bg-slate-800 peer-checked:bg-green-500 peer-checked:border-green-500 transition-colors flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                              </div>
                            </div>
                            <span className={`text-sm font-medium ${apt.status === 'completed' ? 'text-green-400' : 'text-slate-400'}`}>
                              {apt.status === 'completed' ? 'Done' : 'Pending'}
                            </span>
                          </label>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => handleDelete(apt.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10 p-2 rounded-lg transition-colors"
                            title="Delete Booking"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
