import PokemonCard from "@/components/pokemon-card";
import { GetServerSideProps } from 'next';
import { getPokemonById } from "@/utils/pokeAPI";
import { PokemonData } from "@/types/pokemon";

export default function Home( pokemon : PokemonData) {
  console.log('Pokemon:', pokemon);

  return (
    <div className="container">
    <section className="py-24">
      <div className="container">
        <h1 className="text-3x1 font-bold">
          Argentina PopQuiz
        </h1>
      </div>
    </section>
    </div>
  );
}