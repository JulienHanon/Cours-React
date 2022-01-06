import {Link, Outlet } from "react-router-dom";
import './App.css';




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
        <Link to="/FormPage"> Form Page </Link>
        <Link to="/CatList"> List Cat </Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
