import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incCounter: (state, action) => {
      return state = state + 1;
    },
    decCounter: (state, action) => {
      return state = state - 1;
    },
  },
});

export const { incCounter, decCounter } = counterSlice.actions;
export default counterSlice.reducer;
