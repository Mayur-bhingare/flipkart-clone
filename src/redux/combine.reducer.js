import { combineReducers } from "@reduxjs/toolkit";
import CategorySlice from "./category.slice";
import ProductSlice from "./products.slice";

let reducer = combineReducers({
  category: CategorySlice.reducer,

  product: ProductSlice.reducer,
});

export default reducer;
