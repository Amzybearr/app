import React from 'react';
import { Card } from '../components/ui/card';
import { Award, Globe, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">About Amzélle</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're more than just a store. We're a movement dedicated to providing premium clothing
            and elegant jewellery for individuals who value quality, style, and authenticity.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded with a passion for exceptional craftsmanship, Amzélle began as a vision
                  to create a brand that bridges the gap between luxury and accessibility.
                </p>
                <p>
                  Every piece in our collection is carefully curated to ensure it meets our
                  high standards of quality, comfort, and design. We believe that everyone
                  deserves to feel confident and elegant in what they wear.
                </p>
                <p>
                  Today, we serve customers worldwide, shipping premium products to over 50 countries
                  and building a community of fashion enthusiasts who share our values.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=800"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-gray-800 p-8 text-center transform transition-all duration-300 hover:scale-105">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-400">
                Every product is crafted with attention to detail and premium materials.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8 text-center transform transition-all duration-300 hover:scale-105">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-400">
                Shipping worldwide with reliable delivery and exceptional service.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8 text-center transform transition-all duration-300 hover:scale-105">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Love</h3>
              <p className="text-gray-400">
                24/7 support and a commitment to your satisfaction every step of the way.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8 text-center transform transition-all duration-300 hover:scale-105">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Security</h3>
              <p className="text-gray-400">
                Secure payments and verified reviews from our global community.
              </p>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-gray-950 to-gray-900 rounded-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl font-serif mb-2">50+</p>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div>
              <p className="text-5xl font-serif mb-2">10k+</p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl font-serif mb-2">24/7</p>
              <p className="text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;