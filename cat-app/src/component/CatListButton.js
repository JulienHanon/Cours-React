import React from "react";
import { Link } from "react-router-dom";
import "../UI/Card.css";
import "./AppButton.css"; 


//Component créant un bouton permettant d'acceder à la page CatList
function CatListButton()
{
    return (
        <Link to="/CatList"><button className="AppButton"> List Cat </button></Link>
    )
}

export default CatListButton; 