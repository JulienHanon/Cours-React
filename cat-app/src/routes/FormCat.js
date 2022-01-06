import './../UI/Card.css';

import React, { useState, useEffect } from 'react';

function FormCat(props){

    const[breed, setBreed] = useState(['']);

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
        for(let i = 0; i<breed.length;i++){
            console.log(breed[i].breed);
        }
           
     }
     useEffect(() => {
        let timer = setTimeout(() => {
        fetchCatBreed();
        }, 0);
        
        
        
        return () => clearTimeout(timer)
        }, []);
     

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log("Form submitted !")
        console.log(event.target.name.value)
        console.log(event.target.age.value)
        console.log(event.target.breed.value)
        console.log(event.target.height.value)
        console.log(event.target.weight.value)
      
    };

    return(
        <div  className='card'>   
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