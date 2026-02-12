export interface Product {
  slug: string;
  name: string;
  price: string;
  category: string;
  description: string;
  materials: string[];
  dimensions: string;
  imagePath: string;
}

export const products: Product[] = [
  {
    slug: 'eternal-solitaire',
    name: 'Eternal Solitaire',
    price: '$12,500',
    category: 'Engagement Rings',
    description: 'A timeless symbol of eternal love, this solitaire features a brilliant-cut diamond set in 18K white gold. The elegant four-prong setting allows maximum light to showcase the diamond\'s exceptional brilliance.',
    materials: ['18K White Gold', '1.5ct Diamond', 'Conflict-Free'],
    dimensions: 'Ring Size 6 (resizable)',
    imagePath: '../assets/diamond-ring-1.jpg',
  },
  {
    slug: 'akoya-pearls',
    name: 'Akoya Pearl Strand',
    price: '$8,900',
    category: 'Necklaces',
    description: 'Hand-selected Akoya pearls of exceptional luster, each perfectly matched for size and color. The 18-inch strand features a lustrous rose overtone and a hand-engraved 14K gold clasp.',
    materials: ['Akoya Pearls', '14K Yellow Gold Clasp', 'Silk Thread'],
    dimensions: '18 inches, 7-7.5mm pearls',
    imagePath: '../assets/pearl-earrings-1.jpg',
  },
  {
    slug: 'heritage-bangle',
    name: 'Heritage Bangle',
    price: '$6,750',
    category: 'Bracelets',
    description: 'An elegant wide bangle crafted from solid 18K yellow gold. The hand-engraved pattern draws inspiration from Art Deco geometry, making each piece truly unique.',
    materials: ['18K Yellow Gold', 'Hand-Engraved'],
    dimensions: '7 inches inner circumference',
    imagePath: '../assets/gold-bracelet-1.jpg',
  },
  {
    slug: 'emerald-drops',
    name: 'Emerald Drop Earrings',
    price: '$15,200',
    category: 'Earrings',
    description: 'Colombian emeralds of extraordinary color, suspended from diamond-studded 18K white gold settings. The elongated drop design frames the face beautifully.',
    materials: ['Colombian Emeralds 4ct total', '18K White Gold', 'Diamond Accents'],
    dimensions: '1.5 inches drop length',
    imagePath: '../assets/emerald-ring-1.jpg',
  },
  {
    slug: 'sapphire-pendant',
    name: 'Royal Sapphire Pendant',
    price: '$10,400',
    category: 'Necklaces',
    description: 'A mesmerizing Ceylon sapphire in a classic pendant design. The deep blue stone is surrounded by a halo of brilliant diamonds, suspended from a delicate platinum chain.',
    materials: ['Ceylon Sapphire 3ct', 'Platinum', 'Diamond Halo 0.5ct'],
    dimensions: '18-inch chain, pendant 15mm',
    imagePath: '../assets/sapphire-ring-1.jpg',
  },
  {
    slug: 'rose-eternity',
    name: 'Rose Gold Eternity Band',
    price: '$4,300',
    category: 'Wedding Bands',
    description: 'A romantic eternity band in 14K rose gold, featuring a continuous circle of brilliant diamonds. Perfect as a wedding band or anniversary gift.',
    materials: ['14K Rose Gold', 'Diamonds 1ct total', 'Conflict-Free'],
    dimensions: 'Ring Size 6 (resizable)',
    imagePath: '../assets/wedding-rings-1.jpg',
  },
  {
    slug: 'tennis-necklace',
    name: 'Diamond Tennis Necklace',
    price: '$22,800',
    category: 'Necklaces',
    description: 'Sixty brilliant-cut diamonds of exceptional quality, precision-set in platinum. This classic tennis necklace features a secure clasp with safety latch.',
    materials: ['Platinum', 'Diamonds 10ct total', 'VVS Clarity'],
    dimensions: '16 inches',
    imagePath: '../assets/gold-necklace-1.jpg',
  },
  {
    slug: 'marquise-statement',
    name: 'Marquise Statement Ring',
    price: '$18,900',
    category: 'Cocktail Rings',
    description: 'A show-stopping marquise-cut diamond set in an intricate 18K white gold mounting. The elongated silhouette creates a dramatic, elegant look.',
    materials: ['18K White Gold', 'Marquise Diamond 2.5ct', 'VS1 Clarity'],
    dimensions: 'Ring Size 6 (resizable)',
    imagePath: '../assets/diamond-ring-2.jpg',
  },
  {
    slug: 'gold-pendant',
    name: 'Artisan Gold Pendant',
    price: '$5,600',
    category: 'Necklaces',
    description: 'A handcrafted 18K gold pendant featuring intricate filigree work. This piece showcases traditional goldsmith techniques passed down through generations.',
    materials: ['18K Yellow Gold', 'Handcrafted'],
    dimensions: '20-inch chain, pendant 25mm',
    imagePath: '../assets/gold-pendant-1.jpg',
  },
  {
    slug: 'luxury-timepiece',
    name: 'Luxury Dress Watch',
    price: '$24,500',
    category: 'Watches',
    description: 'An exquisite Swiss-made timepiece featuring a mother-of-pearl dial with diamond hour markers. The 18K rose gold case and leather strap epitomize refined elegance.',
    materials: ['18K Rose Gold', 'Swiss Movement', 'Diamonds 0.3ct'],
    dimensions: '32mm case diameter',
    imagePath: '../assets/luxury-watch-1.jpg',
  },
  {
    slug: 'gold-chain',
    name: 'Classic Gold Necklace',
    price: '$7,200',
    category: 'Necklaces',
    description: 'A substantial 18K gold necklace featuring a classic cable link design. Perfect for layering or wearing alone as a statement piece.',
    materials: ['18K Yellow Gold', 'Hand-Finished'],
    dimensions: '20 inches, 4mm width',
    imagePath: '../assets/gold-necklace-2.jpg',
  },
  {
    slug: 'ruby-ring',
    name: 'Burmese Ruby Ring',
    price: '$19,800',
    category: 'Cocktail Rings',
    description: 'A magnificent Burmese ruby of exceptional "pigeon\'s blood" color, flanked by baguette diamonds in a platinum Art Deco-inspired setting.',
    materials: ['Platinum', 'Burmese Ruby 3.2ct', 'Baguette Diamonds 0.8ct'],
    dimensions: 'Ring Size 6 (resizable)',
    imagePath: '../assets/ruby-ring-1.jpg',
  },
  {
    slug: 'topaz-cocktail',
    name: 'Imperial Topaz Cocktail Ring',
    price: '$8,400',
    category: 'Cocktail Rings',
    description: 'A stunning imperial topaz in a bold cocktail ring setting. The warm golden-orange hue is enhanced by a halo of diamonds in 18K yellow gold.',
    materials: ['18K Yellow Gold', 'Imperial Topaz 5ct', 'Diamond Halo 0.6ct'],
    dimensions: 'Ring Size 6 (resizable)',
    imagePath: '../assets/topaz-ring-1.jpg',
  },
  {
    slug: 'diamond-bracelet',
    name: 'Diamond Line Bracelet',
    price: '$16,500',
    category: 'Bracelets',
    description: 'A sophisticated tennis bracelet featuring precisely matched brilliant-cut diamonds in a sleek platinum setting. The secure clasp ensures worry-free wear.',
    materials: ['Platinum', 'Diamonds 8ct total', 'VS Quality'],
    dimensions: '7 inches',
    imagePath: '../assets/diamond-bracelet-1.jpg',
  },
  {
    slug: 'jewelry-atelier',
    name: 'Bespoke Design Service',
    price: 'Custom Quote',
    category: 'Services',
    description: 'Work directly with our master jewelers to create a one-of-a-kind piece that tells your unique story. From initial sketch to final masterpiece.',
    materials: ['Custom Materials', 'Personalized Design', 'Master Craftsmanship'],
    dimensions: 'Custom specifications',
    imagePath: '../assets/jewelry-workshop-1.jpg',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}

export const categories = [
  'All',
  'Engagement Rings',
  'Wedding Bands',
  'Necklaces',
  'Earrings',
  'Bracelets',
  'Cocktail Rings',
  'Watches',
  'Services',
];
