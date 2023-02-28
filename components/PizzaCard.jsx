import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/piza2.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>pizza Pepperoni</h1>
      <span className={styles.price}>$28.50</span>
      <p className={styles.desc}>
        pizza Pepperoni is basically an American version of salami. 
      </p>
    </div>
  );
};

export default PizzaCard;
