import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  // Each Markdown file in src/content/products/ is one product; its filename is the URL slug.
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    category: z.string(),
    description: z.string(),
    materials: z.array(z.string()),
    dimensions: z.string(),
    image: z.string(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

export const collections = { products };
