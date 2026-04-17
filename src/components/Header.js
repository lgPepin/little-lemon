import Nav from "./Nav";
import heroSectionPicture from "../assets/hero_section_picture.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.heroSection}>
        <div className={styles.textHeroSection}>
          <h2>Little Lemon</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipies served with a modern twist
          </p>
          <button>Reserve a table</button>
        </div>
        <img
          src={heroSectionPicture}
          alt="A dish at the Little Lemon restaurant"
        />
      </div>
    </header>
  );
};

export default Header;
