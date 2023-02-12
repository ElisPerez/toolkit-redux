import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';

// Este "store" es el que tiene al state global de mi app.
// Cada reducer es una propiedad del "state" global.
// Para acceder al estado global seria con el hook useSelector:
// "const { counter, pokemons } = useSelector(state => state)"
export const store = configureStore({
  reducer: {
    // Este es el nombre de la propiedad del state
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
});
