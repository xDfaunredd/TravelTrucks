import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const serializedState = localStorage.getItem("favorites");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error("Error loading favorites from localStorage", e);
    return [];
  }
};

const saveFavorites = (favorites) => {
  try {
    const serializedState = JSON.stringify(favorites);
    localStorage.setItem("favorites", serializedState);
  } catch (e) {
    console.error("Error saving favorites to localStorage", e);
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteItems: loadFavorites(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const itemId = action.payload;
      const currentFavorites = state.favoriteItems;

      if (currentFavorites.includes(itemId)) {
        state.favoriteItems = currentFavorites.filter((id) => id !== itemId);
      } else {
        state.favoriteItems = [...currentFavorites, itemId];
      }

      saveFavorites(state.favoriteItems);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
