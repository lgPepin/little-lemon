import bigLogoLittleLemon from "../assets/big-logo-little-lemon.png";

const Footer = () => {
  return (
    <footer>
      <img src={bigLogoLittleLemon} alt="Big logo of Little Lemon restaurant" />
      <ul>
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
          <a href="/reservation">Reservation</a>
        </li>
        <li>
          <a href="/orderOnline">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <ul>
        <li>Adress: 1124 cooking street, Chicago</li>
        <li>Phone number: 1-775-643</li>
        <li>Email: littlelemonrestaurant@contact.com</li>
      </ul>
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
    </footer>
  );
};

export default Footer;
