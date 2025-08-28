import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl tracking-tight text-red-600">Menswear by Coco</span>
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-red-600 transition">Home</Link>
        <Link href="/shop" className="hover:text-red-600 transition">Shop</Link>
        <Link href="/about" className="hover:text-red-600 transition">About</Link>
        <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        <Link href="/cart" className="ml-4 relative">
          <FaShoppingCart size={22} />
          {/* Cart count badge can be added here */}
        </Link>
      </div>
    </nav>
  );
}
