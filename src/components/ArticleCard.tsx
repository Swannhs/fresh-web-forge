
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: number;
  title: string;
  image: string;
}

const ArticleCard = ({ id, title, image }: ArticleCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="group">
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <h3 className="mt-4 text-base font-medium group-hover:underline">{title}</h3>
    </Link>
  );
};

export default ArticleCard;
