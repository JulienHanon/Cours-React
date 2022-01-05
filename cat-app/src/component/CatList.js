import './CatList.css';
import Cat from './Cat.Js';

function CatList(props){

    const CAT = [
        {
            Id: 'C1', 
            Name: 'Neko',
            Age:  9, 
            Race: 'RagDoll',
            Weight: 3.4
        },
        {
            Id: 'C2',
            Name: 'Kira', 
            Age: 1, 
            Race: 'MainCoon', 
            Weight: 4.1
        }, 
        {
            Id: 'C3', 
            Name: 'Osiris', 
            Age: 4, 
            Race: 'Sphinx', 
            Weight: 2.9
        }
    ]

    return (
        <div className='List'>
            <header className="TitleList">
                <h2> Your Cat's CatList</h2>
            </header>
            <body>
                <ul className="CatList">
                    <li>{CAT[0].Name} - {CAT[0].Age.toString()} ans - {CAT[0].Race} - {CAT[0].Weight.toString()}kg</li>
                    <li>{CAT[1].Name} - {CAT[1].Age.toString()} ans - {CAT[1].Race} - {CAT[1].Weight.toString()}kg</li>
                    <li>{CAT[2].Name} - {CAT[2].Age.toString()} ans - {CAT[2].Race} - {CAT[2].Weight.toString()}kg</li>
                </ul>
            </body>
        </div>
    ) 
}

export default CatList; 