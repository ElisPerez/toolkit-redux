import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    // Este es el nombre de la propiedad del state
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});
