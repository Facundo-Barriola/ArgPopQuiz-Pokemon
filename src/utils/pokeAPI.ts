import type { PokemonData } from '@/types/pokemon';
import { promises } from 'dns';
const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonById( pokemonId : number): Promise<{
    id: number;
    name: string;
    sprite: string;
    types: string[];
    }> {
    const response = await fetch(`${POKEMON_API}pokemon/${pokemonId}`);
    
    if(!response.ok){
        throw new Error(`Error fetching pokemon with Id ${pokemonId} : ${response.statusText}`);
    }

    const data: PokemonData = await response.json();

    const pokemon = {
        id : data.id,
        name : data.name,
        sprite : data.sprites.front_default,
        types : data.types.map(typeInfo => typeInfo.type.name),
    };
    return pokemon;
}

export async function getPokemonsByAbilityId( abilityId : number) {
    const response = await fetch(`${POKEMON_API}ability/${abilityId}`);
    
    if(!response.ok){
        throw new Error(`Error fetching pokemons with abilityId ${abilityId} : ${response.statusText}`);
    }
    
    const data = await response.json();
    const pokemonList = data.pokemon.map((entry: any) => entry.pokemon);
    return pokemonList;
}