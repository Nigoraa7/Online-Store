import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchResults: [],
    products: []
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const products = state.products;
      state.searchResults = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.price.toString().includes(searchTerm)
      );
    },
  },
});

export const { searchProducts } = searchSlice.actions;
export default searchSlice.reducer;
