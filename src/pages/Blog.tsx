import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import teethCleaningImage from '../assets/images/regenerated_image_1781527449175.webp';

export const posts = [
  {
    id: 1,
    title: 'How Often Should You Really Visit a Dentist?',
    excerpt: 'Find out why regular dental checkups are crucial and the recommended frequency for optimal oral health.',
    content: `
      <p>While many people believe they only need to visit the dentist when they have a problem, regular dental check-ups are essential for maintaining good oral health. The general recommendation is to visit your dentist every six months, but this can vary depending on your individual needs.</p>
      <br>
      <h3>The Importance of Regular Check-ups</h3>
      <p>Regular visits allow your dentist to catch potential issues early, before they become serious problems. This includes early detection of cavities, gum disease, and oral cancer. Furthermore, professional cleanings remove plaque and tartar that regular brushing and flossing might miss, helping to prevent decay and maintain overall health.</p>
      <br>
      <h3>Who Needs More Frequent Visits?</h3>
      <p>Certain individuals may require more frequent visits, such as those with a history of periodontal disease, smokers, people with diabetes, or individuals with a weaker immune response to bacterial infection. It's always best to consult with your dentist to determine the ideal schedule for your specific situation.</p>
    `,
    date: 'Oct 15, 2023',
    author: 'Dr. Sharma',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'how-often-dentist-visit'
  },
  {
    id: 2,
    title: 'Benefits of Professional Teeth Cleaning',
    excerpt: 'Brushing at home is not enough. Discover the secret hidden benefits of professional teeth scaling.',
    content: `
      <p>Daily brushing and flossing are the foundation of good oral hygiene, but they aren't enough to keep your teeth completely free of tartar and plaque buildup. Professional teeth cleaning, also known as scaling and polishing, plays a crucial role in preventing long-term oral health issues.</p>
      <br>
      <h3>What Happens During a Cleaning?</h3>
      <p>During a professional cleaning, a dental hygienist uses specialized tools to gently remove tartar and plaque from your teeth and along the gumline. They also polish the teeth to remove minor surface stains, leaving your smile brighter and feeling incredibly clean.</p>
      <br>
      <h3>Health Benefits Beyond a Bright Smile</h3>
      <p>Aside from a clean, refreshed feeling, professional cleanings significantly reduce your risk of developing gum disease. Because gum disease has been linked to systemic issues like heart disease and diabetes, regular cleanings can actually contribute to your overall well-being.</p>
    `,
    date: 'Sep 28, 2023',
    author: 'Dr. Das',
    image: teethCleaningImage,
    slug: 'teeth-cleaning-benefits'
  },
  {
    id: 3,
    title: 'Root Canal Treatment Explained: Myths vs Facts',
    excerpt: 'Debunking common fears and myths surrounding root canal procedures. It is not as painful as you think.',
    content: `
      <p>Root canal treatment is perhaps one of the most misunderstood dental procedures. Many people equate it with immense pain and discomfort, often avoiding necessary treatment due to fear. The truth is quite different, thanks to modern dental technology and anesthetics.</p>
      <br>
      <h3>Myth 1: Root Canal Treatment is Painful</h3>
      <p><strong>Fact:</strong> The pain you feel is from the severe infection in your tooth, not the treatment itself. The procedure is performed under local anesthesia, and patients typically report feeling no more discomfort than they would during a routine filling.</p>
      <br>
      <h3>Myth 2: It's Better to Have the Tooth Extracted</h3>
      <p><strong>Fact:</strong> Saving your natural tooth should always be the priority. Extracting a tooth can lead to other issues, such as adjacent teeth shifting, bite misalignment, and bone loss in the jaw. A root canal saves the tooth and maintains the structural integrity of your bite.</p>
      <br>
      <p>Don't let myths prevent you from getting the care you need. If you are experiencing severe tooth pain, a root canal might be the best option to save your tooth and relieve your discomfort.</p>
    `,
    date: 'Sep 10, 2023',
    author: 'Dr. Sharma',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'root-canal-myths'
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Dental Health Blog | Tips & News from Happy Smile"
        description="Read the latest articles on dental health, oral care tips, and treatments from the expert doctors at Happy Smile Dental Clinic."
      />

      <section className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Dental Health Blog</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Expert advice, oral care tips, and clinic news to help you maintain a healthy smile.</p>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-slate-800 rounded-[32px] overflow-hidden shadow-sm border border-slate-700 hover:border-primary/50 transition-all group flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-400 mb-4 space-x-4">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> {post.date}</span>
                    <span className="flex items-center"><User className="w-4 h-4 mr-1"/> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-white mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-slate-300 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="mt-auto">
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
