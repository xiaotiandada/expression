import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./App.css";
import Gsap from "./Gsap";
import Home from "./Home";
import Img from "./Img";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Empty () {
  return 'Empty'
}

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/img">
            <Fragment>
              <Header></Header>
              <Img></Img>
              <Footer></Footer>
            </Fragment>
          </Route>
          <Route path="/gsap" component={Gsap}></Route>
          <Route path="/">
            <Fragment>
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Fragment>
          </Route>
          <Route path="*" component={Empty}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
