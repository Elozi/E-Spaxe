// redux/slices/productSlice.ts
import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product,Filters, Category } from '../../interfaces';
import { API_URL,MOCK_PRODUCTS,CATEGORY_SUBCATEGORIES } from '../../constants';

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
  categories:[],
  filteredProducts: [],
  loading: false,
  product: null,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await axios.get<Product[]>(API_URL);
//   console.log('Fetched new arrivals:', response.data);
//   return response.data.map((p) => ({
//     ...p,
//     id: p.id.toString(),
//     isWishlisted: false,
//     reviews: Math.floor(Math.random() * 200) + 50,
//     material: ['cotton', 'polyester', 'leather', 'denim', 'silk', 'gold', 'silver'][Math.floor(Math.random() * 7)],
//     originalPrice: Math.random() > 0.7 ? p.price * 1.2 : undefined,
//   }));
// });
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_URL}/products?limit=0`);
//       return response.data.products.map((p: any) => ({
//         id: p.id.toString(),
//         name: p.title,
//         description: p.description,
//         price: p.price,
//         originalPrice: p.price * (1 + (p.discountPercentage ?? 0) / 100),
//         images: p.images,
//         image: p.thumbnail,
//         rating: p.rating,
//         reviews: p.rating && Math.floor(p.rating * 20),
//         isWishlisted: false,
//         category: p.category,
//         material: p.brand,
//         inStock: p.stock > 0,
//         features: [],
//         specifications: {},
//       }));
//     } catch (err) {
//       return rejectWithValue('Failed to fetch products');
//     }
//   }
// );
const apiCategoryMap: Record<string, string> = {
  jewelery: 'jewelery',
  'men\'s clothing': 'mens-shirts',
  'women\'s clothing': 'womens-dresses',
};

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/products/${id}`);
      const p = res.data;
      return {
        id: p.id.toString(),
        name: p.title,
        description: p.description,
        price: p.price,
        originalPrice: p.price * (1 + (p.discountPercentage ?? 0) / 100),
        images: p.images,
        image: p.thumbnail,
        rating: p.rating,
        reviews: p.rating && Math.floor(p.rating * 20),
        isWishlisted: false,
        category: p.category,
        material: p.brand,
        inStock: p.stock > 0,
        features: [],
        specifications: {},
      };
    } catch (err) {
      return rejectWithValue('Failed to fetch product');
    }
  }
);
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async (category?: string) => {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`);
//       if (!response.ok) throw new Error('Failed to fetch products from FakeStore API');
//       const data = await response.json();
//       // Combine with mock data for enrichment
//       const enrichedProducts = [...data, ...MOCK_PRODUCTS].map((prod, index) => ({
//         ...prod,
//         id: prod.id || `mock_${index}`, // Ensure unique IDs
//         image: prod.image || prod.images?.[0] || 'https://via.placeholder.com/150',
//         category: prod.category || prod.category || 'Uncategorized',
//         material: prod.material || 'Unknown',
//         rating: prod.rating?.rate || Math.random() * 5,
//       }));
//       return enrichedProducts;
//     } catch (error) {
//       console.error('FakeStore API error, falling back to mock data:', error);
//       return MOCK_PRODUCTS.map((prod, index) => ({
//         ...prod,
//         id: prod.id || `mock_${index}`, // Ensure unique IDs
//         image: prod.image || prod.images?.[0] || 'https://via.placeholder.com/150',
//       }));
//     }
//   }
// );
// Map API categories to internal slugs


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category?: string) => {
    // Fetch API products
    let apiProducts: Product[] = [];
    try {
      const response = await axios.get(category ? `${API_URL}/category/${category}` : API_URL);
      apiProducts = response.data.map((item: any) => ({
        id: item.id.toString(),
        name: item.title,
        price: item.price,
        originalPrice: item.price * 1.2, // Simulate original price
        image: item.image,
        images: [item.image],
        rating: item.rating.rate,
        reviews: item.rating.count,
        isWishlisted: false,
        category: apiCategoryMap[item.category] || item.category,
        material: 'Unknown', // API doesn't provide material
        description: item.description || '',
        inStock: true,
        features: [],
        specifications: {},
        relatedProducts: [],
      }));
    } catch (error) {
      console.error('API fetch failed, using mock data');
    }

    // Combine with mock products
    const mockProducts = MOCK_PRODUCTS;
    const allProducts = [...apiProducts, ...mockProducts];

    // Filter by category if provided
    if (category) {
      const subcategories = CATEGORY_SUBCATEGORIES[category as keyof typeof CATEGORY_SUBCATEGORIES] || [];
      return allProducts.filter(
        product =>
          product.category === category ||
          subcategories.includes(product.category) ||
          product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    return allProducts;
  }
);

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const response = await axios.get(`${API_URL}/categories`);
  const apiCategories = response.data.map((cat: string, index: number) => ({
    id: index + 1,
    name: cat.charAt(0).toUpperCase() + cat.slice(1),
    slug: apiCategoryMap[cat] || cat.toLowerCase().replace(/ /g, '-'),
  }));
  return apiCategories;
});

// export const fetchCategories = createAsyncThunk(
//   'products/fetchCategories',
//   async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products/categories');
//       if (!response.ok) throw new Error('Failed to fetch categories from FakeStore API');
//       const categories = await response.json();
//       return categories.map((cat: string) => ({ slug: cat, name: cat }));
//     } catch (error) {
//       console.error('FakeStore API categories error, using mock categories:', error);
//       // Derive categories from MOCK_PRODUCTS as fallback
//       const mockCategories = [...new Set(MOCK_PRODUCTS.map((p) => p.category))].map((cat) => ({
//         slug: cat.toLowerCase().replace(/ /g, '-'),
//         name: cat,
//       }));
//       return mockCategories;
//     }
//   }
// );
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



// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//      setFilters(state, action: PayloadAction<{ filters: Filters; searchQuery?: string; category?: string }>) {
//       const { filters, searchQuery, category } = action.payload;
//       state.filteredProducts = state.products.filter((product) => {
//         const matchesSearch = searchQuery
//           ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
//           : true;
//         const matchesCategory = category ? product.category === category : filters.categories.length === 0 || filters.categories.includes(product.category);
//         const matchesMaterial = filters.materials.length === 0 || filters.materials.includes(product.material);
//         const matchesPrice = !filters.priceRange || (product.price >= filters.priceRange.min && product.price <= filters.priceRange.max);
//         return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
//       });
//     },
//     setSort(state, action: PayloadAction<'featured' | 'price-low' | 'price-high' | 'rating'>) {
//       state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
//         switch (action.payload) {
//           case 'price-low':
//             return a.price - b.price;
//           case 'price-high':
//             return b.price - a.price;
//           case 'rating':
//             return b.rating - a.rating;
//           default:
//             return 0;
//         }
//       });
//     },
    // toggleWishlist(state, action: PayloadAction<string>) {
    //   const productId = action.payload;
    //   state.products = state.products.map((p) =>
    //     p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p,
    //   );
    //   state.filteredProducts = state.filteredProducts.map((p) =>
    //     p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p,
    //   );
    //   state.newArrivals = state.newArrivals.map((p) =>
    //     p.id === productId ? { ...p, isWishlisted: !p.isWishlisted } : p,
    //   );
    // },
//     setPage(state, action: { payload: number }) {
//       state.currentPage = action.payload;
//       const itemsPerPage = 6;
//       const start = (state.currentPage - 1) * itemsPerPage;
//       const end = start + itemsPerPage;
//       state.filteredProducts = state.products.slice(start, end);
//       state.totalPages = Math.ceil(state.products.length / itemsPerPage);
//     },
//     filterByCategory(state, action: { payload: string[] }) {
//       const categories = action.payload;
//       state.currentPage = 1;
//       state.filteredProducts = categories.length
//         ? state.products.filter((product) => categories.includes(product.category))
//         : state.products;
//       state.totalPages = Math.ceil(state.filteredProducts.length / 6);
//       state.filteredProducts = state.filteredProducts.slice(0, 6);
//     },
//     sortByPrice(state, action: { payload: 'price-asc' | 'price-desc' }) {
//       state.currentPage = 1;
//       state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
//         action.payload === 'price-asc' ? a.price - b.price : b.price - a.price,
//       );
//       state.totalPages = Math.ceil(state.filteredProducts.length / 6);
//       state.filteredProducts = state.filteredProducts.slice(0, 6);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//         state.filteredProducts = action.payload.slice(0, 6);
//         state.totalPages = Math.ceil(action.payload.length / 6);
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch products';
//       })
//       .addCase(fetchNewArrivals.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchNewArrivals.fulfilled, (state, action) => {
//         state.loading = false;
//         state.newArrivals = action.payload;
//       })
//       .addCase(fetchNewArrivals.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch new arrivals';
//       })
//        .addCase(fetchCategories.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
//         state.loading = false;
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch categories';
//       })
//       .addCase(fetchProductById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.product = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.product = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
      
//   },
// });

// export const {setFilters, setSort, toggleWishlist, setPage, filterByCategory, sortByPrice } = productSlice.actions;
// export default productSlice.reducer;

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
        const subcategories = CATEGORY_SUBCATEGORIES[activeCategory as keyof typeof CATEGORY_SUBCATEGORIES] || [];
        filtered = filtered.filter(
          product =>
            product.category === activeCategory ||
            subcategories.includes(product.category) ||
            product.category.toLowerCase().includes(activeCategory.toLowerCase())
        );
      }

      // Apply search query
     if (searchQuery) {
        filtered = filtered.filter(
          product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase())) // Check if description exists
        );
      }

      // Apply material filter
      if (filters.materials.length > 0) {
        filtered = filtered.filter(product => filters.materials.includes(product.material.toLowerCase()));
      }

      // Apply price range filter
    if (filters.priceRange != null) {
  const { min, max } = filters.priceRange;
  filtered = filtered.filter(
    product => product.price >= min && product.price <= max
  );
}


      state.filteredProducts = filtered;
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
        // Default to featured (original order)
        sortedProducts = [...state.products].filter(p => state.filteredProducts.some(fp => fp.id === p.id));
      }

      state.filteredProducts = sortedProducts;
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
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
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
        // Fallback to mock products
        state.products = MOCK_PRODUCTS;
        state.filteredProducts = MOCK_PRODUCTS;
      });
  },
});

export const { setFilters, setSort, toggleWishlist } = productSlice.actions;
export default productSlice.reducer;