import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      //  state.cartItems  = state.cartItems.filter(
      //   (item) => Number(item.id) !== Number(id)
      // );
      const itemFoundAtIndex = state.cartItems.findIndex(
        (item) => item.id === id
      );
      state.cartItems.splice(itemFoundAtIndex, 1);
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
