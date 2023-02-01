import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState(0);

  const increment = () => {
    const val = item+1;
    setItem(val);
  };

  const decrement = () => {
    if(item===0){
      alert("Value should not be less than 0 😠");
    }else{
      const val = item-1;
      setItem(val);  
    }
  };

  return (
    <>
      <div className="App">
        <br />
        <br />
        <h1>{item}</h1>
        <br />
        <button className="button-17" role="button" onClick={increment}>Increment</button>
        <button className="button-17" role="button" onClick={decrement}>Decrement</button>
        <br />
      </div>
    </>
  );
}

export default App;
