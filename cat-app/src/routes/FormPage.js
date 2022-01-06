import React, {useState}from "react";
import YourList from "../component/YourList";
import FormCat from "./FormCat";

function FormPage()
{
    const [listcat, setListCat] = useState([]); 

    const addCatHandler = (cat) => {
        setListCat((prevListCat) => {
            return [cat, ...prevListCat]; 
        }); 
    }; 
    return(

        <div>
            <FormCat onAddCat = {addCatHandler} ></FormCat>
            <YourList ListCat = {listcat}></YourList>
        </div>
    )
}

export default FormPage; 