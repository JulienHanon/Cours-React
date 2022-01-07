import React from "react";
import { Link } from "react-router-dom";
import "../UI/Card.css";
import "./AppButton.css"; 



function HomeButton()
{

    return (
        <Link to="/Home"><button className="AppButton">Home</button></Link> 
    )
}

export default HomeButton; 