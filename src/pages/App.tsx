import React, { Fragment } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import './App.css';
import Home from "./Home";


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
