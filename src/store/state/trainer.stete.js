import { createSlice } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
    name: 'Pokedex',
    initialState: '',
    reducers: {
        setTrainer: (state, action) => action.payload
    }
})

export const { setTrainer } = trainerSlice.actions

export default trainerSlice.reducer