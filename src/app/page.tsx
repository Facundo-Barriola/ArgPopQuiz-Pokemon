import PokemonCard from "@/components/pokemon-card";

export default function Home() {
  const pokemon = {
    id: 1,
    name: 'Bulbasaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'grass'
  };
  return (
    <div className="container">
    <section className="py-24">
      <div className="container">
        <h1 className="text-3x1 font-bold">
          Argentina PopQuiz
        </h1>
      </div>
    </section>
    <PokemonCard pokemon={pokemon}/>
    </div>
  );
}