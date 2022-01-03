import './App.css';
import ExpenseItem from './component/ExpanseItem.js';


function App() {

const titre = "Titre !"
const somme = 92


  return (
    <div className='App'>
      <h1 className="header">Let's get started</h1>
      <ExpenseItem
      title={titre}
      somme={somme}
      >
      </ExpenseItem>
    </div>  
  );
}

export default App;
