import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors";
import sprite from "../../assets/sprite.svg";
import s from "./Reviews.module.css";

const Reviews = () => {
  const { camper } = useSelector(selectCamper);

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <svg className={s.icon} key={i}>
          <use
            href={`${sprite}#${i < rating ? "icon-star" : "icon-star-gray"}`}
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div>
      <ul className={s.reviewList}>
        {camper?.reviews?.map((item, i) => (
          <li key={i} className={s.reviewItem}>
            <div className={s.reviewContent}>
              <div className={s.avatar}>{item?.reviewer_name[0]}</div>
              <div className={s.reviewContentContainer}>
                <h3 className={s.reviewerName}>{item?.reviewer_name}</h3>
                <div className={s.stars}>
                  {renderStars(item?.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={s.comment}>{item?.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
