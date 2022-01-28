
const input = document.getElementById("nombre")
const boton = document.getElementById("buscar")
const pokemonContainer = document.getElementById("pokemon-container")
document.getElementById("myForm").reset();

boton.addEventListener("click", (e) => {
  e.preventDefault()
  traerPokemon(input.value)
})


function  traerPokemon (pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
          .then((res) => res.json())
          .then((data) => {
          crearPokemon(data)
          document.getElementById("myForm").reset();
  })

  //===============OBTENER DATOS APARTE=======================
  /*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //.then((res) => console.log(res))
    .then((res) => res.json())
    .then(data => console.log(data))*/
}
  //===============OBTENER DATOS APARTE=======================
  

traerPokemon()


function crearPokemon (pokemon) {
      const img = document.createElement("img")
      img.src = pokemon.sprites.front_default

      const h3 = document.createElement("h3")
      h3.textContent = pokemon.name

      const div = document.createElement("div")
      div.appendChild(img)
      div.appendChild(h3)

      pokemonContainer.appendChild(div)
}


