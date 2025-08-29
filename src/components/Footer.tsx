import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl text-red-500 mb-4">Menswear by Coco</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Premium fashion for the modern man. Discover our curated collection of shirts, shoes, bags, and accessories.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/menswearbycocoph" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-red-500 rounded-full transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://wa.me/639123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-red-500 rounded-full transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="mailto:info@menswearbycocoph.com"
                className="p-3 bg-gray-800 hover:bg-red-500 rounded-full transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-red-500 transition-colors">Home</Link>
              <Link href="/shop" className="block text-gray-300 hover:text-red-500 transition-colors">Shop</Link>
              <Link href="/about" className="block text-gray-300 hover:text-red-500 transition-colors">About</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-red-500 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Categories</h4>
            <div className="space-y-2">
              <Link href="/shop?category=shirts" className="block text-gray-300 hover:text-red-500 transition-colors">Shirts</Link>
              <Link href="/shop?category=shoes" className="block text-gray-300 hover:text-red-500 transition-colors">Shoes</Link>
              <Link href="/shop?category=bags" className="block text-gray-300 hover:text-red-500 transition-colors">Bags</Link>
              <Link href="/shop?category=accessories" className="block text-gray-300 hover:text-red-500 transition-colors">Accessories</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Menswear by Coco. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
