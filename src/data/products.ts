export interface Product {
  slug: string;
  name: string;
  price: string;
  category: string;
  description: string;
  materials: string[];
  dimensions: string;
  svgContent: string;
}

// Luxury SVG jewelry illustrations
const diamondRingSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="45" stroke="#C6A87D" stroke-width="6" fill="none"/>
  <circle cx="100" cy="100" r="35" stroke="#C6A87D" stroke-width="2" fill="none"/>
  <path d="M100 60 L120 85 L100 110 L80 85 Z" fill="none" stroke="#0A0A0A" stroke-width="2"/>
  <path d="M100 85 L105 90 L100 95 L95 90 Z" fill="#C6A87D"/>
  <line x1="100" y1="60" x2="100" y2="85" stroke="#0A0A0A" stroke-width="1"/>
  <line x1="120" y1="85" x2="100" y2="85" stroke="#0A0A0A" stroke-width="1"/>
  <line x1="100" y1="110" x2="100" y2="85" stroke="#0A0A0A" stroke-width="1"/>
  <line x1="80" y1="85" x2="100" y2="85" stroke="#0A0A0A" stroke-width="1"/>
</svg>
`;

const pearlNecklaceSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 40 80 Q 100 120 160 80" stroke="#C6A87D" stroke-width="3" fill="none"/>
  <circle cx="60" cy="88" r="8" fill="#FAF7F2" stroke="#C6A87D" stroke-width="1.5"/>
  <circle cx="80" cy="98" r="9" fill="#FAF7F2" stroke="#C6A87D" stroke-width="1.5"/>
  <circle cx="100" cy="102" r="10" fill="#FAF7F2" stroke="#C6A87D" stroke-width="1.5"/>
  <circle cx="120" cy="98" r="9" fill="#FAF7F2" stroke="#C6A87D" stroke-width="1.5"/>
  <circle cx="140" cy="88" r="8" fill="#FAF7F2" stroke="#C6A87D" stroke-width="1.5"/>
  <circle cx="60" cy="88" r="3" fill="#C6A87D" opacity="0.3"/>
  <circle cx="80" cy="98" r="3" fill="#C6A87D" opacity="0.3"/>
  <circle cx="100" cy="102" r="3" fill="#C6A87D" opacity="0.3"/>
  <circle cx="120" cy="98" r="3" fill="#C6A87D" opacity="0.3"/>
  <circle cx="140" cy="88" r="3" fill="#C6A87D" opacity="0.3"/>
</svg>
`;

const goldBraceletSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="60" ry="40" stroke="#C6A87D" stroke-width="8"/>
  <ellipse cx="100" cy="100" rx="50" ry="30" stroke="#C6A87D" stroke-width="4" opacity="0.5"/>
  <path d="M 40 100 L 55 95 L 70 100 L 85 95 L 100 100 L 115 95 L 130 100 L 145 95 L 160 100" 
        stroke="#0A0A0A" stroke-width="1" opacity="0.2"/>
  <circle cx="100" cy="60" r="4" fill="#C6A87D"/>
  <circle cx="100" cy="140" r="4" fill="#C6A87D"/>
</svg>
`;

const emeraldEarringSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(80, 60)">
    <circle cx="20" cy="10" r="6" fill="#C6A87D"/>
    <line x1="20" y1="16" x2="20" y2="30" stroke="#C6A87D" stroke-width="2"/>
    <rect x="10" y="30" width="20" height="28" rx="2" fill="none" stroke="#0A0A0A" stroke-width="2"/>
    <line x1="15" y1="35" x2="25" y2="53" stroke="#0A0A0A" stroke-width="1" opacity="0.3"/>
    <line x1="25" y1="35" x2="15" y2="53" stroke="#0A0A0A" stroke-width="1" opacity="0.3"/>
    <line x1="20" y1="30" x2="20" y2="58" stroke="#0A0A0A" stroke-width="1" opacity="0.3"/>
  </g>
  <g transform="translate(80, 60)">
    <circle cx="20" cy="10" r="6" fill="#C6A87D"/>
    <line x1="20" y1="16" x2="20" y2="30" stroke="#C6A87D" stroke-width="2"/>
    <rect x="10" y="30" width="20" height="28" rx="2" fill="none" stroke="#0A0A0A" stroke-width="2"/>
  </g>
</svg>
`;

const sapphirePendantSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 70 60 Q 100 50 130 60" stroke="#C6A87D" stroke-width="3" fill="none"/>
  <circle cx="85" cy="62" r="3" fill="#C6A87D"/>
  <circle cx="115" cy="62" r="3" fill="#C6A87D"/>
  <line x1="100" y1="50" x2="100" y2="80" stroke="#C6A87D" stroke-width="2"/>
  <path d="M 100 80 L 115 95 L 100 130 L 85 95 Z" fill="none" stroke="#0A0A0A" stroke-width="2"/>
  <path d="M 100 95 L 107 105 L 100 115 L 93 105 Z" fill="#C6A87D" opacity="0.3"/>
  <line x1="100" y1="80" x2="100" y2="130" stroke="#0A0A0A" stroke-width="1"/>
  <line x1="85" y1="95" x2="115" y2="95" stroke="#0A0A0A" stroke-width="1"/>
</svg>
`;

const roseGoldRingSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="50" stroke="#C6A87D" stroke-width="8" fill="none" opacity="0.6"/>
  <circle cx="100" cy="100" r="40" stroke="#C6A87D" stroke-width="4" fill="none"/>
  <g transform="translate(100, 70)">
    <circle r="8" fill="none" stroke="#0A0A0A" stroke-width="1.5"/>
    <circle r="4" fill="#C6A87D"/>
    <line x1="-6" y1="-6" x2="6" y2="6" stroke="#0A0A0A" stroke-width="0.5" opacity="0.3"/>
    <line x1="6" y1="-6" x2="-6" y2="6" stroke="#0A0A0A" stroke-width="0.5" opacity="0.3"/>
  </g>
</svg>
`;

const tennisNecklaceSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 50 90 Q 100 110 150 90" stroke="#C6A87D" stroke-width="4" fill="none"/>
  <circle cx="65" cy="95" r="5" fill="none" stroke="#0A0A0A" stroke-width="1"/>
  <circle cx="80" cy="100" r="5" fill="none" stroke="#0A0A0A" stroke-width="1"/>
  <circle cx="95" cy="102" r="5" fill="none" stroke="#0A0A0A" stroke-width="1"/>
  <circle cx="105" cy="102" r="5" fill="none" stroke="#0A0A0A" stroke-width="1"/>
  <circle cx="120" cy="100" r="5" fill="none" stroke="#0A0A0A" stroke-width="1"/>
  <circle cx="135" cy="95" r="5" fill="none" stroke="#0A0A0A" stroke-width="1"/>
  <circle cx="65" cy="95" r="2" fill="#C6A87D"/>
  <circle cx="80" cy="100" r="2" fill="#C6A87D"/>
  <circle cx="95" cy="102" r="2" fill="#C6A87D"/>
  <circle cx="105" cy="102" r="2" fill="#C6A87D"/>
  <circle cx="120" cy="100" r="2" fill="#C6A87D"/>
  <circle cx="135" cy="95" r="2" fill="#C6A87D"/>
</svg>
`;

const marquiseRingSVG = `
<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="48" stroke="#C6A87D" stroke-width="7" fill="none"/>
  <ellipse cx="100" cy="75" rx="12" ry="20" fill="none" stroke="#0A0A0A" stroke-width="2"/>
  <ellipse cx="100" cy="75" rx="6" ry="10" fill="#C6A87D" opacity="0.4"/>
  <line x1="100" y1="55" x2="100" y2="75" stroke="#0A0A0A" stroke-width="1" opacity="0.4"/>
  <line x1="88" y1="65" x2="112" y2="65" stroke="#0A0A0A" stroke-width="1" opacity="0.4"/>
  <line x1="88" y1="85" x2="112" y2="85" stroke="#0A0A0A" stroke-width="1" opacity="0.4"/>
