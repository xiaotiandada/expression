import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import './index.scss'
export default class index extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <header className="home-header">
        <span className="hh-title">Header</span>
        <Button type="primary" onClick={ this.showModal }>登陆</Button>
        <Modal
          title="登陆"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Button type="primary">Metamask</Button>
        </Modal>
      </header>
    )
  }
}
