import Link from 'next/link';
import products from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const newArrivals = products.filter(p => p.newArrival);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Menswear by <span className="text-red-600">Coco</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Discover premium men&apos;s fashion with modern style and exceptional quality
          </p>
          <Link href="/shop" className="btn-brand inline-block text-lg px-8 py-3">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Shirts', 'Shoes', 'Bags', 'Accessories'].map((category) => (
              <Link 
                key={category}
                href={`/shop?category=${category}`}
                className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center group"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-red-700 transition">
                  <span className="text-white text-2xl font-bold">{category[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-black">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-brand inline-block px-6 py-3">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Style?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Follow us on social media and get the latest updates on new collections
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://instagram.com/yourstore" 
              target="_blank" 
              rel="noopener"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded transition"
            >
              Follow on Instagram
            </a>
            <a 
              href="https://wa.me/yourwhatsapp" 
              target="_blank" 
              rel="noopener"
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded transition"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
