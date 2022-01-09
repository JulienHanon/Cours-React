import { Outlet, useNavigate } from "react-router-dom";
import './App.css';
import React, { useEffect } from "react";
import HomeButton from "./component/HomeButton";
import FormPageButton from "./component/FormPageButton";
import CatListButton from "./component/CatListButton";




function App() {

  let navigate = useNavigate(); 
  useEffect(() => {
    navigate('/Home'); 
    return () => {
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="sleepingcat"><img src={require("./asset/sleepingcat.png")}></img></div>
        <div className="backcat"><img src={require("./asset/catTitle2.png")} ></img></div> 
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
