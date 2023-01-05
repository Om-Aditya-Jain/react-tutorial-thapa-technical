import React, { useState } from "react";
import Todolist from "./todolist";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
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

  return (
    <>
      <Paper elevation={3} className="App">
      <div>
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
          <Fab color="primary" aria-label="add" className="add" onClick={updateItemList}>
            <AddIcon />
          </Fab>

        <br />
        <ol>
          {itemList.map((itemval, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                value={itemval}
              />
            );
          })}
        </ol>
      </div>
      </Paper>
    </>
  );
}

export default App;
