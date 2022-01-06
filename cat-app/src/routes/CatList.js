
import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './../UI/Card.css';
import './CatList.css';

 function CatList(){

    const[cat, setCat] = useState([""]);
 
    const fetchCatBreed = async () =>{
       const response = await fetch('https://api.thecatapi.com/v1/images/search');
       const data = await response.json();  
       const transformedCat = data.map((catData) =>{
           return{
               url : catData.url,
           };
       });
       setCat(transformedCat);   
       console.log("transformedCat",transformedCat);
       console.log("cat",cat[0].url);
        
          
    }
    const UneImage = cat.map (cat => (<h1>{cat.url}</h1>))
    
    
    return (
        <div className='card'>
             <button onClick={fetchCatBreed}>Cliquer sur moi !</button>
             <div>
                    <img src={cat[0].url}></img>
             </div>
        </div>
      
    );
    }


export default CatList;