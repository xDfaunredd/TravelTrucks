import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./filterOperations";

const initialState = {
  location: "",
  equipment: [],
  vehicleType: "",
  params: "",
  page: 1,
  results: [],
  totalCamps: 0,
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const item = action.payload;
      state.equipment.includes(item)
        ? (state.equipment = state.equipment.filter((eq) => eq !== item))
        : state.equipment.push(item);
    },
    toggleVehicleType: (state, action) => {
      state.vehicleType =
        state.vehicleType === action.payload ? "" : action.payload;
    },
    setPage: (state) => {
      state.page += 1;
    },
    setParams: (state, action) => {
      state.results = [];
      state.page = 1;
      state.params = action.payload;
      console.log(state.params);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;

        state.page > 1
          ? (state.results = [...state.results, ...action.payload.items])
          : (state.results = action.payload.items);

        state.totalCamps = action.payload.total;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setLocation,
  toggleEquipment,
  toggleVehicleType,
  setParams,
  setPage,
} = filterSlice.actions;
export default filterSlice.reducer;
