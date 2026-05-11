import { Link } from "react-router-dom";
import bigLogoLittleLemon from "../assets/big-logo-little-lemon.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.gridFooterContainer}>
      <img src={bigLogoLittleLemon} alt="Big logo of Little Lemon restaurant" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="booking">Booking table</Link>
        </li>
        <li>
          <Link to="orderOnline">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <ul>
        <li>Adress: 1124 cooking street, Chicago</li>
        <li>Phone number: 1-775-643</li>
        <li>Email: littlelemonrestaurant@contact.com</li>
      </ul>
      <div>
        <h4>Find Little Lemon on:</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://x.com">X</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
