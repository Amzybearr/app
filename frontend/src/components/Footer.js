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
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-serif mb-4">About us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Amzélle is your destination for premium clothing and elegant jewellery.
              We believe in quality, style, and exceptional customer service.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: support@amzelle.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <div className="pt-4 space-y-2">
                <Link to="/shop" className="block hover:text-white transition-colors">
                  Shop
                </Link>
                <Link to="/about" className="block hover:text-white transition-colors">
                  About
                </Link>
                <Link to="/contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-4">Sign up for our newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-900 text-white px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 border border-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
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
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;