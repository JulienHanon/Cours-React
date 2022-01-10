

import React, { useState, useEffect } from 'react';

import './../UI/Card.css';
import './CatList.css';

 function CatList(){

    //On initialise une varible qui va contenir l'url de la futur image
    const[cat, setCat] = useState([""]);
 
    //On récupère l'url d'une image à l'aide d'une requête API
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
    
    //On renvoi un bouton (permettant d'avoir une nouvelle photo) ainsi que la photo requêtée ci-dessus
    return (

        <>
            <div className='card'>
            <button onClick={fetchCatBreed}>LIKE</button>
            <button onClick={fetchCatBreed}>DISLIKE</button>
            <div>
                <img src={cat[0].url}></img>
            </div>
            <div>
              <button>Favorite</button>  
            </div>
            </div>
            <br></br>
            <div id='backgroud-page'></div>
        </>

    );
}


export default CatList;