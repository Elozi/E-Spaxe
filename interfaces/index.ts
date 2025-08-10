// interfaces/index.ts
export interface Product {
   id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string; 
  images?: string[]; 
  rating: number;
  reviews?: number; 
  isWishlisted?: boolean;
  category: string;
  subCategory?: string;
  product?: string; 
  collections?: string;
  material: string;
  description?: string;
  inStock?: boolean;
  features?: string[];
 specifications: Record<string, string>;
  relatedProducts?: string[];

}

export interface CardProps {
  product: Product;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface FilterBarProps {
  categories: string[];
  onFilterChange: (selectedCategories: string[]) => void;
}

export interface SortBarProps {
  onSortChange: (sortOption: 'price-asc' | 'price-desc') => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface NavItem {
  label: string;
  hasDropdown?: boolean;
   href?: string;
  dropdownContent?: DropdownSection[];
}

export interface DropdownSection {
  title: string;
  links: string[];
}

export interface HeroContent {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}
export interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export interface ProductCardProps {
  product: Product;
}

export interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  onViewAll: () => void;
}
export interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface Filters {
  categories: string[];
  materials: string[];
   priceRange?: {
    min: number;
    max: number;
  } | null;
}

export interface CatalogProps {
  category?: string;
  subCategory?: string;
  product?: string;
  collections?: string;
  searchQuery?: string;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export interface Filters {
  categories: string[];
  materials: string[];
  subcategories?: string[];
  subCategory?: string;
  collections?: string[];
  subCategories?: string[];
  products?: string[];
  
  // priceRange?: PriceRange | null;
}

export interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface FilterBarProps {
  categories: string[];
  onFilterChange: (categories: string[]) => void;
}

export type CategoryKey =
 'Jewelry' | 
 'womens-dresses' |
  'womens-tops' |
   'mens-shirts' |
    'mens-t-shirts' |
    'bags' | 
    'shoes' |
     'Girls Clothing' |
     'Boys Clothing' ;
