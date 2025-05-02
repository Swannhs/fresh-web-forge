
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  imagePosition?: 'left' | 'right';
}

const CategoryCard = ({ title, description, image, link, buttonText, imagePosition = 'right' }: CategoryCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-6 flex flex-col justify-center ${imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <div>
            <Link 
              to={link} 
              className="text-sm font-medium hover:underline"
            >
              {buttonText}
            </Link>
          </div>
        </div>
        <div className={`${imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
          <img src={image} alt={title} className="w-full h-full object-cover aspect-square md:aspect-auto" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
