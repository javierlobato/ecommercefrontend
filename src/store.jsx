import { configureStore } from '@reduxjs/toolkit';
import { navigationReducer } from './components/navigation/navigationSlice'; // Ruta correcta

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,  // Reducer de la navegación
  },
});

export default store;


