import React, {useState} from 'react';
import './YourList.css';




function YourList(props){

    //const [listcat, setListCat] = useState([]); 

    // declarer avec useState un tableau a vide 
    // qui va accueillir plus tard les données à afficher 
    // ici la liste de chat qu'on pourra modifier grace
    // au formulaire

    return (
        <div className='List'>
            <header className="TitleList">
                <h2> Your Cat's CatList</h2>
            </header>
                <ul id="CatList">
                </ul>
        </div>
    ) 
}

export default YourList; 