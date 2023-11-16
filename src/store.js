import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userRducer,
    cart: cartReducer,
  },
});

export default store;
