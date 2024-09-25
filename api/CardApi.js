import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { axiosRequest } from '../src/utils/axiosRequest'


export const GetCard = createAsyncThunk("card/GetCard",async()=>{
    try {
        const {data} = await axios.get('http://135.181.152.249:8072/Product/get-products') 
        return data?.data?.products
    } catch (error) {
        console.error(error);
    }
})

export const getProductById = createAsyncThunk('product/getProductById',async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`http://135.181.152.249:8072/Product/get-product-by-id?id=${id}`);
        if (response.data?.data) {
          return response.data.data;
        } else {
          return rejectWithValue('Product not found');
        }
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );

  export const addToCart = createAsyncThunk('cart/addToCart',async (product, { rejectWithValue }) => {
      try
      {
        console.log(product)
        const response = await axiosRequest.post(`Cart/add-product-to-cart?id=${product}`)
        console.log(response)
        return response.data.data
      }
      catch (error)
      {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteFromCart = createAsyncThunk('cart/deleteFromCart',
    async (product,{rejectWithValue})=>{
      try {
        const response = await axiosRequest.delete(`Cart/delete-product-from-cart?id=${product}`)
        return response.data
      }
      catch {
        return rejectWithValue(error.message);
      }
    }
  )

  export const getCart = createAsyncThunk("cart/getCart", async () =>{
  try
  {
    let data = await axiosRequest.get("Cart/get-products-from-cart")
    console.log(data.data.data[0].productsInCart)
    return data.data.data[0].productsInCart
  }
  catch(error)
  {
    console.log(error)
  }
})

export const calculateSubtotal = createAsyncThunk('cart/calculateSubtotal',async (items) => {
    return items.reduce((total, item) => total + (item.product.price * item.product.quantity), 0);
  }
);

export const deleteAllFromCart = createAsyncThunk('cart/deleteAllFromCart',async(product,{rejectWithValue})=>{
  try {
    const response = await axiosRequest.delete('Cart/clear-cart')
    return response.data
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const plusQuantity = createAsyncThunk("counter/plusQuantity", async ( id, {dispatch}) => {
  try {
    const { data } = await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`)
    dispatch(getCart());
    return data
  } catch (error) {
    console.error(error);
  }
} )


export const minusQuantity = createAsyncThunk("counter/minusQuantity", async ( id, {dispatch}) => {
  try {
    const { data } = await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`)
    dispatch(getCart());
    return data
  } catch (error) {
    console.error(error);
  }
} )

export const getCategory = createAsyncThunk('category/getCategory',async()=>{
  try {
    const {data} = await axiosRequest.get('/Category/get-categories')
    return data
  } catch (error) {
    console.log(error);
  }
})

export const getCategoryById = createAsyncThunk('categoryById/getCategoryById',async (id, { rejectWithValue }) => {
    try {
      const response = await axiosRequest.get(`Category/get-category-by-id?id=${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getProductByBrand = createAsyncThunk('brand/getProductByBrand',async(id,{rejectWithValue})=>{
  try {
    console.log(id)
    const response = await axiosRequest.get(`Product/get-products?BrandId=${id}`)
    // console.log(response.data.data.products)
    return response.data.data.products
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message);
  }
})


// export const fetchProducts = createAsyncThunk('products/fetchProducts',async () => {
//   try {
//     const response = await axios.get('http://135.181.152.249:8072/Product/get-products');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
//   }
// );




  

  
