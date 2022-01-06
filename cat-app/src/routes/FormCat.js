import './../UI/Card.css';

import React, { useState, useEffect } from 'react';

function FormCat(props){

    const[breed, setBreed] = useState(['','','']);

    const fetchCatBreed = async () =>{
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = await response.json();  
        const transformedBreed = data.map((breedData) =>{
            return{
                id : breedData.id,
                breed : breedData.name,
            };
        });
        setBreed(transformedBreed); 
           
     }

     useEffect(() => {
        let timer = setTimeout(() => {
        fetchCatBreed();
        }, 100);
        
        
        
        return () => clearTimeout(timer)
        }, []);


    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log("Form submitted !")
    
    };

    return(
        <div  className='card'>   
          <h2>FORMULAIRE</h2>
           <div>
           <button onClick={fetchCatBreed}>Ajout des races</button>
           <form onSubmit={formSubmissionHandler}>
               <label>
                    Nom :
                    <input id='name' type="text" name="name" />
                    Age : 
                    <input id='age' type="number" name="Age"/>
                    Race : 
                    <select id='breed'>
                        <option>{breed[0].breed}</option>
                        <option>{breed[1].breed}</option>
                        <option>{breed[2].breed}</option>
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
    );
}

export default FormCat;