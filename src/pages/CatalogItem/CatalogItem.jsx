import { NavLink, Outlet, useParams } from "react-router-dom";
import s from "./CatalogItem.module.css";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchICampersById } from "../../redux/campers/campersOps";

import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const CatalogItem = () => {
  const { catalogId } = useParams();
  const dispatch = useDispatch();

  const campers = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchICampersById(catalogId));
  }, [catalogId, dispatch]);

  return (
    <div className={`${s.catalogItemContainer} container`}>
      <div>
        <div className={s.infoBar}>
          <h2 className={s.title}>{campers?.name}</h2>
          <div className={s.details}>
            <p className={s.rating}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-star`} />
              </svg>
              {`${campers?.rating} (${campers?.reviews?.length} Reviews)`}
            </p>
            <p className={s.location}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-location`} />
              </svg>
              {`${campers?.location?.split(",").pop()}, Ukraine`}
            </p>
          </div>
        </div>
        <p className={s.price}>&euro;{` ${campers?.price} `}</p>

        {/* Галерея */}
        <ul className={s.gallery}>
          {campers?.gallery?.map((item, i) => (
            <li key={i} className={s.galleryItem}>
              <img className={s.image} src={item.thumb} alt={"camper"} />
            </li>
          ))}
        </ul>

        <p className={s.description}>{campers?.description}</p>

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
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
