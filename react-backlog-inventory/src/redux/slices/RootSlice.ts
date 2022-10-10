import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice ({
    name: 'root',
    initialState: {
        title: "Title",
        system: "System",
        genre: "Genre",
        beaten: "Beaten",
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseSystem: (state, action) => { state.system = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload},
        chooseBeaten: (state, action) => { state.beaten = action.payload},
    }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseSystem, chooseGenre, chooseBeaten } = rootSlice.actions;