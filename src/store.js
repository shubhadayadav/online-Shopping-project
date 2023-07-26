import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cartSlice/cartSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  legacy_createStore: {
    legacy_createStore:
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  },
});

export default Store;
