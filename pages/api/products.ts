// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MOCK_PRODUCTS, CATEGORIES } from '../../constants';

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

interface Category {
  slug: string;
  name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type, category } = req.query;

  if (type === 'categories') {
    // Serve mock categories
    return res.status(200).json(CATEGORIES || []);
  }

  if (type === 'products') {
    // Serve mock products, optionally filter by category
    let products: Product[] = MOCK_PRODUCTS;
    if (category) {
      products = products.filter(
        (prod) =>
          prod.category &&
          prod.category.toLowerCase() === String(category).toLowerCase()
      );
    }
    return res.status(200).json(products || []);
  }

  res.status(400).json({ error: 'Invalid request type. Use "categories" or "products".' });
}