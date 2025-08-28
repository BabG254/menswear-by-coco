export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">About Menswear by Coco</h1>
          <p className="text-xl text-gray-600">
            Crafting modern men&apos;s fashion with style and authenticity
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-6">Our Story</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Menswear by Coco was born from a passion for modern men&apos;s fashion that doesn&apos;t compromise on quality or style. 
                Founded with the belief that every man deserves to look and feel confident, we curate collections that blend 
                contemporary design with timeless elegance.
              </p>
              <p className="mb-4">
                Our carefully selected range includes premium shirts, sophisticated footwear, functional bags, and distinctive 
                accessories - all chosen to complement the modern gentleman&apos;s lifestyle. Each piece in our collection 
                represents our commitment to quality, style, and value.
              </p>
              <p>
                From casual weekend looks to professional attire, Menswear by Coco provides the essentials that form the 
                foundation of a well-dressed man&apos;s wardrobe. We believe that great style should be accessible, which is 
                why we focus on versatile pieces that work across multiple occasions and seasons.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest materials and work with trusted suppliers to ensure every piece meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Modern Style</h3>
              <p className="text-gray-600">
                Our designs reflect contemporary trends while maintaining classic appeal that transcends seasonal changes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Great Value</h3>
              <p className="text-gray-600">
                Premium quality shouldn&apos;t break the bank. We offer exceptional pieces at prices that make sense.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Have questions about our products or need styling advice? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://instagram.com/yourstore" 
                target="_blank" 
                rel="noopener"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded transition"
              >
                Follow us on Instagram
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
    </div>
  );
}
