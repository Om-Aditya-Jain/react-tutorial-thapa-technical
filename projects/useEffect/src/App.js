import React, { useState, useEffect } from "react";

function App() {
  const [item, setItem] = useState(0);
  const [items, setItems] = useState(0);
  useEffect(()=>{
    alert("I am clicked");
  },[item]);
  return (<><button onClick={()=>{setItem(item+1)}}>Click me {item}</button> <br /> <button onClick={()=>{setItems(items+1)}}>Click me {items}</button> </>);
}

export default App;
