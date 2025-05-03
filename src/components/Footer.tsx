
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.svg" alt="etec logo" className="h-8 mb-4" />
            <p className="text-sm text-gray-600 mb-4">
              Selling premium products, designed<br />
              to elevate your everyday experience
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c1.532 0 1.757.006 2.374.05 1.507.076 2.436.472 3.131 1.168.699.696 1.095 1.63 1.17 3.153.043.62.05.846.05 2.477 0 1.631-.007 1.857-.05 2.476-.075 1.523-.471 2.456-1.17 3.153-.695.695-1.624 1.092-3.131 1.168-.617.044-.842.05-2.374.05-1.533 0-1.758-.006-2.374-.05-1.507-.076-2.435-.473-3.131-1.168-.699-.697-1.095-1.63-1.17-3.153-.043-.62-.05-.845-.05-2.476 0-1.63.007-1.857.05-2.477.075-1.523.471-2.457 1.17-3.153.696-.696 1.624-1.092 3.131-1.168.617-.044.842-.05 2.374-.05z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 16a4 4 0 100-8 4 4 0 000 8zm0-10.167a6.167 6.167 0 110 12.334 6.167 6.167 0 010-12.334z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">Pages</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-black">Home</Link></li>
                <li><Link to="/shop" className="hover:text-black">Shop</Link></li>
                <li><Link to="/about" className="hover:text-black">About</Link></li>
                <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/faq" className="hover:text-black">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
                <li><Link to="/products" className="hover:text-black">Product</Link></li>
                <li><Link to="/404" className="hover:text-black">404</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <img src="https://framerusercontent.com/images/PUBoyXNPzyBAvmIqrRjBvVGFk.png" alt="Map" className="w-full h-40 object-cover rounded-lg" />
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>©2024 © design by tekustudio</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Terms & conditions</a>
            <a href="#" className="hover:text-black">Cookies</a>
            <a href="#" className="hover:text-black">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
