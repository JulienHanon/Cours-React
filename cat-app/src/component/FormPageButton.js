import React from "react";
import { Route, Link } from "react-router-dom";
import FormPage from "../routes/FormPage";
import "../UI/Card.css";
import "./AppButton.css"; 

function FormPageButton()
{
    return (
        <Link to="/FormPage"><button className="AppButton"> FormPage</button></Link>
    )
}

export default FormPageButton; 