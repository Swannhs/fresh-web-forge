
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
}

const ProductCard = ({ id, name, price, image, featured = false }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {featured && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-60 object-contain p-4 transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium">{name}</h3>
        </Link>
        <p className="text-sm text-gray-500">USD {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
