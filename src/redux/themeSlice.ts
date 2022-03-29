import { createSlice} from '@reduxjs/toolkit'


const themeSaved = localStorage.getItem('@minha-carteira:theme');


const initialState = () => {
    if(themeSaved){
        return {dark : JSON.parse(themeSaved)};
    }
    else{
        return {dark: true};
    }
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
    changeTheme: (state) => {
        state.dark = !state.dark;    
        localStorage.setItem('@minha-carteira:theme', JSON.stringify(state.dark));    
    }       

},

})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer
