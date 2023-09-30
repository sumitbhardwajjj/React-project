import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./CartSlice";
import Productslice from './ProductSlice'

const store = configureStore({
   reducer:{
    Cart:Cartslice,
    Products:Productslice
   }
})

export default store