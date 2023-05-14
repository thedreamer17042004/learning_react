import "./App.css";
import { one, two, three } from "../src/components/Card/Images";
import { Card, listObject, Navbar, Card1 } from "./components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";
import Component from './Containers/synx-highter' 



function App() {
  return (
    // serious code
    <React.StrictMode>
      <>
        <h1>hello</h1>
        <Router>
          <Routes>
          <Route exact path="/" Component={Header}/>
          <Route exact path="/footer" Component={Footer}/>
          </Routes>
        </Router>

      <Component/>

      </>
    </React.StrictMode>
  );
}

export default App;
