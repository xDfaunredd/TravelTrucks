import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <h2>TravelTrucks</h2>
          <nav>
            <ul className={s.list}>
              <li>
                <NavLink to="/" className={buildLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/catalog" className={buildLinkClass}>
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
          <span className={s.cart}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
