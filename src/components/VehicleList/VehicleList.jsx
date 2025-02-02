/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import VehicleItem from "../VehicleItem/VehicleItem";
import s from "./VehicleList.module.css";
import { setPage } from "../../redux/filters/filterSlise";
import { Rings } from "react-loader-spinner";
import { selectFilters } from "../../redux/selectors";

const VehicleList = ({ results }) => {
  const dispatch = useDispatch();

  const { totalCamps, page, isLoading } = useSelector(selectFilters);
  const maxPages = totalCamps / 4 > page;

  return (
    <div className={s.vehicleContainer}>
      <ul className={s.list}>
        {results.map((result) => (
          <li key={result.id} className={s.item}>
            <VehicleItem camperInfo={result} />
          </li>
        ))}
      </ul>
      {isLoading && (
        <Rings
          visible={true}
          height="80"
          width="80"
          color="#000"
          ariaLabel="rings-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
          }}
          wrapperClass=""
        />
      )}
      {maxPages && (
        <button className={s.loadMoreBtn} onClick={() => dispatch(setPage())}>
          Load more
        </button>
      )}
    </div>
  );
};

export default VehicleList;
