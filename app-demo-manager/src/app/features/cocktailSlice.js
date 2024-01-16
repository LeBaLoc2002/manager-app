import { createSlice } from '@reduxjs/toolkit';

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: {
    list: [], 
    searchTerm: '',
  },
  reducers: {
    setCocktail: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setCocktail, setSearchTerm } = cocktailSlice.actions;
export const selectCocktail = (state) => state.cocktails;
export default cocktailSlice.reducer;
