import { useState, useEffect } from "react";
import styles from "./Specialization.module.css";

const data = [
  {
    promotionName: "20% Off on Chickenburger",
    promotionText: "Enjoy our delicious chickenburger with extra cheese",
  },
  {
    promotionName: "10% Off on drinks",
    promotionText: "Between 2pm to 5pm try all our drinks with 10% off",
  },
  {
    promotionName: "15% Off for 2 persons table",
    promotionText: "You are just two people, eat for 15% off in the whole menu",
  },
];

const Specialization = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className={styles.titlePromotion}>THIS WEEKS SPECIALS !!!</h2>
      <article className={styles.card}>
        <h2>{data[currentIndex].promotionName}</h2>
        <p>{data[currentIndex].promotionText}</p>
      </article>
    </>
  );
};

export default Specialization;
