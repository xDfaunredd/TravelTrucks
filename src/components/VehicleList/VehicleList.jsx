import sprite from "../../assets/sprite.svg";
import s from "./VehicleList.module.css";

const VehicleList = ({ results }) => {
  return (
    <ul>
      {results.map((result) => (
        <li key={result.id}>
          <img src={`${result.gallery[0].original}`} alt="" />
          <h2>{result.name}</h2>
          <p>${result.price}</p>

          <p>
            <svg>
              <use></use>
            </svg>
            {`${result.rating} (${result.reviews.length} Reviews)`}
          </p>
          <p>
            {" "}
            <svg className={s.selectIcon}>
              <use href={`${sprite}#icon-location`}></use>
            </svg>{" "}
            {result.location}
          </p>
          <p>{result.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;
