// pages/product/[id].tsx
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchProducts } from '../../redux/slices/productSlice';
import { RootState,AppDispatch } from '../../redux/store';
import { UI_TEXT } from '../../constants';


const ProductDetail: FC = () => {
 const dispatch = useDispatch<AppDispatch>()
  const router = useRouter();
  const { id } = router.query;
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((p) => p.id === id);

  if (loading) return <p>{UI_TEXT.LOADING}</p>;
  if (error) return <p>{UI_TEXT.ERROR}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      <p className="text-lg font-semibold">${product.price.toLocaleString()}</p>
      <p>{product.description || 'No description available'}</p>
    </div>
  );
};

export default ProductDetail;