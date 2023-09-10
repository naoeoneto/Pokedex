function pokemonTypesToHtml(pokeTypes) {
  return pokeTypes.map(
    (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
  );
}

function pokemonToHtml(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          ${pokemonTypesToHtml(pokemon.types).join("")}
        </ol>
        <img
          src="${pokemon.sprites.other.dream_world.front_default}"
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
