import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../redux/itemsOperations";

import Filters from "../../components/Filters/Filters";

const Catalog = () => {
  const dispatch = useDispatch();
  // const items = useSelector(selectItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchItems());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Filters />
    </div>
  );
};

export default Catalog;
