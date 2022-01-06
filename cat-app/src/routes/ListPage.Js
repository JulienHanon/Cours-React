
import YourList from "../component/YourList";
import './../UI/Card.css';

function ListPage(){
    return(
        <main className="card">
            <h2> This is Your Cat's List !!</h2>
            <p> Add your cat to create your list</p>
            <YourList></YourList>
        </main>
    ); 
}

export default ListPage; 