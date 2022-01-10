import React, {useState}from "react";
import YourList from "../component/YourList";
import FormCat from "../component/FormCat";
import './FormPage.css'

function FormPage()
{
    //On initialise une liste de chat avec des attributs 
    const [listcat, setListCat] = useState([{
        id: Math.random().toString(),
        name: 'Kira', 
        age: 1, 
        breed: 'Bombay', 
        height: 54, 
        weight: 4.2,
    }]); 
    //Cette fonction va permettre de remplir la liste de chat avec le chat que l'on vient de rentrer plus les précédents
    //cette fonction est envoyé en props au component FormCat (le formulaire)
    const addCatHandler = (cat) => {
        setListCat((prevListCat) => {
            return [...prevListCat, cat ]; 
        }); 
    }; 
    //On renvoir le formulaire (FormCat) et la List (YourList)
    //on passe en props à YourList la liste de chat qu'il puisse l'afficher
    return(

        <div className="FormPage">
            <FormCat onAddCat={addCatHandler} ></FormCat>
            <YourList ListCat={listcat}></YourList>
        </div>
    )
}

export default FormPage; 