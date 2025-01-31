import { useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";
import sprite from "../../assets/sprite.svg";
import s from "./Features.module.css";

const Features = () => {
  const campers = useSelector(selectItems);

  const features = Object.entries(campers || {})
    .filter(([key, value]) =>
      key === "transmission" ? value === "automatic" : value === true
    )
    .map(([key, value]) => (key === "transmission" ? value : key));

  return (
    <div className={s.container}>
      <ul className={s.features}>
        {features.map((item, i) => (
          <li key={i} className={s.feature}>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-${item.toLowerCase()}`} />
            </svg>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
      <h3 className={s.title}>Vehicle details</h3>

      <div className={s.details}>
        <ul className={s.detailList}>
          <li className={s.detailItem}>Form</li>
          <li className={s.detailValue}>
            {campers?.form.charAt(0).toUpperCase() + campers?.form.slice(1)}
          </li>
        </ul>
        <ul className={s.detailList}>
          <li className={s.detailItem}>Length</li>
          <li className={s.detailValue}>{campers?.length}</li>
        </ul>
        <ul className={s.detailList}>
          <li className={s.detailItem}>Width</li>
          <li className={s.detailValue}>{campers?.width}</li>
        </ul>
        <ul className={s.detailList}>
          <li className={s.detailItem}>Height</li>
          <li className={s.detailValue}>{campers?.height}</li>
        </ul>
        <ul className={s.detailList}>
          <li className={s.detailItem}>Tank</li>
          <li className={s.detailValue}>{campers?.tank}</li>
        </ul>
        <ul className={s.detailList}>
          <li className={s.detailItem}>Consumption</li>
          <li className={s.detailValue}>{campers?.consumption}</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
