import React from 'react';
import {Link} from 'react-router-dom';
const Menu = () =>{
    return (
        <>
        <div style={{color:"white",background:"black",height:"7vh",width:"100%",display:"flex", gap: "10px"}}>
        <Link to="/Home" style={{color:"white", fontSize:"large", margin:"0x 5px"}}>Home</Link>
        &emsp;
        <Link to="/About" style={{color:"white", fontSize:"large", margin:"0x 5px"}}>About</Link>
        &emsp;
        <Link to="/Contact" style={{color:"white", fontSize:"large", margin:"0x 5px"}}>Contact</Link>
        &emsp;
        <Link to="/Service" style={{color:"white", fontSize:"large", margin:"0x 5px"}}>Service</Link>
        </div>
        </>
    );
}

export default Menu;