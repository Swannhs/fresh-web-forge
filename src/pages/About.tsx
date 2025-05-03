
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ShippingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12V20H20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M2 8H22V12H2V8Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 16V16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PaymentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ReturnIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2L21 6L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 22L3 18L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              Accessible excellence:<br />
              Perfect tech for everyone!
            </h1>
            <p className="text-gray-600 mb-6">
              With over two decades of expertise, we've meticulously crafted collections that optimize 
              enduring quality and technological innovation, catering to the diverse needs of our clients.
            </p>
          </div>
          
          <div className="mt-10">
            <img 
              src="/lovable-uploads/17a65f39-ab79-44fd-9836-84ee99c29d66.png" 
              alt="Tech products on a desk" 
              className="w-full max-w-3xl rounded-lg"
            />
          </div>
        </section>
        
        {/* Shipping Features */}
        <section className="py-10 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <ShippingIcon />
                <div className="ml-4">
                  <h3 className="font-medium">Free Shipping</h3>
                  <p className="text-sm text-gray-600">$50+ orders ship free</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <PaymentIcon />
                <div className="ml-4">
                  <h3 className="font-medium">Secure Payments</h3>
                  <p className="text-sm text-gray-600">Trusted payment options</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <ReturnIcon />
                <div className="ml-4">
                  <h3 className="font-medium">45 Days Free Return</h3>
                  <p className="text-sm text-gray-600">Easy, risk-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Sections */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exclusive Range */}
            <div>
              <div className="bg-gray-100 rounded-lg h-64 mb-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/3698d58c-6b80-4c3d-a316-52a77b6051b3.png" 
                  alt="Desk setup with computer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Exclusive Range</h3>
              <p className="text-sm text-gray-600">
                Immerse yourself in our meticulously curated selection, backed by over 30 years of industry experience.
              </p>
            </div>
            
            {/* Enduring Innovation */}
            <div>
              <div className="bg-gray-100 rounded-lg h-64 mb-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/78e1b3ea-d2f4-4895-83f5-7bc6612d83ec.png" 
                  alt="Laptop with accessories" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Enduring Innovation</h3>
              <p className="text-sm text-gray-600">
                Our products showcase flagship brands, embodying timeless innovation that ensures they remain relevant and cutting edge for years.
              </p>
            </div>
            
            {/* Ethical Sourcing */}
            <div>
              <div className="bg-gray-100 rounded-lg h-64 mb-4 overflow-hidden">
                <img 
                  src="/lovable-uploads/0a67f8d3-ab6e-422e-8e47-3a21fcd7c729.png" 
                  alt="Phone with coffee" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Ethical Sourcing</h3>
              <p className="text-sm text-gray-600">
                Shop with confidence knowing that our products are sourced from reputable factories worldwide, adhering to stringent compliance standards.
              </p>
            </div>
          </div>
        </section>
        
        {/* Premium Tech */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/34e031b4-176b-49d9-a3b3-b748b09f09aa.png" 
                alt="Laptop setup" 
                className="rounded-lg w-full"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-6">Premium Tech Selection</h2>
              <p className="text-gray-600 mb-6">
                Our pursuit of excellence involves extensive exploration of top-tier factories globally, ensuring our tech lineup upholds standards upheld by renowned brands. We forge strong partnerships with these facilities, prioritizing factors like sustainability and ethical production practices.
              </p>
              
              <Link to="/shop">
                <Button variant="outline" className="rounded-full">
                  Check our store
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Timeless Tech Solutions */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-medium mb-6">Timeless Tech Solutions</h2>
              <p className="text-gray-600 mb-6">
                At Etec, we eschew passing trends in favor of enduring value and utility. Our commitment? To offer tech solutions that seamlessly integrate into your life, promising years of reliable performance and timeless appeal.
              </p>
              
              <Link to="/blog">
                <Button variant="outline" className="rounded-full">
                  Check our blog
                </Button>
              </Link>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/78e1b3ea-d2f4-4895-83f5-7bc6612d83ec.png" 
                alt="Modern workspace" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-medium mb-4">Subscribe to our email newsletter and get 15% off</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing to our newsletter.
            </p>
            
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <Button type="submit" className="bg-black hover:bg-gray-800 text-white rounded-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
