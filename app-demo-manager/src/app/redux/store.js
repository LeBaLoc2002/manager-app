import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from '../features/cocktailSlice';

const store = configureStore({
  reducer: {
    cocktails: cocktailReducer,
  },
});

export default store;
