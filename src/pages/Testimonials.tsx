import { SEO } from '../components/SEO';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: 'Anjali Sharma', treatment: 'Root Canal Treatment', content: 'The best dental experience I have ever had. The root canal was completely painless and the doctor explained every step. Highly recommended clinic in Guwahati!', rating: 5 },
  { id: 2, name: 'Rajib Das', treatment: 'Dental Implants', content: 'Very clean and hygienic clinic. The staff is extremely polite and the implant procedure went smoothly. Im very happy with my new teeth.', rating: 5 },
  { id: 3, name: 'Priya Baruah', treatment: 'Teeth Whitening', content: 'Got a smile makeover done before my wedding. The results are amazing! Thank you Happy Smile for making my special day even better.', rating: 5 },
  { id: 4, name: 'Vikram Singh', treatment: 'General Checkup', content: 'Professional doctors and state-of-the-art equipment. Have been bringing my whole family here for the last two years.', rating: 5 },
  { id: 5, name: 'Megha Gogoi', treatment: 'Braces', content: 'Started my orthodontic treatment here. The doctor is very patient and the pricing is very transparent compared to other clinics.', rating: 5 },
  { id: 6, name: 'Amit Kumar', treatment: 'Tooth Extraction', content: 'Got my wisdom tooth extracted. Was very scared initially but the doctor made me feel very comfortable. Zero pain!', rating: 5 },
];

export default function Testimonials() {
  return (
    <>
      <SEO 
        title="Patient Reviews | Happy Smile Dental Clinic"
        description="Read what our patients have to say about their experience at Happy Smile Dental Clinic in Guwahati. We are rated 4.9/5 by our patients."
      />

      <section className="bg-dark py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Patient Testimonials</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">We take pride in delivering exceptional care and ensuring patient satisfaction.</p>
        
        <div className="flex justify-center items-center space-x-2 text-yellow-400">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
        </div>
        <p className="mt-4 text-xl font-bold">4.9 / 5 Average Rating</p>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-slate-800 text-white font-bold py-4 px-8 rounded-full shadow-md border border-slate-700 hover:shadow-lg hover:border-slate-600 transition-all">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Write a Google Review</span>
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-700 hover:border-primary/50 transition-all relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current m-0.5" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic leading-relaxed text-lg">"{review.content}"</p>
              <div className="border-t border-slate-700 pt-4">
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-sm text-primary font-medium">{review.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
