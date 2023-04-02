import { createSlice } from "@reduxjs/toolkit";
export const cArtSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const findClone = { ...action.payload, quantity: 1 };
        state.push(findClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cArtSlice.actions;
export default cArtSlice.reducer;
