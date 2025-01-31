import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./Catalog.module.css";

import Filters from "../../components/Filters/Filters";
import VehicleList from "../../components/VehicleList/VehicleList";
import { getCampers } from "../../redux/filters/filterOperations";

const Catalog = () => {
  const dispatch = useDispatch();
  // const items = useSelector(selectItems);
  const { results, error, isLoading, page, params } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getCampers({ params, page }));
        console.log({ params, page });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, page, params]);

  return (
    <div className={`${"container"} ${s.catalogContainer}`}>
      <Filters />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <VehicleList results={results} />
    </div>
  );
};

export default Catalog;
