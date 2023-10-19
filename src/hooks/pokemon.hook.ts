/* Façon de créer un hook personnalisé */
import React, { FunctionComponent, useEffect, useState } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS)
    }, []);
}

export default usePokemons;