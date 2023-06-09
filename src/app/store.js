import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import locationReducer from "../features/location/locationSlice";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    locations: locationReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
