// redux/slices/newsletterSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface NewsletterState {
  email: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: NewsletterState = {
  email: null,
  loading: false,
  error: null,
};

export const subscribeNewsletter = createAsyncThunk(
  'newsletter/subscribe',
  async (email: string, { rejectWithValue }) => {
    try {
      // Replace with your newsletter API endpoint
      await axios.post('https://api.example.com/newsletter', { email });
      return email;
    } catch (error) {
      return rejectWithValue('Failed to subscribe to newsletter');
    }
  },
);

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(subscribeNewsletter.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.email = action.payload;
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsletterSlice.reducer;