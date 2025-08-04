// constants/index.ts
export const API_URL = 'https://fakestoreapi.com/products'; // Placeholder for fashion API

export const UI_TEXT = {
  BRAND_NAME: 'e-spaxe',
  WELCOME_MESSAGE: 'Browse our latest fashion collection!',
  BUY_NOW: 'Buy Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  ERROR: 'Something went wrong. Please try again.',
  SEARCH: 'Search',
  WISHLIST: 'Wishlist',
  CART: 'Cart',
  ACCOUNT: 'Account',
};

export const NAV_ITEMS = [
  { label: 'Home' },
  {
    label: 'Collections',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'By Category',
        links: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Pendants', 'Charms'],
      },
      {
        title: 'By Style',
        links: ['Minimalist', 'Vintage', 'Statement', 'Bohemian', 'Classic', 'Modern'],
      },
      {
        title: 'Special Collections',
        links: ['Bridal', 'Anniversary', 'Birthstone', 'Limited Edition'],
      },
    ],
  },
  {
    label: 'Products',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Product Detail',
        links: [
          'Product Detail Default',
          'Product Detail Thumb Left 1',
          'Product Detail Thumb Left 2',
          'Product Detail Thumb Right',
          'Product Deals Countdown',
          'Product Detail Tab Accordion V1',
          'Product Detail Tab Accordion V2',
        ],
      },
      {
        title: 'Product Detail',
        links: [
          'Product Detail Thumb Grid 1',
          'Product Detail Thumb Grid 2',
          'Product Detail Image Grid',
          'Product Detail Image Scroll',
          'Product Detail Image Slider 1',
          'Product Detail Image Slider 2',
          'Product 3D, AR Models',
        ],
      },
      {
        title: 'Product Features',
        links: [
          'Product Video',
          'Product Pre-Order',
          'Product Variant Dropbox Style',
          'Product Variant Image Swatch',
          'Product Variant Pattern',
          'Product Sticky Add To Cart',
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
        links: ['Shop Grid', 'Shop List', 'Shop Sidebar', 'Shop Filter', 'Shop Search'],
      },
      {
        title: 'Customer Pages',
        links: ['Account', 'Login', 'Register', 'Wishlist', 'Compare', 'Checkout'],
      },
      {
        title: 'Info Pages',
        links: ['About Us', 'Contact', 'FAQ', 'Size Guide', 'Terms & Conditions', 'Privacy Policy'],
      },
    ],
  },
  {
    label: 'Blog',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Blog Layouts',
        links: ['Blog Grid', 'Blog List', 'Blog Masonry', 'Blog Sidebar'],
      },
      {
        title: 'Blog Posts',
        links: ['Single Post', 'Post with Gallery', 'Post with Video', 'Post with Audio'],
      },
      {
        title: 'Categories',
        links: ['Jewelry Care', 'Styling Tips', 'New Arrivals', 'Behind the Scenes'],
      },
    ],
  },
];

export const HERO_CONTENT = {
  tagline: 'OWN YOUR LOOK',
  title: 'Accessorize With Confidence',
  subtitle: 'For Every Occasion',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique ullamcorper ex, vitae consequat nisl iaculis.',
  buttonText: 'Shop Now',
};