import { Link } from "react-router-dom";

import s from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={s.home}>
        <div className="container">
          <div className={s.content}>
            <div>
              <h1 className={s.title}>Campers of your dreams</h1>
              <p className={s.text}>
                You can find everything you want in our catalog
              </p>
            </div>
            <Link className={s.button} to="/catalog">
              View Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
