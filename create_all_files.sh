#!/bin/bash
cd /shared/workspace/projects/templates/jeweler-store-astro

# Copy types
cat > src/types/product.ts << 'EOF'
export type Category = 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'watches';

export type Material = 'gold' | 'silver' | 'platinum' | 'diamond' | 'gemstone';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  materials: Material[];
  image: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface FilterState {
  category: Category | 'all';
  priceRange: [number, number];
  materials: Material[];
  inStockOnly: boolean;
}
EOF

# Copy theme script
cat > src/scripts/theme.ts << 'EOF'
// Theme management with localStorage persistence
export type Theme = 'light' | 'dark';

export function getTheme(): Theme {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  }
  
  // Check system preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  
  return 'light';
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
}

export function toggleTheme(): Theme {
  const current = getTheme();
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
  return next;
}

// Initialize theme on page load
export function initTheme(): void {
  const theme = getTheme();
  setTheme(theme);
}
EOF

echo "Created types and scripts"
