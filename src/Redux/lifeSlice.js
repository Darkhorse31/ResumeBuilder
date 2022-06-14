import { createSlice } from "@reduxjs/toolkit";
const lifeSilce = createSlice({
  name: "life",
  initialState: {
    value: {},
  },
  reducers:{
    addlifeSlice(state,{payload}){
       state.value=payload
    }
  }
});
export const {addlifeSlice} =lifeSilce.actions;
export default lifeSilce.reducer;
