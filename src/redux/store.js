import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combine.reducer";

let store = configureStore({
  reducer,
});

export default store;
