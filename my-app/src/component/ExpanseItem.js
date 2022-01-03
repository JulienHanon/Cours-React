import './ExpanseItem';
import ExpanseIT from './test.js';

function ExpenseItem(props){
    return(
        <div>
            
            <div>{props.title}</div>
            <ExpanseIT></ExpanseIT>
        </div>
  
    ) ;
}

export default ExpenseItem;