import { createSlice } from "@reduxjs/toolkit";

let CategorySlice = createSlice({
  name: "CategorySlice",
  initialState: {
    categories: [],
  },
  reducers: {
    saveCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default CategorySlice;
export const { saveCategories } = CategorySlice.actions;
