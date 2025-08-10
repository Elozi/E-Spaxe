import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductPage from '../components/common/ProductPage';

const ProductsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts({})); // Fetch all products
  }, [dispatch]);

  return <ProductPage />;
};

export default ProductsPage;