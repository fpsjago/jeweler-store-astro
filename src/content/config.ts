import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
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
