// constants/index.ts
import { Product } from '../interfaces';
export const API_URL = 'https://fakestoreapi.com/products';
 
export const UI_TEXT = {
  BRAND_NAME: 'e-spaxe',
  href:"/",
  WELCOME_MESSAGE: 'Browse the latest fashion for men, women & kids!',
  BUY_NOW: 'Buy Now',
  VIEW_DETAILS: 'View Details',
  ALL_CATEGORIES: 'All Categories',
  LOADING: 'Loading...',
  ERROR: 'Something went wrong. Please try again.',
  SEARCH: 'Search',
  WISHLIST: 'Wishlist',
  CART: 'Cart',
  ACCOUNT: 'Account',
  NEW_ARRIVALS: 'New Arrivals',
  OUR_PRODUCTS: 'Our Products',
  QUICK_ADD: 'Quick Add',
  QUICK_VIEW: 'Quick View',
  VIEW_ALL: 'View All',
  FILTERS: 'Filters',
  CATEGORY: 'Category',
  MATERIAL: 'Material',
  PRICE_RANGE: 'Price Range',
  NO_PRODUCTS: 'No products found matching your criteria.',
  ITEMS: 'items',
  SUBSCRIBE: 'Subscribe',
  FOOTER_COMPANY: 'e-spaxe',
  FOOTER_EMAIL: 'contact@e-spaxe.com',
  FOOTER_PHONE: '+(123) 456-7890',
  FOOTER_ADDRESS: '1093 Hood Avenue, CA',
  FOOTER_HOURS: 'All Day: 9:00AM - 22:00PM',
  FOOTER_COPYRIGHT: '© 2025 e-spaxe. All rights reserved.',
  ADD_TO_CART: 'Add to Cart',
  ADD_TO_WISHLIST: 'Add to Wishlist',
  REMOVE_FROM_WISHLIST: 'Remove from Wishlist',
  SHARE: 'Share',
   TOTAL: 'Total',
  SHIPPING: 'Shipping',
  SHIPPING_CALCULATED_AT_CHECKOUT: 'Shipping & taxes calculated at checkout',
  FREE_SHIPPING: 'Free Shipping',
  SPEND: 'Spend',
  FOR: 'for',
  CONTINUE_SHOPPING: 'Continue Shopping',
  VIEW_CART: 'View Cart',
  PROCEED_TO_CHECKOUT: 'Proceed to Checkout',
  FREE_SHIPPING_ELIGIBLE: 'Free shipping for any orders above $1,000.00',
  PRODUCT: 'Product',
  PRICE: 'Price',
  QTY: 'Qty',
  HOME: 'Home',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Collections',
    hasDropdown: true,
    dropdownContent: [
         {
        title: 'Jewelry',
        links: ['Necklaces', 'Earrings', 'Bracelets', 'Rings'],
      },
      {
        title: 'Women',
        links: ['Dresses', 'Tops', 'Pants', 'Skirts', 'Outerwear', 'Activewear'],
      },
      {
        title: 'Men',
        links: ['Shirts', 'T-Shirts', 'Jeans', 'Jackets', 'Suits', 'Activewear'],
      },
      {
        title: 'Kids',
        links: ['Girls Clothing', 'Boys Clothing', 'Babywear', 'Schoolwear'],
      },
      {
        title: 'Accessories',
        links: ['Bags', 'Shoes', 'Watches', 'Jewelry', 'Sunglasses', 'Hats'],
      },
    ],
  },
  {
    label: 'Products',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'By Category',
        links: [
          'New Arrivals',
          'Best Sellers',
          'Seasonal Collection',
          'Matching Sets',
          'Family Outfits',
          'Jewelry',
          'Essentials',
        ],
      },
      {
        title: 'By Occasion',
        links: [
          'Casual Wear',
          'Workwear',
          'Party Wear',
          'Holiday/Vacation',
          'Loungewear',
          'Formalwear',
        ],
      },
      {
        title: 'Product Features',
        links: [
          'Personal Styling',
          'Size Guide',
          'Fabric Info',
          'Pre-Order Items',
          'Online Exclusives',
        ],
      },
    ],
  },
  {
    label: 'Pages',
    hasDropdown: true,
    dropdownContent: [

      {
        title: 'Customer Pages',
        links: ['Account', 'Login', 'Register', 'Wishlist', 'Compare', 'Checkout'],
      },
      {
        title: 'Info Pages',
        links: ['About Us', 'Contact', 'FAQ', 'Size Guide', 'Shipping & Returns', 'Privacy Policy'],
      },
    ],
  },
];

