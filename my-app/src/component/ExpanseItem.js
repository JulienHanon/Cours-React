import './ExpanseItem.css';
import React, { useState } from 'react';
import ExpanseIT from './test.js';



const ExpenseItem = (props) =>{

    const [title, setTitle] = useState(props.title);
    const [somme, setSomme] = useState(props.somme);

    const clickHandler = () => {
        setTitle('Updated !');
        console.log("Changement du titre");
    };
    const clickSomme = () => {
        setSomme(50);
        console.log("Changement de la somme");
    };

    return(
        <div className='Expense-header'>
            <h3>titre : {title}</h3>
            <h3>amount : {somme}</h3>
            <ExpanseIT></ExpanseIT>
            <div>
                <button onClick={clickHandler}>Change title</button>
                <button onClick={clickSomme}>Change Amount</button>
            </div>
           
        </div>
        
    ) ;
}

export default ExpenseItem;