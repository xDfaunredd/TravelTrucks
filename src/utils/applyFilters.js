import { setParams } from "../redux/filters/filterSlise";

export const applyFilters = () => (dispatch, getState) => {
  const { location, vehicleType, equipment } = getState().filters;
  const params = new URLSearchParams();

  if (equipment.length) {
    equipment.forEach((item) => {
      if (item === "automatic") {
        params.append("transmission", item);
      } else {
        params.append(item, true);
      }
    });
  }

  if (vehicleType) {
    params.append("form", vehicleType);
  }

  if (location) {
    params.append("location", `Ukraine, ${location}`);
  }

  console.log(params);
  dispatch(setParams(params.toString()));
};
