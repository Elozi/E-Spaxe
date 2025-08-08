// components/common/ProductCard.tsx
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { addToCart } from '../../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice';
import { RootState } from '../../redux/store';
import StarRating from './StarRating';
import { UI_TEXT } from '../../constants';
import { toggleWishlist } from '../../redux/slices/productSlice';
import { ProductCardProps } from '@/interfaces';


const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
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

  const handleQuickView = () => {
    console.log('Quick view for product:', product.name);
  };

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={`Product: ${product.name}`}
    >
       <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2">
            <button
              onClick={handleAddToCart}
              className={`p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 ${
                isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
              title={UI_TEXT.QUICK_ADD}
              aria-label={UI_TEXT.QUICK_ADD}
              style={{ transitionDelay: '100ms' }}
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleQuickView}
              className={`p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 ${
                isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
              title={UI_TEXT.QUICK_VIEW}
              aria-label={UI_TEXT.QUICK_VIEW}
              style={{ transitionDelay: '150ms' }}
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isHovered ? 'bg-white shadow-lg scale-100 opacity-100' : 'bg-white/80 scale-90 opacity-80'
          }`}
          title={isInWishlist ? `Remove from ${UI_TEXT.WISHLIST}` : `Add to ${UI_TEXT.WISHLIST}`}
          aria-label={isInWishlist ? `Remove from ${UI_TEXT.WISHLIST}` : `Add to ${UI_TEXT.WISHLIST}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-200 ${
              isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-sm text-gray-500 ml-1">({product.reviews || 0})</span>
        </div>
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;