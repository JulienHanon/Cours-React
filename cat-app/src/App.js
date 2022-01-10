import { Outlet, useNavigate } from "react-router-dom";
import './App.css';
import React, { useEffect } from "react";
import HomeButton from "./component/HomeButton";
import FormPageButton from "./component/FormPageButton";
import CatListButton from "./component/CatListButton";




function App() {

  //permet de nous rediriger directement sur la page Home quand on arrive sur le site
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/Home")
    },[]);

  //On Renvoi Les boutons de navigation du site ainsi que les deux photos de chats présents en décoration autour des boutons
  return (
    <div className="App">
      <header className="App-header">
        <div className="sleepingcat"><img src={require("./asset/sleepingcat.png")}></img></div>
        <div className="NavButton"> 
        
          <HomeButton></HomeButton>
          <FormPageButton></FormPageButton>
          <CatListButton></CatListButton>
        </div>
      </header>
      <br></br>
      <Outlet/>
     
    </div>
  );
}

export default App;
