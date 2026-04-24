import styles from "./CallToAction.module.css";
import heroSectionPicture from "../assets/hero_section_picture.png";

function CallToAction() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textHeroSection}>
        <h2 className={styles.h2TextHeroSection}>Little Lemon</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipies served with a modern twist
        </p>
        <button className={styles.buttonTextHeroSection}>
          Reserve a table
        </button>
      </div>
      <img
        className={styles.imgHeroSection}
        src={heroSectionPicture}
        alt="A dish at the Little Lemon restaurant"
      />
    </div>
  );
}

export default CallToAction;
