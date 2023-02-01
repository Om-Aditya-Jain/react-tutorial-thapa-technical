import React from 'react';
import { useParams } from 'react-router-dom';
const Home = () =>{
    const {name} = useParams();
    return <h1>Welcome {name} to Home Page</h1>;
}

export default Home;