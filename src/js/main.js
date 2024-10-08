import arrayShuffle from "array-shuffle";
import Fuse from "fuse.js";
import data from "./data.json"  
import {Pokemon} from "./components/PokemonCard";

const inputEl = document.querySelector("input")
const dataRow = document.querySelector("[data-pokemon-row]")


// DOM selection
// console.log(data-pokemon-row)


  // data.forEach(Pokemon);


  function renderPokemon(list){
    dataRow.textContent = "";
    if (!list.length){
      const pokemon = Pokemon({
        image:"https://www.google.com/url?sa=i&url=%3A%2F%2Fwww.thegamer.com%2Ftag%2Fpokemon%2F&psig=AOvVaw2mRAPIURQWxIpo_bsRSrKI&ust=1728503015723000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOipsvPF_4gDFQAAAAAdAAAAABAE",
        name:"Not Found",
        description: "Try Another Search",
      
      }
    )
    dataRow.appendChild(pokemon)
    };
  
  
  list.forEach((pokemonObj) => {
    const pokemon = Pokemon(pokemonObj);
    dataRow.appendChild(pokemon);
  }
)}
renderPokemon(arrayShuffle(data));
doocument.addEventListener("keydown", (e) =>{
  if (e.key==="/"){
    e.preventDefault();
    inputEl.focus();
  }
})
  function handleSearch(input){
    const options = {
      keys: ["name"],
      threshold: 0.5,
    };
    const fuse = new Fuse(data, options);
  
    function performSearch() {
      if (!input) return data;
      const search = fuse.search(input);
      return search.map((obj) => obj.item);
    }
    const filteredPokemon = performSearch();
    renderPokemon(filteredPokemon);
  }
  
 
  let debounceTimer;
  inputEl.addEventListener("input", (e) => {
    debounceTimer = setTimeout(() => {
      handleSearch(e.target.value.trim().toLowerCase());
      handleSearch(currentInput);
    }, 500);
  });
  