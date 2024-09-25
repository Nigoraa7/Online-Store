import { createSlice } from "@reduxjs/toolkit";
import { getSubCategory } from "../../api/CardApi";

const initialState = {
    subcategory:[],
    isLoading:false
}

const SubcategorySlice = createSlice({
    name:'subcategory',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getSubCategory.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getSubCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.subcategory = action.payload
        })
        .addCase(getSubCategory.rejected,(state)=>{
            state.isLoading = false;
        })
    }
})

export default SubcategorySlice.reducer