import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-purple-300">About us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Amzélle is your destination for premium clothing and elegant jewellery.
              We believe in quality, style, and exceptional customer service.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-pink-300">Contact us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: support@amzelle.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <div className="pt-4 space-y-2">
                <Link to="/shop" className="block hover:text-purple-400 transition-colors">
                  Shop
                </Link>
                <Link to="/about" className="block hover:text-purple-400 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-orange-300">Sign up for our newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Amzélle. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;