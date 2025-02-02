import { createSlice } from "@reduxjs/toolkit";
import { fetchICampersById } from "./campersOps";

const initialState = {
  camper: {},
  error: null,
  isLoading: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchICampersById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.camper = action.payload;
      })
      .addCase(fetchICampersById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchICampersById.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
