import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "edu",
  initialState: {
    value: {},
  },
  reducers: {
    addeduData(state, { payload }) {
      state.value = payload;
    },
  },
});
export const { addeduData } = educationSlice.actions;
export default educationSlice.reducer;
