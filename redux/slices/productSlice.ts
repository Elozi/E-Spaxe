// redux/slices/productSlice.ts
import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product,Filters } from '../../interfaces';
import { API_URL } from '../../constants';

export interface ProductState {
  products: Product[];
  newArrivals: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: ProductState = {
  products: [],
  newArrivals: [],
  filteredProducts: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get<Product[]>(API_URL);
  console.log('Fetched new arrivals:', response.data);
  return response.data.map((p) => ({
    ...p,
    id: p.id.toString(),
    isWishlisted: false,
    reviews: Math.floor(Math.random() * 200) + 50,
    material: ['cotton', 'polyester', 'leather', 'denim', 'silk', 'gold', 'silver'][Math.floor(Math.random() * 7)],
    originalPrice: Math.random() > 0.7 ? p.price * 1.2 : undefined,
  }));
});

export const fetchNewArrivals = createAsyncThunk('products/fetchNewArrivals', async () => {
  const response = await axios.get<Product[]>(`${API_URL}?limit=5`);
  return response.data.map((p) => ({
    ...p,
    id: p.id.toString(),
    isWishlisted: false,
    reviews: Math.floor(Math.random() * 200) + 50,
    material: ['cotton', 'polyester', 'leather', 'denim', 'silk', 'gold', 'silver'][Math.floor(Math.random() * 7)],
    originalPrice: Math.random() > 0.7 ? p.price * 1.2 : undefined,
    
  }));
  console.log( response.data)
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
     setFilters(state, action: PayloadAction<{ filters: Filters; searchQuery?: string; category?: string }>) {
      const { filters, searchQuery, category } = action.payload;
      state.filteredProducts = state.products.filter((product) => {
        const matchesSearch = searchQuery
          ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
          : true;
        const matchesCategory = category ? product.category === category : filters.categories.length === 0 || filters.categories.includes(product.category);
        const matchesMaterial = filters.materials.length === 0 || filters.materials.includes(product.material);
        const matchesPrice = !filters.priceRange || (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max);
        return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
      });
    },
    setSort(state, action: PayloadAction<'featured' | 'price-low' | 'price-high' | 'rating'>) {
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        switch (action.payload) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
    },
    toggleWishlist(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.products = state.products.map((p) =>
        p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p,
      );
      state.filteredProducts = state.filteredProducts.map((p) =>
        p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p,
      );
      state.newArrivals = state.newArrivals.map((p) =>
        p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p,
      );
    },
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
      })
      .addCase(fetchNewArrivals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewArrivals.fulfilled, (state, action) => {
        state.loading = false;
        state.newArrivals = action.payload;
      })
      .addCase(fetchNewArrivals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch new arrivals';
      })
  },
});

export const {setFilters, setSort, toggleWishlist, setPage, filterByCategory, sortByPrice } = productSlice.actions;
export default productSlice.reducer;