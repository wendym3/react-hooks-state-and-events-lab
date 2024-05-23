import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
 // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
function App() {
  // State variable to toggle between dark and light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const appClass = isDarkMode ? "App dark" : "App light";

  // Function to handle the click event to toggle the mode
  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
