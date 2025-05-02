
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', { name, email, message });
      toast.success('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-10">Contact us</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            We're here to assist you with any inquiries, feedback, or assistance you may need. Whether you have questions about products, orders, or general inquiries, our dedicated customer support team is ready to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Phone number</h3>
                <p className="text-lg mb-4">+ 123 456 789</p>
                <p className="text-sm text-gray-600">
                  Call our team directly. We will provide information, answer technical questions, or schedule an appointment.
                </p>
              </div>
              
              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-medium mb-3">E-mail</h3>
                <p className="text-lg mb-4">example@gmail.com</p>
                <p className="text-sm text-gray-600">
                  Use email to provide information about the project. We will respond as soon as possible, providing comprehensive support.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Drop us a message</h3>
                <p className="text-sm text-gray-600 mb-6">
                  We're always here to assist you at Etec. Our customer support team is dedicated to addressing your inquiries.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Input 
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <textarea 
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full p-3 border rounded-md min-h-[180px] bg-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-full bg-black hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending message...' : 'Send message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <NewsletterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
