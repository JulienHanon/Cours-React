import * as React from "react"; 
import {Routes, Route, Link} from "react-router-dom"; 
import './App.css';
import ExpenseItem from './component/ExpanseItem.js';
import NameForm from './component/test';
import Home from "./component/Home.Js";
import About from "./component/About.Js";


function App() {

const titre = "Titre !"
const somme = 92


  return (
    <div className='App'>
      <h1>Welcome to React Router !</h1>
      <Routes>
        <Route path="Home" element={<Home/>} />
        <Route path="About" element={<About/>}/>
      </Routes>
    </div>  
  );
}

export default App;
