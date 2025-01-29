import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import filtersReducer from "./filters/filterSlise.js";
export const store = configureStore({
  reducer: {
    items: itemsSlice,
    filters: filtersReducer,
  },
});
