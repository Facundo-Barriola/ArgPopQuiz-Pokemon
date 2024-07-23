
export interface PokemonTypeInfo {
    type: {
        name: string;
    };
}

export interface PokemonSprites {
    front_default: string;
}   

export interface PokemonData {
    id: number;
    name: string;
    sprites: PokemonSprites;
    types: PokemonTypeInfo[];
}

