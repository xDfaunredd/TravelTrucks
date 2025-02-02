import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Catalog.module.css";
import Filters from "../../components/Filters/Filters";
import VehicleList from "../../components/VehicleList/VehicleList";
import { getCampers } from "../../redux/filters/filterOperations";
import { selectFavorites, selectFilters } from "../../redux/selectors";

const Catalog = () => {
  const dispatch = useDispatch();

  const { results, error, page, params } = useSelector(selectFilters);

  const { favoriteItems } = useSelector(selectFavorites);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getCampers({ params, page }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, page, params]);

  const sortedResults = [...results].sort((a, b) => {
    const isAFavorite = favoriteItems.includes(a.id);
    const isBFavorite = favoriteItems.includes(b.id);

    if (isAFavorite && !isBFavorite) return -1;
    if (!isAFavorite && isBFavorite) return 1;
    return 0;
  });

  return (
    <div className={`${"container"} ${s.catalogContainer}`}>
      <Filters />

      {error && <p className={s.notFound}>There are no such items!</p>}

      <VehicleList results={sortedResults} />
    </div>
  );
};

export default Catalog;
