import {Link, Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import YourList from './component/YourList';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Your Cat Site !!</h1>
      <nav
         style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",  
          
        }}>
        <Link to="/Home"> Home </Link> || {"    "}
        <Link to="/ListPage"> Your Cat List </Link> || {"   "}
        <Link to="/CatsPhoto"> All Photos of Cats </Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
