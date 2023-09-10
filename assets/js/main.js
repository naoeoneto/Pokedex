function pokemonToHtml(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          <li class="type">Grass</li>
          <li class="type">Poison</li>
        </ol>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `;
}
const pokemonUl = document.getElementById("pokemon_list");

// pokeApi.getPokemons().then((pokeList = []) => {
//   const list = pokeList.map((pokemon) => {
//     return pokemonToHtml(pokemon);
//   });
pokeApi.getPokemons().then((pokeList = []) => {
  const list = pokeList.map(pokemonToHtml).join("");
  pokemonUl.innerHTML += list;
  console.log(pokemonUl);
});
