import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../redux/studentSlice"


const store = configureStore({
    reducer: {
        studentReducer: studentSlice
    }
})


export default store