export const store = {
  name: 'AURELIAN',
  tagline: 'Timeless Elegance, Modern Craft',
  description: 'Discover handcrafted luxury jewelry from the world\'s finest artisans.',
  currency: 'USD',
  contact: {
    email: 'hello@aurelian.com',
    phone: '+1 (555) 123-4567',
    address: '123 Fifth Avenue, New York, NY 10010',
  },
  social: { instagram: '#', pinterest: '#', facebook: '#' },
  ecommerce: {
    provider: 'snipcart' as const,
    apiKey: 'YOUR_API_KEY_HERE',
    enabled: false,
  },
};
