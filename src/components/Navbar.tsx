'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart, FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white backdrop-blur-sm shadow-2xl border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - inspired by your brand logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-black border border-red-500 px-4 py-2 hover:bg-red-500/10 transition-colors">
              <span className="font-bold text-red-500 tracking-wider text-sm">MENSWEAR BY COCO</span>
            </div>
          </Link>

          {/* Desktop Navigation - MR PORTER inspired minimal approach */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium tracking-wide hover:text-red-500 transition-all duration-300 relative py-2 ${
                isActive('/') 
                  ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' 
                  : 'text-white'
              }`}
            >
              HOME
            </Link>
            <Link 
              href="/shop" 
              className={`text-sm font-medium tracking-wide hover:text-red-500 transition-all duration-300 relative py-2 ${
                isActive('/shop') 
                  ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' 
                  : 'text-white'
              }`}
            >
              SHOP
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium tracking-wide hover:text-red-500 transition-all duration-300 relative py-2 ${
                isActive('/about') 
                  ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' 
                  : 'text-white'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium tracking-wide hover:text-red-500 transition-all duration-300 relative py-2 ${
                isActive('/contact') 
                  ? 'text-red-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500' 
                  : 'text-white'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Right side icons - ASOS inspired */}
          <div className="flex items-center space-x-4">
            {/* Search icon */}
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors hidden md:block">
              <FaSearch size={16} className="text-white hover:text-red-500 transition-colors" />
            </button>
            
            {/* Profile/Admin icon */}
            <Link 
              href="/login" 
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors hidden md:block"
            >
              <FaUser size={16} className="text-white hover:text-red-500 transition-colors" />
            </Link>

            {/* Cart */}
            <Link 
              href="/cart" 
              className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FaShoppingCart size={18} className="text-white hover:text-red-500 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes size={20} className="text-white" />
              ) : (
                <FaBars size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - ASOS inspired slide-down */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-red-500/20 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-red-500 transition-colors py-2 text-sm font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                href="/shop" 
                className="text-white hover:text-red-500 transition-colors py-2 text-sm font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-red-500 transition-colors py-2 text-sm font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-red-500 transition-colors py-2 text-sm font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <FaSearch size={16} className="text-white" />
                </button>
                <Link 
                  href="/login"
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser size={16} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
