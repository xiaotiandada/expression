import React, { Fragment } from 'react'
import ScrollMagic from 'scrollmagic'

import './index.scss'

let data: any = [
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327350768&di=c2b7e5e5c35df5ac611ee2652a21dd09&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
    name: '夏天'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327255388&di=1acbf55c4da01949a3f81e6ac0a12733&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
    name: '哈哈'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327350768&di=c2b7e5e5c35df5ac611ee2652a21dd09&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
    name: '3'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327350768&di=c2b7e5e5c35df5ac611ee2652a21dd09&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
    name: '4'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327350768&di=c2b7e5e5c35df5ac611ee2652a21dd09&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
    name: '5'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327255388&di=1acbf55c4da01949a3f81e6ac0a12733&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
    name: '6'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327350768&di=c2b7e5e5c35df5ac611ee2652a21dd09&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
    name: '7'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327255388&di=1acbf55c4da01949a3f81e6ac0a12733&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
    name: '8'
  },
  {
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600327350768&di=c2b7e5e5c35df5ac611ee2652a21dd09&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
    name: '9'
  }
]

data.push(...data)
data.push(...data)

class Items extends React.Component<any, any> {
  render() {
    const { data } = this.props
    const listItems = data.map((i: any, idx: number) => (
      <section className="box"
        key={idx.toString()} >
        <div className="box-img">
          <img src={i.src} alt={i.name} />
        </div>
        <div className="box-name">
          { idx }
          ---
          {i.name}
        </div>
      </section>
    ))
    return listItems
  }
}

export default class Home extends React.Component<any, any> {
  controller: any
  constructor(props: any) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    let domList: any = [...document.querySelectorAll('.box')]

    domList.forEach((i: any) => {
      console.log('i', i)
      new ScrollMagic.Scene({
        triggerElement: i,
        duration: '100%',
        triggerHook: 0.98,
      })
      .setClassToggle(i, "show-box")
      .addIndicators({
        name: "width",
        colorTrigger: "red",
        colorStart: "#333",
        colorEnd: "pink"
      })
      .addTo(this.controller)
    })

  
  }

  render() {
    return (
      <Fragment>
        <section className="home-body" id="trigger1">
          <Items data={data}></Items>
        </section>
      </Fragment>
    )
  }
}
