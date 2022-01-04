import './CatList.css';

function CatList(){

    const CatName = ["Neko", "Kira", "Osiris", "Venus", "Nirvana"]; 
    const CatAge = [9, 1, 4, 2, 6]; 
    const CatRace = ["Ragdoll", "MainCoon", "Sphinx", "Sacré de Birmanie", "Norvegien"]
    const CatWeight = [3.2, 4.4, 4.2, 2.9, 3.4]; 

    return (
        <div className='List'>
            <header className="TitleList">
                <h2> Your Cat's CatList</h2>
            </header>
            <body>
                <ul className="CatList">
                    <li>{CatName[0]} - {CatAge[0].toString()} ans - {CatRace[0]} - {CatWeight[0].toString()}</li>
                    <li>{CatName[1]} - {CatAge[1].toString()} ans - {CatRace[1]} - {CatWeight[1].toString()}</li>
                    <li>{CatName[2]} - {CatAge[2].toString()} ans - {CatRace[2]} - {CatWeight[2].toString()}</li>
                    <li>{CatName[3]} - {CatAge[3].toString()} ans - {CatRace[3]} - {CatWeight[3].toString()}</li>
                    <li>{CatName[4]} - {CatAge[4].toString()} ans - {CatRace[4]} - {CatWeight[4].toString()}</li>
                    <p>          </p>
                </ul>
            </body>
        </div>
    ) 
}

export default CatList; 