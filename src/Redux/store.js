import { configureStore } from "@reduxjs/toolkit";
import basicSlice from "./basicSlice";
import educationSlice from './educationSlice'
import lifeSilce from "./lifeSlice"
import workSlice from "./work"
const store=configureStore({
    reducer:{
        BasicData:basicSlice,
        EduData:educationSlice,
        lifeData:lifeSilce,
        workData:workSlice
    }
})
export default store;