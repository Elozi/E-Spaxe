// pages/catalog.tsx
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/slices/productSlice';
import Catalog from '../components/common/Catalog';

const CatalogPage: FC = () => {
const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
const { category, subCategory, product, collections, search } = router.query;

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  return <Catalog
  category={category as string}
  subCategory={subCategory as string}
  product={product as string}
  collections={collections as string}
  searchQuery={search as string}
/>;
};

export default CatalogPage;