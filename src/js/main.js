import data from "./data.json"

const data-pokemon-row = document.querySelector("[data-pokemon-row]");
console.log(data-pokemon-row)

for (let pokemon of data){
 const div = document .createElement("div");
 div.classList.add("col");
 div.innerHTML = 
            `<div class="card">
              <img 
              src="${pokemon of data.image}"
               class="card-img-top" 
               alt="${pokemon of data .name"}
                />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="button" class="btn btn-primary">Go Somewhere</button>

              </div>
            </div>`

}
