import {configureStore} from '@reduxjs/toolkit'
import CardSlice from '../reducer/CardSlice'
import ProducSlice from '../reducer/ProductById'
import cartReducer from '../reducer/CartSlice'
import subtotalReducer from '../reducer/CardSlice'
import CategoryReducer from '../reducer/CategoryByIdSlice'
import BrandSlice from '../reducer/BrandSlice'
// import wishlistReducer from '../reducer/WishlistSlice'




export const store = configureStore({
    reducer: {
        cards:CardSlice,
        products:ProducSlice,
        cart: cartReducer,
        subtotal: subtotalReducer,
        categoryById: CategoryReducer,
        brand:BrandSlice,
        // wishlist: wishlistReducer
    }
})