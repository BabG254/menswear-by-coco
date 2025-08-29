import Link from 'next/link';

export default function TestHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* Test Hero Section */}
      <section className="relative h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block bg-black border border-red-500 px-6 py-3">
              <span className="text-red-500 font-bold text-lg tracking-wide">MENSWEAR BY COCO</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Test Hero Section
          </h1>
          
          <p className="text-xl mb-8 text-gray-200">
            This should display properly with black background and white text
          </p>
          
          <Link
            href="/shop"
            className="bg-red-500 text-white px-8 py-4 text-lg font-medium hover:bg-red-600 transition-all duration-300 inline-block"
          >
            EXPLORE COLLECTION
          </Link>
        </div>
      </section>

      {/* Test Product Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-black mb-8 text-center">
            FEATURED PRODUCTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map((item) => (
              <div key={item} className="bg-white p-4">
                <div className="h-64 bg-gray-200 mb-4 flex items-center justify-center">
                  <span>Product Image {item}</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Test Product {item}
                </h3>
                <p className="text-red-500 font-medium">$99</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
