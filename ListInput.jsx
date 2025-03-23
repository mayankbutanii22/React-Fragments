import styles from "./ListInput.module.css";

const ListInput = ({handleKeyDown}) => {

 return (
  <>
 <input type="text" placeholder="Enter Food Item here" 
 className={styles.ListInput}
 onKeyDown={handleKeyDown}/>
 </>
 );
}

export default ListInput;