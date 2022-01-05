import './FormCat.css';

function FormCat(props){


    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log("Form submitted !")
        console.log(event.target.name.value)
        console.log(event.target.age.value)
        console.log(event.target.breed.value)
        console.log(event.target.height.value)
        console.log(event.target.weight.value)
      
    };

    return(
        <div  className='Cat-header'>   
           <h2>FORMULAIRE</h2>
           <div>
           <form onSubmit={formSubmissionHandler}>
               <label>
                    Nom :
                    <input id='name' type="text" name="name" />
                    Age : 
                    <input id='age' type="number" name="Age"/>
                    Race : 
                    <select id='breed'>
                        <option>RagDoll</option>
                        <option>MainCoon</option>
                        <option>Sphinx</option>
                    </select>
                    Taille :
                    <input id='height' type="number" name="Taille"/>
                    Poids :
                    <input id='weight' type="number" name="Poids"/>
                    

               </label>
               <div>
                     <input type="submit" value="Send" /> 
               </div>
              
           </form>
           </div>
           
        </div>
        
    );
}

export default FormCat;