import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cartSlice";
import { productReducer } from "./features/productsSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
});