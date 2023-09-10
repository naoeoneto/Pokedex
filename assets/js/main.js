const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

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

fetch(url)
  .then((res) => res.json())
  .then((resBody) => resBody.results)
  .then((pokeList) => {
    for (let i = 0; i < pokeList.length; i++) {
      const pokemon = pokeList[i];
      pokemonUl.innerHTML += pokemonToHtml(pokemon);
    }
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("Deu tudo certo!"));
