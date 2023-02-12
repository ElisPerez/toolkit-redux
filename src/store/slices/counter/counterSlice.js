// "createSlice" es una función que recibe un objeto como argumento y RETORNA las "actions"

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'mycounter',
  initialState: {
    count: 10,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit nos permite escribir lógica "mutante" en reductores.
      // Él en realidad no muta el estado porque usa la biblioteca Immer,
      // que detecta cambios en un "estado de borrador" y produce un nuevo
      // estado inmutable basado en esos cambios
      state.count += 1;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1
    }
  },
});

// Action creators: Las acciones se generan para cada función dentro del "reducers"
export const { decrement, increment, incrementBy } = counterSlice.actions;

// export default counterSlice.reducer;
