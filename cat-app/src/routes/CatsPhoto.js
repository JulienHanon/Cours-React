
import YourList from "../component/YourList";
import './../UI/Card.css';

function CatsPhotos(){
    return(
        
        <main className="card">
            <h2> All Cat's Photos</h2>
            <p> You can discover different photos of cats and like them ! </p>
            <YourList></YourList>        
        </main>
    ); 
}

export default CatsPhotos; 