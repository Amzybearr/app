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
      <section className="py-16 bg-gradient-to-r from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 opacity-90">
            24/7 Support • Multiple Payment Options • Trusted Worldwide • Shipping Worldwide
          </h2>
          
          <div className="flex justify-center items-center space-x-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-4xl font-bold">M</span>
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-4xl font-bold">P</span>
            </div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-4xl font-bold">A</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shopiverse */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Why Amzélle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fade-in 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => navigate('/shop?category=clothing')}
            >
              <img
                src="https://images.unsplash.com/photo-1591884807235-1dc6c2e148b1?w=800"
                alt="Clothing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl font-serif mb-4">Clothing</h3>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => navigate('/shop?category=jewellery')}
            >
              <img
                src="https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=800"
                alt="Jewellery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl font-serif mb-4">Jewellery</h3>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;