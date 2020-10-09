import React, { Fragment, useEffect } from 'react'
// import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic'
import gsap, { TimelineMax } from "gsap"
import { ScrollTrigger } from 'gsap/all'

// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import './index.scss'

// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'


// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')

gsap.registerPlugin(ScrollTrigger)

export default class Home extends React.Component<any, any> {
  scrollMagicController: any
  constructor(props: any) {
    super(props);
    // this.scrollMagicController = new ScrollMagic.Controller();
  }

  componentDidMount() {
    console.log('gsap', gsap)

    ScrollTrigger.defaults({
      markers: true,
      // restart pause resume none
      toggleActions: "play pause resume reset",
    })

    gsap.utils.toArray('section').forEach((panel: any, i) => {
      console.log('panel', panel, i)

      let tl = gsap.timeline()
      tl.from(panel.querySelector('.outer'), {
        scaleX: 0,
        duration: 0.25
      })
      .from(panel.querySelector('.inner'), {
        yPercent: 100,
        duration: 0.65,
        ease: Back.easeInOut
      })

      ScrollTrigger.create({
        animation: tl,
        trigger: panel,
        start: 'top center',
      })
    })
    
  }

  render() {
    return (
      <Fragment>
        <section className="page-screen">
          <div className="outer">
            <div className="inner" id="id">This is Section 1</div>
          </div>
        </section>
        <section className="page-screen" id="sss">
          <div className="outer" id="outer">
            <div className="inner" id="inner">This is Section 2</div>
          </div>
        </section>
        <section className="page-screen">
          <div className="outer">
            <div className="inner">This is Section 3</div>
          </div>
        </section>
        <section className="page-screen">
          <div className="outer">
            <div className="inner">This is Section 4</div>
          </div>
        </section>
        <section className="page-screen">
          <div className="outer">
            <div className="inner">This is Section 5</div>
          </div>
        </section>
        <section className="page-screen">
          <div className="outer">
            <div className="inner">This is Section 6</div>
          </div>
        </section>
      </Fragment>
    )
  }
}
