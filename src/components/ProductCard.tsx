import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white hover:bg-gray-50 transition-all duration-500 overflow-hidden">
      <Link href={`/product/${product.id}`}>
        {/* Image container - MR PORTER inspired clean presentation */}
        <div className="relative w-full h-80 mb-4 overflow-hidden">
          <Image 
            src={product.image[0]} 
            alt={product.name} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          
          {/* Badges - ASOS inspired positioning */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.newArrival && (
              <div className="bg-red-500 text-white px-2 py-1 text-xs font-medium tracking-wide">
                NEW
              </div>
            )}
            {product.featured && (
              <div className="bg-black text-white px-2 py-1 text-xs font-medium tracking-wide">
                FEATURED
              </div>
            )}
          </div>

          {/* Quick shop overlay - luxury e-commerce inspired */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button className="bg-white text-black px-6 py-2 text-sm font-medium tracking-wide hover:bg-red-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0">
              QUICK VIEW
            </button>
          </div>
        </div>
      </Link>
      
      {/* Product Info - MR PORTER minimalist approach */}
      <div className="px-1">
        <div className="mb-2">
          <span className="text-gray-500 text-xs font-medium tracking-wider uppercase">
            {product.category}
          </span>
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-2 group-hover:text-red-500 transition-colors text-sm leading-tight">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <span className="text-black font-medium text-lg">
            KSH {product.price.toLocaleString()}
          </span>
          
          {/* Size indicator if available */}
          {product.sizes && product.sizes.length > 0 && (
            <span className="text-gray-400 text-xs">
              {product.sizes.length} sizes
            </span>
          )}
        </div>

        {/* Color options indicator - premium touch */}
        <div className="mt-3 flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-black border border-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400 border border-gray-200"></div>
          <div className="w-3 h-3 rounded-full bg-red-500 border border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
