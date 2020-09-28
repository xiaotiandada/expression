import React, { Fragment } from 'react'
import ScrollMagic from 'scrollmagic'
import { Image } from 'antd';

import './index.scss'

import list from '../../json.json'

let data: any = list;

class Items extends React.Component<any, any> {
  render() {
    const { data } = this.props
    const listItems = data.map((i: any, idx: number) => {
      return (
        <section className="box-item"
          key={idx.toString()} >
          <div className="bi-img">
            <Image src={i.url} />
          </div>
          <div className="bi-name">
            {i.title}
          </div>
        </section>
      )
    })
    return listItems
  }
}

export default class Home extends React.Component<any, any> {
  controller: any
  state: any
  constructor(props: any) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      item: []
    }
  }

  componentDidMount() {
    // let arr = []
    // for (let i = 0; i < data.length; i++) {
    //   const img = new Image()
    //   let height = 200
    //   img.src = data[i].url
    //   img.onload = img.onerror = () => {
    //     console.log('img', img.height)
    //     height = img.height
    //   }
    //   arr.push({
    //     ...data[i],
    //     height: height
    //   })
    // }

    const getImageHeight = () => {
      let list = []
      let item: any = document.querySelectorAll('#waterfall .box-item')
      for (let i = 0; i < item.length; i++) {
        let height = item[i].querySelector('.bi-img img')
        let heightText = item[i].querySelector('.bi-name')
        item[i].style.height = `${height.offsetHeight + heightText.offsetHeight}px`
        list.push(height.offsetHeight + heightText.offsetHeight)
      }
      this.state.item = list
    }
    const setWaterfall = () => {
      let item: any = document.querySelectorAll('#waterfall .box-item')
      let itemWidth = item[0].offsetWidth
      let columns = 16
      let arr: number[] = []

      for (let i = 0; i < item.length; i++) {
        // 前六
        if (i < 6) {
          item[i].style.top = 0
          // width + cloumns * i
          item[i].style.left = `${(itemWidth + columns) * i}px`
          // push height
          arr.push(item[i].offsetHeight)
        } else {
          let idx = 0 // default min index
          let minH = arr[0] // default min height

          // search min height height
          for (let j = 0; j < arr.length; j++) {
            if (minH > arr[j]) {
              minH = arr[j]
              idx = j
            }
          }

          // min height + columns
          item[i].style.top = `${arr[idx] + columns}px`
          // min height dom's offsetLeft
          item[i].style.left = `${item[idx].offsetLeft}px`
          // set min height value
          arr[idx] = arr[idx] + item[i].offsetHeight + columns
        }
      }

      // set parent height, because container collapse
      let waterfallHeight = item[item.length - 1].offsetTop + item[item.length - 1].offsetHeight
      let waterfall: any = document.querySelector('#waterfall')
      waterfall.style.height = `${waterfallHeight}px`
    }

    window.onload = async () => {
      await getImageHeight()
      await setWaterfall()
    }
    window.addEventListener('resize', async () => {
      await getImageHeight()
      await setWaterfall()
    })
  }

  render() {
    return (
      <Fragment>
        <section className="home-body" id="waterfall">
          <Items data={data}></Items>
        </section>
      </Fragment>
    )
  }
}
