 import Image from "next/image";
 import { PokemonData } from "@/types/pokemon";
const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

export default function PokemonCard(pokemon : PokemonData)
{
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center items-center h-64">
                <Image 
                className="rounded-t-lg content-center"
                src={pokemon.sprites.front_default} 
                alt={pokemon.name}
                width={150}
                height={150} />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                    {pokemon.name}
                </h5>
                
                <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                    {}
                </p>
            </div>
        </div>
    );
}