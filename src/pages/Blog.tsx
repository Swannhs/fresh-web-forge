
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
    image: "https://framerusercontent.com/images/4albnHYE88QncxbZbQd4TAJZ8sY.jpg?scale-down-to=2048",
    excerpt: "Explore the latest innovations in wearable technology and discover what's on the horizon.",
    date: "Apr 8, 2022"
  },
  {
    id: 2,
    title: "The Rise of Smart Home Devices: Transforming the Way We Live",
    image: "https://framerusercontent.com/images/w8U0qeGPnEraHS19zHSqO4o34.jpg?scale-down-to=2048",
    excerpt: "How smart home technology is revolutionizing everyday living and creating more connected homes.",
    date: "Mar 15, 2022"
  },
  {
    id: 3,
    title: "Gaming Gadgets: Revolutionizing Entertainment and Beyond",
    image: "https://framerusercontent.com/images/0qM9Ztm4HZhZHt8vNXGofUBQf2w.jpg?scale-down-to=2048",
    excerpt: "The latest gaming technology that's changing not just entertainment but other industries too.",
    date: "Feb 28, 2022"
  },
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
