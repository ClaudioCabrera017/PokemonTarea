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
            <button onClick={fetchPokemon}> Fetch Pokemon</button>
            <ul>
        {Lista.length > 0 && Lista.map((currentPokemon, index)=>{
        return (<li key={index}>{currentPokemon.name}</li>)
        })}
        </ul>
    </div>
    );
}
export default Pokedex;
