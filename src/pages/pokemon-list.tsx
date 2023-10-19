import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import PokemonSearch from '../components/pokemon-search';
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
  }, []);

  /* Si l'on devait utiliser le hook personnalisé pour remplacer les 6 lignes ci-dessus nous devrions faire ceci :
    const pokemons = usePokemons();
  */
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        <PokemonSearch />
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        </div>
      <Link className='btn btn-large btn-floating waves-effect waves-light red z-depth-3' 
            style={{position: 'fixed', bottom: '25px', right: '25px'}}
            to="/pokemons/add">
        <i className='material-icons'>add</i>
      </Link>
      </div>
    </div> 
  );
}
  
export default PokemonList;