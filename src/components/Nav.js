import logoLittleLemon from "../assets/logo-little-lemon.svg";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const getNavClass = ({ isActive }) => (isActive ? styles.active : "");

const Nav = () => {
  return (
    <nav className={styles.flexNavContainer}>
      <img src={logoLittleLemon} alt="Little Lemon logo" />
      <ul className={styles.flexListContainer}>
        <li>
          <NavLink to="/" end className={getNavClass}>
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getNavClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={getNavClass}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" className={getNavClass}>
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink to="/orderOnline" className={getNavClass}>
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="login" className={getNavClass}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
