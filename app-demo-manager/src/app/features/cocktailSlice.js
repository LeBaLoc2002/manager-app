import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: [] ,
    reducers: {
        setCocktail : (state, action) => {
            return action.payload;
        }
    }
})
export const { setCocktail } = cocktailSlice.actions;
export const selectCocktail = (state) => state.cocktail;
export default cocktailSlice.reducer;
