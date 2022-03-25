import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sadas from './axios/sadas';
import Mt from './material-icon/Mt';
import RsTest from './react-spring/RsTest';
import ReactRouter from './react-router/ReactRouter'
import Hoc from './hoc/Hoc.js';
import Hoc_copy from './hoc/Hoc_copy.js';
import Memo from './memo/Memo';
// import Auth from './axios/Auth';
// import Login from './oauth/callback/kakao/Login';
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
// import Logincomplete from './oauth/callback/kakao/Logincomplete';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/oauth/callback/kakao" element={<Logincomplete />} />
        </Routes>
      </Router> */}
      {/* <Sadas /> */}
      {/* <Login /> */}
      {/* <Auth /> */}
      {/* <RsTest /> */}
      {/* <Mt /> */}
      {/* <ReactRouter /> */}


      {/* <Hoc /> */}
      {/* <Hoc_copy /> */}
      <Memo />
    </div>
  );
}

export default App;
