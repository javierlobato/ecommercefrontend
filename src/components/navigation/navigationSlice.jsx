import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,  // Estado para abrir/cerrar el menú de navegación
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;  // Cambia el estado de isOpen
    },
  },
});

export const { toggleMenu } = navigationSlice.actions;  // Exporta las acciones
export const navigationReducer = navigationSlice.reducer;  // Exporta el reducer
