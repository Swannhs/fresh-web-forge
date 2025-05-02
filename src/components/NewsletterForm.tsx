
import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(`Subscribed with email: ${email}`);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="bg-gray-50 py-12 px-6 md:py-16 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-medium mb-2">Subscribe to our email newsletter and get 15% off</h2>
        <p className="text-gray-600 mb-8">Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing to our newsletter.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors disabled:opacity-75"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
