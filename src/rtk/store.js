import { configureStore } from "@reduxjs/toolkit";
import cArtSlice from "./slice/cart-slice";
import categorieSlice from "./slice/categorie-slice";

import productsSlice from "./slice/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cArtSlice,
    categorie: categorieSlice,
  },
});
