import React from "react";
import { Link } from "react-router-dom";
import "../UI/Card.css";
import "./AppButton.css"; 



function CatListButton()
{
    return (
        <Link to="/CatList"><button className="AppButton"> List Cat </button></Link>
    )
}

export default CatListButton; 