import './CatList.css';

function CatList(){
    return (
        <div className='List'>
            <header className="TitleList">
                <h2> Your Cat's CatList</h2>
            </header>
            <body>
                <ul className="CatList">
                    <li>I'm a cat</li>
                    <li>I'm a cat</li>
                    <li>I'm a cat</li>
                    <li>I'm a cat</li>
                    <li>I'm a cat</li>
                    <p>          </p>
                </ul>
            </body>
        </div>
    ) 
}

export default CatList; 