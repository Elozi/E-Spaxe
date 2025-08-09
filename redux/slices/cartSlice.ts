import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces';

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   category: string;
//   image: string;
//   rating: number;
// }

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       state.items.push(action.payload);
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });
const calculateTotal = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]) => {
  return items.reduce((count, item) => count + item.quantity, 0);
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ product: Product; quantity: number }>) {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      state.total = calculateTotal(state.items);
      state.itemCount = calculateItemCount(state.items);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
      state.total = calculateTotal(state.items);
      state.itemCount = calculateItemCount(state.items);
    },
    
      updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((item) => item.product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      state.total = calculateTotal(state.items);
      state.itemCount = calculateItemCount(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
    loadCartFromStorage: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      state.total = calculateTotal(state.items);
      state.itemCount = calculateItemCount(state.items);
    },
  },
});

export const { addToCart, removeFromCart,updateQuantity, clearCart, loadCartFromStorage } = cartSlice.actions;
export default cartSlice.reducer;
