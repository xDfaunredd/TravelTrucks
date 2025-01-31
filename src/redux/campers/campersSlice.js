import { createSlice } from "@reduxjs/toolkit";
import { fetchICampersById } from "./campersOps";

const initialState = {
  camper: {},
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchICampersById.fulfilled, (state, action) => {
        state.camper = action.payload;
        console.log(state.camper);
      })
      .addCase(fetchICampersById.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
