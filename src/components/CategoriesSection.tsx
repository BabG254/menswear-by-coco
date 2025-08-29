import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
    link: '/shop?category=shirts',
    description: 'Tailored perfection'
  },
  {
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop',
    link: '/shop?category=shoes',
    description: 'Crafted elegance'
  },
  {
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop',
    link: '/shop?category=bags',
    description: 'Functional luxury'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=600&fit=crop',
    link: '/shop?category=accessories',
    description: 'Refined details'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header - MR PORTER inspired minimal typography */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide">
            SHOP BY CATEGORY
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collections, each piece selected for its exceptional quality and timeless design.
          </p>
        </div>

        {/* Categories Grid - ASOS inspired layout with luxury touches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.link}
              className="group relative overflow-hidden bg-white hover:bg-gray-50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-96 mb-6 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                
                {/* Category number - luxury detail */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-black px-2 py-1 text-xs font-medium">
                    0{index + 1}
                  </span>
                </div>
              </div>
              
              {/* Category Info */}
              <div className="px-2">
                <h3 className="text-xl font-medium text-black mb-2 group-hover:text-red-500 transition-colors tracking-wide">
                  {category.name.toUpperCase()}
                </h3>
                <p className="text-gray-500 text-sm mb-4 font-light">
                  {category.description}
                </p>
                
                {/* CTA - MR PORTER style */}
                <div className="flex items-center text-black group-hover:text-red-500 transition-colors">
                  <span className="text-sm font-medium tracking-wide">EXPLORE</span>
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA - premium touch */}
        <div className="text-center mt-16">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 hover:bg-red-500 transition-all duration-300 text-sm font-medium tracking-wide"
          >
            <span>VIEW ALL PRODUCTS</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
