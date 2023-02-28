import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import Link from 'next/link';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
           Widely considered one of the very best pizzas in Copenhagen, 
           Behov Pizza in the Nordvest neighbourhood is nothing but a true hidden gem.
      </p>
      <div className={styles.wrapper}>
        
        <Link href="product/1">
          <PizzaCard/>
        </Link> 

        <Link href="product/2">
          <PizzaCard/>
        </Link> 

        <Link href="product/3">
          <PizzaCard/>
        </Link> 

        <Link href="product/4">
          <PizzaCard/>
        </Link> 

        <Link href="product/5">
          <PizzaCard/>
        </Link> 

        <Link href="product/6">
          <PizzaCard/>
        </Link> 

        <Link href="product/7">
          <PizzaCard/>
        </Link> 

        <Link href="product/8">
          <PizzaCard/>
        </Link> 
      </div>
    </div>
  );
};

export default PizzaList;
