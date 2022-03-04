import React from 'react';
import ReactDOM from 'react-dom';
// createStore와 루트 리듀서 불러오기
import {createStore} from 'redux'
import rootReducer from './store/modules'
// Provider 불러오기
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 리덕스 개발자도구 적용
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// 스토어 만들고 현재 값 확인
const store = createStore(rootReducer, devTools)
// console.log(store.getState())

// Provider 렌더링해서 기존의 App 감싸주기 - 스토어 연동
ReactDOM.render(
    <Provider store={store}>
        <App />    
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
