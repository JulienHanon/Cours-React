import React, {useState}from "react";
import YourList from "../component/YourList";
function FormCat(props){

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const catData = {
            id: Math.random().toString(),
            name: event.target.name.value, 
            age: event.target.age.value, 
            breed: event.target.breed.value, 
            height: event.target.height.value, 
            weight: event.target.weight.value, 
        }; 
        props.onAddCat(catData); 
       
    };

    return(
        <>
        <div  className='Cat-header'>   
           <h2>FORMULAIRE</h2>
           <div>
           <form onSubmit={formSubmissionHandler}>
               <label>
                    Nom :
                    <input id='name' type="text" name="name" />
                    Age : 
                    <input id='age' type="number" name="Age"/>
                    Race : 
                    <select id='breed'>
                        <option>RagDoll</option>
                        <option>MainCoon</option>
                        <option>Sphinx</option>
                    </select>
                    Taille :
                    <input id='height' type="number" name="Taille"/>
                    Poids :
                    <input id='weight' type="number" name="Poids"/>
               </label>
               <div>
                     <input type="submit" value="Send" /> 
               </div>
           </form>
           </div>
        </div>
        </>
    );
}

export default FormCat;