import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Project/Project';

const App = () => {
  return (
    <>
    
    <Routes>
        <Route exact path="/" element={< Home/>} />
        <Route exact path="/project" element={< Project/>} />
        <Route exact path="/about" element={< About/>} />
        <Route exact path="/contact" element={< Contact/>} />
    </Routes>
    
    </>
  )
}

export default App