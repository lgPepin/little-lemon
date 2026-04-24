import styles from "./CustomersSay.module.css";

const data = [
  {
    customerName: "Paul",
    stars: "⭐⭐⭐⭐⭐",
    comment: "Excellent, very tasty and low price!",
  },
  {
    customerName: "Anna",
    stars: "⭐⭐⭐⭐",
    comment: "Beautiful restaurant, good service",
  },
  {
    customerName: "John",
    stars: "⭐⭐⭐⭐⭐",
    comment: "The cesar salad is just amazing!",
  },
];

const CustomersSay = () => {
  return (
    <div className={styles.customerComentsContainer}>
      <h2 className={styles.titleComment}>Your Comments</h2>
      <div className={styles.customerPostsContainer}>
        {data.map((customerComment, index) => (
          <article key={index} className={styles.customerPostCard}>
            <h3>{customerComment.customerName}</h3>
            <p>{customerComment.stars}</p>
            <p>{customerComment.comment}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CustomersSay;
