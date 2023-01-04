import React, { useState } from "react";
import "./App.css";

function App() {
  const [fullname, setName] = useState({
    fname:"",
    lname:"",
    email:""
  });

  const onsubmits = (event) => {
    event.preventDefault();
  };

  const updateName = (event) => {
    const {value, name} = event.target;
    setName((prevalue)=>{
      return{
        ...prevalue,
        [name]:value,
      }
    });
  };


  return (
    <div className="App">
        <form onSubmit={onsubmits}>
      <div className="maindiv">
          <div className="inputmaindiv">
          <h1 className="heading">Hello {fullname.fname} {fullname.lname}</h1>
          <p className="heading">{fullname.email}</p>
          <input type="text" className="inputdiv" name="fname" value={fullname.fname} placeholder="Enter Your First Name" onChange={updateName}/>
          <br />
          <input type="text" className="inputdiv" name="lname" value={fullname.lname} placeholder="Enter Your Last Name" onChange={updateName}/>
          <br />
          <input type="text" className="inputdiv" name="email" value={fullname.email} placeholder="Enter Your Email" onChange={updateName}/>
          <br />
          <input type="submit" className="button" value="Submit Me 👍" />
          </div>
      </div>
        </form>
    </div>
  );
}

export default App;
