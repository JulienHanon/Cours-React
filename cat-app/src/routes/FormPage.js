import React, {useState}from "react";
import YourList from "../component/YourList";
import FormCat from "../component/FormCat";

function FormPage()
{
    const [listcat, setListCat] = useState([{
        id: Math.random().toString(),
        name: 'Test', 
        age: 0, 
        breed: 'test', 
        height: 0, 
        weight: 0,
    }]); 

    const addCatHandler = (cat) => {
        setListCat((prevListCat) => {
            return [...prevListCat, cat ]; 
        }); 
    }; 
    return(

        <div>
            <FormCat onAddCat={addCatHandler} ></FormCat>
            <YourList ListCat={listcat}></YourList>
        </div>
    )
}

export default FormPage; 