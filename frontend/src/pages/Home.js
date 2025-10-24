import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products, features, whyUs } from '../mockData';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-pink-900/60 to-orange-900/60" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-wide animate-fade-in text-white drop-shadow-2xl">
            Outfit Your Grind
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 font-light tracking-wide drop-shadow-lg">
            Premium Clothing & Elegant Jewellery
          </p>
          <Button
            onClick={() => navigate('/shop')}
            className="bg-white text-purple-900 px-8 py-6 text-lg rounded-lg hover:bg-pink-100 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold"
          >
            Explore Collection
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Category Showcase - Moved to Top */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-gray-800">Shop By Category</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Discover our exclusive collections</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
              onClick={() => navigate('/shop?category=clothing')}
            >
              <img
                src="https://images.unsplash.com/photo-1591884807235-1dc6c2e148b1?w=800"
                alt="Clothing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent group-hover:from-purple-800/90 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl font-serif mb-4 text-white drop-shadow-lg">Clothing</h3>
                  <p className="text-white text-lg mb-6 drop-shadow-md">Premium fashion essentials</p>
                  <Button
                    className="bg-white text-purple-900 hover:bg-pink-100 transition-all duration-300 shadow-lg"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
              onClick={() => navigate('/shop?category=jewellery')}
            >
              <img
                src="https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=800"
                alt="Jewellery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-600/40 to-transparent group-hover:from-pink-800/90 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-5xl font-serif mb-4 text-white drop-shadow-lg">Jewellery</h3>
                  <p className="text-white text-lg mb-6 drop-shadow-md">Elegant luxury pieces</p>
                  <Button
                    className="bg-white text-pink-900 hover:bg-pink-100 transition-all duration-300 shadow-lg"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-gray-800">Featured Collection</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Handpicked pieces for the discerning individual</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group bg-white border-purple-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-purple-400"
                onClick={() => navigate(`/product/${product.id}`)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-purple-600 uppercase tracking-wider mb-2 font-semibold">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-medium mb-2 text-gray-800 group-hover:text-purple-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xl font-semibold text-pink-600">${product.price.toFixed(2)}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/shop')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 px-8 py-6 text-lg shadow-lg"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-white">
            24/7 Support • Multiple Payment Options • Trusted Worldwide • Shipping Worldwide
          </h2>
          
          <div className="flex justify-center items-center space-x-12 flex-wrap gap-6">
            {/* Mastercard */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300 w-32 h-24 flex items-center justify-center">
              <svg viewBox="0 0 152.407 108" className="w-full h-full">
                <g>
                  <rect width="152.407" height="108" fill="none"/>
                  <g>
                    <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" fill="#FF5F00"/>
                    <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" fill="#EB001B"/>
                    <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" fill="#F79E1B"/>
                  </g>
                </g>
              </svg>
            </div>

            {/* Visa */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300 w-32 h-24 flex items-center justify-center">
              <svg viewBox="0 0 152.407 108" className="w-full h-full">
                <g>
                  <rect width="152.407" height="108" fill="none"/>
                  <path d="M60.5,50.5l-6.3,26.7H48l6.3-26.7H60.5z M94.5,56.1c-1.2-0.5-3.2-1-5.6-1c-6.1,0-10.5,3.3-10.5,7.9c0,3.4,3.1,5.3,5.4,6.5c2.4,1.2,3.2,2,3.2,3.1c0,1.6-2,2.4-3.8,2.4c-2.5,0-3.9-0.4-5.9-1.3l-0.8-0.4l-0.9,5.3c1.5,0.7,4.2,1.3,7,1.3c6.5,0,10.7-3.2,10.8-8.2c0-2.7-1.6-4.8-5.2-6.5c-2.2-1.1-3.5-1.8-3.5-2.9c0-1,1.1-2,3.6-2c2.1,0,3.5,0.4,4.7,0.9l0.6,0.3L94.5,56.1z M107.1,50.5h-4.7c-1.5,0-2.6,0.4-3.2,2l-9.2,24.7h6.5l1.3-3.6h8l0.8,3.6h5.7L107.1,50.5z M100.8,68.8l3.3-9.1l1.9,9.1H100.8z M72.6,50.5l-5.1,26.7h-6.6l5.1-26.7H72.6z" fill="#1434CB"/>
                </g>
              </svg>
            </div>

            {/* PayPal */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300 w-32 h-24 flex items-center justify-center">
              <svg viewBox="0 0 152.407 108" className="w-full h-full">
                <g>
                  <rect width="152.407" height="108" fill="none"/>
                  <path d="M59.5,45.5c2.8,0,5.4,0.2,7.4,1.1c2.3,1,3.5,3,3.5,5.8c0,5.4-3.5,8.6-9.2,8.6h-2.9l1.9-11.2c0.1-0.6,0.5-1,1.1-1.1C60.6,48.5,60.1,45.5,59.5,45.5z M56.1,36.5c-1.5,0-2.8,1.1-3,2.6l-5.6,32.9c-0.1,0.9,0.5,1.7,1.4,1.7h8.7c1.5,0,2.8-1.1,3-2.6l1.3-7.6h4.2c11,0,18.2-7.3,19.9-17.3c0.8-4.7-0.1-8.4-2.6-11.1C80.6,32.1,76,30.5,70,30.5H56.1z" fill="#003087"/>
                  <path d="M93.5,45.5c2.8,0,5.4,0.2,7.4,1.1c2.3,1,3.5,3,3.5,5.8c0,5.4-3.5,8.6-9.2,8.6h-2.9l1.9-11.2c0.1-0.6,0.5-1,1.1-1.1C94.6,48.5,94.1,45.5,93.5,45.5z M90.1,36.5c-1.5,0-2.8,1.1-3,2.6l-5.6,32.9c-0.1,0.9,0.5,1.7,1.4,1.7h8.7c1.5,0,2.8-1.1,3-2.6l1.3-7.6h4.2c11,0,18.2-7.3,19.9-17.3c0.8-4.7-0.1-8.4-2.6-11.1C114.6,32.1,110,30.5,104,30.5H90.1z" fill="#0070E0"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shopiverse */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-800">Why Amzélle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fade-in 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                <h3 className="text-2xl font-serif mb-4 text-purple-700">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-4 text-white">Stay Updated</h2>
          <p className="text-white/90 text-lg mb-8">Subscribe to get special offers, free giveaways, and exclusive deals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <Button className="bg-white text-purple-700 hover:bg-pink-100 px-8 py-4 font-semibold shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;