export const HERO_CONTENT = {
  tagline: 'STYLE FOR EVERYONE',
  title: 'Men, Women & Kids Fashion',
  subtitle: 'New season arrivals for all ages',
  description:
    'Explore the latest trends and timeless staples across our men’s, women’s, and children’s collections. Style your whole family with confidence.',
  buttonText: 'Shop All',
};

export const PRODUCT_CATEGORIES = [
  // Gender-neutral
  'New Arrivals',
  'Best Sellers',
  'Seasonal Picks',
  'Essentials',

  // Women
  'Women\'s Dresses',
  'Women\'s Tops',
  'Women\'s Pants',
  'Women\'s Skirts',
  'Women\'s Outerwear',
  'Women\'s Activewear',

  // Men
  'Men\'s Shirts',
  'Men\'s T-Shirts',
  'Men\'s Jeans',
  'Men\'s Jackets',
  'Men\'s Suits',
  'Men\'s Activewear',

  // Kids
  'Girls Clothing',
  'Boys Clothing',
  'Babywear',
  'Schoolwear',
  'Mini Me Looks',
  'Playwear',

  // Shoes
  'Sneakers',
  'Boots',
  'Flats',
  'Sandals',
  'Heels',
  'Kids Footwear',

  // Accessories
  'Bags',
  'Hats',
  'Jewelry',
  'Watches',
  'Scarves',
  'Belts',
  'Sunglasses',
];
export const PRODUCT_STYLES = [
  'Casual',
  'Formal',
  'Workwear',
  'Sporty',
  'Lounge',
  'Trendy',
  'Minimalist',
  'Vintage',
  'Playful (for kids)',
];

export const PRODUCT_OCCASIONS = [
  'Everyday',
  'Weekend',
  'School',
  'Vacation',
  'Weddings',
  'Holiday Parties',
  'Gifting',
];
export const FILTER_CATEGORIES = [
  'Women\'s Dresses',
  'Women\'s Tops',
  'Men\'s Shirts',
  'Men\'s T-Shirts',
  'Girls Clothing',
  'Boys Clothing',
  'Jewelry',
  'Bags',
  'Shoes',
];
export const FILTER_MATERIALS = [
  'cotton',
  'polyester',
  'leather',
  'denim',
  'silk',
  'wool',
  'gold',
  'silver',
  'platinum',
];
export const FILTER_PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: Infinity },
];
export const CATEGORIES_META = [
  { id: 1, name: 'Necklaces', slug: 'jewelery' },
  { id: 2, name: 'Earrings', slug: 'earrings' },
  { id: 3, name: 'Bracelets', slug: 'bracelets' },
  { id: 4, name: 'Rings', slug: 'rings' },
];
export const CATEGORIES = [
  {
    id: 1,
    name: 'Necklaces',
    slug: 'jewelery',
    image: 'https://dummyjson.com/image-link-from-jewelry-product.jpg',
  },
  {
    id: 2,
    name: 'Earrings',
    slug: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 3,
    name: 'Bracelets',
    slug: 'bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 4,
    name: 'Rings',
    slug: 'rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop&crop=center',
  },
];

