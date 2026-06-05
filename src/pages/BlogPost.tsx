import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { posts } from './Blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 border-none relative mx-2 text-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:text-white transition-colors flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} | Dental Health Blog`}
        description={post.excerpt}
      />

      <article className="min-h-screen bg-slate-900 mx-2 text-white">
        {/* Banner Section */}
        <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] rounded-b-3xl overflow-hidden mt-2">
          <div className="absolute inset-0">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center text-sm md:text-base text-slate-300 gap-4 font-medium backdrop-blur-sm bg-slate-900/30 py-2 px-6 rounded-full inline-flex">
              <span className="flex items-center"><Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary"/> {post.date}</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="flex items-center"><User className="w-4 h-4 md:w-5 md:h-5 mr-2 text-primary"/> {post.author}</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 relative -mt-4 mb-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Link to="/blog" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors mb-10 group bg-slate-800/50 py-2 px-4 rounded-full border border-slate-700/50 hover:border-slate-600">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to all articles
            </Link>

            <div 
              className="text-slate-300 text-lg leading-relaxed [&>p]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mb-4 [&>h3]:mt-8 [&>strong]:text-white [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </div>
        </section>
      </article>
    </>
  );
}
