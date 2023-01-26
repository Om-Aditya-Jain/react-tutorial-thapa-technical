import React from 'react';
import {Link} from 'react-router-dom';
const Menu = () =>{
    return (
        <>
        <Link to="/om">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Service">Service</Link>
        </>
    );
}

export default Menu;