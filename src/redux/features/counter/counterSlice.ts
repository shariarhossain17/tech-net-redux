import { createSlice } from "@reduxjs/toolkit";

export interface CounterInterface {
  count: number;
}
const initialState: CounterInterface = {
  count: 0,
};
const counterSlice = createSlice({
  name: "coutner",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
