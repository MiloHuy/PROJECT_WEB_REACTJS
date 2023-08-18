import { configureStore, isAsyncThunkAction } from '@reduxjs/toolkit'
import sliderSliceReducer from '../features/Slices/SliceSlider'
import filterProductSlice from '../features/Slices/FilterProduct'
import cartReducer from '../features/Slices/CartSlice'
import authSliceReducer from '../features/Slices/authSlice'
import apiSliceReducer from '../features/Slices/apiSlice'

export const store = configureStore({
  reducer: {
    slider : sliderSliceReducer,
    products: filterProductSlice, 
    cart: cartReducer,
    user: authSliceReducer,
    apislice: apiSliceReducer,
  },
},isAsyncThunkAction)