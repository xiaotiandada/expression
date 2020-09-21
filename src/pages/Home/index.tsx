import React, { Fragment } from 'react'
import ScrollMagic from 'scrollmagic'
import gsap from "gsap";

import './index.scss'

export default class Home extends React.Component<any, any> {
  controller: any
  constructor(props: any) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    //rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second. 
    gsap.to(".home-box", {rotation: 27, x: 100, duration: 1});
  }

  render() {
    return (
      <Fragment>
        <div className="home-box green"></div>
        <div className="home-box orange"></div>
        <div className="home-box grey"></div>
      </Fragment>
    )
  }
}
