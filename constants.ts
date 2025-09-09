
import type { Product } from './types';

// IMPORTANT: Replace with the actual business WhatsApp number (including country code, without '+' or spaces)
export const WHATSAPP_NUMBER = '911234567890'; // Example: 91 for India

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Galaxy Sparklers',
    description: '10-inch sparklers that burn with a bright golden light.',
    price: 150,
    imageUrl: 'https://picsum.photos/seed/sparklers/400/300'
  },
  {
    id: 2,
    name: 'Ground Spinners',
    description: 'A pack of 10 colorful spinning wheels for the ground.',
    price: 250,
    imageUrl: 'https://picsum.photos/seed/spinners/400/300'
  },
  {
    id: 3,
    name: 'Sky Rockets',
    description: 'Assorted rockets that whistle and burst into colors.',
    price: 500,
    imageUrl: 'https://picsum.photos/seed/rockets/400/300'
  },
  {
    id: 4,
    name: 'Flower Pots',
    description: 'A set of 5 pots producing a shower of golden sparks.',
    price: 350,
    imageUrl: 'https://picsum.photos/seed/flowerpots/400/300'
  },
  {
    id: 5,
    name: '100 Wala Ladi',
    description: 'A long chain of 100 crackers for continuous fun.',
    price: 120,
    imageUrl: 'https://picsum.photos/seed/ladi/400/300'
  },
  {
    id: 6,
    name: 'Color Bombs',
    description: 'Pack of 10 bombs producing vibrant smoke.',
    price: 300,
    imageUrl: 'https://picsum.photos/seed/bombs/400/300'
  },
  {
    id: 7,
    name: 'Mega Fountain',
    description: 'A large conical fountain with multi-color effects.',
    price: 700,
    imageUrl: 'https://picsum.photos/seed/fountain/400/300'
  },
  {
    id: 8,
    name: 'Celebration Kit',
    description: 'A complete assortment for a small family celebration.',
    price: 1500,
    imageUrl: 'https://picsum.photos/seed/kit/400/300'
  }
];
