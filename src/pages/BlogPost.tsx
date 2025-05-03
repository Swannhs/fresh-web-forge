
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import { ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(p => p.id.toString() === postId);
  
  // Get related posts (different ID)
  const relatedPosts = post 
    ? blogPosts.filter(p => p.id !== post.id).slice(0, 3)
    : [];
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Blog post not found</h1>
            <Link to="/blog" className="btn-primary">Return to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="container mx-auto px-4 md:px-10 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-black">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to="/blog" className="hover:text-black">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-black">{post.title}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-medium mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{post.date}</p>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
        
        {/* Content section */}
        <div className="container mx-auto px-4 md:px-10 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <p className="mb-6">
                The landscape of wearable technology is constantly evolving, with innovations emerging at an unprecedented pace. 
                From fitness trackers to smart glasses, these devices are becoming increasingly sophisticated, offering 
                functionalities that were once the realm of science fiction.
              </p>
              <p className="mb-6">
                As we look toward the future, several key trends are shaping the development of wearable tech. Understanding 
                these trends can provide valuable insights for both consumers and industry professionals.
              </p>
              <h2 className="text-2xl font-medium mt-10 mb-4">Health Monitoring Advancements</h2>
              <p className="mb-6">
                One of the most significant developments in wearable technology is the increasing sophistication of health 
                monitoring capabilities. Modern devices can track not only basic metrics like heart rate and step count but 
                also more complex health indicators.
              </p>
              <p className="mb-6">
                Recent innovations include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Continuous glucose monitoring without invasive procedures</li>
                <li className="mb-2">Advanced sleep analysis including REM cycle tracking</li>
                <li className="mb-2">Blood oxygen saturation monitoring</li>
                <li className="mb-2">Stress level assessment through heart rate variability</li>
              </ul>
              <p className="mb-6">
                These features are making wearable devices increasingly valuable for proactive health management and even 
                early disease detection.
              </p>
              <h2 className="text-2xl font-medium mt-10 mb-4">Integration with IoT Ecosystems</h2>
              <p className="mb-6">
                Wearable technology is becoming more deeply integrated with broader Internet of Things (IoT) ecosystems. 
                This interconnectivity enables devices to communicate with smart homes, vehicles, and other digital services 
                to create seamless user experiences.
              </p>
              <p className="mb-6">
                For example, a smartwatch can now:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Adjust home temperature when detecting the wearer is returning home</li>
                <li className="mb-2">Start a car remotely</li>
                <li className="mb-2">Interact with smart appliances</li>
                <li className="mb-2">Provide contactless payment options</li>
              </ul>
              <h2 className="text-2xl font-medium mt-10 mb-4">Enhanced Battery Technology</h2>
              <p className="mb-6">
                Battery limitations have long been a challenge for wearable devices. However, recent advancements in battery 
                technology are extending the operational life of these devices while maintaining their compact form factors.
              </p>
              <p className="mb-6">
                Innovations in this area include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Solid-state batteries with higher energy density</li>
                <li className="mb-2">Energy harvesting from body heat or movement</li>
                <li className="mb-2">Ultra-fast charging capabilities</li>
                <li className="mb-2">Improved power management software</li>
              </ul>
              <h2 className="text-2xl font-medium mt-10 mb-4">Fashion-Forward Design</h2>
              <p className="mb-6">
                As wearable technology becomes mainstream, there is an increasing focus on aesthetic design. Manufacturers are 
                collaborating with fashion designers to create devices that are not just functional but also stylish and 
                customizable.
              </p>
              <p className="mb-6">
                This trend is evident in:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Modular designs allowing for personalization</li>
                <li className="mb-2">Luxury brand collaborations</li>
                <li className="mb-2">Innovative materials that combine durability with visual appeal</li>
                <li className="mb-2">Minimalist designs that blend with various styles</li>
              </ul>
              <p className="mb-6">
                The evolution of wearable technology represents a convergence of multiple industries—technology, healthcare, 
                fashion, and fitness. As these devices become more sophisticated and integrated into our daily lives, they 
                have the potential to transform how we interact with our environment and manage our health.
              </p>
              <p className="mb-6">
                The future of wearable tech is not just about adding more features; it's about creating intelligent, 
                responsive devices that provide genuine value while seamlessly fitting into our lifestyles. As we move 
                forward, we can expect to see even more innovative applications that enhance our capabilities and provide 
                insights that were previously impossible to obtain.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 md:px-10 py-16 border-t border-gray-100">
            <h2 className="text-2xl font-medium mb-8">Related posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link to={`/blog/${relatedPost.id}`} className="group" key={relatedPost.id}>
                  <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:underline">{relatedPost.title}</h3>
                  <p className="text-gray-500 text-sm">{relatedPost.date}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
        
        {/* Newsletter */}
        <NewsletterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
