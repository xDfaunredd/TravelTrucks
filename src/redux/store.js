import { configureStore } from "@reduxjs/toolkit";
import campersSlice from "./campers/campersSlice.js";
import filtersReducer from "./filters/filterSlise.js";
import favoritesSlice from "./favorites/favoritesSlice.js";
export const store = configureStore({
  reducer: {
    campers: campersSlice,
    filters: filtersReducer,
    favorites: favoritesSlice,
  },
});
