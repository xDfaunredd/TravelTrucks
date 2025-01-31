import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import s from "./VehicleItem.module.css";

import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { Link } from "react-router-dom";

const VehicleItem = ({ camperInfo }) => {
  const { gallery, name, price, id, rating, reviews, location, description } =
    camperInfo;

  const { favoriteItems } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const isFavorite = favoriteItems?.includes(id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
    console.log(favoriteItems);
  };

  const features = Object.entries(camperInfo)
    .filter(([key, value]) =>
      key === "transmission" ? value === "automatic" : value === true
    )
    .map(([key, value]) => (key === "transmission" ? value : key));

  return (
    <div className={s.card}>
      <img className={s.image} src={gallery[0].thumb} alt={name} />
      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.title}>{name}</h2>
          <div className={s.priceSection}>
            <p className={s.price}>&euro;{price}</p>
            <button className={s.iconHeartBtn} onClick={handleFavoriteClick}>
              {isFavorite ? (
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-red-heart`} />
                </svg>
              ) : (
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-black-heart`} />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={s.details}>
          <p className={s.rating}>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            {`${rating} (${reviews.length} Reviews)`}
          </p>
          <p className={s.location}>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-location`} />
            </svg>
            {`${location.split(",").pop()}, Ukraine`}
          </p>
        </div>
        <p className={s.description}>
          {description.length > 60
            ? description.slice(0, 60) + "..."
            : description}
        </p>
        <ul className={s.features}>
          {features.map((item, i) => (
            <li className={s.feature} key={i}>
              <svg className={s.icon}>
                <use href={`${sprite}#icon-${item.toLowerCase()}`} />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <Link className={s.showMoreButton} to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default VehicleItem;
