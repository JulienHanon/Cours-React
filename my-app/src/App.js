import './App.css';
import ExpenseItem from './component/ExpanseItem.js';

function App() {

const title = "Valeur titre"

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
      title={title}>
      </ExpenseItem>
    </div>  
  );
}

export default App;
