import './../UI/Card.css';
import React, { useState, useEffect } from 'react';
import './../UI/Card.css';
          
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
           <form onSubmit={formSubmissionHandler} className='card'>
               <label>
                    Nom :
                    <input id='name' type="text" name="name" className='card'/>
                    <br></br>
                    Age : 
                    <input id='age' type="number" name="Age" className='card'/>
                    <br></br>
                    Race : 
                    <select id='breed' className='card'>
                        <option>Standard (without breed)</option>
                        {breed.map((breed) => (
                            <option> {breed.breed}</option>
                        ))}
                    </select>
                    <br></br>
                    Taille :
                    <input id='height' type="float" name="Taille" className='card'/>
                    <br></br>
                    Poids :
                    <input id='weight' type="float" name="Poids" className='card'/>
                    <br></br>
               </label>
               <div>
                   <br></br>
                     <input type="submit" value="Send" className='sendbutton'/>
                    <br></br> 
               </div>
           </form>
           </div>
        </div>
        
    );
}

export default FormCat;