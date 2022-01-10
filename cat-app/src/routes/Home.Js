import Card from "../UI/Card";
import './../UI/Card.css';
import './Home.css'; 
// On Renvoi Le Titre de la page Home avec la presentation du site ainsi que le background (présent dans le Home.css)
function Home(){
    return(
        <div className='home'>
            
            <h1 className="TextTitle">Just Cats.</h1>
            <div className="card">
                <main>
                    <h2> Welcome to your Cat site !!</h2>
                    <h3>On this site, you can create your own cat list and discover other cats around the world</h3>
                    <h3>You Like the photos you like et save your favorites one</h3>
                </main>
            </div>
        </div>
    ); 
}
export default Home; 