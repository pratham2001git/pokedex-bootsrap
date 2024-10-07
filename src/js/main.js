import arrayShuffle from "array-shuffle";
import data from "./data.json"  
import {Pokemon} from "./components/PokemonCard"

const inputE1 = document.querySelector("input")
const dataRow = document.querySelector("[data-pokemon-row]")


// DOM selection
// console.log(data-pokemon-row)


  // data.forEach(Pokemon);


  function renderPokemon(list){
  dataRow.textContent = "";
    list.forEach((pokemonObj) =>{
      const pokemon = Pokemon(pokemonObj);
      dataRow.appendChild(pokemon)
    });
  }

  function handleSearch(input){
    const filteredPokemon = data.filter((pokemonObj)=>{
     return pokemonObj.name.toLowerCase().includes(input)
    });
    renderPokemon(filteredPokemon);
  }

  inputE1.addEventListener("input",(e)=>{
     handleSearch(e.target.value.trim().toLowerCase());
     handleSearch(currentInput)
    
  })

renderPokemon(arrayShuffle((data)));
 

// add slash to active search 
 document.addEventListener("keydown",(e)=>{
   if(e.key === "/"){
    e.preventDefault();
    inputE1.focus();
   }
 });