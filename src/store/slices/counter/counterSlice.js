// "createSlice" es una función que recibe un objeto como argumento y RETORNA las "actions"

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'mycounter',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit nos permite escribir lógica "mutante" en reductores.
      // Él en realidad no muta el estado porque usa la biblioteca Immer,
      // que detecta cambios en un "estado de borrador" y produce un nuevo
      // estado inmutable basado en esos cambios
      state.counter += 1;
    },
  },
});

// Action creators: Las acciones se generan para cada función dentro del "reducers"
export const { increment } = counterSlice.actions;

// export default counterSlice.reducer;
