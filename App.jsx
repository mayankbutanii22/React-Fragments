
import ListItems from "./Components/ListItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./Components/Container";
import ListInput from "./Components/ListInput";
import { useState } from "react";

function App() {
      // let foodItems = ["Dal","Green","Vegetable","Roti","Salad","Milk"];  
        //  let foodItems = [];
     

      let [foodItems,setFoodItems] = useState([]);
      // console.log(`Current value of textState:${textToShow}`);
        const onKeyDown = (event) => {
          if (event.key === "Enter") {
          let newfoodItem = event.target.value;
          event.target.value = "";
          let newItem = [...foodItems,newfoodItem];
          setFoodItems(newItem);
            console.log("Food value entered is "+newfoodItem);
          }
          // console.log(event)
          // setTextState(event.target.value)
        };
  return (
    <Container>
    <h1>Healthy Food</h1>
    <ListInput handleKeyDown={onKeyDown}/>
    <ErrorMessage items = {foodItems}/>
    <ListItems items = {foodItems}/>
   </Container> 
  );
};
export default App
