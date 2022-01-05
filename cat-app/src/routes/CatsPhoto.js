import { Routes, Route, Link } from "react-router-dom";
import CatList from "../component/CatList";

function CatsPhotos(){
    return(
        <>
        <main>
            <h2> All Cat's Photos</h2>
            <p> You can discover different photos of cats and like them ! </p>
            <CatList></CatList>        
        </main>
        </>
    ); 
}

export default CatsPhotos; 