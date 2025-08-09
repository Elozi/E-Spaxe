// pages/product/[id].tsx
import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Star, Heart, Share2, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchProductById } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleWishlist } from '../../redux/slices/wishlistSlice';
import { RootState } from '../../redux/store';
import { MOCK_PRODUCTS, UI_TEXT } from '../../constants';
import { Product } from '../../interfaces';

interface ProductPageProps {
  product?: Product; // Fallback for SSR
}

const ProductPage: FC<ProductPageProps> = ({ product: initialProduct }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { product, loading, error } = useSelector((state: RootState) => state.products);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id as string) as any);
    }
  }, [dispatch, id]);

  const currentProduct = product || initialProduct;

  if (loading) return <div className="text-center py-8">{UI_TEXT.LOADING}</div>;
  if (error || !currentProduct) return <div className="text-center py-8 text-red-500">{error || 'Product not found'}</div>;

  const isWishlisted = wishlistItems.some((item) => item.id === currentProduct.id);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product: currentProduct, quantity }));
  };

  const handleWishlistToggle = () => {
    dispatch(toggleWishlist(currentProduct));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentProduct.name,
        text: currentProduct.description,
        url: window.location.href,
      });
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === (currentProduct.images?.length || 1) - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? (currentProduct.images?.length || 1) - 1 : prev - 1));
  };

  return (
    <>
      <Head>
        <title>{`${currentProduct.name} | ${UI_TEXT.BRAND_NAME}`}</title>
        <meta name="description" content={currentProduct.description || ''} />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={currentProduct.images?.[selectedImageIndex] || currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover"
                priority
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-3">
              {(currentProduct.images || [currentProduct.image]).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedImageIndex ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  aria-label={`Select image ${index + 1}`}
                >
                  <Image src={image} alt={`${currentProduct.name} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentProduct.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= Math.floor(currentProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {currentProduct.rating} ({currentProduct.reviews || 0} reviews)
                </span>
              </div>
              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">${currentProduct.price.toFixed(2)}</span>
                {currentProduct.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${currentProduct.originalPrice.toFixed(2)}</span>
                )}
                {currentProduct.originalPrice && (
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Save ${(currentProduct.originalPrice - currentProduct.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">{currentProduct.description}</p>
            </div>
            {currentProduct.features && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-4">
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  currentProduct.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {currentProduct.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                    disabled={quantity >= 10}
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!currentProduct.inStock}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  aria-label={UI_TEXT.ADD_TO_CART}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{UI_TEXT.ADD_TO_CART}</span>
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`p-3 rounded-lg border transition-colors ${
                    isWishlisted ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-label={isWishlisted ? UI_TEXT.REMOVE_FROM_WISHLIST : UI_TEXT.ADD_TO_WISHLIST}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                  aria-label={UI_TEXT.SHARE}
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="w-5 h-5" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="w-5 h-5" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="w-5 h-5" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
        {currentProduct.specifications && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(currentProduct.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      product:null,
    },
  };
};

export default ProductPage;