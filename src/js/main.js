import data from "./data.json"
import PokemonCard from "./components/PokemonCard"

// DOM selection
// console.log(data-pokemon-row)


  // data.forEach(Pokemon);


  function renderPokemon(list){
    list.forEach((pokemonObj) =>{
      Pokemon(pokemonObj);
    })
  }
  renderPokemon(data);


 