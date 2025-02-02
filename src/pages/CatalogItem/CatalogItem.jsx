import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./CatalogItem.module.css";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchICampersById } from "../../redux/campers/campersOps";
import clsx from "clsx";
import CamperForm from "../../components/CamperForm/CamperForm";
import { Rings } from "react-loader-spinner";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const CatalogItem = () => {
  const { catalogId } = useParams();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.campers);

  const { camper } = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchICampersById(catalogId));
  }, [catalogId, dispatch]);

  return (
    <>
      {isLoading ? (
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
      ) : (
        <div className={`${s.catalogItemContainer} container`}>
          <div>
            <div className={s.infoBar}>
              <h2 className={s.title}>{camper?.name}</h2>
              <div className={s.details}>
                <p className={s.rating}>
                  <svg className={s.icon}>
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  {`${camper?.rating} (${camper?.reviews?.length} Reviews)`}
                </p>
                <p className={s.location}>
                  <svg className={s.icon}>
                    <use href={`${sprite}#icon-location`} />
                  </svg>
                  {`${camper?.location?.split(",").pop()}, Ukraine`}
                </p>
              </div>
            </div>
            <p className={s.price}>&euro;{` ${camper?.price}.00`}</p>

            <ul className={s.gallery}>
              {camper?.gallery?.map((item, i) => (
                <li key={i} className={s.galleryItem}>
                  <img className={s.image} src={item.thumb} alt={"camper"} />
                </li>
              ))}
            </ul>

            <p className={s.description}>{camper?.description}</p>

            <div>
              <ul className={s.navLinks}>
                <li>
                  <NavLink className={buildLinkClass} to="features">
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink className={buildLinkClass} to="reviews">
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <div className={s.camperFormContainer}>
                <Outlet />
                <CamperForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogItem;
