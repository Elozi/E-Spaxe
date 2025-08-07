// constants/index.ts
export const API_URL = 'https://fakestoreapi.com/products'; // Placeholder for fashion API

export const UI_TEXT = {
  BRAND_NAME: 'e-spaxe',
  WELCOME_MESSAGE: 'Browse the latest fashion for men, women & kids!',
  BUY_NOW: 'Buy Now',
  VIEW_DETAILS: 'View Details',
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
};

export const NAV_ITEMS = [
  { label: 'Home' },
  {
    label: 'Collections',
    hasDropdown: true,
    dropdownContent: [
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
        title: 'Shop Pages',
        links: ['Shop by Gender', 'Shop by Age', 'Shop Grid', 'Shop Filters'],
      },
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
  {
    label: 'Blog',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Blog Categories',
        links: ['Styling Tips', 'Family Fashion', 'Sustainable Fashion', 'Behind the Brand'],
      },
      {
        title: 'Blog Posts',
        links: ['Single Post', 'Post with Gallery', 'Post with Video', 'Post with Interview'],
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
