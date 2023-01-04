import React, { useState } from "react";
import Todolist from "./todolist";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const addItem = (event) => {
    setItem(event.target.value);
  };

  const updateItemList = () => {
    setItemList((oldvalue) => {
      return [...oldvalue, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    setItemList((oldvalue) => {
      return oldvalue.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="App">
        <br />
        <h1>To Do List</h1>
        <br />
        <input
          type="text"
          name="item"
          value={item}
          placeholder="Add Items"
          onChange={addItem}
        />
        <button className="add" onClick={updateItemList}>
          +
        </button>
        <br />
        <ol>
          {itemList.map((itemval, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                value={itemval}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
