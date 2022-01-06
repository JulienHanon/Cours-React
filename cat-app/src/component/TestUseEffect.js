import React, {useState, useEffect, useCallback} from 'react'



function TestUseEffect () 
{
    
    const [count, setCount] = useState(0); 
    const fetchCatBreed = async () => 
    {
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await response.json(); 
        console.log(data); 
        
    }

    useEffect(() => {
        console.log(count); 
        return () => {
            console.log("J'arrête de compter"); 
        }
    }, [count])

    return(
        <button onClick={fetchCatBreed, () => setCount((c) => c +1)}>Test clique</button>
    )
}

export default TestUseEffect
