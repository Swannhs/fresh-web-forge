
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import ArticleCard from '../components/ArticleCard';
import NewsletterForm from '../components/NewsletterForm';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { articles } from '../data/articles';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-10 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              Elevate your lifestyle with premium essentials.
            </h1>
            <p className="text-gray-600 mb-8">
              Elevate your daily routine with our meticulously selected premium goods and curated essentials.
            </p>
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Browse all products
            </Link>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="container mx-auto px-4 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                featured={product.featured}
              />
            ))}
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="container mx-auto px-4 md:px-10 py-16 md:py-20">
          <h2 className="text-2xl font-medium mb-2">Browse by categories</h2>
          <p className="text-gray-600 mb-8">
            Explore our diverse range of categories tailored to meet your specific needs and interests.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
                link={category.link}
                buttonText={category.buttonText}
                imagePosition={index % 2 === 0 ? 'right' : 'left'}
              />
            ))}
          </div>
        </section>
        
        {/* Blog Section */}
        <section className="container mx-auto px-4 md:px-10 py-16 md:py-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-medium">Our articles and news</h2>
            <Link 
              to="/blog" 
              className="px-5 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Check all
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
              <ArticleCard 
                key={article.id}
                id={article.id}
                title={article.title}
                image={article.image}
              />
            ))}
          </div>
        </section>
        
        {/* Newsletter */}
        <NewsletterForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
