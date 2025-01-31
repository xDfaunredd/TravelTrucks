// Filters.js
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import s from "./Filters.module.css";
import {
  setLocation,
  toggleEquipment,
  toggleVehicleType,
} from "../../redux/filters/filterSlise.js";
import { applyFilters } from "../../utils/applyFilters.js";

const Filters = () => {
  const dispatch = useDispatch();
  const { location, equipment, vehicleType } = useSelector(
    (state) => state.filters
  );

  return (
    <div>
      <p className={s.filterType}>Location</p>
      <div className={s.selectWrapper}>
        <svg className={s.selectIcon}>
          <use href={`${sprite}#icon-location`}></use>
        </svg>
        <select
          value={location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
          className={s.customSelect}
        >
          <option value="">City</option>
          <option value="Kyiv">Kyiv, Ukraine</option>
          <option value="Lviv">Lviv, Ukraine</option>
          <option value="Odesa">Odesa, Ukraine</option>
          <option value="Kharkiv">Kharkiv, Ukraine</option>
        </select>
      </div>

      <p className={s.filterType}>Filters</p>

      <h2 className={s.vehicleType}>Vehicle equipment</h2>
      <ul className={s.list}>
        {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((item) => (
          <li
            key={item}
            onClick={() => {
              if (item === "AC" || item === "TV") {
                dispatch(toggleEquipment(item));
              } else {
                dispatch(toggleEquipment(item.toLowerCase()));
              }
            }}
            className={`${
              (
                item === "AC" || item === "TV"
                  ? equipment.includes(item)
                  : equipment.includes(item.toLowerCase())
              )
                ? s.selected
                : ""
            } ${s.item}`}
          >
            <svg width="20" height="20">
              <use href={`${sprite}#icon-${item.toLowerCase()}`}></use>
            </svg>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      <h2 className={s.vehicleType}>Vehicle type</h2>
      <ul className={s.list}>
        {["Van", "Fully integrated", "Alcove"].map((type) => {
          const vehicleTypeKey =
            type === "Fully integrated"
              ? "fullyIntegrated"
              : type.toLowerCase();

          return (
            <li
              key={type}
              onClick={() => dispatch(toggleVehicleType(vehicleTypeKey))}
              className={`${
                vehicleType.includes(vehicleTypeKey) ? s.selected : ""
              } ${s.item}`}
            >
              <svg width="20" height="20">
                <use
                  href={`${sprite}#icon-${vehicleTypeKey.replace(" ", "-")}`}
                ></use>
              </svg>
              <p>{type}</p>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => dispatch(applyFilters())}
        className={s.searchButton}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
