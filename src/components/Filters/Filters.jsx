import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import s from "./Filters.module.css";
import {
  setLocation,
  setResults,
  toggleEquipment,
  toggleVehicleType,
} from "../../redux/filters/filterSlise";
import VehicleList from "../VehicleList/VehicleList";

const Filters = () => {
  const dispatch = useDispatch();
  const { location, equipment, vehicleType, results } = useSelector(
    (state) => state.filters
  );

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleEquipmentClick = (item) => {
    dispatch(toggleEquipment(item));
  };

  const handleVehicleTypeClick = (type) => {
    dispatch(toggleVehicleType(type));
  };

  const handleSearch = async () => {
    const params = {
      location: `Ukraine, ${location}`,
      // form: vehicleType[0],
      limit: 4, // Обмежуємо кількість результатів до 4
      page: 1, // Номер сторінки (можна змінювати для пагінації)
    };

    console.log(params);

    try {
      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        { params }
      );
      dispatch(setResults(response.data.items));
      console.log(response.data.items);
      // Використовуємо тільки items
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={`${"container"} ${s.catalogContainer}`}>
      <p className={s.filterType}>Location</p>
      <div className={s.selectWrapper}>
        <svg className={s.selectIcon}>
          <use href={`${sprite}#icon-location`}></use>
        </svg>
        <select
          value={location}
          onChange={handleLocationChange}
          className={s.customSelect}
        >
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
            onClick={() => handleEquipmentClick(item)}
            className={`${equipment.includes(item) ? s.selected : ""} ${
              s.item
            }`}
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
          // Для "Fully integrated" передаємо 'fullyIntegrated', для інших - у нижньому регістрі.
          const vehicleTypeKey =
            type === "Fully integrated"
              ? "fullyIntegrated"
              : type.toLowerCase();

          return (
            <li
              key={type}
              onClick={() => handleVehicleTypeClick(vehicleTypeKey)}
              className={`${
                vehicleType.includes(vehicleTypeKey) ? s.selected : ""
              } ${s.item}`}
            >
              <svg width="20" height="20">
                <use
                  href={`${sprite}#icon-${vehicleTypeKey
                    .toLowerCase()
                    .replace(" ", "-")}`}
                ></use>
              </svg>
              <p>{type}</p>
            </li>
          );
        })}
      </ul>

      <button onClick={handleSearch} className={s.searchButton}>
        Search
      </button>

      {/* Показ результатів */}
      {results.length > 0 ? (
        <VehicleList results={results} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default Filters;
