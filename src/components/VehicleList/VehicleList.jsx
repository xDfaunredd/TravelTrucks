import { useDispatch, useSelector } from "react-redux";
import VehicleItem from "../VehicleItem/VehicleItem";
import s from "./VehicleList.module.css";
import { setPage } from "../../redux/filters/filterSlise";

const VehicleList = ({ results }) => {
  const dispatch = useDispatch();
  const { totalCamps, page } = useSelector((state) => state.filters);
  const maxPages = totalCamps / 4 > page;
  console.log(totalCamps, page);

  return (
    <div className={s.vehicleContainer}>
      <ul className={s.list}>
        {results.map((result) => (
          <li key={result.id} className={s.item}>
            <VehicleItem camperInfo={result} />
          </li>
        ))}
      </ul>
      {maxPages && (
        <button className={s.loadMoreBtn} onClick={() => dispatch(setPage())}>
          Load more
        </button>
      )}
    </div>
  );
};

export default VehicleList;
