import './ExpanseItem.css';
//import React, { useStat } from 'react';
import ExpanseIT from './test.js';



const ExpenseItem = (props) =>{

    //const [title, setTitle] = useState(props.title);
   // console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        //setTitle('updated');
        console.log('Clique !');
    };

    return(
        <div>
            <div className='Expense-text'>{props.title}</div>
            <div>{props.amount}</div>
            <ExpanseIT></ExpanseIT>

            <button onClick={clickHandler}>Change title</button>
        </div>
        
    ) ;
}

export default ExpenseItem;