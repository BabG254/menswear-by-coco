export type Product = {
  id: string;
  name: string;
  category: 'Shirts' | 'Shoes' | 'Bags' | 'Accessories';
  price: number;
  image: string[];
  description: string;
  sizes?: string[];
  featured?: boolean;
  newArrival?: boolean;
  relatedIds?: string[];
};

const products: Product[] = [
  {
    id: 'shirt-1',
    name: 'Classic White Shirt',
    category: 'Shirts',
    price: 59,
    image: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop'
    ],
    description: 'A timeless classic white shirt perfect for any occasion. Made from premium cotton blend with a modern fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    newArrival: true,
    relatedIds: ['shirt-2', 'shoe-1'],
  },
  {
    id: 'shirt-2',
    name: 'Black Dress Shirt',
    category: 'Shirts',
    price: 65,
    image: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
    ],
    description: 'Sophisticated black dress shirt ideal for formal occasions and evening events.',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: false,
    newArrival: true,
    relatedIds: ['shirt-1', 'accessory-1'],
  },
  {
    id: 'shoe-1',
    name: 'Black Leather Shoes',
    category: 'Shoes',
    price: 120,
    image: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1608256246200-53e8b47b98df?w=500&h=500&fit=crop'
    ],
    description: 'Elegant black leather shoes crafted for comfort and style. Perfect for both formal and casual occasions.',
    sizes: ['40', '41', '42', '43', '44'],
    featured: true,
    newArrival: false,
    relatedIds: ['shirt-1', 'bag-1'],
  },
  {
    id: 'shoe-2',
    name: 'Brown Oxford Shoes',
    category: 'Shoes',
    price: 135,
    image: [
      'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=500&h=500&fit=crop',
    ],
    description: 'Classic brown Oxford shoes with premium leather construction and traditional styling.',
    sizes: ['40', '41', '42', '43', '44'],
    featured: false,
    newArrival: false,
    relatedIds: ['shoe-1', 'shirt-2'],
  },
  {
    id: 'bag-1',
    name: 'Minimalist Black Bag',
    category: 'Bags',
    price: 85,
    image: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
    ],
    description: 'A sleek minimalist black bag designed for the modern professional. Spacious yet stylish.',
    featured: true,
    newArrival: true,
    relatedIds: ['shoe-1', 'accessory-1'],
  },
  {
    id: 'bag-2',
    name: 'Canvas Messenger Bag',
    category: 'Bags',
    price: 75,
    image: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop'
    ],
    description: 'Durable canvas messenger bag perfect for everyday use. Combines functionality with casual style.',
    featured: false,
    newArrival: false,
    relatedIds: ['bag-1'],
  },
  {
    id: 'accessory-1',
    name: 'Red Accent Watch',
    category: 'Accessories',
    price: 45,
    image: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop'
    ],
    description: 'Modern watch featuring subtle red accents that perfectly complement our brand aesthetic.',
    featured: false,
    newArrival: true,
    relatedIds: ['shirt-1', 'accessory-2'],
  },
  {
    id: 'accessory-2',
    name: 'Black Leather Belt',
    category: 'Accessories',
    price: 35,
    image: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&h=500&fit=crop'
    ],
    description: 'Classic black leather belt with polished silver buckle. Essential for any wardrobe.',
    sizes: ['32', '34', '36', '38', '40'],
    featured: true,
    newArrival: false,
    relatedIds: ['shoe-1', 'shirt-1'],
  },
];

export default products;
