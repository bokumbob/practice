import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './oauth/callback/kakao/Login';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Logincomplete from './oauth/callback/kakao/Logincomplete';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/oauth/callback/kakao" element={<Logincomplete />} />
        </Routes>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
