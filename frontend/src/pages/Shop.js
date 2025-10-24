import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { products } from '../mockData';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Filter } from 'lucide-react';

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = products
    .filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 text-gray-800 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-serif mb-4 text-gray-800">Shop Collection</h1>
          <p className="text-gray-600 text-lg">
            {searchQuery ? `Search results for "${searchQuery}"` : 'Discover our curated selection'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {['all', 'clothing', 'jewellery'].map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-white text-black'
                            : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider">
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-white"
                    />
                    <p className="text-gray-400 text-sm">
                      Up to ${priceRange[1]}
                    </p>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <p className="text-gray-400 mb-6">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group bg-gray-900 border-gray-800 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                          {product.category}
                        </p>
                        <h3 className="text-lg font-medium mb-2 group-hover:text-gray-300 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xl font-light">${product.price.toFixed(2)}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;