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

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action: PayloadAction<Product>) => {
//       const exists = state.items.find(item => item.id === action.payload.id);
//       if (!exists) {
//         state.items.push(action.payload);
//       }
//     },
//     removeFromWishlist: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push({ ...product, isWishlisted: true });
      }
    },
  },
});

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;
export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;