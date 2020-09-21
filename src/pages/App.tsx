import React, { Fragment } from "react";
import ReactDOM from 'react-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Empty () {
  return 'Empty'
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/home">
              <Fragment>
                <Header></Header>
                <Home></Home>
                <Footer></Footer>
              </Fragment>
            </Route>
            <Route path="/" component={Empty}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
