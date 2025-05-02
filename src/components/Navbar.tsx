
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-6 px-4 md:px-10 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.svg" alt="etec logo" className="h-8" />
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-8 text-sm">
        <Link to="/products" className="hover:text-gray-600 transition-colors">All products</Link>
        <Link to="/about" className="hover:text-gray-600 transition-colors">About us</Link>
        <Link to="/faq" className="hover:text-gray-600 transition-colors">FAQ</Link>
        <Link to="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
        <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
