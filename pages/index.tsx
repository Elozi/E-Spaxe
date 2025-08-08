// pages/index.tsx
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { fetchProducts, filterByCategory, sortByPrice, setPage, ProductState } from '../redux/slices/productSlice';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Card from '../components/common/Card';
import FilterBar from '../components/common/FilterBar';
import SortBar from '../components/common/SortBar';
import Pagination from '../components/common/Pagination';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { UI_TEXT } from '../constants';
import NewArrivals from '../components/common/NewArrivals';
import CategoryGrid from '../components/common/CategoryGrid';

const Home: FC = () => {
 const dispatch = useDispatch<AppDispatch>()
  const { filteredProducts, loading, error, currentPage, totalPages } = useSelector(
    (state: { products: ProductState }) => state.products,
  );

useEffect(() => {
  const fetchData = async () => {
    await dispatch(fetchProducts());
  };

  fetchData();
}, [dispatch]);


  const handleFilterChange = (categories: string[]) => {
    dispatch(filterByCategory(categories));
  };

  const handleSortChange = (sortOption: 'price-asc' | 'price-desc') => {
    dispatch(sortByPrice(sortOption));
  };

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
       <CategoryGrid />
      <NewArrivals />
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">{UI_TEXT.WELCOME_MESSAGE}</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <FilterBar
              categories={['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Pendants', 'Charms']}
              onFilterChange={handleFilterChange}
            />
            <SortBar onSortChange={handleSortChange} />
          </div>
          <div className="md:w-3/4">
            {loading ? (
              <div className="flex justify-center">
                <LoadingSpinner size="lg" />
              </div>
            ) : error ? (
              <p className="text-red-500 text-center">{UI_TEXT.ERROR}</p>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;