// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';

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

const RAPIDAPI_KEY = '7456c2cc63msh9a0be547a1b1fe6p156f15jsn69673154de02';
const ASOS_HOST = 'asos-api6.p.rapidapi.com';

async function fetchFromASOS(endpoint: string): Promise<any> {
  try {
    const response = await fetch(`https://${ASOS_HOST}/${endpoint}`, {
      headers: {
        'x-rapidapi-host': ASOS_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY,
      },
    });
    if (!response.ok) throw new Error('ASOS API failed');
    return response.json();
  } catch (error) {
    console.error('ASOS API error:', error);
    return null;
  }
}

async function fetchFromFakeAPI(endpoint: string): Promise<any> {
  try {
    const response = await fetch(`https://fakeapi.net/api/ecommerce/${endpoint}`);
    if (!response.ok) throw new Error('FakeAPI failed');
    return response.json();
  } catch (error) {
    console.error('FakeAPI error:', error);
    return null;
  }
}

async function fetchFromDummyJSON(endpoint: string): Promise<any> {
  try {
    const response = await fetch(`https://dummyjson.com/${endpoint}`);
    if (!response.ok) throw new Error('DummyJSON failed');
    return response.json();
  } catch (error) {
    console.error('DummyJSON error:', error);
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type, category } = req.query;

  if (type === 'categories') {
    // Try ASOS first, then fall back to DummyJSON (FakeAPI lacks category list)
    let categories: Category[] = [];
    let data = await fetchFromASOS('categories/men?page=1&perPage=22');
    if (data && data.data) categories = data.data.map((cat: any) => ({ slug: cat.id, name: cat.name }));
    if (!categories.length) {
      data = await fetchFromDummyJSON('products/categories');
      if (data) categories = data.map((cat: string) => ({ slug: cat, name: cat }));
    }
    return res.status(200).json(categories || []);
  }

  if (type === 'products') {
    // Try ASOS first, then FakeAPI, then DummyJSON
    let products: Product[] = [];
    let data = await fetchFromASOS(`products/men?page=1&perPage=22`);
    if (data && data.data) products = data.data.map((prod: any) => ({
      id: prod.id,
      name: prod.name,
      price: prod.price.current.value,
      image: prod.imageUrl,
      category: prod.category,
    }));
    if (!products.length) {
      data = await fetchFromFakeAPI('products');
      if (data && data.products) products = data.products.map((prod: any) => ({
        id: prod.id,
        name: prod.title,
        price: prod.price,
        image: prod.image,
        category: prod.category,
      }));
    }
    if (!products.length && category) {
      data = await fetchFromDummyJSON(`products/category/${category}`);
      if (data && data.products) products = data.products.map((prod: any) => ({
        id: prod.id,
        name: prod.title,
        price: prod.price,
        image: prod.thumbnail,
        category: prod.category,
      }));
    }
    return res.status(200).json(products || []);
  }

  res.status(400).json({ error: 'Invalid request type. Use "categories" or "products".' });
}