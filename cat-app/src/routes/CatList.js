
import React, { useState, useEffect } from 'react';

 function CatList(){

    const[cat, setCat] = useState([]);
 
    const fetchCatBreed = async () =>{
       const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = await response.json();
        console.log(data)            
    }

    return (
   
       <button onClick={fetchCatBreed}>cliquer moi !</button>

    );
    }


export default CatList;