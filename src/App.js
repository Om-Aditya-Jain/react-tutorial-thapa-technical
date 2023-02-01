import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Menu from './Menu';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Service" element={<Service />} />
    </Routes>
    </>
  );
}

export default App;
