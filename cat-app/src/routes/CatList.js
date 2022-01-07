
import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        let timer = setTimeout(() => {
          fetchCatBreed();
        }, 0);
      return()=> clearTimeout(timer)
    }, []);
    
    
    return (
        <div className='card'>
        <button onClick={fetchCatBreed}>LIKE</button>
        <button onClick={fetchCatBreed}>DISLIKE</button>
        <div>
               <img src={cat[0].url}></img>
        </div>
        <button>Favorite</button>
        </div>
    );
}


export default CatList;