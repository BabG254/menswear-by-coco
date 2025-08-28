'use client';

import { useState, useMemo } from 'react';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      
      let priceMatch = true;
      if (priceRange === '0-50') priceMatch = product.price <= 50;
      else if (priceRange === '51-100') priceMatch = product.price > 50 && product.price <= 100;
      else if (priceRange === '100+') priceMatch = product.price > 100;
      
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-black mb-8">Shop All Products</h1>
        
        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="All">All Categories</option>
                <option value="Shirts">Shirts</option>
                <option value="Shoes">Shoes</option>
                <option value="Bags">Bags</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="All">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="100+">$100+</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button 
                onClick={() => { setSelectedCategory('All'); setPriceRange('All'); }}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md transition"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your filters.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setPriceRange('All'); }}
              className="btn-brand mt-4 inline-block"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
