import React, {useState} from 'react';
import './YourList.css';




function YourList(props){

    const [currentcat, setCurrentCat] = useState([]); 

    // declarer avec useState un tableau a vide 
    // qui va accueillir plus tard les données à afficher 
    // ici la liste de chat qu'on pourra modifier grace
    // au formulaire

    return (
        <div className='List'>
            <header className="TitleList">
                <h2> Your Cat's CatList</h2>
            </header>
                <ul className="CatList">
                  {props.ListCat.map((cat) =>{
                      setCurrentCat(cat); 
                      console.log(currentcat); 
                      <li>{currentcat.name}</li>; 
                      <li>{currentcat.age} year</li>; 
                      <li>{currentcat.breed}</li>; 
                      <li>{currentcat.height} cm</li>; 
                      <li>{currentcat.weight} kg</li>
                  })} 
                      
                </ul>
        </div>
    ) 
}

export default YourList; 