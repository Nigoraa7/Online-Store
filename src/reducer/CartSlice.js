import { createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteFromCart , getCart, calculateSubtotal, deleteAllFromCart } from '../../api/CardApi';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    subtotal: 0,
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);  
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.loading = false;
        
        state.items = state.items.filter(item => item.id !== action.meta.arg);
      })
      .addCase(deleteFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCart.fulfilled , (state ,action) =>
    {
      state.items= action.payload
    })
    .addCase(calculateSubtotal.pending, (state) => {
      state.loading = true;
    })
    .addCase(calculateSubtotal.fulfilled, (state, action) => {
      state.subtotal = action.payload;
      state.loading = false;
    })
    .addCase(calculateSubtotal.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    })
    .addCase(deleteAllFromCart.pending,(state,action)=>{
      state.loading = true;
    })
    .addCase(deleteAllFromCart.fulfilled,(state,action)=>{
      state.loading = false;
      state.items = [];
    })
    .addCase(deleteAllFromCart.rejected,(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    })
   
  },
});
// export const {increaseProduct,reduceProduct} = cartSlice
export default cartSlice.reducer;