</svg>
`;

export const products: Product[] = [
  {
    slug: 'eternal-solitaire',
    name: 'Eternal Solitaire',
    price: '$12,500',
    category: 'Engagement Rings',
    description: 'A timeless symbol of eternal love, this solitaire features a brilliant-cut diamond set in 18K white gold. The elegant four-prong setting allows maximum light to showcase the diamond\'s exceptional brilliance.',
    materials: ['18K White Gold', '1.5ct Diamond', 'Conflict-Free'],
    dimensions: 'Ring Size 6 (resizable)',
    svgContent: diamondRingSVG,
  },
  {
    slug: 'akoya-pearls',
    name: 'Akoya Pearl Strand',
    price: '$8,900',
    category: 'Necklaces',
    description: 'Hand-selected Akoya pearls of exceptional luster, each perfectly matched for size and color. The 18-inch strand features a lustrous rose overtone and a hand-engraved 14K gold clasp.',
    materials: ['Akoya Pearls', '14K Yellow Gold Clasp', 'Silk Thread'],
    dimensions: '18 inches, 7-7.5mm pearls',
    svgContent: pearlNecklaceSVG,
  },
  {
    slug: 'heritage-bangle',
    name: 'Heritage Bangle',
    price: '$6,750',
    category: 'Bracelets',
    description: 'An elegant wide bangle crafted from solid 18K yellow gold. The hand-engraved pattern draws inspiration from Art Deco geometry, making each piece truly unique.',
    materials: ['18K Yellow Gold', 'Hand-Engraved'],
    dimensions: '7 inches inner circumference',
    svgContent: goldBraceletSVG,
  },
  {
    slug: 'emerald-drops',
    name: 'Emerald Drop Earrings',
    price: '$15,200',
    category: 'Earrings',
    description: 'Colombian emeralds of extraordinary color, suspended from diamond-studded 18K white gold settings. The elongated drop design frames the face beautifully.',
    materials: ['Colombian Emeralds 4ct total', '18K White Gold', 'Diamond Accents'],
    dimensions: '1.5 inches drop length',
    svgContent: emeraldEarringSVG,
  },
  {
    slug: 'sapphire-pendant',
    name: 'Royal Sapphire Pendant',
    price: '$10,400',
    category: 'Necklaces',
    description: 'A mesmerizing Ceylon sapphire in a classic pendant design. The deep blue stone is surrounded by a halo of brilliant diamonds, suspended from a delicate platinum chain.',
    materials: ['Ceylon Sapphire 3ct', 'Platinum', 'Diamond Halo 0.5ct'],
    dimensions: '18-inch chain, pendant 15mm',
    svgContent: sapphirePendantSVG,
  },
  {
    slug: 'rose-eternity',
    name: 'Rose Gold Eternity Band',
    price: '$4,300',
    category: 'Wedding Bands',
    description: 'A romantic eternity band in 14K rose gold, featuring a continuous circle of brilliant diamonds. Perfect as a wedding band or anniversary gift.',
    materials: ['14K Rose Gold', 'Diamonds 1ct total', 'Conflict-Free'],
    dimensions: 'Ring Size 6 (resizable)',
    svgContent: roseGoldRingSVG,
  },
  {
    slug: 'tennis-necklace',
    name: 'Diamond Tennis Necklace',
    price: '$22,800',
    category: 'Necklaces',
    description: 'Sixty brilliant-cut diamonds of exceptional quality, precision-set in platinum. This classic tennis necklace features a secure clasp with safety latch.',
    materials: ['Platinum', 'Diamonds 10ct total', 'VVS Clarity'],
    dimensions: '16 inches',
    svgContent: tennisNecklaceSVG,
  },
  {
    slug: 'marquise-statement',
    name: 'Marquise Statement Ring',
    price: '$18,900',
    category: 'Cocktail Rings',
    description: 'A show-stopping marquise-cut diamond set in an intricate 18K white gold mounting. The elongated silhouette creates a dramatic, elegant look.',
    materials: ['18K White Gold', 'Marquise Diamond 2.5ct', 'VS1 Clarity'],
    dimensions: 'Ring Size 6 (resizable)',
    svgContent: marquiseRingSVG,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
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
];
