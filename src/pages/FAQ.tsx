
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">FAQ</h1>
          <p className="text-gray-600 mb-12">
            Shop our curated selection of premium products, designed to elevate your everyday experiences
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-xl font-medium mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                If you have an issue or question that requires immediate assistance, you can click the button below to contact with a Customer Service representative.
              </p>
              <p className="text-gray-600 mb-6">
                Please allow 06 - 12 business days from the time your package arrives back to us for a refund to be issued.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full">Contact us</Button>
              </Link>
            </div>
            
            <div className="md:col-span-2">
              <div className="space-y-10">
                {/* Shopping Information */}
                <div>
                  <h2 className="text-xl font-medium mb-6">Shopping Information</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="track-order">
                      <AccordionTrigger>How can I track my order?</AccordionTrigger>
                      <AccordionContent>
                        Once your order has been processed and shipped, you'll receive a confirmation email containing a tracking number and a link to track your package. Simply click on the provided link or enter the tracking number on our website's order tracking page to monitor the status and location of your shipment in real-time.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="payment-methods">
                      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. For select orders, we also offer financing options through Affirm and Klarna.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="modify-order">
                      <AccordionTrigger>Can I modify or cancel my order after it's been placed?</AccordionTrigger>
                      <AccordionContent>
                        You may request modifications or cancellations within 1 hour of placing your order. Please contact our customer service team immediately. Once an order has entered the processing phase, we cannot guarantee that changes or cancellations will be possible.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="international-shipping">
                      <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we ship to over 40 countries worldwide. International shipping rates are calculated at checkout based on destination, weight, and selected shipping method. Please note that customers are responsible for any import duties or taxes levied by their country's customs authorities.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="customer-support">
                      <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
                      <AccordionContent>
                        Our customer support team is available via email at support@etec.com, live chat on our website (Monday-Friday, 9am-5pm EST), or by phone at +123-456-7890 (Monday-Friday, 10am-4pm EST). For non-urgent matters, you can also reach us through our social media channels.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                {/* Payment Information */}
                <div>
                  <h2 className="text-xl font-medium mb-6">Payment Information</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="credit-card-safety">
                      <AccordionTrigger>Is it safe to enter my credit card information on your website?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely. Our website uses 256-bit SSL encryption to protect your personal and payment information. We are PCI-DSS compliant and never store your full credit card details on our servers. All payment processing is handled by trusted third-party payment processors with advanced security measures.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="card-charge-timing">
                      <AccordionTrigger>When will my credit card be charged for my order?</AccordionTrigger>
                      <AccordionContent>
                        Your credit card will be authorized when you place your order but won't be charged until your order ships. For pre-orders or back-ordered items, we'll notify you before charging your card, and no charge will be processed until the item is ready to ship.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                {/* Orders & Returns */}
                <div>
                  <h2 className="text-xl font-medium mb-6">Order & Returns</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="track-order-2">
                      <AccordionTrigger>How can I track my order?</AccordionTrigger>
                      <AccordionContent>
                        Once your order has been processed and shipped, you'll receive a confirmation email containing a tracking number and a link to track your package. Simply click on the provided link or enter the tracking number on our website's order tracking page to monitor the status and location of your shipment in real-time.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="return-policy">
                      <AccordionTrigger>What is your return policy?</AccordionTrigger>
                      <AccordionContent>
                        We offer a 45-day return policy for most products. Items must be in original condition with all packaging and accessories included. To initiate a return, please visit your order history in your account or contact our customer support team. Once we receive and inspect the returned item, your refund will be processed within 5-7 business days.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
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

export default FAQ;
