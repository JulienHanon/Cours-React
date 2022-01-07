import {Link, Outlet } from "react-router-dom";
import './App.css';
import HomeButton from "./component/HomeButton";
import FormPageButton from "./component/FormPageButton";
import CatListButton from "./component/CatListButton";
import FormPage from "./routes/FormPage";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="NavButton"> 
        <div className="sleepingcat"><img src={require("./asset/sleepingcat.png")}></img></div>
          <HomeButton></HomeButton>
          <FormPageButton></FormPageButton>
          <CatListButton></CatListButton>
           <div className="backcat"><img src={require("./asset/catTitle2.png")} ></img></div> 
        </div>
      </header>
      <br></br>
      <Outlet/>
    </div>
  );
}

export default App;
