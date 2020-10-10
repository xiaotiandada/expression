import React, { Fragment, useState } from 'react'
import { Button, Modal, Form, Input, message, Avatar, Menu, Dropdown } from 'antd'
import { setUsernameReducer, selectUsername, userLogOut } from "../../state/user/slice";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "../../utils/cookie";
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import './index.scss'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 18},
};

const Header = () => {
  const selectUsernameState = useSelector(selectUsername)
  const dispatch = useDispatch()

  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin')

  const onFinish = (values: any) => {
    console.log(values);
    console.log('username', username)
    console.log('password', password)

    // Imiation login
    setLoginLoading(true)
    setTimeout(() => {
      dispatch(setUsernameReducer(username))
      // Imiation token, set to cookie
      setCookie('access-token', `${username}.${password}.${Date.now()}`)
      message.success('success login')
      setLoginLoading(false)
      setVisible(false)
    }, 2000)
  }

  const menuOnClick = async ({ key }: any) => {
    console.log(`Click on item ${key}`);
    if (key === 'logout') {
      const res = await dispatch(userLogOut())
      console.log('res', res)
      message.success(res)
    } else if (key === 'user') {
      message.success('暂未开发...')
    }
  }

  const menu = (
    <Menu onClick={menuOnClick}>
      <Menu.Item key="user">我的主页</Menu.Item>
      <Menu.Item key="logout" danger>退出登陆</Menu.Item>
    </Menu>
  )

  return (
    <header className="home-header">
      <span className="hh-title">Header</span>
      {(
        selectUsernameState ?
        <Dropdown overlay={menu}>
          <div>
            <Avatar size={34} icon={<UserOutlined />} />
              <span style={{ marginLeft: '6px', marginRight: '6px', fontSize: '14px', color: '#333' }}>{ selectUsernameState }</span>
              <DownOutlined />
          </div>
        </Dropdown> :
        <Button type="primary" onClick={() => setVisible(true)}>登陆</Button>
      )}
      <Modal
        title="登陆"
        visible={visible}
        onOk={e => { console.log(e);setVisible(false)}}
        onCancel={e => { console.log(e);setVisible(false)}}
        footer={null}
      >
        <Form {...layout} form={form} name="control-ref" onFinish={onFinish}>
          <Form.Item name="username" label="账号" rules={[{ required: true, message: 'Please input your username!' }]} initialValue={ username }>
            <Input placeholder="admin" value={ username } onChange={ e => setUsername(e.target.value) } maxLength={ 10 } />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true, message: 'Please input your password!' }]} initialValue={ password }>
            <Input.Password placeholder="password(Any Value)" value={ password } onChange={ e => setPassword(e.target.value) } maxLength={ 10 } />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={loginLoading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </header>
  )
}

export default Header
