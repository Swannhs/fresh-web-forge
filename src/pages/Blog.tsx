
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Wearable Tech: Trends and Innovations to Watch",
    image: "/lovable-uploads/34e031b4-176b-49d9-a3b3-b748b09f09aa.png",
    excerpt: "Explore the latest innovations in wearable technology and discover what's on the horizon.",
    date: "Apr 8, 2022"
  },
  {
    id: 2,
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    image: "/lovable-uploads/3698d58c-6b80-4c3d-a316-52a77b6051b3.png",
    excerpt: "How smart home technology is revolutionizing everyday living and creating more connected homes.",
    date: "Mar 15, 2022"
  },
  {
    id: 3,
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    image: "/lovable-uploads/78e1b3ea-d2f4-4895-83f5-7bc6612d83ec.png",
    excerpt: "The latest gaming technology that's changing not just entertainment but other industries too.",
    date: "Feb 28, 2022"
  },
  {
    id: 4,
    title: "Sustainable Tech: How Companies Are Going Green",
    image: "/lovable-uploads/0a67f8d3-ab6e-422e-8e47-3a21fcd7c729.png",
    excerpt: "Innovative approaches tech companies are taking to reduce their environmental footprint.",
    date: "Jan 20, 2022"
  },
  {
    id: 5,
    title: "The Evolution of Wireless Earbuds: What's Next?",
    image: "/products/headphones.png",
    excerpt: "From simple bluetooth headsets to advanced audio engineering, the rapid evolution of wireless audio.",
    date: "Dec 12, 2021"
  },
  {
    id: 6,
    title: "How AI is Enhancing Modern Electronics",
    image: "/products/display.png",
    excerpt: "The integration of artificial intelligence in everyday consumer electronics and its benefits.",
    date: "Nov 5, 2021"
  }
];

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group">
      <Link to={`/blog/${post.id}`}>
        <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <h3 className="text-lg font-medium mb-2 group-hover:underline">{post.title}</h3>
      </Link>
      <p className="text-gray-500 text-sm mb-2">{post.date}</p>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Blog</h1>
          <p className="text-gray-600 mb-12">Stay informed with our bite-sized articles.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        
        {/* Newsletter */}
        <NewsletterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
