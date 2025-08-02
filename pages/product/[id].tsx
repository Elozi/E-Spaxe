import { FC } from 'react';
import { useRouter } from 'next/router';

const ProductDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;