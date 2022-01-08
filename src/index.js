import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Routers
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Homepage from './components/routes/homepage';
import Request from './components/routes/request';
import Share from './components/routes/share';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>
          <Route path='*' element={<Homepage />}></Route>
          <Route path='homepage' element={<Homepage />}></Route>
          <Route path='request' element={<Request />}></Route>
          <Route path='share' element={<Share />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
