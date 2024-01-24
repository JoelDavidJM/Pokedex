import { configureStore } from "@reduxjs/toolkit";
import triner from './state/trainer.stete'

export default configureStore({
    reducer: {
        triner
    }
})