import { createSlice } from "@reduxjs/toolkit";
import { getCategoryById } from "../../api/CardApi";

const initialState ={
    categoryById:null,
    isLoading:false
}
const CategoryByIdSlice = createSlice({
    name:'categoryById',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCategoryById.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getCategoryById.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.categoryById = action.payload;
        })
        .addCase(getCategoryById.rejected,(state)=>{
            state.isLoading = false;
        })
    }
}) 

export default CategoryByIdSlice.reducer