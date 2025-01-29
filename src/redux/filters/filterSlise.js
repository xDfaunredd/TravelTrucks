import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "kyiv", // Початкове значення локації
  equipment: [], // Поки що без вибраного обладнання
  vehicleType: [], // Поки що без вибраного типу транспорту
  results: [], // Пошукові результати
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload; // Оновлюємо локацію
    },
    toggleEquipment: (state, action) => {
      const index = state.equipment.indexOf(action.payload);
      if (index === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    toggleVehicleType: (state, action) => {
      if (state.vehicleType.length > 0) {
        state.vehicleType = [];
      }
      const index = state.vehicleType.indexOf(action.payload);
      if (index === -1) {
        state.vehicleType.push(action.payload);
      } else {
        state.vehicleType.splice(index, 1);
      }
    },
    setResults: (state, action) => {
      state.results = action.payload; // Оновлюємо результати пошуку
    },
  },
});

export const { setLocation, toggleEquipment, toggleVehicleType, setResults } =
  filtersSlice.actions;
export default filtersSlice.reducer;
