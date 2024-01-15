import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from '../features/cocktailSlice';

const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});

export default store;
