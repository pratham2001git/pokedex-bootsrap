import arrayShuffle from "array-shuffle";
import Fuse from "fuse.js";
import "../scss/main.scss"
import data from "./data.json"  
import {Pokemon} from "./components/PokemonCard";

// custom types
interface pokemon{
  id:number;
  name:string;
  image:string;
  description:string;
  link:string;
  abilities:string[];
}
const inputEl = document.querySelector("input") as HTMLInputElement;
const dataRow = document.querySelector("[data-pokemon-row]") as HTMLDivElement;


// DOM selection
// console.log(data-pokemon-row)


  // data.forEach(Pokemon);


  function renderPokemon(list:Object[]):void {
    dataRow.textContent = "";
    if (!list.length){
      const pokemon = Pokemon({
        image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPok%25C3%25A9mon&psig=AOvVaw1cF9Ny-trXU077yR5tAgd-&ust=1729503382208000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDAsqjUnIkDFQAAAAAdAAAAABAE",
        name:"Not Found",
        description: "Try Another Search",
      
      }
    );
    dataRow.appendChild(pokemon);
    }
  
  
  list.forEach((pokemonObj) => {
    const pokemon = Pokemon(pokemonObj);
    dataRow.appendChild(pokemon);
  }
)}
renderPokemon(arrayShuffle(data));

document.addEventListener("keydown", (e:KeyboardEvent) =>{
  if (e.key==="/"){
    e.preventDefault();
    inputEl.focus();
  }
})
  function handleSearch(input: string): void {
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
  
 
  let debounceTimer:ReturnType<typeof setTimeout>;
  inputEl.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement
    debounceTimer = setTimeout(() => {

      const currentInput = (target.value.trim().toLowerCase());
      handleSearch(currentInput);
    }, 400);
  });
  