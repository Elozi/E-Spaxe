// redux/slices/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../../interfaces';
import { API_URL } from '../../constants';

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage(state, action: { payload: number }) {
      state.currentPage = action.payload;
      const itemsPerPage = 6;
      const start = (state.currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      state.filteredProducts = state.products.slice(start, end);
      state.totalPages = Math.ceil(state.products.length / itemsPerPage);
    },
    filterByCategory(state, action: { payload: string[] }) {
      const categories = action.payload;
      state.currentPage = 1;
      state.filteredProducts = categories.length
        ? state.products.filter((product) => categories.includes(product.category))
        : state.products;
      state.totalPages = Math.ceil(state.filteredProducts.length / 6);
      state.filteredProducts = state.filteredProducts.slice(0, 6);
    },
    sortByPrice(state, action: { payload: 'price-asc' | 'price-desc' }) {
      state.currentPage = 1;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        action.payload === 'price-asc' ? a.price - b.price : b.price - a.price,
      );
      state.totalPages = Math.ceil(state.filteredProducts.length / 6);
      state.filteredProducts = state.filteredProducts.slice(0, 6);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload.slice(0, 6);
        state.totalPages = Math.ceil(action.payload.length / 6);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setPage, filterByCategory, sortByPrice } = productSlice.actions;
export default productSlice.reducer;