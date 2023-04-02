import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategorie = createAsyncThunk(
  "categorieSlice/fetchCategorie",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }
);

export const categorieSlice = createSlice({
  initialState: [],
  name: "CategorieSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategorie.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { extraReducers } = categorieSlice.actions;
export default categorieSlice.reducer;
