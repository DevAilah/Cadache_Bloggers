/*import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';*/

import "./App.css";
import Navbar from './navbar';
import Home from './home';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

  // root component....first component rendered to the DOM 
function App() {
  //const tittle = 'Welcome Visitor to the blog';
  //const likes = 50;
  //const person = {name: 'Obaje', age: 30 };
  //const link = "http://www.google.com";
  //const link2 = "C:\Users\PATRICK\Downloads\technical.mp4";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/create" element={ <Create />} />
          <Route path="/blogs/:id" element={ <BlogDetails /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
