// components/common/Catalog.tsx
import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Filter, Grid, List } from 'lucide-react';
import { RootState } from '../../redux/store';
import { setFilters, setSort, fetchProducts, fetchCategories } from '../../redux/slices/productSlice';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import LoadingSpinner from './LoadingSpinner';
import { UI_TEXT, MOCK_PRODUCTS, CATEGORIES } from '../../constants';
import { CatalogProps, Filters } from '../../interfaces';
import type { AppDispatch } from '../../redux/store';

const Catalog: FC<CatalogProps> = ({ category: initialCategory, searchQuery: initialSearchQuery }) => {
  const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
  const { filteredProducts, categories, loading, error } = useSelector((state: RootState) => state.products);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setLocalFilters] = useState<Filters>({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    priceRange: null,
  });

  // Fetch categories and products on mount or category change
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts(initialCategory));
  }, [dispatch, initialCategory]);

  // Update filters and search when they change
  useEffect(() => {
    dispatch(setFilters({ filters, searchQuery, category: initialCategory }));
  }, [dispatch, filters, searchQuery, initialCategory]);

  const handleSortChange = (value: 'featured' | 'price-low' | 'price-high' | 'rating') => {
    setSortBy(value);
    dispatch(setSort(value));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {CATEGORIES.find(cat => cat.slug === initialCategory)?.name || 'Shop'}
              </h1>
              <span className="text-sm text-gray-500">
                ({filteredProducts.length} {UI_TEXT.ITEMS})
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search products"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden p-2 border border-gray-300 rounded-lg"
                aria-label="Toggle filters"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Category Filter Dropdown */}
          <div className="mt-4">
            <select
              value={filters.categories[0] || ''}
              onChange={(e) => {
                const value = e.target.value;
                setLocalFilters({
                  ...filters,
                  categories: value ? [value] : [],
                });
                // Update URL to reflect category change
                router.push(`/catalog?category=${encodeURIComponent(value)}`);
              }}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Select category"
            >
              <option value="">{UI_TEXT.ALL_CATEGORIES}</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={setLocalFilters}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>
          {showFilters && (
            <div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setShowFilters(false)}
              aria-hidden="true"
            >
              <FilterSidebar
                filters={filters}
                onFilterChange={setLocalFilters}
                isOpen={showFilters}
                onClose={() => setShowFilters(false)}
              />
            </div>
          )}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner size="lg" />
              </div>
            ) : error ? (
              <p className="text-red-500 text-center py-8">{UI_TEXT.ERROR}</p>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">{UI_TEXT.NO_PRODUCTS}</p>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;