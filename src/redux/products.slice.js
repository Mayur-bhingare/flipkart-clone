import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: [],
    productDetail: null,
  },
  reducers: {
    saveProducts: (state, action) => {
      state.products = action.payload;
    },
    saveProductDetail: (state, action) => {
      if (action.payload.length == 0) {
        state.productDetail = null;
      } else {
        state.productDetail = action.payload[0];
      }
    },
  },
});
export default ProductSlice;
export const { saveProducts, saveProductDetail } = ProductSlice.actions;
