import React from "react";
import styles from './CoffeeCard.module.css'
const CoffeeCard = ({props}) => {
  let ingredients = [...props.ingredients]
  return (
    <div className={styles.item}>
      <img src={props.image} alt="Fetch Image" className={styles.image}/>
      <div>
      <h2 className={styles.header}>{props.title}</h2>
      <p className={styles.paraPrice}>{props.price}</p>
      <p className={styles.desc}>{props.description}</p>
      </div>
      <ul>
        <h1>Ingredients :-</h1>
        {ingredients.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  )
};

export default CoffeeCard;
