import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // Realizar petición http
    // With fetch()
    // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await res.json();

    // With Axios
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    // console.log({ data });

    dispatch(setPokemons({ page: page + 1, pokemons: data.results }));
  };
};
