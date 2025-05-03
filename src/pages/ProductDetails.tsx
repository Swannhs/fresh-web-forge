
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Minus, Plus, ChevronRight } from 'lucide-react';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product with the matching ID
  const product = products.find(p => p.id.toString() === productId);
  
  // Get related products (same category, different ID)
  const relatedProducts = product 
    ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];
  
  const handleAddToCart = () => {
    toast.success(`${quantity} × ${product?.name} added to cart!`);
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Product not found</h1>
            <Link to="/shop" className="btn-primary">Return to Shop</Link>
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
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-10 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-black">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-black">{product.name}</span>
          </div>
        </div>
        
        {/* Product detail */}
        <section className="container mx-auto px-4 md:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product image */}
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-96 w-auto object-contain"
              />
            </div>
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
              <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
              
              <div className="prose mb-8">
                <p className="text-gray-600">
                  Experience premium quality with our {product.name}. Designed to elevate your everyday tech experience with superior performance and elegant design.
                </p>
              </div>
              
              {/* Quantity selector */}
              <div className="flex items-center mb-8">
                <span className="mr-4 text-sm font-medium">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-1 border-r border-gray-300"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-1 border-l border-gray-300"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Add to cart button */}
              <Button 
                onClick={handleAddToCart}
                className="w-full md:w-auto rounded-full bg-black hover:bg-gray-800 px-8 py-6 h-auto"
              >
                Add to Cart
              </Button>
              
              {/* Features list */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Premium materials and craftsmanship
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Sustainable manufacturing process
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Long-lasting durability
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    User-friendly intuitive design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product details tabs */}
        <section className="container mx-auto px-4 md:px-10 py-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b rounded-none mb-6 bg-transparent">
              <TabsTrigger 
                value="description"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-3 px-4 data-[state=active]:shadow-none"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="specifications"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-3 px-4 data-[state=active]:shadow-none"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="reviews"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none pb-3 px-4 data-[state=active]:shadow-none"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  The {product.name} represents our commitment to exceptional quality and innovative design. 
                  Every detail has been meticulously crafted to provide an unparalleled experience.
                </p>
                <p className="text-gray-600 mt-4">
                  Made from premium materials that ensure durability and performance, this product is designed
                  to seamlessly integrate into your everyday life while elevating your tech experience.
                </p>
                <p className="text-gray-600 mt-4">
                  Whether you're using it for work, entertainment, or staying connected, the {product.name} offers
                  versatility and reliability that you can count on day after day.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">Technical Specifications</h3>
                  <div className="space-y-2">
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Dimensions</span>
                      <span className="w-1/2 text-gray-600">12 x 8 x 2 inches</span>
                    </div>
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Weight</span>
                      <span className="w-1/2 text-gray-600">1.2 lbs</span>
                    </div>
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Material</span>
                      <span className="w-1/2 text-gray-600">Aircraft-grade aluminum</span>
                    </div>
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Colors</span>
                      <span className="w-1/2 text-gray-600">Space Gray, Silver, Gold</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4">Features</h3>
                  <div className="space-y-2">
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Connectivity</span>
                      <span className="w-1/2 text-gray-600">Bluetooth 5.0, Wi-Fi 6</span>
                    </div>
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Battery</span>
                      <span className="w-1/2 text-gray-600">Up to 12 hours</span>
                    </div>
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Warranty</span>
                      <span className="w-1/2 text-gray-600">1-year limited</span>
                    </div>
                    <div className="flex border-b border-gray-100 py-2">
                      <span className="w-1/2 font-medium">Compatibility</span>
                      <span className="w-1/2 text-gray-600">iOS, Android, Windows</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div>
                <div className="flex items-center mb-8">
                  <div className="text-center mr-8">
                    <div className="text-5xl font-medium">4.8</div>
                    <div className="text-sm text-gray-500 mt-1">out of 5</div>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-2">
                      {/* 5 stars */}
                      <div className="flex items-center">
                        <span className="text-xs w-16">5 stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded mx-2">
                          <div className="bg-black h-2 rounded w-[85%]"></div>
                        </div>
                        <span className="text-xs w-10 text-right">85%</span>
                      </div>
                      {/* 4 stars */}
                      <div className="flex items-center">
                        <span className="text-xs w-16">4 stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded mx-2">
                          <div className="bg-black h-2 rounded w-[10%]"></div>
                        </div>
                        <span className="text-xs w-10 text-right">10%</span>
                      </div>
                      {/* 3 stars */}
                      <div className="flex items-center">
                        <span className="text-xs w-16">3 stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded mx-2">
                          <div className="bg-black h-2 rounded w-[3%]"></div>
                        </div>
                        <span className="text-xs w-10 text-right">3%</span>
                      </div>
                      {/* 2 stars */}
                      <div className="flex items-center">
                        <span className="text-xs w-16">2 stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded mx-2">
                          <div className="bg-black h-2 rounded w-[2%]"></div>
                        </div>
                        <span className="text-xs w-10 text-right">2%</span>
                      </div>
                      {/* 1 star */}
                      <div className="flex items-center">
                        <span className="text-xs w-16">1 star</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded mx-2">
                          <div className="bg-black h-2 rounded w-[0%]"></div>
                        </div>
                        <span className="text-xs w-10 text-right">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sample review */}
                <div className="border-t border-gray-100 py-6">
                  <div className="flex items-center mb-2">
                    <h4 className="font-medium">John D.</h4>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">June 12, 2023</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    This product exceeded all my expectations. The build quality is exceptional,
                    and it integrates perfectly with all my devices. I would highly recommend
                    it to anyone looking for a premium tech experience.
                  </p>
                </div>
                
                <div className="border-t border-gray-100 py-6">
                  <div className="flex items-center mb-2">
                    <h4 className="font-medium">Sarah L.</h4>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">May 28, 2023</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    I've been using this for about a month now and I'm very impressed with the
                    quality and performance. The battery life is amazing and the interface is
                    intuitive. Definitely worth the investment.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-4 md:px-10 py-12 border-t border-gray-100">
            <h2 className="text-2xl font-medium mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  image={relatedProduct.image}
                />
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

export default ProductDetails;
