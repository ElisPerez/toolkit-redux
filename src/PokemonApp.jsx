import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {
  const { isLoading, page, pokemons } = useSelector(state => state.pokemons);
  // console.log(pokemons)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className='App'>
      <h1>PokemonApp</h1>
      <hr />

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {pokemons.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        NextPage
      </button>
    </div>
  );
};
