import { createSlice } from '@reduxjs/toolkit';
import { getProductById } from '../../api/CardApi';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: null,
    productsList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; 
      });
  },
});

export default productSlice.reducer;
