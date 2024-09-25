import { createSlice } from "@reduxjs/toolkit";
import { GetCard} from "../../api/CardApi";

const initialState = {
    cards: [],
    isLoading: false,
}

const CardSlice = createSlice({
    name: 'cards',
    initialState,

    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetCard.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(GetCard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cards = action.payload;
            })
            .addCase(GetCard.rejected, (state) => {
                state.isLoading = false;
            })
    },
});




export default CardSlice.reducer;

