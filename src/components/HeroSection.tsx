import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with multiple layers for luxury effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=faces"
          alt="Menswear by Coco - Premium Men's Fashion"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Sophisticated gradient overlay inspired by MR PORTER */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - MR PORTER inspired luxury layout */}
      <div className="relative z-10 text-left text-white px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Logo-inspired branding */}
          <div className="mb-8">
            <div className="inline-block bg-black px-6 py-3 rounded border border-red-500">
              <span className="text-red-500 font-bold text-lg tracking-wide">MENSWEAR BY COCO</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            Redefining
            <br />
            <span className="font-bold text-red-500">Men&apos;s Style</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
            Curated collections for the discerning gentleman.
            <br />
            Where craftsmanship meets contemporary design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/shop"
              className="group bg-red-500 text-white px-8 py-4 text-lg font-medium hover:bg-red-600 transition-all duration-500 flex items-center justify-center space-x-2 border border-red-500"
            >
              <span>EXPLORE COLLECTION</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="group border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center"
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </div>

      {/* ASOS-inspired scroll indicator with brand colors */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 rotate-90 origin-center transform">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
