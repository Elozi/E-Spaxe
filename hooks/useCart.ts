// hooks/useCart.ts
import { useEffect } from 'react';
import { Product } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addToCart, removeFromCart, updateQuantity, clearCart, loadCartFromStorage} from '../redux/slices/cartSlice';

const CART_STORAGE_KEY = 'e-spaxe-cart';

export const useCart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch(loadCartFromStorage(parsedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState.items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartState.items]);

 
const handleAddToCart = (product: Product, quantity?: number) => {
  dispatch(addToCart({ product, quantity:quantity ?? 1 }));
};

const handleRemoveFromCart = (productId: string) => {
  dispatch(removeFromCart(productId));
};

const handleUpdateQuantity = (productId: string, quantity: number) => {
  dispatch(updateQuantity({ id: productId, quantity }));
};

const handleClearCart = () => {
  dispatch(clearCart());
};


  const isInCart = (productId: string): boolean => {
    return cartState.items.some((item) => item.product.id === productId);
  };

  const getItemQuantity = (productId: string): number => {
    const item = cartState.items.find((item) => item.product.id === productId);
    return item?.quantity || 0;
  };

  return {
  items: cartState.items,
  total: cartState.total,
  itemCount: cartState.itemCount,
  addToCart: handleAddToCart,
  removeFromCart: handleRemoveFromCart,
  updateQuantity: handleUpdateQuantity,
  clearCart: handleClearCart,
  isInCart,
  getItemQuantity,
};
};