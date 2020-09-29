import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { FormInstance } from 'antd/lib/form';
import './index.scss'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 18},
};

export default class index extends Component {
  formRef: any
  state: any
  constructor(props: any) {
    super(props);
    this.formRef = React.createRef<FormInstance>();
    this.state = {
      visible: false,
      formData: {
        username: 'admin',
        password: 'admin'
      }
    };
  }

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

  onFinish = (values: any) => {
    console.log(values);
  };

  render() {
    return (
      <header className="home-header">
        <span className="hh-title">Header</span>
        <Button type="primary" onClick={this.showModal}>登陆</Button>
        <Modal
          title="登陆"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish} initialValues={ this.state.formData }>
            <Form.Item name="username" label="账号" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="admin" value={ this.state.formData.username } maxLength={ 10 } />
            </Form.Item>
            <Form.Item name="password" label="密码" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password placeholder="password(Any Value)" value={ this.state.formData.password } maxLength={ 10 } />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </header>
    )
  }
}
