import styles from "./Chicago.module.css";
import chicagoPicture from "../assets/chicago_picture.jpg";

const Chicago = () => {
  return (
    <div className={styles.chicagoContainer}>
      <div class={styles.chicagoTextContainer}>
        <h2 className={styles.h2TextChicago}>
          Little Lemon Restaurant: A family story
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          pariatur sequi optio quidem temporibus? Eveniet distinctio neque
          accusantium voluptates quas pariatur ratione totam corrupti voluptatem
          repudiandae quibusdam eum suscipit consequuntur, tempora temporibus
          tempore quo laudantium eligendi accusamus, soluta iusto! Ut nihil
          impedit cumque fugit itaque eligendi veritatis mollitia totam sequi?
        </p>
      </div>
      <img
        src={chicagoPicture}
        alt="little lemon restaurant"
        className={styles.imgChicago}
      />
    </div>
  );
};

export default Chicago;
