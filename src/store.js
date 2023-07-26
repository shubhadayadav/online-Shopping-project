import { configureStore } from "@reduxjs/toolkit";
// import counterslice from "../../Counter/counterslice";
import cartReducer from "../cartSlice/cartSlice";

const Store = configureStore({
  reducer: {
    // counterChange: counterslice,
    cart: cartReducer,
  },

  legacy_createStore: {
    legacy_createStore:
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  },
});

export default Store;
