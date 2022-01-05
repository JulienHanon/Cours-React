import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/Home.Js';
import ListPage from './routes/ListPage.Js'; 
import CatsPhoto from './routes/CatsPhoto.js'; 

const rootElement = document.getElementById('root'); 
render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element = {<App />}>
     <Route path="Home" element = {<Home />}/>
     <Route path="ListPage" element={<ListPage />}/>
     <Route path="CatsPhoto"  element={<CatsPhoto />}/>
     </Route>
   </Routes>
  </BrowserRouter>,  
  rootElement 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
