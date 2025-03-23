import { useState } from "react";
import Items from "./Items";

const ListItems = ({items}) => {
  let [activeItems, setActiveItems] = useState([]);
  return (
  <ul className="list-group">
  {items.map((item) => 
  <Items key={item} foodItems={item} bought={activeItems.includes(item)} 
  handleBuyButton={() => 
    setActiveItems([...activeItems,item])}/>
  )}
  </ul>
  );
};

export default ListItems;