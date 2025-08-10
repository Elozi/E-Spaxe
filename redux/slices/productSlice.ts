// redux/slices/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, Filters, Category } from '../../interfaces';
import { CATEGORIES, MOCK_PRODUCTS, CATEGORY_SUBCATEGORIES } from '../../constants';

export interface ProductState {
  products: Product[];
  newArrivals: Product[];
  categories: Category[];
  filteredProducts: Product[];
  loading: boolean;
  product: Product | null;
  error: string | null;
  currentPage: number;
  totalPages: number;
}

const initialState: ProductState = {
  products: [],
  newArrivals: [],
  categories: [],
  filteredProducts: [],
  loading: false,
  product: null,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  // Use mock categories only
  return CATEGORIES;
});

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: { category?: string; subCategory?: string; product?: string; collections?: string } | undefined) => {
    let products = MOCK_PRODUCTS;

    if (params) {
      const { category, subCategory, product, collections } = params;

      // Filter by category
      if (category) {
        products = products.filter(
          (p) =>
            p.category &&
            p.category.trim().toLowerCase() === category.trim().toLowerCase()
        );
      }

      // Filter by subcategory
      if (subCategory) {
        products = products.filter(
          (p) =>
            p.subCategory &&
            p.subCategory.trim().toLowerCase() === subCategory.trim().toLowerCase()
        );
      }

      // Filter by product type
      if (product) {
        products = products.filter(
          (p) =>
            p.product &&
            p.product.trim().toLowerCase() === product.trim().toLowerCase()
        );
      }

      // Filter by collections
      if (collections) {
        products = products.filter(
          (p) =>
            p.collections &&
            p.collections.trim().toLowerCase() === collections.trim().toLowerCase()
        );
      }
    }

    return products;
  }
);
export const fetchNewArrivals = createAsyncThunk('products/fetchNewArrivals', async () => {
  // Just return the first 5 mock products as new arrivals
  return MOCK_PRODUCTS.slice(0, 5);
});

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: string, { rejectWithValue }) => {
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    if (product) {
      return {
        ...product,
        isWishlisted: product.isWishlisted || false,
        reviews: product.reviews || Math.floor(Math.random() * 200) + 50,
      };
    }
    return rejectWithValue('Product not found');
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
setFilters: (
  state,
  action: PayloadAction<{
    filters: Filters;
    searchQuery: string;
    category?: string;
  }>
) => {
  const { filters, searchQuery, category } = action.payload;
  let filtered = [...state.products];

  // Apply category filter
  if (category || filters.categories.length > 0) {
    const activeCategory = category || filters.categories[0];
    filtered = filtered.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  // Apply subcategory filter
  if (filters.subCategories && filters.subCategories.length > 0) {
    filtered = filtered.filter(
      (product) =>
        product.subCategory &&
      filters.subCategories &&
        filters.subCategories.includes(product.subCategory.toLowerCase())
    );
  }

  // Apply product filter
  if (filters.products && filters.products.length > 0) {
    filtered = filtered.filter(
      (product) =>
        product.product &&
        filters.products &&
        filters.products.includes(product.product.toLowerCase())
    );
  }

  // Apply collections filter
  if (filters.collections && filters.collections.length > 0) {
    filtered = filtered.filter(
      (product) =>
        product.collections &&
      filters.collections &&
        filters.collections.includes(product.collections.toLowerCase())
    );
  }

  // Apply material filter
  if (filters.materials.length > 0) {
    filtered = filtered.filter(
      (product) =>
        product.material &&
        filters.materials.includes(product.material.toLowerCase())
    );
  }

  // Apply price range filter
  if (filters.priceRange && filters.priceRange.min !== undefined && filters.priceRange.max !== undefined) {
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange!.min &&
        product.price <= filters.priceRange!.max
    );
  }

  // Apply search query filter
  if (searchQuery) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description &&
          product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  state.filteredProducts = filtered;
  state.currentPage = 1;
  state.totalPages = Math.ceil(filtered.length / 6);
  state.filteredProducts = filtered.slice(0, 6);
},
    setSort: (state, action: PayloadAction<'featured' | 'price-low' | 'price-high' | 'rating'>) => {
      const sortBy = action.payload;
      let sortedProducts = [...state.filteredProducts];

      if (sortBy === 'price-low') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating);
      } else {
        sortedProducts = [...state.products].filter(p => state.filteredProducts.some(fp => fp.id === p.id));
      }

      state.filteredProducts = sortedProducts;
      state.currentPage = 1;
      state.totalPages = Math.ceil(sortedProducts.length / 6);
      state.filteredProducts = sortedProducts.slice(0, 6);
    },
    toggleWishlist: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.products = state.products.map(p =>
        p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p
      );
      state.filteredProducts = state.filteredProducts.map(p =>
        p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p
      );
      state.newArrivals = state.newArrivals.map(p =>
        p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p
      );
      if (state.product && state.product.id === productId) {
        state.product = { ...state.product, isWishlisted: !state.product.isWishlisted };
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      const itemsPerPage = 6;
      const start = (state.currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      state.filteredProducts = state.products.slice(start, end);
      state.totalPages = Math.ceil(state.products.length / itemsPerPage);
    },
    filterByCategory: (state, action: PayloadAction<string[]>) => {
      const categories = action.payload;
      state.currentPage = 1;
      state.filteredProducts = categories.length
        ? state.products.filter(product => categories.includes(product.category))
        : state.products;
      state.totalPages = Math.ceil(state.filteredProducts.length / 6);
      state.filteredProducts = state.filteredProducts.slice(0, 6);
    },
    sortByPrice: (state, action: PayloadAction<'price-asc' | 'price-desc'>) => {
      state.currentPage = 1;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        action.payload === 'price-asc' ? a.price - b.price : b.price - a.price
      );
      state.totalPages = Math.ceil(state.filteredProducts.length / 6);
      state.filteredProducts = state.filteredProducts.slice(0, 6);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      .addCase(fetchProducts.pending, state => {
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
        state.products = MOCK_PRODUCTS;
        state.filteredProducts = MOCK_PRODUCTS.slice(0, 6);
        state.totalPages = Math.ceil(MOCK_PRODUCTS.length / 6);
      })
      .addCase(fetchNewArrivals.pending, state => {
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
        state.newArrivals = MOCK_PRODUCTS.slice(0, 5);
      })
      .addCase(fetchProductById.pending, state => {
        state.loading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFilters, setSort, toggleWishlist, setPage, filterByCategory, sortByPrice } = productSlice.actions;
export default productSlice.reducer;