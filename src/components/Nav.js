import logoLittleLemon from "../assets/logo-little-lemon.svg";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.flexNavContainer}>
      <img src={logoLittleLemon} alt="Little Lemon logo" />
      <ul className={styles.flexListContainer}>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/orderOnline">Order Online</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
