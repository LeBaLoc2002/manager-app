import { createSlice } from '@reduxjs/toolkit';


const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: {
    list: [],
    searchResults: [],
  },
  reducers: {
    setCocktail: (state, action) => {
      state.list = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setCocktail, setSearchResults } = cocktailSlice.actions;
export const selectCocktail = (state) => state.cocktails;
export default cocktailSlice.reducer;
