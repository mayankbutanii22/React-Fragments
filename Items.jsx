import styles from "./Items.module.css"
const Items = ({foodItems,bought,handleBuyButton}) => {

  return (
  <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}><span className={styles["kg-span"]}>{foodItems}</span>
  <button className={`${styles.button} btn btn-info`}
  onClick= {handleBuyButton}
 >Buy</button>
  </li>
  );
};

export default Items;