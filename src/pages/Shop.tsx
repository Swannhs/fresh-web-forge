
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import NewsletterForm from '../components/NewsletterForm';
import { products } from '../data/products';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { GridIcon, ListIcon, SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const categories = [
    { id: 'displays', name: 'Displays' },
    { id: 'watches', name: 'Smart Watches' },
    { id: 'headphones', name: 'Headphones' },
    { id: 'phones', name: 'Phones' }
  ];

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const categoryMatch = selectedCategories.length === 0 || 
      (product.category && selectedCategories.includes(product.category));
    return priceMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Shop</h1>
          <p className="text-gray-600 mb-12">
            Shop our curated selection of premium products, designed to elevate your everyday experiences
          </p>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="md:hidden mb-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 w-full mb-4"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={18} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              
              <div className="flex justify-end gap-2 mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-gray-100' : ''}
                >
                  <GridIcon size={18} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-gray-100' : ''}
                >
                  <ListIcon size={18} />
                </Button>
              </div>
            </div>
            
            {/* Filters sidebar */}
            <aside className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="md:hidden"
                    onClick={() => setShowFilters(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>
                
                {/* Price Range */}
                <div className="mb-8">
                  <Label className="text-sm font-medium mb-4 block">Price Range</Label>
                  <Slider 
                    defaultValue={[0, 1000]} 
                    max={1000} 
                    step={10}
                    onValueChange={(value) => setPriceRange(value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <Label className="text-sm font-medium mb-4 block">Categories</Label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center gap-2">
                        <Checkbox 
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <Label 
                          htmlFor={category.id} 
                          className="text-sm cursor-pointer"
                        >
                          {category.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Products grid */}
            <div className="md:w-3/4">
              <div className="hidden md:flex justify-end gap-2 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-gray-100' : ''}
                >
                  <GridIcon size={18} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-gray-100' : ''}
                >
                  <ListIcon size={18} />
                </Button>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' 
                  : 'space-y-6'
                }>
                  {filteredProducts.map(product => (
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
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No products match your filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedCategories([]);
                      setPriceRange([0, 1000]);
                    }}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
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

export default Shop;
