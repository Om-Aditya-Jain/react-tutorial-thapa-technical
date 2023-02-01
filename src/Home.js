import React, { useState } from 'react';
import Image from './image.jsx';
const Home = () =>{
    const [img,setimg] = useState("");
    const getimage = (event) =>{
        setimg(event.target.value);
    }
    return (
    <>
    <div className="container" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h1>Welcome to Home Page</h1>
        <input type="text" onChange={getimage} value={img}/>
        <br />
        {img==="" ? null : <Image name={img}/>}
    </div>
    </>
    );
}

export default Home;