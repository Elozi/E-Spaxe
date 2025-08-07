// components/common/ProductCard.tsx
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, Heart, ShoppingCart } from 'lucide-react';
import { addToCart } from '../../redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice';
import { RootState } from '../../redux/store';
import StarRating from './StarRating';
import { UI_TEXT } from '../../constants';

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleQuickView = () => {
    console.log('Quick view for product:', product.name);
  };

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={`Product: ${product.name}`}
    >
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-3">
            <button
              onClick={handleQuickView}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-110"
              title={UI_TEXT.QUICK_VIEW}
              aria-label={UI_TEXT.QUICK_VIEW}
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg transform hover:scale-110 ${
                isInWishlist ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
              title={isInWishlist ? `Remove from ${UI_TEXT.WISHLIST}` : `Add to ${UI_TEXT.WISHLIST}`}
              aria-label={isInWishlist ? `Remove from ${UI_TEXT.WISHLIST}` : `Add to ${UI_TEXT.WISHLIST}`}
            >
              <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-orange-400 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <h3 className="text-gray-900 font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
        <div className="mb-3">
          <StarRating rating={product.rating} />
        </div>
        <div className="text-gray-900 font-semibold text-lg mb-3">${product.price.toFixed(2)}</div>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2.5 px-4 rounded-md font-medium text-sm transition-all duration-300 ${
            isHovered ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-md' : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
          }`}
          aria-label={UI_TEXT.QUICK_ADD}
        >
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            {UI_TEXT.QUICK_ADD}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;