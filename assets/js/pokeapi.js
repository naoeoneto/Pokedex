const pokeApi = {};

pokeApi.getPokemons = (offset = 0, limit = 0) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((res) => res.json())
    .then((resBody) => resBody.results)
    .catch((err) => console.error(err));
};
