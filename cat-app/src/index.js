import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/Home.js';
import ListPage from './routes/ListPage.js'; 
import CatsPhoto from './routes/CatsPhoto.js'; 
import FormCat from './routes/FormCat.js';
import CatList from './routes/CatList.js';
import FormPage from './routes/FormPage';

const rootElement = document.getElementById('root'); 
render(
  <BrowserRouter>
   <Routes>
     <Route path="/" element = {<App />}>
     <Route path="Home" element = {<Home />}/>
     <Route path="FormPage"  element={<FormPage />}/>
     <Route path="CatList"  element={<CatList />}/>
     </Route>
   </Routes>
  </BrowserRouter>,  
  rootElement 
);
