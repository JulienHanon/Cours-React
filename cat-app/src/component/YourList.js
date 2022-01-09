import React from 'react';
import './YourList.css';
import './../UI/Card.css';




function YourList(props){

    //On Renvoi une Liste de chat qui ont été donné en props par le route FormPage
    return (
        <div >
            <div className='card' id='ListCard'>
            <header className="TitleList">
                <h2> Your Cat's CatList</h2>
            </header>
                <ul className="CatList" >
                  {props.ListCat.map((cat) => (
                      <li key={cat.id} className='card' id='ListItem'>{cat.name} - {cat.age} year 
                      -{cat.breed} - {cat.height} cm 
                      - {cat.weight} kg</li>
                  ))} 
                </ul>
        </div>
        </div>
        
    ) 
}

export default YourList; 