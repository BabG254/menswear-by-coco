import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-56">
          <Image src={product.image[0]} alt={product.name} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="font-semibold text-lg text-black mb-2">{product.name}</h3>
        <span className="text-red-600 font-bold text-xl mb-2">${product.price}</span>
        <Link href={`/product/${product.id}`} className="mt-auto text-sm text-red-600 hover:underline">View Details</Link>
      </div>
    </div>
  );
}
