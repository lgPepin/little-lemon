import logoLittleLemon from "../assets/logo-little-lemon.svg";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.flexNavContainer}>
      <img src={logoLittleLemon} alt="Little Lemon logo" />
      <ul className={styles.flexListContainer}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/orderOnline">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
