import React, {useState}from "react";
import YourList from "../component/YourList";
function FormCat(props){


    const [cat, setCat] = useState(['', 0, '', 0, 0]);
    //const [name, setName] = useState(''); 
    //const [age, setAge] = useState(0); 
    //const [breed, setBreed] = useState(''); 
    //const [height, setHeight] = useState(0); 
    //const [weight, setWeight] = useState(0); 

    const formSubmissionHandler = (event, ) => {
        event.preventDefault();
        console.log("Form submitted !")
        console.log(event.target.name.value)
        console.log(event.target.age.value)
        console.log(event.target.breed.value)
        console.log(event.target.height.value)
        console.log(event.target.weight.value)

        
        const tmpcat = cat.map((event) => {
            name: event.target.name.value; 
            age: event.target.age.value; 
            breed: event.target.breed.value; 
            height: event.target.height.value; 
            weight: event.target.weight.value; 
        })
        setCat(tmpcat); 
        console.log(cat.name)
        props.onAddCat(cat); 
       
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