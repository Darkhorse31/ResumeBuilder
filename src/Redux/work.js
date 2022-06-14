import {createSlice} from "@reduxjs/toolkit";
const workSlice=createSlice({
    name:"work",
    initialState:{
        value:{}
    },
    reducers:{
        addWorkData(state,{payload}){
            state.value=payload
        }
    }
})
export const {addWorkData} =workSlice.actions;
export default workSlice.reducer;