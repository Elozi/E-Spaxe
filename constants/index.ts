// constants/index.ts
import { Product } from '../interfaces';
import { CategoryKey } from '../interfaces';

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
  'womens-dresses',
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
  'womens-dresses',
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
// constants/index.ts
export const CATEGORIES = [
  {
    id: 1,
    name: 'Jewelry',
    slug: 'jewelery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 2,
    name: 'Dresses',
    slug: 'womens-dresses',
    image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268211?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 3,
    name: 'Shirts',
    slug: 'mens-shirts',
    image: 'https://images.unsplash.com/photo-1596755032439-0b297c8a371e?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 4,
    name: 'T-Shirts',
    slug: 'mens-t-shirts',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 5,
    name: 'Bags',
    slug: 'bags',
    image: 'https://images.unsplash.com/photo-1590451999253-6113b6473b64?w=400&h=500&fit=crop&crop=center',
  },
  {
    id: 6,
    name: 'Shoes',
    slug: 'shoes',
    image: 'https://images.unsplash.com/photo-1516478177764-9fe567e9777d?w=400&h=500&fit=crop&crop=center',
  },
];

export const CATEGORY_SUBCATEGORIES: Record<CategoryKey, string[]> = {
  Jewelry: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Watches', 'Anklets'],
  'womens-dresses': ['Casual Dresses', 'Evening Dresses', 'Maxi Dresses', 'Mini Dresses', 'Cocktail Dresses'],
  'mens-shirts': ['Dress Shirts', 'Casual Shirts', 'Polo Shirts', 'Henley Shirts'],
   'womens-tops': ['Dress Shirts', 'Casual Shirts', 'Polo Shirts', 'Henley Shirts'],
  'mens-t-shirts': ['Graphic Tees', 'Plain Tees', 'V-Neck', 'Crew Neck', 'Long Sleeve'],
  bags: ['Handbags', 'Backpacks', 'Crossbody', 'Tote Bags', 'Clutches'],
  shoes: ['Sneakers', 'Boots', 'Flats', 'Heels', 'Sandals'],
 'Girls Clothing': ['Casual Dresses', 'Evening Dresses', 'Maxi Dresses', 'Mini Dresses', 'Cocktail Dresses'],
  'Boys Clothing': ['Dress Shirts', 'Casual Shirts', 'Polo Shirts', 'Henley Shirts'],
};
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
// export const CATEGORY_SUBCATEGORIES: Record<CategoryKey, string[]> = {
//   'Jewelry': ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Watches', 'Anklets'],
//   'womens-dresses': ['Casual Dresses', 'Evening Dresses', 'Maxi Dresses', 'Mini Dresses', 'Cocktail Dresses'],
//   'Women\'s Tops': ['Blouses', 'T-Shirts', 'Tank Tops', 'Sweaters', 'Cardigans'],
//   'Men\'s Shirts': ['Dress Shirts', 'Casual Shirts', 'Polo Shirts', 'Henley Shirts'],
//   'Men\'s T-Shirts': ['Graphic Tees', 'Plain Tees', 'V-Neck', 'Crew Neck', 'Long Sleeve'],
//   'Girls Clothing': ['Dresses', 'Tops', 'Pants', 'Skirts', 'Outerwear'],
//   'Boys Clothing': ['T-Shirts', 'Shirts', 'Pants', 'Shorts', 'Jackets'],
//   'Bags': ['Handbags', 'Backpacks', 'Crossbody', 'Tote Bags', 'Clutches'],
//   'Shoes': ['Sneakers', 'Boots', 'Flats', 'Heels', 'Sandals']
// };

// Category-specific materials mapping
export const CATEGORY_MATERIALS: Record<CategoryKey, string[]> = {
  'Jewelry': ['gold', 'silver', 'platinum', 'rose-gold', 'stainless-steel', 'titanium'],
  'womens-dresses': ['cotton', 'polyester', 'silk', 'chiffon', 'lace', 'satin'],
  'womens-tops': ['cotton', 'polyester', 'silk', 'wool', 'cashmere', 'linen'],
  'mens-shirts': ['cotton', 'linen', 'polyester', 'silk', 'oxford-cloth'],
  'mens-t-shirts': ['cotton', 'polyester', 'bamboo', 'modal', 'tri-blend'],
  'Girls Clothing': ['cotton', 'polyester', 'organic-cotton', 'bamboo', 'modal'],
  'Boys Clothing': ['cotton', 'polyester', 'denim', 'fleece', 'jersey'],
  'bags': ['leather', 'canvas', 'nylon', 'polyester', 'vegan-leather'],
  'shoes': ['leather', 'canvas', 'rubber', 'synthetic', 'suede']
};

