import './../UI/Card.css';
import React, { useState, useEffect } from 'react';
import './FormCat.css'
import './AppButton.css'
          
function FormCat(props){

    //On Renvoie le données du formulaire à la page du formulaire pour raouter un chat à la liste      
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
        console.log(catData.name); 
        if(catData.name != '' && catData.age != 0 && catData.height != '' && catData.weight != '')
        {
            props.onAddCat(catData); 
        }
        else {
            alert("Le formulaire n'est pas bien rempli"); 
        }
    };

    //On réucpère toutes les races dans un tableau à l'aide d'une requête API
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
          
    //On renvoi un formulaire pour rentrer le nom, l'age, la race, la taille et le poids du chat  
    return(
        <div  className='card' id='FormCard'> 
            <div id='FormTitle'>
                <h2 className='TitleForm'>FORMULAIRE</h2>
            </div>   
          
           <div>
           <form onSubmit={formSubmissionHandler} className='card' id='DataForm'>
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
                     <input type="submit" value="Send" className='AppButton'/>
                    <br></br> 
               </div>
           </form>
           </div>
        </div> 
    );
}

export default FormCat;