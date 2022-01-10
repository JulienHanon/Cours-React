import React, { useState, useEffect } from 'react';

function Favorite(){

    const[fav, setFav] = useState(['']);

    const sendFavorite = async () => {
       try{
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json' ,
            'x-api-key': 'b97d2fc3-9baf-4e4f-870a-5d418ca10d62'
            },
            body: JSON.stringify(
                {
                "image_id":"asf2",
                "sub_id": "my-user-1234"
                })
        };

            const response = await fetch('https://api.thecatapi.com/v1/favourites', requestOptions);
            const data = await response.json();
            return data;
        } catch(e){
            return e;
        }
    }


        const fetchCatFav = async () =>{
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json' ,
                'x-api-key': 'b97d2fc3-9baf-4e4f-870a-5d418ca10d62'
                },
            };
            const response = await fetch('https://api.thecatapi.com/v1/images/search%27');
            const data = await response.json();
            const transformedFav = data.map((catFav) =>{
                return{
                    id: catFav.id,
                    image_id : catFav.id,
                    image : catFav.image,
                };
            });
            setFav(transformedFav);
            console.log("transformedFav",transformedFav);
            console.log("Fav",fav); 
         }



    return(
        <div>
            <button onClick={sendFavorite}>Envoyer</button>
            <button onClick={fetchCatFav}>Récuperer</button>
        </div>
    )

}

export default Favorite;