export const FOOTER_SECTIONS = [
  {
    title: 'My Account',
    links: [
      { label: 'Login/Register', href: '/account' },
      { label: 'Wishlist', href: '/wishlist' },
      { label: 'Track Your Orders', href: '/orders' },
      { label: 'Checkout', href: '/checkout' },
    ],
  },
  {
    title: 'Our Policies',
    links: [
      { label: 'Shipping & Delivery', href: '/shipping' },
      { label: 'Returns Policy', href: '/returns' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'FAQs', href: '/faq' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Gift Card', href: '/gift-card' },
    ],
  },
];
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Gold Solitaire Necklace',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&rotate=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&scale=1.2',
    ],
    rating: 4.8,
    reviews: 1234,
    isWishlisted: false,
    category: 'Necklaces',
    material: 'Gold',
    description: 'Elegant gold solitaire necklace with a sparkling pendant, perfect for any occasion.',
    inStock: true,
    features: [
      '18K Gold',
      'Single Diamond Pendant',
      'Adjustable Chain',
      'Hypoallergenic',
    ],
    specifications: {
      Material: '18K Gold',
      Pendant: '0.5 Carat Diamond',
      ChainLength: '16-18 inches',
      Weight: '10g',
    },
    relatedProducts: [],
  },
  {
    id: '1',
    name: 'Gold Solitaire Necklace',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&rotate=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&scale=1.2',
    ],
    rating: 4.8,
    reviews: 1234,
    isWishlisted: false,
    category: 'Necklaces',
    material: 'Gold',
    description: 'Elegant gold solitaire necklace with a sparkling pendant, perfect for any occasion.',
    inStock: true,
    features: [
      '18K Gold',
      'Single Diamond Pendant',
      'Adjustable Chain',
      'Hypoallergenic',
    ],
    specifications: {
      Material: '18K Gold',
      Pendant: '0.5 Carat Diamond',
      ChainLength: '16-18 inches',
      Weight: '10g',
    },
    relatedProducts: [],
  },
  {
    id: '1',
    name: 'Gold Solitaire Necklace',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&rotate=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&scale=1.2',
    ],
    rating: 4.8,
    reviews: 1234,
    isWishlisted: false,
    category: 'Necklaces',
    material: 'Gold',
    description: 'Elegant gold solitaire necklace with a sparkling pendant, perfect for any occasion.',
    inStock: true,
    features: [
      '18K Gold',
      'Single Diamond Pendant',
      'Adjustable Chain',
      'Hypoallergenic',
    ],
    specifications: {
      Material: '18K Gold',
      Pendant: '0.5 Carat Diamond',
      ChainLength: '16-18 inches',
      Weight: '10g',
    },
    relatedProducts: [],
  },
  {
    id: '1',
    name: 'Gold Solitaire Necklace',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&rotate=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&scale=1.2',
    ],
    rating: 4.8,
    reviews: 1234,
    isWishlisted: false,
    category: 'Necklaces',
    material: 'Gold',
    description: 'Elegant gold solitaire necklace with a sparkling pendant, perfect for any occasion.',
    inStock: true,
    features: [
      '18K Gold',
      'Single Diamond Pendant',
      'Adjustable Chain',
      'Hypoallergenic',
    ],
    specifications: {
      Material: '18K Gold',
      Pendant: '0.5 Carat Diamond',
      ChainLength: '16-18 inches',
      Weight: '10g',
    },
    relatedProducts: [],
  },
  {
    id: '1',
    name: 'Gold Solitaire Necklace',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&rotate=90',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&scale=1.2',
    ],
    rating: 4.8,
    reviews: 1234,
    isWishlisted: false,
    category: 'Necklaces',
    material: 'Gold',
    description: 'Elegant gold solitaire necklace with a sparkling pendant, perfect for any occasion.',
    inStock: true,
    features: [
      '18K Gold',
      'Single Diamond Pendant',
      'Adjustable Chain',
      'Hypoallergenic',
    ],
    specifications: {
      Material: '18K Gold',
      Pendant: '0.5 Carat Diamond',
      ChainLength: '16-18 inches',
      Weight: '10g',
    },
    relatedProducts: [],
  },
  {
    id: '2',
    name: 'Silver Hoop Earrings',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&rotate=90',
    ],
    rating: 4.5,
    reviews: 567,
    isWishlisted: false,
    category: 'Earrings',
    material: 'Silver',
    description: 'Stylish silver hoop earrings, lightweight and versatile for everyday wear.',
    inStock: true,
    features: [
      '925 Sterling Silver',
      'Lightweight Design',
      'Secure Clasp',
    ],
    specifications: {
      Material: '925 Sterling Silver',
      Diameter: '30mm',
      Weight: '5g',
    },
    relatedProducts: [],
  },
];