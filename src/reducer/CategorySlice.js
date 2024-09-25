import { Category } from "@mui/icons-material";
import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../../api/CardApi";

const initialState = {
    category:[],
    isLoading:false
}

const CategorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategory.pending,(state,action)=>{
            state.isLoading = true;
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.category = action.payload;
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.isLoading = false;
        })
    }

})

export default CategorySlice.reducer