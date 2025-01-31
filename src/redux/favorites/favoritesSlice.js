import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [], // масив обраних ID
};

const favoritesSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favoriteItems.includes(id)) {
        state.favoriteItems = state.favoriteItems.filter((item) => item !== id);
      } else {
        state.favoriteItems.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
