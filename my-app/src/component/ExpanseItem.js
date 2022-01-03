import './ExpanseItem.css';
import React, { useState } from 'react';
import ExpanseIT from './test.js';



const ExpenseItem = (props) =>{

    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        setTitle('Updated !');
    };

    return(
        <div>
            <h3>titre : {title}</h3>
            <h3>amount : {props.amount}</h3>
            <ExpanseIT></ExpanseIT>
            <button onClick={clickHandler}>Change title</button>
        </div>
        
    ) ;
}

export default ExpenseItem;