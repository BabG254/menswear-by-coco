'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import products, { Product } from '@/data/products';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [productList, setProductList] = useState<Product[]>(products);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Shirts',
    price: 0,
    image: [''],
    description: '',
    sizes: [],
    featured: false,
    newArrival: false
  });

  useEffect(() => {
    const authStatus = localStorage.getItem('isAdminAuthenticated');
    if (authStatus !== 'true') {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    router.push('/');
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image?.[0]) {
      alert('Please fill in all required fields');
      return;
    }

    const id = `${newProduct.category?.toLowerCase()}-${Date.now()}`;
    const productToAdd: Product = {
      id,
      name: newProduct.name,
      category: newProduct.category as Product['category'],
      price: newProduct.price,
      image: newProduct.image,
      description: newProduct.description || '',
      sizes: newProduct.sizes,
      featured: newProduct.featured,
      newArrival: newProduct.newArrival,
    };

    setProductList(prev => [...prev, productToAdd]);
    resetForm();
    setShowAddForm(false);
    
    // In a real app, this would sync to a database
    alert('Product added successfully! (Note: This is a demo - changes won\'t persist on refresh)');
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setNewProduct(product);
    setShowAddForm(true);
  };

  const handleUpdateProduct = () => {
    if (!editingProduct || !newProduct.name || !newProduct.price || !newProduct.image?.[0]) {
      alert('Please fill in all required fields');
      return;
    }

    const updatedProduct: Product = {
      ...editingProduct,
      name: newProduct.name,
      category: newProduct.category as Product['category'],
      price: newProduct.price,
      image: newProduct.image,
      description: newProduct.description || '',
      sizes: newProduct.sizes,
      featured: newProduct.featured,
      newArrival: newProduct.newArrival,
    };

    setProductList(prev => 
      prev.map(p => p.id === editingProduct.id ? updatedProduct : p)
    );
    
    resetForm();
    setShowAddForm(false);
    setEditingProduct(null);
    
    alert('Product updated successfully! (Note: This is a demo - changes won\'t persist on refresh)');
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProductList(prev => prev.filter(p => p.id !== id));
      alert('Product deleted successfully!');
    }
  };

  const resetForm = () => {
    setNewProduct({
      name: '',
      category: 'Shirts',
      price: 0,
      image: [''],
      description: '',
      sizes: [],
      featured: false,
      newArrival: false
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-light">Product Management Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">Welcome, Admin</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Actions */}
        <div className="mb-8">
          <button
            onClick={() => {
              setShowAddForm(true);
              setEditingProduct(null);
              resetForm();
            }}
            className="bg-black text-white px-6 py-3 hover:bg-red-500 transition-colors"
          >
            + Add New Product
          </button>
        </div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-medium mb-6">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter product name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value as Product['category'] }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="Shirts">Shirts</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Bags">Bags</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (KSH) *
                  </label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, price: parseInt(e.target.value) || 0 }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter price in KSH"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    value={newProduct.image?.[0] || ''}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, image: [e.target.value] }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter image URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    rows={3}
                    placeholder="Enter product description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sizes (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newProduct.sizes?.join(', ') || ''}
                    onChange={(e) => setNewProduct(prev => ({ 
                      ...prev, 
                      sizes: e.target.value.split(',').map(s => s.trim()).filter(s => s) 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="e.g., S, M, L, XL or 40, 41, 42, 43"
                  />
                </div>

                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newProduct.featured || false}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, featured: e.target.checked }))}
                      className="mr-2 focus:ring-red-500"
                    />
                    Featured Product
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={newProduct.newArrival || false}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, newArrival: e.target.checked }))}
                      className="mr-2 focus:ring-red-500"
                    />
                    New Arrival
                  </label>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                  className="bg-black text-white px-6 py-2 hover:bg-red-500 transition-colors"
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingProduct(null);
                    resetForm();
                  }}
                  className="bg-gray-300 text-gray-700 px-6 py-2 hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productList.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg font-medium text-black mb-2">KSH {product.price.toLocaleString()}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {product.featured && (
                  <span className="px-2 py-1 bg-black text-white text-xs">FEATURED</span>
                )}
                {product.newArrival && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs">NEW</span>
                )}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="flex-1 bg-gray-200 text-gray-800 px-3 py-2 text-sm hover:bg-gray-300 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="flex-1 bg-red-500 text-white px-3 py-2 text-sm hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
