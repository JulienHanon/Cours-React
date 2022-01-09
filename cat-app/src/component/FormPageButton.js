import React from "react";
import { Link } from "react-router-dom";
import "../UI/Card.css";
import "./AppButton.css"; 

function FormPageButton()
{
    //Component créant un bouton permettant d'acceder à la page FormPage
    return (
        <Link to="/FormPage"><button className="AppButton"> FormPage</button></Link>
    )
}

export default FormPageButton; 