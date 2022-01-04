import * as React from  "react"; 
import * as ReactDOM from "react-dom"; 
import  { BrowserRouter, Routes, Route} from "react-router-dom"; 
import './index.css';
import Home from "./component/Home.Js";
import About from "./component/About.Js";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
      <Route path="Home" element={<Home/>}></Route>
      <Route path="About" element={<About/>}></Route>
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
