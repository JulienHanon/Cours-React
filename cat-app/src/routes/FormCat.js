
           <h2>FORMULAIRE</h2>
           <div>
           <button onClick={fetchCatBreed}>Ajout des races</button>
           <form onSubmit={formSubmissionHandler}>
               <label>
                    Nom :
                    <input id='name' type="text" name="name" />
                    Age : 
                    <input id='age' type="number" name="Age"/>
                    Race : 
                    <select id='breed'>
                        <option>{breed[0].breed}</option>
                        <option>{breed[1].breed}</option>
                        <option>{breed[2].breed}</option>
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
        </>
    );
}

export default FormCat;