// components/common/ProductCard.tsx
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { addToCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import StarRating from './StarRating';
import { UI_TEXT } from '../../constants';
import { toggleWishlist } from '../../redux/slices/productSlice';
import { ProductCardProps } from '@/interfaces';


const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
   const router = useRouter();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  // const handleAddToCart = () => {
  //   dispatch(addToCart(product));
  // };
 const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };
  // const handleWishlistToggle = () => {
  //   if (isInWishlist) {
  //     dispatch(removeFromWishlist(product.id));
  //   } else {
  //     dispatch(addToWishlist(product));
  //   }
  // };
   const handleWishlistToggle = () => {
    dispatch(toggleWishlist(product.id));
  };

  // const handleQuickView = () => {
  //   console.log('Quick view for product:', product.name);
  // };
  const handleViewDetails = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isInWishlist ? 'bg-red-50 text-red-600' : 'bg-white/80 text-gray-600 hover:bg-gray-100'
          }`}
          aria-label={isInWishlist ? UI_TEXT.REMOVE_FROM_WISHLIST : UI_TEXT.ADD_TO_WISHLIST}
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-4">
        <h3
          className="text-lg font-semibold text-gray-900 truncate cursor-pointer hover:text-blue-600"
          onClick={handleViewDetails}
        >
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 mt-1">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500">({product.reviews || 0})</span>
        </div>
        <div className="mt-2 flex items-baseline space-x-2">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label={UI_TEXT.ADD_TO_CART}
        >
          <div className="flex items-center justify-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>{UI_TEXT.ADD_TO_CART}</span>
          </div>
        </button>
        <button
          onClick={handleViewDetails}
          className="mt-2 w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          aria-label={UI_TEXT.VIEW_DETAILS}
        >
          {UI_TEXT.VIEW_DETAILS}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;