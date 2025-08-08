// components/common/NewArrivals.tsx
import { FC, useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState,  useAppDispatch, useAppSelector} from '../../redux/store';
import { fetchNewArrivals } from '../../redux/slices/productSlice';
import ProductCard from './ProductCard';

import NavigationArrows from './NavigationArrows';
import LoadingSpinner from './LoadingSpinner';
import { UI_TEXT } from '../../constants';

const NewArrivals: FC = () => {
  const dispatch = useAppDispatch();
  const { newArrivals, loading, error } = useSelector((state: RootState) => state.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; 

   useEffect(() => {
    dispatch(fetchNewArrivals());
  }, [dispatch]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerPage, newArrivals.length - itemsPerPage));
  };

  const handleViewAll = () => {
    console.log('Navigate to all products page' );
    // Future: Navigate to /products with Next.js router
  };

  const visibleProducts = newArrivals.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-8"
      aria-label={UI_TEXT.NEW_ARRIVALS}
      role="region"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-orange-400 font-medium uppercase tracking-wide mb-2">
            {UI_TEXT.OUR_PRODUCTS}
          </p>
          <h1 className="text-3xl font-bold text-gray-900">{UI_TEXT.NEW_ARRIVALS}</h1>
        </div>
        <NavigationArrows onPrevious={handlePrevious} onNext={handleNext} onViewAll={handleViewAll} />
      </div>
      {loading ? (
        <div className="flex justify-center py-8">
          <LoadingSpinner size="lg" />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center py-8">{UI_TEXT.ERROR}</p>
      ) : visibleProducts.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No new arrivals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NewArrivals;