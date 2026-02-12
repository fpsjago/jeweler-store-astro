export interface Product {
  name: string;
  price: string;
  category: string;
  description: string;
  materials: string[];
  dimensions: string;
  image: string;
  featured?: boolean;
  order?: number;
}

export type Category = 
  | 'All'
  | 'Engagement Rings'
  | 'Wedding Bands'
  | 'Necklaces'
  | 'Earrings'
  | 'Bracelets'
  | 'Cocktail Rings'
  | 'Watches'
  | 'Services';

export const categories: Category[] = [
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
