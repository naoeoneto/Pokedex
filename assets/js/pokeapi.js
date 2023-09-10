const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((res) => res.json()); // novo fetch pra buscar detalhes dos pokemons
};

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url) // buscando a lista
    .then((res) => res.json()) // convertendo resultado pra json
    .then((resBody) => resBody.results) // separando apenas o que é relevante
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // nova requisição com os detalhes
    .then((pokemonRequests) => Promise.all(pokemonRequests)) // criando promises para cada uma das solicitações
    .then((details) => details) // exibindo os detalhes no navegador
    .catch((err) => console.error(err));
};
