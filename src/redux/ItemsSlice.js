import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./itemsOperations";

const initialState = {
  items: [],
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default itemsSlice.reducer;
