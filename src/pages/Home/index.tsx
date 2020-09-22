import React, { Fragment } from 'react'
import ScrollMagic from 'scrollmagic'
import gsap, { TimelineMax } from "gsap"

import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import './index.scss'

ScrollMagicPluginGsap(ScrollMagic, TimelineMax)
gsap.registerPlugin(ScrollMagic)



export default class Home extends React.Component<any, any> {
  scrollMagicController: any
  constructor(props: any) {
    super(props);
    this.scrollMagicController = new ScrollMagic.Controller();
  }

  componentDidMount() {

    let tl = new TimelineMax()

    console.log('1', TimelineMax, gsap)
    
    new ScrollMagic.Scene({
      triggerElement: 'section',
      triggerHook: '0.5'
    })
    // .setTween(tl)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    })
    .addTo(this.scrollMagicController)
  }

  render() {
    return (
      <Fragment>
        <section>
          <div className="outer">
            <div className="inner">This is Section 1</div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">This is Section 2</div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">This is Section 3</div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">This is Section 4</div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">This is Section 5</div>
          </div>
        </section>
        <section>
          <div className="outer">
            <div className="inner">This is Section 6</div>
          </div>
        </section>
      </Fragment>
    )
  }
}
