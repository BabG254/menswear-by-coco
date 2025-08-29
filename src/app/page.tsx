import Link from 'next/link';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newArrivals = products.filter(p => p.newArrival).slice(0, 3);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Categories */}
      <CategoriesSection />

      {/* Featured Products - MR PORTER inspired clean layout */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-wide">
              FEATURED PRODUCTS
            </h2>
            <div className="w-24 h-px bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Handpicked selections from our premium collection, curated for the discerning gentleman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/shop" 
              className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 hover:bg-red-500 transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span>SHOP ALL PRODUCTS</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals - ASOS inspired dark section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
              NEW ARRIVALS
            </h2>
            <div className="w-24 h-px bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Latest additions to our premium menswear collection. Be the first to discover what&apos;s new.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newArrivals.map((product) => (
              <div key={product.id} className="bg-white text-black transition-all duration-500 hover:shadow-2xl">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/shop?filter=new" 
              className="inline-flex items-center space-x-2 border-2 border-red-500 text-red-500 px-8 py-3 hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span>VIEW ALL NEW ARRIVALS</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section - Luxury touch */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block bg-black border border-red-500 px-6 py-3 mb-8">
              <span className="text-red-500 font-bold text-sm tracking-wider">MENSWEAR BY COCO</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-black mb-8 leading-tight">
            Where tradition meets contemporary design
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Founded on the principle that exceptional menswear should be accessible to the modern gentleman, 
            we curate pieces that blend timeless craftsmanship with contemporary style.
          </p>
          
          <Link 
            href="/about"
            className="inline-flex items-center space-x-2 text-black hover:text-red-500 transition-colors text-sm font-medium tracking-wide"
          >
            <span>DISCOVER OUR STORY</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Call to Action - Premium social section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
            Join our community
          </h2>
          <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            Follow us for exclusive access to new collections, style inspiration, and behind-the-scenes content from the world of premium menswear.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="https://instagram.com/menswear_bycoco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-500 text-white px-8 py-3 hover:bg-red-600 transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="https://wa.me/254728271644" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span>MESSAGE ON WHATSAPP</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
              </svg>
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            <p>Questions? Contact us anytime at info@menswearbycocoph.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
