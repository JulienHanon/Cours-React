import './App.css';
import ExpenseItem from './component/ExpanseItem.js';


function App() {

const titre = "titre"
const amount = 92


  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem
      title={titre}
      amount={amount}
      >
      </ExpenseItem>
    </div>  
  );
}

export default App;
