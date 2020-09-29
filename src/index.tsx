import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from "redux";
import { Provider } from 'react-redux'
import { VisibilityFilters } from "./pages/Todo/index";

import 'antd/dist/antd.css';

const initialState = {
  todos: [
    {
      id: 1,
      text: "你好, 图雀",
      completed: false
    },
    {
      id: 2,
      text: "我是一只小小小小图雀",
      completed: false
    },
    {
      id: 3,
      text: "小若燕雀，亦可一展宏图！",
      completed: false
    }
  ],
  filter: VisibilityFilters.SHOW_ALL
};

const rootReducer = (state: any, action: any) => {
  return state;
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  // <StrictMode>
  <Provider  store={store}>
    <App />
  </Provider>,
  // </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
