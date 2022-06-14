import { createSlice } from "@reduxjs/toolkit";
const basicSlice = createSlice({
  name: "basic",
  initialState: {
    value: {},
  },
  reducers: {
    addBasicData(state, {payload}) {
      state.value= payload;
    },
  },
});
export const { addBasicData } = basicSlice.actions;
export default basicSlice.reducer;
