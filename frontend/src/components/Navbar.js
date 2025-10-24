import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const cartCount = getCartCount();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
            >
              REVIEWS
            </Link>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
            >
              SHOP
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
            >
              CONTACT
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
            >
              ABOUT US
            </Link>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-serif text-white tracking-wide">Amzélle</h1>
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-900 text-white px-4 py-1.5 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 w-48"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </form>

            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate('/cart')}
              className="text-gray-300 hover:text-white transition-colors duration-200 relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-900 text-white px-4 py-2 pr-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-600 w-full"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </form>
            <Link
              to="/"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              REVIEWS
            </Link>
            <Link
              to="/shop"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;