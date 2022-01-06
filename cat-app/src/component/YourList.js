import React, {useState} from 'react';
import './YourList.css';




function YourList(props){

    //const [currentcat, setCurrentCat] = useState(props.ListCat); 
    console.log(props.ListCat); 
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
                  {props.ListCat.map((cat) => (
                      <li key={cat.id}>{cat.name} - {cat.age} year 
                      -{cat.breed} - {cat.height} cm 
                      - {cat.weight} kg</li>
                  ))} 
                </ul>
        </div>
    ) 
}

export default YourList; 