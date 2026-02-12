export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number;
  category: Category;
  metal: Metal;
  gemstone?: string;
  description: string;
  shortDescription: string;
  images: string[];
  featured: boolean;
  new: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export type Category = 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches';
export type Metal = 'gold' | 'silver' | 'platinum' | 'rose-gold';
export type SortOption = 'price-asc' | 'price-desc' | 'name' | 'newest' | 'rating';

export const categories: { value: Category; label: string; icon: string }[] = [
  { value: 'rings', label: 'Rings', icon: '💍' },
  { value: 'necklaces', label: 'Necklaces', icon: '📿' },
  { value: 'earrings', label: 'Earrings', icon: '✨' },
  { value: 'bracelets', label: 'Bracelets', icon: '⭕' },
  { value: 'watches', label: 'Watches', icon: '⌚' },
];

export const metals: { value: Metal; label: string }[] = [
  { value: 'gold', label: '18K Gold' },
  { value: 'silver', label: 'Sterling Silver' },
  { value: 'platinum', label: 'Platinum' },
  { value: 'rose-gold', label: 'Rose Gold' },
];

const img = 'https://placehold.co/600x600/1a1a2e/c4a265?text=Jewel';

export const products: Product[] = [
  { id: '1', name: 'Eternal Solitaire Ring', slug: 'eternal-solitaire-ring', price: 4250, comparePrice: 5000, category: 'rings', metal: 'platinum', gemstone: 'Diamond', description: 'A timeless solitaire ring featuring a brilliant-cut 1.5 carat diamond set in platinum.', shortDescription: '1.5ct diamond solitaire in platinum', images: [img], featured: true, new: false, inStock: true, rating: 4.9, reviewCount: 127 },
  { id: '2', name: 'Sapphire Cascade Necklace', slug: 'sapphire-cascade-necklace', price: 3800, category: 'necklaces', metal: 'gold', gemstone: 'Sapphire', description: 'An exquisite cascade necklace featuring graduated Ceylon sapphires set in 18K gold.', shortDescription: 'Ceylon sapphires in 18K gold', images: [img], featured: true, new: true, inStock: true, rating: 4.8, reviewCount: 89 },
  { id: '3', name: 'Pearl Drop Earrings', slug: 'pearl-drop-earrings', price: 1200, category: 'earrings', metal: 'gold', gemstone: 'Pearl', description: 'Elegant South Sea pearl drop earrings with delicate gold filigree.', shortDescription: 'South Sea pearls with gold filigree', images: [img], featured: true, new: false, inStock: true, rating: 4.7, reviewCount: 64 },
  { id: '4', name: 'Rose Gold Tennis Bracelet', slug: 'rose-gold-tennis-bracelet', price: 5600, category: 'bracelets', metal: 'rose-gold', gemstone: 'Diamond', description: 'A stunning tennis bracelet featuring 5 carats of round brilliant diamonds in rose gold.', shortDescription: '5ct diamonds in rose gold', images: [img], featured: true, new: false, inStock: true, rating: 4.9, reviewCount: 201 },
  { id: '5', name: 'Moonlight Chronograph', slug: 'moonlight-chronograph', price: 8900, comparePrice: 9500, category: 'watches', metal: 'platinum', description: 'A masterpiece of horology featuring a moonphase complication and platinum case.', shortDescription: 'Platinum moonphase chronograph', images: [img], featured: true, new: true, inStock: true, rating: 5.0, reviewCount: 43 },
  { id: '6', name: 'Emerald Halo Ring', slug: 'emerald-halo-ring', price: 3200, category: 'rings', metal: 'gold', gemstone: 'Emerald', description: 'A captivating Colombian emerald surrounded by a halo of brilliant diamonds in 18K gold.', shortDescription: 'Colombian emerald with diamond halo', images: [img], featured: false, new: true, inStock: true, rating: 4.6, reviewCount: 38 },
  { id: '7', name: 'Silver Cuff Bracelet', slug: 'silver-cuff-bracelet', price: 680, category: 'bracelets', metal: 'silver', description: 'A bold sterling silver cuff bracelet with a hammered finish.', shortDescription: 'Hammered sterling silver cuff', images: [img], featured: false, new: false, inStock: true, rating: 4.5, reviewCount: 156 },
  { id: '8', name: 'Diamond Stud Earrings', slug: 'diamond-stud-earrings', price: 2400, category: 'earrings', metal: 'platinum', gemstone: 'Diamond', description: 'Classic diamond stud earrings featuring matched 1ct total weight round brilliants.', shortDescription: '1ct total diamond studs in platinum', images: [img], featured: false, new: false, inStock: true, rating: 4.8, reviewCount: 312 },
  { id: '9', name: 'Gold Chain Necklace', slug: 'gold-chain-necklace', price: 1850, category: 'necklaces', metal: 'gold', description: 'A luxurious 18K gold chain necklace with Italian-crafted box chain design.', shortDescription: '18K Italian gold box chain', images: [img], featured: false, new: false, inStock: true, rating: 4.7, reviewCount: 95 },
  { id: '10', name: 'Rose Gold Pendant', slug: 'rose-gold-pendant', price: 950, category: 'necklaces', metal: 'rose-gold', gemstone: 'Morganite', description: 'A delicate rose gold pendant featuring a cushion-cut morganite stone.', shortDescription: 'Morganite pendant in rose gold', images: [img], featured: false, new: true, inStock: true, rating: 4.6, reviewCount: 72 },
  { id: '11', name: 'Platinum Wedding Band', slug: 'platinum-wedding-band', price: 1600, category: 'rings', metal: 'platinum', description: 'A classic platinum wedding band with comfort-fit interior and polished finish.', shortDescription: 'Classic comfort-fit platinum band', images: [img], featured: false, new: false, inStock: true, rating: 4.9, reviewCount: 428 },
  { id: '12', name: 'Art Deco Watch', slug: 'art-deco-watch', price: 6200, category: 'watches', metal: 'gold', description: 'An Art Deco-inspired timepiece with geometric dial design and 18K gold case.', shortDescription: 'Art Deco 18K gold mechanical watch', images: [img], featured: false, new: false, inStock: true, rating: 4.8, reviewCount: 67 },
];

export function filterProducts(opts: { category?: Category; metal?: Metal; minPrice?: number; maxPrice?: number; search?: string; sort?: SortOption; featured?: boolean; }): Product[] {
  let filtered = [...products];
  if (opts.category) filtered = filtered.filter(p => p.category === opts.category);
  if (opts.metal) filtered = filtered.filter(p => p.metal === opts.metal);
  if (opts.minPrice) filtered = filtered.filter(p => p.price >= opts.minPrice!);
  if (opts.maxPrice) filtered = filtered.filter(p => p.price <= opts.maxPrice!);
  if (opts.featured) filtered = filtered.filter(p => p.featured);
  if (opts.search) {
    const q = opts.search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  switch (opts.sort) {
    case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
    case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'newest': filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0)); break;
    case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
  }
  return filtered;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
}