export const MOCK_PRODUCTS: Product[] = [
  // NECKLACE (Existing)
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
    isWishlisted: true,
    category: 'Necklaces',
    material: 'Gold',
    description: 'Elegant gold solitaire necklace with a sparkling pendant, perfect for any occasion.',
    inStock: true,
    features: [
      '18K Gold Plated',
      'Cubic Zirconia Pendant',
      'Adjustable 16-18 inch chain',
      'Hypoallergenic',
    ],
    specifications: {
      Material: '18K Gold Plated on 925 Sterling Silver',
      Pendant: '0.5 Carat Cubic Zirconia',
      ChainLength: '16-18 inches',
      Weight: '10g',
    },
    relatedProducts: ['2', '3', '4'],
  },
  // EARRINGS (Existing)
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
      'Secure Latch-back Clasp',
    ],
    specifications: {
      Material: '925 Sterling Silver',
      Diameter: '30mm',
      Weight: '5g',
    },
    relatedProducts: ['1', '3', '5'],
  },
  // BRACELET
  {
    id: '3',
    name: 'Rose Gold Charm Bracelet',
    price: 129.50,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1611652022417-a553e1e3b0c8?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1611652022417-a553e1e3b0c8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611652022417-a553e1e3b0c8?w=600&h=600&fit=crop&rotate=90',
    ],
    rating: 4.9,
    reviews: 2150,
    isWishlisted: true,
    category: 'Bracelets',
    material: 'Rose Gold',
    description: 'A beautiful and delicate charm bracelet in a stunning rose gold finish.',
    inStock: true,
    features: [
      '14K Rose Gold Plated',
      'Includes 3 starter charms',
      'Secure lobster clasp',
      '7.5 inch length',
    ],
    specifications: {
      Material: '14K Rose Gold Plated',
      Length: '7.5 inches',
      Weight: '15g',
      Clasp: 'Lobster Claw',
    },
    relatedProducts: ['1', '2', '4'],
  },
  // RING
  {
    id: '4',
    name: 'Sapphire Engagement Ring',
    price: 899.00,
    originalPrice: 1199.00,
    image: 'https://images.unsplash.com/photo-1598561042797-2cf36e77a494?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1598561042797-2cf36e77a494?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598561042797-2cf36e77a494?w=600&h=600&fit=crop&rotate=90',
    ],
    rating: 5.0,
    reviews: 982,
    isWishlisted: false,
    category: 'Rings',
    material: 'Platinum',
    description: 'Exquisite platinum ring featuring a deep blue sapphire surrounded by a halo of diamonds.',
    inStock: true,
    features: [
      'Solid Platinum Band',
      '1.5 Carat Natural Sapphire',
      '0.5 Carat Diamond Halo',
      'Certified & Appraised',
    ],
    specifications: {
      Material: '950 Platinum',
      CenterStone: '1.5 Carat Sapphire',
      SideStones: '0.5 Carat Diamonds',
      RingSize: '7 (US)',
    },
    relatedProducts: ['1', '3', '5'],
  },
  // WATCH
  {
    id: '5',
    name: 'Classic Men\'s Leather Watch',
    price: 250.00,
    originalPrice: 325.00,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    ],
    rating: 4.7,
    reviews: 1788,
    isWishlisted: false,
    category: 'Watches',
    material: 'Leather',
    description: 'A timeless timepiece with a genuine leather strap and a minimalist stainless steel case.',
    inStock: true,
    features: [
      'Swiss Quartz Movement',
      'Genuine Leather Strap',
      'Water Resistant to 5 ATM',
      'Date Function',
    ],
    specifications: {
      CaseMaterial: 'Stainless Steel',
      StrapMaterial: 'Genuine Leather',
      Movement: 'Swiss Quartz',
      WaterResistance: '50 Meters',
    },
    relatedProducts: ['9', '11', '12'],
  },
  // CASUAL DRESS
  {
    id: '6',
    name: 'Floral Print Maxi Dress',
    price: 89.99,
    originalPrice: 110.00,
    image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268211?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1572804013427-4d7ca7268211?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop',
    ],
    rating: 4.6,
    reviews: 831,
    isWishlisted: true,
    category: 'Casual Dresses',
    material: 'Rayon',
    description: 'A light and airy floral maxi dress, perfect for summer days and beach vacations.',
    inStock: true,
    features: [
      'Lightweight Rayon Fabric',
      'Adjustable Spaghetti Straps',
      'Elastic Waistband',
      'Side Slit',
    ],
    specifications: {
      Material: '100% Rayon',
      Care: 'Hand Wash Cold',
      Length: 'Maxi',
      Fit: 'Flowy',
    },
    relatedProducts: ['7', '10', '13'],
  },
  // EVENING DRESS
  {
    id: '7',
    name: 'Sequin Cocktail Dress',
    price: 159.99,
    originalPrice: 220.00,
    image: 'https://images.unsplash.com/photo-1590245613023-5a5298539611?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1590245613023-5a5298539611?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541695434934-7c316712399e?w=600&h=600&fit=crop',
    ],
    rating: 4.8,
    reviews: 450,
    isWishlisted: false,
    category: 'Evening Dresses',
    material: 'Sequin',
    description: 'Turn heads at your next event with this dazzling, fully-sequined cocktail dress.',
    inStock: false,
    features: [
      'All-over Sequin Embellishment',
      'Bodycon Fit',
      'V-Neckline',
      'Fully Lined',
    ],
    specifications: {
      Material: 'Polyester, Spandex, Sequin',
      Care: 'Dry Clean Only',
      Length: 'Mini',
      Closure: 'Hidden Back Zipper',
    },
    relatedProducts: ['6', '10', '13'],
  },
  // BLOUSE
  {
    id: '8',
    name: 'Silk Ruffle Blouse',
    price: 95.00,
    originalPrice: 130.00,
    image: 'https://images.unsplash.com/photo-1589465885857-add72199e46a?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1589465885857-add72199e46a?w=600&h=600&fit=crop',
    ],
    rating: 4.7,
    reviews: 612,
    isWishlisted: true,
    category: 'Blouses',
    material: 'Silk',
    description: 'A luxurious silk blouse featuring elegant ruffles along the collar and cuffs.',
    inStock: true,
    features: [
      '100% Mulberry Silk',
      'Ruffle details',
      'Button-front closure',
      'Long sleeves with buttoned cuffs',
    ],
    specifications: {
      Material: '100% Silk',
      Care: 'Dry Clean Recommended',
      Fit: 'Regular',
    },
    relatedProducts: ['6', '10', '11'],
  },
  // MEN'S DRESS SHIRT
  {
    id: '9',
    name: 'Slim Fit Cotton Dress Shirt',
    price: 65.00,
    originalPrice: 85.00,
    image: 'https://images.unsplash.com/photo-1596755032439-0b297c8a371e?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1596755032439-0b297c8a371e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&h=600&fit=crop',
    ],
    rating: 4.9,
    reviews: 3104,
    isWishlisted: false,
    category: 'Dress Shirts',
    material: 'Cotton',
    description: 'A sharp, slim-fit dress shirt made from crisp, non-iron cotton for a polished look all day.',
    inStock: true,
    features: [
      '100% Non-Iron Cotton',
      'Slim Fit',
      'Spread Collar',
      'French Cuffs',
    ],
    specifications: {
      Material: '100% Cotton',
      Fit: 'Slim',
      Collar: 'Spread',
      Care: 'Machine Wash Warm',
    },
    relatedProducts: ['5', '11', '12'],
  },
  // HANDBAG
  {
    id: '10',
    name: 'Structured Leather Tote Bag',
    price: 320.00,
    originalPrice: 400.00,
    image: 'https://images.unsplash.com/photo-1590451999253-6113b6473b64?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1590451999253-6113b6473b64?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
    ],
    rating: 4.8,
    reviews: 789,
    isWishlisted: true,
    category: 'Tote Bags',
    material: 'Leather',
    description: 'A sophisticated and spacious tote bag crafted from genuine Italian leather. Your perfect work-to-weekend companion.',
    inStock: true,
    features: [
      'Genuine Italian Leather',
      'Fits a 15" Laptop',
      'Multiple interior pockets',
      'Top zip closure',
    ],
    specifications: {
      Material: 'Italian Cowhide Leather',
      Dimensions: '16" W x 12" H x 6" D',
      Lining: 'Cotton Twill',
      Color: 'Caramel Brown',
    },
    relatedProducts: ['6', '8', '13'],
  },
  // BACKPACK
  {
    id: '11',
    name: 'Modern Laptop Backpack',
    price: 119.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb68c6a62?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb68c6a62?w=600&h=600&fit=crop',
    ],
    rating: 4.9,
    reviews: 2543,
    isWishlisted: false,
    category: 'Backpacks',
    material: 'Nylon',
    description: 'A sleek, water-resistant backpack designed for the modern professional. Features a padded laptop compartment and USB charging port.',
    inStock: true,
    features: [
      'Water-Resistant Nylon',
      'Padded 15.6" Laptop Sleeve',
      'Built-in USB Charging Port',
      'Anti-theft back pocket',
    ],
    specifications: {
      Material: 'Ballistic Nylon',
      Capacity: '25L',
      Dimensions: '18" H x 12" W x 7" D',
      Weight: '2 lbs',
    },
    relatedProducts: ['5', '9', '12'],
  },
  // SNEAKERS
  {
    id: '12',
    name: 'Unisex Canvas High-Tops',
    price: 75.00,
    originalPrice: 75.00,
    image: 'https://images.unsplash.com/photo-1516478177764-9fe567e9777d?w=400&h=500&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1516478177764-9fe567e9777d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1608231387042-66d1653e1253?w=600&h=600&fit=crop',
    ],
    rating: 4.7,
    reviews: 4890,
    isWishlisted: false,
    category: 'Sneakers',
    material: 'Canvas',
    description: 'The iconic high-top sneaker that goes with everything. Durable canvas upper and a timeless silhouette.',
    inStock: true,
    features: [
      'Durable Canvas Upper',
      'Rubber Sole for Grip',
      'Iconic Ankle Patch',
      'Ortholite insole for cushioning',
    ],
    specifications: {
      Upper: 'Canvas',
      Outsole: 'Rubber',
      Closure: 'Lace-up',
      Color: 'Classic White',
    },
    relatedProducts: ['5', '9', '11'],
  },
];