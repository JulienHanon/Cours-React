import {Link, Outlet } from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import Card from "./UI/Card";


function App() {
  return (
    <div className="App">
      <h1>Welcome To Your Cat Site !!</h1>
      
     
      <nav
         style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem", 
          
        }}>
        <Link to="/Home"> Home </Link>
        <Link to="/ListPage"> Your Cat List </Link>
        <Link to="/CatsPhoto"> All Photos of Cats </Link>
        <Link to="/FormCat"> Form Cat </Link>
        <Link to="/CatList"> List Cat </Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
