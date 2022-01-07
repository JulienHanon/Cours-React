import './../UI/Card.css';
import React, { useState, useEffect } from 'react';

          
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
                        <option>Standard (whitout breed)</option>
                        {breed.map((breed) => (
                            <option> {breed.breed}</option>
                        ))}
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