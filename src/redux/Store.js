import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from "../redux/slices/TodoSlice"

export const Store = configureStore({
    reducer:TodoReducer
});