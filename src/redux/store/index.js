import { configureStore } from "@reduxjs/toolkit";
import sourceDataReducer from '../reducers/sourcedataSlice';
const store = configureStore({
    reducer:{
        sourceData : sourceDataReducer,
    },
});

export default store;