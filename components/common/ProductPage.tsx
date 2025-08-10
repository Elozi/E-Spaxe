import { FC, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Filter, Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { RootState } from '../../redux/store';
import { setFilters, setSort, fetchProducts, fetchCategories, setPage, loadMoreProducts } from '../../redux/slices/productSlice';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import FilterBar from './FilterBar';
import LoadingSpinner from './LoadingSpinner';
import { UI_TEXT, FILTER_CATEGORIES } from '../../constants';
import { Filters } from '../../interfaces';
import type { AppDispatch } from '../../redux/store';

const ProductPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { filteredProducts, categories, loading, error, currentPage, totalPages, allLoaded } = useSelector((state: RootState) => state.products);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [useInfiniteScroll, setUseInfiniteScroll] = useState(true); // Toggle between infinite scroll and pagination
  const [filters, setLocalFilters] = useState<Filters>({
    categories: [],
    subCategories: [],
    products: [],
    collections: [],
    materials: [],
    priceRange: null,
  });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts({})); // Fetch all products
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilters({ filters, searchQuery }));
  }, [dispatch, filters, searchQuery]);

  // Infinite Scroll Logic
  useEffect(() => {
    if (useInfiniteScroll && !allLoaded && !loading) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            dispatch(loadMoreProducts());
          }
        },
        { threshold: 0.1 }
      );

      if (loadMoreRef.current) {
        observerRef.current.observe(loadMoreRef.current);
      }

      return () => {
        if (observerRef.current && loadMoreRef.current) {
          observerRef.current.unobserve(loadMoreRef.current);
        }
      };
    }
  }, [useInfiniteScroll, allLoaded, loading, dispatch]);

  const handleSortChange = (value: 'featured' | 'price-low' | 'price-high' | 'rating') => {
    setSortBy(value);
    dispatch(setSort(value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    router.push(
      `/products${e.target.value ? `?search=${encodeURIComponent(e.target.value)}` : ''}`,
      undefined,
      { shallow: true }
    );
  };

  const handleCategoryChange = (newCategories: string[]) => {
    const newFilters = {
      ...filters,
      categories: newCategories,
      subCategories: [],
      products: [],
      collections: [],
    };
    setLocalFilters(newFilters);
    router.push(
      `/products${newCategories.length ? `?category=${encodeURIComponent(newCategories[0])}` : ''}`,
      undefined,
      { shallow: true }
    );
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top on page change
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
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
                  onChange={handleSearchChange}
                  aria-label="Search products"
                />
              </div>
              <select
  value={sortBy}
  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
    handleSortChange(e.target.value as 'featured' | 'price-low' | 'price-high' | 'rating')
  }
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
              <button
                onClick={() => setUseInfiniteScroll(!useInfiniteScroll)}
                className="p-2 border border-gray-300 rounded-lg text-sm"
                aria-label={useInfiniteScroll ? 'Switch to pagination' : 'Switch to infinite scroll'}
              >
                {useInfiniteScroll ? 'Use Pagination' : 'Use Infinite Scroll'}
              </button>
            </div>
          </div>
          <FilterBar
            categories={filters.categories}
            onFilterChange={handleCategoryChange}
          />
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
            {loading && !filteredProducts.length ? (
              <div className="flex justify-center py-8">
                <LoadingSpinner size="lg" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">{error}</p>
                <p className="text-gray-500 mt-2">Please try again or check your connection.</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">{UI_TEXT.NO_PRODUCTS}</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <>
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
                {useInfiniteScroll ? (
                  !allLoaded && (
                    <div ref={loadMoreRef} className="flex justify-center py-8">
                      <LoadingSpinner size="md" />
                    </div>
                  )
                ) : (
                  <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 border border-gray-300 rounded-lg disabled:opacity-50"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 border border-gray-300 rounded-lg disabled:opacity-50"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;