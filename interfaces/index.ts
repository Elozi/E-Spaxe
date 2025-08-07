// interfaces/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  rating: number;
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