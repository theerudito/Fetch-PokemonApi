
const input = document.getElementById("nombre")
const boton = document.getElementById("buscar")
const pokemonContainer = document.getElementById("pokemon-container")


function clearBox(pokemonContainer) { 
  document.getElementById(pokemonContainer).innerHTML = ""; }



boton.addEventListener("click", (e) => {
  e.preventDefault()
  traerPokemon(input.value)
  
})

//==================CON ASYNC Y AWAIT======================
const traerPokemon = async (pokemon) =>  {
      try { 
        const res = await  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}/`) //.toLowerCase()
        const data = await res.json()
        crearPokemon(data)
        document.getElementById("myForm").reset();
        console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  //==================CON ASYNC Y AWAIT======================


  //==================CON FUNCION============================
     /*

  function  traerPokemon (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then((res) => res.json())
            .then((data) => {
            crearPokemon(data)
            document.getElementById("myForm").reset();
    })
  
  
    //===============OBTENER DATOS APARTE=======================
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      //.then((res) => console.log(res))
      .then((res) => res.json())
      .then(data => console.log(data))
    //===============OBTENER DATOS APARTE=======================
  } 
  //==================CON FUNCION============================  
  */
   
    
traerPokemon()


function crearPokemon (pokemon) {

      const img = document.createElement("img")
      img.src = pokemon.sprites.front_default

      const nombre = document.createElement("h6")
      nombre.textContent = `Nombre: ${pokemon.name}`;

      const id = document.createElement("h6")
      id.textContent = `ID: ${pokemon.id}`;
      
      const stars = document.createElement("h6")
      stars.textContent = `Estadisticas: 
      ${pokemon.stats[0].stat.name}, ${pokemon.stats[0].base_stat}, ${pokemon.stats[1].stat.name}, ${pokemon.stats[1].base_stat} 
      ${pokemon.stats[2].stat.name}, ${pokemon.stats[2].base_stat} ${pokemon.stats[3].stat.name}, ${pokemon.stats[3].base_stat}`;

      const tamaño = document.createElement("h6")
      tamaño.textContent = `Tamaño: ${pokemon.weight}`;

      const tipo = document.createElement("h6")
      tipo.textContent = `Tipo: ${pokemon.types[0].type.name}`;
      

      const div = document.createElement("div")
      div.appendChild(img)
      div.appendChild(nombre)
      div.appendChild(id)
      div.appendChild(stars)
      div.appendChild(tamaño)
      div.appendChild(tipo)

      pokemonContainer.appendChild(div)
  }
