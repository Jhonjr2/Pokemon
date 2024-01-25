import { configureStore } from "@reduxjs/toolkit";
import trainer from './states/trainer_state'

export default configureStore({
    reducer: {
        trainer
    }
})