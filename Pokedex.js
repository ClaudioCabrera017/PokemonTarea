import { useState } from 'react';
const Pokedex = () => {
	const [Lista, setLista] = useState([]);

	const fetchPokemon = () => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
			.then(response => response.json())
			.then(response => setLista(response.results))
	};

	return (
		<div>
			<button  onClick={fetchPokemon}>Fetch pokemon</button>
			<div> { 
            Lista.map((item, index)=>(
                <div key={index} style={{ 
                    item}} >
                        <p>{item}</p>
                </div>
                
            ))
           
         }
         </div>
           
		</div>
    );
}
export default Pokedex;
