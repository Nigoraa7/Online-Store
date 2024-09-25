import { createSlice } from "@reduxjs/toolkit";
import { getProductByBrand } from "../../api/CardApi";


const initialState = {
    brand:[],
    isLoading: false
}

const BrandSlice = createSlice({
    name:'brand',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProductByBrand.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getProductByBrand.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.brand = action.payload;
        })
        .addCase(getProductByBrand.rejected,(state)=>{
            state.isLoading = false;
        })
    }
})

export default BrandSlice.reducer